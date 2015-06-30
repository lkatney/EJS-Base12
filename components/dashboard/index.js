var path = require('path');

module.exports = function(app) {

  app.use(require('express')['static'](path.join(__dirname, 'public')));

  app.get('/', function(req, res) {
    res.render(path.join(__dirname, 'dashboard'), { title: 'The index page!' })
  });
};