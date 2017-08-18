
exports.up = function(knex, Promise) {
    return knex.raw(`CREATE TABLE tags (
        id int(11) unsigned NOT NULL AUTO_INCREMENT,
        user_id int(11) unsigned NOT NULL,
        name varchar(255) NOT NULL DEFAULT '',
        PRIMARY KEY (id),
        KEY user_id (user_id),
        CONSTRAINT tags_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
      ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;`)
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('tags');
};
