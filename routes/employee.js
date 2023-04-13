const express = require('express');
const router = express.Router();
const controllers = require('../controllers/employeeController')

router.route("/")
    .get(controllers.getEmployees)
    .post(controllers.postEmployee);

router.route("/:id")
    .delete(controllers.deleteEmployee)
    .put(controllers.putEmployee)
    .get(controllers.getEmployeeById);

module.exports = router;