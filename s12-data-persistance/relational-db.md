# Relational Databases

### References

- https://dzone.com/articles/sqlite-vs-mysql
- https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool
- https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top
- https://www.w3resource.com/sqlite/operators.php

### Important

### SQLite vs MySQL: https://dzone.com/articles/sqlite-vs-mysql

- SQLite - the database consists of a single file on the disk, which makes it extremely portable and reliable.
- MySQL - secured, which makes it highly advanced, can be used at-scale

### SQL vs NoSQL: https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool

- SQL databases are table based databases whereas NoSQL databases are document based, key-value pairs, graph databases or wide-column stores.
- ## SQL databases represent data in form of tables which consists of n number of rows of data.
- NoSQL databases are the collection of key-value pair, documents, graph databases or wide-column stores which do not have standard schema definitions which it needs to adhered to.
  - designed for specific use cases

### Overview

- SQL is a standard, that means that most RDBMS will support a set of core commands.
- learning the standard is a great start as the knowledge will transfer between database products.
- most vendors support SQL standard to connect with their DBs
- SQLite Studio is a nice GUI to make databases
- we are using SQLite because it's easy to install and get started
- picking other DBMS's get in the way of initial relational DB learning
- different vendors will have their own tooling for interacting with DB
- paid tools generally connect to any DB

### Relational Databases?

- tables
  - a table is a relation (mathematic term)
  - requires predetermined schema, structure of data
  - tables are related to each other
  - table scan (slow) - starts at the beginning, flips pages until it finds item
- indexes
  - makes searching for data much easier and faster
  - like searching for p, and then starting the search from that point
- views
  - return filtered data based on query
  - ex. top 10 customers based on spending
- store procedures and functions
  - return top 10 customers
- triggers
  - events for the DB, when someone inserts a record, execute some code
  - watching for changes in table data

### Data Base Management Systems

- Relational (SQL): SQLite, MySQL, Oracle, etc
- Document Model (NoSQL): MongoDB,
- This is how you interact with the DB, which is a file you don't work in

### Standard Structured Query Language (SQL) Commands

- Data Definition Language (DDL): used to modify database objects. Some examples are: CREATE TABLE, ALTER TABLE and DROP TABLE.
- Data Manipulation Language (DML): used to manipulate the data stored in the database. Some examples are: INSERT, UPDATE and DELETE.
- Data Query Language (DQL): used to ask questions about the data stored in the database. The most commonly used SQL command by far is SELECT, and it falls in this category.
- Data Control Language (DCL): used to manage database security and user’s access to data. This falls into the realm of Database Administrators. Some examples are: GRANT and `REVOKE.
- Transaction Control Commands: used for managing groups of statements that must execute as a unit or not execute at all. Examples are COMMIT and ROLLBACK.
  - multiple conditions occuring at the same time, if one fails, DB rolls back.
  - taking money from an ATM, you must get the money before the account subtracts from your account

### Code

- usually don't need semicolons
- brackets needed if there are spaces in the column name, don't do this
- queries may or may not be case sensitive based on tooling and database administrator

```
-- show customer information from place
SELECT customerId, customerName, city, country, *
FROM Customers
where country = 'France' or city = 'Paris';

-- show category with id of 2
SELECT CategoryName FROM [Categories]
WHERE CategoryID = 2

-- show highest priced items first, if matching price, order alphabetically by name
SELECT * FROM Products
ORDER BY price desc, productName


-- only products that cost more than $50
select * from products
where price > 50
order by price desc, productName
```

### Functions

- length, trim, replace, etc

```
select count(*) as nRecords from orderDetails

select customerName as Name, contactName as Contact, length(customerName) as NameLength from customers

-- return unique cities from customers
selected distinct(city) from customers
where city like '%ar%'
order by city
```

### Creating Tables

- every table should have a unique primary key, DB increments automatically
- data types are dependant on tooling, SQLite is very simple
- storing names in varchar (255) gives you max of 255, only stores letters entered, not all the way to 255 in white space

### Which to Choose?

- Document Model Data Base
  - when you don't know what your data schema will be
  - DB is using objects, data is flexible as it comes in
- Relational Data Base
  - levels of relationships
    - customer has order, order has details, details refer to a product
  - DB must be predefined
