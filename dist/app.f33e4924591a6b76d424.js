/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([399,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 397:
/***/ (function(module) {

module.exports = JSON.parse("{\"basics\":{\"name\":\"Tushar Nimje\",\"label\":\"Software Engineer\",\"picture\":\"https://avatars2.githubusercontent.com/u/16893368?s=460&v=4\",\"email\":\"tusharnimje21@gmail.com\",\"phone\":\"\",\"website\":\"https://nimjetushar.github.io\",\"summary\":[\"Software engineer with hands on experience in JavaScript and worked on various JavaScript technologies such as Angular, React and Nodejs. Experience of working in an Agile and Fast-paced product development environment. Excellent written and verbal communication skills. Interested in challenging technical roles in applications development.\",\"Conscientious, results-driven and analytical software engineer with years of professional exposure in software development. Strong in architectural research, software design and agile team.\"],\"resumeUrl\":\"https://github.com/nimjetushar/resume/raw/master/Tushar%20Nimje.pdf\",\"location\":{\"address\":\"\",\"postalCode\":\"\",\"city\":\"Pune\",\"countryCode\":\"India\",\"region\":\"Maharashtra\"},\"profiles\":[{\"network\":\"Email\",\"username\":\"tusharnimje21@gmail.com\",\"url\":\"mailto:tusharnimje21@gmail.com\"},{\"network\":\"LinkedIn\",\"username\":\"tushar\",\"url\":\"https://www.linkedin.com/in/tushar-nimje\"},{\"network\":\"GitHub\",\"username\":\"nimjetushar\",\"url\":\"https://github.com/nimjetushar\"},{\"network\":\"StackShare\",\"username\":\"nimjetushar\",\"url\":\"https://stackshare.io/nimjetushar/my-stack\"},{\"network\":\"HackerRank\",\"username\":\"tusharnimje21\",\"url\":\"https://www.hackerrank.com/tusharnimje21\"},{\"network\":\"npm\",\"username\":\"tusharnimje\",\"url\":\"https://www.npmjs.com/~tusharnimje\"}]},\"work\":[{\"company\":\"Synechron Inc.\",\"position\":\"Sr. Associate Technology\",\"website\":\"https://www.synechron.com\",\"startDate\":\"Mar 2017\",\"endDate\":\"Oct 2018\",\"summary\":\"Pune, India\",\"highlights\":[\"Involved in the development of the company’s 2 main projects in the finance domain using Angular, javascript, HTML, CSS technology.\",\"Responsible for architecture design, core development and deployment of application.\",\"Implemented CI/CD pipeline for all the microservices using Jenkins with PCF deployment.\",\"Delivered project using Agile methodology.\"]},{\"company\":\"GlobalLogic India Pvt Ltd.\",\"position\":\"Software Engineer\",\"website\":\"https://www.globallogic.com\",\"startDate\":\"Oct 2014\",\"endDate\":\"Mar 2017\",\"summary\":\"Nagpur, India\",\"highlights\":[\"Involved in development and issue fixing of project.\",\"Responsible for different modules of application.\"]}],\"education\":[{\"institution\":\"G.H Raisoni College of Engineering\",\"area\":\"Electronic and Telecommunication (ETC)\",\"studyType\":\"Graduation\",\"startDate\":\"July 2009\",\"endDate\":\"June 2013\",\"gpa\":\"First class\",\"summary\":\"Nagpur, India\",\"courses\":[\"B.E\",\"Electronics\",\"Telecommunication\"]},{\"institution\":\"Hadas Jr. College\",\"area\":\"Science\",\"studyType\":\"HSC\",\"startDate\":\"July 2008\",\"endDate\":\"June 2009\",\"gpa\":\"Distinction\",\"summary\":\"Nagpur, India\",\"courses\":[\"Physic\",\"Chemistry\",\"Maths\"]},{\"institution\":\"Saraswati Vidyalaya\",\"area\":\"Science\",\"studyType\":\"SSC\",\"startDate\":\"July 2006\",\"endDate\":\"June 2007\",\"gpa\":\"Distinction\",\"summary\":\"Nagpur, India\",\"courses\":[]}],\"skills\":[{\"title\":\"Programming Languages\",\"description\":[],\"skillDetails\":[{\"name\":\"JavaScript\",\"level\":\"90\",\"keywords\":[\"programming\"]},{\"name\":\"HTML + CSS\",\"level\":\"90\",\"keywords\":[\"programming\"]},{\"name\":\"TypeScript\",\"level\":\"90\",\"keywords\":[\"programming\"]},{\"name\":\"Node Js\",\"level\":\"80\",\"keywords\":[\"programming\",\"server technology\"]},{\"name\":\"Python\",\"level\":\"50\",\"keywords\":[\"language\"]},{\"name\":\"React Native\",\"level\":\"50\",\"keywords\":[\"programming\",\"Mobile Development\"]}]},{\"title\":\"Frameworks / Libraies\",\"description\":[],\"skillDetails\":[{\"name\":\"Angular\",\"level\":\"90\",\"keywords\":[\"Angular 2\",\"Angular 4\",\"Angular 5\"]},{\"name\":\"Less / SCSS\",\"level\":\"80\",\"keywords\":[\"css preprocessors\"]},{\"name\":\"AngularJs\",\"level\":\"70\",\"keywords\":[\"Angular 1.x\"]},{\"name\":\"React + Redux\",\"level\":\"80\",\"keywords\":[\"library\"]},{\"name\":\"Express Js\",\"level\":\"60\",\"keywords\":[\"framework\"]}]},{\"title\":\"Database\",\"description\":[],\"skillDetails\":[{\"name\":\"Mongodb\",\"level\":\"50\",\"keywords\":[\"mongo db\",\"mongoos\"]}]},{\"title\":\"Tools\",\"description\":[],\"skillDetails\":[{\"name\":\"Git\",\"level\":\"80\",\"keywords\":[\"version management tool\"]},{\"name\":\"Webpack\",\"level\":\"80\",\"keywords\":[\"bundler\"]},{\"name\":\"Gulp\",\"level\":\"70\",\"keywords\":[\"build tool\"]},{\"name\":\"Cordova\",\"level\":\"60\",\"keywords\":[\"mobile app development tool\"]}]}],\"languages\":[{\"name\":\"English\",\"level\":\"90\"},{\"name\":\"Hindi\",\"level\":\"90\"},{\"name\":\"Marathi\",\"level\":\"90\"}],\"references\":[{\"name\":\"Carol Burnett\",\"reference\":\"Only I can change my life. No one can do it for me.\"},{\"name\":\"Walt Disney\",\"reference\":\"All our dreams can come true if we have the courage to pursue them.\"},{\"name\":\"Jim Rohn\",\"reference\":\"Either you run the day, or the day runs you.\"},{\"name\":\"\",\"reference\":\"Great things NEVER came from COMFORT ZONES.\"}]}");

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(155);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/component/header.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var header_Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      window: {
        height: 0,
        width: 0
      }
    };
    return _this;
  }

  _createClass(Header, [{
    key: "updateDimensions",
    value: function updateDimensions() {
      return this.setState({
        window: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      return window.addEventListener('resize', this.updateDimensions.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        height: this.state.window.innerHeight
      };
      return /*#__PURE__*/react_default.a.createElement("header", {
        id: "home",
        style: style
      }, this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions.bind(this));
    }
  }]);

  return Header;
}(react["Component"]);

header_Header.propTypes = {
  children: prop_types_default.a.node.isRequired
};
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./src/component/navigation/link.jsx
function link_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { link_typeof = function _typeof(obj) { return typeof obj; }; } else { link_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return link_typeof(obj); }

function link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function link_createClass(Constructor, protoProps, staticProps) { if (protoProps) link_defineProperties(Constructor.prototype, protoProps); if (staticProps) link_defineProperties(Constructor, staticProps); return Constructor; }

function link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) link_setPrototypeOf(subClass, superClass); }

function link_setPrototypeOf(o, p) { link_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return link_setPrototypeOf(o, p); }

function link_createSuper(Derived) { var hasNativeReflectConstruct = link_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = link_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = link_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return link_possibleConstructorReturn(this, result); }; }

