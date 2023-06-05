

let clock=function () {
    let date= new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    // for am and pm
    var half="";
    if(hours>=12){
        half="PM"
    }else{
        half="AM";
    }
    document.querySelector("#hours").innerText=hours;
    document.querySelector("#min").innerText=minutes;
    document.querySelector("#sec").innerText=seconds;
    document.querySelector("#ampm").innerText=half;
    setInterval(clock,1000);
    };
    clock();