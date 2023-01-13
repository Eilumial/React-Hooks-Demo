import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import ListCrudFnc from './ListCrudFnc';
// import TableCrudFnc from "./TableCrud";
// import JSONView from "./JSONView";
// import App from './App';
// import App2 from './App2';
import RouterFnc from "./Router";
import { BrowserRouter} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <TableCrudFnc/> */}
    {/* <JSONView/> */}
    <BrowserRouter>
      <RouterFnc />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
