// pages/contents/contents.js
const utilApi = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents_name:[],
    content_schedule:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.content_id);
    
    var that = this;
    var app = getApp();
    var url = app.globalData.host + '/contents?content_id=' + options.content_id;
    utilApi.requestPromise(url)
      .then(res => {
        console.log("打印contents的数据");
        console.log(res.data);
        that.setData({
          contents_name: res.data[0].contents_name
        })
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
    this.setData({
      content_schedule: wx.getStorageSync("content_schedule")
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