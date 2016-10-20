(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LoadingBar"] = factory();
	else
		root["LoadingBar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* Vue 2 Loading Bar - Version 0.0.1
	*
	*/
	
	module.exports = {
	  name: "LoadingBar",
	
	  props: {
	    id: String,
	    customClass: String,
	
	    progress: {
	      type: Number,
	      default: 0
	    },
	
	    // the direction of loading bar
	    direction: {
	      type: String,
	      default: "right"
	    },
	
	    error: Boolean, // Loading Bar error state
	
	    onErrorDone: {
	      type: Function,
	      required: true
	    },
	
	    onProgressDone: {
	      type: Function,
	      required: true
	    }
	
	  },
	
	  data: function data() {
	
	    return {
	      // To show
	      show: true,
	
	      // binding class when it end
	      full: '',
	
	      // state to animate the width of loading bar
	      width: 0,
	
	      // indicate the loading bar is in 100% ( so, wait it till gone )
	      wait: false,
	
	      // Error State
	      myError: false
	    };
	  },
	  render: function render(h) {
	    var direction = this.direction;
	    var customClass = this.customClass;
	    var id = this.id;
	    var width = this.width;
	    var show = this.show;
	    var full = this.full;
	    var myError = this.myError;
	    var styling = this.styling;
	
	
	    return h(
	      "div",
	      null,
	      [show ? h(
	        "div",
	        {
	          attrs: {
	            id: id ? id : null
	          },
	          "class": 'LoadingBar LoadingBar--to_' + direction + ' ' + (customClass ? customClass : '') + (myError ? 'LoadingBar--error' : '') + (full ? 'LoadingBar--full' : ''),
	          style: styling() },
	        [h(
	          "div",
	          { "class": "LoadingBar-glow" },
	          []
	        )]
	      ) : null]
	    );
	  },
	
	
	  watch: {
	    progress: function progress(val, old) {
	      var _this = this;
	
	      if (old !== val) {
	        this.width = val;
	        setTimeout(function () {
	          _this.isFull();
	        });
	      }
	    },
	    error: function error(val, old) {
	      var _this2 = this;
	
	      if (old !== val) {
	        if (val) {
	          this.width = 100;
	          this.myError = true;
	          setTimeout(function () {
	            _this2.isFull();
	          });
	        }
	      }
	    }
	  },
	
	  methods: {
	    // Check whether the proggress is full
	    isFull: function isFull() {
	      var _this3 = this;
	
	      // Full Indicator
	      var isFull = this.width === 100;
	
	      // When the progress end or full
	      if (isFull) {
	        // Prevent new progress change
	        this.wait = true;
	
	        // Start animate it
	        setTimeout(function () {
	
	          // animate when element removed
	          _this3.full = true;
	          _this3.myError = false;
	
	          _this3.onErrorDone();
	
	          setTimeout(function () {
	            //remove bar element
	            _this3.show = false;
	            // New Element is available to create now
	            _this3.width = 0;
	            _this3.wait = false;
	
	            setTimeout(function () {
	
	              // Show Bar
	              _this3.full = '';
	              _this3.show = true;
	
	              _this3.onProgressDone();
	            });
	
	            // Duration to Waiting for slick hiding animation
	          }, 250);
	
	          // Duration is depend on css animation-duration of loading-bar
	        }, 700);
	      }
	    },
	    styling: function styling() {
	      // When loading bar still in progress
	      if (!this.wait) {
	        return { width: this.width + "%" };
	        // When loading bar end
	      } else {
	        // Make it stuck at 100 to waiting the animation
	        return { width: "100%" };
	      }
	    }
	  }
	
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue2-loading-bar.js.map