// Validator: no errors
console.log("JS stars LOADED");

const pengu = " <article class='penguin__container'><section class='textBubble' id='js--pengu-textBubble' hidden><p class='textBubble--text' id='js--textBubble-text' >NOOT!<br>Leuk dat je me gevonden hebt! <br>Ik zweef lekker verder,<br> NOOT!   </p>    <button class='textBubble--button' onclick='penguinClose()'>Sluiten</button></section><figure class='penguin' onclick='penguinClick()'>    <div class='penguin__bottom'>        <div class='penguin__bottom--hand penguin__bottom--right-hand'></div>        <div class='penguin__bottom--hand penguin__bottom--left-hand'></div>        <div class='penguin__bottom--feet penguin__bottom--right-feet'></div>        <div class='penguin__bottom--feet penguin__bottom--left-feet'></div>    </div>    <div class='penguin__top'>        <div class='penguin__top--cheek penguin__top--right-cheek'></div>        <div class='penguin__top--cheek penguin__top--left-cheek'></div>        <div class='penguin__top--belly'></div>        <div class='penguin__top--eye penguin__top--right-eye'>          <div class='penguin__top__eye--sparkle'></div>        </div>        <div class='penguin__top--eye penguin__top--left-eye'>          <div class='penguin__top__eye--sparkle'></div>        </div>        <div class='penguin__top--blush penguin__top--blush-right'></div>        <div class='penguin__top--blush penguin__top--blush-left'></div>        <div class='penguin__top--beak penguin__top--beak-top'></div>        <div class='penguin__top--beak penguin__top--beak-bottom'></div>    </div>       <div class='penguin__helmet'>        <div class='penguin__helmet--base'></div>        <div class='penguin__helmet--glass'></div>        <div class='penguin__helmet--shine'></div>        <div class='penguin__helmet--side penguin__helmet--side-left'></div>        <div class='penguin__helmet--side penguin__helmet--side-right'></div>    </div>         </figure></article>";
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
    text += "<figure id='js--planet"+ chosenDiv.id.toString().substring(14) +"' class='background__planet'><img src='./IMG/planet"+ chosenDiv.id.toString().substring(14) +".webp' alt='planeet " + chosenDiv.id.toString().substring(14) + "'></figure>";
    chosenDiv.innerHTML = text;

    if (chosenDiv.id.toString().substring(14) == 3) {
      text += pengu;
      chosenDiv.innerHTML = text;
    }
}

stars(80, "js--background1");
stars(500, "js--background2");
stars(800, "js--background3");
