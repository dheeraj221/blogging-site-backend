
const config = require("../config");

module.exports = (request, response, next) => {
  let header = request.headers["authorization"];
  if (!header) {
  	response.status(403).send("No auth found!!");
  } else {
    header = header.split(" ")[1]
    const valid = Buffer.from(config.username + ":" + config.password).toString('base64');
    if (valid === header) {
      next();
    } else {
      response.status(403).send("Invalid User");
    }
  }  
};
