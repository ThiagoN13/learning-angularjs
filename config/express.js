var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  // variaveis de ambiente

  app.set('port', 3000);
  app.set('views', './partials');
  app.set('view engine', 'html');


  // middleares
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json())

  load('controllers', {cwd: 'app'})
    .then('routers')
    .into(app);

  return app;
};
