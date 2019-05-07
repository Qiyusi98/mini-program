// pages/course/course.js
const utilApi = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Catalog:[],
    courses:[],
    isMyClass:{},
    validUser: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //把this对象复制到临时变量that
    var that = this;
    var url = 'http://localhost:5300/course';
    utilApi.requestPromise(url)
      .then(res => {
        console.log(res.data);
        this.setData({
          courses: res.data
        })
        //更新isMyClass
        this.setisMyClass(wx.getStorageSync("myClass") || []);
        console.log("wo")

        
        console.log(this.data.isMyClass);
      })

    var accountInfo = wx.getStorageSync("accountInfo");
    if (accountInfo.length == 0) {
      this.setData({
        validUser: false,
      })
    }else{
      this.setData({
        validUser: true,
      })
    }
    
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
    if (accountInfo.length == 0) {
      this.setData({
        validUser: false,
      })
    } else {
      this.setData({
        validUser: true,
      })
    }
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

  /**
   * 参与课程
   */
  addClass:function(event){
    var myClass =[];
    myClass= wx.getStorageSync("myClass")||[];
    var course_name = event.target.dataset.course_name;
    var content_id=event.target.dataset.content_id;
    myClass.push({ courseName: course_name, contents_id: content_id });
    wx.setStorageSync("myClass", myClass);


    //更新isMyClass
    this.setisMyClass(myClass);
    console.log(this.data.isMyClass);
   

  },

  /*
  *更新isMyClass数组
  **/
  setisMyClass:function(myClass){
    for(var i=0;i<this.data.courses.length;i++){
      var course_name=this.data.courses[i].course_name;
      for(var j=0;j<myClass.length;j++){
        if(course_name==myClass[j].courseName){
          this.data.isMyClass[course_name]=true;
          break;
        }
      }
      if(this.data.isMyClass[course_name]!=true){
        this.data.isMyClass[course_name]=false;
      }
      
    }
    this.setData({
      isMyClass: this.data.isMyClass
    })
  }
  
})