const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    // res.send("<h1>lok:)  -welcome to my home page</h1>"); //html serve
    res.write("<h1>lok:)  -welcome to my home page</h1>");
    res.write("<h1>lok:)  -welcome to my home page again</h1>"); // connection continues
    res.send(); // connection closing
});

app.get('/about', (req, res) => {
    res.send("welcome to about page");
});

app.get('/contact', (req, res) => {
    res.status(200).send("welcome to contact page");
});

// app.get('/temp', (req, res) => {
//     res.send("welcome to my temp page");
// });


//json data
app.get('/temp', (req, res) => {
    res.send([{
        id: 1,
        name: 'lok',
    },
    {
        id: 1,
        name: 'lok',
    },
    {
        id: 1,
        name: 'lok',
    }



    ]);
});

app.listen(port, () => {
    console.log(`listening to port number ${port}`);
});