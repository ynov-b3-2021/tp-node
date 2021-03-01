const http = require('http')
const bl = require("bl")

const [_node, _path, ...urls] = process.argv


const results = {};

urls.forEach((url) => http.get(url, response => {
    response.pipe(bl((err, data) => {
        if (err) return console.log(err)
        results[url] = data.toString()

        if (Object.keys(results).length === urls.length) {
            urls.forEach((url) => {
                console.log(results[url])
            })
        }

    }))
}))




