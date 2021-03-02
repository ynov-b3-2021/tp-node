const map = require("through2-map");
const http = require("http");

const [_node, _path, port] = process.argv;

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405);
    res.end(`Erreur: La méthode ${req.method} n'est pas autorisée`);
    return;
  }

  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);
