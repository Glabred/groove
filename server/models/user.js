// import node modules
const mongoose = require('mongoose');

// define a schema
const UserModelSchema = new mongoose.Schema ({
  name        	: String,
  _id           : String,
  top_artist   	: String,
  access_token  : String,
  refresh_token : String,
  top_songs     : Object,
});

// compile model from schema
module.exports = mongoose.model('UserModel', UserModelSchema);