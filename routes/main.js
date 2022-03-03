const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middleware/asyncMiddleware');
const DestModel = require('../models/destModel');
const TaskModel = require('../models/taskModel');

router.get('/status', (req, res, next) => {
  res.status(200);
  res.json({ 'status': 'ok' });
});
/*
router.get('/destination', (req, res, next) => {
  res.status(200);
  res.json({ 'status': 'ok' });
});
*/

/*
router.post('/test', asyncMiddleware(async (req, res, next) => {
    const {Room_ID} = req.body;
    console.log(Room_ID);
    console.log(JSON.stringify(req.body));
    await DestModel.create({ Room_ID });
  res.status(200);
  res.json({ 'status': 'ok' });
}));
*/

// method that will query the database using the Room_ID
router.get('/destination', asyncMiddleware(async (req, res, next) => {
  const {Room_ID} = req.query;
  console.log(req.query);
  console.log("Room_ID = " + Room_ID);
  const dest = await DestModel.findOne({"Room_ID": Room_ID});
  console.log(JSON.stringify(dest));
  res.status(200).json(dest);
}));

// method that will query the database using the Room_ID
router.get('/allroomdata', asyncMiddleware(async (req, res, next) => {

  const dest = await DestModel.find();
  console.log(JSON.stringify(dest));
  res.status(200).json(dest);
}));

// method that will query the database using the Task_ID
router.get('/task', asyncMiddleware(async (req, res, next) => {
  const {Task_ID} = req.query;
  console.log(req.query);
  console.log(Task_ID);
  const dest = await TaskModel.findOne({"Task_ID": Task_ID});
  console.log(JSON.stringify(dest));
  res.status(200).json(dest);
}));


module.exports = router;
