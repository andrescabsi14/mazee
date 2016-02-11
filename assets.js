
// Serve Static Files
//////////////////////////////////

module.exports.serveStatic = function serveStatic(filePath, callback){
	fs.readFile('public/' + filePath, function(err, data){
		if (err) {
			return callback(err)
		}
		callback( err, data.toString() )
	})
}