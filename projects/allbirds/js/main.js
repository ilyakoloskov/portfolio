/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "../node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ "./sass/main.sass");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);






function init() {
  // GSAP
  // MAIN-SCREEN
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__.default.timeline();
  tl.fromTo(".header", {
    opacity: 0
  }, {
    opacity: 1
  }, 1);
  tl.fromTo(".main-screen", {
    opacity: 0
  }, {
    opacity: 1
  }, 2);
  tl.fromTo(".main-screen__title", {
    opacity: 0
  }, {
    opacity: 1
  }, 3);
  tl.fromTo(".main-screen__subtitle", {
    opacity: 0
  }, {
    opacity: 1
  }, 4);
  tl.fromTo(".buttons-wrap__btn", {
    opacity: 0
  }, {
    opacity: 1
  }, 5);
  gsap__WEBPACK_IMPORTED_MODULE_2__.default.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.default);
  gsap__WEBPACK_IMPORTED_MODULE_2__.default.set(".scroll-trigger", {
    opacity: 0,
    y: 24
  });
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.default.batch(".scroll-trigger", {
    onEnter: function onEnter(batch) {
      return gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15
      });
    },
    onLeave: function onLeave(batch) {
      return gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(batch, {
        opacity: 0,
        y: 24
      });
    },
    onEnterBack: function onEnterBack(batch) {
      return gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15
      });
    },
    onLeaveBack: function onLeaveBack(batch) {
      return gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(batch, {
        opacity: 0,
        y: 24
      });
    },
    start: "start center",
    end: "100% center"
  }); // HEADER__SCROL

  function scrollLine() {
    window.addEventListener('scroll', function () {
      var headerLine = document.querySelector('.header__scroll');
      var wintop = window.pageYOffset,
          docheight = document.documentElement.scrollHeight,
          winheight = document.documentElement.clientHeight;
      var scrolled = wintop / (docheight - winheight) * 100;
      headerLine.style.width = scrolled + "%";
    });
  }

  scrollLine(); // BURGER

  function burger() {
    var burger = document.querySelector('#burger');
    var headerMenu = document.querySelector('.header-mobile__nav');
    burger.addEventListener("click", function () {
      headerMenu.classList.toggle('header-mobile__nav_active');
    });
  }

  burger(); // SLIDER

  function sectionSlider() {
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_4__.default('.section-slider__slider', {
      spaceBetween: 25,
      loop: true,
      lazy: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        stopOnLast: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 3.3,
          spaceBetween: 25
        },
        1600: {
          slidesPerView: 4.3
        }
      }
    });
  }

  sectionSlider(); // TABS

  function tabs() {
    var tabsBtn = document.querySelectorAll(".tabs__tab");
    var tabsItems = document.querySelectorAll(".tabs__content");
    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
      item.addEventListener("click", function () {
        var currentBtn = item;
        var tabId = currentBtn.getAttribute("data-tab");
        var currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tabs__tab_active')) {
          tabsBtn.forEach(function (item) {
            item.classList.remove('tabs__tab_active');
          });
          tabsItems.forEach(function (item) {
            item.classList.remove('tabs__content_active');
          });
          currentBtn.classList.add('tabs__tab_active');
          currentTab.classList.add('tabs__content_active');
        }
      });
      document.querySelector('.tabs__tab').click();
    }
  }

  tabs();
}

window.onload = init;

/***/ }),

/***/ "./img/article-1.png":
/*!***************************!*\
  !*** ./img/article-1.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/article-1.png");

/***/ }),

/***/ "./img/article-2.png":
/*!***************************!*\
  !*** ./img/article-2.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/article-2.png");

/***/ }),

/***/ "./img/article-3.png":
/*!***************************!*\
  !*** ./img/article-3.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/article-3.png");

/***/ }),

/***/ "./img/icons/article-icon-1.svg":
/*!**************************************!*\
  !*** ./img/icons/article-icon-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/article-icon-1.svg");

/***/ }),

