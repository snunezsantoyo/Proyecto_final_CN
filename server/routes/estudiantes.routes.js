const express = require('express');
const router = express.Router();
const estudiante = require('../controllers/student.controller');

router.get('/', (estudiante.index));
router.post('/', estudiante.createStudent);
router.get('/:id', estudiante.getStudent);
router.put('/:id', estudiante.editStudent);
router.delete('/:id', estudiante.deleteStudent);

module.exports = router;