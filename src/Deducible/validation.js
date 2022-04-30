const joi = require("joi");

exports.getDeduciblesByTextDTO = joi.object({
  texto: joi.string().required(),
});
