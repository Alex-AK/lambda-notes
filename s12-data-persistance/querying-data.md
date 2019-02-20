# Querying Data, Migrations, & Seeding

### References

- https://www.sqlite.org/c3ref/c_abort.html

### Important

### Lesson

- performing single table queries.
- filtering data using where clause.
- sorting data.
- pagination.
- grouping data.
- performing multi-table queries using joins.
  -using Knex migrations.
- seeding test data using Knex.

### Querying Data

### Joining Tables

- An SQL JOIN clause combines rows from two or more tables. It creates a set of rows in a temporary table.
- A JOIN works on two or more tables if they have at least one common field and have a relationship between them.
- JOIN keeps the base tables (structure and data) unchanged.
- The SQL EQUI JOIN is a simple SQL join uses the equal sign(=) as the comparison operator for the condition. It has two types - SQL Outer join and SQL Inner join.
- The SQL NON EQUI JOIN is a join uses comparison operator other than the equal sign like >, <, >=, <= with the condition.
- inner join
  - This type of EQUI JOIN returns all rows from tables where the key record of one table is equal to the key records of another table.
- outer join
  - This type of EQUI JOIN returns all rows from one table and only those rows from the secondary table where the joined condition is satisfying i.e. the columns are equal in both tables.

```
SELECT  company.company_id,company.company_name,
foods.item_id,foods.item_name
FROM company,foods;
```

### Migrations

### Seeding

### Knex

- Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift
- It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.
