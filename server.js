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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8079;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.use('/data', _express2.default.static('data'));\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n    var actions, context, content;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return route.component.fetching ? route.component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n            }).map(function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context.abrupt('return', _context.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, undefined);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            _context2.next = 3;\n            return Promise.all(actions);\n\n          case 3:\n            context = {};\n            content = (0, _render2.default)(req.path, _store2.default, context);\n\n\n            res.send(content);\n\n          case 6:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(PORT, function () {\n  return console.log('Frontend service listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        ' + helmet.title.toString() + '\\n        ' + helmet.meta.toString() + '\\n        <link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css\"></link>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/basket.js":
/*!******************************!*\
  !*** ./src/action/basket.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.resetBasket = exports.removeBasket = exports.addBasket = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar addBasket = exports.addBasket = function addBasket(data) {\n    return function (dispatch) {\n        try {\n            dispatch({ type: _types.ADD_BASKET, payload: data });\n        } catch (e) {\n            console.log(e);\n        }\n    };\n};\n\nvar removeBasket = exports.removeBasket = function removeBasket(data) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            dispatch({ type: _types.REMOVE_BASKET, payload: data });\n\n                        case 1:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar resetBasket = exports.resetBasket = function resetBasket() {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n            return _regenerator2.default.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            dispatch({ type: _types.RESET_BASKET, payload: [] });\n\n                        case 1:\n                        case \"end\":\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x2) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/action/basket.js?");

/***/ }),

/***/ "./src/action/products.js":
/*!********************************!*\
  !*** ./src/action/products.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchProducts = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nvar _services = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchProducts = exports.fetchProducts = function fetchProducts() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              try {\n                dispatch({ type: _types.REQUEST_PRODUCTS });\n                _services.TyreService.getTyres(function (tyres) {\n                  dispatch({ type: _types.RECEIVE_PRODUCTS, payload: tyres });\n                });\n              } catch (e) {\n                console.log(e);\n                dispatch({ type: _types.RECEIVE_PRODUCTS, payload: [] });\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/products.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar REQUEST_PRODUCTS = exports.REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';\nvar RECEIVE_PRODUCTS = exports.RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';\n\nvar ADD_BASKET = exports.ADD_BASKET = 'ADD_BASKET';\nvar REMOVE_BASKET = exports.REMOVE_BASKET = 'REMOVE_BASKET';\nvar RESET_BASKET = exports.RESET_BASKET = 'RESET_BASKET';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/components/Basket/BasketItem.js":
/*!*********************************************!*\
  !*** ./src/components/Basket/BasketItem.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BasketItem = function BasketItem(props) {\n    var basic = props.basic,\n        addToBasket = props.addToBasket,\n        removeFromBasket = props.removeFromBasket,\n        _props$content = props.content,\n        title = _props$content.title,\n        image = _props$content.image,\n        price = _props$content.price,\n        qty = props.qty,\n        id = props.id;\n\n    var tyreInfo = { id: id, qty: qty, price: price };\n    var totalPrice = (price * qty).toFixed(2);\n\n    return _react2.default.createElement(\n        _semanticUiReact.Table.Row,\n        null,\n        _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            null,\n            _react2.default.createElement('img', { src: 'https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54' + image, width: '70px' })\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            null,\n            title\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            null,\n            qty\n        ),\n        !basic && _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            null,\n            price\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            null,\n            totalPrice\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Table.Cell,\n            { singleLine: true },\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _semanticUiReact.Button,\n                    { icon: true, data: tyreInfo, onClick: addToBasket },\n                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' })\n                ),\n                _react2.default.createElement(\n                    _semanticUiReact.Button,\n                    { icon: true, data: tyreInfo, onClick: removeFromBasket },\n                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'minus' })\n                )\n            )\n        )\n    );\n};\n\nexports.default = BasketItem;\n\n//# sourceURL=webpack:///./src/components/Basket/BasketItem.js?");

/***/ }),

