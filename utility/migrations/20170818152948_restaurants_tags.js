exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurants_tags', table => {
        table.integer('restaurant_id').notNullable().unsigned();
        table.integer('tag_id').notNullable().unsigned();
        table.foreign('restaurant_id').references('restaurant');
        table.foreign('tag_id').references('tag');
        table.primary(['restaurant_id', 'tag_id']);
    })
    
    // raw(`CREATE TABLE restaurants_tags (
    //     restaurant_id int(11) unsigned NOT NULL,
    //     tag_id int(11) unsigned NOT NULL,
    //     PRIMARY KEY (restaurant_id,tag_id),
    //     KEY tag_id (tag_id),
    //     CONSTRAINT restaurants_tags_ibfk_1 FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    //     CONSTRAINT restaurants_tags_ibfk_2 FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE NO ACTION ON UPDATE NO ACTION
    //   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants_tags');
};
