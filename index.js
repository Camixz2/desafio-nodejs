const http = require("http")

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain char-set:utf-8' });

    res.end("Ola mundo")

}).listen(3000)

console.log("Servidor rodando em: http://localhost:3000")


