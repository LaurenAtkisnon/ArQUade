const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const DestSOCEDownstairsSchema = new Schema ({

  Room_ID : {
    type: Number,
    required : true,
    unique: true
  },
  Link_North_ID :{
    type: Number,
    required : false
  },
  Link_East_ID : {
    type: Number,
    required : false
  },
  Link_South_ID : {
    type: Number,
    required : false
  },
  Link_West_ID : {
    type: Number,
    required : false
  },
  Room_Description : {
    type: String,
    required: false
  },
  picNorth: {
    type: String,
    required: false
  },
  picEast: {
    type: String,
    required: false
  },
  picSouth: {
    type: String,
    required: false
  },
  picWest: {
    type: String,
    required: false
  }

});

const DestSOCEDownstairsModel = mongoose.model('destinationsocedown', DestSOCEDownstairsSchema);
module.exports = DestSOCEDownstairsModel;
