/**
 * use either libs or the libs coverage
 **/
var path = require('path');
var libs = path.resolve(__dirname, '../../libs/models');
var libs_cov = path.resolve(__dirname, '../libs-cov/models');
require.paths.unshift(libs);
require.paths.unshift(libs_cov);


var vows = require('vows'),
    assert = require('assert'),
    Links = require('links');
Links.init({user_id: 1});

vows.describe('create new link').addBatch({
  'when created': {
    topic: function() {
      var self = this;
      var new_link = {
	url: "https://github.com/ibrow/Lecker/wiki",
	title: "The Lecker Wiki",
	description: "All the latest info about Lecker is here",
	tags: ["lecker", "wiki"],
	permissions: 1
      }
      console.log("create");
      Links.create(new_link, function(records) {
	console.log("pre cb");
	self.callback(null, records);
	console.log("post cb");
      }); 
    },
    'created successfully': function(err,records) {
      console.log("created");
      assert.isTrue(true);
/*
      var id = records[0]._id;
      console.log("id = "+id);
      assert.isTrue((id != undefined));
      */
      console.log("end");
      Links.close();
    }
  }
}).export(module);


