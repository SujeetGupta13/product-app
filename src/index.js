// bootstrap react app into browser

import ReactDOM from "react-dom";
import React from "react";


import App from "./app/App";

//Real DOM
let rootElement = document.getElementById("root");

// Universal data flow
// Virtual DOM ==> REAL DOM
ReactDOM.render(React.createElement(App), rootElement);