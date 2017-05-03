module.exports = function( app ) {
  var contactController = app.controllers.contato;

  app.get( '/contact/save', contactController.save );

};
