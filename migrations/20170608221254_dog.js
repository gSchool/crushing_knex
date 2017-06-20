exports.up = function(knex, Promise) {
  return knex.schema.createTable('breed', (table) => {
        table.increments('id').notNull().primary();
        table.string('breed').notNull();
    })
    .createTable('available_dog', (table) => {
      table.increments('id').notNullable().primary();
      table.string('name').notNull();
      table.integer('age').notNull();
      table.string('city').notNull();
      table.string('state').notNull();
      table.integer('zip').notNull();
      table.integer('breed_id').unsigned();
      table.foreign('breed_id').references('id').inTable('breed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog').dropTableIfExists('breed');
};
