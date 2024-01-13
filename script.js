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

    // Initial setup
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