/***/ "./img/icons/article-icon-2.svg":
/*!**************************************!*\
  !*** ./img/icons/article-icon-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/article-icon-2.svg");

/***/ }),

/***/ "./img/icons/buy.svg":
/*!***************************!*\
  !*** ./img/icons/buy.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/buy.svg");

/***/ }),

/***/ "./img/icons/facebook.svg":
/*!********************************!*\
  !*** ./img/icons/facebook.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/facebook.svg");

/***/ }),

/***/ "./img/icons/flags/1.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/1.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/1.svg");

/***/ }),

/***/ "./img/icons/flags/2.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/2.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/2.svg");

/***/ }),

/***/ "./img/icons/flags/3.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/3.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/3.svg");

/***/ }),

/***/ "./img/icons/flags/4.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/4.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/4.svg");

/***/ }),

/***/ "./img/icons/flags/5.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/5.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/5.svg");

/***/ }),

/***/ "./img/icons/flags/6.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/6.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/6.svg");

/***/ }),

/***/ "./img/icons/flags/7.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/7.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/7.svg");

/***/ }),

/***/ "./img/icons/flags/8.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/8.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/8.svg");

/***/ }),

/***/ "./img/icons/flags/9.svg":
/*!*******************************!*\
  !*** ./img/icons/flags/9.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/9.svg");

/***/ }),

/***/ "./img/icons/footer-logo.svg":
/*!***********************************!*\
  !*** ./img/icons/footer-logo.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/footer-logo.svg");

/***/ }),

/***/ "./img/icons/instagram.svg":
/*!*********************************!*\
  !*** ./img/icons/instagram.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/instagram.svg");

/***/ }),

/***/ "./img/icons/logo.svg":
/*!****************************!*\
  !*** ./img/icons/logo.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo.svg");

/***/ }),

/***/ "./img/icons/pinterest.svg":
/*!*********************************!*\
  !*** ./img/icons/pinterest.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/pinterest.svg");

/***/ }),

/***/ "./img/icons/profile.svg":
/*!*******************************!*\
  !*** ./img/icons/profile.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/profile.svg");

/***/ }),

/***/ "./img/icons/quest.svg":
/*!*****************************!*\
  !*** ./img/icons/quest.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/quest.svg");

/***/ }),

/***/ "./img/icons/twitter.svg":
/*!*******************************!*\
  !*** ./img/icons/twitter.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/twitter.svg");

/***/ }),

/***/ "./img/section-info-1.png":
/*!********************************!*\
  !*** ./img/section-info-1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/section-info-1.png");

/***/ }),

/***/ "./img/section-info-2.png":
/*!********************************!*\
  !*** ./img/section-info-2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/section-info-2.png");

/***/ }),

/***/ "./img/section-info-3.png":
/*!********************************!*\
  !*** ./img/section-info-3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/section-info-3.png");

/***/ }),

/***/ "./img/slider-1.png":
/*!**************************!*\
  !*** ./img/slider-1.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-1.png");

/***/ }),

/***/ "./img/slider-2.png":
/*!**************************!*\
  !*** ./img/slider-2.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-2.png");

/***/ }),

/***/ "./img/slider-3.png":
/*!**************************!*\
  !*** ./img/slider-3.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-3.png");

/***/ }),

/***/ "./img/slider-4.png":
/*!**************************!*\
  !*** ./img/slider-4.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-4.png");

/***/ }),

/***/ "./img/sneaker-1.png":
/*!***************************!*\
  !*** ./img/sneaker-1.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sneaker-1.png");

/***/ }),

/***/ "./img/sneaker-2.png":
/*!***************************!*\
  !*** ./img/sneaker-2.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sneaker-2.png");

/***/ }),

/***/ "./img/sneaker-3.png":
/*!***************************!*\
  !*** ./img/sneaker-3.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sneaker-3.png");

/***/ }),

/***/ "./img/sneaker-4.png":
/*!***************************!*\
  !*** ./img/sneaker-4.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sneaker-4.png");

/***/ }),

