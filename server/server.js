import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const app = express();

// const htmlPath = path.join(__dirname, "../dist/index.html");
// console.log(htmlPath);
app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500), send("some Error Occured");
    }
    const html = ReactDomServer.renderToString(
      <StaticRouter location={req.url}>
        <Provider store={store}>
        <App />
        </Provider>
      </StaticRouter>
    );
    console.log(data);
    res.send(data.replace(`<div id="root"></div>`,`<div id="root">${html}</div>`));
  });
});
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.listen(3000, () => {
  console.log("app is launched at 3000");
});
