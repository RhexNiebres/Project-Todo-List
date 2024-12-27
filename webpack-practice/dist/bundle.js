/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\r\n    --main-clr:white;\r\n    --scnd-clr:#8bf67a;\r\n    --trd-clr: #a3ffa4; \r\n}\r\nbody {\r\n    font-family: monospace, sans-serif;\r\n    display: flex;                     \r\n    justify-content: center;           \r\n    align-items: center;               \r\n    flex-direction: column;            \r\n    height: 70vh;                     \r\n    margin: 0;                        \r\n    background-color: #0A0A0A;     \r\n    background-color: var(--main-clr);   \r\n}\r\nbody h1 {\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    width: 40%;\r\n}\r\n#viewAllTasksButton{\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        background-color: var(--trd-clr);\r\n        box-shadow: 0 4px 8px rgba(124, 70, 70, 0.2);\r\n    }\r\n}\r\n\r\nh2{\r\n    background-color: \tvar(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\ndiv.tab {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    border: 1px solid black; \r\n    border-radius: 10px;\r\n    &:hover{\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    }\r\n}\r\n.addTaskButton{\r\n    background-color: #9cd5ff;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n    border: none;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        background-color:#c1e5ff; \r\n        border: 1px solid black;\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n}\r\n.deleteFolderButton{\r\n    background-color: #ff2020;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n    border: none;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        background-color: \t#ff5757;\r\n        border: 1px solid black;\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n}\r\n.editButton{\r\n    background-color: #6ab0e3;\r\n    border: none;\r\n    border-radius: 10px;\r\n    &:hover{\r\n        background-color: #c1e5ff;\r\n    }\r\n}\r\n.deleteButton{\r\n    background-color: var(--scnd-clr);\r\n    border: none;\r\n    border-radius: 10px;\r\n    &:hover{\r\n        background-color: red;\r\n    }\r\n}\r\n\r\n.tab:active {\r\n    background-color: var(--trd-clr);\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n#addTaskButton{\r\n    background-color: var(--scnd-clr);\r\n    :hover{\r\n        background-color: var(--trd-clr);\r\n        border: 1px solid black;\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n}\r\ninput#folderName{\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid black;\r\n    &:hover{\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    }\r\n}\r\nbutton#addFolderButton{\r\n    background-color: \tvar(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    border: none;\r\n    &:hover{\r\n        background-color: var(--trd-clr);\r\n        border: 1px solid black;\r\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n}\r\n.task-area {\r\n    display: none;  \r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    &div{\r\n        background-color: var(--scnd-clr);\r\n        border-radius: 10px;\r\n    }\r\n}\r\n.current-task-info {\r\n    margin-bottom: 15px;\r\n    &#taskTitle{\r\n        border-radius: 10px;\r\n    }                    \r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-practice/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-practice/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n \r\n\r\nclass Task {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nclass Folder {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n  }\r\n\r\n  addTask(task) {\r\n    this.tasks.push(task);\r\n  }\r\n}\r\n\r\n// Load folders from localStorage and ensure they are instances of Folder\r\nconst storedFolders = JSON.parse(localStorage.getItem(\"folders\")) || [];\r\nconst folders = storedFolders.map(folderData => {\r\n  const folder = new Folder(folderData.name);\r\n  folder.tasks = folderData.tasks || []; // Ensure tasks are populated if they exist\r\n  return folder;\r\n});\r\n\r\nlet activeFolder = null;\r\nlet editingTask = null; // Track which task is being edited\r\n\r\n// Ensure the folders are displayed when the page loads\r\nfolders.forEach((folder) => {\r\n  createTab(folder);\r\n});\r\n\r\n// Add Folder\r\ndocument.getElementById(\"addFolderButton\").addEventListener(\"click\", () => {\r\n  const folderName = document.getElementById(\"folderName\").value.trim(); // Trim whitespace\r\n\r\n  if (folderName) {\r\n    const newFolder = new Folder(folderName);\r\n    folders.push(newFolder);\r\n    createTab(newFolder);\r\n    saveFolders(); // Save to localStorage\r\n    document.getElementById(\"folderName\").value = \"\"; // Clear input\r\n  } else {\r\n    alert(\"Please enter a folder name.\");\r\n  }\r\n});\r\n\r\n// View all tasks\r\ndocument.getElementById(\"viewAllTasksButton\").addEventListener(\"click\", displayAllTasks);\r\n\r\nfunction displayAllTasks() {\r\n  document.getElementById(\"taskList\").innerHTML = \"\";\r\n  document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task area\r\n  document.getElementById(\"currentFolderName\").textContent = \"All Tasks\";\r\n\r\n  // Gather all tasks in all folders\r\n  folders.forEach((folder) => {\r\n    folder.tasks.forEach((task) => {\r\n      displayTask(task);\r\n    });\r\n  });\r\n\r\n  // Remove active class from all tabs\r\n  const tabs = document.querySelectorAll(\".tab\");\r\n  tabs.forEach((tab) => {\r\n    tab.classList.remove(\"active\");\r\n  });\r\n}\r\n\r\nfunction createTab(folder) {\r\n  const tab = document.createElement(\"div\");\r\n  tab.className = \"tab\";\r\n  tab.textContent = folder.name;\r\n\r\n  const addTaskButton = document.createElement(\"button\");\r\n  addTaskButton.textContent = \"Add Task\";\r\n  addTaskButton.style.marginLeft = \"10px\";\r\n  addTaskButton.classList.add(\"addTaskButton\");\r\n\r\n  addTaskButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n    activeFolder = folder; // Set active folder\r\n    showTaskInput();\r\n  });\r\n\r\n  const deleteFolderButton = document.createElement(\"button\");\r\n  deleteFolderButton.textContent = \"Delete Folder\";\r\n  deleteFolderButton.style.marginLeft = \"10px\";\r\n  deleteFolderButton.classList.add(\"deleteFolderButton\");\r\n  deleteFolderButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n    deleteFolder(folder);\r\n  });\r\n\r\n  // Set the click event for the tab\r\n  tab.addEventListener(\"click\", (event) => {\r\n    switchTab(folder);\r\n  });\r\n\r\n  tab.appendChild(addTaskButton);\r\n  tab.appendChild(deleteFolderButton);\r\n  document.getElementById(\"tabsContainer\").appendChild(tab);\r\n}\r\n\r\nfunction switchTab(folder) {\r\n  activeFolder = folder;\r\n  document.getElementById(\"currentFolderName\").textContent = folder.name;\r\n  document.getElementById(\"taskArea\").style.display = \"block\"; // Show task area\r\n  document.getElementById(\"taskList\").innerHTML = \"\"; // Clear task list\r\n\r\n  // Display tasks for the selected folder\r\n  folder.tasks.forEach((task) => {\r\n    displayTask(task);\r\n  });\r\n\r\n  // Remove the active class from all tabs\r\n  const tabs = document.querySelectorAll(\".tab\");\r\n  tabs.forEach((tab) => {\r\n    tab.classList.remove(\"active\");\r\n  });\r\n\r\n  // Activate the current tab\r\n  const activeTab = Array.from(tabs).find((t) => t.textContent === folder.name);\r\n  if (activeTab) {\r\n    activeTab.classList.add(\"active\"); // Add active class\r\n  }\r\n}\r\n\r\nfunction showTaskInput() {\r\n  if (!activeFolder) return;\r\n\r\n  const taskArea = document.getElementById(\"taskArea\");\r\n  taskArea.style.display = \"block\"; // Show task area\r\n\r\n  // Clear input fields\r\n  document.getElementById(\"taskTitle\").value = \"\";\r\n  document.getElementById(\"taskDescription\").value = \"\";\r\n  document.getElementById(\"taskDueDate\").value = \"\";\r\n  document.getElementById(\"taskPriority\").value = \"Low\";\r\n  document.getElementById(\"currentTaskInfo\").style.display = \"none\"; // Hide task info\r\n}\r\n\r\n// Add Task\r\ndocument.getElementById(\"addTaskButton\").addEventListener(\"click\", () => { \r\n  if (!activeFolder) {\r\n    alert(\"Please select a folder to add tasks to.\");\r\n    return; // Exit if there's no active folder\r\n  }\r\n\r\n  const title = document.getElementById(\"taskTitle\").value.trim();\r\n  const description = document.getElementById(\"taskDescription\").value.trim();\r\n  const dueDate = document.getElementById(\"taskDueDate\").value;\r\n  const priority = document.getElementById(\"taskPriority\").value;\r\n\r\n  // Validate inputs\r\n  if (!title || !description || !dueDate || !priority) {\r\n    alert(\"Please fill in all fields.\");\r\n    return;\r\n  }\r\n\r\n  if (editingTask) {\r\n    // If editing an existing task\r\n    editingTask.title = title;\r\n    editingTask.description = description;\r\n    editingTask.dueDate = dueDate;\r\n    editingTask.priority = priority;\r\n\r\n    document.getElementById(\"addTaskButton\").textContent = \"Add Task\"; // Reset button text\r\n    editingTask = null;\r\n\r\n    document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task input\r\n    refreshTaskList();\r\n    document.getElementById(\"currentTaskInfo\").style.display = \"none\";\r\n    saveFolders();\r\n  } else {\r\n    // Create a new task\r\n    const newTask = new Task(title, description, dueDate, priority);\r\n    console.log(\"Adding Task to Folder:\", activeFolder.name); // Debugging line\r\n    activeFolder.addTask(newTask); // This should now work without error\r\n    displayTask(newTask);\r\n\r\n    document.getElementById(\"taskTitle\").value = \"\";\r\n    document.getElementById(\"taskDescription\").value = \"\";\r\n    document.getElementById(\"taskDueDate\").value = \"\";\r\n    document.getElementById(\"taskPriority\").value = \"Low\" //defualt priority\r\n\r\n    document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task input\r\n    saveFolders();\r\n  }\r\n});\r\n\r\nfunction displayTask(task) {\r\n  const taskList = document.getElementById(\"taskList\");\r\n  const listItem = document.createElement(\"li\");\r\n\r\n  listItem.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`;\r\n\r\n  const editButton = document.createElement(\"button\");\r\n  editButton.textContent = \"Edit\";\r\n  editButton.style.marginLeft = \"10px\";\r\n  editButton.classList.add(\"editButton\");\r\n\r\n  editButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n    editTask(task);\r\n  });\r\n\r\n  const deleteButton = document.createElement(\"button\");\r\n  deleteButton.textContent = \"Delete\";\r\n  deleteButton.style.marginLeft = \"10px\";\r\n  deleteButton.classList.add(\"deleteButton\");\r\n\r\n  deleteButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n    deleteTask(task);\r\n    listItem.remove(); // Remove from UI immediately\r\n    saveFolders(); // Save after deletion\r\n  });\r\n\r\n  listItem.appendChild(editButton); // Add the edit button\r\n  listItem.appendChild(deleteButton); // Add the delete button\r\n\r\n  taskList.appendChild(listItem); // Append to task list\r\n}\r\n\r\nfunction editTask(task) {\r\n  // Populate the form for editing\r\n  document.getElementById(\"taskTitle\").value = task.title;\r\n  document.getElementById(\"taskDescription\").value = task.description;\r\n  document.getElementById(\"taskDueDate\").value = task.dueDate;\r\n  document.getElementById(\"taskPriority\").value = task.priority;\r\n\r\n  showTaskInput(); // Show the task input area\r\n  editingTask = task; // Set the current task to editing\r\n  updateCurrentTaskInfo(task);\r\n  document.getElementById(\"addTaskButton\").textContent = \"Update Task\"; // Change button text\r\n}\r\n\r\nfunction updateCurrentTaskInfo(task) {\r\n  const currentTaskInfo = document.getElementById(\"currentTaskInfo\");\r\n  currentTaskInfo.style.display = \"block\";\r\n  currentTaskInfo.innerHTML = `\r\n      <h3>Current Task Details:</h3>\r\n      <p><strong>Title:</strong> ${task.title}</p>\r\n      <p><strong>Description:</strong> ${task.description}</p>\r\n      <p><strong>Due Date:</strong> ${task.dueDate}</p>\r\n      <p><strong>Priority:</strong> ${task.priority}</p>\r\n  `;\r\n}\r\n\r\nfunction deleteTask(task) {\r\n  const index = activeFolder.tasks.indexOf(task);\r\n  if (index > -1) {\r\n    activeFolder.tasks.splice(index, 1); // Remove task from active folder's tasks\r\n  }\r\n}\r\n\r\nfunction deleteFolder(folder) {\r\n  const index = folders.indexOf(folder);\r\n  if (index > -1) {\r\n    folders.splice(index, 1); // Remove folder from folders array\r\n    document.getElementById(\"tabsContainer\").innerHTML = \"\"; // Clear current tabs\r\n    folders.forEach((f) => createTab(f)); // Recreate tabs\r\n    activeFolder = null; // Clear active folder\r\n    document.getElementById(\"taskList\").innerHTML = \"\"; // Clear task list\r\n    document.getElementById(\"currentFolderName\").textContent = \"\"; // Clear current folder name\r\n    saveFolders(); // Save state\r\n  }\r\n}\r\n\r\nfunction refreshTaskList() {\r\n  document.getElementById(\"taskList\").innerHTML = \"\"; // Clear current task list\r\n  activeFolder.tasks.forEach((task) => {\r\n    displayTask(task); // Display all tasks in the current folder\r\n  });\r\n}\r\n\r\nfunction saveFolders() {\r\n  const foldersToSave = folders.map(folder => ({\r\n    name: folder.name,\r\n    tasks: folder.tasks // You may want to save tasks more thoroughly depending on your task structure\r\n  }));\r\n  localStorage.setItem(\"folders\", JSON.stringify(foldersToSave)); // Save to localStorage\r\n}\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;