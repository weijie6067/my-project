window.onload=function(){
//	var wid=document.documentElement.clientWidth;
//			var scale=wid/1500;
//			document.body.style.zoom=scale;
//window.onresize=function(){
//			var wid=document.documentElement.clientWidth;
//			var scale=wid/1500;
//			document.body.style.zoom=scale;
//			}			
	var scrolltop;
    scrolltop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
    btop.onclick=function(){
      timebtop=setInterval(btopmove,1);
     }
    function btopmove(){
		scrolltop-=30;
	    document.body.scrollTop=scrolltop;
		document.documentElement.scrolltop=scrolltop;
		window.pageYOffset=scrolltop;
		if(scrolltop<=0){
			clearInterval(timebtop);
		  }
	}
   var navLi=document.getElementById('nav').getElementsByTagName('li');
		var navListA=document.getElementById('navlist').getElementsByTagName('a');
		for (var i = 0; i < navLi.length; i++) {
			navLi[i].indexNav=i;
			navLi[i].onmouseover=function(){
				for (var i = 0; i < navLi.length; i++) {
					navListA[i].style.color="white";

				}
				console.log(this.indexNav)
				navListA[this.indexNav].style.color=" orange";
			}


		} 
    var iptym=document.getElementsByClassName("yema");
    console.log(iptym);
      for(var i=0;i<iptym.length;i++){
      	iptym[i].onmouseover=function(){
      for (var i=0;i<iptym.length;i++) {
      	if (iptym[i]==this) {
      		iptym[i].style.backgroundColor="lightslategrey";
      	} else{
      		iptym[i].style.backgroundColor="";
      	}
      }
      	}
      }
      for(var i=0;i<iptym.length;i++){
      	iptym[i].onmouseout=function(){
      for (var i=0;i<iptym.length;i++) {
      	if (iptym[i]==this) {
      		iptym[i].style.backgroundColor="";
      	} else{
      		iptym[i].style.backgroundColor="";
      	}
      }
      	}
      }
    
//  轮播图
    //各所需变量声明
      var c_imgs=document.getElementById('c_inner').getElementsByTagName('img');
      var c_outer=document.getElementById('c_outer');
      var c_inner=document.getElementById('c_inner');
      var c_outerq=document.getElementById('c_outerq');
      var c_buttons=document.getElementsByTagName('button');
      var timer=null;
      c_inner.style.width=c_imgs[0].offsetWidth*c_imgs.length+"px";
      c_outer.style.width=c_imgs[0].offsetWidth+"px";
       console.log(c_outer.style.width);
    //计时器封装打包 方便调用
     function time(){
      timer = setInterval(move,5);
		}
	timer = setTimeout(time,3000)
		
    //控制图片滚动
      function move(){
          c_outer.scrollLeft+=40;
        	 console.log(c_outer.scrollLeft);
        if(c_outer.scrollLeft%c_imgs[0].offsetWidth == 0
				){
				clearInterval(timer);
				timer = setTimeout(time,3000);

			}
      	if(c_outer.scrollLeft>=c_inner.offsetWidth-c_outer.offsetWidth){
      		c_outer.scrollLeft=0; 
      	}
      	//4个点背景色转换
      	  //单for
      	for(var j=0;j<c_buttons.length;j++){
      		if(c_outer.scrollLeft==c_imgs[0].offsetWidth*j){
      			c_buttons[j].style.opacity=1
      		}else{c_buttons[j].style.opacity=0.4;
      	} 
      	}
      
   }
      
      var c_btn1=document.getElementById('hl');
      var c_btn2=document.getElementById('hr');
      //鼠标进入事件
      c_outerq.onmouseover=function(){
      	clearInterval(timer);
      }
      //2个方向键
     
         c_btn2.onclick=function(){
         c_outer.scrollLeft=c_outer.scrollLeft+960;
        if (c_outer.scrollLeft==3840){
              c_outer.scrollLeft=0;
       }
         for(var j=0;j<c_buttons.length;j++){
        if(c_outer.scrollLeft==c_imgs[0].offsetWidth*j){
             console.log(c_outer.scrollLeft);
          c_buttons[j].style.opacity=1;
          console.log(j);
          // alert(j)
        }else{c_buttons[j].style.opacity=0.4;
        }
   }
          }
      
     
     c_btn1.onclick=function(){

       if (c_outer.scrollLeft==0){
          c_outer.scrollLeft=c_inner.offsetWidth-c_outer.offsetWidth;
     }
      c_outer.scrollLeft=c_outer.scrollLeft-960;
       
     		for(var j=0;j<c_buttons.length;j++){
      		if(c_outer.scrollLeft==c_imgs[0].offsetWidth*j){
      			c_buttons[j].style.opacity=1;
      		}else{c_buttons[j].style.opacity=0.4;
      	}
      	}
 }
     //4个按钮tab切换
     for(var i=0;i<c_buttons.length;i++){
     	 c_buttons[i].onclick=function(){
     for(var i=0;i<c_buttons.length;i++){
     	if(this==c_buttons[i]){
     		c_buttons[i].style.opacity=1;
     		c_outer.scrollLeft=i*c_imgs[0].offsetWidth;
     		clearInterval(timer);
			timer = setTimeout(time,3000);
     	}else{ c_buttons[i].style.opacity=0.4;
       } 
      }
     }
    }

    //鼠标移出事件
     c_outerq.onmouseout=function(){
        clearInterval(timer);
	    timer = setTimeout(time,3000)
     }
 
    //车轮滚动
    var chelunq=document.getElementById("chelunq");
    var chelunh=document.getElementById("chelunh");
    var che=0;
    var timeche=null;
    function chelun(){
    	che+=10;
    chelunq.style.transform="rotate("+che+"deg )";
    chelunh.style.transform="rotate("+che+"deg )";
     if(che>360){
     	che=0
     }
    }
    timeche=setInterval(chelun,1)
 ;
 //6个小展示框
 
    var d_btnleft=document.getElementById("d_btnleft");
    var d_btnright=document.getElementById("d_btnright");
    
    var d_outer1=document.getElementById("d_dmlouter");
    var d_inner1=document.getElementById("d_dmlinner");
    
    var d_outer2=document.getElementById("d_dmmouter");
    var d_inner2=document.getElementById("d_dmminner");
    
    var d_outer3=document.getElementById("d_dmrouter");
    var d_inner3=document.getElementById("d_dmrinner");
    
    var d_outer4=document.getElementById("d_dblouter");
    var d_inner4=document.getElementById("d_dblinner");
    
    var d_outer5=document.getElementById("d_dbmouter");
    var d_inner5=document.getElementById("d_dbminner");
    
    var d_outer6=document.getElementById("d_dbrouter");
    var d_inner6=document.getElementById("d_dbrinner");
    
    d_btnright.onclick=function(){
         d_outer1.scrollLeft=d_outer1.scrollLeft+300;
         d_outer2.scrollLeft=d_outer2.scrollLeft+300;
         d_outer3.scrollLeft=d_outer3.scrollLeft+300;
         d_outer4.scrollLeft=d_outer4.scrollLeft+300;
         d_outer5.scrollLeft=d_outer5.scrollLeft+300;
         d_outer6.scrollLeft=d_outer6.scrollLeft+300;
        if (d_outer1.scrollLeft==600){
              d_outer1.scrollLeft=0;
       }
        
        if (d_outer2.scrollLeft==600){
              d_outer2.scrollLeft=0;
       }
        
        if (d_outer3.scrollLeft==600){
              d_outer3.scrollLeft=0;
       }
        
        if (d_outer4.scrollLeft==600){
              d_outer4.scrollLeft=0;
       }
        
        if (d_outer5.scrollLeft==600){
              d_outer5.scrollLeft=0;
       }
        
        if (d_outer6.scrollLeft==600){
              d_outer6.scrollLeft=0;
       }
        }
      
     
     d_btnleft.onclick=function(){

       if (d_outer1.scrollLeft==0){
       d_outer1.scrollLeft=d_inner1.offsetWidth-d_outer1.offsetWidth;
      }
      d_outer1.scrollLeft=d_outer1.scrollLeft-300;
      
       if (d_outer2.scrollLeft==0){
       d_outer2.scrollLeft=d_inner2.offsetWidth-d_outer2.offsetWidth;
      }
      d_outer2.scrollLeft=d_outer2.scrollLeft-300;
      
       if (d_outer3.scrollLeft==0){
       d_outer3.scrollLeft=d_inner3.offsetWidth-d_outer3.offsetWidth;
      }
      d_outer3.scrollLeft=d_outer3.scrollLeft-300;
      
       if (d_outer4.scrollLeft==0){
       d_outer4.scrollLeft=d_inner4.offsetWidth-d_outer4.offsetWidth;
      }
      d_outer4.scrollLeft=d_outer4.scrollLeft-300;
      
       if (d_outer5.scrollLeft==0){
       d_outer5.scrollLeft=d_inner5.offsetWidth-d_outer5.offsetWidth;
      }
      d_outer5.scrollLeft=d_outer5.scrollLeft-300;
      
       if (d_outer6.scrollLeft==0){
       d_outer6.scrollLeft=d_inner6.offsetWidth-d_outer6.offsetWidth;
      }
      d_outer6.scrollLeft=d_outer6.scrollLeft-300;
      }
   //车灯
   var chedeng=document.getElementById("chedeng");
   var chedengtime=null;
   var chedengtime1=null;
   chedengtime=setInterval(chedengl,500);
   function chedengl(){
   	chedeng.style.display="block";
   	
   	chedengtime1=setInterval(chedengx,1000);
   	clearInterval(chedengtime);
   	}
   
 
   function chedengx(){
  
   	chedeng.style.display="none";
   	clearInterval(chedengtime1);
   	chedengtime=setInterval(chedengl,500);
   	}
    
  //开门判定
  var timeopen=null;
  var timeclose=null;
    $("#b_old").mouseenter(function(){
    	 clearInterval(timeclose)
   	$("#b_oldl").animate({left:"-480px"
   	},2000).delay(1000).animate({left:"-480px"
   	},1)
   	$("#b_oldr").animate({left:"960px"
   	},2000).delay(1000).animate({left:"960px"
   	},1)
   
   	timeopen=setInterval(posopen,1)
   	 function posopen(){
   	   var aa=$("#b_oldl").position().left
	   	if(aa==-480){
		$("#b_old").css({display:'none'})
		clearInterval(timeopen)
		clearInterval(timeclose)
		}
	   	}
    })
  
  $("#bg6b").mouseleave(function(){
  	clearInterval(timeopen)
  	$("#b_old").css({display:'block'})
  	$("#b_oldl").animate({
  		left:"0px"
  	},2000).delay(1000).animate({
  		left:"0px"
  	},1)
  	$("#b_oldr").animate({
  		left:"480px"
  	},2000).delay(1000).animate({
  		left:"480px"
  	},1)
  })
 
    
}//结尾
