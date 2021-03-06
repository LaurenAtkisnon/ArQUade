// reads in our .env file and makes those values available as environment variables
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// create an instance of an express app
const app = express();
const routes = require('./routes/main');
const mongoose = require('mongoose');
const cors = require('cors');
// setup mongo connection
const uri = process.env.MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(cors( {
  origin: 'http://localhost',
}))

mongoose.connection.on('error', (error) => {
  console.log(error);
  process.exit(1);
});
mongoose.connection.on('connected', function () {
  console.log('connected to mongo');
});
// update express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
// main routes
app.use('/', routes);
// catch all other routes
app.use((req, res, next) => {
  res.status(404);
  res.json({ message: '404 - Not Found' });
});
// handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error : err });
});
// have the server start listening on the provided port
//harrison did not change his listening port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
