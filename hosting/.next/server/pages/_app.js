/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeFirebase\": () => (/* binding */ initializeFirebase)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/functions */ \"firebase/functions\");\n/* harmony import */ var _moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/client-firebase-auth-utils */ \"@moralisweb3/client-firebase-auth-utils\");\n/* harmony import */ var _moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nasync function initializeFirebase() {\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({\n        apiKey: \"AIzaSyDeKTsM13IUs0DfTfv9Y2PldqQkfNf9DhU\",\n        authDomain: \"web3-a4b9b.firebaseapp.com\",\n        projectId: \"web3-a4b9b\",\n        storageBucket: \"web3-a4b9b.appspot.com\",\n        messagingSenderId: \"744919495726\",\n        appId: \"1:744919495726:web:fd2a3b2a5c884c2b549bbf\"\n    });\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n    await auth.setPersistence(firebase_auth__WEBPACK_IMPORTED_MODULE_1__.browserSessionPersistence);\n    const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.getFunctions)(app);\n    if (window.location.hostname === \"localhost\") {\n        (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.connectFunctionsEmulator)(functions, \"localhost\", 5001);\n    }\n    const moralisAuth = (0,_moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__.getMoralisAuth)(app, {\n        auth,\n        functions\n    });\n    return {\n        app,\n        auth,\n        functions,\n        moralisAuth\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QztBQUNzQjtBQUNTO0FBQ0g7QUFFbEUsZUFBZU0scUJBQXFCO0lBQ3pDLE1BQU1DLE1BQU1QLDJEQUFhQSxDQUFDO1FBQ3hCUSxRQUFRQyx5Q0FBd0M7UUFDaERHLFlBQVlILDRCQUE0QztRQUN4REssV0FBV0wsWUFBMkM7UUFDdERPLGVBQWVQLHdCQUErQztRQUM5RFMsbUJBQW1CVCxjQUFvRDtRQUN2RVcsT0FBT1gsMkNBQXVDO0lBQ2hEO0lBRUEsTUFBTWEsT0FBT3BCLHNEQUFPQSxDQUFDSztJQUNyQixNQUFNZSxLQUFLQyxjQUFjLENBQUN0QixvRUFBeUJBO0lBRW5ELE1BQU11QixZQUFZcEIsZ0VBQVlBLENBQUNHO0lBQy9CLElBQUlrQixPQUFPQyxRQUFRLENBQUNDLFFBQVEsS0FBSyxhQUFhO1FBQzVDeEIsNEVBQXdCQSxDQUFDcUIsV0FBVyxhQUFhO0lBQ25ELENBQUM7SUFFRCxNQUFNSSxjQUFjdkIsdUZBQWNBLENBQUNFLEtBQUs7UUFDdENlO1FBQ0FFO0lBQ0Y7SUFFQSxPQUFPO1FBQUVqQjtRQUFLZTtRQUFNRTtRQUFXSTtJQUFZO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWZpcmViYXNlLW5leHRqcy8uL2NvbXBvbmVudHMvRmlyZWJhc2UuanM/MDlkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSwgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0RnVuY3Rpb25zRW11bGF0b3IsIGdldEZ1bmN0aW9ucyB9IGZyb20gXCJmaXJlYmFzZS9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdldE1vcmFsaXNBdXRoIH0gZnJvbSBcIkBtb3JhbGlzd2ViMy9jbGllbnQtZmlyZWJhc2UtYXV0aC11dGlsc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxuICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXG4gIH0pO1xuXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG4gIGF3YWl0IGF1dGguc2V0UGVyc2lzdGVuY2UoYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSk7XG5cbiAgY29uc3QgZnVuY3Rpb25zID0gZ2V0RnVuY3Rpb25zKGFwcCk7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIpIHtcbiAgICBjb25uZWN0RnVuY3Rpb25zRW11bGF0b3IoZnVuY3Rpb25zLCBcImxvY2FsaG9zdFwiLCA1MDAxKTtcbiAgfVxuXG4gIGNvbnN0IG1vcmFsaXNBdXRoID0gZ2V0TW9yYWxpc0F1dGgoYXBwLCB7XG4gICAgYXV0aCxcbiAgICBmdW5jdGlvbnMsXG4gIH0pO1xuXG4gIHJldHVybiB7IGFwcCwgYXV0aCwgZnVuY3Rpb25zLCBtb3JhbGlzQXV0aCB9O1xufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiZ2V0QXV0aCIsImNvbm5lY3RGdW5jdGlvbnNFbXVsYXRvciIsImdldEZ1bmN0aW9ucyIsImdldE1vcmFsaXNBdXRoIiwiaW5pdGlhbGl6ZUZpcmViYXNlIiwiYXBwIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhdXRoIiwic2V0UGVyc2lzdGVuY2UiLCJmdW5jdGlvbnMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibW9yYWxpc0F1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Firebase.js\n");

/***/ }),

