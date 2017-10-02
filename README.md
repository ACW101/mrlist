# My Restaurant List

My Restaurant List is a web app that help manages Yelp bookmarks by TAG and send dinner invitation/create poll based on users' curated restaurant list.

## Tech Stack
[MERN](https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50) without MongoDB because I want a relational database for complex relationships between bookmarks and user data.
[Here](https://www.reddit.com/r/node/comments/2vn542/why_everybody_uses_nodejs_with_mongodb/) is a good debate on why most default MongoDB as their node.js database choice.
## Getting Started
```
// install server-side dependency and start nodemon server.js
npm install
npm run dev

// install client-side dependency and run webpack
cd src && npm install
npm run dev
```

### Prerequisites

[node.js](https://nodejs.org/en/) and npm needs to be installed(v8.1.2)

PostgreSQL must be installed on local machine by following the [installation guide](https://www.postgresql.org/download/) and [documentation](https://www.postgresql.org/docs/10/static/tutorial-install.html)

### Database Configuration

Since this project utilize Knex.js to manage query and migration, the project should be able to run on all three supported database engines by configuring the knexfile.js.
I have tested on MYSQL and PostgreSQL.

```
./utility/knexfile.js
// this is a configuration for PostgreSQL. 
module.exports = {
    development: {
        client: "pg",
        connection: 'postgres://localhost:5432/mrlist-dev',
        migrations: {
            directory: __dirname + '/migrations'
        }
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/migrations'
        }
    }
}
```

To use the migration functionality to set up database schema, make sure knex is installed globally

```
npm i -g knex
```

to migrate, run under ./utility:
```
knex migrate:latest
```

## Live on Heroku

The project is still under development and can be viewed live at [Heroku](https://mrlist-app.herokuapp.com/)

## Built With

* [Express.js](https://github.com/expressjs) 
* [PostgreSQL](https://www.postgresql.org/) 
* [React](https://github.com/facebook/react) 
* [Redux](https://github.com/reactjs/redux/tree/master/logo) 
* [Passport.js](https://github.com/jaredhanson/passport) 
* [Knex.js](https://github.com/tgriesser/knex) 
* [bookshelf](https://github.com/bookshelf/bookshelf)

## Contributing

Please contact me at [kevinwangdev@gmail.com](mailto:kevinwangdev@gmail.com).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Kevin Wang** - *Initial work*

## License

This project is licensed under the MIT License
