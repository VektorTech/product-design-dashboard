const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url);
    let file = null;

    if(req.url == '/'){
        file = fs.createReadStream( path.join(__dirname, "index.html") );
    } else {
        file = fs.createReadStream(filePath);
    }
    res.writeHead(200);
    file.pipe(res);
}).listen(process.env.PORT || 8000);

console.log("Server started on port: 8000");