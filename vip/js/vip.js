
onload=function(){
    function changeColor(){
        var div=document.getElementById("body");
        if(div.style.backgroundColor=="mediumpurple"){
            div.style.backgroundColor="darkred"
        }else if(div.style.backgroundColor=="darkred"){
            div.style.backgroundColor="purple"
        }else{
            div.style.backgroundColor="mediumpurple"
        }
    }
    changeColor();
    setInterval(changeColor,2000);
}