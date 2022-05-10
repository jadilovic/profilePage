const express = require('express');
const router = express.Router();

const {
	createProject,
	getAllProjects,
	updateProject,
	deleteProject,
	deleteCloudinaryImage,
} = require('../controllers/project');

const { validate } = require('../middleware/validator');

router.route('/').post(validate('createProject'), createProject);
router.route('/').get(getAllProjects);
router.route('/:id').patch(updateProject).delete(deleteProject);
router.route('/images/:id').delete(deleteCloudinaryImage);

module.exports = router;
