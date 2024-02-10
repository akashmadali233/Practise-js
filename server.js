// creating the server
const http = require('http');

const server = http.createServer((req,res) => {
    //process.exit();
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Fiest Page</title></head>');
    res.write('<body><h1>Hello from my first Node JS Server</h1></body?');
    res.write('</html>');
    res.end();
});

server.listen(4000);