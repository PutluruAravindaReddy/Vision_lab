// { Navbar js }

document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var navbar = document.getElementById('navbar2');

    sidebar.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth < 440) {
            navbar.classList.add('none');
            sidebar.style.display = 'block';
        } else {
            navbar.classList.remove('none');
            sidebar.style.display = 'none';
        }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth < 800) {
          navbar.classList.add('none');
          sidebar.style.display = 'block';
      } else {
          navbar.classList.remove('none');
          sidebar.style.display = 'none';
      }
  });

    window.dispatchEvent(new Event('resize'));
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headerbg").classList.add("scroll");
    document.querySelector(".active").classList.add("greenandwhite");
  }
  else  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");
  } else {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");

  }
}

// { faculty js }

let empty=document.querySelectorAll(".empty");
let students=document.querySelectorAll(".students");

for(let i=0;i<students.length;i++){
students[i].addEventListener('mouseover',function(){
  empty[i].classList.add("colorbox");});

students[i].addEventListener('mouseout',function(){
  empty[i].classList.remove("colorbox");
});
}


// { Research projects js }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeslide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeslide";
}