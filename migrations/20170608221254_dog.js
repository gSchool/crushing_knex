
exports.up = function(knex, Promise) {
  return knex.schema.createTable('breed', (table) => {
        table.increments().notNullable().primary();
        table.string('breed-type');
    })
    .createTable('dog', (table) => {
      table.increments().notNullable().primary();
      table.string('name');
      table.integer('age');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.integer('breed_id').unsigned().references('id').inTable('breed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog').dropTableIfExists('breed');
};
