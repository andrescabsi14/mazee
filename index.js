var fs = require('fs')
var http = require('http')
var assets = require('./assets.js')

// Create Server
//////////////////////////////////
var server = http.createServer(function(request, response){

	console.log('Recieving request' + request.url)

	// End Points
	//////////////////////////////////
	switch (request.url) {
		case '/':
			// Return index.html
			assets.serveStatic('index.html', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		case '/app.js':
			// Return app.js
			assets.serveStatic('app.js', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		case '/app.css':
			// Return app.css
			assets.serveStatic('app.css', function(err, content){
				response.end(content)
				if (err) {
					return response.end(err)
				}
			})
			break
		default:
			response.statusCode = 404
			assets.serveStatic('404.html', function(err, content){
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