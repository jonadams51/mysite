import React from "react";

const Item = props => {
    return <li style={{ display: "inline-block", verticalAlign: "top" }}>{props.children}</li>;
};

const SocialLinks = () => {
    return (
        <ul className="social-links">
            <Item>
                <a
                    href="mailto:info@jonadams.co.uk"
                    className="twitter"
                    aria-label="Email Jon Adams"
                >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
            </Item>
            <Item>
                <a
                    href="https://www.twitter.com/jonboy51"
                    target="_blank"
                    className="twitter"
                    aria-label="Jon Adams on Twitter"
                    rel="noopener noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true"></i>


                </a>
            </Item>
            <Item>
                <a
                    href="https://www.linkedin.com/in/jonboy51"
                    target="_blank"
                    className="linkedin"
                    aria-label="Jon Adams on LinkedIn"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </Item>
            <Item>
                <a
                    href="https://github.com/jonadams51"
                    target="_blank"
                    className="github"
                    aria-label="Jon Adams on GitHub"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-github-alt" aria-hidden="true"></i>
                </a>
            </Item>
        </ul>
    );
};

export default SocialLinks;
