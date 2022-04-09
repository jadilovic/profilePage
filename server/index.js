const express = require('express');
const cors = require('cors');
const app = express();

const mongoDB = require('./db/connect');
const projectRoute = require('./routes/project');

app.use(express.json());
app.use(cors());

app.use('/api/v1/project', projectRoute);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
	try {
		await mongoDB();
		app.listen(PORT, () => {
			console.log('Server is listening on port ' + PORT);
		});
	} catch (error) {
		console.log('error : ', error);
	}
};

startServer();