function link_possibleConstructorReturn(self, call) { if (call && (link_typeof(call) === "object" || typeof call === "function")) { return call; } return link_assertThisInitialized(self); }

function link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function link_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function link_getPrototypeOf(o) { link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return link_getPrototypeOf(o); }




var link_Link = /*#__PURE__*/function (_Component) {
  link_inherits(Link, _Component);

  var _super = link_createSuper(Link);

  function Link() {
    link_classCallCheck(this, Link);

    return _super.apply(this, arguments);
  }

  link_createClass(Link, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
        className: "smoothscroll",
        href: "#".concat(this.props.link)
      }, this.props.name));
    }
  }]);

  return Link;
}(react["Component"]);

link_Link.propTypes = {
  link: prop_types_default.a.string.isRequired,
  name: prop_types_default.a.string.isRequired
};
/* harmony default export */ var navigation_link = (link_Link);
// CONCATENATED MODULE: ./src/prop_types/common.js

var common_location = prop_types_default.a.shape({
  address: prop_types_default.a.string.isRequired,
  postalCode: prop_types_default.a.string.isRequired,
  city: prop_types_default.a.string.isRequired,
  countryCode: prop_types_default.a.string.isRequired,
  region: prop_types_default.a.string.isRequired
}).isRequired;
var common_profile = prop_types_default.a.shape({
  network: prop_types_default.a.string.isRequired,
  username: prop_types_default.a.string.isRequired,
  url: prop_types_default.a.string.isRequired
}).isRequired;
var profiles = prop_types_default.a.arrayOf(common_profile).isRequired;
var bulletPoints = prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired;
var common_image = prop_types_default.a.shape({
  modal: prop_types_default.a.string.isRequired,
  thumb: prop_types_default.a.string.isRequired
}).isRequired;
var description = prop_types_default.a.shape({
  title: prop_types_default.a.string.isRequired,
  description: bulletPoints
});
var descriptions = prop_types_default.a.arrayOf(description).isRequired;
var common_navigation = prop_types_default.a.object.isRequired;
// CONCATENATED MODULE: ./src/prop_types/basics.js


var basics = prop_types_default.a.shape({
  name: prop_types_default.a.string.isRequired,
  label: prop_types_default.a.string.isRequired,
  picture: prop_types_default.a.string.isRequired,
  email: prop_types_default.a.string.isRequired,
  phone: prop_types_default.a.string.isRequired,
  website: prop_types_default.a.string.isRequired,
  summary: bulletPoints,
  location: common_location,
  profiles: profiles,
  resumeUrl: prop_types_default.a.string.isRequired
}).isRequired;
// CONCATENATED MODULE: ./src/prop_types/education.js


var education = prop_types_default.a.shape({
  institution: prop_types_default.a.string.isRequired,
  area: prop_types_default.a.string.isRequired,
  studyType: prop_types_default.a.string.isRequired,
  startDate: prop_types_default.a.string.isRequired,
  endDate: prop_types_default.a.string.isRequired,
  gpa: prop_types_default.a.string.isRequired,
  summary: prop_types_default.a.string.isRequired,
  courses: bulletPoints
});
var educationSet = prop_types_default.a.arrayOf(education).isRequired;
// CONCATENATED MODULE: ./src/prop_types/interest.js


var interests = prop_types_default.a.shape({
  name: prop_types_default.a.string.isRequired,
  keywords: bulletPoints
});
var interestsSet = prop_types_default.a.arrayOf(interests).isRequired;
// CONCATENATED MODULE: ./src/prop_types/language.js

var languages = prop_types_default.a.shape({
  name: prop_types_default.a.string.isRequired,
  level: prop_types_default.a.string.isRequired
});
var languagesSet = prop_types_default.a.arrayOf(languages).isRequired;
// CONCATENATED MODULE: ./src/prop_types/reference.js

var references = prop_types_default.a.shape({
  name: prop_types_default.a.string.isRequired,
  reference: prop_types_default.a.string.isRequired
});
var referencesSet = prop_types_default.a.arrayOf(references).isRequired;
// CONCATENATED MODULE: ./src/prop_types/skills.js


