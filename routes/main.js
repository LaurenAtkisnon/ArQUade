const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middleware/asyncMiddleware');
const DestModel = require('../models/destModel');

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

router.get('/destination', asyncMiddleware(async (req, res, next) => {
  const {Room_ID} = req.query;
  console.log(req.query);
  console.log(Room_ID);
  const dest = await DestModel.find({"Room_ID": Room_ID});
  console.log(JSON.stringify(dest));
  res.status(200).json(dest);
}));



module.exports = router;
