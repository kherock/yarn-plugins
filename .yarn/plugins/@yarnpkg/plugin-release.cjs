/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-release",
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
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __commonJS = (cb, mod) => function __require2() {
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

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/domain/datever.js
  var require_datever = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/domain/datever.js"(exports, module) {
      module.exports = function createDateVersion(format, ver, now, alltags) {
        let updated = null;
        const tags = format.split(".").filter((f) => alltags.date.indexOf(f) !== -1);
        const verarr = ver.length > 0 ? ver.split(/[.-]/) : [];
        const months = Array(12).fill(1).map((item, i) => (i + 1).toString());
        const monthsz = Array(12).fill(1).map((item, i) => (i > 8 ? "" : "0") + (i + 1));
        const weeks = Array(52).fill(1).map((item, i) => (i + 1).toString());
        const weeksz = Array(52).fill(1).map((item, i) => (i > 8 ? "" : "0") + (i + 1));
        const days = Array(31).fill(1).map((item, i) => (i + 1).toString());
        const daysz = Array(31).fill(1).map((item, i) => (i > 8 ? "" : "0") + (i + 1));
        let dateversion = {};
        if (verarr.length > 0) {
          for (let i = 0; i < tags.length; i++) {
            const t = tags[i];
            const v = verarr[i];
            validate(t, v);
            dateversion[t] = v;
          }
        }
        function validate(t, v) {
          if (t == "YYYY" && /^[0-9]{4}$/.test(v) !== true)
            throw new Error("Invalid year.");
          if (t == "YY" && /^[0-9]{1,3}$/.test(v) !== true)
            throw new Error("Invalid year.");
          if (t == "0Y" && /^[0-9]{2,3}$/.test(v) !== true)
            throw new Error("Invalid year.");
          if (t == "MM" && months.indexOf(v) === -1)
            throw new Error("Invalid month.");
          if (t == "0M" && monthsz.indexOf(v) === -1)
            throw new Error("Invalid month.");
          if (t == "WW" && weeks.indexOf(v) === -1)
            throw new Error("Invalid week.");
          if (t == "0W" && weeksz.indexOf(v) === -1)
            throw new Error("Invalid week.");
          if (t == "DD" && days.indexOf(v) === -1)
            throw new Error("Invalid day.");
          if (t == "0D" && daysz.indexOf(v) === -1)
            throw new Error("Invalid day.");
          return true;
        }
        function getLiveValue(t) {
          if (t == "YYYY")
            return now.getUTCFullYear();
          if (t == "YY")
            return parseInt(now.getUTCFullYear().toString().slice(1));
          if (t == "0Y") {
            const yy = now.getUTCFullYear().toString().slice(1);
            return (yy.length == 1 ? "0" : "") + yy;
          }
          if (t == "MM")
            return now.getUTCMonth() + 1;
          if (t == "0M") {
            const mm = now.getUTCMonth() + 1;
            return (mm < 10 ? "0" : "") + mm;
          }
          if (t == "WW")
            return getWeekNumber(now, {zeroPadded: false});
          if (t == "0W")
            return getWeekNumber(now, {zeroPadded: true});
          if (t == "DD")
            return now.getUTCDate();
          if (t == "0D") {
            const dd = now.getUTCDate();
            return (dd < 10 ? "0" : "") + dd;
          }
        }
        function getWeekNumber(date, opts = {zeroPadded: false}) {
          const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
          const daynum = d.getUTCDay() || 7;
          d.setUTCDate(d.getUTCDate() + 4 - daynum);
          const yearstart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
          const result = Math.ceil(((d - yearstart) / 864e5 + 1) / 7);
          return opts.zeroPadded && result < 10 ? "0" + result : result;
        }
        function getYear() {
          const year = getLiveValue("YYYY");
          const yearbase = parseInt(year.toString().slice(0, 1)) * 1e3;
          if (dateversion.hasOwnProperty("YYYY"))
            return parseInt(dateversion.YYYY);
          if (dateversion.hasOwnProperty("YY"))
            return parseInt(dateversion.YY) + yearbase;
          if (dateversion.hasOwnProperty("0Y"))
            return parseInt(dateversion["0Y"]) + yearbase;
          return parseInt(year);
        }
        function getMonth() {
          const m = dateversion.hasOwnProperty("MM") ? parseInt(dateversion.MM) : dateversion.hasOwnProperty("0M") ? parseInt(dateversion["0M"]) : 1;
          return m - 1;
        }
        function getDay() {
          const m = dateversion.hasOwnProperty("DD") ? parseInt(dateversion.DD) : dateversion.hasOwnProperty("0D") ? parseInt(dateversion["0D"]) : 1;
          return m;
        }
        function asNumeric() {
          return Date.UTC(getYear(), getMonth(), getDay());
        }
        function inc(level) {
          if (updated === false && alltags.modifier.indexOf(level) !== -1)
            updated = true;
          if (level != "CALENDAR")
            return;
          updated = false;
          for (let i = 0; i < tags.length; i++) {
            const t = tags[i];
            const lv = getLiveValue(t);
            if (dateversion[t] != lv)
              updated = true;
            dateversion[t] = lv;
          }
        }
        function asString() {
          if (updated === false && verarr.length > 0)
            throw new Error("There is no change in the version.");
          return Object.keys(dateversion).map((t) => dateversion[t]).join(".");
        }
        function pretty(locale = void 0) {
          return new Date(asNumeric()).toLocaleString(locale, {year: "numeric", month: "long"});
        }
        return {
          inc,
          asString,
          asNumeric,
          pretty
        };
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/domain/semver.js
  var require_semver = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/domain/semver.js"(exports, module) {
      module.exports = function createSemanticVersion(format, ver, alltags) {
        const tags = format.split(".").filter((f) => alltags.semantic.indexOf(f) !== -1);
        const verarr = ver.length > 0 ? ver.split(/[.-]/) : [];
        const tagsdate = format.split(".").filter((f) => alltags.date.indexOf(f) !== -1);
        tagsdate.map((t) => verarr.shift());
        const semversion = {};
        for (let i = 0; i < tags.length; i++) {
          const t = tags[i];
          if (verarr.length === 0) {
            semversion[t] = alltags.modifier.indexOf(t) !== -1 ? "modifier.0" : "0";
          } else {
            semversion[t] = t == "MODIFIER" && verarr.length == i + 2 ? verarr[i] + "." + verarr[i + 1] : t == "MODIFIER" && verarr.length != i + 2 ? "modifier.0" : verarr[i];
          }
        }
        function inc(level) {
          if (["DEV", "ALPHA", "BETA", "RC"].indexOf(level) !== -1) {
            const isLevelChanged = semversion.MODIFIER.split(".")[0].toUpperCase() != level;
            const mv = semversion.MODIFIER.split(".")[1];
            semversion.MODIFIER = level.toLowerCase() + "." + (semversion.MODIFIER == "modifier.0" ? "1" : isLevelChanged ? "1" : parseInt(mv) + 1);
          }
          if (["MAJOR", "MINOR", "MICRO"].indexOf(level) !== -1) {
            semversion[level] = parseInt(semversion[level]) + 1;
            semversion.MODIFIER = "";
            if (level == "MINOR" && semversion.hasOwnProperty("MICRO"))
              semversion.MICRO = "0";
            if (level == "MAJOR" && semversion.hasOwnProperty("MICRO"))
              semversion.MICRO = "0";
            if (level == "MAJOR" && semversion.hasOwnProperty("MINOR"))
              semversion.MINOR = "0";
          }
          if (level == "CALENDAR") {
            semversion.MODIFIER = "";
            if (semversion.hasOwnProperty("MICRO"))
              semversion.MICRO = "0";
            if (semversion.hasOwnProperty("MINOR"))
              semversion.MINOR = "0";
            if (semversion.hasOwnProperty("MAJOR"))
              semversion.MAJOR = "0";
          }
        }
        function asString() {
          return Object.keys(semversion).filter((t) => semversion[t] && t != "MODIFIER").map((t) => semversion[t]).join(".") + (semversion.MODIFIER && semversion.MODIFIER != "modifier.0" ? "-" + semversion.MODIFIER : "");
        }
        return {
          inc,
          asString
        };
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/index.js
  var require_src = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/calver-npm-21.1.3-98868df3af-603cd32b14.zip/node_modules/calver/src/index.js"(exports, module) {
      var createDateVersion = require_datever();
      var createSemanticVersion = require_semver();
      function Calver() {
        const tags = {
          date: ["YYYY", "YY", "0Y", "MM", "0M", "WW", "0W", "DD", "0D"],
          semantic: ["MAJOR", "MINOR", "MICRO", "MODIFIER"],
          modifier: ["DEV", "ALPHA", "BETA", "RC"]
        };
        const levels = ["CALENDAR", "MAJOR", "MINOR", "MICRO", "DEV", "ALPHA", "BETA", "RC"];
        const date = {
          now: new Date(Date.now())
        };
        function valid(format, ver) {
          format = format.toUpperCase();
          validateFormat(format);
          validateVersion(ver, format);
          createDateVersion(format, ver, date.now, tags);
          createSemanticVersion(format, ver, tags);
          return true;
        }
        function init(format) {
          format = validateFormat(format, {transformModifiers: false});
          const datever = createDateVersion(format, "", date.now, tags);
          const semver2 = createSemanticVersion(format, "", tags);
          const tagssemantic = format.split(".").filter((f) => tags.semantic.indexOf(f) !== -1);
          if (tagssemantic.length > 0) {
            semver2.inc(tagssemantic[0]);
          }
          const tagsdate = format.split(".").filter((f) => tags.date.indexOf(f) !== -1);
          if (tagsdate.length > 0) {
            datever.inc("CALENDAR");
            semver2.inc("CALENDAR");
          }
          const tagsmodifier = format.split(".").filter((f) => tags.modifier.indexOf(f) !== -1);
          if (tagsmodifier.length > 0) {
            semver2.inc(tagsmodifier[0]);
          }
          return [datever.asString(), semver2.asString()].filter((s) => s).join(".");
        }
        function inc(format, ver, level) {
          format = validateFormat(format);
          ver = validateVersion(ver, format);
          level = validateLevel(level, format);
          const datever = createDateVersion(format, ver, date.now, tags);
          const semver2 = createSemanticVersion(format, ver, tags);
          const levelsarr = level.split(".");
          for (let i = 0; i < levelsarr.length; i++) {
            const l = levelsarr[i];
            datever.inc(l);
            semver2.inc(l);
          }
          return [datever.asString(), semver2.asString()].filter((s) => s).join(".");
        }
        function pretty(format, ver, locale = void 0) {
          format = validateFormat(format);
          ver = validateVersion(ver, format);
          const datever = createDateVersion(format, ver, date.now, tags);
          const semver2 = createSemanticVersion(format, ver, tags);
          return datever.pretty(locale) + " v" + semver2.asString() + "";
        }
        function getTagType(input) {
          input = input.toUpperCase();
          if (tags.date.indexOf(input) !== -1)
            return "date";
          else if (tags.semantic.indexOf(input) !== -1)
            return "semantic";
          else if (tags.modifier.indexOf(input) !== -1)
            return "modifier";
          else
            return "";
        }
        function validateLevel(level, format) {
          if (!level)
            throw new Error("Please specify a valid level.");
          level = level.trim().toUpperCase();
          const formatarr = format.split(".");
          const levelsarr = level.split(".");
          if (levelsarr.length > 2)
            throw new Error("You can specify 2 levels at max.");
          if (!levelsarr)
            throw new Error("You should specify at least one level.");
          for (var i = 0; i < levelsarr.length; i++) {
            const l = levelsarr[i];
            if (levels.indexOf(l) === -1)
              throw new Error("Invalid level.");
            if (tags.modifier.indexOf(l) !== -1 && formatarr.indexOf("MODIFIER") === -1)
              throw new Error("Level and format doesn't match.");
            if (tags.semantic.indexOf(l) !== -1 && formatarr.indexOf(l) === -1)
              throw new Error("Level and format doesn't match.");
          }
          if (levelsarr.length === 2) {
            if (tags.modifier.indexOf(levelsarr[0]) !== -1)
              throw new Error("Place the modifier tag at the end.");
            if ((tags.semantic.indexOf(levelsarr[0]) !== -1 || levelsarr[0] == "CALENDAR") && tags.modifier.indexOf(levelsarr[1]) === -1)
              throw new Error("Second level should be a modifier or remove it.");
          }
          return level;
        }
        function validateVersion(ver, format) {
          if (!ver)
            throw new Error("Please specify a valid version.");
          ver = ver.trim().toLowerCase();
          if (/[^a-zA-Z0-9.-]/.test(ver) === true)
            throw new Error("Unexpected characters in your version string.");
          const formatarr = format.split(".");
          const verarr = ver.split(/[.-]/);
          if (formatarr.indexOf("MODIFIER") === -1 && verarr.length < formatarr.length || formatarr.indexOf("MODIFIER") !== -1 && verarr.length + 1 != formatarr.length && verarr.length - 1 != formatarr.length)
            throw new Error("Version and format lengths mismatch.");
          return ver;
        }
        function validateFormat(format, opts = {transformModifiers: true}) {
          if (!format)
            throw new Error("Please specify a valid format.");
          format = format.trim().toUpperCase().split(".").map((t) => tags.modifier.indexOf(t) !== -1 && opts.transformModifiers === true ? "MODIFIER" : t).join(".");
          const tagsrepo = [];
          const tagsarr = format.split(".");
          for (let i = 0; i < tagsarr.length; i++) {
            const t = tagsarr[i].toUpperCase();
            if (tags.date.indexOf(t) === -1 && tags.semantic.indexOf(t) === -1 && tags.modifier.indexOf(t) === -1)
              throw new Error("Your format contains invalid tags.");
            if (tagsrepo.indexOf(t) !== -1)
              throw new Error("Your format is repeating the same tag.");
            tagsrepo.push(t);
          }
          const tagsdate = tagsrepo.filter((t) => tags.date.indexOf(t) !== -1);
          let largestDateTagIndex = null;
          if (tagsdate.length > 0) {
            const tagsdatesorted = tags.date.filter((t) => tagsdate.indexOf(t) !== -1);
            for (let j = 0; j < tagsdatesorted.length; j++) {
              if (tagsdatesorted[j] != tagsdate[j])
                throw new Error("Date tags are in the wrong order.");
              largestDateTagIndex = tagsrepo.indexOf(tagsdate[j]);
            }
          }
          const tagssemantic = tagsrepo.filter((t) => tags.semantic.indexOf(t) !== -1);
          let largestSemanticTagIndex = null;
          if (tagssemantic.length > 0) {
            const tagssemanticsorted = tags.semantic.filter((t) => tagssemantic.indexOf(t) !== -1);
            for (let k = 0; k < tagssemanticsorted.length; k++) {
              if (tagssemanticsorted[k] != tagssemantic[k])
                throw new Error("Semantic tags are in the wrong order.");
              if (largestSemanticTagIndex === null)
                largestSemanticTagIndex = tagsrepo.indexOf(tagssemantic[k]);
            }
          }
          if (largestDateTagIndex !== null && largestSemanticTagIndex !== null && largestDateTagIndex > largestSemanticTagIndex)
            throw new Error("Semantic tags should come after date tags.");
          return format;
        }
        return {
          init,
          inc,
          pretty,
          getTagType,
          valid
        };
      }
      module.exports = Calver();
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/stream.js
  var require_stream = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module) {
      module.exports = __require("stream");
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/buffer_list.js
  var require_buffer_list = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var _require = __require("buffer");
      var Buffer2 = _require.Buffer;
      var _require2 = __require("util");
      var inspect = _require2.inspect;
      var custom = inspect && inspect.custom || "inspect";
      function copyBuffer(src, target, offset) {
        Buffer2.prototype.copy.call(src, target, offset);
      }
      module.exports = /* @__PURE__ */ function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        _createClass(BufferList, [{
          key: "push",
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0)
              this.tail.next = entry;
            else
              this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0)
              this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0)
              return;
            var ret = this.head.data;
            if (this.length === 1)
              this.head = this.tail = null;
            else
              this.head = this.head.next;
            --this.length;
            return ret;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function join(s) {
            if (this.length === 0)
              return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) {
              ret += s + p.data;
            }
            return ret;
          }
        }, {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0)
              return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
        }, {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        }, {
          key: "first",
          value: function first() {
            return this.head.data;
          }
        }, {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length)
                ret += str;
              else
                ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        }, {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        }, {
          key: custom,
          value: function value(_, options) {
            return inspect(this, _objectSpread({}, options, {
              depth: 0,
              customInspect: false
            }));
          }
        }]);
        return BufferList;
      }();
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/destroy.js
  var require_destroy = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
      "use strict";
      function destroy(err, cb) {
        var _this = this;
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err) {
            if (!this._writableState) {
              process.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              process.nextTick(emitErrorNT, this, err);
            }
          }
          return this;
        }
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(err || null, function(err2) {
          if (!cb && err2) {
            if (!_this._writableState) {
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else if (!_this._writableState.errorEmitted) {
              _this._writableState.errorEmitted = true;
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else {
              process.nextTick(emitCloseNT, _this);
            }
          } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        });
        return this;
      }
      function emitErrorAndCloseNT(self, err) {
        emitErrorNT(self, err);
        emitCloseNT(self);
      }
      function emitCloseNT(self) {
        if (self._writableState && !self._writableState.emitClose)
          return;
        if (self._readableState && !self._readableState.emitClose)
          return;
        self.emit("close");
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }
      function emitErrorNT(self, err) {
        self.emit("error", err);
      }
      function errorOrDestroy(stream, err) {
        var rState = stream._readableState;
        var wState = stream._writableState;
        if (rState && rState.autoDestroy || wState && wState.autoDestroy)
          stream.destroy(err);
        else
          stream.emit("error", err);
      }
      module.exports = {
        destroy,
        undestroy,
        errorOrDestroy
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/errors.js
  var require_errors = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/errors.js"(exports, module) {
      "use strict";
      var codes = {};
      function createErrorType(code, message, Base) {
        if (!Base) {
          Base = Error;
        }
        function getMessage(arg1, arg2, arg3) {
          if (typeof message === "string") {
            return message;
          } else {
            return message(arg1, arg2, arg3);
          }
        }
        class NodeError extends Base {
          constructor(arg1, arg2, arg3) {
            super(getMessage(arg1, arg2, arg3));
          }
        }
        NodeError.prototype.name = Base.name;
        NodeError.prototype.code = code;
        codes[code] = NodeError;
      }
      function oneOf(expected, thing) {
        if (Array.isArray(expected)) {
          const len = expected.length;
          expected = expected.map((i) => String(i));
          if (len > 2) {
            return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
          } else if (len === 2) {
            return `one of ${thing} ${expected[0]} or ${expected[1]}`;
          } else {
            return `of ${thing} ${expected[0]}`;
          }
        } else {
          return `of ${thing} ${String(expected)}`;
        }
      }
      function startsWith(str, search, pos) {
        return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
      }
      function endsWith(str, search, this_len) {
        if (this_len === void 0 || this_len > str.length) {
          this_len = str.length;
        }
        return str.substring(this_len - search.length, this_len) === search;
      }
      function includes(str, search, start) {
        if (typeof start !== "number") {
          start = 0;
        }
        if (start + search.length > str.length) {
          return false;
        } else {
          return str.indexOf(search, start) !== -1;
        }
      }
      createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
        return 'The value "' + value + '" is invalid for option "' + name + '"';
      }, TypeError);
      createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
        let determiner;
        if (typeof expected === "string" && startsWith(expected, "not ")) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        let msg;
        if (endsWith(name, " argument")) {
          msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
        } else {
          const type = includes(name, ".") ? "property" : "argument";
          msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
        }
        msg += `. Received type ${typeof actual}`;
        return msg;
      }, TypeError);
      createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
      createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
        return "The " + name + " method is not implemented";
      });
      createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
      createErrorType("ERR_STREAM_DESTROYED", function(name) {
        return "Cannot call " + name + " after a stream was destroyed";
      });
      createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
      createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
      createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
      createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
      createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
        return "Unknown encoding: " + arg;
      }, TypeError);
      createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
      module.exports.codes = codes;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/state.js
  var require_state = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
      "use strict";
      var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
      function highWaterMarkFrom(options, isDuplex, duplexKey) {
        return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
      }
      function getHighWaterMark(state, options, duplexKey, isDuplex) {
        var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
        if (hwm != null) {
          if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
          }
          return Math.floor(hwm);
        }
        return state.objectMode ? 16 : 16 * 1024;
      }
      module.exports = {
        getHighWaterMark
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits.js
  var require_inherits = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits.js"(exports, module) {
      try {
        util = __require("util");
        if (typeof util.inherits !== "function")
          throw "";
        module.exports = util.inherits;
      } catch (e) {
        module.exports = require_inherits_browser();
      }
      var util;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/util-deprecate-npm-1.0.2-e3fe1a219c-474acf1146.zip/node_modules/util-deprecate/node.js
  var require_node = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/util-deprecate-npm-1.0.2-e3fe1a219c-474acf1146.zip/node_modules/util-deprecate/node.js"(exports, module) {
      module.exports = __require("util").deprecate;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_writable.js
  var require_stream_writable = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
      "use strict";
      module.exports = Writable;
      function CorkedRequest(state) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(_this, state);
        };
      }
      var Duplex;
      Writable.WritableState = WritableState;
      var internalUtil = {
        deprecate: require_node()
      };
      var Stream = require_stream();
      var Buffer2 = __require("buffer").Buffer;
      var OurUint8Array = global.Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
      var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
      var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      require_inherits()(Writable, Stream);
      function nop() {
      }
      function WritableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex)
          this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
          onwrite(stream, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
          out.push(current);
          current = current.next;
        }
        return out;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (_) {
        }
      })();
      var realHasInstance;
      if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(object) {
            if (realHasInstance.call(this, object))
              return true;
            if (this !== Writable)
              return false;
            return object && object._writableState instanceof WritableState;
          }
        });
      } else {
        realHasInstance = function realHasInstance2(object) {
          return object instanceof this;
        };
      }
      function Writable(options) {
        Duplex = Duplex || require_stream_duplex();
        var isDuplex = this instanceof Duplex;
        if (!isDuplex && !realHasInstance.call(Writable, this))
          return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
          if (typeof options.write === "function")
            this._write = options.write;
          if (typeof options.writev === "function")
            this._writev = options.writev;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
          if (typeof options.final === "function")
            this._final = options.final;
        }
        Stream.call(this);
      }
      Writable.prototype.pipe = function() {
        errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
      };
      function writeAfterEnd(stream, cb) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
      }
      function validChunk(stream, state, chunk, cb) {
        var er;
        if (chunk === null) {
          er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
        }
        if (er) {
          errorOrDestroy(stream, er);
          process.nextTick(cb, er);
          return false;
        }
        return true;
      }
      Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer2.isBuffer(chunk)) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (isBuf)
          encoding = "buffer";
        else if (!encoding)
          encoding = state.defaultEncoding;
        if (typeof cb !== "function")
          cb = nop;
        if (state.ending)
          writeAfterEnd(this, cb);
        else if (isBuf || validChunk(this, state, chunk, cb)) {
          state.pendingcb++;
          ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
        return ret;
      };
      Writable.prototype.cork = function() {
        this._writableState.corked++;
      };
      Writable.prototype.uncork = function() {
        var state = this._writableState;
        if (state.corked) {
          state.corked--;
          if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
            clearBuffer(this, state);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string")
          encoding = encoding.toLowerCase();
        if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
          throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
          chunk = Buffer2.from(chunk, encoding);
        }
        return chunk;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
          var newChunk = decodeChunk(state, chunk, encoding);
          if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
          }
        }
        var len = state.objectMode ? 1 : chunk.length;
        state.length += len;
        var ret = state.length < state.highWaterMark;
        if (!ret)
          state.needDrain = true;
        if (state.writing || state.corked) {
          var last = state.lastBufferedRequest;
          state.lastBufferedRequest = {
            chunk,
            encoding,
            isBuf,
            callback: cb,
            next: null
          };
          if (last) {
            last.next = state.lastBufferedRequest;
          } else {
            state.bufferedRequest = state.lastBufferedRequest;
          }
          state.bufferedRequestCount += 1;
        } else {
          doWrite(stream, state, false, len, chunk, encoding, cb);
        }
        return ret;
      }
      function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (state.destroyed)
          state.onwrite(new ERR_STREAM_DESTROYED("write"));
        else if (writev)
          stream._writev(chunk, state.onwrite);
        else
          stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
      }
      function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
        if (sync) {
          process.nextTick(cb, er);
          process.nextTick(finishMaybe, stream, state);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
        } else {
          cb(er);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
          finishMaybe(stream, state);
        }
      }
      function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
      }
      function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;
        if (typeof cb !== "function")
          throw new ERR_MULTIPLE_CALLBACK();
        onwriteStateUpdate(state);
        if (er)
          onwriteError(stream, state, sync, er, cb);
        else {
          var finished = needFinish(state) || stream.destroyed;
          if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
          }
          if (sync) {
            process.nextTick(afterWrite, stream, state, finished, cb);
          } else {
            afterWrite(stream, state, finished, cb);
          }
        }
      }
      function afterWrite(stream, state, finished, cb) {
        if (!finished)
          onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
      }
      function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
          state.needDrain = false;
          stream.emit("drain");
        }
      }
      function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
        if (stream._writev && entry && entry.next) {
          var l = state.bufferedRequestCount;
          var buffer = new Array(l);
          var holder = state.corkedRequestsFree;
          holder.entry = entry;
          var count = 0;
          var allBuffers = true;
          while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf)
              allBuffers = false;
            entry = entry.next;
            count += 1;
          }
          buffer.allBuffers = allBuffers;
          doWrite(stream, state, true, state.length, buffer, "", holder.finish);
          state.pendingcb++;
          state.lastBufferedRequest = null;
          if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
          } else {
            state.corkedRequestsFree = new CorkedRequest(state);
          }
          state.bufferedRequestCount = 0;
        } else {
          while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            if (state.writing) {
              break;
            }
          }
          if (entry === null)
            state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
      }
      Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (chunk !== null && chunk !== void 0)
          this.write(chunk, encoding);
        if (state.corked) {
          state.corked = 1;
          this.uncork();
        }
        if (!state.ending)
          endWritable(this, state, cb);
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
      }
      function callFinal(stream, state) {
        stream._final(function(err) {
          state.pendingcb--;
          if (err) {
            errorOrDestroy(stream, err);
          }
          state.prefinished = true;
          stream.emit("prefinish");
          finishMaybe(stream, state);
        });
      }
      function prefinish(stream, state) {
        if (!state.prefinished && !state.finalCalled) {
          if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
          } else {
            state.prefinished = true;
            stream.emit("prefinish");
          }
        }
      }
      function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
          prefinish(stream, state);
          if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
              var rState = stream._readableState;
              if (!rState || rState.autoDestroy && rState.endEmitted) {
                stream.destroy();
              }
            }
          }
        }
        return need;
      }
      function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
          if (state.finished)
            process.nextTick(cb);
          else
            stream.once("finish", cb);
        }
        state.ended = true;
        stream.writable = false;
      }
      function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        state.corkedRequestsFree.next = corkReq;
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._writableState === void 0) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function set(value) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = value;
        }
      });
      Writable.prototype.destroy = destroyImpl.destroy;
      Writable.prototype._undestroy = destroyImpl.undestroy;
      Writable.prototype._destroy = function(err, cb) {
        cb(err);
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_duplex.js
  var require_stream_duplex = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
      "use strict";
      var objectKeys = Object.keys || function(obj) {
        var keys2 = [];
        for (var key in obj) {
          keys2.push(key);
        }
        return keys2;
      };
      module.exports = Duplex;
      var Readable = require_stream_readable();
      var Writable = require_stream_writable();
      require_inherits()(Duplex, Readable);
      {
        keys = objectKeys(Writable.prototype);
        for (v = 0; v < keys.length; v++) {
          method = keys[v];
          if (!Duplex.prototype[method])
            Duplex.prototype[method] = Writable.prototype[method];
        }
      }
      var keys;
      var method;
      var v;
      function Duplex(options) {
        if (!(this instanceof Duplex))
          return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
          if (options.readable === false)
            this.readable = false;
          if (options.writable === false)
            this.writable = false;
          if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
          }
        }
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      Object.defineProperty(Duplex.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      Object.defineProperty(Duplex.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function onend() {
        if (this._writableState.ended)
          return;
        process.nextTick(onEndNT, this);
      }
      function onEndNT(self) {
        self.end();
      }
      Object.defineProperty(Duplex.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return;
          }
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/safe-buffer-npm-5.2.1-3481c8aa9b-b99c4b41fd.zip/node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/safe-buffer-npm-5.2.1-3481c8aa9b-b99c4b41fd.zip/node_modules/safe-buffer/index.js"(exports, module) {
      var buffer = __require("buffer");
      var Buffer2 = buffer.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer2(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer2.prototype);
      copyProps(Buffer2, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer2(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer2(size);
        if (fill !== void 0) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer2(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/string_decoder-npm-1.3.0-2422117fd0-8417646695.zip/node_modules/string_decoder/lib/string_decoder.js
  var require_string_decoder = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/string_decoder-npm-1.3.0-2422117fd0-8417646695.zip/node_modules/string_decoder/lib/string_decoder.js"(exports) {
      "use strict";
      var Buffer2 = require_safe_buffer().Buffer;
      var isEncoding = Buffer2.isEncoding || function(encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc)
          return "utf8";
        var retried;
        while (true) {
          switch (enc) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return enc;
            default:
              if (retried)
                return;
              enc = ("" + enc).toLowerCase();
              retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
          throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      exports.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer2.allocUnsafe(nb);
      }
      StringDecoder.prototype.write = function(buf) {
        if (buf.length === 0)
          return "";
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === void 0)
            return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length)
          return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127)
          return 0;
        else if (byte >> 5 === 6)
          return 2;
        else if (byte >> 4 === 14)
          return 3;
        else if (byte >> 3 === 30)
          return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i)
          return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2)
              nb = 0;
            else
              self.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 192) !== 128) {
          self.lastNeed = 0;
          return "\uFFFD";
        }
        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return "\uFFFD";
          }
          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== void 0)
          return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed)
          return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + "\uFFFD";
        return r;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString("utf16le", i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
      }
      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0)
          return buf.toString("base64", i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n);
      }
      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
  var require_end_of_stream = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
      "use strict";
      var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
      function once(callback) {
        var called = false;
        return function() {
          if (called)
            return;
          called = true;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          callback.apply(this, args);
        };
      }
      function noop() {
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function eos(stream, opts, callback) {
        if (typeof opts === "function")
          return eos(stream, null, opts);
        if (!opts)
          opts = {};
        callback = once(callback || noop);
        var readable = opts.readable || opts.readable !== false && stream.readable;
        var writable = opts.writable || opts.writable !== false && stream.writable;
        var onlegacyfinish = function onlegacyfinish2() {
          if (!stream.writable)
            onfinish();
        };
        var writableEnded = stream._writableState && stream._writableState.finished;
        var onfinish = function onfinish2() {
          writable = false;
          writableEnded = true;
          if (!readable)
            callback.call(stream);
        };
        var readableEnded = stream._readableState && stream._readableState.endEmitted;
        var onend = function onend2() {
          readable = false;
          readableEnded = true;
          if (!writable)
            callback.call(stream);
        };
        var onerror = function onerror2(err) {
          callback.call(stream, err);
        };
        var onclose = function onclose2() {
          var err;
          if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended)
              err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
          if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended)
              err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
        };
        var onrequest = function onrequest2() {
          stream.req.on("finish", onfinish);
        };
        if (isRequest(stream)) {
          stream.on("complete", onfinish);
          stream.on("abort", onclose);
          if (stream.req)
            onrequest();
          else
            stream.on("request", onrequest);
        } else if (writable && !stream._writableState) {
          stream.on("end", onlegacyfinish);
          stream.on("close", onlegacyfinish);
        }
        stream.on("end", onend);
        stream.on("finish", onfinish);
        if (opts.error !== false)
          stream.on("error", onerror);
        stream.on("close", onclose);
        return function() {
          stream.removeListener("complete", onfinish);
          stream.removeListener("abort", onclose);
          stream.removeListener("request", onrequest);
          if (stream.req)
            stream.req.removeListener("finish", onfinish);
          stream.removeListener("end", onlegacyfinish);
          stream.removeListener("close", onlegacyfinish);
          stream.removeListener("finish", onfinish);
          stream.removeListener("end", onend);
          stream.removeListener("error", onerror);
          stream.removeListener("close", onclose);
        };
      }
      module.exports = eos;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/async_iterator.js
  var require_async_iterator = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
      "use strict";
      var _Object$setPrototypeO;
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var finished = require_end_of_stream();
      var kLastResolve = Symbol("lastResolve");
      var kLastReject = Symbol("lastReject");
      var kError = Symbol("error");
      var kEnded = Symbol("ended");
      var kLastPromise = Symbol("lastPromise");
      var kHandlePromise = Symbol("handlePromise");
      var kStream = Symbol("stream");
      function createIterResult(value, done) {
        return {
          value,
          done
        };
      }
      function readAndResolve(iter) {
        var resolve = iter[kLastResolve];
        if (resolve !== null) {
          var data = iter[kStream].read();
          if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
          }
        }
      }
      function onReadable(iter) {
        process.nextTick(readAndResolve, iter);
      }
      function wrapForNext(lastPromise, iter) {
        return function(resolve, reject) {
          lastPromise.then(function() {
            if (iter[kEnded]) {
              resolve(createIterResult(void 0, true));
              return;
            }
            iter[kHandlePromise](resolve, reject);
          }, reject);
        };
      }
      var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
      });
      var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error = this[kError];
          if (error !== null) {
            return Promise.reject(error);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              process.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise;
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise;
          return promise;
        }
      }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult(void 0, true));
          });
        });
      }), _Object$setPrototypeO), AsyncIteratorPrototype);
      var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream, function(err) {
          if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            if (reject !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              reject(err);
            }
            iterator[kError] = err;
            return;
          }
          var resolve = iterator[kLastResolve];
          if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(void 0, true));
          }
          iterator[kEnded] = true;
        });
        stream.on("readable", onReadable.bind(null, iterator));
        return iterator;
      };
      module.exports = createReadableStreamAsyncIterator;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/from.js
  var require_from = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/from.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
      function from(Readable, iterable, opts) {
        var iterator;
        if (iterable && typeof iterable.next === "function") {
          iterator = iterable;
        } else if (iterable && iterable[Symbol.asyncIterator])
          iterator = iterable[Symbol.asyncIterator]();
        else if (iterable && iterable[Symbol.iterator])
          iterator = iterable[Symbol.iterator]();
        else
          throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
        var readable = new Readable(_objectSpread({
          objectMode: true
        }, opts));
        var reading = false;
        readable._read = function() {
          if (!reading) {
            reading = true;
            next();
          }
        };
        function next() {
          return _next2.apply(this, arguments);
        }
        function _next2() {
          _next2 = _asyncToGenerator(function* () {
            try {
              var _ref = yield iterator.next(), value = _ref.value, done = _ref.done;
              if (done) {
                readable.push(null);
              } else if (readable.push(yield value)) {
                next();
              } else {
                reading = false;
              }
            } catch (err) {
              readable.destroy(err);
            }
          });
          return _next2.apply(this, arguments);
        }
        return readable;
      }
      module.exports = from;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_readable.js
  var require_stream_readable = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
      "use strict";
      module.exports = Readable;
      var Duplex;
      Readable.ReadableState = ReadableState;
      var EE = __require("events").EventEmitter;
      var EElistenerCount = function EElistenerCount2(emitter, type) {
        return emitter.listeners(type).length;
      };
      var Stream = require_stream();
      var Buffer2 = __require("buffer").Buffer;
      var OurUint8Array = global.Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var debugUtil = __require("util");
      var debug;
      if (debugUtil && debugUtil.debuglog) {
        debug = debugUtil.debuglog("stream");
      } else {
        debug = function debug2() {
        };
      }
      var BufferList = require_buffer_list();
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      var StringDecoder;
      var createReadableStreamAsyncIterator;
      var from;
      require_inherits()(Readable, Stream);
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(emitter, event, fn) {
        if (typeof emitter.prependListener === "function")
          return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event])
          emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event]))
          emitter._events[event].unshift(fn);
        else
          emitter._events[event] = [fn, emitter._events[event]];
      }
      function ReadableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex)
          this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
          if (!StringDecoder)
            StringDecoder = require_string_decoder().StringDecoder;
          this.decoder = new StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
      function Readable(options) {
        Duplex = Duplex || require_stream_duplex();
        if (!(this instanceof Readable))
          return new Readable(options);
        var isDuplex = this instanceof Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
          if (typeof options.read === "function")
            this._read = options.read;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
        }
        Stream.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      });
      Readable.prototype.destroy = destroyImpl.destroy;
      Readable.prototype._undestroy = destroyImpl.undestroy;
      Readable.prototype._destroy = function(err, cb) {
        cb(err);
      };
      Readable.prototype.push = function(chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
        if (!state.objectMode) {
          if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
              chunk = Buffer2.from(chunk, encoding);
              encoding = "";
            }
            skipChunkCheck = true;
          }
        } else {
          skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
      };
      Readable.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
      };
      function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        debug("readableAddChunk", chunk);
        var state = stream._readableState;
        if (chunk === null) {
          state.reading = false;
          onEofChunk(stream, state);
        } else {
          var er;
          if (!skipChunkCheck)
            er = chunkInvalid(state, chunk);
          if (er) {
            errorOrDestroy(stream, er);
          } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
              chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
              if (state.endEmitted)
                errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
              else
                addChunk(stream, state, chunk, true);
            } else if (state.ended) {
              errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
              return false;
            } else {
              state.reading = false;
              if (state.decoder && !encoding) {
                chunk = state.decoder.write(chunk);
                if (state.objectMode || chunk.length !== 0)
                  addChunk(stream, state, chunk, false);
                else
                  maybeReadMore(stream, state);
              } else {
                addChunk(stream, state, chunk, false);
              }
            }
          } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
          }
        }
        return !state.ended && (state.length < state.highWaterMark || state.length === 0);
      }
      function addChunk(stream, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
          state.awaitDrain = 0;
          stream.emit("data", chunk);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront)
            state.buffer.unshift(chunk);
          else
            state.buffer.push(chunk);
          if (state.needReadable)
            emitReadable(stream);
        }
        maybeReadMore(stream, state);
      }
      function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
        return er;
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(enc) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p = this._readableState.buffer.head;
        var content = "";
        while (p !== null) {
          content += decoder.write(p.data);
          p = p.next;
        }
        this._readableState.buffer.clear();
        if (content !== "")
          this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
      };
      var MAX_HWM = 1073741824;
      function computeNewHighWaterMark(n) {
        if (n >= MAX_HWM) {
          n = MAX_HWM;
        } else {
          n--;
          n |= n >>> 1;
          n |= n >>> 2;
          n |= n >>> 4;
          n |= n >>> 8;
          n |= n >>> 16;
          n++;
        }
        return n;
      }
      function howMuchToRead(n, state) {
        if (n <= 0 || state.length === 0 && state.ended)
          return 0;
        if (state.objectMode)
          return 1;
        if (n !== n) {
          if (state.flowing && state.length)
            return state.buffer.head.data.length;
          else
            return state.length;
        }
        if (n > state.highWaterMark)
          state.highWaterMark = computeNewHighWaterMark(n);
        if (n <= state.length)
          return n;
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        }
        return state.length;
      }
      Readable.prototype.read = function(n) {
        debug("read", n);
        n = parseInt(n, 10);
        var state = this._readableState;
        var nOrig = n;
        if (n !== 0)
          state.emittedReadable = false;
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
          debug("read: emitReadable", state.length, state.ended);
          if (state.length === 0 && state.ended)
            endReadable(this);
          else
            emitReadable(this);
          return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
          if (state.length === 0)
            endReadable(this);
          return null;
        }
        var doRead = state.needReadable;
        debug("need readable", doRead);
        if (state.length === 0 || state.length - n < state.highWaterMark) {
          doRead = true;
          debug("length less than watermark", doRead);
        }
        if (state.ended || state.reading) {
          doRead = false;
          debug("reading or ended", doRead);
        } else if (doRead) {
          debug("do read");
          state.reading = true;
          state.sync = true;
          if (state.length === 0)
            state.needReadable = true;
          this._read(state.highWaterMark);
          state.sync = false;
          if (!state.reading)
            n = howMuchToRead(nOrig, state);
        }
        var ret;
        if (n > 0)
          ret = fromList(n, state);
        else
          ret = null;
        if (ret === null) {
          state.needReadable = state.length <= state.highWaterMark;
          n = 0;
        } else {
          state.length -= n;
          state.awaitDrain = 0;
        }
        if (state.length === 0) {
          if (!state.ended)
            state.needReadable = true;
          if (nOrig !== n && state.ended)
            endReadable(this);
        }
        if (ret !== null)
          this.emit("data", ret);
        return ret;
      };
      function onEofChunk(stream, state) {
        debug("onEofChunk");
        if (state.ended)
          return;
        if (state.decoder) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
          }
        }
        state.ended = true;
        if (state.sync) {
          emitReadable(stream);
        } else {
          state.needReadable = false;
          if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
          }
        }
      }
      function emitReadable(stream) {
        var state = stream._readableState;
        debug("emitReadable", state.needReadable, state.emittedReadable);
        state.needReadable = false;
        if (!state.emittedReadable) {
          debug("emitReadable", state.flowing);
          state.emittedReadable = true;
          process.nextTick(emitReadable_, stream);
        }
      }
      function emitReadable_(stream) {
        var state = stream._readableState;
        debug("emitReadable_", state.destroyed, state.length, state.ended);
        if (!state.destroyed && (state.length || state.ended)) {
          stream.emit("readable");
          state.emittedReadable = false;
        }
        state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
        flow(stream);
      }
      function maybeReadMore(stream, state) {
        if (!state.readingMore) {
          state.readingMore = true;
          process.nextTick(maybeReadMore_, stream, state);
        }
      }
      function maybeReadMore_(stream, state) {
        while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
          var len = state.length;
          debug("maybeReadMore read 0");
          stream.read(0);
          if (len === state.length)
            break;
        }
        state.readingMore = false;
      }
      Readable.prototype._read = function(n) {
        errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
      };
      Readable.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
        switch (state.pipesCount) {
          case 0:
            state.pipes = dest;
            break;
          case 1:
            state.pipes = [state.pipes, dest];
            break;
          default:
            state.pipes.push(dest);
            break;
        }
        state.pipesCount += 1;
        debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted)
          process.nextTick(endFn);
        else
          src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug("onend");
          dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
          debug("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          dest.removeListener("drain", ondrain);
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
            ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug("ondata");
          var ret = dest.write(chunk);
          debug("dest.write", ret);
          if (ret === false) {
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
              debug("false write response, pause", state.awaitDrain);
              state.awaitDrain++;
            }
            src.pause();
          }
        }
        function onerror(er) {
          debug("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (EElistenerCount(dest, "error") === 0)
            errorOrDestroy(dest, er);
        }
        prependListener(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state.flowing) {
          debug("pipe resume");
          src.resume();
        }
        return dest;
      };
      function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
          var state = src._readableState;
          debug("pipeOnDrain", state.awaitDrain);
          if (state.awaitDrain)
            state.awaitDrain--;
          if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
          }
        };
      }
      Readable.prototype.unpipe = function(dest) {
        var state = this._readableState;
        var unpipeInfo = {
          hasUnpiped: false
        };
        if (state.pipesCount === 0)
          return this;
        if (state.pipesCount === 1) {
          if (dest && dest !== state.pipes)
            return this;
          if (!dest)
            dest = state.pipes;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          if (dest)
            dest.emit("unpipe", this, unpipeInfo);
          return this;
        }
        if (!dest) {
          var dests = state.pipes;
          var len = state.pipesCount;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          for (var i = 0; i < len; i++) {
            dests[i].emit("unpipe", this, {
              hasUnpiped: false
            });
          }
          return this;
        }
        var index = indexOf(state.pipes, dest);
        if (index === -1)
          return this;
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1)
          state.pipes = state.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      };
      Readable.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state = this._readableState;
        if (ev === "data") {
          state.readableListening = this.listenerCount("readable") > 0;
          if (state.flowing !== false)
            this.resume();
        } else if (ev === "readable") {
          if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) {
              emitReadable(this);
            } else if (!state.reading) {
              process.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      Readable.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      Readable.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      function updateReadableListening(self) {
        var state = self._readableState;
        state.readableListening = self.listenerCount("readable") > 0;
        if (state.resumeScheduled && !state.paused) {
          state.flowing = true;
        } else if (self.listenerCount("data") > 0) {
          self.resume();
        }
      }
      function nReadingNextTick(self) {
        debug("readable nexttick read 0");
        self.read(0);
      }
      Readable.prototype.resume = function() {
        var state = this._readableState;
        if (!state.flowing) {
          debug("resume");
          state.flowing = !state.readableListening;
          resume(this, state);
        }
        state.paused = false;
        return this;
      };
      function resume(stream, state) {
        if (!state.resumeScheduled) {
          state.resumeScheduled = true;
          process.nextTick(resume_, stream, state);
        }
      }
      function resume_(stream, state) {
        debug("resume", state.reading);
        if (!state.reading) {
          stream.read(0);
        }
        state.resumeScheduled = false;
        stream.emit("resume");
        flow(stream);
        if (state.flowing && !state.reading)
          stream.read(0);
      }
      Readable.prototype.pause = function() {
        debug("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
      };
      function flow(stream) {
        var state = stream._readableState;
        debug("flow", state.flowing);
        while (state.flowing && stream.read() !== null) {
          ;
        }
      }
      Readable.prototype.wrap = function(stream) {
        var _this = this;
        var state = this._readableState;
        var paused = false;
        stream.on("end", function() {
          debug("wrapped end");
          if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length)
              _this.push(chunk);
          }
          _this.push(null);
        });
        stream.on("data", function(chunk) {
          debug("wrapped data");
          if (state.decoder)
            chunk = state.decoder.write(chunk);
          if (state.objectMode && (chunk === null || chunk === void 0))
            return;
          else if (!state.objectMode && (!chunk || !chunk.length))
            return;
          var ret = _this.push(chunk);
          if (!ret) {
            paused = true;
            stream.pause();
          }
        });
        for (var i in stream) {
          if (this[i] === void 0 && typeof stream[i] === "function") {
            this[i] = function methodWrap(method) {
              return function methodWrapReturnFunction() {
                return stream[method].apply(stream, arguments);
              };
            }(i);
          }
        }
        for (var n = 0; n < kProxyEvents.length; n++) {
          stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
        }
        this._read = function(n2) {
          debug("wrapped _read", n2);
          if (paused) {
            paused = false;
            stream.resume();
          }
        };
        return this;
      };
      if (typeof Symbol === "function") {
        Readable.prototype[Symbol.asyncIterator] = function() {
          if (createReadableStreamAsyncIterator === void 0) {
            createReadableStreamAsyncIterator = require_async_iterator();
          }
          return createReadableStreamAsyncIterator(this);
        };
      }
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      });
      Object.defineProperty(Readable.prototype, "readableBuffer", {
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      });
      Object.defineProperty(Readable.prototype, "readableFlowing", {
        enumerable: false,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      });
      Readable._fromList = fromList;
      Object.defineProperty(Readable.prototype, "readableLength", {
        enumerable: false,
        get: function get() {
          return this._readableState.length;
        }
      });
      function fromList(n, state) {
        if (state.length === 0)
          return null;
        var ret;
        if (state.objectMode)
          ret = state.buffer.shift();
        else if (!n || n >= state.length) {
          if (state.decoder)
            ret = state.buffer.join("");
          else if (state.buffer.length === 1)
            ret = state.buffer.first();
          else
            ret = state.buffer.concat(state.length);
          state.buffer.clear();
        } else {
          ret = state.buffer.consume(n, state.decoder);
        }
        return ret;
      }
      function endReadable(stream) {
        var state = stream._readableState;
        debug("endReadable", state.endEmitted);
        if (!state.endEmitted) {
          state.ended = true;
          process.nextTick(endReadableNT, state, stream);
        }
      }
      function endReadableNT(state, stream) {
        debug("endReadableNT", state.endEmitted, state.length);
        if (!state.endEmitted && state.length === 0) {
          state.endEmitted = true;
          stream.readable = false;
          stream.emit("end");
          if (state.autoDestroy) {
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
              stream.destroy();
            }
          }
        }
      }
      if (typeof Symbol === "function") {
        Readable.from = function(iterable, opts) {
          if (from === void 0) {
            from = require_from();
          }
          return from(Readable, iterable, opts);
        };
      }
      function indexOf(xs, x) {
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x)
            return i;
        }
        return -1;
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_transform.js
  var require_stream_transform = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
      "use strict";
      module.exports = Transform2;
      var _require$codes = require_errors().codes;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
      var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
      var Duplex = require_stream_duplex();
      require_inherits()(Transform2, Duplex);
      function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;
        if (cb === null) {
          return this.emit("error", new ERR_MULTIPLE_CALLBACK());
        }
        ts.writechunk = null;
        ts.writecb = null;
        if (data != null)
          this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          this._read(rs.highWaterMark);
        }
      }
      function Transform2(options) {
        if (!(this instanceof Transform2))
          return new Transform2(options);
        Duplex.call(this, options);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (options) {
          if (typeof options.transform === "function")
            this._transform = options.transform;
          if (typeof options.flush === "function")
            this._flush = options.flush;
        }
        this.on("prefinish", prefinish);
      }
      function prefinish() {
        var _this = this;
        if (typeof this._flush === "function" && !this._readableState.destroyed) {
          this._flush(function(er, data) {
            done(_this, er, data);
          });
        } else {
          done(this, null, null);
        }
      }
      Transform2.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };
      Transform2.prototype._transform = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
      };
      Transform2.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
            this._read(rs.highWaterMark);
        }
      };
      Transform2.prototype._read = function(n) {
        var ts = this._transformState;
        if (ts.writechunk !== null && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          ts.needTransform = true;
        }
      };
      Transform2.prototype._destroy = function(err, cb) {
        Duplex.prototype._destroy.call(this, err, function(err2) {
          cb(err2);
        });
      };
      function done(stream, er, data) {
        if (er)
          return stream.emit("error", er);
        if (data != null)
          stream.push(data);
        if (stream._writableState.length)
          throw new ERR_TRANSFORM_WITH_LENGTH_0();
        if (stream._transformState.transforming)
          throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
        return stream.push(null);
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_passthrough.js
  var require_stream_passthrough = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
      "use strict";
      module.exports = PassThrough2;
      var Transform2 = require_stream_transform();
      require_inherits()(PassThrough2, Transform2);
      function PassThrough2(options) {
        if (!(this instanceof PassThrough2))
          return new PassThrough2(options);
        Transform2.call(this, options);
      }
      PassThrough2.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
      };
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/pipeline.js
  var require_pipeline = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
      "use strict";
      var eos;
      function once(callback) {
        var called = false;
        return function() {
          if (called)
            return;
          called = true;
          callback.apply(void 0, arguments);
        };
      }
      var _require$codes = require_errors().codes;
      var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      function noop(err) {
        if (err)
          throw err;
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function destroyer(stream, reading, writing, callback) {
        callback = once(callback);
        var closed = false;
        stream.on("close", function() {
          closed = true;
        });
        if (eos === void 0)
          eos = require_end_of_stream();
        eos(stream, {
          readable: reading,
          writable: writing
        }, function(err) {
          if (err)
            return callback(err);
          closed = true;
          callback();
        });
        var destroyed = false;
        return function(err) {
          if (closed)
            return;
          if (destroyed)
            return;
          destroyed = true;
          if (isRequest(stream))
            return stream.abort();
          if (typeof stream.destroy === "function")
            return stream.destroy();
          callback(err || new ERR_STREAM_DESTROYED("pipe"));
        };
      }
      function call(fn) {
        fn();
      }
      function pipe(from, to) {
        return from.pipe(to);
      }
      function popCallback(streams) {
        if (!streams.length)
          return noop;
        if (typeof streams[streams.length - 1] !== "function")
          return noop;
        return streams.pop();
      }
      function pipeline2() {
        for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
          streams[_key] = arguments[_key];
        }
        var callback = popCallback(streams);
        if (Array.isArray(streams[0]))
          streams = streams[0];
        if (streams.length < 2) {
          throw new ERR_MISSING_ARGS("streams");
        }
        var error;
        var destroys = streams.map(function(stream, i) {
          var reading = i < streams.length - 1;
          var writing = i > 0;
          return destroyer(stream, reading, writing, function(err) {
            if (!error)
              error = err;
            if (err)
              destroys.forEach(call);
            if (reading)
              return;
            destroys.forEach(call);
            callback(error);
          });
        });
        return streams.reduce(pipe);
      }
      module.exports = pipeline2;
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/readable.js
  var require_readable = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/readable.js"(exports, module) {
      var Stream = __require("stream");
      if (process.env.READABLE_STREAM === "disable" && Stream) {
        module.exports = Stream.Readable;
        Object.assign(module.exports, Stream);
        module.exports.Stream = Stream;
      } else {
        exports = module.exports = require_stream_readable();
        exports.Stream = Stream || exports;
        exports.Readable = exports;
        exports.Writable = require_stream_writable();
        exports.Duplex = require_stream_duplex();
        exports.Transform = require_stream_transform();
        exports.PassThrough = require_stream_passthrough();
        exports.finished = require_end_of_stream();
        exports.pipeline = require_pipeline();
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/wrappy-npm-1.0.2-916de4d4b3-159da4805f.zip/node_modules/wrappy/wrappy.js
  var require_wrappy = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/wrappy-npm-1.0.2-916de4d4b3-159da4805f.zip/node_modules/wrappy/wrappy.js"(exports, module) {
      module.exports = wrappy;
      function wrappy(fn, cb) {
        if (fn && cb)
          return wrappy(fn)(cb);
        if (typeof fn !== "function")
          throw new TypeError("need wrapper function");
        Object.keys(fn).forEach(function(k) {
          wrapper[k] = fn[k];
        });
        return wrapper;
        function wrapper() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          var ret = fn.apply(this, args);
          var cb2 = args[args.length - 1];
          if (typeof ret === "function" && ret !== cb2) {
            Object.keys(cb2).forEach(function(k) {
              ret[k] = cb2[k];
            });
          }
          return ret;
        }
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/once-npm-1.4.0-ccf03ef07a-cd0a885013.zip/node_modules/once/once.js
  var require_once = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/once-npm-1.4.0-ccf03ef07a-cd0a885013.zip/node_modules/once/once.js"(exports, module) {
      var wrappy = require_wrappy();
      module.exports = wrappy(once);
      module.exports.strict = wrappy(onceStrict);
      once.proto = once(function() {
        Object.defineProperty(Function.prototype, "once", {
          value: function() {
            return once(this);
          },
          configurable: true
        });
        Object.defineProperty(Function.prototype, "onceStrict", {
          value: function() {
            return onceStrict(this);
          },
          configurable: true
        });
      });
      function once(fn) {
        var f = function() {
          if (f.called)
            return f.value;
          f.called = true;
          return f.value = fn.apply(this, arguments);
        };
        f.called = false;
        return f;
      }
      function onceStrict(fn) {
        var f = function() {
          if (f.called)
            throw new Error(f.onceError);
          f.called = true;
          return f.value = fn.apply(this, arguments);
        };
        var name = fn.name || "Function wrapped with `once`";
        f.onceError = name + " shouldn't be called more than once";
        f.called = false;
        return f;
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/multistream-npm-4.1.0-0df2458b36-305c49a1aa.zip/node_modules/multistream/index.js
  var require_multistream = __commonJS({
    "pnp:/Users/herockk/Workspaces/yarn-plugins/.yarn/cache/multistream-npm-4.1.0-0df2458b36-305c49a1aa.zip/node_modules/multistream/index.js"(exports, module) {
      var stream = require_readable();
      var once = require_once();
      function toStreams2Obj(s) {
        return toStreams2(s, {objectMode: true, highWaterMark: 16});
      }
      function toStreams2Buf(s) {
        return toStreams2(s);
      }
      function toStreams2(s, opts) {
        if (!s || typeof s === "function" || s._readableState)
          return s;
        const wrap = new stream.Readable(opts).wrap(s);
        if (s.destroy) {
          wrap.destroy = s.destroy.bind(s);
        }
        return wrap;
      }
      var MultiStream2 = class extends stream.Readable {
        constructor(streams, opts) {
          super(__spreadProps(__spreadValues({}, opts), {autoDestroy: true}));
          this._drained = false;
          this._forwarding = false;
          this._current = null;
          this._toStreams2 = opts && opts.objectMode ? toStreams2Obj : toStreams2Buf;
          if (typeof streams === "function") {
            this._queue = streams;
          } else {
            this._queue = streams.map(this._toStreams2);
            this._queue.forEach((stream2) => {
              if (typeof stream2 !== "function")
                this._attachErrorListener(stream2);
            });
          }
          this._next();
        }
        _read() {
          this._drained = true;
          this._forward();
        }
        _forward() {
          if (this._forwarding || !this._drained || !this._current)
            return;
          this._forwarding = true;
          let chunk;
          while (this._drained && (chunk = this._current.read()) !== null) {
            this._drained = this.push(chunk);
          }
          this._forwarding = false;
        }
        _destroy(err, cb) {
          let streams = [];
          if (this._current)
            streams.push(this._current);
          if (typeof this._queue !== "function")
            streams = streams.concat(this._queue);
          if (streams.length === 0) {
            cb(err);
          } else {
            let counter = streams.length;
            let er = err;
            streams.forEach((stream2) => {
              destroy(stream2, err, (err2) => {
                er = er || err2;
                if (--counter === 0) {
                  cb(er);
                }
              });
            });
          }
        }
        _next() {
          this._current = null;
          if (typeof this._queue === "function") {
            this._queue((err, stream2) => {
              if (err)
                return this.destroy(err);
              stream2 = this._toStreams2(stream2);
              this._attachErrorListener(stream2);
              this._gotNextStream(stream2);
            });
          } else {
            let stream2 = this._queue.shift();
            if (typeof stream2 === "function") {
              stream2 = this._toStreams2(stream2());
              this._attachErrorListener(stream2);
            }
            this._gotNextStream(stream2);
          }
        }
        _gotNextStream(stream2) {
          if (!stream2) {
            this.push(null);
            return;
          }
          this._current = stream2;
          this._forward();
          const onReadable = () => {
            this._forward();
          };
          const onClose = () => {
            if (!stream2._readableState.ended && !stream2.destroyed) {
              const err = new Error("ERR_STREAM_PREMATURE_CLOSE");
              err.code = "ERR_STREAM_PREMATURE_CLOSE";
              this.destroy(err);
            }
          };
          const onEnd = () => {
            this._current = null;
            stream2.removeListener("readable", onReadable);
            stream2.removeListener("end", onEnd);
            stream2.removeListener("close", onClose);
            stream2.destroy();
            this._next();
          };
          stream2.on("readable", onReadable);
          stream2.once("end", onEnd);
          stream2.once("close", onClose);
        }
        _attachErrorListener(stream2) {
          if (!stream2)
            return;
          const onError = (err) => {
            stream2.removeListener("error", onError);
            this.destroy(err);
          };
          stream2.once("error", onError);
        }
      };
      MultiStream2.obj = (streams) => new MultiStream2(streams, {objectMode: true, highWaterMark: 16});
      module.exports = MultiStream2;
      function destroy(stream2, err, cb) {
        if (!stream2.destroy || stream2.destroyed) {
          cb(err);
        } else {
          const callback = once((er) => cb(er || err));
          stream2.on("error", callback).on("close", () => callback()).destroy(err, callback);
        }
      }
    }
  });

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default,
    releaseUtils: () => releaseUtils_exports
  });
  var import_core4 = __toModule(__require("@yarnpkg/core"));

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/commands/releaseCommit.ts
  var import_cli = __toModule(__require("@yarnpkg/cli"));
  var import_core2 = __toModule(__require("@yarnpkg/core"));
  var import_clipanion = __toModule(__require("clipanion"));

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/releaseUtils.ts
  var releaseUtils_exports = {};
  __export(releaseUtils_exports, {
    changelogStream: () => changelogStream,
    recommendedBump: () => recommendedBump
  });
  var import_core = __toModule(__require("@yarnpkg/core"));
  var import_fslib = __toModule(__require("@yarnpkg/fslib"));
  var import_plugin_pnp = __toModule(__require("@yarnpkg/plugin-pnp"));
  var import_calver = __toModule(require_src());
  var import_module = __toModule(__require("module"));
  var import_util = __toModule(__require("util"));
  async function changelogStream(workspace, options) {
    const {cwd, manifest, project} = workspace;
    const require2 = absoluteRequire(project.cwd);
    const conventionalChangelog = require2(`conventional-changelog`);
    return conventionalChangelog(__spreadValues({
      preset: project.configuration.get(`conventionalChangelogPreset`),
      pkg: {transform: () => manifest.exportTo({})},
      lernaPackage: workspace === project.topLevelWorkspace ? void 0 : import_core.structUtils.stringifyIdent(workspace.locator),
      tagPrefix: workspace === project.topLevelWorkspace ? void 0 : `${import_core.structUtils.stringifyIdent(workspace.locator)}@`,
      outputUnreleased: true
    }, options), void 0, {path: cwd});
  }
  async function recommendedBump(workspace) {
    const {cwd, manifest, project} = workspace;
    const require2 = absoluteRequire(project.cwd);
    const conventionalRecommendedBump = require2(`conventional-recommended-bump`);
    const conventionalChangelogPresetLoader = require2(`conventional-changelog-preset-loader`);
    const conventionalChangelogPreset = project.configuration.get(`conventionalChangelogPreset`);
    const releaseCalverFormat = project.configuration.get(`releaseCalverFormat`);
    const conventionalRecommendedBumpPromise = (0, import_util.promisify)(conventionalRecommendedBump);
    if (workspace === project.topLevelWorkspace) {
      return manifest.version ? incrementCalendarPatch(releaseCalverFormat, manifest.version) : void 0;
    } else {
      const config = await conventionalChangelogPresetLoader(conventionalChangelogPreset);
      const {recommendedBumpOpts} = typeof config === `function` ? await (0, import_util.promisify)(config)() : config;
      const bump = await conventionalRecommendedBumpPromise({
        config,
        path: cwd,
        lernaPackage: import_core.structUtils.stringifyIdent(workspace.locator),
        whatBump: (commits) => {
          const codeChanges = new Set([`feat`, `fix`, `perf`, `refactor`, `revert`]);
          const shouldBump = commits.some((commit) => codeChanges.has(commit.type));
          return (recommendedBumpOpts == null ? void 0 : recommendedBumpOpts.whatBump) && shouldBump ? recommendedBumpOpts.whatBump(commits) : {};
        }
      });
      return bump.releaseType;
    }
  }
  function absoluteRequire(cwd) {
    const pnpPath = (0, import_plugin_pnp.getPnpPath)({cwd}).cjs;
    const absRequire = (0, import_module.createRequire)(pnpPath);
    if (!process.versions.pnp && import_fslib.xfs.existsSync(pnpPath))
      absRequire(pnpPath).setup();
    return absRequire;
  }
  function incrementCalendarPatch(format, version) {
    try {
      return import_calver.default.inc(format, version, `calendar`);
    } catch (err) {
      if (!err.message.startsWith(`There is no change in the version`))
        throw err;
      return `patch`;
    }
  }

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/commands/releaseCommit.ts
  var ReleaseCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.json = import_clipanion.Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});
      this.dryRun = import_clipanion.Option.Boolean(`--dry-run`, false, {
        description: `Prints the recommended version bump to stdout`
      });
    }
    async execute() {
      const configuration = await import_core2.Configuration.find(this.context.cwd, this.context.plugins);
      const {project} = await import_core2.Project.find(configuration, this.context.cwd);
      const {stdout: tagListOut} = await import_core2.execUtils.execvp(`git`, [`tag`, `--list`], {cwd: project.cwd, strict: true});
      const tagList = new Set(tagListOut.trim().split(/\s+/));
      const projectTagName = `v${project.topLevelWorkspace.locator.reference}`;
      if (tagList.has(projectTagName))
        throw new import_clipanion.UsageError(`${projectTagName} has already been releeased`);
      const report = await import_core2.StreamReport.start({
        configuration,
        stdout: this.context.stdout,
        json: this.json
      }, async (report2) => {
        const taggableWorkspaces = project.topLevelWorkspace.getRecursiveWorkspaceChildren().filter((workspace) => !workspace.manifest.private && !tagList.has(import_core2.structUtils.stringifyLocator(workspace.locator)));
        if (!taggableWorkspaces.length) {
          report2.reportWarning(import_core2.MessageName.UNNAMED, `There are no workspaces to tag`);
          return;
        }
        const newWorkspaceVersions = taggableWorkspaces.map(({locator, manifest}) => `${import_core2.structUtils.stringifyIdent(locator)}: v${manifest.version}`).join(`
`);
        await import_core2.execUtils.execvp(`git`, [`commit`, `-m`, `chore: release ${projectTagName}

${newWorkspaceVersions}`], {
          cwd: project.cwd,
          strict: true
        });
        for (const {locator} of taggableWorkspaces) {
          const tagName = import_core2.structUtils.stringifyLocator(locator);
          await import_core2.execUtils.execvp(`git`, [`tag`, tagName], {
            cwd: project.cwd,
            strict: true
          });
          report2.reportJson({ident: import_core2.structUtils.stringifyIdent(locator), tagName});
        }
        let changelogText = ``;
        for await (const chunk of await changelogStream(project.topLevelWorkspace))
          changelogText += chunk.toString();
        changelogText = changelogText.split(`
`).slice(2).join(`
`);
        report2.reportJson({ident: import_core2.structUtils.stringifyIdent(project.topLevelWorkspace.locator), tagName: projectTagName});
        await import_core2.execUtils.execvp(`git`, [`tag`, `-a`, projectTagName, `-m`, changelogText, `--cleanup=whitespace`], {
          cwd: project.cwd,
          strict: true
        });
      });
      return report.exitCode();
    }
  };
  ReleaseCommand.usage = import_clipanion.Command.Usage({
    category: `Release-related commands`,
    description: `Commits and tags releases`,
    details: `
      This command will create a release for the current git project.
    `,
    examples: [
      [
        `Commits and tags a release for this project's workspaces`,
        `yarn release-commit`
      ]
    ]
  });
  ReleaseCommand.paths = [[`release-commit`]];
  var releaseCommit_default = ReleaseCommand;

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/commands/release.ts
  var import_cli2 = __toModule(__require("@yarnpkg/cli"));
  var import_core3 = __toModule(__require("@yarnpkg/core"));
  var import_fslib2 = __toModule(__require("@yarnpkg/fslib"));
  var import_clipanion2 = __toModule(__require("clipanion"));
  var import_multistream = __toModule(require_multistream());
  var import_semver = __toModule(__require("semver"));
  var import_stream = __toModule(__require("stream"));
  var import_util2 = __toModule(__require("util"));
  var CHANGELOG = `CHANGELOG.md`;
  var ReleaseCommand2 = class extends import_cli2.BaseCommand {
    constructor() {
      super(...arguments);
      this.json = import_clipanion2.Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});
      this.dryRun = import_clipanion2.Option.Boolean(`--dry-run`, false, {
        description: `Prints the recommended version bump to stdout`
      });
      this.firstRelease = import_clipanion2.Option.Boolean(`--first-release`, false, {
        description: `Skips bumping the version`
      });
      this.prerelease = import_clipanion2.Option.Boolean(`--prerelease`, false, {
        description: `Add a prerelease identifier to new versions`
      });
      this.prereleaseId = import_clipanion2.Option.String(`--preid`, {
        description: `Add a prerelease identifier to new versions`
      });
    }
    async execute() {
      const configuration = await import_core3.Configuration.find(this.context.cwd, this.context.plugins);
      const {project, workspace} = await import_core3.Project.find(configuration, this.context.cwd);
      if (!workspace)
        throw new import_cli2.WorkspaceRequiredError(project.cwd, this.context.cwd);
      const ident = import_core3.structUtils.stringifyIdent(workspace.locator);
      const report = await import_core3.StreamReport.start({
        configuration,
        stdout: this.context.stdout,
        json: this.json
      }, async (report2) => {
        if (!workspace.manifest.version)
          throw new import_clipanion2.UsageError(`Can't bump the version if there wasn't a version to begin with - use 0.0.0 as initial version then run the command again.`);
        if (!this.firstRelease) {
          const recommendedStrategy = await recommendedBump(workspace);
          if (!recommendedStrategy) {
            report2.reportWarning(import_core3.MessageName.UNNAMED, `No commits since last release`);
            return;
          }
          let version = new import_semver.SemVer(workspace.manifest.version);
          if (import_semver.default.valid(recommendedStrategy)) {
            version = new import_semver.SemVer(recommendedStrategy);
            if (this.prerelease || this.prereleaseId)
              version.prerelease = this.prereleaseId ? [this.prereleaseId, 0] : [0];
            workspace.manifest.version = version.format();
            report2.reportJson({ident, newVersion: workspace.manifest.version});
          } else {
            const strategy = this.prerelease ? `prerelease` : this.prereleaseId ? `pre${recommendedStrategy}` : recommendedStrategy;
            version.inc(strategy, this.prereleaseId);
            version.format();
            workspace.manifest.version = version.format();
            report2.reportJson({ident, strategy, newVersion: workspace.manifest.version});
          }
          report2.reportInfo(import_core3.MessageName.UNNAMED, `Recommended version bump: ${recommendedStrategy}`);
          if (!this.dryRun) {
            await workspace.persistManifest();
          }
        }
        const changelogPath = import_fslib2.ppath.join(workspace.cwd, CHANGELOG);
        const existingChangelog = import_fslib2.xfs.createReadStream(changelogPath).on(`error`, function(err) {
          if (err.code !== `ENOENT`)
            throw err;
          this.unpipe(existingChangelog);
          existingChangelog.push(null);
        }).pipe(new import_stream.PassThrough());
        const changelog = new import_multistream.default([
          await changelogStream(workspace, {
            releaseCount: this.firstRelease ? 0 : 1
          }),
          existingChangelog
        ]);
        let text = ``;
        const getText = new import_stream.Transform({
          transform(chunk, encoding, callback) {
            text += chunk.toString();
            callback(null, chunk);
          }
        });
        const streams = [changelog, getText];
        if (this.dryRun) {
          streams.push(report2.createStreamReporter());
          await (0, import_util2.promisify)(import_stream.pipeline)(streams);
        } else {
          const outPath = import_fslib2.ppath.join(await import_fslib2.xfs.mktempPromise(), CHANGELOG);
          streams.push(import_fslib2.xfs.createWriteStream(outPath));
          await (0, import_util2.promisify)(import_stream.pipeline)(streams);
          await import_fslib2.xfs.copyFilePromise(outPath, changelogPath);
        }
        report2.reportJson({ident, changelogPath, changelog: text});
        if (!this.dryRun) {
          await import_core3.execUtils.execvp(`git`, [`add`, import_fslib2.Filename.manifest, CHANGELOG], {
            cwd: workspace.cwd,
            strict: true
          });
          await project.install({
            cache: await import_core3.Cache.find(configuration),
            report: new import_core3.ThrowReport(),
            persistProject: false
          });
          await import_core3.scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `postrelease`, {report: report2});
        }
        report2.reportInfo(import_core3.MessageName.UNNAMED, `Released v${workspace.manifest.version}`);
      });
      return report.exitCode();
    }
  };
  ReleaseCommand2.usage = import_clipanion2.Command.Usage({
    category: `Release-related commands`,
    description: `Bumps version and generates a changelog for the active workspace`,
    details: `
      This command will prepare the current workspace for a new release.
    `,
    examples: [
      [
        `Creates a release for the current workspace`,
        `yarn release`
      ]
    ]
  });
  ReleaseCommand2.paths = [[`release`]];
  var release_default = ReleaseCommand2;

  // pnp:/Users/herockk/Workspaces/yarn-plugins/packages/plugin-release/sources/index.ts
  var plugin = {
    configuration: {
      releaseCalverFormat: {
        description: `A CalVer (calendar version) format to use for monorepo versions. Must include the <micro> semver level.`,
        type: import_core4.SettingsType.STRING,
        default: `YY.MM.micro`
      },
      conventionalChangelogPreset: {
        description: `A preset value to pass to conventional-changelog-preset-loader`,
        type: import_core4.SettingsType.STRING,
        default: `conventionalcommits`
      }
    },
    commands: [
      release_default,
      releaseCommit_default
    ]
  };
  var sources_default = plugin;
  return sources_exports;
})();
/*! multistream. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
return plugin;
}
};
