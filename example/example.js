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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var view_1 = __webpack_require__(1);

var __1 = __webpack_require__(3);

var component_1 = __webpack_require__(7);

var preact_renderer_1 = __webpack_require__(9);

function delay() {
  return new Promise(function (res, _rej) {
    setTimeout(function () {
      res();
    }, 5000);
  });
}

var Page =
/*#__PURE__*/
function (_1$withComponents) {
  _inherits(Page, _1$withComponents);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
    _this.count = 0;
    return _this;
  }

  _createClass(Page, [{
    key: "onBtnClick",
    value: function onBtnClick() {
      console.log(this);
      this.findComponent('test').render({
        who: 'World ' + ++this.count
      });
      if (this.test) this.test.explode();

      if (this.count % 5 == 0) {
        this.findComponent('test').unmount();
      } //.getInstance<Test>()!.explode();

    }
  }]);

  return Page;
}(__1.withComponents(view_1.View, function () {
  return new preact_renderer_1.PreactRenderer();
}));

__decorate([__1.component('.preact', {
  async: true,
  component: function component() {
    return delay().then(function () {
      return component_1.Test;
    });
  }
}), __metadata("design:type", component_1.Test)], Page.prototype, "test", void 0);

__decorate([view_1.event.click('button'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Page.prototype, "onBtnClick", null);

exports.Page = Page;
new Page({
  el: document.querySelector('.container')
}).render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "className", function() { return className; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attach", function() { return attach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUIKeys", function() { return normalizeUIKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUIString", function() { return normalizeUIString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractView", function() { return AbstractView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttachedViews", function() { return withAttachedViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withElement", function() { return withElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTemplate", function() { return withTemplate; });
/* harmony import */ var _viewjs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function className(name) {
  return function (target) {
    Object.defineProperty(target, "name", {
      value: name
    });
  };
}
function attributes(attrs) {
  return function (target) {
    Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(target.prototype, attrs);
  };
}
function event(eventName, selector) {
  return function (target, property, desc) {
    if (!desc) throw new Error('no description');

    if (typeof desc.value !== 'function') {
      throw new TypeError('must be a function');
    }

    var key = "".concat(eventName, " ").concat(selector);
    var events = target.events;

    if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(events, key)) {
      var old = events[key];
      if (!Array.isArray(old)) old = [old];
      old.push(property);
      events[key] = old;
    } else {
      events = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(events || {}, _defineProperty({}, key, property));
    }

    target.events = events;
  };
}

var keyEventDecorator = function keyEventDecorator(eventName, selector, keyCodes) {
  var factory = event(eventName, selector);
  if (keyCodes && !Array.isArray(keyCodes)) keyCodes = [keyCodes];
  return function (target, property, desc) {
    if (!desc) throw new Error('no description');

    if (typeof desc.value !== 'function') {
      throw new TypeError('must be a function');
    }

    if (keyCodes) {
      var oldValue = desc.value;

      desc.value = function (e) {
        if (e && e instanceof KeyboardEvent) {
          if (~keyCodes.indexOf(e.keyCode)) return oldValue.call(this, e);
          return;
        }

        var args = Array.prototype.slice.call(arguments);
        return Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["callFuncCtx"])(oldValue, args, this);
      };
    }

    return factory(target, property, desc);
  };
};

(function (event) {
  function click(selector) {
    return event('click', selector);
  }

  event.click = click;

  function change(selector) {
    return event('change', selector);
  }

  event.change = change;

  function keypress(selector, keyCodes) {
    return keyEventDecorator("keypress", selector, keyCodes);
  }

  event.keypress = keypress;

  function keydown(selector, keyCodes) {
    return keyEventDecorator("keydown", selector, keyCodes);
  }

  event.keydown = keydown;

  function keyup(selector, keyCodes) {
    return keyEventDecorator("keyup", selector, keyCodes);
  }

  event.keyup = keyup;
})(event || (event = {}));
/**
 * Mount a view on the target and bind matched element
 *
 * @export
 * @param {string} selector
 * @returns
 */


function attach(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (target, prop) {
    var View;

    if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(options.view)) {
      View = options.view;
    } else {
      View = Reflect.getOwnMetadata("design:type", target, prop);
    }

    if (!View) throw new Error("design:type does not exists for prop '".concat(prop, "' on '").concat(target, "'"));
    if (!target.views) target.views = {};
    target.views[prop] = {
      selector: selector,
      view: View,
      optional: typeof options.optional !== 'boolean' ? false : options.optional
    };
  };
}

var kUIRegExp = /@(?:ui\.)?([a-zA-Z_\-\$#\d]+)/i;
function normalizeUIKeys(obj, uimap) {
  var o = {},
      k,
      v;

  for (k in obj) {
    v = obj[k];
    k = normalizeUIString(k, uimap);

    if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(o, k)) {
      if (!Array.isArray(o[k])) o[k] = [o[k]];
      o[k].push(v);
    } else {
      o[k] = v;
    }
  }

  return o;
}
function normalizeUIString(str, uimap) {
  var ms, ui, sel;

  if ((ms = kUIRegExp.exec(str)) != null) {
    ui = ms[1], sel = uimap[ui];
    if (sel != null) str = str.replace(ms[0], sel);
  }

  return str;
}

var AbstractView =
/*#__PURE__*/
function (_Base) {
  _inherits(AbstractView, _Base);

  function AbstractView() {
    _classCallCheck(this, AbstractView);

    return _possibleConstructorReturn(this, _getPrototypeOf(AbstractView).apply(this, arguments));
  }

  _createClass(AbstractView, [{
    key: "render",
    value: function render() {
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this;
    }
  }, {
    key: "el",
    get: function get() {
      return this.getElement();
    },
    set: function set(el) {
      this.setElement(el);
    }
  }]);

  return AbstractView;
}(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["Base"]);

var Controller =
/*#__PURE__*/
function (_AbstractView) {
  _inherits(Controller, _AbstractView);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, _getPrototypeOf(Controller).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: "setElement",
    value: function setElement(el) {
      this._el = el;
      return this;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this._el;
    }
  }]);

  return Controller;
}(AbstractView);

var debug$1 = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["debug"])("View");
var unbubblebles = 'focus blur change'.split(' ');

