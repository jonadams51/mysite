import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const normaliseTag = tag => tag.trim().toLowerCase();

function BlogTags({ tags, selectedTag }) {
    if(!tags || tags.length === 0){
        return null;
    }

    const activeTag = selectedTag ? normaliseTag(selectedTag) : "";

    return (
        <ul className="blog-tags" aria-label="Post tags">
            {tags.map((tag, index) => {
                const isActive = activeTag && normaliseTag(tag) === activeTag;

                return (
                    <li key={`${tag}-${index}`} className={`blog-tag${isActive ? " blog-tag-active" : ""}`}>
                        <Link to={`/?tag=${encodeURIComponent(tag)}#blog`}>
                            {tag}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default BlogTags;
