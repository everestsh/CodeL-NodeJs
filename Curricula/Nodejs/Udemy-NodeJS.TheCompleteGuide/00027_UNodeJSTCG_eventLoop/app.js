
const http = require('http')


// m 1
// function rqListener(req, res){
// }
// http.createServer(rqListener);

// m 2
// http.createServer(function(req, res){
// })

// m 3
// http.createServer((req, res)=>{
// });

const server = http.createServer((req, res)=>{
    // console.log(req);
    // console.log("hello");
    // console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();
    // process.exit();
});
server.listen(3000);