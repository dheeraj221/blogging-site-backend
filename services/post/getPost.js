
const models = require("../../models");

async function getPost(Id, userId) {
	let response = [null];	
	try {
		const postMatch = await models.post.findOne({
  		attributes : ['id','description', 'user_id'],
  		include : [{
  			model : models.user,
  			attributes : ['id','username', 'college']
  		}],
  		where: {
    		user_id : userId,
    		id : Id
    	}
		});
		if (postMatch == null) {
		  response[0] = `Post not found with ${Id} ID`;
		} else {
		  response[1] = postMatch.dataValues;
		}
	}
	catch (error) {
		console.log('<====== getPost Service ======>', error);
		response[0] = "ERROR in getting post by Id !! Please try again.."; 
	}
	return response;
};

module.exports = getPost;
