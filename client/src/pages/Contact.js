import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/jasmin-adilovic-2561aa17/',
		buttonText: 'GO TO',
		buttonVariant: 'outlined',
		disabled: false,
		cursor: 'pointer',
	},
	{
		title: 'Email',
		url: '#',
		buttonText: 'j.adilovic@gmail.com',
		buttonVariant: 'outlined',
		disabled: true,
		cursor: 'default',
	},
	{
		title: 'Address',
		url: '#',
		buttonText: 'Bihac, Bosnia',
		buttonVariant: 'outlined',
		disabled: true,
		cursor: 'default',
	},
];

function Contact() {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 10, pb: 6 }}
			>
				<Typography
					component="h4"
					variant="h4"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Contact me
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="text.secondary"
					component="p"
				>
					Let's have a talk to find solutions that are best for your business!
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{
										align: 'center',
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.mode === 'light'
												? theme.palette.grey[200]
												: theme.palette.grey[700],
									}}
								/>
								<CardContent></CardContent>
								<CardActions>
									<Link
										style={{
											textDecoration: 'none',
											width: '100%',
											cursor: tier.cursor,
										}}
										href={tier.url}
									>
										<Button
											style={{ color: 'black' }}
											disabled={tier.disabled}
											fullWidth
											variant={tier.buttonVariant}
										>
											{tier.buttonText}
										</Button>
									</Link>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default Contact;
