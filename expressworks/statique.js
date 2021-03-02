const express = require('express');

const app = express()

const [_node, _path, port, fileHtml ] = process.argv;

app.use(express.static(fileHtml)).listen(port,() => console.log(`Le serveur est lance sur le port : ${port}`))
