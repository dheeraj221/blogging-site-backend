
const models = require("../../models/");

async function getAllPosts(userId) {
	try {
		const tableData = await models.post.findAll({
			attributes : ['id','description', 'user_id'],
			include : [{
				model : models.user,
				attributes : ['id','username', 'college']
			}],
			where: {
				user_id : userId,
			}
		});
		if(tableData.length == 0) {
			return ["No Data Found"];
		}
		return [null, tableData];
	}
	catch(e) {
		console.log('<====== getAllPosts Service ======>', e);
		return ["Error while getting all the posts of user"];
	}
};

module.exports = getAllPosts;