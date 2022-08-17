(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--zigbee-2-mqtt-md"],{

/***/ "7vG8":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/zigbee2-mqtt.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8Lao":
/*!******************************************************************************************!*\
  !*** ./docs/ja/zigbee2-mqtt.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./zigbee2-mqtt.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"YFAk\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?");

/***/ }),

/***/ "MO2M":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"564eb8b5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/zigbee2-mqtt.md?vue&type=template&id=148d409e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"After installing \"),_c('a',{attrs:{\"href\":\"/docs/mqtt-broker/\"}},[_vm._v(\"MQTT broker\")]),_vm._v(\" to the Raspberry Pi, we can now set up Zigbee2MQTT stick.\")]),_c('p',[_vm._v(\"If you have the JetHome USB JetStick Z2 it will already have the necessary firmware so you don't need to flash it. However, if you have another adapter the first thing you need to flash it with zigbee2MQTT software. You can find instructions for your device \"),_c('a',{attrs:{\"href\":\"https://www.zigbee2mqtt.io/information/supported_adapters.html\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Necessary ziqbee2mqtt software has already been installed on the  Raspberry PI on previous steps. \")]),_c('p',[_vm._v(\"First, Connect the adapter to Raspberry PI. Now we need to find the location of our stick. For this type in the next command.:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"$ ls -l /dev/serial/by-id\")])]),_c('p',[_vm._v(\"Output should look like:\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/devices.jpg\",\"alt\":\"connected devices\"}}),_c('p',[_vm._v(\"In example Stick connection place is - \"),_c('code',{pre:true},[_vm._v(\"ttyUSB0\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Then you need to configure it. Before starting Zigbee2MQTT we need to edit the configuration.yaml file. This file contains the configuration which will be used by Zigbee2MQTT.:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"nano /opt/zigbee2mqtt/data/configuration.yaml\")])]),_c('p',[_vm._v(\"Basic configuration needs a few adjustments. Change the following statements:\")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v(\"homeassistant:\")]),_vm._v(\" to \"),_c('code',{pre:true},[_vm._v(\"true\")]),_vm._v(\". It will automatically connect sensors to Home Assistant.\")]),_c('li',[_vm._v(\"uncomment \"),_c('code',{pre:true},[_vm._v(\"user\")]),_vm._v(\" and \"),_c('code',{pre:true},[_vm._v(\"password\")]),_vm._v(\"statements under \"),_c('code',{pre:true},[_vm._v(\"mqtt\")]),_vm._v(\" and fill them with your username and password from MQTT Broker.(You created them it in the previous article.)\")]),_c('li',[_vm._v(\"change port in \"),_c('code',{pre:true},[_vm._v(\"serial\")]),_vm._v(\"-> \"),_c('code',{pre:true},[_vm._v(\"port\")]),_vm._v(\" to \"),_c('code',{pre:true},[_vm._v(\"/dev/stick_connection_place>\")]),_vm._v(\". In example \"),_c('code',{pre:true},[_vm._v(\"/dev/ttyUSB0\")]),_vm._v(\".\")])]),_c('p',[_vm._v(\"Adjusted configuration file should look like:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"#\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" Home Assistant integration (MQTT discovery)\")]),_vm._v(\"\\nhomeassistant: true\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"\\n#\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" allow new devices to join\")]),_vm._v(\"\\npermit_join: true\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"\\n#\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" MQTT settings\")]),_vm._v(\"\\nmqtt:\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"  #\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" MQTT base topic \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"for\")]),_vm._v(\" zigbee2mqtt MQTT messages\")]),_vm._v(\"\\n  base_topic: zigbee2mqtt\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"  #\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" MQTT server URL\")]),_vm._v(\"\\n  server: 'mqtt://localhost'\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"  #\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" MQTT server authentication, uncomment \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"if\")]),_vm._v(\" required:\")]),_vm._v(\"\\n  user: <YOUR_USERNAME>\\n  password: <YOUR_PASSWORD>\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"\\n#\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" Serial settings\")]),_vm._v(\"\\nserial:\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-meta\"}},[_vm._v(\"  #\")]),_c('span',{pre:true,attrs:{\"class\":\"bash\"}},[_vm._v(\" Location of CC2531 USB sniffer\")]),_vm._v(\"\\n  port: /dev/<YOUR_PORT> # /dev/ttyUSB0 for example\")])]),_c('p',[_vm._v(\"Now you can run zigbee2mqtt:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"cd\")]),_vm._v(\" /opt/zigbee2mqtt\\nnpm start\")])]),_c('p',[_vm._v(\"If started successfully, you will see something like:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"Building Zigbee2MQTT... (initial build), finished\\nZigbee2MQTT:info  2022-07-29 14:36:36: Logging to console and directory: '/opt/zigbee2mqtt/data/log/2022-07-29.14-36-36' filename: log.txt\\nZigbee2MQTT:info  2022-07-29 14:36:36: Starting Zigbee2MQTT version 1.26.0 (commit #bc4ffc0)\\nZigbee2MQTT:info  2022-07-29 14:36:36: Starting zigbee-herdsman (0.14.40)\\nZigbee2MQTT:info  2022-07-29 14:36:49: zigbee-herdsman started (resumed)\\nZigbee2MQTT:info  2022-07-29 14:36:49: Coordinator firmware version: '{\\\"meta\\\":{\\\"maintrel\\\":1,\\\"majorrel\\\":2,\\\"minorrel\\\":7,\\\"product\\\":1,\\\"revision\\\":20211219,\\\"transportrev\\\":2},\\\"type\\\":\\\"zStack3x0\\\"}'\\nZigbee2MQTT:info  2022-07-29 14:36:49: Currently 0 devices are joined:\\nZigbee2MQTT:warn  2022-07-29 14:36:49: `permit_join` set to  `true` in configuration.yaml.\\nZigbee2MQTT:warn  2022-07-29 14:36:49: Allowing new devices to join.\\nZigbee2MQTT:warn  2022-07-29 14:36:49: Set `permit_join` to `false` once you joined all devices.\\nZigbee2MQTT:info  2022-07-29 14:36:49: Zigbee: allowing new devices to join.\\nZigbee2MQTT:info  2022-07-29 14:36:49: Connecting to MQTT server at mqtt://localhost\\nZigbee2MQTT:info  2022-07-29 14:36:49: Connected to MQTT server\\nZigbee2MQTT:info  2022-07-29 14:36:49: MQTT publish: topic 'zigbee2mqtt/bridge/state', payload 'online'\\nZigbee2MQTT:info  2022-07-29 14:36:49: MQTT publish: topic 'zigbee2mqtt/bridge/config', payload '{\\\"commit\\\":\\\"bc4ffc0\\\",\\\"coordinator\\\":{\\\"meta\\\":{\\\"maintrel\\\":1,\\\"majorrel\\\":2,\\\"minorrel\\\":7,\\\"product\\\":1,\\\"revision\\\":20211219,\\\"transportrev\\\":2},\\\"type\\\":\\\"zStack3x0\\\"},\\\"log_level\\\":\\\"info\\\",\\\"network\\\":{\\\"channel\\\":11,\\\"extendedPanID\\\":\\\"0x00124b0020cd133d\\\",\\\"panID\\\":6754},\\\"permit_join\\\":true,\\\"version\\\":\\\"1.26.0\\\"}'\\nZigbee2MQTT:info  2022-07-29 14:36:49: MQTT publish: topic 'zigbee2mqtt/bridge/state', payload 'online\")])]),_c('h2',{attrs:{\"id\":\"pairing-device\"}},[_c('a',{attrs:{\"href\":\"#pairing-device\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Pairing device\")]),_c('p',[_vm._v(\"The most common way to switch a device to connect mode is to hold its power button. For lamps one may switch them on|off for 5 times. The zigbee2MQTT should be launched. When a device connects, you should see a message like:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired\\n\")])]),_c('p',[_vm._v(\"And a lot of additional data about this sensor. Remember ID of the sensor - in this example \"),_c('code',{pre:true},[_vm._v(\"0x00158d0003eeeacf\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Now you should see this sensor with ID in your Home Assistant WebUI. Go to \"),_c('code',{pre:true},[_vm._v(\"settings\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Devices & Services\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Devices\")]),_vm._v(\":\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/mqtt-devices.jpg\"}}),_c('blockquote',[_c('p',[_vm._v(\"After adding all the sensors, you can stop program and open configuration file again to set and set \"),_c('code',{pre:true},[_vm._v(\"permit_join: false\")]),_vm._v(\", if you don’t want to add any more devices.\")])]),_c('p',[_vm._v(\"Then lets make a service. Create the file:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo nano /etc/systemd/system/zigbee2mqtt.service\")])]),_c('p',[_vm._v(\"Add the following to this file:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[Unit]\\nDescription=zigbee2mqtt\\nAfter=network.target\\n\\n[Service]\\nExecStart=/usr/bin/npm start\\nWorkingDirectory=/opt/zigbee2mqtt\\nStandardOutput=inherit\\nStandardError=inherit\\nRestart=always\\nUser=ubuntu\\n\\n[Install]\\nWantedBy=multi-user.target\\n\")])]),_c('p',[_vm._v(\"Verify that the configuration works:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo systemctl start zigbee2mqtt\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"systemctl status zigbee2mqtt.service\")])]),_c('p',[_vm._v(\"Output should look like:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service\\n● zigbee2mqtt.service - zigbee2mqtt\\n   Loaded: loaded (/etc/systemd/system/zigbee2mqtt.service; disabled; vendor preset: enabled)\\n   Active: active (running) since Thu 2018-06-07 20:27:22 BST; 3s ago\\n Main PID: 665 (npm)\\n   CGroup: /system.slice/zigbee2mqtt.service\\n           ├─665 npm\\n           ├─678 sh -c node index.js\\n           └─679 node index.js\\n\\nJun 07 20:27:22 raspberry systemd[1]: Started zigbee2mqtt.\\nJun 07 20:27:23 raspberry npm[665]: > zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt\\nJun 07 20:27:23 raspberry npm[665]: > node index.js\\nJun 07 20:27:24 raspberry npm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'\\nJun 07 20:27:25 raspberry npm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)\\n\")])]),_c('p',[_vm._v(\"Now that everything works, we want systemctl to start Zigbee2MQTT automatically on boot, this can be done by executing:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo systemctl \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"enable\")]),_vm._v(\" zigbee2mqtt.service\")])]),_c('p',[_vm._v(\"That's all. Go to the next article \"),_c('a',{attrs:{\"href\":\"/docs/iot-sub-setup/\"}},[_vm._v(\"\\\"IOT subscription setup\\\"\")]),_vm._v(\" to create Robonomics Parachain accounts and activate subscription.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22564eb8b5-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UOmR":
/*!*************************************************************************************!*\
  !*** ./docs/ja/zigbee2-mqtt.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./zigbee2-mqtt.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"7vG8\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "YFAk":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/zigbee2-mqtt.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Zigbee2MQTT setup\",\n  \"contributors\": [\"LoSk-p\", \"dergudzon\", \"Leemo94\"],\n  \"translated\": false,\n  \"tools\": [\"Zigbee2MQTT 1.26.0\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "ceOB":
/*!****************************************************************!*\
  !*** ./docs/ja/zigbee2-mqtt.md?vue&type=template&id=148d409e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"564eb8b5-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./zigbee2-mqtt.md?vue&type=template&id=148d409e& */ \"MO2M\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?");

/***/ }),

/***/ "rceH":
/*!*********************************!*\
  !*** ./docs/ja/zigbee2-mqtt.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zigbee2-mqtt.md?vue&type=template&id=148d409e& */ \"ceOB\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _zigbee2_mqtt_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zigbee2-mqtt.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"UOmR\");\n/* harmony import */ var _zigbee2_mqtt_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zigbee2-mqtt.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"8Lao\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _zigbee2_mqtt_md_vue_type_template_id_148d409e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _zigbee2_mqtt_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_zigbee2_mqtt_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _zigbee2_mqtt_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_zigbee2_mqtt_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/zigbee2-mqtt.md?");

/***/ })

}]);