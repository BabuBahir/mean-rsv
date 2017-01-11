var cloudinary = require('cloudinary');
var Model = require('./model');
var buildingType = require("../models/buildingType.js");

cloudinary.config({
    cloud_name: 'dcu5hz0re',
    api_key: '812825971867232',
    api_secret: '_pk-gzAhdI63mSU1FDXIkrXkABo'
});

var dummyData = "";

module.exports = {
  index: function (req, res) {
      Model.find({}, function (err, posts) {           
          if(err) res.send(err);          
          dummyData=posts;                             
      });      

      buildingType.find({}, function(err, data){                  
        res.render('building_Type _coudinary',{drinks:data[0].name, posts:dummyData});                     
      });        
  },
  create: function (req, res) {     
     cloudinary.v2.uploader.upload(req.files.image.path,
          { width: 300, height: 300, crop: "limit", tags: req.body.tags, moderation:'manual' },
          function(err, result) {               
              var post = new Model({                  
                  created_at: new Date(),
                  image: result.url,
                  image_id: result.public_id
              });

              post.save(function (err) {
                  if(err){
                      res.send(err)
                  }
                  res.redirect('/cloudinaryTest');
              });
      });
   },
};