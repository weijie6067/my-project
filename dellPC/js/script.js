window.onload = function() {
	var mySwiper = new Swiper('#imgGuest',{
	  autoplay:5000,
	  loop:true,
	  autoplayDisableOnInteraction:false,
      paginationClickable: true,
	  pagination : '.pagination',
  	});
}
$(function(){
	//'use strict';
	var offset_set = {},
		sh = null;

	function getOffset(){
		$('.section').each(function(index, el) {
			offset_set[index] = $(el).offset().top;
		});
	}
	getOffset();

	//监测滚动条位置
	$(document).on('scroll', function(){
		var st = $(this).scrollTop(),
			nav_point = 100,
			$nav = $('nav'),
			$li = $nav.find('li');
		
		if( $nav.find('button').css('display') === 'none'){
			if( st >= nav_point ){
				$nav.addClass('fixed');
			}
			else{
				$nav.removeClass('fixed');
			}
		}	
	});

	var handle = {
		//点击导航中的 a 标签
		navClick: function(){
			var $this = $(this), //被点击的 a 标签
				$li = $this.parents('ul').find('li'), //nav 中的所有 li
				$target = $($this.attr('href')); // 欲转到的区域对象				
			$li.removeClass('current');
			$this.parent().addClass('current');

			if( $target.length ){
				$('html,body').animate({scrollTop: $target.offset().top}, 500);
				$li.parent().removeClass('show');
				return false;
			}			
		},
		//点击移动版导航nav中的菜单按钮
		navbtnClick: function(){
			var $this = $(this),
				$ul = $this.siblings('ul.mobile_nav');
			$ul.toggleClass('show');
		},
		//pic slider 滚动到下一屏，包括左滚和右滚(演讲嘉宾头像切换)
		changeView: function(event){
			if( $(':animated').length !== 0 ){
				return false;
			}
			var $this = $(this),
				$view = $('.slide-box'),
				$current_ul = $view.find('ul.current'),				
				duration = 500,
				$next = null,
				left = null;
			var pageCount = $view.find('ul').length;
			//alert(pageCount)
			
			if( event.data === 'left'){
				$next = $current_ul.prev('ul');
				if($next.length === 0){
					$next = $view.find('ul:last');
				}
				left = '100%';
				$next.css({left: '-100%'});				
			}
			else{
				clearInterval(sh);
				clearTimeout(sh);
				$this.siblings().removeClass('current');
				$this.addClass('current');
				$next = $current_ul.next('ul');
				
				if($next.length === 0){
					$next = $view.find('ul:eq(0)');
				}
				left = '-100%';
				
				sh = setTimeout( function(){
					sh = setInterval( handle.changeView, 4000, 'auto' );
				}, 4000);
			}
			$current_ul.animate({left: left}, duration, function(){ $current_ul.removeAttr('style');}).removeClass('current');
			$next.animate({left: 0}, duration).addClass('current');			
		},		
		//点击会议日程--显示详情
		open_node: function(){
			var $this = $(this);
			$this.parents('li').toggleClass('open');
			$(".metteD").removeClass('open');
		}		
	};	
	var init = {		
		auto_slide_guest: function(){
			sh = setInterval( handle.changeView, 4000, 'auto' );
		}
	};

	var $nav = $('nav');
	$nav.on('click', 'ul li a', handle.navClick);
	$nav.on('click', 'button', handle.navbtnClick);

	init.auto_slide_guest();	
	$('.guest_list').on('click', '.rarr', handle.changeView);
	$('.guest_list').on('click', '.larr', 'left', handle.changeView);
	
	//点击pc议程
	$('.agenda_title li').click(function(){
		$(this).find("span").addClass("current");
		$(this).siblings().find("span").removeClass("current");
		$(".agenda_box").hide().eq($('.agenda_title li').index(this)).show();		
	});
	//点击mobile议程
	$('.agenda_title2 li').click(function(){
		$(this).find("span").addClass("current");
		$(this).siblings().find("span").removeClass("current");
		$(this).parent().siblings().find("span").removeClass("current");
		$(".agenda_box").hide().eq($('.agenda_title2 li').index(this)).show();		
	});
	
});

function resizewidth(){
	var pcW = $(window).width();
	//alert(pcW);
	if(pcW>=990){
		$(".agenda-name").click(function(){						
			$(this).siblings('.agenda-pc').show();
			$(".agenda-mobile").hide();
		});
		$(".agenda-pc").mouseleave(function(){
			$(this).hide();
			$(".agenda-mobile").hide();
		});
	}else{
		//$(".agenda-name").show();
		$(".agenda-name").click(function(){
			$(".agenda-pc").hide();
			if($(this).siblings('.agenda-mobile').is(":hidden")){
				$(this).siblings('.agenda-mobile').show();
				$(this).find("i").css({"background-image":"url(images/img/agenda_close.png)"});
			}else{
				$(this).siblings('.agenda-mobile').hide();
				$(this).find("i").css({"background-image":"url(images/img/agenda_open.png)"});
			}
		});
	}
}
//获取浏览器中的url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


