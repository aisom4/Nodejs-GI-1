var fs = require("fs");

var first = fs.readFileSync(process.argv[2]);
var newLine = first.toString().split("\n").length - 1;
console.log(newLine);