var View =
/*#__PURE__*/
function (_AbstractView) {
  _inherits(View, _AbstractView);

  function View(options) {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
    _this._options = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, options || {});
    _this._domEvents = [];
    _this._vid = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])('vid');
    if (_this._options.el) _this.setElement(_this._options.el);
    return _this;
  }

  _createClass(View, [{
    key: "delegateEvents",
    value: function delegateEvents(events) {
      var _this2 = this;

      if (!this.el) return;
      events = events || Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["result"])(this, 'events') || {};
      debug$1('%s delegate events %o', this, events);

      this._bindUIElements();

      events = normalizeUIKeys(events, this._ui);

      var triggers = this._configureTriggers();

      events = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, events, triggers);
      if (!events) return this;
      var dels = [];

      for (var key in events) {
        var methods = events[key];
        var match = key.match(/^(\S+)\s*(.*)$/);
        if (!Array.isArray(methods)) methods = [methods];

        for (var i = 0, ii = methods.length; i < ii; i++) {
          var method = methods[i];
          if (typeof method !== 'function') method = this[method]; // Set delegates immediately and defer event on this.el

          var boundFn = method;

          if (match[2]) {
            this.delegate(match[1], match[2], boundFn);
          } else {
            dels.push([match[1], boundFn]);
          }
        }
      }

      dels.forEach(function (d) {
        _this2.delegate(d[0], d[1]);
      });
      return this;
    }
  }, {
    key: "undelegateEvents",
    value: function undelegateEvents() {
      if (!this.el) return this;
      debug$1('%s undelegate events', this);

      this._unbindUIElements();

      if (this.el) {
        for (var i = 0, len = this._domEvents.length; i < len; i++) {
          var item = this._domEvents[i];
          debug$1("%s remove dom eventlistener for event '%s'", this, item.eventName);
          this.el.removeEventListener(item.eventName, item.handler);
        }

        this._domEvents.length = 0;
      }

      return this;
    }
  }, {
    key: "delegate",
    value: function delegate(eventName, selector, listener) {
      if (!this.el) return this;

      if (typeof selector === 'function') {
        listener = selector;
        selector = undefined;
      }

      var id = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])();

      var domEvent = this._domEvents.find(function (m) {
        return m.eventName == eventName && m.selector == selector;
      });

      if (domEvent) {
        id = domEvent.id;
        domEvent.listeners.push(listener);
        return this;
      } else {
        domEvent = {
          id: id,
          selector: selector,
          listeners: [listener],
          eventName: eventName
        };
      }

      var root = this.el;
      var self = this;
      domEvent.handler = selector ? function (e) {
        var node = e.target || e.srcElement;

        for (; node && node != root; node = node.parentNode) {
          if (node && Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["matches"])(node, selector)) {
            if (e.delegateTarget && e.delegateTarget !== node) {
              debug$1('WARN: %s delegateTarget already set and node is not same', self);
              continue;
            }

            e.delegateTarget = node;
            debug$1("%s trigger %i listeners for '%s'-event on selector '%s'", self, domEvent.listeners.length, domEvent.eventName, domEvent.selector);
            domEvent.listeners.forEach(function (listener) {
              return listener.call(self, e);
            });
          }
        }
      } : function (e) {
        if (e.delegateTarget) return;
        domEvent.listeners.forEach(function (listener) {
          return listener.call(self, e);
        });
      };
      var useCap = !!~unbubblebles.indexOf(eventName) && selector != null;
      debug$1("%s delegate event '%s'", this, eventName);
      this.el.addEventListener(eventName, domEvent.handler, useCap);

      this._domEvents.push(domEvent);

      return this;
    }
  }, {
    key: "undelegate",
    value: function undelegate(eventName, selector, listener) {
      if (!this.el) return this;

      if (typeof selector === 'function') {
        listener = selector;
        selector = undefined;
      }

      var handlers = this._domEvents.slice();

      for (var i = 0, len = handlers.length; i < len; i++) {
        var item = handlers[i];
        var match = item.eventName === eventName && (listener ? !!~item.listeners.indexOf(listener) : true) && (selector ? item.selector === selector : true);
        if (!match) continue;

        if (listener && item.listeners.length == 1 || !listener) {
          debug$1("%s remove dom eventlistener for event '%s'", this, item.eventName);
          this.el.removeEventListener(item.eventName, item.handler);

          this._domEvents.splice(Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(handlers, item), 1);
        } else {
          debug$1("%s remove listener for event '%s'", this, item.eventName);
          item.listeners.splice(Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(item.listeners, listener), 1);
        }
      }

      return this;
    }
  }, {
    key: "render",
    value: function render() {
      debug$1("%s render", this);
      this.undelegateEvents();
      this.delegateEvents();
      return this;
    }
  }, {
    key: "setElement",
    value: function setElement(el) {
      this.undelegateEvents();

      if (this.el && this.options.attachId) {
        debug$1("%s remove view id attribute", this);
        this.el.removeAttribute('data-vid');
      }

      debug$1("%s set element", this, el);
      this._el = el;

      if (this.el && this.options.attachId) {
        debug$1("%s set view id attribute", this);
        this.el.setAttribute('data-vid', this.vid);
      }

      return this;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this._el;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      debug$1("%s destroy", this);

      if (this.el && this.options.attachId) {
        this.el.removeAttribute('data-vid');
      }
      this.setElement(void 0);

      _get(_getPrototypeOf(View.prototype), "destroy", this).call(this);

      return this;
    }
  }, {
    key: "_bindUIElements",
    value: function _bindUIElements() {
      var _this3 = this;

      if (!this._ui) {
        return;
      }

      var ui = this._ui;
      Object.keys(ui).forEach(function (k) {
        var elm = _this3.el.querySelectorAll(ui[k]);

        if (elm && elm.length) {
          // unwrap if it's a nodelist.
          if (elm instanceof NodeList) {
            elm = elm[0];
          }

          debug$1('%s added ui element %s %s', _this3, k, ui[k]);
          _this3.ui[k] = elm;
        } else {
          debug$1('%s ui element not found ', _this3, k, ui[k]);
        }
      });
    }
  }, {
    key: "_unbindUIElements",
    value: function _unbindUIElements() {
      debug$1("%s unbind ui elements", this);
      this.ui = {};
    }
  }, {
    key: "_configureTriggers",
    value: function _configureTriggers() {
      var triggers = this.triggers || {};
      triggers = normalizeUIKeys(triggers, this._ui); // Configure the triggers, prevent default
      // action and stop propagation of DOM events

      var events = {},
          val,
          key;

      for (key in triggers) {
        val = triggers[key];
        debug$1('%s added trigger %s %s', this, key, val);
        events[key] = this._buildViewTrigger(val);
      }

      return events;
    }
  }, {
    key: "_buildViewTrigger",
    value: function _buildViewTrigger(triggerDef) {
      var _this4 = this;

      if (typeof triggerDef === 'string') triggerDef = {
        event: triggerDef
      };
      var options = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({
        preventDefault: true,
        stopPropagation: true
      }, triggerDef);
      return function (e) {
        if (e) {
          if (e.preventDefault && options.preventDefault) {
            e.preventDefault();
          }

          if (e.stopPropagation && options.stopPropagation) {
            e.stopPropagation();
          }
        }

        Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["triggerMethodOn"])(_this4, options.event, {
          view: _this4
        }, e);
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.name || this.constructor.name, " ").concat(this.vid, "]");
    }
  }, {
    key: "events",
    set: function set(events) {
      if (this._events) {
        this.undelegateEvents();
      }

      this._events = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, events);
    },
    get: function get$$1() {
      return Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, this._events || {});
    } // Unique view id

  }, {
    key: "vid",
    get: function get$$1() {
      return this._vid;
    }
  }, {
    key: "options",
    get: function get$$1() {
      return this._options;
    }
  }]);

  return View;
}(AbstractView);

