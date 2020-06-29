
const express = require("express");
const postController = require('../controller/post');

const router = express.Router({ mergeParams: true });
    
router.get('/', postController.getAllPosts);
router.get('/:post_id',postController.getPost);
router.post('/', postController.addPost);
router.put('/:post_id', postController.updatePost);
router.delete('/:post_id', postController.removePost);

module.exports = router;
