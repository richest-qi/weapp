// pages/question/question.js
Page({
  data:{
    isExpand:false,
    answerNum:257
  },
  handleOpeartion:function(){
    const self = this;
    this.setData({
      isExpand:!self.data.isExpand
    })
  }
})