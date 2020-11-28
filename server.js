const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));


app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/about', (request, response) => {
	response.sendFile(path.join(__dirname, './static/contact.html'));
});

app.get('/contact', (request, response) => {
	response.sendFile(path.join(__dirname, './static/contact.html'));
});

app.listen( port, () => {
	console.log(`Express SEever Listening on port ${port}`);
});
