const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	photoURL: {
		type: String,
		required: true,
	},
	gitHubURL: {
		type: String,
		required: true,
	},
	deployedURL: {
		type: String,
		required: true,
	},
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
