/** 
 * @apiGroup 校验相关
*/

/**
 * @api {Get} isEmail 判断是否为邮箱
 * @apiName isEmail
 * @apiDescription 判断是否为邮箱
 * @apiGroup 校验相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * isEmail('405263430@qq.com')
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isEmail (chars) {
  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(chars.trim());
};

/**
 * @api {Get} isValidReg 判断是否含有危险字符
 * @apiName isValidReg
 * @apiDescription 判断是否含有危险字符
 * @apiGroup 校验相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * isValidReg('<script></script>')
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isValidReg (chars) {
  var reg=/<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
  return reg.test(chars);
}

/**
 * @api {Get} isValidURL 判断字符串是否为网址(不区分大小)
 * @apiName isValidURL
 * @apiDescription 判断字符串是否为网址(不区分大小)
 * @apiGroup 校验相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * isValidURL('http://www.baidu.com')
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isValidURL (chars) {
  var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(\S+\.\S+)$/;
  return reg.test(trim(chars).split('?')[0]);
}

/**
 * @api {Get} isIDNumber 判断是否为身份证(兼容15和18位)
 * @apiName isIDNumber
 * @apiDescription 判断是否为身份证(兼容15和18位)
 * @apiGroup 校验相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * isIDNumber('43029119700101123X')
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isIDNumber (chars) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(chars.trim());
}

/**
 * @api {Get} checkStringLevel 检验字符串等级
 * @apiName checkStringLevel
 * @apiDescription 检验字符串等级
 * @apiGroup 校验相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * checkStringLevel('AbCdE_9281')
 *
 * @apiSuccessExample  {number} 返回示例
 * 4
 */
export function checkStringLevel (chars) {
  let level = 0;
  if (chars.length < 6) {
    return level;
  }
  if (/[0-9]/.test(chars)) {
    level++;
  }
  if (/[A-Z]/.test(chars)) {
    level++;
  }
  if (/[a-z]/.test(chars)) {
    level++;
  }
  if (/[\.|-|_]/.test(chars)) {
    level++;
  }
  return level;
}
