"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moralisweb3/client-firebase-evm-auth */ \"./node_modules/@moralisweb3/client-firebase-evm-auth/lib/index.js\");\n/* harmony import */ var _moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FirebaseInitializer */ \"./components/FirebaseInitializer.js\");\n/* harmony import */ var _public_assets_xclusiveCryptoMart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/xclusiveCryptoMart.png */ \"./public/assets/xclusiveCryptoMart.png\");\n/* harmony import */ var _public_assets_usa_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/usa.png */ \"./public/assets/usa.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const { auth , moralisAuth  } = (0,_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{\n        var _auth_currentUser;\n        return (_auth_currentUser = auth.currentUser) === null || _auth_currentUser === void 0 ? void 0 : _auth_currentUser.displayName;\n    });\n    async function signInByMetaMask() {\n        var _auth_currentUser;\n        await (0,_moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithMoralis)(moralisAuth);\n        setCurrentUser((_auth_currentUser = auth.currentUser) === null || _auth_currentUser === void 0 ? void 0 : _auth_currentUser.displayName);\n    }\n    async function signOut() {\n        await auth.signOut();\n        setCurrentUser(null);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _public_assets_xclusiveCryptoMart_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"Logo image\",\n                        width: \"110\",\n                        height: \"30\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchField),\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchIcon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 24 24\",\n                                fill: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fillRule: \"evenodd\",\n                                    d: \"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z\",\n                                    clipRule: \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_items), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().language)),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_assets_usa_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    alt: \"Logo image\",\n                                    width: \"25\",\n                                    height: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"EN\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().arrow)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        !currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_items), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_btn)),\n                            onClick: signInByMetaMask,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_items), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_btn)),\n                            onClick: signOut,\n                            children: \"Sign out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_items),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Returns\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"& Orders\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerInfo_items), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartItem)),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartCount),\n                                    children: \"0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartIcon),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"currentColor\",\n                                        className: \"w-6 h-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\header.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"77FRp1daWRY0VbvHmLCoOh0jUIQ=\", false, function() {\n    return [\n        _components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__.useFirebase\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Wiw4REFBQ1U7OENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWYsQ0FBQztHQWxGdUJ0Qzs7UUFDUUgsd0VBQVdBOzs7S0FEbkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgc2lnbkluV2l0aE1vcmFsaXMgfSBmcm9tIFwiQG1vcmFsaXN3ZWIzL2NsaWVudC1maXJlYmFzZS1ldm0tYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXJcIjtcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3hjbHVzaXZlQ3J5cHRvTWFydC5wbmdcIjtcclxuaW1wb3J0IFVzYSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy91c2EucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBhdXRoLCBtb3JhbGlzQXV0aCB9ID0gdXNlRmlyZWJhc2UoKTtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gYXV0aC5jdXJyZW50VXNlcj8uZGlzcGxheU5hbWVcclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW5CeU1ldGFNYXNrKCkge1xyXG4gICAgYXdhaXQgc2lnbkluV2l0aE1vcmFsaXMobW9yYWxpc0F1dGgpO1xyXG4gICAgc2V0Q3VycmVudFVzZXIoYXV0aC5jdXJyZW50VXNlcj8uZGlzcGxheU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIGF3YWl0IGF1dGguc2lnbk91dCgpO1xyXG4gICAgc2V0Q3VycmVudFVzZXIobnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2JveH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD1cIkxvZ28gaW1hZ2VcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjMwXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMC41IDMuNzVhNi43NSA2Ljc1IDAgMTAwIDEzLjUgNi43NSA2Ljc1IDAgMDAwLTEzLjV6TTIuMjUgMTAuNWE4LjI1IDguMjUgMCAxMTE0LjU5IDUuMjhsNC42OSA0LjY5YS43NS43NSAwIDExLTEuMDYgMS4wNmwtNC42OS00LjY5QTguMjUgOC4yNSAwIDAxMi4yNSAxMC41elwiXHJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckluZm9faXRlbXN9ICR7c3R5bGVzLmxhbmd1YWdlfWB9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtVc2F9IGFsdD1cIkxvZ28gaW1hZ2VcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMTVcIiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5FTjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIHshY3VycmVudFVzZXIgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbmZvX2l0ZW1zfSAke3N0eWxlcy5oZWFkZXJJbmZvX2J0bn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25JbkJ5TWV0YU1hc2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbmZvX2l0ZW1zfSAke3N0eWxlcy5oZWFkZXJJbmZvX2J0bn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvX2l0ZW1zfT5cclxuICAgICAgICAgICAgPHA+UmV0dXJuczwvcD5cclxuICAgICAgICAgICAgPHA+JiBPcmRlcnM8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbmZvX2l0ZW1zfSAke3N0eWxlcy5jYXJ0SXRlbX1gfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FydENvdW50fT4wPC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SWNvbn0+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI1IDIuMjVhLjc1Ljc1IDAgMDAwIDEuNWgxLjM4NmMuMTcgMCAuMzE4LjExNC4zNjIuMjc4bDIuNTU4IDkuNTkyYTMuNzUyIDMuNzUyIDAgMDAtMi44MDYgMy42M2MwIC40MTQuMzM2Ljc1Ljc1Ljc1aDE1Ljc1YS43NS43NSAwIDAwMC0xLjVINS4zNzhBMi4yNSAyLjI1IDAgMDE3LjUgMTVoMTEuMjE4YS43NS43NSAwIDAwLjY3NC0uNDIxIDYwLjM1OCA2MC4zNTggMCAwMDIuOTYtNy4yMjguNzUuNzUgMCAwMC0uNTI1LS45NjVBNjAuODY0IDYwLjg2NCAwIDAwNS42OCA0LjUwOWwtLjIzMi0uODY3QTEuODc1IDEuODc1IDAgMDAzLjYzNiAyLjI1SDIuMjV6TTMuNzUgMjAuMjVhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6TTE2LjUgMjAuMjVhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8cD5DYXJ0PC9wPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwic3R5bGVzIiwic2lnbkluV2l0aE1vcmFsaXMiLCJ1c2VGaXJlYmFzZSIsIkxvZ28iLCJVc2EiLCJIZWFkZXIiLCJhdXRoIiwibW9yYWxpc0F1dGgiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZGlzcGxheU5hbWUiLCJzaWduSW5CeU1ldGFNYXNrIiwic2lnbk91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoZWFkZXJfYm94IiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXQiLCJzZWFyY2hGaWVsZCIsInR5cGUiLCJzZWFyY2hJY29uIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsImhlYWRlckluZm8iLCJoZWFkZXJJbmZvX2l0ZW1zIiwibGFuZ3VhZ2UiLCJzcGFuIiwiYXJyb3ciLCJidXR0b24iLCJoZWFkZXJJbmZvX2J0biIsIm9uQ2xpY2siLCJwIiwiY2FydEl0ZW0iLCJjYXJ0Q291bnQiLCJjYXJ0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});