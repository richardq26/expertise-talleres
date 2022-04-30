const response = require("../../helpers/response");
let tallerService = require("./service");

exports.buscarTaller = async (req, res) => {
  let {
    placa,
    distritoId,
    tipo,
    veha,
    masCercanos,
    direccionOrigen,
    lat,
    lng,
  } = req.queryStringParameters;
  let { status, resp } = await tallerService.buscarTaller(
    placa,
    distritoId,
    tipo,
    veha,
    masCercanos,
    direccionOrigen,
    lat,
    lng
  );
  return response(status, resp);
};

// exports.masCercanos = async (req, res) => {
//   let { lat, lng, direccion } = req.params;
//   let { status, resp } = await tallerService.masCercanos(lat, lng, direccion);
//   return response(status, resp);
// };
