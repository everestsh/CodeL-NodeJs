
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
    console.log("hello");
    process.exit();
});
server.listen(3000);
