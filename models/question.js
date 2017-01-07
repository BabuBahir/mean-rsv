var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    questionType: String,
    question: {
        text: {
            Hindi: String,
            English: String,
            Gujarati: String
        },
        options: [{
            Hindi: String,
            English: String,
            Gujarati: String
        }]
    },
    needAssistance: {
        title: {
            [
                Hindi: String,
                English: String,
                Gujarati: String
            ]
        },
        description: {
            [
                Hindi: String,
                English: String,
                Gujarati: String
            ]
        }
    },
    buildingId: [{
        type: Schema.Types.ObjectId, 
        ref: 'BuildingType'
    }],
    questionImgUrl: [String],
    questionVideoUrl: [String]
});

module.exports  = mongoose.model('Question', questionSchema);
 
