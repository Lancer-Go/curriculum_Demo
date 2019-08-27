// cur_list/cur.js
const app = getApp()
Page({
  data:{
     cur_de:[],
     cur:3
  },
  onLoad: function () {
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
  },
  gocur: function (e) {
    var that=this
    var num = e.target.dataset.index
    wx.navigateTo({
      url: '../cur_list/cur_detail/detail'
    }),
    app.globalData.cur = num/*重点理解的地方，这个地方非常不了解，如何赋值等*/
    console.log(app.globalData.cur)
  }
})