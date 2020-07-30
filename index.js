let stringUtils = require('./lib/string');
let numberUtils = require('./lib/number');
let checkUtils = require('./lib/check');
let dateUtils = require('./lib/date');
let urlUtils = require('./lib/url');
class JcoUtils {
  constructor () {
    this.String = stringUtils;
    this.Check = checkUtils;
    this.Number = numberUtils;
    this.Date = dateUtils;
    this.Url = urlUtils;
  }
};

export default new JcoUtils();
