webpackHotUpdate("vendor",{

/***/ "../node_modules/vue-class-component/dist/vue-class-component.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.3.2
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var Vue = _interopDefault(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"));

var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata;

function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;

function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}

function mixins() {
  var Ctors = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    Ctors[_i] = arguments[_i];
  }

  return Vue.extend({
    mixins: Ctors
  });
}

function isPrimitive(value) {
  var type = typeof value;
  return value == null || type !== 'object' && type !== 'function';
}

function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this; // proxy to actual vm


    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (true) {
    if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');
    }
  }

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured' // 2.5
];

function componentFactory(Component, options) {
  if (options === void 0) {
    options = {};
  }

  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            var _a;

            return _a = {}, _a[key] = descriptor.value, _a;
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}

var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // `prototype` should not be overwritten
    if (key === 'prototype') {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if ( true && reservedPropertyNames.indexOf(key) >= 0) {
      warn("Static property name '" + key + "' declared on class '" + Original.name + "' " + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');
    }

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, keys);
};

exports.default = Component;
exports.createDecorator = createDecorator;
exports.mixins = mixins;

/***/ }),

/***/ "../node_modules/vue-property-decorator/lib/vue-property-decorator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provide", function() { return Provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emit", function() { return Emit; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vue-class-component/dist/vue-class-component.common.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_class_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["mixins"]; });

/** vue-property-decorator verson 7.3.0 MIT LICENSE copyright 2018 kaorun343 */





/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */

function Inject(options) {
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
    if (typeof componentOptions.inject === 'undefined') {
      componentOptions.inject = {};
    }

    if (!Array.isArray(componentOptions.inject)) {
      componentOptions.inject[key] = options || key;
    }
  });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */

function Provide(key) {
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
    var provide = componentOptions.provide;

    if (typeof provide !== 'function' || !provide.managed) {
      var original_1 = componentOptions.provide;

      provide = componentOptions.provide = function () {
        var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);

        for (var i in provide.managed) {
          rv[provide.managed[i]] = this[i];
        }

        return rv;
      };

      provide.managed = {};
    }

    provide.managed[k] = key || k;
  });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */

function Model(event, options) {
  if (options === void 0) {
    options = {};
  }

  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
    (componentOptions.props || (componentOptions.props = {}))[k] = options;
    componentOptions.model = {
      prop: k,
      event: event || k
    };
  });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */

function Prop(options) {
  if (options === void 0) {
    options = {};
  }

  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
    (componentOptions.props || (componentOptions.props = {}))[k] = options;
  });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */

function Watch(path, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.deep,
      deep = _a === void 0 ? false : _a,
      _b = options.immediate,
      immediate = _b === void 0 ? false : _b;
  return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, handler) {
    if (typeof componentOptions.watch !== 'object') {
      componentOptions.watch = Object.create(null);
    }

    var watch = componentOptions.watch;

    if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
      watch[path] = [watch[path]];
    } else if (typeof watch[path] === 'undefined') {
      watch[path] = [];
    }

    watch[path].push({
      handler: handler,
      deep: deep,
      immediate: immediate
    });
  });
} // Code copied from Vue/src/shared/util.js

var hyphenateRE = /\B([A-Z])/g;

var hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
};
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */


function Emit(event) {
  return function (_target, key, descriptor) {
    key = hyphenate(key);
    var original = descriptor.value;

    descriptor.value = function emitter() {
      var _this = this;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var emit = function emit(returnValue) {
        if (returnValue !== undefined) args.unshift(returnValue);

        _this.$emit.apply(_this, [event || key].concat(args));
      };

      var returnValue = original.apply(this, args);

      if (isPromise(returnValue)) {
        returnValue.then(function (returnValue) {
          emit(returnValue);
        });
      } else {
        emit(returnValue);
      }
    };
  };
}

