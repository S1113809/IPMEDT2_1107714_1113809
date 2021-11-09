console.log("JS stars LOADED");

function stars(numberOfStars, divID){
    const chosenDiv = document.getElementById(divID)
    chosenDiv.style.display = "none";
    chosenDiv.innerHTML = "";

    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    let text = "";
    let i;
    for (i = 0; i < numberOfStars; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
        tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
        const top = randomFrom(bigRange);
        const right = randomFrom(bigRange);
        const width = randomFrom(smallRange);
        text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
        text += ";box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
        chosenDiv.innerHTML = text;
        chosenDiv.style.display = "block";
    }
    text += "<figure class='background__planet'><img src='IMG/planet"+ chosenDiv.id.toString().substring(14) +".webp' alt='planeet " + chosenDiv.id.toString().substring(14) + "'></figure>";
    chosenDiv.innerHTML = text;
}

stars(80, "js--background1");
stars(500, "js--background2");
stars(800, "js--background3");