var debug$2 = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["debug"])("withAtachedViews");
function withAttachedViews(Base$$1) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
        if (_this.views) _this._bindViews(_this.views);
        return _this;
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          _get(_getPrototypeOf(_class.prototype), "render", this).call(this);

          this._renderViews(this.views);

          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.views) {
            this._unbindViews(this.views);
          }

          return _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
        }
      }, {
        key: "_bindViews",
        value: function _bindViews(views) {
          var o;

          for (var key in views) {
            o = views[key];
            var view = _viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["Invoker"].get(o.view);
            this[key] = view;
          }
        }
      }, {
        key: "_unbindViews",
        value: function _unbindViews(views) {
          var self = this;

          for (var key in views) {
            if (self[key] && self[key] instanceof View) {
              self[key].destroy();
              delete self[key];
            }
          }
        }
      }, {
        key: "_renderViews",
        value: function _renderViews(views) {
          var el, o;
          debug$2("%s render attached views", this);

          for (var key in views) {
            o = views[key];
            var sel = normalizeUIString(o.selector, this._ui || {});
            el = this.el.querySelector(sel);
            if (!el && !o.optional) throw new ReferenceError("selector \"".concat(sel, "\" for view ").concat(o.view.name, " not found in dom")); // No element - return!

            if (!el) return;
            var view = this[key];
            if (!view) throw new ReferenceError("view \"".concat(o.view.name, "\" not mount"));
            debug$2("%s render atcched view %s", this, view);
            view.el = el;
            view.render();
          }
        }
      }]);

      return _class;
    }(Base$$1)
  );
}

