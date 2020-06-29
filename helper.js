
const bcrypt = require("bcrypt");
const config = require("./config")

function sendResponse (response, data, message, error = false) {
  return response.send({
    data,
    message,
    error
  });
}

async function hashPassword (password) {
  const output = [null];
  try {
  	const salt = await bcrypt.genSalt(config.saltRound);
  	const passwordHash = await bcrypt.hash(password, salt);              
  	output[1] = passwordHash;
	}	catch (error) {
    output[0] = 'Error occured during password hashing';
		console.log('<==== Hash Function Error ====>', error);
  }
  return output;
}

async function compareHash (password, passwordHash) {
  const output = [null];
  try {
    const flag = await bcrypt.compare(password, passwordHash);
    output[1] = flag;
  } catch (error) {
    output[0] = 'Error in matching password';
    console.log("<==== compareHash function Error ====> ", error);
  }
  return output;
}

module.exports.sendResponse = sendResponse;  
module.exports.hashPassword = hashPassword;
module.exports.compareHash = compareHash;
