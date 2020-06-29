
const config = require("../config");
const jwt = require('jsonwebtoken');

function validateToken(request, response, next) {
  const bearerHeader = request.headers['authorization'];
  if(bearerHeader) {
    const bearerToken = bearerHeader.split(' ')[1];
    if (bearerToken) {
      jwt.verify(bearerToken, config.encryptionKey, (error, authData) => {
        if(error) {
        	response.status(403).send("Token Expired");
      	} else {
        	next();
     		}
    	});
    }
  } else {
    response.send("Token Required!!");  
  }
}

module.exports = validateToken;
