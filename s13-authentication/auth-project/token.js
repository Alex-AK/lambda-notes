const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./database/dbConfig.js');
const Users = require('./users/users-module.js');

// store in env
const secret = 'you better store this secret in env file';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.post('/api/register', (req, res) => {
  let user = req.body;
  // generate hash from user's password
  const hash = bcrypt.hashSync(user.password, 5); // 2^n (not the actual number you pass)
  // override user.password with hash
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

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

  return jwt.sign(payload, secret, options);
}

server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // check that passwords match
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);
        res
          .status(200)
          .json({ message: `Welcome ${user.username}!, have a token.`, token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// switch to token auth
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
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

// logout handles on client side, must destroy token

// check role

function checkRole(role) {
  return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied, improper role.' });
    }
  };
}

// protect this route, only authenticated users should see it
server.get('/api/users', auth, checkRole('TA'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users /* decodedToken: req.decodedJwt */ });
    })
    .catch(err => res.send(err));
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
