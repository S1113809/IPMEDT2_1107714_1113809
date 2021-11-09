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
  console.log(stage);

  switch (stageInt) {
    case 0:
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
      };

      myLoop();
      break;

    case 1:
      var i = 1;

      function myLoop2() {
        setTimeout(function() {
          background2.style.transform= "translateX(-" + math + "vw)";
          background3.style.transform= "translateX(-" + math + "vw)";
          math++;
          i++;
          if (i < 101) {
            myLoop2();
          }
        }, 35)
      };

      myLoop2();
      break;
  }

  stage++;
  console.log(stage);
}

function setStageBack(stageInt){
  if (stageInt > 0) {
      let translation = (stageInt - 1) * 100;
      const prevTranslation = translation - 100;
      let math = prevTranslation + 1;

      let math2 = stageInt * 100;
      switch (stageInt) {
        case 1:
          var i = 1;

          function myLoop() {
            setTimeout(function() {
              background1.style.transform = "translateX(" + math + "vw)";
              background2.style.transform = "translateX(" + math + "vw)";
              math++;
              i++;
              if (i < 101) {
                myLoop();
              }
            }, 35)
          };

          myLoop();
          break;
        case 2:
          var i = 1;
          function myLoop2() {
            setTimeout(function() {
              background2.style.transform = "translateX(-" + math2 +"vw)";
              background3.style.transform = "translateX(-" + math2 +"vw)";
              math2--;
              i++;
              if (i < 102) {
                myLoop2();
              }
            }, 35)
          };

          myLoop2();
          break;
      }
      stage--;
  }else {
    console.log("error");
    console.log(stageInt);
    stage = 0;
  }
}
