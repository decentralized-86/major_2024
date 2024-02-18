const express = require('express');
const router = express.Router();

const {co_signup,getStudentDetails,getStudent,updateStudent,deleteStudent} = require('../controllers/coordinator.controller')

router.post('/coordinator/signup',co_signup);

router.get('/getstudents',getStudentDetails);
router.get('/getstudent/:id',getStudent)
router.patch('/updatestudent/:id',updateStudent);
router.delete('/deletestudent/:id',deleteStudent);

module.exports = router;