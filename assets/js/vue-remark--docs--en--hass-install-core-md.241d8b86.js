(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--en--hass-install-core-md"],{

/***/ "Dmwh":
/*!**************************************!*\
  !*** ./docs/en/hass-install-core.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-install-core.md?vue&type=template&id=b3bfb068& */ \"IvQj\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_install_core_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-install-core.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"LOtn\");\n/* harmony import */ var _hass_install_core_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-install-core.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"KXiW\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_install_core_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_install_core_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_install_core_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_install_core_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?");

/***/ }),

/***/ "EgG0":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/hass-install-core.md?vue&type=template&id=b3bfb068& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"This article contains instructions to upgrade your existing Home Assistant Core with Robonomics Integration.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"DISCLAIMER\"\n    }\n  }, [_c('p', [_vm._v(\"  Here, Robonomics integration and IPFS are to be installed along with existing Home Assistant Core.\")]), _c('ol', [_c('li', [_vm._v(\"This section is designed with an assumption that installation went completely according to \\n\"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-core\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"instructions\")]), _vm._v(\" given by Home Assistant\\ndevelopers and there is a \"), _c('u', [_vm._v(\"homeassistant\")]), _vm._v(\" user and venv. If it is not the case, follow instructions below \"), _c('strong', [_vm._v(\"but edit the script accordingly\")]), _vm._v(\".\")]), _c('li', [_vm._v(\"IPFS will be installed and run as a \"), _c('u', [_vm._v(\"systemd\")]), _vm._v(\" service on the host machine.\")]), _c('li', [_vm._v(\"It is assumed that you have Python3.9 or higher installed.\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"install\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#install\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Install\")]), _c('p', [_vm._v(\"Download the installation script and run it with bash:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"wget https://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_integration_core.sh\\nsudo bash install_integration_core.sh\")])]), _c('p', [_vm._v(\"You will see the following output:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"<...>\\nhttps://raw.githubusercontent.com/LoSk-p/robonomics-hass-utils/main/raspberry_pi/install_ipfs_arc_dependent.sh\\n<...>\\nIPFS daemon installed and launched, use ipfs-daemon.service to manage.\\n<...>\\nA    robonomics/utils.py\\nChecked out revision 125.\\nIntegration downloaded!\")])]), _c('p', [_vm._v(\"Somewhere along the way you will be asked to confirm the restart of several services. Navigating with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"tab\")]), _vm._v(\", select the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"yes\")]), _vm._v(\" option.\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"`custom_components` exists.\"\n    }\n  }, [_c('p', [_vm._v(\"  You may see an error like \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"mkdir: can't create directory 'custom_components': File exists\")]), _vm._v(\". This\\n  means that you have already installed some custom components and the folder exists. Ignore this message.\")])]), _vm._v(\"\\n  \\nRestart your Home Assistant.\\n\"), _c('h2', {\n    attrs: {\n      \"id\": \"verify\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#verify\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Verify\")]), _c('p', [_vm._v(\"Check that IPFS service is up and running:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"ubuntu@ubuntu:~$ systemctl status ipfs-daemon.service \\n● ipfs-daemon.service - IPFS Daemon Service\\n     Loaded: loaded (/etc/systemd/system/ipfs-daemon.service; enabled; preset: enabled)\\n     Active: active (running) since Thu 2022-11-03 11:30:39 UTC; 14min ago\\n   Main PID: 4400 (ipfs)\\n      Tasks: 12 (limit: 4416)\\n     Memory: 141.9M\\n        CPU: 3min 5.031s\\n     CGroup: /system.slice/ipfs-daemon.service\\n             └─4400 /usr/local/bin/ipfs daemon\")])]), _c('p', [_vm._v(\"You will see the integration available while going through further steps of this tutorial.\")]), _c('p', [_vm._v(\"Now that the integration is added to the folder of custom components of Home Assistant, you have two options:\")]), _c('ul', [_c('li', [_vm._v(\"Whether you have MQTT integration installed and some Zigbee devices connected by either Zigbee2MQTT or any other hardware,\\nproceed to \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate\"\n    }\n  }, [_vm._v(\"configuration steps\")]), _vm._v(\" of Robonomics subscription and Robonomics Integration.\")]), _c('li', [_vm._v(\"Otherwise, navigate to \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/mqtt-and-hass-setup/\"\n    }\n  }, [_vm._v(\"MQTT Broker\")]), _vm._v(\" installation where you also add MQTT integration to your Home\\nAssistant and connect your Zigbee devices to your Home Assistant via preferred hardware.\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "IvQj":
/*!*********************************************************************!*\
  !*** ./docs/en/hass-install-core.md?vue&type=template&id=b3bfb068& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-install-core.md?vue&type=template&id=b3bfb068& */ \"EgG0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_template_id_b3bfb068___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?");

/***/ }),

/***/ "KXiW":
/*!***********************************************************************************************!*\
  !*** ./docs/en/hass-install-core.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-install-core.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"ZUDN\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?");

/***/ }),

/***/ "LOtn":
/*!******************************************************************************************!*\
  !*** ./docs/en/hass-install-core.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-install-core.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"UZW7\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_install_core_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?");

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

/***/ "UZW7":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/hass-install-core.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "ZUDN":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/hass-install-core.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Home Assistant Core\",\n  \"contributors\": [\"PaTara43\", \"makyul\"],\n  \"translated\": true,\n  \"tools\": [\"Ubuntu Server 22.04 LTS https://ubuntu.com/download/raspberry-pi\", \"Home Assistant 2022.8.2 https://github.com/home-assistant/core\", \"Robonomics integration 1.1.0 https://github.com/airalab/homeassistant-robonomics-integration\", \"robonomics-interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface/\", \"IPFS 0.14.0 https://docs.ipfs.tech/\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/en/hass-install-core.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);