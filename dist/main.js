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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./main.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header {\\n  background: -webkit-linear-gradient(bottom, #191E4E, #394077);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 1.6rem 0;\\n  color: #c2c5da;\\n  font-size: 2.5rem;\\n  text-align: center; }\\n  .header__nav {\\n    list-style-type: none; }\\n  .header__nav-items {\\n    height: 5rem;\\n    line-height: 5rem; }\\n  .header__items:nth-child(2) .header__nav-items {\\n    margin: 2rem auto; }\\n  .header__nav-items--active, .header__nav-items:hover {\\n    cursor: pointer;\\n    border-left: 0.4rem solid #5963b6;\\n    background-color: #3a4172;\\n    color: #fff; }\\n  @media screen and (max-width: 849px) {\\n    .header {\\n      background: #22264e;\\n      z-index: 1000;\\n      flex-direction: row;\\n      justify-content: space-evenly;\\n      position: fixed;\\n      width: 100%;\\n      padding: 0;\\n      height: 5rem;\\n      box-shadow: 0 .05rem .5rem .02rem #111; }\\n      .header__items {\\n        width: 100%;\\n        line-height: 5rem; }\\n      .header__items:nth-child(2n-1) {\\n        display: none; }\\n      .header__items, .header__nav-items {\\n        background: none;\\n        display: inline; }\\n      .header__nav {\\n        height: 0; }\\n      .header__nav-items {\\n        padding: 0 5%; }\\n        .header__nav-items:hover {\\n          background-color: transparent; }\\n      .header__nav-items--active, .header__nav-items:hover {\\n        border-left: none;\\n        background-color: none; } }\\n\\n.section_main {\\n  display: flex;\\n  flex-direction: column;\\n  overflow: hidden;\\n  background: -webkit-linear-gradient(bottom, #22264e, #3b4576);\\n  box-shadow: 0px 0px 0.5rem #1c2247;\\n  z-index: 100; }\\n  .section_main > div {\\n    padding: 0 3rem; }\\n    .section_main > div:last-child {\\n      padding: 0; }\\n  .section_main .select-stats__area {\\n    height: 27%;\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(3, 1fr);\\n    grid-gap: 3rem; }\\n    .section_main .select-stats__area .select-stats__btn-cards {\\n      font-size: .8rem;\\n      cursor: pointer;\\n      border-radius: 0% 0% 1.5rem 1.5rem;\\n      background-color: #333b6a;\\n      grid-row-start: 1;\\n      grid-row-end: 3; }\\n      .section_main .select-stats__area .select-stats__btn-cards:hover {\\n        background-color: #5963b6;\\n        margin: -.4rem -.4rem; }\\n      .section_main .select-stats__area .select-stats__btn-cards--active, .section_main .select-stats__area .select-stats__btn-cards--active:hover {\\n        font-size: 1.3rem;\\n        margin: 0 -1rem;\\n        grid-row-end: 4;\\n        background-color: #5963b6; }\\n        .section_main .select-stats__area .select-stats__btn-cards--active .select-stats__card-top > p, .section_main .select-stats__area .select-stats__btn-cards--active:hover .select-stats__card-top > p {\\n          color: #fff;\\n          font-size: 1rem; }\\n    .section_main .select-stats__area .select-stats__card-top {\\n      padding: 1.5rem 0 0 2rem; }\\n      .section_main .select-stats__area .select-stats__card-top h1 {\\n        letter-spacing: .2rem; }\\n      .section_main .select-stats__area .select-stats__card-top p {\\n        color: #c2c5da;\\n        font-size: .8rem; }\\n    .section_main .select-stats__area .select-stats__card-bottom {\\n      padding: 1.5rem 0 0 2rem; }\\n      .section_main .select-stats__area .select-stats__card-bottom p {\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        letter-spacing: .1rem; }\\n    @media (min-width: 850px) and (max-width: 1023px) {\\n      .section_main .select-stats__area .select-stats__card-top {\\n        padding-left: .5rem;\\n        padding-right: .5rem;\\n        letter-spacing: 0; } }\\n    @media screen and (max-width: 849px) {\\n      .section_main .select-stats__area {\\n        margin-bottom: 2rem; }\\n        .section_main .select-stats__area .select-stats__btn-cards {\\n          height: 10rem;\\n          width: 35vw;\\n          display: inline-block;\\n          font-size: .8rem;\\n          border-radius: .8rem; }\\n          .section_main .select-stats__area .select-stats__btn-cards:hover {\\n            border-radius: .8rem;\\n            font-size: 1rem;\\n            margin: 0; }\\n        .section_main .select-stats__area .select-stats__btn-cards--active {\\n          margin: 0;\\n          background-color: #333b6a; }\\n          .section_main .select-stats__area .select-stats__btn-cards--active .select-stats__card-top p, .section_main .select-stats__area .select-stats__btn-cards--active:hover .select-stats__card-top p {\\n            color: #c2c5da;\\n            font-size: .8rem; }\\n        .section_main .select-stats__area .select-stats__card-top h1, .section_main .select-stats__area .select-stats__card-top h1 {\\n          letter-spacing: .2rem; }\\n        .section_main .select-stats__area .select-stats__card-top p, .section_main .select-stats__area .select-stats__card-top p {\\n          color: #c2c5da;\\n          font-size: .8rem; } }\\n  .section_main .preview-stats__area:nth-child(2) {\\n    height: 55%; }\\n  .section_main .preview-stats__header {\\n    padding-top: 3rem;\\n    color: #c2c5da;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between; }\\n  .section_main .preview-stats__title {\\n    width: 50%; }\\n    .section_main .preview-stats__title p {\\n      letter-spacing: .08rem; }\\n      .section_main .preview-stats__title p i {\\n        font-size: 1.5rem; }\\n  .section_main .preview-stats__controls {\\n    align-self: center; }\\n  .section_main .preview-stats__nav {\\n    list-style: none; }\\n  .section_main .preview-stats__items {\\n    display: inline-block;\\n    padding: 0 1rem;\\n    height: 2.5rem;\\n    line-height: 2.2rem; }\\n    .section_main .preview-stats__items--active {\\n      color: #fff;\\n      border: .12rem solid #fff;\\n      border-radius: .5rem; }\\n  .section_main .preview-stats__btn {\\n    width: 15rem;\\n    height: 4rem;\\n    align-self: center; }\\n  .section_main button.btn {\\n    background-color: #6b75ca;\\n    font-size: 1rem;\\n    letter-spacing: .1rem;\\n    color: #fff;\\n    width: 100%;\\n    height: 100%;\\n    border: none;\\n    border-radius: .8rem;\\n    cursor: pointer;\\n    white-space: nowrap; }\\n    .section_main button.btn i::before {\\n      -webkit-transform: scale(1.6); }\\n    .section_main button.btn--red {\\n      background-color: #e74c3c; }\\n    .section_main button.btn:hover {\\n      -webkit-filter: brightness(90%); }\\n    @media (min-width: 850px) and (max-width: 1023px) {\\n      .section_main button.btn {\\n        font-size: .8rem;\\n        width: 80%;\\n        float: right; } }\\n    @media screen and (max-width: 849px) {\\n      .section_main button.btn {\\n        width: 50%;\\n        float: right; } }\\n  .section_main .preview-stats__graph-wrapper {\\n    height: calc(100% - 8rem); }\\n  .section_main .preview-stats__graph {\\n    width: 100%;\\n    height: 100%;\\n    align-self: center; }\\n  @media (min-width: 850px) and (max-width: 1023px) {\\n    .section_main .preview-stats__title h2 {\\n      font-size: 1.5rem; }\\n    .section_main .preview-stats__items {\\n      padding: 0 .2rem; } }\\n  @media screen and (max-width: 849px) {\\n    .section_main .preview-stats__header {\\n      padding-top: 0;\\n      margin-bottom: 1rem; }\\n    .section_main .preview-stats__controls {\\n      align-self: flex-start; }\\n    .section_main .preview-stats__nav {\\n      margin-top: 1rem;\\n      position: absolute;\\n      background-color: #333b6a;\\n      border-radius: .8rem; }\\n      .section_main .preview-stats__nav:active, .section_main .preview-stats__nav:hover {\\n        box-shadow: 0.1rem 0.1rem 0.3rem #1c2247; }\\n        .section_main .preview-stats__nav:active .preview-stats__items, .section_main .preview-stats__nav:hover .preview-stats__items {\\n          display: block; }\\n    .section_main .preview-stats__items {\\n      display: none; }\\n      .section_main .preview-stats__items:hover {\\n        color: #fff;\\n        border: .12rem solid #fff;\\n        border-radius: .5rem; }\\n      .section_main .preview-stats__items--active {\\n        display: block; } }\\n  .section_main .card-results {\\n    height: 15rem; }\\n    .section_main .card-results__scroller {\\n      overflow: hidden;\\n      white-space: nowrap;\\n      padding-left: 3rem; }\\n      .section_main .card-results__scroller:hover {\\n        overflow-x: scroll; }\\n    .section_main .card-results__card {\\n      width: 22rem;\\n      height: 12rem;\\n      display: inline-block;\\n      flex-direction: column;\\n      justify-content: space-evenly;\\n      border-radius: 2rem;\\n      background-color: rgba(58, 65, 114, 0.4); }\\n      .section_main .card-results__card:nth-child(1n+2) {\\n        margin-left: 3rem; }\\n      .section_main .card-results__card > div {\\n        height: 50%; }\\n    .section_main .card-results__top {\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: space-around;\\n      align-items: center;\\n      padding: 1rem 0 0 .4rem; }\\n      .section_main .card-results__top h2 {\\n        font-size: 1.2rem; }\\n    .section_main .card-results__top-section {\\n      width: 100%;\\n      height: 100%;\\n      text-align: center; }\\n      .section_main .card-results__top-section > img {\\n        width: 2.5rem;\\n        height: 2.5rem;\\n        margin-top: 5%; }\\n    .section_main .card-results__bottom {\\n      padding: 1rem 0 0 2.5rem; }\\n    .section_main .card-results__bottom-item {\\n      display: inline-block; }\\n      .section_main .card-results__bottom-item h1 {\\n        letter-spacing: .2rem; }\\n    @media (min-width: 850px) and (max-width: 1023px) {\\n      .section_main .card-results__card {\\n        width: 18rem; }\\n      .section_main .card-results__top {\\n        padding: .8rem 0 0 .2rem; }\\n        .section_main .card-results__top h2 {\\n          font-size: 1rem; } }\\n    @media screen and (max-width: 849px) {\\n      .section_main .card-results__card {\\n        width: 45vw;\\n        margin: 1rem 0rem !important;\\n        border-radius: 1rem; }\\n      .section_main .card-results__top {\\n        padding: .7rem 0 0 .2rem; }\\n        .section_main .card-results__top h2 {\\n          font-size: .8rem; }\\n      .section_main .card-results__bottom-item h1 {\\n        font-size: 1.2rem; } }\\n    @media screen and (max-width: 849px) {\\n      .section_main .card-results {\\n        height: 30rem; }\\n        .section_main .card-results__scroller:hover, .section_main .card-results__scroller {\\n          overflow-x: hidden;\\n          display: flex;\\n          flex-wrap: wrap;\\n          justify-content: space-between;\\n          padding: 0 1rem; } }\\n  @media screen and (max-width: 849px) {\\n    .section_main {\\n      background: none;\\n      box-shadow: none;\\n      padding-top: 6rem; }\\n      .section_main .select-stats__area {\\n        height: 16vh;\\n        overflow-x: hidden;\\n        grid-gap: 1rem; }\\n        .section_main .select-stats__area:hover {\\n          overflow-x: scroll; }\\n      .section_main > div {\\n        padding: 0 1rem; } }\\n\\n.side-panel {\\n  background: -webkit-linear-gradient(bottom, #191E4E, #394077);\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0 3rem; }\\n  .side-panel > div {\\n    height: 50%;\\n    overflow: hidden; }\\n  .side-panel__head {\\n    display: flex;\\n    justify-content: space-between;\\n    padding-top: 3rem;\\n    padding-left: .1rem;\\n    text-align: center; }\\n    .side-panel__head i {\\n      width: 2rem;\\n      height: 2rem;\\n      line-height: 2rem;\\n      background-color: rgba(89, 99, 182, 0.3);\\n      border-radius: .6rem;\\n      cursor: pointer; }\\n  .side-panel__chart {\\n    height: calc(100% - 5rem); }\\n  .side-panel__chart-img {\\n    width: 100%;\\n    height: 100%; }\\n  .side-panel__bottom .side-panel__content {\\n    overflow: hidden;\\n    height: 100%;\\n    padding-bottom: 6rem; }\\n  .side-panel__bottom .side-panel__results {\\n    border-radius: 1.6rem;\\n    margin: 1.5rem 0;\\n    background-color: #333c73; }\\n  .side-panel__bottom .side-panel__list {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between; }\\n  @media screen and (max-width: 849px) {\\n    .side-panel__bottom .side-panel__content {\\n      padding-bottom: 0; } }\\n  .side-panel__bottom .side-panel__item {\\n    padding: 1.5rem; }\\n    .side-panel__bottom .side-panel__item > img {\\n      margin-top: 1rem;\\n      width: 6rem;\\n      height: 6rem; }\\n    .side-panel__bottom .side-panel__item h1 {\\n      font-size: 2.3rem;\\n      text-align: center; }\\n    .side-panel__bottom .side-panel__item:first-child p {\\n      font-size: 1.3rem; }\\n    .side-panel__bottom .side-panel__item .inner {\\n      font-size: .8rem;\\n      font-weight: 1;\\n      word-spacing: .2rem;\\n      background-color: #6b75ca;\\n      border: 0.4rem solid #6b75ca;\\n      border-bottom: 0.1rem solid #6b75ca;\\n      border-top: 0.1rem solid #6b75ca;\\n      border-radius: .3rem;\\n      margin-left: -2.5rem; }\\n  .side-panel__bottom .img {\\n    padding: 0; }\\n  @media screen and (max-width: 849px) {\\n    .side-panel {\\n      padding: 0 1rem;\\n      background: none; }\\n      .side-panel__head {\\n        margin: 1rem 0;\\n        padding-top: 0; } }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n.mdi-dots-vertical {\\n  font-size: 1.4rem; }\\n  @media screen and (max-width: 849px) {\\n    .mdi-dots-vertical {\\n      font-size: 1.8rem; } }\\n\\nhtml, body {\\n  font-size: 10px;\\n  font-family: 'Open Sans', sans-serif;\\n  color: #fff;\\n  width: 100%;\\n  height: 100vh;\\n  word-wrap: none;\\n  white-space: nowrap; }\\n  html ::-webkit-scrollbar-track, body ::-webkit-scrollbar-track {\\n    border-radius: 10px;\\n    background-color: #394077; }\\n  html ::-webkit-scrollbar, body ::-webkit-scrollbar {\\n    width: .5rem;\\n    height: .5rem;\\n    background-color: rgba(0, 0, 0, 0); }\\n  html ::-webkit-scrollbar-thumb, body ::-webkit-scrollbar-thumb {\\n    border-radius: 10px;\\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\n    background-color: #22264e; }\\n\\nul {\\n  list-style-type: none; }\\n\\n.vert-center {\\n  align-self: center; }\\n\\n.flex-right {\\n  margin-left: auto; }\\n\\n.negative {\\n  color: #cb474c; }\\n\\n.positive {\\n  color: #37d16a; }\\n\\n.dim {\\n  color: #c2c5da; }\\n\\n.caps {\\n  text-transform: uppercase; }\\n\\n.title {\\n  color: #fff;\\n  font-size: 1.6rem;\\n  white-space: nowrap;\\n  letter-spacing: 0.1rem; }\\n\\n.container {\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: minmax(7rem, 1.3fr) 16fr 7fr;\\n  grid-auto-rows: 100%; }\\n\\n@media screen and (max-width: 849px) {\\n  html, body {\\n    background: -webkit-linear-gradient(bottom, #101333, #262d5f);\\n    height: auto; }\\n  .container {\\n    display: block; }\\n  .hide-resp {\\n    display: none; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });