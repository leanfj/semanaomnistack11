const express = require("express");

const sessionsControllers = require("./controllers/SessionsControllers");
const ongsControllers = require("./controllers/OngsControllers");
const incidentsControllers = require("./controllers/IncidentsControllers");
const ongProfilerControllers = require("./controllers/OngProfilerControllers");

const routes = express.Router();

routes.post("/sessions", sessionsControllers.create);

routes.get("/ongs", ongsControllers.list);
routes.post("/ongs", ongsControllers.create);

routes.get("/profile", ongProfilerControllers.listIncidents);

routes.get("/incidents", incidentsControllers.list);
routes.post("/incidents", incidentsControllers.create);
routes.delete("/incidents/:id", incidentsControllers.delete);

module.exports = routes;
