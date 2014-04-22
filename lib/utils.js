/**
 * Module Utils.
 */

var clc = require( 'cli-color' )
  , colors  = {
      sky:        clc.cyanBright,
      green:      clc.xterm( 112 ),
      blue:       clc.xterm( 68 ),
      orange:     clc.xterm( 172 ),
      red:        clc.xterm( 1 ),
      gray:       clc.xterm( 7 ),
      grey:       clc.xterm( 7 ),
      darkGray:   clc.xterm( 8 ),
      darkGrey:   clc.xterm( 8 ),
      lightGreen: clc.xterm( 11 ),
      lightGray:  clc.xterm( 250 )
    };

module.exports.fail = module.exports.error = function ( msg ) {
  console.log( colors.red( msg ) );
  process.exit( 0 );
}

module.exports.success = function ( msg ) {
  console.log( colors.green( msg ) );
}

module.exports.info = function ( msg ) {
  console.log( colors.blue( msg ) );
}

module.exports.warn = function ( msg ) {
  console.log( colors.orange( msg ) );
}
