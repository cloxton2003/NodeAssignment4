// initialize express and path	
	const express = require('express');	
	const path = require('path');
//initialize app
	const app = express(); 
//load view engine
	app.set ('views', path.join(__dirname, 'views'));
	app.set('view engine', 'pug');
//home route to index and additional pages
	app.get('/', (req, res) => {
		res.render('index');
	});
	
	app.get('/contact', (req, res) => {
		res.render('contact');
	});
	
	app.get('/about', (req, res) => {
		res.render('about');
	});
// this is going to serve static files like css and script and
 // use the path method to help direct to the other directory
	app.use('/static', express.static(path.join(__dirname, 'static')));
// start server
	app.listen(80, function() {
		console.log('server started on port 80');
	});