# Tests / BDD

After testing out the major testing libraries (node-unit, expresso and vows) I decided to go with Vows. Mainly because it was the one I could get code coverage to work with the least amount of hassle.

## Running The Tests

[vows](http://vowsjs.org) must be installed.

from the root of the project run:
`vows ./tests/vows/[test-to-run.js]`

## Code Coverage

You must have node-jscoverage installed

I have written a shell script to create the needed instrument files and then run vows:

`./vows.sh --cover-plain ./vows/[test-to-run]`
