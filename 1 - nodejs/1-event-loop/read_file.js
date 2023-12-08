const { error } = require("console");
const { readFile, writeFile } = require("fs");

console.log("first task");

readFile("./a.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("task completed");
});
