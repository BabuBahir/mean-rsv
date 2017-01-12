var cloudinary = require('cloudinary');
var Model = require('./model');
var buildingType = require("../models/buildingType.js");

cloudinary.config({
    cloud_name: 'dcu5hz0re',
    api_key: '812825971867232',
    api_secret: '_pk-gzAhdI63mSU1FDXIkrXkABo'
});

var dummyData = "";var imgurlArray=[];

module.exports = {
  index: function (req, res) {       
      buildingType.find({_id: "Masonry"}, function(err, data){                          
        res.render('building_Type _coudinary',{drinks:data[0].name , desc:data[0].description , posts:data[0].buildingImgUrl});                     
      });        
  },
  create: function (req, res) {             
     if(req.files.image_masonry.type=="image/jpeg") {   // check if image is uploaded... if yes upload to cloudinary..else redirect        
           cloudinary.v2.uploader.upload(req.files.image_masonry.path,
                { width: 300, height: 300, crop: "limit", tags: req.body.tags, moderation:'manual' },
                function(err, result) {        // call back after uploading to cloudinary                     
                    buildingType.find({_id: "Masonry"}, function(err, test){                                        
                        if(err){res.send(err)};                   
                        test[0].buildingImgUrl.push({imgUrl:result.url,_id:result.public_id});
                        imgurlArray = test[0].buildingImgUrl;                                                          
                        buildingType.findOneAndUpdate({_id: "Masonry"}, { $set: { buildingImgUrl: imgurlArray}}, { new: true }, function (err, tank) {
                        if (err) return handleError(err);                      
                        res.redirect('/cloudinaryTest');             
                        }); 
                     
                  });
            });
        } else if (req.files.image_masonry.originalFilename) {  // check if video is present
            cloudinary.uploader.upload_large(req.files.image_masonry.path, 
            function(result) {               
                result.url=(result.url).replace("mp4","jpg"); // replacing .mp4 by its .jpg
              var post = new Model({
                  title: req.body.title,                  
                  created_at: new Date(),
                  image: result.url,
                  image_id: result.public_id
              });

              post.save(function (err) {
                  if(err){
                      res.send(err)
                  }
                  res.redirect('/newVideo');
              });
            }, 
            
            { resource_type: "video" });
        } else {           
        res.redirect('/cloudinaryTest');
      };
   },
   destory: function (req, res) {               
      var imageId = req.body.image_id;  
      cloudinary.v2.uploader.destroy(imageId, function (error, result) {   
                buildingType.update({_id: "Masonry"}, { $pull: { buildingImgUrl : { _id : imageId } } },{ safe: true }, function(err, test){                                        
                        if(err){res.send(err)};                                            
                        res.send("done");
                  });
          });
   },
};