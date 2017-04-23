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

// add resources
const users = require('./controllers/users.js');
const auth = require('./controllers/auth.js');

// set default views directory
app.set('views', path.join(__dirname, 'views'));

// set default view engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.resolve(__dirname, 'views/layouts')
}));


// public file directory e.g. for css files, static html pages, etcs
app.use(express.static('public'));

// Define routes.
app.get('/', function(req, res) {
    res.render('pages/index', { user: req.user });
});

// Routing Items Resource
app.use('/users', users);
app.use('/auth', auth);



// Start server at Port X
let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("ready to listen at port 8000!")
});