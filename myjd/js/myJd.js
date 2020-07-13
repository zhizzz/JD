
onload=function(){
    /*”“≤‡–°∫⁄Ãı*/
    var a=document.getElementById("right");
    var b=document.getElementById("t");
    var bb=document.getElementById("b");
    var c=b.getElementsByTagName("div")[0];
    var zhu= c.getElementsByTagName("i")[0];
    var cha=document.getElementById("cha");
    var index=null;
    cha.onclick=function(){
        a.style.right="";
        b.style.right="";
        bb.style.right="";
        a.style.backgroundColor="";
        zhu.style.backgroundColor="";
        index=null;
    }
    c.onclick=function(){
        if(index==null){
            a.style.right="0px";
            b.style.right="275px";
            bb.style.right="275px";
            a.style.backgroundColor="#eceaea";
            zhu.style.backgroundColor="#e33333";
            index=2;
            return;
        }
        a.style.right="";
        b.style.right="";
        bb.style.right="";
        a.style.backgroundColor="";
        zhu.style.backgroundColor="";
        index=null;
    }
}