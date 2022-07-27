const express = require('express');
const { getAllStudents, createStudent, deleteStudent } = require('../controller/studentController');

const router = express.Router();

router.get('/students',getAllStudents)
router.post('/student',createStudent)
router.delete('/student/delete/:id',deleteStudent)

module.exports = router;