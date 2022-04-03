const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const TaskSOCESchema = new Schema ({

  Task_ID : {
    type: Number,
    required : true,
    unique: true
  },
  Task_Name :{
    type: String,
    required : false
  },
  Task_Description_Image :{
    type: String,
    required : false
  },
  Task_Completed_Message :{
    type: String,
    required : false
  },
  Prereq_Task :{
    type: String,
    required : false
  },
  Story_Line :{
    type: Number,
    required : false
  },
  Destination :{
    type: Array,
    required : false
  }

});

const TaskSOCEModel = mongoose.model('taskSOCE', TaskSOCESchema);
module.exports = TaskSOCEModel;
