
const express = require("express");
const route = require('./routes');

const app = express();
const router = express.Router();

app.use(express.json());
route.initiateRoutes(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
}); 
