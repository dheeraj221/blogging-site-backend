
const models = require("../../models");

async function getUser(userId) {
	let response = [null];	
	try {
		const userMatch = await models.user.findOne({
			attributes : ['id','username', 'email', 'password'],
			include : [{
				model : models.post,
				attributes : ['id','description', 'user_id'] 
			}],
			where : { id : userId }
		});
		if (userMatch == null) {
		  response[0] = `User not found with ${userId} ID`;
		} else {
		  response[1] = userMatch.dataValues;
		}
	}
	catch (error) {
		console.log('<====== getUser Service ======>', error);
		response[0] = "ERROR in getting user by Id !! Please try again.."; 
	}
	return response;
};

module.exports = getUser;