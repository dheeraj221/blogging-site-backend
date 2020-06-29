
const models = require("../../models");

async function getAllUsers() {
	try {
		const tableData = await models.user.findAll({
			attributes : ['id','username', 'email'],
			include : [{
				model : models.post,
				attributes : ['id','description', 'user_id'] 
			}]
		});
		if (tableData.length == 0) {
			return ["No Data Found"];
		}
		return [null, tableData];
	}	
	catch (error) {
		console.log('<====== getAllUsers Service ======>', error);
		return ["Error while getting complete data"];
	}
};

module.exports = getAllUsers;