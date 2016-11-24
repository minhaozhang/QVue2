import Vue from 'vue'

/**
 * 将元素转化为MAP
 * @param jsonObj
 * @returns {{}}
 */
const getJsonFields = (jsonObj) => {
  var fields = new Array();
  var fieldsMap = {};
  var obj = jsonObj.toString();
  fields = obj.split(",");
  for ( var j = 0; j < fields.length; j++) {
    fieldsMap[fields[j]] = j;
  }
  return fieldsMap;
}

/**
 * 封装定时器
 * @param fn
 * @param times
 */
const reFresh = (fn,times) =>{
  let _timer;
  let dateTimeHours = new Date().getHours();
  if (dateTimeHours >= 9  &&  dateTimeHours < 15){
    _timer = window.setInterval(fn,times);
  }else{
    window.clearInterval(_timer);
  }
}

/**
 * @info 将数字保留后两位小数
 * @param val
 */
const mathRound2 = (val) => {
  var f = parseFloat(val);
  if (isNaN(f)) {
    return 0.00;
  }
  var f = Math.round(val*100)/100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}


/**
 * @info 将数字保留后3位小数
 * @param val
 */
const mathRound3 = (val) => {
  var f = parseFloat(val);
  if (isNaN(f)) {
    return 0.000;
  }
  var f = Math.round(val*1000)/1000;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 3) {
    s += '0';
  }
  return s;
}

/**
 * 格式化时间戳为 YYYY-MM-DD HH:SS
 * @param val
 * @returns {string}
 */
const formatTime = (val) =>{
  var time = new Date(parseInt(val));
  var y = time.getFullYear();//年
  var m = time.getMonth() + 1;//月
  var d = time.getDate();//日
  var h = time.getHours();//时
  var mm = time.getMinutes();//分
  var s = time.getSeconds();//秒
  return y + "-" + m + "-" + d + " " + h + ":" + mm;
}

/**
 * 扩展Date属性插件
 * @type {(p1?:*)}
 */
Date.prototype.formatTime = formatTime

/**
 * 扩展window插件
 * @type {(p1:*)}
 */
window.$getJsonFields = getJsonFields
window.$mathRound2 = mathRound2
window.$mathRound3 = mathRound3
window.$reFresh = reFresh


/**
 * 扩展Vue插件
 * @type {any}
 */
Vue.prototype.$getJsonFields = window.$getJsonFields
Vue.prototype.$mathRound2 = window.$mathRound2
Vue.prototype.$mathRound3 = window.$mathRound3
Vue.prototype.$reFresh = window.$reFresh



