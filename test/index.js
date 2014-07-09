var Errors = require('../');
var config = require('nconf');
var expect = require('chai').expect;

config.defaults({
  simple: {
    usage: {
      message: 'A simple usage',
      status: 400
    }
  },
  complex: {
    usage: {
      message: 'A complex usage with %s %d variables',
      status: 500,
      custom: 'custom'
    }
  }
});

describe('Error formatter', function() {
  var errors = Errors(config);
  describe('simple usage', function () {
    it('gets the right error object', function() {
      var error = errors('simple:usage');
      expect(error.message).to.equal('A simple usage');
      expect(error.code).to.equal('simple:usage');
      expect(error.status).to.equal(400);
    });
  });

  describe('complex usage', function () {
    it('gets the right error object', function () {
      var error = errors('complex:usage', 'bonjour', 9);
      expect(error.message).to.equal('A complex usage with bonjour 9 variables');
      expect(error.code).to.equal('complex:usage');
      expect(error.status).to.equal(500);
    });

    it('should be possible to extend with all data', function () {
      var error = errors('complex:usage', 'bonjour', 9);
      expect(error.custom).to.equal('custom');
    });
  });
});

