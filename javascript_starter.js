var arrayOfInputs = [];
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function(line){
	var tempArr = line.split(' ');
	tempArr = tempArr.map(function(e){
		return parseInt(e);
	});
	arr.push(tempArr);
}).on('close', function() {
	console.log(arr);
});