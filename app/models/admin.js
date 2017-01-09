var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  name:  String,
  email: String,
  phone: String,
  password :  String,
  profilePicUrl : String
});

module.exports  = mongoose.model('admin', adminSchema);
 