function withElement(Base$$1) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
        if (!_this.el) _this._ensureElement();
        return _this;
      }

      _createClass(_class, [{
        key: "_ensureElement",
        value: function _ensureElement() {
          if (this.el) return;
          var tagName = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["getOption"])('tagName', [this.options, this]) || 'div',
              className = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["getOption"])('className', [this.options, this]),
              attr = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["getOption"])('attributes', [this.options, this]),
              el = document.createElement(tagName);

          if (className) {
            // IE < 11 does not support multiple arguments in add/remove
            className.split(' ').map(function (m) {
              return m.trim();
            }).forEach(function (cl) {
              return el.classList.add(cl);
            });
          }

          if (attr) {
            for (var key in attr) {
              el.setAttribute(key, attr[key]);
            }
          }

          this.__created = true;
          this.el = el;
        }
      }, {
        key: "remove",
        value: function remove() {
          if (this.__created && this.el && this.el.parentNode) {
            if (typeof this.undelegateEvents === 'function') this.undelegateEvents();
            this.el.parentNode.removeChild(this.el);
            this.el = void 0;
          }

          this.__created = false;
          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);

          this.remove();
          return this;
        }
      }]);

      return _class;
    }(Base$$1)
  );
}

var debug$3 = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["debug"])("withTemplate");
function withTemplate(Base$$1) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "getTemplateData",
        value: function getTemplateData() {
          var data = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["result"])(this, 'model') || {};
          debug$3("%s get template data", this);
          return data;
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.el) return this;
          if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.undelegateEvents)) this.undelegateEvents();
          this.renderTemplate();
          return _get(_getPrototypeOf(_class.prototype), "render", this).call(this);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var data = this.getTemplateData();

          try {
            var template = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["result"])(this, 'template', data);
            if (template && this.el) this.el.innerHTML = '';
          } catch (e) {}

          return _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
        }
      }, {
        key: "renderTemplate",
        value: function renderTemplate() {
          if (!this.el) return;
          var data = this.getTemplateData();
          var template = Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["result"])(this, 'template', data);
          if (!template) return;
          debug$3("%s render template", this);
          if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(template)) this.el.innerHTML = template;else if (Object(_viewjs_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(template)) {
            this.el.appendChild(template);
          } else {
            this.el.innerHTML = '';
          }
        }
      }]);

      return _class;
    }(Base$$1)
  );
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobal", function() { return getGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFunc", function() { return callFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFuncCtx", function() { return callFuncCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return getOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerMethodOn", function() { return triggerMethodOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConstructor", function() { return isConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDestroyable", function() { return isDestroyable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelcase", function() { return camelcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoker", function() { return Invoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInvoker", function() { return setInvoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Base = function () {
    function Base() {
        classCallCheck(this, Base);
    }

    createClass(Base, [{
        key: 'destroy',
        value: function destroy() {
            return this;
        }
    }]);
    return Base;
}();

Base.inherit = inherit;
// Because IE/edge stinks!
var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
    return !!~indexOf(nodeList, this);
};
function matches(elm, selector) {
    return matchesSelector.call(elm, selector);
}
function getGlobal() {
    return Function('return this')();
}
function callFunc(fn) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var l = fn.length,
        i = -1,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2],
        a4 = args[3],
        a5 = args[4];
    switch (args.length) {
        case 0:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx);
            }return;
        case 1:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx, a1);
            }return;
        case 2:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx, a1, a2);
            }return;
        case 3:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx, a1, a2, a3);
            }return;
        case 4:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
            }return;
        case 5:
            while (++i < l) {
                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4, a5);
            }return;
        default:
            while (++i < l) {
                fn[i].handler.apply(fn[i].ctx, args);
            }return;
    }
}
function callFuncCtx(fn) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var ctx = arguments[2];

    if (!Array.isArray(fn)) fn = [fn];
    var l = fn.length,
        i = -1,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2],
        a4 = args[3],
        a5 = args[4];
    switch (args.length) {
        case 0:
            while (++i < l) {
                fn[i].call(ctx);
            }return;
        case 1:
            while (++i < l) {
                fn[i].call(ctx, a1);
            }return;
        case 2:
            while (++i < l) {
                fn[i].call(ctx, a1, a2);
            }return;
        case 3:
            while (++i < l) {
                fn[i].call(ctx, a1, a2, a3);
            }return;
        case 4:
            while (++i < l) {
                fn[i].call(ctx, a1, a2, a3, a4);
            }return;
        case 5:
            while (++i < l) {
                fn[i].call(ctx, a1, a2, a3, a4, a5);
            }return;
        default:
            while (++i < l) {
                fn[i].apply(ctx, args);
            }return;
    }
}
function result(obj, prop) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    if (isFunction(obj[prop])) return obj[prop].apply(obj, args);
    return obj[prop];
}
function getOption(option, objs) {
    var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    for (var i = 0, ii = objs.length; i < ii; i++) {
        if (isObjectLike(objs[i]) && objs[i][option]) {
            return resolve ? result(objs[i], option) : objs[i][option];
        }
    }
    return void 0;
}
/**
 * Trigger an event on an object, if it's an eventemitter.
 * Will also call an method "on<EventName>" if it's exists
 *
 * @export
 * @template T
 * @param {T} self
 * @param {string} eventName
 * @param {...any[]} args
 */
