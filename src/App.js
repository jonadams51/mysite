import React from "react";
import { Link } from "react-router-dom";

import "./sass/index.scss";

import Logo from "./img/logo-large.png";
import SocialLinks from "./SocialLinks";

const App = props => {

    return (
        <div className="container">
            <header>
                <Link to="/">
                    <img alt="JA Logo" src={Logo} className="logo" />
                </Link>

                <h1>
                    Jon Adams
                    <span>Full-Stack Web Developer, Bournemouth, UK</span>
                </h1>
            </header>

            <div className="content">
                {props.children}
            </div>

            <footer>
                <p>Thanks for stopping by!</p>
                <SocialLinks />
            </footer>
        </div>
    );
};

export default App;
