const express = require('express');
const router = express.Router();
var Page = require('../models/Page'); 
var User =require('../models/User'); 

router.get('/', function (req, res, next) {
  //res.send('funcionó GET /wiki/');
  res.redirect('/');
});


router.get('/add', function (req, res, next) {
  //res.send('funcionó GET /wiki/add');
  res.render('addpage');
});

router.post('/', function (req, res, next) {
  console.log(req.body, "aquiiii");

  var page = Page.create({
    urlTitle:  req.body.urlTitle,
    title: req.body.title,
    content: req.body.content,
    status:req.body.status
  }).then(
    res.json(page)
  ).catch(function(error){
    console.log(error)
  }
  );
});
router.get('/:urlTitle', function (req, res, next) {
  res.send('llego a la ruta dinámica con: ' + req.params.urlTitle);
});

module.exports = router;