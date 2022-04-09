const express = require('express');
const router = express.Router();

const {
	createProject,
	getAllProjects,
	updateProject,
	deleteProject,
} = require('../controllers/project');

router.route('/').post(createProject).get(getAllProjects);
router.route('/:id').patch(updateProject).delete(deleteProject);

module.exports = router;
