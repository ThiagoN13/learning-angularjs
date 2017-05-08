module.exports = function( app ) {
  var Schema = app.models.contato,
    contact = require( '../lib/mongoose' )( Schema );

  function _save( req, res ) {

    var doc = {
      name: 'Teste',
      phones: [{
        number: '7199184-9528',
        phoneOperator: 'Tim'
      }],
      email: 'test.banks@gmail.com',
      lastUpdate: new Date()
    };

    contact.save( doc )
      .then(function( response ) {
        res.json( response );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });

  }

  function _get( req, res ) {
    // Send object with _id
    doc = {"_id":"590d2f2472e5b21b00a64a3d"}
    contact.get( doc )
      .then(function( response ) {
        res.json( response );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });

  }

  function _query( req, res ) {
    // Send object with _id
    contact.query( )
      .then(function( response ) {
        res.json( response );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });

  }

  function _logicalRemove( req, res ) {
    // Send object with _id
    contact.logicalRemove( {} )
      .then(function( response ) {
        res.json( response );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });

  }

  function _remove( req, res ) {
    // Send object with _id
    contact.remove( {} )
      .then(function( response ) {
        res.json( response );
      })
      .catch(function( err ) {
        res.status( 500 ).json( err );
      });

  }



  return {
    save: _save,
    get: _get,
    query: _query,
    remove: _remove,
    logicalRemove: _logicalRemove
  };
};
