exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex('roles')
      // this deleted all records and resets id
      .truncate()
      // this enters new data into the table
      .then(function() {
        // Inserts seed entries
        return knex('roles').insert([
          { id: 1, name: 'Student' },
          { id: 2, name: 'PM' },
          { id: 3, name: 'TA' }
        ]);
      })
  );
};
