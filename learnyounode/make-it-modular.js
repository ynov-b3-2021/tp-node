const filterFilesExtension = require('./make-it-modular-module');

const [_node, _path, directoryPath, extension] = process.argv;


filterFilesExtension(directoryPath, extension, (err, list) => {
    if (err) { return console.log(err) }
    list.forEach(file => {
        console.log(file);
    })
})
