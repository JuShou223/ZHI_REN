// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        name:'参加',
        content:[]
      },
      {
        name: '感兴趣',
        content: []
      },
      {
        name: '关注',
        content: []
      }
    ],
    curIndex:0,
    curContent:[]
  },
  goEditor(){
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },
  part1(e){
    let index = e.currentTarget.dataset.index;
    let curContent = this.data.lists[index].content;
    this.setData({
      curIndex:index,
      curContent
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
        wx.setNavigationBarTitle({
          title: that.data.nickName
        })
      },
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