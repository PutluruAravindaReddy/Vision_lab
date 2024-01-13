// hamburger=document.querySelector(".hamburger");
// hamburger.onclick=function(){
//   navBar = document.querySelector(".nav-bar");
//   navBar.classList.toggle("active");
// }

var featuresclick = document.getElementsByClassName("pages");

for (let i = 0; i < featuresclick.length; i++) {
  featuresclick[i].addEventListener("click", function () {
      var activef = document.getElementsByClassName("active");
      for (let j = 0; j < activef.length; j++) {
          activef[j].classList.remove("active");
      }
      this.classList.add("active");
  });
}

// Script for navigation bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("scroll");
    document.getElementById("container").classList.remove("bg");
  }
  else   if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    document.getElementById("navbar").classList.remove("scroll");
    document.getElementById("container").classList.add("bg");
  } else {
    document.getElementById("navbar").classList.remove("scroll");
  }
}


let navbarsym=document.getElementById("mobilenav");
let sidebar=document.getElementByTd("sidebar");
sidebar.addEventListener("click",function(){
  navbarsym.classList.toggle("none");
  console.log("clicked");
});