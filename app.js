const express = require('express');
const  routes = require('./routes'); 
var exphbs  = require('express-handlebars');



var port = process.env.PORT || 3000

var app = express();
app.use(routes);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));
app.listen(port);