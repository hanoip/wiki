var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wiki', {
  logging: false
});


// var User = require('./User');
// var Page = require('./Page');

module.exports = { db }