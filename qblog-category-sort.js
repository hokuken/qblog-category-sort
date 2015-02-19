/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);

	$(function(){
	  var orderString = $('script[type="text/x-qblog-category-order"]').text().replace(/^\s+|\s+$/g, '');

	  var $categories = $('.qblog_categories');

	  var order = $(orderString.split("\n"))
	    .map(function(){
	      return this.replace(/^\s+|\s+$/g, '');
	    })
	    .filter(function(){
	      var categoryName = this;
	      var found = false;
	      $categories.children().each(function(i, el){
	        if ($(el).text().indexOf(categoryName) === 0) {
	          found = true;
	          return false;
	        }
	      });
	      return found;
	    }).get();

	  $(order).each(function(){
	    var categoryName = this;
	    $categories.children().each(function(i, el){
	      if ($(el).text().indexOf(categoryName) === 0) {
	        $(el).appendTo($categories);
	        return false;
	      }
	    });
	  });


	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ }
/******/ ])