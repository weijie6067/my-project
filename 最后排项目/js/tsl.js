var newshow = null;
var screenH=document.documentElement.clientHeight;
window.onresize=function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/1500
	document.body.style.zoom=scale
}
window.onload=function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/1500
	document.body.style.zoom=scale
	var navLi=document.getElementById('nav').getElementsByTagName('li');
	var navListA=document.getElementById('navlist').getElementsByTagName('a');
	for (var i = 0; i < navLi.length; i++) {
		navLi[i].indexNav=i;
		navLi[i].onmouseover=function(){
			for (var i = 0; i < navLi.length; i++) {
				navListA[i].style.color="white";
			}
			navListA[this.indexNav].style.color="orange";
		}
	}
//	window.addEventListener("load",function(){},false)
	
}

//第一组大图轮播图
function lunbo1 () {
	var mySwiper = new Swiper ('.lunbo', {
	 	effect:'fade',
	    loop: true, //可循环
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationClickable:true, //点击可用
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	})
}
//第一组大图轮播图

//第二部分文字
function txtPt2(){
	var screenH=document.documentElement.clientHeight;
	var txt2=document.getElementById('txt2');
	var txt2h=txt2.getElementsByTagName('h2');
	var txt2p=txt2.getElementsByTagName('p');
	var p2center=document.getElementById('p2center');
	var carshow=document.getElementsByClassName('carshow');
	function txtShow(){
		var scrolltop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
		if(scrolltop>=200){
			txt2.style.marginTop=45+"px";
			txt2h[0].style.opacity=1;
			txt2p[0].style.opacity=1;
			carshow[0].style.opacity=1;
			carshow[1].style.opacity=1;
		}
	}
	timetxtShow=setInterval(txtShow,100);
}
//第二部分文字

// 第二部分轮播图
function lunbo2(){
	var mySwiper2 = new Swiper ('.show1', {
	  	loop: true,
		// loopedSlides :6,
	  	slidesPerView : 3,
	 	spaceBetween : 20,
	    autoplay:1500,
	    autoplayDisableOnInteraction:false,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    	 
    })
	var mySwiper3 = new Swiper ('.show2', {
	  	loop: true,
		// loopedSlides :6,
	  	slidesPerView : 3,
	 	spaceBetween : 20,
	    autoplay:1500,
	    autoplayDisableOnInteraction:false,
	    
    })
    //鼠标放上悬停
	mySwiper2.params.control = mySwiper3;
  	$('.carshow').hover(function(swiper){
        mySwiper2.stopAutoplay();
        mySwiper3.stopAutoplay();
    },function(swiper){
        mySwiper2.startAutoplay();
        mySwiper3.startAutoplay();
    });
    //鼠标放上悬停
}
// 第二部分轮播图

//第三部分文字
function txtPt3(){
	var screenH=document.documentElement.clientHeight;
	var txt3=document.getElementById('txt3');
	var txt3h=txt3.getElementsByTagName('h2');
	var txt3p=txt3.getElementsByTagName('p');

	var p3center=document.getElementById('p3center');
	var timetxtShow2=null;
	var changeC=document.getElementsByClassName('changeC');
	function txtShow2(){
		var scrolltop2=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
		if(scrolltop2>=screenH){
			txt3.style.marginTop=45+"px";
			txt3h[0].style.opacity=1;
			txt3p[0].style.opacity=1;
			changeC[0].style.opacity=1;
			// carshow[1].style.opacity=1;
			}
		}
		timetxtShow2=setInterval(txtShow2,100);
}
//第三部分文字
	var screenH=document.documentElement.clientHeight;
//第四部分文字
function txtPt4(){
	var screenH=document.documentElement.clientHeight;
	var txt4=document.getElementById('txt4');
	var txt4h=txt4.getElementsByTagName('h2');
	var txt4p=txt4.getElementsByTagName('p');

	var timetxtShow3=null;
	function txtShow3(){
		var scrolltop3=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
		if(scrolltop3>=screenH*2.5){
		
			txt4.style.marginTop=45+"px";
			txt4h[0].style.opacity=1;
			txt4p[0].style.opacity=1;
		}
	}
	timetxtShow3=setInterval(txtShow3,100);
}
//第四部分文字