var skillDetails = prop_types_default.a.shape({
  name: prop_types_default.a.string.isRequired,
  level: prop_types_default.a.string.isRequired,
  keywords: bulletPoints
});
var skillDetailsSet = prop_types_default.a.arrayOf(skillDetails);
var skills = prop_types_default.a.shape({
  title: prop_types_default.a.string.isRequired,
  description: bulletPoints,
  skillDetails: skillDetailsSet
});
var skillsSet = prop_types_default.a.arrayOf(skills).isRequired;
// CONCATENATED MODULE: ./src/prop_types/work.js


var work = prop_types_default.a.shape({
  company: prop_types_default.a.string.isRequired,
  position: prop_types_default.a.string.isRequired,
  website: prop_types_default.a.string.isRequired,
  startDate: prop_types_default.a.string.isRequired,
  endDate: prop_types_default.a.string.isRequired,
  summary: prop_types_default.a.string.isRequired,
  highlights: bulletPoints
});
var workSet = prop_types_default.a.arrayOf(work).isRequired;
// CONCATENATED MODULE: ./src/prop_types/index.js








// CONCATENATED MODULE: ./src/component/navigation/index.jsx
function navigation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { navigation_typeof = function _typeof(obj) { return typeof obj; }; } else { navigation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return navigation_typeof(obj); }

function navigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) navigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) navigation_defineProperties(Constructor, staticProps); return Constructor; }

function navigation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) navigation_setPrototypeOf(subClass, superClass); }

function navigation_setPrototypeOf(o, p) { navigation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return navigation_setPrototypeOf(o, p); }

function navigation_createSuper(Derived) { var hasNativeReflectConstruct = navigation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = navigation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = navigation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return navigation_possibleConstructorReturn(this, result); }; }

function navigation_possibleConstructorReturn(self, call) { if (call && (navigation_typeof(call) === "object" || typeof call === "function")) { return call; } return navigation_assertThisInitialized(self); }

function navigation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function navigation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function navigation_getPrototypeOf(o) { navigation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return navigation_getPrototypeOf(o); }





var navigation_Navigation = /*#__PURE__*/function (_Component) {
  navigation_inherits(Navigation, _Component);

  var _super = navigation_createSuper(Navigation);

  function Navigation() {
    navigation_classCallCheck(this, Navigation);

    return _super.apply(this, arguments);
  }

  navigation_createClass(Navigation, [{
    key: "render",
    value: function render() {
      function navContent(navigation) {
        var keys = Object.keys(navigation);
        var links = keys.map(function (navigationLink, index) {
          var navigationName = navigation[navigationLink];
          return /*#__PURE__*/react_default.a.createElement(navigation_link, {
            key: index,
            link: navigationLink,
            name: navigationName
          });
        });
        return links;
      }

      return /*#__PURE__*/react_default.a.createElement("nav", {
        id: "nav-wrap",
        className: "opaque"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "mobile-btn",
        href: "#nav-wrap",
        title: "Show navigation"
      }, "Show navigation"), /*#__PURE__*/react_default.a.createElement("a", {
        className: "mobile-btn",
        href: "#",
        title: "Hide navigation"
      }, "Hide navigation"), /*#__PURE__*/react_default.a.createElement("ul", {
        id: "nav",
        className: "nav"
      }, navContent(this.props.navigation)));
    }
  }]);

  return Navigation;
}(react["Component"]);

navigation_Navigation.propTypes = {
  navigation: common_navigation
};
/* harmony default export */ var component_navigation = (navigation_Navigation);
// CONCATENATED MODULE: ./src/component/social_media.jsx
function social_media_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { social_media_typeof = function _typeof(obj) { return typeof obj; }; } else { social_media_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return social_media_typeof(obj); }

function social_media_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function social_media_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function social_media_createClass(Constructor, protoProps, staticProps) { if (protoProps) social_media_defineProperties(Constructor.prototype, protoProps); if (staticProps) social_media_defineProperties(Constructor, staticProps); return Constructor; }

function social_media_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) social_media_setPrototypeOf(subClass, superClass); }

function social_media_setPrototypeOf(o, p) { social_media_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return social_media_setPrototypeOf(o, p); }

function social_media_createSuper(Derived) { var hasNativeReflectConstruct = social_media_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = social_media_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = social_media_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return social_media_possibleConstructorReturn(this, result); }; }

function social_media_possibleConstructorReturn(self, call) { if (call && (social_media_typeof(call) === "object" || typeof call === "function")) { return call; } return social_media_assertThisInitialized(self); }

function social_media_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function social_media_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function social_media_getPrototypeOf(o) { social_media_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return social_media_getPrototypeOf(o); }





function mapIcon(socialMedia) {
  var media;

  switch (socialMedia) {
    case 'email':
      return /*#__PURE__*/react_default.a.createElement("i", {
        className: "fas fa-envelope"
      });

    case 'stackshare':
      return /*#__PURE__*/react_default.a.createElement("i", {
        className: "stackshare-logo"
      });

    case 'hackerrank':
      return /*#__PURE__*/react_default.a.createElement("i", {
        className: "fab fa-hackerrank"
      });

    case 'npm':
      return /*#__PURE__*/react_default.a.createElement("i", {
        className: "fab fa-npm"
      });

    default:
      media = socialMedia.replace(/ /g, '-');
      return /*#__PURE__*/react_default.a.createElement("i", {
        className: "fab fa-".concat(media)
      });
  }
}

var social_media_SocialMedia = /*#__PURE__*/function (_Component) {
  social_media_inherits(SocialMedia, _Component);

  var _super = social_media_createSuper(SocialMedia);

  function SocialMedia() {
    social_media_classCallCheck(this, SocialMedia);

    return _super.apply(this, arguments);
  }

  social_media_createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("ul", {
        className: this.props.ulClass
      }, this.props.profiles.map(function (profile, index) {
        var icon = mapIcon(profile.network.toLowerCase());
        return /*#__PURE__*/react_default.a.createElement("li", {
          key: index
        }, /*#__PURE__*/react_default.a.createElement("a", {
          href: profile.url,
          target: "_blank",
          rel: "noopener noreferrer"
        }, icon));
      })));
    }
  }]);

  return SocialMedia;
}(react["Component"]);

