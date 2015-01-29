'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Testpack = new Module('testpack');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Testpack.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Testpack.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Testpack.menus.add({
    title: 'TestPack Example Page',
    link: 'testpack example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Testpack.menus.add({
	title: 'TestPack Test',
	link: 'testpack test page',
	roles: ['authenticated'],
	menu: 'main'
  });
  Testpack.aggregateAsset('css', 'testpack.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Testpack.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Testpack.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Testpack.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Testpack;
});
