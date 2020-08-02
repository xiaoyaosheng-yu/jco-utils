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

/**
 * @api {Get} randomNumber 随机获取一个数字，可指定区间
 * @apiName randomNumber
 * @apiDescription 随机获取一个数字，可指定区间，默认为0-255之间的数字，如果只传1个参数，则返回0-参数区间的数字
 * @apiGroup 数字相关
 * @apiVersion 1.1.0
 *
 * @apiParam {Number} n1 字符串
 * @apiParam {Number} n2 是否包含整数
 * @apiParamExample {String} 请求示例
 * randomNumber(3, 100)
 *
 * @apiSuccessExample  {number} 返回示例
 * 70
 */
export function randomNumber (n1, n2) {
  if(arguments.length === 2){
    return Math.round(n1 + Math.random() * (n2 - n1));
  } else if(arguments.length === 1){
    return Math.round(Math.random() * n1);
  }
  return Math.round(Math.random() * 255);
};
