// server.js
const express = require("express");
const server = express();
const request = require("request");
const list = {
    "apple":{
        title:"苹果",
        description:"又大又红的苹果",
        price:7.99,
        sales:"1000+"
    },
    "banana":{
        title:"香蕉",
        description:"好吃又便宜的香蕉",
        price:1.49,
        sales:"2000+"
    },
    "watermelon":{
        title:"西瓜",
        description:"又大又甜的西瓜",
        price:1.99,
        sales:"5000+"
    },
    "orange":{
        title:"橙子",
        description:"汁多肉厚的橙子",
        price:6.99,
        sales:"3000+"
    }
}
server.use("/list",function(req,res){
    res.set("Content-Type","application/json");
    res.end(JSON.stringify(list));

})
server.use("/",function(req,res){
    res.end("<h1>hello world</h1>");
})

server.listen(3000,function(){
    console.log("listening on *:3000");
})
