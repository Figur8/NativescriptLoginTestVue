require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home"
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.page[data-v-45ba5ed4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-45ba5ed4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.btn[data-v-45ba5ed4] { background-color: #28ABE2\n}\n.message[data-v-45ba5ed4] {\n    vertical-align: center;\n    text-align: center;\n    font-size: 20;\n    color: #333333;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var Home_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/Home.vue"));
exports.default = {
    goToHome: function () {
        return {
            detailPage: Home_vue_1.default
        };
    }
};


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Welcome to NativeScript-Vue!" } }),
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                attrs: {
                  src:
                    "https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png",
                  loadMode: "async",
                  stretch: "aspectFit"
                }
              }),
              _c(
                "StackLayout",
                { staticClass: "input-field" },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "email",
                      keyboardType: "email",
                      autocorrect: "false",
                      autocapitalizationType: "none"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field" },
                [
                  _c("TextField", {
                    staticClass: "input",
                    attrs: { hint: "Password", secure: "true" }
                  }),
                  _c("Label", [_vm._v(" " + _vm._s(_vm.msg))])
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary",
                attrs: { text: "Log In" },
                on: {
                  tap: function($event) {
                    return _vm.$showModal(_vm.Home)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./lib/fusionAuthClientInstance.ts": "./lib/fusionAuthClientInstance.ts",
	"./main.ts": "./main.ts",
	"./store.ts": "./store.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for aqua variables\r\n * Includes base variables with aqua overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Aqua variable overrides\r\n **/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #aee406; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #aee406;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #00caab;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #aee406;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #aee406;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #c5f924; }\n\n.btn-primary {\n  background-color: #aee406;\n  border-color: #aee406;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #88b205;\n    border-color: #88b205; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #aee406;\n  color: #aee406; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #c5f924; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #aee406; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #212121; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #757575; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #757575;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #aee406;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #aee406; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #fafafa; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #000;\n    background-color: #aee406; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #000; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #aee406; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #aee406;\n  color: #aee406; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45ba5ed4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/fusionAuthClientInstance.ts":
/***/ (function(module, exports) {

// import {FusionAuthClient} from "@fusionauth/typescript-client";
//
// export default new FusionAuthClient("ZfBqkW7YrJrNlhCb5YLflzQnjYRG9afyVrjRssPhHmk", 'http://192.168.217.250:9011');


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var nativescript_vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var App_vue_1 = tslib_1.__importDefault(__webpack_require__("./components/App.vue"));
var nativescript_vue_devtools_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue-devtools/index.js"));
var store_1 = tslib_1.__importDefault(__webpack_require__("./store.ts"));
// import client from "./lib/fusionAuthClientInstance";
// import { LoginRequest } from "@fusionauth/typescript-client";
if (true) {
    nativescript_vue_1.default.use(nativescript_vue_devtools_1.default);
}
// Prints Vue logs when --env.production is *NOT* set while building
nativescript_vue_1.default.config.silent = ("development" === 'production');
new nativescript_vue_1.default({
    store: store_1.default,
    render: function (h) { return h('frame', [h(App_vue_1.default)]); }
}).$start();
var main = /** @class */ (function () {
    //   login = 'ismaelteste';
    //   password = '123456789';
    //   request : LoginRequest = {
    //       "loginId": this.login,
    //       "password": this.password,
    //       "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
    //   };
    function main() {
        // console.info(this.clientLogin());
    }
    return main;
}());
exports.main = main;

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","markingMode":"none"},"main":"main","name":"study","version":"1.0.0"};

/***/ }),

/***/ "./store.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var vue_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));
var vuex_1 = tslib_1.__importDefault(__webpack_require__("../node_modules/vuex/dist/vuex.esm.js"));
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: {},
    mutations: {},
    actions: {}
});


/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWNkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/N2NmMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ5OWYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ZmMyYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MThlOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTgyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzJjMzUiLCJ3ZWJwYWNrOi8vLy4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFEQSxHOzs7Ozs7O0FDTEEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QiwwQkFBMEIsNkJBQTZCLEdBQUcsMEJBQTBCLHNCQUFzQix1QkFBdUIsbUJBQW1CLDZCQUE2QixHQUFHLHlCQUF5Qiw2QkFBNkIsNkJBQTZCLDZC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b0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxn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QUksMEJBQUcsQ0FBQztBQUNEO0lBQ0wsTUFBTSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBUTtDQUNsQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBRVg7QUFDMkI7SUFDM0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQix1QkFBK0I7SUFDL0IsYUFBbUM7QUFDNkI7SUFDaEUsT0FBTztJQUVMO1FBQ0UsV0FBb0M7SUFDdEMsQ0FBQztBQWVGO0FBQUQsQ0FBQztBQTFCWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmpCLDJHQUFzQjtBQUN0QixtR0FBd0I7QUFFeEIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztBQUVkLGtCQUFlLElBQUksY0FBSSxDQUFDLEtBQUssQ0FBQztJQUM1QixLQUFLLEVBQUUsRUFFTjtJQUNELFNBQVMsRUFBRSxFQUVWO0lBQ0QsT0FBTyxFQUFFLEVBRVI7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiSG9tZVwiXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtNDViYTVlZDRdIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYnRuW2RhdGEtdi00NWJhNWVkNF0geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQkUyXFxufVxcbi5tZXNzYWdlW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZS52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ29Ub0hvbWUoKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGV0YWlsUGFnZTogSG9tZVxuICAgICAgfVxuICB9XG5cbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJXZWxjb21lIHRvIE5hdGl2ZVNjcmlwdC1WdWUhXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5jYXJuZWdpZXRlY2hub2xvZ2llcy5jb20vc2l0ZXMvY3QvYXNzZXRzL2ltYWdlL2xvZ28tb2N0b3B1cy5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIlBhc3N3b3JkXCIsIHNlY3VyZTogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLm1zZykpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9nIEluXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2hvd01vZGFsKF92bS5Ib21lKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2UudHNcIjogXCIuL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2UudHNcIixcblx0XCIuL21haW4udHNcIjogXCIuL21haW4udHNcIixcblx0XCIuL3N0b3JlLnRzXCI6IFwiLi9zdG9yZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgYXF1YSB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGFxdWEgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBBcXVhIHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI2Q1MDAwMDsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjOWU5ZTllOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMDAwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjYWVlNDA2O1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICNhZWU0MDY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1ZjkyNDsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgYm9yZGVyLWNvbG9yOiAjYWVlNDA2O1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YjIwNTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODhiMjA1OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjYWVlNDA2O1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1ZjkyNDsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMjEyMTIxOyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM3NTc1NzU7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjNzU3NTc1O1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogI2FlZTQwNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogIzAwMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDViYTVlZDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9pc21hZWxjL0RvY3VtZW50cy9lc3R1ZG9zL25hdGl2ZXNjcmlwdC92dWUvc3R1ZHlMb2dpblZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NWJhNWVkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2lzbWFlbGMvRG9jdW1lbnRzL2VzdHVkb3MvbmF0aXZlc2NyaXB0L3Z1ZS9zdHVkeUxvZ2luVnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiIiwiLy8gaW1wb3J0IHtGdXNpb25BdXRoQ2xpZW50fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgRnVzaW9uQXV0aENsaWVudChcIlpmQnFrVzdZckpyTmxoQ2I1WUxmbHpRbmpZUkc5YWZ5VnJqUnNzUGhIbWtcIiwgJ2h0dHA6Ly8xOTIuMTY4LjIxNy4yNTA6OTAxMScpOyIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJztcblxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vLyBpbXBvcnQgY2xpZW50IGZyb20gXCIuL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbi8vIGltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudFwiO1xuXG5pZiAoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG5cbmV4cG9ydCBjbGFzcyBtYWluIHtcbi8vICAgbG9naW4gPSAnaXNtYWVsdGVzdGUnO1xuLy8gICBwYXNzd29yZCA9ICcxMjM0NTY3ODknO1xuLy8gICByZXF1ZXN0IDogTG9naW5SZXF1ZXN0ID0ge1xuLy8gICAgICAgXCJsb2dpbklkXCI6IHRoaXMubG9naW4sXG4vLyAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4vLyAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuLy8gICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNvbnNvbGUuaW5mbyh0aGlzLmNsaWVudExvZ2luKCkpO1xuICB9XG5cbiAgLy8gY2xpZW50TG9naW4oKSB7XG4gIC8vICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3QpXG4gIC8vICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpO1xuICAvLyB9XG4gIC8vXG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAvLyAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVFcnJvclJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gIC8vICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG59IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RhdGU6IHtcblxuICB9LFxuICBtdXRhdGlvbnM6IHtcblxuICB9LFxuICBhY3Rpb25zOiB7XG5cbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9