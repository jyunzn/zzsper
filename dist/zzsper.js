/*!
 * zzsper v0.0.0-alpha.1
 * (c) 2020 Jyunzn
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zzsper", [], factory);
	else if(typeof exports === 'object')
		exports["zzsper"] = factory();
	else
		root["zzsper"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _arrayLikeToArray
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _arrayWithoutHoles
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _construct
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__.default)()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _defineProperty
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _isNativeReflectConstruct
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _iterableToArray
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _nonIterableSpread
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _setPrototypeOf
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _toConsumableArray
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _unsupportedIterableToArray
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! namespace exports */
/*! export callCallbacks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deepcopy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gcArr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gcObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCallback [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isArr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFunc [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNaN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export judgeInterval [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tsEnumToObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObj": () => /* binding */ isObj,
/* harmony export */   "isFunc": () => /* binding */ isFunc,
/* harmony export */   "isArr": () => /* binding */ isArr,
/* harmony export */   "isNaN": () => /* binding */ isNaN,
/* harmony export */   "judgeInterval": () => /* binding */ judgeInterval,
/* harmony export */   "gcObj": () => /* binding */ gcObj,
/* harmony export */   "gcArr": () => /* binding */ gcArr,
/* harmony export */   "tsEnumToObj": () => /* binding */ tsEnumToObj,
/* harmony export */   "deepcopy": () => /* binding */ deepcopy,
/* harmony export */   "initCallback": () => /* binding */ initCallback,
/* harmony export */   "callCallbacks": () => /* binding */ callCallbacks
/* harmony export */ });
var isObj = function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isFunc = function isFunc(func) {
  return Object.prototype.toString.call(func) === '[object Function]';
};
var isArr = function isArr(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};
var isNaN = function isNaN(input) {
  return typeof input === 'number' && input !== input;
};
/**
 * @description 判斷狀態區間
 * @param refP 參考點
 * @param point 判斷點
 * @return -1: 左, 0: 當前, 1: 右
 */

function judgeInterval(refP, point) {
  if (refP < point) {
    return -1;
  } else if (refP === point) {
    return 0;
  } else if (refP > point) {
    return 1;
  } else {
    throw new Error('judgeInterval params is wrong');
  }
}
function gcObj(obj) {
  for (var key in obj) {
    delete obj[key];
  }
}
function gcArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = null;
  }
}
function tsEnumToObj(obj) {
  var tmp = {};

  for (var key in obj) {
    tmp[tmp[key] = obj[key]] = key;
  }

  return tmp;
}
function deepcopy(target) {
  if (isObj(target)) {
    var obj = {};

    for (var key in target) {
      obj[key] = deepcopy(target[key]);
    }

    return obj;
  } else if (isArr(target)) {
    var arr = [];

    for (var i = 0; i < target.length; i++) {
      var val = target[i];
      arr.push(deepcopy(val));
    }

    return arr;
  } else {
    return target;
  }
}
function initCallback(cbObj, cbs, del) {
  for (var key in cbs) {
    var cbArr = cbs[key];
    var cb = cbObj[key];

    if (cb) {
      if (isFunc(cb)) {
        cbArr.push(cb);
      }

      if (del) {
        delete cbObj[key];
      }
    }
  }
}
function callCallbacks(cbs, self) {
  for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    options[_key - 2] = arguments[_key];
  }

  for (var i = 0; i < cbs.length; i++) {
    var cb = cbs[i];
    cb.call.apply(cb, [self].concat(options));
  }
}

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/*! namespace exports */
/*! export addMonth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dateStrToDateObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fixYMAfterAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fixYMAfterSub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDateInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDays [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getFirstDay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getLastDay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWeek [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subMonth [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateStrToDateObj": () => /* binding */ dateStrToDateObj,
/* harmony export */   "getDateInfo": () => /* binding */ getDateInfo,
/* harmony export */   "getDays": () => /* binding */ getDays,
/* harmony export */   "getFirstDay": () => /* binding */ getFirstDay,
/* harmony export */   "getLastDay": () => /* binding */ getLastDay,
/* harmony export */   "getWeek": () => /* binding */ getWeek,
/* harmony export */   "fixYMAfterAdd": () => /* binding */ fixYMAfterAdd,
/* harmony export */   "fixYMAfterSub": () => /* binding */ fixYMAfterSub,
/* harmony export */   "addMonth": () => /* binding */ addMonth,
/* harmony export */   "subMonth": () => /* binding */ subMonth
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var dateStrToDateObj = function dateStrToDateObj(dateStr) {
  if (typeof dateStr !== 'string' || !dateStr.includes('-')) {
    return null;
  }

  var dateStrArr = dateStr.split('-').map(function (str) {
    return str * 1;
  });
  dateStrArr[1] -= 1;

  var dObj = (0,_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__.default)(Date, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dateStrArr));

  if (isNaN(dObj.getTime())) {
    return null;
  }

  return dObj;
};
var getDateInfo = function getDateInfo(dObj) {
  var year = dObj.getFullYear();
  var month = dObj.getMonth() + 1;
  var date = dObj.getDate();
  return {
    year: year,
    month: month,
    date: date
  };
};

