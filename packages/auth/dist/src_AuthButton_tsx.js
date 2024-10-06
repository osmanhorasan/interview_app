"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["src_AuthButton_tsx"],{

/***/ "./src/AuthButton.tsx":
/*!****************************!*\
  !*** ./src/AuthButton.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid2 */ \"../../node_modules/@mui/material/Grid2/Grid2.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"webpack/sharing/consume/default/@mui/material/@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Menu */ \"../../node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/MenuItem */ \"../../node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _components_LoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoginButton */ \"./src/components/LoginButton.tsx\");\n/* harmony import */ var _components_LogoutButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LogoutButton */ \"./src/components/LogoutButton.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\nvar AuthButton = function AuthButton() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    anchorEl = _React$useState2[0],\n    setAnchorEl = _React$useState2[1];\n  var open = Boolean(anchorEl);\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return state.auth;\n  }); // Auth bilgilerini Redux store'dan alıyoruz\n  var user = auth.user,\n    isAuthenticated = auth.isAuthenticated,\n    token = auth.token;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    sx: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Grid2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    container: true,\n    spacing: 2\n  }, !isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Grid2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LoginButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Grid2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n    id: \"basic-button\",\n    onClick: function onClick(event) {\n      return handleClick(event);\n    },\n    src: \"\".concat(user === null || user === void 0 ? void 0 : user.picture),\n    className: \"cursor-pointer\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"basic-menu\",\n    anchorEl: anchorEl,\n    open: open,\n    onClose: handleClose,\n    MenuListProps: {\n      \"aria-labelledby\": \"basic-button\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    className: \"!no-underline !text-gray-900\",\n    href: \"/account\"\n  }, user === null || user === void 0 ? void 0 : user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    className: \"!no-underline !text-gray-900\",\n    href: \"/dashboard\"\n  }, \"Dashboard\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: function onClick() {\n      handleClose();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LogoutButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthButton);\n\n//# sourceURL=webpack://auth/./src/AuthButton.tsx?");

/***/ }),

/***/ "./src/components/LoginButton.tsx":
/*!****************************************!*\
  !*** ./src/components/LoginButton.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-react */ \"webpack/sharing/consume/default/@auth0/auth0-react/@auth0/auth0-react\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_authTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/authTypes */ \"./src/redux/authTypes.ts\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"webpack/sharing/consume/default/@mui/material/@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar LoginButton = function LoginButton() {\n  var _useAuth = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2__.useAuth0)(),\n    loginWithRedirect = _useAuth.loginWithRedirect,\n    getAccessTokenSilently = _useAuth.getAccessTokenSilently,\n    user = _useAuth.user,\n    isAuthenticated = _useAuth.isAuthenticated;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var handleLogin = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return loginWithRedirect({\n              appState: {\n                returnTo: window.location.pathname\n              }\n            });\n          case 3:\n            _context.next = 8;\n            break;\n          case 5:\n            _context.prev = 5;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"Login error:\", _context.t0);\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 5]]);\n    }));\n    return function handleLogin() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var fetchUserData = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var token;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!isAuthenticated) {\n              _context2.next = 11;\n              break;\n            }\n            _context2.prev = 1;\n            _context2.next = 4;\n            return getAccessTokenSilently({\n              authorizationParams: {\n                audience: \"https://dev-ftbfos4z05hur7ew.us.auth0.com/api/v2/\",\n                scope: \"openid profile email offline_access\"\n              }\n            });\n          case 4:\n            token = _context2.sent;\n            // Redux state'e kullanıcı bilgilerini dispatch et\n            dispatch({\n              type: _redux_authTypes__WEBPACK_IMPORTED_MODULE_4__.LOGIN_SUCCESS,\n              payload: {\n                token: token,\n                user: user\n              }\n            });\n            _context2.next = 11;\n            break;\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.error(\"Error fetching user data:\", _context2.t0);\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[1, 8]]);\n    }));\n    return function fetchUserData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  // fetchUserData fonksiyonunu kullanıcının durumu değiştiğinde çağır\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    fetchUserData();\n  }, [isAuthenticated]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n    onClick: handleLogin\n  }, \"Login\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginButton);\n\n//# sourceURL=webpack://auth/./src/components/LoginButton.tsx?");

/***/ }),

/***/ "./src/components/LogoutButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/LogoutButton.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/auth0-react */ \"webpack/sharing/consume/default/@auth0/auth0-react/@auth0/auth0-react\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_authTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/authTypes */ \"./src/redux/authTypes.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar LogoutButton = function LogoutButton() {\n  var _useAuth = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_0__.useAuth0)(),\n    logout = _useAuth.logout;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var handleLogout = function handleLogout() {\n    logout({\n      logoutParams: {\n        returnTo: window.location.origin\n      }\n    });\n    dispatch({\n      type: _redux_authTypes__WEBPACK_IMPORTED_MODULE_2__.LOGOUT\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"button\", {\n    className: \"w-full h-full text-start\",\n    onClick: handleLogout\n  }, \"Logout\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutButton);\n\n//# sourceURL=webpack://auth/./src/components/LogoutButton.tsx?");

/***/ }),

/***/ "./src/redux/authTypes.ts":
/*!********************************!*\
  !*** ./src/redux/authTypes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LOGIN_SUCCESS: () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   LOGOUT: () => (/* binding */ LOGOUT)\n/* harmony export */ });\n// src/redux/authTypes.ts\n\nvar LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nvar LOGOUT = 'LOGOUT';\n\n//# sourceURL=webpack://auth/./src/redux/authTypes.ts?");

/***/ })

}]);