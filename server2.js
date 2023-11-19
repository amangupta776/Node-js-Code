const fs = require('fs');
const http = require('http');
const path = require('path');
const server = http.createServer((req, res) => {
    const fpath = path.join(__dirname, 'index.html');
    const fpath2 = path.join(__dirname, 'style.css');

    if (req.url === '/') {
        fs.readFile(fpath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile(fpath2, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on port 8000');
});
