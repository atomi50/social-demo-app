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

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n\n\n\nfunction Post(param) {\n    var id = param.id, username = param.username, userImg = param.userImg, img = param.img, caption = param.caption;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: userImg,\n                    alt: \"\",\n                    className: \"mr-3 h-12 w-12 rounded-full border object-contain p-1\"\n                }, void 0, false, {\n                    fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Post.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex-1\",\n                    children: username\n                }, void 0, false, {\n                    fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Post.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.DotsHorizontalIcon, {\n                    className: \"h-5\"\n                }, void 0, false, {\n                    fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Post.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Post.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Post.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPaUM7QUFFb0M7U0FFNURPLElBQUksQ0FBQyxLQUF1QyxFQUFFLENBQUM7UUFBeENDLEVBQUUsR0FBSixLQUF1QyxDQUFyQ0EsRUFBRSxFQUFFQyxRQUFRLEdBQWQsS0FBdUMsQ0FBakNBLFFBQVEsRUFBRUMsT0FBTyxHQUF2QixLQUF1QyxDQUF2QkEsT0FBTyxFQUFFQyxHQUFHLEdBQTVCLEtBQXVDLENBQWRBLEdBQUcsRUFBRUMsT0FBTyxHQUFyQyxLQUF1QyxDQUFUQSxPQUFPO0lBQ2pELE1BQU0sNkVBQ0hDLENBQUc7OEZBRURBLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXVCOzs0RkFDbkNILENBQUc7b0JBQ0ZJLEdBQUcsRUFBRUwsT0FBTztvQkFDWk0sR0FBRyxFQUFDLENBQUU7b0JBQ05GLFNBQVMsRUFBQyxDQUF3RDs7Ozs7OzRGQUVuRUcsQ0FBQztvQkFBQ0gsU0FBUyxFQUFDLENBQVE7OEJBQUVMLFFBQVE7Ozs7Ozs0RkFDOUJQLHdFQUFrQjtvQkFBQ1ksU0FBUyxFQUFDLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzNDLENBQUM7S0F6QlFQLElBQUk7QUEyQmIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm9va21hcmtJY29uLFxuICBDaGF0SWNvbixcbiAgRG90c0hvcml6b250YWxJY29uLFxuICBIZWFydEljb24sXG4gIEVtb2ppSGFwcHlJY29uLFxuICBQYXBlckFpcnBsYW5lSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuXG5pbXBvcnQgeyBIZWFydEljb24gYXMgSGVhcnRJY29uRmlsbGVkIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcblxuZnVuY3Rpb24gUG9zdCh7IGlkLCB1c2VybmFtZSwgdXNlckltZywgaW1nLCBjYXB0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC01XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3VzZXJJbWd9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIGgtMTIgdy0xMiAgcm91bmRlZC1mdWxsIGJvcmRlciBvYmplY3QtY29udGFpbiBwLTFcIlxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj57dXNlcm5hbWV9PC9wPlxuICAgICAgICA8RG90c0hvcml6b250YWxJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEltZyAqL31cblxuICAgICAgey8qIEJ1dHRvbnMgKi99XG5cbiAgICAgIHsvKiBDYXB0aW9uICovfVxuXG4gICAgICB7LyogQ29tbWVudHMgKi99XG5cbiAgICAgIHsvKiBpbnB1dCBib3ggKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sIm5hbWVzIjpbIkJvb2ttYXJrSWNvbiIsIkNoYXRJY29uIiwiRG90c0hvcml6b250YWxJY29uIiwiSGVhcnRJY29uIiwiRW1vamlIYXBweUljb24iLCJQYXBlckFpcnBsYW5lSWNvbiIsIkhlYXJ0SWNvbkZpbGxlZCIsIlBvc3QiLCJpZCIsInVzZXJuYW1lIiwidXNlckltZyIsImltZyIsImNhcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

});