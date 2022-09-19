require('dotenv').config();


// module.exports = {
//   development: {
//     client: "mysql",
//     connection: {
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'password',
//         database: 'Weather_DB'
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: "./knex/migrations",
//     },
//     seeds: { directory: "./knex/seeds" },
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run("PRAGMA foreign_keys=ON", done);
//     },
//   },
// };


module.exports = {
  development: {
    client: "mysql",
    connection: {
        host: '104.197.219.14',
        port: process.env.SERVER_PORT,
        user: 'root',
        password: process.env.SERVER_PASSWORD,
        database: process.env.SERVER_DB
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys=ON", done);
    },
  },
};





