// pages/adduserinfo/adduserinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emailValid: false,
    stuIdValid: false,
    userInfo: [],
    userCollection: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("accountInfo",[])
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

  },
  emailCheck(e) {
    var inputEmail=e.detail.value
    let regEx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    if(regEx.test(inputEmail)){
      this.setData({
        emailValid: true,
      })
    }else{
      this.setData({
        emailValid: false,
      })
    }   
  },
  stuIdCheck(e) {
    var inputStuId=e.detail.value
    
    let regEx = /[0-9]{11}/
    if(regEx.test(inputStuId)&&inputStuId.length==11){
      this.setData({
        stuIdValid: true
      })
    }else{
      this.setData({
        stuIdValid: false
      })
    }
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var info=e.detail.value;
    if(this.data.stuIdValid&&this.data.emailValid&&
    info.username!=""&&info.radio_group!=""){
      console.log("数据提交成功");
      var information=wx.getStorageSync("accountInfo");
      information.push({name:info.username,studentId:info.student_id,email:info.email,gender:info.radio_group});
      wx.setStorageSync("accountInfo", information);
      
      
      wx.switchTab({
        url: '../index/index',
      })
    
    }
  },

  formReset() {
    console.log('form发生了reset事件')
  }
})