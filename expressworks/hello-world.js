const express = require('express');

const [_node, _path, port ] = process.argv;

const app = express().get('/home', (request, response) => response.end('Bonjour, monde !')).listen(port) 
