 var express = require('express');
 var session = require('express-session');
 var bodyParser = require('body-parser');
 var app = express();
 var mongoose = require('mongoose');

 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://test:test@ds157248.mlab.com:57248/rvs');
  
 mongoose.connection.once('connected', function() {
     console.log("Connected to MongoLab")

     var Admin = require("./models/admin.js");

		 var testUser = new Admin({
			name: 'jmar777',
			password: 'test',
			email : 'rohit.logicsquare@gmail.com',
			phone : '88459959*',
			profilePicUrl : 'https://tinypicurl23.com'
		});

		// save user to database
		// testUser.save(function (err) {
		// 		if (err) {
		// 			return err;
		// 		}
		// 		else {
		// 			console.log("Post saved");
		// 		}
		// 	});
 });




 app.set('views', __dirname + '/views');
 app.engine('html', require('ejs').renderFile);

 app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static('public')); // all static files here
 var sess;

 var port = process.env.PORT || 3000; // added port

 require('./app/routes.js')(app); //all routings added here

 app.listen(port, function() {
     console.log("App Started on PORT 3000");
 });