function triggerMethodOn(self, eventName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    var ev = camelcase("on-" + eventName.replace(':', '-'));
    if (self[ev] && typeof self[ev] === 'function') {
        callFunc([{
            handler: self[ev],
            ctx: self
        }], args);
    }
    if (isFunction(self.trigger)) {
        args = [eventName].concat(args);
        callFunc([{
            handler: self.trigger,
            ctx: self
        }], args);
    }
}
function isObjectLike(val) {
    return val === Object(val);
}
function isObject(val) {
    return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && Array.isArray(val) === false;
}
function isObjectObject(o) {
    return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}
function isPlainObject(o) {
    var ctor, prot;
    if (isObjectObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function') return false;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}
function isFunction(a) {
    return typeof a === 'function';
}
function isConstructor(a) {
    try {
        Reflect.construct(String, [], a);
    } catch (e) {
        return false;
    }
    return true;
}
function isDestroyable(a) {
    return a && isFunction(a.destroy);
}
function isString(a) {
    return typeof a === 'string';
}
function isElement(input) {
    if (!input) return false;else if (input instanceof Element) return true;
    return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === Node.ELEMENT_NODE && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
}
function isNumber(num) {
    return typeof num === 'number';
}
function isNumeric(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
}
function extend(obj) {
    if (!isObject(obj)) return obj;

    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    for (var i = 0, ii = args.length; i < ii; i++) {
        var o = args[i];
        if (!isObject(o)) continue;
        for (var k in o) {
            if (has(o, k)) obj[k] = o[k];
        }
    }
    return obj;
}
var _has = Object.prototype.hasOwnProperty,
    _slice = Array.prototype.slice;
function has(obj, prop) {
    return _has.call(obj, prop);
}
function slice(obj, start, len) {
    return _slice.call(obj, start, len);
}
function camelcase(input) {
    return input.toLowerCase().replace(/-(.)/g, function (_, group1) {
        return group1.toUpperCase();
    });
}
var idCounter = 0;
function uniqueId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    return prefix + ++idCounter;
}
function indexOf(array, item) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === item) return i;
    }return -1;
}
function inherit(protoProps, staticProps) {
    var parent = this;
    var child;
    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `protoProps` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && has(protoProps, 'constructor')) {
        child = protoProps.constructor;
    } else {
        child = function child() {
            return parent.apply(this, arguments);
        };
    }
    // Add static properties to the constructor function, if supplied.
    Object.assign(child, parent, staticProps);
    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.
    child.prototype = create(parent.prototype, protoProps);
    child.prototype.constructor = child;
    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;
    return child;
}
var nativeCreate = Object.create;
function Ctor() {}
function baseCreate(prototype) {
    if (!isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
}
function create(prototype, props) {
    var result = baseCreate(prototype);
    if (props) Object.assign(result, props);
    return result;
}
function noop() {}
function destroy(a) {
    if (isDestroyable(a)) a.destroy();
}

function equal(a, b) {
    return eq(a, b, [], []);
}
var toString = Object.prototype.toString;
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, dates, and booleans are compared by value.
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return a == String(b);
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
            // other numeric values.
            return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a == +b;
        // RegExps are compared by their source patterns and flags.
        case '[object RegExp]':
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor,
        bCtor = b.constructor;
    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
        return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0,
        result$$1 = true;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
        // Compare array lengths to determine if a deep comparison is necessary.
        size = a.length;
        result$$1 = size === b.length;
        if (result$$1) {
            // Deep compare the contents, ignoring non-numeric properties.
            while (size--) {
                if (!(result$$1 = eq(a[size], b[size], aStack, bStack))) break;
            }
        }
    } else {
        // Deep compare objects.
        for (var key in a) {
            if (has(a, key)) {
                // Count the expected number of properties.
                size++;
                // Deep compare each member.
                if (!(result$$1 = has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
            }
        }
        // Ensure that both objects contain the same number of properties.
        if (result$$1) {
            for (key in b) {
                if (has(b, key) && !size--) break;
            }
            result$$1 = !size;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result$$1;
}

var hasReflect = typeof Reflect !== 'undefined' && isFunction(Reflect.construct);
var defaultInvoker = {
    get: function get(V) {
        if (hasReflect) return Reflect.construct(V, []);
        return new V();
    }
};
var Invoker = defaultInvoker;
/**
 * Set current  invoker.
 * If `i` is undefined, the defaultInvoker will be used
 *
 * @export
 * @param {IInvoker} [i]
 */
function setInvoker(i) {
    if (!i) i = defaultInvoker;
    Invoker = i;
}

var global$1 = getGlobal();
//
var debug = global$1.localStorage && global$1.localStorage.getItem("viewjs.debug") != null ? function (namespace) {
    return function () {
        var _console;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var l = args.length;
        if (l && isString(args[0])) {
            args[0] = namespace + ' ' + args[0];
        } else if (l) {
            args.unshift(namespace);
        } else return;
        (_console = console).log.apply(_console, toConsumableArray(args.map(function (m) {
            return isObject(m) && m instanceof Base ? String(m) : m;
        })));
    };
} : function (_) {
    return noop;
};




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(4));

var decorators_1 = __webpack_require__(6);

exports.component = decorators_1.component;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(2);

var component_container_1 = __webpack_require__(5);

var decorators_1 = __webpack_require__(6);

function withComponents(Base, renderer) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this._renderer = renderer;
        _this._componentsRendered = false;
        decorators_1.componentFromMeta(utils_1.result(_assertThisInitialized(_assertThisInitialized(_this)), '_renderer'), _assertThisInitialized(_assertThisInitialized(_this))).forEach(function (found) {
          if (_this.components.find(function (m) {
            return m.name === found.name;
          })) throw new TypeError("a component with name '".concat(found.name, "' already registered"));

          _this.components.push(found);
        });
        return _this;
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          this._componentsRendered = false;

          _get(_getPrototypeOf(_class.prototype), "render", this).call(this);

          this._renderComponents();

          this._componentsRendered = true;
          return this;
        }
      }, {
        key: "findComponent",
        value: function findComponent(name) {
          return this.components.find(function (m) {
            return m.name === name;
          });
        }
      }, {
        key: "renderComponent",
        value: function renderComponent(Component, selector, props, name) {
          var children = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var found = this.components.find(function (m) {
            return m.selector === selector && m.componentType === Component;
          });

          if (!found) {
            var _renderer = utils_1.result(this, "_renderer");

            found = new component_container_1.ComponentContainer(_renderer, this, {
              selector: selector,
              attributes: props,
              componentType: Component,
              children: children,
              name: name || (utils_1.isString(selector) ? selector : utils_1.uniqueId())
            });
            if (this.components.find(function (m) {
              return m.name === found.name;
            })) throw new TypeError("a component with name '".concat(found.name, "' already registered"));
            this.components.push(found);
          }

          if (this._componentsRendered) found.render();
        }
      }, {
        key: "_renderComponents",
        value: function _renderComponents() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              item.render();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;
              item.destroy();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this._components = [];
          return this;
        }
      }, {
        key: "components",
        get: function get() {
          if (!Array.isArray(this._components)) this._components = [];
          return this._components;
        }
      }]);

      return _class;
    }(Base)
  );
}

