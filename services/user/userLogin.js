
const config = require("../../config");
const models = require("../../models");
const helper = require("../../helper");
const jwt = require('jsonwebtoken');

async function userLogin({email, password}) {
	let response = [null];
	if (email && password) { 
		try {	
			const userMatch = await models.user.findOne({ where : { email }});	
			if (userMatch) {
				const hashPassword = userMatch.dataValues.password; 
				const [error, check] =  await helper.compareHash (password, hashPassword);
				if (check) {
		  		const user = { email, password };
				  token = await jwt.sign({user}, config.encryptionKey, { expiresIn: '15m' });  	
				  response[1] = {token};
				} else {
					response[0] = "Incorrect password !!";
				} 
			} else {
				response[0] = "User not registered!!";
			}
		} catch(error) {
			console.log("<====== User Login ======>", error);
			response[0] = "ERROR in Login. Please try again..";
		}	
	} else {
		response[0] = "Email and Password, both are required for login";
	}
	return response;
}

module.exports = userLogin;
