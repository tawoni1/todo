
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    /* const seconse = String(date.getSeconds()).padStart(2,"0"); */

    clock.innerText = `${hour}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);