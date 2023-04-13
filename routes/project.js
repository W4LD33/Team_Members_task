const express = require('express');
const router = express.Router();
const controllers = require('../controllers/projectController')

router.route("/")
    .get(controllers.getProjects)
    .post(controllers.postProject);

router.route("/:id")
    .delete(controllers.deleteProject)
    .put(controllers.putProject)
    .get(controllers.getProjectById);

module.exports = router;