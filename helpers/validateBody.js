const options = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};

module.exports = (body, schema) => {
  body = body.payload;
  const { value, error } = schema.validate(body, options);
  if (error) {
    return { error: { statusCode: 400, body: JSON.stringify(error) } };
  }
  return { error: null };
};
