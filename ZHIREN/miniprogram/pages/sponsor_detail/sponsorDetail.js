// miniprogram/pages/sponsor_detail/sponsorDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sponsor: {
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
    lineClamp:3,
    open:false,
    showDialog: false
  },
  toggleDialog() {
    this.setData({
      showDialog: false
    })
  },
  isClicked: function () {
    this.data.sponsor.isFollowed = false;
    const sponsor = this.data.sponsor;
    this.setData({
      sponsor,
    })
    this.toggleDialog();
  },
  follow: function (e) {
    let isFollowed = this.data.sponsor.isFollowed;
    if (isFollowed) {
      this.setData({
        showDialog: true
      })
    } else {
      isFollowed = !isFollowed;
      this.data.sponsor.isFollowed = isFollowed;
      const sponsor = this.data.sponsor;
      this.setData({
        sponsor
      })
    }
  },
  openOrClose(){
    let open = this.data.open;
    open = !open;
    if(open){
      this.data.lineClamp = 100;
    }
    else{
      this.data.lineClamp = 3;
    }
    let lineClamp = this.data.lineClamp;
    this.setData({
      open,
      lineClamp
    })
    console.log(open,lineClamp)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主办方主页'
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