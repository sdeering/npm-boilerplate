"use strict";

/*
 *  npm-boilerplate
 *  http://github.com/sdeering/npm-boilerplate
 *  A good starting point for your new Node.js NPM packages.
 */

/**
 * Module dependencies.
 */

var path = require( 'path' )
  , utils = require( path.resolve( path.join( __dirname, 'utils' ) ) )
  , _ = require( 'lodash' );


/**
 * Module constructor.
 */

function MyModule( config ) {

  //override config defaults if specified
  var defaults = _.partialRight( _.assign, function( a, b ) {
    return typeof a == 'undefined' ? b : a;
  });

  this.config = defaults( config, {

      //Specify default config here.
      defaultValue: true

  });

  this.init();

};

/**
 * Module init.
 */

MyModule.prototype.init = function() {

  utils.info( 'Module init()...' );

  //example
  this.numbers = [ 1,2,3 ];

};

/**
 * Module public API example function 1 - mutiply example
 */

MyModule.prototype.function1 = function( mutiply ) {

  var mutipliedResults = [];
  for (var i = 0; i < this.results; i += 1) {
    mutipliedResults.push(this.results[i] * this.config.mutiply);
  }
  utils.success( mutipliedResults );
  return mutipliedResults;

};

/**
 * Export default singleton.
 *
 * @api public
 */

// exports = module.exports = new MyModule();

/**
 * Expose module constructor.
 */

module.exports = MyModule;

// exports.MyModule = MyModule;
