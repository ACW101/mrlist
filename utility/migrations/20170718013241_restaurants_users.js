
exports.up = function(knex, Promise) {
    return knex.raw(`
        CREATE TABLE restaurants_users (
            id int(11) unsigned NOT NULL AUTO_INCREMENT,
            user_id int(11) unsigned NOT NULL,
            restaurant_id int(11) unsigned NOT NULL,
            PRIMARY KEY (id),
            KEY user_id (user_id),
            KEY restaurant_id (restaurant_id),
            CONSTRAINT restaurants_users_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
            CONSTRAINT restaurants_users_ibfk_2 FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) ON DELETE NO ACTION ON UPDATE NO ACTION
        ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
    `)
 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants_users')
};
