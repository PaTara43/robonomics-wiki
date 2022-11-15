(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--changing-exodus-receiving-address-md"],{

/***/ "/4TE":
/*!***************************************************************************************************************!*\
  !*** ./docs/ja/changing-exodus-receiving-address.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./changing-exodus-receiving-address.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"2jU3\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?");

/***/ }),

/***/ "2jU3":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/changing-exodus-receiving-address.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Changing Exodus Bridge Receiving Address\",\n  \"contributors\": [\"Leemo94\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "6EaX":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/changing-exodus-receiving-address.md?vue&type=template&id=3fb3ad75& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"This article will provide guidance on how you can change your Robonomics parachain receiving address in the event that you have input the wrong receiving address in the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dapp.robonomics.network/#/exodus\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Exodus bridge dapp\")])]), _c('p', [_vm._v(\"Please be aware that the process of changing the receiving address is not something that will be able to be carried out indefinitely, in fact the intervention of the development team is only possible during the early stages of the Robonomics parachain development, and eventually it will not be possible for the development team to conduct this kind of operation. \"), _c('strong', [_vm._v(\"Please always ensure that you input the correct parachain address (i.e. one you have the seed phrase for) into the Exodus bridging application\")]), _vm._v(\".\")]), _c('p', [_c('em', [_vm._v(\"Please be informed that the currently, if you input the wrong Robonomics parachain account address into the Exodus bridge dapp, then the process will be carried out as follows:\")])]), _c('ol', [_c('li', [_vm._v(\"Complete the process as described in this article (i.e. signing the message & raising a GitHub issue).\")]), _c('li', [_vm._v(\"Bridged $XRT will be sent to the account originally input into the Exodus bridge dapp (i.e. the incorrect account).\")]), _c('li', [_vm._v(\"If no transactions are made on the incorrect account for 1 month, then the Robonomics team will transfer the $XRT tokens to the new address stipulated in the message (which you will sign as per the instructions below).\")])]), _c('p', [_vm._v(\"Of course, the utmost priority for the Robonomics team is to ensure only valid changes of address are executed, as such you need to sign a message \"), _c('strong', [_vm._v(\"from the Ethereum account which you originally deposited the $XRT tokens into the Exodus dapp\")]), _vm._v(\". We recommend that you utilize a site such as \"), _c('a', {\n    attrs: {\n      \"href\": \"https://app.mycrypto.com/sign-message\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"MyCrypto\")]), _vm._v(\" to create this message (the following images will show how to conduct this process on MyCrypto).\")]), _c('p', [_vm._v(\"Select the icon which corresponds to your web3 wallet, in our case we will choose MetaMask.\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/fyJyBG0.png\",\n      \"alt\": \"MyCrypto.com-Landing-Page\"\n    }\n  })]), _c('p', [_vm._v(\"Now, click on the \\\"Connect to MetaMask\\\" button as shown above, and select the correct account (the account which you previously \"), _c('strong', [_vm._v(\"sent $XRT tokens from\")]), _vm._v(\").\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/1rd6izf.png\",\n      \"alt\": \"Page-after-selecing-metamask\"\n    }\n  })]), _c('p', [_vm._v(\"Now, we get the option to input a message, you shall follow the below template when inputting the message into this section, otherwise the process will not work. \"), _c('strong', [_vm._v(\"These addresses relate to the Robonomics parachain addresses\")]), _vm._v(\".\")]), _c('blockquote', [_c('p', [_vm._v(\"Wrong target address: \"), _c('strong', [_vm._v(\"WRONG_ADDRESS\")]), _vm._v(\". Right target address: \"), _c('strong', [_vm._v(\"RIGHT_ADDRESS\")])])]), _c('p', [_vm._v(\"So, your message will look something like the message below (please make sure you input your own address, and not the one shown below). The message should all be on 1 line, don't use any line breaks (i.e. pressing enter). Afterwards, press the \\\"Sign Message\\\" button located under the message text.\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/jb1YqLs.png\",\n      \"alt\": \"example-of-how-the-message-should-look\"\n    }\n  })]), _c('p', [_vm._v(\"Now you should get a notification on your web 3 wallet, click \\\"Sign\\\".\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/GTHEYTs.png\",\n      \"alt\": \"Example-metamask-notification\"\n    }\n  })]), _c('p', [_vm._v(\"Once signed, wait a few moments and then the MyCrypto page should change, and a signature shall appear.\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/JemAEPm.png\",\n      \"alt\": \"signature-generated-from-signed-message\"\n    }\n  })]), _c('p', [_vm._v(\"Next, you need to head on over to the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/issues/new\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics GitHub page\")]), _vm._v(\", and open a new issue. The issue should have the title \\\"Robonomics exodus: a request to change the target address\\\", and the body / comment of the issue shall be the signature generated by MyCrypto. Afterwards, click \\\"Submit new issue\\\", and the Robonomics team will handle your issue and leave a reply to your issue regarding the status of your request.\")]), _c('p', [_c('img', {\n    attrs: {\n      \"src\": \"https://i.imgur.com/6ZHSFRw.png\",\n      \"alt\": \"example-of-GitHub-issue\"\n    }\n  })])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OHcB":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/changing-exodus-receiving-address.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "e4ay":
/*!*************************************************************************************!*\
  !*** ./docs/ja/changing-exodus-receiving-address.md?vue&type=template&id=3fb3ad75& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./changing-exodus-receiving-address.md?vue&type=template&id=3fb3ad75& */ \"6EaX\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?");

/***/ }),

/***/ "gRPx":
/*!******************************************************!*\
  !*** ./docs/ja/changing-exodus-receiving-address.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changing-exodus-receiving-address.md?vue&type=template&id=3fb3ad75& */ \"e4ay\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _changing_exodus_receiving_address_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changing-exodus-receiving-address.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"gmZD\");\n/* harmony import */ var _changing_exodus_receiving_address_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changing-exodus-receiving-address.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/4TE\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _changing_exodus_receiving_address_md_vue_type_template_id_3fb3ad75___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _changing_exodus_receiving_address_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_changing_exodus_receiving_address_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _changing_exodus_receiving_address_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_changing_exodus_receiving_address_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?");

/***/ }),

/***/ "gmZD":
/*!**********************************************************************************************************!*\
  !*** ./docs/ja/changing-exodus-receiving-address.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./changing-exodus-receiving-address.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"OHcB\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_changing_exodus_receiving_address_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/changing-exodus-receiving-address.md?");

/***/ })

}]);