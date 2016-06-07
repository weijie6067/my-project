/**
 * Created by Administrator on 2016/4/27 0027.
 */
    var navLi = document.getElementById('nav').getElementsByTagName('li');
    var navListA = document.getElementById('navlist').getElementsByTagName('a');
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].indexNav = i;
        navLi[i].onmouseover = function () {
            for (var i = 0; i < navLi.length; i++) {
                navListA[i].style.color = "white";

            }
            console.log(this.indexNav);
            navListA[this.indexNav].style.color = " orange";
        };
    }
    //A板块大图切换
    var ss = document.getElementById("ss");
    var dd = document.getElementById("dd");
    var uu = document.getElementById("uu");
    var img = uu.getElementsByTagName('img');
    var ps = document.getElementById("ps");
    var sp = document.getElementById("sp");
    var uls = document.getElementById("uls");
    var uls1 = document.getElementById('uls1');
    var lsi = uls.getElementsByTagName('li');
    var lsi1 = uls1.getElementsByTagName('li');
    var imgw = img[0].offsetWidth;
    var num = 1;
    var num2 = 0;
    var time = null;
    var time2 = null;
    dd.scrollLeft = imgw;
    function hd() {
        clearInterval(time2);
        var kswz = dd.scrollLeft;  //开始的位置
        var jswz = imgw * num;  //结束的位置，
        var ksbs = 0;     		//开始的步数
        var zdbs = 20;    //走的步数
        var mbjl = (jswz - kswz) / zdbs;
        //每步走多少；
        time2 = setInterval(function () {
            ksbs++;     //步数++
            if (ksbs == zdbs) {   // 如果开始的步数==20步就是走完一段距离
                ksbs = 0;   //让KSBS归0;以便重复执行；
                clearInterval(time2);  //清一下计时器
            }
            kswz = kswz + mbjl;   //滚动条加每步走的距离；
            dd.scrollLeft = kswz;  //让滚动条滑动起来；
        }, 15)
    }
    function qido() {
        num++;
        if (num >= img.length) {
            num = 2;
            dd.scrollLeft = imgw;
        }
        num2++;
        if (num2 >= lsi.length) {
            num2 = 0;
        }
        hd();
        bian();
    }

    time = setInterval(qido, 4000);
    dd.onmouseover = function () {    // 加入鼠标悬停效果
        clearInterval(time);
    }
    dd.onmouseout = function () {
        clearInterval(time);
        time = setInterval(qido, 4000);
    }
    ps.onclick = function () {
        clearInterval(time);
        num++;
        if (num >= img.length) {
            num = 2;
            dd.scrollLeft = imgw;
        }
        num2++;
        if (num2 >= lsi.length) {
            num2 = 0;
        }
        hd();
        bian();
        time = setInterval(qido, 4000);
    }
    sp.onclick = function () {
        clearInterval(time);
        num--;
        if (num < 0) {
            num = img.length - 3;   //让滚动条瞬间回到数字四的那一张，中间走了三张
            dd.scrollLeft = imgw * (num + 1);  //加1需要上边的缓动函数；若不加1也能到四但是没缓动效果
        }
        num2--;
        if (num2 < 0) {
            num2 = lsi.length - 1;
        }
        hd();
        bian();
        time = setInterval(qido, 4000);
    }
    function bian() {
        for (var i = 0; i < lsi.length; i++) {
            lsi[i].className = '';
            lsi1[i].className = "";
        }
        lsi[num2].className = 'lis';
        lsi1[num2].className = "lis1";
    }
    for (var i = 0; i < lsi.length; i++) {
        lsi[i].onclick = function () {
            clearInterval(time);
            for (var i = 0; i < lsi.length; i++) {
                if (lsi[i] == this) {
                    num2 = i;
                    num = i + 1;
                    bian(num2);
                    hd();
                }
            }
        }
    }






























