import { i as __toESM, n as __commonJSMin, t as require_react } from "./react-BDWiK9rz.js";
import { t as require_react_dom } from "./react-dom-C08K6auO.js";
import { caretAltDownIcon, caretAltLeftIcon, caretAltRightIcon, microphoneOutlineIcon, moreHorizontalIcon, pasteSparkleIcon, stopSmIcon, xCircleIcon } from "./@progress_kendo-svg-icons.js";
//#region node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}));
//#endregion
//#region node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
//#endregion
//#region node_modules/object-assign/index.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}));
//#endregion
//#region node_modules/prop-types/checkPropTypes.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printWarning = function() {};
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var loggedTypeFailures = {};
	var has = require_has();
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	/**
	* Assert that the values match with the type specs.
	* Error messages are memorized and will only be shown once.
	*
	* @param {object} typeSpecs Map of name to a ReactPropType
	* @param {object} values Runtime values that need to be type-checked
	* @param {string} location e.g. "prop", "context", "child context"
	* @param {string} componentName Name of the component for error messages.
	* @param {?Function} getStack Returns the component stack.
	* @private
	*/
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
			var error;
			try {
				if (typeof typeSpecs[typeSpecName] !== "function") {
					var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
					err.name = "Invariant Violation";
					throw err;
				}
				error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
			} catch (ex) {
				error = ex;
			}
			if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
			if (error instanceof Error && !(error.message in loggedTypeFailures)) {
				loggedTypeFailures[error.message] = true;
				var stack = getStack ? getStack() : "";
				printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes.resetWarningCache = function() {
		loggedTypeFailures = {};
	};
	module.exports = checkPropTypes;
}));
//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		/**
		* Returns the iterator method function contained on the iterable object.
		*
		* Be sure to invoke the function with the iterable as context:
		*
		*     var iteratorFn = getIteratorFn(myIterable);
		*     if (iteratorFn) {
		*       var iterator = iteratorFn.call(myIterable);
		*       ...
		*     }
		*
		* @param {?object} maybeIterable
		* @return {?function}
		*/
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") return iteratorFn;
		}
		/**
		* Collection of methods that allow declaration and validation of props that are
		* supplied to React components. Example usage:
		*
		*   var Props = require('ReactPropTypes');
		*   var MyArticle = React.createClass({
		*     propTypes: {
		*       // An optional string prop named "description".
		*       description: Props.string,
		*
		*       // A required enum prop named "category".
		*       category: Props.oneOf(['News','Photos']).isRequired,
		*
		*       // A prop named "dialog" that requires an instance of Dialog.
		*       dialog: Props.instanceOf(Dialog).isRequired
		*     },
		*     render: function() { ... }
		*   });
		*
		* A more formal specification of how these methods are used:
		*
		*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		*   decl := ReactPropTypes.{type}(.isRequired)?
		*
		* Each and every declaration produces a function with the same signature. This
		* allows the creation of custom validation functions. For example:
		*
		*  var MyLink = React.createClass({
		*    propTypes: {
		*      // An optional string or URI prop named "href".
		*      href: function(props, propName, componentName) {
		*        var propValue = props[propName];
		*        if (propValue != null && typeof propValue !== 'string' &&
		*            !(propValue instanceof URI)) {
		*          return new Error(
		*            'Expected a string or an URI for ' + propName + ' in ' +
		*            componentName
		*          );
		*        }
		*      }
		*    },
		*    render: function() {...}
		*  });
		*
		* @internal
		*/
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			var manualPropTypeCallCache = {};
			var manualPropTypeWarningCount = 0;
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
				else printWarning("Invalid argument supplied to oneOf, expected an array.");
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
}));
//#endregion
//#region node_modules/@progress/kendo-react-common/contexts/ZIndexContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var t$12 = import_react.createContext(0), n$14 = () => import_react.useContext(t$12);
t$12.displayName = "KendoReactZIndexContext";
//#endregion
//#region node_modules/@progress/kendo-react-common/constants/main.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$5 = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g, t$11 = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-numerictextbox button):not(.k-split-button .k-split-button-arrow)", o$18 = ":not(.k-dropdownlist select)", n$13 = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled]):not(.k-dropdownlist select)",
	"textarea:not([disabled])",
	`button:not([disabled])${t$11}`,
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]"
];
[...n$13, `${t$11}${o$18}`];
[...n$13, `[tabindex]${t$11}${o$18}`].map((e) => e + ":not([tabindex=\"-1\"])");
//#endregion
//#region node_modules/@progress/kendo-react-common/canUseDOM.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$15 = !!(typeof window != "undefined" && window.document && window.document.createElement);
//#endregion
//#region node_modules/@progress/kendo-react-common/classNames.mjs
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1), n$12 = (...c) => {
	const t = {}, l = (e) => typeof e == "object" ? Object.keys(e).forEach((s) => {
		t[s] = e[s];
	}) : t[e] = !0, r = (e) => e.filter((s) => s !== !0 && !!s).map((s) => Array.isArray(s) ? r(s) : l(s));
	return r(c), Object.keys(t).map((e) => t[e] && e || null).filter((e) => e !== null).join(" ");
}, e$14 = {
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	esc: 27,
	space: 32,
	pageUp: 33,
	pageDown: 34,
	end: 35,
	home: 36,
	left: 37,
	up: 38,
	right: 39,
	down: 40,
	delete: 46
};
//#endregion
//#region node_modules/@progress/kendo-react-common/getTabIndex.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var A$4 = (D, r, o) => {
	const t = typeof D == "string" ? parseInt(D) : D;
	if (!Number.isNaN(t)) return r ? o ? void 0 : -1 : t != null ? t : 0;
};
//#endregion
//#region node_modules/@progress/kendo-react-common/fieldList.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function p$6(i) {
	const t = [];
	return i.replace(d$5, function(f, o, r, c) {
		t.push(o !== void 0 ? o : r || c);
	}), t;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/getter.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$13 = {};
