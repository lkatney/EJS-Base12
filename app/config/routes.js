
exports = module.exports = function() {
  
  // Home
  server.resource(controllers.home);

  // Login Sessions
  server.resource('sessions', controllers.session)
    .map('all', '/login', 'new')
    .map('all', '/logout', 'destroy');

  // Users
  server.post('/users/docs', controllers.user.doc);
  server.resource('users', controllers.user);
    //.map('post', '/photo', 'photo');


};