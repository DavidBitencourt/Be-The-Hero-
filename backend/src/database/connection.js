const knex = require("knex");
const configuration = require("../../knexfile");
//Conexão com o banco
const connection = knex(configuration.development);

module.exports = connection;