/***/ "./src/components/Basket/BasketList.js":
/*!*********************************************!*\
  !*** ./src/components/Basket/BasketList.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _basket = __webpack_require__(/*! ../../action/basket */ \"./src/action/basket.js\");\n\nvar _BasketItem = __webpack_require__(/*! ./BasketItem */ \"./src/components/Basket/BasketItem.js\");\n\nvar _BasketItem2 = _interopRequireDefault(_BasketItem);\n\nvar _products = __webpack_require__(/*! ../../action/products */ \"./src/action/products.js\");\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n    var basket = _ref.basket,\n        products = _ref.products;\n    return { basket: basket, products: products };\n};\n\nvar BasketList = (_dec = (0, _reactRedux.connect)(m, { addBasket: _basket.addBasket, removeBasket: _basket.removeBasket, resetBasket: _basket.resetBasket, fetchProducts: _products.fetchProducts }), _dec(_class = function (_Component) {\n    _inherits(BasketList, _Component);\n\n    function BasketList(props) {\n        _classCallCheck(this, BasketList);\n\n        var _this = _possibleConstructorReturn(this, (BasketList.__proto__ || Object.getPrototypeOf(BasketList)).call(this, props));\n\n        _this.addToBasket = _this.addToBasket.bind(_this);\n        _this.removeFromBasket = _this.removeFromBasket.bind(_this);\n        _this.clearBasket = _this.clearBasket.bind(_this);\n        return _this;\n    }\n\n    _createClass(BasketList, [{\n        key: 'addToBasket',\n        value: function addToBasket(e, _ref2) {\n            var data = _ref2.data;\n\n            this.props.addBasket(data);\n        }\n    }, {\n        key: 'removeFromBasket',\n        value: function removeFromBasket(e, _ref3) {\n            var data = _ref3.data;\n\n            this.props.removeBasket(data);\n        }\n    }, {\n        key: 'clearBasket',\n        value: function clearBasket() {\n            this.props.resetBasket();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            console.log(this.props);\n            var _props = this.props,\n                basic = _props.basic,\n                tyres = _props.basket.tyres,\n                products = _props.products;\n\n\n            var basketItems = function basketItems() {\n                return tyres.map(function (item, i) {\n                    var tyreInfo = products.products.find(function (obj) {\n                        return obj.id == item.id;\n                    });\n                    return _react2.default.createElement(_BasketItem2.default, _extends({ key: 'BASKET_ITEM_' + i,\n                        removeFromBasket: _this2.removeFromBasket,\n                        addToBasket: _this2.addToBasket,\n                        qty: item.qty,\n                        basic: basic\n                    }, tyreInfo));\n                });\n            };\n\n            var basketTotal = tyres.reduce(function (total, item) {\n                return total += item.price * item.qty;\n            }, 0).toFixed(2);\n\n            if (tyres.length < 1) {\n                return _react2.default.createElement(\n                    'p',\n                    null,\n                    'You have no items in the basket'\n                );\n            }\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'productList' },\n                _react2.default.createElement(\n                    _semanticUiReact.Grid,\n                    { divided: 'vertically' },\n                    _react2.default.createElement(\n                        _semanticUiReact.Grid.Row,\n                        { columns: 3, className: 'productList__row' },\n                        _react2.default.createElement(\n                            _semanticUiReact.Container,\n                            null,\n                            _react2.default.createElement(\n                                _semanticUiReact.Table,\n                                { columns: '3' },\n                                !basic && _react2.default.createElement(\n                                    _semanticUiReact.Table.Header,\n                                    null,\n                                    _react2.default.createElement(\n                                        _semanticUiReact.Table.Row,\n                                        null,\n                                        _react2.default.createElement(_semanticUiReact.Table.HeaderCell, null),\n                                        _react2.default.createElement(\n                                            _semanticUiReact.Table.HeaderCell,\n                                            null,\n                                            'Brand'\n                                        ),\n                                        _react2.default.createElement(\n                                            _semanticUiReact.Table.HeaderCell,\n                                            null,\n                                            'Qty'\n                                        ),\n                                        _react2.default.createElement(\n                                            _semanticUiReact.Table.HeaderCell,\n                                            null,\n                                            'Unit Price'\n                                        ),\n                                        _react2.default.createElement(\n                                            _semanticUiReact.Table.HeaderCell,\n                                            null,\n                                            'Total Price'\n                                        ),\n                                        _react2.default.createElement(_semanticUiReact.Table.HeaderCell, null)\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    _semanticUiReact.Table.Body,\n                                    null,\n                                    basketItems()\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _semanticUiReact.Container,\n                            null,\n                            _react2.default.createElement(\n                                _semanticUiReact.Segment,\n                                { basic: true, size: 'big', textAlign: 'right' },\n                                'Total: ',\n                                _react2.default.createElement(\n                                    'strong',\n                                    null,\n                                    '\\xA3',\n                                    basketTotal\n                                )\n                            )\n                        ),\n                        !basic && _react2.default.createElement(\n                            _semanticUiReact.Container,\n                            { textAlign: 'right' },\n                            _react2.default.createElement(\n                                _semanticUiReact.Button,\n                                { size: 'large', color: 'orange', onClick: this.clearBasket },\n                                'Clear Basket'\n                            ),\n                            _react2.default.createElement(\n                                _semanticUiReact.Button,\n                                { primary: true, size: 'large' },\n                                'Checkout'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return BasketList;\n}(_react.Component)) || _class);\nexports.default = BasketList;\n\n//# sourceURL=webpack:///./src/components/Basket/BasketList.js?");

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Loading = function Loading() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"loading-container\" },\n      _react2.default.createElement(\"img\", { src: \"../../img/loading.svg\", alt: \"\" })\n    )\n  );\n};\n\nexports.default = Loading;\n\n//# sourceURL=webpack:///./src/components/Loading/index.js?");

