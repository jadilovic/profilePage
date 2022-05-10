const Project = require('../models/Project');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();
const { validationResult } = require('express-validator');
var cloudinary = require('cloudinary').v2;

// Change cloud name, API Key, and API Secret below
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createProject = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		// Validation errors
		return res.status(400).json({ errors: errors.array() });
	}
	const project = await Project.create(req.body);
	return res.status(StatusCodes.CREATED).json({ project });
};

const getAllProjects = async (req, res) => {
	const projects = await Project.find({});
	return res.status(StatusCodes.OK).json({ projects });
};

const updateProject = async (req, res) => {
	const projectId = req.params.id;
	const updatedProject = await Project.findByIdAndUpdate(
		{ _id: projectId },
		req.body,
		{ new: true, runValidators: true }
	);
	res.status(StatusCodes.OK).json({ updatedProject });
};

const deleteProject = async (req, res) => {
	const projectId = req.params.id;
	const deletedProject = await Project.findByIdAndDelete({ _id: projectId });
	res.status(StatusCodes.OK).json({ deletedProject });
};

const deleteCloudinaryImage = async (req, res) => {
	const {
		params: { id: urlPublicId },
	} = req;
	console.log('url id : ', urlPublicId);
	cloudinary.uploader.destroy(urlPublicId, function (result) {
		res.status(StatusCodes.OK).json({ result });
	});
};

module.exports = {
	createProject,
	getAllProjects,
	updateProject,
	deleteProject,
	deleteCloudinaryImage,
};
