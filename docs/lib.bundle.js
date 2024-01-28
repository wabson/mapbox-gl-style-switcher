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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@wabson/mapbox-gl-style-switcher/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst DEFAULT_CONTROL_POSITION = 'top-right';\n\nclass StyleSwitcherControl {\n\n    constructor(options) {\n        this.styles = (options | {}).styles || [\n            {\n                uri: 'mapbox://styles/mapbox/satellite-streets-v11',\n                title: 'Satellite',\n                className: 'style-satellite'\n            },\n            {\n                uri: 'mapbox://styles/mapbox/streets-v11',\n                title: 'Streets',\n                className: 'style-streets'\n            }\n        ];\n    }\n\n    onAdd(map) {\n        this._map = map;\n\n        this._container = document.createElement('div');\n        this._container.className = 'mapboxgl-ctrl mapbox-ctrl-styles';\n\n        const currentStyle = map.getStyle().sprite.replace('sprites', 'styles');\n\n        const stylesElement = document.createElement('div');\n        stylesElement.className = 'styles';\n        const activeStylesElement = document.createElement('div');\n        activeStylesElement.className = 'styles-current';\n        for (const style of this.styles) {\n            const styleElement = document.createElement('div');\n            styleElement.className = `style-button ${style.className}`;\n            if (currentStyle == style.uri) {\n                activeStylesElement.appendChild(styleElement);\n            } else {\n                stylesElement.appendChild(styleElement);\n            }\n            styleElement.setAttribute('title', style.title);\n            styleElement.setAttribute('data-style-uri', style.uri);\n        }\n        this._container.appendChild(stylesElement);\n        this._container.appendChild(activeStylesElement);\n\n        this.registerDomEvents();\n        return this._container;\n    }\n\n    getDefaultPosition() {\n        return DEFAULT_CONTROL_POSITION;\n    }\n\n    registerDomEvents() {\n        for (const buttonEl of this._container.querySelectorAll('.style-button')) {\n            buttonEl.addEventListener('click', this.onClickStyleButton.bind(this));\n        }\n    }\n\n    onClickStyleButton(e) {\n        const styleUri = e.target.dataset.styleUri;\n        this._map.setStyle(styleUri);\n\n        const stylesElement = this._container.querySelector('div.styles');\n        const activeStylesElement = this._container.querySelector('div.styles-current');\n        for (const buttonEl of this._container.querySelectorAll('.style-button')) {\n            stylesElement.appendChild(buttonEl);\n        }\n        activeStylesElement.appendChild(e.target);\n    }\n\n    onRemove() {\n        this._container.parentNode.removeChild(this._container);\n        this._map = undefined;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSwitcherControl);\n\n//# sourceURL=webpack://@wabson/mapbox-gl-style-switcher/./src/index.js?");

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