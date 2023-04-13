const express = require('express');
const router = express.Router();
const controllers = require('../controllers/departmentController')

router.route("/")
    .get(controllers.getDepartments)
    .post(controllers.postDepartment);

router.route("/:id")
    .delete(controllers.deleteDepartment)
    .put(controllers.putDepartment)
    .get(controllers.getDepartmentById);

module.exports = router;