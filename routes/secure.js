const express = require('express');
const asyncMiddleware = require('../middleware/asyncMiddleware');
const DestModel = require('../models/destModel');

const router = express.Router();


router.get('/destination', asyncMiddleware(async (req, res, next) => {
  const dest = await DestModel.find({}, { Room_ID: 1 } );
  res.status(200).json(users);
}));
module.exports = router;
