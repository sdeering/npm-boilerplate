/*
  Use `npm test` to run tests using mocha.
  or `./node_modules/.bin/mocha --reporter spec`
*/

var path = require( 'path' )
  , MyModule = require( path.resolve( path.join( __dirname, '..' ) ) )
  , expect = require('chai').expect;


describe('my module', function(done) {

    it('should load as a module', function(done) {
        var MyModule = new MyModule();
        expect(MyModule).to.exist;
        done();
    });

    it('should set default config values', function(done) {
        var MyModule = new MyModule();
        expect(MyModule.config.defaultValue).to.equal(true);
        done();
    });

    it('should override the default config values', function(done) {
        var MyModule = new MyModule({
            defaultValue: false
        });
        expect(MyModule.config.defaultValue).to.equal(false);
        done();
    });

    it('should initialize the module', function(done) {
        var MyModule = new MyModule();
        expect(MyModule.numbers).to.equal([ 1,2,3 ]);
        done();
    });

    it('should run public api functions', function(done) {
        var MyModule = new MyModule();
        var results = MyModule.function1(2); //mutiply
        expect(results).to.equal([ 2,4,6 ]);
        done();
    });

});
