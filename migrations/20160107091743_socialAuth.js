exports.up = function(knex, Promise) {
  return knex.schema.createTable('auth', function(table){
      table.increments();
      table.string('username');
      table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auth')
};
