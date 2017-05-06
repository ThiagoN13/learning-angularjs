var q = require( 'q' ),
  mongoose = require( 'mongoose' ),
  merge = require( 'merge' ),
  that = require( './that/that' ),
  ObjectId = mongoose.Types.ObjectId;

module.exports = function( Schema ) {

  function _save( doc ) {
    var dfd = q.defer(),
      schema;

    if ( !that.isObject( doc ) ) {
      dfd.reject( { err: 'Validation error: Value sent is not of object type'} );
    } else if ( !that.isEmpty( doc ) ) {
      dfd.reject( { err: 'Validation error: Value sent is empty'} );
    }

    if ( !doc._id ) {
      doc._id = new ObjectId();
      schema = new Schema( doc );
    }

    Schema.findOne( { _id: doc._id, active: true }, function( err, res ) {
      if ( res ) {
        merge( res, doc );
        res.save(function( err ) {
          if ( err ) {
            dfd.reject( err );
          } else {
            dfd.resolve( res );
          }
        });
      } else {
        schema.save(function( err ) {
          if ( err ) {
            dfd.reject( err );
          } else {
            dfd.resolve( res );
          }
        });
      }
    });

    return dfd.promise;

  }

  function _query( ) {
    var dfd = q.defer();

    Schema.find( {}, function( err, res ) {
      if ( err ) {
        dfd.reject( err );
      } else {
        dfd.resolve( res );
      }
    });

    return dfd.promise;
  }

  function _get( doc ) {
    var dfd = q.defer();
    doc._id = doc._id ;

    if ( !that.isObject( doc ) ) {
      dfd.reject( { err: 'Validation error: Value sent is not of object type'} );
    }

    Schema.findOne( { _id: doc._id, active: true }, function( err, res ) {
      if ( err ) {
        dfd.reject( err );
      } else {
        dfd.resolve( res );
      }
    });

    return dfd.promise;
  }


  function _logicalRemove( doc ) {
    var dfd = q.defer();

    if ( !that.isObject( doc ) ) {
      dfd.reject( { err: 'Validation error: Value sent is not of object type'} );
    }

    Schema.update( { _id: doc._id, active: true }, { $set: { active: false } }, function( err, res) {
      if ( err ) {
        dfd.reject( err );
      } else {
        dfd.resolve( res );
      }
    });

    return dfd.promise;
  }

  function _remove( doc ) {
    var dfd = q.defer();

    if ( !that.isObject( doc ) ) {
      dfd.reject( { err: 'Validation error: Value sent is not of object type'} );
    }

    Schema.remove( { _id: doc._id, active: true }, function( err, res ) {
      if ( err ) {
        dfd.reject( err );
      } else {
        dfd.resolve( res );
      }
    });

    return dfd.promise;
  }

  return {
    save: _save,
    query: _query,
    get: _get,
    logicalRemove: _logicalRemove,
    remove: _remove
  };

};
