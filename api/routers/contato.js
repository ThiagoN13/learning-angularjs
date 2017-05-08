module.exports = function( app ) {
  var contactController = app.controllers.contato;

  app.get( '/contact/save', contactController.save );
  app.get( '/contact/query', contactController.query );
  app.get( '/contact/get', contactController.get );
  app.get( '/contact/remove', contactController.remove );
  app.get( '/contact/logicalremove', contactController.logicalRemove );



};