/***/ }),

/***/ "./src/components/ProductDescription/index.js":
/*!****************************************************!*\
  !*** ./src/components/ProductDescription/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _products = __webpack_require__(/*! ../../action/products */ \"./src/action/products.js\");\n\nvar _basket = __webpack_require__(/*! ../../action/basket */ \"./src/action/basket.js\");\n\nvar _Loading = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n    var products = _ref.products;\n    return { products: products };\n};\n\nvar ProductDescription = (_dec = (0, _reactRedux.connect)(m, { fetchProducts: _products.fetchProducts, addBasket: _basket.addBasket }), _dec(_class = function (_Component) {\n    _inherits(ProductDescription, _Component);\n\n    function ProductDescription(props) {\n        _classCallCheck(this, ProductDescription);\n\n        var _this = _possibleConstructorReturn(this, (ProductDescription.__proto__ || Object.getPrototypeOf(ProductDescription)).call(this, props));\n\n        _this.addToBasket = _this.addToBasket.bind(_this);\n        return _this;\n    }\n\n    _createClass(ProductDescription, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchProducts();\n        }\n    }, {\n        key: 'addToBasket',\n        value: function addToBasket(e, _ref2) {\n            var data = _ref2.data;\n\n            console.log(data);\n            this.props.addBasket(data);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                id = _props.id,\n                _props$products = _props.products,\n                isFetching = _props$products.isFetching,\n                products = _props$products.products;\n\n            var tyre = void 0,\n                tyreInfo = '';\n\n            if (products) {\n                tyre = products.find(function (obj) {\n                    return obj.id == id;\n                }).content;\n                tyreInfo = {\n                    id: this.props.id,\n                    qty: 1,\n                    price: tyre.price\n                };\n                console.log(tyre);\n                console.log(tyreInfo);\n            }\n\n            if (isFetching || !tyre) {\n                return _react2.default.createElement(_Loading2.default, null);\n            }\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'productList' },\n                _react2.default.createElement(\n                    _reactHelmet.Helmet,\n                    null,\n                    _react2.default.createElement(\n                        'title',\n                        null,\n                        tyre.descriptions[1].description,\n                        ' - Tyres on the Drive'\n                    ),\n                    _react2.default.createElement('meta', { name: 'description', content: tyre.descriptions[1].description })\n                ),\n                _react2.default.createElement(\n                    _semanticUiReact.Grid,\n                    { divided: 'vertically' },\n                    _react2.default.createElement(\n                        _semanticUiReact.Grid.Row,\n                        { columns: 2 },\n                        _react2.default.createElement(\n                            _semanticUiReact.Grid.Column,\n                            null,\n                            _react2.default.createElement(\n                                _semanticUiReact.Container,\n                                null,\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    tyre.title\n                                ),\n                                _react2.default.createElement('img', { src: 'https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54' + tyre.image })\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _semanticUiReact.Grid.Column,\n                            null,\n                            _react2.default.createElement(\n                                _semanticUiReact.Segment,\n                                null,\n                                _react2.default.createElement(\n                                    'div',\n                                    null,\n                                    _react2.default.createElement(\n                                        'h3',\n                                        null,\n                                        tyre.descriptions[1].description\n                                    ),\n                                    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: tyre.descriptions[4].description } })\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _semanticUiReact.Container,\n                                { textAlign: 'right' },\n                                _react2.default.createElement(\n                                    'h3',\n                                    null,\n                                    '\\xA3',\n                                    tyre.price\n                                ),\n                                _react2.default.createElement(\n                                    _semanticUiReact.Button,\n                                    { primary: true, data: tyreInfo, onClick: this.addToBasket },\n                                    'Add to Basket'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }], [{\n        key: 'fetching',\n        value: function fetching(_ref3) {\n            var dispatch = _ref3.dispatch;\n\n            return [dispatch((0, _products.fetchProducts)())];\n        }\n    }]);\n\n    return ProductDescription;\n}(_react.Component)) || _class);\nexports.default = ProductDescription;\n;\n\n//# sourceURL=webpack:///./src/components/ProductDescription/index.js?");

