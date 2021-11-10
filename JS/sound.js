// Validator: no errors

// Audio info vars
const rocket_takeOf_audio = new Audio("./Sounds/Rocket_take_off.wav");
const space_audio = new Audio("./Sounds/era-of-space.mp3");
const soundsArray = [rocket_takeOf_audio, space_audio];

// MuteButton
const muteButton = document.querySelector(".toggle-sound");

window.onload = function () {
    var path = window.location.pathname;
    if(path.toString().includes("/index.html")){
        localStorage.setItem('muted', true);
        introAudio();
    }
    else if(path.toString().includes("/launch.html")){
        console.log("launch");
        playAudio(rocket_takeOf_audio, JSON.parse(localStorage.getItem('launchSound')));
        toMain();
    }
    else if(path.toString().includes("/main.html")){
        playAudio(space_audio, 0);
    }
    else if(path.toString().includes("/touchdown.html")){
        playAudio(rocket_takeOf_audio, 0);
    }
    // start app muted -> check if button is muted or not
    if (JSON.parse(localStorage.getItem('muted')) === true){
        mute();
    }
    else if (JSON.parse(localStorage.getItem('muted')) === false) {
        unmute();
    }
}

function toggleSound(){
    if(muteButton.classList.contains("sound-mute")){
        unmute();
    }else{
        mute();
    }
}
function mute(){
    // Mute all audio
    document.querySelectorAll("audio").forEach(elem => {
        elem.muted  = true;
    }
    );
    for(let i = 0; i < soundsArray.length; i++){
        soundsArray[i].volume = 0;
    }
    muteButton.classList.add("sound-mute");
    localStorage.setItem('muted', true);

}

function unmute(){
    // Unmute all audio
    document.querySelectorAll("audio").forEach(elem => {
        elem.muted  = false
    ;}
    );
    for(let i = 0; i < soundsArray.length; i++){
        if(soundsArray[i] == rocket_takeOf_audio){
            // console.log("soft sound");
            soundsArray[i].volume = 0.2;
        }
        else if(soundsArray[i] == space_audio){
            soundsArray[i].volume = 0.1;
        }
        else{
            soundsArray[i].volume = 1;
        }
    }
    muteButton.classList.remove("sound-mute");
    localStorage.setItem('muted', false);
}

function introAudio(){
    let playAttempt = setInterval(() => {
        intro_audio.play()
          .then(() => {
            clearInterval(playAttempt);
          })
          .catch(error => {
            console.log('Unable to play the audio, User has not interacted yet.');
          });
      }, 500);
      intro_audio.volume = 1;
}
function playAudio(audio, time){
    let playAttempt = setInterval(() => {
        audio.currentTime = time;
        audio.play()
        .then(() => {
            clearInterval(playAttempt);
        })
        .catch(error => {
            console.log('Unable to play the audio, User has not interacted yet.');
        });
    },200);
    if(audio == space_audio){
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }

}
