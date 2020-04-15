import React from "react";

const Item = props => {
    return <li style={{ display: "inline-block", verticalAlign: "top" }}>{props.children}</li>;
};

export default () => {
    return (
        <ul className="social-links">
            <Item>
                <a
                    href="mailto:info@jonadams.co.uk"
                    className="twitter"
                    alt="Email me: info@jondams.co.uk"
                >
                    <i className="fa fa-envelope"></i>
                </a>
            </Item>
            <Item>
                <a
                    href="https://www.twitter.com/jonboy51"
                    target="_blank"
                    className="twitter"
                    alt="Go to my Twitter"
                    rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>


                </a>
            </Item>
            <Item>
                <a
                    href="https://www.linkedin.com/in/jonboy51"
                    target="_blank"
                    className="linkedin"
                    alt="Go to my Linkedin"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-linkedin"></i>
                </a>
            </Item>
            <Item>
                <a
                    href="https://github.com/jonadams51"
                    target="_blank"
                    className="github"
                    alt="Go to my Github"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-github-alt"></i>
                </a>
            </Item>
        </ul>
    );
}
