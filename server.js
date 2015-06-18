var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    morgan = require('morgan'),
    router = express.Router(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    instagram = require('instagram-node-lib');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');


router.get('/', function(req, res){
  res.render('index', {header: 'index'});
});

app.use('/', router);

server.listen(port, function(){
  console.log('Server running on http://localhost/' + port);
});


















