const express = require('express');
const router = express.Router();

const myController = require('../controller/controller');

router.get('/', myController.renderData);
router.post('/create-task', myController.createTask);
router.post('/delete-task', myController.deleteTask);

module.exports = router;
