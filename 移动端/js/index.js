window.onload=function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/640
	document.body.style.zoom=scale
	//第一组大图轮播图
	
	var mySwiper = new Swiper ('.picshow', {
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
	
//第一组大图轮播图
}
window.onresize=function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/640
	document.body.style.zoom=scale
}
