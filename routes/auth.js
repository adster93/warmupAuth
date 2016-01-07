var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Auth() {
  return knex('auth');
}

router.get('/', function(req, res) {
  Auth().select().then(function(auth){
    res.render('auth', {
      title: 'Authentication app'
    });
  });
});

module.exports = router;
