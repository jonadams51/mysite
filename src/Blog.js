import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";

import BlogListing from "./BlogListing";
import BlogPost from "./BlogPost";

const spreadsheetId = "1AX5TypApTwKzJgVT0qz9OkQ6AKkW8ZQWz_InI7Idtow";
const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq`;

const normaliseColumnName = column => {
    return column.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const parseCsvList = value => {
    if(!value){
        return [];
    }

    const tags = [];
    const characters = String(value).split("");
    let currentTag = "";
    let inQuotedTag = false;

    for(let index = 0; index < characters.length; index += 1){
        const character = characters[index];

        if(character === '"' && characters[index + 1] === '"'){
            currentTag += character;
            index += 1;
            continue;
        }

        if(character === '"'){
            inQuotedTag = !inQuotedTag;
            continue;
        }

        if(character === "," && !inQuotedTag){
            const tag = currentTag.trim();

            if(tag){
                tags.push(tag);
            }

            currentTag = "";
            continue;
        }

        currentTag += character;
    }

    const finalTag = currentTag.trim();

    if(finalTag){
        tags.push(finalTag);
    }

    return tags.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

const normaliseTag = tag => {
    return tag.trim().toLowerCase();
}

const parseSpreadsheetResponse = data => {
    let response = data;

    if(typeof data === "string"){
        const match = data.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);?$/);

        if(!match){
            throw new Error("Spreadsheet response was not in the expected format");
        }

        response = JSON.parse(match[1]);
    }

    if(response.status !== "ok"){
        throw new Error("Spreadsheet response was not successful");
    }

    const { table } = response;
    const columns = table.cols.map(column => normaliseColumnName(column.label || column.id));

    return table.rows.map(row => {
        return row.c.reduce((post, cell, index) => {
            post[columns[index]] = cell ? cell.f || cell.v : "";
            return post;
        }, {});
    });
}

const loadSpreadsheet = () => {
    return new Promise((resolve, reject) => {
        const callbackName = `spreadsheetCallback${Date.now()}${Math.floor(Math.random() * 100000)}`;
        const script = document.createElement("script");
        let timeoutId;

        const cleanup = () => {
            window.clearTimeout(timeoutId);
            delete window[callbackName];

            if(script.parentNode){
                script.parentNode.removeChild(script);
            }
        }

        window[callbackName] = data => {
            cleanup();
            resolve(data);
        };

        script.onerror = () => {
            cleanup();
            reject(new Error("Unable to load spreadsheet data"));
        };

        timeoutId = window.setTimeout(() => {
            cleanup();
            reject(new Error("Timed out loading spreadsheet data"));
        }, 15000);

        script.src = `${spreadsheetUrl}?tqx=${encodeURIComponent(`out:json;responseHandler:${callbackName}`)}`;
        document.head.appendChild(script);
    });
}

const fetchPosts = () => {
    return loadSpreadsheet()
        .then(data => {
            const rawData = parseSpreadsheetResponse(data);

            if(!Array.isArray(rawData)){
                throw new Error("Raw post data from API not an array");
            }

            if(rawData.length === 0){
                throw new Error("No raw post data found");
            }

            return rawData.map(post => {
                return {
                    url: post.url,
                    created: moment(post.created, 'YYYY-MM-DD'),
                    updated: moment(post.updated, 'YYYY-MM-DD'),
                    title: post.title,
                    summary: post.summary,
                    content: post.content,
                    status: post.status,
                    tags: parseCsvList(post.tags),
                    hero: post.hero,
                    heroTextColor: post.herotextcolor,
                }
            }).sort((a,b) => {
                return b.created.format('YYYYMMDD') - a.created.format('YYYYMMDD');
            });
        });
}

const Blog = () => {
    const { url } = useParams();
    const { search } = useLocation();
    const [loadingState, setLoadingState] = useState("loading");
    const [posts, setPosts] = useState([]);
    const selectedTag = new URLSearchParams(search).get("tag") || "";

    useEffect(() => {
        fetchPosts().then(posts => {
            setPosts(posts);
            setLoadingState("loaded");
        }).catch(e => {
            setLoadingState("error");
        });
    }, []);

    if(loadingState === "loading"){
        return (
            <>
                <h1>Blog</h1>
                <p className="text-center">Loading...</p>
            </>
        );
    }

    if(loadingState === "loaded") {
        const post = posts.find(post => post.url === url);
        if (post) return <BlogPost post={post}/>;

        const publishedPosts = posts.filter(post => post.status === "published");
        const visiblePosts = selectedTag
            ? publishedPosts.filter(post => post.tags.some(tag => normaliseTag(tag) === normaliseTag(selectedTag)))
            : publishedPosts;

        if (publishedPosts.length) return <BlogListing posts={visiblePosts} selectedTag={selectedTag}/>
    }

    return (
        <>
            <h1>Blog</h1>
            <p className="text-center">Blog content unavailable, please check back later!</p>
        </>
    );
}

export default Blog;
