var sum = 0;
var args = process.argv;
for (i=2;i<args.length;i++){
  sum += +args[i];
}
console.log(sum);
