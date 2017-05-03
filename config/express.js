var express = require( 'express' ),
  load = require( 'express-load' ),
  bodyParser = require( 'body-parser' ),
  path = require( 'path' ),
  mongoose = require( './mongoose' );

var PORT = 3000,
  ROOT_PATH = path.parse( __dirname ).dir;

module.exports = (function() {
  var app = express();

  // variaveis de ambiente
  app.set( 'port', PORT );
  app.set( 'views', ROOT_PATH + '/app/partials' );
  app.set( 'view engine', 'html' );

  // middlewares
  app.use(express.static( ROOT_PATH + '/app' ));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //start mongoose driver
  mongoose( 'mongodb://localhost/agenda' );

  load( 'models', {cwd: 'api'} )
    .then( 'controllers' )
    .then( 'routers' )
    .into( app );

  return app;
})();
