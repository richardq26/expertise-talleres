module.exports = (statusCode, body) => {
  body = { payload: body };
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
