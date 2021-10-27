console.log("JS background loaded");

const buttonRight = document.getElementById("js--buttonRight");
const buttonLeft = document.getElementById("js--buttonLeft");
const background1 = document.getElementById("js--background1");
const background2 = document.getElementById("js--background2");
const background3 = document.getElementById("js--background3");

let stage = 0;

buttonRight.addEventListener("click", function(){
    setStageForward(stage);
    checkStage();
  }
);

buttonLeft.addEventListener("click", function(){
    setStageBack(stage);
    checkStage();
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

function setStageForward(stageInt){
  const translation = (stageInt + 1) * 100;
  const prevTranslation = translation - 100;
  let math = prevTranslation + 1;

  switch (stage) {
    case 0:
      // background1.style.transform= "translateX(" + translation + "vw)";
      // background2.style.transform= "translateX(-" + translation + "vw)";

      var i = 1;

      function myLoop() {
        setTimeout(function() {
          background1.style.transform = "translateX(-" + math + "vw)";
          background2.style.transform = "translateX(-" + math + "vw)";
          math++;
          i++;
          if (i < 101) {
            myLoop();
          }
        }, 35)
      }

      myLoop();
      break;
    case 1:
      background2.style.transform= "translateX(" + translation + "vw)";
      background3.style.transform= "translateX(-" + translation + "vw)";
      break;
  }
  stage++;
}

function setStageBack(stageInt){
  if (stageInt > 0) {
      let translation = (stageInt - 1) * 100;
      switch (stageInt) {
        case 1:
          background1.style.transform= "none";
          background2.style.transform= "none";
          background3.style.transform= "none";
          break;
        case 2:
          background1.style.transform = "translateX(" + translation + "vw)";
          background2.style.transform = "translateX(-" + translation + "vw)";
          background3.style.transform = "none";
          break;
      }
      stage--;
  }else {
    console.log("error");
    console.log(stageInt);
    stage = 0;
  }
}
