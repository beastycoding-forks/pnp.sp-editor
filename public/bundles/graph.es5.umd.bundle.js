(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.graph"] = factory();
	else
		root["pnp.graph"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return _libconfig__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony import */ var _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "PnPClientStorage")) __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["PnPClientStorage"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "assign")) __webpack_require__.d(__webpack_exports__, "assign", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["assign"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "combine")) __webpack_require__.d(__webpack_exports__, "combine", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["combine"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "dateAdd")) __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["dateAdd"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "getCtxCallback")) __webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["getCtxCallback"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "getGUID")) __webpack_require__.d(__webpack_exports__, "getGUID", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["getGUID"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "hOP")) __webpack_require__.d(__webpack_exports__, "hOP", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["hOP"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "isArray")) __webpack_require__.d(__webpack_exports__, "isArray", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["isArray"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "isFunc")) __webpack_require__.d(__webpack_exports__, "isFunc", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["isFunc"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "isUrlAbsolute")) __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["isUrlAbsolute"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "jsS")) __webpack_require__.d(__webpack_exports__, "jsS", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["jsS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "objectDefinedNotNull")) __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["objectDefinedNotNull"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "safeGlobal")) __webpack_require__.d(__webpack_exports__, "safeGlobal", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["safeGlobal"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "stringIsNullOrEmpty")) __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__["stringIsNullOrEmpty"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGUID", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hOP", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsS", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return _util__WEBPACK_IMPORTED_MODULE_5__["l"]; });

/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeGlobal", function() { return _safe_global__WEBPACK_IMPORTED_MODULE_6__["a"]; });










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCtxCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combine; });
/* unused harmony export getRandomString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return stringIsNullOrEmpty; });
/* unused harmony export sanitizeGuid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hOP; });
/* unused harmony export getHashCode */
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    for (var i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function assign(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
// tslint:disable:no-bitwise
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// tslint:enable:no-bitwise


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __extends; });
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setup */
/* unused harmony export RuntimeConfigImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimeConfig; });
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function setup(config) {
    RuntimeConfig.assign(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(s[0], "session");
        this._v.set(s[1], 60);
        this._v.set(s[2], false);
        this._v.set(s[3], false);
        this._v.set(s[4], 750);
        this._v.set(s[5], null);
        this._v.set(s[6], false);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.assign = function (config) {
        this._v = Object(_collections__WEBPACK_IMPORTED_MODULE_0__[/* mergeMaps */ "a"])(this._v, Object(_collections__WEBPACK_IMPORTED_MODULE_0__[/* objectToMap */ "b"])(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            return this.get(s[6]);
        },
        enumerable: false,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return objectToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeMaps; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "h"])(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (o !== undefined && o !== null) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            target.set(k, v);
        });
    }
    return target;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeGlobal; });
// export either window or global
var safeGlobal = typeof global === "undefined" ? window : global;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeOptions; });
/* unused harmony export getADALResource */
/* unused harmony export FetchClient */
/* unused harmony export BearerTokenFetchClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPFxAdalClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



function mergeHeaders(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "k"])(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "k"])(source)) {
        var headers = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target.headers || {}, source.headers);
        target = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    var u = new URL(url);
    return u.protocol + "//" + u.hostname;
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return _safe_global__WEBPACK_IMPORTED_MODULE_2__[/* safeGlobal */ "a"].fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token || "";
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: false,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, null) || this;
        _this.context = context;
        return _this;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    SPFxAdalClient.prototype.fetch = function (url, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "c"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken(getADALResource(url))];
                    case 1:
                        token = _a.sent();
                        this.token = token;
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    SPFxAdalClient.prototype.getToken = function (resource) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var provider;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "c"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(resource)];
                }
            });
        });
    };
    return SPFxAdalClient;
}(BearerTokenFetchClient));



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PnPClientStorageWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnPClientStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (_libconfig__WEBPACK_IMPORTED_MODULE_2__[/* RuntimeConfig */ "a"].enableCacheExpiration) {
            this.cacheExpirationHandler();
        }
    }
    PnPClientStorageWrapper.bind = function (store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    };
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "k"])(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var o;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "c"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/, getter()];
                        }
                        o = this.get(key);
                        if (!(o === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getter()];
                    case 1:
                        o = _a.sent();
                        this.put(key, o, expire);
                        _a.label = 2;
                    case 2: return [2 /*return*/, o];
                }
            });
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var i, key;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "c"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.store.length)) return [3 /*break*/, 4];
                        key = this.store.key(i);
                        if (!(key !== null)) return [3 /*break*/, 3];
                        if (!/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) return [3 /*break*/, 3];
                        // get those items as get will delete from cache if they are expired
                        return [4 /*yield*/, this.get(key)];
                    case 2:
                        // get those items as get will delete from cache if they are expired
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = _libconfig__WEBPACK_IMPORTED_MODULE_2__[/* RuntimeConfig */ "a"].defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* dateAdd */ "c"])(new Date(), "second", defaultTimeout);
        }
        return Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* jsS */ "j"])({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* getCtxCallback */ "d"])(_this, _this.cacheExpirationHandler), _libconfig__WEBPACK_IMPORTED_MODULE_2__[/* RuntimeConfig */ "a"].cacheExpirationIntervalMilliseconds);
        }).catch(console.error);
    };
    return PnPClientStorageWrapper;
}());

/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: false,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
            }
            return this._local;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
            }
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    return PnPClientStorage;
}());



/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Attachment", function() { return /* reexport */ Attachment; });
__webpack_require__.d(__webpack_exports__, "Attachments", function() { return /* reexport */ Attachments; });
__webpack_require__.d(__webpack_exports__, "Calendar", function() { return /* reexport */ Calendar; });
__webpack_require__.d(__webpack_exports__, "Calendars", function() { return /* reexport */ Calendars; });
__webpack_require__.d(__webpack_exports__, "Event", function() { return /* reexport */ Event; });
__webpack_require__.d(__webpack_exports__, "Events", function() { return /* reexport */ Events; });
__webpack_require__.d(__webpack_exports__, "Contact", function() { return /* reexport */ Contact; });
__webpack_require__.d(__webpack_exports__, "ContactFolder", function() { return /* reexport */ ContactFolder; });
__webpack_require__.d(__webpack_exports__, "ContactFolders", function() { return /* reexport */ ContactFolders; });
__webpack_require__.d(__webpack_exports__, "Contacts", function() { return /* reexport */ Contacts; });
__webpack_require__.d(__webpack_exports__, "Conversation", function() { return /* reexport */ Conversation; });
__webpack_require__.d(__webpack_exports__, "Conversations", function() { return /* reexport */ Conversations; });
__webpack_require__.d(__webpack_exports__, "Post", function() { return /* reexport */ Post; });
__webpack_require__.d(__webpack_exports__, "Posts", function() { return /* reexport */ Posts; });
__webpack_require__.d(__webpack_exports__, "Senders", function() { return /* reexport */ Senders; });
__webpack_require__.d(__webpack_exports__, "Thread", function() { return /* reexport */ Thread; });
__webpack_require__.d(__webpack_exports__, "Threads", function() { return /* reexport */ Threads; });
__webpack_require__.d(__webpack_exports__, "DirectoryObjectTypes", function() { return /* reexport */ DirectoryObjectTypes; });
__webpack_require__.d(__webpack_exports__, "DirectoryObject", function() { return /* reexport */ DirectoryObject; });
__webpack_require__.d(__webpack_exports__, "DirectoryObjects", function() { return /* reexport */ DirectoryObjects; });
__webpack_require__.d(__webpack_exports__, "Group", function() { return /* reexport */ Group; });
__webpack_require__.d(__webpack_exports__, "GroupType", function() { return /* reexport */ GroupType; });
__webpack_require__.d(__webpack_exports__, "Groups", function() { return /* reexport */ Groups; });
__webpack_require__.d(__webpack_exports__, "Insights", function() { return /* reexport */ Insights; });
__webpack_require__.d(__webpack_exports__, "SharedInsight", function() { return /* reexport */ SharedInsight; });
__webpack_require__.d(__webpack_exports__, "SharedInsights", function() { return /* reexport */ SharedInsights; });
__webpack_require__.d(__webpack_exports__, "TrendingInsight", function() { return /* reexport */ TrendingInsight; });
__webpack_require__.d(__webpack_exports__, "TrendingInsights", function() { return /* reexport */ TrendingInsights; });
__webpack_require__.d(__webpack_exports__, "UsedInsight", function() { return /* reexport */ UsedInsight; });
__webpack_require__.d(__webpack_exports__, "UsedInsights", function() { return /* reexport */ UsedInsights; });
__webpack_require__.d(__webpack_exports__, "Resource", function() { return /* reexport */ Resource; });
__webpack_require__.d(__webpack_exports__, "Invitations", function() { return /* reexport */ Invitations; });
__webpack_require__.d(__webpack_exports__, "Member", function() { return /* reexport */ Member; });
__webpack_require__.d(__webpack_exports__, "Members", function() { return /* reexport */ Members; });
__webpack_require__.d(__webpack_exports__, "MailFolder", function() { return /* reexport */ MailFolder; });
__webpack_require__.d(__webpack_exports__, "MailFolders", function() { return /* reexport */ MailFolders; });
__webpack_require__.d(__webpack_exports__, "MailboxSettings", function() { return /* reexport */ MailboxSettings; });
__webpack_require__.d(__webpack_exports__, "Message", function() { return /* reexport */ Message; });
__webpack_require__.d(__webpack_exports__, "Messages", function() { return /* reexport */ Messages; });
__webpack_require__.d(__webpack_exports__, "Drive", function() { return /* reexport */ Drive; });
__webpack_require__.d(__webpack_exports__, "DriveItem", function() { return /* reexport */ DriveItem; });
__webpack_require__.d(__webpack_exports__, "DriveItems", function() { return /* reexport */ DriveItems; });
__webpack_require__.d(__webpack_exports__, "Drives", function() { return /* reexport */ Drives; });
__webpack_require__.d(__webpack_exports__, "Root", function() { return /* reexport */ Root; });
__webpack_require__.d(__webpack_exports__, "Notebook", function() { return /* reexport */ Notebook; });
__webpack_require__.d(__webpack_exports__, "Notebooks", function() { return /* reexport */ Notebooks; });
__webpack_require__.d(__webpack_exports__, "OneNote", function() { return /* reexport */ OneNote; });
__webpack_require__.d(__webpack_exports__, "Section", function() { return /* reexport */ Section; });
__webpack_require__.d(__webpack_exports__, "Sections", function() { return /* reexport */ Sections; });
__webpack_require__.d(__webpack_exports__, "Photo", function() { return /* reexport */ Photo; });
__webpack_require__.d(__webpack_exports__, "Bucket", function() { return /* reexport */ Bucket; });
__webpack_require__.d(__webpack_exports__, "Buckets", function() { return /* reexport */ Buckets; });
__webpack_require__.d(__webpack_exports__, "Plan", function() { return /* reexport */ Plan; });
__webpack_require__.d(__webpack_exports__, "Planner", function() { return /* reexport */ Planner; });
__webpack_require__.d(__webpack_exports__, "Plans", function() { return /* reexport */ Plans; });
__webpack_require__.d(__webpack_exports__, "Task", function() { return /* reexport */ Task; });
__webpack_require__.d(__webpack_exports__, "Tasks", function() { return /* reexport */ Tasks; });
__webpack_require__.d(__webpack_exports__, "TaskDetails", function() { return /* reexport */ TaskDetails; });
__webpack_require__.d(__webpack_exports__, "PlanDetails", function() { return /* reexport */ PlanDetails; });
__webpack_require__.d(__webpack_exports__, "Subscription", function() { return /* reexport */ Subscription; });
__webpack_require__.d(__webpack_exports__, "Subscriptions", function() { return /* reexport */ Subscriptions; });
__webpack_require__.d(__webpack_exports__, "Channel", function() { return /* reexport */ Channel; });
__webpack_require__.d(__webpack_exports__, "Channels", function() { return /* reexport */ Channels; });
__webpack_require__.d(__webpack_exports__, "Tab", function() { return /* reexport */ Tab; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs; });
__webpack_require__.d(__webpack_exports__, "Team", function() { return /* reexport */ Team; });
__webpack_require__.d(__webpack_exports__, "Teams", function() { return /* reexport */ Teams; });
__webpack_require__.d(__webpack_exports__, "User", function() { return /* reexport */ User; });
__webpack_require__.d(__webpack_exports__, "Users", function() { return /* reexport */ Users; });
__webpack_require__.d(__webpack_exports__, "People", function() { return /* reexport */ People; });
__webpack_require__.d(__webpack_exports__, "graph", function() { return /* reexport */ graph; });
__webpack_require__.d(__webpack_exports__, "GraphRest", function() { return /* reexport */ rest_GraphRest; });
__webpack_require__.d(__webpack_exports__, "GraphBatch", function() { return /* reexport */ batch_GraphBatch; });
__webpack_require__.d(__webpack_exports__, "GraphQueryable", function() { return /* reexport */ GraphQueryable; });
__webpack_require__.d(__webpack_exports__, "GraphQueryableCollection", function() { return /* reexport */ GraphQueryableCollection; });
__webpack_require__.d(__webpack_exports__, "GraphQueryableInstance", function() { return /* reexport */ GraphQueryableInstance; });
__webpack_require__.d(__webpack_exports__, "GraphQueryableSearchableCollection", function() { return /* reexport */ GraphQueryableSearchableCollection; });
__webpack_require__.d(__webpack_exports__, "GraphHttpClient", function() { return /* reexport */ graphhttpclient_GraphHttpClient; });
__webpack_require__.d(__webpack_exports__, "GraphEndpoints", function() { return /* reexport */ GraphEndpoints; });

