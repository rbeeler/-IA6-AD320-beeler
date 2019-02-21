var http = require('http');
var bl = require('bl');
var arg = process.argv[2];

http.get(arg, function myCallback(response) {
  response.pipe(bl(function callback(error, data) {
    if (error)
      return console.error(error);
    var data = data.toString();
    var length = data.length;
    console.log(length);
    console.log(data);
  }))
})
