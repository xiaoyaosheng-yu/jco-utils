/**
 * 判断是否为邮箱
*/
export function isEmail (chars) {
  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(chars.trim());
};

/**
 * 判断是否含有危险字符
 * @param {String} chars 需要校验的字符
 * @returns {boolen} 返回值
*/
export function isValidReg (chars) {
  var reg=/<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
  return reg.test(chars);
}

/**
 * 判断字符串是否为网址，不区分大小
*/
export function isValidURL (chars) {
  var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(\S+\.\S+)$/;
  return reg.test(chars.trim().split('?')[0]);
}

/**
 * 判断是否为身份证(兼容15和18位)
*/
export function isIDNumber (chars) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(chars.trim());
}

/**
 * 检验字符串等级
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
