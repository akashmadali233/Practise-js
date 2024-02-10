// creating the server
const http = require('http');

const server = http.createServer((req,res) => {
    //process.exit();
    const url = req.url;
    
    // if(url === '/'){
    //     res.write('<html>');
    //     res.write('<head><title>Enter Message</title></head>');
    //     res.write('<body><form action="/home" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
    //     res.write('</html>');
    //     return res.end();
    // }
    // res.setHeader('Content-type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My Fiest Page</title></head>');
    // res.write('<body><h1>Hello from my first Node JS Server</h1></body?');
    // res.write('</html>');
    // res.end();

    if (url === '/home'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
    }
    if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    }
    
});

server.listen(4000);