e$13.undefined = () => {};
function s$13(t) {
	if (e$13[t]) return e$13[t];
	const o = p$6(t);
	return e$13[t] = function(u) {
		let r = u;
		for (let n = 0; n < o.length && r; n++) r = r[o[n]];
		return r;
	}, e$13[t];
}
//#endregion
//#region node_modules/@progress/kendo-react-common/guid.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$12 = () => {
	let r = "", t, o;
	for (t = 0; t < 32; t++) o = Math.random() * 16 | 0, (t === 8 || t === 12 || t === 16 || t === 20) && (r += "-"), r += (t === 12 ? 4 : t === 16 ? o & 3 | 8 : o).toString(16);
	return r;
};
//#endregion
//#region node_modules/@progress/kendo-licensing/dist/index.mjs
var e$11;
(function(e) {
	e.BLAZOR = "BLAZOR", e.DPL = "DPL", e.JM = "JM", e.KENDOUIANGULAR = "KENDOUIANGULAR", e.KENDOUICOMPLETE = "KENDOUICOMPLETE", e.KENDOUIMVC = "KENDOUIMVC", e.KENDOUIREACT = "KENDOUIREACT", e.KENDOUIVUE = "KENDOUIVUE", e.MAUI = "MAUI", e.RCAJAX = "RCAJAX", e.RCWF = "RCWF", e.RCWPF = "RCWPF", e.REPORTING = "REPORTING", e.REPORTSERVER = "REPORTSERVER", e.UIASPCORE = "UIASPCORE", e.UIXAM = "UIXAM", e.WINUI = "WINUI";
})(e$11 || (e$11 = {})), Object.freeze({
	[e$11.BLAZOR]: "Telerik UI for Blazor",
	[e$11.DPL]: "Telerik Document Processing",
	[e$11.JM]: "Telerik JustMock",
	[e$11.KENDOUIANGULAR]: "Kendo UI for Angular",
	[e$11.KENDOUICOMPLETE]: "Kendo UI for jQuery",
	[e$11.KENDOUIMVC]: "Telerik UI for ASP.NET MVC",
	[e$11.KENDOUIREACT]: "KendoReact",
	[e$11.KENDOUIVUE]: "Kendo UI for Vue",
	[e$11.MAUI]: "Telerik UI for .NET MAUI",
	[e$11.RCAJAX]: "Telerik UI for ASP.NET AJAX",
	[e$11.RCWF]: "Telerik UI for WinForms",
	[e$11.RCWPF]: "Telerik UI for WPF",
	[e$11.REPORTING]: "Telerik Reporting",
	[e$11.REPORTSERVER]: "Telerik Report Server",
	[e$11.UIASPCORE]: "Telerik UI for ASP.NET Core",
	[e$11.UIXAM]: "Telerik UI for Xamarin",
	[e$11.WINUI]: "Telerik UI for WinUI"
});
function t$9(e) {
	return Math.floor(e.getTime() / 1e3);
}
function n$11(e, n) {
	const i = /* @__PURE__ */ new Date(1e3 * e);
	return i.setDate(i.getDate() + n), t$9(i);
}
function i$6() {
	return t$9(/* @__PURE__ */ new Date());
}
function o$16(e) {
	const t = function(e) {
		if ("function" == typeof atob) return atob(e);
		if ("function" == typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
		throw new Error("atob is undefined");
	}(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return n;
}
function r$7(e) {
	return o$16(e.replace(/-/g, "+").replace(/_/g, "/"));
}
function s$12(e) {
	return /* @__PURE__ */ new Date(1e3 * e);
}
function c$6(e, t) {
	const n = s$12(t);
	return e > new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1).getTime() / 1e3;
}
function a$7(e, t) {
	let o = [];
	return e.licenses?.length > 0 ? o = e.licenses.map((e) => function(e) {
		const t = e.split(".")[1], n = String.fromCharCode(...r$7(t));
		return JSON.parse(n);
	}(e)) : e.products?.length > 0 && (o = e.products.map((t) => ({
		type: t.trial ? "trial" : "perpetual",
		code: t.code,
		expiration: t.licenseExpirationDate,
		licenseId: null,
		userId: e.userId
	}))), function(e, t) {
		const o = t.filter((e) => "usage" !== e.type).filter((t) => e.productCode === t.code || e.redistributedBy?.includes(t.code) || e.productCodes?.includes(t.code)).sort((e, t) => t.expiration - e.expiration);
		return o.find((e) => "subscription" === e.type && !c$6(i$6(), e.expiration)) || o.find((t) => "perpetual" === t.type && !c$6(e.publishDate, t.expiration)) || o.find((e) => "subscription" === e.type && !c$6(n$11(i$6(), 10), e.expiration)) || o.find((e) => "trial" === e.type && !c$6(i$6(), e.expiration)) || o.find((e) => "subscription" === e.type) || o.find((e) => "perpetual" === e.type) || o.find((e) => "trial" === e.type);
	}(t, o);
}
var l$3 = (e) => e.productCode || e.productCodes[0];
var p$5 = Object.freeze({
	name: "key",
	content: "\n        <svg\n            width=\"32\"\n            height=\"32\"\n            viewBox=\"0 0 32 32\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n        >\n            <path\n            fillRule=\"evenodd\"\n            clipRule=\"evenodd\"\n            d=\"M22.702 2.1821C24.3149 2.51082 25.8077 3.27291 27.0199 4.38645C28.2321 5.49999 29.1179 6.92286 29.582 8.5021C30.012 9.9501 30.076 11.4821 29.768 12.9621C29.3228 14.9898 28.2025 16.8063 26.5904 18.1143C24.9783 19.4223 22.9699 20.1443 20.894 20.1621C20.018 20.1621 19.146 20.0361 18.308 19.7821L16.708 21.6581L15.95 22.0081H14V25.0081L13 26.0081H10V29.0081L9 30.0081H3L2 29.0081V24.3941L2.292 23.6881L12.24 13.7401C11.9577 12.8308 11.8226 11.8821 11.84 10.9301C11.8582 9.59817 12.1701 8.28666 12.7533 7.08907C13.3365 5.89147 14.1767 4.83728 15.214 4.00164C16.2514 3.166 17.4603 2.56949 18.7546 2.25464C20.0489 1.93978 21.3967 1.91633 22.702 2.1821ZM25.338 16.5821C26.5944 15.5647 27.4681 14.1509 27.816 12.5721L27.824 12.5821C28.0718 11.4277 28.0272 10.2297 27.6943 9.09691C27.3614 7.96412 26.7507 6.93248 25.9177 6.09572C25.0847 5.25896 24.0558 4.64361 22.9246 4.30557C21.7933 3.96753 20.5955 3.91753 19.44 4.1601C17.8816 4.506 16.4837 5.36334 15.4688 6.59561C14.454 7.82789 13.8806 9.36426 13.84 10.9601C13.82 11.8721 13.98 12.7761 14.318 13.6201L14.098 14.7061L4 24.8081V28.0081H8V25.0081L9 24.0081H12V21.0081L13 20.0081H15.49L17.242 17.9761L18.364 17.6961C19.1728 18.0121 20.0337 18.1736 20.902 18.1721C22.5181 18.1597 24.082 17.5991 25.338 16.5821ZM23.662 11.1181C23.8197 10.9002 23.9318 10.6527 23.9916 10.3905C24.0515 10.1283 24.0578 9.85665 24.0103 9.59192C23.9627 9.32718 23.8622 9.07476 23.7148 8.84975C23.5675 8.62474 23.3762 8.43177 23.1526 8.28238C22.9289 8.133 22.6774 8.03026 22.4131 7.98033C22.1488 7.93039 21.8771 7.93428 21.6144 7.99176C21.3516 8.04925 21.1031 8.15914 20.8838 8.31487C20.6645 8.4706 20.4789 8.66896 20.338 8.8981C20.067 9.33887 19.9774 9.86752 20.088 10.373C20.1985 10.8784 20.5007 11.3214 20.931 11.6087C21.3613 11.8961 21.8862 12.0055 22.3954 11.914C22.9047 11.8226 23.3587 11.5373 23.662 11.1181Z\"\n            fill=\"black\"\n            />\n            <path\n            d=\"M23.1299 16.0186L31.1387 31.0273L31.0068 31.25H14.9932L14.8604 31.0273L22.8955 16.0186H23.1299Z\"\n            fill=\"#FFC000\"\n            stroke=\"black\"\n            strokeWidth=\"1.5\"\n            />\n            <rect x=\"22.25\" y=\"21.2686\" width=\"1.5\" height=\"5\" rx=\"0.75\" fill=\"black\" />\n            <path\n            d=\"M24 28.2686C24 27.7163 23.5523 27.2686 23 27.2686C22.4479 27.2687 22 27.7164 22 28.2686C22 28.8207 22.4479 29.2684 23 29.2686C23.5523 29.2686 24 28.8208 24 28.2686Z\"\n            fill=\"black\"\n            />\n        </svg>\n    "
}), d$4 = Object.freeze({
	name: "trial-tag",
	content: "\n        <svg\n            width=\"38\"\n            height=\"38\"\n            viewBox=\"0 0 38 38\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n        >\n            <g clipPath=\"url(#clip0)\">\n            <path\n                d=\"M24.9056 7.60146L34.4998 10.1722L31.9299 19.7659L13.7653 30.2532L6.7419 18.0883L24.9056 7.60146Z\"\n                stroke=\"black\"\n                strokeWidth=\"1.75\"\n            />\n            <path\n                d=\"M13.0913 19.7635L15.4762 23.8942L14.6279 24.384L12.2431 20.2533L13.0913 19.7635ZM14.3623 19.0297L14.7473 19.6964L11.3769 21.6423L10.992 20.9756L14.3623 19.0297ZM14.8475 18.7496L16.388 17.8602C16.7038 17.6778 17.0025 17.5684 17.2841 17.532C17.5675 17.4944 17.8242 17.5328 18.0542 17.6472C18.2841 17.7616 18.4772 17.954 18.6333 18.2244C18.7611 18.4457 18.833 18.6576 18.8491 18.8602C18.866 19.0598 18.8369 19.2518 18.7619 19.4364C18.6876 19.6179 18.5778 19.7923 18.4322 19.9596L18.2446 20.257L16.9055 21.0301L16.5166 20.3695L17.5124 19.7946C17.6618 19.7083 17.7704 19.6103 17.8381 19.5006C17.9059 19.3909 17.9371 19.2745 17.9317 19.1516C17.9281 19.0275 17.8903 18.9031 17.8183 18.7782C17.7418 18.6458 17.6512 18.5456 17.5463 18.4775C17.4415 18.4095 17.3242 18.3788 17.1944 18.3857C17.0647 18.3925 16.9242 18.4395 16.7729 18.5269L16.0835 18.9249L18.0834 22.3889L17.2323 22.8803L14.8475 18.7496ZM19.5417 21.547L17.5367 20.2496L18.4328 19.7247L20.4294 20.9815L20.4523 21.0212L19.5417 21.547ZM19.4746 16.0781L21.8595 20.2088L21.0112 20.6986L18.6264 16.5679L19.4746 16.0781ZM22.4103 15.3251L23.2638 19.398L22.3588 19.9205L21.5088 14.9037L22.0847 14.5712L22.4103 15.3251ZM25.3207 18.2105L22.2174 15.4365L21.7187 14.7825L22.3003 14.4467L26.2285 17.6864L25.3207 18.2105ZM24.3818 16.7023L24.7668 17.369L22.5851 18.6286L22.2002 17.9619L24.3818 16.7023ZM28.8837 15.2683L29.267 15.9321L27.1874 17.1327L26.8041 16.4689L28.8837 15.2683ZM25.0778 12.8432L27.4626 16.9739L26.6115 17.4652L24.2267 13.3345L25.0778 12.8432Z\"\n                fill=\"black\"\n            />\n            <circle\n                cx=\"30.1049\"\n                cy=\"12.7084\"\n                r=\"1.12128\"\n                transform=\"rotate(15 30.1049 12.7084)\"\n                fill=\"black\"\n            />\n            </g>\n            <path\n            d=\"M27.6201 19.7998L35.6016 34.7578L35.499 34.9316H19.542L19.4385 34.7578L27.4463 19.7998H27.6201Z\"\n            fill=\"#FFC000\"\n            stroke=\"black\"\n            strokeWidth=\"1.6\"\n            />\n            <rect x=\"26.7705\" y=\"25\" width=\"1.5\" height=\"5\" rx=\"0.75\" fill=\"black\" />\n            <path\n            d=\"M28.5205 32C28.5205 31.4477 28.0728 31 27.5205 31C26.9684 31.0002 26.5205 31.4478 26.5205 32C26.5205 32.5522 26.9684 32.9998 27.5205 33C28.0728 33 28.5205 32.5523 28.5205 32Z\"\n            fill=\"black\"\n            />\n            <defs>\n            <clipPath id=\"clip0\">\n                <rect\n                width=\"30\"\n                height=\"31.1538\"\n                fill=\"white\"\n                transform=\"translate(8.06323) rotate(15)\"\n                />\n            </clipPath>\n            </defs>\n        </svg>\n    "
}), h$4 = Object.freeze({
	name: "recurring-payment",
	content: "\n        <svg\n            width=\"32\"\n            height=\"32\"\n            viewBox=\"0 0 32 32\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n        >\n            <path\n            d=\"M27.8295 9.38659C28.8049 12.1653 28.7404 15.1391 27.774 17.7996C26.8014 20.4767 24.9215 22.8356 22.2691 24.367C19.7765 25.8061 16.9908 26.2908 14.3393 25.9323C11.6293 25.5682 9.06228 24.3215 7.08577 22.3155L8.23679 21.1826C9.95578 22.9294 12.1925 24.0142 14.5527 24.333C16.8583 24.6438 19.2821 24.2206 21.457 22.965C23.7719 21.6284 25.4118 19.5739 26.2565 17.2495C27.0643 15.0253 27.1474 12.5486 26.3976 10.2107L24.951 11.0459L25.5942 7.15112L29.2888 8.54145L27.8284 9.38462L27.8295 9.38659Z\"\n            fill=\"black\"\n            />\n            <path\n            fillRule=\"evenodd\"\n            clipRule=\"evenodd\"\n            d=\"M16.3594 8.08301C17.1842 8.16959 17.8382 8.41741 18.3281 8.8252C18.8135 9.2331 19.1263 9.78023 19.2607 10.4639L17.2939 10.6875C17.1732 10.1497 16.8607 9.78518 16.3594 9.59375V12.2617C17.6035 12.5557 18.4514 12.9408 18.9004 13.4102C19.3516 13.8819 19.5771 14.4863 19.5771 15.2246C19.5771 16.0494 19.2949 16.7425 18.7275 17.3076C18.1601 17.8728 17.3712 18.2233 16.3594 18.3623V19.6387H15.2334V18.3779C14.3448 18.2822 13.6246 17.9934 13.0664 17.5059C12.5081 17.0182 12.155 16.3275 12 15.4365L14.0127 15.2266C14.0947 15.5912 14.2497 15.9036 14.4775 16.168C14.7053 16.4321 14.9555 16.6218 15.2334 16.7402V13.8799C14.2264 13.6247 13.4906 13.2395 13.0234 12.7246C12.554 12.2073 12.3164 11.5801 12.3164 10.8418C12.3165 10.0946 12.5834 9.46575 13.1143 8.95996C13.6452 8.45184 14.3516 8.16053 15.2334 8.08301V7C15.6731 7 15.9197 7 16.3594 7V8.08301ZM16.3574 16.8535H16.3594C16.7467 16.7783 17.0661 16.6149 17.3076 16.3643C17.5537 16.1113 17.6738 15.8147 17.6738 15.4707C17.6738 15.1677 17.5715 14.9033 17.3643 14.6846C17.1615 14.4636 16.8267 14.2943 16.3574 14.1758V16.8535ZM15.2334 9.56836C14.9304 9.66408 14.6911 9.82132 14.5156 10.04C14.3379 10.2588 14.252 10.5004 14.252 10.7646C14.252 11.0062 14.3314 11.2301 14.4932 11.4375C14.655 11.6424 14.9038 11.8113 15.2363 11.9365V9.56836H15.2334Z\"\n            fill=\"black\"\n            />\n            <path\n            d=\"M2.71127 18.5075L4.18352 17.6575C3.21672 14.9028 3.27173 11.9581 4.21167 9.31563C5.17535 6.60942 7.06671 4.22018 9.74281 2.67513C12.0972 1.31581 14.709 0.807832 17.2232 1.05612C19.8041 1.3106 22.2798 2.36266 24.2693 4.10853L23.7361 4.71636L23.2029 5.32418C23.1532 5.27918 23.1016 5.23531 23.0511 5.19342C21.3484 3.75295 19.2504 2.88549 17.0678 2.66937C14.8802 2.45355 12.6065 2.89529 10.5561 4.07914C8.2194 5.42821 6.56974 7.50687 5.7328 9.85834C4.94555 12.068 4.87307 14.5175 5.61235 16.8326L6.69304 16.2087L6.98491 16.4014L6.40585 19.8979L2.71127 18.5075Z\"\n            fill=\"black\"\n            />\n            <path\n            d=\"M23.0996 15.7998L31.0811 30.7578L30.9785 30.9316H15.0215L14.918 30.7578L22.9258 15.7998H23.0996Z\"\n            fill=\"#FFC000\"\n            stroke=\"black\"\n            strokeWidth=\"1.6\"\n            />\n            <rect x=\"22.25\" y=\"21\" width=\"1.5\" height=\"5\" rx=\"0.75\" fill=\"black\" />\n            <path\n            d=\"M24 28C24 27.4477 23.5523 27 23 27C22.4479 27.0002 22 27.4478 22 28C22 28.5522 22.4479 28.9998 23 29C23.5523 29 24 28.5523 24 28Z\"\n            fill=\"black\"\n            />\n        </svg>\n    "
});
var f$3 = class {
	constructor(e, t, n, i) {
		this.productName = e, this.severity = "WARN", this.code = "TKL201", this.notificationIcon = p$5, this.message = "No Telerik and Kendo UI License found.\n  To download a license key file, visit https://prgress.co/3PwQMKZ", this.notificationMessage = `License key missing for ${e} v${n}.  A license key is required for both paid and trial usage. Learn <a href="${i}">how to set up a license key</a>.`, this.notificationTitle = `License key missing for ${e} v${n}.`, this.notificationBody = "A license key is required for both paid and trial usage.", this.callToAction = {
			link: `https://www.telerik.com/download?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=no_license_key_found`,
			message: "Start Free Trial"
		};
	}
};
var C$1 = class {
	constructor(e, t, n, i) {
		this.productName = e, this.severity = "WARN", this.code = "TKL202", this.notificationIcon = p$5, this.message = `${e} is not listed in your current license file.\n  Learn more about ${e} licensing at ${i}`, this.notificationMessage = `No license found for ${e} v${n}.  Access to the latest updates and support requires a <a href="${i}">valid license</a>.`, this.notificationTitle = `No license found for ${e} v${n}`, this.notificationBody = "To use this product and access updates and support you need to buy and install a valid license.", this.callToAction = {
			link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=no_license_key_current_product`,
			message: "Buy Now"
		};
	}
};
var L$2 = class {
	constructor(e, t, n, i) {
		this.productName = e, this.severity = "WARN", this.code = "TKL203", this.notificationIcon = d$4, this.message = `Your trial has expired ${i} day(s) ago.\n  Thank you for trying out ${e}, we hope you enjoyed your trial period.\n  To continue using our product, consider upgrading to a commercial license: https://prgress.co/3C9mr1M`, this.notificationMessage = `Your trial license for ${e} v${n} has expired ${i} ago. To continue using our product, consider upgrading to a commercial license. Learn more about <a href="https://prgress.co/3PwQMdX">${e} licensing</a>.`, this.notificationTitle = `Your trial license for ${e} has expired.`, this.notificationBody = "To continue using the product you need to buy a subscription.", this.callToAction = {
			link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=trial_expired`,
			message: "Buy Now"
		};
	}
};
var m$6 = class {
	constructor(e, t, n, i, o, r) {
		this.productName = e, this.severity = "WARN", this.code = "TKL204", this.notificationIcon = p$5;
		const s = i ? ` version ${i}` : "";
		this.message = `Your current license has expired on ${n.toLocaleDateString()} and is not valid for ${e}${s}. The product was published on ${o.toLocaleDateString()}.\n  Renew your license at https://prgress.co/3Px9m5F`, this.notificationMessage = `Your license is not valid for ${e} v${i}. To continue using the product, install a <a href="${r}">valid license</a>. Renew <a href="https://prgress.co/3PwQNi1">your license</a> and download a new license key.`, this.notificationTitle = `Your license doesn't cover ${e} v${i}`, this.notificationBody = "To access the latest version and updates you need to renew your license.", this.callToAction = {
			link: `https://www.telerik.com/account/your-licenses?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=perpertual_newer_version`,
			message: "Renew Now"
		};
	}
};
var g$6 = class {
	constructor(e, t, n) {
		this.productName = e, this.severity = "WARN", this.code = "TKL204", this.notificationIcon = h$4, this.message = `Your ${e} subscription has expired on ${n.toLocaleDateString()}. To continue using the product, please renew your subscription at https://prgress.co/3Px9m5F and download a new license key.`, this.notificationMessage = `Your ${e} subscription has expired. To continue using the product, please <a href="https://prgress.co/3PwQMut">renew your subscription</a> and download a new license key.`, this.notificationTitle = `Your ${e} subscription has expired.`, this.notificationBody = "To continue using the product you need to renew your subscription.", this.callToAction = {
			link: `https://www.telerik.com/account/your-licenses?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=subscription_expired`,
			message: "Renew Now"
		};
	}
};
var w$2 = class {
	constructor(e, t, n, i) {
		this.productName = e, this.severity = "INFO", this.notificationIcon = d$4, this.message = `Your Trial license will expire in ${-i} day(s).\n  To acquire a commercial license, visit https://prgress.co/3PyHIoH`, this.notificationTitle = `Active trial for ${e} v${n}`, this.notificationBody = `Your trial will expire in ${-i} day(s).`, this.callToAction = {
			link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t.toLowerCase()}&utm_content=active_trial`,
			message: "Buy now"
		};
	}
};
async function y$4(e, t) {
	if ("object" != typeof crypto || "object" != typeof crypto.subtle || "function" != typeof TextEncoder || "function" != typeof TextDecoder) return;
	const n = crypto.subtle, [i, s, c] = e.split("."), a = r$7(c), l = new TextEncoder(), u = new TextDecoder(), p = l.encode(`${i}.${s}`), d = u.decode(r$7(i));
	if (!("Telerik License Evidence" === JSON.parse(d).typ)) throw new Error("Unknown license evidence type");
	const h = await function(e) {
		const t = o$16(e.replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "").replace(/\n/gm, ""));
		return crypto.subtle.importKey("spki", t, {
			name: "RSASSA-PKCS1-v1_5",
			hash: "SHA-256"
		}, !0, ["verify"]);
	}(t);
	if (!await n.verify(h.algorithm, h, a, p)) throw new Error("Invalid license evidence");
}
var k$4 = { data: "  {}  " }, I$4 = /* @__PURE__ */ new Map(), v$5 = /* @__PURE__ */ new Set();
var E$1 = !0;
function N$1(e) {
	const o = JSON.parse(k$4.data), r = !o.scriptKey && !o.timestamp, u = o.scriptKey && "undefined" == typeof KendoLicensing, p = l$3(e);
	let d, h, v = !1;
	if (r || u || !((e) => (e.licenses?.length > 0 && Promise.all(e.licenses?.map((e) => y$4(e, "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2mnUVMmkth2x+N/ODszG\nOFIYBL6NOO1XWRj1wkmecKuLziJDhFz0WQmyOjY34Ymg9pLuBA9QSWrrZuvPw40N\nm0X/GBmttFmPNvca3WmJ2oKM7PpLiUU9f7Ov5WeIXnx++ts/LC/OB7FtZ+LiRgJ7\n0mZnPeTogdFrASf0zSQJv4jmX840LPa6nomWeUgIVGPLLVI14Gib8Dl+nOckqCNc\nkAUUk4IBF67DufRt9zQyRxg99ysakvHX2SDbdGvIBdxWxvhhmrBoeix0uSVtG2gm\njdvSqlPJVdvMbk1Xe2+SUldJPrxH1VrTYeRUt4yqWxy16nFJUDj9exZ202X4THkU\nJQIDAQAB\n-----END PUBLIC KEY-----"))).then(() => {
		E$1 = !0;
	}).catch(() => {
		E$1 = !1, I$4.clear();
	}), E$1))(o)) d = new f$3(e.productName, p, e.version, e.licensingDocsUrl);
	else if (h = a$7(o, e), h) {
		if ("trial" === h.type) {
			const n = function(e) {
				const n = i$6() - t$9(e);
				return Math.floor(n / 86400);
			}(s$12(h.expiration));
			c$6(i$6(), h.expiration) ? d = new L$2(e.productName, p, e.version, n) : (d = new w$2(e.productName, p, e.version, n), v = !0);
		} else if ("perpetual" === h.type) {
			const t = h.expiration;
			c$6(e.publishDate, t) ? d = new m$6(e.productName, p, s$12(h.expiration), e.version, s$12(e.publishDate), e.licensingDocsUrl) : v = !0;
		} else if ("subscription" === h.type) {
			let t = h.expiration;
			"subscription" === h.type && (t = n$11(t, 10)), o.timestamp && c$6(o.timestamp, t) ? d = new g$6(e.productName, p, s$12(h.expiration)) : v = !0;
		}
	} else d = new C$1(e.productName, p, e.version, e.licensingDocsUrl);
	const T = h, N = T?.expiration ? s$12(T.expiration) : void 0;
	return {
		isLicenseValid: v,
		licenseType: h?.type,
		licenseProductCode: T?.code,
		expiration: N,
		message: d
	};
}
function A$3(e) {
	if (I$4.has(e.name)) return I$4.get(e.name);
	const { isLicenseValid: t, message: n } = N$1(e), i = l$3(e);
	return n && !v$5.has(i) && (function(e, t) {
		if ("object" == typeof console) {
			const i = `[${e.severity}][Telerik and Kendo UI Licensing]` + (n ? ` ${n}:` : "") + ` ${t.productName}`, o = "function" == typeof console.group;
			o ? console.group(i) : console.warn(i), console.warn(e.message), o && console.groupEnd();
		}
		var n;
	}(n, e), v$5.add(i)), I$4.set(e.name, t), t;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/validate-package.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$3 = [
	"telerik.com",
	"progress.com",
	"stackblitz.io",
	"csb.app"
], h$3 = "https://www.telerik.com/kendo-react-ui/components/free?utm_medium=product&utm_source=console&utm_campaign=dt_kendoreact_freemium", o$15 = /* @__PURE__ */ new Map(), k$3 = () => {
	const t = Array.from(o$15, ([e, n]) => `- ${e}: ${Array.from(n).join(", ") || "all"}`).join(`
`);
	console.group("[WARN][Telerik and Kendo UI Licensing] KendoReact"), console.warn(`License check was triggered by these premium KendoReact components/features
${t}
See the full list of free and premium components here: ${h$3}`), console.groupEnd(), o$15.clear();
}, _ = (t, e) => {
	const n = A$3(t), c = d$3.some((s) => {
		var r;
		return (r = globalThis.document) == null ? void 0 : r.location.hostname.endsWith(s);
	});
	if (!n && e$15 && e) if (o$15.size === 0 && setTimeout(k$3, 1e3), o$15.has(e.component)) {
		const s = o$15.get(e.component) || [];
		o$15.set(e.component, /* @__PURE__ */ new Set([...e.features || [], ...s]));
	} else o$15.set(e.component, e.features || []);
	return n || c;
}, a$6 = /* @__PURE__ */ new WeakMap(), v$4 = (t) => {
	var m;
	if (a$6.has(t)) return a$6.get(t);
	const { version: e, productName: n } = t, c = N$1(t), s = c.message, r = c.licenseType, p = (m = c.expiration) == null ? void 0 : m.toDateString(), i = {
		code: s && "code" in s ? s.code : void 0,
		licenseType: r,
		version: e,
		productName: n,
		expiration: p
	};
	return a$6.set(t, i), i;
};
//#endregion
//#region node_modules/@progress/kendo-react-common/watermark/WatermarkOverlay.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var p$4 = { current: !0 }, k$2 = () => /* @__PURE__ */ import_react.createElement("svg", {
	width: "32",
	height: "32",
	viewBox: "0 0 32 32",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M18.5631 11.7812H10.4369L14.5 21.2619L18.5631 11.7812ZM18.5631 9.96875H10.4369L12.3788 5.4375H16.6212L18.5631 9.96875ZM20.5351 11.7812L17.2221 19.5116L23.9861 11.7812H20.5351ZM20.5351 9.96875L18.5931 5.4375H20.8437L24.2422 9.96875H20.5351ZM8.46492 9.96875L10.4069 5.4375H8.15625L4.75781 9.96875H8.46492ZM11.7779 19.5116L8.46492 11.7812H5.01386L11.7779 19.5116ZM27.1875 10.875L14.5 25.375L1.8125 10.875L7.25 3.625H21.75L27.1875 10.875Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M23.0996 15.7998L31.0811 30.7578L30.9785 30.9316H15.0215L14.918 30.7578L22.9258 15.7998H23.0996Z",
	fill: "#FFC000",
	stroke: "black",
	strokeWidth: "1.6"
}), /* @__PURE__ */ import_react.createElement("rect", {
	x: "22.25",
	y: "21",
	width: "1.5",
	height: "5",
	rx: "0.75",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M24 28C24 27.4477 23.5523 27 23 27C22.4479 27.0002 22 27.4478 22 28C22 28.5522 22.4479 28.9998 23 29C23.5523 29 24 28.5523 24 28Z",
	fill: "black"
})), x$5 = () => /* @__PURE__ */ import_react.createElement("svg", {
	width: "32",
	height: "32",
	viewBox: "0 0 32 32",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M22.702 2.1821C24.3149 2.51082 25.8077 3.27291 27.0199 4.38645C28.2321 5.49999 29.1179 6.92286 29.582 8.5021C30.012 9.9501 30.076 11.4821 29.768 12.9621C29.3228 14.9898 28.2025 16.8063 26.5904 18.1143C24.9783 19.4223 22.9699 20.1443 20.894 20.1621C20.018 20.1621 19.146 20.0361 18.308 19.7821L16.708 21.6581L15.95 22.0081H14V25.0081L13 26.0081H10V29.0081L9 30.0081H3L2 29.0081V24.3941L2.292 23.6881L12.24 13.7401C11.9577 12.8308 11.8226 11.8821 11.84 10.9301C11.8582 9.59817 12.1701 8.28666 12.7533 7.08907C13.3365 5.89147 14.1767 4.83728 15.214 4.00164C16.2514 3.166 17.4603 2.56949 18.7546 2.25464C20.0489 1.93978 21.3967 1.91633 22.702 2.1821ZM25.338 16.5821C26.5944 15.5647 27.4681 14.1509 27.816 12.5721L27.824 12.5821C28.0718 11.4277 28.0272 10.2297 27.6943 9.09691C27.3614 7.96412 26.7507 6.93248 25.9177 6.09572C25.0847 5.25896 24.0558 4.64361 22.9246 4.30557C21.7933 3.96753 20.5955 3.91753 19.44 4.1601C17.8816 4.506 16.4837 5.36334 15.4688 6.59561C14.454 7.82789 13.8806 9.36426 13.84 10.9601C13.82 11.8721 13.98 12.7761 14.318 13.6201L14.098 14.7061L4 24.8081V28.0081H8V25.0081L9 24.0081H12V21.0081L13 20.0081H15.49L17.242 17.9761L18.364 17.6961C19.1728 18.0121 20.0337 18.1736 20.902 18.1721C22.5181 18.1597 24.082 17.5991 25.338 16.5821ZM23.662 11.1181C23.8197 10.9002 23.9318 10.6527 23.9916 10.3905C24.0515 10.1283 24.0578 9.85665 24.0103 9.59192C23.9627 9.32718 23.8622 9.07476 23.7148 8.84975C23.5675 8.62474 23.3762 8.43177 23.1526 8.28238C22.9289 8.133 22.6774 8.03026 22.4131 7.98033C22.1488 7.93039 21.8771 7.93428 21.6144 7.99176C21.3516 8.04925 21.1031 8.15914 20.8838 8.31487C20.6645 8.4706 20.4789 8.66896 20.338 8.8981C20.067 9.33887 19.9774 9.86752 20.088 10.373C20.1985 10.8784 20.5007 11.3214 20.931 11.6087C21.3613 11.8961 21.8862 12.0055 22.3954 11.914C22.9047 11.8226 23.3587 11.5373 23.662 11.1181Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M23.1299 16.0186L31.1387 31.0273L31.0068 31.25H14.9932L14.8604 31.0273L22.8955 16.0186H23.1299Z",
	fill: "#FFC000",
	stroke: "black",
	strokeWidth: "1.5"
}), /* @__PURE__ */ import_react.createElement("rect", {
	x: "22.25",
	y: "21.2686",
	width: "1.5",
	height: "5",
	rx: "0.75",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M24 28.2686C24 27.7163 23.5523 27.2686 23 27.2686C22.4479 27.2687 22 27.7164 22 28.2686C22 28.8207 22.4479 29.2684 23 29.2686C23.5523 29.2686 24 28.8208 24 28.2686Z",
	fill: "black"
})), B$1 = () => /* @__PURE__ */ import_react.createElement("svg", {
	width: "38",
	height: "38",
	viewBox: "0 0 38 38",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("g", { clipPath: "url(#clip0_1_5398)" }, /* @__PURE__ */ import_react.createElement("path", {
	d: "M24.9056 7.60146L34.4998 10.1722L31.9299 19.7659L13.7653 30.2532L6.7419 18.0883L24.9056 7.60146Z",
	stroke: "black",
	strokeWidth: "1.75"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M13.0913 19.7635L15.4762 23.8942L14.6279 24.384L12.2431 20.2533L13.0913 19.7635ZM14.3623 19.0297L14.7473 19.6964L11.3769 21.6423L10.992 20.9756L14.3623 19.0297ZM14.8475 18.7496L16.388 17.8602C16.7038 17.6778 17.0025 17.5684 17.2841 17.532C17.5675 17.4944 17.8242 17.5328 18.0542 17.6472C18.2841 17.7616 18.4772 17.954 18.6333 18.2244C18.7611 18.4457 18.833 18.6576 18.8491 18.8602C18.866 19.0598 18.8369 19.2518 18.7619 19.4364C18.6876 19.6179 18.5778 19.7923 18.4322 19.9596L18.2446 20.257L16.9055 21.0301L16.5166 20.3695L17.5124 19.7946C17.6618 19.7083 17.7704 19.6103 17.8381 19.5006C17.9059 19.3909 17.9371 19.2745 17.9317 19.1516C17.9281 19.0275 17.8903 18.9031 17.8183 18.7782C17.7418 18.6458 17.6512 18.5456 17.5463 18.4775C17.4415 18.4095 17.3242 18.3788 17.1944 18.3857C17.0647 18.3925 16.9242 18.4395 16.7729 18.5269L16.0835 18.9249L18.0834 22.3889L17.2323 22.8803L14.8475 18.7496ZM19.5417 21.547L17.5367 20.2496L18.4328 19.7247L20.4294 20.9815L20.4523 21.0212L19.5417 21.547ZM19.4746 16.0781L21.8595 20.2088L21.0112 20.6986L18.6264 16.5679L19.4746 16.0781ZM22.4103 15.3251L23.2638 19.398L22.3588 19.9205L21.5088 14.9037L22.0847 14.5712L22.4103 15.3251ZM25.3207 18.2105L22.2174 15.4365L21.7187 14.7825L22.3003 14.4467L26.2285 17.6864L25.3207 18.2105ZM24.3818 16.7023L24.7668 17.369L22.5851 18.6286L22.2002 17.9619L24.3818 16.7023ZM28.8837 15.2683L29.267 15.9321L27.1874 17.1327L26.8041 16.4689L28.8837 15.2683ZM25.0778 12.8432L27.4626 16.9739L26.6115 17.4652L24.2267 13.3345L25.0778 12.8432Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("circle", {
	cx: "30.1049",
	cy: "12.7084",
	r: "1.12128",
	transform: "rotate(15 30.1049 12.7084)",
	fill: "black"
})), /* @__PURE__ */ import_react.createElement("path", {
	d: "M27.6201 19.7998L35.6016 34.7578L35.499 34.9316H19.542L19.4385 34.7578L27.4463 19.7998H27.6201Z",
	fill: "#FFC000",
	stroke: "black",
	strokeWidth: "1.6"
}), /* @__PURE__ */ import_react.createElement("rect", {
	x: "26.7705",
	y: "25",
	width: "1.5",
	height: "5",
	rx: "0.75",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M28.5205 32C28.5205 31.4477 28.0728 31 27.5205 31C26.9684 31.0002 26.5205 31.4478 26.5205 32C26.5205 32.5522 26.9684 32.9998 27.5205 33C28.0728 33 28.5205 32.5523 28.5205 32Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement("clipPath", { id: "clip0_1_5398" }, /* @__PURE__ */ import_react.createElement("rect", {
	width: "30",
	height: "31.1538",
	fill: "white",
	transform: "translate(8.06323) rotate(15)"
})))), I$3 = () => /* @__PURE__ */ import_react.createElement("svg", {
	width: "32",
	height: "32",
	viewBox: "0 0 32 32",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("path", {
	d: "M27.8295 9.38659C28.8049 12.1653 28.7404 15.1391 27.774 17.7996C26.8014 20.4767 24.9215 22.8356 22.2691 24.367C19.7765 25.8061 16.9908 26.2908 14.3393 25.9323C11.6293 25.5682 9.06228 24.3215 7.08577 22.3155L8.23679 21.1826C9.95578 22.9294 12.1925 24.0142 14.5527 24.333C16.8583 24.6438 19.2821 24.2206 21.457 22.965C23.7719 21.6284 25.4118 19.5739 26.2565 17.2495C27.0643 15.0253 27.1474 12.5486 26.3976 10.2107L24.951 11.0459L25.5942 7.15112L29.2888 8.54145L27.8284 9.38462L27.8295 9.38659Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M16.3594 8.08301C17.1842 8.16959 17.8382 8.41741 18.3281 8.8252C18.8135 9.2331 19.1263 9.78023 19.2607 10.4639L17.2939 10.6875C17.1732 10.1497 16.8607 9.78518 16.3594 9.59375V12.2617C17.6035 12.5557 18.4514 12.9408 18.9004 13.4102C19.3516 13.8819 19.5771 14.4863 19.5771 15.2246C19.5771 16.0494 19.2949 16.7425 18.7275 17.3076C18.1601 17.8728 17.3712 18.2233 16.3594 18.3623V19.6387H15.2334V18.3779C14.3448 18.2822 13.6246 17.9934 13.0664 17.5059C12.5081 17.0182 12.155 16.3275 12 15.4365L14.0127 15.2266C14.0947 15.5912 14.2497 15.9036 14.4775 16.168C14.7053 16.4321 14.9555 16.6218 15.2334 16.7402V13.8799C14.2264 13.6247 13.4906 13.2395 13.0234 12.7246C12.554 12.2073 12.3164 11.5801 12.3164 10.8418C12.3165 10.0946 12.5834 9.46575 13.1143 8.95996C13.6452 8.45184 14.3516 8.16053 15.2334 8.08301V7C15.6731 7 15.9197 7 16.3594 7V8.08301ZM16.3574 16.8535H16.3594C16.7467 16.7783 17.0661 16.6149 17.3076 16.3643C17.5537 16.1113 17.6738 15.8147 17.6738 15.4707C17.6738 15.1677 17.5715 14.9033 17.3643 14.6846C17.1615 14.4636 16.8267 14.2943 16.3574 14.1758V16.8535ZM15.2334 9.56836C14.9304 9.66408 14.6911 9.82132 14.5156 10.04C14.3379 10.2588 14.252 10.5004 14.252 10.7646C14.252 11.0062 14.3314 11.2301 14.4932 11.4375C14.655 11.6424 14.9038 11.8113 15.2363 11.9365V9.56836H15.2334Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M2.71127 18.5075L4.18352 17.6575C3.21672 14.9028 3.27173 11.9581 4.21167 9.31563C5.17535 6.60942 7.06671 4.22018 9.74281 2.67513C12.0972 1.31581 14.709 0.807832 17.2232 1.05612C19.8041 1.3106 22.2798 2.36266 24.2693 4.10853L23.7361 4.71636L23.2029 5.32418C23.1532 5.27918 23.1016 5.23531 23.0511 5.19342C21.3484 3.75295 19.2504 2.88549 17.0678 2.66937C14.8802 2.45355 12.6065 2.89529 10.5561 4.07914C8.2194 5.42821 6.56974 7.50687 5.7328 9.85834C4.94555 12.068 4.87307 14.5175 5.61235 16.8326L6.69304 16.2087L6.98491 16.4014L6.40585 19.8979L2.71127 18.5075Z",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M23.0996 15.7998L31.0811 30.7578L30.9785 30.9316H15.0215L14.918 30.7578L22.9258 15.7998H23.0996Z",
	fill: "#FFC000",
	stroke: "black",
	strokeWidth: "1.6"
}), /* @__PURE__ */ import_react.createElement("rect", {
	x: "22.25",
	y: "21",
	width: "1.5",
	height: "5",
	rx: "0.75",
	fill: "black"
}), /* @__PURE__ */ import_react.createElement("path", {
	d: "M24 28C24 27.4477 23.5523 27 23 27C22.4479 27.0002 22 27.4478 22 28C22 28.5522 22.4479 28.9998 23 29C23.5523 29 24 28.5523 24 28Z",
	fill: "black"
})), L$1 = {
	TKL201: {
		icon: k$2,
		title: (t, n) => `Premium feature detected in ${t} v${n}.`,
		description: "Use Premium components without watermark. Start Free Trial or check the browser console for a list of premium features currently in use.",
		buttonText: "Start Free Trial",
		buttonLink: "https://prgress.co/NoLicenseWatermarkKendoReact"
	},
	TKL202: {
		icon: x$5,
		title: (t, n) => `No license found for ${t} v${n}.`,
		description: "To use this product and access updates and support you need to buy and install a valid license.",
		buttonText: "Buy Now",
		buttonLink: "https://prgress.co/4pB2YK7"
	},
	TKL203: {
		icon: B$1,
		title: (t) => `Your trial for ${t} has expired.`,
		description: "To continue using the product you need to buy a subscription.",
		buttonText: "Buy Now",
		buttonLink: "https://prgress.co/45QUSG7"
	},
	"TKL204:subscription": {
		icon: I$3,
		title: (t) => `Your ${t} subscription has expired.`,
		description: "To continue using the product you need to renew your subscription.",
		buttonText: "Renew Now",
		buttonLink: "https://prgress.co/4pw28OH"
	},
	"TKL204:perpetual": {
		icon: x$5,
		title: (t, n) => `Your license doesn't cover ${t} v${n}.`,
		description: "To access the latest version and updates you need to renew your license.",
		buttonText: "Renew Now",
		buttonLink: "https://prgress.co/4pw28OH"
	},
	default: {
		title: (t, n) => `License issue for ${t} v${n}.`,
		description: (t) => t ? `Your Trial license will expire in ${t} day(s).` : "To acquire a commercial license, visit https://prgress.co/3PyHIoH",
		buttonText: "Buy Now",
		buttonLink: "https://prgress.co/3PyHIoH"
	}
}, y$3 = (t) => {
	const { code: n, licenseType: s, productName: r = "", version: c = "", expiration: d } = t || {};
	let l = "default";
	n && (`${n}:${s}` in L$1 ? l = `${n}:${s}` : l = n);
	const i = L$1[l] || L$1.default;
	return {
		icon: i.icon,
		title: i.title(r, c),
		description: typeof i.description == "function" ? i.description(d) : i.description,
		buttonText: i.buttonText,
		buttonLink: i.buttonLink
	};
}, M$3 = (t) => {
	const [n, s] = import_react.useState(!0), [r] = import_react.useState(() => p$4.current ? (p$4.current = !1, !0) : !1), [c, d] = import_react.useState(!1), [l, i] = import_react.useState(!1), [u, a] = import_react.useState(!1), [o, A] = import_react.useState(!1), [C, E] = import_react.useState(!1);
	import_react.useEffect(() => {
		d(!0);
		const f = () => {
			A(window.innerWidth < 500), E(window.innerWidth >= 768);
		};
		return f(), window.addEventListener("resize", f), () => {
			window.removeEventListener("resize", f), r && (p$4.current = !0);
		};
	}, [r]);
	const g = () => {
		s(!1);
	}, { icon: h, title: w, description: b, buttonText: v, buttonLink: m } = y$3(t.message), P = /* @__PURE__ */ import_react.createElement("div", { style: {
		position: "fixed",
		top: C ? "16px" : "0",
		left: "50%",
		transform: "translateX(-50%)",
		display: "flex",
		flexDirection: o ? "column" : "row",
		justifyContent: "center",
		alignItems: o ? "flex-start" : "center",
		borderRadius: C ? "6px" : "0",
		borderLeft: "6px solid rgba(255, 192, 0, 1)",
		borderTop: "1px solid #00000029",
		borderRight: "1px solid #00000029",
		borderBottom: "1px solid #00000029",
		fontSize: "14px",
		fontWeight: 400,
		lineHeight: "20px",
		color: "#1E1E1E",
		zIndex: 2e3,
		boxShadow: "0px 4px 5px 0px #0000000A, 0px 2px 4px 0px #00000008",
		maxWidth: C ? "768px" : "none",
		width: "100%",
		backgroundColor: "#ffffff",
		padding: o ? "12px" : "0"
	} }, o && /* @__PURE__ */ import_react.createElement("button", {
		title: "Close",
		className: "k-watermark-close-button",
		style: {
			position: "absolute",
			top: "12px",
			right: "12px",
			display: "inline-flex",
			border: "none",
			borderRadius: "4px",
			padding: "4px",
			backgroundColor: u ? "#3d3d3d14" : "transparent",
			transition: "background-color 0.2s ease-in-out",
			outline: "none",
			cursor: "pointer"
		},
		onMouseLeave: () => a(!1),
		onMouseEnter: () => a(!0),
		onClick: g
	}, /* @__PURE__ */ import_react.createElement("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ import_react.createElement("path", {
		d: "M11.9309 3.1838C12.1754 2.93933 12.5712 2.93937 12.8157 3.1838C13.0601 3.4283 13.0601 3.82407 12.8157 4.06857L8.885 7.99923L12.8166 11.9309C13.0611 12.1754 13.0611 12.5721 12.8166 12.8166C12.5721 13.0611 12.1754 13.0611 11.9309 12.8166L7.99925 8.88497L4.06859 12.8166C3.8241 13.0611 3.42732 13.0611 3.18285 12.8166C2.93862 12.5721 2.93851 12.1753 3.18285 11.9309L7.11449 7.99923L3.18382 4.06857C2.93947 3.82413 2.93955 3.42829 3.18382 3.1838C3.42831 2.9393 3.82508 2.9393 4.06957 3.1838L7.99925 7.11349L11.9309 3.1838Z",
		fill: "#212529"
	}))), h && /* @__PURE__ */ import_react.createElement("span", { style: {
		display: "flex",
		alignSelf: o ? "flex-start" : "center",
		padding: o ? "0 0 12px 0" : "9px 12px"
	} }, /* @__PURE__ */ import_react.createElement(h, null)), /* @__PURE__ */ import_react.createElement("div", { style: {
		display: "flex",
		flexDirection: "column",
		gap: "4px",
		padding: o ? "0 0 12px 0" : "12px",
		flex: o ? "none" : "1"
	} }, /* @__PURE__ */ import_react.createElement("span", { style: {
		fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif",
		fontWeight: "700",
		fontStyle: "Bold",
		fontSize: "14px",
		lineHeight: "142%",
		letterSpacing: "0px",
		verticalAlign: "middle",
		textAlign: "left"
	} }, w), /* @__PURE__ */ import_react.createElement("span", { style: {
		fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif",
		fontWeight: 400,
		fontSize: "14px",
		lineHeight: "20px",
		letterSpacing: "0px",
		verticalAlign: "middle",
		textAlign: "left"
	} }, b)), /* @__PURE__ */ import_react.createElement("div", { style: {
		display: "flex",
		alignItems: "center",
		padding: o ? "0" : "9px 12px",
		gap: "16px",
		marginLeft: o ? "0" : "auto",
		width: o ? "100%" : "auto"
	} }, /* @__PURE__ */ import_react.createElement("a", {
		title: v,
		className: "k-watermark-trial-button",
		style: {
			display: "inline-flex",
			position: "relative",
			border: "none",
			borderRadius: "4px",
			backgroundColor: l ? "#b90138" : "#eb0249",
			color: "#ffffff",
			transition: "background-color 0.2s ease-in-out",
			outline: "none",
			cursor: "pointer",
			padding: "4px 8px",
			whiteSpace: "nowrap",
			textDecoration: "none",
			fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif"
		},
		href: m,
		target: "_blank",
		rel: "noopener noreferrer",
		onMouseLeave: () => i(!1),
		onMouseEnter: () => i(!0)
	}, v), !o && /* @__PURE__ */ import_react.createElement("button", {
		title: "Close",
		className: "k-watermark-close-button",
		style: {
			display: "inline-flex",
			position: "relative",
			border: "none",
			borderRadius: "4px",
			padding: "4px",
			backgroundColor: u ? "#3d3d3d14" : "transparent",
			transition: "background-color 0.2s ease-in-out",
			outline: "none",
			cursor: "pointer"
		},
		onMouseLeave: () => a(!1),
		onMouseEnter: () => a(!0),
		onClick: g
	}, /* @__PURE__ */ import_react.createElement("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ import_react.createElement("path", {
		d: "M11.9309 3.1838C12.1754 2.93933 12.5712 2.93937 12.8157 3.1838C13.0601 3.4283 13.0601 3.82407 12.8157 4.06857L8.885 7.99923L12.8166 11.9309C13.0611 12.1754 13.0611 12.5721 12.8166 12.8166C12.5721 13.0611 12.1754 13.0611 11.9309 12.8166L7.99925 8.88497L4.06859 12.8166C3.8241 13.0611 3.42732 13.0611 3.18285 12.8166C2.93862 12.5721 2.93851 12.1753 3.18285 11.9309L7.11449 7.99923L3.18382 4.06857C2.93947 3.82413 2.93955 3.42829 3.18382 3.1838C3.42831 2.9393 3.82508 2.9393 4.06957 3.1838L7.99925 7.11349L11.9309 3.1838Z",
		fill: "#212529"
	})))));
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", { style: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: .12,
		zIndex: 101,
		pointerEvents: "none",
		backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==')"
	} }), c && r && n && import_react_dom.createPortal(P, document.body));
};
//#endregion
//#region node_modules/@progress/kendo-react-common/events/dispatchEvent.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function v$3(t, n, e, i) {
	if (t) {
		const a = {
			syntheticEvent: n,
			nativeEvent: n.nativeEvent,
			target: e
		};
		t.call(void 0, Object.assign(a, i));
	}
}
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/usePropsContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var n$10 = (t, o) => import_react.useContext(t)(o);
//#endregion
//#region node_modules/@progress/kendo-react-common/hocs/withPropsContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$5 = () => import_react.createContext((t) => t), x$4 = (t, o) => import_react.forwardRef((r, n) => {
	const s = n$10(t, r);
	return /* @__PURE__ */ import_react.createElement(o, {
		...s,
		ref: n
	});
});
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/use-isomorphic-layout-effect.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$14 = typeof window != "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/use-id.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function I$2(e) {
	const [u, c] = import_react.useState(!1);
	import_react.useEffect(() => {
		c(!0);
	}, []);
	const [s, f] = import_react.useState(() => {
		if (e) return e;
		if (u) return e$12();
	});
	o$14(() => {
		s === void 0 && f(e$12());
	}, []);
	const o = import_react[`useId${e$12()}`.slice(0, 5)];
	if (o !== void 0) {
		const n = o();
		return e != null ? e : n;
	}
	return s;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/hocs/use-id-hoc.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$4 = (r) => import_react.forwardRef((t, o) => {
	const d = I$2(t.id);
	return /* @__PURE__ */ import_react.createElement(r, {
		...t,
		id: d,
		ref: o
	});
});
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/unstyled-context.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$10 = import_react.createContext(void 0), o$13 = () => import_react.useContext(e$10);
//#endregion
//#region node_modules/@progress/kendo-react-common/hocs/use-unstyled-hoc.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$3 = (e) => import_react.forwardRef((r, o) => {
	const n = o$13();
	return /* @__PURE__ */ import_react.createElement(e, {
		...r,
		ref: o,
		unstyled: n
	});
});
//#endregion
//#region node_modules/@progress/kendo-react-common/hocs/withzIndexContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var m$5 = (t) => import_react.forwardRef((n, o) => {
	const r = n$14();
	return /* @__PURE__ */ import_react.createElement(t, {
		...n,
		ref: o,
		_zIndex: r
	});
});
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/useDir.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function u$5(t, n, o) {
	const [r, c] = import_react.useState(n);
	return import_react.useEffect(() => {
		if (!r && window && t.current) {
			const e = window.getComputedStyle(t.current).direction;
			e && c(e);
		}
	}, o), r;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/useMouse.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var h$2 = (o, l, u = {}) => {
	const c = import_react.useCallback((n) => {
		u.onMouseDown && u.onMouseDown.call(void 0, n), o.onMouseDown && o.onMouseDown.call(void 0, {
			target: l.current,
			syntheticEvent: n
		});
	}, [
		u.onMouseDown,
		o.onMouseDown,
		l
	]), M = import_react.useCallback((n) => {
		u.onMouseUp && u.onMouseUp.call(void 0, n), o.onMouseUp && o.onMouseUp.call(void 0, {
			target: l.current,
			syntheticEvent: n
		});
	}, [
		u.onMouseUp,
		o.onMouseUp,
		l
	]);
	return {
		onClick: import_react.useCallback((n) => {
			u.onClick && u.onClick.call(void 0, n), o.onClick && o.onClick.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onClick,
			o.onClick,
			l
		]),
		onMouseUp: M,
		onMouseDown: c,
		onDoubleClick: import_react.useCallback((n) => {
			u.onDoubleClick && u.onDoubleClick.call(void 0, n), o.onDoubleClick && o.onDoubleClick.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onDoubleClick,
			o.onDoubleClick,
			l
		]),
		onMouseEnter: import_react.useCallback((n) => {
			u.onMouseEnter && u.onMouseEnter.call(void 0, n), o.onMouseEnter && o.onMouseEnter.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onMouseEnter,
			o.onMouseEnter,
			l
		]),
		onMouseLeave: import_react.useCallback((n) => {
			u.onMouseLeave && u.onMouseLeave.call(void 0, n), o.onMouseLeave && o.onMouseLeave.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onMouseLeave,
			o.onMouseLeave,
			l
		]),
		onMouseMove: import_react.useCallback((n) => {
			u.onMouseMove && u.onMouseMove.call(void 0, n), o.onMouseMove && o.onMouseMove.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onMouseMove,
			o.onMouseMove,
			l
		]),
		onMouseOut: import_react.useCallback((n) => {
			u.onMouseOut && u.onMouseOut.call(void 0, n), o.onMouseOut && o.onMouseOut.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onMouseOut,
			o.onMouseOut,
			l
		]),
		onMouseOver: import_react.useCallback((n) => {
			u.onMouseOver && u.onMouseOver.call(void 0, n), o.onMouseOver && o.onMouseOver.call(void 0, {
				target: l.current,
				syntheticEvent: n
			});
		}, [
			u.onMouseOver,
			o.onMouseOver,
			l
		])
	};
};
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/constants.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var x$3 = {
	default: "",
	xsmall: "k-icon-xs",
	small: "k-icon-sm",
	medium: "k-icon-md",
	large: "k-icon-lg",
	xlarge: "k-icon-xl",
	xxlarge: "k-icon-xxl",
	xxxlarge: "k-icon-xxxl"
};
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/utils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$5 = (o) => o.replace(/^k-i-/, ""), n$9 = (o) => "k-i-" + o, r$6 = import_prop_types.default.shape({
	name: import_prop_types.default.string.isRequired,
	content: import_prop_types.default.string.isRequired,
	viewBox: import_prop_types.default.string.isRequired
});
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/Icon.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var u$4 = import_react.forwardRef((l, d) => {
	const { className: n, name: s, themeColor: t, size: i, flip: m, style: h, id: g, tabIndex: x, ...y } = l, a = import_react.useRef(null), f = import_react.useRef(null);
	import_react.useImperativeHandle(a, () => ({ element: f.current })), import_react.useImperativeHandle(d, () => a.current);
	const c = import_react.useMemo(() => i || p$3.size, [i]), r = import_react.useMemo(() => m || p$3.flip, [m]), z = import_react.useMemo(() => n$12("k-icon", "k-font-icon", s && n$9(s), {
		[`k-color-${t}`]: t,
		"k-flip-h": r === "horizontal" || r === "both",
		"k-flip-v": r === "vertical" || r === "both"
	}, x$3[c], n), [
		s,
		t,
		c,
		r,
		n
	]), I = h$2(l, a);
	return /* @__PURE__ */ import_react.createElement("span", {
		ref: f,
		...y,
		...I,
		className: z,
		id: g,
		tabIndex: x,
		style: h,
		role: "presentation"
	});
});
u$4.propTypes = {
	style: import_prop_types.default.object,
	classNames: import_prop_types.default.string,
	name: import_prop_types.default.string,
	themeColor: import_prop_types.default.oneOf([
		"inherit",
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"error",
		"warning",
		"dark",
		"light",
		"inverse"
	]),
	size: import_prop_types.default.oneOf([
		"default",
		"xsmall",
		"small",
		"medium",
		"large",
		"xlarge",
		"xxlarge",
		"xxxlarge"
	]),
	flip: import_prop_types.default.oneOf([
		"default",
		"horizontal",
		"vertical",
		"both"
	])
};
var p$3 = {
	size: "default",
	flip: "default"
};
u$4.displayName = "KendoIcon";
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/json-classes.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$8 = {
	prefix: "k",
	important: "!",
	rtl: "rtl",
	rounded: "rounded",
	value: "value",
	state: "state",
	filter: "filter",
	virtual: "virtual",
	infinite: "infinite",
	clear: "clear",
	reset: "reset",
	data: "data",
	nodata: "nodata",
	scroller: "scroller"
}, t$8 = {
	actionsheet: "actionsheet",
	calendar: "calendar",
	buttongroup: "buttongroup",
	dateinput: "dateinput",
	datetime: "datetime",
	datetimepicker: "datetimepicker",
	dropdownlist: "dropdownlist",
	combobox: "combobox",
	maskedtextbox: "maskedtextbox",
	menu: "menu",
	searchbox: "searchbox",
	timepicker: "timepicker"
}, l$2 = {
	xsmall: "xs",
	small: "sm",
	medium: "md",
	large: "lg",
	xlarge: "xl",
	xxlarge: "xxl",
	xxxlarge: "xxxl"
}, s$11 = {
	solid: "solid",
	outline: "outline",
	flat: "flat",
	link: "link",
	clear: "clear"
}, c$5 = {
	base: "base",
	primary: "primary",
	secondary: "secondary",
	tertiary: "tertiary",
	info: "info",
	success: "success",
	warning: "warning",
	error: "error",
	dark: "dark",
	light: "light",
	inherit: "inherit",
	inverse: "inverse"
}, d$2 = {
	small: "sm",
	medium: "md",
	large: "lg",
	full: "full",
	none: "none"
}, p$2 = {
	vertical: "vertical",
	horizontal: "horizontal"
}, f$2 = {
	up: "up",
	down: "down",
	left: "left",
	right: "right",
	start: "start",
	mid: "mid",
	end: "end"
}, r$5 = {
	actions: "actions",
	container: "container",
	content: "content",
	group: "group",
	row: "row",
	nav: "nav",
	wrap: "wrap",
	wrapper: "wrapper",
	list: "list",
	placeholder: "placeholder",
	popup: "popup",
	item: "item",
	part: "part",
	picker: "picker",
	separator: "separator",
	spacer: "spacer",
	tab: "tab",
	titlebar: "titlebar",
	optionLabel: "optionlabel",
	view: "view"
}, a$2 = {
	table: "table",
	text: "text",
	button: "button",
	tbody: "tbody",
	thead: "thead",
	tr: "tr",
	th: "th",
	td: "td",
	header: "header",
	footer: "footer",
	icon: "icon",
	title: "title",
	subtitle: "subtitle",
	link: "link",
	label: "label",
	ul: "ul",
	caption: "caption"
}, x$2 = {
	active: "active",
	adaptive: "adaptive",
	first: "first",
	focus: "focus",
	pending: "pending",
	last: "last",
	draggable: "draggable",
	filterable: "filterable",
	grouping: "grouping",
	selected: "selected",
	highlighted: "highlighted",
	disabled: "disabled",
	hidden: "hidden",
	highlight: "highlight",
	invalid: "invalid",
	loading: "loading",
	required: "required",
	checked: "checked",
	empty: "empty",
	scrollable: "scrollable",
	sorted: "sorted",
	sort: "sort",
	sticky: "sticky",
	stretched: "stretched",
	order: "order",
	alt: "alt",
	edit: "edit",
	template: "template",
	shown: "shown",
	horizontal: "horizontal",
	vertical: "vertical",
	fullscreen: "fullscreen",
	bottom: "bottom"
}, g$5 = {
	prefix: "animation",
	child: "child",
	relative: "relative",
	slide: "slide",
	appear: "appear",
	active: "active",
	enter: "enter",
	exit: "exit",
	pushRight: "push-right",
	pushLeft: "push-left",
	pushDown: "push-down",
	pushUp: "push-up",
	expandVertical: "expand-vertical",
	expandHorizontal: "expand-horizontal",
	fade: "fade",
	zoomIn: "zoom-in",
	zoomOut: "zoom-out",
	slideIn: "slide-in",
	slideDown: "slide-down",
	slideUp: "slide-up",
	slideRight: "slide-right",
	slideLeft: "slide-left",
	revealVertical: "reveal-vertical",
	revealHorizontal: "reveal-horizontal",
	"animation-container": "animation-container",
	"animation-container-shown": "animation-container-shown",
	"animation-container-relative": "animation-container-relative",
	"animation-container-fixed": "animation-container-fixed",
	"child-animation-container": "child-animation-container"
}, i$4 = {
	input: "input",
	inner: "inner",
	spin: "spin",
	spinner: "spinner",
	maskedtextbox: "maskedtextbox",
	radio: "radio",
	textbox: "textbox",
	prefix: "prefix",
	suffix: "suffix"
}, v$2 = {
	prefix: "icon",
	svg: "svg",
	i: "i",
	color: "color",
	flipH: "flip-h",
	flipV: "flip-v"
}, y$2 = { prefix: "popup" }, o$11 = {
	prefix: "grid",
	ariaRoot: "aria-root",
	tableWrap: "table-wrap",
	master: "master",
	column: "column",
	cell: "cell",
	cellInner: "cell-inner",
	row: "row",
	group: "group",
	hierarchy: "hierarchy",
	detail: "detail",
	noRecords: "norecords",
	pager: "pager"
};
`${e$8.prefix}${i$4.input}`;
`${e$8.prefix}${t$8.calendar}`;
`${e$8.prefix}${t$8.maskedtextbox}`;
`${e$8.prefix}${i$4.radio}`;
var L = `${e$8.prefix}-${a$2.button}`, I$1 = `${e$8.prefix}-${t$8.menu}`;
`${e$8.prefix}${r$5.picker}`;
`${e$8.prefix}${t$8.dropdownlist}`;
`${e$8.prefix}${t$8.combobox}`;
`${e$8.prefix}${o$11.prefix}`;
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/icons.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var c$4 = {
	wrapper: {
		main: `${e$8.prefix}-${v$2.prefix}`,
		svgPrefix: `${e$8.prefix}-${v$2.svg}-${v$2.prefix}`,
		namePrefix: `${e$8.prefix}-${v$2.svg}-${v$2.i}-`,
		flipH: `${e$8.prefix}-${v$2.flipH}`,
		flipV: `${e$8.prefix}-${v$2.flipV}`,
		themeColor: {
			inherit: `${e$8.prefix}-${v$2.color}-${c$5.inherit}`,
			primary: `${e$8.prefix}-${v$2.color}-${c$5.primary}`,
			secondary: `${e$8.prefix}-${v$2.color}-${c$5.secondary}`,
			tertiary: `${e$8.prefix}-${v$2.color}-${c$5.tertiary}`,
			info: `${e$8.prefix}-${v$2.color}-${c$5.info}`,
			success: `${e$8.prefix}-${v$2.color}-${c$5.success}`,
			warning: `${e$8.prefix}-${v$2.color}-${c$5.warning}`,
			error: `${e$8.prefix}-${v$2.color}-${c$5.error}`,
			dark: `${e$8.prefix}-${v$2.color}-${c$5.dark}`,
			light: `${e$8.prefix}-${v$2.color}-${c$5.light}`
		},
		size: {
			default: "",
			xsmall: `${e$8.prefix}-${v$2.prefix}-${l$2.xsmall}`,
			small: `${e$8.prefix}-${v$2.prefix}-${l$2.small}`,
			medium: `${e$8.prefix}-${v$2.prefix}-${l$2.medium}`,
			large: `${e$8.prefix}-${v$2.prefix}-${l$2.large}`,
			xlarge: `${e$8.prefix}-${v$2.prefix}-${l$2.xlarge}`,
			xxlarge: `${e$8.prefix}-${v$2.prefix}-${l$2.xxlarge}`,
			xxxlarge: `${e$8.prefix}-${v$2.prefix}-${l$2.xxxlarge}`
		}
	},
	svg: {
		main: "",
		flipH: "",
		flipV: ""
	}
}, m$3 = {
	wrapper: (o) => {
		const { iconNameProp: x, themeColor: l, flipH: a, flipV: f, size: s, c: n = c$4 } = o, $ = n.wrapper || {};
		return {
			[$.main || ""]: !0,
			[$.svgPrefix || ""]: !0,
			[`${$.namePrefix || ""}${x}`]: x,
			[$.themeColor[l] || ""]: l,
			[$.flipH || ""]: a,
			[$.flipV || ""]: f,
			[$.size[s] || ""]: $.size[s]
		};
	},
	svg: (o) => {
		const { flipH: x, flipV: l, c: a = c$4 } = o, f = a.svg;
		return {
			[f.main || ""]: !0,
			[f.flipH || ""]: x,
			[f.flipV || ""]: l
		};
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/SvgIcon.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var M$1 = import_react.forwardRef((e, b) => {
	const { children: p, className: h, svgClassName: z, icon: i, flip: m, id: N, tabIndex: I, size: d, style: s, svgStyle: C, themeColor: r, viewBox: f, name: j, onClick: P, ...S } = e, u = import_react.useRef(null), g = o$13(), a = g && g.uSvgIcon;
	import_react.useImperativeHandle(b, () => ({ element: u.current }));
	const v = import_react.useMemo(() => i ? i.name : l$1.icon, [i]), c = import_react.useMemo(() => i ? i.content : void 0, [i]), w = import_react.useMemo(() => d || l$1.size, [d]), o = import_react.useMemo(() => m || l$1.flip, [m]), B = import_react.useMemo(() => f || l$1.viewBox, [f]), H = import_react.useMemo(() => n$12(m$3.wrapper({
		c: a,
		iconNameProp: v,
		themeColor: r,
		flipH: o === "horizontal" || o === "both",
		flipV: o === "vertical" || o === "both",
		size: w
	}), h), [
		a,
		v,
		r,
		o,
		w,
		h
	]), R = import_react.useMemo(() => e.width && e.height ? {
		width: e.width,
		height: e.height,
		...s
	} : e.width ? {
		width: e.width,
		height: e.width,
		...s
	} : e.height ? {
		width: e.height,
		height: e.height,
		...s
	} : { ...s }, [
		e.width,
		e.height,
		s
	]), T = import_react.useMemo(() => c ? { __html: c } : void 0, [c]);
	return /* @__PURE__ */ import_react.createElement("span", {
		className: n$12(m$3.svg({
			c: a,
			themeColor: r,
			flipH: o === "horizontal" || o === "both",
			flipV: o === "vertical" || o === "both"
		}), H),
		style: R,
		ref: u,
		onClick: P,
		"aria-hidden": !0
	}, /* @__PURE__ */ import_react.createElement("svg", {
		id: N,
		className: z,
		style: C,
		"aria-hidden": !0,
		tabIndex: I,
		focusable: !1,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: i ? i.viewBox : B,
		dangerouslySetInnerHTML: T,
		...S
	}, i ? void 0 : p));
});
M$1.propTypes = {
	style: import_prop_types.default.object,
	classNames: import_prop_types.default.string,
	children: import_prop_types.default.any,
	icon: import_prop_types.default.object,
	themeColor: import_prop_types.default.oneOf([
		"inherit",
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"error",
		"warning",
		"dark",
		"light",
		"inverse"
	]),
	size: import_prop_types.default.oneOf([
		"default",
		"xsmall",
		"small",
		"medium",
		"large",
		"xlarge",
		"xxlarge",
		"xxxlarge"
	]),
	flip: import_prop_types.default.oneOf([
		"default",
		"horizontal",
		"vertical",
		"both"
	])
};
var l$1 = {
	size: "default",
	flip: "default",
	icon: "",
	viewBox: "0 0 24 24"
};
M$1.displayName = "KendoSvgIcon";
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/IconsContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$7 = import_react.createContext({ type: "svg" });
e$7.displayName = "KendoReactIconsContext";
//#endregion
//#region node_modules/@progress/kendo-react-common/icons/IconWrap.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var v$1 = import_react.forwardRef((t, c) => {
	var r, i;
	const { type: m, icons: o } = import_react.useContext(e$7), { icon: s, ...f } = t;
	let n = m === "svg" ? ((r = t.icon) == null ? void 0 : r.name) || t.name : t.name || ((i = t.icon) == null ? void 0 : i.name);
	n = n && o && o[n] && typeof o[n] == "string" ? o[n] : n;
	const a = n && o && o[n] && typeof o[n] != "string" ? o[n] : s;
	return m === "svg" && a ? /* @__PURE__ */ import_react.createElement(M$1, {
		...t,
		icon: a,
		ref: c
	}) : /* @__PURE__ */ import_react.createElement(u$4, {
		...f,
		name: n,
		ref: c
	});
});
v$1.displayName = "KendoIconWrap";
//#endregion
//#region node_modules/@progress/kendo-react-common/theme.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$6 = {
	sizeMap: {
		small: "sm",
		medium: "md",
		large: "lg"
	},
	roundedMap: {
		small: "sm",
		medium: "md",
		large: "lg",
		full: "full",
		none: "none"
	},
	orientationMap: {
		vertical: "vstack",
		horizontal: "hstack"
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-common/getActiveElement.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var c$3 = (t) => {
	const e = t.shadowRoot, n = t.contentDocument;
	return e && e.activeElement ? c$3(e.activeElement) : n && n.activeElement ? c$3(n.activeElement) : t;
}, o$10 = (t) => {
	if (!(!t || !t.activeElement)) return c$3(t.activeElement);
};
//#endregion
//#region node_modules/@progress/kendo-react-common/kendopaste/KendoPasteEvent.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$9 = "kendo-populate-event";
function r$4(t) {
	return new CustomEvent(o$9, {
		bubbles: !0,
		cancelable: !0,
		detail: { fieldValues: t }
	});
}
function u$2(t, e) {
	if (!t) return !1;
	const n = r$4(e);
	return t.dispatchEvent(n);
}
function c$2(t) {
	if (!t) return document.body;
	const e = t.closest("form");
	if (e) return e;
	return t.closest(".k-form") || document.body;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/interfaces/common.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$10 = (t, e) => (r) => {
	const { c: n = t } = r;
	return { [n[e] || ""]: !0 };
};
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/buttons.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var w = {
	wrapper: {
		main: L,
		size: {
			small: `${L}-${l$2.small}`,
			medium: `${L}-${l$2.medium}`,
			large: `${L}-${l$2.large}`
		},
		fillMode: {
			solid: `${L}-${s$11.solid}`,
			outline: `${L}-${s$11.outline}`,
			flat: `${L}-${s$11.flat}`,
			link: `${L}-${s$11.link}`,
			clear: `${L}-${s$11.clear}`
		},
		themeColor: {
			base: `${L}-${c$5.base}`,
			primary: `${L}-${c$5.primary}`,
			secondary: `${L}-${c$5.secondary}`,
			tertiary: `${L}-${c$5.tertiary}`,
			info: `${L}-${c$5.info}`,
			success: `${L}-${c$5.success}`,
			warning: `${L}-${c$5.warning}`,
			error: `${L}-${c$5.error}`,
			dark: `${L}-${c$5.dark}`,
			light: `${L}-${c$5.light}`,
			inverse: `${L}-${c$5.inverse}`
		},
		rounded: {
			small: `${e$8.prefix}-${e$8.rounded}-${d$2.small}`,
			medium: `${e$8.prefix}-${e$8.rounded}-${d$2.medium}`,
			large: `${e$8.prefix}-${e$8.rounded}-${d$2.large}`
		},
		iconButton: `${e$8.prefix}-${a$2.icon}-${a$2.button}`,
		disabled: `${e$8.prefix}-${x$2.disabled}`,
		selected: `${e$8.prefix}-${x$2.selected}`,
		isRtl: `${e$8.prefix}-${e$8.rtl}`
	},
	text: `${L}-${a$2.text}`,
	icon: `${L}-${a$2.icon}`
}, R = {
	wrapper: (o) => {
		const { isRtl: i, selected: n, disabled: s, size: t, fillMode: x, rounded: c, themeColor: h, iconButton: B, c: y = w } = o, $ = y.wrapper, k = h && $.themeColor ? $.themeColor[h] : void 0;
		return {
			[$.main]: !0,
			[$.size[t]]: t && $.size[t],
			[`${L}-${t}`]: t && !$.size[t],
			[$.fillMode[x]]: x && $.fillMode[x],
			[k]: k,
			[$.rounded[c]]: c && $.rounded[c],
			[`${e$8.prefix}-${e$8.rounded}-${c}`]: c && !$.rounded[c],
			[$.iconButton]: B,
			[$.disabled]: s,
			[$.selected]: n,
			[$.isRtl]: i
		};
	},
	text: (o) => {
		const { c: i = w } = o;
		return { [i.text]: !0 };
	},
	icon: (o) => {
		const { c: i = w } = o;
		return { [i.icon]: !0 };
	}
}, M = {
	wrapper: {
		main: `${L}-${r$5.group}`,
		stretched: `${L}-${r$5.group}-${x$2.stretched}`,
		disabled: `${e$8.prefix}-${x$2.disabled}`
	},
	position: {
		start: `${e$8.prefix}-${r$5.group}-${f$2.start}`,
		end: `${e$8.prefix}-${r$5.group}-${f$2.end}`
	}
}, G = {
	wrapper: (o) => {
		const { stretched: i, disabled: n, c: s = M } = o, t = s.wrapper;
		return {
			[t.main]: !0,
			[t.stretched]: i,
			[t.disabled]: n
		};
	},
	position: (o) => {
		const { start: i, end: n, c: s = M } = o, t = s.position;
		return {
			[t.start]: i,
			[t.end]: n
		};
	}
}, m$2 = {
	wrapper: {
		main: `${I$1}-${a$2.button}`,
		focus: `${e$8.prefix}-${x$2.focus}`,
		disabled: `${e$8.prefix}-${x$2.disabled}`
	},
	ul: {
		group: `${I$1}-${r$5.group}`,
		size: {
			small: `${I$1}-${r$5.group}-${l$2.small}`,
			medium: `${I$1}-${r$5.group}-${l$2.medium}`,
			large: `${I$1}-${r$5.group}-${l$2.large}`
		}
	},
	li: {
		item: `${e$8.prefix}-${r$5.item}`,
		focus: `${e$8.prefix}-${x$2.focus}`
	},
	item: `${I$1}-${r$5.item}`,
	link: {
		main: `${e$8.prefix}-${a$2.link}`,
		link: `${I$1}-${a$2.link}`,
		selected: `${e$8.prefix}-${x$2.selected}`,
		disabled: `${e$8.prefix}-${x$2.disabled}`
	},
	popup: `${I$1}-${r$5.popup}`
}, P = {
	wrapper: (o) => {
		const { focused: i, disabled: n, c: s = m$2 } = o, t = s.wrapper;
		return {
			[t.main]: !0,
			[t.focus]: i,
			[t.disabled]: n
		};
	},
	ul: (o) => {
		const { size: i, c: n = m$2 } = o, s = n.ul;
		return {
			[s.group]: !0,
			[s.size[i]]: s.size[i],
			[`${I$1}-${r$5.group}-${i}`]: i && !s.size[i]
		};
	},
	li: (o) => {
		const { focused: i, c: n = m$2 } = o, s = n.li;
		return {
			[s.item]: !0,
			[s.focus]: i
		};
	},
	item: s$10(m$2, "item"),
	link: (o) => {
		const { selected: i, disabled: n, c: s = m$2 } = o, t = s.link;
		return {
			[t.main]: !0,
			[t.link]: !0,
			[t.selected]: i,
			[t.disabled]: n
		};
	},
	popup: s$10(m$2, "popup")
};
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/popup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$1 = {
	animationContainer: `${e$8.prefix}-${g$5.prefix}-${r$5.container}`,
	animationContainerShown: `${e$8.prefix}-${g$5.prefix}-${r$5.container}-${x$2.shown}`,
	animationChild: `${e$8.prefix}-${g$5.child}-${g$5.prefix}-${r$5.container}`,
	popup: `${e$8.prefix}-${y$2.prefix}`,
	slide: {
		up: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.up}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.up}-${g$5.exit}`
		},
		down: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.down}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.down}-${g$5.exit}`
		},
		left: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.left}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.left}-${g$5.exit}`
		},
		right: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.right}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.right}-${g$5.exit}`
		}
	},
	slideActive: {
		up: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.up}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.up}-${g$5.exit}-${g$5.active}`
		},
		down: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.down}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.down}-${g$5.exit}-${g$5.active}`
		},
		left: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.left}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.left}-${g$5.exit}-${g$5.active}`
		},
		right: {
			enter: `${e$8.prefix}-${g$5.slide}-${f$2.right}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.slide}-${f$2.right}-${g$5.exit}-${g$5.active}`
		}
	},
	zoom: {
		in: {
			enter: `${e$8.prefix}-${g$5.zoomIn}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.zoomIn}-${g$5.exit}`
		},
		out: {
			enter: `${e$8.prefix}-${g$5.zoomIn}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.zoomOut}-${g$5.exit}`
		}
	},
	zoomActive: {
		in: {
			enter: `${e$8.prefix}-${g$5.zoomIn}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.zoomIn}-${g$5.exit}-${g$5.active}`
		},
		out: {
			enter: `${e$8.prefix}-${g$5.zoomOut}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.zoomOut}-${g$5.exit}-${g$5.active}`
		}
	},
	fade: {
		enter: `${e$8.prefix}-${g$5.fade}-${g$5.enter}`,
		exit: `${e$8.prefix}-${g$5.fade}-${g$5.exit}`
	},
	fadeActive: {
		enter: `${e$8.prefix}-${g$5.fade}-${g$5.enter}-${g$5.active}`,
		exit: `${e$8.prefix}-${g$5.fade}-${g$5.exit}-${g$5.active}`
	},
	push: {
		up: {
			enter: `${e$8.prefix}-${g$5.pushUp}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.pushUp}-${g$5.exit}`
		},
		down: {
			enter: `${e$8.prefix}-${g$5.pushDown}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.pushDown}-${g$5.exit}`
		},
		left: {
			enter: `${e$8.prefix}-${g$5.pushLeft}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.pushLeft}-${g$5.exit}`
		},
		right: {
			enter: `${e$8.prefix}-${g$5.pushRight}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.pushRight}-${g$5.exit}`
		}
	},
	pushActive: {
		up: {
			enter: `${e$8.prefix}-${g$5.pushUp}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.pushUp}-${g$5.exit}-${g$5.active}`
		},
		down: {
			enter: `${e$8.prefix}-${g$5.pushDown}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.pushDown}-${g$5.exit}-${g$5.active}`
		},
		left: {
			enter: `${e$8.prefix}-${g$5.pushLeft}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.pushLeft}-${g$5.exit}-${g$5.active}`
		},
		right: {
			enter: `${e$8.prefix}-${g$5.pushRight}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.pushRight}-${g$5.exit}-${g$5.active}`
		}
	},
	expand: {
		horizontal: {
			enter: `${e$8.prefix}-${g$5.expandHorizontal}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.expandHorizontal}-${g$5.exit}`
		},
		vertical: {
			enter: `${e$8.prefix}-${g$5.expandVertical}-${g$5.enter}`,
			exit: `${e$8.prefix}-${g$5.expandVertical}-${g$5.exit}`
		}
	},
	expandActive: {
		horizontal: {
			enter: `${e$8.prefix}-${g$5.expandHorizontal}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.expandHorizontal}-${g$5.exit}-${g$5.active}`
		},
		vertical: {
			enter: `${e$8.prefix}-${g$5.expandVertical}-${g$5.enter}-${g$5.active}`,
			exit: `${e$8.prefix}-${g$5.expandVertical}-${g$5.exit}-${g$5.active}`
		}
	}
}, v = {
	animationContainer: (p) => {
		const { c: $ = d$1 } = p;
		return { [$ == null ? void 0 : $.animationContainer]: !0 };
	},
	animationContainerShown: (p) => {
		const { c: $ = d$1 } = p;
		return { [$ == null ? void 0 : $.animationContainerShown]: !0 };
	},
	animationChild: (p) => {
		const { c: $ = d$1 } = p;
		return { [$ == null ? void 0 : $.animationChild]: !0 };
	},
	popup: (p) => {
		const { c: $ = d$1 } = p;
		return { [$ == null ? void 0 : $.popup]: !0 };
	},
	slide: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.slide) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.slide) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	slideActive: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.slideActive) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.slideActive) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	zoom: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.zoom) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.zoom) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	zoomActive: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.zoomActive) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.zoomActive) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	fade: (p) => {
		var t, n;
		const { type: $, c: r = d$1 } = p;
		return { [(t = r == null ? void 0 : r.fade) == null ? void 0 : t[$]]: (n = r == null ? void 0 : r.fade) == null ? void 0 : n[$] };
	},
	fadeActive: (p) => {
		var t, n;
		const { type: $, c: r = d$1 } = p;
		return { [(t = r == null ? void 0 : r.fadeActive) == null ? void 0 : t[$]]: (n = r == null ? void 0 : r.fadeActive) == null ? void 0 : n[$] };
	},
	push: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.push) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.push) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	pushActive: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.pushActive) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.pushActive) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	expand: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.expand) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.expand) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	},
	expandActive: (p) => {
		var n, x, o, a;
		const { direction: $, type: r, c: t = d$1 } = p;
		return { [(x = (n = t == null ? void 0 : t.expandActive) == null ? void 0 : n[$]) == null ? void 0 : x[r]]: (a = (o = t == null ? void 0 : t.expandActive) == null ? void 0 : o[$]) == null ? void 0 : a[r] };
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Button.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function Q$2({ imageUrl: a, name: d, iconClass: s, svgIcon: o, imageAlt: u, buttonClasses: l, iconSize: n }) {
	return a ? /* @__PURE__ */ import_react.createElement("img", {
		role: "presentation",
		className: n$12(R.icon({ c: l })),
		alt: u,
		src: a
	}) : d || o ? /* @__PURE__ */ import_react.createElement(v$1, {
		className: n$12(R.icon({ c: l })),
		name: d,
		icon: o,
		size: n
	}) : s ? /* @__PURE__ */ import_react.createElement("span", {
		role: "presentation",
		className: n$12(R.icon({ c: l }), s)
	}) : null;
}
var A$2 = import_react.forwardRef((a, d) => {
	const { children: s, togglable: o, dir: u, disabled: l, selected: n, icon: v, iconClass: h, svgIcon: y, imageUrl: C, imageAlt: B, className: P, startIcon: E, endIcon: N, onClick: b, size: O = g$4.size, rounded: S = g$4.rounded, fillMode: T = g$4.fillMode, themeColor: w = g$4.themeColor, ariaPressed: I, iconSize: x, ...U } = a, H = () => {
		o && n === void 0 && (m.current = !r, z(!r));
	}, K = (p) => {
		H(), b && b.call(void 0, p);
	}, m = import_react.useRef(void 0), R$2 = import_react.useRef(null), [r, z] = import_react.useState(o === !0 && n === !0), W = y !== void 0 || v !== void 0 || h !== void 0 || C !== void 0, j = s !== void 0, q = o$13(), M = a.unstyled || q, f = M && M.uButton;
	import_react.useImperativeHandle(d, () => ({
		element: R$2.current,
		selected: m.current !== void 0 ? m.current : r
	})), import_react.useMemo(() => {
		o && n !== void 0 && n !== r && z(n);
	}, [o, n]), import_react.useEffect(() => {
		m.current = void 0;
	}, [r]);
	const D = Q$2({
		name: v,
		svgIcon: y,
		iconClass: h,
		imageUrl: C,
		imageAlt: B,
		buttonClasses: f,
		iconSize: x
	}), k = (p) => import_react.cloneElement(p, { className: n$12(R.icon({ c: f }), p.props.className) }), F = import_react.useMemo(() => o ? r : I || void 0, [
		o,
		r,
		I
	]);
	return /* @__PURE__ */ import_react.createElement("button", {
		ref: R$2,
		"aria-pressed": F,
		...U,
		dir: u,
		disabled: l,
		onClick: K,
		className: n$12(R.wrapper({
			c: f,
			isRtl: u === "rtl",
			selected: r,
			disabled: l,
			size: O,
			fillMode: T,
			rounded: S,
			themeColor: w,
			iconButton: !j && W
		}), P)
	}, E && k(E), D, s && /* @__PURE__ */ import_react.createElement("span", { className: n$12(R.text({ c: f })) }, s), N && k(N));
}), g$4 = {
	size: void 0,
	rounded: void 0,
	fillMode: void 0,
	themeColor: void 0
};
A$2.displayName = "KendoReactButton";
A$2.propTypes = {
	children: import_prop_types.default.node,
	selected: import_prop_types.default.bool,
	togglable: import_prop_types.default.bool,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	iconClass: import_prop_types.default.string,
	imageUrl: import_prop_types.default.string,
	imageAlt: import_prop_types.default.string,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf([
		"flat",
		"link",
		"outline",
		"solid",
		"clear"
	]),
	themeColor: import_prop_types.default.oneOf([
		"base",
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
		"inverse"
	])
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ButtonGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var T = (i) => {
	const { children: B, className: C, dir: c, disabled: p, width: r } = i, w = o$13(), d = i.unstyled || w, m = d && d.uButtonGroup, E = (t) => {
		const l = import_react.Children.count(t), a = c !== void 0 ? c === "rtl" : u.current && getComputedStyle(u.current).direction === "rtl" || !1;
		return import_react.Children.map(t, (o, n) => {
			if (import_react.isValidElement(o)) {
				const b = n === l - 1, f = a;
				return G$1(o, n$12(o.props.className, G.position({
					c: m,
					start: f ? b : n === 0,
					end: f ? n === 0 : b
				})));
			}
			return o;
		});
	}, G$1 = (t, l) => {
		const a = {
			...r ? { width: r } : {},
			...t.props.style || {}
		}, o = p || t.props.disabled, n = {
			...t.props,
			...l ? { className: l } : {},
			...Object.keys(a).length ? { style: a } : {},
			...o !== void 0 ? { disabled: o } : {}
		};
		return import_react.Children.count(t.props.children) > 0 ? import_react.cloneElement(t, n, t.props.children) : import_react.cloneElement(t, n);
	}, u = import_react.useRef(null), R = E(B), y = n$12(G.wrapper({
		c: m,
		stretched: !!r,
		disabled: p
	}), C), v = {
		className: y,
		style: { width: `${r}` },
		dir: c,
		role: "group",
		"aria-disabled": p
	};
	return /* @__PURE__ */ import_react.createElement("div", {
		ref: u,
		...v,
		className: y
	}, R);
};
T.propTypes = {
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.element), import_prop_types.default.element]),
	className: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	width: import_prop_types.default.string,
	dir: import_prop_types.default.string
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/ButtonItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var k = (e) => {
	const I = o$13(), a = e.unstyled || I, n = a && a.uDropDownButton, o = import_react.useCallback((s) => {
		e.onClick(s, e.index);
	}, [e]), d = e.dataItem.render || e.item || (e.item === void 0 ? e.render : null), m = e.dataItem.text !== void 0 ? e.dataItem.text : e.textField ? e.dataItem[e.textField] : e.dataItem, l = /* @__PURE__ */ import_react.createElement("li", {
		id: e.id,
		className: n$12(P.li({
			c: n,
			focused: e.focused
		}), e.className),
		tabIndex: -1,
		onClick: o,
		onMouseDown: e.onDown,
		onPointerDown: e.onDown,
		role: "menuitem",
		"aria-disabled": e.dataItem.disabled || void 0
	}, /* @__PURE__ */ import_react.createElement("span", {
		tabIndex: -1,
		className: n$12(P.link({
			c: n,
			selected: e.dataItem.selected,
			disabled: e.dataItem.disabled
		})),
		key: "icon"
	}, d ? /* @__PURE__ */ import_react.createElement(d, {
		item: e.dataItem,
		itemIndex: e.index
	}) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, (e.dataItem.icon || e.dataItem.iconClass || e.dataItem.svgIcon) && /* @__PURE__ */ import_react.createElement(v$1, {
		className: e.dataItem.iconClass,
		name: e.dataItem.icon,
		icon: e.dataItem.svgIcon
	}), e.dataItem.imageUrl && /* @__PURE__ */ import_react.createElement("img", {
		role: "presentation",
		alt: "",
		src: e.dataItem.imageUrl,
		className: "k-icon"
	}), m && /* @__PURE__ */ import_react.createElement("span", { className: "k-menu-link-text" }, m))));
	return e.item !== void 0 && e.render !== void 0 ? e.render.call(void 0, l, e) : l;
};
k.displayName = "KendoReactButtonItem";
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/SplitButtonItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$8 = class s extends import_react.Component {
	/**
	* @hidden
	*/
	render() {
		return null;
	}
};
s$8.propTypes = {
	text: import_prop_types.default.string,
	icon: import_prop_types.default.string,
	iconClass: import_prop_types.default.string,
	imageUrl: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	render: import_prop_types.default.any
};
var e$5 = s$8;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/utils/navigation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$3 = (n, s, t, r) => {
	if (t) return n;
	const a = Math.min(r - 1, Math.max(0, n));
	switch (s) {
		case e$14.enter:
		case e$14.space:
		case e$14.esc: return -1;
		case e$14.up:
		case e$14.left: return a - 1 < 0 ? r - 1 : a - 1;
		case e$14.down:
		case e$14.right: return a + 1 >= r ? 0 : a + 1;
		case e$14.home: return 0;
		case e$14.end: return r - 1;
		default: return n;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-popup/animation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var y$1 = (i, s, t) => {
	i.style.transitionDuration = "", s && i.classList.remove(...s.split(" ")), t && i.classList.remove(...t.split(" "));
}, A$1 = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent), x$1 = (i, s, t, f, c, e, d) => {
	if (s === 0) return f();
	const L = `${e}Active`, o = n$12(v[e]({
		direction: d,
		type: t,
		c
	})), r = n$12(v[L]({
		direction: d,
		type: t,
		c
	})), u = (n) => {
		n.target === i && (i.removeEventListener("transitionend", u), y$1(i, o, r), t === "exit" ? i.style.display = "none" : i.style.display = "", f());
	};
	i.addEventListener("transitionend", u);
	const v$7 = i.ownerDocument;
	if (!v$7) return;
	const a = v$7.defaultView;
	if (!a) return;
	const w = () => {
		y$1(i, o, r), t === "enter" && (i.style.display = ""), o && i.classList.add(...o.split(" ").filter((n) => n)), a.requestAnimationFrame(() => {
			i.style.transitionDuration = s + "ms", i.classList.add(...r.split(" ").filter((n) => n));
		});
	};
	A$1 ? a.requestAnimationFrame(w) : w();
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var AlignPoint;
(function(AlignPoint) {
	AlignPoint["bottom"] = "bottom";
	AlignPoint["center"] = "center";
	AlignPoint["middle"] = "middle";
	AlignPoint["left"] = "left";
	AlignPoint["right"] = "right";
	AlignPoint["top"] = "top";
})(AlignPoint || (AlignPoint = {}));
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
	var anchorRect = options.anchorRect, anchorAlign = options.anchorAlign, elementRect = options.elementRect, elementAlign = options.elementAlign, _a = options.margin, margin = _a === void 0 ? {} : _a;
	var anchorHorizontal = anchorAlign.horizontal;
	var anchorVertical = anchorAlign.vertical;
	var elementHorizontal = elementAlign.horizontal;
	var elementVertical = elementAlign.vertical;
	var horizontalMargin = margin.horizontal || 0;
	var verticalMargin = margin.vertical || 0;
	var top = anchorRect.top;
	var left = anchorRect.left;
	if (anchorVertical === AlignPoint.bottom) top += anchorRect.height;
	if (anchorVertical === AlignPoint.center || anchorVertical === AlignPoint.middle) top += Math.round(anchorRect.height / 2);
	if (elementVertical === AlignPoint.bottom) {
		top -= elementRect.height;
		verticalMargin *= -1;
	}
	if (elementVertical === AlignPoint.center || elementVertical === AlignPoint.middle) {
		top -= Math.round(elementRect.height / 2);
		verticalMargin *= -1;
	}
	if (anchorHorizontal === AlignPoint.right) left += anchorRect.width;
	if (anchorHorizontal === AlignPoint.center || anchorHorizontal === AlignPoint.middle) left += Math.round(anchorRect.width / 2);
	if (elementHorizontal === AlignPoint.right) {
		left -= elementRect.width;
		horizontalMargin *= -1;
	}
	if (elementHorizontal === AlignPoint.center || elementHorizontal === AlignPoint.middle) {
		left -= Math.round(elementRect.width / 2);
		horizontalMargin *= -1;
	}
	return {
		top: top + verticalMargin,
		left: left + horizontalMargin
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
var addScroll = function(rect, scroll) {
	return {
		top: rect.top + scroll.y,
		left: rect.left + scroll.x,
		height: rect.height,
		width: rect.width
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
var owner_document_default = (function(element) {
	return element && element.ownerDocument || document;
});
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocumentElement = function(element) {
	return owner_document_default(element).documentElement;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
var scrollbarWidth = function() {
	if (!cachedWidth && typeof document !== "undefined") {
		var div = document.createElement("div");
		div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
		div.innerHTML = "&nbsp;";
		document.body.appendChild(div);
		cachedWidth = div.offsetWidth - div.scrollWidth;
		document.body.removeChild(div);
	}
	return cachedWidth;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow$1 = function(element) {
	return owner_document_default(element).defaultView;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
var windowViewport = function(element) {
	var win = getWindow$1(element);
	var documentElement = getDocumentElement(element);
	var result = {
		height: win.innerHeight,
		width: win.innerWidth
	};
	if (documentElement.scrollHeight - documentElement.clientHeight > 0) result.width -= scrollbarWidth();
	return result;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
	if (!element.getBoundingClientRect) {
		var viewport = windowViewport(element);
		return {
			bottom: viewport.height,
			left: 0,
			right: viewport.width,
			top: 0
		};
	}
	var _a = element.getBoundingClientRect();
	return {
		bottom: _a.bottom,
		left: _a.left,
		right: _a.right,
		top: _a.top
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
	var offsetParent = element.offsetParent;
	while (offsetParent && offsetParent.style.position === "static") offsetParent = offsetParent.offsetParent;
	return offsetParent || element.ownerDocument.documentElement;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
	var _a = element.style, display = _a.display, left = _a.left, position = _a.position;
	element.style.display = "";
	element.style.left = "-10000px";
	element.style.position = "absolute";
	var rect = element.getBoundingClientRect();
	element.style.display = display;
	element.style.left = left;
	element.style.position = position;
	return {
		top: rect.top,
		left: rect.left,
		height: rect.height,
		width: rect.width
	};
};
var offset$1 = function(element) {
	var rect = element.getBoundingClientRect();
	var left = rect.left, top = rect.top;
	if (!rect.height && !rect.width) rect = rectOfHiddenElement(element);
	return {
		top,
		left,
		height: rect.height,
		width: rect.width
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/parents.js
var parents = function(element, until) {
	var result = [];
	var next = element.parentNode;
	while (next) {
		result.push(next);
		if (next === until) break;
		next = next.parentNode;
	}
	return result;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
var scrollPosition = function(element) {
	var documentElement = getDocumentElement(element);
	var win = getWindow$1(element);
	return {
		x: win.pageXOffset || documentElement.scrollLeft || 0,
		y: win.pageYOffset || documentElement.scrollTop || 0
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
var elementScrollPosition$1 = function(element) {
	if (element === (element.ownerDocument || {}).body) return scrollPosition(element);
	return {
		x: element.scrollLeft,
		y: element.scrollTop
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
var parentScrollPosition = function(element) {
	var parent = offsetParent(element);
	return parent ? elementScrollPosition$1(parent) : {
		x: 0,
		y: 0
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/position.js
var position$1 = function(element, parent) {
	var win = getWindow$1(element);
	var elementStyles = win.getComputedStyle(element);
	var offset = offset$1(element);
	var parentElement = parent || offsetParent(element);
	var ownerDocument = element.ownerDocument;
	var useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;
	var parentOffset = {
		top: 0,
		left: 0,
		height: 0,
		width: 0
	};
	if (elementStyles.position !== "fixed" && useRelative) {
		var parentStyles = win.getComputedStyle(parentElement);
		parentOffset = offset$1(parentElement);
		parentOffset.top += parseFloat(parentStyles.borderTopWidth);
		parentOffset.left += parseFloat(parentStyles.borderLeftWidth);
	}
	return {
		top: offset.top - parentOffset.top,
		left: offset.left - parentOffset.left,
		height: offset.height,
		width: offset.width
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
var offsetParentScrollPosition = function(offsetParentElement, element) {
	return offsetParentElement ? elementScrollPosition$1(offsetParentElement) : parentScrollPosition(element);
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
var positionWithScroll = function(element, parent, scale) {
	if (scale === void 0) scale = 1;
	var offsetParentElement = parent ? offsetParent(parent) : null;
	var _a = position$1(element, offsetParentElement), top = _a.top, left = _a.left, height = _a.height, width = _a.width;
	var _b = offsetParentScrollPosition(offsetParentElement, element), x = _b.x, y = _b.y;
	var ownerDocument = element.ownerDocument;
	var positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;
	return {
		top: top + y * positionScale,
		left: left + x * positionScale,
		height,
		width
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
var removeScroll = function(rect, scroll) {
	return {
		top: rect.top - scroll.y,
		left: rect.left - scroll.x,
		height: rect.height,
		width: rect.width
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/collision.js
var Collision;
(function(Collision) {
	Collision["fit"] = "fit";
	Collision["flip"] = "flip";
	Collision["none"] = "none";
})(Collision || (Collision = {}));
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position, size, viewPortSize) {
	var output = 0;
	if (position + size > viewPortSize) output = viewPortSize - (position + size);
	if (position < 0) output = -position;
	return output;
};
var flip = function(_a) {
	var offset = _a.offset, size = _a.size, anchorSize = _a.anchorSize, viewPortSize = _a.viewPortSize, anchorAlignPoint = _a.anchorAlignPoint, elementAlignPoint = _a.elementAlignPoint, margin = _a.margin;
	var output = 0;
	var isPositionCentered = elementAlignPoint === AlignPoint.center || elementAlignPoint === AlignPoint.middle;
	var isOriginCentered = anchorAlignPoint === AlignPoint.center || anchorAlignPoint === AlignPoint.middle;
	var marginToAdd = 2 * margin;
	if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
		var isBeforeAnchor = anchorAlignPoint === AlignPoint.top || anchorAlignPoint === AlignPoint.left;
		if (offset < 0 && isBeforeAnchor) {
			output = size + anchorSize + marginToAdd;
			if (offset + output + size > viewPortSize) output = 0;
		} else if (offset >= 0 && !isBeforeAnchor) {
			if (offset + size > viewPortSize) output += -(anchorSize + size + marginToAdd);
			if (offset + output < 0) output = 0;
		}
	}
	return output;
};
var restrictToView = function(_a) {
	var anchorRect = _a.anchorRect, anchorAlign = _a.anchorAlign, elementRect = _a.elementRect, elementAlign = _a.elementAlign, collisions = _a.collisions, viewPort = _a.viewPort, _b = _a.margin, margin = _b === void 0 ? {} : _b;
	var elementTop = elementRect.top, elementLeft = elementRect.left, elementHeight = elementRect.height, elementWidth = elementRect.width;
	var viewPortHeight = viewPort.height, viewPortWidth = viewPort.width;
	var horizontalMargin = margin.horizontal || 0;
	var verticalMargin = margin.vertical || 0;
	var left = 0;
	var top = 0;
	var isVerticalFit = collisions.vertical === Collision.fit;
	var isHorizontalFit = collisions.horizontal === Collision.fit;
	var isVerticalFlip = collisions.vertical === Collision.flip;
	var isHorizontalFlip = collisions.horizontal === Collision.flip;
	if (isVerticalFit) top += fit(elementTop, elementHeight, viewPortHeight);
	if (isHorizontalFit) left += fit(elementLeft, elementWidth, viewPortWidth);
	if (isVerticalFlip) top += flip({
		margin: verticalMargin,
		offset: elementTop,
		size: elementHeight,
		anchorSize: anchorRect.height,
		viewPortSize: viewPortHeight,
		anchorAlignPoint: anchorAlign.vertical,
		elementAlignPoint: elementAlign.vertical
	});
	if (isHorizontalFlip) left += flip({
		margin: horizontalMargin,
		offset: elementLeft,
		size: elementWidth,
		anchorSize: anchorRect.width,
		viewPortSize: viewPortWidth,
		anchorAlignPoint: anchorAlign.horizontal,
		elementAlignPoint: elementAlign.horizontal
	});
	var flippedVertical = isVerticalFlip && top !== 0;
	var flippedHorizontal = isHorizontalFlip && left !== 0;
	var fittedVertical = isVerticalFit && top !== 0;
	var fittedHorizontal = isHorizontalFit && left !== 0;
	return {
		flipped: flippedHorizontal || flippedVertical,
		fitted: fittedVertical || fittedHorizontal,
		flip: {
			horizontal: flippedHorizontal,
			vertical: flippedVertical
		},
		fit: {
			horizontal: fittedHorizontal,
			vertical: fittedVertical
		},
		offset: {
			left,
			top
		}
	};
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/siblings.js
var siblings = function(element) {
	var _a;
	var result = [];
	var sibling = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.firstElementChild;
	while (sibling) {
		if (sibling !== element) result.push(sibling);
		sibling = sibling.nextElementSibling;
	}
	return result;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
var siblingContainer = function(anchor, container) {
	var parentElements = parents(anchor);
	var containerElement = container;
	var siblingElements;
	var result;
	while (containerElement) {
		siblingElements = siblings(containerElement);
		result = parentElements.reduce(function(list, p) {
			return list.concat(siblingElements.filter(function(s) {
				return s === p;
			}));
		}, [])[0];
		if (result) break;
		containerElement = containerElement.parentElement;
	}
	return result;
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/utils.js
var eitherRect = function(rect, offset) {
	if (!rect) return {
		height: 0,
		left: offset.left,
		top: offset.top,
		width: 0
	};
	return rect;
};
var scaleRect = function(rect, scale) {
	if (!rect || scale === 1) return rect;
	return {
		height: rect.height / scale,
		left: rect.left / scale,
		top: rect.top / scale,
		width: rect.width / scale
	};
};
var removeStackingOffset = function(rect, stackingOffset) {
	if (!stackingOffset) return rect;
	return {
		height: rect.height,
		left: rect.left - stackingOffset.left,
		top: rect.top - stackingOffset.top,
		width: rect.width
	};
};
function memoize(fun) {
	var _this = this;
	var result;
	var called = false;
	return function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (called) return result;
		result = fun.apply(_this, args);
		called = true;
		return result;
	};
}
var hasRelativeStackingContext = memoize(function(elementSource) {
	if (!canUseDOM()) return false;
	var currentDocument = elementSource ? elementSource.ownerDocument : document;
	if (!currentDocument || !currentDocument.body) return false;
	var top = 10;
	var parent = currentDocument.createElement("div");
	parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
	parent.innerHTML = "<div style=\"position: fixed; top: ".concat(top, "px;\">child</div>");
	currentDocument.body.appendChild(parent);
	var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
	currentDocument.body.removeChild(parent);
	return isDifferent;
});
var canUseDOM = function() {
	return Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
};
var utils = {
	eitherRect,
	scaleRect,
	removeStackingOffset,
	hasRelativeStackingContext,
	canUseDOM
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/dom-utils.js
var STYLES = [
	"font-size",
	"font-family",
	"font-stretch",
	"font-style",
	"font-weight",
	"line-height"
];
var addOffset = function(current, addition) {
	return {
		left: current.left + addition.left,
		top: current.top + addition.top
	};
};
var getWindow = function() {
	return utils.canUseDOM() ? window : null;
};
var getFontStyles = function(el) {
	var window = getWindow();
	if (!window || !el) return [];
	var computedStyles = window.getComputedStyle(el);
	return STYLES.map(function(font) {
		return {
			key: font,
			value: computedStyles[font]
		};
	});
};
var hasOffsetParent = function(el) {
	if (!el) return false;
	return Boolean(el.offsetParent);
};
var offset = function(el) {
	if (!el) return null;
	return offset$1(el);
};
var offsetAtPoint = function(element, currentLocation) {
	if (!element) return null;
	var _a = element.style, left = _a.left, top = _a.top, transition = _a.transition;
	element.style.transition = "none";
	element.style.left = "".concat(currentLocation.left, "px");
	element.style.top = "".concat(currentLocation.top, "px");
	var currentOffset = offset$1(element);
	element.style.left = left;
	element.style.top = top;
	element.offsetHeight;
	element.style.transition = transition;
	return currentOffset;
};
var position = function(element, popupElement, scale) {
	if (!element || !popupElement) return null;
	return positionWithScroll(element, popupElement, scale || 1);
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = function(element) {
	return "".concat(window.getComputedStyle(element).overflow);
};
var overflowComputedStyle = function(element) {
	var styles = window.getComputedStyle(element);
	return "".concat(styles.overflow).concat(styles.overflowX).concat(styles.overflowY);
};
var overflowStyle = function(element) {
	return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = function(element) {
	var parentElements = [];
	if (!utils.canUseDOM()) return parentElements;
	var parent = element.parentElement;
	while (parent) {
		if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) parentElements.push(parent);
		parent = parent.parentElement;
	}
	parentElements.push(window);
	return parentElements;
};
var getRelativeContextElement = function(el) {
	if (!el || !utils.hasRelativeStackingContext()) return null;
	var parent = el.parentElement;
	while (parent) {
		if (window.getComputedStyle(parent).transform !== "none") return parent;
		parent = parent.parentElement;
	}
	return null;
};
var stackingElementOffset = function(el) {
	var relativeContextElement = getRelativeContextElement(el);
	if (!relativeContextElement) return null;
	return offset$1(relativeContextElement);
};
var stackingElementScroll = function(el) {
	var relativeContextElement = getRelativeContextElement(el);
	if (!relativeContextElement) return {
		x: 0,
		y: 0
	};
	return {
		x: relativeContextElement.scrollLeft,
		y: relativeContextElement.scrollTop
	};
};
var stackingElementViewPort = function(el) {
	var relativeContextElement = getRelativeContextElement(el);
	if (!relativeContextElement) return null;
	return {
		height: relativeContextElement.scrollHeight,
		width: relativeContextElement.scrollWidth
	};
};
var useRelativePosition = function(el) {
	return Boolean(getRelativeContextElement(el));
};
var zoomLevel = function() {
	if (!utils.canUseDOM()) return 1;
	return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
};
var isZoomed = function() {
	return zoomLevel() > 1;
};
var zIndex = function(anchor, container) {
	if (!anchor || !utils.canUseDOM()) return null;
	var sibling = siblingContainer(anchor, container);
	if (!sibling) return null;
	var result = [anchor].concat(parents(anchor, sibling)).reduce(function(index, p) {
		var zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
		var current = parseInt(zIndexStyle, 10);
		return current > index ? current : index;
	}, 0);
	return result ? result + 1 : null;
};
var domUtils = {
	addOffset,
	addScroll,
	align,
	boundingOffset,
	getFontStyles,
	getWindow,
	hasOffsetParent,
	offset,
	offsetAtPoint,
	position,
	removeScroll,
	restrictToView,
	scrollPosition,
	scrollableParents,
	getRelativeContextElement,
	stackingElementOffset,
	stackingElementScroll,
	stackingElementViewPort,
	useRelativePosition,
	windowViewport,
	zoomLevel,
	isZoomed,
	zIndex
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/align-element.js
var absoluteRect = function(anchor, element, offset, scale) {
	var scrollPos = elementScrollPosition(anchor, element);
	var rect = utils.eitherRect(domUtils.offset(anchor), offset);
	var stackScale = 2 * scale;
	var stackScroll = domUtils.stackingElementScroll(element);
	if (scale !== 1 && stackScroll) {
		stackScroll.x /= stackScale;
		stackScroll.y /= stackScale;
	}
	var stackOffset = domUtils.stackingElementOffset(element);
	if (scale !== 1 && stackOffset) {
		stackOffset.left /= stackScale;
		stackOffset.top /= stackScale;
	}
	return domUtils.removeScroll(domUtils.addScroll(utils.removeStackingOffset(utils.scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
};
var relativeRect = function(anchor, element, offset, scale) {
	var rect = utils.eitherRect(domUtils.position(anchor, element, scale), offset);
	return utils.scaleRect(rect, scale);
};
var elementScrollPosition = function(anchor, element) {
	return anchor ? {
		x: 0,
		y: 0
	} : domUtils.scrollPosition(element);
};
var alignElement = function(settings) {
	var anchor = settings.anchor, element = settings.element, anchorAlign = settings.anchorAlign, elementAlign = settings.elementAlign, margin = settings.margin, offset = settings.offset, positionMode = settings.positionMode;
	var currentScale = settings.scale || 1;
	var anchorRect = positionMode === "fixed" || !domUtils.hasOffsetParent(element) ? absoluteRect(anchor, element, offset, currentScale) : relativeRect(anchor, element, offset, currentScale);
	var elementRect = utils.scaleRect(domUtils.offset(element), currentScale);
	return domUtils.align({
		anchorAlign,
		anchorRect,
		elementAlign,
		elementRect,
		margin
	});
};
//#endregion
//#region node_modules/@progress/kendo-popup-common/dist/es/position-element.js
var positionElement = function(settings) {
	var anchor = settings.anchor, currentLocation = settings.currentLocation, element = settings.element, anchorAlign = settings.anchorAlign, elementAlign = settings.elementAlign, collisions = settings.collisions, margin = settings.margin;
	var currentScale = settings.scale || 1;
	var elementOffset = domUtils.offsetAtPoint(element, currentLocation);
	var elementRect = utils.scaleRect(elementOffset, currentScale);
	var anchorOffset = utils.scaleRect(domUtils.offset(anchor), currentScale);
	var anchorRect = utils.eitherRect(anchorOffset, currentLocation);
	var viewPort = settings.viewPort || domUtils.windowViewport(element);
	viewPort.width = viewPort.width / currentScale;
	viewPort.height = viewPort.height / currentScale;
	var result = domUtils.restrictToView({
		anchorAlign,
		anchorRect,
		collisions,
		elementAlign,
		elementRect,
		margin,
		viewPort
	});
	var offset = domUtils.addOffset(currentLocation, result.offset);
	return {
		flip: result.flip,
		flipped: result.flipped,
		fit: result.fit,
		fitted: result.fitted,
		offset
	};
};
//#endregion
//#region node_modules/@progress/kendo-react-popup/util.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d = 16.666666666666668, g$3 = function(u, f, t = {}) {
	let e, n, l, r, i = 0;
	t = t || {};
	const s = function() {
		i = t.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), e = void 0, r = u.apply(n, l), e || (n = l = null);
	};
	return function() {
		const o = (/* @__PURE__ */ new Date()).getTime();
		!i && t.leading === !1 && (i = o);
		const a = f - (o - i);
		return n = void 0, l = arguments, a <= 0 || a > f ? (e && (clearTimeout(e), e = void 0), i = o, r = u.apply(n, l), e || (n = l = null)) : !e && t.trailing !== !1 && (e = window.setTimeout(s, a)), r;
	};
};
//#endregion
//#region node_modules/@progress/kendo-react-popup/Popup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var ze = import_react.createContext((c) => c), Ne = 100, Ie = 1;
function b$1(c, p) {
	if (c === p) return !0;
	if (!!c != !!p) return !1;
	const D = Object.getOwnPropertyNames(c), T = Object.getOwnPropertyNames(p);
	if (D.length !== T.length) return !1;
	for (let m = 0; m < D.length; m++) {
		const h = D[m];
		if (c[h] !== p[h]) return !1;
	}
	return !0;
}
var Le = {
	left: -1e3,
	top: 0
}, re$1 = import_react.forwardRef((c, p) => {
	const T = import_react.useContext(ze).call(void 0, c), { collision: m = g$2.collision, anchorAlign: h = g$2.anchorAlign, popupAlign: v$6 = g$2.popupAlign, offset: R = g$2.offset, animate: z = g$2.animate, show: y = g$2.show, margin: q = g$2.margin, positionMode: V = g$2.positionMode, appendTo: P, contentKey: N, anchor: f, scale: ie, role: se, onKeyDown: ce, onPosition: W, onOpen: X, onMouseDownOutside: B, onClose: G, className: I, popupClass: L, id: le, style: M, children: ae } = T, ue = o$13(), S = T.unstyled || ue, C = S && S.uPopup, [n, U] = import_react.useState({
		current: "hidden",
		previous: "hidden",
		props: {}
	}), j = z && typeof z != "object" ? oe$1 : {
		...oe$1,
		...z
	}, pe = (e) => {
		window == null || window.addEventListener("mousedown", Q), k(e), J(e.firstChild, "enter", fe), U({
			...o,
			current: "shown",
			previous: o.current
		});
	}, k = (e) => {
		const { width: r, height: d } = e.style;
		if (e.offsetWidth === 0 && e.offsetHeight === 0) return;
		e.style.width = e.offsetWidth + "px", e.style.height = e.offsetHeight + "px";
		const u = positionElement({
			anchor: f,
			anchorAlign: h,
			element: e,
			elementAlign: v$6,
			collisions: m,
			currentLocation: alignElement({
				anchor: f,
				anchorAlign: h,
				element: e,
				elementAlign: v$6,
				offset: R,
				margin: q,
				positionMode: V,
				scale: ie
			}),
			margin: q
		});
		if (e.style.top = u.offset.top + "px", e.style.left = u.offset.left + "px", e.style.width = r, e.style.height = d, ee.current = {
			fit: u.fit,
			fitted: u.fitted,
			flip: u.flip,
			flipped: u.flipped
		}, W) {
			const K = {
				target: E.current,
				flipped: u.flipped,
				fitted: u.fitted
			};
			W.call(void 0, K);
		}
	}, fe = () => {
		const e = l.current;
		e && (y && e.classList.add(...n$12(v.animationContainerShown({ c: C })).split(" ").filter((r) => r)), he(e), X && X.call(void 0, { target: E.current }));
	}, J = (e, r, d) => {
		var u;
		if (!v$6) return;
		let a = j.direction;
		if (j.type === "slide") {
			const { horizontal: K, vertical: F } = v$6;
			typeof c.animate == "object" && c.animate.direction ? a = j.direction : K === "left" && F === "center" ? a = "right" : K === "right" && F === "center" ? a = "left" : F === "top" ? a = "down" : a = "up", (u = ee.current) != null && u.flipped && (a = {
				down: "up",
				up: "down",
				left: "right",
				right: "left"
			}[a]);
		}
		x$1(e, me()[r], r, d, C, j.type, a);
	}, Q = (e) => {
		var a;
		const r = ((a = e == null ? void 0 : e.target) == null ? void 0 : a.closest(".k-animation-container")) === null, d = (f == null ? void 0 : f.contains(e == null ? void 0 : e.target)) || !1;
		if (r) {
			if (B) {
				const u = {
					target: E.current,
					event: e,
					state: n,
					isAnchorClicked: d
				};
				B.call(void 0, u);
			}
			window == null || window.removeEventListener("mousedown", Q);
		}
	}, de = (e) => {
		if (!y) {
			const r = S && S.uPopup;
			e.classList.remove(...n$12(v.animationContainerShown({ c: r })).split(" ").filter((d) => d));
		}
		Z();
	}, Y = () => {
		o.current === "hiding" && (o.previous === "shown" || o.previous === "reposition") && U({
			...o,
			current: "hidden",
			previous: o.current
		}), G && G.call(void 0, { target: E.current });
	}, me = () => {
		const e = z;
		let r = 0, d = 0;
		return e && (e === !0 ? r = d = 300 : (r = e.openDuration || 0, d = e.closeDuration || 0)), {
			enter: r,
			exit: d
		};
	}, he = (e) => {
		Z(), O.current = domUtils.scrollableParents(f || e), O.current && O.current.map((r) => r.addEventListener("scroll", H)), window.addEventListener("resize", H);
	}, Z = () => {
		O.current && (O.current.map((e) => e.removeEventListener("scroll", H)), O.current = void 0), window.removeEventListener("resize", H);
	}, H = g$3(() => {
		l.current && o.current !== "hidden" && o.current !== "hiding" && U({
			...n,
			current: "reposition",
			previous: o.current
		});
	}, d), ge = () => $ ? $ + Ie : Ne, $ = n$14() || 0, ee = import_react.useRef(void 0), O = import_react.useRef(void 0), l = import_react.useRef(null), E = import_react.useRef(null), te = import_react.useRef({}), _ = import_react.useRef(!1);
	import_react.useImperativeHandle(E, () => ({
		element: l.current,
		setPosition: k,
		props: c
	})), import_react.useImperativeHandle(p, () => E.current);
	const o = import_react.useMemo(() => {
		const e = {
			...n,
			props: {
				show: y,
				anchor: f,
				anchorAlign: h,
				appendTo: P,
				collision: m,
				popupAlign: v$6,
				className: I,
				popupClass: L,
				style: M,
				offset: R,
				contentKey: N
			}
		};
		return y ? n.current === "hidden" || n.current === "hiding" ? {
			...e,
			current: "showing",
			previous: n.current
		} : n.current === "showing" ? {
			...e,
			current: "shown",
			previous: n.current
		} : n.current === "shown" && (!b$1(R, n.props.offset) || !b$1(h, n.props.anchorAlign) || !b$1(P, n.props.appendTo) || !b$1(m, n.props.collision) || !b$1(v$6, n.props.popupAlign) || !b$1(M, n.props.style) || f !== n.props.anchor || L !== n.props.popupClass || I !== n.props.className) ? {
			...e,
			current: "reposition",
			previous: n.current
		} : e : n.current === "hiding" || n.current === "hidden" ? {
			...e,
			current: "hidden",
			previous: n.current
		} : {
			...e,
			current: "hiding",
			previous: n.current
		};
	}, [
		y,
		f,
		h,
		P,
		m,
		v$6,
		I,
		L,
		M,
		R,
		N,
		n
	]);
	import_react.useEffect(() => {
		o.current === "hiding" && !_.current && l.current ? (_.current = !0, de(l.current), J(l.current.firstChild, "exit", Y)) : (_.current = !1, o.current === "showing" && l.current && !l.current.classList.contains("k-animation-container-shown") ? pe(l.current) : o.current === "hiding" && l.current ? Y() : o.current === "reposition" && o.previous === "shown" ? setTimeout(() => {
			U({
				...o,
				current: "shown",
				previous: o.current
			});
		}, 0) : o.current === "shown" && te.current.contentKey !== N && l.current && k(l.current)), o.current === "reposition" && (o.previous === "shown" || o.previous === "showing") && l.current && k(l.current), te.current = { contentKey: N };
	}, [o]), import_react.useEffect(() => () => {
		Z();
	}, []);
	const ne = P || (e$15 ? f && f.ownerDocument ? f.ownerDocument.body : document.body : void 0), we = Object.assign({}, {
		position: V,
		top: 0,
		left: -1e4
	}, M || {}), ve = o.current === "hiding";
	if ((y || ve) && ne) {
		const e = ge(), r = /* @__PURE__ */ import_react.createElement(t$12.Provider, { value: e }, /* @__PURE__ */ import_react.createElement("div", {
			onKeyDown: ce,
			className: n$12(v.animationContainer({ c: C }), I),
			id: le,
			ref: l,
			style: {
				zIndex: e,
				...we
			}
		}, /* @__PURE__ */ import_react.createElement("div", {
			className: n$12(v.animationChild({ c: C })),
			style: { transitionDelay: "0ms" }
		}, /* @__PURE__ */ import_react.createElement("div", {
			role: se,
			className: n$12(v.popup({ c: C }), L)
		}, ae))));
		return P !== null ? import_react_dom.createPortal(r, ne) : r;
	}
	return null;
}), g$2 = {
	collision: {
		horizontal: Collision.fit,
		vertical: Collision.flip
	},
	anchorAlign: {
		horizontal: AlignPoint.left,
		vertical: AlignPoint.bottom
	},
	popupAlign: {
		horizontal: AlignPoint.left,
		vertical: AlignPoint.top
	},
	offset: Le,
	animate: !0,
	show: !1,
	margin: {
		horizontal: 0,
		vertical: 0
	},
	positionMode: "absolute"
}, oe$1 = {
	type: "slide",
	direction: "down"
};
re$1.displayName = "Popup";
re$1.propTypes = {
	anchor: function(c) {
		const p = c.anchor;
		return p && typeof p.nodeType != "number" ? /* @__PURE__ */ new Error("Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.") : null;
	},
	appendTo: function(c) {
		const p = c.appendTo;
		return p && typeof p.nodeType != "number" ? /* @__PURE__ */ new Error("Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed.") : null;
	},
	className: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired)]),
	id: import_prop_types.default.string,
	popupClass: import_prop_types.default.oneOfType([
		import_prop_types.default.string,
		import_prop_types.default.arrayOf(import_prop_types.default.string),
		import_prop_types.default.object
	]),
	collision: import_prop_types.default.shape({
		horizontal: import_prop_types.default.oneOf([
			Collision.fit,
			Collision.flip,
			Collision.none
		]),
		vertical: import_prop_types.default.oneOf([
			Collision.fit,
			Collision.flip,
			Collision.none
		])
	}),
	anchorAlign: import_prop_types.default.shape({
		horizontal: import_prop_types.default.oneOf([
			AlignPoint.left,
			AlignPoint.center,
			AlignPoint.right
		]),
		vertical: import_prop_types.default.oneOf([
			AlignPoint.top,
			AlignPoint.center,
			AlignPoint.bottom
		])
	}),
	popupAlign: import_prop_types.default.shape({
		horizontal: import_prop_types.default.oneOf([
			AlignPoint.left,
			AlignPoint.center,
			AlignPoint.right
		]),
		vertical: import_prop_types.default.oneOf([
			AlignPoint.top,
			AlignPoint.center,
			AlignPoint.bottom
		])
	}),
	offset: import_prop_types.default.shape({
		left: import_prop_types.default.number,
		top: import_prop_types.default.number
	}),
	children: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.node]),
	show: import_prop_types.default.bool,
	animate: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.shape({
		type: import_prop_types.default.oneOf([
			"slide",
			"zoom",
			"push",
			"expand",
			"fade"
		]),
		openDuration: import_prop_types.default.number,
		closeDuration: import_prop_types.default.number
	})]),
	margin: import_prop_types.default.shape({
		horizontal: import_prop_types.default.number,
		vertical: import_prop_types.default.number
	}),
	positionMode: import_prop_types.default.oneOf(["fixed", "absolute"]),
	scale: import_prop_types.default.number,
	style: import_prop_types.default.object,
	onClose: import_prop_types.default.func,
	onPosition: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onKeyDown: import_prop_types.default.func,
	onMouseDownOutside: import_prop_types.default.func
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/utils/popup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function n$6(o) {
	const t = {
		horizontal: "left",
		vertical: "bottom"
	};
	return o && (t.horizontal = "right"), t;
}
function i$2(o) {
	const t = {
		horizontal: "left",
		vertical: "top"
	};
	return o && (t.horizontal = "right"), t;
}
//#endregion
//#region node_modules/@progress/kendo-react-buttons/package-metadata.mjs
/**
* @hidden
*/
var packageMetadata = Object.freeze({
	name: "@progress/kendo-react-buttons",
	productName: "KendoReact",
	productCode: "KENDOUIREACT",
	productCodes: ["KENDOUIREACT"],
	publishDate: 1777886115,
	version: "14.4.1",
	licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
});
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/SplitButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var u$1 = class u extends import_react.Component {
	constructor(i) {
		super(i), this.state = {
			focused: !1,
			focusedIndex: -1,
			opened: !1
		}, this.wrapper = null, this.mainButton = null, this.list = null, this.skipFocus = !1, this.buttonsData = [], this.showLicenseWatermark = !1, this.onKeyDown = (t) => {
			const { focusedIndex: e } = this.state;
			if (t.altKey) {
				!this.opened && t.keyCode === e$14.down ? (t.preventDefault(), this.setState({ focusedIndex: 0 }), this.setOpen(!0, t)) : this.opened && t.keyCode === e$14.up && (t.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, t));
				return;
			}
			let o;
			if (t.keyCode === e$14.enter || t.keyCode === e$14.space) {
				if (t.preventDefault(), this.dispatchClickEvent(t, e), e >= 0) {
					o = { focusedIndex: this.opened ? -1 : 0 };
					const n = !this.opened;
					this.setOpen(n, t);
				}
			} else if (this.opened && t.keyCode === e$14.esc) {
				this.setState({ focusedIndex: -1 }), this.setOpen(!1, t);
				return;
			}
			if (this.opened) {
				const n = i$3(e, t.keyCode, t.altKey, this.buttonsData.length);
				n !== e && (o = o || {}, o.focusedIndex = n);
				const h = t.keyCode === e$14.up || t.keyCode === e$14.down || t.keyCode === e$14.left || t.keyCode === e$14.right;
				!t.altKey && (h || t.keyCode === e$14.home || t.keyCode === e$14.end) && t.preventDefault();
			}
			o && this.setState(o);
		}, this.switchFocus = (t) => {
			this.skipFocus = !0, t(), window.setTimeout(() => this.skipFocus = !1, 0);
		}, this.onFocus = (t) => {
			this.skipFocus || (v$3(this.props.onFocus, t, this, void 0), this.setState({ focused: !0 }));
		}, this.setOpen = (t, e) => {
			this.opened !== t && (this.openedDuringOnChange = t, this.setState({ opened: t }), e ? this.dispatchPopupEvent(e, t) : this.openedDuringOnChange = void 0);
		}, this.onItemClick = (t, e) => {
			this.opened && this.setState({ focusedIndex: 0 }), this.dispatchClickEvent(t, e), this.setOpen(!1, t);
		}, this.onBlur = (t) => {
			this.skipFocus || (this.setState({
				focused: !1,
				focusedIndex: -1
			}), v$3(this.props.onBlur, t, this, void 0), setTimeout(() => {
				this.setOpen(!1, t);
			}, 0));
		}, this.onPopupClose = (t) => {
			var o;
			const e = o$10(document);
			this.element && this.element.removeAttribute("tabindex"), (e === this.list || (o = this.list) != null && o.contains(e)) && this.switchFocus(() => {
				this.element && this.element.focus({ preventScroll: !0 });
			}), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, t);
		}, this.listRef = (t) => {
			this.list = t, t && this.state.focused && this.switchFocus(() => {
				t.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
			});
		}, this.onSplitPartClick = (t) => {
			if (this.buttonsData.length) {
				const e = !this.opened;
				this.setState({
					focusedIndex: e ? 0 : -1,
					focused: !0
				}), this.setOpen(e, t);
			}
		}, this.onDownSplitPart = (t) => {
			t.preventDefault();
			const e = o$10(document);
			this.element && e !== this.element && e !== this.list && this.element.focus();
		}, this.onItemDown = (t) => {
			o$10(document) === this.list && t.preventDefault();
		}, this.dispatchPopupEvent = (t, e) => {
			v$3(e ? this.props.onOpen : this.props.onClose, t, this, void 0), this.openedDuringOnChange = void 0;
		}, this.showLicenseWatermark = !_(packageMetadata, { component: "SplitButton" }), this.licenseMessage = v$4(packageMetadata);
	}
	get guid() {
		return this.props.id ? this.props.id + "-accessibility-id" : this.props.id;
	}
	get opened() {
		return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
	}
	/**
	* @hidden
	*/
	render() {
		this.buttonsData = this.props.items || import_react.Children.toArray(this.props.children).filter((r) => r && r.type === e$5).map((r) => r.props);
		const i = this.isRtl(), t = i ? "rtl" : void 0, { id: e, style: o, tabIndex: n, disabled: h } = this.props;
		return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
			id: e,
			style: o,
			className: n$12("k-split-button", "k-button-group", { "k-focus": this.state.focused }, this.props.rounded && `k-rounded-${e$6.roundedMap[this.props.rounded]}`, this.props.className),
			onKeyDown: this.onKeyDown,
			onFocus: this.onFocus,
			onBlur: this.onBlur,
			dir: t,
			ref: (r) => {
				this.wrapper = r;
			}
		}, /* @__PURE__ */ import_react.createElement(A$2, {
			ref: (r) => {
				this.mainButton = r && r.element;
			},
			type: "button",
			size: this.props.size,
			rounded: this.props.rounded,
			fillMode: this.props.fillMode,
			themeColor: this.props.themeColor,
			onClick: (r) => this.onItemClick(r, -1),
			disabled: h || void 0,
			tabIndex: n,
			accessKey: this.props.accessKey,
			className: this.props.buttonClass,
			icon: this.props.icon,
			svgIcon: this.props.svgIcon,
			iconClass: this.props.iconClass,
			startIcon: this.props.startIcon,
			endIcon: this.props.endIcon,
			imageUrl: this.props.imageUrl,
			dir: t,
			"aria-disabled": h,
			"aria-haspopup": !0,
			"aria-expanded": this.opened || void 0,
			"aria-label": this.props.ariaLabel,
			"aria-controls": this.opened ? this.guid : void 0,
			id: "button-" + this.guid,
			title: this.props.title
		}, this.props.text), /* @__PURE__ */ import_react.createElement(A$2, {
			type: "button",
			size: this.props.size,
			rounded: this.props.rounded,
			fillMode: this.props.fillMode,
			themeColor: this.props.themeColor,
			icon: "caret-alt-down",
			svgIcon: caretAltDownIcon,
			className: "k-split-button-arrow",
			disabled: h || void 0,
			tabIndex: -1,
			onClick: this.onSplitPartClick,
			onMouseDown: this.onDownSplitPart,
			onPointerDown: this.onDownSplitPart,
			dir: t,
			"aria-label": "menu toggling button"
		}), this.renderPopup(i)), this.showLicenseWatermark && /* @__PURE__ */ import_react.createElement(M$3, { message: this.licenseMessage }));
	}
	/**
	* @hidden
	*/
	componentDidMount() {
		(this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
	}
	/**
	* The DOM element of main button.
	*/
	get element() {
		return this.mainButton;
	}
	dispatchClickEvent(i, t) {
		this.isItemDisabled(t) || (t === -1 ? v$3(this.props.onButtonClick, i, this, void 0) : v$3(this.props.onItemClick, i, this, {
			item: this.buttonsData[t],
			itemIndex: t
		}));
	}
	renderPopup(i) {
		const { popupSettings: t = {} } = this.props, { focusedIndex: e } = this.state;
		return /* @__PURE__ */ import_react.createElement(re$1, {
			anchor: this.wrapper,
			show: this.opened,
			animate: t.animate,
			popupClass: n$12("k-menu-popup", t.popupClass),
			anchorAlign: t.anchorAlign || n$6(i),
			popupAlign: t.popupAlign || i$2(i),
			style: i ? { direction: "rtl" } : void 0,
			onClose: this.onPopupClose
		}, /* @__PURE__ */ import_react.createElement("ul", {
			role: "menu",
			id: this.guid,
			"aria-labelledby": "button-" + this.guid,
			tabIndex: -1,
			ref: this.listRef,
			"aria-activedescendant": e >= 0 ? `${this.guid}-${e}` : void 0,
			className: n$12("k-menu-group", { [`k-menu-group-${e$6.sizeMap[this.props.size] || this.props.size}`]: this.props.size })
		}, this.renderChildItems()));
	}
	renderChildItems() {
		const { item: i, itemRender: t, textField: e } = this.props;
		return this.buttonsData.length > 0 ? this.buttonsData.map((o, n) => /* @__PURE__ */ import_react.createElement(k, {
			className: n$12("k-menu-item", { "k-first": n === 0 }, { "k-last": n === this.buttonsData.length - 1 }),
			dataItem: o,
			textField: e,
			focused: this.state.focusedIndex === n,
			onClick: this.onItemClick,
			onDown: this.onItemDown,
			render: t,
			item: i,
			key: n,
			index: n,
			id: `${this.guid}-${n}`
		})) : null;
	}
	isItemDisabled(i) {
		return this.buttonsData[i] ? this.buttonsData[i].disabled : this.props.disabled;
	}
	isRtl() {
		return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.wrapper && getComputedStyle(this.wrapper).direction === "rtl";
	}
};
u$1.propTypes = {
	accessKey: import_prop_types.default.string,
	ariaLabel: import_prop_types.default.string,
	title: import_prop_types.default.string,
	onButtonClick: import_prop_types.default.func,
	onFocus: import_prop_types.default.func,
	onBlur: import_prop_types.default.func,
	onItemClick: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	text: import_prop_types.default.string,
	items: import_prop_types.default.arrayOf(import_prop_types.default.any),
	textField: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	imageUrl: import_prop_types.default.string,
	popupSettings: import_prop_types.default.object,
	itemRender: import_prop_types.default.any,
	item: import_prop_types.default.func,
	className: import_prop_types.default.string,
	buttonClass: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf([
		"flat",
		"link",
		"outline",
		"solid",
		"clear"
	]),
	themeColor: import_prop_types.default.oneOf([
		"base",
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
		"inverse"
	])
}, u$1.defaultProps = {
	size: void 0,
	rounded: void 0,
	fillMode: void 0,
	themeColor: void 0
};
var C = u$1;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/DropDownButtonItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$2 = class r extends import_react.Component {
	/**
	* @hidden
	*/
	render() {
		return null;
	}
};
r$2.propTypes = {
	text: import_prop_types.default.string,
	icon: import_prop_types.default.string,
	iconClass: import_prop_types.default.string,
	imageUrl: import_prop_types.default.string,
	selected: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	render: import_prop_types.default.any
};
var s$6 = r$2;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/ListButton/DropDownButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var J = 12e3, Q$1 = 2e3, m$1 = class m extends import_react.Component {
	constructor(i) {
		super(i), this.state = {
			opened: !1,
			focused: !1,
			focusedIndex: -1
		}, this.mainButton = null, this.list = null, this.skipFocus = !1, this.showLicenseWatermark = !1, this.buttonsData = [], this.onKeyDown = (t) => {
			const { focusedIndex: e } = this.state;
			if (t.altKey) {
				!this.opened && t.keyCode === e$14.down ? (t.preventDefault(), this.setOpen(!0, t), this.setState({ focusedIndex: 0 })) : this.opened && t.keyCode === e$14.up && (t.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, t));
				return;
			}
			const o = { ...this.state };
			if (t.keyCode === e$14.enter || t.keyCode === e$14.space) {
				t.preventDefault(), e >= 0 && this.dispatchClickEvent(t, e);
				const a = !this.opened;
				this.setState({
					focused: !0,
					focusedIndex: a ? 0 : -1
				}), this.setOpen(a, t);
				return;
			}
			if (this.opened && t.keyCode === e$14.esc) {
				this.setState({ focusedIndex: -1 }), this.setOpen(!1, t);
				return;
			}
			if (this.opened) {
				o.focusedIndex = i$3(e, t.keyCode, t.altKey, this.buttonsData.length);
				const l = t.keyCode === e$14.up || t.keyCode === e$14.down || t.keyCode === e$14.left || t.keyCode === e$14.right;
				!t.altKey && (l || t.keyCode === e$14.home || t.keyCode === e$14.end) && t.preventDefault();
			}
			this.setState(o);
		}, this.switchFocus = (t) => {
			this.skipFocus = !0, t(), window.setTimeout(() => this.skipFocus = !1, 0);
		}, this.handleFocus = (t) => {
			this.skipFocus || (this.setState({
				focused: !0,
				focusedIndex: this.opened ? 0 : -1
			}), v$3(this.props.onFocus, t, this, void 0));
		}, this.handleButtonBlur = (t) => {
			this.opened || (this.setState({ focused: !1 }), v$3(this.props.onBlur, t, this, void 0));
		}, this.handleMenuBlur = (t) => {
			this.skipFocus || (this.setState({
				focused: !1,
				focusedIndex: -1
			}), v$3(this.props.onBlur, t, this, void 0), setTimeout(() => {
				this.setOpen(!1, t);
			}, 0));
		}, this.setOpen = (t, e) => {
			this.opened !== t && (this.openedDuringOnChange = t, this.setState({ opened: t }), e ? this.dispatchPopupEvent(e, t) : this.openedDuringOnChange = void 0);
		}, this.onItemClick = (t, e) => {
			this.setState({ focusedIndex: -1 }), this.dispatchClickEvent(t, e), this.setOpen(!1, t);
		}, this.onItemDown = (t) => {
			o$10(document) === this.list && t.preventDefault();
		}, this.mouseDown = (t) => {
			t.preventDefault();
			const e = o$10(document);
			this.element && e !== this.element && e !== this.list && this.element.focus();
		}, this.onPopupClose = (t) => {
			var o;
			const e = o$10(document);
			this.element && this.element.removeAttribute("tabindex"), (e === this.list || (o = this.list) != null && o.contains(e)) && this.switchFocus(() => {
				this.element && this.element.focus({ preventScroll: !0 });
			}), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, t);
		}, this.listRef = (t) => {
			this.list = t, t && this.state.focused && this.switchFocus(() => {
				t.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
			});
		}, this.onClickMainButton = (t) => {
			if (v$3(this.props.onClick, t, this, void 0), !this.buttonsData.length) return;
			const e = !this.opened;
			this.setState({
				focused: !0,
				focusedIndex: e ? 0 : -1
			}), this.setOpen(e, t);
		}, this.dispatchPopupEvent = (t, e) => {
			v$3(e ? this.props.onOpen : this.props.onClose, t, this, void 0), this.openedDuringOnChange = void 0;
		}, this.showLicenseWatermark = !_(packageMetadata, { component: "DropDownButton" }), this.licenseMessage = v$4(packageMetadata);
	}
	get guid() {
		return this.props.id + "-accessibility-id";
	}
	get opened() {
		return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
	}
	/**
	* @hidden
	*/
	render() {
		const i = this.isRtl(), t = this.props.unstyled && this.props.unstyled.uDropDownButton, e = i ? "rtl" : void 0, { id: o, style: a, tabIndex: l, disabled: n, size: D, rounded: y, fillMode: k, themeColor: I, ariaLabel: w, title: b, accessKey: B, icon: O, svgIcon: x, iconClass: E, buttonClass: v, className: S, imageUrl: P$2, startIcon: F, endIcon: N } = this.props;
		return this.buttonsData = this.props.items || import_react.Children.toArray(this.props.children).filter((h) => h && h.type === s$6).map((h) => h.props), /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(A$2, {
			id: o,
			size: D,
			style: a,
			rounded: y,
			fillMode: k,
			themeColor: I,
			onClick: this.onClickMainButton,
			onMouseDown: this.mouseDown,
			onKeyDown: this.onKeyDown,
			onFocus: this.handleFocus,
			onBlur: this.handleButtonBlur,
			"aria-disabled": n ? "true" : void 0,
			tabIndex: l,
			accessKey: B,
			icon: O,
			svgIcon: x,
			iconClass: E,
			className: n$12(v, S, P.wrapper({
				c: t,
				focused: this.state.focused,
				disabled: n
			})),
			imageUrl: P$2,
			dir: e,
			ref: (h) => {
				this.mainButton = (h == null ? void 0 : h.element) || null;
			},
			type: "button",
			"aria-expanded": this.opened ? "true" : "false",
			"aria-label": w,
			"aria-controls": this.opened ? this.guid : void 0,
			title: b,
			startIcon: F,
			endIcon: N
		}, this.props.text), this.showLicenseWatermark && /* @__PURE__ */ import_react.createElement(M$3, { message: this.licenseMessage }), this.renderPopup(i));
	}
	/**
	* @hidden
	*/
	componentDidMount() {
		(this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
	}
	/**
	* The DOM element of main button.
	*/
	get element() {
		return this.mainButton;
	}
	dispatchClickEvent(i, t) {
		this.isItemDisabled(t) || v$3(this.props.onItemClick, i, this, {
			item: this.buttonsData[t],
			itemIndex: t
		});
	}
	renderPopup(i) {
		const { popupSettings: t = {}, _zIndex: e, unstyled: o } = this.props, a = e ? e + Q$1 : J, l = o && o.uDropDownButton, { focusedIndex: n } = this.state;
		return /* @__PURE__ */ import_react.createElement(t$12.Provider, { value: a }, /* @__PURE__ */ import_react.createElement(re$1, {
			anchor: this.mainButton,
			show: this.opened,
			animate: t.animate,
			popupClass: n$12(P.popup({ c: l }), t.popupClass),
			anchorAlign: t.anchorAlign || n$6(i),
			popupAlign: t.popupAlign || i$2(i),
			style: i ? { direction: "rtl" } : void 0,
			onClose: this.onPopupClose
		}, /* @__PURE__ */ import_react.createElement("ul", {
			role: "list",
			id: this.guid,
			tabIndex: -1,
			"aria-activedescendant": n >= 0 ? `${this.guid}-${n}` : void 0,
			ref: this.listRef,
			onKeyDown: this.onKeyDown,
			onBlur: this.handleMenuBlur,
			className: n$12(P.ul({
				c: l,
				size: this.props.size
			}))
		}, this.renderChildItems())));
	}
	renderChildItems() {
		const { item: i, itemRender: t, textField: e, unstyled: o } = this.props, a = o && o.uDropDownButton;
		return this.buttonsData.length > 0 ? this.buttonsData.map((l, n) => /* @__PURE__ */ import_react.createElement(k, {
			className: n$12(P.item({ c: a }), l.className, { "k-first": n === 0 }, { "k-last": n === this.buttonsData.length - 1 }),
			dataItem: l,
			textField: e,
			focused: this.state.focusedIndex === n,
			onClick: this.onItemClick,
			onDown: this.onItemDown,
			render: t,
			item: i,
			index: n,
			key: n,
			id: `${this.guid}-${n}`
		})) : null;
	}
	isItemDisabled(i) {
		return this.buttonsData[i] ? this.buttonsData[i].disabled : this.props.disabled;
	}
	isRtl() {
		return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.mainButton && getComputedStyle(this.mainButton).direction === "rtl";
	}
};
m$1.propTypes = {
	accessKey: import_prop_types.default.string,
	ariaLabel: import_prop_types.default.string,
	title: import_prop_types.default.string,
	onFocus: import_prop_types.default.func,
	onBlur: import_prop_types.default.func,
	onClick: import_prop_types.default.func,
	onItemClick: import_prop_types.default.func,
	onOpen: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	items: import_prop_types.default.arrayOf(import_prop_types.default.any),
	textField: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	iconClass: import_prop_types.default.string,
	imageUrl: import_prop_types.default.string,
	popupSettings: import_prop_types.default.object,
	itemRender: import_prop_types.default.func,
	item: import_prop_types.default.func,
	className: import_prop_types.default.string,
	buttonClass: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf([
		"flat",
		"link",
		"outline",
		"solid",
		"clear"
	]),
	themeColor: import_prop_types.default.oneOf([
		"base",
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
		"inverse"
	])
}, m$1.defaultProps = {
	size: void 0,
	rounded: void 0,
	fillMode: void 0,
	themeColor: void 0
};
var g$1 = m$1;
var Y = a$4(x$4(a$5(), a$3(m$5(g$1))));
Y.displayName = "KendoReactDropDownButton";
//#endregion
//#region node_modules/@progress/kendo-react-buttons/util.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$5 = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-split-button .k-split-button-arrow)", o$8 = ":not(.k-popup *)", n$5 = [
	"button" + t$5 + o$8,
	".k-button-group > button" + t$5 + o$8,
	".k-colorpicker" + o$8,
	".k-dropdownlist" + o$8
];
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarSeparator.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$4 = (a) => /* @__PURE__ */ import_react.createElement("div", {
	ref: a._ref,
	className: n$12("k-toolbar-separator k-separator", a.className)
});
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/default-data.js
var defaultData = {
	en: {
		name: "en",
		identity: {
			version: {
				_unicodeVersion: "14.0.0",
				_cldrVersion: "41"
			},
			language: "en"
		},
		territory: "US",
		numbers: {
			symbols: {
				decimal: ".",
				group: ",",
				list: ";",
				percentSign: "%",
				plusSign: "+",
				minusSign: "-",
				exponential: "E",
				superscriptingExponent: "×",
				perMille: "‰",
				infinity: "∞",
				nan: "NaN",
				timeSeparator: ":",
				approximatelySign: "~"
			},
			decimal: {
				patterns: ["n"],
				groupSize: [3]
			},
			scientific: {
				patterns: ["nEn"],
				groupSize: []
			},
			percent: {
				patterns: ["n%"],
				groupSize: [3]
			},
			currency: {
				patterns: ["$n"],
				groupSize: [3],
				"unitPattern-count-one": "n $",
				"unitPattern-count-other": "n $"
			},
			currencies: {
				BGN: {
					displayName: "Bulgarian Lev",
					"displayName-count-one": "Bulgarian lev",
					"displayName-count-other": "Bulgarian leva",
					symbol: "BGN"
				},
				EUR: {
					displayName: "Euro",
					"displayName-count-one": "euro",
					"displayName-count-other": "euros",
					symbol: "€",
					"symbol-alt-narrow": "€"
				},
				USD: {
					displayName: "US Dollar",
					"displayName-count-one": "US dollar",
					"displayName-count-other": "US dollars",
					symbol: "$",
					"symbol-alt-narrow": "$"
				}
			},
			localeCurrency: "USD",
			accounting: {
				patterns: ["$n", "($n)"],
				groupSize: [3]
			}
		},
		calendar: {
			gmtFormat: "GMT{0}",
			gmtZeroFormat: "GMT",
			patterns: {
				d: "M/d/y",
				D: "EEEE, MMMM d, y",
				m: "MMM d",
				M: "MMMM d",
				y: "MMM y",
				Y: "MMMM y",
				F: "EEEE, MMMM d, y h:mm:ss a",
				g: "M/d/y h:mm a",
				G: "M/d/y h:mm:ss a",
				t: "h:mm a",
				T: "h:mm:ss a",
				s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
				u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
			},
			dateTimeFormats: {
				full: "{1}, {0}",
				long: "{1}, {0}",
				medium: "{1}, {0}",
				short: "{1}, {0}",
				availableFormats: {
					Bh: "h B",
					Bhm: "h:mm B",
					Bhms: "h:mm:ss B",
					d: "d",
					E: "ccc",
					EBh: "E h B",
					EBhm: "E h:mm B",
					EBhms: "E h:mm:ss B",
					Ed: "d E",
					Eh: "E h a",
					Ehm: "E h:mm a",
					EHm: "E HH:mm",
					Ehms: "E h:mm:ss a",
					EHms: "E HH:mm:ss",
					Gy: "y G",
					GyM: "M/y G",
					GyMd: "M/d/y G",
					GyMEd: "E, M/d/y G",
					GyMMM: "MMM y G",
					GyMMMd: "MMM d, y G",
					GyMMMEd: "E, MMM d, y G",
					h: "h a",
					H: "HH",
					hm: "h:mm a",
					Hm: "HH:mm",
					hms: "h:mm:ss a",
					Hms: "HH:mm:ss",
					hmsv: "h:mm:ss a v",
					Hmsv: "HH:mm:ss v",
					hmv: "h:mm a v",
					Hmv: "HH:mm v",
					hv: "h a v",
					Hv: "HH'h' v",
					M: "L",
					Md: "M/d",
					MEd: "E, M/d",
					MMM: "LLL",
					MMMd: "MMM d",
					MMMEd: "E, MMM d",
					MMMMd: "MMMM d",
					"MMMMW-count-one": "'week' W 'of' MMMM",
					"MMMMW-count-other": "'week' W 'of' MMMM",
					ms: "mm:ss",
					y: "y",
					yM: "M/y",
					yMd: "M/d/y",
					yMEd: "E, M/d/y",
					yMMM: "MMM y",
					yMMMd: "MMM d, y",
					yMMMEd: "E, MMM d, y",
					yMMMM: "MMMM y",
					yQQQ: "QQQ y",
					yQQQQ: "QQQQ y",
					"yw-count-one": "'week' w 'of' Y",
					"yw-count-other": "'week' w 'of' Y"
				}
			},
			timeFormats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			dateFormats: {
				full: "EEEE, MMMM d, y",
				long: "MMMM d, y",
				medium: "MMM d, y",
				short: "M/d/yy"
			},
			days: {
				format: {
					abbreviated: [
						"Sun",
						"Mon",
						"Tue",
						"Wed",
						"Thu",
						"Fri",
						"Sat"
					],
					narrow: [
						"S",
						"M",
						"T",
						"W",
						"T",
						"F",
						"S"
					],
					short: [
						"Su",
						"Mo",
						"Tu",
						"We",
						"Th",
						"Fr",
						"Sa"
					],
					wide: [
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday"
					]
				},
				"stand-alone": {
					abbreviated: [
						"Sun",
						"Mon",
						"Tue",
						"Wed",
						"Thu",
						"Fri",
						"Sat"
					],
					narrow: [
						"S",
						"M",
						"T",
						"W",
						"T",
						"F",
						"S"
					],
					short: [
						"Su",
						"Mo",
						"Tu",
						"We",
						"Th",
						"Fr",
						"Sa"
					],
					wide: [
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday"
					]
				}
			},
			months: {
				format: {
					abbreviated: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					],
					narrow: [
						"J",
						"F",
						"M",
						"A",
						"M",
						"J",
						"J",
						"A",
						"S",
						"O",
						"N",
						"D"
					],
					wide: [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July",
						"August",
						"September",
						"October",
						"November",
						"December"
					]
				},
				"stand-alone": {
					abbreviated: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					],
					narrow: [
						"J",
						"F",
						"M",
						"A",
						"M",
						"J",
						"J",
						"A",
						"S",
						"O",
						"N",
						"D"
					],
					wide: [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July",
						"August",
						"September",
						"October",
						"November",
						"December"
					]
				}
			},
			quarters: {
				format: {
					abbreviated: [
						"Q1",
						"Q2",
						"Q3",
						"Q4"
					],
					narrow: [
						"1",
						"2",
						"3",
						"4"
					],
					wide: [
						"1st quarter",
						"2nd quarter",
						"3rd quarter",
						"4th quarter"
					]
				},
				"stand-alone": {
					abbreviated: [
						"Q1",
						"Q2",
						"Q3",
						"Q4"
					],
					narrow: [
						"1",
						"2",
						"3",
						"4"
					],
					wide: [
						"1st quarter",
						"2nd quarter",
						"3rd quarter",
						"4th quarter"
					]
				}
			},
			dayPeriods: {
				format: {
					abbreviated: {
						midnight: "midnight",
						am: "AM",
						"am-alt-variant": "am",
						noon: "noon",
						pm: "PM",
						"pm-alt-variant": "pm",
						morning1: "in the morning",
						afternoon1: "in the afternoon",
						evening1: "in the evening",
						night1: "at night"
					},
					narrow: {
						midnight: "mi",
						am: "a",
						"am-alt-variant": "am",
						noon: "n",
						pm: "p",
						"pm-alt-variant": "pm",
						morning1: "in the morning",
						afternoon1: "in the afternoon",
						evening1: "in the evening",
						night1: "at night"
					},
					wide: {
						midnight: "midnight",
						am: "AM",
						"am-alt-variant": "am",
						noon: "noon",
						pm: "PM",
						"pm-alt-variant": "pm",
						morning1: "in the morning",
						afternoon1: "in the afternoon",
						evening1: "in the evening",
						night1: "at night"
					}
				},
				"stand-alone": {
					abbreviated: {
						midnight: "midnight",
						am: "AM",
						"am-alt-variant": "am",
						noon: "noon",
						pm: "PM",
						"pm-alt-variant": "pm",
						morning1: "morning",
						afternoon1: "afternoon",
						evening1: "evening",
						night1: "night"
					},
					narrow: {
						midnight: "midnight",
						am: "AM",
						"am-alt-variant": "am",
						noon: "noon",
						pm: "PM",
						"pm-alt-variant": "pm",
						morning1: "morning",
						afternoon1: "afternoon",
						evening1: "evening",
						night1: "night"
					},
					wide: {
						midnight: "midnight",
						am: "AM",
						"am-alt-variant": "am",
						noon: "noon",
						pm: "PM",
						"pm-alt-variant": "pm",
						morning1: "morning",
						afternoon1: "afternoon",
						evening1: "evening",
						night1: "night"
					}
				}
			},
			eras: { format: {
				wide: {
					"0": "Before Christ",
					"1": "Anno Domini",
					"0-alt-variant": "Before Common Era",
					"1-alt-variant": "Common Era"
				},
				abbreviated: {
					"0": "BC",
					"1": "AD",
					"0-alt-variant": "BCE",
					"1-alt-variant": "CE"
				},
				narrow: {
					"0": "B",
					"1": "A",
					"0-alt-variant": "BCE",
					"1-alt-variant": "CE"
				}
			} },
			dateFields: {
				era: {
					wide: "era",
					short: "era",
					narrow: "era"
				},
				year: {
					wide: "year",
					short: "yr.",
					narrow: "yr."
				},
				quarter: {
					wide: "quarter",
					short: "qtr.",
					narrow: "qtr."
				},
				month: {
					wide: "month",
					short: "mo.",
					narrow: "mo."
				},
				week: {
					wide: "week",
					short: "wk.",
					narrow: "wk."
				},
				weekOfMonth: {
					wide: "week of month",
					short: "wk. of mo.",
					narrow: "wk. of mo."
				},
				day: {
					wide: "day",
					short: "day",
					narrow: "day"
				},
				dayOfYear: {
					wide: "day of year",
					short: "day of yr.",
					narrow: "day of yr."
				},
				weekday: {
					wide: "day of the week",
					short: "day of wk.",
					narrow: "day of wk."
				},
				weekdayOfMonth: {
					wide: "weekday of the month",
					short: "wkday. of mo.",
					narrow: "wkday. of mo."
				},
				dayperiod: {
					short: "AM/PM",
					wide: "AM/PM",
					narrow: "AM/PM"
				},
				hour: {
					wide: "hour",
					short: "hr.",
					narrow: "hr."
				},
				minute: {
					wide: "minute",
					short: "min.",
					narrow: "min."
				},
				second: {
					wide: "second",
					short: "sec.",
					narrow: "sec."
				},
				zone: {
					wide: "time zone",
					short: "zone",
					narrow: "zone"
				},
				millisecond: {
					narrow: "ms",
					short: "ms",
					wide: "millisecond"
				}
			}
		}
	},
	supplemental: {
		likelySubtags: { en: "en-Latn-US" },
		currencyData: { region: { US: [{ USD: { _from: "1792-01-01" } }] } },
		weekData: {
			firstDay: { US: "sun" },
			weekendStart: { "001": "sat" },
			weekendEnd: { "001": "sun" }
		}
	}
};
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/is-string.js
function isString(value) {
	return typeof value === "string";
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/error-details.js
var error_details_default = {
	"NoLocale": "Missing locale info for '{0}'",
	"NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
	"NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
	"NoCurrencyRegion": "No currency data for region '{0}'",
	"NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
	"NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
	"NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
	"NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
	"NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
	"NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
};
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/errors.js
var formatRegExp$2 = /\{(\d+)}?\}/g;
var IntlError = class {
	constructor({ name, message }) {
		if (!name || !message) throw new Error("{ name: string, message: string } object is required!");
		this.name = name;
		this.message = message;
	}
	formatMessage(...values) {
		const flattenValues = flatten(values);
		const formattedMessage = this.message.replace(formatRegExp$2, function(match, index) {
			return flattenValues[parseInt(index, 10)];
		});
		return `${this.name}: ${formattedMessage}`;
	}
	error(...values) {
		return new Error(this.formatMessage(values));
	}
};
var flatten = function(arr) {
	return arr.reduce((a, b) => a.concat(b), []);
};
var toIntlErrors = function(errors) {
	const predicate = function(prev, name) {
		prev[name] = new IntlError({
			name,
			message: errors[name]
		});
		return prev;
	};
	return Object.keys(errors).reduce(predicate, {});
};
var errors = toIntlErrors(error_details_default);
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/info.js
function availableLocaleInfo(fullName, suffixes) {
	const parts = fullName.split("-");
	const language = parts[0];
	const script = parts[1];
	const territory = parts[2];
	return cldr[fullName] || suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory] || suffixes.indexOf(script) !== -1 && cldr[language + "-" + script] || cldr[language];
}
function localeFullName(language, suffixes) {
	const likelySubtags = cldr.supplemental.likelySubtags;
	for (let idx = 0; idx < suffixes.length; idx++) {
		let name = likelySubtags[language + "-" + suffixes[idx]];
		if (name) return name;
	}
	if (likelySubtags[language]) return likelySubtags[language];
}
var cldr = defaultData;
function getLocaleInfo(locale) {
	let info;
	if (isString(locale)) info = localeInfo(locale);
	else info = locale;
	return info;
}
function localeInfo(locale) {
	if (cldr[locale]) return cldr[locale];
	if (cldr.supplemental.likelySubtags) {
		const parts = locale.split("-");
		const language = parts[0];
		const suffixes = parts.slice(1);
		const fullName = localeFullName(language, suffixes);
		const info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
		if (info) return info;
	}
	throw errors.NoLocale.error(locale);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/constants.js
var DECIMAL = "decimal";
var CURRENCY = "currency";
var ACCOUNTING = "accounting";
var PERCENT = "percent";
var SCIENTIFIC = "scientific";
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/territory.js
function territoryFromName(name, identity) {
	const likelySubtags = cldr.supplemental.likelySubtags;
	let parts = name.split("-");
	if (likelySubtags) {
		const likelyName = likelySubtags[name] || likelySubtags[parts[0]];
		if (likelyName) parts = likelyName.split("-");
	}
	if (identity) for (let idx = parts.length - 1; idx >= 1; idx--) {
		const part = parts[idx];
		if (part === identity.variant || part === identity.script) parts.splice(idx, 1);
	}
	const length = parts.length;
	if (length > 1) return parts[length - 1].toUpperCase();
}
function localeTerritory(info) {
	if (info.territory) return info.territory;
	const name = info.name;
	const identity = info.identity;
	let territory;
	if (identity && identity.territory) territory = identity.territory;
	else territory = territoryFromName(name, identity);
	info.territory = territory;
	return territory;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/date-field-name.js
function dateFieldName(options, locale = "en") {
	const dateFields = localeInfo(locale).calendar.dateFields;
	if (!dateFields) throw errors.NoDateFieldNames.error();
	const fieldNameInfo = dateFields[options.type] || {};
	return fieldNameInfo[options.nameType] || fieldNameInfo["wide"];
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/date-format-names.js
function lowerArray(arr) {
	const result = [];
	for (let idx = 0; idx < arr.length; idx++) result.push(arr[idx].toLowerCase());
	return result;
}
function lowerObject(obj) {
	const result = {};
	for (let field in obj) result[field] = obj[field].toLowerCase();
	return result;
}
function cloneLower(obj) {
	return Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
}
function dateFormatNames(locale, options) {
	const { type, nameType, standAlone, lower } = options;
	const info = getLocaleInfo(locale);
	const formatType = standAlone ? "stand-alone" : "format";
	const lowerNameType = (lower ? "lower-" : "") + nameType;
	const formatNames = info.calendar[type][formatType];
	let result = formatNames[lowerNameType];
	if (!result && lower) result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/parse-range-date.js
function parseRangeDate(value) {
	const parts = value.split("-");
	const year = parseInt(parts[0], 10);
	const month = parseInt(parts[1], 10) - 1;
	const day = parseInt(parts[2], 10);
	return new Date(year, month, day);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/currency.js
var { NoCurrency, NoCurrencyDisplay, NoSupplementalCurrency, NoCurrencyRegion, NoValidCurrency } = errors;
var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = "XXX";
var GLOBAL_CURRENCIES = {
	"001": "USD",
	"150": "EUR"
};
function getCurrencyInfo(locale, currency, throwIfNoValid) {
	const currencies = getLocaleInfo(locale).numbers.currencies;
	if (!currencies) {
		if (throwIfNoValid) throw NoCurrency.error();
		return;
	}
	const currencyDisplayInfo = currencies[currency];
	if (!currencyDisplayInfo) {
		if (throwIfNoValid) throw NoCurrencyDisplay.error();
		return;
	}
	return currencyDisplayInfo;
}
function lengthComparer(a, b) {
	return b.length - a.length;
}
function regionCurrency(regionCurrencies) {
	let latestValidUntil, latestValidUntilRange;
	let latestStillValid, latestStillValidDate;
	for (let idx = 0; idx < regionCurrencies.length; idx++) {
		const currency = regionCurrencies[idx];
		const code = Object.keys(currency)[0];
		const info = currency[code];
		if (code !== INVALID_CURRENCY_CODE && info._tender !== "false" && info._from) {
			if (!info._to) {
				const stillValidDate = parseRangeDate(info._from);
				if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
					latestStillValid = code;
					latestStillValidDate = stillValidDate;
				}
			} else if (!latestStillValid) {
				const validFrom = parseRangeDate(info._from);
				const validTo = parseRangeDate(info._to);
				if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
					latestValidUntil = code;
					latestValidUntilRange = {
						from: validFrom,
						to: validTo
					};
				}
			}
		}
	}
	return latestStillValid || latestValidUntil;
}
function currencyDisplays(locale, currency, throwIfNoValid = true) {
	const currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
	if (!currencyInfo) return;
	if (!currencyInfo.displays) {
		const displays = [currency];
		for (let field in currencyInfo) displays.push(currencyInfo[field]);
		displays.sort(lengthComparer);
		currencyInfo.displays = displays;
	}
	return currencyInfo.displays;
}
function currencyDisplay(locale, options) {
	const { value, currency, currencyDisplay = SYMBOL } = options;
	if (currencyDisplay === "code") return currency;
	const currencyInfo = getCurrencyInfo(locale, currency, true);
	let result;
	if (currencyDisplay === SYMBOL) result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL] || currency;
	else if (typeof value === "undefined" || value !== 1) result = currencyInfo["displayName-count-other"];
	else result = currencyInfo["displayName-count-one"];
	return result;
}
function currencyFractionOptions(code) {
	let minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
	let maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
	const fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];
	if (fractions && fractions._digits) maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
	return {
		minimumFractionDigits,
		maximumFractionDigits
	};
}
function territoryCurrencyCode(territory, throwIfNoValid = true) {
	if (GLOBAL_CURRENCIES[territory]) return GLOBAL_CURRENCIES[territory];
	const currencyData = cldr.supplemental.currencyData;
	if (!currencyData) {
		if (throwIfNoValid) throw NoSupplementalCurrency.error();
		return;
	}
	const regionCurrencies = currencyData.region[territory];
	if (!regionCurrencies) {
		if (throwIfNoValid) throw NoCurrencyRegion.error(territory);
		return;
	}
	return regionCurrency(regionCurrencies);
}
function localeCurrency(locale, throwIfNoValid) {
	const info = getLocaleInfo(locale);
	const numbers = info.numbers;
	if (!numbers.localeCurrency) {
		const currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);
		if (!currency && throwIfNoValid) throw NoValidCurrency.error(info.name);
		numbers.localeCurrency = currency;
	}
	return numbers.localeCurrency;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/constants.js
var DAYS_OF_WEEK = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat"
];
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/first-day.js
var { NoWeekData: NoWeekData$1, NoFirstDay } = errors;
function firstDay(locale) {
	const info = getLocaleInfo(locale);
	if (!isNaN(info.firstDay)) return info.firstDay;
	const weekData = cldr.supplemental.weekData;
	if (!weekData) throw NoWeekData$1.error();
	const firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay["001"];
	if (!firstDay) throw NoFirstDay.error();
	info.firstDay = DAYS_OF_WEEK.indexOf(firstDay);
	return info.firstDay;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/weekend-range.js
var { NoWeekData } = errors;
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/cldr/number-symbols.js
function numberSymbols(locale) {
	return getLocaleInfo(locale).numbers.symbols;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/is-negative-zero.js
function isNegativeZero(value) {
	return 1 / value === -Infinity;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/format-currency-symbol.js
function formatCurrencySymbol(info, options = {}) {
	if (!options.currency) options.currency = localeCurrency(info, true);
	return currencyDisplay(info, options);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/group-integer.js
function groupInteger(number, start, end, options, info) {
	const symbols = info.numbers.symbols;
	const decimalIndex = number.indexOf(symbols.decimal);
	const groupSizes = options.groupSize.slice();
	let groupSize = groupSizes.shift();
	let integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;
	let integer = number.substring(start, integerEnd);
	let result = number;
	const integerLength = integer.length;
	if (integerLength >= groupSize) {
		let idx = integerLength;
		let parts = [];
		while (idx > -1) {
			let value = integer.substring(idx - groupSize, idx);
			if (value) parts.push(value);
			idx -= groupSize;
			let newGroupSize = groupSizes.shift();
			groupSize = newGroupSize !== void 0 ? newGroupSize : groupSize;
			if (groupSize === 0) {
				value = integer.substring(0, idx);
				if (value) parts.push(value);
				break;
			}
		}
		integer = parts.reverse().join(symbols.group);
		result = number.substring(0, start) + integer + number.substring(integerEnd);
	}
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/is-currency-style.js
function isCurrencyStyle(style) {
	return style === "currency" || style === "accounting";
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/pad.js
function pad(number, digits = 2, right = false) {
	const count = digits - String(number).length;
	let result = number;
	if (count > 0) {
		const padString = new Array(count + 1).join("0");
		result = right ? number + padString : padString + number;
	}
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/round.js
var MAX_PRECISION = 20;
function round(value, precision) {
	let result = value;
	let decimals = precision || 0;
	result = result.toString().split("e");
	result = Math.round(Number(result[0] + "e" + (result[1] ? Number(result[1]) + decimals : decimals)));
	result = result.toString().split("e");
	result = Number(result[0] + "e" + (result[1] ? Number(result[1]) - decimals : -decimals));
	return result.toFixed(Math.min(decimals, MAX_PRECISION));
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/standard-number-format.js
var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;
var trailingZeroRegex = /0+$/;
function fractionOptions(options) {
	let { minimumFractionDigits, maximumFractionDigits, style } = options;
	const isCurrency = isCurrencyStyle(style);
	let currencyFractions;
	if (isCurrency) currencyFractions = currencyFractionOptions(options.currency);
	if (minimumFractionDigits === void 0) minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
	if (maximumFractionDigits === void 0) if (style === "percent") maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
	else if (isCurrency) maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
	else maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
	return {
		minimumFractionDigits,
		maximumFractionDigits
	};
}
function applyPattern(value, pattern, symbol) {
	let result = "";
	for (let idx = 0, length = pattern.length; idx < length; idx++) {
		let ch = pattern.charAt(idx);
		if (ch === "n") result += value;
		else if (ch === "$" || ch === "%") result += symbol;
		else result += ch;
	}
	return result;
}
function currencyUnitPattern(info, value) {
	const currencyInfo = info.numbers.currency;
	let pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
	if (value < 0) pattern = pattern.replace("n", `-n`);
	return pattern;
}
function standardNumberFormat(number, options, info) {
	const symbols = info.numbers.symbols;
	const { style } = options;
	const isCurrency = isCurrencyStyle(style);
	if (style === "scientific") return (options.minimumFractionDigits !== void 0 ? number.toExponential(options.minimumFractionDigits) : number.toExponential()).replace(".", symbols.decimal);
	let value = number;
	let symbol;
	if (isCurrency) {
		options.value = value;
		symbol = formatCurrencySymbol(info, options);
	}
	if (style === "percent") {
		value *= 100;
		symbol = symbols.percentSign;
	}
	const { minimumFractionDigits, maximumFractionDigits } = fractionOptions(options);
	value = round(value, maximumFractionDigits);
	const negative = value < 0;
	const negativeZero = isNegativeZero(number);
	const parts = value.split(".");
	let integer = parts[0];
	let fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, "") : "", minimumFractionDigits, true);
	if (negative) integer = integer.substring(1);
	if (options.minimumIntegerDigits) integer = pad(integer, options.minimumIntegerDigits);
	let formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;
	if (fraction) formattedValue += symbols.decimal + fraction;
	let pattern;
	if (isCurrency && options.currencyDisplay === "name") pattern = currencyUnitPattern(info, number);
	else {
		const patterns = options.patterns;
		pattern = negative || negativeZero ? patterns[1] || "-" + patterns[0] : patterns[0];
	}
	if (pattern === "n" && !negative) return formattedValue;
	return applyPattern(formattedValue, pattern, symbol);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/utils.js
var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var PLACEHOLDER$1 = "__??__";
function setStyleOptions(formatOptions, info) {
	const format = formatOptions.format;
	if (format.indexOf("%") !== -1) {
		formatOptions.style = PERCENT;
		formatOptions.symbol = info.numbers.symbols.percentSign;
		formatOptions.number *= 100;
	}
	if (format.indexOf("$") !== -1) {
		formatOptions.style = CURRENCY;
		formatOptions.symbol = formatCurrencySymbol(info);
	}
}
function setFormatLiterals(formatOptions) {
	let format = formatOptions.format;
	if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
		const literals = formatOptions.literals = [];
		formatOptions.format = format.replace(literalRegExp, function(match) {
			const quoteChar = match.charAt(0).replace("\\", "");
			const literal = match.slice(1).replace(quoteChar, "");
			literals.push(literal);
			return PLACEHOLDER$1;
		});
	}
}
function replaceLiterals(number, literals) {
	let result = number;
	if (literals) {
		const length = literals.length;
		for (let idx = 0; idx < length; idx++) result = result.replace(PLACEHOLDER$1, literals[idx]);
	}
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/custom-number-format.js
var SHARP = "#";
var ZERO = "0";
var trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
var trailingPointRegExp = /\.$/;
var commaRegExp = /,/g;
function trimTrailingZeros(value, lastZero) {
	let trimRegex;
	if (lastZero === 0) trimRegex = trailingZerosRegExp;
	else trimRegex = new RegExp(`(\\.[0-9]{${lastZero}}[1-9]*)0+$`, "g");
	return value.replace(trimRegex, "$1").replace(trailingPointRegExp, "");
}
function roundNumber(formatOptions) {
	let { number, format } = formatOptions;
	let decimalIndex = format.indexOf(".");
	if (decimalIndex !== -1) {
		const zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
		const sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
		const hasZero = zeroIndex > -1;
		const hasSharp = sharpIndex > -1;
		let fraction = number.toString().split("e");
		if (fraction[1]) fraction = round(number, Math.abs(fraction[1]));
		else fraction = fraction[0];
		fraction = fraction.split(".")[1] || "";
		let precision = fraction.length;
		let trailingZeros = -1;
		if (!hasZero && !hasSharp) {
			formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
			decimalIndex = -1;
			precision = 0;
		} else if (hasZero && zeroIndex > sharpIndex) precision = zeroIndex;
		else if (sharpIndex > zeroIndex) {
			if (hasSharp && precision > sharpIndex) precision = sharpIndex;
			else if (hasZero && precision < zeroIndex) precision = zeroIndex;
			trailingZeros = hasZero ? zeroIndex : 0;
		}
		if (precision > -1) {
			number = round(number, precision);
			if (trailingZeros > -1) number = trimTrailingZeros(number, trailingZeros);
		}
	} else number = round(number);
	if (formatOptions.negative && number * -1 >= 0 && !formatOptions.negativeZero) formatOptions.negative = false;
	formatOptions.number = number;
	formatOptions.decimalIndex = decimalIndex;
}
function isConstantFormat(format) {
	return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}
function setValueSpecificFormat(formatOptions) {
	let { number, format } = formatOptions;
	format = format.split(";");
	if ((formatOptions.negative || formatOptions.negativeZero) && format[1]) {
		format = format[1];
		formatOptions.hasNegativeFormat = true;
	} else if (number === 0) {
		const zeroFormat = format[2];
		format = zeroFormat || format[0];
		if (zeroFormat && isConstantFormat(zeroFormat)) formatOptions.constant = zeroFormat;
	} else format = format[0];
	formatOptions.format = format;
}
function setGroupOptions(formatOptions) {
	formatOptions.hasGroup = formatOptions.format.indexOf(",") > -1;
	if (formatOptions.hasGroup) formatOptions.format = formatOptions.format.replace(commaRegExp, "");
}
function placeholderIndex(index1, index2, start) {
	let index;
	if (index1 === -1 && index2 !== -1) index = index2;
	else if (index1 !== -1 && index2 === -1) index = index1;
	else index = start ? Math.min(index1, index2) : Math.max(index1, index2);
	return index;
}
function setPlaceholderIndices(formatOptions) {
	const format = formatOptions.format;
	let sharpIndex = format.indexOf(SHARP);
	let zeroIndex = format.indexOf(ZERO);
	let start = placeholderIndex(sharpIndex, zeroIndex, true);
	sharpIndex = format.lastIndexOf(SHARP);
	zeroIndex = format.lastIndexOf(ZERO);
	let end = placeholderIndex(sharpIndex, zeroIndex);
	if (start === format.length) end = start;
	formatOptions.start = start;
	formatOptions.end = end;
	formatOptions.lastZeroIndex = zeroIndex;
}
function replaceStyleSymbols(number, style, symbol) {
	let result = number;
	if (style === "currency" || style === "percent") {
		result = "";
		for (let idx = 0, length = number.length; idx < length; idx++) {
			let ch = number.charAt(idx);
			result += ch === "$" || ch === "%" ? symbol : ch;
		}
	}
	return result;
}
function replacePlaceHolders(formatOptions, info) {
	const { start, end, negative, negativeZero, format, decimalIndex, lastZeroIndex, hasNegativeFormat, hasGroup } = formatOptions;
	let number = formatOptions.number;
	const value = number.toString().split(".");
	const length = format.length;
	const integer = value[0];
	const fraction = value[1] || "";
	const integerLength = integer.length;
	let replacement = "";
	number = format.substring(0, start);
	if ((negative || negativeZero) && !hasNegativeFormat) number += "-";
	for (let idx = start; idx < length; idx++) {
		let ch = format.charAt(idx);
		if (decimalIndex === -1) {
			if (end - idx < integerLength) {
				number += integer;
				break;
			}
		} else {
			if (lastZeroIndex !== -1 && lastZeroIndex < idx) replacement = "";
			if (decimalIndex - idx <= integerLength && decimalIndex - idx > -1) {
				number += integer;
				idx = decimalIndex;
			}
			if (decimalIndex === idx) {
				number += (fraction ? info.numbers.symbols.decimal : "") + fraction;
				idx += end - decimalIndex + 1;
				continue;
			}
		}
		if (ch === ZERO) {
			number += ch;
			replacement = ch;
		} else if (ch === SHARP) number += replacement;
	}
	if (hasGroup) number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, integerLength + start), info.numbers.decimal, info);
	if (end >= start) number += format.substring(end + 1);
	return number;
}
function applyCustomFormat(formatOptions, info) {
	let number = formatOptions.number;
	if (formatOptions.start !== -1) {
		number = replacePlaceHolders(formatOptions, info);
		number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
		number = replaceLiterals(number, formatOptions.literals);
	}
	return number;
}
function customNumberFormat(number, format, info) {
	const formatOptions = {
		negative: number < 0,
		number: Math.abs(number),
		negativeZero: isNegativeZero(number),
		format
	};
	setValueSpecificFormat(formatOptions);
	if (formatOptions.constant) return formatOptions.constant;
	setFormatLiterals(formatOptions);
	setStyleOptions(formatOptions, info);
	setGroupOptions(formatOptions);
	roundNumber(formatOptions);
	setPlaceholderIndices(formatOptions);
	return applyCustomFormat(formatOptions, info);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/format-options.js
var standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;
function standardFormatOptions(format) {
	const formatAndPrecision = standardFormatRegExp.exec(format);
	if (formatAndPrecision) {
		const options = { style: DECIMAL };
		let style = formatAndPrecision[1].toLowerCase();
		if (style === "c") options.style = CURRENCY;
		else if (style === "a") options.style = ACCOUNTING;
		else if (style === "p") options.style = PERCENT;
		else if (style === "e") options.style = SCIENTIFIC;
		if (formatAndPrecision[2]) options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
		return options;
	}
}
function formatOptions(format) {
	let options;
	if (isString(format)) options = standardFormatOptions(format);
	else options = format;
	return options;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/format-number.js
function formatNumber(number, format = "n", locale = "en") {
	if (number === void 0 || number === null) return "";
	if (!isFinite(number)) return String(number);
	const info = localeInfo(locale);
	const options = formatOptions(format);
	let result;
	if (options) {
		const style = options.style || "decimal";
		result = standardNumberFormat(number, Object.assign({}, info.numbers[style], options), info);
	} else result = customNumberFormat(number, format, info);
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/is-number.js
function isNumber(value) {
	return typeof value === "number";
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/numbers/parse-number.js
var exponentRegExp = /[eE][-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;
function cleanNegativePattern(number, patterns) {
	if (patterns.length > 1) {
		const parts = (patterns[1] || "").replace("$", "").split("n");
		if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) return number.replace(parts[0], "").replace(parts[1], "");
	}
}
function cleanCurrencyNumber(value, info, format) {
	const options = formatOptions(format) || {};
	let isCurrency = isCurrencyStyle(options.style);
	let number = value;
	let negative;
	const currency = options.currency || localeCurrency(info, isCurrency);
	if (currency) {
		const displays = currencyDisplays(info, currency, isCurrency);
		if (displays) for (let idx = 0; idx < displays.length; idx++) {
			let display = displays[idx];
			if (number.includes(display)) {
				number = number.replace(display, "");
				isCurrency = true;
				break;
			}
		}
		if (isCurrency) {
			const cleanNumber = cleanNegativePattern(number, info.numbers.currency.patterns) || cleanNegativePattern(number, info.numbers.accounting.patterns);
			if (cleanNumber) {
				negative = true;
				number = cleanNumber;
			}
		}
	}
	return {
		number,
		negative
	};
}
function cleanLiterals(number, formatOptions) {
	const literals = formatOptions.literals;
	let result = number;
	if (literals) for (let idx = 0; idx < literals.length; idx++) result = result.replace(literals[idx], "");
	return result;
}
function divideBy100(number) {
	const strNumber = String(number);
	const pointIndex = strNumber.indexOf(".");
	const zeroesCount = 2;
	let result = number / Math.pow(10, zeroesCount);
	if (pointIndex === -1 || String(result).length <= strNumber.length + zeroesCount) return result;
	const fractionDigits = strNumber.length - pointIndex + 1 + zeroesCount;
	return parseFloat(result.toFixed(fractionDigits));
}
function parseNumber(value, locale = "en", format = {}) {
	if (!value && value !== 0) return null;
	if (isNumber(value)) return value;
	const info = localeInfo(locale);
	const symbols = info.numbers.symbols;
	let number = value.toString();
	let formatOptions = format || {};
	let isPercent;
	if (isString(format)) {
		formatOptions = { format };
		setFormatLiterals(formatOptions);
		number = cleanLiterals(number, formatOptions);
		setStyleOptions(formatOptions, info);
	}
	if (formatOptions.style === "percent" || number.indexOf(symbols.percentSign) > -1) {
		number = number.replace(symbols.percentSign, "");
		isPercent = true;
	}
	if (exponentRegExp.test(number)) {
		number = parseFloat(number.replace(symbols.decimal, "."));
		return isNaN(number) ? null : number;
	}
	const { negative: negativeCurrency, number: currencyNumber } = cleanCurrencyNumber(number, info, formatOptions);
	number = String(currencyNumber).trim();
	const negativeSignIndex = number.indexOf("-");
	if (negativeSignIndex > 0) return null;
	let isNegative = negativeSignIndex > -1;
	isNegative = negativeCurrency !== void 0 ? negativeCurrency : isNegative;
	number = number.replace("-", "").replace(nonBreakingSpaceRegExp, " ").split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join("").replace(symbols.decimal, ".");
	number = parseFloat(number);
	if (isNaN(number)) number = null;
	else if (isNegative) number *= -1;
	if (number && isPercent) number = divideBy100(number);
	return number;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/format-string.js
var formatRegExp$1 = /\{(\d+)}/g;
function formatString(format) {
	const values = arguments;
	return format.replace(formatRegExp$1, (match, index) => {
		return values[parseInt(index, 10) + 1];
	});
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/date-pattern.js
var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [
	2,
	1,
	5,
	3,
	4
];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;
var PENALTIES = {
	[LONG_LESS_PENALTY_DELTA.toString()]: 8,
	[SHORT_LESS_PENALTY_DELTA.toString()]: 6,
	[LONG_MORE_PENALTY_DELTA.toString()]: 6,
	[SHORT_MORE_PENALTY_DELTA.toString()]: 3
};
var VALUE_FORMAT_LENGTH = {
	numeric: 1,
	"2-digit": 2,
	short: 3,
	long: 4,
	narrow: 5
};
var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;
function getHourSpecifier(options) {
	return options.hour12 ? "h" : "H";
}
var DATE_OPTIONS_MAP = [
	{
		key: "era",
		specifier: "G"
	},
	{
		key: "year",
		specifier: "y"
	},
	{
		key: "month",
		specifier: "M"
	},
	{
		key: "day",
		specifier: "d"
	},
	{
		key: "weekday",
		specifier: "E"
	},
	{
		key: "hour",
		getSpecifier: getHourSpecifier
	},
	{
		key: "minute",
		specifier: "m"
	},
	{
		key: "second",
		specifier: "s"
	},
	{
		key: "timeZoneName",
		specifier: "z"
	}
];
var STAND_ALONE_SPECIFIERS = {
	e: "c",
	E: "c",
	M: "L",
	Q: "q"
};
var specifiersRegex = {};
var resolvedFormats = {};
function getSpecifierRegex(specifier) {
	if (!specifiersRegex[specifier]) specifiersRegex[specifier] = new RegExp(specifier + "+");
	return specifiersRegex[specifier];
}
function skeletonSpecifiers(skeleton) {
	const result = [];
	let current = skeleton.charAt(0);
	let specifier = current;
	for (let idx = 1; idx < skeleton.length; idx++) {
		let character = skeleton.charAt(idx);
		if (character === specifier) current += character;
		else {
			result.push(current);
			current = specifier = character;
		}
	}
	result.push(current);
	return result;
}
function findBestMatch(specifiers, availableFormats) {
	const specifiersLength = specifiers.length;
	let maxScore = -Number.MAX_VALUE;
	let bestMatches, result;
	for (let format in availableFormats) {
		const matches = [];
		let currentFormat = format.replace("v", "z");
		let score = 0;
		for (let idx = 0; idx < specifiersLength; idx++) {
			const specifier = specifiers[idx];
			let match = (getSpecifierRegex(specifier[0]).exec(currentFormat) || [])[0];
			if (!match) score -= REMOVAL_PENALTY;
			else {
				currentFormat = currentFormat.replace(match, "");
				if (match.length !== specifier.length) {
					let delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
					score -= PENALTIES[delta];
				}
			}
			matches.push(match);
			if (score < maxScore) break;
		}
		if (currentFormat.length) score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
		if (score > maxScore) {
			maxScore = score;
			bestMatches = matches;
			result = availableFormats[format];
		}
	}
	result = result.replace("v", "z");
	for (let idx = 0; idx < specifiersLength; idx++) {
		const bestMatch = bestMatches[idx];
		if (bestMatch && bestMatch !== specifiers[idx]) {
			const matchSpecifier = bestMatches[idx][0];
			result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx]);
			if (STAND_ALONE_SPECIFIERS[matchSpecifier]) result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx]);
		}
	}
	return result;
}
function cacheFormat(skeleton, format, locale) {
	if (!resolvedFormats[locale]) resolvedFormats[locale] = {};
	resolvedFormats[locale][skeleton] = format;
}
function skeletonFormat(skeleton, info) {
	const availableFormats = info.calendar.dateTimeFormats.availableFormats;
	if (availableFormats[skeleton]) return availableFormats[skeleton];
	if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) return resolvedFormats[info.name][skeleton];
	const timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
	let result;
	if (timeStartIndex > 0) {
		const dateSkeleton = skeleton.substr(0, timeStartIndex);
		const timeSkeleton = skeleton.substr(timeStartIndex);
		result = formatString(info.calendar.dateTimeFormats.short, availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats), availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
	} else result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
	cacheFormat(skeleton, result, info.name);
	return result;
}
function skeletonFromOptions(options) {
	let result = [];
	for (let idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
		let option = DATE_OPTIONS_MAP[idx];
		let value = options[option.key];
		if (value) {
			let spcifier = option.specifier || option.getSpecifier(options);
			result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
		}
	}
	return result.join("");
}
function datePattern(format, info) {
	const calendar = info.calendar;
	let result;
	if (isString(format)) if (calendar.patterns[format]) result = calendar.patterns[format];
	else result = format;
	else if (format) {
		if (format.pattern) return format.pattern;
		let skeleton = format.skeleton;
		if (!skeleton) if (format.datetime) result = formatString(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
		else if (format.date) result = calendar.dateFormats[format.date];
		else if (format.time) result = calendar.timeFormats[format.time];
		else skeleton = skeletonFromOptions(format);
		if (skeleton) result = skeletonFormat(skeleton, info);
	}
	if (!result) result = calendar.patterns.d;
	return result;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/date-name-type.js
function dateNameType(formatLength) {
	let nameType;
	if (formatLength <= 3) nameType = "abbreviated";
	else if (formatLength === 4) nameType = "wide";
	else if (formatLength === 5) nameType = "narrow";
	else if (formatLength === 6) nameType = "short";
	return nameType;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/format-names.js
function formatNames(locale, type, formatLength, standAlone, lower) {
	return dateFormatNames(locale, {
		type,
		nameType: dateNameType(formatLength),
		standAlone,
		lower
	});
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/common/is-date.js
function isFunction(fun) {
	return typeof fun === "function";
}
function isDate(value) {
	return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/constants.js
var MONTH = "month";
var HOUR = "hour";
var ZONE = "zone";
var WEEKDAY = "weekday";
var QUARTER = "quarter";
var DATE_FIELD_MAP = {
	"G": "era",
	"y": "year",
	"q": QUARTER,
	"Q": QUARTER,
	"M": MONTH,
	"L": MONTH,
	"d": "day",
	"E": WEEKDAY,
	"c": WEEKDAY,
	"e": WEEKDAY,
	"h": HOUR,
	"H": HOUR,
	"k": HOUR,
	"K": HOUR,
	"m": "minute",
	"s": "second",
	"S": "millisecond",
	"a": "dayperiod",
	"x": ZONE,
	"X": ZONE,
	"z": ZONE,
	"Z": ZONE
};
var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/format-date.js
function formatDayOfWeekIndex(day, formatLength, localeInfo) {
	const firstDayIndex = firstDay(localeInfo);
	let dayIndex;
	if (day < firstDayIndex) dayIndex = 7 - firstDayIndex + day;
	else dayIndex = day - firstDayIndex;
	return dayIndex + 1;
}
function formatMonth(month, formatLength, info, standAlone) {
	if (formatLength <= 2) return pad(month + 1, formatLength);
	return formatNames(info, "months", formatLength, standAlone)[month];
}
function formatQuarter(date, formatLength, info, standAlone) {
	const quarter = Math.floor(date.getMonth() / 3);
	if (formatLength < 3) return quarter + 1;
	return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}
function formatTimeZone(date, info, options) {
	const { shortHours, optionalMinutes, separator, localizedName, zZeroOffset } = options;
	const offset = date.getTimezoneOffset() / 60;
	if (offset === 0 && zZeroOffset) return "Z";
	const sign = offset <= 0 ? "+" : "-";
	const hoursMinutes = Math.abs(offset).toString().split(".");
	const minutes = hoursMinutes[1] || 0;
	let result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
	if (minutes || !optionalMinutes) result += (separator ? ":" : "") + pad(minutes, 2);
	if (localizedName) result = formatString(offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat, result);
	return result;
}
function formatDayOfWeek(date, formatLength, info, standAlone) {
	let result;
	if (formatLength < 3) result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
	else result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
	return result;
}
var formatters = {};
formatters.d = function(date, formatLength) {
	return pad(date.getDate(), formatLength);
};
formatters.E = function(date, formatLength, info) {
	return formatNames(info, "days", formatLength)[date.getDay()];
};
formatters.M = function(date, formatLength, info) {
	return formatMonth(date.getMonth(), formatLength, info, false);
};
formatters.L = function(date, formatLength, info) {
	return formatMonth(date.getMonth(), formatLength, info, true);
};
formatters.y = function(date, formatLength) {
	let year = date.getFullYear();
	if (formatLength === 2) year = year % 100;
	return pad(year, formatLength);
};
formatters.h = function(date, formatLength) {
	return pad(date.getHours() % 12 || 12, formatLength);
};
formatters.H = function(date, formatLength) {
	return pad(date.getHours(), formatLength);
};
formatters.k = function(date, formatLength) {
	return pad(date.getHours() || 24, formatLength);
};
formatters.K = function(date, formatLength) {
	return pad(date.getHours() % 12, formatLength);
};
formatters.m = function(date, formatLength) {
	return pad(date.getMinutes(), formatLength);
};
formatters.s = function(date, formatLength) {
	return pad(date.getSeconds(), formatLength);
};
formatters.S = function(date, formatLength) {
	const milliseconds = date.getMilliseconds();
	let result;
	if (milliseconds !== 0) result = pad(String(milliseconds / 1e3).split(".")[1].substr(0, formatLength), formatLength, true);
	else result = pad("", formatLength);
	return result;
};
formatters.a = function(date, formatLength, info) {
	return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};
formatters.z = function(date, formatLength, info) {
	return formatTimeZone(date, info, {
		shortHours: formatLength < 4,
		optionalMinutes: formatLength < 4,
		separator: true,
		localizedName: true
	});
};
formatters.Z = function(date, formatLength, info) {
	return formatTimeZone(date, info, {
		separator: formatLength > 3,
		localizedName: formatLength === 4,
		zZeroOffset: formatLength === 5
	});
};
formatters.x = function(date, formatLength, info) {
	return formatTimeZone(date, info, {
		optionalMinutes: formatLength === 1,
		separator: formatLength === 3 || formatLength === 5
	});
};
formatters.X = function(date, formatLength, info) {
	return formatTimeZone(date, info, {
		optionalMinutes: formatLength === 1,
		separator: formatLength === 3 || formatLength === 5,
		zZeroOffset: true
	});
};
formatters.G = function(date, formatLength, info) {
	let era = date.getFullYear() >= 0 ? 1 : 0;
	return formatNames(info, "eras", formatLength)[era];
};
formatters.e = formatDayOfWeek;
formatters.c = function(date, formatLength, info) {
	return formatDayOfWeek(date, formatLength, info, true);
};
formatters.q = function(date, formatLength, info) {
	return formatQuarter(date, formatLength, info, true);
};
formatters.Q = formatQuarter;
function formatDate(date, format, locale = "en") {
	if (!isDate(date)) {
		if (date === void 0 || date === null) return "";
		return date;
	}
	const info = localeInfo(locale);
	return datePattern(format, info).replace(dateFormatRegExp, function(match) {
		let formatLength = match.length;
		let result;
		if (match.includes("'") || match.includes("\"")) result = match.slice(1, formatLength - 1);
		else result = formatters[match[0]](date, formatLength, info);
		return result;
	});
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/time-utils.js
function convertTimeZone(date, fromOffset, toOffset) {
	const fromLocalOffset = date.getTimezoneOffset();
	const offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 6e4);
	const toLocalOffset = offsetDate.getTimezoneOffset();
	return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 6e4);
}
function adjustDST(date, hours) {
	if (!hours && date.getHours() === 23) date.setHours(date.getHours() + 2);
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/parse-date.js
var timeZoneOffsetRegExp = /([+|-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
	2: /^\d{1,2}/,
	3: /^\d{1,3}/,
	4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER = "{0}";
var leadingSpacesRegex = /^ */;
var trailingSpacesRegex = / *$/;
var standardDateFormats = [
	"yyyy/MM/dd HH:mm:ss",
	"yyyy/MM/dd HH:mm",
	"yyyy/MM/dd",
	"E MMM dd yyyy HH:mm:ss",
	"yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
	"yyyy-MM-ddTHH:mm:ss.SSSXXX",
	"yyyy-MM-ddTHH:mm:ss.SSXXX",
	"yyyy-MM-ddTHH:mm:ssXXX",
	"yyyy-MM-ddTHH:mm:ss.SSSSSSS",
	"yyyy-MM-ddTHH:mm:ss.SSS",
	"yyyy-MM-ddTHH:mmXXX",
	"yyyy-MM-ddTHH:mmX",
	"yyyy-MM-ddTHH:mm:ss",
	"yyyy-MM-ddTHH:mm",
	"yyyy-MM-dd HH:mm:ss",
	"yyyy-MM-dd HH:mm",
	"yyyy-MM-dd",
	"HH:mm:ss",
	"HH:mm"
];
var FORMATS_SEQUENCE = [
	"G",
	"g",
	"F",
	"Y",
	"y",
	"M",
	"m",
	"D",
	"d",
	"y",
	"T",
	"t"
];
var TWO_DIGIT_YEAR_MAX = 2029;
function outOfRange(value, start, end) {
	return !(value >= start && value <= end);
}
function lookAhead(match, state) {
	let { format, idx } = state;
	let i = 0;
	while (format[idx] === match) {
		i++;
		idx++;
	}
	if (i > 0) idx -= 1;
	state.idx = idx;
	return i;
}
function getNumber(size, state) {
	let regex = size ? numberRegExp[size] || new RegExp("^\\d{1," + size + "}") : numberRegex, match = state.value.substr(state.valueIdx, size).match(regex);
	if (match) {
		match = match[0];
		state.valueIdx += match.length;
		return parseInt(match, 10);
	}
	return null;
}
function getIndexByName(names, state, lower) {
	let i = 0, length = names.length, name, nameLength, matchLength = 0, matchIdx = 0, subValue;
	for (; i < length; i++) {
		name = names[i];
		nameLength = name.length;
		subValue = state.value.substr(state.valueIdx, nameLength);
		if (lower) subValue = subValue.toLowerCase();
		if (subValue === name && nameLength > matchLength) {
			matchLength = nameLength;
			matchIdx = i;
		}
	}
	if (matchLength) {
		state.valueIdx += matchLength;
		return matchIdx + 1;
	}
	return null;
}
function checkLiteral(state) {
	let result = false;
	const valueChar = state.value.charAt(state.valueIdx);
	const formatChar = state.format[state.idx];
	const exactMatch = valueChar === formatChar;
	const whitespaceMatch = /\s/.test(formatChar) && /\s/.test(valueChar);
	if (exactMatch || whitespaceMatch) {
		state.valueIdx++;
		result = true;
	}
	return result;
}
function calendarGmtFormats(calendar) {
	const { gmtFormat, gmtZeroFormat } = calendar;
	if (!gmtFormat) throw errors.NoGMTInfo.error();
	return [gmtFormat.replace(PLACEHOLDER, "").toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER, "").toLowerCase()];
}
function parseTimeZoneOffset(state, info, options) {
	const { shortHours, noSeparator, optionalMinutes, localizedName, zLiteral } = options;
	state.UTC = true;
	if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
		state.valueIdx++;
		return false;
	}
	if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) return true;
	const matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
	if (!matches) return !localizedName;
	const hoursMatch = matches[1];
	const minutesMatch = matches[3];
	const hoursOffset = parseInt(hoursMatch, 10);
	const separator = matches[2];
	let minutesOffset = parseInt(minutesMatch, 10);
	if (isNaN(hoursOffset) || !shortHours && hoursMatch.length !== 3 || !optionalMinutes && isNaN(minutesOffset) || noSeparator && separator) return true;
	if (isNaN(minutesOffset)) minutesOffset = null;
	if (outOfRange(hoursOffset, -12, 13) || minutesOffset && outOfRange(minutesOffset, 0, 59)) return true;
	state.valueIdx += matches[0].length;
	state.hoursOffset = hoursOffset;
	state.minutesOffset = minutesOffset;
}
function parseMonth(ch, state, info) {
	const count = lookAhead(ch, state);
	const names = formatNames(info, "months", count, ch === "L", true);
	const month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);
	if (month === null || outOfRange(month, 1, 12)) return true;
	state.month = month - 1;
}
function parseDayOfWeek(ch, state, info) {
	const count = lookAhead(ch, state);
	const names = formatNames(info, "days", count, ch === "c", true);
	let dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
	if (!dayOfWeek && dayOfWeek !== 0 || outOfRange(dayOfWeek, 1, 7)) return true;
}
var parsers = {};
parsers.d = function(state) {
	lookAhead("d", state);
	const day = getNumber(2, state);
	if (day === null || outOfRange(day, 1, 31)) return true;
	if (state.day === null) state.day = day;
};
parsers.E = function(state, info) {
	if (getIndexByName(formatNames(info, "days", lookAhead("E", state), false, true), state, true) === null) return true;
};
parsers.M = function(state, info) {
	return parseMonth("M", state, info);
};
parsers.L = function(state, info) {
	return parseMonth("L", state, info);
};
parsers.y = function(state) {
	const count = lookAhead("y", state);
	let year = getNumber(count === 1 ? void 0 : count, state);
	if (year === null) return true;
	if (count === 2) {
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		year = currentYear - currentYear % 100 + year;
		if (year > TWO_DIGIT_YEAR_MAX) year -= 100;
	}
	state.year = year;
};
parsers.h = function(state) {
	lookAhead("h", state);
	let hours = getNumber(2, state);
	if (hours === 12) hours = 0;
	if (hours === null || outOfRange(hours, 0, 11)) return true;
	state.hours = hours;
};
parsers.K = function(state) {
	lookAhead("K", state);
	let hours = getNumber(2, state);
	if (hours === null || outOfRange(hours, 0, 11)) return true;
	state.hours = hours;
};
parsers.a = function(state, info) {
	let periodFormats = formatNames(info, "dayPeriods", lookAhead("a", state), false, true);
	const pmHour = getIndexByName([periodFormats.pm], state, true);
	if (!pmHour && !getIndexByName([periodFormats.am], state, true)) return true;
	state.pmHour = pmHour;
};
parsers.H = function(state) {
	lookAhead("H", state);
	const hours = getNumber(2, state);
	if (hours === null || outOfRange(hours, 0, 23)) return true;
	state.hours = hours;
};
parsers.k = function(state) {
	lookAhead("k", state);
	let hours = getNumber(2, state);
	if (hours === null || outOfRange(hours, 1, 24)) return true;
	state.hours = hours === 24 ? 0 : hours;
};
parsers.m = function(state) {
	lookAhead("m", state);
	const minutes = getNumber(2, state);
	if (minutes === null || outOfRange(minutes, 0, 59)) return true;
	state.minutes = minutes;
};
parsers.s = function(state) {
	lookAhead("s", state);
	const seconds = getNumber(2, state);
	if (seconds === null || outOfRange(seconds, 0, 59)) return true;
	state.seconds = seconds;
};
parsers.S = function(state) {
	const count = lookAhead("S", state);
	const match = state.value.substr(state.valueIdx, count);
	let milliseconds = null;
	if (!isNaN(parseInt(match, 10))) {
		milliseconds = parseFloat("0." + match, 10);
		milliseconds = round(milliseconds, 3);
		milliseconds *= 1e3;
		state.valueIdx += count;
	}
	if (milliseconds === null || outOfRange(milliseconds, 0, 999)) return true;
	state.milliseconds = milliseconds;
};
parsers.z = function(state, info) {
	const shortFormat = lookAhead("z", state) < 4;
	const invalid = parseTimeZoneOffset(state, info, {
		shortHours: shortFormat,
		optionalMinutes: shortFormat,
		localizedName: true
	});
	if (invalid) return invalid;
};
parsers.Z = function(state, info) {
	const count = lookAhead("Z", state);
	const invalid = parseTimeZoneOffset(state, info, {
		noSeparator: count < 4,
		zLiteral: count === 5,
		localizedName: count === 4
	});
	if (invalid) return invalid;
};
parsers.x = function(state, info) {
	const count = lookAhead("x", state);
	const invalid = parseTimeZoneOffset(state, info, {
		noSeparator: count !== 3 && count !== 5,
		optionalMinutes: count === 1
	});
	if (invalid) return invalid;
};
parsers.X = function(state, info) {
	const count = lookAhead("X", state);
	const invalid = parseTimeZoneOffset(state, info, {
		noSeparator: count !== 3 && count !== 5,
		optionalMinutes: count === 1,
		zLiteral: true
	});
	if (invalid) return invalid;
};
parsers.G = function(state, info) {
	const eras = formatNames(info, "eras", lookAhead("G", state), false, true);
	if (getIndexByName([eras[0], eras[1]], state, true) === null) return true;
};
parsers.e = function(state, info) {
	return parseDayOfWeek("e", state, info);
};
parsers.c = function(state, info) {
	return parseDayOfWeek("c", state, info);
};
function createDate(state) {
	let { year, month, day, hours, minutes, seconds, milliseconds, pmHour, UTC, hoursOffset, minutesOffset } = state;
	const hasTime = hours !== null || minutes !== null || seconds || null;
	const date = /* @__PURE__ */ new Date();
	let result;
	if (year === null && month === null && day === null && hasTime) {
		year = date.getFullYear();
		month = date.getMonth();
		day = date.getDate();
	} else {
		if (year === null) year = date.getFullYear();
		if (day === null) day = 1;
	}
	if (pmHour && hours < 12) hours += 12;
	if (UTC) {
		if (hoursOffset) hours += -hoursOffset;
		if (minutesOffset) minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
		result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
	} else {
		result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
		adjustDST(result, hours);
	}
	if (year < 100) result.setFullYear(year);
	if (result.getDate() !== day && UTC === void 0) return null;
	return result;
}
function addFormatSpaces(value, format) {
	return `${leadingSpacesRegex.exec(format)[0]}${value}${trailingSpacesRegex.exec(format)[0]}`;
}
function parseExact(value, format, info) {
	const pattern = datePattern(format, info).split("");
	const state = {
		format: pattern,
		idx: 0,
		value: addFormatSpaces(value, format),
		valueIdx: 0,
		year: null,
		month: null,
		day: null,
		hours: null,
		minutes: null,
		seconds: null,
		milliseconds: null
	};
	const length = pattern.length;
	let literal = false;
	for (; state.idx < length; state.idx++) {
		let ch = pattern[state.idx];
		if (literal) {
			if (ch === "'") literal = false;
			checkLiteral(state);
		} else if (parsers[ch]) {
			if (parsers[ch](state, info)) return null;
		} else if (ch === "'") {
			literal = true;
			checkLiteral(state);
		} else if (!checkLiteral(state)) return null;
	}
	if (state.valueIdx < value.length) return null;
	return createDate(state) || null;
}
function parseMicrosoftDateOffset(offset) {
	const sign = offset.substr(0, 1) === "-" ? -1 : 1;
	let result = offset.substring(1);
	result = parseInt(result.substr(0, 2), 10) * 60 + parseInt(result.substring(2), 10);
	return sign * result;
}
function parseMicrosoftDateFormat(value) {
	if (value && value.indexOf("/D") === 0) {
		let date = dateRegExp.exec(value);
		if (date) {
			date = date[1];
			let tzoffset = offsetRegExp.exec(date.substring(1));
			date = new Date(parseInt(date, 10));
			if (tzoffset) {
				tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
				date = convertTimeZone(date, date.getTimezoneOffset(), 0);
				date = convertTimeZone(date, 0, -1 * tzoffset);
			}
			return date;
		}
	}
}
function defaultFormats(calendar) {
	const formats = [];
	const patterns = calendar.patterns;
	const length = FORMATS_SEQUENCE.length;
	for (let idx = 0; idx < length; idx++) formats.push(patterns[FORMATS_SEQUENCE[idx]]);
	return formats.concat(standardDateFormats);
}
function parseDate(value, formats, locale = "en") {
	if (!value) return null;
	if (isDate(value)) return value;
	let parseValue = String(value).trim();
	let date = parseMicrosoftDateFormat(parseValue);
	if (date) return date;
	const info = localeInfo(locale);
	let parseFormats = formats || defaultFormats(info.calendar);
	parseFormats = Array.isArray(parseFormats) ? parseFormats : [parseFormats];
	const length = parseFormats.length;
	for (let idx = 0; idx < length; idx++) {
		date = parseExact(parseValue, parseFormats[idx], info);
		if (date) return date;
	}
	return date;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/dates/split-date-format.js
var NAME_TYPES = {
	month: {
		type: "months",
		minLength: 3,
		standAlone: "L"
	},
	quarter: {
		type: "quarters",
		minLength: 3,
		standAlone: "q"
	},
	weekday: {
		type: "days",
		minLength: {
			E: 0,
			c: 3,
			e: 3
		},
		standAlone: "c"
	},
	dayperiod: {
		type: "dayPeriods",
		minLength: 0
	},
	era: {
		type: "eras",
		minLength: 0
	}
};
var LITERAL = "literal";
function addLiteral(parts, value) {
	const lastPart = parts[parts.length - 1];
	if (lastPart && lastPart.type === LITERAL) lastPart.pattern += value;
	else parts.push({
		type: LITERAL,
		pattern: value
	});
}
function isHour12(pattern) {
	return pattern === "h" || pattern === "K";
}
function splitDateFormat(format, locale = "en") {
	const pattern = datePattern(format, localeInfo(locale));
	const parts = [];
	let lastIndex = dateFormatRegExp.lastIndex = 0;
	let match = dateFormatRegExp.exec(pattern);
	while (match) {
		let value = match[0];
		if (lastIndex < match.index) addLiteral(parts, pattern.substring(lastIndex, match.index));
		if (value.startsWith("\"") || value.startsWith("'")) addLiteral(parts, value);
		else {
			const specifier = value[0];
			const type = DATE_FIELD_MAP[specifier];
			const part = {
				type,
				pattern: value
			};
			if (type === "hour") part.hour12 = isHour12(value);
			const names = NAME_TYPES[type];
			if (names) {
				const minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
				const patternLength = value.length;
				if (patternLength >= minLength) part.names = {
					type: names.type,
					nameType: dateNameType(patternLength),
					standAlone: names.standAlone === specifier
				};
			}
			parts.push(part);
		}
		lastIndex = dateFormatRegExp.lastIndex;
		match = dateFormatRegExp.exec(pattern);
	}
	if (lastIndex < pattern.length) addLiteral(parts, pattern.substring(lastIndex));
	return parts;
}
//#endregion
//#region node_modules/@progress/kendo-intl/dist/es/format.js
var formatRegExp = /\{(\d+)(:[^}]+)?\}/g;
function toString(value, format, locale) {
	if (format) {
		if (isDate(value)) return formatDate(value, format, locale);
		else if (isNumber(value)) return formatNumber(value, format, locale);
	}
	return value !== void 0 && value !== null ? value : "";
}
function format(format, values, locale) {
	return format.replace(formatRegExp, function(match, index, placeholderFormat) {
		let value = values[parseInt(index, 10)];
		return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "", locale);
	});
}
//#endregion
//#region node_modules/@progress/kendo-react-intl/Intl/IntlService.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$7 = class {
	/**
	* Creates a new instance of the internationalization service.
	*
	* @param locale - The locale that will be used by the internationalization methods.
	*/
	constructor(r) {
		if (this.locale = r, r === "" && true) throw "Locale should not be empty string";
	}
	/**
	* Formats a string with placeholders such as `Total amount {0:c}`.
	*
	* @param format - The format string.
	* @param values - One or more values to output in the format string placeholders.
	* @return - The formatted string.
	*/
	format(r, ...t) {
		return t.length === 1 && Array.isArray(t[0]) ? format(r, t[0], this.locale) : format(r, t, this.locale);
	}
	/**
	* Converts a `Date` object to a string based on the specified format. If no format is provided, the default short date format is used.
	*
	* @param value - The date which will be formatted.
	* @param format - The format string or options.
	* @return - The formatted date.
	*/
	formatDate(r, t) {
		return formatDate(r, t, this.locale);
	}
	/**
	* Converts an object to a string based on the specified format.
	*
	* @param value - The value which will be formatted.
	* @param format - The format to use.
	* @return - The formatted object.
	*/
	toString(r, t) {
		return toString(r, t, this.locale);
	}
	/**
	* Converts a string to a `Number`.
	*
	* @param value - The string which will be parsed.
	* @param format - The format string or options.
	* @return - The parsed number.
	*/
	parseNumber(r, t) {
		return parseNumber(r, this.locale, t);
	}
	/**
	* Converts a string to a `Date` object based on the specified format.
	*
	* @param value - The string which will be converted.
	* @param format - The format strings or options.
	* @return - The parsed date.
	*/
	parseDate(r, t) {
		return parseDate(r, t, this.locale);
	}
	/**
	* Converts a `Number` to a string based on the specified format.
	*
	* @param value - The number which will be formatted.
	* @param format - The format string or options.
	* @return - The formatted number.
	*/
	formatNumber(r, t) {
		return formatNumber(r, t, this.locale);
	}
	/**
	* Returns a localized date field name based on specific `dateFieldName` options.
	*
	* @param options - The detailed configuration for the desired date field name.
	* @returns - The localized date field name from the current locale based on the option.
	*/
	dateFieldName(r) {
		return dateFieldName(r, this.locale);
	}
	/**
	* Returns the day names from the current locale based on the option.
	*
	* @param options - The detailed configuration for the desired date format.
	* @return - The day names from the current locale based on the option.
	*/
	dateFormatNames(r) {
		return dateFormatNames(this.locale, r);
	}
	/**
	* Splits the date format into objects which contain information about each part of the pattern.
	*
	* @param format - The format string or options.
	* @returns - The date format parts.
	*/
	splitDateFormat(r) {
		return splitDateFormat(r, this.locale);
	}
	/**
	* Returns the number symbols from the current locale.
	*
	* @return - The number symbols from the current locale.
	*/
	numberSymbols() {
		return numberSymbols(this.locale);
	}
	/**
	* Returns the first day index, starting from Sunday.
	*
	* @return - The index of the first day of the week (0 == Sunday).
	*/
	firstDay() {
		return firstDay(this.locale);
	}
	/**
	* @hidden
	*/
	localeInfo() {
		return localeInfo(this.locale);
	}
	/**
	* @hidden
	*/
	localeCurrency() {
		return localeCurrency(this.locale);
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-intl/Localization/messages.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$3 = /* @__PURE__ */ Object.create({});
//#endregion
//#region node_modules/@progress/kendo-react-intl/Localization/LocalizationService.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$4 = class {
	/**
	* Creates a new LocalizationService instance.
	*
	* @param language The language code for localization.
	*/
	constructor(t) {
		if (this.language = t, t === "" && true) throw "Language should not be an empty string";
	}
	/**
	* Provides a string based on a key for the current language. When no string for the current language is available under this key, the `defaultValue` is returned.
	*
	* @param key - The key which identifies the string for the current language.
	* @param defaultValue - The default value which will be returned when no string
	* for the current language is available under the key.
	* @return - The string for the current language.
	*/
	toLanguageString(t, e) {
		return this.language && e$3[this.language] && e$3[this.language].hasOwnProperty(t) ? e$3[this.language][t] : e;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-intl/globalization/GlobalizationContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$1 = import_react.createContext({
	intl: new o$7("en"),
	localization: new s$4()
});
//#endregion
//#region node_modules/@progress/kendo-react-intl/hooks/useLocalization.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$1 = () => import_react.useContext(r$1).localization;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/messages/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$3 = "prevArrow.title", o$6 = "nextArrow.title", e$2 = "moreButtonTitle.title", r = {
	[t$3]: "Previous scroll button",
	[o$6]: "Next scroll button",
	[e$2]: "More button"
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarScrollButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var I = (s) => {
	const n = i$1(), { disabled: r$8, type: t, scrollContentRef: o, buttonScrollSpeed: e, prevButton: m, nextButton: p } = s, u = (k) => {
		o && o.current && e && o.current.scrollBy({
			left: t === "next" ? e : -e,
			behavior: "smooth"
		});
	}, b = t === "prev" ? m || "span" : p || "span";
	return /* @__PURE__ */ import_react.createElement(b, {
		className: n$12("k-button", "k-icon-button", `k-toolbar-${t}`, { "k-disabled": r$8 }),
		title: `${t === "prev" ? n.toLanguageString(t$3, r[t$3]) : n.toLanguageString(o$6, r[o$6])}`,
		"aria-hidden": !0,
		tabIndex: r$8 ? -1 : void 0,
		onClick: u
	}, /* @__PURE__ */ import_react.createElement(M$1, {
		icon: t === "prev" ? caretAltLeftIcon : caretAltRightIcon,
		className: "k-button-icon"
	}));
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarScrollable.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var g = (i) => {
	const { scrollButtons: c, scrollButtonsPosition: l, isOverflowing: p, scrollContentRef: m, buttonScrollSpeed: u, dir: e, isScrollStartPosition: a, isScrollEndPosition: s, prevButton: b, nextButton: E, children: S } = i, r = (v, x) => /* @__PURE__ */ import_react.createElement(I, {
		type: v,
		disabled: x,
		scrollContentRef: m,
		buttonScrollSpeed: u,
		prevButton: b,
		nextButton: E
	}), o = c === "visible" || c === "auto" && p;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, o && l === "split" && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, r(e !== "rtl" ? "prev" : "next", a), /* @__PURE__ */ import_react.createElement(t$4, { className: "k-toolbar-button-separator" })), o && l === "start" && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, r(e !== "rtl" ? "prev" : "next", a), r(e !== "rtl" ? "next" : "prev", s), /* @__PURE__ */ import_react.createElement(t$4, { className: "k-toolbar-button-separator" })), /* @__PURE__ */ import_react.createElement("span", {
		className: "k-toolbar-items k-toolbar-items-scroll",
		ref: m
	}, S), o && l === "split" && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(t$4, { className: "k-toolbar-button-separator" }), r(e !== "rtl" ? "next" : "prev", s)), o && l === "end" && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(t$4, { className: "k-toolbar-button-separator" }), r(e !== "rtl" ? "prev" : "next", a), r(e !== "rtl" ? "next" : "prev", s)));
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarOverflowSection.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var U = (h) => {
	var m;
	const { toolbarRef: o, children: b, fillMode: R, size: g } = h, [u, k] = import_react.useState(!1), c = import_react.useRef(import_react.Children.toArray(b).filter((t) => import_react.isValidElement(t)).map((t, r) => import_react.cloneElement(t, { key: t.key || r }))), l = import_react.useRef([]), a = import_react.useRef(0), T = import_react.useRef(null), w = import_react.useRef(null), v = i$1(), [N, E] = import_react.useReducer((t) => t + 1, 0), f = () => {
		if (!o.current) return;
		let t = 0;
		const r = o.current.clientWidth, i = parseInt(window.getComputedStyle(o.current).gap || "0", 10), C = Array.from(o.current.children).reduce((n, s, P) => (n += Math.ceil(s.clientWidth), n), 0), p = Array.from(o.current.children).length, y = i * 2;
		if (t = C + p * i + y, t > r) {
			const n = [...c.current], s = n.pop();
			a.current = r, c.current = n, s && (l.current = [s, ...l.current]);
		} else if (r > a.current + i * p) {
			const n = [...l.current], s = n.shift();
			l.current = n, s && (c.current = [...c.current, s]), a.current = r;
		}
		E();
	};
	import_react.useEffect(() => {
		f();
		const t = new ResizeObserver(f), r = o.current;
		return r && t.observe(r), () => {
			r && t.unobserve(r);
		};
	}, []);
	const z = () => {
		k(!u);
	};
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, c.current.length > 0 && c.current, l.current.length > 0 && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(t$4, {
		_ref: w,
		className: "k-toolbar-button-separator"
	}), /* @__PURE__ */ import_react.createElement(A$2, {
		ref: T,
		className: "k-toolbar-overflow-button",
		fillMode: "flat",
		svgIcon: moreHorizontalIcon,
		title: v.toLanguageString("moreButtonTitle.title", r["moreButtonTitle.title"]),
		onClick: z
	}), /* @__PURE__ */ import_react.createElement(re$1, {
		anchor: o.current,
		show: u,
		popupClass: "k-toolbar-popup",
		style: { width: (m = o.current) == null ? void 0 : m.offsetWidth }
	}, /* @__PURE__ */ import_react.createElement("span", { className: `k-toolbar-items-list k-toolbar-items-list-${e$6.sizeMap[g]} k-toolbar-items-list-${R}` }, l.current.length > 0 && l.current))));
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/Toolbar.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var N = import_react.forwardRef((i, A) => {
	const { children: k, className: K, id: j, ariaLabel: q, keyboardNavigation: w, role: x, onResize: C, style: D, tabIndex: E = f$1.tabIndex, size: b = f$1.size, fillMode: I = f$1.fillMode, overflow: c, scrollButtons: d = f$1.scrollButtons, scrollButtonsPosition: $ = f$1.scrollButtonsPosition, buttonScrollSpeed: F = f$1.buttonScrollSpeed, prevButton: _, nextButton: G, _ariaControls: J } = i, B = import_react.useRef(!1), r = import_react.useRef(null), m = import_react.useRef(null), h = import_react.useRef(0), S = import_react.useRef(0), s = import_react.useRef([]), R = import_react.useRef({
		element: null,
		props: i
	}), [Q, U$2] = import_react.useState(!1), [O, W] = import_react.useState(!0), [z, P] = import_react.useState(!1), v = u$5(r, i.dir), y = import_react.useMemo(() => i.buttons || n$5, [i.buttons]), V = import_react.useMemo(() => y.map((e) => e + ":focus").join(","), [y]), M = () => {
		const e = r.current && r.current.querySelector(V);
		return Math.max(0, s.current.findIndex((l) => l === e));
	};
	import_react.useImperativeHandle(R, () => ({
		element: r.current,
		props: i
	})), import_react.useImperativeHandle(A, () => R.current), import_react.useEffect(() => (window.addEventListener("resize", L), r.current && (S.current = r.current.offsetWidth, h.current = r.current.offsetHeight, w !== !1 && (s.current = Array.from(r.current.querySelectorAll(y.join(","))), H(0))), () => {
		window.removeEventListener("resize", L), s.current.length = 0;
	}), []), import_react.useEffect(() => {
		if (B.current) {
			if (!r.current || w === !1) return;
			s.current = Array.from(r.current.querySelectorAll(y.join(","))), H(M()), T();
		} else B.current = !0;
	});
	const H = (e) => {
		s.current.forEach((l, o) => {
			l.tabIndex = o === e ? E : -1;
		});
	}, X = (e) => {
		const l = e.keyCode === e$14.left || e.keyCode === e$14.right || e.keyCode === e$14.home || e.keyCode === e$14.end, o = M();
		!l || e.defaultPrevented || s.current.findIndex((a) => a === e.target) === -1 || (e.keyCode === e$14.left ? g$7(o, o === 0 ? s.current.length - 1 : o - 1) : g$7(o, o === s.current.length - 1 ? 0 : o + 1), e.keyCode === e$14.home && g$7(o, 0), e.keyCode === e$14.end && g$7(o, s.current.length - 1));
	}, g$7 = (e, l) => {
		const o = s.current[l];
		if (o) {
			o.tabIndex = E, o.focus();
			const a = s.current[e];
			a && (a.tabIndex = -1);
		}
	}, L = (e) => {
		if (!r.current) return;
		const l = r.current.offsetWidth, o = r.current.offsetHeight;
		if (S.current !== l || h.current !== o) {
			S.current = l, h.current = o;
			const a = {
				offsetWidth: S.current,
				offsetHeight: h.current
			};
			C && C.call(void 0, {
				target: R.current,
				...a,
				nativeEvent: e
			});
		}
		T();
	}, T = import_react.useCallback(() => {
		const e = m.current;
		e && U$2(e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight);
	}, []), p = import_react.useCallback(() => {
		const e = m.current;
		if (e) {
			const l = e.scrollLeft === 0, o = v !== "rtl" ? e.scrollLeft + e.clientWidth === e.scrollWidth : e.clientWidth - e.scrollLeft === e.scrollWidth;
			l && W(!0), o && P(!0), !l && !o && (W(!1), P(!1));
		}
	}, [v]);
	return import_react.useEffect(() => {
		const e = m.current;
		if (e) return e.addEventListener("scroll", p), () => {
			e.removeEventListener("scroll", p);
		};
	}, [p]), /* @__PURE__ */ import_react.createElement("div", {
		id: j,
		"aria-label": q,
		"aria-controls": J,
		className: n$12("k-toolbar", {
			[`k-toolbar-${e$6.sizeMap[b] || b}`]: b,
			[`k-toolbar-${I}`]: I,
			"k-toolbar-scrollable": c === "scroll",
			"k-toolbar-scrollable-overlay": c === "scroll" && (d === "hidden" || d === void 0),
			"k-toolbar-scrollable-start": c === "scroll" && d === "hidden" && O,
			"k-toolbar-scrollable-end": c === "scroll" && d === "hidden" && z,
			"k-toolbar-section": i.overflow && c === "section"
		}, K),
		style: D,
		role: x !== void 0 ? x || void 0 : "toolbar",
		dir: v,
		ref: r,
		onKeyDown: w !== !1 ? X : void 0
	}, c === "scroll" && /* @__PURE__ */ import_react.createElement(g, {
		scrollButtons: d,
		scrollButtonsPosition: $,
		prevButton: _,
		nextButton: G,
		isOverflowing: Q,
		scrollContentRef: m,
		buttonScrollSpeed: F,
		dir: v,
		isScrollStartPosition: O,
		isScrollEndPosition: z,
		children: k
	}), c === "section" && /* @__PURE__ */ import_react.createElement(U, {
		toolbarRef: r,
		fillMode: I,
		size: b
	}, k), (c === "none" || c === void 0) && k);
}), f$1 = {
	tabIndex: 0,
	size: void 0,
	fillMode: void 0,
	scrollButtons: "auto",
	scrollButtonsPosition: "split",
	buttonScrollSpeed: 100
};
N.displayName = "KendoReactToolbar";
N.propTypes = {
	tabIndex: import_prop_types.default.number,
	dir: import_prop_types.default.string,
	keyboardNavigation: import_prop_types.default.bool,
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	role: import_prop_types.default.string,
	onResize: import_prop_types.default.func,
	buttons: import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired),
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	fillMode: import_prop_types.default.oneOf([
		"solid",
		"flat",
		"outline"
	]),
	overflow: import_prop_types.default.oneOf([
		"none",
		"section",
		"scroll"
	]),
	scrollButtons: import_prop_types.default.oneOf([
		"hidden",
		"visible",
		"auto"
	]),
	scrollButtonsPosition: import_prop_types.default.oneOf([
		"start",
		"end",
		"split"
	]),
	buttonScrollSpeed: import_prop_types.default.number
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$2 = import_react.forwardRef((a, o) => {
	const { id: s, className: m, style: l, children: n } = a, r = import_react.useRef(null);
	return import_react.useImperativeHandle(o, () => ({ element: r.current })), /* @__PURE__ */ import_react.createElement("div", {
		id: s,
		className: n$12("k-toolbar-item", m),
		style: l,
		ref: r
	}, n);
});
t$2.displayName = "KendoReactToolbarItem";
t$2.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-buttons/toolbar/tools/ToolbarSpacer.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$3 = import_react.forwardRef((r, t) => {
	const a = import_react.useRef(null), m = import_react.useRef(null);
	import_react.useImperativeHandle(m, () => ({ element: a.current })), import_react.useImperativeHandle(t, () => ({ element: a.current }));
	const o = import_react.useMemo(() => n$12("k-spacer", r.className), [r.className]);
	return /* @__PURE__ */ import_react.createElement("span", {
		ref: a,
		className: o
	});
});
s$3.displayName = "KendoReactToolbarSpacer";
s$3.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/chip-list-contexts.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$5 = import_react.createContext([null, (e) => {}]), n$3 = import_react.createContext([null, (e) => {}]), s$2 = import_react.createContext([null, (e) => {}]);
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/focus-reducer.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var u = /* @__PURE__ */ ((e) => (e.next = "next", e.prev = "prev", e.current = "current", e.reset = "reset", e))(u || {});
var s$1 = (e, r) => {
	const t = r.items.findIndex((n) => n === e);
	switch (r.type) {
		case "next": return t === r.items.length - 1 ? e : r.items[t + 1];
		case "prev": return t === 0 ? e : r.items[t - 1];
		case "current": return r.payload;
		case "reset": return null;
		default: return e;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/data-reducer.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$1 = /* @__PURE__ */ ((e) => (e.remove = "remove", e.add = "add", e.reorder = "reorder", e))(a$1 || {});
var o$4 = (e, r) => {
	switch (r.type) {
		case "add": break;
		case "remove": return e.filter((d) => d[r.valueField] !== r.payload);
		case "reorder": break;
		default: return e;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/selection-reducer.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var n$2 = /* @__PURE__ */ ((r) => (r.toggle = "toggle", r.remove = "remove", r))(n$2 || {});
var o$3 = (r, e) => {
	switch (e.selection) {
		case "single": switch (e.type) {
			case "toggle":
				if (!Array.isArray(r) || r === null) return e.payload === r ? null : e.payload;
				throw new Error("State cannot be an array in single selection");
			case "remove": return e.payload === r ? null : r;
			default: return r;
		}
		case "multiple": switch (e.type) {
			case "toggle":
				if (Array.isArray(r)) return r.some((l) => l === e.payload) ? r.filter((l) => l !== e.payload) : [...r, e.payload];
				if (r === null) return [e.payload];
				throw new Error("State cannot be non-array in multiple selection");
			case "remove": return Array.isArray(r) ? r.some((l) => l === e.payload) ? r.filter((l) => l !== e.payload) : [...r, e.payload] : r;
			default: return r;
		}
		case "none": return null;
		default: return r;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/Chip.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var z = import_react.forwardRef((e, A) => {
	const c = import_react.useRef(null), d = import_react.useRef(null), { disabled: v = n$1.disabled, fillMode: N = n$1.fillMode, themeColor: D = n$1.themeColor, size: y = n$1.size, rounded: f = n$1.rounded, dir: B = n$1.dir, removeIcon: R = n$1.removeIcon, removeSvgIcon: F = n$1.removeSvgIcon, removable: r = n$1.removable } = e, S = u$5(d, B);
	import_react.useImperativeHandle(c, () => ({
		element: d.current,
		props: e
	})), import_react.useImperativeHandle(A, () => c.current);
	const [s, i] = import_react.useContext(o$5), [T, o] = import_react.useContext(n$3), [, M] = import_react.useContext(s$2), h = import_react.useMemo(() => e.selected || (Array.isArray(s) ? s.some((t) => t === e.value) : s === e.value), [
		e.selected,
		e.value,
		s
	]), k = import_react.useMemo(() => T === e.value, [e.value, T]);
	import_react.useEffect(() => {
		k && d.current && d.current.focus();
	}, [k]);
	const K = import_react.useCallback((t) => {
		i({
			type: n$2.toggle,
			payload: e.value,
			event: t
		});
	}, [i, e.value]), g = import_react.useCallback((t) => {
		r && (M({
			type: a$1.remove,
			payload: e.value,
			event: t
		}), o({
			type: u.reset,
			payload: e.value,
			event: t
		}), i({
			type: n$2.remove,
			payload: e.value,
			event: t
		}), e.onRemove && e.onRemove.call(void 0, {
			target: c.current,
			syntheticEvent: t
		}));
	}, [
		e.onRemove,
		e.value,
		r,
		M,
		o,
		i
	]), L = import_react.useCallback((t) => {
		switch (t.keyCode) {
			case e$14.left:
				o({
					type: u.prev,
					payload: e.value,
					event: t
				});
				break;
			case e$14.right:
				o({
					type: u.next,
					payload: e.value,
					event: t
				});
				break;
			case e$14.enter:
				i({
					type: n$2.toggle,
					payload: e.value,
					event: t
				});
				break;
			case e$14.delete:
				g(t);
				break;
		}
		e.onKeyDown && e.onKeyDown.call(void 0, {
			target: c.current,
			syntheticEvent: t
		});
	}, [
		e.onKeyDown,
		e.value,
		o,
		i,
		g
	]), P = import_react.useCallback((t) => {
		o({
			payload: e.value,
			type: u.current,
			event: t
		}), e.onFocus && e.onFocus.call(void 0, {
			target: c.current,
			syntheticEvent: t
		});
	}, [
		e.onFocus,
		e.value,
		o
	]), $ = import_react.useCallback((t) => {
		e.onBlur && e.onBlur.call(void 0, {
			target: c.current,
			syntheticEvent: t
		});
	}, [e.onBlur]), _ = h$2(e, c, { onClick: K });
	return /* @__PURE__ */ import_react.createElement("div", {
		..._,
		role: e.role || "button",
		id: e.value,
		style: e.style,
		ref: d,
		dir: S,
		tabIndex: A$4(e.tabIndex, v, void 0),
		className: n$12("k-chip", {
			"k-rtl": S === "rtl",
			"k-disabled": v,
			"k-selected": h,
			"k-focus": k,
			[`k-chip-${e$6.sizeMap[y] || y}`]: y,
			[`k-rounded-${e$6.roundedMap[f] || f}`]: f,
			[`k-chip-${N}`]: N,
			[`k-chip-${D}`]: !!D
		}, e.className),
		"aria-pressed": e.role ? void 0 : h,
		"aria-disabled": v,
		"aria-describedby": e.ariaDescribedBy,
		"aria-keyshortcuts": r ? "Enter Delete" : void 0,
		onFocus: P,
		onBlur: $,
		onKeyDown: L
	}, h && (e.selectedIcon || e.selectedSvgIcon) && /* @__PURE__ */ import_react.createElement(v$1, {
		className: "k-chip-icon",
		name: e.selectedIcon ? i$5(e.selectedIcon) : void 0,
		icon: e.selectedSvgIcon,
		size: "small"
	}), (e.icon || e.svgIcon) && /* @__PURE__ */ import_react.createElement(v$1, {
		className: "k-chip-icon",
		name: e.icon ? i$5(e.icon) : void 0,
		icon: e.svgIcon,
		size: "small"
	}), e.avatar && /* @__PURE__ */ import_react.createElement("div", {
		className: n$12("k-chip-avatar", "k-avatar", e.avatar.rounded && `k-rounded-${e.avatar.rounded}`),
		style: e.avatar.style
	}, /* @__PURE__ */ import_react.createElement("span", { className: "k-avatar-image" }, /* @__PURE__ */ import_react.createElement("img", {
		src: e.avatar.image,
		alt: e.avatar.imageAlt
	}))), /* @__PURE__ */ import_react.createElement("span", { className: "k-chip-content" }, e.children !== void 0 ? e.children : e.text && /* @__PURE__ */ import_react.createElement("span", {
		"aria-label": e.ariaLabel || e.text,
		className: "k-chip-label"
	}, e.text)), r && /* @__PURE__ */ import_react.createElement("span", { className: "k-chip-actions" }, /* @__PURE__ */ import_react.createElement("span", {
		className: n$12("k-chip-action", "k-chip-remove-action"),
		onClick: g
	}, /* @__PURE__ */ import_react.createElement(v$1, {
		name: R ? i$5(R) : void 0,
		icon: F || xCircleIcon,
		size: "small"
	}))));
}), Q = {
	id: import_prop_types.default.string,
	text: import_prop_types.default.string,
	value: import_prop_types.default.any,
	dir: import_prop_types.default.oneOf(["ltr", "rtl"]),
	removable: import_prop_types.default.bool,
	removeIcon: import_prop_types.default.string,
	removeIconSvg: r$6,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	selectedIcon: import_prop_types.default.string,
	selectedIconSvg: r$6,
	onRemove: import_prop_types.default.func,
	dataItem: import_prop_types.default.any,
	selected: import_prop_types.default.bool,
	ariaDescribedBy: import_prop_types.default.string,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf(["outline", "solid"]),
	themeColor: import_prop_types.default.oneOf([
		"base",
		"info",
		"success",
		"warning",
		"error"
	])
}, n$1 = {
	disabled: !1,
	removable: !1,
	removeIcon: "k-i-x-circle",
	removeSvgIcon: xCircleIcon,
	dir: "ltr",
	size: void 0,
	rounded: void 0,
	fillMode: void 0,
	themeColor: void 0
};
z.displayName = "KendoReactChip";
z.propTypes = Q;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/Chip/ChipList.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var ie$1 = (a, i, s) => {
	i.selection === "multiple" ? Array.isArray(a) || (a = a ? [a] : null) : i.selection === "single" && Array.isArray(a) && (a = a ? a.join("") : null);
	const [l, r] = import_react.useState(a);
	return [l, (c) => {
		const d = o$3(i.state || l, {
			...c,
			...i
		});
		s && s(d, c.event), i.selection !== "none" && r(d);
	}];
}, le = (a) => {
	const [i, s] = import_react.useState(null);
	return [i, (r) => {
		s(s$1(r.payload, {
			...r,
			...a
		}));
	}];
}, oe = (a, i, s) => {
	const [l, r] = import_react.useState(a);
	return [l, (c) => {
		const d = o$4(i.state || l, {
			...c,
			...i
		});
		s && s(d, c.event), r(d);
	}];
}, E = import_react.forwardRef((a, i) => {
	const s = import_react.useRef(null), l = import_react.useRef(null), { id: r, style: p, tabIndex: c, className: d, ariaDescribedBy: M, ariaLabelledBy: T, ariaLabel: z$2, value: h, defaultData: P = o$2.defaultData, chip: g = o$2.chip, disabled: y = o$2.disabled, size: f = o$2.size, defaultValue: N = o$2.defaultValue, selection: x = o$2.selection, valueField: m = o$2.valueField, textField: S = o$2.textField, dir: w = o$2.dir, onChange: b, onDataChange: C } = a, F = u$5(l, w), A = import_react.useMemo(() => g || z, [g, z]);
	import_react.useImperativeHandle(s, () => ({
		element: l.current,
		props: a
	})), import_react.useImperativeHandle(i, () => s.current);
	const B = import_react.useCallback((n, u) => {
		b && s.current && b.call(void 0, {
			value: n,
			target: s.current,
			syntheticEvent: u
		});
	}, [b]), [L, j] = ie$1(h || N, {
		selection: x,
		state: h
	}, B), G = import_react.useCallback((n, u) => {
		C && s.current && C.call(void 0, {
			value: n,
			target: s.current,
			syntheticEvent: u
		});
	}, [C]), [I, H] = oe(a.data || P, {
		state: a.data,
		valueField: m
	}, G), R = import_react.useCallback((n, u) => (n.push(u[m]), n), [m]), v = import_react.useMemo(() => a.data || I, [a.data, I]), K = import_react.useMemo(() => h || L, [h, L]), $ = import_react.useMemo(() => v.reduce(R, []), [v, R]), k = import_react.useCallback((n) => s$13(m)(n), [m]), q = import_react.useCallback((n) => s$13(S)(n), [S]), [J, Q] = le({ items: $ }), U = h$2(a, s);
	return /* @__PURE__ */ import_react.createElement(o$5.Provider, { value: [K, j] }, /* @__PURE__ */ import_react.createElement(n$3.Provider, { value: [J, Q] }, /* @__PURE__ */ import_react.createElement(s$2.Provider, { value: [v, H] }, /* @__PURE__ */ import_react.createElement("div", {
		ref: l,
		...U,
		role: y ? void 0 : "listbox",
		id: r,
		dir: F,
		style: p,
		tabIndex: A$4(c, y, void 0),
		className: n$12("k-chip-list", {
			"k-rtl": F === "rtl",
			"k-disabled": y,
			[`k-chip-list-${e$6.sizeMap[f] || f}`]: f
		}, d),
		"aria-label": z$2,
		"aria-labelledby": T,
		"aria-describedby": M,
		"aria-orientation": "horizontal",
		"aria-multiselectable": x === "multiple"
	}, v.map((n, u) => /* @__PURE__ */ import_react.createElement(A, {
		role: "option",
		dataItem: n,
		size: f,
		key: [k(n), u].join("-"),
		text: q(n),
		value: k(n),
		ariaLabel: n.ariaLabel,
		svgIcon: n.svgIcon || void 0
	}))))));
}), re = {
	id: import_prop_types.default.string,
	className: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	data: import_prop_types.default.any,
	defaultData: import_prop_types.default.arrayOf(import_prop_types.default.any),
	onDataChange: import_prop_types.default.func,
	value: import_prop_types.default.oneOfType([import_prop_types.default.any, import_prop_types.default.arrayOf(import_prop_types.default.any)]),
	defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.any, import_prop_types.default.arrayOf(import_prop_types.default.any)]),
	onChange: import_prop_types.default.func,
	selection: import_prop_types.default.oneOf([
		"single",
		"none",
		"multiple"
	]),
	textField: import_prop_types.default.string,
	valueField: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	dir: import_prop_types.default.oneOf(["ltr", "rtl"]),
	ariaLabelledBy: import_prop_types.default.string,
	ariaDescribedBy: import_prop_types.default.string,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	])
}, o$2 = {
	chip: z,
	size: void 0,
	disabled: !1,
	defaultValue: null,
	defaultData: [],
	dir: "ltr",
	selection: "none",
	textField: "text",
	valueField: "value"
};
E.displayName = "KendoReactChipList";
E.propTypes = re;
//#endregion
//#region node_modules/@progress/kendo-react-buttons/FloatingActionButton/FloatingActionButtonItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var f = import_react.forwardRef((p, I) => {
	const { className: c, disabled: n, text: s, icon: i, style: g, id: k, focused: m, tabIndex: x, index: o, dataItem: y, item: C, svgIcon: r, onDown: d, onClick: l, ...N } = p, a = import_react.useRef(null), u = import_react.useCallback(() => {
		a.current && a.current.focus();
	}, []), v = import_react.useCallback(() => ({
		element: a.current,
		focus: u
	}), [u]);
	import_react.useImperativeHandle(I, v);
	const E = import_react.useCallback((P) => {
		l && o !== void 0 && !n && l(P, o);
	}, [l, o]), w = import_react.useMemo(() => n$12("k-fab-item", {
		"k-focus": m,
		"k-disabled": n
	}, c), [
		c,
		n,
		m
	]), b = C;
	return /* @__PURE__ */ import_react.createElement("li", {
		ref: a,
		id: k,
		className: w,
		style: g,
		role: "menuitem",
		tabIndex: A$4(x, n),
		"aria-disabled": n,
		"aria-label": `${s || ""} floatingactionbutton item`,
		onClick: E,
		onMouseDown: d,
		onPointerDown: d,
		...N
	}, b ? /* @__PURE__ */ import_react.createElement(b, {
		itemIndex: o,
		item: y
	}) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, s && /* @__PURE__ */ import_react.createElement("span", { className: "k-fab-item-text" }, s), i || r ? /* @__PURE__ */ import_react.createElement(v$1, {
		className: "k-fab-item-icon",
		name: i,
		icon: r
	}) : null));
});
f.propTypes = {
	className: import_prop_types.default.string,
	style: import_prop_types.default.object,
	children: import_prop_types.default.any,
	disabled: import_prop_types.default.bool,
	focused: import_prop_types.default.bool,
	index: import_prop_types.default.number,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	text: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	customProp: import_prop_types.default.any
};
f.displayName = "KendoFloatingActionButtonItem";
//#endregion
//#region node_modules/@progress/kendo-react-buttons/FloatingActionButton/utils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s = "16px", i = (o) => typeof o == "number" ? o + "px" : o, y = (o, r) => {
	const t = {
		horizontal: r ? "right" : "left",
		vertical: "bottom"
	};
	return o.horizontal === "end" && (t.horizontal = r ? "left" : "right"), t;
}, x = (o, r) => {
	const t = {
		horizontal: r ? "right" : "left",
		vertical: "top"
	};
	return o.horizontal === "end" && (t.horizontal = r ? "left" : "right"), t;
}, b = (o, r) => {
	const t = r === "end" ? "end" : "start";
	return {
		rtl: {
			end: "k-text-left",
			start: "k-text-right"
		},
		ltr: {
			start: "k-text-left",
			end: "k-text-right"
		}
	}[o][t];
}, m = (o, r, t, c) => {
	const n = r.horizontal, e = r.vertical;
	if (o.current) {
		const l = t && t.x !== void 0 ? i(t.x) : s, d = t && t.x !== void 0 ? `calc(50% + ${i(t.x)})` : "50%", h = t && t.y !== void 0 ? i(t.y) : s, u = t && t.y !== void 0 ? `calc(50% + ${i(t.y)})` : "50%";
		o.current.style.setProperty(a(r, c), n === "center" ? d : l), o.current.style.setProperty(p$1(r), e === "middle" ? u : h), c && ((e === "top" || e === "bottom") && n === "start" && o.current.style.setProperty("left", "unset"), e === "middle" && n === "end" && o.current.style.setProperty("right", "unset"), e === "middle" && n === "start" && o.current.style.setProperty("left", "unset"));
	}
}, a = (o, r) => {
	const { horizontal: t } = o;
	return {
		end: r ? "left" : "right",
		center: "left",
		start: r ? "right" : "left"
	}[t || "end"];
}, p$1 = (o) => ({
	top: "top",
	middle: "top",
	bottom: "bottom"
})[o.vertical || "bottom"];
//#endregion
//#region node_modules/@progress/kendo-react-buttons/FloatingActionButton/FloatingActionButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Be = 2, Me = 100, ee = import_react.forwardRef((P, te) => {
	const { align: u = h.align, alignOffset: $, className: K, disabled: d, icon: w, svgIcon: R, iconClass: S, id: W, items: n, item: oe, text: C, positionMode: A = h.positionMode, size: y$5 = h.size, style: ae, rounded: v = h.rounded, themeColor: F = h.themeColor, overlayStyle: ne, tabIndex: se, accessKey: le, popupSettings: I = {}, modal: ie, onClick: O, onItemClick: Z, onFocus: z, onBlur: q, onKeyDown: _, onOpen: H, onClose: j, ...re } = P, L = n$14(), X = L ? L + Be : Me, U = import_react.useRef(null), l = import_react.useRef(null), ce = import_react.useRef(null), ue = import_react.useRef(null), G = import_react.useCallback(() => {
		l.current && l.current.focus();
	}, []), f$4 = import_react.useCallback(() => ({
		element: l.current,
		focus: G
	}), [G]);
	import_react.useImperativeHandle(U, f$4), import_react.useImperativeHandle(te, () => U.current);
	const [i, r] = import_react.useState(!1), [E, p] = import_react.useState(!1), [g, s] = import_react.useState(-1), de = I$2() + "-button-id", T = u$5(l, P.dir), k = T === "rtl", x$6 = I$2() + "-list-id";
	import_react.useEffect(() => {
		m(l, u, $, k);
	}, [
		l,
		u,
		$,
		k
	]), import_react.useEffect(() => {
		E && l && l.current && l.current.focus();
	}, [E, l]);
	const m$7 = import_react.useCallback((e, a) => {
		n && v$3(a ? H : j, e, f$4(), void 0);
	}, [
		H,
		j,
		n
	]), J = import_react.useCallback((e) => {
		!e.target || d || (!n && O ? v$3(O, e, f$4(), void 0) : (r(!i), p(!0), s(i ? -1 : 0), m$7(e, !i)));
	}, [
		r,
		p,
		s,
		O,
		m$7,
		i,
		n,
		d
	]), fe = import_react.useCallback((e) => {
		p(!0), s(i ? 0 : -1), z && v$3(z, e, f$4(), void 0);
	}, [
		z,
		p,
		s
	]), pe = import_react.useCallback((e) => {
		p(!1), r(!1), s(-1), v$3(q, e, f$4(), void 0), i && m$7(e, !1);
	}, [
		q,
		p,
		r,
		s,
		m$7
	]), me = import_react.useCallback((e) => {
		e.preventDefault();
	}, []), B = import_react.useCallback((e, a) => {
		n && (n[a].disabled || v$3(Z, e, f$4(), {
			itemProps: n[a],
			itemIndex: a
		}));
	}, [Z]), be = import_react.useCallback((e, a) => {
		!e.target || !n || (s(a), r(!1), B(e, a), m$7(e, !1));
	}, [
		s,
		r,
		B,
		m$7
	]), ge = import_react.useCallback((e) => {
		o$10(document) === l.current && e.preventDefault();
	}, [l]), ke = import_react.useCallback((e) => {
		const a = g, M = n ? n.length : -1;
		if (e.altKey) {
			!i && e.keyCode === e$14.down && (e.preventDefault(), r(!0), s(0)), i && e.keyCode === e$14.up && (e.preventDefault(), r(!1), s(-1));
			return;
		}
		switch (e.keyCode) {
			case e$14.enter:
			case e$14.space:
				a >= 0 && B(e, a), n || J(e), e.preventDefault(), r(!i), s(i ? -1 : 0);
				break;
			case e$14.esc:
				e.preventDefault(), r(!1), s(-1);
				break;
			case e$14.home:
				e.preventDefault(), s(0);
				break;
			case e$14.end:
				e.preventDefault(), s(M - 1);
				break;
			case e$14.down:
			case e$14.right:
				e.preventDefault(), s(a + 1 >= M ? 0 : a + 1);
				break;
			case e$14.up:
			case e$14.left:
				e.preventDefault(), s(a - 1 < 0 ? M - 1 : a - 1);
				break;
		}
		v$3(_, e, f$4(), void 0);
	}, [
		_,
		g,
		s,
		k,
		r
	]), he = import_react.useMemo(() => n$12("k-fab", {
		"k-fab-sm": y$5 === "small",
		"k-fab-md": y$5 === "medium",
		"k-fab-lg": y$5 === "large",
		"k-disabled": d,
		"k-pos-absolute": A === "absolute",
		"k-pos-fixed": A === "fixed",
		"k-focus": E,
		[`k-rounded-${e$6.roundedMap[v] || v}`]: v,
		[`k-fab-${F}`]: F
	}, `k-${u.vertical}-${u.horizontal}`, K), [
		F,
		y$5,
		v,
		d,
		A,
		u,
		E,
		K
	]), Ce = n && n.map((e, a) => /* @__PURE__ */ import_react.createElement(f, {
		...e,
		key: a,
		index: a,
		id: `${x$6}-${a}`,
		disabled: d || e.disabled,
		focused: g === a,
		dataItem: e,
		item: oe,
		className: n$12(e.className, b(T || "ltr", u.horizontal)),
		onClick: be,
		onDown: ge
	})), Q = !!((w || R) && !C), V = (l.current ? l.current.offsetWidth : 0) / 2 - 32 / 2;
	let D;
	return w || R ? D = /* @__PURE__ */ import_react.createElement(v$1, {
		className: "k-fab-icon",
		name: w,
		icon: R
	}) : S ? D = /* @__PURE__ */ import_react.createElement("span", {
		role: "presentation",
		className: S
	}) : D = null, /* @__PURE__ */ import_react.createElement(t$12.Provider, { value: X }, /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("button", {
		ref: l,
		id: W || de,
		role: "button",
		type: "button",
		"aria-disabled": d,
		"aria-expanded": n ? i : void 0,
		"aria-haspopup": !!n,
		"aria-label": `${C || ""} floatingactionbutton`,
		"aria-owns": n ? x$6 : void 0,
		"aria-activedescendant": g >= 0 && n ? `${x$6}-${g}` : void 0,
		tabIndex: A$4(se, d),
		accessKey: le,
		dir: T,
		disabled: d,
		className: he,
		style: ae,
		onClick: J,
		onMouseDown: me,
		onFocus: fe,
		onBlur: pe,
		onKeyDown: ke,
		...re
	}, D, C && /* @__PURE__ */ import_react.createElement("span", { className: "k-fab-text" }, C)), ie && i && /* @__PURE__ */ import_react.createElement("div", {
		className: "k-overlay",
		style: {
			zIndex: X,
			...ne
		}
	}), /* @__PURE__ */ import_react.createElement(re$1, {
		ref: ue,
		anchor: l.current,
		show: i,
		animate: I.animate,
		popupClass: n$12("k-popup-transparent k-fab-popup", I.popupClass),
		anchorAlign: I.anchorAlign || y(u, k),
		popupAlign: I.popupAlign || x(u, k),
		style: { boxShadow: "none" }
	}, /* @__PURE__ */ import_react.createElement("ul", {
		ref: ce,
		role: "menu",
		"aria-labelledby": W,
		id: x$6,
		className: n$12("k-fab-items", {
			"k-fab-items-bottom": u.vertical !== "bottom",
			"k-fab-items-top": u.vertical === "bottom"
		}),
		style: {
			paddingLeft: Q ? V : void 0,
			paddingRight: Q ? V : void 0
		}
	}, Ce))));
});
ee.propTypes = {
	className: import_prop_types.default.string,
	style: import_prop_types.default.object,
	id: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	accessKey: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.string,
	svgIcon: r$6,
	iconClass: import_prop_types.default.string,
	text: import_prop_types.default.string,
	alignOffset: import_prop_types.default.shape({
		x: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
		y: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired
	}),
	align: import_prop_types.default.shape({
		vertical: import_prop_types.default.oneOf([
			"top",
			"middle",
			"bottom"
		]).isRequired,
		horizontal: import_prop_types.default.oneOf([
			"start",
			"center",
			"end"
		]).isRequired
	}),
	positionMode: import_prop_types.default.oneOf(["absolute", "fixed"]),
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	themeColor: import_prop_types.default.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
		"inverse"
	]),
	modal: import_prop_types.default.bool,
	overlayStyle: import_prop_types.default.object
};
var h = {
	align: {
		vertical: "bottom",
		horizontal: "end"
	},
	size: void 0,
	rounded: void 0,
	themeColor: void 0,
	positionMode: "fixed"
};
ee.displayName = "KendoFloatingActionButton";
//#endregion
//#region node_modules/@progress/kendo-webspeech-common/dist/es/webspeech/speechrecognition.js
var START = "start";
var END = "end";
var RESULT = "result";
var ERROR = "error";
var DEFAULT_SPEECH_OPTIONS = {
	lang: "en-US",
	continuous: false,
	interimResults: false,
	maxAlternatives: 1,
	events: {
		[START]: null,
		[END]: null,
		[RESULT]: null,
		[ERROR]: null
	}
};
function getSpeechRecognitionCtor() {
	return window ? window.SpeechRecognition || window.webkitSpeechRecognition : void 0;
}
var KendoSpeechRecognition = class {
	constructor(options) {
		this.recognition = null;
		this.isListening = false;
		this.options = { ...DEFAULT_SPEECH_OPTIONS };
		this.handleResult = (event) => {
			this.triggerOnResult(event);
		};
		this.handleError = (event) => {
			this.triggerOnError(event);
		};
		this.handleEnd = () => {
			this.triggerOnEnd();
			this.isListening = false;
		};
		this.handleStart = () => {
			this.triggerOnStart();
			this.isListening = true;
		};
		this.init(options);
	}
	init(options) {
		const RecognitionCtor = getSpeechRecognitionCtor();
		if (!RecognitionCtor) {
			console.error("Speech recognition is not supported in this browser.");
			this.recognition = null;
			return;
		}
		this.recognition = new RecognitionCtor();
		this.setOptions(options);
		this.bindEvents();
	}
	destroy() {
		this.unbindEvents();
		this.isListening = false;
	}
	bindEvents() {
		if (!this.recognition) return;
		this.recognition.onresult = this.handleResult;
		this.recognition.onerror = this.handleError;
		this.recognition.onend = this.handleEnd;
		this.recognition.onstart = this.handleStart;
	}
	unbindEvents() {
		if (this.recognition) {
			this.recognition.onresult = null;
			this.recognition.onerror = null;
			this.recognition.onend = null;
			this.recognition.onstart = null;
			this.recognition.abort();
			this.recognition = null;
		}
	}
	setOptions(options) {
		if (!this.recognition) return;
		const mergedEvents = {
			...this.options.events,
			...options.events
		};
		this.options = {
			...this.options,
			...options,
			events: mergedEvents
		};
		const { lang, continuous, interimResults, maxAlternatives } = this.options;
		Object.assign(this.recognition, {
			lang,
			continuous,
			interimResults,
			maxAlternatives
		});
	}
	triggerOnStart() {
		if (this.options.events[START]) this.options.events[START]();
	}
	triggerOnEnd() {
		if (this.options.events[END]) this.options.events[END]();
	}
	triggerOnResult(event) {
		if (this.options.events[RESULT]) this.options.events[RESULT](event);
	}
	triggerOnError(event) {
		if (this.options.events[ERROR]) this.options.events[ERROR](event);
	}
	start() {
		if (this.recognition && !this.isListening) this.recognition.start();
	}
	stop() {
		if (this.recognition && this.isListening) this.recognition.stop();
	}
	abort() {
		if (this.recognition && this.isListening) this.recognition.abort();
	}
	isSupported() {
		return !!getSpeechRecognitionCtor();
	}
	isActive() {
		return this.isListening;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/messages/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e = "speechToTextButton.ariaLabel", t = "speechToTextButton.title", o = {
	[e]: "Start speech recognition",
	[t]: "Speech to Text Button"
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/SpeechToTextButton/SpeechToTextButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var ie = import_react.forwardRef((a, M) => {
	const y = !_(packageMetadata, { component: "SpeechToTextButton" }), E = v$4(packageMetadata), p = i$1(), { fillMode: z, rounded: H, size: L, themeColor: B, ariaLabel: l, svgIcon: g, disabled: N, iconSize: F, title: u, className: O, id: K, style: P, lang: h = "en-US", continuous: S = !1, interimResults: v = !1, maxAlternatives: k = 1, integrationMode: W = "webSpeech", onStart: f, onResult: c, onEnd: m, onError: r, ...U } = a, s = import_react.useRef(null), n = import_react.useRef(!1), [o$19, i] = import_react.useState(!1), j = import_react.useCallback(async () => {
		n.current = !0, i(!0), f && await f();
	}, [f]), q = import_react.useCallback(async () => {
		n.current = !1, i(!1), m && await m();
	}, [m]), D = import_react.useCallback((t) => {
		const w = t.results, R = w[w.length - 1], _ = Array.from(R).map((C) => ({
			transcript: C.transcript,
			confidence: C.confidence
		}));
		c?.({
			isFinal: R.isFinal,
			alternatives: _
		});
	}, [c]), G = import_react.useCallback((t) => {
		i(!1), n.current = !1, r?.({ errorMessage: t.error });
	}, [r]), J = () => {
		var t;
		if (typeof window != "undefined" && !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
			r && r({ errorMessage: "Speech Recognition API is not supported in this browser." });
			return;
		}
		(t = s.current) != null && t.isActive() && s.current.stop(), s.current = new KendoSpeechRecognition({
			lang: h,
			continuous: S,
			interimResults: v,
			maxAlternatives: k,
			events: {
				start: j,
				end: q,
				result: D,
				error: G
			}
		});
	}, b = import_react.useCallback(() => {
		var t;
		n.current || (t = s.current) == null || t.start();
	}, []), d = import_react.useCallback(() => {
		var t;
		n.current && ((t = s.current) == null || t.stop());
	}, []), Q = import_react.useCallback(() => {
		var t;
		n.current && ((t = s.current) == null || t.abort(), n.current = !1, i(!1));
	}, []), V = () => n.current;
	import_react.useImperativeHandle(M, () => ({
		start: b,
		stop: d,
		abort: Q,
		isActive: V
	})), import_react.useEffect(() => (J(), () => {
		n.current && d();
	}), [
		h,
		S,
		v,
		k,
		W
	]);
	const X = () => {
		o$19 ? d() : b();
	}, Y = a.icon !== void 0 || a.iconClass !== void 0, Z = import_react.useMemo(() => o$19 ? stopSmIcon : g || microphoneOutlineIcon, [o$19, g]);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(A$2, {
		id: K,
		className: n$12({
			"k-speech-to-text-button": !0,
			"k-listening": o$19
		}, O),
		style: P,
		svgIcon: Y ? void 0 : Z,
		iconSize: F,
		fillMode: z,
		rounded: H,
		size: L,
		themeColor: B,
		"aria-label": l != null ? l : p.toLanguageString(e, o[e]),
		"aria-pressed": o$19,
		disabled: N,
		title: u != null ? u : p.toLanguageString(t, o[t]),
		onClick: X,
		...U
	}, a.children), y && /* @__PURE__ */ import_react.createElement(M$3, { message: E }));
});
ie.displayName = "KendoSpeechToTextButton";
//#endregion
//#region node_modules/@progress/kendo-react-buttons/SegmentedControl/SegmentedControl.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var j = import_react.forwardRef((y, N) => {
	const { items: R = [], size: v, layoutMode: S = "compact", value: o, onChange: d, itemTemplate: p, defaultValue: E, className: I, ...x } = y, g = v ? e$6.sizeMap[v] : void 0, a = import_react.useRef(null), C = import_react.useRef(null), [k, z] = import_react.useState({
		selectedValue: E,
		focusedValue: void 0
	}), i = o != null ? o : k.selectedValue, W = k.focusedValue, l = import_react.useCallback(() => {
		const e = a.current, t = C.current;
		if (!e || !t) return;
		const n = e.querySelector(".k-segmented-control-button.k-selected");
		if (!n) return;
		const c = e.offsetWidth, { offsetWidth: f, offsetLeft: u } = n, m = `${u}px`, h = `${c - u - f}px`;
		t.style.left !== m && (t.style.left = m), t.style.right !== h && (t.style.right = h);
	}, []), r = (e) => {
		z((t) => ({
			...t,
			...e
		}));
	}, w = import_react.useCallback((e) => (t) => {
		var n, c;
		if (i === e.value) {
			(n = e.onClick) == null || n.call(e, t);
			return;
		}
		o === void 0 && e && r({ selectedValue: e.value }), d?.(e.value), (c = e.onClick) == null || c.call(e, t), l();
	}, [
		o,
		d,
		l,
		i
	]), L = import_react.useCallback((e, t) => (n) => {
		r({ hoveredValue: e }), t?.(n);
	}, []), T = import_react.useCallback((e) => (t) => {
		r({ hoveredValue: void 0 }), e?.(t);
	}, []), $ = import_react.useCallback((e, t) => (n) => {
		r({ focusedValue: e }), t?.(n);
	}, []), O = import_react.useCallback((e) => (t) => {
		r({ focusedValue: void 0 }), e?.(t);
	}, []);
	return import_react.useLayoutEffect(() => {
		l();
	}, [i, l]), import_react.useEffect(() => {
		const e = a.current;
		if (!e) return;
		const t = new ResizeObserver(() => {
			l();
		});
		return t.observe(e), () => {
			t.disconnect();
		};
	}, [l]), import_react.useImperativeHandle(N, () => ({ element: a.current }), []), /* @__PURE__ */ import_react.createElement("div", {
		ref: a,
		className: n$12("k-segmented-control", g && `k-segmented-control-${g}`, { "k-segmented-control-stretched": S === "stretch" }, I),
		...x
	}, /* @__PURE__ */ import_react.createElement("div", {
		className: "k-segmented-control-thumb",
		ref: C,
		"aria-hidden": "true"
	}), R.map((e) => {
		const { value: t, disabled: n, text: c, svgIcon: f, iconClassName: u, type: m = "button", onClick: h, onMouseEnter: q, onMouseLeave: A, onFocus: F, onBlur: H, ...K } = e, V = i === t;
		return /* @__PURE__ */ import_react.createElement("button", {
			key: t,
			type: m,
			className: n$12("k-segmented-control-button", {
				"k-selected": V,
				"k-hover": k.hoveredValue === t && !n,
				"k-focus": W === t && !n,
				"k-disabled": n
			}),
			disabled: n,
			onClick: w(e),
			onMouseEnter: L(t, q),
			onMouseLeave: T(A),
			onFocus: $(t, F),
			onBlur: O(H),
			...K
		}, p ? p(e) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, f && /* @__PURE__ */ import_react.createElement(v$1, {
			className: n$12("k-segmented-control-button-icon", { ...u && { [u]: V } }),
			icon: f
		}), /* @__PURE__ */ import_react.createElement("span", { className: "k-segmented-control-button-text" }, c)));
	}));
});
j.displayName = "KendoReactSegmentedControl";
//#endregion
//#region node_modules/@progress/kendo-smartpaste-common/dist/es/smartpaste/utils.js
var TRUTHY_VALUES = [
	"true",
	"yes",
	"on"
];
var SMART_COMPONENT_EVENT_OPTIONS = {
	bubbles: true,
	detail: { fromSmartComponents: true }
};
var NATIVE_FORM_CONTROLS = [
	"input",
	"textarea",
	"select"
];
function isHidden(element) {
	const computedStyle = window.getComputedStyle(element);
	return element.type === "hidden" || computedStyle.display === "none" || computedStyle.visibility === "hidden";
}
function isNativeFormControl(element) {
	return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
function getFieldDescription(form, element, isCustomInput = false) {
	const fieldElement = isCustomInput ? element.querySelector(NATIVE_FORM_CONTROLS.join(",")) ?? element : element;
	const smartPasteDescription = fieldElement.getAttribute("data-smartpaste-description");
	if (smartPasteDescription) return smartPasteDescription;
	if (fieldElement.id) {
		const labels = form.querySelectorAll(`label[for='${fieldElement.id}']`);
		if (labels.length === 1) {
			const labelText = labels[0].textContent?.trim();
			if (labelText) return labelText;
		}
	}
	return fieldElement.getAttribute("name") ?? fieldElement.id ?? null;
}
function isCustomInput(element, options) {
	if (!options?.customInputs || !Array.isArray(options.customInputs)) return false;
	return options.customInputs.some((customInput) => element.matches(customInput.identifier) || element.closest(customInput.identifier));
}
function isRadioElement(element) {
	return element instanceof HTMLInputElement && element.type === "radio";
}
function getNativeFieldType(element) {
	if (element.type === "checkbox") return "boolean";
	if (element.type === "number") return "number";
	if (element instanceof HTMLSelectElement || isRadioElement(element)) return "fixed-choices";
	return "string";
}
function getSelectElementAllowedValues(element) {
	return Array.from(element.querySelectorAll("option")).filter((option) => Boolean(option.value)).map((option) => option.textContent ?? "");
}
function getRadioElementAllowedValues(identifier, formElement) {
	return Array.from(formElement.querySelectorAll("input[type=radio]")).filter((input) => input.name === identifier).map((input) => getFieldDescription(formElement, input)).filter((description) => description !== null);
}
function getInputsSelector(kendoInputs) {
	const nativeControls = NATIVE_FORM_CONTROLS.join(",");
	if (!Array.isArray(kendoInputs) || kendoInputs.length === 0) return nativeControls;
	return `${nativeControls},${kendoInputs.map((input) => input.identifier).join(",")}`;
}
function findInputRadioByText(form, radioGroupName, valueText) {
	const candidates = Array.from(form.querySelectorAll("input[type=radio]")).filter((input) => input.name === radioGroupName).map((input) => ({
		element: input,
		description: getFieldDescription(form, input)
	}));
	const exactMatch = candidates.find((candidate) => candidate.description === valueText);
	if (exactMatch) return exactMatch.element;
	const partialMatches = candidates.filter((candidate) => candidate.description && candidate.description.includes(valueText));
	return partialMatches.length === 1 ? partialMatches[0].element : null;
}
function setFormElementValueWithEvents(elem, value) {
	if (elem instanceof HTMLSelectElement) updateSelectElement(elem, value.toString());
	else if (elem instanceof HTMLInputElement && (elem.type === "radio" || elem.type === "checkbox")) updateCheckableInput(elem, value);
	else if (elem instanceof HTMLInputElement || elem instanceof HTMLTextAreaElement) updateTextInput(elem, value);
}
function isTruthyValue(value) {
	const valueString = value?.toString().toLowerCase();
	return TRUTHY_VALUES.includes(valueString);
}
function updateSelectElement(elem, value) {
	const newSelectedIndex = findSelectOptionByText(elem, value);
	if (newSelectedIndex !== null && elem.selectedIndex !== newSelectedIndex) {
		notifyFormElementBeforeWritten(elem);
		elem.selectedIndex = newSelectedIndex;
		notifyFormElementWritten(elem);
	}
}
function updateCheckableInput(elem, value) {
	const shouldCheck = isTruthyValue(value);
	if (elem.checked !== shouldCheck) {
		notifyFormElementBeforeWritten(elem);
		elem.checked = shouldCheck;
		notifyFormElementWritten(elem);
	}
}
function formatDateValue(stringValue) {
	const dateObj = new Date(stringValue);
	return !isNaN(dateObj.getTime()) ? dateObj.toISOString().split("T")[0] : stringValue;
}
function updateTextInput(elem, value) {
	const stringValue = value?.toString() ?? "";
	const finalValue = elem instanceof HTMLInputElement && elem.type === "date" ? formatDateValue(stringValue) : stringValue;
	if (elem.value !== finalValue) {
		notifyFormElementBeforeWritten(elem);
		elem.value = finalValue;
		notifyFormElementWritten(elem);
	}
}
function findSelectOptionByText(selectElem, valueText) {
	const options = Array.from(selectElem.querySelectorAll("option"));
	const exactMatch = options.find((option) => option.textContent === valueText);
	if (exactMatch) return options.indexOf(exactMatch);
	const partialMatches = options.filter((option) => option.textContent && option.textContent.includes(valueText));
	return partialMatches.length === 1 ? options.indexOf(partialMatches[0]) : null;
}
function notifyFormElementBeforeWritten(elem) {
	elem.dispatchEvent(new CustomEvent("beforeinput", SMART_COMPONENT_EVENT_OPTIONS));
}
function notifyFormElementWritten(elem) {
	elem.dispatchEvent(new CustomEvent("input", SMART_COMPONENT_EVENT_OPTIONS));
	elem.dispatchEvent(new CustomEvent("change", SMART_COMPONENT_EVENT_OPTIONS));
}
//#endregion
//#region node_modules/@progress/kendo-smartpaste-common/dist/es/smartpaste/smart-paste.js
var KendoSmartPaste = class {
	constructor(options) {
		this.options = options;
	}
	get formElement() {
		return this.options.getElement()?.closest("form") ?? null;
	}
	populateFormFields(response, formConfig) {
		if (!response.fieldValues) return;
		formConfig.forEach((formField) => {
			const rawValue = response.fieldValues[formField.field];
			if (rawValue === void 0 || rawValue === null) return;
			let stringValue;
			if (typeof rawValue === "string") stringValue = rawValue;
			else if (typeof rawValue === "number" || typeof rawValue === "boolean") stringValue = String(rawValue);
			else return;
			const trimmedValue = stringValue.trim();
			this.populateFormField(formField, trimmedValue);
		});
	}
	extractFormConfig() {
		if (!this.formElement) return [];
		const fields = [], inputsSelector = getInputsSelector(this.options.customInputs), elements = Array.from(this.formElement.querySelectorAll(inputsSelector));
		for (const element of elements) {
			let field = null;
			const isCustomInputElement = isCustomInput(element, this.options);
			if (isNativeFormControl(element) && !isCustomInputElement) {
				if (isHidden(element)) continue;
				field = this.processNativeFormControl(element);
			} else if (isCustomInputElement) field = this.processCustomInput(element, fields);
			if (field) fields.push(field);
		}
		return fields;
	}
	populateFormField(formField, value) {
		if (isRadioElement(formField.element)) {
			const element = formField.element, radioInput = findInputRadioByText(this.formElement, element.name, value);
			if (radioInput) setFormElementValueWithEvents(radioInput, true);
		} else if (formField.type === "kendo-input") {
			if (this.options.setKendoInputValue) this.options.setKendoInputValue(formField, value);
		} else setFormElementValueWithEvents(formField.element, value);
	}
	processNativeFormControl(element) {
		const isRadio = isRadioElement(element);
		const identifier = element.name || element.id;
		if (!identifier) return null;
		if (!isRadio) {
			if (!getFieldDescription(this.formElement, element)) return null;
		}
		const baseField = {
			field: identifier,
			description: isRadio ? null : getFieldDescription(this.formElement, element),
			element,
			type: getNativeFieldType(element)
		};
		if (element instanceof HTMLSelectElement) return {
			...baseField,
			allowedValues: getSelectElementAllowedValues(element)
		};
		if (isRadio) return {
			...baseField,
			allowedValues: getRadioElementAllowedValues(identifier, this.formElement)
		};
		return baseField;
	}
	processCustomInput(element, existingFields) {
		const field = element.id || element.getAttribute("name") || "";
		if (!existingFields.some((existingField) => existingField.field === field && existingField.element === element) && this.options.getSmartPasteField) {
			const smartPasteField = {
				field,
				description: getFieldDescription(this.formElement, element, true),
				element,
				type: "kendo-input"
			};
			return this.options.getSmartPasteField(smartPasteField) || null;
		}
		return null;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-buttons/SmartPasteButton/SmartPasteButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var q = [
	".k-input",
	".k-picker",
	".k-checkbox",
	".k-radio",
	".k-switch",
	".k-rating",
	".k-slider"
], A = (d) => {
	const s = d.querySelector("input, select, textarea");
	return (s == null ? void 0 : s.getAttribute("name")) || (s == null ? void 0 : s.getAttribute("id")) || d.getAttribute("id") || null;
}, B = import_react.forwardRef((d, s) => {
	const { disabled: g, fillMode: E = "solid", rounded: P = "medium", size: x = "medium", svgIcon: S = pasteSparkleIcon, formFields: f, onClick: p, children: I, ...R } = d, a = import_react.useRef(null);
	import_react.useImperativeHandle(s, () => {
		var r, l, n, e;
		return {
			element: (l = (r = a.current) == null ? void 0 : r.element) != null ? l : null,
			selected: (e = (n = a.current) == null ? void 0 : n.selected) != null ? e : !1,
			click: () => {
				var t, i;
				return (i = (t = a.current) == null ? void 0 : t.element) == null ? void 0 : i.click();
			}
		};
	});
	const m = import_react.useRef(null), b = import_react.useCallback(() => {
		var l;
		return ((l = a.current) == null ? void 0 : l.element) ? (m.current ??= new KendoSmartPaste({
			getElement: () => {
				var e, t;
				return (t = (e = a.current) == null ? void 0 : e.element) != null ? t : null;
			},
			customInputs: q.map((e) => ({ identifier: e })),
			getSmartPasteField: (e) => {
				const t = A(e.element);
				return t ? {
					...e,
					field: t
				} : e;
			}
		}), m.current) : null;
	}, []), h = () => {
		const r = b();
		if (!r) return f;
		const n = r.extractFormConfig().reduce((e, t) => e.some((i) => i.field === t.field) ? e : [...e, t], []);
		return f ? f.map((e) => {
			const t = n.find((i) => i.field === e.field);
			return t ? {
				...t,
				...e,
				element: t.element
			} : e;
		}) : n;
	}, v = async () => {
		try {
			return await navigator.clipboard.readText();
		} catch {
			return "";
		}
	}, w = (r, l) => {
		var i;
		if (!r || !l) return;
		const n = Object.entries(r).reduce((o, [k, c]) => (c != null && (o[k] = c), o), {}), e = (i = a.current) == null ? void 0 : i.element;
		if (e) u$2(c$2(e), n);
		const t = b();
		t && t.populateFormFields({ fieldValues: n }, l);
	}, y = async (r) => {
		if (g) return;
		const l = await v(), n = h(), e = n == null ? void 0 : n.map((o) => {
			var F;
			const { element: k, ...c } = o;
			return {
				...c,
				field: c.field || "",
				allowedValues: (F = c.allowedValues) != null ? F : []
			};
		}), i = Object.assign(r, {
			requestData: {
				content: l,
				formFields: e
			},
			setResponse: (o) => {
				o != null && o.fieldValues && w(o.fieldValues, n);
			}
		});
		p?.(i);
	};
	return /* @__PURE__ */ import_react.createElement(A$2, {
		ref: a,
		disabled: g,
		fillMode: E,
		rounded: P,
		size: x,
		svgIcon: S,
		onClick: y,
		type: "button",
		...R
	}, I);
});
B.displayName = "KendoReactSmartPasteButton";
//#endregion
//#region node_modules/@progress/kendo-react-buttons/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p = a$4(Y);
p.displayName = "KendoReactDropDownButton";
var n = a$4(C);
n.displayName = "KendoReactSplitButton";
//#endregion
export { e$12 as $, a$2 as A, u$4 as B, T as C, o$10 as D, o$9 as E, l$2 as F, I$2 as G, u$5 as H, p$2 as I, n$10 as J, o$14 as K, r$5 as L, e$8 as M, g$5 as N, e$6 as O, i$4 as P, v$4 as Q, s$11 as R, e$5 as S, s$10 as T, o$13 as U, r$6 as V, a$4 as W, M$3 as X, v$3 as Y, _ as Z, n$5 as _, ie as a, C as b, E as c, t$2 as d, A$4 as et, N as f, t$4 as g, s$4 as h, j as i, require_prop_types as it, d$2 as j, v$1 as k, z as l, r$1 as m, p as n, n$12 as nt, ee as o, i$1 as p, a$5 as q, B as r, e$15 as rt, f as s, n as t, e$14 as tt, s$3 as u, Y as v, A$2 as w, re$1 as x, s$6 as y, x$2 as z };

//# sourceMappingURL=kendo-react-buttons-DpP-TOWc.js.map