webpackHotUpdate("bundle",{

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var vue_property_decorator_1 = __webpack_require__("../node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib_1.__decorate([
        vue_property_decorator_1.Component
    ], AppComponent);
    return AppComponent;
}());
exports.default = AppComponent;


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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVCQSwySEFBOEQ7QUFHOUQ7SUFBQTtJQUNBLENBQUM7SUFEb0IsWUFBWTtRQURoQyxrQ0FBUztPQUNXLFlBQVk7SUFDakMsbUJBQUM7Q0FEZ0M7a0JBQVosWUFBWTs7Ozs7Ozs7Ozs7QUMxQmpDLHNGQUFtQztBQUNuQyw2RUFBdUM7QUFFdkMsU0FBb0Q7QUFDeEI7QUFFNUIsUUFBdUQ7QUFDdkQsMEdBQWdFO0FBRWhFLElBQUksT0FBTyxDQUFtQjtJQUM1QixRQUFvQjtDQUNyQjtBQUVELHlHQUFvRTtBQUNwRSwwQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUF5QjtBQUc5QyxJQUFJLDBCQUFHLENBQUM7QUFDRDtJQUNMLE1BQU0sRUFBRSxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQVE7Q0FDbEMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUVYO0FBQzJCO0lBQzNCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsdUJBQStCO0lBQy9CLGFBQW1DO0FBQzZCO0lBQ2hFLE9BQU87SUFFTDtRQUNFLFdBQW9DO0lBQ3RDLENBQUM7QUFlRjtBQUFELENBQUM7QUExQlksb0JBQUkiLCJmaWxlIjoiYnVuZGxlLjUyMGU1MTIzMjY3NmNkNmZmNjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5AQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb21wb25lbnRcbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJztcblxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vLyBpbXBvcnQgY2xpZW50IGZyb20gXCIuL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbi8vIGltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudFwiO1xuXG5pZiAoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5cbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXG5cblxubmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChBcHApXSlcbn0pLiRzdGFydCgpXG5cbmV4cG9ydCBjbGFzcyBtYWluIHtcbi8vICAgbG9naW4gPSAnaXNtYWVsdGVzdGUnO1xuLy8gICBwYXNzd29yZCA9ICcxMjM0NTY3ODknO1xuLy8gICByZXF1ZXN0IDogTG9naW5SZXF1ZXN0ID0ge1xuLy8gICAgICAgXCJsb2dpbklkXCI6IHRoaXMubG9naW4sXG4vLyAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4vLyAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuLy8gICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNvbnNvbGUuaW5mbyh0aGlzLmNsaWVudExvZ2luKCkpO1xuICB9XG5cbiAgLy8gY2xpZW50TG9naW4oKSB7XG4gIC8vICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3QpXG4gIC8vICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpO1xuICAvLyB9XG4gIC8vXG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAvLyAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVFcnJvclJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gIC8vICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==