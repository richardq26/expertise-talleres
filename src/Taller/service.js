const { Taller } = require("../../models");
const axios = require("axios");
const calculateDistance = require("../../helpers/calculateDistance");
const { API_KEY_GEOCODING, API_KEY_MATRIX } = require("../../config/envs");
const removeAcents = require("../../helpers/removeAcents");
const normalizeAddress = require("../../helpers/normalizeAddress");
module.exports = {
  buscarTaller: async (
    placa,
    distritoId,
    tipo,
    veha,
    masCercanos,
    direccionOrigen,
    lat,
    lng
  ) => {
    const matrix_url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&transit_mode=&key=${API_KEY_MATRIX}`;
    const geocoding_url = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY_GEOCODING}&language=es-419`;
    let destinations = "";

    try {
      let logicWhere = {};
      // placa && (logicWhere.placa = placa);
      distritoId && (logicWhere.distritoId = distritoId);
      tipo && (logicWhere.tipo = tipo);
      veha && (logicWhere.veha = veha);

      let talleres = await Taller.findAll({
        where: logicWhere,
        attributes: [
          "id",
          "tipo",
          "nombre",
          "direccion",
          "distrito",
          "telefono",
          "web",
        ],
      });

      if (masCercanos) {
        if (!direccionOrigen && !lat && !lng) {
          return { status: 400, resp: "Debe introducir un punto de origen" };
        }
        if (talleres.length > 25) {
          console.log("Mayor a 25");
          for await (let taller of talleres) {
            let direccion = `${removeAcents(taller.direccion)}, ${
              taller.distrito
            }`;
            await axios
              .get(`${geocoding_url}&address=${direccion}`)
              .then(({ data }) => {
                taller.lat = data.results[0].geometry.location.lat;
                taller.lng = data.results[0].geometry.location.lng;
                taller.linealDistance = calculateDistance(
                  lat,
                  lng,
                  taller.lat,
                  taller.lng
                );
              });
          }
          talleres = talleres.sort(function (a, b) {
            return a.linealDistance - b.linealDistance;
          });
          // Numero máximo para distance matrix api
          talleres = talleres.slice(0, 25);
        }
        talleres.forEach((taller) => {
          var direccion = `${removeAcents(taller.direccion)}, ${
            taller.distrito
          }`;
          destinations = destinations + direccion + "|";
        });
        let origen;
        if (direccionOrigen) {
          await axios
            .get(`${geocoding_url}&address=${removeAcents(direccionOrigen)}`)
            .then(({ data }) => {
              origen =
                data.results[0].geometry.location.lat +
                "," +
                data.results[0].geometry.location.lng;
            });
        } else {
          origen = `${lat},${lng}`;
        }

        console.log(normalizeAddress(direccionOrigen));
        var { data } = await axios
          .get(`${matrix_url}&origins=${origen}&destinations=${destinations}`)
          .catch((err) => {
            console.log("error en axios");
          });

        let i = 0;
        data.rows[0].elements.forEach((row) => {
          talleres[i].dataValues.distancia = row.distance.text;
          talleres[i].durationValue = row.duration.value;
          talleres[i].dataValues.tiempo = row.duration.text;
          i++;
        });

        talleres = talleres.sort(function (a, b) {
          return a.durationValue - b.durationValue;
        });
      }

      return { status: 200, resp: talleres };
    } catch (error) {
      console.log(error);
      return { resp: error.message, status: error.code };
    }
  },
  // masCercanos: async (lat, lng, direccion) => {
  //   try {
  //     let resp = "Logica de matrix api";
  //     return { status: 200, resp };
  //   } catch (error) {
  //     return { resp: error.message, status: error.code };
  //   }
  // },
};
