/** 
 * @apiGroup 时间日期相关
*/

/**
 * @api {Get} formatDate 时间格式化
 * @apiName formatDate
 * @apiDescription 时间格式化
 * @apiGroup 时间日期相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} date 时间日期字符串
 * @apiParam {String} format 格式
 * @apiParamExample {String} 请求示例
 * formatDate('2020-07-30 23:59:59', 'YYYY/mm/dd')
 *
 * @apiSuccessExample  {string} 返回示例
 * 2020/07/30
 */
export function formatDate (date = new Date(), format = 'YYYY-mm-dd HH:MM:SS') {
  date = new Date(date);
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),
    "m+": (date.getMonth() + 1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "M+": date.getMinutes().toString(),
    "S+": date.getSeconds().toString()
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(format);
      if (ret) {
        format = format.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return format;
};

/**
 * @api {Get} GMTToLocalDateTime 格林威治时间转北京时间
 * @apiName GMTToLocalDateTime
 * @apiDescription 格林威治时间转北京时间
 * @apiGroup 时间日期相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} date 时间日期字符串
 * @apiParam {String} format 格式
 * @apiParamExample {String} 请求示例
 * formatDate('Thu Jul 30 2020 13:22:48 GMT+0000', 'YYYY/mm/dd')
 *
 * @apiSuccessExample  {string} 返回示例
 * 2020/07/30
 */
export function GMTToLocalDateTime (date = new Date(), format = 'YYYY-mm-dd HH:MM:SS') {
  var date = (new Date(str)).toString();
  var localTime = date.replace(/GMT\+[0-9]{4}/, 'GMT+0800');
  return formatDate(localTime, format);
}

/**
 * @api {Get} getAfterDate 获取N天后的日期
 * @apiName getAfterDate
 * @apiDescription 获取N天后的日期
 * @apiGroup 时间日期相关
 * @apiVersion 1.1.0
 *
 * @apiParam {String} date 当前日期
 * @apiParam {Number} differ 日期差值
 * @apiParam {String} format 格式
 * @apiParamExample {String} 请求示例
 * formatDate('2020-01-01 00:00:00', 5, 'YYYY/mm/dd HH:MM:SS')
 *
 * @apiSuccessExample  {string} 返回示例
 * 2020/01/06 00:00:00
 */
export function getAfterDate (date = new Date(), differ = 0, format = 'YYYY-mm-dd HH:MM:SS') {
  var date=new Date(date);
  date.setDate(date.getDate() + differ);
  return formatDate(date, format);
}