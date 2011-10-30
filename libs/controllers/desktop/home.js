/**
 * Home Page
 **/
// controller inherits from the base
var controller = require('../../core/controller.js');
controller.site_version = 'desktop';
var home = Object.create(controller);
home.views = 'desktop/';

home.index = function(req, res) {
  console.log("display home page");
  res.render(this.views+'home', {
    title: 'Home ',
    region: 'Another example variable'
  })
}


module.exports = home;