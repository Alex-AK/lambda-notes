const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// for production you set cors options with credentials option

// when using axios, do the following to allow headers
// import axios from 'axios'
// `axios.defaults.withCredentials = true;
// when doing across domain, you want to use tokens
// import bcrypt library

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
};
