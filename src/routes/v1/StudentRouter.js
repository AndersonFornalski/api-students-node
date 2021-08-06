const express = require("express");
const StudentController = require("../../controller/StudentController");
const routes = express.Router();

routes.get("/student", StudentController.index);
routes.get("/student/:id", StudentController.findId);
routes.post("/student", StudentController.store);
routes.put("/student/:id", StudentController.update);
routes.delete("/student/:id", StudentController.delete);


module.exports = routes;