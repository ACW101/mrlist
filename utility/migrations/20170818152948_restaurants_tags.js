
exports.up = function(knex, Promise) {
    return knex.raw(`CREATE TABLE restaurants_tags (
        restaurant_id int(11) unsigned NOT NULL,
        tag_id int(11) unsigned NOT NULL,
        PRIMARY KEY (restaurant_id,tag_id),
        KEY tag_id (tag_id),
        CONSTRAINT restaurants_tags_ibfk_1 FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT restaurants_tags_ibfk_2 FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE NO ACTION ON UPDATE NO ACTION
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants_tags');
};
