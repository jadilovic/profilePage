const useAuth = () => {
	const login = ({ email, password }) => {
		console.log(process.env.REACT_APP_PASSWORD);
		if (
			password === process.env.REACT_APP_PASSWORD &&
			email === process.env.REACT_APP_EMAIL
		) {
			localStorage.setItem('user', email);
		} else {
			throw new Error('Invalid email or password');
		}
	};

	const isAuth = () => {
		const userEmail = localStorage.getItem('user');
		if (userEmail) {
			return true;
		} else {
			return false;
		}
	};

	return { login, isAuth };
};

export default useAuth;
