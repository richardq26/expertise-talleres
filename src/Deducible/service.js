const { Deducible } = require("../../models");

module.exports = {
  getDeduciblesText: async () => {
    try {
      let resp = await Deducible.findAll({
        attributes: ["text"],
      });
      return { status: 200, resp };
    } catch (error) {
      return { resp: error.message, status: error.code };
    }
  },
  getDeduciblesByText: async (text) => {
    try {
      let resp = await Deducible.findAll({
        where: { text },
        attributes: [
          "deducible",
          "copago",
          "moneda",
          "tipo",
          "marca",
          "taller",
        ],
      });
      return { status: 200, resp };
    } catch (error) {
      return { resp: error.message, status: error.code };
    }
  },
};
