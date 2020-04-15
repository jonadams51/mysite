import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";

ReactDOM.render(
    <HashRouter>
        <App>
            <Route exact path="/:url?" component={Home} />
        </App>
    </HashRouter>,

    document.getElementById("root")
);
