# Inserting & Modifying Data

### References

- https://www.sqlite.org/c3ref/c_abort.html
- sqlite always returns the count of items that meet the query / items that were updates

### Important

- The relational model thinks in SETS (which is an array in JS)

### Lesson

- Inserting data.
- Updating data.
- Deleting data.
- Cascading updates and deletes.
- Using Knex to modify data from a Web API.

### Insert

- insert data into table
- values will be entered into columns in order

  - `insert into characters values ('Frodo', 33);`

- if extra columns exist, you have to use selective fields insert
- any field that is not listed will be inserted with a NULL value, if db has NOT NULL it will fail
- `insert into characters (name, age) values ('Frodo', 33);`

```
insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country) values ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", 111, "Middle Earth")
```

- inserting multiple records
- `insert into characters (name, age) values ('Bilbo', 111), ('Sam', 31), ('Pippin', 22);`

- We can use a combination of INSERT and SELECT to add data from one table into another.
- With this statement all records from the hobbits table get added to the characters table.
- `insert into characters select id, name, age from hobbits;`

### Setting up Knex

- check DB-Zoos for example of integration with server

### Modifying Data

- if no WHERE condition is provided all records in the table will be updated with the new values.

```
  update characters set
    name = 'Frodo Baggins',
    age = 34
  where name = 'Frodo'
```

`update customers set postalcode = 11122 where contactName = "Bilbo Baggins"`

### Deleting Data

```
delete from characters
where id = 3;
```

```
delete from customers where
NOT EXISTS (select * from orders where customers.customerId = orders.customerId)

OR

delete from customers where customerId not in (select customerId from orders);

```

### Layers

Client <> API < (query builder <> Adapter) > Data Store

### Object Relational Mapper

- We need to translate between Objects and Relations (tables)

  - in JS we think in objects {id, name, isActive}
  - relational DBs think like this [id, name, is_active]

- we could use a ORM (Object Relational Mapper )
- takes data out of table and converts it to objects
- takes objects and converts it for DB
- most ORMs include qeury builder - translates between a language and SQL statements
- ORMs have potential downside, speed, security
- Popular ORMs
  - Sequelize, promise based
  - Objecttion.js
  - waterline
  - knex

### Knex

- `yarn add knex`
- need a driver for the ORM to connect to the DB
  - `yarn add sqlite3`

### Examples

```
// knexfile.js

module.exports = {
  development: {
    client: 'sqlite3', // tells knex that we're using the SQLite3 driver we installed via npm
    connection: {
      filename: './db.sqlite3', // update this with the location of your database file
    },
    useNullAsDefault: true, // new configuration for SQLite
  },
};
```

```
// server

const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post('/characters', (req, res) => {
  const character = req.body;

  db.insert(character)
    .into('characters')
    .then(ids => {
      res.status(201).json(ids[0]); // responds with the id of the last record inserted
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.put('/characters/:id', (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('characters')
    .where('id', '=', id) // or .where({ id: id })
    .update(changes)
    .then(count => {
      // count === number of records updated
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Calling .del() without first filtering the records will result on the removal of all the records in the table, be careful!

server.delete('/characters/:id', (req, res) => {
  const { id } = req.params;

  db('characters')
    .where({ id }) // or .where(id, '=', id)
    .del()
    .then(count => {
      // count === number of records deleted
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(8000, () => console.log('Running on port 8000'));

```
