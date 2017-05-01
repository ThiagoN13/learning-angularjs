var mongoose = require( 'mongoose' );

module.exports = function( url ) {

  mongoose.connect( url, {server: {poolSize: 25}});

  mongoose.connection.on( 'connected', function() {
    console.log( 'MongoDB conectado | url: %s', url );
  });

  mongoose.connection.on( 'error', function( error ) {
    console.log( 'Erro ao tentar se conectar com o MongoDB', error );
  });

  process.on( 'SIGINT', function() {
    mongoose.connection.close(function() {
      console.log( 'O processo do MongoDB foi encerrado' );
      process.exit(0);
    });
  });

};
