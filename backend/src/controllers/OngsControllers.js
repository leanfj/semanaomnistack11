const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const data = await connection("ongs").select("*");

    return response.json(data);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, UF } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      UF,
    });

    return response.json({ id });
  },
};
