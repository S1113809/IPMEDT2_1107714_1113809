console.log("JS LOADED");

// vars to alter
const intTemp = document.getElementById("js--internalTemp");
const extTemp = document.getElementById("js--externalTemp");
const speed = document.getElementById("js--speed");
const launchButton = document.getElementById("js--launchButton");

window.onload = function () {
    loadTemps();
}

function loadTemps(){
    baseTemp = Math.floor(Math.random() * 25)+8;
    // console.log(baseTemp);
    altTemp = baseTemp - (Math.floor(Math.random() * 8));
    // console.log(altTemp);
    intTemp.innerHTML = altTemp;
    extTemp.innerHTML = baseTemp;
}

function launch(){
    launchButton.classList.add("active");
    launchButton.disabled = true;
    speed.innerHTML = 1;
    delta = parseInt(speed.innerHTML);
    setInterval(() => {
        speed.innerHTML = Math.round(parseInt(speed.innerHTML) + delta);
        delta = delta * 1.05 ;
        if(parseInt(speed.innerHTML) > 500){
            window.location.href = "adventure.html";
        }
    }, 100);
    
}