social_media_SocialMedia.propTypes = {
  ulClass: prop_types_default.a.string.isRequired,
  profiles: profiles
};
/* harmony default export */ var social_media = (social_media_SocialMedia);
// CONCATENATED MODULE: ./src/component/banner.jsx
function banner_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { banner_typeof = function _typeof(obj) { return typeof obj; }; } else { banner_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return banner_typeof(obj); }

function banner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function banner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function banner_createClass(Constructor, protoProps, staticProps) { if (protoProps) banner_defineProperties(Constructor.prototype, protoProps); if (staticProps) banner_defineProperties(Constructor, staticProps); return Constructor; }

function banner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) banner_setPrototypeOf(subClass, superClass); }

function banner_setPrototypeOf(o, p) { banner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return banner_setPrototypeOf(o, p); }

function banner_createSuper(Derived) { var hasNativeReflectConstruct = banner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = banner_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = banner_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return banner_possibleConstructorReturn(this, result); }; }

function banner_possibleConstructorReturn(self, call) { if (call && (banner_typeof(call) === "object" || typeof call === "function")) { return call; } return banner_assertThisInitialized(self); }

function banner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function banner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function banner_getPrototypeOf(o) { banner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return banner_getPrototypeOf(o); }





var banner_Banner = /*#__PURE__*/function (_Component) {
  banner_inherits(Banner, _Component);

  var _super = banner_createSuper(Banner);

  function Banner() {
    banner_classCallCheck(this, Banner);

    return _super.apply(this, arguments);
  }

  banner_createClass(Banner, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row banner"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "banner-text"
      }, /*#__PURE__*/react_default.a.createElement("h1", {
        className: "responsive-headline"
      }, this.props.basics.name), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("hr", null), /*#__PURE__*/react_default.a.createElement(social_media, {
        ulClass: "social",
        profiles: this.props.basics.profiles
      })));
    }
  }]);

  return Banner;
}(react["Component"]);

banner_Banner.propTypes = {
  basics: basics
};
/* harmony default export */ var banner = (banner_Banner);
// CONCATENATED MODULE: ./src/component/scrolldown.jsx
function scrolldown_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { scrolldown_typeof = function _typeof(obj) { return typeof obj; }; } else { scrolldown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return scrolldown_typeof(obj); }

function scrolldown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scrolldown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scrolldown_createClass(Constructor, protoProps, staticProps) { if (protoProps) scrolldown_defineProperties(Constructor.prototype, protoProps); if (staticProps) scrolldown_defineProperties(Constructor, staticProps); return Constructor; }

function scrolldown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) scrolldown_setPrototypeOf(subClass, superClass); }

function scrolldown_setPrototypeOf(o, p) { scrolldown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return scrolldown_setPrototypeOf(o, p); }

function scrolldown_createSuper(Derived) { var hasNativeReflectConstruct = scrolldown_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = scrolldown_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = scrolldown_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return scrolldown_possibleConstructorReturn(this, result); }; }

function scrolldown_possibleConstructorReturn(self, call) { if (call && (scrolldown_typeof(call) === "object" || typeof call === "function")) { return call; } return scrolldown_assertThisInitialized(self); }

function scrolldown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function scrolldown_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function scrolldown_getPrototypeOf(o) { scrolldown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return scrolldown_getPrototypeOf(o); }



var scrolldown_ScrollDown = /*#__PURE__*/function (_Component) {
  scrolldown_inherits(ScrollDown, _Component);

  var _super = scrolldown_createSuper(ScrollDown);

  function ScrollDown() {
    scrolldown_classCallCheck(this, ScrollDown);

    return _super.apply(this, arguments);
  }

  scrolldown_createClass(ScrollDown, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("p", {
        className: "scrolldown"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "smoothscroll",
        href: "#about"
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-down-circle"
      })));
    }
  }]);

  return ScrollDown;
}(react["Component"]);

/* harmony default export */ var scrolldown = (scrolldown_ScrollDown);
// CONCATENATED MODULE: ./src/component/section/about.jsx
function about_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { about_typeof = function _typeof(obj) { return typeof obj; }; } else { about_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return about_typeof(obj); }

function about_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function about_createClass(Constructor, protoProps, staticProps) { if (protoProps) about_defineProperties(Constructor.prototype, protoProps); if (staticProps) about_defineProperties(Constructor, staticProps); return Constructor; }

function about_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) about_setPrototypeOf(subClass, superClass); }

function about_setPrototypeOf(o, p) { about_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return about_setPrototypeOf(o, p); }

function about_createSuper(Derived) { var hasNativeReflectConstruct = about_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = about_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = about_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return about_possibleConstructorReturn(this, result); }; }

function about_possibleConstructorReturn(self, call) { if (call && (about_typeof(call) === "object" || typeof call === "function")) { return call; } return about_assertThisInitialized(self); }

function about_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function about_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function about_getPrototypeOf(o) { about_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return about_getPrototypeOf(o); }




var about_About = /*#__PURE__*/function (_Component) {
  about_inherits(About, _Component);

  var _super = about_createSuper(About);

  function About() {
    about_classCallCheck(this, About);

    return _super.apply(this, arguments);
  }

  about_createClass(About, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var summary = props.content.summary.map(function (content, index) {
        return /*#__PURE__*/react_default.a.createElement("p", {
          key: index
        }, content);
      });
      return /*#__PURE__*/react_default.a.createElement("section", {
        id: "about"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "two columns"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        className: "profile-pic",
        src: props.content.picture,
        alt: props.content.name
      })), /*#__PURE__*/react_default.a.createElement("div", {
        className: "ten columns main-col"
      }, /*#__PURE__*/react_default.a.createElement("h2", null, "About Me"), summary, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "columns contact-details"
      }, /*#__PURE__*/react_default.a.createElement("h2", null, "Contact Details"), /*#__PURE__*/react_default.a.createElement("p", {
        className: "address"
      }, /*#__PURE__*/react_default.a.createElement("span", null, props.content.location.city), props.content.location.region && /*#__PURE__*/react_default.a.createElement("span", null, ", ", props.content.location.region), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", null, props.content.location.countryCode), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("a", {
        href: "mailto:".concat(props.content.email)
      }, /*#__PURE__*/react_default.a.createElement("span", null, props.content.email)))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "columns download"
      }, /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("a", {
        className: "button",
        href: props.content.resumeUrl
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fa fa-download"
      }), "Download Resume")))))));
    }
  }]);

  return About;
}(react["Component"]);

