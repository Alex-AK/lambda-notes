require('dotenv').config();
const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets');

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about (user, admin)
    username: user.username,
    roles: ['Student']
    // ...other data
  };

  const options = {
    expiresIn: '1d'
    // jwtid would go here
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
