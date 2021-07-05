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
AOS.init();

AOS.init({
  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  },
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).on("keyup", function (esc) {
  if (esc.keyCode == 27) {
    esc.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
$(document).mouseup(function (e) {
  var container = $(".modal__dialog");
  if (container.has(e.target).length === 0) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});