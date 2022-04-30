const db = require("./dbConfig");
var cachedConnection;
module.exports = async () => {
  try {
    if (cachedConnection) {
      console.log("Reutilizando");
      return cachedConnection;
    }
    // await db.sync({ force: false });
    cachedConnection = await db.authenticate();
    return cachedConnection;
  } catch (error) {
    throw new Error(error);
  }
};
