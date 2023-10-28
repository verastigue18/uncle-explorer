const btnToggle = document.getElementById('btn-bars');
const dropDownMenu = document.querySelector('.dropdown-menu');
let swiperExplore, swiperTravel, swiperGallery, swiperTestimonial;

// btnToggle.onclick = function () {
//     dropDownMenu.classList.toggle('open');
// }

function bars() {
    dropDownMenu.classList.toggle('open');

}

function initSwipers() {

    const slidesPerView = window.innerWidth <= 320  ? 1 : window.innerWidth <= 1152 ? 2 : window.innerWidth <= 1920 ? 3 : 0;
    const spaceBetween = window.innerWidth <= 320 ? 20 : window.innerWidth <= 768 ? 20 : window.innerWidth <= 1152 ? 9 : window.innerWidth <= 1440 ? 20 : window.innerWidth <= 1920 ? 30 : 0;

    swiperExplore = new Swiper(".mySwiper", {
        slidesPerView,
        spaceBetween,
        loop: true,
        navigation: {
          nextEl: ".btn-arrow-right.btn-explore",
          prevEl: ".btn-arrow-left.btn-explore",
        },
    });

    swiperTravel = new Swiper(".swiperTravel", {
        slidesPerView,
        spaceBetween,
        loop: true,
        navigation: {
            nextEl: ".btn-arrow-right.btn-travel",
            prevEl: ".btn-arrow-left.btn-travel",
        },
    });

    swiperGallery = new Swiper(".swiperGallery", {
        slidesPerView,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".btn-arrow-right.btn-gallery",
            prevEl: ".btn-arrow-left.btn-gallery",
        },
    });

    swiperTestimonial = new Swiper(".swiperTestimonial", {
        slidesPerView,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".btn-arrow-right.btn-testimonial",
            prevEl: ".btn-arrow-left.btn-testimonial",
        },
    });
}

window.addEventListener('load', initSwipers);

window.addEventListener('resize', initSwipers);
