# Querying Data, Migrations, & Seeding

### References

- https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top
- https://www.sqlite.org/c3ref/c_abort.html
- https://www.w3resource.com/sql/joins/sql-joins.php

### Important

- Intensive data processing should be done on the server level
- rewatch the video from today (2/)

### Lesson

- performing single table queries.
- filtering data using where clause.
- sorting data.
- pagination.
- grouping data.
- performing multi-table queries using joins.
  -using Knex migrations.
- seeding test data using Knex.

### JOIN

- An SQL JOIN clause combines rows from two or more tables. It creates a set of rows in a temporary table.
- A JOIN works on two or more tables if they have at least one common field and have a relationship between them.
- There are several ways of writing joins, but the one shown here should work on all database management systems and avoid some pitfals, so we recommend it.

```
select * from employees
join departments on employees.department_id = departments.id

select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
from employees as e
join departments as d
  on e.department_id = d.id
order by d.name, e.last_name


SELECT  company.company_id,company.company_name,
foods.item_id,foods.item_name
FROM company,foods;

-- list of all orders with customer information
select customers.customerName, customers.country, orders.*
from customers
join orders on customers.customerId = orders.customerId

// don't use where to do joins, use the above syntax
-- select * from a, b where a.Id = b.aId

```

### Joining multiple tables together

- if you're writing 4+ joins, it's a sign the DB should probably be structured better

```
-- list of all orders with customer and employee information
select customers.customerName, customers.country, employees.firstName, employees.lastName, orders.*
from orders
inner join customers on customers.customerId = orders.customerId
inner join employees on employees.employeeId = orders.employeeId
order by customerId
```

### Examples

```
select c.customerName, c.country, (e.firstName || ' ' || e.lastName) as SoldBy, o.*
from customers as c left join orders as o
	on c.customerId = o.customerId
left join employees as e on e.employeeId = o.employeeId

select o.orderId, count(*) as itemsOrdered
from orders as o
inner join orderDetails as od on o.orderId = od.orderId
group by o.orderId
order by itemsOrdered desc

// my solution to getting top 5 products sold with product name
  select o.orderId, od.productId, od.quantity, productName
  from orders as o
  inner join orderDetails as od on o.orderId = od.orderId
  inner join products as p on od.productId = p.productId
  group by o.orderId
  order by od.quantity desc
  limit 5

// luis' solution
select p.ProductName, count(*) as Sold
from products as p
inner join OrderDetails as od on p.productId = od.productId
group by 1
order by Sold desc
limit 5

select p.ProductName, sum (od.quantity * p.price) as Revenue
from products as p
inner join OrderDetails as od on p.productId = od.productId
group by p.ProductName
order by Revenue desc
limit 5
offset 2 // this is pagination, prevents sending too much data
```

### Migrations

- database migration describes changes made to the structure of a database.
- adding new objects, like tables, or modifying existing ones like adding or removing a column or index from a table are all migrations.
- use migrations to build our database schema and evolve it over time using Knex command line interfact (CLI)

### Adding Migrations with Knex

- Let’s use knex migrations in an example.

  `npx knex init`

- Add zoos table
  - add a database folder, this will not get created automatically.
  - create migration for zoos table: knex migrate:make add_zoos_table
  - it will use the development environment by default, meaning it will work with sqlite3 in our case
  - notice warning
  - add useNullAsDefault: true, to the development key on knexfile.js
  - the migrations folder will be created automatically
  - open the newly created file. Each migration has an up and a down method.
  - the up and down function should return a promise.

```
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoos', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
      .string('name', 255)
      .notNullable()
      .unique('uq_zoo_name');
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('zoos');
};
```

- Apply latest migration.

  - `knex migrate:latest`
  - The database folder must exist, not created automatically.

- Open the database file using SQLBrowser and notice that the table was created and has the correct schema.
- Now, on to bears knex migrate:make add_zoos_table.

```
exports.up = function(knex, Promise) {
return knex.schema.createTable('bears', function(tbl) {
// primary key
tbl.increments('Id'); // or bigIncrements
tbl
.integer('zoo_id')
.notNullable()
.references('id')
.inTable('zoos');
tbl.string('species', 80).notNullable(); // .defaultTo('n/a')
tbl.string('latinNme', 80).notNullable(); // error on purpose
// tbl.timestamps(); // adds created_at and updated_at
tbl.timestamp('createdAt').defaultTo(knex.fn.now());
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('bears');
};
```

- Add new migration to correct spelling
  - knex migrate:make fix_bears_latinName

```
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('bears').then(function(exists) {
    if (exists) {
      return knex.schema.table('bears', function(tbl) {
        tbl.renameColumn('latinNme', 'latinName');
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('bears', function(tbl) {
    tbl.renameColumn('latinName', 'latinNme');
  });
};
```

- many to many

```
.createTable('zoo_bears', function(tbl) {
    tbl.integer('zoo_id').notNullable().references('id').inTable('zoos').onDelete('CASCADE');
    tbl.integer('bear_id').notNullable().references('id').inTable('bears').onDelete('CASCADE');
    tbl.primary(['zoo_id', 'bear_id']); // composite
})
```

Rollback a Migration

use knex migrate:rollback to rollback latest changes.
rollbacks done at the batch level, not migration level.
deleting the migrations folder and running latest again will run all migrations in the same batch. Rolling back will roll all migrations on the batch back.

### Seeding

### Knex

- Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift
- It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

### Knex Setup From Class

`npx knex init`

### Returning A Nested Array in an Object with Knex

```
const getProjectsById = id => {
  return db('projects as p')
    .select(
      'p.id',
      'p.name',
      'p.description',
      'p.completed',
      'a.id',
      'a.description',
      'a.notes',
      'a.completed'
    )
    .join('actions as a', 'a.project_id', 'p.id')
    .where('p.id', id)
    .then(result => {
      const project = {
        next:
          id > 0
            ? `http://localhost:5000/api/projects/${Number(id) + 1}`
            : null,
        previous:
          id < 2
            ? null
            : `http://localhost:5000/api/projects/${Number(id) - 1}`,
        projects: {
          id: result[0].id,
          name: result[0].name,
          description: result[0].description,
          completed: result[0].completed === 0 ? false : true,
          actions: result.map(item => ({
            id: item.id,
            description: item.description,
            notes: item.notes,
            completed: item.completed
          }))
        }
      };
      return project;
    });
};
```
