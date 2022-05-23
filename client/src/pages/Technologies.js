import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Container } from '@mui/material';

// project imports
import SubCard from '../components/SubCard';
import javaScript from '../images/javaScript.png';
import reactJs from '../images/reactJs.png';
import bootstrap from '../images/bootstrap.png';
import materialUi from '../images/materialUi.png';
import java from '../images/java.png';
import ExpressJS from '../images/ExpressJS.png';
import nodeJs from '../images/nodeJs.png';
import spring from '../images/spring.png';
import mysql from '../images/mysql.png';
import mongoDB from '../images/mongoDB.png';
import heroku from '../images/heroku.png';
import netlify from '../images/netlify.png';
import eclipse from '../images/eclipse.png';
import vsCode from '../images/vsCode.png';
import gitHub from '../images/gitHub.png';
import npm from '../images/npm.png';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
	<Card sx={{ mb: 3, boxShadow: shadow }}>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				py: 4.5,
				bgcolor: 'primary.light',
				color: 'grey.800',
			}}
		>
			<Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
		</Box>
	</Card>
);

ShadowBox.propTypes = {
	shadow: PropTypes.string.isRequired,
};

// ============================|| UTILITIES SHADOW ||============================ //

const Technologies = () => {
	const frontendLogos = [javaScript, reactJs, bootstrap, materialUi];
	const backendLogos = [java, spring, nodeJs, ExpressJS];
	const databaseLogos = [mysql, mongoDB, heroku, netlify];
	const editorsLogos = [
		{ photo: eclipse, size: 25 },
		{ photo: vsCode, size: 60 },
		{ photo: gitHub, size: 35 },
		{ photo: npm, size: 25 },
	];
	return (
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<SubCard title="Frontend">
					<Grid container spacing={2}>
						{frontendLogos.map((technology, index) => {
							return (
								<Grid
									key={index}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									item
									xs={12}
									sm={6}
									lg={3}
								>
									<img
										style={{
											height: '60px',
										}}
										alt="js"
										src={technology}
									/>
								</Grid>
							);
						})}
					</Grid>
				</SubCard>
				<SubCard title="Backend">
					<Grid container spacing={2}>
						{backendLogos.map((technology, index) => {
							return (
								<Grid
									key={index}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									item
									xs={12}
									sm={6}
									lg={3}
								>
									<img
										style={{
											maxHeight: '40px',
										}}
										alt="js"
										src={technology}
									/>
								</Grid>
							);
						})}
					</Grid>
				</SubCard>
				<SubCard title="Databases and Cloud platforms">
					<Grid container spacing={2}>
						{databaseLogos.map((technology, index) => {
							return (
								<Grid
									key={index}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									item
									xs={12}
									sm={6}
									lg={3}
								>
									<img
										style={{
											height: '40px',
										}}
										alt="js"
										src={technology}
									/>
								</Grid>
							);
						})}
					</Grid>
				</SubCard>
				<SubCard title="Code editors and other tools">
					<Grid container spacing={2}>
						{editorsLogos.map((technology, index) => {
							return (
								<Grid
									key={index}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									item
									xs={12}
									sm={6}
									lg={3}
								>
									{console.log(technology.size)}
									<img
										style={{
											height: `${technology.size}px`,
										}}
										alt="js"
										src={technology.photo}
									/>
								</Grid>
							);
						})}
					</Grid>
				</SubCard>
			</Grid>
		</Container>
	);
};

export default Technologies;
