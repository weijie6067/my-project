//改变颜色
function changeColor(obj){
    var oldcolor='';
    for (var i = 0; i <obj.tBodies[0].rows.length; i++) {
        if(i%2){
            obj.tBodies[0].rows[i].style.background='#3A3A3A';
        }
        else{
            obj.tBodies[0].rows[i].style.background='#818181';
        }
        obj.tBodies[0].rows[i].onmouseover=function(){
            oldcolor=this.style.background;
            this.style.background='#ff8800';
        }
        obj.tBodies[0].rows[i].onmouseout=function(){
            this.style.background=oldcolor;
        }
    };
}
window.onload=function(){
    //头部的js;
    var navLi=document.getElementById('nav').getElementsByTagName('li');
    var navListA=document.getElementById('navlist').getElementsByTagName('a');
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].indexNav=i;
        navLi[i].onmouseover=function(){
            for (var i = 0; i < navLi.length; i++) {
                navListA[i].style.color="white";
            }
            navListA[this.indexNav].style.color=" orange";
        };
    };
    //表格的隔行变色;
    var tab=document.getElementsByTagName('table');
    for (var j=0;j<tab.length;j++){
        changeColor(tab[j]);
    }
    //返回顶部
    var blue=document.getElementById('return_top');
    var time1=null;
    blue.onclick=function(){
        clearInterval(time1);
       scrollTop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop ;
        time1=setInterval(returnTop,2);
    }
    function returnTop(){
        scrollTop-=40;
        document.body.scrollTop=scrollTop;
        window.pageYOffset=scrollTop;
        document.documentElement.scrollTop=scrollTop;
        if(scrollTop<=50){
            clearInterval(time1);
        }
    } 
    //导航栏的运动 
    var oTop=document.getElementById('top');
	var inner=document.getElementById('inner')
	var outer=document.getElementById('outer')
	var li=oTop.getElementsByTagName('li');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	inner.innerHTML+=inner.innerHTML;
	inner.style.width=li[0].offsetWidth*li.length+'px';
	var timet=null;
	function move(x){	
		var speed=x/10;
		outer.scrollLeft+=speed;
		console.log(outer.scrollLeft);		
		if(outer.scrollLeft%130==0){
			clearInterval(timet);
		}
	}
	right.onclick=function(){
		clearInterval(timet);
		if(outer.scrollLeft>=780){
			outer.scrollLeft=0;
		}
		timet=setInterval(function(){move(130)},20)
	}
	left.onclick=function(){
		clearInterval(timet);
		if(outer.scrollLeft<=0){
			outer.scrollLeft=780;
		}
		timet=setInterval(function(){move(-130)},20)
	}
   }
