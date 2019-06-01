// miniprogram/pages/sponsor/sponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sponsors: [
      {
        // 主办方名字
        name: "职人社",
        // 主办方头像地址
        imgUrl:'',
        // 主办方简介
        introduce: "职人社时新一代的互联网职业成长社群 , 通过内容、社群于沙龙 , 连接优秀的人与公司 , 帮助双方持续成长 , 取得更大的成功。我们的职业经纪人团队 , 已与大量独角兽和细分领域第一的公司建立合作。",
        // 主办方主办的所有沙龙
        totalSalons: {
          // 沙龙数
          numbers: 4,
          // 所有沙龙
          salons: [
            {
              // 沙龙标题
              title: '印度市场的财务、法务问题交流',
              // 沙龙海报地址
              imgUrl:'',
              // 沙龙开始时间
              startTime:'',
              // 报名截止时间
              deadline:'',
              // 沙龙举办地址
              address: '',
              // 参与人数
              canyurenshu: '',
              // 门票
              ticket:'',
              // 报名人数
              joins:'',
              // 感兴趣人数
              interests:'',
              // 活动详情
              activity_detail:'',
              // 嘉宾数
              guests:'',
              // 现场照片
              scene_photo:'',
              // 相关文章
              article:''
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        // 最近举办的沙龙
        latelySalon: {
          title: '教育行业里的增长该怎么做'
        },
        isFollowed: false
      },
      {
        name: "职人社的朋友",
        introduce: "这里时职人社朋友们的聚集地 , 他们和职人社一起搞一些有趣的沙龙。",
        totalSalons: {
          numbers: 2,
          salons: [
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        latelySalon: {
          title: '印度市场的财务、法务问题交流'
        },
        isFollowed: false
      },
      {
        name: "职人社",
        introduce: "职人社时新一代的互联网职业成长社群 , 通过内容、社群于沙龙 , 连接优秀的人与公司 , 帮助双方持续成长 , 取得更大的成功。我们的职业经纪人团队 , 已与大量独角兽和细分领域第一的公司建立合作。",
        totalSalons: {
          numbers: 4,
          salons: [
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        latelySalon: {
          title: '教育行业里的增长该怎么做'
        },
        isFollowed: false
      },
      {
        name: "职人社的朋友",
        introduce: "这里时职人社朋友们的聚集地 , 他们和职人社一起搞一些有趣的沙龙。",
        totalSalons: {
          numbers: 2,
          salons: [
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        latelySalon: {
          title: '印度市场的财务、法务问题交流'
        },
        isFollowed: false
      },
      {
        name: "职人社",
        introduce: "职人社时新一代的互联网职业成长社群 , 通过内容、社群于沙龙 , 连接优秀的人与公司 , 帮助双方持续成长 , 取得更大的成功。我们的职业经纪人团队 , 已与大量独角兽和细分领域第一的公司建立合作。",
        totalSalons: {
          numbers: 4,
          salons: [
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        latelySalon: {
          title: '教育行业里的增长该怎么做'
        },
        isFollowed: false
      },
      {
        name: "职人社的朋友",
        introduce: "这里时职人社朋友们的聚集地 , 他们和职人社一起搞一些有趣的沙龙。",
        totalSalons: {
          numbers: 2,
          salons: [
            {
              title: '印度市场的财务、法务问题交流'
            },
            {
              title: '印度市场的财务、法务问题交流'
            }
          ]
        },
        latelySalon: {
          title: '印度市场的财务、法务问题交流'
        },
        isFollowed: false
      }
    ],
    showDialog: false
  },
  toggleDialog() {
    wx.removeStorageSync('index')
    this.setData({
      showDialog: false
    })
  },
  isClicked: function () {
    let index = wx.getStorageSync('index');
    this.data.sponsors[index].isFollowed = false;
    const sponsors = this.data.sponsors;
    this.setData({
      sponsors,
    })
    this.toggleDialog();
  },
  follow: function (e) {
    let index = e.currentTarget.dataset.index;
    let isFollowed = this.data.sponsors[index].isFollowed;
    if (isFollowed) {
      wx.setStorageSync('index', index);
      this.setData({
        showDialog: true
      })
    } else {
      isFollowed = !isFollowed;
      this.data.sponsors[index].isFollowed = isFollowed;
      const sponsors = this.data.sponsors;
      this.setData({
        sponsors
      })
    }
  },
  go_sponsorDetail(){
    wx.navigateTo({
      url: '/pages/sponsor_detail/sponsorDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主办方'
    })
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