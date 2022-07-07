const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url ==='/') {
        res.end ('Welcome to Home page')
    }
    if (req.url === '/about') {
        res.end ('Our history')
    }
    res.end (`<h1> Something's gone wrong </h1> 
    <p> Page you are looking for is missing </p> 
    <a href='/'> back home </a>`)


})

server.listen (5000)