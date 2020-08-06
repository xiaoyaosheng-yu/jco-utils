const stringUtils = require('./lib/string');
const numberUtils = require('./lib/number');
const checkUtils = require('./lib/check');
const dateUtils = require('./lib/date');
const urlUtils = require('./lib/url');
const colorUtils = require('./lib/color');

class JcoUtils {
  constructor () {
    this.String = stringUtils;
    this.Check = checkUtils;
    this.Number = numberUtils;
    this.Date = dateUtils;
    this.Url = urlUtils;
    this.Color = colorUtils;
  }
};

window.JcoUtils = JcoUtils;

export default new JcoUtils();

