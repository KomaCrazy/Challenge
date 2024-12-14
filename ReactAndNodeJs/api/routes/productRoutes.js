const express = require('express')
const app = express();
const productController = require("../controllers/controllerProduct")

app.use("/",productController.getList);


module.exports = app