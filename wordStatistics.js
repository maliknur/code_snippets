/*
Implement counter of the number of words, chars and lines in a block of text
Input: "The quick brown fox jumps over the lazy dog"
Output: 
  Chars: 43
  Words: 9
  Lines: 1
*/


function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};


DocumentParser.prototype.parse = function()
{

  var text = "";
  var scanner = this.reader.getChunk();
  while(scanner !== ''){ text += scanner; scanner = this.reader.getChunk(); } 
  
  if(text.length == 0) return;
  
  var lines = text.split('\n');
  
  for(var i = 0; i < lines.length; i++){
    var line = lines[i];
    this.charCount += line.length;
    this.wordCount += line.split(' ').filter(function(a){ return a !== '';}).length;
    this.lineCount++;
  }
};

// mock read file
function FileReaderSimulator(text)
{
  var index = -1;
  this.getChunk = function()
  {
    index++;
    return index == text.length ? "" : text.charAt(index);
  };
}

// initializing parser and reader
var fileContent = "The quick brown fox jumps over the lazy dog",
    reader = new FileReaderSimulator(fileContent),
    parser = new DocumentParser(reader);

// output result
parser.parse();
console.log('Chars: ' + parser.charCount);
console.log('Words: ' + parser.wordCount);
console.log('Lines: ' + parser.lineCount);
