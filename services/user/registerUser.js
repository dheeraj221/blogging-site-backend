const models = require("../../models");
const helper = require("../../helper");
const bcrypt =  require("bcrypt");

async function registerUser({username, email, password}) {
	let response = [null];	
	const [error, passwordHash] = await helper.hashPassword(password);
	if (passwordHash) {
		try {
			const dbResponse = await models.user.create({
				username,
				email,
				password : passwordHash
			});
	  	response[1] = dbResponse.dataValues;
		} catch(e) {
			console.log('<====== registerUser Service ======>', e);
			response[0] = 'Error in registration of user!! Please try again';
		}
	} else {
		response[0] = error;
	}
  return response;
};

module.exports = registerUser;