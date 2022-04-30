const response = require("../../helpers/response");
let deducibleService = require("./service");
const validateBody = require("../../helpers/validateBody");
const { getDeduciblesByTextDTO } = require("./validation");

exports.getDeduciblesText = async (req, res) => {
  let { status, resp } = await deducibleService.getDeduciblesText();
  return response(status, resp);
};

exports.getDeduciblesByText = async (event, context, callback) => {
  // Detalle: El validateBody utiliza joi para validar el schema según el body que se envíe
  event.body = JSON.parse(event.body);
  let { error } =
    validateBody(event.body, getDeduciblesByTextDTO);
  if (error) return error;

  let { status, resp } = await deducibleService.getDeduciblesByText(
    event.body.payload.texto
  );
  return response(status, resp);
};