exports.withComponents = withComponents;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(2);

var ComponentContainer =
/*#__PURE__*/
function () {
  function ComponentContainer(renderer, view, options) {
    _classCallCheck(this, ComponentContainer);

    this.renderer = renderer;
    this.view = view;
    this._loading = false;
    this.id = utils_1.uniqueId();
    Object.assign(this, options);
  }

  _createClass(ComponentContainer, [{
    key: "getInstance",
    value: function getInstance() {
      return this.component;
    }
  }, {
    key: "render",
    value: function render(attributes) {
      var _this = this;

      attributes = attributes || this.attributes;
      if (utils_1.isFunction(attributes)) attributes = attributes(this.view);
      var el = this.selector;
      if (utils_1.isString(el)) el = this.view.el.querySelector(el);

      if (!el) {
        throw new ReferenceError("element with selector '".concat(this.selector, "' not found in the dom"));
      }

      var oldRef = attributes.ref;
      var props = Object.assign({
        ref: function ref(_ref) {
          _this.component = _ref;
          if (utils_1.isFunction(oldRef)) oldRef(_ref);
        }
      }, attributes);

      if (this.async) {
        if (this._loading) return this;
        this._loading = true;
        var result = this.componentType();
        Promise.resolve(result).then(function (ret) {
          _this.async = false;
          _this.componentType = ret;

          _this.render(attributes);

          _this._loading = false;
        });
      } else {
        this.el = this.renderer.render(this.componentType, props, this.children || [], el, this.el);
      }

      return this;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      if (!this.component) return this;
      this.renderer.unmount({
        el: this.el,
        component: this.component
      });
      this.component = void 0;
      this.el = void 0;
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unmount();
      return this;
    }
  }]);

  return ComponentContainer;
}();

