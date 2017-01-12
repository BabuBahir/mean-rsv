var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BuildingSchema = new Schema({
    name: {
        Hindi: String,
        English: String,
        Gujarati: String
    },
    description: {
        Hindi: String,
        English: String,
        Gujarati: String
    },
    type : String,
    buildingImgUrl:[String],
    buildingVideoUrl: [String] 
});

module.exports  = mongoose.model('BuildingType', BuildingSchema);
 
