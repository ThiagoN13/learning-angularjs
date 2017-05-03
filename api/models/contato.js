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
        required: true
      },
      phoneOperator: {
        type: String,
        required: true
      }
    }],
    email: {
      type: String,
      required: true
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
      type: Date,
      required: true
    }
  }, {collection: collectionName});

  return mongoose.model( collectionName, schema );

};
