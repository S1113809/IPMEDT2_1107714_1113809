//Inladen modals
const modal1 = document.getElementById("js--modal1");
const planet1 = document.getElementById("js--planet1");
const span1 = document.getElementById("js--modalClose1");

const modal2 = document.getElementById("js--modal2");
const planet2 = document.getElementById("js--planet2");
const span2 = document.getElementById("js--modalClose2");

//funties modal 1
planet1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

//funties modal 2
planet2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
