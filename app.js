var server = require('pushstate-server');

var app = server.start({
  port: process.env.PORT || 3000,
  directory: './public'
});

module.exports = app;