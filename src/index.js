import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/:url?" component={Home} />
        </App>
    </BrowserRouter>,

    document.getElementById("root")
);
