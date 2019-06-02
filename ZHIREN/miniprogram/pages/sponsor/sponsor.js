// miniprogram/pages/sponsor/sponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sponsors: [],
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
  go_sponsorDetail(e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/sponsor_detail/sponsorDetail?index=${index}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主办方'
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf34b4428263d2e19427451/zr-data1/zr',

      success: (res) => {
        console.log(res)
        this.setData({
          sponsors: res.data.data.sponsors
        })
      }
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