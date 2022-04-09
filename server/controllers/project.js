const Project = require('../models/Project');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();

const createProject = async (req, res) => {
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

module.exports = {
	createProject,
	getAllProjects,
	updateProject,
	deleteProject,
};
