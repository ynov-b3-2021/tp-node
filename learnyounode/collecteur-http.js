// Premiere methode

const http = require('http');

const [_node, _path, linkHttp] = process.argv;

// let body = '';
const body = [];

http.get(linkHttp, response => {
    response.on('data', data => {
        // body = body + data;
        body.push(data.toString());
    });
    response.on('end', () => {
        const result = body.join('')
        // console.log(body.length);
        // console.log(body);
        console.log(result.length);
        console.log(result)
    });
});
