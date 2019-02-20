const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const server = express();

const knexConfig = {
  client: 'sqlite3',
  // since sqlite3 is file based, you just need a filename
  // if connecting to a server, you need:
  // url of server, username, password, and what db you want to connect to
  connection: {
    filename: './data/rolex.db3'
  },
  useNullAsDefault: true // needed for sqlite
};

// gives back an instance of knex that knows how to connect to your DB
const db = knex(knexConfig);

server.use(helmet());
server.use(express.json());

// list all roles

server.get('/api/roles', async (req, res) => {
  try {
    const roles = await db('roles');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a role by id
server.get('/api/roles/:id', async (req, res) => {
  try {
    const role = await db('roles')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
});

// this object would be held in another folder and imported, then you can access the obj for error messages
// this acts as a switch case
const errors = {
  '19': 'Another record with that value exists'
};

// create roles
server.post('/api/roles', async (req, res) => {
  try {
    // destructure array and get first id [id]
    const [id] = await db('roles').insert(req.body);

    const role = await db('roles')
      .where({ id })
      .first();
    res.status(201).json(role);
  } catch (error) {
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message });
  }
});

// post via promises, returns role upon completing post request
server.post('/api/roles/', (req, res) => {
  // get roles from the database
  const role = req.body;

  db.insert(role)
    .into('roles')
    .then(ids => {
      console.log(ids[0]);
      db('roles')
        .where({ id: ids[0] })
        .first()
        .then(role => {
          return res.status(201).json(role);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update roles
server.put('/api/roles/:id', async (req, res) => {
  // first find the record, then perform the actions
  // any changes you send will be made to all records that satisfy this query
  // query returns the count of items updates
  try {
    const count = await db('roles')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const role = await db('roles')
        .where({ id: req.params.id })
        .first();
      res.send(200).json({ message: 'User updated', role });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// remove roles (inactivtate the role)
server.delete('/api/roles/:id', async (req, res) => {
  try {
    const count = await db('roles')
      .where({ id: req.params.id })
      .delete();

    if (count > 0) {
      res.send(204).json({ message: 'Delete successful' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on ${port}`));
