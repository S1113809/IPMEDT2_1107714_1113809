console.log("js loaded");

const textBubble = document.getElementById("js--textBubble");
window.onload = function ()  {
    togglePenguin();
}

function togglePenguin(){    
    textBubble.toggleAttribute('hidden');
}

function penguinClick(){
    togglePenguin();
}
function penguinClose(){
   togglePenguin();
}