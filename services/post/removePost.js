
const models = require("../../models");
const getPostService = require('./getPost');

async function removePost(postId, userId) {
	let response = [null];
		
	const [error, data] = await getPostService(postId, userId);
  // Error while searching data
  if (error) {
  	return [error];
  }
  // Search complete, but didn't get post with given ID
  if (!(data && data.id)) {
  	return [`Post with ${postId} not found`];
  }    
	// Data found with given postID 
	try {
  	await models.post.destroy({
  		where: {
  			id: postId, 
  			user_id : userId
  		}
  	});	
		response[1] = data;
	} catch(e) {
    console.log('<====== removePost Service ======>', e);
		response[0] = "Error in deletion";
	}
	
	return response;
}

module.exports = removePost;