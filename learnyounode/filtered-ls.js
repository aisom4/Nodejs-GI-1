var fs = require("fs");

var path = require("path");

var first = process.argv[2];
var x = "." + process.argv[3];

fs.readdir(first, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  result.forEach(function (y) {
    if (path.extname(y) === x) {
      //extension
      console.log(y);
    }
  });
});