//第五部分文字
function txtPt5(){
	var screenH=document.documentElement.clientHeight;
	var txt5=document.getElementById('txt5');
	var txt5b=document.getElementById('txt5b');
	var txt5h=txt5.getElementsByTagName('h2');
	var txt5p=txt5.getElementsByTagName('p');

	var timetxtShow4=null;
	function txtShow4(){
		var scrolltop4=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
		if(scrolltop4>=screenH*5){
			txt5.style.marginTop=45+"px";
			txt5h[0].style.opacity=1;
			txt5p[0].style.opacity=1;
			txt5b.style.opacity=1;
		}
	}
	timetxtShow4=setInterval(txtShow4,100);
}
//setInterval(function(){
//	var stp=$("body").scrollTop();
//	if(stp>screenH*3){
//		
//		$(".txt5 h2,.txt5 h2").animate({"opacity":"1"},3000)
//		$(".txt5").animate({"marginTop":"45px"},2000)
//	}
//},200)
//第五部分文字

// 显现窗口
function showwindow(){
	var show1=document.getElementById('show1').getElementsByTagName('div');
	var show2=document.getElementById('show2').getElementsByTagName('div');
	var cover=document.getElementById('cover');
	var cHidden=document.getElementById('cHidden');
//	var newshow;
	for (var i = 0; i < show1.length; i++) {
		show1[i].indexSa=i;
		show1[i].onclick=function(){
			newshow=this.cloneNode(false);
			cHidden.appendChild(newshow);
			cover.style.display="block";
			cHidden.style.zIndex=998;
			cHidden.style.opacity=1;
			newshow.style.width="100%";
		}
	}
	
	for (var i = 0; i < show2.length; i++) {
		show2[i].indexSb=i;
		show2[i].onclick=function(){
			newshow=this.cloneNode(false);
			cHidden.appendChild(newshow);
			cover.style.display="block";
			cHidden.style.zIndex=998;
			cHidden.style.opacity=1;
			newshow.style.width="100%";	
		}
	}
	
}
// 显现窗口

// 关闭图片放大窗口
function closepic(){

	var close=document.getElementById('close');
	var timeClose=null;
	close.onclick=function(){
		cHidden.style.opacity=0;
		cover.style.display="none";
		function close(){
//				console.log(newshow)
			cHidden.removeChild(newshow);
			cHidden.style.zIndex=1;
			cHidden.style.zIndex=995;
		}
		timeClose=setTimeout(close,1000);
	}
}
// 关闭图片放大窗口

// 点击换车内颜色
function carcolor(){
	var changeipt=document.getElementById('changeipt').getElementsByTagName('li');
	var changecolor=document.getElementById('changecolor').getElementsByTagName('div');
	for (var i = 0; i < changeipt.length; i++) {
		changeipt[i].indexipt=i;
		changeipt[i].onclick=function(){
			for (var i = 0; i < changeipt.length; i++) {
				changeipt[i].style.background="#E0E0E0";
				changeipt[i].style.color="#555";
				changecolor[i].style.opacity=0;
			};
				this.style.background="#555";
				this.style.color="white";
				changecolor[this.indexipt].style.opacity=1;
		}
	}
}
// 点击换车内颜色

// 电池路线
function batteryline (){
	var timebattery=null;
	var yelPoint=document.getElementById('yelPoint').getElementsByTagName('li');
	var yelLine=document.getElementById('yelLine').getElementsByTagName('div');
	function battery(){
		var scrolltop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
		if(scrolltop>=screenH*2.7){
			yelLine[0].style.height=31+"px";
			yelLine[1].style.width=322+"px";
			yelLine[2].style.height=88+"px";
			yelLine[3].style.height=94+"px";
			yelLine[4].style.width=322+"px";
			yelLine[5].style.height=31+"px";
			for (var i = 0; i < yelPoint.length; i++) {
				yelPoint[i].style.opacity=1;
			};
		}
	}
	timebattery=setInterval(battery,100);
}
// 电池路线

