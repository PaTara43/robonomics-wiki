(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--kuka-md"],{

/***/ "9mYB":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/kuka.md?vue&type=template&id=2fdd9a46& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"Video with an example of work can be found here:\")]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/z55HepXbHr8\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"requirements\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#requirements\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Requirements\")]), _c('ul', [_c('li', [_vm._v(\"ROS melodic, Gazebo (installation instraction \"), _c('a', {\n    attrs: {\n      \"href\": \"http://wiki.ros.org/melodic/Installation/Ubuntu\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\")\")]), _c('li', [_vm._v(\"Some extra packages\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\")])]), _c('ul', [_c('li', [_vm._v(\"IPFS 0.4.22 (download from \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.npackd.org/p/ipfs/0.4.22\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\" and install)\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz\\n\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" go-ipfs/\\nsudo bash install.sh\\nipfs init\")])]), _c('ul', [_c('li', [_vm._v(\"pip3\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo apt-get install python3-pip\")])]), _c('ul', [_c('li', [_vm._v(\"ipfshttpclient\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"pip3 install ipfshttpclient\")])]), _c('ul', [_c('li', [_vm._v(\"substrate-interface\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"pip3 install substrate-interface\")])]), _c('ul', [_c('li', [_vm._v(\"Robonomics node (binary file) (download latest release \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/releases\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\")\")]), _c('li', [_vm._v(\"IPFS browser extension (not necessary)\")])]), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"installation\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#installation\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Installation\")]), _c('p', [_vm._v(\"Install Kuka manipulator and control packages\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" catkin_wc/src/\\ngit \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"clone\")]), _vm._v(\" https://github.com/orsalmon/kuka_manipulator_gazebo\\ngit \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"clone\")]), _vm._v(\" https://github.com/LoSk-p/kuka_controller\\n\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" ..\\ncatkin_make\")])]), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"running-gazebo-model\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#running-gazebo-model\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Running gazebo model\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"source\")]), _vm._v(\" ~/catkin_ws/devel/setup.bash\\nroslaunch manipulator_gazebo manipulator_empty_world.launch\")])]), _c('p', [_vm._v(\"In a new window\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"source\")]), _vm._v(\" ~/catkin_ws/devel/setup.bash\\nrosrun manipulator_gazebo move_arm_server\")])]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=model!../images/kuka-demo/1.png */ \"tgw9\"),\n      \"alt\": \"model\"\n    }\n  })], 1), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"running-robonomics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#running-robonomics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Running robonomics\")]), _c('p', [_vm._v(\"Go to the folder with robonomics file ad create a local robonomics network:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"./robonomics --dev --tmp\")])]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=robonomics!../images/kuka-demo/robonomics.png */ \"JOhr\"),\n      \"alt\": \"robonomics\"\n    }\n  })], 1), _c('p', [_vm._v(\"Go to \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Parachain portal\")]), _vm._v(\" and switch to local node\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=local!../images/kuka-demo/local.png */ \"v55X\"),\n      \"alt\": \"local\"\n    }\n  })], 1), _c('p', [_vm._v(\"Then go to Accounts and create \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\" account. Save account's mnemonic key, you will need it later. \")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=acc!../images/kuka-demo/create_acc.png */ \"JqrJ\"),\n      \"alt\": \"acc\"\n    }\n  })], 1), _c('p', [_vm._v(\"Send some units to the new account from one of default accounts.\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=accs!../images/kuka-demo/send_money.png */ \"H7Df\"),\n      \"alt\": \"accs\"\n    }\n  })], 1), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"running-ipfs\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#running-ipfs\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Running ipfs\")]), _c('p', [_vm._v(\"Run ipfs daemon:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"ipfs daemon\")])]), _c('hr'), _c('h2', {\n    attrs: {\n      \"id\": \"running-control-package\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#running-control-package\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Running control package\")]), _c('p', [_vm._v(\"In config directory in kuka_control package you need to create config file with this lines, where \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"<your_mnemonic>\")]), _vm._v(\" is saved mnemonic seed:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"{\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"kuka_mnemonic\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"<your_mnemonic>\\\"\")]), _vm._v(\",\\n    \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"node\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"ws://127.0.0.1:9944\\\"\")]), _vm._v(\"\\n}\")])]), _c('p', [_vm._v(\"Now you can run control script:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"source\")]), _vm._v(\" ~/catkin_ws/devel/setup.bash\\nrosrun kuka_controller move_arm_client.py\")])]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=control!../images/kuka-demo/run.png */ \"3FP1\"),\n      \"alt\": \"control\"\n    }\n  })], 1), _c('h2', {\n    attrs: {\n      \"id\": \"sending-transaction\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#sending-transaction\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Sending transaction\")]), _c('p', [_vm._v(\"In \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Parachain portal\")]), _vm._v(\" go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer/Extrinsics\")]), _vm._v(\", change \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"extrinsic\")]), _vm._v(\" to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"launch\")]), _vm._v(\". Chose your \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\" account in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"robot\")]), _vm._v(\" and change \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"param\")]), _vm._v(\" to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Yes\")]), _vm._v(\". The press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Submit Transaction\")])]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=transaction!../images/kuka-demo/launch.png */ \"22E6\"),\n      \"alt\": \"transaction\"\n    }\n  })], 1), _c('p', [_vm._v(\"In the window with kuka_control package you will see:\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=done!../images/kuka-demo/res.png */ \"LVy3\"),\n      \"alt\": \"done\"\n    }\n  })], 1), _c('p', [_vm._v(\"Then go \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer/Chain State\")]), _vm._v(\" on the Robonomics portal, select \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalogItem((AccountId,u64)): RingBufferItem\")]), _vm._v(\" in query and add \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\" datalog with button '+':\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=datalog!../images/kuka-demo/datalog.png */ \"8E/U\"),\n      \"alt\": \"datalog\"\n    }\n  })], 1), _c('p', [_vm._v(\"Now you can find robot's telemetry in IPFS via this link with your hash \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"https://gateway.ipfs.io/ipfs/<hash>\")]), _vm._v(\".\")]), _c('h2', {\n    attrs: {\n      \"id\": \"troubleshooting\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#troubleshooting\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Troubleshooting\")]), _c('p', [_vm._v(\"If \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" doesn't work with the message that it can't find MoveArm.h, try to remove last four lines in CMakeLists.txt in kuka_manipulator_gazebo package:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"include_directories(include ${catkin_INCLUDE_DIRS})\\n\\nadd_executable(move_arm_server src/move_arm_server.cpp)\\ntarget_link_libraries(move_arm_server ${catkin_LIBRARIES})\\nadd_dependencies(move_arm_server beginner_tutorials_gencpp)\\n\")])]), _c('p', [_vm._v(\"Do \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" without these lines, then returm them and do \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" again.\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ko/kuka.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OAzp":
/*!*************************!*\
  !*** ./docs/ko/kuka.md ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kuka.md?vue&type=template&id=2fdd9a46& */ \"WGmM\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _kuka_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kuka.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"wCqK\");\n/* harmony import */ var _kuka_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kuka.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"kBov\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _kuka_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_kuka_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _kuka_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_kuka_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/kuka.md?");

/***/ }),

/***/ "PnjR":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/kuka.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/kuka.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "WGmM":
/*!********************************************************!*\
  !*** ./docs/ko/kuka.md?vue&type=template&id=2fdd9a46& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./kuka.md?vue&type=template&id=2fdd9a46& */ \"9mYB\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_template_id_2fdd9a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/kuka.md?");

/***/ }),

/***/ "Wvc1":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/kuka.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Control Kuka manipulator with robonomics\",\n  \"contributors\": [\"LoSk-p\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/kuka.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "kBov":
/*!**********************************************************************************!*\
  !*** ./docs/ko/kuka.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./kuka.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Wvc1\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/kuka.md?");

/***/ }),

/***/ "wCqK":
/*!*****************************************************************************!*\
  !*** ./docs/ko/kuka.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./kuka.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"PnjR\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_kuka_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/kuka.md?");

/***/ })

}]);