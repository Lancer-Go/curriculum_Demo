// cur_list/cur.js
Page({
  onLoad: function () {
    //设置数据 只接收json数据类型
    this.setData({
      cur_l1_d: cur_l1,
      cur_l2_d: cur_l2,
      cur_l3_d: cur_l3,
      cur_l4_d: cur_l4
    })
  },
  gocur: function () {
    wx.navigateTo({
      url: '../cur_list/cur_detail/detail',
    })
  }
})
var cur_l1= {
  name: '化学课',
  adress: '讲堂五',
  class_num: '15611',
  scroe: '2',
  teacher: 'Mary',
  time: '周一'
}
var  cur_l2= {
  name: '微积分',
  adress: '讲堂二'
}
var cur_l3={
  name: '数学课',
  adress: 'E201'
}
var cur_l4= {
  name: '计算机导论',
  adress: '讲堂三'
}
module.exports = {
  clas_detail: cur_l1
}