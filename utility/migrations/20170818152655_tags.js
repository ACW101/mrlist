exports.up = function(knex, Promise) {
    return knex.schema.createTable('tags', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
