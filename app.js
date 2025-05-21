const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require ('path');
const port = process.env.PORT || 3001;
const app = express();
const staticPath = path.join(__dirname,"public");



app.use(express.json());
app.use(cors());
app.use(express.static(staticPath));
// app.use(express.urlencoded ({extended:true}));

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req , res )=> {
const homePagePath = path.join(__dirname,"public", "index.html");
res.sendFile(homePagePath);
})

// app.post ("/contact", (req, res) => {
//     console.log(res.body);
//     res.redirect("/");
// })



//404 page 

app.use ((req , res ) =>{
return res 
.status(404)
.sendFile(path.join(__dirname, "views", "404.html"));
});

    app.listen(port, () => {
        console.log(`server is listening on http://localhost:${port}`);
    });

