import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import BlogTags from "./BlogTags";

function BlogListing(props) {
    const { posts, selectedTag } = props;

    return (
        <>
            <h1>Blog</h1>
            {selectedTag &&
                <div className="blog-filter">
                    <p className="text-center">Showing posts tagged <strong>{selectedTag}</strong></p>
                    <Link to="/#blog" className="blog-clear-filter-button">
                        Show all posts
                    </Link>
                </div>
            }

            <div className="blog-listing">
                {posts.length === 0 &&
                    <p className="blog-listing-empty text-center">No posts found for this tag.</p>
                }

                {posts.map((post, key) => {
                    const { url, created, title, summary, tags } = post;

                    return (
                        <div className="blog-item" key={key}>
                            <div className="blog-listing-title">
                                <p className="text-center">{created.format("Do MMMM YYYY")}</p>
                                <Link to={"/" + url + "#blog"}>
                                    <h2>{title}</h2>
                                </Link>
                                <BlogTags tags={tags} selectedTag={selectedTag} />
                                {summary && <p className="blog-listing-summary text-center">{summary}</p>}
                                <Link to={"/" + url + "#blog"} className="blog-read-more-button">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BlogListing;
