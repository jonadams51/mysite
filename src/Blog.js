import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import BlogListing from "./BlogListing";
import BlogPost from "./BlogPost";

const fetchPosts = () => {
    return axios
        .get(`https://spreadsheets.google.com/feeds/list/1AX5TypApTwKzJgVT0qz9OkQ6AKkW8ZQWz_InI7Idtow/1/public/values?alt=json`)
        .then(({ data }) => {
            const rawData = data.feed.entry;

            if(!Array.isArray(rawData)){
                throw new Error("Raw post data from API not an array");
            }

            if(rawData.length === 0){
                throw new Error("No raw post data found");
            }

            return rawData.map(post => {
                return {
                    url: post.gsx$url.$t,
                    created: moment(post.gsx$created.$t, 'YYYY-MM-DD'),
                    updated: moment(post.gsx$updated.$t, 'YYYY-MM-DD'),
                    title: post.gsx$title.$t,
                    content: post.gsx$content.$t,
                    status: post.gsx$status.$t
                }
            }).sort((a,b) => {
                return b.created.format('YYYYMMDD') - a.created.format('YYYYMMDD');
            });
        });
}

const Blog = () => {
    const { url } = useParams();
    const [loadingState, setLoadingState] = useState("loading");
    const [posts, setPosts] = useState([]);

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
        if (publishedPosts.length) return <BlogListing posts={publishedPosts}/>
    }

    return (
        <>
            <h1>Blog</h1>
            <p className="text-center">Error loading blog content, please check back later!</p>
        </>
    );
}

export default Blog;
