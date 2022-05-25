const express = require('express');
const cors = require('cors');
const app = express();

const mongoDB = require('./db/connect');
const projectRoute = require('./routes/project');
// added for heroku
const path = require('path');

app.use(express.json());
app.use(cors());

//added for heroku
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/v1/project', projectRoute);

// added for heroku
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

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
