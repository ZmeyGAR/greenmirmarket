/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#greenmirmarket/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#greenmirmarket/#DevSource/scripts/main.js":
/*!*****************************************************!*\
  !*** ../#greenmirmarket/#DevSource/scripts/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction DynamicAdapt(type) {\n  this.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n  var _this2 = this;\n\n  var _this = this; // массив объектов\n\n\n  this.оbjects = [];\n  this.daClassname = \"_dynamic_adapt_\"; // массив DOM-элементов\n\n  this.nodes = document.querySelectorAll(\"[data-da]\"); // наполнение оbjects объктами\n\n  for (var i = 0; i < this.nodes.length; i++) {\n    var node = this.nodes[i];\n    var data = node.dataset.da.trim();\n    var dataArray = data.split(\",\");\n    var оbject = {};\n    оbject.element = node;\n    оbject.parent = node.parentNode;\n    оbject.destination = document.querySelector(dataArray[0].trim());\n    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n    оbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n    оbject.index = this.indexInParent(оbject.parent, оbject.element);\n    this.оbjects.push(оbject);\n  }\n\n  this.arraySort(this.оbjects); // массив уникальных медиа-запросов\n\n  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n    return '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n  }, this);\n  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n    return Array.prototype.indexOf.call(self, item) === index;\n  }); // навешивание слушателя на медиа-запрос\n  // и вызов обработчика при первом запуске\n\n  var _loop = function _loop(_i) {\n    var media = _this2.mediaQueries[_i];\n    var mediaSplit = String.prototype.split.call(media, ',');\n    var matchMedia = window.matchMedia(mediaSplit[0]);\n    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом\n\n    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {\n      return item.breakpoint === mediaBreakpoint;\n    });\n    matchMedia.addListener(function () {\n      _this.mediaHandler(matchMedia, оbjectsFilter);\n    });\n\n    _this2.mediaHandler(matchMedia, оbjectsFilter);\n  };\n\n  for (var _i = 0; _i < this.mediaQueries.length; _i++) {\n    _loop(_i);\n  }\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n  if (matchMedia.matches) {\n    for (var i = 0; i < оbjects.length; i++) {\n      var оbject = оbjects[i];\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\n      this.moveTo(оbject.place, оbject.element, оbject.destination);\n    }\n  } else {\n    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {\n      var _оbject = оbjects[_i2];\n\n      if (_оbject.element.classList.contains(this.daClassname)) {\n        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);\n      }\n    }\n  }\n}; // Функция перемещения\n\n\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n  element.classList.add(this.daClassname);\n\n  if (place === 'last' || place >= destination.children.length) {\n    destination.insertAdjacentElement('beforeend', element);\n    return;\n  }\n\n  if (place === 'first') {\n    destination.insertAdjacentElement('afterbegin', element);\n    return;\n  }\n\n  destination.children[place].insertAdjacentElement('beforebegin', element);\n}; // Функция возврата\n\n\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n  element.classList.remove(this.daClassname);\n\n  if (parent.children[index] !== undefined) {\n    parent.children[index].insertAdjacentElement('beforebegin', element);\n  } else {\n    parent.insertAdjacentElement('beforeend', element);\n  }\n}; // Функция получения индекса внутри родителя\n\n\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n  var array = Array.prototype.slice.call(parent.children);\n  return Array.prototype.indexOf.call(array, element);\n}; // Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\n\n\nDynamicAdapt.prototype.arraySort = function (arr) {\n  if (this.type === \"min\") {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return -1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return 1;\n        }\n\n        return a.place - b.place;\n      }\n\n      return a.breakpoint - b.breakpoint;\n    });\n  } else {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return 1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return -1;\n        }\n\n        return b.place - a.place;\n      }\n\n      return b.breakpoint - a.breakpoint;\n    });\n    return;\n  }\n};\n\nvar Search = /*#__PURE__*/function () {\n  function Search(selector) {\n    _classCallCheck(this, Search);\n\n    this.selector = selector;\n    this.$search = document.querySelector(selector);\n    this.$input = this.$search.querySelector(this.selector + '__input');\n    this.$placeholder = this.$search.querySelector(this.selector + '__placeholder');\n    this.$btn = this.$search.querySelector(this.selector + '__btn');\n  }\n\n  _createClass(Search, [{\n    key: \"init\",\n    value: function init() {\n      this.$input.addEventListener('input', this.inputHandler.bind(this));\n    }\n  }, {\n    key: \"inputHandler\",\n    value: function inputHandler(e) {\n      if (!this.$input.value.trim()) {\n        this.$placeholder.textContent = this.$placeholder.dataset.placeholder;\n        return;\n      }\n\n      this.$placeholder.textContent = '';\n    }\n  }]);\n\n  return Search;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // swiper.init\n  var banner = new Swiper('.swiper.banner', {\n    speed: 1000,\n    spaceBetween: 100,\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true\n    },\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true\n  });\n  var recomendedSlider = new Swiper('.recomended-slider', {\n    slidesPerView: 3,\n    speed: 1000,\n    spaceBetween: 40,\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    // autoHeight: true,\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true\n    },\n    navigation: {\n      nextEl: '.recomended-slider__navigation .button-next',\n      prevEl: '.recomended-slider__navigation .button-prev'\n    },\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true,\n    centeredSlides: true,\n    breakpoints: {\n      320: {\n        slidesPerView: 1.1,\n        spaceBetween: 0\n      },\n      480: {\n        slidesPerView: 2.2,\n        spaceBetween: 10\n      },\n      1024: {\n        slidesPerView: 3,\n        spaceBetween: 40\n      }\n    }\n  });\n  var articleSlider = new Swiper('.article-slider', {\n    slidesPerView: 1.6,\n    speed: 1000,\n    spaceBetween: 40,\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    // autoHeight: true,\n    effect: 'creative',\n    creativeEffect: {\n      prev: {\n        translate: ['-40%', 0, 0],\n        scale: 0.8\n      },\n      next: {\n        translate: ['43%', 0, 0],\n        scale: 0.8\n      }\n    },\n    slideToClickedSlide: true,\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true\n    },\n    navigation: {\n      nextEl: '.article .article-slider__navigation .button-next',\n      prevEl: '.article .article-slider__navigation .button-prev'\n    },\n    breakpoints: {\n      320: {\n        slidesPerView: 1,\n        spaceBetween: 0\n      },\n      569: {\n        slidesPerView: 1.6,\n        spaceBetween: 10\n      },\n      1024: {\n        slidesPerView: 1.6,\n        spaceBetween: 40\n      }\n    },\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true,\n    centeredSlides: true\n  });\n  var bestSellerProductSlider = new Swiper('.best-seller-product-slider', {\n    slidesPerView: 2,\n    speed: 1000,\n    grid: {\n      rows: 2,\n      fill: 'row'\n    },\n    spaceBetween: 0,\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true\n    },\n    breakpoints: {\n      320: {\n        slidesPerView: 1.3,\n        spaceBetween: 0\n      },\n      425: {\n        slidesPerView: 2,\n        spaceBetween: 0\n      },\n      570: {\n        slidesPerView: 1,\n        spaceBetween: 0\n      },\n      768: {\n        slidesPerView: 2,\n        spaceBetween: 0\n      }\n    },\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true\n  });\n  var productThumbsSlider = new Swiper('.product__galery--thumb-slider .swiper', {\n    slidesPerView: 2,\n    speed: 1000,\n    spaceBetween: 10,\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true,\n    navigation: {\n      nextEl: '.product__galery--thumb-slider .swiper__navigation .button-next'\n    }\n  });\n  var productMainSlider = new Swiper('.product__galery--main-slider', {\n    slidesPerView: 1,\n    speed: 1000,\n    spaceBetween: 10,\n    updateOnWindowResize: true,\n    watchSlidesProgress: true,\n    preventInteractionOnTransition: true,\n    watchOverflow: true,\n    watchSlidesVisibility: true,\n    passiveListeners: true,\n    // Enable lazy loading\n    preloadImages: false,\n    lazy: true,\n    thumbs: {\n      swiper: productThumbsSlider\n    }\n  }); // swiper.init\n  // map frame только для компьютеров\n\n  var mapFrame = document.querySelector('iframe#mapFrame');\n\n  if (mapFrame && window.innerWidth >= 768) {\n    mapFrame.src = mapFrame.dataset.src;\n  } // map frame только для компьютеров\n\n\n  VanillaTilt.init(document.querySelectorAll(\"*[data-tilt]\"), {\n    reverse: true,\n    // reverse the tilt direction\n    max: 10,\n    // max tilt rotation (degrees)\n    perspective: 1000,\n    // Transform perspective, the lower the more extreme the tilt gets.\n    scale: 1,\n    // 2 = 200%, 1.5 = 150%, etc..\n    speed: 300,\n    // Speed of the enter/exit transition\n    transition: true,\n    // Set a transition on enter/exit.\n    axis: null,\n    // What axis should be disabled. Can be X or Y.\n    reset: false,\n    // If the tilt effect has to be reset on exit.\n    easing: \"cubic-bezier(.03,.98,.52,.99)\",\n    // Easing on enter/exit.\n    gyroscope: true,\n    // Boolean to enable/disable device orientation detection,\n    gyroscopeMinAngleX: -45,\n    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;\n    gyroscopeMaxAngleX: 45,\n    // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;\n    gyroscopeMinAngleY: -45,\n    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;\n    gyroscopeMaxAngleY: 45\n  });\n  new Search('.search').init();\n  new DynamicAdapt('max').init();\n});\nwindow.addEventListener('load', function () {\n  var preloaderPage = document.querySelector('.preload-page');\n  var preloader = preloaderPage.querySelector('.preloader');\n  preloader.classList.add('__ok');\n  setTimeout(function () {\n    return preloaderPage.classList.add('__ok');\n  }, 1000);\n  setTimeout(function () {\n    return preloaderPage.remove();\n  }, 3000);\n});\n\n//# sourceURL=webpack:///../#greenmirmarket/#DevSource/scripts/main.js?");

/***/ })

/******/ });