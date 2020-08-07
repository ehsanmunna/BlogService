// Require express and create an instance of it
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./app/config/app');
const routeConfig = require('./app/config/route');
const app = express();

// const router = require('express').Router();

//Mongo connection
// mongoose.connect('mongodb://ehsan:M123456@ds263048.mlab.com:63048/ourfamily', { useNewUrlParser: true, useCreateIndex: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Mongo connection error:'));
// db.once('open', function() {
//   console.log('db connected!')
// });

app.use(cors());
app.use(morgan('dev'));
// app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routeConfig.routes(app);
// app.use('/report', require('./app/controller/Route'));

// Change the 404 message modifing the middleware
app.use((req, res, next) => {
  const error = new Error('Sorry, that route doesn\'t exist');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// app.use('/report',(req,res)=>{
//     res.send('hello world')
// })



// start the server in the port 3000 !
app.listen(config.port, function () {
    console.log(`${config.projectName} app. listening on port ${config.port}`);
  console.log(`swagger: http://localhost:${config.port}/api-docs`);
});

module.exports = app;
