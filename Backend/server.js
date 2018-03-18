const express = require('express');
const http = require('http').Server(express());
const routes = require('./routes/routes');
const app = express();

app.use('/', routes);

module.exports = app;