// index.js
Page({
    onLoad:function(){
        const self = this;
        var list = wx.getStorageSync("list");
        if(list){
            self.setData({
                list:list
            })
        }
        wx.request({
            url:"http://localhost:3000/list",
            success:function(res){
                if(res.statusCode === 200){
                    const {data} = res;
                    list = Object.keys(data).map(key => {
                        let temp = data[key];
                        let imgUrl = "./imgs/"+key+".png";
                        return {
                            id:key,
                            imgUrl:imgUrl,
                            title:temp.title,
                            description:temp.description,
                            price:temp.price,
                            sales:temp.sales
                        }
                    });
                    self.setData({
                        list:list
                    });
                    wx.setStorageSync("list",list);
                }
            }
        })
    }
})
