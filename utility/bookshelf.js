const knex = require("knex")({
	client: "mysql",
	connection: {
		host: "127.0.0.1",
		user: "root",
		database: "mrlist",
		charset: "utf8",
	}
});
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin([require('bookshelf-modelbase').pluggable, 'registry']);

module.exports = bookshelf;