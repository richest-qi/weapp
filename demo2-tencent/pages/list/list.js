// list.js
Page({
    data:{
        items:[
            {id:"WeChat",title:"微信",url:"../../imgs/WeChat.png"},
            {id:"QQ",title:"QQ",url:"../../imgs/QQ.png"},
            {id:"QQZone",title:"QQ空间",url:"../../imgs/QQZone.png"}
        ]
    },
    handleTap:function(e){
        wx.navigateTo({ url: '../detail/detail?id='+e.currentTarget.id });
    }
})