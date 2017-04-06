var exec = require('child_process').exec;
var express = require('express');
var app = express();

var pythonFileName = 'display.py';


//Home
app.get('/', function(req, res) {
  res.type('text/plain');
  res.send(
	"On the URL, write one or two texts as parameters with maximum of 16 characters each."
    + "\n"
    + "They will be displayed as first and second lines on the LCD (respectively)."
    + "\n\n"
    + "Example using only one line: \"/lcd/Text of 16 chars\" (note that this example has exactly 16 characters)."
    + "\n"
    + "Example using both lines: \"/lcd/First line/Second line\" (note that each line has its maximum of 16 characters, making a total of 32 characters)."
  );
});


//Only first line
app.get('/lcd/:firstLine', function(req, res) {
  var firstLine = req.params.firstLine;
  var cmd = 'python ' + pythonFileName + ' "' + firstLine + '"';
  
  exec(cmd, function(error, stdout, stderr) {
	var msg = "Text of the first line: " + firstLine;
	res.type('text/plain');
	res.send(msg);
    console.log(msg);
    
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});


//Both lines
app.get('/lcd/:firstLine/:secondLine', function(req, res) {
  var firstLine = req.params.firstLine;
  var secondLine = req.params.secondLine;
  var cmd = 'python ' + pythonFileName + ' "' + firstLine + '"' + ' "' + secondLine + '"';
  
  exec(cmd, function(error, stdout, stderr) {
	var msg = "Text of the first line: " + firstLine;
	msg += "\n";
	msg += "Text of the second line: " + secondLine;
	res.type('text/plain');
	res.send(msg);
    console.log(msg);
    
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});


var port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '.');
