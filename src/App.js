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
                    <img alt="JA Logo" src={Logo} className="logo" width="1000" height="1000" />
                </Link>

                <h1>
                    Jon Adams
                    <span>Senior Software Engineer, Bournemouth, UK</span>
                </h1>
            </header>

            <main className="content">
                {props.children}
            </main>

            <footer>
                <p>Thanks for stopping by!</p>
                <SocialLinks />
            </footer>
        </div>
    );
};

export default App;
