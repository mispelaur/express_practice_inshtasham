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

instagram.set('client_id', process.env.EXPRESS_PRACTICE_INSHTASHAM_CLIENT_ID);
instagram.set('client_secret', process.env.EXPRESS_PRACTICE_INSHTASHAM_CLIENT_SECRET);

// console.log(instagram);

// run `ngrok http 3000` and change url below accordingly
instagram.set('callback_url', 'https://5bb041cb.ngrok.io/callback');
instagram.set('maxSockets', 10);

instagram.subscriptions.subscribe({
  object: 'tag',
  object_id: 'nyc'
});

router.get('/', function(req, res){
  res.render('index', {header: 'index'});
});

app.get('/callback', function(req, res){
  instagram.subscriptions.handshake(req, res);
  // console.log(req);
})

app.post('/callback', function(req, res){
  var data = req.body;
  console.log(data);
});

app.use('/', router);

server.listen(port, function(){
  console.log('Server running on http://localhost/' + port);
});


















