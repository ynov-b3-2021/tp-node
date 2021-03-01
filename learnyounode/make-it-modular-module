const fs = require('fs');
const path = require('path');

module.exports = (directoryPath, extension, callback) => {
    fs.readdir(directoryPath, (err, list) => {
        if(err) { return callback(err, null) }
        const listFiltered = list.filter(file => path.extname(file) === `.${extension}` );
        callback(null, listFiltered);
    })
}
