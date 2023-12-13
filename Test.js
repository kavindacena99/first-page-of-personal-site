const softwareDev = "Software Developer";
const webDev = "Web Developer";

let result = "";
let i = 0;
let devType = 0; // 0 for software, 1 for web

let interval = setInterval(function() {
    if (devType === 0) {
        result = result + softwareDev[i];
        console.log(result);
    } else {
        result = result + webDev[i];
        console.log(result);
    }
    
    i++;

    if (i === softwareDev.length && i === webDev.length) {
        clearInterval(interval);
    } else if (i === Math.max(softwareDev.length, webDev.length)) {
        i = 0;
        devType = 1 - devType; // Switch between 0 and 1
    }
}, 1000);
