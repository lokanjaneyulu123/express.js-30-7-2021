const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello from expressjs");
});

app.get("/about", (req, res) => {
    res.send("Welcome to about page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome ");
});  

app.listen(8000, () => {
    console.log("listening the port at 8000 in expressjs");
});
// API
// get-read
// post-create
// put-update
// delete-delete