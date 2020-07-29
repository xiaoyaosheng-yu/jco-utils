let stringUtils = require('./lib/string');
let numberUtils = require('./lib/number');
let checkUtils = require('./lib/check');
class JcoUtils {
  constructor () {
    this.String = stringUtils;
    this.Check = checkUtils;
    this.Number = numberUtils;
  }
};

export default new JcoUtils();
