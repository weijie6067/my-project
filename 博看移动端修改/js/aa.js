
var wid=document.documentElement.clientWidth;
var scale=wid/640;
var html = document.getElementsByTagName('html')[0];
html.style.zoom = scale;

$(window).resize(function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/640;
	var html = document.getElementsByTagName('html')[0];
	html.style.zoom = scale; 
			
});
	