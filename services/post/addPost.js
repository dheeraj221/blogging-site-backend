
const models = require("../../models/");

async function addPost(description, userId) {
	let response = [null];	
	try {
		const dbResponse = await models.post.create({
			description : description,
			user_id : userId
  	}, {
  		include : [{
				model : models.user,
				attributes : ['id','username', 'college'] 
			}] 
  	});
  	response[1] = dbResponse.dataValues;
	} catch(e) {
		console.log('<====== addPost Service ======>', e);
		response[0] = 'Error while inserting the post of user !! Please try again';
	}
  return response;
};

module.exports = addPost;