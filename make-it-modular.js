var myFile = require('./modular-file.js');
var dir = process.argv[2];
var getString = process.argv[3];

myFile(dir, getString, function (error, list) {
  if (error)
    return console.error('There was an error:', error);

  list.forEach(function (file) {
    console.log(file);
  })
})
