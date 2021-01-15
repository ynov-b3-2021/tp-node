const fs = require("fs");
const path = require("path");

const [_node, _path, dirPath, extension] = process.argv;

fs.readdir(dirPath, (err, filesPaths) => {
  if (err) {
    return console.log(err);
  }
  /*filesPaths.forEach(filePath => {
        if(path.extname(filePath) === `.${extension}`) {
            console.log(filePath)
        }
    })*/

  const filteredFiles = filesPaths.filter((filePath) => path.extname(filePath) === `.${extension}`);
  console.log(filteredFiles.join("\n"));
});
