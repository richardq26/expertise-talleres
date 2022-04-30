const response = require("../../helpers/response");
let distritoService = require("./service");

exports.getDistritos = async (req, res) => {
  let { status, resp } = await distritoService.getDistritos();
  return response(status, resp);
};


