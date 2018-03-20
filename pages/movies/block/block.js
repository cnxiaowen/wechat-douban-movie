// pages/movies/block/block.js
Page({
  data: {
    // blockTitle:"正在热映",
    // blockMovies: {
    //   "count": 4,
    //   "start": 0,
    //   "subjects": [{
    //     "casts": [{
    //       "avatars": {
    //         "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509423054.09.jpg"
    //       },
    //       "name": "阿德瓦·香登"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13628.jpg"
    //       },
    //       "name": "阿米尔·汗"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494080264.12.jpg"
    //       },
    //       "name": "塞伊拉·沃西"
    //     }
    //     ],
    //     "comments_count": 5951,
    //     "countries": [
    //       "印度"
    //     ],
    //     "directors": [{
    //       "avatars": {
    //         "large": null
    //       },
    //       "name": "阿德瓦·香登"
    //     }],
    //     "genres": [
    //       "剧情",
    //       "音乐"
    //     ],
    //     "id": 259,
    //     "images": {
    //       "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508925590.jpg"
    //     },
    //     "original_title": "神秘巨星 Secret Superstar",
    //     "rating": {
    //       "average": 8.2,
    //       "max": 10,
    //       "min": 0,
    //       "stars": "40"
    //     },
    //     "reviews_count": 292,
    //     "summary": "14岁的印度少女尹希娅（塞伊拉·沃西 饰）热爱唱歌，因父亲阻挠，她只能蒙面拍摄并上传自弹自唱原创歌曲的视频，孰料凭借天籁歌喉在网上一炮而红，备受争议的音乐人夏克提·库马尔（阿米尔·汗 饰）也向她抛出橄榄枝，尹希娅的生活发生了翻天覆地的变化……",
    //     "title": "神秘巨星 Secret Superstar",
    //     "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
    //     "wish_count": 22447,
    //     "year": 2017
    //   },
    //   {
    //     "casts": [{
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg"
    //       },
    //       "name": "李芳芳"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg"
    //       },
    //       "name": "章子怡"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg"
    //       },
    //       "name": "黄晓明"
    //     }
    //     ],
    //     "comments_count": 58027,
    //     "countries": [
    //       "中国大陆"
    //     ],
    //     "directors": [{
    //       "avatars": {
    //         "large": null
    //       },
    //       "name": "李芳芳"
    //     }],
    //     "genres": [
    //       "剧情",
    //       "爱情",
    //       "战争"
    //     ],
    //     "id": 265,
    //     "images": {
    //       "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg"
    //     },
    //     "original_title": "无问西东",
    //     "rating": {
    //       "average": 7.5,
    //       "max": 10,
    //       "min": 0,
    //       "stars": "40"
    //     },
    //     "reviews_count": 4354,
    //     "summary": "如果提前了解了你所要面对的人生，你是否还会有勇气前来？吴岭澜、沈光耀、王敏佳、陈鹏、张果果，几个年轻人满怀诸多渴望，在四个非同凡响的时空中一路前行。\\n吴岭澜（陈楚生 饰），出发时意气风发，却很快在途中迷失了方向。沈光耀（王力宏 饰），自愿参与了最残酷的战争，他一直在努力去做那些令他害怕，但重要的事。王敏佳（章子怡 饰）最初的错误，只是为了虚荣撒了一个小谎；最初的烦恼，只是在两个优秀的男人中选择一个。但命运，却把她拖入被众人唾骂的深渊。陈鹏（黄晓明 饰）把爱情摆在了理想前面，但爱情却没有把他摆在前面。他说，“我有人要照顾”，纵然这意味着与所有人作对，意味着要和她一起被放逐千里。张果果（张震 饰），身处尔虞我诈的职场，“赢”是他的习惯。为了赢，他总是见招拆招，先发制人。而有一天，他却面临了一个比“赢”更重要的选择。这几个年轻人，在最好的年纪迎来了最残酷的...",
    //     "title": "无问西东",
    //     "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
    //     "wish_count": 32890,
    //     "year": 2018
    //   },
    //   {
    //     "casts": [{
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg"
    //       },
    //       "name": "斯蒂芬·卓博斯基"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg"
    //       },
    //       "name": "雅各布·特伦布莱"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg"
    //       },
    //       "name": "朱莉娅·罗伯茨"
    //     }
    //     ],
    //     "comments_count": 4854,
    //     "countries": [
    //       "美国"
    //     ],
    //     "directors": [{
    //       "avatars": {
    //         "large": null
    //       },
    //       "name": "斯蒂芬·卓博斯基"
    //     }],
    //     "genres": [
    //       "剧情",
    //       "家庭",
    //       "儿童"
    //     ],
    //     "id": 269,
    //     "images": {
    //       "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg"
    //     },
    //     "original_title": "奇迹男孩 Wonder",
    //     "rating": {
    //       "average": 8.6,
    //       "max": 10,
    //       "min": 0,
    //       "stars": "45"
    //     },
    //     "reviews_count": 162,
    //     "summary": "电影《奇迹男孩》改编自全球畅销小说《奇迹》，讲述了一个温暖千万家庭的成长故事。10 岁的奥吉（雅各布·特伦布莱 Jacob Tremblay 饰）天生脸部畸形，此前一直在家中和妈妈（朱莉娅·罗伯茨 Julia Roberts 饰）自学。当他小学五年级时，奥吉进入父母为他精心挑选的学校上学。在这里，奥吉将与校长、老师以及性格迥异的同学相处，他不寻常的外表让他成为同学们讨论的焦点，并终日受到嘲笑和排斥，就连好不容易交到的新朋友也似乎不太值得信任。幸运的是，在成长过程中，奥吉的父母、姐姐一直是他最坚强的后盾，在他们的支持与关爱下，奥吉凭借自身的勇气、善良、聪敏影响激励了许多身边的人，并收获了友谊、尊重与爱，最终成长为大家心目中的不可思议的“奇迹”。",
    //     "title": "奇迹男孩 Wonder",
    //     "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
    //     "wish_count": 29417,
    //     "year": 2017
    //   },
    //   {
    //     "casts": [{
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20143.jpg"
    //       },
    //       "name": "丁晟"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509429399.29.jpg"
    //       },
    //       "name": "王凯"
    //     },
    //     {
    //       "avatars": {
    //         "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1422629943.25.jpg"
    //       },
    //       "name": "马天宇"
    //     }
    //     ],
    //     "comments_count": 6927,
    //     "countries": [
    //       "中国大陆",
    //       "香港"
    //     ],
    //     "directors": [{
    //       "avatars": {
    //         "large": null
    //       },
    //       "name": "丁晟"
    //     }],
    //     "genres": [
    //       "剧情",
    //       "动作"
    //     ],
    //     "id": 260,
    //     "images": {
    //       "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508615612.jpg"
    //     },
    //     "original_title": "英雄本色2018",
    //     "rating": {
    //       "average": 5.2,
    //       "max": 10,
    //       "min": 0,
    //       "stars": "25"
    //     },
    //     "reviews_count": 711,
    //     "summary": "周凯（王凯 饰）参与走私，被身为缉毒警察的弟弟周超（马天宇 饰）逮捕入狱。三年后，周凯出狱，改过自新。曾经的手下阿仓（余皑磊 饰）已为毒贩头目，为获取周凯的海外客户资料，设计加害周凯。江湖中的好兄弟马柯（王大陆 饰）为了替周凯报仇，失去一条腿。自己的亲弟弟周超不相信哥哥周凯已金盆洗手，不断搜集证据，欲亲手逮捕周凯。最终，周凯与警方合作，逮捕了阿仓，两兄弟重归于好。",
    //     "title": "英雄本色2018",
    //     "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
    //     "wish_count": 4552,
    //     "year": 2018
    //   }
    //   ]
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})