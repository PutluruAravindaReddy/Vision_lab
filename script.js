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