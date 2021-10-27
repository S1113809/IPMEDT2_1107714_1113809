console.log("JS background loaded");

const buttonRight = document.getElementById("js--buttonRight");
const buttonLeft = document.getElementById("js--buttonLeft");
const background1 = document.getElementById("js--background1");
const background2 = document.getElementById("js--background2");

let stage = 1;

buttonRight.addEventListener("click", function(){
    stage++;
    checkStage();
    console.log(stage);
  }
);

buttonLeft.addEventListener("click", function(){
    stage--;
    checkStage();
    console.log(stage);
});

function checkStage(){
  switch (stage){
    case 1:
      buttonLeft.classList.add("navButton--noClick");
      break;
    case 2:
      buttonLeft.classList.remove("navButton--noClick");
      break;
  }
}
