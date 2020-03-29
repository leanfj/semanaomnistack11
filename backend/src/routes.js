const express = require("express");

const routes = express.Router();

routes.post("/", (req, res) => {
  const corpo = req.body;

  console.log(corpo);

  return res.json({
    evento: "Semana Omnistack 11",
  });
});

module.exports = routes;
