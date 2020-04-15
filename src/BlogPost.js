import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPost(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const { title, created, content } = props.post;

    return (
        <>
            <div className="blog-header">
                    <Link to="/" className="blog-back-button">
                        Back
                    </Link>

                    <div className="blog-title">
                        <h1>{title}</h1>
                        <p className="text-center">{created.format("DD MMMM YYYY")}</p>
                    </div>
                </div>

            <ReactMarkdown className="blog-content" source={content} />
        </>
    );
}

export default BlogPost;
