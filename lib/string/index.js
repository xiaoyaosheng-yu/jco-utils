let chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0','1','2','3','4','5','6','7','8','9'];
/**
 * 去除左右空格
*/
export function trim (chars) {
  if (typeof chars === 'number' || typeof chars === 'string') {
    return chars.trim();
  }
  throw Error('仅限校验字符串类型和数字类型');
}

/**
 * 去除左侧空格
*/
export function leftTrim (chars) {
  return chars.replace(/^\s*/g,"");
}

/**
 * 去除右侧空格
*/
export function rightTrim (chars) {
  return chars.replace(/\s*$/g,"");
}

/**
 * 去除全部空格
*/
export function allTrim (chars) {
  return chars.replace(/\s*/g, '');
}

/**
 * 生成随机字符串
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
 * 生成随机字符串(不含数字)
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
 * 生成随机大写字符串
*/
export function getRandStrUpper (len = 6) {
  return getRandStrNoNum(len).toUpperCase();
}

/**
 * 生成随机小写写字符串
*/
export function getRandStrLower (len = 6) {
  return getRandStrNoNum(len).toLowerCase();
}
