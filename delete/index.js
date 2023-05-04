const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

server.delete('/geeks/:id', db.deleteGeek);

server.listen(3000);