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
	if (request.url == '/home') {
		response.writeHead('Content-Type', 'text/plain')
		response.end('Home')
		console.log('Im Home')
	}else{
		response.writeHead('Content-Type', 'text/plain')
		response.end('404')
		console.log('Not found')
	}
	
})

server.listen(3000, function(){
	console.info('Servidor iniciado en el puerto 3000')
})