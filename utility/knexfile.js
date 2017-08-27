module.exports = {
    development: {
    client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            database: "development",
        }
    },
    production: {
        client: "mysql",
        connection: {
            host: process.env.JAWSDB_URL.hostname,
            user: process.env.JAWSDB_URL.username,
            password: process.env.JAWSDB_URL.password,
            database: "production"
        }
    }
}