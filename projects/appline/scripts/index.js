document.addEventListener('DOMContentLoaded', ()=> {

  // SLIDERS
  const createSliders = function () {
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
  }

  // TOGGLETABLE
  const toggleTable = function() {
    const tableTitles = document.querySelectorAll('.services__item-table-title')
    const servicesTbodies = document.querySelectorAll('.services__item-table-tbody')
    
    tableTitles.forEach((title, index) => {
      title.addEventListener('click', () => {
        title.classList.toggle('services__item-table-title_hide');
        servicesTbodies[index].classList.toggle('services__item-table-tbody_hide');
      });
    });
  }

  // TOGGLENAVIGATION
  const toggleNavigation = function () {
    const burger = document.querySelector('#burger')
    const burgerItem = document.querySelectorAll('.burger__item')
    const headerNav = document.querySelector('#headerNav')

    burger.addEventListener('click', ()=> {
      burgerItem.forEach(item => {
        item.classList.toggle('burger__item_active')
      })
  
      headerNav.classList.toggle('header__nav_show')
    })
  }

  const togglePopup = function () {
    const popup = document.querySelector('#popup')
    const popupShow = document.querySelectorAll('.popup-show')
    const popupClose = document.querySelector('#popupClose')
    const body = document.body

    popupShow.forEach(item => {
      item.addEventListener('click', (e)=> {
        e.preventDefault
        popup.classList.add('popup_show')
        body.classList.add('body_hidden')
      })
    })

    popupClose.addEventListener('click', ()=> {
      popup.classList.remove('popup_show')
      body.classList.remove('body_hidden')
    })
  }

  const createGallery = function () {
    const gallery = new SimpleLightbox('.gallery a', { 
      // navText: true,
      nav: true,
      scaleImageToRatio: true,
     });

  }

  createSliders()
  createGallery()
  toggleTable()
  toggleNavigation()
  togglePopup()
})


