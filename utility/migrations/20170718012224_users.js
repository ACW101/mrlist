
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
    id int(11) unsigned NOT NULL AUTO_INCREMENT,
    name varchar(255) CHARACTER SET latin1 NOT NULL DEFAULT 'Unknown User',
    oauth_id varchar(255) CHARACTER SET latin1 DEFAULT '',
    oauth_provider varchar(255) CHARACTER SET latin1 DEFAULT '',
    email varchar(100) CHARACTER SET latin1 DEFAULT NULL,
    password varchar(255) CHARACTER SET latin1 DEFAULT NULL,
    created_at timestamp(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    updated_at timestamp(6) NULL DEFAULT NULL,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
