const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // record the event in logging system, to log when tampered tokens have been sent
        res.status(401).json({ message: 'You are not verified' });
      } else {
        // no need to send this back unless you need to extract information from it
        // this example, it's passing back role of student
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'You are not verified' });
  }
};
