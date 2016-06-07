 window.onload=function(){
 	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    mousewheelControl : true,
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    var p5p=document.getElementsByClassName("p5_p")
		    var school=$(".school li")
		    var side=$(".sixslid ul")
		    
		     if(swiper.activeIndex==1){
		     	var a=1

		    	for(var i=0 ;i<side.length;i++){
		    		a+=0.4 
		    		side[i].style.animation="pg2 0.5s ease "+a+"s forwards";
		    	}
		    }else{
		    	for(var i=0 ;i<side.length;i++){
		    		side[i].style.animation="";
		    	}
		    }
		    if(swiper.activeIndex==4){
		    	p5p[0].style.animation="scal 2s ease";
		    }else{
		    	p5p[0].style.animation="";
		    }
		    if(swiper.activeIndex==5){
		    	p5p[1].style.animation="scal 2s ease";
		    }else{
		    	p5p[1].style.animation="";
		    }
		    if(swiper.activeIndex==6){
		    	p5p[2].style.animation="scal 2s ease";
		    }else{
		    	p5p[2].style.animation="";
		    }
		    if(swiper.activeIndex==7){
		    	p5p[3].style.animation="scal 2s ease";
		    }else{
		    	p5p[3].style.animation="";
		    }
		    if(swiper.activeIndex==8){
		    	var a=0
		    	for(var i=0 ;i<school.length;i++){
		    		a+=0.3 
		    		school[i].style.animation="schoolshake 0.5s ease "+a+"s forwards";
		    	}
		    }else{
		    	for(var i=0 ;i<school.length;i++){
		    		school[i].style.animation="";
		    	}
		    }
		    var honor=$(".honor img")
		  
		    if(swiper.activeIndex==11){
		    	var a=0
//		    	alert()
		    	for(var i=0 ;i<honor.length;i++){
		    		a+=0.3 
		    		honor[i].style.animation="honoraas 0.5s ease "+a+"s forwards";
		    	}
		    }else{
		    	for(var i=0 ;i<school.length;i++){
		    		honor[i].style.animation="";
		    	}
		    }
		    
  		} 
  		
	}) 

	
 }
 
  