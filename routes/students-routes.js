
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/studenet-controllers')

router.route('/')
    .get(controllers.getAllStudents)
    .post(controllers.addStudents)

router.route('/:studentId')
    .get(controllers.getSingleStudent)
    .patch(controllers.updateStudenet)
    .delete(controllers.deleteStudenet)


module.exports = router