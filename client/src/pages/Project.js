import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageUpload from '../components/ImageUpload';
import { AlertError } from '../components/AlertError';
import { AlertSuccess } from '../components/AlertSuccess';

const Project = () => {
	const initialProjectData = {
		name: '',
		description: '',
		photoURL: '',
		gitHubURL: '',
		deployedURL: '',
	};

	const [projectData, setProjectData] = useState(initialProjectData);
	const [formSuccess, setFormSuccess] = useState('');
	const [formErrors, setFormErrors] = useState([]);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [photoURL, setPhotoURL] = useState('');

	const getProjects = async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/v1/project');
			console.log(response.data.projects);
			setProjects(response.data.projects.reverse());
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			// Send POST request
			await axios.post('http://localhost:8080/api/v1/project', projectData);

			// HTTP req successful
			setFormSuccess('New Project Created');

			// Reset form data
			setProjectData(initialProjectData);
		} catch (err) {
			handleErrors(err);
		}
		getProjects();
	};

	const handleErrors = (err) => {
		if (err.response.data && err.response.data.errors) {
			// Handle validation errors
			const { errors } = err.response.data;

			let errorMsg = [];
			for (let error of errors) {
				const { msg } = error;

				errorMsg.push(msg);
			}

			setFormErrors(errorMsg);
		} else {
			// Handle generic error
			setFormErrors(['Oops, there was an error!']);
		}
	};

	const handleChange = (e) => {
		setProjectData({
			...projectData,
			[e.target.name]: e.target.value,
		});
		setFormErrors([]);
		setFormSuccess('');
	};

	const handlePhotoURL = (url) => {
		setProjectData({
			...projectData,
			photoURL: url,
		});
		setFormErrors([]);
		setFormSuccess('');
	};

	if (loading) {
		return (
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<h1>Create New Project</h1>
				<AlertSuccess success={formSuccess} />
				<AlertError errors={formErrors} />
				<div>
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="input"
						value={projectData.name}
						onInput={handleChange}
					/>
				</div>
				<div>
					<label>Description</label>
					<input
						type="text"
						name="description"
						className="input"
						value={projectData.age}
						onInput={handleChange}
					/>
				</div>
				{/* <div>
					<label>Photo URL</label>
					<ImageUpload handlePhotoURL={handlePhotoURL} />
				</div> */}
				<div>
					<label>GitHub URL</label>
					<input
						type="text"
						name="gitHubURL"
						className="input"
						value={projectData.email}
						onInput={handleChange}
					/>
				</div>
				<div>
					<label>Deployed URL</label>
					<input
						type="text"
						name="deployedURL"
						className="input"
						value={projectData.email}
						onInput={handleChange}
					/>
				</div>
				<input type="submit" className="button" value="Submit" />
			</form>
			<div>
				<label>Photo URL</label>
				<ImageUpload handlePhotoURL={handlePhotoURL} />
			</div>
			<ul>
				{projects.map((project, index) => {
					return <li key={index}>{project.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Project;
