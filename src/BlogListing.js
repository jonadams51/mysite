import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function BlogListing(props) {
    return (
        <>
            <h1>Blog</h1>

            <div className="blog-listing">
                {props.posts.map((post, key) => {
                    const { url, created, title, hero } = post;

                    return (
                        <div className="blog-item" key={key}>
                            <div className="blog-listing-title">
                                <p className="text-center">{created.format("Do MMMM YYYY")}</p>
                                <Link to={"/" + url + "#blog"}>
                                    <h2>{title}</h2>
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