about_About.propTypes = {
  content: basics
};
/* harmony default export */ var about = (about_About);
// CONCATENATED MODULE: ./src/component/section/education.jsx
function education_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { education_typeof = function _typeof(obj) { return typeof obj; }; } else { education_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return education_typeof(obj); }

function education_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function education_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function education_createClass(Constructor, protoProps, staticProps) { if (protoProps) education_defineProperties(Constructor.prototype, protoProps); if (staticProps) education_defineProperties(Constructor, staticProps); return Constructor; }

function education_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) education_setPrototypeOf(subClass, superClass); }

function education_setPrototypeOf(o, p) { education_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return education_setPrototypeOf(o, p); }

function education_createSuper(Derived) { var hasNativeReflectConstruct = education_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = education_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = education_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return education_possibleConstructorReturn(this, result); }; }

function education_possibleConstructorReturn(self, call) { if (call && (education_typeof(call) === "object" || typeof call === "function")) { return call; } return education_assertThisInitialized(self); }

function education_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function education_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function education_getPrototypeOf(o) { education_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return education_getPrototypeOf(o); }




var education_Entry = /*#__PURE__*/function (_Component) {
  education_inherits(Entry, _Component);

  var _super = education_createSuper(Entry);

  function Entry() {
    education_classCallCheck(this, Entry);

    return _super.apply(this, arguments);
  }

  education_createClass(Entry, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row item"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "twelve columns"
      }, /*#__PURE__*/react_default.a.createElement("h3", null, this.props.entry.institution), /*#__PURE__*/react_default.a.createElement("p", {
        className: "info"
      }, this.props.entry.studyType, " in ", this.props.entry.area, /*#__PURE__*/react_default.a.createElement("span", null, " \u2022 "), /*#__PURE__*/react_default.a.createElement("span", {
        className: "info-summary"
      }, this.props.entry.summary), /*#__PURE__*/react_default.a.createElement("span", null, " \u2022 "), /*#__PURE__*/react_default.a.createElement("em", {
        className: "date"
      }, this.props.entry.startDate, " - ", this.props.entry.endDate))));
    }
  }]);

  return Entry;
}(react["Component"]);

education_Entry.propTypes = {
  entry: education
};

var education_Education = /*#__PURE__*/function (_Component2) {
  education_inherits(Education, _Component2);

  var _super2 = education_createSuper(Education);

  function Education() {
    education_classCallCheck(this, Education);

    return _super2.apply(this, arguments);
  }

  education_createClass(Education, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("section", {
        id: "education"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row education"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "two columns header-col"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("span", null, "Education"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "ten columns main-col"
      }, this.props.content.map(function (entry, index) {
        return /*#__PURE__*/react_default.a.createElement(education_Entry, {
          key: index,
          entry: entry
        });
      }))));
    }
  }]);

  return Education;
}(react["Component"]);

education_Education.propTypes = {
  content: educationSet
};
/* harmony default export */ var section_education = (education_Education);
// CONCATENATED MODULE: ./src/component/section/footer.jsx
function footer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { footer_typeof = function _typeof(obj) { return typeof obj; }; } else { footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return footer_typeof(obj); }

function footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) footer_defineProperties(Constructor, staticProps); return Constructor; }

function footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) footer_setPrototypeOf(subClass, superClass); }

function footer_setPrototypeOf(o, p) { footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return footer_setPrototypeOf(o, p); }

function footer_createSuper(Derived) { var hasNativeReflectConstruct = footer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = footer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = footer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return footer_possibleConstructorReturn(this, result); }; }

function footer_possibleConstructorReturn(self, call) { if (call && (footer_typeof(call) === "object" || typeof call === "function")) { return call; } return footer_assertThisInitialized(self); }

function footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function footer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function footer_getPrototypeOf(o) { footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return footer_getPrototypeOf(o); }





var footer_Footer = /*#__PURE__*/function (_Component) {
  footer_inherits(Footer, _Component);

  var _super = footer_createSuper(Footer);

  function Footer() {
    footer_classCallCheck(this, Footer);

    return _super.apply(this, arguments);
  }

  footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/react_default.a.createElement("footer", null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "twelve columns"
      }, /*#__PURE__*/react_default.a.createElement(social_media, {
        ulClass: "social-links",
        profiles: props.content
      }), /*#__PURE__*/react_default.a.createElement("ul", {
        className: "copyright"
      }, /*#__PURE__*/react_default.a.createElement("li", null, "This site is developed in React.js by\xA0", /*#__PURE__*/react_default.a.createElement("a", {
        href: "https://nimjetushar.github.io",
        title: "Tushar Nimje",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Tushar Nimje"), " from the original design of Ceevee from\xA0 ", /*#__PURE__*/react_default.a.createElement("a", {
        href: "http://www.styleshout.com/",
        title: "Styleshout",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Styleshout")))), /*#__PURE__*/react_default.a.createElement("div", {
        id: "go-top"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "smoothscroll",
        title: "Back to Top",
        href: "#home"
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-up-open"
      })))));
    }
  }]);

  return Footer;
}(react["Component"]);

footer_Footer.propTypes = {
  content: profiles
};
/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./src/component/section/skills.jsx
function skills_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { skills_typeof = function _typeof(obj) { return typeof obj; }; } else { skills_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return skills_typeof(obj); }

function skills_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function skills_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function skills_createClass(Constructor, protoProps, staticProps) { if (protoProps) skills_defineProperties(Constructor.prototype, protoProps); if (staticProps) skills_defineProperties(Constructor, staticProps); return Constructor; }

function skills_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) skills_setPrototypeOf(subClass, superClass); }

function skills_setPrototypeOf(o, p) { skills_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return skills_setPrototypeOf(o, p); }

function skills_createSuper(Derived) { var hasNativeReflectConstruct = skills_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = skills_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = skills_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return skills_possibleConstructorReturn(this, result); }; }

function skills_possibleConstructorReturn(self, call) { if (call && (skills_typeof(call) === "object" || typeof call === "function")) { return call; } return skills_assertThisInitialized(self); }