exports.ComponentContainer = ComponentContainer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = __webpack_require__(2);

var component_container_1 = __webpack_require__(5);

exports.ComponentsKey = Symbol('view@components');

function component(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (target, prop) {
    var Component;

    if (utils_1.isFunction(options.component)) {
      Component = options.component;
    } else {
      Component = Reflect.getOwnMetadata("design:type", target, prop);
    }

    if (!Component) throw new Error("design:type does not exists for prop '".concat(prop, "' on '").concat(target, "'"));
    var meta = Reflect.getOwnMetadata(exports.ComponentsKey, target);

    if (!meta) {
      meta = [];
      Reflect.defineMetadata(exports.ComponentsKey, meta, target);
    }

    meta.push({
      selector: selector,
      component: Component,
      attributes: options.attributes || {},
      name: prop,
      async: !!options.async
    });
    return {
      get: function get() {
        var found = this.findComponent(prop);
        return found ? found.getInstance() : void 0;
      }
    };
  };
}

exports.component = component;

function componentFromMeta(renderer, view) {
  var out = Reflect.getMetadata(exports.ComponentsKey, view);
  if (!out) return [];
  return out.map(function (m) {
    return new component_container_1.ComponentContainer(renderer, view, {
      selector: m.selector,
      componentType: m.component,
      attributes: m.attributes,
      name: m.name,
      async: m.async
    });
  });
}

