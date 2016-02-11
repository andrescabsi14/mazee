// Module Dependencies
////////////////////////////
var fs = require('fs')
var EventEmitter = require('events')
var util = require('util')

//Alias
var inherits = util.inherits


// FUNCTION DECLARATION 
///////////////////////////

// Function to re deferr his process to avoid blocked process
function readFileText (name, callback) {
	process.nextTick(function(){
		var content = fs.readFileSync(name)
		callback( content.toString() )
	})
}


// INHERIT NODE EVENTS
///////////////////////////

//Constructor class
function TextReader(name){
	EventEmitter.call(this)
	this.name = name
}

// Inherit from Event Emitter
inherits(TextReader, EventEmitter)


//Add to Class read Method
TextReader.prototype.read = function(){
	var self = this
	readFileText(this.name, function(content){
		self.emit('end', content)
	})
}


// INSTANTIATE AND INVOKE 
///////////////////////////

// Instance
var reader = new TextReader('public/lorem.txt')

// Subscribe to event
reader.on('end', function(content){
	console.log(content)
})

// Read File
reader.read();

console.log('test server')