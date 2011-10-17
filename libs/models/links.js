/**
 * Links
 *
 * Model for creating, retrieving, updating and deleting (CRUD) the links
 *
 * @package Lecker
 * @subpackage Models
 ****************************************
 Yes! This is fantastically messy. But I will tidy up, just trying
 to get the basics down first
 **/
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


var Model = function(collection) {
    this.collection = collection;
    this.db = new Db('lecker', new Server('127.0.0.1', 27017, {}));
}
Model.prototype.connect = function(callback) {
    self = this;
    if(self.db.state != 'connected') {
	self.db.open(function(err, db) {
	    self.db = db;
	    if(err) {
		throw {name: 'DB Error', message: err};
	    }
	    callback();
	});
    }
    else {
	callback();
    }
}
Model.prototype.getCollection = function(callback) {
    self = this
    self.connect(function() {
	self.db.collection(self.collection, function(err, collection) {
	    if(err) {
		throw {name: 'Collection Error', message: err};
	    }
	    callback(collection);
	});
    });
}
Model.prototype.find = function(options, callback) {
    self = this;
    this.getCollection(function(collection) {
	collection.find(options).toArray(function(err, results) {
	    if(err) {
		throw {name: 'Find Error', message: err};
	    }	
	    callback(results);
	});
    });
}



var Links = Object.create(new Model('links'));

var l = Links;

// get all
console.log("start");
l.find({}, function(r) {
    console.log(r);

    // pagination example
    console.log("pag");
    l.find({"limit": 10, "skip": 10}, function(r) {
	console.log(r);

	// filter by tags
	console.log("tags");
	l.find({$or:[{"tags": "javascript"}, {"tags": "nodejs"}]}, function(r) {
	    console.log(r);
	    process.exit();
	});

    });
});




/**
##Creation of Indexes
db.links.ensureIndex({"user_id":1, "date_added":-1});
db.links.ensureIndex({"url": 1});
db.links.ensureIndex({"tags": 1});

## Insert Command
doc1 = {user_id: 1, title: 'My Blog', description: 'Do I really need this?', url: 'http://www.robsearles.com', tags: ['javascript', 'nodejs', 'blog', 'php'], date_added: new Date(), permissions: 1};
db.links.insert(doc1);
doc2 = {user_id: 1, title: 'My Work', description: 'I probably do not need this', url: 'http://www.ibrow.com', tags: ['blog', 'apps', 'outdated'], date_added: new Date(), permissions: 1};
db.links.insert(doc2);
**/

