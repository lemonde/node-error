'use strict';

var _ = require('lodash');
var util = require('util');

/**
 * Instantiate an error manager
 *
 * @param {Nconf} config an nconf instance containing
 * all error messages
 */
module.exports = function (config) {

  /**
   * Read error from configuration.
   *
   * @param {String} key
   * @param {...mixed} args
   */
  return function (key/*, formatArgs*/) {
    var formatArgs = Array.prototype.slice.call(arguments, 1);
    var errObj = config.get(key);

    if (! errObj)
      throw new Error(util.format('Unable to find error %s.', key));

    if (formatArgs.length > 0) {
      errObj.message = util.format.apply(util, [].concat(errObj.message, formatArgs));
    }

    errObj.code = key;

    return new NodeError(errObj);
  }
};

/**
 * Create a new NodeError.
 *
 * @param {Object} error
 */

function NodeError(error) {
  Error.captureStackTrace(this, NodeError);
  _.extend(this, error);
}

/**
 * Inherits from Error.
 */

util.inherits(NodeError, Error);

