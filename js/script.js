

const menuBar = document.querySelector(".ri-menu-line");
const menuNav = document.querySelector(".menu");
const menuClose = document.querySelector(".ri-close-line");

window.addEventListener("scroll", () => {
  positionwindow = window.scrollY > 0;
  {
    menuNav.classList.remove("menu-active");
  }
});

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");

});
menuClose.addEventListener("click", () => {
    menuNav.classList.remove("menu-active")
      menuClose.classList.toggle("rotate");
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

AOS.init();
