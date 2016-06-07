
window.onload=function(){
	var wid=document.documentElement.clientWidth;
	var screenH=document.documentElement.clientHeight;
//	var scale=wid/645
	var scale=screenH/1140

	document.body.style.zoom=scale
//	$(".page1,.page2,.page3,.page4,.page5").css({"height":screenH})
}
window.onresize=function(){
	var wid=document.documentElement.clientWidth;
	var screenH=document.documentElement.clientHeight;
//	var scale=wid/645
	var scale=screenH/1140
	document.body.style.zoom=scale
//	$(".page1,.page2,.page3,.page4,.page5").css({"height":screenH})

}

var arr=[];
$.ajax({
	type:"get",//请求类型
	url:"http://180.76.185.227/lj/zepto/zeptoPhp1.php",
	dataType:"json",//数据类型
	success:function(data){
		arr.push(data)
		$(".pa_top").css({"background":"url("+arr[0].msg1.photo+")"})
		$(".pa_cen").css({"background":"url("+arr[0].msg1.title+")"})
	
		
		$(".pb_top").css({"background":"url("+arr[0].msg2.title+")"})
		$(".pb_cen").css({"background":"url("+arr[0].msg2.photo+")"})
		$(".pb_people").css({"background":"url("+arr[0].msg2.people+")"})
		$(".pb_seejob").css({"background":"url("+arr[0].msg2.btn+")"})
		$(".dot").css({"background":"url("+arr[0].msg.dot+")"})
		$(".b_btn").css({"background":"url("+arr[0].msg.icon+")"})
		
		$(".pc_top").css({"background":"url("+arr[0].msg3.title+")"})
		$(".pc_cen").css({"background":"url("+arr[0].msg3.photo+")"})
		$(".pc_people").css({"background":"url("+arr[0].msg3.people+")"})
		$(".pc_seejob").css({"background":"url("+arr[0].msg3.btn+")"})
		
		$(".pd_top").css({"background":"url("+arr[0].msg4.title+")"})
		$(".pd_cen").css({"background":"url("+arr[0].msg4.photo+")"})
		$(".pd_people").css({"background":"url("+arr[0].msg4.people+")"})
		$(".pd_seejob").css({"background":"url("+arr[0].msg4.btn+")"})
		
		$(".pe_cen").css({"background":"url("+arr[0].msg5.photo+")"})
		$(".pe_seejob").css({"background":"url("+arr[0].msg5.btn+")"})
		
		
		$("div").css({"background-repeat":"no-repeat"})
		$("div").css({"background-size":"100%"})
	},
	error:function(){
		alert("错误")
	}
})
var i=0
var scrolltop=0
var screenH=document.documentElement.clientHeight;
$(function(){
	

	setInterval(function(a){
		 scrolltop=$("body").scrollTop()
	},300)	

//	$(".b_btn").each(function(a){			
//		$(this).click(function(){
//			console.log($(this).index())
//			var num=$(this).index()-1
//			console.log(num)
//			$("body").animate({"scrollTop":screenH*num},200)
//		})
//	})
	$(".b_btn").click(function(){
			var num=$(".b_btn").index(this)+1
			$("body").animate({"scrollTop":screenH*num},200)
	})
//	$(".page1").on("swipeleft",function(){
//	  alert("向左滑动!");
//	});	
//	$(document).on("scrollstart",function(){
//		alert()
//		i++
//		$("body").animate({"scrollTop":screenH*i},200)
//	});
})


window.onmousewheel = function (e) { 	
    e = event || window.event;  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
               	$("body").animate({"scrollTop":scrolltop-screenH},200)
           	}
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                $("body").animate({"scrollTop":scrolltop+screenH},200)
            } 
	}
} 
