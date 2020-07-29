/**
 * 判断是否为数字
*/
export function isNumber (chars) {
  var reg = /^\d*\.?\d*$/;
  return reg.test(chars);
};

/**
 * 判断是否为小数
 * @param {number} chars 需要校验的数字
 * @param {boolen} integer 是否包含整数，true包含，false不包含
*/
export function isValidDecimal (chars, integer = false) {
  var reg = /^\d*\.\d*$/;
  return integer ? isNumber(chars) : reg.test(chars);
}