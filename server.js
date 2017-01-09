 var express = require('express');
 var session = require('express-session');
 var bodyParser = require('body-parser');
 var app = express();
 var mongoose = require('mongoose');

 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://test:test@ds157248.mlab.com:57248/rvs');

 mongoose.connection.once('connected', function() {
     console.log("Connected to MongoLab")

     var Admin = require("./app/models/admin.js");

     //create new model
     var post = new Admin({
         name: "Admin 001",
         email: "rohit.logicsquare@gmail.com",
         phone: "8260164852",
         password : "papa",
         profilePicUrl : "https://tinyimg9034.com"
     });

     //save model to MongoDB
     post.save(function(err) {
         if (err) {
             return err;
         } else {
             console.log("Post saved");
         }
     });

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
