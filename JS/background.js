console.log("JS background loaded");

const buttonRight = document.getElementById("js--buttonRight");
const buttonLeft = document.getElementById("js--buttonLeft");
const background1 = document.getElementById("js--background1");
const background2 = document.getElementById("js--background2");

let stage = 0;

buttonRight.addEventListener("click", function(){
    stage++;
    setStageForward(stage);
    checkStage();
    console.log(stage);
  }
);

buttonLeft.addEventListener("click", function(){
    setStageBack(stage);
    stage--;
    checkStage();
    console.log(stage);
});

function checkStage(){
  switch (stage){
    case 0:
      buttonLeft.classList.add("navButton--noClick");
      break;
    case 1:
      buttonLeft.classList.remove("navButton--noClick");
      break;
  }
}

function setStageForward(stage){
  const translation = stage * 100;
  const prevTranslation = translation - 100;
  background1.style.transform= "translateX(" + translation + "vw)";
  background2.style.transform= "translateX(-" + translation + "vw)";

}

function setStageBack(stage){
  if (stage == 1) {
    background1.style.transform= "none";
    background2.style.transform= "none";
  }else {
    const translation = stage * 100;
    background1.style.transform= "translateX(-" + translation + "vw)";
    background2.style.transform= "translateX(" + translation + "vw)";
  }
}
