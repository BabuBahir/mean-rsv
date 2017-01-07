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

    //---some post 

    app.post('/login', function(req, res) {
        sess = req.session;
        sess.email = req.body.email;
        res.end('done');
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