function isPromise(obj) {
  return obj instanceof Promise || obj && typeof obj.then === 'function';
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1jbGFzcy1jb21wb25lbnQvZGlzdC92dWUtY2xhc3MtY29tcG9uZW50LmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3IvbGliL3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfaW50ZXJvcERlZmF1bHQiLCJleCIsIlZ1ZSIsInJlcXVpcmUiLCJyZWZsZWN0aW9uSXNTdXBwb3J0ZWQiLCJSZWZsZWN0IiwiZGVmaW5lTWV0YWRhdGEiLCJjb3B5UmVmbGVjdGlvbk1ldGFkYXRhIiwidG8iLCJmcm9tIiwiZm9yd2FyZE1ldGFkYXRhIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInByb3RvdHlwZSIsImZvckVhY2giLCJrZXkiLCJwcm9wZXJ0eUtleSIsIm1ldGFLZXlzIiwiZ2V0T3duTWV0YWRhdGFLZXlzIiwibWV0YUtleSIsIm1ldGFkYXRhIiwiZ2V0T3duTWV0YWRhdGEiLCJmYWtlQXJyYXkiLCJfX3Byb3RvX18iLCJoYXNQcm90byIsIkFycmF5IiwiY3JlYXRlRGVjb3JhdG9yIiwiZmFjdG9yeSIsInRhcmdldCIsImluZGV4IiwiQ3RvciIsImNvbnN0cnVjdG9yIiwiX19kZWNvcmF0b3JzX18iLCJ1bmRlZmluZWQiLCJwdXNoIiwib3B0aW9ucyIsIm1peGlucyIsIkN0b3JzIiwiX2kiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJleHRlbmQiLCJpc1ByaW1pdGl2ZSIsInR5cGUiLCJ3YXJuIiwibWVzc2FnZSIsImNvbnNvbGUiLCJjb2xsZWN0RGF0YUZyb21Db25zdHJ1Y3RvciIsInZtIiwiQ29tcG9uZW50Iiwib3JpZ2luYWxJbml0IiwiX2luaXQiLCJfdGhpcyIsImtleXMiLCIkb3B0aW9ucyIsInByb3BzIiwiaGFzT3duUHJvcGVydHkiLCJjaGFyQXQiLCJnZXQiLCJzZXQiLCJjb25maWd1cmFibGUiLCJkYXRhIiwicGxhaW5EYXRhIiwicHJvY2VzcyIsIiRpbnRlcm5hbEhvb2tzIiwiY29tcG9uZW50RmFjdG9yeSIsIm5hbWUiLCJfY29tcG9uZW50VGFnIiwicHJvdG8iLCJpbmRleE9mIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ldGhvZHMiLCJfYSIsImNvbXB1dGVkIiwiZGVjb3JhdG9ycyIsImZuIiwic3VwZXJQcm90byIsImdldFByb3RvdHlwZU9mIiwiU3VwZXIiLCJFeHRlbmRlZCIsImZvcndhcmRTdGF0aWNNZW1iZXJzIiwicmVzZXJ2ZWRQcm9wZXJ0eU5hbWVzIiwiT3JpZ2luYWwiLCJleHRlbmRlZERlc2NyaXB0b3IiLCJzdXBlckRlc2NyaXB0b3IiLCJyZWdpc3Rlckhvb2tzIiwiYXBwbHkiLCJkZWZhdWx0IiwiSW5qZWN0IiwiY29tcG9uZW50T3B0aW9ucyIsImluamVjdCIsImlzQXJyYXkiLCJQcm92aWRlIiwiayIsInByb3ZpZGUiLCJtYW5hZ2VkIiwib3JpZ2luYWxfMSIsInJ2IiwiY3JlYXRlIiwiY2FsbCIsImkiLCJNb2RlbCIsImV2ZW50IiwibW9kZWwiLCJwcm9wIiwiUHJvcCIsIldhdGNoIiwicGF0aCIsImRlZXAiLCJfYiIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJ3YXRjaCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiRW1pdCIsIl90YXJnZXQiLCJvcmlnaW5hbCIsImVtaXR0ZXIiLCJhcmdzIiwiZW1pdCIsInJldHVyblZhbHVlIiwidW5zaGlmdCIsIiRlbWl0IiwiY29uY2F0IiwiaXNQcm9taXNlIiwidGhlbiIsIm9iaiIsIlByb21pc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7OztBQUthOztBQUViQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUss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Q0FBQ0MsV0FBRCxDQUFKO0FBQ0gsU0FGRDtBQUdILE9BSkQsTUFLSztBQUNERCxZQUFJLENBQUNDLFdBQUQsQ0FBSjtBQUNIO0FBQ0osS0FwQkQ7QUFxQkgsR0F4QkQ7QUF5Qkg7O0FBQ0QsU0FBU0ksU0FBVCxDQUFtQkUsR0FBbkIsRUFBd0I7QUFDcEIsU0FBT0EsR0FBRyxZQUFZQyxPQUFmLElBQTJCRCxHQUFHLElBQUksT0FBT0EsR0FBRyxDQUFDRCxJQUFYLEtBQW9CLFVBQTdEO0FBQ0gsQyIsImZpbGUiOiJ2ZW5kb3IuNTIwZTUxMjMyNjc2Y2Q2ZmY2MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICAqIHZ1ZS1jbGFzcy1jb21wb25lbnQgdjYuMy4yXG4gICogKGMpIDIwMTUtcHJlc2VudCBFdmFuIFlvdVxuICAqIEBsaWNlbnNlIE1JVFxuICAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFZ1ZSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd2dWUnKSk7XG5cbnZhciByZWZsZWN0aW9uSXNTdXBwb3J0ZWQgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YTtcbmZ1bmN0aW9uIGNvcHlSZWZsZWN0aW9uTWV0YWRhdGEodG8sIGZyb20pIHtcbiAgICBmb3J3YXJkTWV0YWRhdGEodG8sIGZyb20pO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZyb20ucHJvdG90eXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZm9yd2FyZE1ldGFkYXRhKHRvLnByb3RvdHlwZSwgZnJvbS5wcm90b3R5cGUsIGtleSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZnJvbSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGZvcndhcmRNZXRhZGF0YSh0bywgZnJvbSwga2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZvcndhcmRNZXRhZGF0YSh0bywgZnJvbSwgcHJvcGVydHlLZXkpIHtcbiAgICB2YXIgbWV0YUtleXMgPSBwcm9wZXJ0eUtleVxuICAgICAgICA/IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKGZyb20sIHByb3BlcnR5S2V5KVxuICAgICAgICA6IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKGZyb20pO1xuICAgIG1ldGFLZXlzLmZvckVhY2goZnVuY3Rpb24gKG1ldGFLZXkpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gcHJvcGVydHlLZXlcbiAgICAgICAgICAgID8gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShtZXRhS2V5LCBmcm9tLCBwcm9wZXJ0eUtleSlcbiAgICAgICAgICAgIDogUmVmbGVjdC5nZXRPd25NZXRhZGF0YShtZXRhS2V5LCBmcm9tKTtcbiAgICAgICAgaWYgKHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFLZXksIG1ldGFkYXRhLCB0bywgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShtZXRhS2V5LCBtZXRhZGF0YSwgdG8pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBmYWtlQXJyYXkgPSB7IF9fcHJvdG9fXzogW10gfTtcbnZhciBoYXNQcm90byA9IGZha2VBcnJheSBpbnN0YW5jZW9mIEFycmF5O1xuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yKGZhY3RvcnkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBpbmRleCkge1xuICAgICAgICB2YXIgQ3RvciA9IHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gdGFyZ2V0XG4gICAgICAgICAgICA6IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCFDdG9yLl9fZGVjb3JhdG9yc19fKSB7XG4gICAgICAgICAgICBDdG9yLl9fZGVjb3JhdG9yc19fID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIEN0b3IuX19kZWNvcmF0b3JzX18ucHVzaChmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gZmFjdG9yeShvcHRpb25zLCBrZXksIGluZGV4KTsgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1peGlucygpIHtcbiAgICB2YXIgQ3RvcnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBDdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG1peGluczogQ3RvcnMgfSk7XG59XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8ICh0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbdnVlLWNsYXNzLWNvbXBvbmVudF0gJyArIG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdERhdGFGcm9tQ29uc3RydWN0b3Iodm0sIENvbXBvbmVudCkge1xuICAgIC8vIG92ZXJyaWRlIF9pbml0IHRvIHByZXZlbnQgdG8gaW5pdCBhcyBWdWUgaW5zdGFuY2VcbiAgICB2YXIgb3JpZ2luYWxJbml0ID0gQ29tcG9uZW50LnByb3RvdHlwZS5faW5pdDtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBwcm94eSB0byBhY3R1YWwgdm1cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2bSk7XG4gICAgICAgIC8vIDIuMi4wIGNvbXBhdCAocHJvcHMgYXJlIG5vIGxvbmdlciBleHBvc2VkIGFzIHNlbGYgcHJvcGVydGllcylcbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdCgwKSAhPT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF90aGlzLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2bVtrZXldOyB9LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB2bVtrZXldID0gdmFsdWU7IH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIHNob3VsZCBiZSBhY3F1aXJlZCBjbGFzcyBwcm9wZXJ0eSB2YWx1ZXNcbiAgICB2YXIgZGF0YSA9IG5ldyBDb21wb25lbnQoKTtcbiAgICAvLyByZXN0b3JlIG9yaWdpbmFsIF9pbml0IHRvIGF2b2lkIG1lbW9yeSBsZWFrICgjMjA5KVxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuX2luaXQgPSBvcmlnaW5hbEluaXQ7XG4gICAgLy8gY3JlYXRlIHBsYWluIGRhdGEgb2JqZWN0XG4gICAgdmFyIHBsYWluRGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBsYWluRGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCEoQ29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFZ1ZSkgJiYgT2JqZWN0LmtleXMocGxhaW5EYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3YXJuKCdDb21wb25lbnQgY2xhc3MgbXVzdCBpbmhlcml0IFZ1ZSBvciBpdHMgZGVzY2VuZGFudCBjbGFzcyAnICtcbiAgICAgICAgICAgICAgICAnd2hlbiBjbGFzcyBwcm9wZXJ0eSBpcyB1c2VkLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwbGFpbkRhdGE7XG59XG5cbnZhciAkaW50ZXJuYWxIb29rcyA9IFtcbiAgICAnZGF0YScsXG4gICAgJ2JlZm9yZUNyZWF0ZScsXG4gICAgJ2NyZWF0ZWQnLFxuICAgICdiZWZvcmVNb3VudCcsXG4gICAgJ21vdW50ZWQnLFxuICAgICdiZWZvcmVEZXN0cm95JyxcbiAgICAnZGVzdHJveWVkJyxcbiAgICAnYmVmb3JlVXBkYXRlJyxcbiAgICAndXBkYXRlZCcsXG4gICAgJ2FjdGl2YXRlZCcsXG4gICAgJ2RlYWN0aXZhdGVkJyxcbiAgICAncmVuZGVyJyxcbiAgICAnZXJyb3JDYXB0dXJlZCcgLy8gMi41XG5dO1xuZnVuY3Rpb24gY29tcG9uZW50RmFjdG9yeShDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBDb21wb25lbnQuX2NvbXBvbmVudFRhZyB8fCBDb21wb25lbnQubmFtZTtcbiAgICAvLyBwcm90b3R5cGUgcHJvcHMuXG4gICAgdmFyIHByb3RvID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBob29rc1xuICAgICAgICBpZiAoJGludGVybmFsSG9va3MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IHByb3RvW2tleV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5tZXRob2RzIHx8IChvcHRpb25zLm1ldGhvZHMgPSB7fSkpW2tleV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdHlwZXNjcmlwdCBkZWNvcmF0ZWQgZGF0YVxuICAgICAgICAgICAgICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2EgPSB7fSwgX2Fba2V5XSA9IGRlc2NyaXB0b3IudmFsdWUsIF9hO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAgICAgICAgICAgIChvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pKVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGdldDogZGVzY3JpcHRvci5nZXQsXG4gICAgICAgICAgICAgICAgc2V0OiBkZXNjcmlwdG9yLnNldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2goe1xuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdERhdGFGcm9tQ29uc3RydWN0b3IodGhpcywgQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGRlY29yYXRlIG9wdGlvbnNcbiAgICB2YXIgZGVjb3JhdG9ycyA9IENvbXBvbmVudC5fX2RlY29yYXRvcnNfXztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICBkZWNvcmF0b3JzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbihvcHRpb25zKTsgfSk7XG4gICAgICAgIGRlbGV0ZSBDb21wb25lbnQuX19kZWNvcmF0b3JzX187XG4gICAgfVxuICAgIC8vIGZpbmQgc3VwZXJcbiAgICB2YXIgc3VwZXJQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICB2YXIgU3VwZXIgPSBzdXBlclByb3RvIGluc3RhbmNlb2YgVnVlXG4gICAgICAgID8gc3VwZXJQcm90by5jb25zdHJ1Y3RvclxuICAgICAgICA6IFZ1ZTtcbiAgICB2YXIgRXh0ZW5kZWQgPSBTdXBlci5leHRlbmQob3B0aW9ucyk7XG4gICAgZm9yd2FyZFN0YXRpY01lbWJlcnMoRXh0ZW5kZWQsIENvbXBvbmVudCwgU3VwZXIpO1xuICAgIGlmIChyZWZsZWN0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgY29weVJlZmxlY3Rpb25NZXRhZGF0YShFeHRlbmRlZCwgQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIEV4dGVuZGVkO1xufVxudmFyIHJlc2VydmVkUHJvcGVydHlOYW1lcyA9IFtcbiAgICAvLyBVbmlxdWUgaWRcbiAgICAnY2lkJyxcbiAgICAvLyBTdXBlciBWdWUgY29uc3RydWN0b3JcbiAgICAnc3VwZXInLFxuICAgIC8vIENvbXBvbmVudCBvcHRpb25zIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBjb21wb25lbnRcbiAgICAnb3B0aW9ucycsXG4gICAgJ3N1cGVyT3B0aW9ucycsXG4gICAgJ2V4dGVuZE9wdGlvbnMnLFxuICAgICdzZWFsZWRPcHRpb25zJyxcbiAgICAvLyBQcml2YXRlIGFzc2V0c1xuICAgICdjb21wb25lbnQnLFxuICAgICdkaXJlY3RpdmUnLFxuICAgICdmaWx0ZXInXG5dO1xuZnVuY3Rpb24gZm9yd2FyZFN0YXRpY01lbWJlcnMoRXh0ZW5kZWQsIE9yaWdpbmFsLCBTdXBlcikge1xuICAgIC8vIFdlIGhhdmUgdG8gdXNlIGdldE93blByb3BlcnR5TmFtZXMgc2luY2UgQmFiZWwgcmVnaXN0ZXJzIG1ldGhvZHMgYXMgbm9uLWVudW1lcmFibGVcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPcmlnaW5hbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8vIGBwcm90b3R5cGVgIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb21lIGJyb3dzZXJzIGRvZXMgbm90IGFsbG93IHJlY29uZmlndXJlIGJ1aWx0LWluIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGV4dGVuZGVkRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXh0ZW5kZWQsIGtleSk7XG4gICAgICAgIGlmIChleHRlbmRlZERlc2NyaXB0b3IgJiYgIWV4dGVuZGVkRGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT3JpZ2luYWwsIGtleSk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGFnZW50IGRvZXMgbm90IHN1cHBvcnQgYF9fcHJvdG9fX2Agb3IgaXRzIGZhbWlseSAoSUUgPD0gMTApLFxuICAgICAgICAvLyB0aGUgc3ViIGNsYXNzIHByb3BlcnRpZXMgbWF5IGJlIGluaGVyaXRlZCBwcm9wZXJ0aWVzIGZyb20gdGhlIHN1cGVyIGNsYXNzIGluIFR5cGVTY3JpcHQuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZXhjbHVkZSBzdWNoIHByb3BlcnRpZXMgdG8gcHJldmVudCB0byBvdmVyd3JpdGVcbiAgICAgICAgLy8gdGhlIGNvbXBvbmVudCBvcHRpb25zIG9iamVjdCB3aGljaCBzdG9yZWQgb24gdGhlIGV4dGVuZGVkIGNvbnN0cnVjdG9yIChTZWUgIzE5MikuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIHJlZmVyZW5jZWQgdmFsdWUgKG9iamVjdCBvciBmdW5jdGlvbiksXG4gICAgICAgIC8vIHdlIGNhbiBjaGVjayBlcXVhbGl0eSBvZiB0aGVtIGFuZCBleGNsdWRlIGl0IGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgcHJpbWl0aXZlIHZhbHVlLCBpdCB3aWxsIGJlIGZvcndhcmRlZCBmb3Igc2FmZXR5LlxuICAgICAgICBpZiAoIWhhc1Byb3RvKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGBjaWRgIGlzIGV4cGxpY2l0bHkgZXhsdWRlZCBmcm9tIHByb3BlcnR5IGZvcndhcmRpbmdcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgY2Fubm90IGRldGVjdCB3aGV0aGVyIGl0IGlzIGEgaW5oZXJpdGVkIHByb3BlcnR5IG9yIG5vdFxuICAgICAgICAgICAgLy8gb24gdGhlIG5vIGBfX3Byb3RvX19gIGVudmlyb25tZW50IGV2ZW4gdGhvdWdoIHRoZSBwcm9wZXJ0eSBpcyByZXNlcnZlZC5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjaWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1cGVyRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3VwZXIsIGtleSk7XG4gICAgICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKGRlc2NyaXB0b3IudmFsdWUpICYmXG4gICAgICAgICAgICAgICAgc3VwZXJEZXNjcmlwdG9yICYmXG4gICAgICAgICAgICAgICAgc3VwZXJEZXNjcmlwdG9yLnZhbHVlID09PSBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdhcm4gaWYgdGhlIHVzZXJzIG1hbnVhbGx5IGRlY2xhcmUgcmVzZXJ2ZWQgcHJvcGVydGllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgcmVzZXJ2ZWRQcm9wZXJ0eU5hbWVzLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICB3YXJuKFwiU3RhdGljIHByb3BlcnR5IG5hbWUgJ1wiICsga2V5ICsgXCInIGRlY2xhcmVkIG9uIGNsYXNzICdcIiArIE9yaWdpbmFsLm5hbWUgKyBcIicgXCIgK1xuICAgICAgICAgICAgICAgICdjb25mbGljdHMgd2l0aCByZXNlcnZlZCBwcm9wZXJ0eSBuYW1lIG9mIFZ1ZSBpbnRlcm5hbC4gJyArXG4gICAgICAgICAgICAgICAgJ0l0IG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIG9mIHRoZSBjb21wb25lbnQuIENvbnNpZGVyIHJlbmFtaW5nIHRoZSBwcm9wZXJ0eS4nKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXh0ZW5kZWQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRGYWN0b3J5KG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50RmFjdG9yeShDb21wb25lbnQsIG9wdGlvbnMpO1xuICAgIH07XG59XG5Db21wb25lbnQucmVnaXN0ZXJIb29rcyA9IGZ1bmN0aW9uIHJlZ2lzdGVySG9va3Moa2V5cykge1xuICAgICRpbnRlcm5hbEhvb2tzLnB1c2guYXBwbHkoJGludGVybmFsSG9va3MsIGtleXMpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5jcmVhdGVEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3I7XG5leHBvcnRzLm1peGlucyA9IG1peGlucztcbiIsIi8qKiB2dWUtcHJvcGVydHktZGVjb3JhdG9yIHZlcnNvbiA3LjMuMCBNSVQgTElDRU5TRSBjb3B5cmlnaHQgMjAxOCBrYW9ydW4zNDMgKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBDb21wb25lbnQsIHsgY3JlYXRlRGVjb3JhdG9yLCBtaXhpbnMgfSBmcm9tICd2dWUtY2xhc3MtY29tcG9uZW50JztcbmV4cG9ydCB7IENvbXBvbmVudCwgVnVlLCBtaXhpbnMgYXMgTWl4aW5zIH07XG4vKipcbiAqIGRlY29yYXRvciBvZiBhbiBpbmplY3RcbiAqIEBwYXJhbSBmcm9tIGtleVxuICogQHJldHVybiBQcm9wZXJ0eURlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5qZWN0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlRGVjb3JhdG9yKGZ1bmN0aW9uIChjb21wb25lbnRPcHRpb25zLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRPcHRpb25zLmluamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE9wdGlvbnMuaW5qZWN0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbXBvbmVudE9wdGlvbnMuaW5qZWN0KSkge1xuICAgICAgICAgICAgY29tcG9uZW50T3B0aW9ucy5pbmplY3Rba2V5XSA9IG9wdGlvbnMgfHwga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIGRlY29yYXRvciBvZiBhIHByb3ZpZGVcbiAqIEBwYXJhbSBrZXkga2V5XG4gKiBAcmV0dXJuIFByb3BlcnR5RGVjb3JhdG9yIHwgdm9pZFxuICovXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZShrZXkpIHtcbiAgICByZXR1cm4gY3JlYXRlRGVjb3JhdG9yKGZ1bmN0aW9uIChjb21wb25lbnRPcHRpb25zLCBrKSB7XG4gICAgICAgIHZhciBwcm92aWRlID0gY29tcG9uZW50T3B0aW9ucy5wcm92aWRlO1xuICAgICAgICBpZiAodHlwZW9mIHByb3ZpZGUgIT09ICdmdW5jdGlvbicgfHwgIXByb3ZpZGUubWFuYWdlZCkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsXzEgPSBjb21wb25lbnRPcHRpb25zLnByb3ZpZGU7XG4gICAgICAgICAgICBwcm92aWRlID0gY29tcG9uZW50T3B0aW9ucy5wcm92aWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBydiA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBvcmlnaW5hbF8xID09PSAnZnVuY3Rpb24nID8gb3JpZ2luYWxfMS5jYWxsKHRoaXMpIDogb3JpZ2luYWxfMSkgfHwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwcm92aWRlLm1hbmFnZWQpXG4gICAgICAgICAgICAgICAgICAgIHJ2W3Byb3ZpZGUubWFuYWdlZFtpXV0gPSB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm92aWRlLm1hbmFnZWQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBwcm92aWRlLm1hbmFnZWRba10gPSBrZXkgfHwgaztcbiAgICB9KTtcbn1cbi8qKlxuICogZGVjb3JhdG9yIG9mIG1vZGVsXG4gKiBAcGFyYW0gIGV2ZW50IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnNcbiAqIEByZXR1cm4gUHJvcGVydHlEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1vZGVsKGV2ZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gY3JlYXRlRGVjb3JhdG9yKGZ1bmN0aW9uIChjb21wb25lbnRPcHRpb25zLCBrKSB7XG4gICAgICAgIChjb21wb25lbnRPcHRpb25zLnByb3BzIHx8IChjb21wb25lbnRPcHRpb25zLnByb3BzID0ge30pKVtrXSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbXBvbmVudE9wdGlvbnMubW9kZWwgPSB7IHByb3A6IGssIGV2ZW50OiBldmVudCB8fCBrIH07XG4gICAgfSk7XG59XG4vKipcbiAqIGRlY29yYXRvciBvZiBhIHByb3BcbiAqIEBwYXJhbSAgb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgdGhlIHByb3BcbiAqIEByZXR1cm4gUHJvcGVydHlEZWNvcmF0b3IgfCB2b2lkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQcm9wKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3IoZnVuY3Rpb24gKGNvbXBvbmVudE9wdGlvbnMsIGspIHtcbiAgICAgICAgKGNvbXBvbmVudE9wdGlvbnMucHJvcHMgfHwgKGNvbXBvbmVudE9wdGlvbnMucHJvcHMgPSB7fSkpW2tdID0gb3B0aW9ucztcbiAgICB9KTtcbn1cbi8qKlxuICogZGVjb3JhdG9yIG9mIGEgd2F0Y2ggZnVuY3Rpb25cbiAqIEBwYXJhbSAgcGF0aCB0aGUgcGF0aCBvciB0aGUgZXhwcmVzc2lvbiB0byBvYnNlcnZlXG4gKiBAcGFyYW0gIFdhdGNoT3B0aW9uXG4gKiBAcmV0dXJuIE1ldGhvZERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gocGF0aCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWVwLCBkZWVwID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5pbW1lZGlhdGUsIGltbWVkaWF0ZSA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3IoZnVuY3Rpb24gKGNvbXBvbmVudE9wdGlvbnMsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRPcHRpb25zLndhdGNoICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29tcG9uZW50T3B0aW9ucy53YXRjaCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoID0gY29tcG9uZW50T3B0aW9ucy53YXRjaDtcbiAgICAgICAgaWYgKHR5cGVvZiB3YXRjaFtwYXRoXSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkod2F0Y2hbcGF0aF0pKSB7XG4gICAgICAgICAgICB3YXRjaFtwYXRoXSA9IFt3YXRjaFtwYXRoXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHdhdGNoW3BhdGhdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2F0Y2hbcGF0aF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB3YXRjaFtwYXRoXS5wdXNoKHsgaGFuZGxlcjogaGFuZGxlciwgZGVlcDogZGVlcCwgaW1tZWRpYXRlOiBpbW1lZGlhdGUgfSk7XG4gICAgfSk7XG59XG4vLyBDb2RlIGNvcGllZCBmcm9tIFZ1ZS9zcmMvc2hhcmVkL3V0aWwuanNcbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpOyB9O1xuLyoqXG4gKiBkZWNvcmF0b3Igb2YgYW4gZXZlbnQtZW1pdHRlciBmdW5jdGlvblxuICogQHBhcmFtICBldmVudCBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEByZXR1cm4gTWV0aG9kRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFbWl0KGV2ZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfdGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAga2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiBlbWl0dGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbWl0ID0gZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MudW5zaGlmdChyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQuYXBwbHkoX3RoaXMsIFtldmVudCB8fCBrZXldLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJldHVyblZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVtaXQocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1pdChyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgUHJvbWlzZSB8fCAob2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9