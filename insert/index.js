const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

const geeks = [];

server.post('/geeks', db.createGeek);

server.listen(3000);