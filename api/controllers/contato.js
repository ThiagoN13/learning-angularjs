module.exports = function( app ) {
  var Schema = app.models.contato,
    contact = require( '../lib/mongoose' )( Schema );

  function _save( req, res ) {

    var doc = {
      name: 'Teste',
      phones: [{
        number: '7199188-9528',
        phoneOperator: 'Tim'
      }],
      email: 'leal.banks@gmail.com',
      lastUpdate: new Date()
    };

    contact.save( doc )
      .then(function( id ) {
        console.log( id );
        // res.json( res );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });


  }

  return {
    save: _save
  };
};