exports.componentFromMeta = componentFromMeta;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(8);

var Test =
/*#__PURE__*/
function (_preact_1$Component) {
  _inherits(Test, _preact_1$Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, _getPrototypeOf(Test).apply(this, arguments));
  }

  _createClass(Test, [{
    key: "explode",
    value: function explode() {
      this.setState({
        rapper: 'tesdt'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return preact_1.h("div", null, preact_1.h("h1", null, "Hello, ", this.props.who, " - ", this.state.rapper));
    }
  }]);

  return Test;
}(preact_1.Component);

exports.Test = Test;

/***/ }),
/* 8 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		var prev = this.prevState = this.state;
		if (typeof state === 'function') state = state(prev, this.props);
		this.state = extend(extend({}, prev), state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = __webpack_require__(8);

function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

function removeChildren(node) {
  node = node.lastChild;

  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

function recollectNodeTree(node, unmountOnly) {
  var component = node._component;

  if (component) {
    unmountComponent(component);
  } else {
    if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

    if (unmountOnly === false || node['__preactattr_'] == null) {
      removeNode(node);
    }

    removeChildren(node);
  }
}

function unmountComponent(component) {
  //if (options.beforeUnmount) options.beforeUnmount(component);
  var base = component.base;
  component._disable = true;
  if (component.componentWillUnmount) component.componentWillUnmount();
  component.base = null;
  var inner = component._component;

  if (inner) {
    unmountComponent(inner);
  } else if (base) {
    if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);
    component.nextBase = base;
    removeNode(base);
    removeChildren(base);
  }

  if (component.__ref) component.__ref(null);
}

var PreactRenderer =
/*#__PURE__*/
function () {
  function PreactRenderer() {
    _classCallCheck(this, PreactRenderer);
  }

  _createClass(PreactRenderer, [{
    key: "render",
    value: function render(Compoent, attributes, children, container, prev) {
      return preact_1.render(preact_1.h(Compoent, attributes, children), container, prev);
    }
  }, {
    key: "unmount",
    value: function unmount(options) {
      if (options.component) unmountComponent(options.component);else if (options.el && options.el.parentElement) options.el.parentElement.removeChild(options.el);
      return true;
    }
  }]);

  return PreactRenderer;
}();

exports.PreactRenderer = PreactRenderer;

/***/ })
/******/ ]);