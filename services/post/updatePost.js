
const models = require("../../models");
const getPostService = require('./getPost');

async function updatePost(postId, userId, {description}) {
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
	  await models.post.update({ 
	    description : description,
	  }, { 
	  	where: { 
	   		id: postId, 
	   		user_id : userId
	   	} 
	  });

	  const [error, updatedData] = await getPostService(postId, userId);
  	// Error while searching data
  	if (error) {
  		return [error];
  	}
	  response[1] = updatedData;
  } catch(e) {
  	console.log('<====== updatePost Service ======>', e);
		response[0] = "Error occur in updation of existing data";
	}
  return response;
}

module.exports = updatePost;