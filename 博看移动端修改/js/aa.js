// var wid = document.documentElement.clientWidth;
// 		var newfs = wid*100/640;
// 		var html = document.getElementsByTagName('html')[0];
// 		html.style.fontSize = newfs+"px";
// 		alert(wid)
// window.onload=function(){
	var wid=document.documentElement.clientWidth;
	var scale=wid/640;
	var html = document.getElementsByTagName('html')[0];
	html.style.zoom = scale;
	// document.body.style.webkitZoom=scale;
	// document.body.style.zoom=scale;	
// }
	