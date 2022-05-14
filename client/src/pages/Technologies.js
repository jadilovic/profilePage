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

const theme = createTheme();

// ============================|| UTILITIES SHADOW ||============================ //

const Technologies = () => (
	<Container maxWidth="lg">
		<Grid item xs={12}>
			<SubCard title="Basic Shadow">
				<Grid container spacing={2}>
					<Grid
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
					>
						{/* <ShadowBox shadow="0"> */}
						<img
							style={{
								maxHeight: 70,
							}}
							alt="js"
							src={javaScript}
						/>
						{/* </ShadowBox> */}
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="1" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="2" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="3" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="2" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="3" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="2" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="3" />
					</Grid>
				</Grid>
			</SubCard>
			<SubCard title="Basic Shadow">
				<Grid container spacing={gridSpacing}>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="0" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="1" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="2" />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<ShadowBox shadow="3" />
					</Grid>
				</Grid>
			</SubCard>
		</Grid>
	</Container>
);

export default Technologies;
