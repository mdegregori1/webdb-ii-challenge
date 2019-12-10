const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>Sanity Test DB2!</h2>`);
  });

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
