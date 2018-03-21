// pages/movies/detail/detail.js

var httpUtil = require('../../../utils/httpUtil.js');
var app = getApp();

Page({

  data: {
    chineseTitle: "",//电影名称（中文）
    foreignTitle: "",//电影名称（外文）
    poster: "",//海报图片地址
    score: "",//数字评分
    stars: "",//星星数
    comments_count: "",//评价人数
    genres: "",//流派
    year: "",//上映年份
    countries: "",//国家
    directorsAndCasts: "",//导演及主演
    wish_count: "",//想看人数
    reviews_count: "",//看过人数
    summary: "",//剧情简介
    movie: {} //电影的整体信息
  },

  onLoad: function (options) {
    //通过电影id获取电影信息的接口网址
    var url = app.globalData.baseUrl + "/v2/movie/subject/" + options.movieId;
    httpUtil.request(url, this.processResult);
  },

  /**
   * 获取电影数据成功的回调函数，在此处理请求到的数据
   */
  processResult: function (result) {
    //电影名称，如“神秘巨星 Secret Superstar”
    var title = result.title;
    //获取电影名称中的第一个空格位置（如无，返回-1）
    var index = this.getTitleSeparateIndex(title);
    //截取电影名称中的中文名
    var chineseTitle = this.getChineseTitle(title, index);
    chineseTitle = this.substringTitle(chineseTitle, 15);
    //截取电影名称中的外文名
    var foreignTitle = this.getForeignTitle(title, index);
    foreignTitle = this.substringTitle(foreignTitle, 25);
    foreignTitle = foreignTitle == chineseTitle ? "" : foreignTitle;
    //截取电影国家名
    var countries = this.jointWithSlash(result.countries);
    //截取电影导演、演员
    var genresArr = String(result.genres).split(",");
    var genres = this.jointWithSlash(genresArr);
    var directorsAndCastsArr = this.getCastsNameArr(result.casts);
    var directorsAndCasts = this.jointWithSlash(directorsAndCastsArr);
    directorsAndCasts = this.insertDirectorText(String(directorsAndCasts), "(导演)");
    //截取电影剧情简介
    var summary = result.summary == "" ? "暂无" : this.return2Br(result.summary);

    //设置新数据并渲染界面
    this.setData({
      chineseTitle: chineseTitle,
      foreignTitle: foreignTitle,
      poster: result.images.large,
      stars: result.rating.stars,
      score: result.rating.average,
      comments_count: result.comments_count,
      genres: genres,
      year: result.year,
      countries: countries,
      directorsAndCasts: directorsAndCasts,
      wish_count: result.wish_count,
      reviews_count: result.reviews_count,
      summary: summary
    })

    //设置导航栏标题为电影中文名称
    wx.setNavigationBarTitle({
      title: chineseTitle,
    })
  },

  /**
   * 获取电影名称的分割位置（电影名称通常由中外文组成并以空格分隔）
   */
  getTitleSeparateIndex: function (title) {
    if (title == null) {
      return -1;
    }
    return title.indexOf(" ");
  },

  /**
   * 获取电影中文名称/第一个空格前的名称
   */
  getChineseTitle: function (title, index) {
    if (index < 0) {
      return title;
    }
    return title.substring(0, index);
  },

  /**
   * 获取电影外文名称/第一个空格后的名称
   */
  getForeignTitle: function (title, index) {
    if (index < 0) {
      return title;
    }
    var length = title.lenght;
    return title.substring(index + 1, length);
  },

  /**
   * 指定长度，截取电影名称
   */
  substringTitle: function (title, count) {
    if (title.length <= count) {
      return title;
    }
    return title.substring(0, count) + "...";
  },

  /**
   * 用“ / ”拼接数组
   */
  jointWithSlash: function (array) {
    var str = "";
    for (var i in array) {
      str += array[i] + " / ";
    }
    //去除末位的“/ ”符号（斜杠后有个空格，共2位）
    return str = str.substring(0, str.length - 2);
  },

  /**
   * 取出演员的姓名组成一个数组
   */
  getCastsNameArr: function (array) {
    var arr = {};
    for (var i in array) {
      arr[i] = array[i].name;
    }
    return arr;
  },

  /**
   * 在第一个名字后插入“（导演）”字符
   */
  insertDirectorText: function (str, insertWord) {
    console.log("insertDirectorText " + str)
    var index = str.indexOf(" / ");
    var director = str.substring(0, index) + insertWord;
    var casts = str.substring(index, str.length);
    return director.concat(casts);
  },

  /**
   * 将“\\n”转为“\n”
   */
  return2Br: function (str) {
    return str.replace(/\r?\\n/g, "\n");
  }
})