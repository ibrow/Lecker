#!/bin/bash

# generate the coverage instruments
jscoverage ../libs ./libs-cov

## run vows
../node_modules/vows/bin/vows "$@"