
/**
 * 常规请求
 * url 请求网址
 * successCallback 请求成功后的回调
 */
function request(url, successCallback){
  wx.request({
    url: url,
    success: function(res){
      successCallback(res.data);
    }
  })
}

/**
 * 正在热映、即将上映和排行榜的网络请求，
 * 传入key和title用以在回调中区分对应区块
 * url 请求网址
 * key 区分区块的key
 * title 区块标题
 * successCallback 请求成功后的回调
 */
function requestBlockMovies(url, key, title, successCallback) {
  wx.request({
    url: url,
    success: function (res) {
      successCallback(res.data, key, title);
    }
  })
}

//向外暴露方法名
module.exports = {
  request:request,
  requestBlockMovies: requestBlockMovies
}