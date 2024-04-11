import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import App from "../src/App";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const app = express();
const router = express.Router();

// Function to get the Helmet data from React components
const extractHelmetData = () => {
  const helmet = Helmet.renderStatic();
  return {
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    link: helmet.link.toString(),
  };
};
// Function to render the HTML response with Helmet data
const renderHtmlWithHelmet = (data, html, helmetData) => {
  return data
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(
      "</head>",
      `${helmetData.meta}${helmetData.link}${helmetData.title}</head>`
    );
};

// const htmlPath = path.join(__dirname, "../dist/index.html");
// console.log(htmlPath);
//--1. Home Page
router.get("^/$", (req, res) => {
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
    // console.log(data);
    const helmetData = extractHelmetData();
    const finalHtml = renderHtmlWithHelmet(data, html, helmetData);
    res.send(finalHtml);
  });
});

// ---2 About Page
router.get("/about", (req, res) => {
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
    const helmetData = extractHelmetData();
    const finalHtml = renderHtmlWithHelmet(data, html, helmetData);
    res.send(finalHtml);
  });
});
// ---3 User Page
router.get("/:name", (req, res) => {
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
    const helmetData = extractHelmetData();
    const finalHtml = renderHtmlWithHelmet(data, html, helmetData);
    res.send(finalHtml);
  });
});

router.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(router);
app.listen(3000, () => {
  console.log("app is launched at 3000");
});
