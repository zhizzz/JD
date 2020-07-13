
/*轮播*/
$(function () {
    var index = 0, speed = 3000;
    $("#num li:eq(0)").addClass("red");
    function moveTop() {
        $("#num li:eq(" + index + ")").addClass("red").siblings().removeClass("red");
        $("#img li:eq(" + index + ")").fadeIn(300).siblings().hide();
        if (index < $("#num li").length - 1) {
            index++;
        } else {
            index = 0;
        }
    }
    var interval= setInterval(moveTop, speed);
    $("#num li").mouseover(function () {
        index = $(this).index();
        $("#num li:eq(" + index + ")").addClass("red").siblings().removeClass("red");
        $("#img li:eq(" + index + ")").slideDown(30).siblings().fadeOut(10);
    })
    $("#box").hover(function () {
        clearInterval(interval)
    }, function () {
        interval = setInterval(moveTop, speed);
    })
});

/*轮播2*/
$(function () {
    var index = 0, speed = 3000;
    $("#num2 li:eq(0)").addClass("red");
    function moveTop() {
        $("#num2 li:eq(" + index + ")").addClass("red").siblings().removeClass("red");
        $("#img2 li:eq(" + index + ")").fadeIn(300).siblings().hide();
        if (index < $("#num2 li").length - 1) {
            index++;
        } else {
            index = 0;
        }
    }
    var interval= setInterval(moveTop, speed);
    $("#num2 li").mouseover(function () {
        index = $(this).index();
        $("#num2 li:eq(" + index + ")").addClass("red").siblings().removeClass("red");
        $("#img2 li:eq(" + index + ")").slideDown(30).siblings().fadeOut(10);
    })
    $("#box2").hover(function () {
        clearInterval(interval)
    }, function () {
        interval = setInterval(moveTop, speed);
    })
});


/*图片逐渐消失*/
$(document).ready(function(){
    $(".over").click(function(){
        $("#adv").fadeOut()
    });
});

/*杯子左面的图*/
var logo=null;
function changeImg(){
    var dh=document.getElementById("dh");
    dh.src="images/logo.gif";

    logo=2;
}
function changeH(){
    var dh=document.getElementById("dh");
    dh.src="images/logo.png";
    logo=null;
}
/*倒计时*/
var c=2;
var t;
var m=20;
var H=1;
function timedCount() {
    if(c<10){
        document.getElementById('s').innerHTML="0"+c;
    }
    if(c>=10){
        t=document.getElementById('s').innerHTML=c;
    }
    c=c-1;
    t=setTimeout("timedCount()",1000);
    if(H==0&&m==0&&c==-1){
        clearTimeout(t);
    }
    if(m!=-1&&H!=0){
        if(c==-1){
            m=m-1;
            if(m<10){
                document.getElementById("m").innerHTML="0"+m;
            }
            if(m>=10){
                document.getElementById("m").innerHTML=m;
            }
            c=59;
        }
    }
    if(m==-1){
        H=H-1;
        if(H<10){
            document.getElementById("H").innerHTML="0"+H;
        }
        if(H>=10){
            document.getElementById("H").innerHTML=H;
        }
        m=59;
    }
    if(H==-1){
        document.getElementById("H").innerHTML="00";
    }
}

onload=function(){
    /*js轮播*/
    var box1=document.getElementById("box1");
    var img1=document.getElementById("img1");
    var num=document.getElementById("num1");
    var lis=img1.getElementsByTagName("li");
    var stu="";
    for(var i=0;i<lis.length;i++){
        stu=stu+"<li></li>";
    }
    num.innerHTML=stu;
    var div=box1.getElementsByTagName("div")[0];
    var index=0;
    var size=lis.length;
    div.scrollTop=box1.offsetHeight*index;
    num.getElementsByTagName("li")[index].className="red";
    function move(){
        if(index<size-1){
            index++;
        }else{
            index=0;
        }
        div.scrollTop=box1.offsetHeight*index;
        num.getElementsByTagName("li")[index].className="red";
        var numLis=num.children;
        for(var i in numLis){
            if(numLis[i]!=num.getElementsByTagName("li")[index]){
                numLis[i].className="";
            }
        }
    }
    var interval=setInterval(move,1000);
    box1.onmouseover=function(){
        clearInterval(interval);
    };
    box1.onmouseout=function(){
        interval=setInterval(move,1000);
    };
    for(var i in num.getElementsByTagName("li")){
        num.getElementsByTagName("li")[i].index=i;
        num.getElementsByTagName("li")[i].onmouseover=function(){
            this.className="red";
            index=this.index;
            div.scrollTop=box1.offsetHeight*index;
            var numLis=num.children;
            for(var i in numLis){
                if(numLis[i]!=this){
                    numLis[i].className="";
                }
            }
        }
    }
    /*移动导航条*/
    onscroll=function(){
        var move=document.getElementById("moveAdv");
        move.style.transition="all 1s";
        if(window.scrollY>500){
            move.style.top="0px";
        }else{
            move.style.transition="all 0s";
            move.style.top="-52px";
        }
    }
    /*杯子左面的logo图*/
    var dh=document.getElementById("dh");
    dh.onmouseover=function(){
        if(logo==null){
            changeImg();
            setTimeout(changeH,4500)
        }
    }
    /*右侧小黑条*/
    var a=document.getElementById("right");
    var b=document.getElementById("t");
    var bb=document.getElementById("b");
    var c=b.getElementsByTagName("div")[5];
    var zhu= c.getElementsByTagName("i")[0];
    var cha=document.getElementById("cha");
    var index1=null;
    cha.onclick=function(){
        a.style.right="";
        b.style.right="";
        bb.style.right="";
        a.style.backgroundColor="";
        zhu.style.backgroundColor="";
        index1=null;
    };
    c.onclick=function(){
        if(index1==null){
            a.style.right="0px";
            b.style.right="275px";
            bb.style.right="275px";
            a.style.backgroundColor="#eceaea";
            zhu.style.backgroundColor="#e33333";
            index1=2;
            return;
        }
        a.style.right="";
        b.style.right="";
        bb.style.right="";
        a.style.backgroundColor="";
        zhu.style.backgroundColor="";
        index1=null;
    };
    /*倒计时*/
    timedCount();
};

