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