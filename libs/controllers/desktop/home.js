/**
 * Home Page
 **/
// ?? why doesn't this work??
require.paths.unshift('../../core');
require.paths.unshift('../../models');


var Links = require('../../models/links');

// controller inherits from the base
var controller = require('../../core/controller');
controller.site_version = 'desktop';
var home = Object.create(controller);


home.views = 'desktop/';

home.index = function(req, res) {
  console.log("display home page");

  var self = this;
  
  Links.getPage(
    {
      page: 2, 
      items_per_page: 1
    }, 
    function(results) {
      console.log(results);
      console.log("---");
      res.render(self.views+'home', {
	title: 'Home ',
	items: results,
	current_user: "rob"
      })
      
    }
  );
}


module.exports = home;