// CONCATENATED MODULE: ./node_modules/@pnp/graph/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: ./node_modules/@pnp/common/index.js
var common = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var batch_Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(common["getGUID"])(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    Object.defineProperty(Batch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Batch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            // we sort these each time this is accessed
            return this._reqs.sort(function (info1, info2) { return info1.index - info2.index; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    Batch.prototype.track = function (batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    };
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    Batch.prototype.add = function (context) {
        var info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    Batch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    Batch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    Batch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return Batch;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var caching_CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = common["RuntimeConfig"].defaultCachingStore; }
        if (expiration === void 0) { expiration = Object(common["dateAdd"])(new Date(), "second", common["RuntimeConfig"].defaultCachingTimeoutSeconds); }
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: false,
        configurable: true
    });
    CachingOptions.storage = new common["PnPClientStorage"]();
    return CachingOptions;
}());

var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/odata/add-prop.js
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_es6_exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) tslib_es6_createBinding(exports, m, p);
}

function tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) tslib_es6_createBinding(result, mod, k);
    tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js


var _enableExtensions = false;
var globalExtensions = [];
var factoryExtensions = new Map();
var ObjExtensionsSym = Symbol.for("43f7a601");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globalExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
var extendObj = function (target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
var extendFactory = function (factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    var proto = Reflect.getPrototypeOf(factory);
    if (!Reflect.has(proto, ObjExtensionsSym)) {
        Reflect.defineProperty(proto, ObjExtensionsSym, {
            value: Object(common["getGUID"])(),
        });
    }
    var key = proto[ObjExtensionsSym];
    if (!factoryExtensions.has(key)) {
        factoryExtensions.set(key, []);
    }
    extendCol(factoryExtensions.get(key), extensions);
};
function extendCol(a, e) {
    if (Object(common["isArray"])(e)) {
        // @ts-ignore
        a.push.apply(a, tslib_es6_spread(e));
    }
    else {
        // @ts-ignore
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
var clearGlobalExtensions = function () {
    globalExtensions.length = 0;
};
/**
 * Disables all extensions
 */
var disableExtensions = function () {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
var enableExtensions = function () {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
var applyFactoryExtensions = function (factory, args) {
    var o = factory(args);
    var proto = Reflect.getPrototypeOf(factory);
    if (Reflect.has(proto, ObjExtensionsSym)) {
        var extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
        o = extendObj(o, extensions);
    }
    return o;
};
function extensionOrDefault(op, or, target) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (_enableExtensions) {
        var extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push.apply(extensions, tslib_es6_spread(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, tslib_es6_spread(globalExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (Object(common["isFunc"])(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, tslib_es6_spread([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, tslib_es6_spread([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, tslib_es6_spread([target], rest));
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js



var invokableBinder = function (invoker) { return function (constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var factory = function (as) {
            var r = Object.assign(function () {
                var ags = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ags[_i] = arguments[_i];
                }
                return invoker.apply(r, ags);
            }, new (constructor.bind.apply(constructor, tslib_es6_spread([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (common["RuntimeConfig"].ie11) {
            return factory(args);
        }
        else {
            return new Proxy(applyFactoryExtensions(factory, args), {
                apply: function (target, _thisArg, argArray) {
                    return extensionOrDefault("apply", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.apply(a[0], a[1], a[2]);
                    }, target, _thisArg, argArray);
                },
                get: function (target, p, receiver) {
                    return extensionOrDefault("get", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.get(a[0], a[1], a[2]);
                    }, target, p, receiver);
                },
                has: function (target, p) {
                    return extensionOrDefault("has", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.has(a[0], a[1]);
                    }, target, p);
                },
                set: function (target, p, value, receiver) {
                    return extensionOrDefault("set", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.set(a[0], a[1], a[2], a[3]);
                    }, target, p, value, receiver);
                },
            });
        }
    };
}; };
var invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});

// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


var parsers_ODataParser = /** @class */ (function () {
    function ODataParser() {
    }
    ODataParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParser.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParser.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            parsers_HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParser.prototype.parseODataJSON = function (json) {
        var result = json;
        if (Object(common["hOP"])(json, "d")) {
            if (Object(common["hOP"])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(common["hOP"])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var parsers_TextParser = /** @class */ (function (_super) {
    tslib_es6_extends(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(parsers_ODataParser));

var parsers_BlobParser = /** @class */ (function (_super) {
    tslib_es6_extends(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(parsers_ODataParser));

var parsers_JSONParser = /** @class */ (function (_super) {
    tslib_es6_extends(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(parsers_ODataParser));

var parsers_BufferParser = /** @class */ (function (_super) {
    tslib_es6_extends(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(common["isFunc"])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(parsers_ODataParser));

var parsers_LambdaParser = /** @class */ (function (_super) {
    tslib_es6_extends(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(parsers_ODataParser));

var parsers_HttpRequestError = /** @class */ (function (_super) {
    tslib_es6_extends(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    HttpRequestError.init = function (r) {
        return tslib_es6_awaiter(this, void 0, void 0, function () {
            var t;
            return tslib_es6_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, r.clone().text()];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/, new HttpRequestError("Error making HttpClient request in queryable [" + r.status + "] " + r.statusText + " ::> " + t, r.clone())];
                }
            });
        });
    };
    return HttpRequestError;
}(Error));


// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var body;
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    // Note however, even bodies that can be serialized will not be cloned.
    if (source.options && source.options.body) {
        body = source.options.body;
        source.options.body = "-";
    }
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(tslib_es6_spread(value));
            case "batch":
                return "-";
            case "batchDependency":
                return "-";
            case "cachingOptions":
                return "-";
            case "clientFactory":
                return "-";
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    var parsed = JSON.parse(s, function (key, value) {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
                return source.batch;
            case "batchDependency":
                return source.batchDependency;
            case "cachingOptions":
                return source.cachingOptions;
            case "clientFactory":
                return source.clientFactory;
            case "parser":
                return source.parser;
            default:
                return value;
        }
    });
    if (body) {
        parsed.options.body = body;
        source.options.body = body;
    }
    return parsed;
}
var queryable_Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new parsers_ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
    }
    Object.defineProperty(Queryable.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = Object.assign({}, this.data, cloneQueryableData(value));
        },
        enumerable: false,
        configurable: true
    });
    /**
    * Gets the current url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    Queryable.prototype.concat = function (pathPart) {
        this.data.url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this.data.query;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        Object(common["mergeOptions"])(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(common["mergeOptions"])(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!common["RuntimeConfig"].globalCacheDisable) {
            this.data.useCaching = true;
            if (options !== undefined) {
                this.data.cachingOptions = options;
            }
        }
        return this;
    };
    Queryable.prototype.usingParser = function (parser) {
        this.data.parser = parser;
        return this;
    };
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    Queryable.prototype.withPipeline = function (pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    Queryable.prototype.append = function (pathPart) {
        this.data.url = Object(common["combine"])(this.data.url, pathPart);
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    Queryable.prototype.inBatch = function (batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (Object(common["objectDefinedNotNull"])(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (Object(common["objectDefinedNotNull"])(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(Queryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return Object(common["objectDefinedNotNull"])(this.data.batch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this.data.batch : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this.data.parentUrl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = {}; }
        // default values for settings
        settings = Object(common["assign"])({
            includeBatch: true,
            includeQuery: false,
        }, settings);
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (settings.includeQuery && this.query.size > 0) {
            this.query.forEach(function (v, k) { return target.query.set(k, v); });
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modification
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());

var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: false,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));

// CONCATENATED MODULE: ./node_modules/@pnp/logging/listeners.js
/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(" Data: Error in stringify of supplied data " + e);
            }
        }
        return msg.join("");
    };
    return ConsoleListener;
}());

/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    Logger.log({
        data: Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requests have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && Object(common["hOP"])(args[0], "hasResult") && args[0].hasResult) {
                Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var pipeline_PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            Logger.log({
                data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.method + " request (" + context.url + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.useCaching) {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new caching_CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = Object(common["assign"])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (Object(common["isFunc"])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(common["hOP"])(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                var p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(common["isFunc"])(context.batchDependency)) {
                    context.batchDependency();
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = Object(common["assign"])(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    tslib_es6_decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    tslib_es6_decorate([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    tslib_es6_decorate([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    tslib_es6_decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());

function getDefaultPipeline() {
    return [
        pipeline_PipelineMethods.logStart,
        pipeline_PipelineMethods.caching,
        pipeline_PipelineMethods.send,
        pipeline_PipelineMethods.logEnd,
    ].slice(0);
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline-binder.js




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return pipe(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: Object(common["objectDefinedNotNull"])(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new parsers_ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: Object(common["getGUID"])(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());

// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function request_builders_body(o, previous) {
    return Object.assign({ body: Object(common["jsS"])(o) }, previous);
}
function request_builders_headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js











// CONCATENATED MODULE: ./node_modules/@pnp/graph/types.js
var GraphEndpoints = /** @class */ (function () {
    function GraphEndpoints() {
    }
    /**
     *
     * @param url The url to set the endpoint
     */
    GraphEndpoints.ensure = function (url, endpoint) {
        var all = [GraphEndpoints.Beta, GraphEndpoints.V1];
        var regex = new RegExp(endpoint, "i");
        var replaces = all.filter(function (s) { return !regex.test(s); }).map(function (s) { return s.replace(".", "\\."); });
        regex = new RegExp("/?(" + replaces.join("|") + ")/?", "ig");
        return url.replace(regex, "/" + endpoint + "/");
    };
    GraphEndpoints.Beta = "beta";
    GraphEndpoints.V1 = "v1.0";
    return GraphEndpoints;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphlibconfig.js

function setup(config) {
    common["RuntimeConfig"].assign(config);
}
var graphlibconfig_GraphRuntimeConfigImpl = /** @class */ (function () {
    function GraphRuntimeConfigImpl() {
    }
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var graphPart = common["RuntimeConfig"].get("graph");
            if (graphPart !== undefined && graphPart.headers !== undefined) {
                return graphPart.headers;
            }
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "baseUrl", {
        get: function () {
            var graphPart = common["RuntimeConfig"].get("graph");
            if (graphPart !== undefined && graphPart.baseUrl !== undefined) {
                return graphPart.baseUrl;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var graphPart = common["RuntimeConfig"].get("graph");
            // use a configured factory firt
            if (graphPart !== undefined && graphPart.fetchClientFactory !== undefined) {
                return graphPart.fetchClientFactory;
            }
            // then try and use spfx context if available
            if (common["RuntimeConfig"].spfxContext !== undefined) {
                return function () { return new common["SPFxAdalClient"](common["RuntimeConfig"].spfxContext); };
            }
            throw Error("There is no Graph Client available, either set one using configuraiton or provide a valid SPFx Context using setup.");
        },
        enumerable: false,
        configurable: true
    });
    return GraphRuntimeConfigImpl;
}());

var GraphRuntimeConfig = new graphlibconfig_GraphRuntimeConfigImpl();

// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphhttpclient.js


var graphhttpclient_GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient() {
        this._impl = GraphRuntimeConfig.fetchClientFactory();
    }
    GraphHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        Object(common["mergeHeaders"])(headers, GraphRuntimeConfig.headers);
        // second we add the local options so we can overwrite the globals
        Object(common["mergeHeaders"])(headers, options.headers);
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json");
        }
        if (!headers.has("SdkVersion")) {
            // this marks the requests for understanding by the service
            headers.append("SdkVersion", "PnPCoreJS/2.0.12");
        }
        var opts = Object(common["assign"])(options, { headers: headers });
        return this.fetchRaw(url, opts);
    };
    GraphHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(common["mergeHeaders"])(rawHeaders, options.headers);
        options = Object(common["assign"])(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                // Check if request failed due to gateway timeout - http status code 504
                if (response.status !== 429 && response.status !== 503 && response.status !== 504) {
                    ctx.reject(response);
                }
                // grab our current delay
                var delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(Object(common["getCtxCallback"])(_this, retry, ctx), delay);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    GraphHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["assign"])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["assign"])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["assign"])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["assign"])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return GraphHttpClient;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/toabsoluteurl.js



/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var client, baseUrl, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (Object(common["isUrlAbsolute"])(candidateUrl)) {
                        // if we are already absolute, then just return the url
                        return [2 /*return*/, candidateUrl];
                    }
                    if (!Object(common["stringIsNullOrEmpty"])(GraphRuntimeConfig.baseUrl)) {
                        // base url specified either with baseUrl of spfxContext config property
                        return [2 /*return*/, Object(common["combine"])(GraphRuntimeConfig.baseUrl, candidateUrl)];
                    }
                    if (!Object(common["objectDefinedNotNull"])(common["RuntimeConfig"].spfxContext)) return [3 /*break*/, 4];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, common["RuntimeConfig"].spfxContext.msGraphClientFactory.getClient()];
                case 2:
                    client = _c.sent();
                    baseUrl = (_b = (_a = client) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b._graphBaseUrl;
                    if (!Object(common["stringIsNullOrEmpty"])(baseUrl)) {
                        return [2 /*return*/, Object(common["combine"])(baseUrl, candidateUrl)];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    return [3 /*break*/, 4];
                case 4: 
                // try one last time with the default
                return [2 /*return*/, Object(common["combine"])("https://graph.microsoft.com", candidateUrl)];
            }
        });
    });
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/operations.js





var graphClientBinder = defaultPipelineBinder(function () { return new graphhttpclient_GraphHttpClient(); });
var send = function (operation) {
    return function (o, options) {
        return __awaiter(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cloneQueryableData(o.data);
                        batchDependency = Object(common["objectDefinedNotNull"])(data.batch) ? data.batch.addDependency() : function () { return; };
                        return [4 /*yield*/, toAbsoluteUrl(o.toUrlAndQuery())];
                    case 1:
                        url = _a.sent();
                        Object(common["mergeOptions"])(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
var graphGet = function (o, options) { return send(graphClientBinder("GET"))(o, options); };
var graphPost = function (o, options) { return send(graphClientBinder("POST"))(o, options); };
var graphDelete = function (o, options) { return send(graphClientBinder("DELETE"))(o, options); };
var graphPatch = function (o, options) { return send(graphClientBinder("PATCH"))(o, options); };
var graphPut = function (o, options) { return send(graphClientBinder("PUT"))(o, options); };

// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphqueryable.js





var graphInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * Queryable Base Class
 *
 */
var graphqueryable_GraphQueryable = /** @class */ (function (_super) {
    __extends(_GraphQueryable, _super);
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    function _GraphQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            parentUrl = baseUrl;
            url = Object(common["combine"])(parentUrl, path);
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = Object(common["combine"])(parentUrl, path);
        }
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        return _this;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _GraphQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.map(encodeURIComponent).join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _GraphQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.map(encodeURIComponent).join(","));
        }
        return this;
    };
    _GraphQueryable.prototype.defaultAction = function (options) {
        return graphGet(this, options);
    };
    _GraphQueryable.prototype.get = function (options) {
        return graphGet(this, options);
    };
    /**
     * Gets the full url with query information
     *
     */
    _GraphQueryable.prototype.toUrlAndQuery = function () {
        var url = this.toUrl();
        if (this.query.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(this.query).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    _GraphQueryable.prototype.setEndpoint = function (endpoint) {
        this.data.url = GraphEndpoints.ensure(this.data.url, endpoint);
        return this;
    };
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    _GraphQueryable.prototype.clone = function (factory, additionalPath, includeBatch, includeQuery) {
        if (includeBatch === void 0) { includeBatch = true; }
        if (includeQuery === void 0) { includeQuery = false; }
        return _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch, includeQuery: includeQuery });
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _GraphQueryable.prototype.getParent = function (factory, baseUrl, path) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        return new factory(baseUrl, path);
    };
    return _GraphQueryable;
}(queryable_Queryable));

var GraphQueryable = graphInvokableFactory(graphqueryable_GraphQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var graphqueryable_GraphQueryableCollection = /** @class */ (function (_super) {
    __extends(_GraphQueryableCollection, _super);
    function _GraphQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param filter The string representing the filter query
     */
    _GraphQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _GraphQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(encodeURIComponent(orderBy) + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _GraphQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    _GraphQueryableCollection.prototype.skip = function (num) {
        this.query.set("$skip", num.toString());
        return this;
    };
    /**
     * 	To request second and subsequent pages of Graph data
     */
    _GraphQueryableCollection.prototype.skipToken = function (token) {
        this.query.set("$skiptoken", token);
        return this;
    };
    Object.defineProperty(_GraphQueryableCollection.prototype, "count", {
        /**
         * 	Retrieves the total count of matching resources
         */
        get: function () {
            this.query.set("$count", "true");
            return this;
        },
        enumerable: false,
        configurable: true
    });
    return _GraphQueryableCollection;
}(graphqueryable_GraphQueryable));

var GraphQueryableCollection = graphInvokableFactory(graphqueryable_GraphQueryableCollection);
var graphqueryable_GraphQueryableSearchableCollection = /** @class */ (function (_super) {
    __extends(_GraphQueryableSearchableCollection, _super);
    function _GraphQueryableSearchableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    _GraphQueryableSearchableCollection.prototype.search = function (query) {
        this.query.set("$search", query);
        return this;
    };
    return _GraphQueryableSearchableCollection;
}(graphqueryable_GraphQueryableCollection));

var GraphQueryableSearchableCollection = graphInvokableFactory(graphqueryable_GraphQueryableSearchableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var graphqueryable_GraphQueryableInstance = /** @class */ (function (_super) {
    __extends(_GraphQueryableInstance, _super);
    function _GraphQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _GraphQueryableInstance;
}(graphqueryable_GraphQueryable));

var GraphQueryableInstance = graphInvokableFactory(graphqueryable_GraphQueryableInstance);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/decorators.js



/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.delete = function () {
                return graphDelete(this);
            };
            return class_2;
        }(target));
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteableWithETag() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.delete = function (eTag) {
                if (eTag === void 0) { eTag = "*"; }
                return graphDelete(this, request_builders_headers({
                    "If-Match": eTag,
                }));
            };
            return class_3;
        }(target));
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_4, _super);
            function class_4() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_4.prototype.update = function (props) {
                return graphPatch(this, request_builders_body(props));
            };
            return class_4;
        }(target));
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateableWithETag() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_5, _super);
            function class_5() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_5.prototype.update = function (props, eTag) {
                if (eTag === void 0) { eTag = "*"; }
                return graphPatch(this, request_builders_body(props, request_builders_headers({
                    "If-Match": eTag,
                })));
            };
            return class_5;
        }(target));
    };
}
/**
 * Adds the add method to the tagged class
 */
function addable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_6, _super);
            function class_6() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_6.prototype.add = function (props) {
                return graphPost(this, request_builders_body(props));
            };
            return class_6;
        }(target));
    };
}
/**
 * Adds the getById method to a collection
 */
