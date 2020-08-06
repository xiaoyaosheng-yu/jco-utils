/** 
 * @apiGroup 字符串相关
*/

let chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0','1','2','3','4','5','6','7','8','9'];

/**
 * @api {Get} trim 清除左右空格
 * @apiName trim
 * @apiDescription 清除左右空格
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * trim('   abc   ')
 *
 * @apiSuccessExample  {string} 返回示例
 * 'abc'
 */
export function trim (chars) {
  if (typeof chars === 'number' || typeof chars === 'string') {
    return chars.trim();
  }
  throw Error('仅限校验字符串类型和数字类型');
}

/**
 * @api {Get} startsTrim 清除左侧空格
 * @apiName startsTrim
 * @apiDescription 清除左侧空格
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * startsTrim('   abc   ')
 *
 * @apiSuccessExample  {string} 返回示例
 * 'abc   '
 */
export function startsTrim (chars) {
  return chars.replace(/^\s*/g,"");
}

/**
 * @api {Get} endsTrim 清除右侧空格
 * @apiName endsTrim
 * @apiDescription 清除右侧空格
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * endsTrim('   abc   ')
 *
 * @apiSuccessExample  {string} 返回示例
 * '   abc'
 */
export function endsTrim (chars) {
  return chars.replace(/\s*$/g,"");
}

/**
 * @api {Get} allTrim 清除全部空格
 * @apiName allTrim
 * @apiDescription 清除全部空格
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 字符串
 * @apiParamExample {String} 请求示例
 * allTrim('   a b c   ')
 *
 * @apiSuccessExample  {string} 返回示例
 * 'abc'
 */
export function allTrim (chars) {
  return chars.replace(/\s*/g, '');
}

/**
 * @api {Get} getRandStr 生成随机字符串
 * @apiName getRandStr
 * @apiDescription 生成随机字符串
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} len 字符串的长度
 * @apiParamExample {Number} 请求示例
 * getRandStr(8)
 *
 * @apiSuccessExample  {string} 返回示例
 * AbCd92Ef
 */
export function getRandStr (len = 6) {
  let index = 0;
  let result = '';
  while (index < len) {
    let id = Math.ceil(Math.random() * chars.length);
    result += chars[id];
    index++;
  }
  return result.slice(0, len);
}

/**
 * @api {Get} getRandStrNoNum 生成随机字符串(不含数字)
 * @apiName getRandStrNoNum
 * @apiDescription 生成随机字符串(不含数字)
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} len 字符串的长度
 * @apiParamExample {Number} 请求示例
 * getRandStrNoNum(8)
 *
 * @apiSuccessExample  {string} 返回示例
 * AbCdXyEf
 */
export function getRandStrNoNum (len = 6) {
  let index = 0;
  let result = '';
  while (index < len) {
    let id = Math.ceil(Math.random() * chars.slice(0, 52).length);
    result += chars[id];
    index++;
  }
  return result.slice(0, len);
}

/**
 * @api {Get} getRandStrUpper 生成随机大写字符串
 * @apiName getRandStrUpper
 * @apiDescription 生成随机大写字符串
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} len 字符串的长度
 * @apiParamExample {Number} 请求示例
 * getRandStrUpper(8)
 *
 * @apiSuccessExample  {string} 返回示例
 * ABCDEFGH
 */
export function getRandStrUpper (len = 6) {
  return getRandStrNoNum(len).toUpperCase();
}

/**
 * @api {Get} getRandStrLower 生成随机小写写字符串
 * @apiName getRandStrLower
 * @apiDescription 生成随机小写写字符串
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} len 字符串的长度
 * @apiParamExample {Number} 请求示例
 * getRandStrLower(8)
 *
 * @apiSuccessExample  {string} 返回示例
 * abcdefgh
 */
export function getRandStrLower (len = 6) {
  return getRandStrNoNum(len).toLowerCase();
}

/**
 * @api {Get} getCountStr 获取某个字符出现的次数
 * @apiName getCountStr
 * @apiDescription 获取某个字符出现的次数
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} source 目标字符串
 * @apiParam {String} target 需要查找的字符串
 * @apiParamExample {Number} 请求示例
 * getCountStr("abcdeded", 'd')
 *
 * @apiSuccessExample  {number} 返回示例
 * 3
 */
export function getCountStr (source, target) {
  return source.split(target).length - 1;
};

/**
 * @api {Get} uppercaseFirst 字符首字母大写
 * @apiName uppercaseFirst
 * @apiDescription 字符首字母大写
 * @apiGroup 字符串相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 目标字符串
 * @apiParamExample {Number} 请求示例
 * uppercaseFirst("abcd")
 *
 * @apiSuccessExample  {number} 返回示例
 * Abcd
 */
export function uppercaseFirst(chars) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

