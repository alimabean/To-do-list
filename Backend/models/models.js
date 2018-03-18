const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://mongodb:27017');

var taskSchema = new Schema({
	info: String,
	creator: {
		type: String,
		default: "anon"
	},
	status: String,
	created_at: {
		type: Number,
		default: (new Date().getTime())
	}
});

var userSchema = new Schema({
	user_id: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	}
});

exports.task = mongoose.model('task', taskSchema);
exports.user = mongoose.model('user', userSchema);
