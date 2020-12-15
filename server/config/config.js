require('dotenv').config()
const DATABASE_PASS = process.env.DATABASE_PASS;

module.exports = {
  "development": {
    "username": "znhjrptk",
    "password": DATABASE_PASS,
    "database": "znhjrptk",
    "host": "suleiman.db.elephantsql.com",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "znhjrptk",
    "password": DATABASE_PASS,
    "database": "znhjrptk",
    "host": "suleiman.db.elephantsql.com",
    "dialect": "mysql"
  }
}
