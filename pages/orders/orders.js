// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex : 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    const that = this
    that.setData({
      curIndex: 0
    })
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

  bindchange : function(e)
  {
    const that = this
    that.setData({
      curIndex: e.detail.current
    })
  },

  bindtopTap : function(e)
  {
    const that = this
    if (that.data.curIndex == e.target.dataset.current)
    {
      return false;
    }
    else
    {
      that.setData({
        curIndex: e.target.dataset.index
      })
    }
  }
})