const express = require('express');
const helmet = require('helmet');
// for production you set cors options with credentials option

// when using axios, do the following to allow headers
// import axios from 'axios'
// `axios.defaults.withCredentials = true;
// when doing across domain, you want to use tokens
const cors = require('cors');
// import bcrypt library
const bcrypt = require('bcryptjs');
// import session library
const session = require('express-session');
// if the server reloads, the sessions are destroyed since it default stores in memory
// to prevent this, add connect-session-knex
const KnexSessionStore = require('connect-session-knex')(session);

const db = require('./database/dbConfig.js');
const Users = require('./users/users-module.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// set configuration for sessions

const sessionConfig = {
  // generic name to make library identification more difficult
  name: 'bananafoobar',
  // store this in env
  secret: 'is it secret, is it safe',
  // mind your session length
  cookie: {
    maxAge: 1000 * 60 * 15, // in ms
    secure: false // used over https only, this is false for demo purposes
  },
  // cannot access cookie from js using document.cookie
  httpOnly: true,
  resave: false, // don't resave cookie unless there is a modification to cookie
  saveUninitialized: false, // laws against setting cookies automatically, need user consent

  store: new KnexSessionStore({
    // constructor function, moves session storage to
    knex: db, // pass in where knex is configured
    tablename: 'sessions', // creates new table to store session data
    sidfieldname: 'sid',
    createTable: true, // if no table exists, this library makes one
    clearInterval: 1000 * 60 * 60 // clear unused sessions data in ms
  })
};

// use sessions
server.use(session(sessionConfig));

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.post('/api/register', (req, res) => {
  let user = req.body;
  // generate hash from user's password
  const hash = bcrypt.hashSync(user.password, 16); // 2^n (not the actual number you pass)
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

server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // check that passwords match
      if (user && bcrypt.compareSync(password, user.password)) {
        // validate session here
        req.session.user = user;

        res
          .status(200)
          .json({ message: `Welcome ${user.username}!, have a cookie.` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const auth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ message: 'You shall not pass!' });
  }
};

server.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error occured');
      } else {
        res.json({ message: 'you are logged out' });
      }
    });
  } else {
    res.end();
  }
});

// protect this route, only authenticated users should see it
server.get('/api/users', auth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// no longer needed with session verification
// const auth = (req, res, next) => {
//   let { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         // check that passwords match
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
//       })
//       .catch(error => {
//         res
//           .status(500)
//           .json({ message: 'Unexpected error, please try again.' });
//       });
//   } else {
//     res.status(400).json({ message: 'No credentials provided' });
//   }
// };

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
