const bookshelf = require("../utility/bookshelf");
require("./User")

let Poll = bookshelf.Model.extend({
	tableName: 'polls',
	hasTimestamps: false,
})

module.exports = bookshelf.model('Poll', Poll);