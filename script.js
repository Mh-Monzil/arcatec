const text = document.querySelector("#text p");
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
        )
        .join("");

      const toggleMenu = document.getElementById("toggleMenu");
      const toggleNav = document.getElementById("toggleNav");
      const toggleClose = document.getElementById("toggleClose");
      const closeNav = document.querySelectorAll(".closeNav");

      toggleMenu.addEventListener("click", () => {
        // toggleNav.classList.add('absolute');
        console.log("menu");
        toggleNav.classList.remove("-left-80");
        toggleNav.classList.add("left-0");
        toggleClose.classList.remove("hidden");
        toggleClose.classList.add("block");
        toggleMenu.classList.remove("block");
        toggleMenu.classList.add("hidden");
      });

      toggleClose.addEventListener("click", () => {
        toggleNav.classList.remove("left-0");
        toggleNav.classList.add("-left-80");
        toggleClose.classList.remove("block");
        toggleClose.classList.add("hidden");
        toggleMenu.classList.remove("hidden");
        toggleMenu.classList.add("block");
      });

      closeNav.forEach((e) => {
        e.addEventListener("click", () => {
          toggleNav.classList.remove("left-0");
          toggleNav.classList.add("-left-80");
          toggleClose.classList.remove("block");
          toggleClose.classList.add("hidden");
          toggleMenu.classList.remove("hidden");
          toggleMenu.classList.add("block");
        });
      });




      $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 24,
          autoplay: false,
          nav: false,
          navText: [
            "<img src='./assets/icons/leftArrow.png' alt='Previous'>",
            "<img src='./assets/icons/rightArrow.png' alt='Next'>",
          ],
          // autoplay: true,
          // autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsiveClass:true,
          responsive: {
            // Responsive settings
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1024: {
              items: 3,
            },
          },
        });
      });




      var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}