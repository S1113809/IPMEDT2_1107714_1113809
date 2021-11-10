// Validator: no errors
const textBubble = document.getElementById("js--pengu-textBubble");
window.onload = function ()  {
    togglePenguin();
}
// Toggle hidden or show on textbubble
function togglePenguin(){
    textBubble.toggleAttribute('hidden');
}
// Close bubble on click button or penguin
function penguinClick(){
    togglePenguin();
}
function penguinClose(){
   togglePenguin();
}
