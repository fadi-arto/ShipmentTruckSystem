var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session  = require('express-session');
const flash = require('connect-flash');
const localStrategy = require('passport-local').Strategy;
const cors = require('cors');
const bodyParser = require("body-parser");
var http = require('http');
const axios = require('axios');
const cars = require('./Entity/cars');
mongoose.set('strictQuery', false);


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var ClintRouter = require('./routes/clients');
var CentersRouter = require('./routes/center');
var CompanyRouter = require('./routes/company');
const mangadmin = require('./routes/admin');
var app = express();
const server = require('http').createServer(app);
var io = require('socket.io')(server,{
  cors:{
    origin:"*"
  }
  })
  
   
    io.on("connection", (socket) => {
       const token = socket.handshake.query.token;
      socket.on("latitude", async (arg) => {
      const updateCarLocation = await cars.findByIdAndUpdate(
        token,
        {Location : arg },
        { safe: true, upsert: true, new: true }
      )
      socket.emit("latitude", arg); 
      socket.emit("latitude", arg); 
     });
      });
      io.on('disconnect', ()=>{
        console.log('disconnect');
      })
  
      io.on("connection", (socket) => {  
        console.log("connections");
        socket.on("testsocket", async (arg) => {
          console.log(arg); 
          const updateCarLocation = await cars.findOne({Car_plate : arg});
          socket.emit("updateCarLocation", updateCarLocation); 
        });
       });
       io.on('disconnect', ()=>{
         console.log('disconnect');
       })

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

const dbURI = 'mongodb+srv://tarcking:12345@nudetuts.vtv2cor.mongodb.net/note-tuts?retryWrites=true&w=majority' ;  
mongoose.connect(dbURI , {useNewUrlParser : true , useUnifiedTopology : true})
  .then((result)=>{
    console.log("connection");
  })
  .catch((err)=> console.log(err));


require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
var corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8080']
}
app.use(cors(corsOptions));
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({ secret: 'shipping-jp', resave: true, saveUninitialized: true }));/// for creat new session between server and client
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));






app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/managecar',carRouter);
app.use('/mangeclint' , ClintRouter);
app.use('/mangecenter' ,CentersRouter);
app.use('/mangecompany',CompanyRouter);
app.use('/admin',mangadmin);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
server.listen(3000,()=>{
  console.log('listening on port 3000 ')
  })
module.exports = app;
