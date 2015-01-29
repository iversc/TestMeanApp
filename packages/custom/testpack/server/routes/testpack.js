'use strict';

// The Package is past automatically as first parameter
module.exports = function(Testpack, app, auth, database) {

  app.get('/testpack/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/testpack/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('<h1>Only authenticated users can access this</h1>');
  });

  app.get('/testpack/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/testpack/example/testlink', auth.requiresLogin, function(req, res, next) {
	res.send('This is the test link page for now.');
  });

  app.get('/testpack/example/render', function(req, res, next) {
    Testpack.render('index', {
      package: 'testpack'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
