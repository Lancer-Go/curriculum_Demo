// cur_home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_home:'imgs/bcg2.jpg',
    cur_de:[]
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
  onLoad:function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d6406db0063876559c248c3/Detail/cur_de',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var cur_det = res.data.course
        console.log(cur_det),
          that.setData({
            cur_de: cur_det
          })
      }
    })
  }
})