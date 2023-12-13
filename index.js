/*
var dis = document.getElementsByClassName("position")[0];
dis.style.display = "none";
for(let i=0;i<10;i++){
    dis.innerHTML = "kk";
}



const sftDev = "Software Developer";
const webDev = "Web Developer";

const allDev = [sftDev,webDev];

function displayHello(){
    dis.innerHTML = "55";
}

const webDev = "Web Developer";
for(let i=0;i<webDev.length;i++){
    console.log(webDev[i]);
}*/

const webDev = "Web Developer";
const sftDev = "Software Developer";



var dis = document.getElementsByClassName("position")[0];

let i = 0;
let result = "";

let interval = setInterval(function() {
    result = result + webDev[i];
    dis.innerHTML = "I am a " + result;
    i++;

    if (i === webDev.length) {
        clearInterval(interval);
    }
}, 1000);

