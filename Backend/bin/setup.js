var app = require('../server');
var http = require('http');

// app.set('port', 3000);

var server = http.createServer(app);
server.listen(3000, () => {
	console.log("listening to 3000");
}).on('error', (err) => { console.log(err); });