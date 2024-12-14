const express = require('express')
const app = express();
const productController = require("../controllers/controllerProduct")

app.get("/",productController.getList);


app.post("/",productController.addList);

module.exports = app