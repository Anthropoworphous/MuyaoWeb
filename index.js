const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve("assets")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("assets", "html", "main.html"));
});

app.listen(80);