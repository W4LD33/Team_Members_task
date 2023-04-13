const express = require('express');
const router = express.Router();

const departmentRouter = require('./department');
const employeeRouter = require('./employee')
const projectRouter = require('./project')

router.use('/departments', departmentRouter);
router.use('/employees', employeeRouter);
router.use('/projects', projectRouter)

module.exports = router;