function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

var getDays = function getDays(year, month) {
  var day30 = [4, 6, 8, 9, 11];
  var day31 = [1, 3, 5, 7, 8, 10, 12];
  var days = day31.includes(month) ? 31 : day30.includes(month) ? 30 : isLeapYear(year) ? 29 : 28;
  return days;
};
var getFirstDay = function getFirstDay(dObj) {
  return dObj.getDay();
};
var getLastDay = function getLastDay(firstDay, days) {
  return (firstDay + days - 1) % 7;
};
var getWeek = function getWeek(day) {
  return Math.ceil(day / 7);
};
var fixYMAfterAdd = function fixYMAfterAdd(year, month) {
  if (month > 12) {
    year += 1;
    month -= 12;
  }

  return {
    year: year,
    month: month
  };
};
var fixYMAfterSub = function fixYMAfterSub(year, month) {
  if (month < 1) {
    year -= 1;
    month += 12;
  }

  return {
    year: year,
    month: month
  };
};
var addMonth = function addMonth(ym, number) {
  var year = ym.year,
      month = ym.month;
  month += number;
  var fixYM = fixYMAfterAdd(year, month);
  ym.year = fixYM.year;
  ym.month = fixYM.month;
};
var subMonth = function subMonth(ym, number) {
  var year = ym.year,
      month = ym.month;
  month -= number;
  var fixYM = fixYMAfterSub(year, month);
  ym.year = fixYM.year;
  ym.month = fixYM.month;
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! namespace exports */
/*! export addClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createDom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getClassByInterval [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isTag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parentAppendChildren [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setAttrs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => /* binding */ addClass,
/* harmony export */   "removeClass": () => /* binding */ removeClass,
/* harmony export */   "setAttrs": () => /* binding */ setAttrs,
/* harmony export */   "createDom": () => /* binding */ createDom,
/* harmony export */   "getClassByInterval": () => /* binding */ getClassByInterval,
/* harmony export */   "isTag": () => /* binding */ isTag,
/* harmony export */   "parentAppendChildren": () => /* binding */ parentAppendChildren,
/* harmony export */   "initClass": () => /* binding */ initClass
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/utils/common.js");

var addClass = function addClass(dom, cls) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isArr)(cls)) return false;

  for (var i = 0; i < cls.length; i++) {
    var clsname = cls[i];
    dom.classList.add(clsname);
  }
};
var removeClass = function removeClass(dom, cls) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isArr)(cls)) return false;

  for (var i = 0; i < cls.length; i++) {
    var clsname = cls[i];
    dom.classList.remove(clsname);
  }
};
var setAttrs = function setAttrs(dom, attrs) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isObj)(attrs)) return false;

  for (var key in attrs) {
    var val = attrs[key];

    if (typeof val === 'string') {
      dom.setAttribute(key, val);
    }
  }
};
var createDom = function createDom() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'span';
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var attrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var dom = document.createElement(tag);
  dom.textContent = content;
  cls.length && addClass(dom, cls);
  (0,_common__WEBPACK_IMPORTED_MODULE_0__.isObj)(attrs) && setAttrs(dom, attrs);
  return dom;
};
/**
 * @param interval 區間 -1 | 0 | 1
 * @param classes [-1 class, 0 class, 1 class]
 */

