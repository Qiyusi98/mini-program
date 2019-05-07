// pages/chatbox/chatbox.js
const utilApi = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatboxId:"",
    message:[],
    index: 0,
    totalMessage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 打印页面contents传递过来的URL中的参数chatbox_id
    console.log(options.chatbox_id);
   	// 把this对象复制到临时变量that    
    var that = this;
    this.setData({
      chatboxId: options.chatbox_id
    })
	// 得到全部的聊天信息，实际情况下，如果一个页面的聊天信息比较多的化，最好能够分页加载数据
    that.totalMessage(options.chatbox_id,options.percent);
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

  addMessage:function () {
    var i = this.data.index;
    var length=this.data.totalMessage.length;
    //console.log(this.data.totalMessage.length);
    var that = this;
    // 使得按钮不能点击
    if(i>=length){
      // 跳出程序
      return;
    }

    console.log(this.data.totalMessage[i]);
    var message = this.data.message.concat(this.data.totalMessage[i]);
    
    that.setData({  
      message: message
    })

    i++;
    that.setContentSchedule(i/length);

    that.setData({
      index: i
    })    
    console.log(i);

    var query = wx.createSelectorQuery()
    query.select('.messageHeight').boundingClientRect()
    query.exec(function (res) {
    //  rect.id       节点的ID
    //  rect.dataset  节点的dataset
    //  rect.left     节点的左边界坐标
    //  rect.right    节点的右边界坐标
    //  rect.top      节点的上边界坐标
    //  rect.bottom   节点的下边界坐标
    //  rect.width    节点的宽度
    //  rect.height   节点的高度 
    //动态获取view元素的宽高
    // console.dir(res);
    // console.dir(res[0].height);
    // console.dir(res[0].bottom);
    // console.log(res[0].top); // 类messageHeight节点的上边界坐标
    wx.pageScrollTo({
    // scrollTop	Number	是	滚动到页面的目标位置（单位px）
    scrollTop: res[0].bottom+50000,
    // duration: 300
    })
  })  
  },

  setContentSchedule: function(percent){
    var contentSchedule=wx.getStorageSync("content_schedule")||{};
    contentSchedule[this.data.chatboxId]=(percent*100).toFixed(2);
    wx.setStorageSync("content_schedule", contentSchedule);
  },


	totalMessage:function(chatbox_id,percent){
	// 通过 getApp 方法获取到全局唯一的 App 示例
   	var app = getApp();
   	//把this对象复制到临时变量that
   	var that = this;

   	app.chatboxApi.getMessage(chatbox_id).then(function(res){
     	//console.log(res[0].message);
     	that.setData({
       		totalMessage:res[0].message,
           chatboxId: chatbox_id
     	})

       that.data.index=Math.round(percent/100*that.data.totalMessage.length);
       var message = that.data.message;
       for(var i=0;i<that.data.index;i++){
         message=message.concat(that.data.totalMessage[i]);
       }

       that.setData({
         message:message
       })

   	}).catch(function(error){
		wx.showToast({
			title: '出错了！',
			icon: 'none',
		})
	})
  }

})