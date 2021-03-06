import axios from 'axios';
//import { getUserToken } from '../auth/Authentication';

const useAxiosProjects = () => {
	// GET FILTER REQUEST
	// const getAllProducts = async (
	// 	ageFilters,
	// 	categoryFilters,
	// 	packagingFilters
	// ) => {
	// 	let querystring = '?';
	// 	ageFilters.forEach((age) => {
	// 		querystring = querystring.concat(`age=${age}&`);
	// 	});
	// 	categoryFilters.forEach((category) => {
	// 		querystring = querystring.concat(`category=${category}&`);
	// 	});
	// 	packagingFilters.forEach((packaging) => {
	// 		querystring = querystring.concat(`packaging=${packaging}&`);
	// 	});
	// 	return axios({
	// 		method: 'GET',
	// 		url: `${process.env.REACT_APP_SERVER_URL}/api/v1/products${querystring}`,
	// 		// headers: {
	// 		// 	authorization: `Bearer ${getUserToken()}`,
	// 		// },
	// 	}).then((res) => {
	// 		return res.data.products;
	// 	});
	// };

	// const getProduct = async (productId) => {
	// 	const headers = {
	// 		Authorization: `Bearer ${getUserToken()}`,
	// 	};
	// 	return axios
	// 		.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/products/${productId}`, {
	// 			headers,
	// 		})
	// 		.then((res) => {
	// 			return res.data;
	// 		});
	// };

	// const updateProduct = async (editedProduct) => {
	// 	const {
	// 		_id,
	// 		title,
	// 		category,
	// 		description,
	// 		imageUrl,
	// 		price,
	// 		packaging,
	// 		age,
	// 		available,
	// 	} = editedProduct;
	// 	const headers = {
	// 		Authorization: `Bearer ${getUserToken()}`,
	// 	};
	// 	try {
	// 		return axios
	// 			.patch(
	// 				`${process.env.REACT_APP_SERVER_URL}/api/v1/products/${_id}`,
	// 				{
	// 					title,
	// 					category,
	// 					description,
	// 					imageUrl,
	// 					price,
	// 					packaging,
	// 					age,
	// 					available,
	// 				},
	// 				{
	// 					headers,
	// 				}
	// 			)
	// 			.then((res) => {
	// 				return res.data;
	// 			});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const getRoles = async () => {
	// 	try {
	// 		return axios({
	// 			method: 'GET',
	// 			url: `${process.env.REACT_APP_SERVER_URL}/api/v1/users/roles`,
	// 			headers: {
	// 				authorization: `Bearer ${getUserToken()}`,
	// 			},
	// 		}).then((res) => {
	// 			return res.data.roles;
	// 		});
	// 	} catch (err) {
	// 		console.log(err.response);
	// 		return err.response.data.msg;
	// 	}
	// };

	const deleteCloudinaryImage = async (urlPublicId) => {
		// const headers = {
		// 	Authorization: `Bearer ${getUserToken()}`,
		// };
		try {
			await axios
				.delete(
					`${process.env.REACT_APP_SERVER_URL}/api/v1/project/images/${urlPublicId}`
					// {
					// 	headers,
					// }
				)
				.then((res) => {
					console.log('image deleted: ', res.data);
				});
		} catch (err) {
			console.log(err.response);
		}
	};

	// const createProduct = async (newProduct) => {
	// 	await axios({
	// 		method: 'POST',
	// 		url: `${process.env.REACT_APP_SERVER_URL}/api/v1/products`,
	// 		data: {
	// 			newProduct,
	// 		},
	// 		headers: {
	// 			authorization: `Bearer ${getUserToken()}`,
	// 		},
	// 	}).then((res) => {
	// 		console.log('product created: ', res.data);
	// 	});
	// };

	return {
		// getAllProducts,
		// getProduct,
		// updateProduct,
		// getRoles,
		deleteCloudinaryImage,
		// createProduct,
	};
};

export default useAxiosProjects;
