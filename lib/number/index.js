/**
 * @apiGroup 数字相关
*/

/**
 * @api {Get} isNumber 判断是否为数字
 * @apiName isNumber
 * @apiDescription 判断是否为数字
 * @apiGroup 数字相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * isNumber(123)
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isNumber (chars) {
  var reg = /^\d*\.?\d*$/;
  return reg.test(chars);
};

/**
 * @api {Get} isValidDecimal 判断是否为小数
 * @apiName isValidDecimal
 * @apiDescription 判断是否为小数
 * @apiGroup 数字相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParam {Boolean} integer 是否包含整数
 * @apiParamExample {String} 请求示例
 * isValidDecimal(234.112, false)
 *
 * @apiSuccessExample  {boolean} 返回示例
 * false
 */
export function isValidDecimal (chars, integer = false) {
  var reg = /^\d*\.\d*$/;
  return integer ? isNumber(chars) : reg.test(chars);
}