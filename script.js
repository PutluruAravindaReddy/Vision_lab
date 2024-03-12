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
    var element = document.getElementById(target);
    if (element) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeText(target, text, index, interval);
            }, interval);
        }
    }
}

function typeTextLAB(target, text, index, interval) {
    var element = document.getElementById(target);
    if (element) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeTextLAB(target, text, index, interval);
            }, interval);
        }
    }
}

// Check if labText is present, then call the appropriate function
if (document.getElementById("labText")) {
    typeText("labText", "Visual Computing Vertical", 0, 100);
} else {
    typeTextLAB("labTextLAB", "Visual Computing Lab @TP 1515", 0, 100);
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headerbg").classList.add("scroll");
    document.querySelector(".active").classList.add("greenandwhite");
    document.querySelector(".dd-menu").classList.add("dd-green");
    // document.querySelector("header").classList.add("transparent-bg-nav");
    document.querySelector('.vc-css-border').classList.add("vc-css-color-white");
  }
  else  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");
    document.querySelector(".dd-menu").classList.remove("dd-green");
    // document.querySelector("header").classList.remove("transparent-bg-nav");
    document.querySelector('.vc-css-border').classList.remove("vc-css-color-white");


  } else {
    document.getElementById("headerbg").classList.remove("scroll");
    document.querySelector(".active").classList.remove("greenandwhite");
    document.querySelector(".dd-menu").classList.remove("dd-green");
    // document.querySelector("header").classList.remove("transparent-bg-nav");
    document.querySelector('.vc-css-border').classList.remove("vc-css-color-white");
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


document.addEventListener("DOMContentLoaded", function() {
    const membersDiv = document.getElementById('members-div');
    const members = Array.from(document.querySelectorAll('.members'));

    // Define the order of designations
    const order = ["Professor", "Associate Professor", "Assistant Professor"];

    // Sort the members based on the predefined order
    members.sort(function(a, b) {
        const designationA = a.querySelector('p:nth-of-type(1)').textContent.trim();
        const designationB = b.querySelector('p:nth-of-type(1)').textContent.trim();
        return order.indexOf(designationA) - order.indexOf(designationB);
    });

    // Append the sorted members back to the membersDiv
    members.forEach(function(member) {
        membersDiv.appendChild(member);
    });
});



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

