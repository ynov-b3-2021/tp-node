const fs = require('fs')

const [_node, _path, filePath] = process.argv
const linesQuantity = fs.readFileSync(filePath).toString().split('\n').length - 1
console.log(linesQuantity)
