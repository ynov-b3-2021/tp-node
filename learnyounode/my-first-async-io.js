const fs = require('fs')
const [node, path, filePath ] = process.argv

fs.readFile(filePath, (err, data) => console.log(data.toString().split('\n').length - 1))
