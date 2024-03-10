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

function typeText(target, text, index, interval) {
    if (index < text.length) {
        document.getElementById(target).innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
            typeText(target, text, index, interval);
        }, interval);
    }
}

// Call the function to type out the text
typeText("labText", "Visual Computing Vertical", 0, 100);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headerbg").classList.add("scroll");
    document.querySelector(".active").classList.add("greenandwhite");
    document.querySelector(".dd-menu").classList.add("dd-green");
    // document.querySelector("header").classList.add("transparent-bg-nav");
    // document.querySelector('.vc-css-border').classList.add("vc-css-color");
  }
  else  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");
    document.querySelector(".dd-menu").classList.remove("dd-green");
    // document.querySelector("header").classList.remove("transparent-bg-nav");
    // document.querySelector('.vc-css-border').classList.remove("vc-css-color");

  } else {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");
    document.querySelector(".dd-menu").classList.remove("dd-green");
    // document.querySelector("header").classList.remove("transparent-bg-nav");
  }
}


document.addEventListener('DOMContentLoaded', function () {
  var ddBox = document.querySelector('.dd-box');
  var ddMenu = document.querySelector('.dd-menu');

  ddBox.onclick=()=>{
    document.querySelector(".active").classList.remove('active');
    ddBox.classList.add("active-dd");
  };
  var isClicked = false;

  function showMenu() {
      ddMenu.classList.remove("dd-hide");
  }

  function hideMenu() {
      if (!isClicked) {
          ddMenu.classList.add("dd-hide");
      }
  }

  function toggleMenu() {
      isClicked = !isClicked;
      ddMenu.classList.toggle("dd-hide", !isClicked);
  }

  ddBox.addEventListener('mouseenter', showMenu);
  ddMenu.addEventListener('mouseenter', showMenu);

  ddBox.addEventListener('mouseleave', hideMenu);
  ddMenu.addEventListener('mouseleave', hideMenu);

  ddBox.addEventListener("click", toggleMenu);

  document.addEventListener('click', function (event) {
      if (!ddBox.contains(event.target) && !ddMenu.contains(event.target)) {
          isClicked = false;
          hideMenu();
      }
  });
});



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

// { VCposter js }

function enlargePoster(posterUrl) {
  document.getElementById('enlarged-image').src = posterUrl;
  document.getElementById('enlarged-poster').style.display = 'block';
  document.getElementById('close-btn').style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}

function closeEnlargedPoster() {
  document.getElementById('enlarged-poster').style.display = 'none';
  document.getElementById('close-btn').style.display = 'none';
  document.body.style.overflow = 'auto'; 
  document.querySelector('body').style.backgroundColor="white";
}


// { vc Resarch js }


// { Research projects js }


!(function (d) {
    function initCarousel(carouselWrapper) {
        var itemClassName = "carousel__photo";
        var items = carouselWrapper.getElementsByClassName(itemClassName);
        var totalItems = items.length;
        var slide = 0;
        var moving = false;

        function setInitialClasses() {
            items[totalItems - 1].classList.add("prev");
            items[0].classList.add("active-slide");
            items[1].classList.add("next");
        }

        function setEventListeners() {
            var next = carouselWrapper.getElementsByClassName('carousel__button--next')[0];
            var prev = carouselWrapper.getElementsByClassName('carousel__button--prev')[0];

            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
        }

        function disableInteraction() {
            moving = true;
            setTimeout(function () {
                moving = false
            }, 500);
        }

        function moveCarouselTo(slide) {
            if (!moving) {
                disableInteraction();
                var newPrevious = slide - 1;
                var newNext = slide + 1;
                var oldPrevious = slide - 2;
                var oldNext = slide + 2;

                if ((totalItems - 1) > 3) {
                    if (newPrevious <= 0) {
                        oldPrevious = (totalItems - 1);
                    } else if (newNext >= (totalItems - 1)) {
                        oldNext = 0;
                    }

                    if (slide === 0) {
                        newPrevious = (totalItems - 1);
                        oldPrevious = (totalItems - 2);
                        oldNext = (slide + 1);
                    } else if (slide === (totalItems - 1)) {
                        newPrevious = (slide - 1);
                        newNext = 0;
                        oldNext = 1;
                    }

                    items[oldPrevious].className = itemClassName;
                    items[oldNext].className = itemClassName;

                    items[newPrevious].className = itemClassName + " prev";
                    items[slide].className = itemClassName + " active-slide";
                    items[newNext].className = itemClassName + " next";
                }
            }
        }

        function moveNext() {
            if (!moving) {
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide++;
                }
                moveCarouselTo(slide);
            }
        }

        function movePrev() {
            if (!moving) {
                if (slide === 0) {
                    slide = (totalItems - 1);
                } else {
                    slide--;
                }
                moveCarouselTo(slide);
            }
        }

        setInitialClasses();
        setEventListeners();
        moving = false;
    }

    // Initialize carousels
    var carousels = document.querySelectorAll('.carousel-wrapper');
    carousels.forEach(initCarousel);
}(document));



// // Params
// let mainSliderSelector = '.main-slider',
//     navSliderSelector = '.nav-slider',
//     interleaveOffset = 0.5;

// // Main Slider
// let mainSliderOptions = {
//       loop: true,
//       speed:1000,
//       autoplay:{
//         delay:3000
//       },
//       loopAdditionalSlides: 10,
//       grabCursor: true,
//       watchSlidesProgress: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       on: {
//         init: function(){
//           this.autoplay.stop();
//         },
//         imagesReady: function(){
//           this.el.classList.remove('loading');
//           this.autoplay.start();
//         },
//         slideChangeTransitionEnd: function(){
//           let swiper = this,
//               captions = swiper.el.querySelectorAll('.caption');
//           for (let i = 0; i < captions.length; ++i) {
//             captions[i].classList.remove('show');
//           }
//           swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
//         },
//         progress: function(){
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             let slideProgress = swiper.slides[i].progress,
//                 innerOffset = swiper.width * interleaveOffset,
//                 innerTranslate = slideProgress * innerOffset;
           
//             swiper.slides[i].querySelector(".slide-bgimg").style.transform =
//               "translateX(" + innerTranslate + "px)";
//           }
//         },
//         touchStart: function() {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = "";
//           }
//         },
//         setTransition: function(speed) {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = speed + "ms";
//             swiper.slides[i].querySelector(".slide-bgimg").style.transition =
//               speed + "ms";
//           }
//         }
//       }
//     };
// let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// // Navigation Slider
// let navSliderOptions = {
//       loop: true,
//       loopAdditionalSlides: 10,
//       speed:1000,
//       spaceBetween: 5,
//       slidesPerView: 5,
//       centeredSlides : true,
//       touchRatio: 0.2,
//       slideToClickedSlide: true,
//       direction: 'vertical',
//       on: {
//         imagesReady: function(){
//           this.el.classList.remove('loading');
//         },
//         click: function(){
//           mainSlider.autoplay.stop();
//         }
//       }
//     };
// let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// // Matching sliders
// mainSlider.controller.control = navSlider;
// navSlider.controller.control = mainSlider;