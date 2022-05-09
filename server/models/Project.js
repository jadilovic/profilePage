const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	photoURL: {
		type: String,
		require: true,
	},
	gitHubURL: {
		type: String,
		require: true,
	},
	deployedURL: {
		type: String,
		require: true,
	},
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
