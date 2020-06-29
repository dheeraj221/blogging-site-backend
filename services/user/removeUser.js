
const models = require("../../models");
const getUserService = require('./getUser');

async function removeUser(userId) {
	let response = [null];
		
	const [error, data] = await getUserService(userId);
  // Error while searching data
  if (error) {
  	return [error];
  }   
	// Data found with given userID 
	try {
  	await models.user.destroy({where: {id : userId}});	
		response[1] = data;
	} catch(e) {
		console.log('<====== removeUser Service ======>', e);
		response[0] = "Error in deletion";
	}
	return response;
}

module.exports = removeUser;
