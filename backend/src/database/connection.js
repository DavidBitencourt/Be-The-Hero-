const knex = require("knex");
const configuration = require("../../knexfile");
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;
//Conexão com o banco
const connection = knex(config);

module.exports = connection;
