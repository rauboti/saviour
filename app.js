// => node modules => 178.128.172.245
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
//const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
//const passport = require('passport');
//const cookieParser = require('cookie-parser');
//const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

// => defining routes
const saviourRouter = require('./src/routes/saviourRoutes')();

// => extra logging (morgan), parsing av POST requests (body-parser) & favicon
app.use(morgan('tiny'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(session({ secret: 'scarecrow' }));
//require('./src/config/passport.js')(app);
//app.use(favicon(path.join(__dirname, '/public/ico', 'favicon.ico')));

// => static folder for source files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/src/css')));
app.use('/js', express.static(path.join(__dirname, '/src/js')));
//app.use('/img', express.static(path.join(__dirname, '/src/img')));
//app.use('/ico', express.static(path.join(__dirname, '/src/ico')));

// => setting up EJS as a template engine
app.set('views', './public/views');
app.set('view engine', 'ejs');

app.use('/', saviourRouter);

// => listening to port
app.listen(port, () => {
  debug(`Server up, listening to port ${chalk.cyan(port)}`);
});
