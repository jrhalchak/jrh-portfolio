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

	module.exports = __webpack_require__(146);


/***/ },

/***/ 33:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _entriesController = __webpack_require__(147);

	var _entriesController2 = _interopRequireDefault(_entriesController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_entriesController2.default.initApp($('.js-entriesAppContainer')[0]);

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simplePubSub = __webpack_require__(148);

	var _simplePubSub2 = _interopRequireDefault(_simplePubSub);

	var _EntryStateContainer = __webpack_require__(149);

	var _EntryStateContainer2 = _interopRequireDefault(_EntryStateContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appModel = {
	  entries: []
	},
	    selectedCache = [];

	exports.default = {
	  getEntries: function getEntries() {
	    return $.ajax({
	      url: '/api/entries',
	      method: 'GET',
	      dataType: 'json'
	    });
	  },
	  selectItem: function selectItem(id) {
	    var index = selectedCache.indexOf(id);
	    index === -1 && selectedCache.push(id);
	    _simplePubSub2.default.trigger('entries:selectItem', selectedCache);
	  },
	  deselectItem: function deselectItem(id) {
	    var index = selectedCache.indexOf(id);
	    index !== -1 && selectedCache.splice(index, 1);
	    _simplePubSub2.default.trigger('entries:deselectItem', selectedCache);
	  },
	  renderApp: function renderApp(node) {
	    appModel.selectItem = this.selectItem;
	    appModel.deselectItem = this.deselectItem;
	    ReactDOM.render(React.createElement(_EntryStateContainer2.default, appModel), node);
	    return this;
	  },
	  initApp: function initApp(node) {
	    var that = this;

	    that.getEntries().then(function (data) {
	      appModel.entries = data;
	      that.renderApp(node);
	    });
	  }
	};

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var root = typeof window == 'undefined' ? module : window || {};

	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return root.simplePubSub = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	    module.exports = root.simplePubSub = factory();
	  } else {
	    root.simplePubSub = root.SPS = factory();
	  }
	})(root, function () {
	  var _eventRegister = {};

	  var SimplePubSub = function () {
	    function SimplePubSub() {
	      _classCallCheck(this, SimplePubSub);
	    }

	    _createClass(SimplePubSub, [{
	      key: 'on',
	      value: function on(e) {
	        for (var _len = arguments.length, callback = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          callback[_key - 1] = arguments[_key];
	        }

	        if (callback.length && _eventRegister[e] && _eventRegister[e].length) {
	          var _eventRegister$e;

	          (_eventRegister$e = _eventRegister[e]).push.apply(_eventRegister$e, callback);
	        } else if (callback.length) {
	          var _eventRegister$e2;

	          _eventRegister[e] = [];
	          (_eventRegister$e2 = _eventRegister[e]).push.apply(_eventRegister$e2, callback);
	        } else {
	          console.log('No callback passed for event ' + e);
	        }
	        return this;
	      }
	    }, {
	      key: 'trigger',
	      value: function trigger(e) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }

	        if (_eventRegister[e] && _eventRegister[e].length) {
	          _eventRegister[e].forEach(function (x) {
	            x.apply(undefined, args);
	          });
	        } else if (!_eventRegister[e]) {
	          console.log('There is no event registered for ' + e);
	        }
	        return this;
	      }
	    }, {
	      key: 'off',
	      value: function off(e) {
	        if (_eventRegister[e]) delete _eventRegister[e];
	        return this;
	      }
	    }]);

	    return SimplePubSub;
	  }();

	  ;

	  return new SimplePubSub();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _simplePubSub = __webpack_require__(148);

	var _simplePubSub2 = _interopRequireDefault(_simplePubSub);

	var _EntryListItem = __webpack_require__(150);

	var _EntryListItem2 = _interopRequireDefault(_EntryListItem);

	var _idgen = __webpack_require__(153);

	var _idgen2 = _interopRequireDefault(_idgen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EntryStateContainer = function (_React$Component) {
	  _inherits(EntryStateContainer, _React$Component);

	  function EntryStateContainer(props) {
	    _classCallCheck(this, EntryStateContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EntryStateContainer).call(this, props));

	    _this.state = {
	      selectedEntries: []
	    };
	    return _this;
	  }

	  _createClass(EntryStateContainer, [{
	    key: 'updateSelected',
	    value: function updateSelected(selected) {
	      this.setState({ selectedEntries: selected });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      _simplePubSub2.default.on('entries:selectItem', that.updateSelected.bind(that));
	      _simplePubSub2.default.on('entries:deselectItem', that.updateSelected.bind(that));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var that = this,
	          selected = that.state.selectedEntries,
	          handlers = {
	        selectItem: that.props.selectItem,
	        deselectItem: that.props.deselectItem
	      };

	      return React.createElement(
	        'ul',
	        { className: 'entry-list' },
	        this.props.entries.map(function (c, i, a) {
	          return React.createElement(_EntryListItem2.default, { listItem: c, selected: selected, background: c.imageUrl, key: _idgen2.default.generateUUID(), handlers: handlers });
	        })
	      );
	    }
	  }]);

	  return EntryStateContainer;
	}(React.Component);

	exports.default = EntryStateContainer;

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EntryListItemImage = __webpack_require__(151);

	var _EntryListItemImage2 = _interopRequireDefault(_EntryListItemImage);

	var _EntryListItemContent = __webpack_require__(152);

	var _EntryListItemContent2 = _interopRequireDefault(_EntryListItemContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EntryListItem = function (_React$Component) {
	    _inherits(EntryListItem, _React$Component);

	    function EntryListItem() {
	        _classCallCheck(this, EntryListItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(EntryListItem).apply(this, arguments));
	    }

	    _createClass(EntryListItem, [{
	        key: 'render',
	        value: function render() {
	            var that = this,
	                c = that.props.listItem,
	                bg = that.props.background,
	                isSelected = that.props.selected.indexOf(c._id) >= 0,
	                handlers = that.props.handlers;

	            return React.createElement(
	                'li',
	                { className: 'entry-list__item' + (isSelected ? ' is-active' : '') },
	                React.createElement(_EntryListItemImage2.default, { item: c, bg: bg }),
	                React.createElement(_EntryListItemContent2.default, { item: c, selected: isSelected, handlers: handlers })
	            );
	        }
	    }]);

	    return EntryListItem;
	}(React.Component);

	exports.default = EntryListItem;

/***/ },

