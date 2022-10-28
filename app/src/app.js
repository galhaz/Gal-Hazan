const express = require("express");
const appRouter = require("./routes");
const hbs = require("hbs");
const app = express();
const path = require("path");

const viewsPath = path.join(__dirname, "/templates/views");
const publicPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "/templates/partials");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(appRouter);
app.use(express.static(publicPath));

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialPath);

module.exports = { app };
