/**
 * Home Page
 **/
// controller inherits from the base
var controller = require('../core/controller.js');
var home = Object.create(controller);

home.index = function(req, res) {
  console.log("display home page");
    res.render('artists/detail', {
	title: 'Artist Detail ' + req.params.show_id,
	region: 'Another example variable'
    })
}


module.exports = home;