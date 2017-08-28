module.exports = {
    development: {
        client: "pg",
        connection: 'postgres://localhost:5432/mrlist-dev',
        migrations: {
            directory: __dirname + '/utility/migrations'
        }
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/utility/migrations'
        }
    }
}