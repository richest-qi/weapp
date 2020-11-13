// details.js
const details = {
    "WeChat":{
        name:"微信",
        label:"微信是一种生活方式",
        desc:"自2011年推出以来，微信作为全国拥有最大用户群体的通信社交平台，为数以亿计的用户带来生活的便捷与乐趣。它不仅支持发送语音、视频、图片和文字，同时将实时通信与社交资讯、生活服务相结合。“朋友圈”、“微信公众号”、“微信小程序”、“微信支付”，为满足用户不断新增的需求，微信不断加入种种创新功能，致力为用户提供优越的移动数字生活体验。"
    },
    "QQ":{
        name:"QQ",
        label:"每一天，乐在沟通",
        desc:"QQ，由腾讯公司于1999年推出。作为一款横跨PC和移动的即时通信和社交平台，QQ支持在线聊天、视频语音通话、点对点断点续传文件、QQ邮箱等多种功能，并不断推出符合年轻用户需求的创新功能，例如支持用户根据个人需求和兴趣快速扩关系的“扩列”以及精准匹配用户兴趣的内容社交平台“看点”等。此外，腾讯亦提供提升企业工作效率的TIM（办公版QQ）。截至2020年3月，QQ月活跃用户（包括PC和移动）为7.68亿。"
    },
    "QQZone":{
        name:"QQ空间",
        label:"分享生活，留住感动",
        desc:"QQ空间是支持用户和亲友进行分享互动的社交平台，满足用户展示、交流和娱乐的需求，随时随地分享生活。在QQ空间上，用户可以通过多种功能实现自我表达，如日志、说说、分享、相册、视频、留言板、音乐盒、个人档等。此外，用户还可根据个人喜好设定空间装饰，打造个人特色。QQ空间提供的第三方网站和第三方应用接入，可以更好的为用户提供个性化服务。"
    }
}

Page({
    data:{
        imgUrl:"",
        name:"",
        label:"",
        desc:""
    },
    onLoad:function(option){
        const {id} = option;
        const imgUrl = `../../imgs/${id}.png`;
        const {name,label,desc} = details[id];
        // this.setData({
        //     imgUrl,
        //     name,
        //     label,
        //     desc
        // })
        this.setData({
            imgUrl,
            name,
            label,
            desc
        },function(){
            // console.log("updated!")
        });
        console.log(name+" loaded!");
    },
    onUnload:function(){
        console.log(this.options.id+" unloaded!");
    },
    onReady:function(){
        console.log(this.options.id+" is ready!");
    }
})