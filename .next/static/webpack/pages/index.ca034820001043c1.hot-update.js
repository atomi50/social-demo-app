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

/***/ "./components/Feed.js":
/*!****************************!*\
  !*** ./components/Feed.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stories */ \"./components/Stories.js\");\n\n\n\nfunction Feed() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"col-span-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Feed.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Posts, {}, void 0, false, {\n                        fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Feed.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Feed.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Feed.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Feed.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNrQjtTQUVsQ0UsSUFBSSxHQUFHLENBQUM7SUFDZixNQUFNLDZFQUNIQyxDQUFJO1FBQUNDLFNBQVMsRUFBQyxDQUFrRjs7d0ZBQy9GQyxDQUFPO2dCQUFDRCxTQUFTLEVBQUMsQ0FBWTs7Z0dBQzVCSCwyREFBTzs7Ozs7Z0dBQ1BLLEtBQUs7Ozs7Ozs7Ozs7O3dGQUdQRCxDQUFPOzs7Ozs7Ozs7OztBQU1kLENBQUM7S0FkUUgsSUFBSTtBQWdCYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlZWQuanM/NDZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1N0b3JpZXMnXG5cbmZ1bmN0aW9uIEZlZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOm1heC13LTN4bCBtZDpncmlkLWNvbHMtMiB4bDptYXgtdy02eGwgeGw6Z3JpZC1jb2xzLTNcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cbiAgICAgICAgPFN0b3JpZXMgLz5cbiAgICAgICAgPFBvc3RzIC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICB7LyogTWluaSBwcm9maWxlICovfVxuICAgICAgICB7LyogU3VnZ2VzdGlvbnMgKi99XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0b3JpZXMiLCJGZWVkIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feed.js\n");

/***/ })

});