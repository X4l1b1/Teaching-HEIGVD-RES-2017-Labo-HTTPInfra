var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send(generateFinnish());
});

app.listen(3000, function(){
	console.log("Accept req on port 3000.");
});

function generateFinnish(){

	var numberOfSentences = chance.integer({
		min : 0,
		max : 10
	});
	console.log(numberOfSentences);
	var sentences = [];
	for(var i = 0; i < numberOfSentences; i++){
		var req = chance.sentence({words : 5}) + "?";
		var ans = chance.sentence();
		sentences.push({
			req,
			ans
			});
		};
	
	console.log(sentences);
	return sentences;
}
