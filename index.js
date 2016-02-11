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

})

server.listen(3000, function(){
	console.info('Servidor iniciado en el puerto 3000')
})