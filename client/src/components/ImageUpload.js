import React, { useState } from 'react';
const ImageUpload = (props) => {
	const { handlePhotoURL } = props;
	const [image, setImage] = useState('');
	const [url, setUrl] = useState('');
	const uploadImage = () => {
		console.log('test');
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', `${process.env.REACT_APP_UPLOAD_PRESET}`);
		data.append('cloud_name', 'adilovic');
		fetch('  https://api.cloudinary.com/v1_1/adilovic/image/upload', {
			method: 'post',
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data.url);
				handlePhotoURL(data.url);
				setUrl(data.url);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="form">
				<input
					className="input"
					type="file"
					onChange={(e) => setImage(e.target.files[0])}
				></input>
				<button className="button" onClick={uploadImage}>
					Upload
				</button>
			</div>
			<div>
				<h1>Uploaded image will be displayed here</h1>
				<img alt="slika" src={url} />
			</div>
		</div>
	);
};
export default ImageUpload;
