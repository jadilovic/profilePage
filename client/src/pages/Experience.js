import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			<Link
				color="inherit"
				href="https://www.linkedin.com/in/jasmin-adilovic-2561aa17/"
			>
				Jasmin Adilovic Full Stack Developer
			</Link>
		</Typography>
	);
}

export default function Experience() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '89.8vh',
			}}
		>
			<CssBaseline />
			<Container component="main" sx={{ mt: 2, mb: 4 }} maxWidth="sm">
				<Typography variant="h5" component="h6" gutterBottom>
					Experience
				</Typography>
				<Typography sx={{ mt: 4 }} variant="h6" component="h6" gutterBottom>
					{'BILD NGO, Tuzla — JavaScript Web Developer'}
				</Typography>
				<Typography variant="body1">April 2021 - PRESENT</Typography>
				<Typography variant="body1">
					Contributed to business applications developed in the JavaScript MERN
					Stack and created a few dashboard web applications of my own.
				</Typography>

				<Typography sx={{ mt: 4 }} variant="h6" component="h6" gutterBottom>
					{'Languages: Bosnian, German and English'}
				</Typography>
				<Typography variant="body1">
					Team building and project development.
				</Typography>
				<Typography variant="body1">
					Excellent partner communication.
				</Typography>
				<Typography variant="body1">
					Effective in analytical and coordination activities.
				</Typography>
			</Container>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[800],
				}}
			>
				<Container maxWidth="sm">
					<Typography variant="body1">
						For more information on education and skills go to LinkedIn profile
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
