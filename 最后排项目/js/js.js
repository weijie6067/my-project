window.onload = function(){

		// var wid =document.documentElement.clientWidth;
		// var scale = wid/1350;
		// document.body.style.zoom = scale;
		

		// var wid =document.documentElement.clientWidth;
		// var scale = wid/1350;
		// document.body.style.zoom = scale;

		var bg=document.getElementById('bg');
		var outer= document.getElementById('outer');
		var inner=document.getElementById('inner');
		var img=document.getElementsByTagName('img');
		var btns=document.getElementById('btn').getElementsByTagName('span');
		var btnl = document.getElementById('btn_l');
		var btnr = document.getElementById('btn_r');
		var dl = document.getElementsByTagName('dl');
		bg.style.width=dl[0].clientWidth+"px";
		bg.style.height=dl[0].clientHeight+"px";
		inner.style.width=dl[0].clientWidth*dl.length+"px";
		inner.style.height=dl[0].clientHeight+"px";
		outer.style.width=dl[0].clientWidth+"px";
		outer.style.height=dl[0].clientHeight+"px";
		
		for(var i=0;i<btns.length;i++){
		 	btns[i].onmouseover=function(){
		 		for(var i=0;i<btns.length;i++){
		 			btns[i].style.background=""	
		 			if(this==btns[i]){
		 				outer.scrollLeft=i*dl[0].clientWidth;
		 				btns[i].style.background="gray";

		 				//清除计时器
		 				clearInterval(time);
		 				//停留1500毫秒，再次触发计时器
		 				time=setTimeout(stop,1500);
		 			}
		 		}
		 	}
		}

		var time=null;
		var speed=10;//设置一个速度变量，滚动条移动的速度
		var max=inner.clientWidth-outer.clientWidth;
		
		function stop(){
		 	time=setInterval(run,1);
		 	//把计时器封装成一个函数
		}
		time=setTimeout(stop,1500);
		btns[0].style.background="gray";
		function run(){
		 	outer.scrollLeft+=speed;

		 	//判断是否走过一张
		 	if(outer.scrollLeft%dl[0].clientWidth==0){
		 		clearInterval(time);
		 		time=setTimeout(stop,1500);
		 		//qiu的颜色
		 		x=outer.scrollLeft/dl[0].clientWidth;
		 		if(x==max/dl[0].clientWidth){
		 			x=0;
		 		}
		 		// console.log(max/dl[0].clientWidth);
		 		// console.log(outer.scrollLeft);
		 		for(var j=0;j<btns.length;j++){
		 			btns[j].style.background="";
		 		}
		 		btns[x].style.background="gray";
		 	}
		 		//判断临界值
		 	
		 	if (outer.scrollLeft>=max){
		 		outer.scrollLeft=0;
		 	}

		 	btnl.onclick=function(){		 		
		 		clearInterval(time);
		 		time=setTimeout(stop,2000);
		 		var y=Math.floor(outer.scrollLeft/img[0].clientWidth);
		 		if(y<=0){
		 			y=5;
		 		}
		 		outer.scrollLeft=img[0].clientWidth*(y-1);
		 		for(var j=0;j<btns.length;j++){
		 			btns[j].style.background="";
		 		}
		 		btns[y-1].style.background="gray";
		 	}

		 	btnr.onclick=function(){
		 		clearInterval(time);
		 		time=setTimeout(stop,2000);
		 		var y=Math.floor(outer.scrollLeft/img[0].clientWidth);
		 		if(y>=5-1){
		 			y=0-1;
		 		}
		 		// console.log(y+1);
		 		console.log(outer.scrollLeft);
		 		outer.scrollLeft=img[0].clientWidth*(y+1);
			 	for(var j=0;j<btns.length;j++){
			 		btns[j].style.background="";
			 	}
			 	btns[y+1].style.background="gray";
		 	}
		}	
		 	// outer.onmouseover=function(){
	 		// 	clearInterval(time);
	 		// 	// clearTimeout(time);
		 	// }
		 	// outer.onmouseout=function(){
		 	// 	 time=setTimeout(stop,1500);
		 	// }

		 	btnl.style.opacity="0.2";
		 	btnr.style.opacity="0.2";
		 	btnl.onmouseout=function(){
		 		this.style.opacity="0.2";
		 	}
		 	btnl.onmouseover=function(){
		 		this.style.opacity="1";
		 	}	
		 	btnr.onmouseout=function(){
		 		this.style.opacity="0.2";
		 	}
		 	btnr.onmouseover=function(){
		 		this.style.opacity="1";
		 	}	

		var dhang = document.getElementById('jiantou').getElementsByTagName('div');
		var lili  = document.getElementById('ding').getElementsByTagName('li');
		// var hengxian = document.getElementById('hengx').getElementsByClassName('aa');
		// var hi = document.getElementById('di').getElementsByClassName('fan');

		for (var i = 0; i < lili.length; i++) {
			dhang[i].style.opacity="0";
			dhang[0].style.opacity="1";
			lili[0].style.background="rgb(91,91,91)";
			lili[i].style.background="rgb(42,42,42)";
			hengxian[i].style.opacity="0";
			hengxian[0].style.opacity="1";
			diy[i].style.opacity="0";
			diy[0].style.opacity="1";
			
			lili[i].onmouseover = function(){
				for (var i = 0; i < dhang.length; i++){
					dhang[i].style.opacity="0";
					if (this==lili[i]) {
						dhang[i].style.opacity="1";
					}
				}
				for (var i = 0; i < lili.length; i++){
					lili[i].style.background="rgb(42,42,42)";
					if (this==lili[i]) {
						lili[i].style.background="rgb(91,91,91)";
					}
				}
				for (var i = 0; i < hengxian.length; i++){
					hengxian[i].style.opacity="0";
					if (this==lili[i]) {
						hengxian[i].style.opacity="1";
					}

				}
				for (var i = 0; i < diy.length; i++){
					diy[i].style.opacity="0";
					if (this==lili[i]) {
						diy[i].style.opacity="1";
					}

				}
				
			}
		}	
		var tops = document.getElementById("tops");
		window.onscroll = function(){
			scrolltop = document.body.scrollTop || window.pageYOffset||document.documentElement.scrollTop;
			if(scrolltop>200){
				tops.style.display="block";
			}else{
				tops.style.display="none";
			}
		}
		tops.onclick = function(){
			timer = setInterval(move,1)
		}
		function move(){
			scrolltop-=50;
			document.documentElement.scrollTop=scrolltop;
			window.pageYOffset=scrolltop;
			document.body.scrollTop=scrolltop;
			if(scrolltop<=0){
				clearInterval(timer)
			}
		}

		var arr = ["url(image/卡通.jpg) -20px -20px no-repeat","url(image/卡通.jpg) -23px -150px no-repeat","url(image/卡通.jpg) -290px -20px no-repeat","url(image/卡通.jpg) -157px -20px no-repeat","url(image/卡通.jpg) -159px -288px no-repeat","url(image/卡通.jpg) -290px -150px no-repeat"];

		var li = document.getElementById('show31').getElementsByTagName('li');
		var lil = document.getElementById('show32').getElementsByTagName('li');

		var arr3 = ["双门轿车车身，2+0 型或可选购 2+2 型座椅","挤压接合的铝制VH车身结构","铝镁合金复合车身","挤压铝制门保险横梁杠","单氙气前大灯，配以LED侧灯和方向指示器","双门轿车车身，2+0 型或可选购 2+2 型座椅","挤压接合的铝制VH车身结构","铝镁合金复合车身","挤压铝制门保险横梁杠","单氙气前大灯，配以LED侧灯和方向指示器","双门轿车车身，2+0 型或可选购 2+2 型座椅","挤压接合的铝制VH车身结构","铝镁合金复合车身","挤压铝制门保险横梁杠","单氙气前大灯，配以LED侧灯和方向指示器","双门轿车车身，2+0 型或可选购 2+2 型座椅","挤压接合的铝制VH车身结构","铝镁合金复合车身","挤压铝制门保险横梁杠","单氙气前大灯，配以LED侧灯和方向指示器",]

		 var arr4 = ["全合金，四上置顶式凸轮轴可变正时，48 阀 V12 6升发动机","前中置发动机，后轮驱动","完全催化不锈钢排气系统，带主动旁通阀","最大功率：517马力/6500 RPM","最大扭矩：620牛-米/5500 RPM","全合金，四上置顶式凸轮轴可变正时，48 阀 V12 6升发动机","前中置发动机，后轮驱动","完全催化不锈钢排气系统，带主动旁通阀","最大功率：517马力/6500 RPM","最大扭矩：620牛-米/5500 RPM","全合金，四上置顶式凸轮轴可变正时，48 阀 V12 6升发动机","前中置发动机，后轮驱动","完全催化不锈钢排气系统，带主动旁通阀","最大功率：517马力/6500 RPM","最大扭矩：620牛-米/5500 RPM","全合金，四上置顶式凸轮轴可变正时，48 阀 V12 6升发动机","前中置发动机，后轮驱动","完全催化不锈钢排气系统，带主动旁通阀","最大功率：517马力/6500 RPM","最大扭矩：620牛-米/5500 RPM",]

		var arr5 = ["后中置，“TOUCHTRONIC2” 六速变速箱","电子线控换挡控制系统","合金扭矩管，带碳纤维推进轴","限滑差速器","终加速比：3.46：1","后中置，“TOUCHTRONIC2” 六速变速箱","电子线控换挡控制系统","合金扭矩管，带碳纤维推进轴","限滑差速器","终加速比：3.46：1","后中置，“TOUCHTRONIC2” 六速变速箱","电子线控换挡控制系统","合金扭矩管，带碳纤维推进轴","限滑差速器","终加速比：3.46：1","后中置，“TOUCHTRONIC2” 六速变速箱","电子线控换挡控制系统","合金扭矩管，带碳纤维推进轴","限滑差速器","终加速比：3.46：1"]

		var arr6 = ["20英寸5轮辐银合金涂装车轮","前轮：8.5JX20英寸","后轮：11JX20英寸","前轮胎：倍耐力P ZERO 245/35 ZR20","后轮胎：倍耐力P ZERO 295/30 ZR20","20英寸5轮辐银合金涂装车轮","前轮：8.5JX20英寸","后轮：11JX20英寸","前轮胎：倍耐力P ZERO 245/35 ZR20","后轮胎：倍耐力P ZERO 295/30 ZR20","20英寸5轮辐银合金涂装车轮","前轮：8.5JX20英寸","后轮：11JX20英寸","前轮胎：倍耐力P ZERO 245/35 ZR20","后轮胎：倍耐力P ZERO 295/30 ZR20","20英寸5轮辐银合金涂装车轮","前轮：8.5JX20英寸","后轮：11JX20英寸","前轮胎：倍耐力P ZERO 245/35 ZR20","后轮胎：倍耐力P ZERO 295/30 ZR20",]

		var arr7 = ["动态稳定控制 (DSC)，“赛道”模式","防抱死刹车系统 (ABS)","电子制动力分配 (EBD)","紧急刹车辅助 (EBA)","牵引力控制","动态稳定控制 (DSC)，“赛道”模式","防抱死刹车系统 (ABS)","电子制动力分配 (EBD)","紧急刹车辅助 (EBA)","牵引力控制","动态稳定控制 (DSC)，“赛道”模式","防抱死刹车系统 (ABS)","电子制动力分配 (EBD)","紧急刹车辅助 (EBA)","牵引力控制","动态稳定控制 (DSC)，“赛道”模式","防抱死刹车系统 (ABS)","电子制动力分配 (EBD)","紧急刹车辅助 (EBA)","牵引力控制",]

		var arr8 = ["齿轮齿条式","电子伺服式速度灵敏助力转向","3.0TURNS方向盘旋转","操纵杆倾斜度和范围调节","电子线控换挡控制系统","齿轮齿条式","电子伺服式速度灵敏助力转向","3.0TURNS方向盘旋转","操纵杆倾斜度和范围调节","电子线控换挡控制系统","齿轮齿条式","电子伺服式速度灵敏助力转向","3.0TURNS方向盘旋转","操纵杆倾斜度和范围调节","电子线控换挡控制系统","齿轮齿条式","电子伺服式速度灵敏助力转向","3.0TURNS方向盘旋转","操纵杆倾斜度和范围调节","电子线控换挡控制系统",]

		var lolo = document.getElementById('show30').getElementsByTagName('span');

		var arr2 = ["url(image/z01.jpg) no-repeat","url(image/z02.jpg) no-repeat","url(image/z03.jpg) no-repeat","url(image/z04.jpg) no-repeat"];

		var lol = document.getElementById('show30').getElementsByTagName('div');


		for (var i = 0; i < lol.length; i++) {
			lol[i].style.background = arr2[i];
			lol[i].style.backgroundSize = "100% 100%";
		}
	

		for (var i = 0; i < lolo.length; i++) {
			lolo[i].innerHTML = arr3[i];
		}

		for (var i = 0; i < li.length; i++) {
			li[i].style.background = arr[i];
			li[i].style.backgroundSize = "400%";
			li[i].style.opacity="0.5";
			li[0].style.opacity="1";
			
			lil[i].style.opacity="0.5";
			lil[0].style.opacity="1";
			

			li[i].onmouseover = function(){
				for (var i = 0; i < li.length; i++){

					lil[i].style.opacity="0.5";
					li[i].style.opacity="0.5";
					if (this==li[i]) {
						li[i].style.opacity="1";
						lil[i].style.opacity="1";
						for (var i = 0; i < lolo.length; i++) {
							if (this==li[0]) {
								lolo[i].innerHTML = arr3[i];
							}
							if (this==li[1]) {
								lolo[i].innerHTML = arr4[i];
							}
							if (this==li[2]) {
								lolo[i].innerHTML = arr5[i];
							}
							if (this==li[3]) {
								lolo[i].innerHTML = arr6[i];
							}
							if (this==li[4]) {
								lolo[i].innerHTML = arr7[i];
							}
							if (this==li[5]) {
								lolo[i].innerHTML = arr8[i];
							}
						}	
					}
				}				
			}

			lil[i].onmouseover = function(){
				for (var i = 0; i < lil.length; i++){

					li[i].style.opacity="0.5";
					lil[i].style.opacity="0.5";
					if (this==lil[i]) {
						lil[i].style.opacity="1";
						li[i].style.opacity="1";
					}	
				}
			}
		}

		var con = ["国家","中华人民共和国","韩国","日本","新加坡","马来西亚","菲律宾","沙特阿拉伯","朝鲜","越南","缅甸","德国","英国","法国","爱尔兰","波兰","西班牙","意大利","俄罗斯","荷兰","美国","加拿大","巴西","阿根廷","新西兰","澳大利亚","印度","埃及"];
		// var guo = document.getElementById("");
		var sec = document.getElementById('sel2');
		var option = null;

		for (var i = 0; i < con.length; i++) {
			option+="<option value=''>"+con[i]+"</option>"
		}
		sec.innerHTML = option;

		function addListener(element,e,fn){      
        	if(element.addEventListener){      
             	element.addEventListener(e,fn,false);      
         	} else {      
             	element.attachEvent("on" + e,fn);      
         	}      
   		}  
   		var myinput = document.getElementById('myinput'); 
   		var myinput1 = document.getElementById('myinput1'); 
   		var myinput2 = document.getElementById('myinput2'); 

   		addListener(myinput,"click",function(){  
   		myinput.value = "";  
   		})  
   		addListener(myinput,"blur",function(){  
   		myinput.value = "名";  
  		})  
  		addListener(myinput1,"click",function(){  
   		myinput1.value = "";  
   		})  
   		addListener(myinput1,"blur",function(){  
   		myinput1.value = "姓";  
  		})
  		addListener(myinput2,"click",function(){  
   		myinput2.value = "";  
   		})  
   		addListener(myinput2,"blur",function(){  
   		myinput2.value = "电子邮箱地址";  
  		})

}


			
