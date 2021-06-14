/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-workspace-tools",
factory: function (require) {
var plugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/utils.js
  var require_utils = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/utils.js"(exports) {
      "use strict";
      exports.isInteger = (num) => {
        if (typeof num === "number") {
          return Number.isInteger(num);
        }
        if (typeof num === "string" && num.trim() !== "") {
          return Number.isInteger(Number(num));
        }
        return false;
      };
      exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
      exports.exceedsLimit = (min, max, step = 1, limit) => {
        if (limit === false)
          return false;
        if (!exports.isInteger(min) || !exports.isInteger(max))
          return false;
        return (Number(max) - Number(min)) / Number(step) >= limit;
      };
      exports.escapeNode = (block, n = 0, type) => {
        let node = block.nodes[n];
        if (!node)
          return;
        if (type && node.type === type || node.type === "open" || node.type === "close") {
          if (node.escaped !== true) {
            node.value = "\\" + node.value;
            node.escaped = true;
          }
        }
      };
      exports.encloseBrace = (node) => {
        if (node.type !== "brace")
          return false;
        if (node.commas >> 0 + node.ranges >> 0 === 0) {
          node.invalid = true;
          return true;
        }
        return false;
      };
      exports.isInvalidBrace = (block) => {
        if (block.type !== "brace")
          return false;
        if (block.invalid === true || block.dollar)
          return true;
        if (block.commas >> 0 + block.ranges >> 0 === 0) {
          block.invalid = true;
          return true;
        }
        if (block.open !== true || block.close !== true) {
          block.invalid = true;
          return true;
        }
        return false;
      };
      exports.isOpenOrClose = (node) => {
        if (node.type === "open" || node.type === "close") {
          return true;
        }
        return node.open === true || node.close === true;
      };
      exports.reduce = (nodes) => nodes.reduce((acc, node) => {
        if (node.type === "text")
          acc.push(node.value);
        if (node.type === "range")
          node.type = "text";
        return acc;
      }, []);
      exports.flatten = (...args) => {
        const result = [];
        const flat = (arr) => {
          for (let i = 0; i < arr.length; i++) {
            let ele = arr[i];
            Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
          }
          return result;
        };
        flat(args);
        return result;
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/stringify.js
  var require_stringify = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/stringify.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = (ast, options = {}) => {
        let stringify = (node, parent = {}) => {
          let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
          let invalidNode = node.invalid === true && options.escapeInvalid === true;
          let output = "";
          if (node.value) {
            if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
              return "\\" + node.value;
            }
            return node.value;
          }
          if (node.value) {
            return node.value;
          }
          if (node.nodes) {
            for (let child of node.nodes) {
              output += stringify(child);
            }
          }
          return output;
        };
        return stringify(ast);
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/is-number-npm-7.0.0-060086935c-456ac6f8e0.zip/node_modules/is-number/index.js
  var require_is_number = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/is-number-npm-7.0.0-060086935c-456ac6f8e0.zip/node_modules/is-number/index.js"(exports, module) {
      "use strict";
      module.exports = function(num) {
        if (typeof num === "number") {
          return num - num === 0;
        }
        if (typeof num === "string" && num.trim() !== "") {
          return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
        return false;
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/to-regex-range-npm-5.0.1-f1e8263b00-f76fa01b3d.zip/node_modules/to-regex-range/index.js
  var require_to_regex_range = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/to-regex-range-npm-5.0.1-f1e8263b00-f76fa01b3d.zip/node_modules/to-regex-range/index.js"(exports, module) {
      "use strict";
      var isNumber2 = require_is_number();
      var toRegexRange = (min, max, options) => {
        if (isNumber2(min) === false) {
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        }
        if (max === void 0 || min === max) {
          return String(min);
        }
        if (isNumber2(max) === false) {
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        }
        let opts = __spreadValues({relaxZeros: true}, options);
        if (typeof opts.strictZeros === "boolean") {
          opts.relaxZeros = opts.strictZeros === false;
        }
        let relax = String(opts.relaxZeros);
        let shorthand = String(opts.shorthand);
        let capture = String(opts.capture);
        let wrap = String(opts.wrap);
        let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
        if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
          return toRegexRange.cache[cacheKey].result;
        }
        let a = Math.min(min, max);
        let b = Math.max(min, max);
        if (Math.abs(a - b) === 1) {
          let result = min + "|" + max;
          if (opts.capture) {
            return `(${result})`;
          }
          if (opts.wrap === false) {
            return result;
          }
          return `(?:${result})`;
        }
        let isPadded = hasPadding(min) || hasPadding(max);
        let state = {min, max, a, b};
        let positives = [];
        let negatives = [];
        if (isPadded) {
          state.isPadded = isPadded;
          state.maxLen = String(state.max).length;
        }
        if (a < 0) {
          let newMin = b < 0 ? Math.abs(b) : 1;
          negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
          a = state.a = 0;
        }
        if (b >= 0) {
          positives = splitToPatterns(a, b, state, opts);
        }
        state.negatives = negatives;
        state.positives = positives;
        state.result = collatePatterns(negatives, positives, opts);
        if (opts.capture === true) {
          state.result = `(${state.result})`;
        } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
          state.result = `(?:${state.result})`;
        }
        toRegexRange.cache[cacheKey] = state;
        return state.result;
      };
      function collatePatterns(neg, pos, options) {
        let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
        let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
        let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
        let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
        return subpatterns.join("|");
      }
      function splitToRanges(min, max) {
        let nines = 1;
        let zeros = 1;
        let stop = countNines(min, nines);
        let stops = new Set([max]);
        while (min <= stop && stop <= max) {
          stops.add(stop);
          nines += 1;
          stop = countNines(min, nines);
        }
        stop = countZeros(max + 1, zeros) - 1;
        while (min < stop && stop <= max) {
          stops.add(stop);
          zeros += 1;
          stop = countZeros(max + 1, zeros) - 1;
        }
        stops = [...stops];
        stops.sort(compare);
        return stops;
      }
      function rangeToPattern(start, stop, options) {
        if (start === stop) {
          return {pattern: start, count: [], digits: 0};
        }
        let zipped = zip(start, stop);
        let digits = zipped.length;
        let pattern = "";
        let count = 0;
        for (let i = 0; i < digits; i++) {
          let [startDigit, stopDigit] = zipped[i];
          if (startDigit === stopDigit) {
            pattern += startDigit;
          } else if (startDigit !== "0" || stopDigit !== "9") {
            pattern += toCharacterClass(startDigit, stopDigit, options);
          } else {
            count++;
          }
        }
        if (count) {
          pattern += options.shorthand === true ? "\\d" : "[0-9]";
        }
        return {pattern, count: [count], digits};
      }
      function splitToPatterns(min, max, tok, options) {
        let ranges = splitToRanges(min, max);
        let tokens = [];
        let start = min;
        let prev;
        for (let i = 0; i < ranges.length; i++) {
          let max2 = ranges[i];
          let obj = rangeToPattern(String(start), String(max2), options);
          let zeros = "";
          if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) {
              prev.count.pop();
            }
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + toQuantifier(prev.count);
            start = max2 + 1;
            continue;
          }
          if (tok.isPadded) {
            zeros = padZeros(max2, tok, options);
          }
          obj.string = zeros + obj.pattern + toQuantifier(obj.count);
          tokens.push(obj);
          start = max2 + 1;
          prev = obj;
        }
        return tokens;
      }
      function filterPatterns(arr, comparison, prefix, intersection, options) {
        let result = [];
        for (let ele of arr) {
          let {string} = ele;
          if (!intersection && !contains(comparison, "string", string)) {
            result.push(prefix + string);
          }
          if (intersection && contains(comparison, "string", string)) {
            result.push(prefix + string);
          }
        }
        return result;
      }
      function zip(a, b) {
        let arr = [];
        for (let i = 0; i < a.length; i++)
          arr.push([a[i], b[i]]);
        return arr;
      }
      function compare(a, b) {
        return a > b ? 1 : b > a ? -1 : 0;
      }
      function contains(arr, key, val) {
        return arr.some((ele) => ele[key] === val);
      }
      function countNines(min, len) {
        return Number(String(min).slice(0, -len) + "9".repeat(len));
      }
      function countZeros(integer, zeros) {
        return integer - integer % Math.pow(10, zeros);
      }
      function toQuantifier(digits) {
        let [start = 0, stop = ""] = digits;
        if (stop || start > 1) {
          return `{${start + (stop ? "," + stop : "")}}`;
        }
        return "";
      }
      function toCharacterClass(a, b, options) {
        return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
      }
      function hasPadding(str) {
        return /^-?(0+)\d/.test(str);
      }
      function padZeros(value, tok, options) {
        if (!tok.isPadded) {
          return value;
        }
        let diff = Math.abs(tok.maxLen - String(value).length);
        let relax = options.relaxZeros !== false;
        switch (diff) {
          case 0:
            return "";
          case 1:
            return relax ? "0?" : "0";
          case 2:
            return relax ? "0{0,2}" : "00";
          default: {
            return relax ? `0{0,${diff}}` : `0{${diff}}`;
          }
        }
      }
      toRegexRange.cache = {};
      toRegexRange.clearCache = () => toRegexRange.cache = {};
      module.exports = toRegexRange;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/fill-range-npm-7.0.1-b8b1817caa-cc283f4e65.zip/node_modules/fill-range/index.js
  var require_fill_range = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/fill-range-npm-7.0.1-b8b1817caa-cc283f4e65.zip/node_modules/fill-range/index.js"(exports, module) {
      "use strict";
      var util = require("util");
      var toRegexRange = require_to_regex_range();
      var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
      var transform = (toNumber) => {
        return (value) => toNumber === true ? Number(value) : String(value);
      };
      var isValidValue = (value) => {
        return typeof value === "number" || typeof value === "string" && value !== "";
      };
      var isNumber2 = (num) => Number.isInteger(+num);
      var zeros = (input) => {
        let value = `${input}`;
        let index = -1;
        if (value[0] === "-")
          value = value.slice(1);
        if (value === "0")
          return false;
        while (value[++index] === "0")
          ;
        return index > 0;
      };
      var stringify = (start, end, options) => {
        if (typeof start === "string" || typeof end === "string") {
          return true;
        }
        return options.stringify === true;
      };
      var pad = (input, maxLength, toNumber) => {
        if (maxLength > 0) {
          let dash = input[0] === "-" ? "-" : "";
          if (dash)
            input = input.slice(1);
          input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
        }
        if (toNumber === false) {
          return String(input);
        }
        return input;
      };
      var toMaxLen = (input, maxLength) => {
        let negative = input[0] === "-" ? "-" : "";
        if (negative) {
          input = input.slice(1);
          maxLength--;
        }
        while (input.length < maxLength)
          input = "0" + input;
        return negative ? "-" + input : input;
      };
      var toSequence = (parts, options) => {
        parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
        parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
        let prefix = options.capture ? "" : "?:";
        let positives = "";
        let negatives = "";
        let result;
        if (parts.positives.length) {
          positives = parts.positives.join("|");
        }
        if (parts.negatives.length) {
          negatives = `-(${prefix}${parts.negatives.join("|")})`;
        }
        if (positives && negatives) {
          result = `${positives}|${negatives}`;
        } else {
          result = positives || negatives;
        }
        if (options.wrap) {
          return `(${prefix}${result})`;
        }
        return result;
      };
      var toRange = (a, b, isNumbers, options) => {
        if (isNumbers) {
          return toRegexRange(a, b, __spreadValues({wrap: false}, options));
        }
        let start = String.fromCharCode(a);
        if (a === b)
          return start;
        let stop = String.fromCharCode(b);
        return `[${start}-${stop}]`;
      };
      var toRegex = (start, end, options) => {
        if (Array.isArray(start)) {
          let wrap = options.wrap === true;
          let prefix = options.capture ? "" : "?:";
          return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
        }
        return toRegexRange(start, end, options);
      };
      var rangeError = (...args) => {
        return new RangeError("Invalid range arguments: " + util.inspect(...args));
      };
      var invalidRange = (start, end, options) => {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      };
      var invalidStep = (step, options) => {
        if (options.strictRanges === true) {
          throw new TypeError(`Expected step "${step}" to be a number`);
        }
        return [];
      };
      var fillNumbers = (start, end, step = 1, options = {}) => {
        let a = Number(start);
        let b = Number(end);
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
          if (options.strictRanges === true)
            throw rangeError([start, end]);
          return [];
        }
        if (a === 0)
          a = 0;
        if (b === 0)
          b = 0;
        let descending = a > b;
        let startString = String(start);
        let endString = String(end);
        let stepString = String(step);
        step = Math.max(Math.abs(step), 1);
        let padded = zeros(startString) || zeros(endString) || zeros(stepString);
        let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
        let toNumber = padded === false && stringify(start, end, options) === false;
        let format = options.transform || transform(toNumber);
        if (options.toRegex && step === 1) {
          return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
        }
        let parts = {negatives: [], positives: []};
        let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
        let range = [];
        let index = 0;
        while (descending ? a >= b : a <= b) {
          if (options.toRegex === true && step > 1) {
            push(a);
          } else {
            range.push(pad(format(a, index), maxLen, toNumber));
          }
          a = descending ? a - step : a + step;
          index++;
        }
        if (options.toRegex === true) {
          return step > 1 ? toSequence(parts, options) : toRegex(range, null, __spreadValues({wrap: false}, options));
        }
        return range;
      };
      var fillLetters = (start, end, step = 1, options = {}) => {
        if (!isNumber2(start) && start.length > 1 || !isNumber2(end) && end.length > 1) {
          return invalidRange(start, end, options);
        }
        let format = options.transform || ((val) => String.fromCharCode(val));
        let a = `${start}`.charCodeAt(0);
        let b = `${end}`.charCodeAt(0);
        let descending = a > b;
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        if (options.toRegex && step === 1) {
          return toRange(min, max, false, options);
        }
        let range = [];
        let index = 0;
        while (descending ? a >= b : a <= b) {
          range.push(format(a, index));
          a = descending ? a - step : a + step;
          index++;
        }
        if (options.toRegex === true) {
          return toRegex(range, null, {wrap: false, options});
        }
        return range;
      };
      var fill = (start, end, step, options = {}) => {
        if (end == null && isValidValue(start)) {
          return [start];
        }
        if (!isValidValue(start) || !isValidValue(end)) {
          return invalidRange(start, end, options);
        }
        if (typeof step === "function") {
          return fill(start, end, 1, {transform: step});
        }
        if (isObject(step)) {
          return fill(start, end, 0, step);
        }
        let opts = __spreadValues({}, options);
        if (opts.capture === true)
          opts.wrap = true;
        step = step || opts.step || 1;
        if (!isNumber2(step)) {
          if (step != null && !isObject(step))
            return invalidStep(step, opts);
          return fill(start, end, 1, step);
        }
        if (isNumber2(start) && isNumber2(end)) {
          return fillNumbers(start, end, step, opts);
        }
        return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
      };
      module.exports = fill;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/compile.js
  var require_compile = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/compile.js"(exports, module) {
      "use strict";
      var fill = require_fill_range();
      var utils = require_utils();
      var compile = (ast, options = {}) => {
        let walk = (node, parent = {}) => {
          let invalidBlock = utils.isInvalidBrace(parent);
          let invalidNode = node.invalid === true && options.escapeInvalid === true;
          let invalid = invalidBlock === true || invalidNode === true;
          let prefix = options.escapeInvalid === true ? "\\" : "";
          let output = "";
          if (node.isOpen === true) {
            return prefix + node.value;
          }
          if (node.isClose === true) {
            return prefix + node.value;
          }
          if (node.type === "open") {
            return invalid ? prefix + node.value : "(";
          }
          if (node.type === "close") {
            return invalid ? prefix + node.value : ")";
          }
          if (node.type === "comma") {
            return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
          }
          if (node.value) {
            return node.value;
          }
          if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            let range = fill(...args, __spreadProps(__spreadValues({}, options), {wrap: false, toRegex: true}));
            if (range.length !== 0) {
              return args.length > 1 && range.length > 1 ? `(${range})` : range;
            }
          }
          if (node.nodes) {
            for (let child of node.nodes) {
              output += walk(child, node);
            }
          }
          return output;
        };
        return walk(ast);
      };
      module.exports = compile;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/expand.js
  var require_expand = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/expand.js"(exports, module) {
      "use strict";
      var fill = require_fill_range();
      var stringify = require_stringify();
      var utils = require_utils();
      var append = (queue = "", stash = "", enclose = false) => {
        let result = [];
        queue = [].concat(queue);
        stash = [].concat(stash);
        if (!stash.length)
          return queue;
        if (!queue.length) {
          return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
        }
        for (let item of queue) {
          if (Array.isArray(item)) {
            for (let value of item) {
              result.push(append(value, stash, enclose));
            }
          } else {
            for (let ele of stash) {
              if (enclose === true && typeof ele === "string")
                ele = `{${ele}}`;
              result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
            }
          }
        }
        return utils.flatten(result);
      };
      var expand = (ast, options = {}) => {
        let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
        let walk = (node, parent = {}) => {
          node.queue = [];
          let p = parent;
          let q = parent.queue;
          while (p.type !== "brace" && p.type !== "root" && p.parent) {
            p = p.parent;
            q = p.queue;
          }
          if (node.invalid || node.dollar) {
            q.push(append(q.pop(), stringify(node, options)));
            return;
          }
          if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
            q.push(append(q.pop(), ["{}"]));
            return;
          }
          if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            }
            let range = fill(...args, options);
            if (range.length === 0) {
              range = stringify(node, options);
            }
            q.push(append(q.pop(), range));
            node.nodes = [];
            return;
          }
          let enclose = utils.encloseBrace(node);
          let queue = node.queue;
          let block = node;
          while (block.type !== "brace" && block.type !== "root" && block.parent) {
            block = block.parent;
            queue = block.queue;
          }
          for (let i = 0; i < node.nodes.length; i++) {
            let child = node.nodes[i];
            if (child.type === "comma" && node.type === "brace") {
              if (i === 1)
                queue.push("");
              queue.push("");
              continue;
            }
            if (child.type === "close") {
              q.push(append(q.pop(), queue, enclose));
              continue;
            }
            if (child.value && child.type !== "open") {
              queue.push(append(queue.pop(), child.value));
              continue;
            }
            if (child.nodes) {
              walk(child, node);
            }
          }
          return queue;
        };
        return utils.flatten(walk(ast));
      };
      module.exports = expand;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/constants.js
  var require_constants = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/constants.js"(exports, module) {
      "use strict";
      module.exports = {
        MAX_LENGTH: 1024 * 64,
        CHAR_0: "0",
        CHAR_9: "9",
        CHAR_UPPERCASE_A: "A",
        CHAR_LOWERCASE_A: "a",
        CHAR_UPPERCASE_Z: "Z",
        CHAR_LOWERCASE_Z: "z",
        CHAR_LEFT_PARENTHESES: "(",
        CHAR_RIGHT_PARENTHESES: ")",
        CHAR_ASTERISK: "*",
        CHAR_AMPERSAND: "&",
        CHAR_AT: "@",
        CHAR_BACKSLASH: "\\",
        CHAR_BACKTICK: "`",
        CHAR_CARRIAGE_RETURN: "\r",
        CHAR_CIRCUMFLEX_ACCENT: "^",
        CHAR_COLON: ":",
        CHAR_COMMA: ",",
        CHAR_DOLLAR: "$",
        CHAR_DOT: ".",
        CHAR_DOUBLE_QUOTE: '"',
        CHAR_EQUAL: "=",
        CHAR_EXCLAMATION_MARK: "!",
        CHAR_FORM_FEED: "\f",
        CHAR_FORWARD_SLASH: "/",
        CHAR_HASH: "#",
        CHAR_HYPHEN_MINUS: "-",
        CHAR_LEFT_ANGLE_BRACKET: "<",
        CHAR_LEFT_CURLY_BRACE: "{",
        CHAR_LEFT_SQUARE_BRACKET: "[",
        CHAR_LINE_FEED: "\n",
        CHAR_NO_BREAK_SPACE: "\xA0",
        CHAR_PERCENT: "%",
        CHAR_PLUS: "+",
        CHAR_QUESTION_MARK: "?",
        CHAR_RIGHT_ANGLE_BRACKET: ">",
        CHAR_RIGHT_CURLY_BRACE: "}",
        CHAR_RIGHT_SQUARE_BRACKET: "]",
        CHAR_SEMICOLON: ";",
        CHAR_SINGLE_QUOTE: "'",
        CHAR_SPACE: " ",
        CHAR_TAB: "	",
        CHAR_UNDERSCORE: "_",
        CHAR_VERTICAL_LINE: "|",
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/parse.js
  var require_parse = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/lib/parse.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var {
        MAX_LENGTH,
        CHAR_BACKSLASH,
        CHAR_BACKTICK,
        CHAR_COMMA,
        CHAR_DOT,
        CHAR_LEFT_PARENTHESES,
        CHAR_RIGHT_PARENTHESES,
        CHAR_LEFT_CURLY_BRACE,
        CHAR_RIGHT_CURLY_BRACE,
        CHAR_LEFT_SQUARE_BRACKET,
        CHAR_RIGHT_SQUARE_BRACKET,
        CHAR_DOUBLE_QUOTE,
        CHAR_SINGLE_QUOTE,
        CHAR_NO_BREAK_SPACE,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE
      } = require_constants();
      var parse = (input, options = {}) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected a string");
        }
        let opts = options || {};
        let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        if (input.length > max) {
          throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
        }
        let ast = {type: "root", input, nodes: []};
        let stack = [ast];
        let block = ast;
        let prev = ast;
        let brackets = 0;
        let length = input.length;
        let index = 0;
        let depth = 0;
        let value;
        let memo = {};
        const advance = () => input[index++];
        const push = (node) => {
          if (node.type === "text" && prev.type === "dot") {
            prev.type = "text";
          }
          if (prev && prev.type === "text" && node.type === "text") {
            prev.value += node.value;
            return;
          }
          block.nodes.push(node);
          node.parent = block;
          node.prev = prev;
          prev = node;
          return node;
        };
        push({type: "bos"});
        while (index < length) {
          block = stack[stack.length - 1];
          value = advance();
          if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
            continue;
          }
          if (value === CHAR_BACKSLASH) {
            push({type: "text", value: (options.keepEscaping ? value : "") + advance()});
            continue;
          }
          if (value === CHAR_RIGHT_SQUARE_BRACKET) {
            push({type: "text", value: "\\" + value});
            continue;
          }
          if (value === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let closed = true;
            let next;
            while (index < length && (next = advance())) {
              value += next;
              if (next === CHAR_LEFT_SQUARE_BRACKET) {
                brackets++;
                continue;
              }
              if (next === CHAR_BACKSLASH) {
                value += advance();
                continue;
              }
              if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                brackets--;
                if (brackets === 0) {
                  break;
                }
              }
            }
            push({type: "text", value});
            continue;
          }
          if (value === CHAR_LEFT_PARENTHESES) {
            block = push({type: "paren", nodes: []});
            stack.push(block);
            push({type: "text", value});
            continue;
          }
          if (value === CHAR_RIGHT_PARENTHESES) {
            if (block.type !== "paren") {
              push({type: "text", value});
              continue;
            }
            block = stack.pop();
            push({type: "text", value});
            block = stack[stack.length - 1];
            continue;
          }
          if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
            let open = value;
            let next;
            if (options.keepQuotes !== true) {
              value = "";
            }
            while (index < length && (next = advance())) {
              if (next === CHAR_BACKSLASH) {
                value += next + advance();
                continue;
              }
              if (next === open) {
                if (options.keepQuotes === true)
                  value += next;
                break;
              }
              value += next;
            }
            push({type: "text", value});
            continue;
          }
          if (value === CHAR_LEFT_CURLY_BRACE) {
            depth++;
            let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
            let brace = {
              type: "brace",
              open: true,
              close: false,
              dollar,
              depth,
              commas: 0,
              ranges: 0,
              nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({type: "open", value});
            continue;
          }
          if (value === CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== "brace") {
              push({type: "text", value});
              continue;
            }
            let type = "close";
            block = stack.pop();
            block.close = true;
            push({type, value});
            depth--;
            block = stack[stack.length - 1];
            continue;
          }
          if (value === CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
              block.ranges = 0;
              let open = block.nodes.shift();
              block.nodes = [open, {type: "text", value: stringify(block)}];
            }
            push({type: "comma", value});
            block.commas++;
            continue;
          }
          if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
            let siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
              push({type: "text", value});
              continue;
            }
            if (prev.type === "dot") {
              block.range = [];
              prev.value += value;
              prev.type = "range";
              if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                block.invalid = true;
                block.ranges = 0;
                prev.type = "text";
                continue;
              }
              block.ranges++;
              block.args = [];
              continue;
            }
            if (prev.type === "range") {
              siblings.pop();
              let before = siblings[siblings.length - 1];
              before.value += prev.value + value;
              prev = before;
              block.ranges--;
              continue;
            }
            push({type: "dot", value});
            continue;
          }
          push({type: "text", value});
        }
        do {
          block = stack.pop();
          if (block.type !== "root") {
            block.nodes.forEach((node) => {
              if (!node.nodes) {
                if (node.type === "open")
                  node.isOpen = true;
                if (node.type === "close")
                  node.isClose = true;
                if (!node.nodes)
                  node.type = "text";
                node.invalid = true;
              }
            });
            let parent = stack[stack.length - 1];
            let index2 = parent.nodes.indexOf(block);
            parent.nodes.splice(index2, 1, ...block.nodes);
          }
        } while (stack.length > 0);
        push({type: "eos"});
        return ast;
      };
      module.exports = parse;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/index.js
  var require_braces = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/braces-npm-3.0.2-782240b28a-e2a8e769a8.zip/node_modules/braces/index.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var compile = require_compile();
      var expand = require_expand();
      var parse = require_parse();
      var braces = (input, options = {}) => {
        let output = [];
        if (Array.isArray(input)) {
          for (let pattern of input) {
            let result = braces.create(pattern, options);
            if (Array.isArray(result)) {
              output.push(...result);
            } else {
              output.push(result);
            }
          }
        } else {
          output = [].concat(braces.create(input, options));
        }
        if (options && options.expand === true && options.nodupes === true) {
          output = [...new Set(output)];
        }
        return output;
      };
      braces.parse = (input, options = {}) => parse(input, options);
      braces.stringify = (input, options = {}) => {
        if (typeof input === "string") {
          return stringify(braces.parse(input, options), options);
        }
        return stringify(input, options);
      };
      braces.compile = (input, options = {}) => {
        if (typeof input === "string") {
          input = braces.parse(input, options);
        }
        return compile(input, options);
      };
      braces.expand = (input, options = {}) => {
        if (typeof input === "string") {
          input = braces.parse(input, options);
        }
        let result = expand(input, options);
        if (options.noempty === true) {
          result = result.filter(Boolean);
        }
        if (options.nodupes === true) {
          result = [...new Set(result)];
        }
        return result;
      };
      braces.create = (input, options = {}) => {
        if (input === "" || input.length < 3) {
          return [input];
        }
        return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
      };
      module.exports = braces;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/constants.js
  var require_constants2 = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/constants.js"(exports, module) {
      "use strict";
      var path = require("path");
      var WIN_SLASH = "\\\\/";
      var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
      var DOT_LITERAL = "\\.";
      var PLUS_LITERAL = "\\+";
      var QMARK_LITERAL = "\\?";
      var SLASH_LITERAL = "\\/";
      var ONE_CHAR = "(?=.)";
      var QMARK = "[^/]";
      var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
      var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
      var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
      var NO_DOT = `(?!${DOT_LITERAL})`;
      var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
      var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
      var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
      var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
      var STAR = `${QMARK}*?`;
      var POSIX_CHARS = {
        DOT_LITERAL,
        PLUS_LITERAL,
        QMARK_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        QMARK,
        END_ANCHOR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      };
      var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
        SLASH_LITERAL: `[${WIN_SLASH}]`,
        QMARK: WIN_NO_SLASH,
        STAR: `${WIN_NO_SLASH}*?`,
        DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
        NO_DOT: `(?!${DOT_LITERAL})`,
        NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
        NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
        NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
        QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
        START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
        END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
      });
      var POSIX_REGEX_SOURCE = {
        alnum: "a-zA-Z0-9",
        alpha: "a-zA-Z",
        ascii: "\\x00-\\x7F",
        blank: " \\t",
        cntrl: "\\x00-\\x1F\\x7F",
        digit: "0-9",
        graph: "\\x21-\\x7E",
        lower: "a-z",
        print: "\\x20-\\x7E ",
        punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
        space: " \\t\\r\\n\\v\\f",
        upper: "A-Z",
        word: "A-Za-z0-9_",
        xdigit: "A-Fa-f0-9"
      };
      module.exports = {
        MAX_LENGTH: 1024 * 64,
        POSIX_REGEX_SOURCE,
        REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
        REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
        REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
        REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
        REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
        REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
        REPLACEMENTS: {
          "***": "*",
          "**/**": "**",
          "**/**/**": "**"
        },
        CHAR_0: 48,
        CHAR_9: 57,
        CHAR_UPPERCASE_A: 65,
        CHAR_LOWERCASE_A: 97,
        CHAR_UPPERCASE_Z: 90,
        CHAR_LOWERCASE_Z: 122,
        CHAR_LEFT_PARENTHESES: 40,
        CHAR_RIGHT_PARENTHESES: 41,
        CHAR_ASTERISK: 42,
        CHAR_AMPERSAND: 38,
        CHAR_AT: 64,
        CHAR_BACKWARD_SLASH: 92,
        CHAR_CARRIAGE_RETURN: 13,
        CHAR_CIRCUMFLEX_ACCENT: 94,
        CHAR_COLON: 58,
        CHAR_COMMA: 44,
        CHAR_DOT: 46,
        CHAR_DOUBLE_QUOTE: 34,
        CHAR_EQUAL: 61,
        CHAR_EXCLAMATION_MARK: 33,
        CHAR_FORM_FEED: 12,
        CHAR_FORWARD_SLASH: 47,
        CHAR_GRAVE_ACCENT: 96,
        CHAR_HASH: 35,
        CHAR_HYPHEN_MINUS: 45,
        CHAR_LEFT_ANGLE_BRACKET: 60,
        CHAR_LEFT_CURLY_BRACE: 123,
        CHAR_LEFT_SQUARE_BRACKET: 91,
        CHAR_LINE_FEED: 10,
        CHAR_NO_BREAK_SPACE: 160,
        CHAR_PERCENT: 37,
        CHAR_PLUS: 43,
        CHAR_QUESTION_MARK: 63,
        CHAR_RIGHT_ANGLE_BRACKET: 62,
        CHAR_RIGHT_CURLY_BRACE: 125,
        CHAR_RIGHT_SQUARE_BRACKET: 93,
        CHAR_SEMICOLON: 59,
        CHAR_SINGLE_QUOTE: 39,
        CHAR_SPACE: 32,
        CHAR_TAB: 9,
        CHAR_UNDERSCORE: 95,
        CHAR_VERTICAL_LINE: 124,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
        SEP: path.sep,
        extglobChars(chars) {
          return {
            "!": {type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})`},
            "?": {type: "qmark", open: "(?:", close: ")?"},
            "+": {type: "plus", open: "(?:", close: ")+"},
            "*": {type: "star", open: "(?:", close: ")*"},
            "@": {type: "at", open: "(?:", close: ")"}
          };
        },
        globChars(win32) {
          return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
        }
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/utils.js
  var require_utils2 = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/utils.js"(exports) {
      "use strict";
      var path = require("path");
      var win32 = process.platform === "win32";
      var {
        REGEX_BACKSLASH,
        REGEX_REMOVE_BACKSLASH,
        REGEX_SPECIAL_CHARS,
        REGEX_SPECIAL_CHARS_GLOBAL
      } = require_constants2();
      exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
      exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
      exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
      exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
      exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
      exports.removeBackslashes = (str) => {
        return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
          return match === "\\" ? "" : match;
        });
      };
      exports.supportsLookbehinds = () => {
        const segs = process.version.slice(1).split(".").map(Number);
        if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
          return true;
        }
        return false;
      };
      exports.isWindows = (options) => {
        if (options && typeof options.windows === "boolean") {
          return options.windows;
        }
        return win32 === true || path.sep === "\\";
      };
      exports.escapeLast = (input, char, lastIdx) => {
        const idx = input.lastIndexOf(char, lastIdx);
        if (idx === -1)
          return input;
        if (input[idx - 1] === "\\")
          return exports.escapeLast(input, char, idx - 1);
        return `${input.slice(0, idx)}\\${input.slice(idx)}`;
      };
      exports.removePrefix = (input, state = {}) => {
        let output = input;
        if (output.startsWith("./")) {
          output = output.slice(2);
          state.prefix = "./";
        }
        return output;
      };
      exports.wrapOutput = (input, state = {}, options = {}) => {
        const prepend = options.contains ? "" : "^";
        const append = options.contains ? "" : "$";
        let output = `${prepend}(?:${input})${append}`;
        if (state.negated === true) {
          output = `(?:^(?!${output}).*$)`;
        }
        return output;
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/scan.js
  var require_scan = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/scan.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var {
        CHAR_ASTERISK,
        CHAR_AT,
        CHAR_BACKWARD_SLASH,
        CHAR_COMMA,
        CHAR_DOT,
        CHAR_EXCLAMATION_MARK,
        CHAR_FORWARD_SLASH,
        CHAR_LEFT_CURLY_BRACE,
        CHAR_LEFT_PARENTHESES,
        CHAR_LEFT_SQUARE_BRACKET,
        CHAR_PLUS,
        CHAR_QUESTION_MARK,
        CHAR_RIGHT_CURLY_BRACE,
        CHAR_RIGHT_PARENTHESES,
        CHAR_RIGHT_SQUARE_BRACKET
      } = require_constants2();
      var isPathSeparator = (code) => {
        return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
      };
      var depth = (token) => {
        if (token.isPrefix !== true) {
          token.depth = token.isGlobstar ? Infinity : 1;
        }
      };
      var scan = (input, options) => {
        const opts = options || {};
        const length = input.length - 1;
        const scanToEnd = opts.parts === true || opts.scanToEnd === true;
        const slashes = [];
        const tokens = [];
        const parts = [];
        let str = input;
        let index = -1;
        let start = 0;
        let lastIndex = 0;
        let isBrace = false;
        let isBracket = false;
        let isGlob = false;
        let isExtglob = false;
        let isGlobstar = false;
        let braceEscaped = false;
        let backslashes = false;
        let negated = false;
        let finished = false;
        let braces = 0;
        let prev;
        let code;
        let token = {value: "", depth: 0, isGlob: false};
        const eos = () => index >= length;
        const peek = () => str.charCodeAt(index + 1);
        const advance = () => {
          prev = code;
          return str.charCodeAt(++index);
        };
        while (index < length) {
          code = advance();
          let next;
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braceEscaped = true;
            }
            continue;
          }
          if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (code === CHAR_LEFT_CURLY_BRACE) {
                braces++;
                continue;
              }
              if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (braceEscaped !== true && code === CHAR_COMMA) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (code === CHAR_RIGHT_CURLY_BRACE) {
                braces--;
                if (braces === 0) {
                  braceEscaped = false;
                  isBrace = token.isBrace = true;
                  finished = true;
                  break;
                }
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {value: "", depth: 0, isGlob: false};
            if (finished === true)
              continue;
            if (prev === CHAR_DOT && index === start + 1) {
              start += 2;
              continue;
            }
            lastIndex = index + 1;
            continue;
          }
          if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
              isGlob = token.isGlob = true;
              isExtglob = token.isExtglob = true;
              finished = true;
              if (scanToEnd === true) {
                while (eos() !== true && (code = advance())) {
                  if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    code = advance();
                    continue;
                  }
                  if (code === CHAR_RIGHT_PARENTHESES) {
                    isGlob = token.isGlob = true;
                    finished = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
          }
          if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK)
              isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while (eos() !== true && (next = advance())) {
              if (next === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                isBracket = token.isBracket = true;
                isGlob = token.isGlob = true;
                finished = true;
                break;
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
          }
          if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_LEFT_PARENTHESES) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
        }
        if (opts.noext === true) {
          isExtglob = false;
          isGlob = false;
        }
        let base = str;
        let prefix = "";
        let glob = "";
        if (start > 0) {
          prefix = str.slice(0, start);
          str = str.slice(start);
          lastIndex -= start;
        }
        if (base && isGlob === true && lastIndex > 0) {
          base = str.slice(0, lastIndex);
          glob = str.slice(lastIndex);
        } else if (isGlob === true) {
          base = "";
          glob = str;
        } else {
          base = str;
        }
        if (base && base !== "" && base !== "/" && base !== str) {
          if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
          }
        }
        if (opts.unescape === true) {
          if (glob)
            glob = utils.removeBackslashes(glob);
          if (base && backslashes === true) {
            base = utils.removeBackslashes(base);
          }
        }
        const state = {
          prefix,
          input,
          start,
          base,
          glob,
          isBrace,
          isBracket,
          isGlob,
          isExtglob,
          isGlobstar,
          negated
        };
        if (opts.tokens === true) {
          state.maxDepth = 0;
          if (!isPathSeparator(code)) {
            tokens.push(token);
          }
          state.tokens = tokens;
        }
        if (opts.parts === true || opts.tokens === true) {
          let prevIndex;
          for (let idx = 0; idx < slashes.length; idx++) {
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
              if (idx === 0 && start !== 0) {
                tokens[idx].isPrefix = true;
                tokens[idx].value = prefix;
              } else {
                tokens[idx].value = value;
              }
              depth(tokens[idx]);
              state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== "") {
              parts.push(value);
            }
            prevIndex = i;
          }
          if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
              tokens[tokens.length - 1].value = value;
              depth(tokens[tokens.length - 1]);
              state.maxDepth += tokens[tokens.length - 1].depth;
            }
          }
          state.slashes = slashes;
          state.parts = parts;
        }
        return state;
      };
      module.exports = scan;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/parse.js
  var require_parse2 = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/parse.js"(exports, module) {
      "use strict";
      var constants = require_constants2();
      var utils = require_utils2();
      var {
        MAX_LENGTH,
        POSIX_REGEX_SOURCE,
        REGEX_NON_SPECIAL_CHARS,
        REGEX_SPECIAL_CHARS_BACKREF,
        REPLACEMENTS
      } = constants;
      var expandRange = (args, options) => {
        if (typeof options.expandRange === "function") {
          return options.expandRange(...args, options);
        }
        args.sort();
        const value = `[${args.join("-")}]`;
        try {
          new RegExp(value);
        } catch (ex) {
          return args.map((v) => utils.escapeRegex(v)).join("..");
        }
        return value;
      };
      var syntaxError = (type, char) => {
        return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
      };
      var parse = (input, options) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected a string");
        }
        input = REPLACEMENTS[input] || input;
        const opts = __spreadValues({}, options);
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        let len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
        }
        const bos = {type: "bos", value: "", output: opts.prepend || ""};
        const tokens = [bos];
        const capture = opts.capture ? "" : "?:";
        const win32 = utils.isWindows(options);
        const PLATFORM_CHARS = constants.globChars(win32);
        const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
        const {
          DOT_LITERAL,
          PLUS_LITERAL,
          SLASH_LITERAL,
          ONE_CHAR,
          DOTS_SLASH,
          NO_DOT,
          NO_DOT_SLASH,
          NO_DOTS_SLASH,
          QMARK,
          QMARK_NO_DOT,
          STAR,
          START_ANCHOR
        } = PLATFORM_CHARS;
        const globstar = (opts2) => {
          return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
        };
        const nodot = opts.dot ? "" : NO_DOT;
        const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
        let star = opts.bash === true ? globstar(opts) : STAR;
        if (opts.capture) {
          star = `(${star})`;
        }
        if (typeof opts.noext === "boolean") {
          opts.noextglob = opts.noext;
        }
        const state = {
          input,
          index: -1,
          start: 0,
          dot: opts.dot === true,
          consumed: "",
          output: "",
          prefix: "",
          backtrack: false,
          negated: false,
          brackets: 0,
          braces: 0,
          parens: 0,
          quotes: 0,
          globstar: false,
          tokens
        };
        input = utils.removePrefix(input, state);
        len = input.length;
        const extglobs = [];
        const braces = [];
        const stack = [];
        let prev = bos;
        let value;
        const eos = () => state.index === len - 1;
        const peek = state.peek = (n = 1) => input[state.index + n];
        const advance = state.advance = () => input[++state.index];
        const remaining = () => input.slice(state.index + 1);
        const consume = (value2 = "", num = 0) => {
          state.consumed += value2;
          state.index += num;
        };
        const append = (token) => {
          state.output += token.output != null ? token.output : token.value;
          consume(token.value);
        };
        const negate = () => {
          let count = 1;
          while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
            advance();
            state.start++;
            count++;
          }
          if (count % 2 === 0) {
            return false;
          }
          state.negated = true;
          state.start++;
          return true;
        };
        const increment = (type) => {
          state[type]++;
          stack.push(type);
        };
        const decrement = (type) => {
          state[type]--;
          stack.pop();
        };
        const push = (tok) => {
          if (prev.type === "globstar") {
            const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
            if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
              state.output = state.output.slice(0, -prev.output.length);
              prev.type = "star";
              prev.value = "*";
              prev.output = star;
              state.output += prev.output;
            }
          }
          if (extglobs.length && tok.type !== "paren" && !EXTGLOB_CHARS[tok.value]) {
            extglobs[extglobs.length - 1].inner += tok.value;
          }
          if (tok.value || tok.output)
            append(tok);
          if (prev && prev.type === "text" && tok.type === "text") {
            prev.value += tok.value;
            prev.output = (prev.output || "") + tok.value;
            return;
          }
          tok.prev = prev;
          tokens.push(tok);
          prev = tok;
        };
        const extglobOpen = (type, value2) => {
          const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), {conditions: 1, inner: ""});
          token.prev = prev;
          token.parens = state.parens;
          token.output = state.output;
          const output = (opts.capture ? "(" : "") + token.open;
          increment("parens");
          push({type, value: value2, output: state.output ? "" : ONE_CHAR});
          push({type: "paren", extglob: true, value: advance(), output});
          extglobs.push(token);
        };
        const extglobClose = (token) => {
          let output = token.close + (opts.capture ? ")" : "");
          if (token.type === "negate") {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
              extglobStar = globstar(opts);
            }
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
              output = token.close = `)$))${extglobStar}`;
            }
            if (token.prev.type === "bos") {
              state.negatedExtglob = true;
            }
          }
          push({type: "paren", extglob: true, value, output});
          decrement("parens");
        };
        if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
          let backslashes = false;
          let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
            if (first === "\\") {
              backslashes = true;
              return m;
            }
            if (first === "?") {
              if (esc) {
                return esc + first + (rest ? QMARK.repeat(rest.length) : "");
              }
              if (index === 0) {
                return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
              }
              return QMARK.repeat(chars.length);
            }
            if (first === ".") {
              return DOT_LITERAL.repeat(chars.length);
            }
            if (first === "*") {
              if (esc) {
                return esc + first + (rest ? star : "");
              }
              return star;
            }
            return esc ? m : `\\${m}`;
          });
          if (backslashes === true) {
            if (opts.unescape === true) {
              output = output.replace(/\\/g, "");
            } else {
              output = output.replace(/\\+/g, (m) => {
                return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
              });
            }
          }
          if (output === input && opts.contains === true) {
            state.output = input;
            return state;
          }
          state.output = utils.wrapOutput(output, state, options);
          return state;
        }
        while (!eos()) {
          value = advance();
          if (value === "\0") {
            continue;
          }
          if (value === "\\") {
            const next = peek();
            if (next === "/" && opts.bash !== true) {
              continue;
            }
            if (next === "." || next === ";") {
              continue;
            }
            if (!next) {
              value += "\\";
              push({type: "text", value});
              continue;
            }
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
              slashes = match[0].length;
              state.index += slashes;
              if (slashes % 2 !== 0) {
                value += "\\";
              }
            }
            if (opts.unescape === true) {
              value = advance() || "";
            } else {
              value += advance() || "";
            }
            if (state.brackets === 0) {
              push({type: "text", value});
              continue;
            }
          }
          if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
            if (opts.posix !== false && value === ":") {
              const inner = prev.value.slice(1);
              if (inner.includes("[")) {
                prev.posix = true;
                if (inner.includes(":")) {
                  const idx = prev.value.lastIndexOf("[");
                  const pre = prev.value.slice(0, idx);
                  const rest2 = prev.value.slice(idx + 2);
                  const posix = POSIX_REGEX_SOURCE[rest2];
                  if (posix) {
                    prev.value = pre + posix;
                    state.backtrack = true;
                    advance();
                    if (!bos.output && tokens.indexOf(prev) === 1) {
                      bos.output = ONE_CHAR;
                    }
                    continue;
                  }
                }
              }
            }
            if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
              value = `\\${value}`;
            }
            if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
              value = `\\${value}`;
            }
            if (opts.posix === true && value === "!" && prev.value === "[") {
              value = "^";
            }
            prev.value += value;
            append({value});
            continue;
          }
          if (state.quotes === 1 && value !== '"') {
            value = utils.escapeRegex(value);
            prev.value += value;
            append({value});
            continue;
          }
          if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
              push({type: "text", value});
            }
            continue;
          }
          if (value === "(") {
            increment("parens");
            push({type: "paren", value});
            continue;
          }
          if (value === ")") {
            if (state.parens === 0 && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "("));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
              extglobClose(extglobs.pop());
              continue;
            }
            push({type: "paren", value, output: state.parens ? ")" : "\\)"});
            decrement("parens");
            continue;
          }
          if (value === "[") {
            if (opts.nobracket === true || !remaining().includes("]")) {
              if (opts.nobracket !== true && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("closing", "]"));
              }
              value = `\\${value}`;
            } else {
              increment("brackets");
            }
            push({type: "bracket", value});
            continue;
          }
          if (value === "]") {
            if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
              push({type: "text", value, output: `\\${value}`});
              continue;
            }
            if (state.brackets === 0) {
              if (opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "["));
              }
              push({type: "text", value, output: `\\${value}`});
              continue;
            }
            decrement("brackets");
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
              value = `/${value}`;
            }
            prev.value += value;
            append({value});
            if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
              continue;
            }
            const escaped = utils.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            if (opts.literalBrackets === true) {
              state.output += escaped;
              prev.value = escaped;
              continue;
            }
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
          }
          if (value === "{" && opts.nobrace !== true) {
            increment("braces");
            const open = {
              type: "brace",
              value,
              output: "(",
              outputIndex: state.output.length,
              tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
          }
          if (value === "}") {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
              push({type: "text", value, output: value});
              continue;
            }
            let output = ")";
            if (brace.dots === true) {
              const arr = tokens.slice();
              const range = [];
              for (let i = arr.length - 1; i >= 0; i--) {
                tokens.pop();
                if (arr[i].type === "brace") {
                  break;
                }
                if (arr[i].type !== "dots") {
                  range.unshift(arr[i].value);
                }
              }
              output = expandRange(range, opts);
              state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
              const out = state.output.slice(0, brace.outputIndex);
              const toks = state.tokens.slice(brace.tokensIndex);
              brace.value = brace.output = "\\{";
              value = output = "\\}";
              state.output = out;
              for (const t2 of toks) {
                state.output += t2.output || t2.value;
              }
            }
            push({type: "brace", value, output});
            decrement("braces");
            braces.pop();
            continue;
          }
          if (value === "|") {
            if (extglobs.length > 0) {
              extglobs[extglobs.length - 1].conditions++;
            }
            push({type: "text", value});
            continue;
          }
          if (value === ",") {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === "braces") {
              brace.comma = true;
              output = "|";
            }
            push({type: "comma", value, output});
            continue;
          }
          if (value === "/") {
            if (prev.type === "dot" && state.index === state.start + 1) {
              state.start = state.index + 1;
              state.consumed = "";
              state.output = "";
              tokens.pop();
              prev = bos;
              continue;
            }
            push({type: "slash", value, output: SLASH_LITERAL});
            continue;
          }
          if (value === ".") {
            if (state.braces > 0 && prev.type === "dot") {
              if (prev.value === ".")
                prev.output = DOT_LITERAL;
              const brace = braces[braces.length - 1];
              prev.type = "dots";
              prev.output += value;
              prev.value += value;
              brace.dots = true;
              continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
              push({type: "text", value, output: DOT_LITERAL});
              continue;
            }
            push({type: "dot", value, output: DOT_LITERAL});
            continue;
          }
          if (value === "?") {
            const isGroup = prev && prev.value === "(";
            if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("qmark", value);
              continue;
            }
            if (prev && prev.type === "paren") {
              const next = peek();
              let output = value;
              if (next === "<" && !utils.supportsLookbehinds()) {
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              }
              if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                output = `\\${value}`;
              }
              push({type: "text", value, output});
              continue;
            }
            if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
              push({type: "qmark", value, output: QMARK_NO_DOT});
              continue;
            }
            push({type: "qmark", value, output: QMARK});
            continue;
          }
          if (value === "!") {
            if (opts.noextglob !== true && peek() === "(") {
              if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                extglobOpen("negate", value);
                continue;
              }
            }
            if (opts.nonegate !== true && state.index === 0) {
              negate();
              continue;
            }
          }
          if (value === "+") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("plus", value);
              continue;
            }
            if (prev && prev.value === "(" || opts.regex === false) {
              push({type: "plus", value, output: PLUS_LITERAL});
              continue;
            }
            if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
              push({type: "plus", value});
              continue;
            }
            push({type: "plus", value: PLUS_LITERAL});
            continue;
          }
          if (value === "@") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              push({type: "at", extglob: true, value, output: ""});
              continue;
            }
            push({type: "text", value});
            continue;
          }
          if (value !== "*") {
            if (value === "$" || value === "^") {
              value = `\\${value}`;
            }
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
              value += match[0];
              state.index += match[0].length;
            }
            push({type: "text", value});
            continue;
          }
          if (prev && (prev.type === "globstar" || prev.star === true)) {
            prev.type = "star";
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
          }
          let rest = remaining();
          if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen("star", value);
            continue;
          }
          if (prev.type === "star") {
            if (opts.noglobstar === true) {
              consume(value);
              continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === "slash" || prior.type === "bos";
            const afterStar = before && (before.type === "star" || before.type === "globstar");
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
              push({type: "star", value, output: ""});
              continue;
            }
            const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
            const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
            if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
              push({type: "star", value, output: ""});
              continue;
            }
            while (rest.slice(0, 3) === "/**") {
              const after = input[state.index + 4];
              if (after && after !== "/") {
                break;
              }
              rest = rest.slice(3);
              consume("/**", 3);
            }
            if (prior.type === "bos" && eos()) {
              prev.type = "globstar";
              prev.value += value;
              prev.output = globstar(opts);
              state.output = prev.output;
              state.globstar = true;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${prior.output}`;
              prev.type = "globstar";
              prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
              prev.value += value;
              state.globstar = true;
              state.output += prior.output + prev.output;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
              const end = rest[1] !== void 0 ? "|$" : "";
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${prior.output}`;
              prev.type = "globstar";
              prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
              prev.value += value;
              state.output += prior.output + prev.output;
              state.globstar = true;
              consume(value + advance());
              push({type: "slash", value: "/", output: ""});
              continue;
            }
            if (prior.type === "bos" && rest[0] === "/") {
              prev.type = "globstar";
              prev.value += value;
              prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
              state.output = prev.output;
              state.globstar = true;
              consume(value + advance());
              push({type: "slash", value: "/", output: ""});
              continue;
            }
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "globstar";
            prev.output = globstar(opts);
            prev.value += value;
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          const token = {type: "star", value, output: star};
          if (opts.bash === true) {
            token.output = ".*?";
            if (prev.type === "bos" || prev.type === "slash") {
              token.output = nodot + token.output;
            }
            push(token);
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
          }
          if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
            if (prev.type === "dot") {
              state.output += NO_DOT_SLASH;
              prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
              state.output += NO_DOTS_SLASH;
              prev.output += NO_DOTS_SLASH;
            } else {
              state.output += nodot;
              prev.output += nodot;
            }
            if (peek() !== "*") {
              state.output += ONE_CHAR;
              prev.output += ONE_CHAR;
            }
          }
          push(token);
        }
        while (state.brackets > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "]"));
          state.output = utils.escapeLast(state.output, "[");
          decrement("brackets");
        }
        while (state.parens > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", ")"));
          state.output = utils.escapeLast(state.output, "(");
          decrement("parens");
        }
        while (state.braces > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "}"));
          state.output = utils.escapeLast(state.output, "{");
          decrement("braces");
        }
        if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
          push({type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?`});
        }
        if (state.backtrack === true) {
          state.output = "";
          for (const token of state.tokens) {
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
              state.output += token.suffix;
            }
          }
        }
        return state;
      };
      parse.fastpaths = (input, options) => {
        const opts = __spreadValues({}, options);
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        const len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
        }
        input = REPLACEMENTS[input] || input;
        const win32 = utils.isWindows(options);
        const {
          DOT_LITERAL,
          SLASH_LITERAL,
          ONE_CHAR,
          DOTS_SLASH,
          NO_DOT,
          NO_DOTS,
          NO_DOTS_SLASH,
          STAR,
          START_ANCHOR
        } = constants.globChars(win32);
        const nodot = opts.dot ? NO_DOTS : NO_DOT;
        const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
        const capture = opts.capture ? "" : "?:";
        const state = {negated: false, prefix: ""};
        let star = opts.bash === true ? ".*?" : STAR;
        if (opts.capture) {
          star = `(${star})`;
        }
        const globstar = (opts2) => {
          if (opts2.noglobstar === true)
            return star;
          return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
        };
        const create = (str) => {
          switch (str) {
            case "*":
              return `${nodot}${ONE_CHAR}${star}`;
            case ".*":
              return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*.*":
              return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*/*":
              return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case "**":
              return nodot + globstar(opts);
            case "**/*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case "**/*.*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "**/.*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default: {
              const match = /^(.*?)\.(\w+)$/.exec(str);
              if (!match)
                return;
              const source2 = create(match[1]);
              if (!source2)
                return;
              return source2 + DOT_LITERAL + match[2];
            }
          }
        };
        const output = utils.removePrefix(input, state);
        let source = create(output);
        if (source && opts.strictSlashes !== true) {
          source += `${SLASH_LITERAL}?`;
        }
        return source;
      };
      module.exports = parse;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/picomatch.js
  var require_picomatch = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/lib/picomatch.js"(exports, module) {
      "use strict";
      var path = require("path");
      var scan = require_scan();
      var parse = require_parse2();
      var utils = require_utils2();
      var constants = require_constants2();
      var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
      var picomatch = (glob, options, returnState = false) => {
        if (Array.isArray(glob)) {
          const fns = glob.map((input) => picomatch(input, options, returnState));
          const arrayMatcher = (str) => {
            for (const isMatch of fns) {
              const state2 = isMatch(str);
              if (state2)
                return state2;
            }
            return false;
          };
          return arrayMatcher;
        }
        const isState = isObject(glob) && glob.tokens && glob.input;
        if (glob === "" || typeof glob !== "string" && !isState) {
          throw new TypeError("Expected pattern to be a non-empty string");
        }
        const opts = options || {};
        const posix = utils.isWindows(options);
        const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
        const state = regex.state;
        delete regex.state;
        let isIgnored = () => false;
        if (opts.ignore) {
          const ignoreOpts = __spreadProps(__spreadValues({}, options), {ignore: null, onMatch: null, onResult: null});
          isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
        }
        const matcher = (input, returnObject = false) => {
          const {isMatch, match, output} = picomatch.test(input, regex, options, {glob, posix});
          const result = {glob, state, regex, posix, input, output, match, isMatch};
          if (typeof opts.onResult === "function") {
            opts.onResult(result);
          }
          if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (isIgnored(input)) {
            if (typeof opts.onIgnore === "function") {
              opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (typeof opts.onMatch === "function") {
            opts.onMatch(result);
          }
          return returnObject ? result : true;
        };
        if (returnState) {
          matcher.state = state;
        }
        return matcher;
      };
      picomatch.test = (input, regex, options, {glob, posix} = {}) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected input to be a string");
        }
        if (input === "") {
          return {isMatch: false, output: ""};
        }
        const opts = options || {};
        const format = opts.format || (posix ? utils.toPosixSlashes : null);
        let match = input === glob;
        let output = match && format ? format(input) : input;
        if (match === false) {
          output = format ? format(input) : input;
          match = output === glob;
        }
        if (match === false || opts.capture === true) {
          if (opts.matchBase === true || opts.basename === true) {
            match = picomatch.matchBase(input, regex, options, posix);
          } else {
            match = regex.exec(output);
          }
        }
        return {isMatch: Boolean(match), match, output};
      };
      picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
        const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
        return regex.test(path.basename(input));
      };
      picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
      picomatch.parse = (pattern, options) => {
        if (Array.isArray(pattern))
          return pattern.map((p) => picomatch.parse(p, options));
        return parse(pattern, __spreadProps(__spreadValues({}, options), {fastpaths: false}));
      };
      picomatch.scan = (input, options) => scan(input, options);
      picomatch.compileRe = (parsed, options, returnOutput = false, returnState = false) => {
        if (returnOutput === true) {
          return parsed.output;
        }
        const opts = options || {};
        const prepend = opts.contains ? "" : "^";
        const append = opts.contains ? "" : "$";
        let source = `${prepend}(?:${parsed.output})${append}`;
        if (parsed && parsed.negated === true) {
          source = `^(?!${source}).*$`;
        }
        const regex = picomatch.toRegex(source, options);
        if (returnState === true) {
          regex.state = parsed;
        }
        return regex;
      };
      picomatch.makeRe = (input, options, returnOutput = false, returnState = false) => {
        if (!input || typeof input !== "string") {
          throw new TypeError("Expected a non-empty string");
        }
        const opts = options || {};
        let parsed = {negated: false, fastpaths: true};
        let prefix = "";
        let output;
        if (input.startsWith("./")) {
          input = input.slice(2);
          prefix = parsed.prefix = "./";
        }
        if (opts.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
          output = parse.fastpaths(input, options);
        }
        if (output === void 0) {
          parsed = parse(input, options);
          parsed.prefix = prefix + (parsed.prefix || "");
        } else {
          parsed.output = output;
        }
        return picomatch.compileRe(parsed, options, returnOutput, returnState);
      };
      picomatch.toRegex = (source, options) => {
        try {
          const opts = options || {};
          return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
        } catch (err) {
          if (options && options.debug === true)
            throw err;
          return /$^/;
        }
      };
      picomatch.constants = constants;
      module.exports = picomatch;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/index.js
  var require_picomatch2 = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/picomatch-npm-2.2.3-3797e21cf0-45e2b882b5.zip/node_modules/picomatch/index.js"(exports, module) {
      "use strict";
      module.exports = require_picomatch();
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/micromatch-npm-4.0.2-f059c00e51-39590a96d9.zip/node_modules/micromatch/index.js
  var require_micromatch = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/micromatch-npm-4.0.2-f059c00e51-39590a96d9.zip/node_modules/micromatch/index.js"(exports, module) {
      "use strict";
      var util = require("util");
      var braces = require_braces();
      var picomatch = require_picomatch2();
      var utils = require_utils2();
      var isEmptyString = (val) => typeof val === "string" && (val === "" || val === "./");
      var micromatch2 = (list, patterns, options) => {
        patterns = [].concat(patterns);
        list = [].concat(list);
        let omit = new Set();
        let keep = new Set();
        let items = new Set();
        let negatives = 0;
        let onResult = (state) => {
          items.add(state.output);
          if (options && options.onResult) {
            options.onResult(state);
          }
        };
        for (let i = 0; i < patterns.length; i++) {
          let isMatch = picomatch(String(patterns[i]), __spreadProps(__spreadValues({}, options), {onResult}), true);
          let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
          if (negated)
            negatives++;
          for (let item of list) {
            let matched = isMatch(item, true);
            let match = negated ? !matched.isMatch : matched.isMatch;
            if (!match)
              continue;
            if (negated) {
              omit.add(matched.output);
            } else {
              omit.delete(matched.output);
              keep.add(matched.output);
            }
          }
        }
        let result = negatives === patterns.length ? [...items] : [...keep];
        let matches = result.filter((item) => !omit.has(item));
        if (options && matches.length === 0) {
          if (options.failglob === true) {
            throw new Error(`No matches found for "${patterns.join(", ")}"`);
          }
          if (options.nonull === true || options.nullglob === true) {
            return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
          }
        }
        return matches;
      };
      micromatch2.match = micromatch2;
      micromatch2.matcher = (pattern, options) => picomatch(pattern, options);
      micromatch2.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
      micromatch2.any = micromatch2.isMatch;
      micromatch2.not = (list, patterns, options = {}) => {
        patterns = [].concat(patterns).map(String);
        let result = new Set();
        let items = [];
        let onResult = (state) => {
          if (options.onResult)
            options.onResult(state);
          items.push(state.output);
        };
        let matches = micromatch2(list, patterns, __spreadProps(__spreadValues({}, options), {onResult}));
        for (let item of items) {
          if (!matches.includes(item)) {
            result.add(item);
          }
        }
        return [...result];
      };
      micromatch2.contains = (str, pattern, options) => {
        if (typeof str !== "string") {
          throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
        }
        if (Array.isArray(pattern)) {
          return pattern.some((p) => micromatch2.contains(str, p, options));
        }
        if (typeof pattern === "string") {
          if (isEmptyString(str) || isEmptyString(pattern)) {
            return false;
          }
          if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
            return true;
          }
        }
        return micromatch2.isMatch(str, pattern, __spreadProps(__spreadValues({}, options), {contains: true}));
      };
      micromatch2.matchKeys = (obj, patterns, options) => {
        if (!utils.isObject(obj)) {
          throw new TypeError("Expected the first argument to be an object");
        }
        let keys = micromatch2(Object.keys(obj), patterns, options);
        let res = {};
        for (let key of keys)
          res[key] = obj[key];
        return res;
      };
      micromatch2.some = (list, patterns, options) => {
        let items = [].concat(list);
        for (let pattern of [].concat(patterns)) {
          let isMatch = picomatch(String(pattern), options);
          if (items.some((item) => isMatch(item))) {
            return true;
          }
        }
        return false;
      };
      micromatch2.every = (list, patterns, options) => {
        let items = [].concat(list);
        for (let pattern of [].concat(patterns)) {
          let isMatch = picomatch(String(pattern), options);
          if (!items.every((item) => isMatch(item))) {
            return false;
          }
        }
        return true;
      };
      micromatch2.all = (str, patterns, options) => {
        if (typeof str !== "string") {
          throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
        }
        return [].concat(patterns).every((p) => picomatch(p, options)(str));
      };
      micromatch2.capture = (glob, input, options) => {
        let posix = utils.isWindows(options);
        let regex = picomatch.makeRe(String(glob), __spreadProps(__spreadValues({}, options), {capture: true}));
        let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
        if (match) {
          return match.slice(1).map((v) => v === void 0 ? "" : v);
        }
      };
      micromatch2.makeRe = (...args) => picomatch.makeRe(...args);
      micromatch2.scan = (...args) => picomatch.scan(...args);
      micromatch2.parse = (patterns, options) => {
        let res = [];
        for (let pattern of [].concat(patterns || [])) {
          for (let str of braces(String(pattern), options)) {
            res.push(picomatch.parse(str, options));
          }
        }
        return res;
      };
      micromatch2.braces = (pattern, options) => {
        if (typeof pattern !== "string")
          throw new TypeError("Expected a string");
        if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
          return [pattern];
        }
        return braces(pattern, options);
      };
      micromatch2.braceExpand = (pattern, options) => {
        if (typeof pattern !== "string")
          throw new TypeError("Expected a string");
        return micromatch2.braces(pattern, __spreadProps(__spreadValues({}, options), {expand: true}));
      };
      module.exports = micromatch2;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/p-try-npm-2.0.0-1f8d030b63-5afa1a7fd2.zip/node_modules/p-try/index.js
  var require_p_try = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/p-try-npm-2.0.0-1f8d030b63-5afa1a7fd2.zip/node_modules/p-try/index.js"(exports, module) {
      "use strict";
      module.exports = (callback, ...args) => new Promise((resolve) => {
        resolve(callback(...args));
      });
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/p-limit-npm-2.2.0-d458ce1c4b-e92ec3025f.zip/node_modules/p-limit/index.js
  var require_p_limit = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/p-limit-npm-2.2.0-d458ce1c4b-e92ec3025f.zip/node_modules/p-limit/index.js"(exports, module) {
      "use strict";
      var pTry = require_p_try();
      var pLimit2 = (concurrency) => {
        if (concurrency < 1) {
          throw new TypeError("Expected `concurrency` to be a number from 1 and up");
        }
        const queue = [];
        let activeCount = 0;
        const next = () => {
          activeCount--;
          if (queue.length > 0) {
            queue.shift()();
          }
        };
        const run = (fn, resolve, ...args) => {
          activeCount++;
          const result = pTry(fn, ...args);
          resolve(result);
          result.then(next, next);
        };
        const enqueue = (fn, resolve, ...args) => {
          if (activeCount < concurrency) {
            run(fn, resolve, ...args);
          } else {
            queue.push(run.bind(null, fn, resolve, ...args));
          }
        };
        const generator = (fn, ...args) => new Promise((resolve) => enqueue(fn, resolve, ...args));
        Object.defineProperties(generator, {
          activeCount: {
            get: () => activeCount
          },
          pendingCount: {
            get: () => queue.length
          }
        });
        return generator;
      };
      module.exports = pLimit2;
      module.exports.default = pLimit2;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-workspace-tools/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-workspace-tools/sources/commands/focus.ts
  var import_cli = __toModule(require("@yarnpkg/cli"));
  var import_core = __toModule(require("@yarnpkg/core"));
  var import_core2 = __toModule(require("@yarnpkg/core"));
  var import_clipanion = __toModule(require("clipanion"));
  var WorkspacesFocus = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.json = import_clipanion.Option.Boolean(`--json`, false, {
        description: `Format the output as an NDJSON stream`
      });
      this.production = import_clipanion.Option.Boolean(`--production`, false, {
        description: `Only install regular dependencies by omitting dev dependencies`
      });
      this.all = import_clipanion.Option.Boolean(`-A,--all`, false, {
        description: `Install the entire project`
      });
      this.workspaces = import_clipanion.Option.Rest();
    }
    async execute() {
      const configuration = await import_core.Configuration.find(this.context.cwd, this.context.plugins);
      const {project, workspace} = await import_core.Project.find(configuration, this.context.cwd);
      const cache = await import_core.Cache.find(configuration);
      await project.restoreInstallState({
        restoreResolutions: false
      });
      let requiredWorkspaces;
      if (this.all) {
        requiredWorkspaces = new Set(project.workspaces);
      } else if (this.workspaces.length === 0) {
        if (!workspace)
          throw new import_cli.WorkspaceRequiredError(project.cwd, this.context.cwd);
        requiredWorkspaces = new Set([workspace]);
      } else {
        requiredWorkspaces = new Set(this.workspaces.map((name) => {
          return project.getWorkspaceByIdent(import_core2.structUtils.parseIdent(name));
        }));
      }
      for (const workspace2 of requiredWorkspaces) {
        for (const dependencyType of this.production ? [`dependencies`] : import_core.Manifest.hardDependencies) {
          for (const descriptor of workspace2.manifest.getForScope(dependencyType).values()) {
            const matchingWorkspace = project.tryWorkspaceByDescriptor(descriptor);
            if (matchingWorkspace === null)
              continue;
            requiredWorkspaces.add(matchingWorkspace);
          }
        }
      }
      for (const workspace2 of project.workspaces) {
        if (requiredWorkspaces.has(workspace2)) {
          if (this.production) {
            workspace2.manifest.devDependencies.clear();
          }
        } else {
          workspace2.manifest.dependencies.clear();
          workspace2.manifest.devDependencies.clear();
          workspace2.manifest.peerDependencies.clear();
          workspace2.manifest.scripts.clear();
        }
      }
      const report = await import_core.StreamReport.start({
        configuration,
        json: this.json,
        stdout: this.context.stdout,
        includeLogs: true
      }, async (report2) => {
        await project.install({cache, report: report2, persistProject: false});
      });
      return report.exitCode();
    }
  };
  WorkspacesFocus.paths = [
    [`workspaces`, `focus`]
  ];
  WorkspacesFocus.usage = import_clipanion.Command.Usage({
    category: `Workspace-related commands`,
    description: `install a single workspace and its dependencies`,
    details: `
      This command will run an install as if the specified workspaces (and all other workspaces they depend on) were the only ones in the project. If no workspaces are explicitly listed, the active one will be assumed.

      Note that this command is only very moderately useful when using zero-installs, since the cache will contain all the packages anyway - meaning that the only difference between a full install and a focused install would just be a few extra lines in the \`.pnp.cjs\` file, at the cost of introducing an extra complexity.

      If the \`-A,--all\` flag is set, the entire project will be installed. Combine with \`--production\` to replicate the old \`yarn install --production\`.
    `
  });
  var focus_default = WorkspacesFocus;

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-workspace-tools/sources/commands/foreach.ts
  var import_cli2 = __toModule(require("@yarnpkg/cli"));
  var import_core3 = __toModule(require("@yarnpkg/core"));
  var import_core4 = __toModule(require("@yarnpkg/core"));
  var import_core5 = __toModule(require("@yarnpkg/core"));
  var import_clipanion2 = __toModule(require("clipanion"));
  var import_micromatch = __toModule(require_micromatch());
  var import_os = __toModule(require("os"));
  var import_p_limit = __toModule(require_p_limit());
  var t = __toModule(require("typanion"));
  var WorkspacesForeachCommand = class extends import_cli2.BaseCommand {
    constructor() {
      super(...arguments);
      this.recursive = import_clipanion2.Option.Boolean(`-R,--recursive`, false, {
        description: `Find packages via dependencies/devDependencies instead of using the workspaces field`
      });
      this.all = import_clipanion2.Option.Boolean(`-A,--all`, false, {
        description: `Run the command on all workspaces of a project`
      });
      this.verbose = import_clipanion2.Option.Boolean(`-v,--verbose`, false, {
        description: `Prefix each output line with the name of the originating workspace`
      });
      this.parallel = import_clipanion2.Option.Boolean(`-p,--parallel`, false, {
        description: `Run the commands in parallel`
      });
      this.interlaced = import_clipanion2.Option.Boolean(`-i,--interlaced`, false, {
        description: `Print the output of commands in real-time instead of buffering it`
      });
      this.jobs = import_clipanion2.Option.String(`-j,--jobs`, {
        description: `The maximum number of parallel tasks that the execution will be limited to`,
        validator: t.applyCascade(t.isNumber(), [t.isInteger(), t.isAtLeast(2)])
      });
      this.topological = import_clipanion2.Option.Boolean(`-t,--topological`, false, {
        description: `Run the command after all workspaces it depends on (regular) have finished`
      });
      this.topologicalDev = import_clipanion2.Option.Boolean(`--topological-dev`, false, {
        description: `Run the command after all workspaces it depends on (regular + dev) have finished`
      });
      this.include = import_clipanion2.Option.Array(`--include`, [], {
        description: `An array of glob pattern idents; only matching workspaces will be traversed`
      });
      this.exclude = import_clipanion2.Option.Array(`--exclude`, [], {
        description: `An array of glob pattern idents; matching workspaces won't be traversed`
      });
      this.publicOnly = import_clipanion2.Option.Boolean(`--no-private`, {
        description: `Avoid running the command on private workspaces`
      });
      this.commandName = import_clipanion2.Option.String();
      this.args = import_clipanion2.Option.Proxy();
    }
    async execute() {
      const configuration = await import_core3.Configuration.find(this.context.cwd, this.context.plugins);
      const {project, workspace: cwdWorkspace} = await import_core3.Project.find(configuration, this.context.cwd);
      if (!this.all && !cwdWorkspace)
        throw new import_cli2.WorkspaceRequiredError(project.cwd, this.context.cwd);
      const command = this.cli.process([this.commandName, ...this.args]);
      const scriptName = command.path.length === 1 && command.path[0] === `run` && typeof command.scriptName !== `undefined` ? command.scriptName : null;
      if (command.path.length === 0)
        throw new import_clipanion2.UsageError(`Invalid subcommand name for iteration - use the 'run' keyword if you wish to execute a script`);
      const rootWorkspace = this.all ? project.topLevelWorkspace : cwdWorkspace;
      const candidates = this.recursive ? [rootWorkspace, ...rootWorkspace.getRecursiveWorkspaceDependencies()] : [rootWorkspace, ...rootWorkspace.getRecursiveWorkspaceChildren()];
      const workspaces = [];
      for (const workspace of candidates) {
        if (scriptName && !workspace.manifest.scripts.has(scriptName) && !scriptName.includes(`:`))
          continue;
        if (scriptName === process.env.npm_lifecycle_event && workspace.cwd === cwdWorkspace.cwd)
          continue;
        if (this.include.length > 0 && !import_micromatch.default.isMatch(import_core5.structUtils.stringifyIdent(workspace.locator), this.include))
          continue;
        if (this.exclude.length > 0 && import_micromatch.default.isMatch(import_core5.structUtils.stringifyIdent(workspace.locator), this.exclude))
          continue;
        if (this.publicOnly && workspace.manifest.private === true)
          continue;
        workspaces.push(workspace);
      }
      let interlaced = this.interlaced;
      if (!this.parallel)
        interlaced = true;
      const needsProcessing = new Map();
      const processing = new Set();
      const concurrency = this.parallel ? Math.max(1, (0, import_os.cpus)().length / 2) : 1;
      const limit = (0, import_p_limit.default)(this.jobs || concurrency);
      let commandCount = 0;
      let finalExitCode = null;
      let abortNextCommands = false;
      const report = await import_core4.StreamReport.start({
        configuration,
        stdout: this.context.stdout
      }, async (report2) => {
        const runCommand = async (workspace, {commandIndex}) => {
          if (abortNextCommands)
            return -1;
          if (!this.parallel && this.verbose && commandIndex > 1)
            report2.reportSeparator();
          const prefix = getPrefix(workspace, {configuration, verbose: this.verbose, commandIndex});
          const [stdout, stdoutEnd] = createStream(report2, {prefix, interlaced});
          const [stderr, stderrEnd] = createStream(report2, {prefix, interlaced});
          try {
            if (this.verbose)
              report2.reportInfo(null, `${prefix} Process started`);
            const start = Date.now();
            const exitCode = await this.cli.run([this.commandName, ...this.args], {
              cwd: workspace.cwd,
              stdout,
              stderr
            }) || 0;
            stdout.end();
            stderr.end();
            await stdoutEnd;
            await stderrEnd;
            const end = Date.now();
            if (this.verbose) {
              const timerMessage = configuration.get(`enableTimers`) ? `, completed in ${import_core5.formatUtils.pretty(configuration, end - start, import_core5.formatUtils.Type.DURATION)}` : ``;
              report2.reportInfo(null, `${prefix} Process exited (exit code ${exitCode})${timerMessage}`);
            }
            if (exitCode === 130) {
              abortNextCommands = true;
              finalExitCode = exitCode;
            }
            return exitCode;
          } catch (err) {
            stdout.end();
            stderr.end();
            await stdoutEnd;
            await stderrEnd;
            throw err;
          }
        };
        for (const workspace of workspaces)
          needsProcessing.set(workspace.anchoredLocator.locatorHash, workspace);
        while (needsProcessing.size > 0) {
          if (report2.hasErrors())
            break;
          const commandPromises = [];
          for (const [identHash, workspace] of needsProcessing) {
            if (processing.has(workspace.anchoredDescriptor.descriptorHash))
              continue;
            let isRunnable = true;
            if (this.topological || this.topologicalDev) {
              const resolvedSet = this.topologicalDev ? new Map([...workspace.manifest.dependencies, ...workspace.manifest.devDependencies]) : workspace.manifest.dependencies;
              for (const descriptor of resolvedSet.values()) {
                const workspace2 = project.tryWorkspaceByDescriptor(descriptor);
                isRunnable = workspace2 === null || !needsProcessing.has(workspace2.anchoredLocator.locatorHash);
                if (!isRunnable) {
                  break;
                }
              }
            }
            if (!isRunnable)
              continue;
            processing.add(workspace.anchoredDescriptor.descriptorHash);
            commandPromises.push(limit(async () => {
              const exitCode = await runCommand(workspace, {
                commandIndex: ++commandCount
              });
              needsProcessing.delete(identHash);
              processing.delete(workspace.anchoredDescriptor.descriptorHash);
              return exitCode;
            }));
            if (!this.parallel) {
              break;
            }
          }
          if (commandPromises.length === 0) {
            const cycle = Array.from(needsProcessing.values()).map((workspace) => {
              return import_core5.structUtils.prettyLocator(configuration, workspace.anchoredLocator);
            }).join(`, `);
            report2.reportError(import_core4.MessageName.CYCLIC_DEPENDENCIES, `Dependency cycle detected (${cycle})`);
            return;
          }
          const exitCodes = await Promise.all(commandPromises);
          const errorCode = exitCodes.find((code) => code !== 0);
          if (finalExitCode === null)
            finalExitCode = typeof errorCode !== `undefined` ? 1 : finalExitCode;
          if ((this.topological || this.topologicalDev) && typeof errorCode !== `undefined`) {
            report2.reportError(import_core4.MessageName.UNNAMED, `The command failed for workspaces that are depended upon by other workspaces; can't satisfy the dependency graph`);
          }
        }
      });
      if (finalExitCode !== null) {
        return finalExitCode;
      } else {
        return report.exitCode();
      }
    }
  };
  WorkspacesForeachCommand.paths = [
    [`workspaces`, `foreach`]
  ];
  WorkspacesForeachCommand.usage = import_clipanion2.Command.Usage({
    category: `Workspace-related commands`,
    description: `run a command on all workspaces`,
    details: `
      This command will run a given sub-command on current and all its descendant workspaces. Various flags can alter the exact behavior of the command:

      - If \`-p,--parallel\` is set, the commands will be ran in parallel; they'll by default be limited to a number of parallel tasks roughly equal to half your core number, but that can be overridden via \`-j,--jobs\`.

      - If \`-p,--parallel\` and \`-i,--interlaced\` are both set, Yarn will print the lines from the output as it receives them. If \`-i,--interlaced\` wasn't set, it would instead buffer the output from each process and print the resulting buffers only after their source processes have exited.

      - If \`-t,--topological\` is set, Yarn will only run the command after all workspaces that it depends on through the \`dependencies\` field have successfully finished executing. If \`--topological-dev\` is set, both the \`dependencies\` and \`devDependencies\` fields will be considered when figuring out the wait points.

      - If \`-A,--all\` is set, Yarn will run the command on all the workspaces of a project. By default yarn runs the command only on current and all its descendant workspaces.

      - If \`-R,--recursive\` is set, Yarn will find workspaces to run the command on by recursively evaluating \`dependencies\` and \`devDependencies\` fields, instead of looking at the \`workspaces\` fields.

      - The command may apply to only some workspaces through the use of \`--include\` which acts as a whitelist. The \`--exclude\` flag will do the opposite and will be a list of packages that mustn't execute the script. Both flags accept glob patterns (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.

      Adding the \`-v,--verbose\` flag will cause Yarn to print more information; in particular the name of the workspace that generated the output will be printed at the front of each line.

      If the command is \`run\` and the script being run does not exist the child workspace will be skipped without error.
    `,
    examples: [[
      `Publish current and all descendant packages`,
      `yarn workspaces foreach npm publish --tolerate-republish`
    ], [
      `Run build script on current and all descendant packages`,
      `yarn workspaces foreach run build`
    ], [
      `Run build script on current and all descendant packages in parallel, building dependent packages first`,
      `yarn workspaces foreach -pt run build`
    ]]
  });
  var foreach_default = WorkspacesForeachCommand;
  function createStream(report, {prefix, interlaced}) {
    const streamReporter = report.createStreamReporter(prefix);
    const defaultStream = new import_core5.miscUtils.DefaultStream();
    defaultStream.pipe(streamReporter, {end: false});
    defaultStream.on(`finish`, () => {
      streamReporter.end();
    });
    const promise = new Promise((resolve) => {
      streamReporter.on(`finish`, () => {
        resolve(defaultStream.active);
      });
    });
    if (interlaced)
      return [defaultStream, promise];
    const streamBuffer = new import_core5.miscUtils.BufferStream();
    streamBuffer.pipe(defaultStream, {end: false});
    streamBuffer.on(`finish`, () => {
      defaultStream.end();
    });
    return [streamBuffer, promise];
  }
  function getPrefix(workspace, {configuration, commandIndex, verbose}) {
    if (!verbose)
      return null;
    const ident = import_core5.structUtils.convertToIdent(workspace.locator);
    const name = import_core5.structUtils.stringifyIdent(ident);
    const prefix = `[${name}]:`;
    const colors = [`#2E86AB`, `#A23B72`, `#F18F01`, `#C73E1D`, `#CCE2A3`];
    const colorName = colors[commandIndex % colors.length];
    return import_core5.formatUtils.pretty(configuration, prefix, colorName);
  }

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-workspace-tools/sources/index.ts
  var plugin = {
    commands: [
      focus_default,
      foreach_default
    ]
  };
  var sources_default = plugin;
  return sources_exports;
})();
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
return plugin;
}
};
