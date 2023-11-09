
const slideNo = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1440 ? 3 : 4;
const slide2 = window.innerWidth <= 1440 ? 3 : 2;

const exploreSwiper = new Swiper(".explore-swiper", {
  slidesPerView: slideNo,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".nxt-explore-swiper",
    prevEl: ".pre-explore-swiper",
  },
});

const offerSwiper = new Swiper(".offer-swiper", {
  slidesPerView: slide2,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".nxt-offer-swiper",
    prevEl: ".pre-offer-swiper",
  },
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  slidesPerView: slideNo,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".nxt-gallery-swiper",
    prevEl: ".pre-gallery-swiper",
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: slideNo,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".nxt-testimonial-swiper",
    prevEl: ".pre-testimonial-swiper",
  },
});



const dropDownMenu = document.querySelector('.dropdown-menu');


function bars() {
  dropDownMenu.classList.toggle('open')
}
