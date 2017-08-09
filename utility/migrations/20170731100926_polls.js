
exports.up = function(knex, Promise) {
    return knex.raw(`CREATE TABLE polls (
        id int(11) unsigned NOT NULL AUTO_INCREMENT,
        user_id int(11) unsigned NOT NULL,
        restaurant_ids varchar(255) NOT NULL DEFAULT '',
        poll_counts varchar(255) NOT NULL DEFAULT '',
        text varchar(150) DEFAULT '',
        event_date date DEFAULT NULL,
        event_time time DEFAULT NULL,
        PRIMARY KEY (id),
        CONSTRAINT polls_ibfk_1 FOREIGN KEY (id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`)
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('polls')
};
 