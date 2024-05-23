document.addEventListener('DOMContentLoaded', ()=> {

  const servicesSlider = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const portoflioSlider = new Swiper(".works__slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
      870: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      1: {
        slidesPerView: 1.5,
      },
    }
  });  
  
  const tableTitles = document.querySelectorAll('.services__item-table-title')
  const servicesTbodies = document.querySelectorAll('.services__item-table-tbody')
  
  tableTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
      title.classList.toggle('services__item-table-title_hide');
      servicesTbodies[index].classList.toggle('services__item-table-tbody_hide');
    });
  });

})


