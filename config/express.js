var express = require('express'),
    load = require('express-load');

module.exports = function() {
  var app = express();

  // variaveis de ambiente

  app.set('port', 3000);
  app.set('views', './partials');
  app.set('view engine', 'html');


  // middleares
  app.use(express.static('./public'));

  load('routers', {cwd: 'app'})
    .into(app);

  return app;
};
