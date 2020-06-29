
const helper = require("../helper");
const getAllPostsService = require('../services/post/getAllPosts');
const getPostService = require('../services/post/getPost');
const addPostService = require('../services/post/addPost');
const updatePostService = require('../services/post/updatePost');
const removePostService = require('../services/post/removePost');

const postController = {
  async getAllPosts(request, response) {
    const userId = request.params.id;
    const [error, data] = await getAllPostsService(userId);
    if(!error) {
      helper.sendResponse(response, data, "Complete Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async getPost(request, response) {
    const postId = request.params.post_id;
    const userId = request.params.id;
    const [error, data] = await getPostService(postId, userId);
    if(!error) {
      helper.sendResponse(response, data, "Data Found");
    } else {
      helper.sendResponse(response, {}, error, true);
    } 
  },

  async addPost(request, response) {
    const userId = request.params.id;
    const [error, data] = await addPostService(request.body.description, userId);
    if(!error) {
      helper.sendResponse(response, data, "Post Uploaded");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async updatePost(request, response) {
    const postId = request.params.post_id;
    const userId = request.params.id;
    const [error, data] = await updatePostService(postId, userId, request.body);
    if(!error) {
      helper.sendResponse(response, data, "Updated Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  },

  async removePost(request, response) {
    const postId = request.params.post_id;
    const userId = request.params.id;
    const [error, data] = await removePostService(postId, userId);
    if(!error) {
      helper.sendResponse(response, data, "Deleted Data");
    } else {
      helper.sendResponse(response, {}, error, true);
    }
  }
};

module.exports = postController;