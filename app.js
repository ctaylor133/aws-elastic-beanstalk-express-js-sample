const express = require('express');
const app = express();
const port = 8080;
var http = require('http');

app.get('/', (req, res) => res.send('VERY stinky-butt!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
