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

/***/ "./components/Stories.js":
/*!*******************************!*\
  !*** ./components/Stories.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Story */ \"./components/Story.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Stories() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), suggestions1 = ref[0], setSuggestions = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var suggestions = _toConsumableArray(Array(20)).map(function(_, i) {\n            return _objectSpread({}, _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.contextualCard(), {\n                id: i\n            });\n        });\n        setSuggestions(suggestions);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mt-8 flex space-x-2 overflow-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black \",\n        children: suggestions1.map(function(profile) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Story__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                image: profile.avatar,\n                username: profile.username\n            }, profile.id, false, {\n                fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Stories.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/aleksandar/Coding/Code/social-demo-app/components/Stories.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_s(Stories, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Stories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stories);\nvar _c;\n$RefreshReg$(_c, \"Stories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3JpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFDUTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTlCSSxPQUFPLEdBQUcsQ0FBQzs7O0lBQ2xCLEdBQUssQ0FBaUNGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUNHLFlBQVcsR0FBb0JILEdBQVksS0FBOUJJLGNBQWMsR0FBSUosR0FBWTtJQUVsREQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNJLFdBQVcsc0JBQU9FLEtBQUssQ0FBQyxFQUFFLEdBQUdDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQztZQUFLLE1BQ2xELG1CQUFNViw4RUFBNEI7Z0JBQy9CYSxFQUFFLEVBQUVILENBQUM7OztRQUVQSixjQUFjLENBQUNELFdBQVc7SUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hTLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWdJO2tCQUM1SVYsWUFBVyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFQUSxPQUFPOzBCQUN2QixNQUFNLCtEQUFMYix5REFBSztnQkFFSmMsS0FBSyxFQUFFRCxPQUFPLENBQUNFLE1BQU07Z0JBQ3JCQyxRQUFRLEVBQUVILE9BQU8sQ0FBQ0csUUFBUTtlQUZyQkgsT0FBTyxDQUFDSCxFQUFFOzs7Ozs7Ozs7OztBQU96QixDQUFDO0dBdEJRVCxPQUFPO0tBQVBBLE9BQU87QUF3QmhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3Rvcmllcy5qcz83YWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYWtlciBmcm9tICdAZmFrZXItanMvZmFrZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TdG9yeSdcblxuZnVuY3Rpb24gU3RvcmllcygpIHtcbiAgY29uc3QgW3N1Z2dlc3Rpb25zLCBzZXRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gWy4uLkFycmF5KDIwKV0ubWFwKChfLCBpKSA9PiAoe1xuICAgICAgLi4uZmFrZXIuaGVscGVycy5jb250ZXh0dWFsQ2FyZCgpLFxuICAgICAgaWQ6IGksXG4gICAgfSkpXG4gICAgc2V0U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbnMpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBtdC04IGZsZXggc3BhY2UteC0yIG92ZXJmbG93LXNjcm9sbCByb3VuZGVkLXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcC02IHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10aHVtYi1ibGFjayBcIj5cbiAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHByb2ZpbGUpID0+IChcbiAgICAgICAgPFN0b3J5XG4gICAgICAgICAga2V5PXtwcm9maWxlLmlkfVxuICAgICAgICAgIGltYWdlPXtwcm9maWxlLmF2YXRhcn1cbiAgICAgICAgICB1c2VybmFtZT17cHJvZmlsZS51c2VybmFtZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXNcbiJdLCJuYW1lcyI6WyJmYWtlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcnkiLCJTdG9yaWVzIiwic3VnZ2VzdGlvbnMiLCJzZXRTdWdnZXN0aW9ucyIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJoZWxwZXJzIiwiY29udGV4dHVhbENhcmQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGUiLCJpbWFnZSIsImF2YXRhciIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Stories.js\n");

/***/ })

});