var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3001;

//Serve static content for the app from the "public" directory in the application directory.
//boilerplate code
app.use(express.static(process.cwd() + '/public'));

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
var routes = require('./controllers/borrow_controller.js');
app.use('/', routes);

// app.get('/', function (req, res) {
//     res.render('index');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.listen(PORT);