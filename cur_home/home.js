// cur_home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_home:'imgs/bcg2.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:function(res){
              console.log(res.userInfo)
            }
          })
        }
      },
      bindGetUserInfo(e) {
        console.log(e.detail.userInfo)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  gocur:function(){
    wx.navigateTo({
      url: '../cur_list/cur',
    })
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