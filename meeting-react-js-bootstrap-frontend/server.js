var express = require('express');

//create our app

var app = express();

app.use(express.static('app'));

app.listen(3001, function(){
	console.log('Express server is up on 3001');
})
