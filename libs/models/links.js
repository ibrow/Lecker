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

var l = Object.create(new Model('links'));

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

