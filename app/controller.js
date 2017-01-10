var cloudinary = require('cloudinary');
var Model = require('./model');

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
      var buildingType = require("../models/buildingType.js");

      buildingType.find({}, function(err, data){                  
        res.render('building_Type _coudinary',{drinks:data[0].name, posts:dummyData});                     
      });        
  },

};