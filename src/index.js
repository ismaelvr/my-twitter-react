import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";
import Home from "./components/Home";

import "./index.css";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);

//  <Route path="/home" component={Home} />

reportWebVitals();
