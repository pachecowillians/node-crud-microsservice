const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

server.put('/geeks/:id', db.updateGeek);

server.listen(3333);