import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';

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
			<Container component="main" sx={{ mt: 1 }} maxWidth="sm">
				<Typography variant="h5" component="h6" gutterBottom>
					Experience
				</Typography>
				<Divider />

				<Typography sx={{ mt: 2 }} variant="h6" component="h6" gutterBottom>
					{'BILD NGO, Tuzla — JavaScript Web Developer'}
				</Typography>
				<Typography variant="body1">April 2021 - PRESENT</Typography>
				<Typography variant="body1">
					Contributed to business applications developed in the JavaScript MERN
					Stack and created a few dashboard web applications of my own.
				</Typography>
				<Divider />

				<Typography sx={{ mt: 2 }} variant="h6" component="h6" gutterBottom>
					{'Freelance, Bihac — Java Web Developer'}
				</Typography>
				<Typography variant="body1">August 2019 - April 2021</Typography>
				<Typography variant="body1">
					Created two business inventory management CRUD Java web applications
					with MySQL, which were deployed on Heroku.
				</Typography>
				<Divider />

				<Typography sx={{ mt: 2 }} variant="h6" component="h6" gutterBottom>
					{'UNDP, Doboj — Local Economic Development Officer'}
				</Typography>
				<Typography variant="body1">July 2016 - July 2019</Typography>
				<Typography variant="body1">
					mplemented economic development activities including new investments
					and job cration in selected localities in north-east Bosnia
				</Typography>
				<Divider />
				<Typography sx={{ mt: 2 }} variant="h6" component="h6" gutterBottom>
					{'Deloitte, USAID, Tuzla — Local Economic Development Specialist'}
				</Typography>
				<Typography variant="body1">February 2014 - July 2016</Typography>
				<Typography variant="body1">
					Facilitated creation of a target number of jobs, increased revenues,
					enhanced exports, and investment within Tuzla region
				</Typography>
				<Divider />

				<Typography sx={{ mt: 2 }} variant="h6" component="h6" gutterBottom>
					{'OHR, Brčko — Special Assistant to the Supervisor'}
				</Typography>
				<Typography variant="body1">February 2005 - July 2013</Typography>
				<Typography variant="body1">
					Assisting international Supervisor in managing implementation of Brcko
					Arbitration Awards, and Supervisory Orders
				</Typography>
				<Divider />
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