/***/ }),

/***/ "./src/components/ProductList/ProductItem.js":
/*!***************************************************!*\
  !*** ./src/components/ProductList/ProductItem.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductItem = function ProductItem(props) {\n    var addToBasket = props.addToBasket,\n        id = props.id,\n        _props$content = props.content,\n        image = _props$content.image,\n        price = _props$content.price,\n        title = _props$content.title;\n\n    var qty = 1;\n    var tyreInfo = { id: id, qty: qty, price: price };\n    console.log(tyreInfo);\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/product/' + id },\n            _react2.default.createElement(\n                'h4',\n                null,\n                title\n            ),\n            _react2.default.createElement('img', { src: 'https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54' + image, className: 'tyre' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'price' },\n            _react2.default.createElement(\n                'h2',\n                null,\n                '\\xA3' + price\n            )\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Button,\n            { fluid: true, primary: true, onClick: addToBasket, data: tyreInfo },\n            'Buy'\n        )\n    );\n};\n\nexports.default = ProductItem;\n\n//# sourceURL=webpack:///./src/components/ProductList/ProductItem.js?");

/***/ }),

/***/ "./src/components/ProductList/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductList/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _products = __webpack_require__(/*! ../../action/products */ \"./src/action/products.js\");\n\nvar _basket = __webpack_require__(/*! ../../action/basket */ \"./src/action/basket.js\");\n\nvar _ProductItem = __webpack_require__(/*! ./ProductItem */ \"./src/components/ProductList/ProductItem.js\");\n\nvar _ProductItem2 = _interopRequireDefault(_ProductItem);\n\nvar _Loading = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var products = _ref.products;\n  return { products: products };\n};\n\nvar ProductList = (_dec = (0, _reactRedux.connect)(m, { fetchProducts: _products.fetchProducts, addBasket: _basket.addBasket }), _dec(_class = function (_Component) {\n  _inherits(ProductList, _Component);\n\n  function ProductList(props) {\n    _classCallCheck(this, ProductList);\n\n    var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this, props));\n\n    _this.addToBasket = _this.addToBasket.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProductList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchProducts();\n    }\n  }, {\n    key: 'addToBasket',\n    value: function addToBasket(e, _ref2) {\n      var data = _ref2.data;\n\n      this.props.addBasket(data);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props$products = this.props.products,\n          isFetching = _props$products.isFetching,\n          products = _props$products.products;\n\n\n      var productItems = function productItems() {\n        return products.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            { key: i, className: 'productList__row__column' },\n            _react2.default.createElement(\n              _semanticUiReact.Segment,\n              null,\n              _react2.default.createElement(_ProductItem2.default, _extends({ addToBasket: _this2.addToBasket }, item))\n            )\n          );\n        });\n      };\n\n      if (isFetching) {\n        return _react2.default.createElement(_Loading2.default, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'productList' },\n        _react2.default.createElement(\n          _semanticUiReact.Grid,\n          { divided: 'vertically' },\n          _react2.default.createElement(\n            _semanticUiReact.Grid.Row,\n            { columns: 3, className: 'productList__row' },\n            productItems()\n          )\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref3) {\n      var dispatch = _ref3.dispatch;\n\n      return [dispatch((0, _products.fetchProducts)())];\n    }\n  }]);\n\n  return ProductList;\n}(_react.Component)) || _class);\nexports.default = ProductList;\n;\n\n//# sourceURL=webpack:///./src/components/ProductList/index.js?");

