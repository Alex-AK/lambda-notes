# Data Modeling

### References

- https://www.sqlite.org/c3ref/c_abort.html

### Important

### Data Modeling

- how to structure data based on the client requirements
-

### Homework

- dish: something a client can cook
- recipe: relates to dish, but only one, ie granny's tacos
- has more than one ingredient
- ingredients: relates to recipes, can be used in multiple recipes
- pick a dish and recipe, and return ingredients list

### Tips

- Data Modeling
  - look for the nouns, these are typically your entities (entities normally become tables)
    - students, tracks, cohorts, recipes, ingredients, etc
- REST
  - look for the nouns, these are typically your resources
    - students, tracks, cohorts, recipes, ingredients, etc
- Restrict on delete, cascade on update

### Data Relationships

- share the same primary key value between the two tables.
- add a foreign key in one table that points to the primary key of the other table. To make it a true one to one, the foreign key will be marked as unique.
- have a third table that holds the relationship, again the foreign keys of the extra table must be marked as unique.

- One to One
- One to Many
  - a customer can have many orders.
  - a user can have followers.
- Many to Many
  - an order can have many products and the same product will appear in many orders.
  - a book can have more than one author and an author can write more than one book.

### Data Normalization

- Normalization is the process of designing or refactoring your tables for maximum consistency and minimum redundancy.
- With objects, we’re used to denormalized data that is stored with ease of use and speed in mind. Non-normalized tables are considered an anti-pattern in relational databases.

### Anomalies

- Insert anomaly: When we cannot insert a row into the table because some of the dependent information is not yet known.
  - For example, we cannot create a new class record in the school database, because the record requires at least one student, and none have enrolled yet.
- Update anomaly: When information is duplicated in the database and some rows are updated but not others.
  - For example, say a record contains a city and a zipcode, but then the post office changes the zipcode.
  - If some of the records are updated but not others, some cities will have the old zipcodes.
- Delete anomaly: The opposite of an insert anomaly.
  - When we delete some information and other related information must also be deleted against our will.
  - For example, deleting the last student from a course causes the other course information to be also deleted.

### First Normal Form (1NF)

- When a database is in first normal form, there is a primary key for each row, and there are no repeating sets of columns that should be in their own table.

```
Unnormalized (column titles on separate lines for clarity):


Farm
    ID
    AnimalName1  AnimalBreed1  AnimalProducesEggs1
    AnimalName2  AnimalBreed2  AnimalProducesEggs2
1NF:


Farm
    ID

Animal
    ID  FarmID[FK Farm(ID)]  Name  Breed  ProducesEggs
Use a join to select all the animals in the farm:


SELECT Name, Farm.ID FROM Animal, Farm WHERE Farm.ID = Animal.FarmID;

```

### Second Normal Form (2NF)

- To be in 2NF, a table must already be in 1NF.
- Additionally, all non-key data must fully relate to the key data in the table.
- In the farm example, above, Animal has a Name and a key FarmID, but these two pieces of information are not related.
- We can fix this by adding a table to link the other two tables together:

```
Farm
ID

FarmAnimal
FarmID[FK Farm(ID)] AnimalID[FK Animal(ID)]

Animal
ID Name Breed ProducesEggs
Use a join to select all the animals in the farms:


SELECT Name, Farm.ID
FROM Animal, FarmAnimal, Farm
WHERE Farm.ID = FarmAnimal.FarmID AND
Animal.ID = FarmAnimal.AnimalID;

```

### Third Normal Form (3NF)

- A table in 3NF must already be in 2NF.
- Additionally, columns that relate to each other AND to the key need to be moved into their own tables. This is known as removing transitive dependencies.
- In the Farm example, the columns Breed and ProducesEggs are related. If you know the breed, you automatically know if it produces eggs or not.

```
Farm
ID

FarmAnimal
FarmID[FK Farm(ID)] AnimalID[FK Animal(ID)]

BreedEggs
Breed ProducesEggs

Animal
ID Name Breed[FK BreedEggs(Breed)]
Use a join to select all the animals names that produce eggs in the farm:

SELECT Name, Farm.ID
FROM Animal, FarmAnimal, BreedEggs, Farm
WHERE Farm.ID = FarmAnimal.FarmID AND
Animal.ID = FarmAnimal.AnimalID AND
Animal.Breed = BreedEggs.Breed AND
BreedEggs.ProducesEggs = TRUE;

```

### Creation of Views:

- see Screen Shot 2019-02-21 at 10.26.59 AM
