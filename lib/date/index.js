/**
 * 时间格式化
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
 * 格林威治时间转北京时间
*/
export function GMTToLocalDateTime (date = new Date(), format = 'YYYY-mm-dd HH:MM:SS') {
  var date = (new Date(str)).toString();
  var localTime = date.replace(/GMT\+[0-9]{4}/, 'GMT+0800');
  return formatDate(localTime, format);
}

/**
 * 获取N天后的日期
*/
export function getAfterDate (date = new Date(), differ = 0, format = 'YYYY-mm-dd HH:MM:SS') {
  var date=new Date(date);
  date.setDate(date.getDate() + differ);
  return formatDate(date, format);
}