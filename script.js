const fs = require("fs");

const currPath = "./build";
const newPath = "./doc";

fs.rename(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully renamed the directory.");
  }
});
