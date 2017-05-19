var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3001;

//Serve static content for the app from the "public" directory in the application directory.
//boilerplate code
app.use('/public', express.static(__dirname + '/public'));

//Body Parser//
app.use(bodyParser.urlencoded({
	extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method')) //do I need this?//

//Express handlebars route to main.handlebars//
app.engine('handlebars', exphbs({defaultLayout: 'main'}));


app.set('views', path.join(__dirname, 'views/layouts')); // ?
app.set('view engine', 'handlebars');


// Import routes and give the server access to them.
var routes = {
	html: require("./routes/html-routes.js"),
	api: require("./routes/api-routes.js")
};

app.use(routes.html);
app.use(routes.api);

// app.get('/', function (req, res) {
//     res.render('index');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.listen(PORT);