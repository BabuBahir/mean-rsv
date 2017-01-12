var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var controller = require('./controller');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('1)sign_In.html');
    });

    app.get('/2', function(req, res) {
        res.render('2)select_Language.html');
    });

    app.get('/3', function(req, res) {
        res.render('3)choose_Assessment.html');
    });

    app.get('/4', function(req, res) {
        res.render('4)new_Survey_Or_survey_History.html');
    });

    app.get('/history', function(req, res) {
        res.render('5)survey_History.html');
    });

    app.get('/newsurvey', function(req, res) {
        res.render('select.html');
    });

    app.get('/addpicture', function(req, res) {
        res.render('add_Picture.html');
    });

    app.get('/showform', function(req, res) {
        res.render('general_Info-Form.html');
    });

    app.get('/buildingType',function(req,res){
        var buildingType = require("../models/buildingType.js");

        buildingType.find({_id: "Masonry"}, function(err, data){ 
          console.log(data);
          res.render('building_Type _Configuration',{drinks:data[0].name});                     
        });        
    });

    app.get('/cloudinaryTest',controller.index);

    app.get('/general_techincal',function(req,res){
        res.render('general_Technical_Information.html');
    });
    
    app.get('/seismic_Assessment',function(req,res){
        res.render('seismic_Assessment.html');
    });
    //---some post 
    app.post('/Delete_img' , controller.destory);

    app.post('/create', multipartMiddleware, controller.create);
    
    app.post('/test',function(req,res){         
        var buildingType = require("../models/buildingType.js");

        var testBuilding = new buildingType({
            name: {"Hindi":req.body["NameHI"],"English":req.body["NameEN"],"Gujarati":req.body["NameGJ"]},
            description : {"Hindi":req.body["DescHI"], "English":req.body["DescEN"] , "Gujarati" : req.body["DescGJ"]},
            _id: "Masonry" 
        });

        buildingType.find({_id: "Masonry"}, function(err, test){                                        
                        if(err){res.send(err)}; 
                        console.log(test);
                });

        // save user to database
        /* testBuilding.save(function (err) {
            if (err) {
                 return err;
            }
            else {
                //console.log("Post saved");
            }
        }); */
        res.send(req.body);
    });

    app.post('/login', function(req, res) {
        sess = req.session;
        sess.email = req.body.email;
        res.end('done');
    });

    app.post('/', function(req, res) {
        console.log(req.body.user.name);
        console.log(req.body.user.email);  
        res.send('done');       
    });

    app.get('/admin', function(req, res) {
        sess = req.session;
        if (sess.email) {
            res.write('<h1>Hello ' + sess.email + '</h1><br>');
            res.end('<a href=' + '/logout' + '>Logout</a>');
        } else {
            res.write('<h1>Please login first.</h1>');
            res.end('<a href=' + '/' + '>Login</a>');
        }

    });

    app.get('/logout', function(req, res) {

        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });

    });

}