function getById(factory) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_7, _super);
            function class_7() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_7.prototype.getById = function (id) {
                return factory(this, id);
            };
            return class_7;
        }(target));
    };
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/types.js





/**
 * Conversation
 */
var types_Conversation = /** @class */ (function (_super) {
    __extends(_Conversation, _super);
    function _Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Conversation.prototype, "threads", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return Threads(this);
        },
        enumerable: false,
        configurable: true
    });
    _Conversation = __decorate([
        updateable(),
        deleteable()
    ], _Conversation);
    return _Conversation;
}(graphqueryable_GraphQueryableInstance));

var Conversation = graphInvokableFactory(types_Conversation);
/**
 * Conversations
 */
var types_Conversations = /** @class */ (function (_super) {
    __extends(_Conversations, _super);
    function _Conversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Conversations = __decorate([
        defaultPath("conversations"),
        addable(),
        getById(Conversation)
    ], _Conversations);
    return _Conversations;
}(graphqueryable_GraphQueryableCollection));

var Conversations = graphInvokableFactory(types_Conversations);
/**
 * Thread
 */
var types_Thread = /** @class */ (function (_super) {
    __extends(_Thread, _super);
    function _Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Thread.prototype, "posts", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return Posts(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    _Thread.prototype.reply = function (post) {
        return graphPost(this.clone(Thread, "reply"), request_builders_body(post));
    };
    _Thread = __decorate([
        deleteable()
    ], _Thread);
    return _Thread;
}(graphqueryable_GraphQueryableInstance));

var Thread = graphInvokableFactory(types_Thread);
/**
 * Threads
 */
var types_Threads = /** @class */ (function (_super) {
    __extends(_Threads, _super);
    function _Threads() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Threads = __decorate([
        defaultPath("threads"),
        addable(),
        getById(Thread)
    ], _Threads);
    return _Threads;
}(graphqueryable_GraphQueryableCollection));

var Threads = graphInvokableFactory(types_Threads);
/**
 * Post
 */
var types_Post = /** @class */ (function (_super) {
    __extends(_Post, _super);
    function _Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Forward a post to a recipient
     */
    _Post.prototype.forward = function (info) {
        return graphPost(this.clone(Post, "forward"), request_builders_body(info));
    };
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    _Post.prototype.reply = function (post) {
        return graphPost(this.clone(Post, "reply"), request_builders_body(post));
    };
    _Post = __decorate([
        deleteable()
    ], _Post);
    return _Post;
}(graphqueryable_GraphQueryableInstance));

var Post = graphInvokableFactory(types_Post);
/**
 * Posts
 */
var types_Posts = /** @class */ (function (_super) {
    __extends(_Posts, _super);
    function _Posts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Posts = __decorate([
        defaultPath("posts"),
        addable(),
        getById(Post)
    ], _Posts);
    return _Posts;
}(graphqueryable_GraphQueryableCollection));

var Posts = graphInvokableFactory(types_Posts);
/**
 * Senders
 */
var types_Senders = /** @class */ (function (_super) {
    __extends(_Senders, _super);
    function _Senders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    _Senders.prototype.add = function (id) {
        return graphPost(this.clone(Senders, "$ref"), request_builders_body({ "@odata.id": id }));
    };
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    _Senders.prototype.remove = function (id) {
        var remover = this.clone(Senders, "$ref");
        remover.query.set("$id", id);
        return graphDelete(remover);
    };
    return _Senders;
}(graphqueryable_GraphQueryableCollection));

var Senders = graphInvokableFactory(types_Senders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/type.js
function type_type(n, a) {
    return Object.assign({ "@odata.type": n }, a);
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/types.js






/**
 * Attachment
 */
var types_Attachment = /** @class */ (function (_super) {
    __extends(_Attachment, _super);
    function _Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Attachment;
}(graphqueryable_GraphQueryableInstance));

var Attachment = graphInvokableFactory(types_Attachment);
/**
 * Attachments
 */
var types_Attachments = /** @class */ (function (_super) {
    __extends(_Attachments, _super);
    function _Attachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    _Attachments.prototype.addFile = function (name, bytes) {
        return graphPost(this, request_builders_body(type_type("#microsoft.graph.fileAttachment", {
            contentBytes: bytes,
            name: name,
        })));
    };
    _Attachments = __decorate([
        defaultPath("attachments"),
        getById(Attachment)
    ], _Attachments);
    return _Attachments;
}(graphqueryable_GraphQueryableCollection));

var Attachments = graphInvokableFactory(types_Attachments);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/conversations.js



addProp(types_Post, "attachments", Attachments);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/types.js





/**
 * Represents a Directory Object entity
 */
var types_DirectoryObject = /** @class */ (function (_super) {
    __extends(_DirectoryObject, _super);
    function _DirectoryObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    _DirectoryObject.prototype.getMemberObjects = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return graphPost(this.clone(DirectoryObject, "getMemberObjects"), request_builders_body({ securityEnabledOnly: securityEnabledOnly }));
    };
    /**
     * Returns all the groups that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    _DirectoryObject.prototype.getMemberGroups = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return graphPost(this.clone(DirectoryObject, "getMemberGroups"), request_builders_body({ securityEnabledOnly: securityEnabledOnly }));
    };
    /**
     * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
     * This function is transitive.
     * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
     */
    _DirectoryObject.prototype.checkMemberGroups = function (groupIds) {
        return graphPost(this.clone(DirectoryObject, "checkMemberGroups"), request_builders_body({ groupIds: groupIds }));
    };
    _DirectoryObject = __decorate([
        deleteable()
    ], _DirectoryObject);
    return _DirectoryObject;
}(graphqueryable_GraphQueryableInstance));

var DirectoryObject = graphInvokableFactory(types_DirectoryObject);
/**
 * Describes a collection of Directory Objects
 *
 */
var types_DirectoryObjects = /** @class */ (function (_super) {
    __extends(_DirectoryObjects, _super);
    function _DirectoryObjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
    * The $select query option is not available for this operation.
    *
    * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
    * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
    */
    _DirectoryObjects.prototype.getByIds = function (ids, type) {
        if (type === void 0) { type = DirectoryObjectTypes.directoryObject; }
        return graphPost(this.clone(DirectoryObjects, "getByIds"), request_builders_body({ ids: ids, type: type }));
    };
    _DirectoryObjects = __decorate([
        defaultPath("directoryObjects"),
        getById(DirectoryObject)
    ], _DirectoryObjects);
    return _DirectoryObjects;
}(graphqueryable_GraphQueryableCollection));

var DirectoryObjects = graphInvokableFactory(types_DirectoryObjects);
/**
 * DirectoryObjectTypes
 */
var DirectoryObjectTypes;
(function (DirectoryObjectTypes) {
    /**
     * Directory Objects
     */
    DirectoryObjectTypes[DirectoryObjectTypes["directoryObject"] = 0] = "directoryObject";
    /**
     * User
     */
    DirectoryObjectTypes[DirectoryObjectTypes["user"] = 1] = "user";
    /**
     * Group
     */
    DirectoryObjectTypes[DirectoryObjectTypes["group"] = 2] = "group";
    /**
     * Device
     */
    DirectoryObjectTypes[DirectoryObjectTypes["device"] = 3] = "device";
})(DirectoryObjectTypes || (DirectoryObjectTypes = {}));

// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/types.js







var GroupType;
(function (GroupType) {
    /**
     * Office 365 (aka unified group)
     */
    GroupType[GroupType["Office365"] = 0] = "Office365";
    /**
     * Dynamic membership
     */
    GroupType[GroupType["Dynamic"] = 1] = "Dynamic";
    /**
     * Security
     */
    GroupType[GroupType["Security"] = 2] = "Security";
})(GroupType || (GroupType = {}));
/**
 * Represents a group entity
 */
var types_Group = /** @class */ (function (_super) {
    __extends(_Group, _super);
    function _Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    _Group.prototype.addFavorite = function () {
        return graphPost(this.clone(Group, "addFavorite"));
    };
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    _Group.prototype.removeFavorite = function () {
        return graphPost(this.clone(Group, "removeFavorite"));
    };
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    _Group.prototype.resetUnseenCount = function () {
        return graphPost(this.clone(Group, "resetUnseenCount"));
    };
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    _Group.prototype.subscribeByMail = function () {
        return graphPost(this.clone(Group, "subscribeByMail"));
    };
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    _Group.prototype.unsubscribeByMail = function () {
        return graphPost(this.clone(Group, "unsubscribeByMail"));
    };
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    _Group.prototype.getCalendarView = function (start, end) {
        var view = this.clone(Group, "calendarView");
        view.query.set("startDateTime", start.toISOString());
        view.query.set("endDateTime", end.toISOString());
        return view();
    };
    _Group = __decorate([
        deleteable(),
        updateable()
    ], _Group);
    return _Group;
}(types_DirectoryObject));

var Group = graphInvokableFactory(types_Group);
/**
 * Describes a collection of Field objects
 *
 */
var types_Groups = /** @class */ (function (_super) {
    __extends(_Groups, _super);
    function _Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    _Groups.prototype.add = function (name, mailNickname, groupType, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({
                            displayName: name,
                            mailEnabled: groupType === GroupType.Office365,
                            mailNickname: mailNickname,
                            securityEnabled: groupType !== GroupType.Office365,
                        }, additionalProperties);
                        // include a group type if required
                        if (groupType !== GroupType.Security) {
                            postBody = Object(common["assign"])(postBody, {
                                groupTypes: groupType === GroupType.Office365 ? ["Unified"] : ["DynamicMembership"],
                            });
                        }
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                group: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Groups = __decorate([
        defaultPath("groups"),
        getById(Group)
    ], _Groups);
    return _Groups;
}(graphqueryable_GraphQueryableCollection));

var Groups = graphInvokableFactory(types_Groups);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/funcs.js

/**
 * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range,
 * from the user's default calendar, or from some other calendar of the user's
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
function calendarView(start, end) {
    var query = this.clone(GraphQueryableCollection, "calendarView");
    query.query.set("startDateTime", encodeURIComponent(start));
    query.query.set("endDateTime", encodeURIComponent(end));
    return query;
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/types.js






/**
 * Calendar
 */
var types_Calendar = /** @class */ (function (_super) {
    __extends(_Calendar, _super);
    function _Calendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calendarView = calendarView;
        return _this;
    }
    Object.defineProperty(_Calendar.prototype, "events", {
        get: function () {
            return Events(this);
        },
        enumerable: false,
        configurable: true
    });
    return _Calendar;
}(graphqueryable_GraphQueryableInstance));

var Calendar = graphInvokableFactory(types_Calendar);
/**
 * Calendars
 */
var types_Calendars = /** @class */ (function (_super) {
    __extends(_Calendars, _super);
    function _Calendars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Calendars = __decorate([
        defaultPath("calendars"),
        getById(Calendar)
    ], _Calendars);
    return _Calendars;
}(graphqueryable_GraphQueryableCollection));

var Calendars = graphInvokableFactory(types_Calendars);
/**
 * Event
 */
var types_Event = /** @class */ (function (_super) {
    __extends(_Event, _super);
    function _Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Event = __decorate([
        deleteable(),
        updateable()
    ], _Event);
    return _Event;
}(graphqueryable_GraphQueryableInstance));

var Event = graphInvokableFactory(types_Event);
/**
 * Events
 */
var types_Events = /** @class */ (function (_super) {
    __extends(_Events, _super);
    function _Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    _Events.prototype.add = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, request_builders_body(properties))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                event: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Events = __decorate([
        defaultPath("events"),
        getById(Event)
    ], _Events);
    return _Events;
}(graphqueryable_GraphQueryableCollection));

var Events = graphInvokableFactory(types_Events);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/groups.js



addProp(types_Group, "calendar", Calendar, "calendar");
addProp(types_Group, "events", Events);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/types.js




var types_User = /** @class */ (function (_super) {
    __extends(_User, _super);
    function _User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_User.prototype, "memberOf", {
        /**
        * The groups and directory roles associated with the user
        */
        get: function () {
            return DirectoryObjects(this, "memberOf");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_User.prototype, "people", {
        /**
         * Retrieve a collection of person objects ordered by their relevance to the user
         */
        get: function () {
            return People(this);
        },
        enumerable: false,
        configurable: true
    });
    _User = __decorate([
        updateable(),
        deleteable()
    ], _User);
    return _User;
}(types_DirectoryObject));

var User = graphInvokableFactory(types_User);
var types_Users = /** @class */ (function (_super) {
    __extends(_Users, _super);
    function _Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Users = __decorate([
        defaultPath("users"),
        getById(User)
    ], _Users);
    return _Users;
}(graphqueryable_GraphQueryableCollection));

var Users = graphInvokableFactory(types_Users);
var types_People = /** @class */ (function (_super) {
    __extends(_People, _super);
    function _People() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _People = __decorate([
        defaultPath("people")
    ], _People);
    return _People;
}(graphqueryable_GraphQueryableCollection));

var People = graphInvokableFactory(types_People);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/users.js




addProp(types_User, "calendar", Calendar, "calendar");
addProp(types_User, "calendars", Calendars, "calendars");
addProp(types_User, "events", Events);
types_User.prototype.calendarView = calendarView;

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/index.js




// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/types.js






/**
 * Contact
 */
var types_Contact = /** @class */ (function (_super) {
    __extends(_Contact, _super);
    function _Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Contact = __decorate([
        updateable(),
        deleteable()
    ], _Contact);
    return _Contact;
}(graphqueryable_GraphQueryableInstance));

var Contact = graphInvokableFactory(types_Contact);
/**
 * Contacts
 */
var types_Contacts = /** @class */ (function (_super) {
    __extends(_Contacts, _super);
    function _Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    _Contacts.prototype.add = function (givenName, surName, emailAddresses, businessPhones, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({ businessPhones: businessPhones, emailAddresses: emailAddresses, givenName: givenName, surName: surName }, additionalProperties);
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contact: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Contacts = __decorate([
        defaultPath("contacts"),
        getById(Contact)
    ], _Contacts);
    return _Contacts;
}(graphqueryable_GraphQueryableCollection));

var Contacts = graphInvokableFactory(types_Contacts);
/**
 * Contact Folder
 */
var types_ContactFolder = /** @class */ (function (_super) {
    __extends(_ContactFolder, _super);
    function _ContactFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_ContactFolder.prototype, "contacts", {
        /**
         * Gets the contacts in this contact folder
         */
        get: function () {
            return Contacts(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ContactFolder.prototype, "childFolders", {
        /**
        * Gets the contacts in this contact folder
        */
        get: function () {
            return ContactFolders(this, "childFolders");
        },
        enumerable: false,
        configurable: true
    });
    _ContactFolder = __decorate([
        deleteable(),
        updateable()
    ], _ContactFolder);
    return _ContactFolder;
}(graphqueryable_GraphQueryableInstance));

var ContactFolder = graphInvokableFactory(types_ContactFolder);
/**
 * Contact Folders
 */
var types_ContactFolders = /** @class */ (function (_super) {
    __extends(_ContactFolders, _super);
    function _ContactFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    _ContactFolders.prototype.add = function (displayName, parentFolderId) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            displayName: displayName,
                            parentFolderId: parentFolderId,
                        };
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contactFolder: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _ContactFolders = __decorate([
        defaultPath("contactFolders"),
        getById(ContactFolder)
    ], _ContactFolders);
    return _ContactFolders;
}(graphqueryable_GraphQueryableCollection));

var ContactFolders = graphInvokableFactory(types_ContactFolders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/users.js



addProp(types_User, "contacts", Contacts);
addProp(types_User, "contactFolders", ContactFolders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/groups.js



addProp(types_Group, "conversations", Conversations);
addProp(types_Group, "acceptedSenders", Senders, "acceptedsenders");
addProp(types_Group, "rejectedSenders", Senders, "rejectedsenders");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/batch.js







var batch_GraphBatch = /** @class */ (function (_super) {
    __extends(GraphBatch, _super);
    function GraphBatch(batchUrl, maxRequests) {
        if (batchUrl === void 0) { batchUrl = "v1.0/$batch"; }
        if (maxRequests === void 0) { maxRequests = 20; }
        var _this = _super.call(this) || this;
        _this.batchUrl = batchUrl;
        _this.maxRequests = maxRequests;
        return _this;
    }
    /**
     * Urls come to the batch absolute, but the processor expects relative
     * @param url Url to ensure is relative
     */
    GraphBatch.makeUrlRelative = function (url) {
        if (!Object(common["isUrlAbsolute"])(url)) {
            // already not absolute, just give it back
            return url;
        }
        var index = url.indexOf(".com/v1.0/");
        if (index < 0) {
            index = url.indexOf(".com/beta/");
            if (index > -1) {
                // beta url
                return url.substr(index + 10);
            }
        }
        else {
            // v1.0 url
            return url.substr(index + 9);
        }
        // no idea
        return url;
    };
    GraphBatch.formatRequests = function (requests) {
        var _this = this;
        return requests.map(function (reqInfo, index) {
            var requestFragment = {
                id: "" + ++index,
                method: reqInfo.method,
                url: _this.makeUrlRelative(reqInfo.url),
            };
            var headers = {};
            // merge global config headers
            if (GraphRuntimeConfig.headers !== undefined && GraphRuntimeConfig.headers !== null) {
                headers = Object(common["assign"])(headers, GraphRuntimeConfig.headers);
            }
            if (reqInfo.options !== undefined) {
                // merge per request headers
                if (reqInfo.options.headers !== undefined && reqInfo.options.headers !== null) {
                    headers = Object(common["assign"])(headers, reqInfo.options.headers);
                }
                // all non-get requests need their own content-type header
                if (reqInfo.method !== "GET") {
                    headers["Content-Type"] = "application/json";
                }
                // add a request body
                if (reqInfo.options.body !== undefined && reqInfo.options.body !== null) {
                    // we need to parse the body which was previously turned into a string
                    requestFragment = Object(common["assign"])(requestFragment, {
                        body: JSON.parse(reqInfo.options.body),
                    });
                }
            }
            requestFragment = Object(common["assign"])(requestFragment, {
                headers: headers,
            });
            return requestFragment;
        });
    };
    GraphBatch.parseResponse = function (requests, graphResponse) {
        return new Promise(function (resolve, reject) {
            // we need to see if we have an error and report that
            if (Object(common["hOP"])(graphResponse, "error")) {
                return reject(Error("Error Porcessing Batch: (" + graphResponse.error.code + ") " + graphResponse.error.message));
            }
            var parsedResponses = new Array(requests.length).fill(null);
            for (var i = 0; i < graphResponse.responses.length; ++i) {
                var response = graphResponse.responses[i];
                // we create the request id by adding 1 to the index, so we place the response by subtracting one to match
                // the array of requests and make it easier to map them by index
                var responseId = parseInt(response.id, 10) - 1;
                if (response.status === 204) {
                    parsedResponses[responseId] = new Response();
                }
                else {
                    parsedResponses[responseId] = new Response(JSON.stringify(response.body), response);
                }
            }
            resolve({
                nextLink: graphResponse.nextLink,
                responses: parsedResponses,
            });
        });
    };
    GraphBatch.prototype.executeImpl = function () {
        var _this = this;
        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        if (this.requests.length < 1) {
            Logger.write("Resolving empty batch.", 1 /* Info */);
            return Promise.resolve();
        }
        var client = new graphhttpclient_GraphHttpClient();
        // create a working copy of our requests
        var requests = this.requests.slice();
        var error = false;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _loop_1, this_1, state_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function () {
                            var requestsChunk, batchRequest, batchOptions, queryUrl;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        requestsChunk = requests.splice(0, this_1.maxRequests);
                                        batchRequest = {
                                            requests: GraphBatch.formatRequests(requestsChunk),
                                        };
                                        batchOptions = {
                                            body: Object(common["jsS"])(batchRequest),
                                            headers: {
                                                "Accept": "application/json",
                                                "Content-Type": "application/json",
                                            },
                                            method: "POST",
                                        };
                                        Logger.write("[" + this_1.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
                                        return [4 /*yield*/, toAbsoluteUrl(this_1.batchUrl)];
                                    case 1:
                                        queryUrl = _a.sent();
                                        return [4 /*yield*/, client.fetch(queryUrl, batchOptions)
                                                .then(function (r) { return r.json(); })
                                                .then(function (j) { return GraphBatch.parseResponse(requestsChunk, j); })
                                                .then(function (parsedResponse) {
                                                Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                                                parsedResponse.responses.reduce(function (chain, response, index) {
                                                    var request = requestsChunk[index];
                                                    Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched request " + request.method + " " + request.url + ".", 0 /* Verbose */);
                                                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                                                }, Promise.resolve());
                                            }).catch(function (e) {
                                                reject(e);
                                                error = true;
                                            })];
                                    case 2:
                                        _a.sent();
                                        if (error) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!(requests.length > 0)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 3];
                        return [3 /*break*/, 1];
                    case 3:
                        if (!error) {
                            // if we didn't have an error go ahead and resolve the promise as successful
                            resolve();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return GraphBatch;
}(batch_Batch));


// CONCATENATED MODULE: ./node_modules/@pnp/graph/rest.js




var rest_GraphRest = /** @class */ (function (_super) {
    __extends(GraphRest, _super);
    function GraphRest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphRest.prototype.createBatch = function () {
        return new batch_GraphBatch();
    };
    GraphRest.prototype.setup = function (config) {
        if (config.pageContext) {
            setup({
                spfxContext: config,
            });
        }
        else {
            setup(config);
        }
    };
    return GraphRest;
}(graphqueryable_GraphQueryable));

var graph = new rest_GraphRest("v1.0");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "directoryObjects", {
    configurable: true,
    enumerable: true,
    get: function () {
        return DirectoryObjects(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "groups", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Groups(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/types.js



/**
 * Represents a insights entity
 */
var types_Insights = /** @class */ (function (_super) {
    __extends(_Insights, _super);
    function _Insights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Insights.prototype, "trending", {
        get: function () {
            return TrendingInsights(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Insights.prototype, "used", {
        get: function () {
            return UsedInsights(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Insights.prototype, "shared", {
        get: function () {
            return SharedInsights(this);
        },
        enumerable: false,
        configurable: true
    });
    _Insights = __decorate([
        defaultPath("insights")
    ], _Insights);
    return _Insights;
}(graphqueryable_GraphQueryableInstance));

var Insights = graphInvokableFactory(types_Insights);
/**
 * Describes a Trending Insight instance
 */
var types_TrendingInsight = /** @class */ (function (_super) {
    __extends(_TrendingInsight, _super);
    function _TrendingInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_TrendingInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: false,
        configurable: true
    });
    return _TrendingInsight;
}(graphqueryable_GraphQueryableInstance));

var TrendingInsight = graphInvokableFactory(types_TrendingInsight);
/**
 * Describes a collection of Trending Insight objects
 *
 */
var types_TrendingInsights = /** @class */ (function (_super) {
    __extends(_TrendingInsights, _super);
    function _TrendingInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _TrendingInsights = __decorate([
        defaultPath("trending"),
        getById(TrendingInsight)
    ], _TrendingInsights);
    return _TrendingInsights;
}(graphqueryable_GraphQueryableCollection));

var TrendingInsights = graphInvokableFactory(types_TrendingInsights);
/**
 * Describes a Used Insight instance
 */
var types_UsedInsight = /** @class */ (function (_super) {
    __extends(_UsedInsight, _super);
    function _UsedInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_UsedInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: false,
        configurable: true
    });
    return _UsedInsight;
}(graphqueryable_GraphQueryableInstance));

var UsedInsight = graphInvokableFactory(types_UsedInsight);
/**
 * Describes a collection of Used Insight objects
 *
 */
var types_UsedInsights = /** @class */ (function (_super) {
    __extends(_UsedInsights, _super);
    function _UsedInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _UsedInsights = __decorate([
        defaultPath("used"),
        getById(UsedInsight)
    ], _UsedInsights);
    return _UsedInsights;
}(graphqueryable_GraphQueryableCollection));

var UsedInsights = graphInvokableFactory(types_UsedInsights);
/**
 * Describes a Shared Insight instance
 */
var types_SharedInsight = /** @class */ (function (_super) {
    __extends(_SharedInsight, _super);
    function _SharedInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_SharedInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: false,
        configurable: true
    });
    return _SharedInsight;
}(graphqueryable_GraphQueryableInstance));

var SharedInsight = graphInvokableFactory(types_SharedInsight);
/**
 * Describes a collection of Shared Insight objects
 *
 */
var types_SharedInsights = /** @class */ (function (_super) {
    __extends(_SharedInsights, _super);
    function _SharedInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _SharedInsights = __decorate([
        defaultPath("shared"),
        getById(SharedInsight)
    ], _SharedInsights);
    return _SharedInsights;
}(graphqueryable_GraphQueryableCollection));

var SharedInsights = graphInvokableFactory(types_SharedInsights);
/**
 * Describes a Resource Entity instance
 */
var types_Resource = /** @class */ (function (_super) {
    __extends(_Resource, _super);
    function _Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Resource = __decorate([
        defaultPath("resource")
    ], _Resource);
    return _Resource;
}(graphqueryable_GraphQueryableInstance));

var Resource = graphInvokableFactory(types_Resource);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/users.js



addProp(types_User, "insights", Insights);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/types.js






/**
 * Invitations
 */
var types_Invitations = /** @class */ (function (_super) {
    __extends(_Invitations, _super);
    function _Invitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Invitation via invitation manager.
     *
     * @param invitedUserEmailAddress The email address of the user being invited.
     * @param inviteRedirectUrl The URL user should be redirected to once the invitation is redeemed.
     * @param additionalProperties A plain object collection of additional properties you want to set in the invitation
     */
    _Invitations.prototype.create = function (invitedUserEmailAddress, inviteRedirectUrl, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({ inviteRedirectUrl: inviteRedirectUrl, invitedUserEmailAddress: invitedUserEmailAddress }, additionalProperties);
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data }];
                }
            });
        });
    };
    _Invitations = __decorate([
        defaultPath("invitations")
    ], _Invitations);
    return _Invitations;
}(graphqueryable_GraphQueryableCollection));

var Invitations = graphInvokableFactory(types_Invitations);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "invitations", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Invitations(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/types.js





/**
 * Member
 */
var types_Member = /** @class */ (function (_super) {
    __extends(_Member, _super);
    function _Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes this Member
     */
    _Member.prototype.remove = function () {
        return graphDelete(this.clone(Member, "$ref"));
    };
    return _Member;
}(graphqueryable_GraphQueryableInstance));

var Member = graphInvokableFactory(types_Member);
/**
 * Members
 */
var types_Members = /** @class */ (function (_super) {
    __extends(_Members, _super);
    function _Members() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: `https://graph.microsoft.com/v1.0/directoryObjects/${id}`)
     */
    _Members.prototype.add = function (id) {
        return graphPost(this.clone(Members, "$ref"), request_builders_body({ "@odata.id": id }));
    };
    _Members = __decorate([
        defaultPath("members"),
        getById(Member)
    ], _Members);
    return _Members;
}(graphqueryable_GraphQueryableCollection));

var Members = graphInvokableFactory(types_Members);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/groups.js



addProp(types_Group, "owners", Members, "owners");
addProp(types_Group, "members", Members);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/types.js



/**
 * Message
 */
var types_Message = /** @class */ (function (_super) {
    __extends(_Message, _super);
    function _Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Message;
}(graphqueryable_GraphQueryableInstance));

var Message = graphInvokableFactory(types_Message);
/**
 * Messages
 */
var types_Messages = /** @class */ (function (_super) {
    __extends(_Messages, _super);
    function _Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Messages = __decorate([
        defaultPath("messages"),
        getById(Message),
        addable()
    ], _Messages);
    return _Messages;
}(graphqueryable_GraphQueryableCollection));

var Messages = graphInvokableFactory(types_Messages);
/**
 * MailFolder
 */
var types_MailFolder = /** @class */ (function (_super) {
    __extends(_MailFolder, _super);
    function _MailFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _MailFolder;
}(graphqueryable_GraphQueryableInstance));

var MailFolder = graphInvokableFactory(types_MailFolder);
/**
 * MailFolders
 */
var types_MailFolders = /** @class */ (function (_super) {
    __extends(_MailFolders, _super);
    function _MailFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailFolders = __decorate([
        defaultPath("mailFolders"),
        getById(MailFolder),
        addable()
    ], _MailFolders);
    return _MailFolders;
}(graphqueryable_GraphQueryableCollection));

var MailFolders = graphInvokableFactory(types_MailFolders);
/**
 * MailboxSettings
 */
var types_MailboxSettings = /** @class */ (function (_super) {
    __extends(_MailboxSettings, _super);
    function _MailboxSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailboxSettings = __decorate([
        defaultPath("mailboxSettings"),
        updateable()
    ], _MailboxSettings);
    return _MailboxSettings;
}(graphqueryable_GraphQueryableInstance));

var MailboxSettings = graphInvokableFactory(types_MailboxSettings);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/users.js




addProp(types_User, "messages", Messages);
addProp(types_User, "mailboxSettings", MailboxSettings);
addProp(types_User, "mailFolders", MailFolders);
types_User.prototype.sendMail = function (message) {
    return graphPost(this.clone(User, "sendMail"), request_builders_body(message));
};

// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/types.js






/**
 * Describes a Drive instance
 *
 */
var types_Drive = /** @class */ (function (_super) {
    __extends(_Drive, _super);
    function _Drive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Drive.prototype, "root", {
        get: function () {
            return Root(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "list", {
        get: function () {
            return this.clone(GraphQueryableInstance, "list");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "recent", {
        get: function () {
            return DriveItems(this, "recent");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "sharedWithMe", {
        get: function () {
            return DriveItems(this, "sharedWithMe");
        },
        enumerable: false,
        configurable: true
    });
    _Drive.prototype.getItemById = function (id) {
        return DriveItem(this, Object(common["combine"])("items", id));
    };
    _Drive = __decorate([
        defaultPath("drive")
    ], _Drive);
    return _Drive;
}(graphqueryable_GraphQueryableInstance));

var Drive = graphInvokableFactory(types_Drive);
/**
 * Describes a collection of Drive objects
 *
 */
var types_Drives = /** @class */ (function (_super) {
    __extends(_Drives, _super);
    function _Drives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Drives = __decorate([
        defaultPath("drives"),
        getById(Drive)
    ], _Drives);
    return _Drives;
}(graphqueryable_GraphQueryableCollection));

var Drives = graphInvokableFactory(types_Drives);
/**
 * Describes a Root instance
 *
 */
var types_Root = /** @class */ (function (_super) {
    __extends(_Root, _super);
    function _Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Root.prototype, "children", {
        get: function () {
            return DriveItems(this, "children");
        },
        enumerable: false,
        configurable: true
    });
    _Root.prototype.search = function (query) {
        var searcher = this.clone(Root);
        searcher.query.set("search", "'" + query + "'");
        return searcher();
    };
    Object.defineProperty(_Root.prototype, "thumbnails", {
        get: function () {
            return this.clone(GraphQueryableCollection, "thumbnails");
        },
        enumerable: false,
        configurable: true
    });
    _Root = __decorate([
        defaultPath("root")
    ], _Root);
    return _Root;
}(graphqueryable_GraphQueryableInstance));

var Root = graphInvokableFactory(types_Root);
/**
 * Describes a Drive Item instance
 *
 */
var types_DriveItem = /** @class */ (function (_super) {
    __extends(_DriveItem, _super);
    function _DriveItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_DriveItem.prototype, "children", {
        get: function () {
            return DriveItems(this, "children");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_DriveItem.prototype, "thumbnails", {
        get: function () {
            return this.clone(GraphQueryableCollection, "thumbnails");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_DriveItem.prototype, "versions", {
        get: function () {
            return this.clone(GraphQueryableCollection, "versions");
        },
        enumerable: false,
        configurable: true
    });
    _DriveItem.prototype.move = function (parentReference, name) {
        return graphPatch(this, request_builders_body(Object(common["assign"])(parentReference, { name: name })));
    };
    _DriveItem.prototype.getContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, r, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this()];
                    case 1:
                        info = _a.sent();
                        return [4 /*yield*/, common["safeGlobal"].fetch(info["@microsoft.graph.downloadUrl"], {
                                headers: {
                                    "accept": "application/json",
                                },
                                method: "GET",
                                responseType: "arraybuffer",
                            })];
                    case 2:
                        r = _a.sent();
                        p = new parsers_BlobParser();
                        return [2 /*return*/, p.parse(r)];
                }
            });
        });
    };
    _DriveItem.prototype.setContent = function (content) {
        return graphPut(this.clone(DriveItem, "content"), {
            body: content,
        });
    };
    _DriveItem = __decorate([
        deleteable(),
        updateable()
    ], _DriveItem);
    return _DriveItem;
}(graphqueryable_GraphQueryableInstance));

var DriveItem = graphInvokableFactory(types_DriveItem);
/**
 * Describes a collection of Drive Item objects
 *
 */
var types_DriveItems = /** @class */ (function (_super) {
    __extends(_DriveItems, _super);
    function _DriveItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _DriveItems = __decorate([
        getById(DriveItem)
    ], _DriveItems);
    return _DriveItems;
}(graphqueryable_GraphQueryableCollection));

var DriveItems = graphInvokableFactory(types_DriveItems);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/users.js



addProp(types_User, "drive", Drive);
addProp(types_User, "drives", Drives);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/types.js





/**
 * Represents a onenote entity
 */
var types_OneNote = /** @class */ (function (_super) {
    __extends(_OneNote, _super);
    function _OneNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_OneNote.prototype, "notebooks", {
        get: function () {
            return Notebooks(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_OneNote.prototype, "sections", {
        get: function () {
            return Sections(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_OneNote.prototype, "pages", {
        get: function () {
            return this.clone(GraphQueryableCollection, "pages");
        },
        enumerable: false,
        configurable: true
    });
    _OneNote = __decorate([
        defaultPath("onenote")
    ], _OneNote);
    return _OneNote;
}(graphqueryable_GraphQueryableInstance));

var OneNote = graphInvokableFactory(types_OneNote);
/**
 * Describes a notebook instance
 *
 */
var types_Notebook = /** @class */ (function (_super) {
    __extends(_Notebook, _super);
    function _Notebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Notebook.prototype, "sections", {
        get: function () {
            return Sections(this);
        },
        enumerable: false,
        configurable: true
    });
    return _Notebook;
}(graphqueryable_GraphQueryableInstance));

var Notebook = graphInvokableFactory(types_Notebook);
/**
 * Describes a collection of Notebook objects
 *
 */
var types_Notebooks = /** @class */ (function (_super) {
    __extends(_Notebooks, _super);
    function _Notebooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    _Notebooks.prototype.add = function (displayName) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, request_builders_body({ displayName: displayName }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                notebook: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Notebooks = __decorate([
        defaultPath("notebooks"),
        getById(Notebook)
    ], _Notebooks);
    return _Notebooks;
}(graphqueryable_GraphQueryableCollection));

var Notebooks = graphInvokableFactory(types_Notebooks);
/**
 * Describes a sections instance
 */
var types_Section = /** @class */ (function (_super) {
    __extends(_Section, _super);
    function _Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Section;
}(graphqueryable_GraphQueryableInstance));

var Section = graphInvokableFactory(types_Section);
/**
 * Describes a collection of Sections objects
 *
 */
var types_Sections = /** @class */ (function (_super) {
    __extends(_Sections, _super);
    function _Sections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    _Sections.prototype.add = function (displayName) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, request_builders_body({ displayName: displayName }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                section: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Sections = __decorate([
        defaultPath("sections"),
        getById(Section)
    ], _Sections);
    return _Sections;
}(graphqueryable_GraphQueryableCollection));

var Sections = graphInvokableFactory(types_Sections);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/users.js



addProp(types_User, "onenote", OneNote);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/types.js





var types_Photo = /** @class */ (function (_super) {
    __extends(_Photo, _super);
    function _Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the image bytes as a blob (browser)
     */
    _Photo.prototype.getBlob = function () {
        return this.clone(Photo, "$value", false).usingParser(new parsers_BlobParser())();
    };
    /**
     * Gets the image file bytes as a Buffer (node.js)
     */
    _Photo.prototype.getBuffer = function () {
        return this.clone(Photo, "$value", false).usingParser(new parsers_BufferParser())();
    };
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    _Photo.prototype.setContent = function (content) {
        return graphPatch(this.clone(Photo, "$value", false), { body: content });
    };
    _Photo = __decorate([
        defaultPath("photo")
    ], _Photo);
    return _Photo;
}(graphqueryable_GraphQueryableInstance));

var Photo = graphInvokableFactory(types_Photo);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/groups.js



addProp(types_Group, "photo", Photo);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/users.js



addProp(types_User, "photo", Photo);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/index.js




// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/types.js







/**
 * Planner
 */
var types_Planner = /** @class */ (function (_super) {
    __extends(_Planner, _super);
    function _Planner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Planner.prototype, "plans", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Plans(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Planner.prototype, "tasks", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Tasks(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Planner.prototype, "buckets", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Buckets(this);
        },
        enumerable: false,
        configurable: true
    });
    _Planner = __decorate([
        defaultPath("planner")
    ], _Planner);
    return _Planner;
}(graphqueryable_GraphQueryableInstance));

var Planner = graphInvokableFactory(types_Planner);
/**
 * Details
 */
var types_PlanDetails = /** @class */ (function (_super) {
    __extends(_PlanDetails, _super);
    function _PlanDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _PlanDetails = __decorate([
        defaultPath("details"),
        updateableWithETag()
    ], _PlanDetails);
    return _PlanDetails;
}(graphqueryable_GraphQueryableInstance));

var PlanDetails = graphInvokableFactory(types_PlanDetails);
/**
 * Plan
 */
var types_Plan = /** @class */ (function (_super) {
    __extends(_Plan, _super);
    function _Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Plan.prototype, "tasks", {
        get: function () {
            return Tasks(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Plan.prototype, "buckets", {
        get: function () {
            return Buckets(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Plan.prototype, "details", {
        get: function () {
            return PlanDetails(this);
        },
        enumerable: false,
        configurable: true
    });
    _Plan = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Plan);
    return _Plan;
}(graphqueryable_GraphQueryableInstance));

var Plan = graphInvokableFactory(types_Plan);
var types_Plans = /** @class */ (function (_super) {
    __extends(_Plans, _super);
    function _Plans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    _Plans.prototype.add = function (owner, title) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, request_builders_body({ owner: owner, title: title }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                plan: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Plans = __decorate([
        defaultPath("plans"),
        getById(Plan)
    ], _Plans);
    return _Plans;
}(graphqueryable_GraphQueryableCollection));

var Plans = graphInvokableFactory(types_Plans);
/**
 * Details
 */
var types_TaskDetails = /** @class */ (function (_super) {
    __extends(_TaskDetails, _super);
    function _TaskDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _TaskDetails = __decorate([
        defaultPath("details"),
        updateableWithETag()
    ], _TaskDetails);
    return _TaskDetails;
}(graphqueryable_GraphQueryableInstance));

var TaskDetails = graphInvokableFactory(types_TaskDetails);
/**
 * Task
 */
var types_Task = /** @class */ (function (_super) {
    __extends(_Task, _super);
    function _Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Task.prototype, "details", {
        get: function () {
            return TaskDetails(this);
        },
        enumerable: false,
        configurable: true
    });
    _Task = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Task);
    return _Task;
}(graphqueryable_GraphQueryableInstance));

var Task = graphInvokableFactory(types_Task);
/**
 * Tasks
 */
var types_Tasks = /** @class */ (function (_super) {
    __extends(_Tasks, _super);
    function _Tasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    _Tasks.prototype.add = function (planId, title, assignments, bucketId) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({
                            planId: planId,
                            title: title,
                        }, assignments);
                        if (bucketId) {
                            postBody = Object(common["assign"])(postBody, {
                                bucketId: bucketId,
                            });
                        }
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                task: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Tasks = __decorate([
        defaultPath("tasks"),
        getById(Task)
    ], _Tasks);
    return _Tasks;
}(graphqueryable_GraphQueryableCollection));

var Tasks = graphInvokableFactory(types_Tasks);
/**
 * Bucket
 */
var types_Bucket = /** @class */ (function (_super) {
    __extends(_Bucket, _super);
    function _Bucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Bucket.prototype, "tasks", {
        get: function () {
            return Tasks(this);
        },
        enumerable: false,
        configurable: true
    });
    _Bucket = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Bucket);
    return _Bucket;
}(graphqueryable_GraphQueryableInstance));

var Bucket = graphInvokableFactory(types_Bucket);
/**
 * Buckets
 */
var types_Buckets = /** @class */ (function (_super) {
    __extends(_Buckets, _super);
    function _Buckets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    _Buckets.prototype.add = function (name, planId, orderHint) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            name: name,
                            orderHint: orderHint ? orderHint : "",
                            planId: planId,
                        };
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                bucket: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Buckets = __decorate([
        defaultPath("buckets"),
        getById(Bucket)
    ], _Buckets);
    return _Buckets;
}(graphqueryable_GraphQueryableCollection));

var Buckets = graphInvokableFactory(types_Buckets);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/groups.js



addProp(types_Group, "plans", Plans, "planner/plans");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/users.js



addProp(types_User, "tasks", Tasks, "planner/tasks");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/index.js





Reflect.defineProperty(rest_GraphRest.prototype, "planner", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Planner(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/types.js






/**
 * Subscription
 */
var types_Subscription = /** @class */ (function (_super) {
    __extends(_Subscription, _super);
    function _Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Subscription = __decorate([
        deleteable(),
        updateable()
    ], _Subscription);
    return _Subscription;
}(graphqueryable_GraphQueryableInstance));

var Subscription = graphInvokableFactory(types_Subscription);
/**
 * Subscriptions
 */
var types_Subscriptions = /** @class */ (function (_super) {
    __extends(_Subscriptions, _super);
    function _Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Subscription.
     *
     * @param changeType Indicates the type of change in the subscribed resource that will raise a notification. The supported values are: created, updated, deleted.
     * @param notificationUrl The URL of the endpoint that will receive the notifications. This URL must make use of the HTTPS protocol.
     * @param resource Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/).
     * @param expirationDateTime Specifies the date and time when the webhook subscription expires. The time is in UTC.
     * @param props A plain object collection of additional properties you want to set on the new subscription
     *
     */
    _Subscriptions.prototype.add = function (changeType, notificationUrl, resource, expirationDateTime, props) {
        if (props === void 0) { props = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({
                            changeType: changeType,
                            expirationDateTime: expirationDateTime,
                            notificationUrl: notificationUrl,
                            resource: resource,
                        }, props);
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                subscription: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Subscriptions = __decorate([
        defaultPath("subscriptions"),
        getById(Subscription)
    ], _Subscriptions);
    return _Subscriptions;
}(graphqueryable_GraphQueryableCollection));

var Subscriptions = graphInvokableFactory(types_Subscriptions);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "subscriptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Subscriptions(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/types.js







/**
 * Represents a Microsoft Team
 */
var types_Team = /** @class */ (function (_super) {
    __extends(_Team, _super);
    function _Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Team.prototype, "channels", {
        get: function () {
            return Channels(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    _Team.prototype.archive = function (shouldSetSpoSiteReadOnlyForMembers) {
        if (shouldSetSpoSiteReadOnlyForMembers === void 0) { shouldSetSpoSiteReadOnlyForMembers = false; }
        return graphPost(this.clone(Team, "archive"), request_builders_body({ shouldSetSpoSiteReadOnlyForMembers: shouldSetSpoSiteReadOnlyForMembers }));
    };
    /**
    * Unarchives this Team
    */
    _Team.prototype.unarchive = function () {
        return graphPost(this.clone(Team, "unarchive"));
    };
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    _Team.prototype.cloneTeam = function (name, description, partsToClone, visibility) {
        if (description === void 0) { description = ""; }
        if (partsToClone === void 0) { partsToClone = "apps,tabs,settings,channels,members"; }
        if (visibility === void 0) { visibility = "private"; }
        var postBody = {
            description: description ? description : "",
            displayName: name,
            mailNickname: name,
            partsToClone: partsToClone,
            visibility: visibility,
        };
        // TODO:: we need to get the Location header from the response and return an operation
        // instance that folks can query to see if/when this is complete
        // it could just have a single method getResult (or whatever) that returns a promise that
        // resolves when the operation is successful or rejects when it is not
        return graphPost(this.clone(Team, "clone"), request_builders_body(postBody));
    };
    _Team = __decorate([
        defaultPath("team"),
        updateable()
    ], _Team);
    return _Team;
}(graphqueryable_GraphQueryableInstance));

var Team = graphInvokableFactory(types_Team);
/**
 * Teams
 */
var types_Teams = /** @class */ (function (_super) {
    __extends(_Teams, _super);
    function _Teams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Teams = __decorate([
        defaultPath("teams"),
        getById(Team)
    ], _Teams);
    return _Teams;
}(graphqueryable_GraphQueryableCollection));

var Teams = graphInvokableFactory(types_Teams);
/**
 * Channel
 */
var types_Channel = /** @class */ (function (_super) {
    __extends(_Channel, _super);
    function _Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Channel.prototype, "tabs", {
        get: function () {
            return Tabs(this);
        },
        enumerable: false,
        configurable: true
    });
    return _Channel;
}(graphqueryable_GraphQueryableInstance));

var Channel = graphInvokableFactory(types_Channel);
/**
 * Channels
 */
var types_Channels = /** @class */ (function (_super) {
    __extends(_Channels, _super);
    function _Channels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new Channel in the Team
     * @param displayName The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    _Channels.prototype.add = function (displayName, description) {
        if (description === void 0) { description = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            description: description,
                            displayName: displayName,
                        };
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                channel: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Channels = __decorate([
        defaultPath("channels"),
        getById(Channel)
    ], _Channels);
    return _Channels;
}(graphqueryable_GraphQueryableCollection));

var Channels = graphInvokableFactory(types_Channels);
/**
 * Tab
 */
var types_Tab = /** @class */ (function (_super) {
    __extends(_Tab, _super);
    function _Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Tab = __decorate([
        defaultPath("tab"),
        updateable(),
        deleteable()
    ], _Tab);
    return _Tab;
}(graphqueryable_GraphQueryableInstance));

var Tab = graphInvokableFactory(types_Tab);
/**
 * Tabs
 */
var types_Tabs = /** @class */ (function (_super) {
    __extends(_Tabs, _super);
    function _Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a tab to the cahnnel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    _Tabs.prototype.add = function (name, appUrl, properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["assign"])({
                            displayName: name,
                            "teamsApp@odata.bind": appUrl,
                        }, properties);
                        return [4 /*yield*/, graphPost(this, request_builders_body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                tab: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Tabs = __decorate([
        defaultPath("tabs"),
        getById(Tab)
    ], _Tabs);
    return _Tabs;
}(graphqueryable_GraphQueryableCollection));

var Tabs = graphInvokableFactory(types_Tabs);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/users.js



addProp(types_User, "joinedTeams", Teams, "joinedTeams");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/index.js








addProp(types_Group, "team", Team);
types_Group.prototype.createTeam = function (props) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, graphPut(this.clone(Group, "team"), request_builders_body(props))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, {
                            data: data,
                            team: this.team,
                        }];
            }
        });
    });
};
Reflect.defineProperty(rest_GraphRest.prototype, "teams", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Teams(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "me", {
    configurable: true,
    enumerable: true,
    get: function () {
        return User(this, "me");
    },
});
Reflect.defineProperty(rest_GraphRest.prototype, "users", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Users(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/index.js






// CONCATENATED MODULE: ./node_modules/@pnp/graph/presets/all.js




































// CONCATENATED MODULE: ./pnpjs-sources/index-graph.ts



/***/ })
/******/ ]);
});