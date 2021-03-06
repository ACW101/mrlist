exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('yelp_id').notNullable();
  });
}
//     `CREATE TABLE restaurants (
//         id int(11) unsigned NOT NULL AUTO_INCREMENT,
//         name varchar(100) NOT NULL DEFAULT '',
//         PRIMARY KEY (id)
//     ) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;`)
// };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
};