/***/ }),

/***/ "./src/reducers/basket.js":
/*!********************************!*\
  !*** ./src/reducers/basket.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar INITIAL_STATES = {\n    tyres: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATES;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _types.ADD_BASKET:\n            {\n                var newState = state.tyres;\n                var index = newState.findIndex(function (obj) {\n                    return obj.id == action.payload.id;\n                });\n                if (index === -1) {\n                    return _extends({}, state, { tyres: [].concat(_toConsumableArray(state.tyres), [action.payload]) });\n                } else {\n                    newState[index].qty += 1;\n                    return _extends({}, state, { tyres: [].concat(_toConsumableArray(newState)) });\n                }\n            }\n        case _types.REMOVE_BASKET:\n            {\n                var _newState = state.tyres;\n                var _index = _newState.findIndex(function (obj) {\n                    return obj.id == action.payload.id;\n                });\n                if (_newState[_index].qty <= 1) {\n                    _newState.splice(_index, 1);\n                } else {\n                    _newState[_index].qty -= 1;\n                }\n                return _extends({}, state, { tyres: [].concat(_toConsumableArray(_newState)) });\n            }\n        case _types.RESET_BASKET:\n            {\n                return { tyres: [] };\n            }\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/reducers/basket.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _products = __webpack_require__(/*! ./products */ \"./src/reducers/products.js\");\n\nvar _products2 = _interopRequireDefault(_products);\n\nvar _basket = __webpack_require__(/*! ./basket */ \"./src/reducers/basket.js\");\n\nvar _basket2 = _interopRequireDefault(_basket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  products: _products2.default,\n  basket: _basket2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/products.js":
/*!**********************************!*\
  !*** ./src/reducers/products.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  isFetching: true\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_PRODUCTS:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_PRODUCTS:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/products.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _views = __webpack_require__(/*! ../views */ \"./src/views/index.js\");\n\nexports.default = [{\n  component: _views.Home,\n  path: '/',\n  exact: true\n}, {\n  component: _views.Products,\n  path: '/products'\n}, {\n  component: _views.Basket,\n  path: '/basket'\n}, {\n  component: _views.Product,\n  path: '/product/:id'\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/services/TyreService.js":