function getClassByInterval(interval, classes) {
  if (interval === 1) {
    return classes[2];
  } else if (interval === -1) {
    return classes[0];
  } else if (interval === 0) {
    return classes[1];
  } else {
    throw new Error('getClassByInterval params is wrong');
  }
}
function isTag(tag) {
  if (typeof tag === 'string') {
    var searchLv1Tag = 'div,span,i,img,ul,li,p,button';
    var searchLv2Tag = 'article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,figcaption,figure,canvas,script,form,input,select,textarea';
    var searchLv3Tag = 'html,body,base,head,link,meta,style,title,dd,dl,dt,ol,picture,address,main,audio,video,time,caption,col,colgroup,table,thead,tbody,td,th,tr';
    var searchLv4Tag = 'hgroup,hr,pre,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,strong,sub,sup,u,var,wbr,area,map,track,embed,object,param,source,noscript,del,ins,datalist,fieldset,label,legend,meter,optgroup,option,output,progress,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot';
    var svgTag = 'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view'; // MDN said custom element names must contain a hyphen.

    var customEl = /^[a-zA-Z]+-[a-zA-Z]+(-[a-zA-Z]+)*$/;
    var sourceTags = [searchLv1Tag, searchLv2Tag, svgTag, searchLv3Tag, searchLv4Tag];
    return sourceTags.some(function (sourceTag) {
      return sourceTag.includes(tag);
    }) || customEl.test(tag);
  }

  return false;
}
function parentAppendChildren(parent, children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    parent.appendChild(child);
  }
} // INIT

function initClass(options, dCls) {
  var clsObj = {};

  for (var clsKey in dCls) {
    var cls = options[clsKey];

    if (cls !== undefined) {
      if (typeof cls !== 'string') {
        cls = dCls[clsKey];
      }

      delete options[clsKey];
    } else {
      cls = dCls[clsKey];
    }

    clsObj[clsKey] = cls ? cls.split(' ') : [];
  }

  return clsObj;
}

/***/ }),

/***/ "./src/zzsper/index.js":
/*!*****************************!*\
  !*** ./src/zzsper/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export getDateInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zzsper [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zzsper": () => /* binding */ zzsper,
/* harmony export */   "getDateInfo": () => /* binding */ getDateInfo
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _initOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initOptions */ "./src/zzsper/initOptions/index.js");




var zzsper = {};

zzsper.install = function (zz) {
  zz.mixin({
    onCreated: function onCreated(datas) {
      if (datas.opts.zzsp === true) {
        var opts = (0,_initOptions__WEBPACK_IMPORTED_MODULE_3__.initOpts)(datas.opts);
        handleInitSeleted(datas, opts);
        dDsRegistClickEv(datas, opts);
      } else if (datas.opts.zzsp !== undefined) {
        delete datas.opts.zzsp;
      }
    },
    onBeforeDomBeAssyAtResetDom: function onBeforeDomBeAssyAtResetDom(datas) {
      var zzsp = datas.opts.zzsp;

      if (zzsp) {
        handlebeMoveDoms(datas, zzsp);
      }
    }
  });
};

function handleInitSeleted(datas, opts) {
  var cur = opts.selectDate.cur,
      cls_selected = opts.cls.cls_selected;
  var ymDs = datas.doms.ymDs;
  if (cur === null) return false;
  var year = cur.year,
      month = cur.month,
      date = cur.date;
  var dD = ymDs[year] && ymDs[year][month] && ymDs[year][month].dDs[date - 1];
  dD && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(dD, cls_selected);
}

function dDsRegistClickEv(datas, opts) {
  var ymDs = datas.doms.ymDs;
  var cls_date = datas.opts.cls_date;

  for (var y in ymDs) {
    var ms = ymDs[y];

    for (var m in ms) {
      var mDoms = ms[m];
      mDoms.mCD.addEventListener('click', function (ev) {
        var dom = ev.target;

        if ((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(dom.classList).includes(cls_date[0])) {
          handleSelectDate(dom, datas, opts);
        }
      });
    }
  }
}

function handleSelectDate(dD, datas, opts) {
  var cls_selected = opts.cls.cls_selected,
      cbs = opts.cbs,
      selectDate = opts.selectDate;
  var ymDs = datas.doms.ymDs;
  var selectedDate = selectDate.cur;
  var selectingDate = getSelectingDate(dD, datas);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onSelected, null, {
    selectedDate: selectedDate,
    selectingDate: selectingDate
  });
  removeLastSelectedClass(selectedDate, selectingDate, cls_selected, ymDs);
  selectDate.cur = selectingDate;
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(dD, cls_selected);
}

function removeLastSelectedClass(edDate, ingDate, cls, ymDs) {
  if (edDate === null) return;
  var ingY = ingDate.year,
      ingM = ingDate.month,
      ingD = ingDate.date;
  var edY = edDate.year,
      edM = edDate.month,
      edD = edDate.date;
  if (ingY === edY && ingM === edM && ingD === edD) return;

  if (ymDs[edY] && ymDs[edY][edM]) {
    var edDom = ymDs[edY][edM].dDs[edD - 1];
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(edDom, cls);
  }
}

