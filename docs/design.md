# Design of Lecker

This is basically my scratch pad for thoughts about how I should layout, structure and design. Both from a code and UI point of view.

## Code Structure

As we are using Express, we need at least a directory holding the views, plus one for the public static files (such as css, images etc).

* app.js - the actual application to run
* docs - directory to contain docs and my thoughts
* libs - contains the application level code
  * config - configuration files (such as routers etc)
  * controllers - controllers
  * helpers
  * models
  * views - holds the Jade view files
* public
  * css
  * scripts
  * images
* tests
  * nodeunit - holds nodeunit powered tests
  * vows - holds vows powered tests

## Data Structure

As we are using MongoDB which is a NoSQL (non-relational database engine) we need to think quite carefully about both data integrity and ease of use.

### Collections

#### Links

This is where the actual links are kept. It is one link per document

* _id
* user_id - unneeded for now, but possibly have multiple users one day - indexed
* title
* description (am thinking that I don't even need a description)
* url - indexed
* tags - array of tags
* date_added - indexed
* permissions - public/private, again, not needed until we have multiple users

#### Tags

We want to keep a record of all tags used

* _id
* name
* count - total times this tags has been used

#### Users

Not needed for now, but if we go for multiple users, will be as follows:

* _id
* name
* some sort of login id stuff (twitter/open id creds etc)
* tags - array of tags with total count for each tag

### Thoughts

Based on the above, when ever we add, update or remove a link we will have to update 3 collections - amending the Links collection itself, but then also updating the Tags and Users collections to ensure the data integrity. 

Whilst this seems a touch excessive, I guess this is one of the trade offs for using a NoSQL DB solution as opposed to say MySQL.


## Validation and structure

Now, here's a thought. I'm at the point now where I am adding the functionality for inserting a new link (commit: c375c22). I've come to an interesting problem (problem is too harsh, but something along those lines) regarding validation and sanitization.

Obviously if the backend is Javascript, and we have a nice ajaxy type frontend, which also uses Javascript, they should both share the same validation. Should always validate server side, and if you can, client side. So far so good - Chriso's Node-Validator is looking good: https://github.com/chriso/node-validator


## Translation

Obviously the world is made up of more than just English. As such, need to cope with some translation files.

Should they be files, or in the database?

could possibly have a file structure like:
/lib/i8ln/en.js
/lib/i8ln/en_US.js
/lib/i8ln/fr.js
/lib/i8ln/es.js

the files could be like:
export.lang = {
	    key: 'translation',
	    another: {
	    	       key2: 'another translation'
	}
}
These can then be injected into the views via the controller, or via the set app method.

Also, language SHOULD NOT be set by your location. Instead should default to your browser language settings until you change it.

