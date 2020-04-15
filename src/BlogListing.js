import React from "react";
import { Link } from "react-router-dom";

function BlogListing(props) {
    return (
        <>
            <h1>Blog</h1>
            <p className="text-center">I blog about anything I want to remember, not necessarily just dev stuff!</p>

            <div className="blog-listing">
                {props.posts.map((post, key) => {
                    const { url, created, title } = post;

                    return (
                        <div className="blog-item" key={key}>
                            <div className="blog-listing-title">
                                <Link to={"/" + url}>
                                    <p className="text-center">{created.format("Do MMMM YYYY")}</p>
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