function skills_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function skills_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function skills_getPrototypeOf(o) { skills_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return skills_getPrototypeOf(o); }





var skills_Entry = /*#__PURE__*/function (_Component) {
  skills_inherits(Entry, _Component);

  var _super = skills_createSuper(Entry);

  function Entry(props) {
    var _this;

    skills_classCallCheck(this, Entry);

    _this = _super.call(this, props);
    _this.state = {
      style: {
        background: '#313131'
      }
    };
    return _this;
  }

  skills_createClass(Entry, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      return this.setState({
        style: {
          background: '#11ABB0'
        }
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      return this.setState({
        style: {
          background: '#313131'
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("span", {
        className: "bar-expand percentage".concat(this.props.entry.level),
        onMouseEnter: this.handleMouseEnter.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        style: this.state.style
      }), /*#__PURE__*/react_default.a.createElement("em", null, this.props.entry.name));
    }
  }]);

  return Entry;
}(react["Component"]);

skills_Entry.propTypes = {
  entry: languages
};

var skills_Skill = /*#__PURE__*/function (_Component2) {
  skills_inherits(Skill, _Component2);

  var _super2 = skills_createSuper(Skill);

  function Skill() {
    skills_classCallCheck(this, Skill);

    return _super2.apply(this, arguments);
  }

  skills_createClass(Skill, [{
    key: "render",
    value: function render() {
      var summary = this.props.summary.map(function (point, index) {
        return /*#__PURE__*/react_default.a.createElement("p", {
          key: index,
          className: "skill-summary"
        }, point);
      });
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row inside"
      }, /*#__PURE__*/react_default.a.createElement("h3", null, this.props.title), summary, /*#__PURE__*/react_default.a.createElement("div", {
        className: "bars"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "skills"
      }, this.props.content.map(function (entry, index) {
        return /*#__PURE__*/react_default.a.createElement(skills_Entry, {
          key: index,
          entry: entry
        });
      }))));
    }
  }]);

  return Skill;
}(react["Component"]);

skills_Skill.propTypes = {
  title: prop_types_default.a.string.isRequired,
  content: languagesSet,
  summary: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired
};

var skills_Skills = /*#__PURE__*/function (_Component3) {
  skills_inherits(Skills, _Component3);

  var _super3 = skills_createSuper(Skills);

  function Skills() {
    skills_classCallCheck(this, Skills);

    return _super3.apply(this, arguments);
  }

  skills_createClass(Skills, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("section", {
        id: "skill"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row skill"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "two columns header-col"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("span", null, "Skills"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "ten columns main-col"
      }, this.props.content.skills.map(function (skill, index) {
        return /*#__PURE__*/react_default.a.createElement(skills_Skill, {
          key: index,
          title: skill.title,
          content: skill.skillDetails,
          summary: skill.description
        });
      }))));
    }
  }]);

  return Skills;
}(react["Component"]);

skills_Skills.propTypes = {
  content: prop_types_default.a.shape({
    skills: skillsSet,
    languages: languagesSet
  }).isRequired
};
/* harmony default export */ var section_skills = (skills_Skills);
// CONCATENATED MODULE: ./src/component/bullet_points.jsx
function bullet_points_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bullet_points_typeof = function _typeof(obj) { return typeof obj; }; } else { bullet_points_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bullet_points_typeof(obj); }

function bullet_points_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bullet_points_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bullet_points_createClass(Constructor, protoProps, staticProps) { if (protoProps) bullet_points_defineProperties(Constructor.prototype, protoProps); if (staticProps) bullet_points_defineProperties(Constructor, staticProps); return Constructor; }

function bullet_points_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bullet_points_setPrototypeOf(subClass, superClass); }

function bullet_points_setPrototypeOf(o, p) { bullet_points_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bullet_points_setPrototypeOf(o, p); }

function bullet_points_createSuper(Derived) { var hasNativeReflectConstruct = bullet_points_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = bullet_points_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = bullet_points_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return bullet_points_possibleConstructorReturn(this, result); }; }

function bullet_points_possibleConstructorReturn(self, call) { if (call && (bullet_points_typeof(call) === "object" || typeof call === "function")) { return call; } return bullet_points_assertThisInitialized(self); }

function bullet_points_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bullet_points_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function bullet_points_getPrototypeOf(o) { bullet_points_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bullet_points_getPrototypeOf(o); }




var bullet_points_BulletPoints = /*#__PURE__*/function (_Component) {
  bullet_points_inherits(BulletPoints, _Component);

  var _super = bullet_points_createSuper(BulletPoints);

  function BulletPoints() {
    bullet_points_classCallCheck(this, BulletPoints);

    return _super.apply(this, arguments);
  }

  bullet_points_createClass(BulletPoints, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, this.props.points.map(function (point, index) {
        return /*#__PURE__*/react_default.a.createElement("p", {
          key: index,
          className: "point"
        }, /*#__PURE__*/react_default.a.createElement("span", {
          className: "bullet-point"
        }, "\u2022 "), point);
      }));
    }
  }]);

  return BulletPoints;
}(react["Component"]);

bullet_points_BulletPoints.propTypes = {
  points: bulletPoints
};
/* harmony default export */ var bullet_points = (bullet_points_BulletPoints);
// CONCATENATED MODULE: ./src/component/section/work.jsx
function work_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { work_typeof = function _typeof(obj) { return typeof obj; }; } else { work_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return work_typeof(obj); }

function work_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function work_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function work_createClass(Constructor, protoProps, staticProps) { if (protoProps) work_defineProperties(Constructor.prototype, protoProps); if (staticProps) work_defineProperties(Constructor, staticProps); return Constructor; }

function work_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) work_setPrototypeOf(subClass, superClass); }

function work_setPrototypeOf(o, p) { work_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return work_setPrototypeOf(o, p); }

function work_createSuper(Derived) { var hasNativeReflectConstruct = work_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = work_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = work_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return work_possibleConstructorReturn(this, result); }; }

function work_possibleConstructorReturn(self, call) { if (call && (work_typeof(call) === "object" || typeof call === "function")) { return call; } return work_assertThisInitialized(self); }

function work_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function work_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function work_getPrototypeOf(o) { work_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return work_getPrototypeOf(o); }






