/**
 * 获取url的主机名称
 * @export
 */
export function getHostName (chars) {
  var domain = chars.split('/');
  return isHttpsDomain(chars) || isHttpDomain(chars) ? domain[2] : domain[0];
}

/**
 * 获取url的协议
*/
export function getProtocol (chars) {
  var domain = chars.split(':');
  return domain[0] || '';
}

/**
 * 判断是否为https协议
 */
export function isHttpsDomain (chars) {
  return chars.startsWith('https');
}

/**
 * 判断是否为http协议
*/
export function isHttpDomain (chars) {
  return chars.startsWith('http');
}

/**
 * 获取url的参数
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
 * 获取url完整域名部分
*/
export function getUrlOrigin (chars) {
  return chars.split('?')[0];
}

/**
 * 获取网址的搜索部分
*/
export function getUrlSearch (chars) {
  return chars.split('?')[1] || '';
}
