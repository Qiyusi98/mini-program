// pages/myaccount/myaccount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    validUser: false,
    myCollection: [
      { contents: "收藏内容A"},
      { contents: "收藏内容B"}
    ],
    myClass:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var accountInfo=wx.getStorageSync("accountInfo");
    if(accountInfo.length==0){
      this.setData({
        validUser: false,
      })
    }else{
      this.setData({
        validUser: true,
        name: accountInfo[0]["name"],
        email: accountInfo[0]["email"],
        stuId: accountInfo[0]["studentId"]

      })
    }
    
    // var that = this;
    // wx.setStorage({
    //   key: 'myClass',
    //   data: that.data.myClass
    // })  
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
    var accountInfo = wx.getStorageSync("accountInfo");
    console.log(wx.getStorageSync("accountInfo"));
    this.setData({
      myClass: wx.getStorageSync("myClass"),
      validUser: wx.getStorageSync("accountInfo")!=0,
      name: accountInfo[0]["name"],
      email: accountInfo[0]["email"],
      stuId: accountInfo[0]["studentId"]
    })
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