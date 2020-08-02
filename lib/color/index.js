import { randomNumber } from './../number';

/**
 * @api {Get} randomColor 随机获取一个颜色
 * @apiName randomColor
 * @apiDescription 随机获取一个颜色
 * @apiGroup 颜色相关
 * @apiVersion 1.1.0
 *
 * @apiParamExample {String} 请求示例
 * randomColor()
 *
 * @apiSuccessExample  {number} 返回示例
 * rgb(232, 16, 87)
 */
export function randomColor () {
  return 'rgb(' + randomNumber(255) + ', ' + randomNumber(255) + ', ' + randomNumber(255) + ')';
};

/**
 * @api {Get} RGBtoHex rgb转16进制颜色
 * @apiName RGBtoHex
 * @apiDescription rgb转16进制颜色
 * @apiGroup 颜色相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} color 需要转换的rgb值
 * @apiParamExample {String} 请求示例
 * RGBtoHex('rgb(248, 183, 117)')
 *
 * @apiSuccessExample  {string} 返回示例
 * #f8b775
 */
export function RGBtoHex(color) {
  let rgb = color.split(',');
  let r = parseInt(rgb[0].split('(')[1]);
  let g = parseInt(rgb[1]);
  let b = parseInt(rgb[2].split(')')[0]);
  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

/**
 * @api {Get} hexToRGB 16进制转rgb
 * @apiName hexToRGB
 * @apiDescription 16进制转rgb
 * @apiGroup 颜色相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} color 需要转换的16进制值
 * @apiParamExample {String} 请求示例
 * hexToRGB('#fff')
 *
 * @apiSuccessExample  {string} 返回示例
 * rgb(255, 255, 255)
 */
export function hexToRGB(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let sign = hex.length == 7 || hex.length == 6;
  result = hex.length == 7 || hex.length == 6 ? /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) : /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex)
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  return sign ? 'rgb(' + r + ', ' + g + ', ' + b + ')' : 'rgb(' + r * r + ', ' + g * g + ', ' + b * b + ')';
}