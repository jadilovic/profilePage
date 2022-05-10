import React, { useState } from 'react';
import '../App.css';
import useAxiosProject from '../util/useAxiosProject';

const ImageUpload = (props) => {
	const { handlePhotoURL, setPhotoURL, photoURL } = props;
	const [image, setImage] = useState('');
	const [urlId, setUrlId] = useState('');
	const cloudinaryDB = useAxiosProject();

	const extractPublicUrlId = (url) => {
		const lastSlash = url.lastIndexOf('/');
		const lastDot = url.lastIndexOf('.');
		const extractedValue = url.substring(lastSlash + 1, lastDot);
		setUrlId(extractedValue);
	};

	const uploadImage = () => {
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
				handlePhotoURL(data.url);
				extractPublicUrlId(data.url);
			})
			.catch((err) => console.log(err));
	};

	const discardImage = (e) => {
		e.preventDefault();
		cloudinaryDB.deleteCloudinaryImage(urlId);
		handlePhotoURL('');
		setUrlId('');
		setPhotoURL('');
	};

	return (
		<div>
			<div>
				{photoURL ? (
					<div>
						<input
							readOnly
							className="input"
							type="text"
							value={photoURL}
						></input>
						<img className="center" alt="slika" src={photoURL} />
						<button
							className="button center"
							style={{ backgroundColor: 'red', maxWidth: 200 }}
							onClick={discardImage}
						>
							Discard Image
						</button>
					</div>
				) : (
					<>
						<input
							className="input"
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
						></input>
						<button className="button" onClick={uploadImage}>
							Upload
						</button>
						<h5>Uploaded image will be displayed here</h5>
					</>
				)}
			</div>
		</div>
	);
};
export default ImageUpload;
