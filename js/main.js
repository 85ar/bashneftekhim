const swiper = new Swiper(".navbar__hero", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination-header",
  },
  navigation: {
    nextEl: ".swiper-button-header",
  },
});
const swiper2 = new Swiper(".partners-wrapper", {
  direction: "horizontal",
  // spaceBetween: 50,
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  keyboard: {
    enabled: true,
  },
});
