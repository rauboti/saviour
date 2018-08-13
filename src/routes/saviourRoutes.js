// => node modules
const express = require('express');
const debug = require('debug')('app:saviourRoutes');
//const passport = require('passport');

// => defining routes
const saviourRouter = express.Router();

// => db connection
//const sql = require('../js/db');

function router() {
  // => root of the scarecrow router
  saviourRouter.route('/')
  .get((req, res) => {
    res.render('index', { title: 'Saviour' });
  }).post((req, res) => {
    if (req.body.menu === 'savingGoals') {
      res.redirect('/savinggoals');
    }
  });
  // => The rest of the routes, pages you might want to open up
  saviourRouter.route('/savinggoals')
    .get((req, res) => {
      res.render('savinggoals', { title: 'Saviour' });
    });
  return saviourRouter;
}
module.exports = router;
