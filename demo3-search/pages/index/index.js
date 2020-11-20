//index.js
Page({
    data:{
        items:[],
        refreshed:false,
        reloaded:false
    },
    onLoad:function(){
        const self = this;
        this.getDataFromServer("../../data/data_0.js")
        .then(function(items){
            self.setData({items});
        })
    },
    handleQuestionTap:function(){
        wx.navigateTo({
            url:"../question/question"
        });
    },
    handleAnswerTap:function(){
        wx.navigateTo({
            url:"../answer/answer"
        })
    },
    handleScrollToUpper:function(){
        let {refreshed,reloaded} = this.data;
        if(reloaded || refreshed) return;
        wx.showNavigationBarLoading();
        this.refresh();
    },
    handleScrollToLower:function(){
        let {reloaded} = this.data;
        if(reloaded) return;
        this.reload();
    },
    refresh:function(){
        const self = this;
        self.showToast("刷新中","loading",2000,true);
        self.getDataFromServer("../../data/data_0.js")
        .then(function(items){
            self.setData({items,refreshed:true},function(){
                self.timeout(2000).then(function(){
                    self.showToast("刷新成功","success",1000,true);
                    wx.hideNavigationBarLoading();
                    wx.stopPullDownRefresh();
                });
            });
        });
    },
    reload:function(){
        const self = this;
        self.showToast("加载中","loading",3000,true);
        self.getDataFromServer("../../data/data_1.js")
        .then(function(tempItems){
            self.setData({items:self.data.items.concat(tempItems),reloaded:true},function(){
                self.timeout(3000).then(function(){
                    self.showToast("加载成功","success",1000,true);
                });
            });
        });
    },
    getDataFromServer(url){
        return new Promise(function(resolve){
            const {items} = require(url);
            resolve(items);
        });
    },
    showToast(title,icon,duration,mask){
        wx.showToast({
            title,
            icon,
            duration,
            mask
        });
    },
    timeout:function(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }
})