/***/ 151:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EntryListItemImage = function (_React$Component) {
	  _inherits(EntryListItemImage, _React$Component);

	  function EntryListItemImage() {
	    _classCallCheck(this, EntryListItemImage);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EntryListItemImage).apply(this, arguments));
	  }

	  _createClass(EntryListItemImage, [{
	    key: 'render',
	    value: function render() {
	      var c = this.props.item,
	          imageStyle = {
	        backgroundImage: 'url(\'' + this.props.bg + '\')'
	      },
	          codeLink = c.codeLink ? React.createElement(
	        'a',
	        { href: c.codeLink, target: '_blank' },
	        'View Code'
	      ) : null,
	          entryLink = c.link ? React.createElement(
	        'a',
	        { href: c.link, target: '_blank' },
	        'View'
	      ) : null;

	      return React.createElement(
	        'div',
	        { className: 'entry-list__image', style: imageStyle },
	        React.createElement(
	          'div',
	          { className: 'entry-list__image-links' },
	          entryLink,
	          codeLink
	        )
	      );
	    }
	  }]);

	  return EntryListItemImage;
	}(React.Component);

	exports.default = EntryListItemImage;

/***/ },

/***/ 152:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EntryListItemContent = function (_React$Component) {
	  _inherits(EntryListItemContent, _React$Component);

	  function EntryListItemContent() {
	    _classCallCheck(this, EntryListItemContent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EntryListItemContent).apply(this, arguments));
	  }

	  _createClass(EntryListItemContent, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var id = e.target.dataset.id,
	          selectFunction = this.props.selected ? this.props.handlers.deselectItem : this.props.handlers.selectItem;

	      selectFunction(id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var c = this.props.item;

	      return React.createElement(
	        'div',
	        { className: 'entry-list__item-content u-cf' },
	        React.createElement(
	          'div',
	          { className: 'entry-list__title' },
	          c.title
	        ),
	        React.createElement('div', { className: 'entry-list__body', dangerouslySetInnerHTML: { __html: c.body } }),
	        React.createElement(
	          'div',
	          { className: 'entry-list__more-button', onClick: this.handleClick.bind(this), 'data-id': c._id },
	          this.props.selected ? 'Collapse' : 'Read More'
	        )
	      );
	    }
	  }]);

	  return EntryListItemContent;
	}(React.Component);

	exports.default = EntryListItemContent;

/***/ },

/***/ 153:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  idCache: [],
	  generateUUID: function generateUUID() {
	    var self = this,
	        d = new Date().getTime(),
	        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	      var r = (d + Math.random() * 16) % 16 | 0;
	      d = Math.floor(d / 16);
	      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	    });

	    if (self.idCache.indexOf(uuid) > -1) {
	      return self.generateUUID();
	    } else {
	      self.idCache.push(uuid);
	      return uuid;
	    }
	  }
	};

/***/ }

/******/ });