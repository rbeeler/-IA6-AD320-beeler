var http = require('http');
var arg = process.argv[2];

http.get(arg, function myCallback (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
})
.on('error', console.error);
