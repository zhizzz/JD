
function he(){
    var hidden=document.getElementById("hidden");
    hidden.style.display="block";
}
onload=function(){
    var center=document.getElementById("center_t");
    var rwm=document.getElementById("rwm");
    var a=rwm.style.left="-70px";
    he();
    center.onmouseover=function(){
        a=rwm.style.left="-70px";
        he();
    }
    center.onmouseout=function() {
        rwm.style.left = "0px";
        hidden.style.display = "none";
    }
/*随机图片*/
    var main=document.getElementById("main_c");
    var rand;
    rand=Math.random()*10-5;
    rand=Math.abs(Math.ceil(rand));
    if(rand==0){
        main.style.background="url('images/show1.jpg')";
    }else if(rand==1){
        main.style.background="url('images/bg.jpg')";
    }else if(rand==2){
        main.style.background="url('images/show1.jpg')";
    }else if(rand==3){
        main.style.background="url('images/bg.jpg')";
    }else{
        main.style.background="url('images/bg.jpg')";
    }
    /*点击变色*/
    var be=null;
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    var cen=document.getElementById("center");
    var right=document.getElementById("right");
    var cen2=document.getElementById("center2");
    b1.style.color="#e4393c";
    b1.style.fontWeight="bolder";
    b2.style.color="#666";
    b2.style.fontWeight="normal";
    cen2.style.display="none";
    be=1;
    b1.onmouseover=function(){
        b1.style.color="#e4393c";
        b1.style.fontWeight="bolder";
    }
    b1.onmouseout=function(){
        if(be==2){
            b1.style.color="#666";
            b1.style.fontWeight="";
        }
    }
    b2.onmouseover=function(){
        b2.style.color="#e4393c";
        b2.style.fontWeight="bolder";
    }
    b2.onmouseout=function(){
       if(be==1){
           b2.style.color="";
           b2.style.fontWeight="";
       }
    }
    b1.onclick=function(){
        b1.style.color="#e4393c";
        b1.style.fontWeight="bolder";
        b2.style.color="#666";
        b2.style.fontWeight="normal";
        cen.style.display="block";
        cen2.style.display="none";
        a=rwm.style.left="-70px";
        right.style.height="438px";
        he();
        be=1;
    }
    b2.onclick=function(){
        b2.style.color="#e4393c";
        b2.style.fontWeight="bolder";
        b1.style.color="#666";
        b1.style.fontWeight="normal";
        cen.style.display="none";
        rwm.style.left = "0px";
        hidden.style.display = "none";
        right.style.height="400px";
        cen2.style.display="block";
        be=2;
    }
    /*账号密码左侧头像变色*/
    var userName=cen2 .getElementsByTagName("input")[0];
    var userPwd=cen2 .getElementsByTagName("input")[1];
    var emName=cen2 .getElementsByTagName("em")[0];
    var emPwd=cen2 .getElementsByTagName("em")[1];
    userName.onfocus=function(){
        emName.style.backgroundPosition="0px -48px";
    }
    userName.onblur=function(){
        emName.style.backgroundPosition="";
    }
    userPwd.onfocus=function(){
        emPwd.style.backgroundPosition="-48px -48px";
    }
    userPwd.onblur=function(){
        emPwd.style.backgroundPosition="-48px 0";
    }
}
