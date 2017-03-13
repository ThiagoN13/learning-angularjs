var app = require('./config/express.js')();

app.listen(app.get('port'), function() {
  console.log('server on | port: ' + app.get('port'));
});
