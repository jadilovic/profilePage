import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Technologies from './pages/Technologies';
import Auth from './pages/Auth';
import Project from './pages/Project';
import NavBar from './components/NavBar';
import useAuth from './util/useAuth';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/education" element={<Education />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/technologies" element={<Technologies />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/project"
					element={
						<PrivateRoute>
							<Project />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
}

function PrivateRoute({ children }) {
	const validation = useAuth();
	return validation.isAuth() ? children : <Navigate to="/" />;
}

export default App;