/*!*************************************!*\
  !*** ./src/services/TyreService.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar TyreService = function () {\n    function TyreService() {\n        _classCallCheck(this, TyreService);\n    }\n\n    _createClass(TyreService, [{\n        key: 'getTyres',\n        value: function getTyres(callback) {\n            fetch('../../data/products.json').then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error(\"Bad response from server\");\n                }\n                return response.json();\n            }).then(function (tyres) {\n                callback(tyres);\n            });\n        }\n    }]);\n\n    return TyreService;\n}();\n\nexports.default = new TyreService();\n\n//# sourceURL=webpack:///./src/services/TyreService.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _TyreService = __webpack_require__(/*! ./TyreService */ \"./src/services/TyreService.js\");\n\nObject.defineProperty(exports, 'TyreService', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_TyreService).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/services/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/views/Basket.js":
/*!*****************************!*\
  !*** ./src/views/Basket.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nvar _BasketList = __webpack_require__(/*! ../components/Basket/BasketList */ \"./src/components/Basket/BasketList.js\");\n\nvar _BasketList2 = _interopRequireDefault(_BasketList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Basket = function Basket() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'v-basket' },\n        _react2.default.createElement(\n            _semanticUiReact.Segment,\n            { vertical: true },\n            _react2.default.createElement(\n                _semanticUiReact.Container,\n                null,\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Basket'\n                ),\n                _react2.default.createElement(_BasketList2.default, null)\n            )\n        )\n    );\n};\n\nexports.default = Basket;\n\n//# sourceURL=webpack:///./src/views/Basket.js?");

/***/ }),

/***/ "./src/views/Home.js":
/*!***************************!*\
  !*** ./src/views/Home.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar homeBanner = '../../../img/home.jpg';\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement('img', { src: homeBanner, className: 'homeBanner' })\n    );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/views/Home.js?");

/***/ }),

/***/ "./src/views/Product.js":
/*!******************************!*\
  !*** ./src/views/Product.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nvar _ProductDescription = __webpack_require__(/*! ../components/ProductDescription */ \"./src/components/ProductDescription/index.js\");\n\nvar _ProductDescription2 = _interopRequireDefault(_ProductDescription);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Product = function Product(props) {\n    var id = props.match.params.id;\n\n\n    return _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { vertical: true },\n        _react2.default.createElement(\n            _semanticUiReact.Container,\n            null,\n            _react2.default.createElement(_ProductDescription2.default, { id: id })\n        )\n    );\n};\n\nexports.default = Product;\n\n//# sourceURL=webpack:///./src/views/Product.js?");

/***/ }),

/***/ "./src/views/Products.js":
/*!*******************************!*\
  !*** ./src/views/Products.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nvar _ProductList = __webpack_require__(/*! ../components/ProductList */ \"./src/components/ProductList/index.js\");\n\nvar _ProductList2 = _interopRequireDefault(_ProductList);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Products = function Products() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactHelmet.Helmet,\n            null,\n            _react2.default.createElement(\n                'title',\n                null,\n                'Products - Tyres on the Drive'\n            ),\n            _react2.default.createElement('body', { 'class': 'products_test' })\n        ),\n        _react2.default.createElement(\n            _semanticUiReact.Segment,\n            { vertical: true },\n            _react2.default.createElement(\n                _semanticUiReact.Container,\n                null,\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Products'\n                ),\n                _react2.default.createElement(_ProductList2.default, null)\n            )\n        )\n    );\n};\n\nexports.default = Products;\n\n//# sourceURL=webpack:///./src/views/Products.js?");

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./Home.js */ \"./src/views/Home.js\");\n\nObject.defineProperty(exports, 'Home', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Home).default;\n  }\n});\n\nvar _Products = __webpack_require__(/*! ./Products.js */ \"./src/views/Products.js\");\n\nObject.defineProperty(exports, 'Products', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Products).default;\n  }\n});\n\nvar _Basket = __webpack_require__(/*! ./Basket.js */ \"./src/views/Basket.js\");\n\nObject.defineProperty(exports, 'Basket', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Basket).default;\n  }\n});\n\nvar _Product = __webpack_require__(/*! ./Product.js */ \"./src/views/Product.js\");\n\nObject.defineProperty(exports, 'Product', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Product).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/views/index.js?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");\n\n//# sourceURL=webpack:///external_%22semantic-ui-react%22?");

/***/ })

/******/ });