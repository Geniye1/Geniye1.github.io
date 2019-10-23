'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Make Express reference the main directory when serving files
app.use(express.static(__dirname + '/../'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../html/index.html'));
})

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname + '/../html/projects.html'));
})

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/../html/about.html'));
})

app.listen(port, function() {
    console.log('Server running on port: ' + port);
})