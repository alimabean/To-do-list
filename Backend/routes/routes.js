const express = require('express');
const Models = require('../models/models');
var router = express.Router();
var task = Models.task;
// const user = models.user;

router.get('/', (req, res) => {
	console.log("received connection");
	// task.find((err, result) => {
		// res.send(result);
	res.send({"msg": 'hello world'});
	// });
});

router.post('/task', (req, res) => {
	let _task = new task;
	_task.info = req.body.info;
	console.log(_task.info);
	_task.creator = req.body.creator;
	_task.status = req.body.status;
	_task.created_at = req.body.created_at; 
	_task.save((err) => {
		if (err) console.log(err);
		else console.log("added new task");
	});
});

module.exports = router;