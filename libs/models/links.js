/**
 * Links
 *
 * Model for creating, retrieving, updating and deleting (CRUD) the links
 *
 * @package Lecker
 * @subpackage Models
 **/
// The Links model extends the basic Model functionality
var Model = require('./_model');
var Links = Object.create(new Model('links'));

/**
 * Inits the Links model, setting user_id
 **/
Links.init = function(options) {
  if(options.user_id != undefined) {
    this.user_id = options.user_id;
  }
}

/**
 * Inserts link into database, executing callback on success
 * @param object - link values to insert to database
 * @param function - callback, passes mongo records
 **/
Links.create = function(link_values, callback) {
  // possibly validate/sanitize link_values here??
  link_values.date_added = new Date();
  if(link_values.user_id == undefined) {
    link_values.user_id = this.user_id;
  }
  var options = {safe: true};
  this.insert(link_values, options, callback);
}


/**
 * Get a page of links
 * options:
 * - tags: array of tag strings to filter links by
 * - items_per_page: number of items to return
 * - page: page number to display
 *
 * @param options object
 * @param callback function
 **/
Links.getPage = function(options, callback) {
  // apply any filters
  var query_filter = this._getQueryFilter(options);

  // get passed options or defaults
  var query_options = this._getQueryFilter(options);

  // conduct find
  this.find(query_filter, query_options, function(results) {
    console.log("RESULT");
    console.log(results);
    callback();
  });
}

/**
 * Private function to construct the query filter object to pass to
 * the MongoDB find method
 * Called by getPage
 * @return object of query filters
 **/
Links._getQueryFilter = function(options) {
  var query_filter = {}
  
  if(options.user_id != undefined) 
    query_filter.user_id = options.user_id;
  else 
    query_filter.user_id = this.user_id;

  if(options.tags != undefined) {
    var or_array = [];
    for(var tag in options.tags) {
      or_array.push({'tags': options.tags[tag]});
    }
    query_filter['$or'] = or_array;
  }
  return query_filter;
}

/**
 * Private function to construct the query options object to pass to
 * the MongoDB find method
 * Called by getPage
 * @return object of query options
 **/
Links._getQueryOptions = function(options) {
  if(options.page == undefined || options.page < 1)
    this.page = 1;
  else
    this.page = options.page

  if(options.items_per_page == undefined)
    this.items_per_page = 10;
  else
    this.items_per_page = options.items_per_page

  // construct the options we'll send to find
  return query_options = {
    limit: (this.page * this.items_per_page),
    skip: ( (this.page-1) * this.items_per_page)
  };
}


module.exports = Links;
