const express = require('express');
const router = express.Router();

const {
	createProject,
	getAllProjects,
	updateProject,
	deleteProject,
} = require('../controllers/project');

const { validate } = require('../middleware/validator');

router.route('/').post(validate('createProject'), createProject);
router.route('/').get(getAllProjects);
router.route('/:id').patch(updateProject).delete(deleteProject);

module.exports = router;
