"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeFirebase\": () => (/* binding */ initializeFirebase)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/functions */ \"firebase/functions\");\n/* harmony import */ var _moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/client-firebase-auth-utils */ \"@moralisweb3/client-firebase-auth-utils\");\n/* harmony import */ var _moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_functions__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nasync function initializeFirebase() {\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({\n        apiKey: \"AIzaSyDeKTsM13IUs0DfTfv9Y2PldqQkfNf9DhU\",\n        authDomain: \"web3-a4b9b.firebaseapp.com\",\n        projectId: \"web3-a4b9b\",\n        storageBucket: \"web3-a4b9b.appspot.com\",\n        messagingSenderId: \"744919495726\",\n        appId: \"1:744919495726:web:fd2a3b2a5c884c2b549bbf\"\n    });\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n    await auth.setPersistence(firebase_auth__WEBPACK_IMPORTED_MODULE_1__.browserSessionPersistence);\n    const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.getFunctions)(app);\n    if (window.location.hostname === \"localhost\") {\n        (0,firebase_functions__WEBPACK_IMPORTED_MODULE_2__.connectFunctionsEmulator)(functions, \"localhost\", 5001);\n    }\n    const moralisAuth = (0,_moralisweb3_client_firebase_auth_utils__WEBPACK_IMPORTED_MODULE_3__.getMoralisAuth)(app, {\n        auth,\n        functions\n    });\n    return {\n        app,\n        auth,\n        functions,\n        moralisAuth\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QztBQUNzQjtBQUNTO0FBQ0g7QUFFbEUsZUFBZU0scUJBQXFCO0lBQ3pDLE1BQU1DLE1BQU1QLDJEQUFhQSxDQUFDO1FBQ3hCUSxRQUFRQyx5Q0FBd0M7UUFDaERHLFlBQVlILDRCQUE0QztRQUN4REssV0FBV0wsWUFBMkM7UUFDdERPLGVBQWVQLHdCQUErQztRQUM5RFMsbUJBQW1CVCxjQUFvRDtRQUN2RVcsT0FBT1gsMkNBQXVDO0lBQ2hEO0lBRUEsTUFBTWEsT0FBT3BCLHNEQUFPQSxDQUFDSztJQUNyQixNQUFNZSxLQUFLQyxjQUFjLENBQUN0QixvRUFBeUJBO0lBRW5ELE1BQU11QixZQUFZcEIsZ0VBQVlBLENBQUNHO0lBQy9CLElBQUlrQixPQUFPQyxRQUFRLENBQUNDLFFBQVEsS0FBSyxhQUFhO1FBQzVDeEIsNEVBQXdCQSxDQUFDcUIsV0FBVyxhQUFhO0lBQ25ELENBQUM7SUFFRCxNQUFNSSxjQUFjdkIsdUZBQWNBLENBQUNFLEtBQUs7UUFDdENlO1FBQ0FFO0lBQ0Y7SUFFQSxPQUFPO1FBQUVqQjtRQUFLZTtRQUFNRTtRQUFXSTtJQUFZO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWZpcmViYXNlLW5leHRqcy8uL2NvbXBvbmVudHMvRmlyZWJhc2UuanM/MDlkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSwgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0RnVuY3Rpb25zRW11bGF0b3IsIGdldEZ1bmN0aW9ucyB9IGZyb20gXCJmaXJlYmFzZS9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdldE1vcmFsaXNBdXRoIH0gZnJvbSBcIkBtb3JhbGlzd2ViMy9jbGllbnQtZmlyZWJhc2UtYXV0aC11dGlsc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxuICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXG4gIH0pO1xuXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG4gIGF3YWl0IGF1dGguc2V0UGVyc2lzdGVuY2UoYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSk7XG5cbiAgY29uc3QgZnVuY3Rpb25zID0gZ2V0RnVuY3Rpb25zKGFwcCk7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIpIHtcbiAgICBjb25uZWN0RnVuY3Rpb25zRW11bGF0b3IoZnVuY3Rpb25zLCBcImxvY2FsaG9zdFwiLCA1MDAxKTtcbiAgfVxuXG4gIGNvbnN0IG1vcmFsaXNBdXRoID0gZ2V0TW9yYWxpc0F1dGgoYXBwLCB7XG4gICAgYXV0aCxcbiAgICBmdW5jdGlvbnMsXG4gIH0pO1xuXG4gIHJldHVybiB7IGFwcCwgYXV0aCwgZnVuY3Rpb25zLCBtb3JhbGlzQXV0aCB9O1xufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiZ2V0QXV0aCIsImNvbm5lY3RGdW5jdGlvbnNFbXVsYXRvciIsImdldEZ1bmN0aW9ucyIsImdldE1vcmFsaXNBdXRoIiwiaW5pdGlhbGl6ZUZpcmViYXNlIiwiYXBwIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhdXRoIiwic2V0UGVyc2lzdGVuY2UiLCJmdW5jdGlvbnMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibW9yYWxpc0F1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Firebase.js\n");

