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
