//post.js
var dataObj = require("../../data/data.js");
Page({
  data: {

  },
  onLoad:function(){
	  this.setData({
	    postList: dataObj.postList
    })
  },
  onUnload: function (event) {
      console.log("page is unload")
  },
  onHide: function (event) {
      console.log("page is hide")
  },
})

