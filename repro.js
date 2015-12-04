var
  babelify = require("babelify"),
  browserify = require("browserify"),
  fs = require("fs"),
  path = require("path"),
  fsOpts = {encoding: "utf8"};

browserify({
  entries: ["./src/entry"],
})
  .transform(babelify, {
    presets: [
      "es2015",
    ],
  })
  .bundle()
  .pipe(fs.createWriteStream(path.join(__dirname, "dist", "actual.js"), fsOpts))
;
