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
		}},2000)
		}).trigger("mouseleave");
		
	
	
	function picsShow(index){	
		var nowLeft=$("#pic1").width()*index
		$(".lunbo7").stop(true,false).animate({scrollLeft:nowLeft},300)
		$(".lunbo7bot div").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300)
	}
	
})

