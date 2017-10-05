(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vRutDirective = __webpack_require__(1);

exports.install = function (Vue) {
	Vue.directive('rut', _vRutDirective.vRutDirective);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Formats Chilean DNI
 * @author Eduardo Aguad <eduaguad@gmail.com>
 *
 */

var vRutDirective = exports.vRutDirective = {
  data: {
    vModel: null
  },
  bind: function bind(el, binding, vnode) {
    el.value = format(el.value);
    setVModelValue(format(el.value), vnode);
  },
  update: function update(el, binding, vnode) {
    if (el.value < 3) return false;
    el.value = format(el.value);
    setVModelValue(el.value, vnode);
  }
};

/*
 * Format rut with dots and dash
 * @param {string} The value we need to format
 * @return {string} The formatted Rut
 */
function format(val) {
  if (val.length < 2) return val;
  return clean(val).slice(0, -1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + '-' + clean(val).slice(-1);
}

/*
 * Clean input value
 * @param {string} The value we need to clean
 * @return {string} Clean value
 */
function clean(val) {
  return val.replace(/[^[0-9kK]/g, '');
}

/*
 * Finds v-model expression
 * @param {Object} Vue vnode
 * @return {string} expression
 */
function findVModelName(vnode) {
  return vnode.data.directives.find(function (o) {
    return o.name === 'model';
  }).expression;
}

/*
 * Sets v-model value
 * @param {string} Value
 * @param {Object} Vue vnode
 */
function setVModelValue(value, vnode) {
  vnode.context[findVModelName(vnode)] = value;
}

/***/ })
/******/ ]);
});