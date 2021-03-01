const http = require("http")

const [_node, _path_, ...urls] = process.argv;
const results = {}
urls.forEach((url) => {
  
	http.get( url, res => {
		let tempData = ""
    
		res.setEncoding('utf8');
		res.on( "data", d => {
			tempData += d
		})
    
		res.on( "end", function () {
			results[url] = tempData
      
			if ( Object.keys(results).length === urls.length ) {
				urls.forEach((url) => {
					console.log( results[url] )
				})
			}
		})
	})
})
