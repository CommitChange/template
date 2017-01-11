#!/bin/bash

echo "making docs directory if it doesn't exist..."
mkdir -p docs
echo "copying index.html into docs/index.html..."
cp index.html docs/index.html
echo "browserifying index.js into docs/index.js..."
browserify -v -t babelify index.js | uglifyjs > docs/index.js
echo "compiling index.css into docs/build.css"
npm run build-css

