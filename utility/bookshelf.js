const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(config);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin([require('bookshelf-modelbase').pluggable, 'registry']);

module.exports = bookshelf;