//第四部分文字
var screenH=document.documentElement.clientHeight;
//$(body)
setInterval(function(){
	if($("body").scrollTop()>screenH*2.5){
		$("#txt4a").animate({"marginTop":"45px"},2000)
		$(".txt4a h2,.txt4a p").animate({"opacity":1},2000)
		$(".door").delay(1000).animate({"opacity":1},2000)
	}
},200)

// 打开星空
//function openstar(){
//	var doorc=document.getElementById('doorc');
//	var doorl=document.getElementById('doorl');
//	var doorr=document.getElementById('doorr');
//	var pos=0;
//	var timeopen=null;
//	doorc.onmouseover=function (){
//		clearInterval(timeopen)
//		function open(){
//			pos+=5;
//			if(pos>=960){
//				clearInterval(timeopen)
//			}
//			doorl.style.left=-pos+"px";
//			doorr.style.right=-pos+"px";
//		}
//
//		timeopen=setInterval(open,10);
//	}
//}
// 打开星空

// 画布星空
//function star(){
//	var can =document.getElementById("can");
//	var contxt=can.getContext("2d");
//	var grd=contxt.createRadialGradient(860,6000,4500,860,6000,6000);
//	var timedraw=null;
//	var timestarmove=null;
//	grd.addColorStop(0.0 ,"black");
//	grd.addColorStop(0.55 ,"#08166c");
//	grd.addColorStop(0.75 ,"black");
//	contxt.fillStyle=grd;
//	contxt.fillRect(0,0,1920,1920);
//	for (var i = 0; i < 100; i++) {
//		var heighty=960;
//		function draw(){
//			var posx=Math.random()*1920;
//			var posy=Math.random()*4;
//			var posz=Math.random()*3;
//			if(posy>2){
//				contxt.beginPath();
//				contxt.moveTo( posx,860);
//				contxt.lineTo(posx,860-posy);
//				contxt.closePath();
//				contxt.lineWidth=posz;
//				contxt.strokeStyle="white";
//				contxt.stroke();	
//			}
//		}
//		timedraw=setInterval(draw,1000)
//	};
//}
//// 画布星空
function lunbocar(){
	var mySwiper4 = new Swiper ('.lunbocara', {
	  	loop: true,
	  	slidesPerView : 4,
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    	 
    })
	var mySwiper5 = new Swiper ('.lunbocarb', {
	  	loop: true,
	  	slidesPerView : 4,
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    
    })
	var mySwiper6= new Swiper ('.lunbocarc', {
	  	loop: true,
	  	slidesPerView : 4,
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    
    })
    //鼠标放上悬停
	mySwiper4.params.control = mySwiper5;
	$('.lunbocarcover,.lunbocarcover2,.lunbocarcover3').hover(function(swiper){
        mySwiper4.stopAutoplay();
        mySwiper5.stopAutoplay();
        mySwiper6.stopAutoplay();
    },function(swiper){
        mySwiper4.startAutoplay();
        mySwiper5.startAutoplay();
        mySwiper6.startAutoplay();
    });
    //鼠标放上悬停
}
//出现播放按钮
$(".play li").hover(function(){
	$(this).animate({"opacity":"1"},400)
},function(){
	$(this).animate({"opacity":"0"},400)
})
//第六部分
var playi=0
function playl(){
	if(playi>=2){
		playi=0
	}
	playi++;
}
function playr(){
	if(playi<0){
		playi=1
	}
	playi++;
}
$(".autoprev").click(function(){	
	$(".autoplay1,.autoplay2").delay(600).animate({"opacity":1},500)
	$(this).parent().parent().parent().animate({"opacity":0},500)
	
})
$(".autonext").click(function(){	
	$(".autoplay1,.autoplay2").animate({"opacity":1},500)
	$(this).parent().parent().parent().animate({"opacity":0},500)
	
})

