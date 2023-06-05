var fs = require("fs");

fs.readFile(process.argv[2], "utf8", function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  var newLine = result.toString().split("\n").length - 1;

  console.log(newLine);
});
