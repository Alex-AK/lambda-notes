// every change that happens to your db
// you can rerun the migration to get the db synced up to the exact commit

exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(table) {
    // primary key called id, int, auto-increment
    table.increments();
    table
      .string('name', 128)
      .notNullable()
      .unique();
    table.timestamps(true, true);
    // another field
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
