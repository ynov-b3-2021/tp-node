
// yarn add bl
const bl = require('bl')
const http = require('http')

const [_node, _path, url] = process.argv

http.get(url, (response) => {
	response.pipe(bl((data, err) => {
        if (err) return console.error(err)

        console.log(data.length)
        console.log(data.toString())
    }))
})
