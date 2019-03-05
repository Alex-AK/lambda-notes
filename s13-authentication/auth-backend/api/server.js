require('dotenv').config();
const express = require('express');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

const server = express();

const configureMiddleware = require('./middleware');
configureMiddleware(server);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;