/***/ "./img/stories-1.png":
/*!***************************!*\
  !*** ./img/stories-1.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/stories-1.png");

/***/ }),

/***/ "./img/stories-2.png":
/*!***************************!*\
  !*** ./img/stories-2.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/stories-2.png");

/***/ }),

/***/ "./img/stories-3.png":
/*!***************************!*\
  !*** ./img/stories-3.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/stories-3.png");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/icons/logo.svg */ "./img/icons/logo.svg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/icons/profile.svg */ "./img/icons/profile.svg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/icons/quest.svg */ "./img/icons/quest.svg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/icons/buy.svg */ "./img/icons/buy.svg");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/article-1.png */ "./img/article-1.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/icons/article-icon-1.svg */ "./img/icons/article-icon-1.svg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/article-2.png */ "./img/article-2.png");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/article-3.png */ "./img/article-3.png");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/icons/article-icon-2.svg */ "./img/icons/article-icon-2.svg");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./img/section-info-1.png */ "./img/section-info-1.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./img/slider-1.png */ "./img/slider-1.png");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./img/slider-2.png */ "./img/slider-2.png");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./img/slider-3.png */ "./img/slider-3.png");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./img/slider-4.png */ "./img/slider-4.png");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ./img/section-info-2.png */ "./img/section-info-2.png");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ./img/sneaker-1.png */ "./img/sneaker-1.png");
