const fs = require('fs-extra');

const currPath = './dist/nimjetushar.github.io';
const newPath = './docs';

fs.copy(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully copied the directory.');
  }
});
