const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("lok:)  -welcome to my home page");
});

app.get('/about', (req, res) => {
    res.send("welcome to about page");
});

app.get('/contact', (req, res) => {
    res.status(200).send("welcome to contact page");
});

app.get('/temp', (req, res) => {
    res.send("welcome to my temp page");
});

app.listen(port, () => {
    console.log(`listening to port number ${port}`);
});