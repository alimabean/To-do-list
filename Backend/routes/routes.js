const express = require('express');
const router = express.Router();
const models = require('../models/models');
const mongoose = require('mongoose');
const task = models.task;
const user = models.user;

router.get('/', (req, res) => {
	task.find((err, result) => {
		res.send(result);
	});
});

router.post('/task', (req, res) => {
	let _task = new task;
	_task.info = req.body.info;
	_task.creator = req.body.creator;
	_task.status = req.body.status;
	_task.created_at = req.body.created_at; 
	_task.save((err) => {
		if (err) console.log(err);
		else console.log("added new task");
	});
});

module.exports = router;