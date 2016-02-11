var fs = require('fs');
var http = require('http');

// Server Functions
//////////////////////////////////
function serveStatic(filePath, callback){
	fs.readFile('public/' + filePath, function(err, data){
		if (err) {
			return callback(err)
		}
		callback( err, data.toString() )
	})
}

// Create Server
//////////////////////////////////
var server = http.createServer(function(request, response){

	console.log('Recieving request' + request.url)

	// End Points
	//////////////////////////////////
	switch (request.url) {
		case '/':
			// Return index.html
			serveStatic('index.html', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		case '/app.js':
			// Return app.js
			serveStatic('app.js', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		case '/app.css':
			// Return app.css
			serveStatic('app.css', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		default:
			response.statusCode = 404
			serveStatic('404.html', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
	}
	
})

// Start Server
//////////////////////////////////
server.listen(3000, function(){
	console.info('Servidor iniciado en el puerto 3000')
})