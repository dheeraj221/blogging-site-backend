
const helper = require("../helper");
const getAllUsersService = require('../services/user/getAllUsers');
const getUserService = require('../services/user/getUser');
const registerUserService = require('../services/user/registerUser');
const updateUserService = require('../services/user/updateUser');
const removeUserService = require('../services/user/removeUser');
const userLoginService = require('../services/user/userLogin');

const userController = {
  async getAllUsers(request, response) {
    const [error, data] = await getAllUsersService();
    if(!error) {
      helper.sendResponse(response, data, "Complete Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async getUser(request, response) {
    const [error, data] = await getUserService(request.params.id);
    if(!error) {
      helper.sendResponse(response, data, "Data Found");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async userRegister(request, response) {
    const [error, data] = await registerUserService(request.body);
    if(!error) {
      helper.sendResponse(response, data, "User Registered Successfully");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async updateUser(request, response) {
    const id = request.params.id;
    const [error, data] = await updateUserService(id, request.body);
    if(!error) {
      helper.sendResponse(response, data, "Updated Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async removeUser(request, response) {
    const [error, data] = await removeUserService(request.params.id);
    if(!error) {
      helper.sendResponse(response, data, "Deleted Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async userLogin(request, response) {
    const [error, data] = await userLoginService(request.body);
    if(!error) {
      helper.sendResponse(response, data, "Logged in Successfully");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  }
};

module.exports = userController;
