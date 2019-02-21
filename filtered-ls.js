var fs = require('fs');
const path = require('path');
var arg = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(arg, function callback(error, list){
  list.forEach(function(arg) {
      if (path.extname(arg) === ext) {
          console.log(arg)
      }
  })
})
