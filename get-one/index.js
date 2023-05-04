const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

server.get('/geeks/:id', db.getGeekById);

server.listen(3000);