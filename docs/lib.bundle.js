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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst DEFAULT_CONTROL_POSITION = 'top-right';\n\nclass StyleSwitcherControl {\n\n    constructor(options) {\n        this.styles = (options | {}).styles || [\n            {\n                uri: 'mapbox://styles/mapbox/satellite-streets-v11',\n                title: 'Satellite',\n                className: 'style-satellite'\n            },\n            {\n                uri: 'mapbox://styles/mapbox/streets-v11',\n                title: 'Streets',\n                className: 'style-streets'\n            }\n        ];\n    }\n\n    onAdd(map) {\n        this._map = map;\n\n        this._container = document.createElement('div');\n        this._container.className = 'mapboxgl-ctrl mapbox-ctrl-styles';\n\n        const currentStyle = map.getStyle().sprite.replace('sprites', 'styles');\n\n        const stylesElement = document.createElement('div');\n        stylesElement.className = 'styles';\n        const activeStylesElement = document.createElement('div');\n        activeStylesElement.className = 'styles-current';\n        for (const style of this.styles) {\n            const styleElement = document.createElement('div');\n            styleElement.className = `style-button ${style.className}`;\n            if (currentStyle == style.uri) {\n                activeStylesElement.appendChild(styleElement);\n            } else {\n                stylesElement.appendChild(styleElement);\n            }\n            styleElement.setAttribute('title', style.title);\n            styleElement.setAttribute('data-style-uri', style.uri);\n        }\n        this._container.appendChild(stylesElement);\n        this._container.appendChild(activeStylesElement);\n\n        this.registerDomEvents();\n        return this._container;\n    }\n\n    getDefaultPosition() {\n        return DEFAULT_CONTROL_POSITION;\n    }\n\n    registerDomEvents() {\n        for (const buttonEl of this._container.querySelectorAll('.style-button')) {\n            buttonEl.addEventListener('click', this.onClickStyleButton.bind(this));\n        }\n    }\n\n    onClickStyleButton(e) {\n        const styleUri = e.target.dataset.styleUri;\n        this._map.setStyle(styleUri);\n\n        const stylesElement = this._container.querySelector('div.styles');\n        const activeStylesElement = this._container.querySelector('div.styles-current');\n        for (const buttonEl of this._container.querySelectorAll('.style-button')) {\n            stylesElement.appendChild(buttonEl);\n        }\n        activeStylesElement.appendChild(e.target);\n    }\n\n    onRemove() {\n        this._container.parentNode.removeChild(this._container);\n        this._map = undefined;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleSwitcherControl);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });