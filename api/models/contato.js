var mongoose = require( 'mongoose' );

module.exports = function() {

  var collectionName = 'contato',
    schema;

  schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    phones: [{
      number: {
        type: String,
        required: true,
        index: {
          unique: true
        }
      },
      phoneOperator: {
        type: String,
        required: true
      }
    }],
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    active: {
      type: Boolean,
      default: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    lastUpdate: {
      type: Date
    }
  }, {collection: collectionName});

  schema.pre( 'save', function( next ) {
    this.lastUpdate = new Date();
    next();
  });

  return mongoose.model( collectionName, schema );

};