var work_Entry = /*#__PURE__*/function (_Component) {
  work_inherits(Entry, _Component);

  var _super = work_createSuper(Entry);

  function Entry() {
    work_classCallCheck(this, Entry);

    return _super.apply(this, arguments);
  }

  work_createClass(Entry, [{
    key: "render",
    value: function render() {
      var index = this.props.index + 1;
      var divider = index === this.props.total ? /*#__PURE__*/react_default.a.createElement("br", null) : /*#__PURE__*/react_default.a.createElement("hr", null);
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row item"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "twelve columns"
      }, /*#__PURE__*/react_default.a.createElement("h3", null, /*#__PURE__*/react_default.a.createElement("a", {
        href: this.props.entry.website,
        target: "_blank",
        rel: "noopener noreferrer"
      }, this.props.entry.company)), /*#__PURE__*/react_default.a.createElement("p", {
        className: "info"
      }, this.props.entry.position, /*#__PURE__*/react_default.a.createElement("span", null, " \u2022 "), /*#__PURE__*/react_default.a.createElement("span", {
        className: "info-summary"
      }, this.props.entry.summary), /*#__PURE__*/react_default.a.createElement("span", null, " \u2022 "), /*#__PURE__*/react_default.a.createElement("em", {
        className: "date"
      }, this.props.entry.startDate, " - ", this.props.entry.endDate)), /*#__PURE__*/react_default.a.createElement(bullet_points, {
        points: this.props.entry.highlights
      })), divider);
    }
  }]);

  return Entry;
}(react["Component"]);

work_Entry.propTypes = {
  index: prop_types_default.a.number.isRequired,
  total: prop_types_default.a.number.isRequired,
  entry: work
};

var work_Work = /*#__PURE__*/function (_Component2) {
  work_inherits(Work, _Component2);

  var _super2 = work_createSuper(Work);

  function Work() {
    work_classCallCheck(this, Work);

    return _super2.apply(this, arguments);
  }

  work_createClass(Work, [{
    key: "render",
    value: function render() {
      var numEntries = this.props.content.length;
      return /*#__PURE__*/react_default.a.createElement("section", {
        id: "work"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row work"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "two columns header-col"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("span", null, "Work"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "ten columns main-col"
      }, this.props.content.map(function (entry, index) {
        return /*#__PURE__*/react_default.a.createElement(work_Entry, {
          key: index,
          index: index,
          total: numEntries,
          entry: entry
        });
      }))));
    }
  }]);

  return Work;
}(react["Component"]);

work_Work.propTypes = {
  content: workSet
};
/* harmony default export */ var section_work = (work_Work);
// EXTERNAL MODULE: ./node_modules/nuka-carousel/es/index.js + 20 modules
var es = __webpack_require__(157);

// CONCATENATED MODULE: ./src/component/section/references.jsx
function references_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { references_typeof = function _typeof(obj) { return typeof obj; }; } else { references_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return references_typeof(obj); }

function references_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function references_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function references_createClass(Constructor, protoProps, staticProps) { if (protoProps) references_defineProperties(Constructor.prototype, protoProps); if (staticProps) references_defineProperties(Constructor, staticProps); return Constructor; }

function references_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) references_setPrototypeOf(subClass, superClass); }

function references_setPrototypeOf(o, p) { references_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return references_setPrototypeOf(o, p); }

function references_createSuper(Derived) { var hasNativeReflectConstruct = references_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = references_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = references_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return references_possibleConstructorReturn(this, result); }; }

function references_possibleConstructorReturn(self, call) { if (call && (references_typeof(call) === "object" || typeof call === "function")) { return call; } return references_assertThisInitialized(self); }

function references_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function references_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function references_getPrototypeOf(o) { references_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return references_getPrototypeOf(o); }





var references_Entry = /*#__PURE__*/function (_Component) {
  references_inherits(Entry, _Component);

  var _super = references_createSuper(Entry);

  function Entry() {
    references_classCallCheck(this, Entry);

    return _super.apply(this, arguments);
  }

  references_createClass(Entry, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("blockquote", null, /*#__PURE__*/react_default.a.createElement("p", null, this.props.entry.reference), this.props.entry.name ? /*#__PURE__*/react_default.a.createElement("cite", null, this.props.entry.name) : ""));
    }
  }]);

  return Entry;
}(react["Component"]);

references_Entry.propTypes = {
  entry: references
};

var references_References = /*#__PURE__*/function (_Component2) {
  references_inherits(References, _Component2);

  var _super2 = references_createSuper(References);

  function References() {
    references_classCallCheck(this, References);

    return _super2.apply(this, arguments);
  }

  references_createClass(References, [{
    key: "render",
    value: function render() {
      var carouselConfig = {
        autoplay: true,
        wrapAround: true,
        withoutControls: true
      };
      return /*#__PURE__*/react_default.a.createElement("section", {
        id: "testimonials"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "text-container"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "two columns header-col"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fas fa-quote-left",
        size: "7"
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "columns flex-container"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "flexslider"
      }, /*#__PURE__*/react_default.a.createElement(es["a" /* default */], {
        autoplay: carouselConfig.autoplay,
        wrapAround: carouselConfig.wrapAround,
        withoutControls: carouselConfig.withoutControls
      }, this.props.content.map(function (entry, index) {
        return /*#__PURE__*/react_default.a.createElement(references_Entry, {
          key: index,
          entry: entry
        });
      })))))));
    }
  }]);

  return References;
}(react["Component"]);

references_References.propTypes = {
  content: referencesSet
};
/* harmony default export */ var section_references = (references_References);
// CONCATENATED MODULE: ./src/component/section/index.jsx
function section_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { section_typeof = function _typeof(obj) { return typeof obj; }; } else { section_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return section_typeof(obj); }

function section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function section_createClass(Constructor, protoProps, staticProps) { if (protoProps) section_defineProperties(Constructor.prototype, protoProps); if (staticProps) section_defineProperties(Constructor, staticProps); return Constructor; }

function section_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) section_setPrototypeOf(subClass, superClass); }

function section_setPrototypeOf(o, p) { section_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return section_setPrototypeOf(o, p); }

function section_createSuper(Derived) { var hasNativeReflectConstruct = section_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = section_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = section_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return section_possibleConstructorReturn(this, result); }; }

