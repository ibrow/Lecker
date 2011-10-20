var Links = require('./libs/models/links.js');


Links.init({user_id: 1});

var new_link = {
    url: "http://www.google.com",
    title: "Google Homepage",
    description: "This is Google, what more do you need to know?",
    tags: ["search", "google"],
    permissions: 1
}
Links.create(new_link, function(records) {
    console.log("Created: "+records[0]._id);

    Links.getPage({'tags': ["javascript"]}, function() {
	Links.getPage(
	    {
		page: 2, 
		items_per_page: 1
	    }, 
	    function() {
		process.exit();
	    }
	);
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

