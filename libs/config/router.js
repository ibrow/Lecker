

/**
 * Router configuration
 **/
var Q_Router = function(app) {
  // decide which version of the site viewing
  // desktop, mobile or api
  this.set_site_version(app);

  // hand off to the different routes
  this.home(app);
  this.account(app);
}
Q_Router.prototype.set_site_version = function(app) {
  // we have alread set the version
  if(app.set('site_version') != undefined) {
    return;
  }

  // functionality to work out which version
  app.set('site_version', 'desktop');
}

Q_Router.prototype.load_controller = function(controller, app) {
  console.log("site version = "+app.set('site_version'));
  return require('../controllers/'+app.set('site_version')+'/home');
}

Q_Router.prototype.home = function(app) {
  var home = this.load_controller('home', app);
  app.get('/', function(req, res) {
    home.index(req, res);
  });
}

Q_Router.prototype.account = function(app) {

}

module.exports = Q_Router;