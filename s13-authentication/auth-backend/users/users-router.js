const router = require('express').Router();
const Users = require('./users-module');
const restricted = require('../auth/restricted-middleware');
const checkRole = require('../auth/check-role-middleware');

// logout handles on client side, must destroy token

// protect this route, only authenticated users should see it
router.get('/', restricted, checkRole('Student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users /* decodedToken: req.decodedJwt */ });
    })
    .catch(err => res.send(err));
});

module.exports = router;
