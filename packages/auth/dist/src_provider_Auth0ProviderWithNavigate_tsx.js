"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["src_provider_Auth0ProviderWithNavigate_tsx"],{

/***/ "./src/provider/Auth0ProviderWithNavigate.tsx":
/*!****************************************************!*\
  !*** ./src/provider/Auth0ProviderWithNavigate.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ \"webpack/sharing/consume/default/@auth0/auth0-react/@auth0/auth0-react\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n\n\n\n\nvar Auth0ProviderWithNavigate = function Auth0ProviderWithNavigate(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__.Auth0Provider, {\n    domain: \"\".concat(\"dev-ftbfos4z05hur7ew.us.auth0.com\"),\n    clientId: \"\".concat(\"vsu67al6We9QEzNlaY3yeWKDhRJuqpFI\"),\n    authorizationParams: {\n      redirect_uri: \"\".concat(\"MISSING_ENV_VAR\".REACT_APP_AUTH0_CALLBACK_URL),\n      audience: \"\".concat(\"https://dev-ftbfos4z05hur7ew.us.auth0.com/api/v2/\"),\n      scope: \"openid profile email offline_access\"\n    },\n    useRefreshTokens: true,\n    cacheLocation: \"localstorage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth0ProviderWithNavigate);\n\n//# sourceURL=webpack://auth/./src/provider/Auth0ProviderWithNavigate.tsx?");

/***/ }),

/***/ "./src/redux/authReducer.ts":
/*!**********************************!*\
  !*** ./src/redux/authReducer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _authTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authTypes */ \"./src/redux/authTypes.ts\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n// src/redux/authReducer.ts\n\nvar initialState = {\n  token: null,\n  user: null,\n  isAuthenticated: false\n};\nvar authReducer = function authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _authTypes__WEBPACK_IMPORTED_MODULE_1__.LOGIN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        token: action.payload.token,\n        user: action.payload.user,\n        isAuthenticated: true\n      });\n    case _authTypes__WEBPACK_IMPORTED_MODULE_1__.LOGOUT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        token: null,\n        user: null,\n        isAuthenticated: false\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);\n\n//# sourceURL=webpack://auth/./src/redux/authReducer.ts?");

/***/ }),

/***/ "./src/redux/authTypes.ts":
/*!********************************!*\
  !*** ./src/redux/authTypes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LOGIN_SUCCESS: () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   LOGOUT: () => (/* binding */ LOGOUT)\n/* harmony export */ });\n// src/redux/authTypes.ts\n\nvar LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nvar LOGOUT = 'LOGOUT';\n\n//# sourceURL=webpack://auth/./src/redux/authTypes.ts?");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"../../node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authReducer */ \"./src/redux/authReducer.ts\");\n// src/redux/store.ts\n\n\n\n// RootReducer'ı birleştiriyoruz\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n  auth: _authReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n// RootState tipini tanımlıyoruz\n\n// Store'u oluşturuyoruz\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(rootReducer);\n\n// AppDispatch tipini tanımlıyoruz\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); // Store'u dışa aktarıyoruz\n\n//# sourceURL=webpack://auth/./src/redux/store.ts?");

/***/ })

}]);