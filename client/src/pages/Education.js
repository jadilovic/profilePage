import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import davenport from '../images/davenport.png';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function Education() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '89.8vh',
			}}
		>
			<CssBaseline />
			<Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
				<Typography variant="h5" component="h6" gutterBottom>
					Davenport University, Warren, Michigan, USA
				</Typography>
				<Typography variant="h6" component="h6" gutterBottom>
					{'Bachelor of Business Administration'}
				</Typography>
				<Typography variant="body1">
					Major in Computer Information Systems
				</Typography>
				<Typography variant="body1">September 1999 - December 2003</Typography>
				<div style={{ paddingTop: 20 }}>
					<a href="https://www.davenport.edu/">
						<img alt="du" height={35} src={davenport} />
					</a>
				</div>
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
						My sticky footer can be found here.
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
