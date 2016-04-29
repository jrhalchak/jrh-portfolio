/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(154);
	module.exports = __webpack_require__(155);


/***/ },

/***/ 154:
/***/ function(module, exports) {

	'use strict';

	$(function () {
	  var $body = $('body'),
	      $homeBg = $('.js-homeBG'),
	      $3d = $('.js-logo3dEffect');
	  $body.on('mousemove', function (e) {
	    var cx = Math.ceil($body.width() / 2.0),
	        cy = Math.ceil($body.height() / 2.0),
	        dx = event.pageX - cx,
	        dy = event.pageY - cy,
	        tiltx = dy / cy,
	        tilty = dx / cx,
	        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)),
	        degree = radius * 20,
	        bgHeight = 25 / $body.height(),
	        bgWidth = 25 / $body.width(),
	        bgY = bgHeight * dy * -1 - 25,
	        bgX = bgWidth * dx * -1 - 25;

	    $3d.css({
	      'transform': 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
	    });

	    $homeBg.css({
	      'background-position': bgX + 'px ' + bgY + 'px'
	    });
	  });
	});

/***/ },

/***/ 155:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });