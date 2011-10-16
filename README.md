# Lecker - German for Delicious

Fed up with Delicious's new design I have decided to rustle up my own clone.

## Does the world need "Yet Another Delicious Clone" TM

### Short Answer

No

### Long Answer

Nein

### So Why Bother?

This is a test project for me to:

* get better at Node, especially the TDD and BDD side of things
* provide me with somewhere to store my bookmarks
* see if I can do this rapidly, with 1/2 an hour here and there.

## Tools. 

This is built this in NodeJS(1), using the Express(2) framework, using MongoDB(3) for data storage. 

I am trying to build this (as best as I can) using both TDD (for DB related stuff) and BDD (for the visual stuff). NodeUnit(4) is the unit testing suite, Vows(4) is the BDD suite.

## Installation

Simply clone this repository, navigate to the root directory and then run npm to install dependencies:

    git clone git@github.com:ibrow/Lecker.git
    cd Lecker
    npm install -d

Next, you need to configure your MongoDB settings

    @TODO - Rob, need to fill this out

Finally, to ensure all working, run the tests

    @TODO - Rob, need to fill this out


## Please Fork.

This is released under the MIT License(6), so please fork, improve and send me a pull request.


## Notes

1. http://nodejs.org/
2. http://expressjs.com/
3. http://www.mongodb.org/
4. https://github.com/caolan/nodeunit
5. http://vowsjs.org/
6. http://en.wikipedia.org/wiki/MIT_License
