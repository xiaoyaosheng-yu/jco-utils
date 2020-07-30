/** 
 * @apiGroup 网址相关
*/

/**
 * @api {Get} getHostName 获取网址的域名
 * @apiName getHostName
 * @apiDescription 根据url获取网址的域名
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {String} 请求示例
 * getHostName('http://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {string} 返回示例
 * www.baidu.com
 */
export function getHostName (chars) {
  var domain = chars.split('/');
  return isHttpsDomain(chars) || isHttpDomain(chars) ? domain[2] : domain[0];
}

/**
 * @api {Get} getProtocol 获取网址的协议
 * @apiName getProtocol
 * @apiDescription 根据url获取网址的协议
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {String} 请求示例
 * getProtocol('http://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {string} 返回示例
 * http
 */
export function getProtocol (chars) {
  var domain = chars.split(':');
  return domain[0] || '';
}

/**
 * @api {Get} isHttpsDomain 判断网址协议是否为https
 * @apiName isHttpsDomain
 * @apiDescription 判断网址协议是否为https
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {String} 请求示例
 * isHttpsDomain('https://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {boolean} 返回示例
 * true
 */
export function isHttpsDomain (chars) {
  return chars.startsWith('https');
}

/**
 * @api {Get} isHttpDomain 判断网址协议是否为http
 * @apiName isHttpDomain
 * @apiDescription 判断网址协议是否为http
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {String} 请求示例
 * isHttpDomain('https://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {boolen} 返回示例
 * true
 */
export function isHttpDomain (chars) {
  return chars.startsWith('http');
}

/**
 * @api {Get} getUrlParams 获取网址的参数
 * @apiName getUrlParams
 * @apiDescription 根据url获取网址的参数
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {String} 请求示例
 * getUrlParams('http://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {json} 返回示例
 * {
 *  id: 1,
 *  name: '张三'
 * }
 */
export function getUrlParams (chars) {
  if (!getUrlSearch(chars)) {
    return {};
  }
  var str = getUrlSearch(chars);
  var paramsArr = str.split(/&+/);
  var obj = {};
  paramsArr.forEach(ele => {
    var sp = ele.split('=');
    obj[sp[0]] = sp[1]
  })
  return obj;
};

/**
 * @api {Get} getUrlOrigin 获取网址完整域名
 * @apiName getUrlOrigin
 * @apiDescription 根据url获取网址完整域名
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {string} 请求示例
 * getUrlOrigin('http://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {string} 返回示例
 * http://www.baidu.com
 */
export function getUrlOrigin (chars) {
  return chars.split('?')[0];
}

/**
 * @api {Get} getUrlSearch 获取网址参数字符串
 * @apiName getUrlSearch
 * @apiDescription 根据url获取网址参数字符串
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {string} 请求示例
 * getUrlSearch('http://www.baidu.com?id=1&name=张三')
 *
 * @apiSuccessExample  {string} 返回示例
 * id=1&name=张三
 */
export function getUrlSearch (chars) {
  return chars.split('?')[1] || '';
}

/**
 * @api {Get} getUrlPort 获取网址的端口
 * @apiName getUrlPort
 * @apiDescription 根据url获取网址的端口
 * @apiGroup 网址相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} chars 网址字符串
 * @apiParamExample {string} 请求示例
 * getUrlPort('http://www.baidu.com:3000?id=1&name=张三')
 *
 * @apiSuccessExample  {number} 返回示例
 * 3000
 */
export function getUrlPort (chars) {
  var origin = getUrlOrigin(chars);
  var match = origin.match(/:[0-9]*$/);
  return !match ? 80 : match[0].slice(1) * 1;
}