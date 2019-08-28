// cur_list/cur_detail/detail.js
const app = getApp()/*使用全局变量可以更改选择的页面，因此可以随时更新相应的课程 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    class_num:'',
    scroe:'',
    adress:'',
    teacher:'',
    time:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    console.log(app.globalData.cur)
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
            cur_de: cur_det,
          name: cur_det[app.globalData.cur].name,
          class_num: cur_det[app.globalData.cur].class_num,
          scroe: cur_det[app.globalData.cur].scroe,
          adress: cur_det[app.globalData.cur].adress,
          teacher: cur_det[app.globalData.cur].teacher,
          time: cur_det[app.globalData.cur].time
          })
      }
    })
  }
})