var autoi=0
function autol(){
	autoi--;
	if(autoi>=$(".autopic li").length){
		autoi=0;
	}
}
function autor(){
	autoi++;
	if(autoi>=$(".autopic li").length){
		autoi=0;
	}
}
$(".autobotl,.autobotr").css({"opacity":0.4}).hover(function(){
	$(this).stop(true,false).animate({"opacity":1})
},function(){
	$(this).stop(true,false).animate({"opacity":0.4})
})
$(".autobotl").click(function(){
	autol();
	$(".autopic li").stop(true,false).animate({"opacity":0.4},200).eq(autoi).animate({"opacity":1},200)
})
$(".autobotr").click(function(){
	autor();
	$(".autopic li").stop(true,false).animate({"opacity":0.4},200).eq(autoi).animate({"opacity":1},200)
})
function autor(){
	autoi++;
	if(autoi>=$(".autopic li").length){
		autoi=0;
	}
}
function autor(){
	autoi++;
	if(autoi>=$(".autopic li").length){
		autoi=0;
	}
}
//第六文字
setInterval(function(){
	var stp=$("body").scrollTop();
	if(stp>screenH*5){
		
		$(".txt6 h2,.txt6 h2").animate({"opacity":"1"},3000)
		$(".txt6").animate({"marginTop":"45px"},2000)
	}
},200)
//第七字

setInterval(function(){
	var stp=$("body").scrollTop();
	if(stp>screenH*6){
		
		$(".txt7 h2,.txt7 h2").animate({"opacity":"1"},3000)
		$(".txt7").animate({"marginTop":"45px"},2000)
	}
},200)

//第七轮播
$(function(){
	
	var index=0;
	var timeshow=null;
	var len=$(".outer7 div").length
	
	$(".outer7").css({width:$("#pic1").width()*len})
	var maxLeft=$("#pic1").width()*(len-1)
	$(".lunbo7bot div").css({"opacity":"0.4"}).mouseenter(function(){
		index=$(".lunbo7bot div").index(this)
		picsShow(index)
	}).eq(0).trigger("mouseenter")
	
	$(".prev,.next").css({"opacity":"0.2"}).hover(function(){
		$(this).stop(true,false).animate({"opacity":"0.6"},300)
	},function(){
		$(this).stop(true,false).animate({"opacity":"0.2"},300)
	})
	
	$(".prev").click(function(){
		index-=1;
		if(index==-1){
			index=len-1
		}
		picsShow(index)
	})
	
	$(".next").click(function(){
		index+=1;
		if(index==len){
			index=0
		}
		picsShow(index)
	})
	
	$(".lunbo7").hover(function(){
		clearInterval(timeshow)
	},function (){
		timeshow=setInterval(function(){
			picsShow(index)
			index++;
		if(index>=len){
			index=0;
		}},1000)
		}).trigger("mouseleave");
		
	
	
	function picsShow(index){	
		
		var nowLeft=$("#pic1").width()*index
		// console.log($(".lunbo7").scrollLeft())
		if(nowLeft==0){
			
			$(".lunbo7").stop(true,false).animate({scrollLeft:0},0)
		}else{
			$(".lunbo7").stop(true,false).animate({scrollLeft:nowLeft},300)
		}
		
		$(".lunbo7bot div").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300)
	}
	
})
setInterval(function(){
	var stp=$("body").scrollTop();
	if(stp>200){
		$(".betop").css({"display":"block"})
	}
	if(stp<200){
		$(".betop").css({"display":"none"})
	}
	
},500)

$(".betop").click(function(){
		$("body").animate({"scrollTop":0},500)
})

$(".betop").css({"opacity":"0.3"})
$(".betop").hover(function(){
	$(".betop").css({"opacity":"1"})
},function(){
	$(".betop").css({"opacity":"0.3"})
})

