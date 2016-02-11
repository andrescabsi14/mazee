var fs = require('fs');
var http = require('http');

fs.readFile('./public/index.html', function(err, data){
	if (err) {
		return console.log('The file couldnt be opened' + err.message)
	}
	console.log(data.toString().length)
})

console.log('Hello Andrew')

var server = http.createServer(function(request, response){

	console.log('Recieving request' + request.url)

	switch (request.url) {
		case '/':
			// Return index.html
			fs.readFile('./public/index.html', function(err, data){
				if (err) {
					return console.log('The file couldnt be opened' + err.message)
				}
				response.end( data.toString() )
			})
			break
		case '/app.js':
			// Return app.js
			fs.readFile('./public/app.js', function(err, data){
				if (err) {
					return console.log('The file couldnt be opened' + err.message)
				}
				response.end( data.toString() )
			})
			break
		case '/app.css':
			// Return app.css
			fs.readFile('./public/app.css', function(err, data){
				if (err) {
					return console.log('The file couldnt be opened' + err.message)
				}
				response.end( data.toString() )
			})
			break
		default:
			response.end('')
			break
	}
	
})

server.listen(3000, function(){
	console.info('Servidor iniciado en el puerto 3000')
})