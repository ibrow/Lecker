/**
 * Model Base 
 *
 * This is the basic model functionality. All other models will
 * be created off this
 **/
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

/**
 * Model "constructor". 
 * Sets the name of the collection and connects to database
 * @param string name of the collection this model maps to
 **/
var Model = function(collection) {
    this.collection = collection;
    this.db = new Db('lecker', new Server('127.0.0.1', 27017, {}));
}
/**
 * Connects to the database 
 * @param function callback to execute after connection established
 **/
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
/**
 * Gets the collection for this model
 * @param function callback to execute once collection loaded
 **/
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
/**
 * Wrapper for the mongo find command, with error checking etc
 * @param object options to pass to the find command
 * @param function callback to execute once results returned
 **/
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

module.exports = Model;