var ___HTML_LOADER_IMPORT_16___ = __webpack_require__(/*! ./img/sneaker-2.png */ "./img/sneaker-2.png");
var ___HTML_LOADER_IMPORT_17___ = __webpack_require__(/*! ./img/sneaker-3.png */ "./img/sneaker-3.png");
var ___HTML_LOADER_IMPORT_18___ = __webpack_require__(/*! ./img/sneaker-4.png */ "./img/sneaker-4.png");
var ___HTML_LOADER_IMPORT_19___ = __webpack_require__(/*! ./img/section-info-3.png */ "./img/section-info-3.png");
var ___HTML_LOADER_IMPORT_20___ = __webpack_require__(/*! ./img/stories-1.png */ "./img/stories-1.png");
var ___HTML_LOADER_IMPORT_21___ = __webpack_require__(/*! ./img/stories-2.png */ "./img/stories-2.png");
var ___HTML_LOADER_IMPORT_22___ = __webpack_require__(/*! ./img/stories-3.png */ "./img/stories-3.png");
var ___HTML_LOADER_IMPORT_23___ = __webpack_require__(/*! ./img/icons/instagram.svg */ "./img/icons/instagram.svg");
var ___HTML_LOADER_IMPORT_24___ = __webpack_require__(/*! ./img/icons/twitter.svg */ "./img/icons/twitter.svg");
var ___HTML_LOADER_IMPORT_25___ = __webpack_require__(/*! ./img/icons/facebook.svg */ "./img/icons/facebook.svg");
var ___HTML_LOADER_IMPORT_26___ = __webpack_require__(/*! ./img/icons/pinterest.svg */ "./img/icons/pinterest.svg");
var ___HTML_LOADER_IMPORT_27___ = __webpack_require__(/*! ./img/icons/footer-logo.svg */ "./img/icons/footer-logo.svg");
var ___HTML_LOADER_IMPORT_28___ = __webpack_require__(/*! ./img/icons/flags/1.svg */ "./img/icons/flags/1.svg");
var ___HTML_LOADER_IMPORT_29___ = __webpack_require__(/*! ./img/icons/flags/2.svg */ "./img/icons/flags/2.svg");
var ___HTML_LOADER_IMPORT_30___ = __webpack_require__(/*! ./img/icons/flags/3.svg */ "./img/icons/flags/3.svg");
var ___HTML_LOADER_IMPORT_31___ = __webpack_require__(/*! ./img/icons/flags/4.svg */ "./img/icons/flags/4.svg");
var ___HTML_LOADER_IMPORT_32___ = __webpack_require__(/*! ./img/icons/flags/5.svg */ "./img/icons/flags/5.svg");
var ___HTML_LOADER_IMPORT_33___ = __webpack_require__(/*! ./img/icons/flags/6.svg */ "./img/icons/flags/6.svg");
var ___HTML_LOADER_IMPORT_34___ = __webpack_require__(/*! ./img/icons/flags/7.svg */ "./img/icons/flags/7.svg");
var ___HTML_LOADER_IMPORT_35___ = __webpack_require__(/*! ./img/icons/flags/8.svg */ "./img/icons/flags/8.svg");
var ___HTML_LOADER_IMPORT_36___ = __webpack_require__(/*! ./img/icons/flags/9.svg */ "./img/icons/flags/9.svg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_36___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <!-- HEADER -->\n    <header class='header'>\n        <div class='header__menu'>\n            <a class='header__link display-4' href='#'>man</a>\n            <a class='header__link display-4' href='#'>wooman</a>\n        </div>\n        <a class='header__logo' href=\"#\">\n            <img class='header__logo-img' src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\">\n        </a>\n        <nav class='header__inner'>\n            <div class='header__menu'>\n                <a class='header__link display-4' href='#'>our material</a>\n                <a class='header__link display-4' href='#'>stories</a>\n            </div>\n            <div class='header__icons'>\n                <a class='header__icon' href=\"#\">\n                    <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\">\n                </a>\n                <a class='header__icon' href=\"#\">\n                    <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\">\n                </a>\n                <a id='cart' class='header__icon icon-counter' href=\"#\">\n                    <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"logo\">\n                    <span class='icon-counter__counter display-4'>0</span>\n                </a>\n            </div>\n        </nav>\n        <div class='header__scroll'></div>\n    </header>\n    <!-- HEADER-MOBILE -->\n    <div class='header-mobile'>\n        <a class='header-mobile__logo' href=\"#\">\n            <img class='header-mobile__logo-img' src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\">\n        </a>\n\n        <div class='header-mobile__icons'>\n            <a class='header-mobile__icon' href=\"#\">\n                <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\">\n            </a>\n            <a class='header-mobile__icon' href=\"#\">\n                <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\">\n            </a>\n            <a class='header-mobile__icon icon-counter' href=\"#\">\n                <img class='header__icon-img' src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"logo\">\n                <span class='icon-counter__counter display-4'>0</span>\n            </a>\n            <div id='burger' class='burger'>\n                <span class=\"burger__span\"></span>\n                <span class=\"burger__span\"></span>\n            </div>\n        </div>\n\n        <nav class='header-mobile__nav'>\n            <ul class='header-mobile__list'>\n                <li class='header-mobile__item'>\n                    <a class='header-mobile__link' href='#'>MAN</a>\n                </li>\n                <li class='header-mobile__item'>\n                    <a class='header-mobile__link' href='#'>WOOMAN</a>\n                </li>\n                <li class='header-mobile__item'>\n                    <a class='header-mobile__link' href='#'>our material</a>\n                </li>\n                <li class='header-mobile__item'>\n                    <a class='header-mobile__link' href='#'>stories</a>\n                </li>\n            </ul>\n        </nav>\n\n    </div>\n\n    <!-- MAIN-SCREEN -->\n    <section class='main-screen m-bottom'>\n        <div class='container'>\n            <h1 class='main-screen__title h1'>Running Shoes Made From Trees</h1>\n            <p class='main-screen__subtitle display-2'>New colors to keep you moving</p>\n            <div class='main-screen__buttons buttons-wrap'>\n                <a class='buttons-wrap__btn btn-light' href=\"#\">SHOP MAN</a>\n                <a class='buttons-wrap__btn btn-light' href=\"#\">SHOP WOMAN</a>\n            </div>\n        </div>\n    </section>\n\n    <!-- SECTION-MODULE -->\n    <section class='section-module scroll-trigger'>\n        <div class='container'>\n            <h2 class='section-module__title h2 text-center'>Our Favorites</h2>\n            <!-- TABS -->\n            <div class='tabs'>\n                <div class='tabs__tabs'>\n                    <button class='tabs__tab btn-light section-tabs__tab_active' data-tab=\"#shoes\">shoes</button>\n                    <button class='tabs__tab btn-light' data-tab=\"#apparel\">apparel</button>\n                    <button class='tabs__tab btn-light' data-tab=\"#basics\">basics</button>\n                </div>\n                <div class='tabs__body m-bottom'>\n                    <!-- SHOES -->\n                    <div id='shoes' class='tabs__content tabs__content_active'>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Dasher</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></img>\n                                    <span class='post__span display-3'>Daily Running Shoe</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></img>\n                                    <span class='post__span display-3'>Light and Breezy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Wool Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></img>\n                                    <span class='post__span display-3'>Cozy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                    </div>\n                    <!-- APPAREL -->\n                    <div id='apparel' class='tabs__content'>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></img>\n                                    <span class='post__span display-3'>Light and Breezy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Wool Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></img>\n                                    <span class='post__span display-3'>Cozy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Dasher</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></img>\n                                    <span class='post__span display-3'>Daily Running Shoe</span>\n                                </div>\n                            </div>\n                        </article>\n                    </div>\n                    <!-- BASICS -->\n                    <div id='basics' class='tabs__content'>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></img>\n                                    <span class='post__span display-3'>Light and Breezy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Tree Dasher</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></img>\n                                    <span class='post__span display-3'>Daily Running Shoe</span>\n                                </div>\n                            </div>\n                        </article>\n                        <!-- ARTICLE -->\n                        <article class='post'>\n                            <div class='post__inner'>\n                                <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Кроссовки\">\n                                <a class='post__btn btn-light' href=\"#\">shop man</a>\n                                <a class='post__btn btn-light' href=\"#\">shop woman</a>\n                            </div>\n                            <div class='post__info'>\n                                <strong class='post__name'>Wool Runner</strong>\n                                <div class='post__description'>\n                                    <img class='post__icon' src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></img>\n                                    <span class='post__span display-3'>Cozy Sneaker</span>\n                                </div>\n                            </div>\n                        </article>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    \n    <!-- SECTION-INFO -->\n    <section class='section-info scroll-trigger'>\n        <img class='section-info__mediafile' src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Зелёные кроссовки\">\n        <div class='container'>\n            <div class='section-info__body m-bottom'>\n                <h2 class='section-info__title h2'>Colorful By Nature</h2>\n                <p class='section-info__subtitle display-4'>Merino Wool Shoes In Limited Edition Hues</p>\n                <div class='section-info__buttons buttons-wrap'>\n                    <a class='buttons-wrap__btn btn-dark' href=\"#\">shop man</a>\n                    <a class='buttons-wrap__btn btn-dark' href=\"#\">shop woman</a>\n                </div>\n            </div>\n        </div>\n    </section>\n    \n    <!-- SECTION-SLIDER -->\n    <section class='section-slider scroll-trigger'>\n        <h2 class='section-slider__title h2'>Shop By Category</h2>\n        <div class='section-slider__slider swiper-container m-bottom'>\n            <div class='section-slider__wrapper swiper-wrapper'>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide' data-swiper-autoplay=\"2000\">\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-border'>Men's Shoes</strong>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide' data-swiper-autoplay=\"2000\">\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-border'>Women's Shoes</strong>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide' data-swiper-autoplay=\"2000\">\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-border'>Men's Apparel</strong>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide' data-swiper-autoplay=\"2000\">\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-border'>Women's Apparel</strong>\n                    </div>\n                </a>\n            </div>\n            <!-- <div class='section-slider__navigation'>\n                <div class=\"swiper-button-next\">\n                    <img src=\"img/icons/arrow-right.svg\" alt=\"\">\n                </div>\n                <div class=\"swiper-button-prev\">\n                    <img src=\"img/icons/arrow-right.svg\" alt=\"\">\n                </div>\n            </div> -->\n        </div>\n    </section>\n    \n    <!-- SECTION-INFO -->\n    <section class='section-info scroll-trigger'>\n        <img class='section-info__mediafile' src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Зелёные кроссовки\">\n        <div class='container'>\n            <div class='section-info__body m-bottom'>\n                <h2 class='section-info__title h2'>Made From Nature, For Nature</h2>\n                <p class='section-info__subtitle display-4'>We craft with planet-friendly natural materials, like merino wool and eucalyptus trees,<br/> because they're our best chance for a sustainable future.</p>\n                <a class='section-info__btn btn-dark section-info__btn_wide' href=\"#\">See How</a>\n            </div>\n        </div>\n    </section>\n    \n    <!-- SECTION-SLIDER -->\n    <section class='section-slider scroll-trigger'>\n        <div class='section-slider__slider swiper-container m-bottom'>\n        <h2 class='section-slider__title h2'>New Arrivals</h2>\n            <div class='section-slider__wrapper swiper-wrapper'>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide'>\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-margin post__name_not-border'>Women's Tree Dasher</strong>\n                        <div class='post__description'>\n                            <span class='post__span display-3'>Limited Edition Color, Gaia</span>\n                        </div>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide'>\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-margin post__name_not-border'>Men's Tree Dasher</strong>\n                        <div class='post__description'>\n                            <span class='post__span display-3'>Limited Edition Color, Terra</span>\n                        </div>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide'>\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-margin post__name_not-border'>Women's Tree Runner</strong>\n                        <div class='post__description'>\n                            <span class='post__span display-3'>Limited Edition Color, Aspen</span>\n                        </div>\n                    </div>\n                </a>\n                <!-- POST -->\n                <a href='#' class='post swiper-slide'>\n                    <div class='post__inner'>\n                        <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Кроссовки\">\n                    </div>\n                    <div class='post__info'>\n                        <strong class='post__name post__name_not-margin post__name_not-border'>Men's Tree Runner</strong>\n                        <div class='post__description'>\n                            <span class='post__span display-3'>Classic Color, Mist</span>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </section>\n    \n    <!-- SECTION-INFO -->\n    <section class='section-info scroll-trigger'>\n        <img class='section-info__mediafile' src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Зелёные кроссовки\">\n        <div class='container'>\n            <div class='section-info__body m-bottom'>\n                <h2 class='section-info__title h2'>Tread Lighter</h2>\n                <p class='section-info__subtitle display-4'>The standard sneaker emits 12.5 kg CO2e. Our average shoe emits 7.6 kg CO2e.Better,<br/>  but we want to do more. Our goal—have no carbon footprint from the start. The first<br/> step to reduce our footprint is to measure it. And even though we’re not at zero yet, we<br/> can be. It’s all part of the plan.</p>\n                <a class='section-info__btn btn-dark section-info__btn_wide' href=\"#\">Our Sustainability Approach</a>\n            </div>\n        </div>\n    </section>\n    \n    <!-- SECTION-MODULE -->\n    <section class='section-module scroll-trigger'>\n        <div class='container'>\n            <h2 class='section-module__title h2 text-left'>Stories</h2>\n                <div class='section-module__body m-bottom'>\n                    <!-- POST-->\n                    <a href='#' class='post'>\n                        <div class='post__inner'>\n                            <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Кроссовки\">\n                        </div>\n                        <div class='post__info'>\n                            <strong class='post__name post__name_not-margin post__name_not-border'>Run Hard, Tread Light</strong>\n                            <div class='post__description'>\n                                <span class='post__span display-2'>Meet the Tree Dasher—a performance shoe made with natural materials.</span>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- POST-->\n                    <a href='#' class='post'>\n                        <div class='post__inner'>\n                            <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"Кроссовки\">\n                        </div>\n                        <div class='post__info'>\n                            <strong class='post__name post__name_not-margin post__name_not-border'>Our Doors Are Open</strong>\n                            <div class='post__description'>\n                                <span class='post__span display-3'>The well-being of our retail communities is top priority as our stores re-open around the globe.</span>\n                            </div>\n                        </div>\n                    </a>\n                    <!-- POST-->\n                    <a href='#' class='post'>\n                        <div class='post__inner'>\n                            <img class='post__img img-cover' src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"Кроссовки\">\n                        </div>\n                        <div class='post__info'>\n                            <strong class='post__name post__name_not-margin post__name_not-border'>We're A Certified B Corp</strong>\n                            <div class='post__description'>\n                                <span class='post__span display-3'>From the very beginning, the environment has been a stakeholder here.</span>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n    \n    <!-- FOOTER -->\n    <footer class='footer'>\n        <!-- FORM -->\n        <form class='footer__form'>\n            <span class='footer__form-span display-3'>Enter your email to stay in touch!</span>\n            <div class='footer__form-inner'>\n                <input class='footer__form-input input' type=\"text\" name=\"email\">\n                <button type=\"submit\" class='footer__form-btn btn-gray'>Sign Up</button>\n            </div>\n        </form>\n        <!-- MENU -->\n        <nav class='footer__menu'>\n            <!-- LIST -->\n            <div class='footer__menu-inner'>\n                <strong class='footer-strong display-3'>Help</strong>\n                <ul class='footer__menu-list'>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">1-888-963-8944</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">help@allbirds.com</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Returns/Exchanges</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">FAQ/Contact Us</a>\n                    </li>\n\n                </ul>\n            </div>\n            <!-- LIST -->\n            <div class='footer__menu-inner'>\n                <strong class='footer-strong display-3'>shop</strong>\n                <ul class='footer__menu-list'>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Men's Shoes</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Women's Shoes</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a hhref='#' class=\"footer__menu-link\">Men's Apparel</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Women's Apparel</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Socks</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Gift Cards</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Download the Allbirds App</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- LIST -->\n            <div class='footer__menu-inner'>\n                <strong class='footer-strong display-3'>Company</strong>\n                <ul class='footer__menu-list'>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Our Stores</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Our Story</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Our Materials</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Sustainability</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Partnerships</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Affiliates</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Bulk Orders</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Careers</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">Press</a>\n                    </li>\n                    <li class='footer__menu-item'>\n                        <a href='#' class=\"footer__menu-link\">California Transparency Act</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n        <div class='footer__bottom'>\n            <div class='footer__networks'>\n                <strong class='footer-strong display-3'>Follow the Flock</strong>\n                <p class='footer__description display-4'>Exclusive offers, a heads up on new things, and <br/>sightings of Allbirds in the wild. Oh, we have cute<br/> sheep, too. #weareallbirds\n                </p>\n                <div class='footer__networks-icons'>\n                    <a class='footer__networks-link' href=\"#\">\n                        <img class='footer__networks-icon' src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\n                    </a>\n                    <a class='footer__networks-link' href=\"#\">\n                        <img class='footer__networks-icon' src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\">\n                    </a>\n                    <a class='footer__networks-link' href=\"#\">\n                        <img class='footer__networks-icon' src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\">\n                    </a>\n                    <a class='footer__networks-link' href=\"#\">\n                        <img class='footer__networks-icon' src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n            <a class='footer__logo' href=\"#\">\n                <img class='footer__logo-img' src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"\">\n            </a>\n            <div class='footer__flags'>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" alt=\"\">\n                </a>\n                <a class='footer__flag' href=\"#\">\n                    <img class='footer__flag-img' src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <address class='footer__address display-3 text-center'>© 2021 Allbirds, Inc. All Rights Reserved. Terms. Privacy & Accessibility</address>\n    </footer>\n \n</body>\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./sass/main.sass":
/*!************************!*\
  !*** ./sass/main.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_html-loade-d93230"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map