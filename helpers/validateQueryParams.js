const options = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};
const response = require("./response");
const validationBody = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.queryStringParameters, options);
  if (error) {
    console.log(error);
    response(400, error);
  }
  req.queryStringParameters = value;
  next();
};

module.exports = validationBody;
