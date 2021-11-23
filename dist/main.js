/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeCarousel)\n/* harmony export */ });\nconst template = `\n<div class=\"carousel\">\n  <nav>\n    <div class=\"carouselArrow carouselLeftArrow\">&larr;</div>\n    <div class=\"carouselIndicators\"></div>\n    <div class=\"carouselArrow carouselRightArrow\">&#8594;</div>\n  </nav>\n  <img class=\"carouselImage\">\n  <p class=\"carouselDescription\">\n</div>\n`;\n\nconst FILLED_CIRCLE = '&#9673;';\nconst EMPTY_CIRCLE = '&#9678;';\n\n//Data format\n//[ {url,caption,description} ]\nfunction makeCarousel(data) {\n  const sleepTime = 5000;\n  const MAX_FRAME = data.length-1;\n  let currentFrame = 0;\n  let looping = true;\n\n  const forwardFrame = () => {\n    moveFrame(1);\n    looping = false;\n  };\n\n  const backFrame = () => {\n    moveFrame(-1);\n    looping = false;\n  };\n\n  const moveFrame = (i) => {\n    currentFrame += i;\n    if(currentFrame > MAX_FRAME) {\n      currentFrame = 0;\n    } else if (currentFrame < 0) {\n      currentFrame = MAX_FRAME;\n    }\n    setCurrentFrameData();\n  };\n\n  const setCurrentFrameData = () => {\n    const {url,caption,description} = data[currentFrame];\n    //Set indicator\n    for(let i of indicators.childNodes.keys()) {\n      if(i === currentFrame) {\n        indicators.childNodes[i].innerHTML = FILLED_CIRCLE;\n      } else {\n        indicators.childNodes[i].innerHTML = EMPTY_CIRCLE;\n      }\n    }\n    //Set image\n    imageElement.src = url;\n    imageElement.caption = caption;\n    //Set description\n    descriptionElement.innerText = description;\n  };\n\n  const populateIndicators = () => {\n    let indicatorText = '';\n    for(const i in data) {\n      indicatorText += `<div class=\"carouselIndicator\">${EMPTY_CIRCLE}</div>`;\n    }\n    indicators.innerHTML = indicatorText;\n  };\n\n  const timer = () => {\n    if(looping) {\n      moveFrame(1);\n      setTimeout(timer, sleepTime);\n    }\n  };\n\n  const carousel = document.createElement('div');\n  carousel.innerHTML = template;\n\n  const lArrow = carousel.querySelector('.carouselLeftArrow');\n  const rArrow = carousel.querySelector('.carouselRightArrow');\n  const indicators = carousel.querySelector('.carouselIndicators');\n  const imageElement = carousel.querySelector('.carouselImage');\n  const descriptionElement = carousel.querySelector('.carouselDescription');\n\n  populateIndicators();\n  setCurrentFrameData();\n  setTimeout(timer, sleepTime);\n\n  lArrow.addEventListener('click', backFrame);\n  rArrow.addEventListener('click', forwardFrame);\n\n  return carousel;\n}\n\n//# sourceURL=webpack://restaurant/./src/carousel.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeContactPage)\n/* harmony export */ });\nfunction makeContactPage() {\n  const contact = document.createElement('div');\n  contact.innerHTML = `<p>This is the contact page</p>`;\n\n  return contact;\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeFooter)\n/* harmony export */ });\nfunction makeFooter() {\n  const footer = document.createElement('footer');\n  const ghImgSrc = \"../node_modules/super-tiny-icons/images/svg/github.svg\";\n  footer.innerHTML = `<p>&copy 2021 Joshua Cahoon</p>`;\n  footer.innerHTML += `<a href=\"https://github.com/trimagnus\"><img width=\"20px\" height=\"20px\" class=\"ghIcon\" src=\"${ghImgSrc}\"></img></a>`\n  return footer;\n}\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHeader)\n/* harmony export */ });\nfunction makeHeader() {\n  const header = document.createElement('header');\n  header.innerHTML = `\n  <h1>Restaurant</h1>\n  <nav>\n    <div id=\"homeButton\"><a class=\"navLink selectedNav\" href=\"#\">Home</a></div>\n    <div id=\"menuButton\"><a class=\"navLink\" href=\"#\">Menu</a></div>\n    <div id=\"contactButton\"><a class=\"navLink\" href=\"#\">Contact</a></div>\n  </nav>\n  `;\n\n  return header;\n}\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHomePage)\n/* harmony export */ });\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n\n\nfunction makeHomePage() {\n  const home = document.createElement('div');\n  let homePageText = '';\n\n  homePageText += `<h2 class=\"homeHeader\">The best food and atmosphere on the planet!</h2>`;\n\n  const imageData = [\n    { url: \"./img/alexander-schimmeck-6bykmLxy-3Y-unsplash.jpg\",\n      caption: \"A bunch of fresh vegetables.\",\n      description: \"We use seasonal vegetables along with a hand selection of locally sourced meat and fish.\"},\n    { url: \"./img/mick-haupt-Spjvmx7MJGs-unsplash.jpg\",\n      caption: \"A brick gateway.\",\n      description: \"Come and enjoy the atmosphere while gazing upon the breathtaking views of the valley.\"},\n    { url: \"./img/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg\",\n      caption: \"A smiling woman who is eating.\",\n      description: \"We treat our guests like family here at Restaurant.\"},\n  ];\n\n  home.innerHTML = homePageText;\n  home.appendChild((0,_carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imageData));\n  return home;\n}\n\n\n//We use a variety of fresh seasonal fruits and vegetables as well as locally sourced meats.\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst main = document.createElement('main');\n\ncontent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\ncontent.appendChild(main);\nmain.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\nconst homeClicked = (e) => {\n  clearAndSet(e.target);\n  main.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\nconst menuClicked = (e) => {\n  clearAndSet(e.target);\n  main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\nconst contactClicked = (e) => {\n  clearAndSet(e.target);\n  main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\nconst clearMain = () => {\n  while(main.firstChild) {\n    main.removeChild(main.firstChild);\n  }\n}\n\nconst setCurrentTab = (target) => {\n  for(const node of document.getElementsByClassName('navLink')) {\n    node.classList.remove('selectedNav');\n  }\n  target.classList.add('selectedNav');\n};\n\nconst clearAndSet = (target) => {\n  clearMain();\n  setCurrentTab(target);\n};\n\ndocument.querySelector('#homeButton').addEventListener('click', homeClicked);\ndocument.querySelector('#menuButton').addEventListener('click', menuClicked);\ndocument.querySelector('#contactButton').addEventListener('click', contactClicked);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeMenuPage)\n/* harmony export */ });\nconst menuData = {\n  Appetizers: [\n    {title: 'Egg Rolls',\n    description: 'Hot and fresh egg rolls.',\n    price: '$5'},\n    {title: 'Egg Rolls',\n    description: 'Hot and fresh egg rolls.',\n    price: '$5'}\n  ],\n  Dinners: [\n    {title: 'Chicken Parmesean',\n    description: 'Juicy breaded chicken topped with grandma\\'s home made sauce and gooey mozzella.',\n    price: '$15'},\n    {title: 'Chicken Parmesean',\n    description: 'Juicy breaded chicken topped with grandma\\'s home made sauce and gooey mozzella.',\n    price: '$15'},\n  ],\n  Desserts: [\n    {title: 'Tiramisu',\n    description: 'Espresso soaked lady fingers topped with mascapone whip and cocoa powder.',\n    price: '$12'},\n    {title: 'Tiramisu',\n    description: 'Espresso soaked lady fingers topped with mascapone whip and cocoa powder.',\n    price: '$12'},\n  ],\n  Drinks: [\n    {title: 'Soft Drinks',\n    description: 'Enjoy our selection of any conceivable fountain drink.',\n    price: '$4'},\n    {title: 'Soft Drinks',\n    description: 'Enjoy our selection of any conceivable fountain drink.',\n    price: '$4'},\n  ]\n};\n\nfunction makeMenuPage() {\n  const menu = document.createElement('div');\n\n  //.menuItemCard\n  //  .menuItemTitle .menuItemPrice\n  //  .menuItemDescription\n  let finishedMenu = '';\n\n  for(const menuCatagory of Object.keys(menuData)){\n    finishedMenu += `<h2 class=\"menuSectionHeader\">${menuCatagory}</h2>`;\n\n    let menuSection = '<div class=\"menuSection\">'\n    for(const item of menuData[menuCatagory]) {\n      menuSection += `<div class=\"menuCard\">\n        <p class=\"menuItemTitle\">${item.title} | ${item.price}</p>\n        <p class=\"menuItemDescription\"><em>${item.description}</em></p>\n      </div>`;\n    }\n    menuSection += '</div>'\n    finishedMenu += menuSection;\n  }\n\n  menu.innerHTML = finishedMenu;\n  return menu;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;