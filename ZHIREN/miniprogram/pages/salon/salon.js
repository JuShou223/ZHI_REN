// miniprogram/pages/salon/salon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
<<<<<<< HEAD
  toSalonDetail: function(e) {
=======
  tosalonDetail: function (e) {
>>>>>>> 106984f077a09f6d3a26b9e1f3e59d3073f2ba83
    wx.navigateTo({
      url: `/pages/salon_detail/salon_detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  getSalons(all){
    let list = [];
    for(let i=0; i<all.length;i++){
      list.push(...all[i].totalSalons.salons)
    }
    console.log(list)
    this.setData({
      list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '沙龙'
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf34b4428263d2e19427451/zr-data1/zr',

      success: (res) => {
        this.getSalons(res.data.data.sponsors);
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
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)
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