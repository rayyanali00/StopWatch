var milisec=0;
var sec=0;
var min=0;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var miliHead = document.getElementById("milisec");
var disable = document.getElementById("start")
disable.addEventListener("click",function(){
    disable.setAttribute("disabled","disabled")
})

var interval;

function start(){
    interval = setInterval(function(){
        milisec++;
        miliHead.innerHTML=milisec;
        if(milisec>=100){
            secHead.classList.add("secd")
            sec++;
            secHead.innerHTML=sec;
            milisec=0;
        }
        if(sec>=10){
            minHead.classList.add("mins")
            min++;
            minHead.innerHTML=min;
            sec=0;
            milisec=0;
        }
    },10)
}

function reset(){
    milisec=0;
    sec=0;
    min=0;
    minHead.innerHTML=min
    secHead.innerHTML=sec
    miliHead.innerHTML=milisec
    stop();
}

function stop(){
    clearInterval(interval)
}