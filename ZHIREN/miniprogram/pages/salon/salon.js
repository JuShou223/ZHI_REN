// miniprogram/pages/salon/salon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      },
      {
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      },
      {
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      },
      {
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      },
      {
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      },
      {
        title: '印度市场的财务、法务问题交流',
        imageInfo: '../../images/p1.png',
        tabImage1: '',
        tabImage2: '../../images/sz.png',
        tabImage3: '../../images/address.png',
        tabImage4: '../../images/free.png',
        info1: '职人设',
        info2: '2019-05-28 14:00',
        info3: '北京-中关村',
        info4: '免费',
        imageUrl1: '../../images/tx1.jpg',
        imageUrl2: '../../images/tx2.jpg',
        imageUrl3: '../../images/tx3.jpg',
        join: 16,
        hobby: 7
      }
    ],
    title: '印度市场的财务、法务问题交流',
    imageInfo: '../../images/p1.png',
    tabImage1: '',
    tabImage2: '../../images/sz.png',
    tabImage3: '../../images/address.png',
    tabImage4: '../../images/free.png',
    info1: '职人设',
    info2: '2019-05-28 14:00',
    info3: '北京-中关村',
    info4: '免费',
    imageUrl1: '../../images/tx1.jpg',
    imageUrl2: '../../images/tx2.jpg',
    imageUrl3: '../../images/tx3.jpg',
    join: 16,
    hobby: 7
  },
  tosalonDetail: function(e) {
    wx.navigateTo({
      url: `/pages/salonDetail/salonDetail?id=${e.currentTarget.dataset.id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})