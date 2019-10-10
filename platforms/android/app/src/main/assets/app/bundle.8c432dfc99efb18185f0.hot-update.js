webpackHotUpdate("bundle",{

/***/ "../node_modules/ts-loader/index.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=ts&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../node_modules/tslib/tslib.es6.js");
var vue_property_decorator_1 = __webpack_require__("../node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var AppComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent = tslib_1.__decorate([
        vue_property_decorator_1.Component
    ], AppComponent);
    return AppComponent;
}(vue_property_decorator_1.Vue));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MDVmNCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVCQSwySEFBOEQ7QUFHOUQ7SUFBMEMsd0NBQUc7SUFBN0M7O0lBRUEsQ0FBQztJQUZvQixZQUFZO1FBRGhDLGtDQUFTO09BQ1csWUFBWSxDQUVoQztJQUFELG1CQUFDO0NBQUEsQ0FGeUMsNEJBQUcsR0FFNUM7a0JBRm9CLFlBQVk7Ozs7Ozs7Ozs7O0FDMUJqQyxzRkFBbUM7QUFDbkMsNkVBQXVDO0FBRXZDLFNBQW9EO0FBQ3hCO0FBRTVCLFFBQXVEO0FBQ3ZELDBHQUFnRTtBQUVoRSxJQUFJLE9BQU8sQ0FBbUI7SUFDNUIsUUFBb0I7Q0FDckI7QUFFRCx5R0FBb0U7QUFDcEUsMEJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBeUI7QUFHOUMsSUFBSSwwQkFBRyxDQUFDO0FBQ0Q7SUFDTCxNQUFNLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFRO0NBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFFWDtBQUMyQjtJQUMzQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHVCQUErQjtJQUMvQixhQUFtQztBQUM2QjtJQUNoRSxPQUFPO0lBRUw7UUFDRSxXQUFvQztJQUN0QyxDQUFDO0FBZUY7QUFBRCxDQUFDO0FBMUJZLG9CQUFJIiwiZmlsZSI6ImJ1bmRsZS44YzQzMmRmYzk5ZWZiMTgxODVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcblxufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnO1xuXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8vIGltcG9ydCBjbGllbnQgZnJvbSBcIi4vbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZVwiO1xuLy8gaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSBcIkBmdXNpb25hdXRoL3R5cGVzY3JpcHQtY2xpZW50XCI7XG5cbmlmIChUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcblxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEFwcCldKVxufSkuJHN0YXJ0KClcblxuZXhwb3J0IGNsYXNzIG1haW4ge1xuLy8gICBsb2dpbiA9ICdpc21hZWx0ZXN0ZSc7XG4vLyAgIHBhc3N3b3JkID0gJzEyMzQ1Njc4OSc7XG4vLyAgIHJlcXVlc3QgOiBMb2dpblJlcXVlc3QgPSB7XG4vLyAgICAgICBcImxvZ2luSWRcIjogdGhpcy5sb2dpbixcbi8vICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZCxcbi8vICAgICAgIFwiYXBwbGljYXRpb25JZFwiOiBcImZjYTQ4MTRmLTY0NWMtNGMzZi1hOWIwLTJiMmNhN2EyZTgzNVwiXG4vLyAgIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gY29uc29sZS5pbmZvKHRoaXMuY2xpZW50TG9naW4oKSk7XG4gIH1cblxuICAvLyBjbGllbnRMb2dpbigpIHtcbiAgLy8gICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdClcbiAgLy8gICAgIC50aGVuKHRoaXMuaGFuZGxlUmVzcG9uc2UsIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy9cbiAgLy8gcHVibGljIGhhbmRsZVJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gIC8vICAgY29uc29sZS5pbmZvKEpTT04uc3RyaW5naWZ5KGNsaWVudFJlc3BvbnNlLCBudWxsLCAyKSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHVibGljIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgLy8gICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGNsaWVudFJlc3BvbnNlLCBudWxsLCAyKSk7XG4gIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9