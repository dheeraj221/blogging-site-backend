
const userRoutes = require("./user");
const postRoutes = require("./post");
const express = require("express");

const router = express.Router();

const initiateRoutes = (app) => {	
	app.use('/users', userRoutes);
	app.use('/users/:id/posts', postRoutes);
};

exports.initiateRoutes = initiateRoutes;
