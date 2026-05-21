import React, {useEffect} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import ReactMarkdown from "react-markdown";

function BlogPost(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const { title, created, content, hero, heroTextColor } = props.post;
    const heroTitleStyle = {
        backgroundImage: "url(" + hero + ")",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backgroundSize: "cover",
        color: heroTextColor || "white",
        resize: "both",
    };

    return (
        <>
            <div className="blog-header">
                <div className="blog-title" style={heroTitleStyle}>
                    <h1>{title}</h1>
                    <p className="text-center">{created.format("Do MMMM YYYY")}</p>
                </div>
            </div>

            <div className="blog-content">
                <ReactMarkdown source={content} />

                <div className="blog-back">
                    <Link to="/#blog" className="blog-back-button">
                        Back
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BlogPost;
