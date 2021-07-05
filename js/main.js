const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
const swiper2 = new Swiper(".partners-wrapper", {
  direction: "horizontal",
  spaceBetween: 50,
  slidesPerView: 7,
  loop: true,
  // autoplay: {
  //   delay: 1200,
  // },
  keyboard: {
    enabled: true,
  },
});