function section_possibleConstructorReturn(self, call) { if (call && (section_typeof(call) === "object" || typeof call === "function")) { return call; } return section_assertThisInitialized(self); }

function section_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function section_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function section_getPrototypeOf(o) { section_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return section_getPrototypeOf(o); }










var section_Section = /*#__PURE__*/function (_Component) {
  section_inherits(Section, _Component);

  var _super = section_createSuper(Section);

  function Section() {
    section_classCallCheck(this, Section);

    return _super.apply(this, arguments);
  }

  section_createClass(Section, [{
    key: "render",
    value: function render() {
      var skillsContent = {
        skills: this.props.skills,
        languages: this.props.languages
      };
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(about, {
        content: this.props.basics
      }), /*#__PURE__*/react_default.a.createElement(section_work, {
        content: this.props.work
      }), /*#__PURE__*/react_default.a.createElement(section_education, {
        content: this.props.education
      }), /*#__PURE__*/react_default.a.createElement(section_skills, {
        content: skillsContent
      }), /*#__PURE__*/react_default.a.createElement(section_references, {
        content: this.props.references
      }), /*#__PURE__*/react_default.a.createElement(footer, {
        content: this.props.basics.profiles
      }));
    }
  }]);

  return Section;
}(react["Component"]);

section_Section.propTypes = {
  basics: basics,
  work: workSet,
  education: educationSet,
  references: referencesSet,
  skills: skillsSet,
  languages: languagesSet
};
/* harmony default export */ var section = (section_Section);
// CONCATENATED MODULE: ./src/component/loading.jsx
function loading_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { loading_typeof = function _typeof(obj) { return typeof obj; }; } else { loading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return loading_typeof(obj); }

function loading_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function loading_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function loading_createClass(Constructor, protoProps, staticProps) { if (protoProps) loading_defineProperties(Constructor.prototype, protoProps); if (staticProps) loading_defineProperties(Constructor, staticProps); return Constructor; }

function loading_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) loading_setPrototypeOf(subClass, superClass); }

function loading_setPrototypeOf(o, p) { loading_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return loading_setPrototypeOf(o, p); }

function loading_createSuper(Derived) { var hasNativeReflectConstruct = loading_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = loading_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = loading_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return loading_possibleConstructorReturn(this, result); }; }

function loading_possibleConstructorReturn(self, call) { if (call && (loading_typeof(call) === "object" || typeof call === "function")) { return call; } return loading_assertThisInitialized(self); }

function loading_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function loading_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function loading_getPrototypeOf(o) { loading_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return loading_getPrototypeOf(o); }



var loading_Loading = /*#__PURE__*/function (_Component) {
  loading_inherits(Loading, _Component);

  var _super = loading_createSuper(Loading);

  function Loading() {
    loading_classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  loading_createClass(Loading, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "loading"
      });
    }
  }]);

  return Loading;
}(react["Component"]);

/* harmony default export */ var loading = (loading_Loading);
// CONCATENATED MODULE: ./src/config/app.config.js
var NavigationConfig = {
  home: 'Home',
  about: 'About',
  work: 'Work',
  education: 'Education',
  skill: 'Skills',
  testimonials: 'testimonials'
};
function getDataUrl() {
  return new Promise(function (resolve, reject) {
    if (window.location.origin.indexOf('localhost') === -1) {
      var url = './src/data/resume.json';
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        resolve(res);
      })["catch"](function (err) {
        reject(err);
      });
    } else {
      var data = __webpack_require__(397);

      resolve(data);
    }
  });
}
// CONCATENATED MODULE: ./src/component/main.jsx
function main_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_typeof = function _typeof(obj) { return typeof obj; }; } else { main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_typeof(obj); }

function main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_defineProperties(Constructor, staticProps); return Constructor; }

function main_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) main_setPrototypeOf(subClass, superClass); }

function main_setPrototypeOf(o, p) { main_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_setPrototypeOf(o, p); }

function main_createSuper(Derived) { var hasNativeReflectConstruct = main_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = main_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = main_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return main_possibleConstructorReturn(this, result); }; }

function main_possibleConstructorReturn(self, call) { if (call && (main_typeof(call) === "object" || typeof call === "function")) { return call; } return main_assertThisInitialized(self); }

function main_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function main_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function main_getPrototypeOf(o) { main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_getPrototypeOf(o); }










var main_Main = /*#__PURE__*/function (_Component) {
  main_inherits(Main, _Component);

  var _super = main_createSuper(Main);

  function Main(props) {
    var _this;

    main_classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      resume: false,
      navigation: NavigationConfig
    };
    return _this;
  }

  main_createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      getDataUrl().then(function (res) {
        _this2.setState({
          resume: res
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(header, null, /*#__PURE__*/react_default.a.createElement(component_navigation, {
        navigation: this.state.navigation
      }), /*#__PURE__*/react_default.a.createElement(banner, {
        basics: this.state.resume.basics
      }), /*#__PURE__*/react_default.a.createElement(scrolldown, null)), /*#__PURE__*/react_default.a.createElement(section, {
        basics: this.state.resume.basics,
        work: this.state.resume.work,
        education: this.state.resume.education,
        skills: this.state.resume.skills,
        languages: this.state.resume.languages,
        portfolio: this.state.resume.projects,
        references: this.state.resume.references
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.resume ? this.onLoad() : /*#__PURE__*/react_default.a.createElement(loading, null);
    }
  }]);

  return Main;
}(react["Component"]);

/* harmony default export */ var main = (main_Main);
// CONCATENATED MODULE: ./src/App.js
function App_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = App_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = App_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return App_possibleConstructorReturn(this, result); }; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }




var App_App = /*#__PURE__*/function (_Component) {
  App_inherits(App, _Component);

  var _super = App_createSuper(App);

  function App() {
    App_classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  App_createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(main, null);
    }
  }]);

  return App;
}(react["Component"]);

/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/registerWebWorkers.js
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function registerWebWorker() {
  if (!isLocalhost && 'serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('SW registered: ', registration);
      })["catch"](function (registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}
// CONCATENATED MODULE: ./src/index.js




react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));
registerWebWorker();

/***/ })

/******/ });