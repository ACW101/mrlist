
// exports.up = function(knex, Promise) {
//   return knex.raw(
//     `CREATE TABLE friends (
//       id int(11) unsigned NOT NULL AUTO_INCREMENT,
//       name varchar(50) NOT NULL DEFAULT '',
//       email varchar(100) NOT NULL DEFAULT '',
//       user_id int(11) unsigned NOT NULL,
//       PRIMARY KEY (id),
//       KEY user_id (user_id),
//       CONSTRAINT friends_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
//     ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`
//   );
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('friends')
// };
