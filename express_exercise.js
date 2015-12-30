var express = require('express');
var app = express();

app.get('/:operator/:num1/:num2', function(req, res){
	var number1 = Number(req.params.num1);
	var number2 = Number(req.params.num2);
	var op = req.params.operator;

	var ops = {
		"add": function(num1, num2) {
		return num1 + num2;
  	},
  	"sub": function(num1, num2) {
  		return num1 - num2;
  	},
  	"mult": function(num1, num2) {
  		return num1 * num2;
  	},
  	"div": function(num1, num2) {
  		return num1 / num2;
  	},
};

var result = ops[op](number1, number2);

res.send(result.toString());

});

app.listen(8080, function() {
	console.log('Listening on port 8080...');
});