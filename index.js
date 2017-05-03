var app = require( './config/express' ),
  PORT = app.get( 'port' ) || 3000;

app.listen( PORT, function() {
  console.log( 'server on | port: ' + PORT );
});
