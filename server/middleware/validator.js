const { body } = require('express-validator');

const validate = (method) => {
	switch (method) {
		case 'createProject': {
			return [
				body('name')
					.not()
					.isEmpty()
					.withMessage('Name is required')
					.trim()
					.escape(),
				body('description')
					.not()
					.isEmpty()
					.withMessage('Description is required')
					.trim()
					.escape(),
				body('photoURL')
					.not()
					.isEmpty()
					.withMessage('Photo URL is required')
					.trim(),
				// .escape(),
				body('gitHubURL')
					.not()
					.isEmpty()
					.withMessage('GitHub URL is required')
					.trim(),
				// .escape(),
				body('deployedURL')
					.not()
					.isEmpty()
					.withMessage('Deployed URL is required')
					.trim(),
				// .escape(),
			];
		}
	}
};

module.exports = { validate };
