const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
/* npm 
  Tipos de parâmetros
    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) -> request.query
    Route Params: Parâmetros utilizados para identificar recursos -> request.params
    Request Body: Corpo da requisição , utilizado para criar ou alterar recursos -> request.body
*/
routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.post("/sessions", SessionController.create);

routes.get("/profile", ProfileController.index);

module.exports = routes;
