var app = require('express')();
const routes = require('./routes/routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;