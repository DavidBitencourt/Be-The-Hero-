const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const { celebrate, Segments, Joi } = require("celebrate");
/* npm 
  Tipos de parâmetros
    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) -> request.query
    Route Params: Parâmetros utilizados para identificar recursos -> request.params
    Request Body: Corpo da requisição , utilizado para criar ou alterar recursos -> request.body
*/

/*
  Validando as requisições com o celebrate
*/
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentsController.create);
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentsController.index
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentsController.delete
);

routes.post("/sessions", SessionController.create);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
