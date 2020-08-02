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