/***/ "./components/FirebaseInitializer.js":
/*!*******************************************!*\
  !*** ./components/FirebaseInitializer.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseInitializer\": () => (/* binding */ FirebaseInitializer),\n/* harmony export */   \"useFirebase\": () => (/* binding */ useFirebase)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./components/Firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst firebaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction useFirebase() {\n    const firebase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(firebaseContext);\n    if (!firebase) {\n        throw new Error(\"Cannot find Firebase context\");\n    }\n    return firebase;\n}\nfunction FirebaseInitializer(props) {\n    const [firebase, setFirebase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleSuccess = setFirebase;\n        const handleError = alert;\n        (0,_Firebase__WEBPACK_IMPORTED_MODULE_2__.initializeFirebase)().then(handleSuccess, handleError);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(firebaseContext.Provider, {\n        value: firebase,\n        children: firebase ? props.initialized() : props.initializing()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\FirebaseInitializer.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQ3ZCO0FBRWhELE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQUMsSUFBSTtBQUVuQyxTQUFTTSxjQUFjO0lBQzVCLE1BQU1DLFdBQVdOLGlEQUFVQSxDQUFDSTtJQUM1QixJQUFJLENBQUNFLFVBQVU7UUFDYixNQUFNLElBQUlDLE1BQU0sZ0NBQWdDO0lBQ2xELENBQUM7SUFDRCxPQUFPRDtBQUNULENBQUM7QUFFTSxTQUFTRSxvQkFBb0JDLEtBQUssRUFBRTtJQUN6QyxNQUFNLENBQUNILFVBQVVJLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLGdCQUFnQkQ7UUFDdEIsTUFBTUUsY0FBY0M7UUFFcEJWLDZEQUFrQkEsR0FBR1csSUFBSSxDQUFDSCxlQUFlQztJQUMzQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1IsZ0JBQWdCVyxRQUFRO1FBQUNDLE9BQU9WO2tCQUM5QkEsV0FBV0csTUFBTVEsV0FBVyxLQUFLUixNQUFNUyxZQUFZLEVBQUU7Ozs7OztBQUc1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1maXJlYmFzZS1uZXh0anMvLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXIuanM/NDRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRmlyZWJhc2UgfSBmcm9tIFwiLi9GaXJlYmFzZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyZWJhc2UoKSB7XG4gIGNvbnN0IGZpcmViYXNlID0gdXNlQ29udGV4dChmaXJlYmFzZUNvbnRleHQpO1xuICBpZiAoIWZpcmViYXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgRmlyZWJhc2UgY29udGV4dFwiKTtcbiAgfVxuICByZXR1cm4gZmlyZWJhc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaXJlYmFzZUluaXRpYWxpemVyKHByb3BzKSB7XG4gIGNvbnN0IFtmaXJlYmFzZSwgc2V0RmlyZWJhc2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gc2V0RmlyZWJhc2U7XG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSBhbGVydDtcblxuICAgIGluaXRpYWxpemVGaXJlYmFzZSgpLnRoZW4oaGFuZGxlU3VjY2VzcywgaGFuZGxlRXJyb3IpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZmlyZWJhc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmaXJlYmFzZX0+XG4gICAgICB7ZmlyZWJhc2UgPyBwcm9wcy5pbml0aWFsaXplZCgpIDogcHJvcHMuaW5pdGlhbGl6aW5nKCl9XG4gICAgPC9maXJlYmFzZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxpemVGaXJlYmFzZSIsImZpcmViYXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZWJhc2UiLCJFcnJvciIsIkZpcmViYXNlSW5pdGlhbGl6ZXIiLCJwcm9wcyIsInNldEZpcmViYXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwiYWxlcnQiLCJ0aGVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirebaseInitializer.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FirebaseInitializer */ \"./components/FirebaseInitializer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_3__]);\n_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"shortcut icon\",\n                    href: \"favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_3__.FirebaseInitializer, {\n                initializing: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppLoading, {}, void 0, false, void 0, void 0),\n                initialized: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nfunction AppLoading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading app...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\_app.js\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRjtBQUMyQztBQUV6RCxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNLO29CQUFLQyxLQUFJO29CQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDTixnRkFBbUJBO2dCQUFDTyxjQUFjLGtCQUFNLDhEQUFDQztnQkFBZUMsYUFBYSxrQkFBTSw4REFBQ1A7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7O0FBRzFHLENBQUM7QUFFRCxTQUFTSyxhQUFhO0lBQ3BCLHFCQUFPLDhEQUFDRTtrQkFBRTs7Ozs7O0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWZpcmViYXNlLW5leHRqcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRmlyZWJhc2VJbml0aWFsaXplciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2VJbml0aWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEZpcmViYXNlSW5pdGlhbGl6ZXIgaW5pdGlhbGl6aW5nPXsoKSA9PiA8QXBwTG9hZGluZyAvPn0gaW5pdGlhbGl6ZWQ9eygpID0+IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFwcExvYWRpbmcoKSB7XG4gIHJldHVybiA8cD5Mb2FkaW5nIGFwcC4uLjwvcD47XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZpcmViYXNlSW5pdGlhbGl6ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsImluaXRpYWxpemluZyIsIkFwcExvYWRpbmciLCJpbml0aWFsaXplZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@moralisweb3/client-firebase-auth-utils":
/*!**********************************************************!*\
  !*** external "@moralisweb3/client-firebase-auth-utils" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@moralisweb3/client-firebase-auth-utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/functions");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();