
const models = require("../../models");
const helper = require("../../helper");
const getUserService = require('./getUser');

async function updateUser(userId, obj) {
	let {username, email, oldPassword, newPassword} = obj;
	let response = [null];
	const [error, data] = await getUserService(userId);
  // Error while searching data
  if (error) {
  	return [error];
  }
  // Data found with given userID 
	try {	
		const [error, check] = await helper.compareHash(oldPassword, data.password);
		if (check) {
			const [error, newPasswordHash] = await helper.hashPassword(newPassword); 
			if (newPasswordHash) {
			  await models.user.update({ 
			    username,
					email,
					password: newPasswordHash
			  }, { 
			  	where: { id: userId } 
			  });

			  const [error, updatedData] = await getUserService(userId);
		  	// Error while searching data
		  	if (error) {
		  		return [error];
		  	}
			  response[1] = updatedData;
			} else {
				response[0] = error;
			}
		} else {
			response[0] = "Invalid Password";
		}
  } catch(e) {
  	console.log('<====== updateUser Service ======>', e);
		response[0] = "Error occur in updation of existing data";
	}

  return response;
}

module.exports = updateUser;