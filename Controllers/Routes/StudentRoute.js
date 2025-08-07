const express = require("express");
const Router = express.Router();
const StudentController = require("../Controllers/StudentController");

Router.get("/index", StudentController.index);
Router.get("/show/:id", StudentController.show);
Router.post("/store", StudentController.store);
Router.put("/update/:id", StudentController.update);  
Router.delete("/delete/:id", StudentController.delete);
module.exports = Router;
