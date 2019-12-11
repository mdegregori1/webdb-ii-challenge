// this file contains instructions knex needs to connect to the db

module.exports = {
  // teaches knex to connect to the development database
  development: {
    client: 'sqlite3', // the DB driver
    useNullAsDefault: true, //only needed when using SQLite3
    connection: {
      filename: './data/car-dealer.db3'
    },
    migrations: {
      directory: './data/migrations' // will be created automatically (same for seeds)
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};
