
const userController = require('../controller/user');
const validateToken = require("../middlewares/validateToken");
const express = require("express");

const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUser);
router.put('/:id', validateToken, userController.updateUser);
router.delete('/:id', validateToken, userController.removeUser);

module.exports = router;