function getSelectingDate(dD, datas) {
  var cls_monthContent = datas.opts.cls_monthContent;
  var mWD = findParentNodeByClassList(dD, cls_monthContent);
  var ym = mWD.$_ym;
  var year = ym.year;
  var month = ym.month;
  var date = dD.textContent * 1;
  return {
    year: year,
    month: month,
    date: date
  };
}

function findParentNodeByClassList(dD, cls_monthWrap) {
  var p = dD.parentElement || dD.parentNode;

  if ((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(p.classList).includes(cls_monthWrap[0])) {
    return p;
  } else if (p === null) {
    return false;
  } else {
    return findParentNodeByClassList(p, cls_monthWrap);
  }
}

function handlebeMoveDoms(datas, zzsp) {
  var cls_selected = zzsp.cls.cls_selected,
      selectDate = zzsp.selectDate;
  if (selectDate.cur === null) return false;
  var contentDs = datas.contentDs,
      _datas$diffM = datas.diffM,
      _datas$diffM$beforeYM = _datas$diffM.beforeYM,
      bY = _datas$diffM$beforeYM.year,
      bM = _datas$diffM$beforeYM.month,
      _datas$diffM$nextYM = _datas$diffM.nextYM,
      nY = _datas$diffM$nextYM.year,
      nM = _datas$diffM$nextYM.month;
  var _selectDate$cur = selectDate.cur,
      sY = _selectDate$cur.year,
      sM = _selectDate$cur.month,
      sD = _selectDate$cur.date;
  var dD = contentDs.dDs[sD - 1];

  if (sY === bY && sM === bM && dD) {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(dD, cls_selected);
  }

  if (sY === nY && sM === nM && dD) {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(dD, cls_selected);
  }
}

var getDateInfo = function getDateInfo(dObj) {
  var year = dObj.getFullYear();
  var month = dObj.getMonth() + 1;
  var date = dObj.getDate();
  return {
    year: year,
    month: month,
    date: date
  };
};

/***/ }),

/***/ "./src/zzsper/initOptions/default.js":
/*!*******************************************!*\
  !*** ./src/zzsper/initOptions/default.js ***!
  \*******************************************/
/*! namespace exports */
/*! export dCbs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dCls [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dCls": () => /* binding */ dCls,
/* harmony export */   "dCbs": () => /* binding */ dCbs
/* harmony export */ });
var dCls = {
  cls_selected: 'zzsp-selected'
};
var dCbs = {
  onSelected: []
};

/***/ }),

/***/ "./src/zzsper/initOptions/index.js":
/*!*****************************************!*\
  !*** ./src/zzsper/initOptions/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export initOpts [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initOpts": () => /* binding */ initOpts
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./src/zzsper/initOptions/default.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/date */ "./src/utils/date.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function initSelectDate(options) {
  var cmz_initSelectDate = options.cmz_initSelectDate;
  var dateObj;

  if (cmz_initSelectDate) {
    dateObj = (0,_utils_date__WEBPACK_IMPORTED_MODULE_4__.dateStrToDateObj)(cmz_initSelectDate);
    delete options.cmz_initSelectDate;
  }

  var init = null;
  var cur = null;

  if (dateObj) {
    var dateInfo = (0,_utils_date__WEBPACK_IMPORTED_MODULE_4__.getDateInfo)(dateObj);
    init = _objectSpread({}, dateInfo);
    cur = _objectSpread({}, dateInfo);
  }

  return {
    cur: cur,
    init: init
  };
}

function getZZSPSetting(opts) {
  var set = {};

  for (var k in opts) {
    if (k.startsWith('zzsp_')) {
      set[k.slice(5)] = opts[k];
      delete opts[k];
    }
  }

  return set;
}

function handleInitCb(options) {
  var cbs = (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.deepcopy)(_default__WEBPACK_IMPORTED_MODULE_1__.dCbs);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.initCallback)(options, cbs, true);
  return cbs;
}

function initOpts(opts) {
  opts.zzsp = {};
  var zzspSetting = getZZSPSetting(opts);
  var selectDate = initSelectDate(zzspSetting);
  var cls = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.initClass)(zzspSetting, _default__WEBPACK_IMPORTED_MODULE_1__.dCls);
  var cbs = handleInitCb(zzspSetting);
  opts.zzsp.cls = cls;
  opts.zzsp.selectDate = selectDate;
  return {
    selectDate: selectDate,
    cls: cls,
    cbs: cbs
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/zzsper/index.js");
/******/ })()
.zzsper;
});
//# sourceMappingURL=zzsper.js.map