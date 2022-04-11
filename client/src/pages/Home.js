import React, { useState } from 'react';
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
import mernImage from '../images/mernImage.png';
import gitHub from '../images/gitHub.png';
import freeCodeCamp from '../images/freeCodeCamp.png';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © j.adilovic@gmail.com'}
			<Link to={'/contact'}>Contact Jasmin Adilovic</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
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
									component="h5"
									variant="h5"
									align="center"
									color="text.primary"
									gutterBottom
								>
									<img alt="mern" style={{ maxWidth: 300 }} src={mernImage} />
								</Typography>
							</Grid>
						</Grid>
						<Typography variant="h6" align="justify" color="text.secondary">
							Experienced professional possessing a passion for programming.
							Seeking a challenging position with a successful IT company to
							contribute with my technical and business skills.
						</Typography>
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
				</Box>
				<Container sx={{ py: 1 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
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
										image="https://source.unsplash.com/random"
										alt="random"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">View</Button>
										<Button size="small">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
