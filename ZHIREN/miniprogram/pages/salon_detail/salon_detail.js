// miniprogram/pages/salon_detail/salon_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '../../images/p1.png',
    title: '印度市场的财务，法务问题交流',
    imgTab1: '../../images/sz.png',
    time: '2019-05-28 14:00 至 18:00',
    imgTab2: '../../images/deadline.png',
    deadline: '报名截止2019-05-27 14:00',
    imgTab3: '../../images/address.png',
    addr: '北京-中关村',
    imgTab4: '../../images/people.png',
    people: 5,
    imgTab5: '../../images/free.png',
    cost: '免费',
    imgJoin1: '../../images/tx1.jpg',
    imgJoin2: '../../images/tx2.jpg',
    imgJoin3: '../../images/tx3.jpg',
    join: 16,
    imgHobby1: '../../images/tx1.jpg',
    imgHobby2: '../../images/tx2.jpg',
    imgHobby3: '../../images/tx3.jpg',
    hobby: 7,
    container: '我们邀请了印度Khaitan & Co 律师事务所合伙人投资人Katric Machcd于 5月28日下午一起纯邀请制的内部交流，主要涉及印度市场的财务，法务等问题，分享会很专业和具体（非科普性质） 如果你正在做印度市场且在管理印度团队，对当地的财务法务有相关问题想要交流，那欢迎报名。PS：本次分享为纯英文分享，需要你有比较流利的英文听说能力。Knaitan & Co 1911年成立 创始人 De比Prased Knaitan 是曾参与 1949年宪法制定的印度制宪会议七名成员之一。目前Knatyi & Co 在印度居于领先地位，是一家提供全方位服务的律师事务所，拥有超过550名技能多样。参与过高关注度和开创性活动的专业人士。',
    lineClamp: 2,
    open: false,
    amount: 0,
    num: 2,
    intro1: '职人设',
    intro2: '共举办38场沙龙',
    imgN: 0,
    titleNow: 0
  },
  openOrClose() {
    let open = this.data.open;
    open = !open;
    if (open) {
      this.data.lineClamp = 100;
    }
    else {
      this.data.lineClamp = 2;
    }
    let lineClamp = this.data.lineClamp;
    this.setData({
      open,
      lineClamp
    })
    // console.log(open, lineClamp)
  },
  weatherToAdd() {
    
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