/***/ }),

/***/ "./components/FirebaseInitializer.js":
/*!*******************************************!*\
  !*** ./components/FirebaseInitializer.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseInitializer\": () => (/* binding */ FirebaseInitializer),\n/* harmony export */   \"useFirebase\": () => (/* binding */ useFirebase)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./components/Firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst firebaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction useFirebase() {\n    const firebase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(firebaseContext);\n    if (!firebase) {\n        throw new Error(\"Cannot find Firebase context\");\n    }\n    return firebase;\n}\nfunction FirebaseInitializer(props) {\n    const [firebase, setFirebase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleSuccess = setFirebase;\n        const handleError = alert;\n        (0,_Firebase__WEBPACK_IMPORTED_MODULE_2__.initializeFirebase)().then(handleSuccess, handleError);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(firebaseContext.Provider, {\n        value: firebase,\n        children: firebase ? props.initialized() : props.initializing()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\components\\\\FirebaseInitializer.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQ3ZCO0FBRWhELE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQUMsSUFBSTtBQUVuQyxTQUFTTSxjQUFjO0lBQzVCLE1BQU1DLFdBQVdOLGlEQUFVQSxDQUFDSTtJQUM1QixJQUFJLENBQUNFLFVBQVU7UUFDYixNQUFNLElBQUlDLE1BQU0sZ0NBQWdDO0lBQ2xELENBQUM7SUFDRCxPQUFPRDtBQUNULENBQUM7QUFFTSxTQUFTRSxvQkFBb0JDLEtBQUssRUFBRTtJQUN6QyxNQUFNLENBQUNILFVBQVVJLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLGdCQUFnQkQ7UUFDdEIsTUFBTUUsY0FBY0M7UUFFcEJWLDZEQUFrQkEsR0FBR1csSUFBSSxDQUFDSCxlQUFlQztJQUMzQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1IsZ0JBQWdCVyxRQUFRO1FBQUNDLE9BQU9WO2tCQUM5QkEsV0FBV0csTUFBTVEsV0FBVyxLQUFLUixNQUFNUyxZQUFZLEVBQUU7Ozs7OztBQUc1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1maXJlYmFzZS1uZXh0anMvLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXIuanM/NDRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRmlyZWJhc2UgfSBmcm9tIFwiLi9GaXJlYmFzZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyZWJhc2UoKSB7XG4gIGNvbnN0IGZpcmViYXNlID0gdXNlQ29udGV4dChmaXJlYmFzZUNvbnRleHQpO1xuICBpZiAoIWZpcmViYXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgRmlyZWJhc2UgY29udGV4dFwiKTtcbiAgfVxuICByZXR1cm4gZmlyZWJhc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaXJlYmFzZUluaXRpYWxpemVyKHByb3BzKSB7XG4gIGNvbnN0IFtmaXJlYmFzZSwgc2V0RmlyZWJhc2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gc2V0RmlyZWJhc2U7XG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSBhbGVydDtcblxuICAgIGluaXRpYWxpemVGaXJlYmFzZSgpLnRoZW4oaGFuZGxlU3VjY2VzcywgaGFuZGxlRXJyb3IpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZmlyZWJhc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmaXJlYmFzZX0+XG4gICAgICB7ZmlyZWJhc2UgPyBwcm9wcy5pbml0aWFsaXplZCgpIDogcHJvcHMuaW5pdGlhbGl6aW5nKCl9XG4gICAgPC9maXJlYmFzZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxpemVGaXJlYmFzZSIsImZpcmViYXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZWJhc2UiLCJFcnJvciIsIkZpcmViYXNlSW5pdGlhbGl6ZXIiLCJwcm9wcyIsInNldEZpcmViYXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwiYWxlcnQiLCJ0aGVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirebaseInitializer.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/client-firebase-evm-auth */ \"@moralisweb3/client-firebase-evm-auth\");\n/* harmony import */ var _moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FirebaseInitializer */ \"./components/FirebaseInitializer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__]);\n_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home() {\n    const { auth , moralisAuth  } = (0,_components_FirebaseInitializer__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>auth.currentUser?.displayName);\n    async function signInByMetaMask() {\n        await (0,_moralisweb3_client_firebase_evm_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithMoralis)(moralisAuth);\n        setCurrentUser(auth.currentUser?.displayName);\n    }\n    async function signOut() {\n        await auth.signOut();\n        setCurrentUser(null);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Firebase NextJs Demo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"User:\",\n                    \" \",\n                    currentUser ? `${currentUser.slice(0, 4)}...${currentUser.slice(38)}` : \"-\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    !currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signInByMetaMask,\n                        children: \"Sign in by MetaMask\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    \" \",\n                    currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signOut,\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Documents\\\\RJB XCLUSIVE FOLDER\\\\developer folder\\\\web3AmazonCloneFirebase\\\\hosting\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEU7QUFDN0M7QUFDSTtBQUMrQjtBQUVqRCxTQUFTSSxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUUsR0FBR0gsNEVBQVdBO0lBQ3pDLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FDNUMsSUFBTUcsS0FBS0UsV0FBVyxFQUFFRTtJQUcxQixlQUFlQyxtQkFBbUI7UUFDaEMsTUFBTVYsd0ZBQWlCQSxDQUFDTTtRQUN4QkUsZUFBZUgsS0FBS0UsV0FBVyxFQUFFRTtJQUNuQztJQUVBLGVBQWVFLFVBQVU7UUFDdkIsTUFBTU4sS0FBS00sT0FBTztRQUNsQkgsZUFBZSxJQUFJO0lBQ3JCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUCxrREFBSUE7MEJBQ0gsNEVBQUNXOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7O29CQUFFO29CQUNLO29CQUNMTixjQUNHLENBQUMsRUFBRUEsWUFBWU8sS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUVQLFlBQVlPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FDdkQsR0FBRzs7Ozs7OzswQkFFVCw4REFBQ0Q7O29CQUNFLENBQUNOLDZCQUNBLDhEQUFDUTt3QkFBT0MsU0FBU047a0NBQWtCOzs7Ozs7b0JBQ2xDO29CQUNGSCw2QkFBZSw4REFBQ1E7d0JBQU9DLFNBQVNMO2tDQUFTOzs7Ozs7Ozs7Ozs7OztBQUlsRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1maXJlYmFzZS1uZXh0anMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbldpdGhNb3JhbGlzIH0gZnJvbSBcIkBtb3JhbGlzd2ViMy9jbGllbnQtZmlyZWJhc2UtZXZtLWF1dGhcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGaXJlYmFzZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZpcmViYXNlSW5pdGlhbGl6ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBhdXRoLCBtb3JhbGlzQXV0aCB9ID0gdXNlRmlyZWJhc2UoKTtcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBhdXRoLmN1cnJlbnRVc2VyPy5kaXNwbGF5TmFtZVxuICApO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25JbkJ5TWV0YU1hc2soKSB7XG4gICAgYXdhaXQgc2lnbkluV2l0aE1vcmFsaXMobW9yYWxpc0F1dGgpO1xuICAgIHNldEN1cnJlbnRVc2VyKGF1dGguY3VycmVudFVzZXI/LmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgYXdhaXQgYXV0aC5zaWduT3V0KCk7XG4gICAgc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZpcmViYXNlIE5leHRKcyBEZW1vPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxwPlxuICAgICAgICBVc2VyOntcIiBcIn1cbiAgICAgICAge2N1cnJlbnRVc2VyXG4gICAgICAgICAgPyBgJHtjdXJyZW50VXNlci5zbGljZSgwLCA0KX0uLi4ke2N1cnJlbnRVc2VyLnNsaWNlKDM4KX1gXG4gICAgICAgICAgOiBcIi1cIn1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICB7IWN1cnJlbnRVc2VyICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbkJ5TWV0YU1hc2t9PlNpZ24gaW4gYnkgTWV0YU1hc2s8L2J1dHRvbj5cbiAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgIHtjdXJyZW50VXNlciAmJiA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9PlNpZ24gb3V0PC9idXR0b24+fVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInNpZ25JbldpdGhNb3JhbGlzIiwiSGVhZCIsInVzZVN0YXRlIiwidXNlRmlyZWJhc2UiLCJIb21lIiwiYXV0aCIsIm1vcmFsaXNBdXRoIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwic2lnbkluQnlNZXRhTWFzayIsInNpZ25PdXQiLCJ0aXRsZSIsInAiLCJzbGljZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@moralisweb3/client-firebase-auth-utils":
/*!**********************************************************!*\
  !*** external "@moralisweb3/client-firebase-auth-utils" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/client-firebase-auth-utils");

/***/ }),

/***/ "@moralisweb3/client-firebase-evm-auth":
/*!********************************************************!*\
  !*** external "@moralisweb3/client-firebase-evm-auth" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/client-firebase-evm-auth");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/functions");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();