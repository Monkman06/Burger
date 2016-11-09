/*Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.all(function (data) {
    var hbsObject = { burgers: data }
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res) {
  burger.create(['name', 'burger_name'], [req.body.name, req.body.burger_name], function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
 
 var setCol = 'devoured' + req.body.devoured;
  burger.update(setCol, condition, function (data) {
    res.redirect('/burgers');
  });
});
 router.delete('/burgers/delete/:id',function(req,res){
         var condition = 'id = ' + req.params.id;
         burger.delete(condition, function (data){
          res.reditect('/burgers');
         });
 });
module.exports = router;
