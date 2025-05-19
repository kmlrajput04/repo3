const express = require("express");
const mongoose = require("mongoose");
  const port = 3000;
const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

  
    app.listen(port, () => {
        console.log(`server is listening on http://localhost:${port}`);
    });

    app.get("/", (req, res) => {
        res.send("hello world");
    });

    app.get("/test", (req, res) => {
        res.send("test");
    });
