import React, {useEffect} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import ReactMarkdown from "react-markdown";

function BlogPost(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const { title, created, content } = props.post;

    return (
        <>
            <div className="blog-header">
                <div className="blog-title">
                    <h1>{title}</h1>
                    <p className="text-center">{created.format("DD MMMM YYYY")}</p>
                </div>
            </div>

            <ReactMarkdown className="blog-content" source={content} />

            <Link to="/#blog" className="blog-back-button">
                Back
            </Link>
        </>
    );
}

export default BlogPost;
