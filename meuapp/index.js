const express = require('express');
const db = require('./queries');

const server = express();

server.use(express.json());

const geeks = [];

server.get('/geeks', db.getGeeks);

server.post('/geeks', db.createGeek);

server.get('/geeks/:id', db.getGeekById);

server.put('/geeks/:id', db.updateGeek);

server.delete('/geeks/:id', db.deleteGeek);

server.listen(3000);