
exports.up = function(knex, Promise) {
  return knex.schema.createTable('breed', (table) => {
        table.increments().notNullable().primary();
        table.string('breed-type');
    })
    .createTable('dog', (table) => {
      table.increments().notNullable().primary();
      table.string('name').notNullable();
      table.integer('age').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.integer('zip').notNullable();
      table.integer('breed_id').unsigned().references('id').inTable('breed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog').dropTableIfExists('breed');
};
