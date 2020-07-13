
onload=function(){
    var bor=document.getElementById("bor");
    var t=document.getElementById("t");
    t.onmouseover=function(){
        bor.style.borderRightColor="#333";
        t.style.borderColor="#333";
    };
    t.onmouseout=function(){
        bor.style.borderRightColor="";
        t.style.borderColor="";
    }
    function format(){
        var phone=document.getElementById("phone");
        if(phone.value.length!=11){
            alert("手机号必须为11位");
            return false;
        }
        if(isNaN(phone.value)) {
            alert("手机号必须为纯数字");
            return false;
        }
    }
    var yZ=document.getElementById("yZ");
    yZ.onclick=function(){
        format();
    }
}