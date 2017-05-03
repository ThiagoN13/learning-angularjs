var q = require( 'q' ),
  mongoose = require( 'mongoose' ),
  ObjectId = mongoose.Types.ObjectId;

module.exports = function( Schema ) {

  function _save( doc ) {
    var dfd = q.defer(),
      schema = new Schema( doc );

    if ( !doc._id ) {
      doc._id = new ObjectId();
    }

    schema.save(function( err ) {
      if ( err ) {
        dfd.reject( err );
      } else {
        Schema.findOne({_id: doc._id}, function( err, newDoc ) {
          if ( err ) {
            dfd.reject( err );
          } else {
            dfd.resolve(newDoc);
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
