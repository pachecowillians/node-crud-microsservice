const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

server.get('/geeks', db.getGeeks);

server.listen(3331);