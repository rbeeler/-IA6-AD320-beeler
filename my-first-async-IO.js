
var fs = require('fs');
var buf = process.argv[2];

fs.readFile(buf, 'utf8', myCallback);

function myCallback(error, contents){
  //if error{console.log(error);}
    var str = contents.split('\n').length - 1;
    console.log(str);
}
