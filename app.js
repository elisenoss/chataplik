const express = require('express');

const app = express();

app.get('/', (rewq, res) => {
    res.send('<h1> Dette skal være en chatapplikasjon!! </h1>');
});

app.listen(5000, () => {
    console.log('app listening on port 5000!');
});




//erstatte dette med min applikasjon. Her kan jeg kanskje bruke noe av det fra den andre?