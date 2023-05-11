const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

server.post('/geeks', db.createGeek);

server.listen(3330);