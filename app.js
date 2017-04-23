const express = require("express");
const path = require("path");
// const compression = require('compression'); // compression
const helmet = require('helmet'); // security
const handlebars = require('express-handlebars');
// const expressDebug = require('express-debug');
// const bodyParser = require('body-parser');



// launch application
let app = express();

// add security
app.use(helmet());

//
const items = require('./controllers/items');
const auth = require('./controllers/auth');

//
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.resolve(__dirname, 'views/layouts')
}));


// Public file directory
app.use(express.static('public'));

// Define routes.
app.get('/', function(req, res) {
    res.render('home', { user: req.user });
});

// Routing Items Resource
app.use('/items', items);
app.use('/', auth);



// let port = process.env.PORT || 8080;
let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("ready to listen at port 8000!")
});