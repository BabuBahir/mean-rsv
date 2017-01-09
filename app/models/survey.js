var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  userId:  String,
  datetime: String,
  status: String,
  QuestionsAnswered : [
  		{
  			QuestionText : String,
  			OptionSelected : String
  			QuestionID : String
  		}
  ],
  building_type : [
				  	 {
				  	 	[{ type: Schema.Types.ObjectId, ref: 'BuildingType' }]
				  	 }
				  ],
  survey_img : { [ url :String ] },
  generalTechnicalInfo : [ 
  	{
      
  	}
  ]
  addressInfo : {
  	 city : String,
  	 LocalAuthority : String,
  	 Latitude : String,
  	 EarthquakeZone : String,
  	 SoilGrade
  }
});

module.exports  = mongoose.model('Survey', SurveySchema);
 
