
// Validator: no errors
// Fixed semicolon warnings

console.log("JS LOADED");

// vars to alter
let intTemp = document.getElementById("js--internalTemp");
let extTemp = document.getElementById("js--externalTemp");
let speed = document.getElementById("js--speed");
const launchButton = document.getElementById("js--launchButton");
// get lights to set delays
const lightsRed = document.getElementsByClassName("light--red");
const lightsOrange = document.getElementsByClassName("light--orange");
const lightsYellow = document.getElementsByClassName("light--yellow");
const lightsGreen = document.getElementsByClassName("light--green");
const lightsBlue = document.getElementsByClassName("light--blue");
// Audio's
const intro_audio = document.querySelector(".introAudio");
// const rocket_takeOf_audio = new Audio("./Sounds/Rocket_take_off.wav");

window.onload = function () {
    // Functions to execute on start
    var path = window.location.pathname;
    if(path.toString().includes("/index.html") == true){
        loadTemps();
        setLightDelay();
    }  
    else if(path == "/launch.html"){
        // console.log("in path launch toMain");
        toMain();
    }         
};

function loadTemps(){
    // Create ints to show as temperatures
    baseTemp = Math.floor(Math.random() * 25)+8;
    // console.log(baseTemp);
    altTemp = baseTemp - (Math.floor(Math.random() * 8));
    // console.log(altTemp);
    intTemp.innerHTML = altTemp;
    extTemp.innerHTML = baseTemp;
}

function setLightDelay(){
    // Set delay classed to light animations
    // red light
    lightsRed[1].classList.add("animation__delay--1");
    // orange
    lightsOrange[0].classList.add("animation__delay--05");
    lightsOrange[1].classList.add("animation__delay--15");
    lightsOrange[3].classList.add("animation__delay--1");
    lightsOrange[4].classList.add("animation__delay--15");
    // yellow
    lightsYellow[1].classList.add("animation__delay--2");
    lightsYellow[2].classList.add("animation__delay--05");
    // green
    lightsGreen[0].classList.add("animation__delay--05");
    lightsGreen[1].classList.add("animation__delay--15");
    // blue
    lightsBlue[1].classList.add("animation__delay--2");
}

function launch(){
    // Launching
    // Play audio
    rocket_takeOf_audio.play();
    // Hold button on hover/active state -> appearing to be pushed down
    launchButton.classList.add("active");
    document.querySelector(".information").classList.add("stand-out");
    document.querySelector(".information--speed").classList.add("bold");
    // Disahle button -> cannot be clicked again
    launchButton.disabled = true;
    // Set speed to 1 -> 0 cannot be multiplied
    speed.innerHTML = 1;
    // Create delta to accelerate
    delta = parseInt(speed.innerHTML);
    setInterval(() => {
        // Increase speed on launch button clicked with an increase of 5% every 100ms
        speed.innerHTML = Math.round(parseInt(speed.innerHTML) + delta);
        delta = delta * 1.1 ;
        if(parseInt(speed.innerHTML) > 600){
            toLaunch();
        }
    }, 100);
}

function toLaunch(){
    window.location.href = "launch.html";
    localStorage.setItem('launchSound', rocket_takeOf_audio.currentTime);
}

function toMain(){
    console.log("in toMain");
    setTimeout(function(){
        console.log("in timeout");
        window.location.href = "main.html";
    }, 8000);
}



