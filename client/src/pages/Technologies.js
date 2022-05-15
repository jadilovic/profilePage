import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, CssBaseline, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project imports
import SubCard from '../components/SubCard';
import MainCard from '../components/MainCard';
import SecondaryAction from '../components/CardSecondaryAction';
import { gridSpacing } from '../util/constant';
import javaScript from '../images/javaScript.png';
import reactJs from '../images/reactJs.png';
import bootstrap from '../images/bootstrap.png';
import materialUi from '../images/materialUi.png';
import java from '../images/java.png';
import ExpressJS from '../images/ExpressJS.png';
import nodeJs from '../images/nodeJs.png';
import spring from '../images/spring.png';

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
											maxHeight: 70,
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
											maxHeight: 50,
										}}
										alt="js"
										src={technology}
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
