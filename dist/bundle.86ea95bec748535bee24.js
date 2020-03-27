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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/func.js":
/*!********************!*\
  !*** ./js/func.js ***!
  \********************/
/*! exports provided: scrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrolling\", function() { return scrolling; });\nfunction scrolling(e) {\r\n    e.preventDefault();\r\n\r\n    const href = this.getAttribute('href').substring(1);\r\n    const allSection = document.querySelectorAll('.section');\r\n    let visibleSection = document.querySelector('.section.visible');\r\n    let firstSection = document.querySelector('.section-greating');\r\n    let nextSection = visibleSection.nextElementSibling;\r\n\r\n    allSection.forEach(elem => elem.classList.remove('visible'));\r\n\r\n    if (href != 'next') {\r\n        let scrollTarget = document.querySelector('[data-anchor^=\"' + href + '\"');\r\n        scrollTarget.classList.add('visible');\r\n    } else {\r\n        if (nextSection != null)\r\n            nextSection.classList.add('visible');\r\n        else \r\n            firstSection.classList.add('visible');\r\n    }\r\n\r\n    ////////////////////for scrolling if one page/////////////////////////////////////////////\r\n\r\n    //const topOffset = document.querySelector('.scrollto').offsetHeight;\r\n    // const topOffset = 0; // если не нужен отступ сверху \r\n    // const elementPosition = scrollTarget.getBoundingClientRect().top;\r\n    // const offsetPosition = elementPosition - topOffset;\r\n\r\n    // window.scrollBy({\r\n    //     top: offsetPosition,\r\n    //     behavior: 'smooth'\r\n    // })\r\n}\n\n//# sourceURL=webpack:///./js/func.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func.js */ \"./js/func.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n// import '../css/app.css';\r\n\r\n\r\ndocument.querySelectorAll('a[href^=\"#\"').forEach(link => {\r\n    link.addEventListener('click', _func_js__WEBPACK_IMPORTED_MODULE_0__[\"scrolling\"]);\r\n});\r\n\r\ndocument.querySelectorAll('.article__img').forEach(img => {\r\n    img.addEventListener('mouseover', () => {\r\n        console.log(undefined);\r\n        undefined.classList.add('img_hover');\r\n    });\r\n    img.addEventListener('mouseout', function(e) {\r\n        this.classList.remove('img_hover');\r\n    });\r\n});\r\n\r\n// let btnRoad = document.querySelector('.btn_road');\r\n// console.log(btnRoad)\r\n// btnRoad.addEventListener('click', function() {\r\n//     let visibleSection = document.querySelector('.section.visible');\r\n//     let nextSection = visibleSection.nextElementSibling;\r\n//     let firstSection = document.querySelector('.section-greating');\r\n\r\n//     visibleSection.classList.remove('visible');\r\n//     if (nextSection != null)\r\n//         nextSection.classList.add('visible');\r\n//     else \r\n//         firstSection.classList.add('visible');\r\n// })\r\n\r\nconst wrapper = document.querySelector(\".article-greating\");\r\nlet text = document.querySelector(\".article__paragraph\");\r\nlet textCont = text.textContent;\r\ntext.style.display = \"none\";\r\n\r\nfor (let i = 0; i < textCont.length; i++) {\r\n    setTimeout(() => {\r\n        // Created textNode to append\r\n        let texts = document.createTextNode(textCont[i])\r\n        let span = document.createElement('span');\r\n        span.appendChild(texts);\r\n  \r\n        span.classList.add('text__color');\r\n        wrapper.appendChild(span);\r\n      }, 75 * i);\r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });