$(npm bin)/browserify src/entry.js -t [ babelify --presets es2015 ] > dist/actual.js
