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
const rocket_takeOf_audio = new Audio("./Sounds/Rocket_take_off.wav");
let soundsArray =[rocket_takeOf_audio];
// MuteButton
const muteButton = document.querySelector(".toggle-sound");


window.onload = function () {
    // Functions to execute on start
    loadTemps();
    setLightDelay();
    // start app muted
    mute();
    muteButton.classList.add("sound-mute"); 
    introAudio();
}

function introAudio(){
    let playAttempt = setInterval(() => {
        intro_audio.play()
          .then(() => {
            clearInterval(playAttempt);
          })
          .catch(error => {
            console.log('Unable to play the video, User has not interacted yet.');
          });
      }, 500);
}


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
    lightsYellow[2].classList.add("animation__delay--05")
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
            window.location.href = "adventure.html";
        }
    }, 100);    
}

function toggleSound(){
    if(muteButton.classList.contains("sound-mute")){
        muteButton.classList.remove("sound-mute");
        unmute();
    }else{
        muteButton.classList.add("sound-mute");
        mute();
    }
}

function mute(){
    // Mute all audio
    document.querySelectorAll("audio").forEach(elem => {
        elem.muted  = true}
    );
    for(let i = 0; i < soundsArray.length; i++){
        soundsArray[i].volume = 0;
    }
}

function unmute(){
    // Unmute all audio
    document.querySelectorAll("audio").forEach(elem => {
        elem.muted  = false}
    );
    for(let i = 0; i < soundsArray.length; i++){
        soundsArray[i].volume = 1;
    }
}
