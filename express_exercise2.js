var express = require('express');
 var app = express();
//  app.get('/', function(req, res) {
//  	res.send('Hello, express');
//  });
// app.get('/eric', function(req, res) {
// 	res.send('Hello Eric');
// });
function capitalizeFirstLetter(string) {
	var words = string.split('-');
	var result = [];
	for (var i = 0; i < words.length; i++) {
		result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
	}
	return result.join(' ');
}
app.get('/:name', function(req, res) {
	var name = capitalizeFirstLetter(req.params.name);
	res.send("Hello, " + name);
});
 app.listen(8000, function() {
 	console.log('Listening on port 8000...');
 });
 