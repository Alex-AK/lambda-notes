exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // primary key called id, int, auto-increment
    table.increments();
    table.string('name', 128).notNullable();
    table.timestamps(true, true);

    // foreign key references the id on roles table
    table
      .integer('roleId')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
