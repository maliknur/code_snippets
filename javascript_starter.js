/**

 A javascript starter  based on node.js for 
 Coursera course on Data Structures and Algorithms
 by University of California, San Diego & Higher School of Economics

 Input:
 4 4
 1 2 
 4 1 
 2 3 
 3 1

Ouput:
 [ [ 4, 4 ], [ 1, 2 ], [ 4, 1 ], [ 2, 3 ] ]


How to use:
node javascript_starter.js
in console line provide inputs, for each line press 'Enter',
to run main function, press Ctrl+C to terminate console input.

**/ 

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
	arrayOfInputs.push(tempArr);
}).on('close', function() {

	// when input finished, call main function to work with inputs
	main(arrayOfInputs);
	

});


// main function where a user should write algorithm to solve a problem.
function main(array) {

	console.log(array);

}