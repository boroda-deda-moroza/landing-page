// burger
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const overlay = document.querySelector(".burger__overlay");
  const body = document.body;

  function toggleMenu() {
    body.classList.toggle("menu-open");
  }

  burgerBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});

// slider
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
swiper.autoplay.stop();
const swiperEl = document.querySelector(".swiper");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer.observe(swiperEl);
