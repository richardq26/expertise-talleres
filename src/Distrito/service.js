const { Distrito } = require("../../models");

module.exports = {
  getDistritos: async () => {
    try {
      let resp = await Distrito.findAll({
        attributes: ["id", "nombre"],
      });
      return { status: 200, resp };
    } catch (error) {
      return { resp: error.message, status: error.code };
    }
  },

};
