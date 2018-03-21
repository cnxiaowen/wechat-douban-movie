// pages/movies/more/more.js

var httpUtil = require('../../../utils/httpUtil.js');
var stringUtil = require('../../../utils/stringUtil.js');
var app = getApp();

Page({

  data: {
    navigationBarTitle: "",//页面标题
    requestUrl: "",//请求的网址
    allMovies: {},//全部电影信息
    totalCount: 0,//已请求的电影数量
    requestCount: 20 //一次请求多少条
  },

  onLoad: function (options) {
    var category = options.category;
    var url = app.globalData.baseUrl;
    //根据区块标题，设置接口为对应的请求网址
    switch (category) {
      case "正在热映":
        url += "/v2/movie/in_theaters";
        break;
      case "即将上映":
        url += "/v2/movie/coming_soon";
        break;
      case "排行榜":
        url += "/v2/movie/top250";
        break;
    }
    //将区块标题存储起来，在onReady()中设为导航栏标题
    this.data.navigationBarTitle = category;
    //将区块对应的接口网址存储起来（注意不含start=?&count=?字符）
    this.data.requestUrl = url;
    //请求数据
    httpUtil.request(url, this.processResult);
    
  },

  /**
   * 获取电影数据的success回调函数，在此处理请求到的数据
   */
  processResult: function (result) {
    //打印请求的数据
    console.log(JSON.stringify(result))
    //处理电影名称过长的问题
    stringUtil.processTitle(result.subjects, 8);
    var tempMovies = {};
    //如果已展示的电影数量大于0，说明是上拉加载更多，需将后续数据拼接；否则是进入页面或下拉刷新的场景，直接覆盖赋值即可
    if (this.data.totalCount > 0) {
      tempMovies = this.data.allMovies.concat(result.subjects);
    } else {
      tempMovies = result.subjects;
    }
    //原本已加载的电影总数+本次请求成功的电影数
    this.data.totalCount += this.data.requestCount;
    //重新渲染页面数据
    this.setData({
      allMovies: tempMovies
    })

  },

  /**
   * 滑动到底部加载更多
   */
  loadMore: function (event) {
    var url = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=" + this.data.requestCount;
    httpUtil.request(url, this.processResult);
  },

  onReady: function () {
    //设置页面导航栏标题，本函数需在onReady中调用，在onLoad中调用不生效
    wx.setNavigationBarTitle({
      title: this.data.navigationBarTitle
    })
  },

  /**
   * 点击“电影条目”
   */
  catchTapMovie(event) {
    console.log(event);
    var id = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../detail/detail?movieId=' + id
    })
  },

})