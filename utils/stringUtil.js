
/**
 * 处理电影名称过长的问题
 */
function processTitle(subjects, count){
  for (var i in subjects) {
    //电影名称
    var title = subjects[i].title;
    //名称中第一个空格的位置
    var index = this.getTitleSeparateIndex(title);
    //取出电影名称中的首位名称/中文名称，如《泰坦尼克号 Titanic》，通常为中外文以空格间隔
    title = this.getChineseTitle(title, index);
    //如果首位名称超过7个字，则缩略为...
    title = this.substringTitle(title, count);
    subjects[i].title = title;
  }
}

/**
   * 获取电影名称的分割位置（电影名称通常由中外文组成并以空格分隔）
   */
function getTitleSeparateIndex(title) {
  if (title == null) {
    return -1;
  }
  return title.indexOf(" ");
}

/**
 * 获取电影中文名称/第一个空格前的名称
 */
function getChineseTitle (title, index) {
  if (index < 0) {
    return title;
  }
  return title.substring(0, index);
}

/**
 * 获取电影外文名称/第一个空格后的名称
 */
function getForeignTitle (title, index) {
  if (index < 0) {
    return title;
  }
  var length = title.lenght;
  return title.substring(index + 1, length);
}

/**
 * 指定长度，截取电影名称
 */
function substringTitle (title, count) {
  if (title.length <= count) {
    return title;
  }
  return title.substring(0, count) + "...";
}

/**
 * 用“ / ”拼接数组
 */
function jointWithSlash (array) {
  var str = "";
  for (var i in array) {
    str += array[i] + " / ";
  }
  //去除末位的“/ ”符号（斜杠后有个空格，共2位）
  return str = str.substring(0, str.length - 2);
}

/**
 * 取出演员的姓名组成一个数组
 */
function getCastsNameArr (array) {
  var arr = {};
  for (var i in array) {
    arr[i] = array[i].name;
  }
  return arr;
}

/**
 * 在第一个名字后插入“（导演）”字符
 */
function insertDirectorText (str, insertWord) {
  console.log("insertDirectorText " + str)
  var index = str.indexOf(" / ");
  var director = str.substring(0, index) + insertWord;
  var casts = str.substring(index, str.length);
  return director.concat(casts);
}

/**
 * 将“\\n”转为“\n”
 */
function replaceSlashN (str) {
  return str.replace(/\r?\\n/g, "\n");
}

//向外暴露方法名
module.exports = {
  processTitle: processTitle,
  getTitleSeparateIndex: getTitleSeparateIndex,
  getChineseTitle: getChineseTitle,
  getForeignTitle: getForeignTitle,
  substringTitle: substringTitle,
  jointWithSlash: jointWithSlash,
  getCastsNameArr: getCastsNameArr,
  insertDirectorText: insertDirectorText,
  replaceSlashN: replaceSlashN
}