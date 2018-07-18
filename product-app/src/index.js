// bootstrap react app into browser

import ReactDOM from "react-dom";
import React from "react";


import App from "./app/App";

import store from "./app/store";
import {Provider} from 'react-redux';

//Real DOM
let rootElement = document.getElementById("root");

// Universal data flow
// Virtual DOM ==> REAL DOM
ReactDOM.render(
           <Provider store={store}>
              <App/>
              </Provider>,
         rootElement);