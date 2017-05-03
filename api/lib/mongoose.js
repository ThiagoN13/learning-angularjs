var q = require( 'q' ),
  mongoose = require( 'mongoose' ),
  merge = require( 'merge' ),
  ObjectId = mongoose.Types.ObjectId;

module.exports = function( Schema ) {

  function _save( doc ) {
    var dfd = q.defer(),
      schema;

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

  return {
    save: _save
  };

};
