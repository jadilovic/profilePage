import React, { useState, useEffect } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Box,
	Typography,
	Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import softwareDeveloper from '../images/softwareDeveloper.png';
import gitHub from '../images/gitHub.png';
import freeCodeCamp from '../images/freeCodeCamp.png';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © j.adilovic@gmail.com '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

export default function Album() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	const getProjects = async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/v1/project');
			setProjects(response.data.projects);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	if (loading) {
		<h1>Loading...</h1>;
	}
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: 'background.paper',
					}}
				>
					<Container sx={{ py: 1 }} maxWidth="md">
						<Grid container spacing={2} alignItems={'center'}>
							<Grid item xs={12} sm={6}>
								<Typography
									component="h5"
									variant="h5"
									align="center"
									color="text.primary"
									gutterBottom
								>
									Full Stack Developer
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography
									component="h6"
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
								>
									<img
										alt="mern"
										style={{ maxHeight: 150 }}
										src={softwareDeveloper}
									/>
								</Typography>
							</Grid>
						</Grid>
						<Typography variant="h6" align="justify" color="text.secondary">
							Experienced professional possessing a passion for programming.
							Seeking a challenging projects with a successful IT company to
							contribute with my technical and business skills. Below, you can
							find some of the projects and their source code.
						</Typography>
						<hr></hr>
					</Container>
				</Box>
				<Container sx={{ py: 1 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{projects.map((card, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<CardMedia
										height={150}
										component="img"
										image={card.photoURL}
										alt="random"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h6" component="h2">
											{card.name}
										</Typography>
										<Typography>{card.description}</Typography>
									</CardContent>
									<CardActions>
										<Button variant="contained" size="small">
											<a style={{ color: 'white' }} href={card.gitHubURL}>
												Code
											</a>
										</Button>
										<Button variant="contained" color="warning" size="small">
											<a style={{ color: 'white' }} href={card.deployedURL}>
												Demo
											</a>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
					<hr></hr>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell align="center">
									<a href="https://github.com/jadilovic">
										<img
											style={{ maxHeight: 40, maxWidth: 150 }}
											alt="github"
											src={gitHub}
										/>
									</a>
								</TableCell>
								<TableCell align="center">
									<a href="https://www.freecodecamp.org/avlija_code">
										<img
											style={{ maxHeight: 70, maxWidth: 150 }}
											alt="fcc"
											src={freeCodeCamp}
										/>
									</a>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					<Link style={{ color: 'black' }} to={'/contact'}>
						{'Contact'}
					</Link>
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Jasmin Adilovic
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
