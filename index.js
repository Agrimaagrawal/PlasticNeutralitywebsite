const menubtn=document.querySelector('.menubtn');
const navlinks=document.querySelector('.nav-links');
menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });