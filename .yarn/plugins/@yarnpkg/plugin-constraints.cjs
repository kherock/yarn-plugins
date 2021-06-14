/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-constraints",
factory: function (require) {
var plugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
      for (let key2 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key2) && key2 !== "default")
          __defProp(target, key2, {get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/tau-prolog-npm-0.2.66-b5d2420a05-6a61b37925.zip/node_modules/tau-prolog/modules/lists.js
  var require_lists = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/tau-prolog-npm-0.2.66-b5d2420a05-6a61b37925.zip/node_modules/tau-prolog/modules/lists.js"(exports, module) {
      var pl3;
      (function(pl4) {
        var predicates = function() {
          return {
            "append/2": [
              new pl4.type.Rule(new pl4.type.Term("append", [new pl4.type.Var("X"), new pl4.type.Var("L")]), new pl4.type.Term("foldl", [new pl4.type.Term("append", []), new pl4.type.Var("X"), new pl4.type.Term("[]", []), new pl4.type.Var("L")]))
            ],
            "append/3": [
              new pl4.type.Rule(new pl4.type.Term("append", [new pl4.type.Term("[]", []), new pl4.type.Var("X"), new pl4.type.Var("X")]), null),
              new pl4.type.Rule(new pl4.type.Term("append", [new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("T")]), new pl4.type.Var("X"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("S")])]), new pl4.type.Term("append", [new pl4.type.Var("T"), new pl4.type.Var("X"), new pl4.type.Var("S")]))
            ],
            "member/2": [
              new pl4.type.Rule(new pl4.type.Term("member", [new pl4.type.Var("X"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("_")])]), null),
              new pl4.type.Rule(new pl4.type.Term("member", [new pl4.type.Var("X"), new pl4.type.Term(".", [new pl4.type.Var("_"), new pl4.type.Var("Xs")])]), new pl4.type.Term("member", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]))
            ],
            "permutation/2": [
              new pl4.type.Rule(new pl4.type.Term("permutation", [new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("permutation", [new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("T")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("permutation", [new pl4.type.Var("T"), new pl4.type.Var("P")]), new pl4.type.Term(",", [new pl4.type.Term("append", [new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("P")]), new pl4.type.Term("append", [new pl4.type.Var("X"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("Y")]), new pl4.type.Var("S")])])]))
            ],
            "maplist/2": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("X")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("Xs")])]))
            ],
            "maplist/3": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs")])]))
            ],
            "maplist/4": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")]), new pl4.type.Term(".", [new pl4.type.Var("C"), new pl4.type.Var("Cs")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B"), new pl4.type.Var("C")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs"), new pl4.type.Var("Cs")])]))
            ],
            "maplist/5": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")]), new pl4.type.Term(".", [new pl4.type.Var("C"), new pl4.type.Var("Cs")]), new pl4.type.Term(".", [new pl4.type.Var("D"), new pl4.type.Var("Ds")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B"), new pl4.type.Var("C"), new pl4.type.Var("D")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs"), new pl4.type.Var("Cs"), new pl4.type.Var("Ds")])]))
            ],
            "maplist/6": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")]), new pl4.type.Term(".", [new pl4.type.Var("C"), new pl4.type.Var("Cs")]), new pl4.type.Term(".", [new pl4.type.Var("D"), new pl4.type.Var("Ds")]), new pl4.type.Term(".", [new pl4.type.Var("E"), new pl4.type.Var("Es")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B"), new pl4.type.Var("C"), new pl4.type.Var("D"), new pl4.type.Var("E")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs"), new pl4.type.Var("Cs"), new pl4.type.Var("Ds"), new pl4.type.Var("Es")])]))
            ],
            "maplist/7": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")]), new pl4.type.Term(".", [new pl4.type.Var("C"), new pl4.type.Var("Cs")]), new pl4.type.Term(".", [new pl4.type.Var("D"), new pl4.type.Var("Ds")]), new pl4.type.Term(".", [new pl4.type.Var("E"), new pl4.type.Var("Es")]), new pl4.type.Term(".", [new pl4.type.Var("F"), new pl4.type.Var("Fs")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B"), new pl4.type.Var("C"), new pl4.type.Var("D"), new pl4.type.Var("E"), new pl4.type.Var("F")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs"), new pl4.type.Var("Cs"), new pl4.type.Var("Ds"), new pl4.type.Var("Es"), new pl4.type.Var("Fs")])]))
            ],
            "maplist/8": [
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("A"), new pl4.type.Var("As")]), new pl4.type.Term(".", [new pl4.type.Var("B"), new pl4.type.Var("Bs")]), new pl4.type.Term(".", [new pl4.type.Var("C"), new pl4.type.Var("Cs")]), new pl4.type.Term(".", [new pl4.type.Var("D"), new pl4.type.Var("Ds")]), new pl4.type.Term(".", [new pl4.type.Var("E"), new pl4.type.Var("Es")]), new pl4.type.Term(".", [new pl4.type.Var("F"), new pl4.type.Var("Fs")]), new pl4.type.Term(".", [new pl4.type.Var("G"), new pl4.type.Var("Gs")])]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P"), new pl4.type.Var("A"), new pl4.type.Var("B"), new pl4.type.Var("C"), new pl4.type.Var("D"), new pl4.type.Var("E"), new pl4.type.Var("F"), new pl4.type.Var("G")]), new pl4.type.Term("maplist", [new pl4.type.Var("P"), new pl4.type.Var("As"), new pl4.type.Var("Bs"), new pl4.type.Var("Cs"), new pl4.type.Var("Ds"), new pl4.type.Var("Es"), new pl4.type.Var("Fs"), new pl4.type.Var("Gs")])]))
            ],
            "include/3": [
              new pl4.type.Rule(new pl4.type.Term("include", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("include", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("T")]), new pl4.type.Var("L")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("P"), new pl4.type.Var("A")]), new pl4.type.Term(",", [new pl4.type.Term("append", [new pl4.type.Var("A"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Term("[]", [])]), new pl4.type.Var("B")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("F"), new pl4.type.Var("B")]), new pl4.type.Term(",", [new pl4.type.Term(";", [new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("F")]), new pl4.type.Term(",", [new pl4.type.Term("=", [new pl4.type.Var("L"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("S")])]), new pl4.type.Term("!", [])])]), new pl4.type.Term("=", [new pl4.type.Var("L"), new pl4.type.Var("S")])]), new pl4.type.Term("include", [new pl4.type.Var("P"), new pl4.type.Var("T"), new pl4.type.Var("S")])])])])]))
            ],
            "exclude/3": [
              new pl4.type.Rule(new pl4.type.Term("exclude", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Term("[]", [])]), null),
              new pl4.type.Rule(new pl4.type.Term("exclude", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("T")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("exclude", [new pl4.type.Var("P"), new pl4.type.Var("T"), new pl4.type.Var("E")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("P"), new pl4.type.Var("L")]), new pl4.type.Term(",", [new pl4.type.Term("append", [new pl4.type.Var("L"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Term("[]", [])]), new pl4.type.Var("Q")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("R"), new pl4.type.Var("Q")]), new pl4.type.Term(";", [new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("R")]), new pl4.type.Term(",", [new pl4.type.Term("!", []), new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Var("E")])])]), new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("E")])])])])])])]))
            ],
            "foldl/4": [
              new pl4.type.Rule(new pl4.type.Term("foldl", [new pl4.type.Var("_"), new pl4.type.Term("[]", []), new pl4.type.Var("I"), new pl4.type.Var("I")]), null),
              new pl4.type.Rule(new pl4.type.Term("foldl", [new pl4.type.Var("P"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Var("T")]), new pl4.type.Var("I"), new pl4.type.Var("R")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("P"), new pl4.type.Var("L")]), new pl4.type.Term(",", [new pl4.type.Term("append", [new pl4.type.Var("L"), new pl4.type.Term(".", [new pl4.type.Var("I"), new pl4.type.Term(".", [new pl4.type.Var("H"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Term("[]", [])])])]), new pl4.type.Var("L2")]), new pl4.type.Term(",", [new pl4.type.Term("=..", [new pl4.type.Var("P2"), new pl4.type.Var("L2")]), new pl4.type.Term(",", [new pl4.type.Term("call", [new pl4.type.Var("P2")]), new pl4.type.Term("foldl", [new pl4.type.Var("P"), new pl4.type.Var("T"), new pl4.type.Var("X"), new pl4.type.Var("R")])])])])]))
            ],
            "select/3": [
              new pl4.type.Rule(new pl4.type.Term("select", [new pl4.type.Var("E"), new pl4.type.Term(".", [new pl4.type.Var("E"), new pl4.type.Var("Xs")]), new pl4.type.Var("Xs")]), null),
              new pl4.type.Rule(new pl4.type.Term("select", [new pl4.type.Var("E"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Ys")])]), new pl4.type.Term("select", [new pl4.type.Var("E"), new pl4.type.Var("Xs"), new pl4.type.Var("Ys")]))
            ],
            "sum_list/2": [
              new pl4.type.Rule(new pl4.type.Term("sum_list", [new pl4.type.Term("[]", []), new pl4.type.Num(0, false)]), null),
              new pl4.type.Rule(new pl4.type.Term("sum_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("sum_list", [new pl4.type.Var("Xs"), new pl4.type.Var("Y")]), new pl4.type.Term("is", [new pl4.type.Var("S"), new pl4.type.Term("+", [new pl4.type.Var("X"), new pl4.type.Var("Y")])])]))
            ],
            "max_list/2": [
              new pl4.type.Rule(new pl4.type.Term("max_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Term("[]", [])]), new pl4.type.Var("X")]), null),
              new pl4.type.Rule(new pl4.type.Term("max_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("max_list", [new pl4.type.Var("Xs"), new pl4.type.Var("Y")]), new pl4.type.Term(";", [new pl4.type.Term(",", [new pl4.type.Term(">=", [new pl4.type.Var("X"), new pl4.type.Var("Y")]), new pl4.type.Term(",", [new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Var("X")]), new pl4.type.Term("!", [])])]), new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Var("Y")])])]))
            ],
            "min_list/2": [
              new pl4.type.Rule(new pl4.type.Term("min_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Term("[]", [])]), new pl4.type.Var("X")]), null),
              new pl4.type.Rule(new pl4.type.Term("min_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("min_list", [new pl4.type.Var("Xs"), new pl4.type.Var("Y")]), new pl4.type.Term(";", [new pl4.type.Term(",", [new pl4.type.Term("=<", [new pl4.type.Var("X"), new pl4.type.Var("Y")]), new pl4.type.Term(",", [new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Var("X")]), new pl4.type.Term("!", [])])]), new pl4.type.Term("=", [new pl4.type.Var("S"), new pl4.type.Var("Y")])])]))
            ],
            "prod_list/2": [
              new pl4.type.Rule(new pl4.type.Term("prod_list", [new pl4.type.Term("[]", []), new pl4.type.Num(1, false)]), null),
              new pl4.type.Rule(new pl4.type.Term("prod_list", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("S")]), new pl4.type.Term(",", [new pl4.type.Term("prod_list", [new pl4.type.Var("Xs"), new pl4.type.Var("Y")]), new pl4.type.Term("is", [new pl4.type.Var("S"), new pl4.type.Term("*", [new pl4.type.Var("X"), new pl4.type.Var("Y")])])]))
            ],
            "last/2": [
              new pl4.type.Rule(new pl4.type.Term("last", [new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Term("[]", [])]), new pl4.type.Var("X")]), null),
              new pl4.type.Rule(new pl4.type.Term("last", [new pl4.type.Term(".", [new pl4.type.Var("_"), new pl4.type.Var("Xs")]), new pl4.type.Var("X")]), new pl4.type.Term("last", [new pl4.type.Var("Xs"), new pl4.type.Var("X")]))
            ],
            "prefix/2": [
              new pl4.type.Rule(new pl4.type.Term("prefix", [new pl4.type.Var("Part"), new pl4.type.Var("Whole")]), new pl4.type.Term("append", [new pl4.type.Var("Part"), new pl4.type.Var("_"), new pl4.type.Var("Whole")]))
            ],
            "nth0/3": [
              new pl4.type.Rule(new pl4.type.Term("nth0", [new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z")]), new pl4.type.Term(";", [new pl4.type.Term("->", [new pl4.type.Term("var", [new pl4.type.Var("X")]), new pl4.type.Term("nth", [new pl4.type.Num(0, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("_")])]), new pl4.type.Term(",", [new pl4.type.Term(">=", [new pl4.type.Var("X"), new pl4.type.Num(0, false)]), new pl4.type.Term(",", [new pl4.type.Term("nth", [new pl4.type.Num(0, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("_")]), new pl4.type.Term("!", [])])])]))
            ],
            "nth1/3": [
              new pl4.type.Rule(new pl4.type.Term("nth1", [new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z")]), new pl4.type.Term(";", [new pl4.type.Term("->", [new pl4.type.Term("var", [new pl4.type.Var("X")]), new pl4.type.Term("nth", [new pl4.type.Num(1, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("_")])]), new pl4.type.Term(",", [new pl4.type.Term(">", [new pl4.type.Var("X"), new pl4.type.Num(0, false)]), new pl4.type.Term(",", [new pl4.type.Term("nth", [new pl4.type.Num(1, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("_")]), new pl4.type.Term("!", [])])])]))
            ],
            "nth0/4": [
              new pl4.type.Rule(new pl4.type.Term("nth0", [new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")]), new pl4.type.Term(";", [new pl4.type.Term("->", [new pl4.type.Term("var", [new pl4.type.Var("X")]), new pl4.type.Term("nth", [new pl4.type.Num(0, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")])]), new pl4.type.Term(",", [new pl4.type.Term(">=", [new pl4.type.Var("X"), new pl4.type.Num(0, false)]), new pl4.type.Term(",", [new pl4.type.Term("nth", [new pl4.type.Num(0, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")]), new pl4.type.Term("!", [])])])]))
            ],
            "nth1/4": [
              new pl4.type.Rule(new pl4.type.Term("nth1", [new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")]), new pl4.type.Term(";", [new pl4.type.Term("->", [new pl4.type.Term("var", [new pl4.type.Var("X")]), new pl4.type.Term("nth", [new pl4.type.Num(1, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")])]), new pl4.type.Term(",", [new pl4.type.Term(">", [new pl4.type.Var("X"), new pl4.type.Num(0, false)]), new pl4.type.Term(",", [new pl4.type.Term("nth", [new pl4.type.Num(1, false), new pl4.type.Var("X"), new pl4.type.Var("Y"), new pl4.type.Var("Z"), new pl4.type.Var("W")]), new pl4.type.Term("!", [])])])]))
            ],
            "nth/5": [
              new pl4.type.Rule(new pl4.type.Term("nth", [new pl4.type.Var("N"), new pl4.type.Var("N"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("X"), new pl4.type.Var("Xs")]), null),
              new pl4.type.Rule(new pl4.type.Term("nth", [new pl4.type.Var("N"), new pl4.type.Var("O"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Xs")]), new pl4.type.Var("Y"), new pl4.type.Term(".", [new pl4.type.Var("X"), new pl4.type.Var("Ys")])]), new pl4.type.Term(",", [new pl4.type.Term("is", [new pl4.type.Var("M"), new pl4.type.Term("+", [new pl4.type.Var("N"), new pl4.type.Num(1, false)])]), new pl4.type.Term("nth", [new pl4.type.Var("M"), new pl4.type.Var("O"), new pl4.type.Var("Xs"), new pl4.type.Var("Y"), new pl4.type.Var("Ys")])]))
            ],
            "length/2": function(thread, point, atom) {
              var list = atom.args[0], length = atom.args[1];
              if (!pl4.type.is_variable(length) && !pl4.type.is_integer(length)) {
                thread.throw_error(pl4.error.type("integer", length, atom.indicator));
              } else if (pl4.type.is_integer(length) && length.value < 0) {
                thread.throw_error(pl4.error.domain("not_less_than_zero", length, atom.indicator));
              } else {
                var newgoal = new pl4.type.Term("length", [list, new pl4.type.Num(0, false), length]);
                if (pl4.type.is_integer(length))
                  newgoal = new pl4.type.Term(",", [newgoal, new pl4.type.Term("!", [])]);
                thread.prepend([new pl4.type.State(point.goal.replace(newgoal), point.substitution, point)]);
              }
            },
            "length/3": [
              new pl4.type.Rule(new pl4.type.Term("length", [new pl4.type.Term("[]", []), new pl4.type.Var("N"), new pl4.type.Var("N")]), null),
              new pl4.type.Rule(new pl4.type.Term("length", [new pl4.type.Term(".", [new pl4.type.Var("_"), new pl4.type.Var("X")]), new pl4.type.Var("A"), new pl4.type.Var("N")]), new pl4.type.Term(",", [new pl4.type.Term("succ", [new pl4.type.Var("A"), new pl4.type.Var("B")]), new pl4.type.Term("length", [new pl4.type.Var("X"), new pl4.type.Var("B"), new pl4.type.Var("N")])]))
            ],
            "replicate/3": function(thread, point, atom) {
              var elem = atom.args[0], times = atom.args[1], list = atom.args[2];
              if (pl4.type.is_variable(times)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_integer(times)) {
                thread.throw_error(pl4.error.type("integer", times, atom.indicator));
              } else if (times.value < 0) {
                thread.throw_error(pl4.error.domain("not_less_than_zero", times, atom.indicator));
              } else if (!pl4.type.is_variable(list) && !pl4.type.is_list(list)) {
                thread.throw_error(pl4.error.type("list", list, atom.indicator));
              } else {
                var replicate = new pl4.type.Term("[]");
                for (var i = 0; i < times.value; i++) {
                  replicate = new pl4.type.Term(".", [elem, replicate]);
                }
                thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [replicate, list])), point.substitution, point)]);
              }
            },
            "sort/2": function(thread, point, atom) {
              var list = atom.args[0], expected = atom.args[1];
              if (pl4.type.is_variable(list)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_variable(expected) && !pl4.type.is_fully_list(expected)) {
                thread.throw_error(pl4.error.type("list", expected, atom.indicator));
              } else {
                var arr = [];
                var pointer = list;
                while (pointer.indicator === "./2") {
                  arr.push(pointer.args[0]);
                  pointer = pointer.args[1];
                }
                if (pl4.type.is_variable(pointer)) {
                  thread.throw_error(pl4.error.instantiation(atom.indicator));
                } else if (!pl4.type.is_empty_list(pointer)) {
                  thread.throw_error(pl4.error.type("list", list, atom.indicator));
                } else {
                  var sorted_arr = arr.sort(pl4.compare);
                  for (var i = sorted_arr.length - 1; i > 0; i--) {
                    if (sorted_arr[i].equals(sorted_arr[i - 1]))
                      sorted_arr.splice(i, 1);
                  }
                  var sorted_list = new pl4.type.Term("[]");
                  for (var i = sorted_arr.length - 1; i >= 0; i--) {
                    sorted_list = new pl4.type.Term(".", [sorted_arr[i], sorted_list]);
                  }
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [sorted_list, expected])), point.substitution, point)]);
                }
              }
            },
            "msort/2": function(thread, point, atom) {
              var list = atom.args[0], expected = atom.args[1];
              if (pl4.type.is_variable(list)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_variable(expected) && !pl4.type.is_fully_list(expected)) {
                thread.throw_error(pl4.error.type("list", expected, atom.indicator));
              } else {
                var arr = [];
                var pointer = list;
                while (pointer.indicator === "./2") {
                  arr.push(pointer.args[0]);
                  pointer = pointer.args[1];
                }
                if (pl4.type.is_variable(pointer)) {
                  thread.throw_error(pl4.error.instantiation(atom.indicator));
                } else if (!pl4.type.is_empty_list(pointer)) {
                  thread.throw_error(pl4.error.type("list", list, atom.indicator));
                } else {
                  var sorted_arr = arr.sort(pl4.compare);
                  var sorted_list = new pl4.type.Term("[]");
                  for (var i = sorted_arr.length - 1; i >= 0; i--) {
                    sorted_list = new pl4.type.Term(".", [sorted_arr[i], sorted_list]);
                  }
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [sorted_list, expected])), point.substitution, point)]);
                }
              }
            },
            "keysort/2": function(thread, point, atom) {
              var list = atom.args[0], expected = atom.args[1];
              if (pl4.type.is_variable(list)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_variable(expected) && !pl4.type.is_fully_list(expected)) {
                thread.throw_error(pl4.error.type("list", expected, atom.indicator));
              } else {
                var arr = [];
                var elem;
                var pointer = list;
                while (pointer.indicator === "./2") {
                  elem = pointer.args[0];
                  if (pl4.type.is_variable(elem)) {
                    thread.throw_error(pl4.error.instantiation(atom.indicator));
                    return;
                  } else if (!pl4.type.is_term(elem) || elem.indicator !== "-/2") {
                    thread.throw_error(pl4.error.type("pair", elem, atom.indicator));
                    return;
                  }
                  elem.args[0].pair = elem.args[1];
                  arr.push(elem.args[0]);
                  pointer = pointer.args[1];
                }
                if (pl4.type.is_variable(pointer)) {
                  thread.throw_error(pl4.error.instantiation(atom.indicator));
                } else if (!pl4.type.is_empty_list(pointer)) {
                  thread.throw_error(pl4.error.type("list", list, atom.indicator));
                } else {
                  var sorted_arr = arr.sort(pl4.compare);
                  var sorted_list = new pl4.type.Term("[]");
                  for (var i = sorted_arr.length - 1; i >= 0; i--) {
                    sorted_list = new pl4.type.Term(".", [new pl4.type.Term("-", [sorted_arr[i], sorted_arr[i].pair]), sorted_list]);
                    delete sorted_arr[i].pair;
                  }
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [sorted_list, expected])), point.substitution, point)]);
                }
              }
            },
            "take/3": function(thread, point, atom) {
              var number = atom.args[0], list = atom.args[1], take = atom.args[2];
              if (pl4.type.is_variable(list) || pl4.type.is_variable(number)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_list(list)) {
                thread.throw_error(pl4.error.type("list", list, atom.indicator));
              } else if (!pl4.type.is_integer(number)) {
                thread.throw_error(pl4.error.type("integer", number, atom.indicator));
              } else if (!pl4.type.is_variable(take) && !pl4.type.is_list(take)) {
                thread.throw_error(pl4.error.type("list", take, atom.indicator));
              } else {
                var i = number.value;
                var arr = [];
                var pointer = list;
                while (i > 0 && pointer.indicator === "./2") {
                  arr.push(pointer.args[0]);
                  pointer = pointer.args[1];
                  i--;
                }
                if (i === 0) {
                  var new_list = new pl4.type.Term("[]");
                  for (var i = arr.length - 1; i >= 0; i--) {
                    new_list = new pl4.type.Term(".", [arr[i], new_list]);
                  }
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [new_list, take])), point.substitution, point)]);
                }
              }
            },
            "drop/3": function(thread, point, atom) {
              var number = atom.args[0], list = atom.args[1], drop = atom.args[2];
              if (pl4.type.is_variable(list) || pl4.type.is_variable(number)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_list(list)) {
                thread.throw_error(pl4.error.type("list", list, atom.indicator));
              } else if (!pl4.type.is_integer(number)) {
                thread.throw_error(pl4.error.type("integer", number, atom.indicator));
              } else if (!pl4.type.is_variable(drop) && !pl4.type.is_list(drop)) {
                thread.throw_error(pl4.error.type("list", drop, atom.indicator));
              } else {
                var i = number.value;
                var arr = [];
                var pointer = list;
                while (i > 0 && pointer.indicator === "./2") {
                  arr.push(pointer.args[0]);
                  pointer = pointer.args[1];
                  i--;
                }
                if (i === 0)
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [pointer, drop])), point.substitution, point)]);
              }
            },
            "reverse/2": function(thread, point, atom) {
              var list = atom.args[0], reversed = atom.args[1];
              var ins_list = pl4.type.is_instantiated_list(list);
              var ins_reversed = pl4.type.is_instantiated_list(reversed);
              if (pl4.type.is_variable(list) && pl4.type.is_variable(reversed)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else if (!pl4.type.is_variable(list) && !pl4.type.is_fully_list(list)) {
                thread.throw_error(pl4.error.type("list", list, atom.indicator));
              } else if (!pl4.type.is_variable(reversed) && !pl4.type.is_fully_list(reversed)) {
                thread.throw_error(pl4.error.type("list", reversed, atom.indicator));
              } else if (!ins_list && !ins_reversed) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else {
                var pointer = ins_list ? list : reversed;
                var new_reversed = new pl4.type.Term("[]", []);
                while (pointer.indicator === "./2") {
                  new_reversed = new pl4.type.Term(".", [pointer.args[0], new_reversed]);
                  pointer = pointer.args[1];
                }
                thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [new_reversed, ins_list ? reversed : list])), point.substitution, point)]);
              }
            },
            "list_to_set/2": function(thread, point, atom) {
              var list = atom.args[0], lset = atom.args[1];
              if (pl4.type.is_variable(list)) {
                thread.throw_error(pl4.error.instantiation(atom.indicator));
              } else {
                var pointer = list;
                var elems = [];
                while (pointer.indicator === "./2") {
                  elems.push(pointer.args[0]);
                  pointer = pointer.args[1];
                }
                if (pl4.type.is_variable(pointer)) {
                  thread.throw_error(pl4.error.instantiation(atom.indicator));
                } else if (!pl4.type.is_term(pointer) || pointer.indicator !== "[]/0") {
                  thread.throw_error(pl4.error.type("list", list, atom.indicator));
                } else {
                  var arr = [], nub = new pl4.type.Term("[]", []);
                  var match;
                  for (var i = 0; i < elems.length; i++) {
                    match = false;
                    for (var j = 0; j < arr.length && !match; j++) {
                      match = pl4.compare(elems[i], arr[j]) === 0;
                    }
                    if (!match)
                      arr.push(elems[i]);
                  }
                  for (i = arr.length - 1; i >= 0; i--)
                    nub = new pl4.type.Term(".", [arr[i], nub]);
                  thread.prepend([new pl4.type.State(point.goal.replace(new pl4.type.Term("=", [lset, nub])), point.substitution, point)]);
                }
              }
            }
          };
        };
        var exports2 = ["append/2", "append/3", "member/2", "permutation/2", "maplist/2", "maplist/3", "maplist/4", "maplist/5", "maplist/6", "maplist/7", "maplist/8", "include/3", "exclude/3", "foldl/4", "sum_list/2", "max_list/2", "min_list/2", "prod_list/2", "last/2", "prefix/2", "nth0/3", "nth1/3", "nth0/4", "nth1/4", "length/2", "replicate/3", "select/3", "sort/2", "msort/2", "keysort/2", "take/3", "drop/3", "reverse/2", "list_to_set/2"];
        if (typeof module !== "undefined") {
          module.exports = function(p) {
            pl4 = p;
            new pl4.type.Module("lists", predicates(), exports2);
          };
        } else {
          new pl4.type.Module("lists", predicates(), exports2);
        }
      })(pl3);
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/readline-sync-npm-1.4.9-a685324904-cedd48f422.zip/node_modules/readline-sync/lib/readline-sync.js
  var require_readline_sync = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/readline-sync-npm-1.4.9-a685324904-cedd48f422.zip/node_modules/readline-sync/lib/readline-sync.js"(exports) {
      "use strict";
      var IS_WIN = process.platform === "win32";
      var ALGORITHM_CIPHER = "aes-256-cbc";
      var ALGORITHM_HASH = "sha256";
      var DEFAULT_ERR_MSG = "The current environment doesn't support interactive reading from TTY.";
      var fs = require("fs");
      var TTY = process.binding("tty_wrap").TTY;
      var childProc = require("child_process");
      var pathUtil = require("path");
      var defaultOptions = {
        prompt: "> ",
        hideEchoBack: false,
        mask: "*",
        limit: [],
        limitMessage: "Input another, please.$<( [)limit(])>",
        defaultInput: "",
        trueValue: [],
        falseValue: [],
        caseSensitive: false,
        keepWhitespace: false,
        encoding: "utf8",
        bufferSize: 1024,
        print: void 0,
        history: true,
        cd: false,
        phContent: void 0,
        preCheck: void 0
      };
      var fdR = "none";
      var fdW;
      var ttyR;
      var isRawMode = false;
      var extHostPath;
      var extHostArgs;
      var tempdir;
      var salt = 0;
      var lastInput = "";
      var inputHistory = [];
      var rawInput;
      var _DBG_useExt = false;
      var _DBG_checkOptions = false;
      var _DBG_checkMethod = false;
      function getHostArgs(options) {
        function encodeArg(arg) {
          return arg.replace(/[^\w\u0080-\uFFFF]/g, function(chr) {
            return "#" + chr.charCodeAt(0) + ";";
          });
        }
        return extHostArgs.concat(function(conf) {
          var args = [];
          Object.keys(conf).forEach(function(optionName) {
            if (conf[optionName] === "boolean") {
              if (options[optionName]) {
                args.push("--" + optionName);
              }
            } else if (conf[optionName] === "string") {
              if (options[optionName]) {
                args.push("--" + optionName, encodeArg(options[optionName]));
              }
            }
          });
          return args;
        }({
          display: "string",
          displayOnly: "boolean",
          keyIn: "boolean",
          hideEchoBack: "boolean",
          mask: "string",
          limit: "string",
          caseSensitive: "boolean"
        }));
      }
      function _execFileSync(options, execOptions) {
        function getTempfile(name) {
          var filepath, suffix = "", fd;
          tempdir = tempdir || require("os").tmpdir();
          while (true) {
            filepath = pathUtil.join(tempdir, name + suffix);
            try {
              fd = fs.openSync(filepath, "wx");
            } catch (e) {
              if (e.code === "EEXIST") {
                suffix++;
                continue;
              } else {
                throw e;
              }
            }
            fs.closeSync(fd);
            break;
          }
          return filepath;
        }
        var hostArgs, shellPath, shellArgs, res = {}, exitCode, extMessage, pathStdout = getTempfile("readline-sync.stdout"), pathStderr = getTempfile("readline-sync.stderr"), pathExit = getTempfile("readline-sync.exit"), pathDone = getTempfile("readline-sync.done"), crypto = require("crypto"), shasum, decipher, password;
        shasum = crypto.createHash(ALGORITHM_HASH);
        shasum.update("" + process.pid + salt++ + Math.random());
        password = shasum.digest("hex");
        decipher = crypto.createDecipher(ALGORITHM_CIPHER, password);
        hostArgs = getHostArgs(options);
        if (IS_WIN) {
          shellPath = process.env.ComSpec || "cmd.exe";
          process.env.Q = '"';
          shellArgs = [
            "/V:ON",
            "/S",
            "/C",
            "(%Q%" + shellPath + "%Q% /V:ON /S /C %Q%%Q%" + extHostPath + "%Q%" + hostArgs.map(function(arg) {
              return " %Q%" + arg + "%Q%";
            }).join("") + " & (echo !ERRORLEVEL!)>%Q%" + pathExit + "%Q%%Q%) 2>%Q%" + pathStderr + "%Q% |%Q%" + process.execPath + "%Q% %Q%" + __dirname + "\\encrypt.js%Q% %Q%" + ALGORITHM_CIPHER + "%Q% %Q%" + password + "%Q% >%Q%" + pathStdout + "%Q% & (echo 1)>%Q%" + pathDone + "%Q%"
          ];
        } else {
          shellPath = "/bin/sh";
          shellArgs = [
            "-c",
            '("' + extHostPath + '"' + hostArgs.map(function(arg) {
              return " '" + arg.replace(/'/g, "'\\''") + "'";
            }).join("") + '; echo $?>"' + pathExit + '") 2>"' + pathStderr + '" |"' + process.execPath + '" "' + __dirname + '/encrypt.js" "' + ALGORITHM_CIPHER + '" "' + password + '" >"' + pathStdout + '"; echo 1 >"' + pathDone + '"'
          ];
        }
        if (_DBG_checkMethod) {
          _DBG_checkMethod("_execFileSync", hostArgs);
        }
        try {
          childProc.spawn(shellPath, shellArgs, execOptions);
        } catch (e) {
          res.error = new Error(e.message);
          res.error.method = "_execFileSync - spawn";
          res.error.program = shellPath;
          res.error.args = shellArgs;
        }
        while (fs.readFileSync(pathDone, {encoding: options.encoding}).trim() !== "1") {
        }
        if ((exitCode = fs.readFileSync(pathExit, {encoding: options.encoding}).trim()) === "0") {
          res.input = decipher.update(fs.readFileSync(pathStdout, {encoding: "binary"}), "hex", options.encoding) + decipher.final(options.encoding);
        } else {
          extMessage = fs.readFileSync(pathStderr, {encoding: options.encoding}).trim();
          res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? "\n" + extMessage : ""));
          res.error.method = "_execFileSync";
          res.error.program = shellPath;
          res.error.args = shellArgs;
          res.error.extMessage = extMessage;
          res.error.exitCode = +exitCode;
        }
        fs.unlinkSync(pathStdout);
        fs.unlinkSync(pathStderr);
        fs.unlinkSync(pathExit);
        fs.unlinkSync(pathDone);
        return res;
      }
      function readlineExt(options) {
        var hostArgs, res = {}, extMessage, execOptions = {env: process.env, encoding: options.encoding};
        if (!extHostPath) {
          if (IS_WIN) {
            if (process.env.PSModulePath) {
              extHostPath = "powershell.exe";
              extHostArgs = ["-ExecutionPolicy", "Bypass", "-File", __dirname + "\\read.ps1"];
            } else {
              extHostPath = "cscript.exe";
              extHostArgs = ["//nologo", __dirname + "\\read.cs.js"];
            }
          } else {
            extHostPath = "/bin/sh";
            extHostArgs = [__dirname + "/read.sh"];
          }
        }
        if (IS_WIN && !process.env.PSModulePath) {
          execOptions.stdio = [process.stdin];
        }
        if (childProc.execFileSync) {
          hostArgs = getHostArgs(options);
          if (_DBG_checkMethod) {
            _DBG_checkMethod("execFileSync", hostArgs);
          }
          try {
            res.input = childProc.execFileSync(extHostPath, hostArgs, execOptions);
          } catch (e) {
            extMessage = e.stderr ? (e.stderr + "").trim() : "";
            res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? "\n" + extMessage : ""));
            res.error.method = "execFileSync";
            res.error.program = extHostPath;
            res.error.args = hostArgs;
            res.error.extMessage = extMessage;
            res.error.exitCode = e.status;
            res.error.code = e.code;
            res.error.signal = e.signal;
          }
        } else {
          res = _execFileSync(options, execOptions);
        }
        if (!res.error) {
          res.input = res.input.replace(/^\s*'|'\s*$/g, "");
          options.display = "";
        }
        return res;
      }
      function _readlineSync(options) {
        var input = "", displaySave = options.display, silent = !options.display && options.keyIn && options.hideEchoBack && !options.mask;
        function tryExt() {
          var res = readlineExt(options);
          if (res.error) {
            throw res.error;
          }
          return res.input;
        }
        if (_DBG_checkOptions) {
          _DBG_checkOptions(options);
        }
        (function() {
          var fsB, constants, verNum;
          function getFsB() {
            if (!fsB) {
              fsB = process.binding("fs");
              constants = process.binding("constants");
            }
            return fsB;
          }
          if (typeof fdR !== "string") {
            return;
          }
          fdR = null;
          if (IS_WIN) {
            verNum = function(ver) {
              var nums = ver.replace(/^\D+/, "").split(".");
              var verNum2 = 0;
              if (nums[0] = +nums[0]) {
                verNum2 += nums[0] * 1e4;
              }
              if (nums[1] = +nums[1]) {
                verNum2 += nums[1] * 100;
              }
              if (nums[2] = +nums[2]) {
                verNum2 += nums[2];
              }
              return verNum2;
            }(process.version);
            if (!(verNum >= 20302 && verNum < 40204 || verNum >= 5e4 && verNum < 50100 || verNum >= 50600 && verNum < 60200) && process.stdin.isTTY) {
              process.stdin.pause();
              fdR = process.stdin.fd;
              ttyR = process.stdin._handle;
            } else {
              try {
                fdR = getFsB().open("CONIN$", constants.O_RDWR, parseInt("0666", 8));
                ttyR = new TTY(fdR, true);
              } catch (e) {
              }
            }
            if (process.stdout.isTTY) {
              fdW = process.stdout.fd;
            } else {
              try {
                fdW = fs.openSync("\\\\.\\CON", "w");
              } catch (e) {
              }
              if (typeof fdW !== "number") {
                try {
                  fdW = getFsB().open("CONOUT$", constants.O_RDWR, parseInt("0666", 8));
                } catch (e) {
                }
              }
            }
          } else {
            if (process.stdin.isTTY) {
              process.stdin.pause();
              try {
                fdR = fs.openSync("/dev/tty", "r");
                ttyR = process.stdin._handle;
              } catch (e) {
              }
            } else {
              try {
                fdR = fs.openSync("/dev/tty", "r");
                ttyR = new TTY(fdR, false);
              } catch (e) {
              }
            }
            if (process.stdout.isTTY) {
              fdW = process.stdout.fd;
            } else {
              try {
                fdW = fs.openSync("/dev/tty", "w");
              } catch (e) {
              }
            }
          }
        })();
        (function() {
          var atEol, limit, isCooked = !options.hideEchoBack && !options.keyIn, buffer, reqSize, readSize, chunk, line;
          rawInput = "";
          function setRawMode(mode) {
            if (mode === isRawMode) {
              return true;
            }
            if (ttyR.setRawMode(mode) !== 0) {
              return false;
            }
            isRawMode = mode;
            return true;
          }
          if (_DBG_useExt || !ttyR || typeof fdW !== "number" && (options.display || !isCooked)) {
            input = tryExt();
            return;
          }
          if (options.display) {
            fs.writeSync(fdW, options.display);
            options.display = "";
          }
          if (options.displayOnly) {
            return;
          }
          if (!setRawMode(!isCooked)) {
            input = tryExt();
            return;
          }
          reqSize = options.keyIn ? 1 : options.bufferSize;
          buffer = Buffer.allocUnsafe && Buffer.alloc ? Buffer.alloc(reqSize) : new Buffer(reqSize);
          if (options.keyIn && options.limit) {
            limit = new RegExp("[^" + options.limit + "]", "g" + (options.caseSensitive ? "" : "i"));
          }
          while (true) {
            readSize = 0;
            try {
              readSize = fs.readSync(fdR, buffer, 0, reqSize);
            } catch (e) {
              if (e.code !== "EOF") {
                setRawMode(false);
                input += tryExt();
                return;
              }
            }
            if (readSize > 0) {
              chunk = buffer.toString(options.encoding, 0, readSize);
              rawInput += chunk;
            } else {
              chunk = "\n";
              rawInput += String.fromCharCode(0);
            }
            if (chunk && typeof (line = (chunk.match(/^(.*?)[\r\n]/) || [])[1]) === "string") {
              chunk = line;
              atEol = true;
            }
            if (chunk) {
              chunk = chunk.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "");
            }
            if (chunk && limit) {
              chunk = chunk.replace(limit, "");
            }
            if (chunk) {
              if (!isCooked) {
                if (!options.hideEchoBack) {
                  fs.writeSync(fdW, chunk);
                } else if (options.mask) {
                  fs.writeSync(fdW, new Array(chunk.length + 1).join(options.mask));
                }
              }
              input += chunk;
            }
            if (!options.keyIn && atEol || options.keyIn && input.length >= reqSize) {
              break;
            }
          }
          if (!isCooked && !silent) {
            fs.writeSync(fdW, "\n");
          }
          setRawMode(false);
        })();
        if (options.print && !silent) {
          options.print(displaySave + (options.displayOnly ? "" : (options.hideEchoBack ? new Array(input.length + 1).join(options.mask) : input) + "\n"), options.encoding);
        }
        return options.displayOnly ? "" : lastInput = options.keepWhitespace || options.keyIn ? input : input.trim();
      }
      function flattenArray(array, validator) {
        var flatArray = [];
        function _flattenArray(array2) {
          if (array2 == null) {
            return;
          } else if (Array.isArray(array2)) {
            array2.forEach(_flattenArray);
          } else if (!validator || validator(array2)) {
            flatArray.push(array2);
          }
        }
        _flattenArray(array);
        return flatArray;
      }
      function escapePattern(pattern) {
        return pattern.replace(/[\x00-\x7f]/g, function(s) {
          return "\\x" + ("00" + s.charCodeAt().toString(16)).substr(-2);
        });
      }
      function margeOptions() {
        var optionsList = Array.prototype.slice.call(arguments), optionNames, fromDefault;
        if (optionsList.length && typeof optionsList[0] === "boolean") {
          fromDefault = optionsList.shift();
          if (fromDefault) {
            optionNames = Object.keys(defaultOptions);
            optionsList.unshift(defaultOptions);
          }
        }
        return optionsList.reduce(function(options, optionsPart) {
          if (optionsPart == null) {
            return options;
          }
          if (optionsPart.hasOwnProperty("noEchoBack") && !optionsPart.hasOwnProperty("hideEchoBack")) {
            optionsPart.hideEchoBack = optionsPart.noEchoBack;
            delete optionsPart.noEchoBack;
          }
          if (optionsPart.hasOwnProperty("noTrim") && !optionsPart.hasOwnProperty("keepWhitespace")) {
            optionsPart.keepWhitespace = optionsPart.noTrim;
            delete optionsPart.noTrim;
          }
          if (!fromDefault) {
            optionNames = Object.keys(optionsPart);
          }
          optionNames.forEach(function(optionName) {
            var value;
            if (!optionsPart.hasOwnProperty(optionName)) {
              return;
            }
            value = optionsPart[optionName];
            switch (optionName) {
              case "mask":
              case "limitMessage":
              case "defaultInput":
              case "encoding":
                value = value != null ? value + "" : "";
                if (value && optionName !== "limitMessage") {
                  value = value.replace(/[\r\n]/g, "");
                }
                options[optionName] = value;
                break;
              case "bufferSize":
                if (!isNaN(value = parseInt(value, 10)) && typeof value === "number") {
                  options[optionName] = value;
                }
                break;
              case "displayOnly":
              case "keyIn":
              case "hideEchoBack":
              case "caseSensitive":
              case "keepWhitespace":
              case "history":
              case "cd":
                options[optionName] = !!value;
                break;
              case "limit":
              case "trueValue":
              case "falseValue":
                options[optionName] = flattenArray(value, function(value2) {
                  var type = typeof value2;
                  return type === "string" || type === "number" || type === "function" || value2 instanceof RegExp;
                }).map(function(value2) {
                  return typeof value2 === "string" ? value2.replace(/[\r\n]/g, "") : value2;
                });
                break;
              case "print":
              case "phContent":
              case "preCheck":
                options[optionName] = typeof value === "function" ? value : void 0;
                break;
              case "prompt":
              case "display":
                options[optionName] = value != null ? value : "";
                break;
            }
          });
          return options;
        }, {});
      }
      function isMatched(res, comps, caseSensitive) {
        return comps.some(function(comp) {
          var type = typeof comp;
          return type === "string" ? caseSensitive ? res === comp : res.toLowerCase() === comp.toLowerCase() : type === "number" ? parseFloat(res) === comp : type === "function" ? comp(res) : comp instanceof RegExp ? comp.test(res) : false;
        });
      }
      function replaceHomePath(path, expand) {
        var homePath = pathUtil.normalize(IS_WIN ? (process.env.HOMEDRIVE || "") + (process.env.HOMEPATH || "") : process.env.HOME || "").replace(/[\/\\]+$/, "");
        path = pathUtil.normalize(path);
        return expand ? path.replace(/^~(?=\/|\\|$)/, homePath) : path.replace(new RegExp("^" + escapePattern(homePath) + "(?=\\/|\\\\|$)", IS_WIN ? "i" : ""), "~");
      }
      function replacePlaceholder(text, generator) {
        var PTN_INNER = "(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?", rePlaceholder = new RegExp("(\\$)?(\\$<" + PTN_INNER + ">)", "g"), rePlaceholderCompat = new RegExp("(\\$)?(\\$\\{" + PTN_INNER + "\\})", "g");
        function getPlaceholderText(s, escape2, placeholder, pre, param, post) {
          var text2;
          return escape2 || typeof (text2 = generator(param)) !== "string" ? placeholder : text2 ? (pre || "") + text2 + (post || "") : "";
        }
        return text.replace(rePlaceholder, getPlaceholderText).replace(rePlaceholderCompat, getPlaceholderText);
      }
      function array2charlist(array, caseSensitive, collectSymbols) {
        var values, group = [], groupClass = -1, charCode = 0, symbols = "", suppressed;
        function addGroup(groups, group2) {
          if (group2.length > 3) {
            groups.push(group2[0] + "..." + group2[group2.length - 1]);
            suppressed = true;
          } else if (group2.length) {
            groups = groups.concat(group2);
          }
          return groups;
        }
        values = array.reduce(function(chars, value) {
          return chars.concat((value + "").split(""));
        }, []).reduce(function(groups, curChar) {
          var curGroupClass, curCharCode;
          if (!caseSensitive) {
            curChar = curChar.toLowerCase();
          }
          curGroupClass = /^\d$/.test(curChar) ? 1 : /^[A-Z]$/.test(curChar) ? 2 : /^[a-z]$/.test(curChar) ? 3 : 0;
          if (collectSymbols && curGroupClass === 0) {
            symbols += curChar;
          } else {
            curCharCode = curChar.charCodeAt(0);
            if (curGroupClass && curGroupClass === groupClass && curCharCode === charCode + 1) {
              group.push(curChar);
            } else {
              groups = addGroup(groups, group);
              group = [curChar];
              groupClass = curGroupClass;
            }
            charCode = curCharCode;
          }
          return groups;
        }, []);
        values = addGroup(values, group);
        if (symbols) {
          values.push(symbols);
          suppressed = true;
        }
        return {values, suppressed};
      }
      function joinChunks(chunks, suppressed) {
        return chunks.join(chunks.length > 2 ? ", " : suppressed ? " / " : "/");
      }
      function getPhContent(param, options) {
        var text, values, resCharlist = {}, arg;
        if (options.phContent) {
          text = options.phContent(param, options);
        }
        if (typeof text !== "string") {
          switch (param) {
            case "hideEchoBack":
            case "mask":
            case "defaultInput":
            case "caseSensitive":
            case "keepWhitespace":
            case "encoding":
            case "bufferSize":
            case "history":
            case "cd":
              text = !options.hasOwnProperty(param) ? "" : typeof options[param] === "boolean" ? options[param] ? "on" : "off" : options[param] + "";
              break;
            case "limit":
            case "trueValue":
            case "falseValue":
              values = options[options.hasOwnProperty(param + "Src") ? param + "Src" : param];
              if (options.keyIn) {
                resCharlist = array2charlist(values, options.caseSensitive);
                values = resCharlist.values;
              } else {
                values = values.filter(function(value) {
                  var type = typeof value;
                  return type === "string" || type === "number";
                });
              }
              text = joinChunks(values, resCharlist.suppressed);
              break;
            case "limitCount":
            case "limitCountNotZero":
              text = options[options.hasOwnProperty("limitSrc") ? "limitSrc" : "limit"].length;
              text = text || param !== "limitCountNotZero" ? text + "" : "";
              break;
            case "lastInput":
              text = lastInput;
              break;
            case "cwd":
            case "CWD":
            case "cwdHome":
              text = process.cwd();
              if (param === "CWD") {
                text = pathUtil.basename(text);
              } else if (param === "cwdHome") {
                text = replaceHomePath(text);
              }
              break;
            case "date":
            case "time":
            case "localeDate":
            case "localeTime":
              text = new Date()["to" + param.replace(/^./, function(str) {
                return str.toUpperCase();
              }) + "String"]();
              break;
            default:
              if (typeof (arg = (param.match(/^history_m(\d+)$/) || [])[1]) === "string") {
                text = inputHistory[inputHistory.length - arg] || "";
              }
          }
        }
        return text;
      }
      function getPhCharlist(param) {
        var matches = /^(.)-(.)$/.exec(param), text = "", from, to, code, step;
        if (!matches) {
          return null;
        }
        from = matches[1].charCodeAt(0);
        to = matches[2].charCodeAt(0);
        step = from < to ? 1 : -1;
        for (code = from; code !== to + step; code += step) {
          text += String.fromCharCode(code);
        }
        return text;
      }
      function parseCl(cl) {
        var reToken = new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g), matches, taken = "", args = [], part;
        cl = cl.trim();
        while (matches = reToken.exec(cl)) {
          part = matches[3] || matches[4] || "";
          if (matches[1]) {
            args.push(taken);
            taken = "";
          }
          taken += part;
        }
        if (taken) {
          args.push(taken);
        }
        return args;
      }
      function toBool(res, options) {
        return options.trueValue.length && isMatched(res, options.trueValue, options.caseSensitive) ? true : options.falseValue.length && isMatched(res, options.falseValue, options.caseSensitive) ? false : res;
      }
      function getValidLine(options) {
        var res, forceNext, limitMessage, matches, histInput, args, resCheck;
        function _getPhContent(param) {
          return getPhContent(param, options);
        }
        function addDisplay(text) {
          options.display += (/[^\r\n]$/.test(options.display) ? "\n" : "") + text;
        }
        options.limitSrc = options.limit;
        options.displaySrc = options.display;
        options.limit = "";
        options.display = replacePlaceholder(options.display + "", _getPhContent);
        while (true) {
          res = _readlineSync(options);
          forceNext = false;
          limitMessage = "";
          if (options.defaultInput && !res) {
            res = options.defaultInput;
          }
          if (options.history) {
            if (matches = /^\s*\!(?:\!|-1)(:p)?\s*$/.exec(res)) {
              histInput = inputHistory[0] || "";
              if (matches[1]) {
                forceNext = true;
              } else {
                res = histInput;
              }
              addDisplay(histInput + "\n");
              if (!forceNext) {
                options.displayOnly = true;
                _readlineSync(options);
                options.displayOnly = false;
              }
            } else if (res && res !== inputHistory[inputHistory.length - 1]) {
              inputHistory = [res];
            }
          }
          if (!forceNext && options.cd && res) {
            args = parseCl(res);
            switch (args[0].toLowerCase()) {
              case "cd":
                if (args[1]) {
                  try {
                    process.chdir(replaceHomePath(args[1], true));
                  } catch (e) {
                    addDisplay(e + "");
                  }
                }
                forceNext = true;
                break;
              case "pwd":
                addDisplay(process.cwd());
                forceNext = true;
                break;
            }
          }
          if (!forceNext && options.preCheck) {
            resCheck = options.preCheck(res, options);
            res = resCheck.res;
            if (resCheck.forceNext) {
              forceNext = true;
            }
          }
          if (!forceNext) {
            if (!options.limitSrc.length || isMatched(res, options.limitSrc, options.caseSensitive)) {
              break;
            }
            if (options.limitMessage) {
              limitMessage = replacePlaceholder(options.limitMessage, _getPhContent);
            }
          }
          addDisplay((limitMessage ? limitMessage + "\n" : "") + replacePlaceholder(options.displaySrc + "", _getPhContent));
        }
        return toBool(res, options);
      }
      exports._DBG_set_useExt = function(val) {
        _DBG_useExt = val;
      };
      exports._DBG_set_checkOptions = function(val) {
        _DBG_checkOptions = val;
      };
      exports._DBG_set_checkMethod = function(val) {
        _DBG_checkMethod = val;
      };
      exports._DBG_clearHistory = function() {
        lastInput = "";
        inputHistory = [];
      };
      exports.setDefaultOptions = function(options) {
        defaultOptions = margeOptions(true, options);
        return margeOptions(true);
      };
      exports.question = function(query, options) {
        return getValidLine(margeOptions(margeOptions(true, options), {
          display: query
        }));
      };
      exports.prompt = function(options) {
        var readOptions = margeOptions(true, options);
        readOptions.display = readOptions.prompt;
        return getValidLine(readOptions);
      };
      exports.keyIn = function(query, options) {
        var readOptions = margeOptions(margeOptions(true, options), {
          display: query,
          keyIn: true,
          keepWhitespace: true
        });
        readOptions.limitSrc = readOptions.limit.filter(function(value) {
          var type = typeof value;
          return type === "string" || type === "number";
        }).map(function(text) {
          return replacePlaceholder(text + "", getPhCharlist);
        });
        readOptions.limit = escapePattern(readOptions.limitSrc.join(""));
        ["trueValue", "falseValue"].forEach(function(optionName) {
          readOptions[optionName] = readOptions[optionName].reduce(function(comps, comp) {
            var type = typeof comp;
            if (type === "string" || type === "number") {
              comps = comps.concat((comp + "").split(""));
            } else {
              comps.push(comp);
            }
            return comps;
          }, []);
        });
        readOptions.display = replacePlaceholder(readOptions.display + "", function(param) {
          return getPhContent(param, readOptions);
        });
        return toBool(_readlineSync(readOptions), readOptions);
      };
      exports.questionEMail = function(query, options) {
        if (query == null) {
          query = "Input e-mail address: ";
        }
        return exports.question(query, margeOptions({
          hideEchoBack: false,
          limit: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          limitMessage: "Input valid e-mail address, please.",
          trueValue: null,
          falseValue: null
        }, options, {
          keepWhitespace: false,
          cd: false
        }));
      };
      exports.questionNewPassword = function(query, options) {
        var resCharlist, min, max, readOptions = margeOptions({
          hideEchoBack: true,
          mask: "*",
          limitMessage: "It can include: $<charlist>\nAnd the length must be: $<length>",
          trueValue: null,
          falseValue: null,
          caseSensitive: true
        }, options, {
          history: false,
          cd: false,
          phContent: function(param) {
            return param === "charlist" ? resCharlist.text : param === "length" ? min + "..." + max : null;
          }
        }), charlist, confirmMessage, unmatchMessage, limit, limitMessage, res1, res2;
        options = options || {};
        charlist = replacePlaceholder(options.charlist ? options.charlist + "" : "$<!-~>", getPhCharlist);
        if (isNaN(min = parseInt(options.min, 10)) || typeof min !== "number") {
          min = 12;
        }
        if (isNaN(max = parseInt(options.max, 10)) || typeof max !== "number") {
          max = 24;
        }
        limit = new RegExp("^[" + escapePattern(charlist) + "]{" + min + "," + max + "}$");
        resCharlist = array2charlist([charlist], readOptions.caseSensitive, true);
        resCharlist.text = joinChunks(resCharlist.values, resCharlist.suppressed);
        confirmMessage = options.confirmMessage != null ? options.confirmMessage : "Reinput a same one to confirm it: ";
        unmatchMessage = options.unmatchMessage != null ? options.unmatchMessage : "It differs from first one. Hit only the Enter key if you want to retry from first one.";
        if (query == null) {
          query = "Input new password: ";
        }
        limitMessage = readOptions.limitMessage;
        while (!res2) {
          readOptions.limit = limit;
          readOptions.limitMessage = limitMessage;
          res1 = exports.question(query, readOptions);
          readOptions.limit = [res1, ""];
          readOptions.limitMessage = unmatchMessage;
          res2 = exports.question(confirmMessage, readOptions);
        }
        return res1;
      };
      function _questionNum(query, options, parser) {
        var validValue;
        function getValidValue(value) {
          validValue = parser(value);
          return !isNaN(validValue) && typeof validValue === "number";
        }
        exports.question(query, margeOptions({
          limitMessage: "Input valid number, please."
        }, options, {
          limit: getValidValue,
          cd: false
        }));
        return validValue;
      }
      exports.questionInt = function(query, options) {
        return _questionNum(query, options, function(value) {
          return parseInt(value, 10);
        });
      };
      exports.questionFloat = function(query, options) {
        return _questionNum(query, options, parseFloat);
      };
      exports.questionPath = function(query, options) {
        var validPath, error = "", readOptions = margeOptions({
          hideEchoBack: false,
          limitMessage: "$<error(\n)>Input valid path, please.$<( Min:)min>$<( Max:)max>",
          history: true,
          cd: true
        }, options, {
          keepWhitespace: false,
          limit: function(value) {
            var exists, stat, res;
            value = replaceHomePath(value, true);
            error = "";
            function mkdirParents(dirPath) {
              dirPath.split(/\/|\\/).reduce(function(parents, dir) {
                var path = pathUtil.resolve(parents += dir + pathUtil.sep);
                if (!fs.existsSync(path)) {
                  fs.mkdirSync(path);
                } else if (!fs.statSync(path).isDirectory()) {
                  throw new Error("Non directory already exists: " + path);
                }
                return parents;
              }, "");
            }
            try {
              exists = fs.existsSync(value);
              validPath = exists ? fs.realpathSync(value) : pathUtil.resolve(value);
              if (!options.hasOwnProperty("exists") && !exists || typeof options.exists === "boolean" && options.exists !== exists) {
                error = (exists ? "Already exists" : "No such file or directory") + ": " + validPath;
                return false;
              }
              if (!exists && options.create) {
                if (options.isDirectory) {
                  mkdirParents(validPath);
                } else {
                  mkdirParents(pathUtil.dirname(validPath));
                  fs.closeSync(fs.openSync(validPath, "w"));
                }
                validPath = fs.realpathSync(validPath);
              }
              if (exists && (options.min || options.max || options.isFile || options.isDirectory)) {
                stat = fs.statSync(validPath);
                if (options.isFile && !stat.isFile()) {
                  error = "Not file: " + validPath;
                  return false;
                } else if (options.isDirectory && !stat.isDirectory()) {
                  error = "Not directory: " + validPath;
                  return false;
                } else if (options.min && stat.size < +options.min || options.max && stat.size > +options.max) {
                  error = "Size " + stat.size + " is out of range: " + validPath;
                  return false;
                }
              }
              if (typeof options.validate === "function" && (res = options.validate(validPath)) !== true) {
                if (typeof res === "string") {
                  error = res;
                }
                return false;
              }
            } catch (e) {
              error = e + "";
              return false;
            }
            return true;
          },
          phContent: function(param) {
            return param === "error" ? error : param !== "min" && param !== "max" ? null : options.hasOwnProperty(param) ? options[param] + "" : "";
          }
        });
        options = options || {};
        if (query == null) {
          query = 'Input path (you can "cd" and "pwd"): ';
        }
        exports.question(query, readOptions);
        return validPath;
      };
      function getClHandler(commandHandler, options) {
        var clHandler = {}, hIndex = {};
        if (typeof commandHandler === "object") {
          Object.keys(commandHandler).forEach(function(cmd) {
            if (typeof commandHandler[cmd] === "function") {
              hIndex[options.caseSensitive ? cmd : cmd.toLowerCase()] = commandHandler[cmd];
            }
          });
          clHandler.preCheck = function(res) {
            var cmdKey;
            clHandler.args = parseCl(res);
            cmdKey = clHandler.args[0] || "";
            if (!options.caseSensitive) {
              cmdKey = cmdKey.toLowerCase();
            }
            clHandler.hRes = cmdKey !== "_" && hIndex.hasOwnProperty(cmdKey) ? hIndex[cmdKey].apply(res, clHandler.args.slice(1)) : hIndex.hasOwnProperty("_") ? hIndex._.apply(res, clHandler.args) : null;
            return {res, forceNext: false};
          };
          if (!hIndex.hasOwnProperty("_")) {
            clHandler.limit = function() {
              var cmdKey = clHandler.args[0] || "";
              if (!options.caseSensitive) {
                cmdKey = cmdKey.toLowerCase();
              }
              return hIndex.hasOwnProperty(cmdKey);
            };
          }
        } else {
          clHandler.preCheck = function(res) {
            clHandler.args = parseCl(res);
            clHandler.hRes = typeof commandHandler === "function" ? commandHandler.apply(res, clHandler.args) : true;
            return {res, forceNext: false};
          };
        }
        return clHandler;
      }
      exports.promptCL = function(commandHandler, options) {
        var readOptions = margeOptions({
          hideEchoBack: false,
          limitMessage: "Requested command is not available.",
          caseSensitive: false,
          history: true
        }, options), clHandler = getClHandler(commandHandler, readOptions);
        readOptions.limit = clHandler.limit;
        readOptions.preCheck = clHandler.preCheck;
        exports.prompt(readOptions);
        return clHandler.args;
      };
      exports.promptLoop = function(inputHandler, options) {
        var readOptions = margeOptions({
          hideEchoBack: false,
          trueValue: null,
          falseValue: null,
          caseSensitive: false,
          history: true
        }, options);
        while (true) {
          if (inputHandler(exports.prompt(readOptions))) {
            break;
          }
        }
        return;
      };
      exports.promptCLLoop = function(commandHandler, options) {
        var readOptions = margeOptions({
          hideEchoBack: false,
          limitMessage: "Requested command is not available.",
          caseSensitive: false,
          history: true
        }, options), clHandler = getClHandler(commandHandler, readOptions);
        readOptions.limit = clHandler.limit;
        readOptions.preCheck = clHandler.preCheck;
        while (true) {
          exports.prompt(readOptions);
          if (clHandler.hRes) {
            break;
          }
        }
        return;
      };
      exports.promptSimShell = function(options) {
        return exports.prompt(margeOptions({
          hideEchoBack: false,
          history: true
        }, options, {
          prompt: function() {
            return IS_WIN ? "$<cwd>>" : (process.env.USER || "") + (process.env.HOSTNAME ? "@" + process.env.HOSTNAME.replace(/\..*$/, "") : "") + ":$<cwdHome>$ ";
          }()
        }));
      };
      function _keyInYN(query, options, limit) {
        var res;
        if (query == null) {
          query = "Are you sure? ";
        }
        if ((!options || options.guide !== false) && (query += "")) {
          query = query.replace(/\s*:?\s*$/, "") + " [y/n]: ";
        }
        res = exports.keyIn(query, margeOptions(options, {
          hideEchoBack: false,
          limit,
          trueValue: "y",
          falseValue: "n",
          caseSensitive: false
        }));
        return typeof res === "boolean" ? res : "";
      }
      exports.keyInYN = function(query, options) {
        return _keyInYN(query, options);
      };
      exports.keyInYNStrict = function(query, options) {
        return _keyInYN(query, options, "yn");
      };
      exports.keyInPause = function(query, options) {
        if (query == null) {
          query = "Continue...";
        }
        if ((!options || options.guide !== false) && (query += "")) {
          query = query.replace(/\s+$/, "") + " (Hit any key)";
        }
        exports.keyIn(query, margeOptions({
          limit: null
        }, options, {
          hideEchoBack: true,
          mask: ""
        }));
        return;
      };
      exports.keyInSelect = function(items, query, options) {
        var readOptions = margeOptions({
          hideEchoBack: false
        }, options, {
          trueValue: null,
          falseValue: null,
          caseSensitive: false,
          phContent: function(param) {
            return param === "itemsCount" ? items.length + "" : param === "firstItem" ? (items[0] + "").trim() : param === "lastItem" ? (items[items.length - 1] + "").trim() : null;
          }
        }), keylist = "", key2i = {}, charCode = 49, display = "\n";
        if (!Array.isArray(items) || !items.length || items.length > 35) {
          throw "`items` must be Array (max length: 35).";
        }
        items.forEach(function(item, i) {
          var key2 = String.fromCharCode(charCode);
          keylist += key2;
          key2i[key2] = i;
          display += "[" + key2 + "] " + (item + "").trim() + "\n";
          charCode = charCode === 57 ? 97 : charCode + 1;
        });
        if (!options || options.cancel !== false) {
          keylist += "0";
          key2i["0"] = -1;
          display += "[0] " + (options && options.cancel != null && typeof options.cancel !== "boolean" ? (options.cancel + "").trim() : "CANCEL") + "\n";
        }
        readOptions.limit = keylist;
        display += "\n";
        if (query == null) {
          query = "Choose one from list: ";
        }
        if (query += "") {
          if (!options || options.guide !== false) {
            query = query.replace(/\s*:?\s*$/, "") + " [$<limit>]: ";
          }
          display += query;
        }
        return key2i[exports.keyIn(display, readOptions).toLowerCase()];
      };
      exports.getRawInput = function() {
        return rawInput;
      };
      function _setOption(optionName, args) {
        var options;
        if (args.length) {
          options = {};
          options[optionName] = args[0];
        }
        return exports.setDefaultOptions(options)[optionName];
      }
      exports.setPrint = function() {
        return _setOption("print", arguments);
      };
      exports.setPrompt = function() {
        return _setOption("prompt", arguments);
      };
      exports.setEncoding = function() {
        return _setOption("encoding", arguments);
      };
      exports.setMask = function() {
        return _setOption("mask", arguments);
      };
      exports.setBufferSize = function() {
        return _setOption("bufferSize", arguments);
      };
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/tau-prolog-npm-0.2.66-b5d2420a05-6a61b37925.zip/node_modules/tau-prolog/modules/core.js
  var require_core = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/tau-prolog-npm-0.2.66-b5d2420a05-6a61b37925.zip/node_modules/tau-prolog/modules/core.js"(exports, module) {
      (function() {
        var version = {major: 0, minor: 2, patch: 66, status: "beta"};
        tau_file_system = {
          files: {},
          open: function(path, type, mode) {
            var file = tau_file_system.files[path];
            if (!file) {
              if (mode === "read")
                return null;
              file = {
                path,
                text: "",
                type,
                get: function(length, position) {
                  if (position === this.text.length) {
                    return "end_of_file";
                  } else if (position > this.text.length) {
                    return "end_of_file";
                  } else {
                    return this.text.substring(position, position + length);
                  }
                },
                put: function(text, position) {
                  if (position === "end_of_file") {
                    this.text += text;
                    return true;
                  } else if (position === "past_end_of_file") {
                    return null;
                  } else {
                    this.text = this.text.substring(0, position) + text + this.text.substring(position + text.length);
                    return true;
                  }
                },
                get_byte: function(position) {
                  if (position === "end_of_stream")
                    return -1;
                  var index = Math.floor(position / 2);
                  if (this.text.length <= index)
                    return -1;
                  var code = codePointAt(this.text[Math.floor(position / 2)], 0);
                  if (position % 2 === 0)
                    return code & 255;
                  else
                    return code / 256 >>> 0;
                },
                put_byte: function(byte, position) {
                  var index = position === "end_of_stream" ? this.text.length : Math.floor(position / 2);
                  if (this.text.length < index)
                    return null;
                  var code = this.text.length === index ? -1 : codePointAt(this.text[Math.floor(position / 2)], 0);
                  if (position % 2 === 0) {
                    code = code / 256 >>> 0;
                    code = (code & 255) << 8 | byte & 255;
                  } else {
                    code = code & 255;
                    code = (byte & 255) << 8 | code & 255;
                  }
                  if (this.text.length === index)
                    this.text += fromCodePoint(code);
                  else
                    this.text = this.text.substring(0, index) + fromCodePoint(code) + this.text.substring(index + 1);
                  return true;
                },
                flush: function() {
                  return true;
                },
                close: function() {
                  var file2 = tau_file_system.files[this.path];
                  if (!file2) {
                    return null;
                  } else {
                    return true;
                  }
                }
              };
              tau_file_system.files[path] = file;
            }
            if (mode === "write")
              file.text = "";
            return file;
          }
        };
        tau_user_input = {
          buffer: "",
          get: function(length, _) {
            var text;
            while (tau_user_input.buffer.length < length) {
              text = window.prompt();
              if (text) {
                tau_user_input.buffer += text;
              }
            }
            text = tau_user_input.buffer.substr(0, length);
            tau_user_input.buffer = tau_user_input.buffer.substr(length);
            return text;
          }
        };
        tau_user_output = {
          put: function(text, _) {
            console.log(text);
            return true;
          },
          flush: function() {
            return true;
          }
        };
        nodejs_file_system = {
          open: function(path, type, mode) {
            var fs = require("fs");
            var fd = fs.openSync(path, mode[0]);
            if (mode === "read" && !fs.existsSync(path))
              return null;
            return {
              get: function(length, position) {
                var buffer = new Buffer(length);
                fs.readSync(fd, buffer, 0, length, position);
                return buffer.toString();
              },
              put: function(text, position) {
                var buffer = Buffer.from(text);
                if (position === "end_of_file")
                  fs.writeSync(fd, buffer);
                else if (position === "past_end_of_file")
                  return null;
                else
                  fs.writeSync(fd, buffer, 0, buffer.length, position);
                return true;
              },
              get_byte: function(position) {
                return null;
              },
              put_byte: function(byte, position) {
                return null;
              },
              flush: function() {
                return true;
              },
              close: function() {
                fs.closeSync(fd);
                return true;
              }
            };
          }
        };
        nodejs_user_input = {
          buffer: "",
          get: function(length, _) {
            var text;
            var readlineSync = require_readline_sync();
            while (nodejs_user_input.buffer.length < length)
              nodejs_user_input.buffer += readlineSync.question();
            text = nodejs_user_input.buffer.substr(0, length);
            nodejs_user_input.buffer = nodejs_user_input.buffer.substr(length);
            return text;
          }
        };
        nodejs_user_output = {
          put: function(text, _) {
            process.stdout.write(text);
            return true;
          },
          flush: function() {
            return true;
          }
        };
        var indexOf;
        if (!Array.prototype.indexOf) {
          indexOf = function(array, elem) {
            var len = array.length;
            for (var i = 0; i < len; i++) {
              if (elem === array[i])
                return i;
            }
            return -1;
          };
        } else {
          indexOf = function(array, elem) {
            return array.indexOf(elem);
          };
        }
        var reduce = function(array, fn) {
          if (array.length === 0)
            return void 0;
          var elem = array[0];
          var len = array.length;
          for (var i = 1; i < len; i++) {
            elem = fn(elem, array[i]);
          }
          return elem;
        };
        var map;
        if (!Array.prototype.map) {
          map = function(array, fn) {
            var a = [];
            var len = array.length;
            for (var i = 0; i < len; i++) {
              a.push(fn(array[i]));
            }
            return a;
          };
        } else {
          map = function(array, fn) {
            return array.map(fn);
          };
        }
        var filter;
        if (!Array.prototype.filter) {
          filter = function(array, fn) {
            var a = [];
            var len = array.length;
            for (var i = 0; i < len; i++) {
              if (fn(array[i]))
                a.push(array[i]);
            }
            return a;
          };
        } else {
          filter = function(array, fn) {
            return array.filter(fn);
          };
        }
        var codePointAt;
        if (!String.prototype.codePointAt) {
          codePointAt = function(str, i) {
            return str.charCodeAt(i);
          };
        } else {
          codePointAt = function(str, i) {
            return str.codePointAt(i);
          };
        }
        var fromCodePoint;
        if (!String.fromCodePoint) {
          fromCodePoint = function() {
            return String.fromCharCode.apply(null, arguments);
          };
        } else {
          fromCodePoint = function() {
            return String.fromCodePoint.apply(null, arguments);
          };
        }
        var ERROR = 0;
        var SUCCESS = 1;
        var regex_escape = /(\\a)|(\\b)|(\\f)|(\\n)|(\\r)|(\\t)|(\\v)|\\x([0-9a-fA-F]+)\\|\\([0-7]+)\\|(\\\\)|(\\')|('')|(\\")|(\\`)|(\\.)|(.)/g;
        var escape_map = {"\\a": 7, "\\b": 8, "\\f": 12, "\\n": 10, "\\r": 13, "\\t": 9, "\\v": 11};
        function escape2(str) {
          var s = [];
          var _error = false;
          str.replace(regex_escape, function(match, a, b, f, n, r, t, v, hex, octal, back, single, dsingle, double, backquote, error, char2) {
            switch (true) {
              case hex !== void 0:
                s.push(parseInt(hex, 16));
                return "";
              case octal !== void 0:
                s.push(parseInt(octal, 8));
                return "";
              case back !== void 0:
              case single !== void 0:
              case dsingle !== void 0:
              case double !== void 0:
              case backquote !== void 0:
                s.push(codePointAt(match.substr(1), 0));
                return "";
              case char2 !== void 0:
                s.push(codePointAt(char2, 0));
                return "";
              case error !== void 0:
                _error = true;
              default:
                s.push(escape_map[match]);
                return "";
            }
          });
          if (_error)
            return null;
          return s;
        }
        function escapeAtom(str, quote) {
          var atom = "";
          if (str.length < 2)
            return str;
          try {
            str = str.replace(/\\([0-7]+)\\/g, function(match, g1) {
              return fromCodePoint(parseInt(g1, 8));
            });
            str = str.replace(/\\x([0-9a-fA-F]+)\\/g, function(match, g1) {
              return fromCodePoint(parseInt(g1, 16));
            });
          } catch (error) {
            return null;
          }
          for (var i = 0; i < str.length; i++) {
            var a = str.charAt(i);
            var b = str.charAt(i + 1);
            if (a === quote && b === quote) {
              i++;
              atom += quote;
            } else if (a === "\\") {
              if (["a", "b", "f", "n", "r", "t", "v", "'", '"', "\\", "a", "\b", "\f", "\n", "\r", "	", "\v"].indexOf(b) !== -1) {
                i += 1;
                switch (b) {
                  case "a":
                    atom += "a";
                    break;
                  case "b":
                    atom += "\b";
                    break;
                  case "f":
                    atom += "\f";
                    break;
                  case "n":
                    atom += "\n";
                    break;
                  case "r":
                    atom += "\r";
                    break;
                  case "t":
                    atom += "	";
                    break;
                  case "v":
                    atom += "\v";
                    break;
                  case "'":
                    atom += "'";
                    break;
                  case '"':
                    atom += '"';
                    break;
                  case "\\":
                    atom += "\\";
                    break;
                }
              } else {
                return null;
              }
            } else {
              atom += a;
            }
          }
          return atom;
        }
        function redoEscape(str) {
          var atom = "";
          for (var i = 0; i < str.length; i++) {
            switch (str.charAt(i)) {
              case "'":
                atom += "\\'";
                break;
              case "\\":
                atom += "\\\\";
                break;
              case "\b":
                atom += "\\b";
                break;
              case "\f":
                atom += "\\f";
                break;
              case "\n":
                atom += "\\n";
                break;
              case "\r":
                atom += "\\r";
                break;
              case "	":
                atom += "\\t";
                break;
              case "\v":
                atom += "\\v";
                break;
              default:
                atom += str.charAt(i);
                break;
            }
          }
          return atom;
        }
        function convertNum(num) {
          var n = num.substr(2);
          switch (num.substr(0, 2).toLowerCase()) {
            case "0x":
              return parseInt(n, 16);
            case "0b":
              return parseInt(n, 2);
            case "0o":
              return parseInt(n, 8);
            case "0'":
              return escape2(n)[0];
            default:
              return parseFloat(num);
          }
        }
        var rules = {
          whitespace: /^\s*(?:(?:%.*)|(?:\/\*(?:\n|\r|.)*?\*\/)|(?:\s+))\s*/,
          variable: /^(?:[A-Z_][a-zA-Z0-9_]*)/,
          atom: /^(\!|,|;|[a-z][0-9a-zA-Z_]*|[#\$\&\*\+\-\.\/\:\<\=\>\?\@\^\~\\]+|'(?:[^']*?(?:\\(?:x?\d+)?\\)*(?:'')*(?:\\')*)*')/,
          number: /^(?:0o[0-7]+|0x[0-9a-fA-F]+|0b[01]+|0'(?:''|\\[abfnrtv\\'"`]|\\x?\d+\\|[^\\])|\d+(?:\.\d+(?:[eE][+-]?\d+)?)?)/,
          string: /^(?:"([^"]|""|\\")*"|`([^`]|``|\\`)*`)/,
          l_brace: /^(?:\[)/,
          r_brace: /^(?:\])/,
          l_bracket: /^(?:\{)/,
          r_bracket: /^(?:\})/,
          bar: /^(?:\|)/,
          l_paren: /^(?:\()/,
          r_paren: /^(?:\))/
        };
        function replace(thread, text) {
          if (thread.get_flag("char_conversion").id === "on") {
            return text.replace(/./g, function(char2) {
              return thread.get_char_conversion(char2);
            });
          }
          return text;
        }
        function Tokenizer(thread) {
          this.thread = thread;
          this.text = "";
          this.tokens = [];
        }
        Tokenizer.prototype.set_last_tokens = function(tokens) {
          return this.tokens = tokens;
        };
        Tokenizer.prototype.new_text = function(text) {
          this.text = text;
          this.tokens = [];
        };
        Tokenizer.prototype.get_tokens = function(init) {
          var text;
          var len = 0;
          var line = 0;
          var start = 0;
          var tokens = [];
          var last_in_blank = false;
          if (init) {
            var token = this.tokens[init - 1];
            len = token.len;
            text = replace(this.thread, this.text.substr(token.len));
            line = token.line;
            start = token.start;
          } else
            text = this.text;
          if (/^\s*$/.test(text))
            return null;
          while (text !== "") {
            var matches = [];
            var last_is_blank = false;
            if (/^\n/.exec(text) !== null) {
              line++;
              start = 0;
              len++;
              text = text.replace(/\n/, "");
              last_in_blank = true;
              continue;
            }
            for (var rule in rules) {
              if (rules.hasOwnProperty(rule)) {
                var matchs = rules[rule].exec(text);
                if (matchs) {
                  matches.push({
                    value: matchs[0],
                    name: rule,
                    matches: matchs
                  });
                }
              }
            }
            if (!matches.length)
              return this.set_last_tokens([{value: text, matches: [], name: "lexical", line, start}]);
            var token = reduce(matches, function(a, b) {
              return a.value.length >= b.value.length ? a : b;
            });
            token.start = start;
            token.line = line;
            text = text.replace(token.value, "");
            start += token.value.length;
            len += token.value.length;
            switch (token.name) {
              case "atom":
                token.raw = token.value;
                if (token.value.charAt(0) === "'") {
                  token.value = escapeAtom(token.value.substr(1, token.value.length - 2), "'");
                  if (token.value === null) {
                    token.name = "lexical";
                    token.value = "unknown escape sequence";
                  }
                }
                break;
              case "number":
                token.float = token.value.substring(0, 2) !== "0x" && token.value.match(/[.eE]/) !== null && token.value !== "0'.";
                token.value = convertNum(token.value);
                token.blank = last_is_blank;
                break;
              case "string":
                var del = token.value.charAt(0);
                token.value = escapeAtom(token.value.substr(1, token.value.length - 2), del);
                if (token.value === null) {
                  token.name = "lexical";
                  token.value = "unknown escape sequence";
                }
                break;
              case "whitespace":
                var last = tokens[tokens.length - 1];
                if (last)
                  last.space = true;
                last_is_blank = true;
                continue;
              case "r_bracket":
                if (tokens.length > 0 && tokens[tokens.length - 1].name === "l_bracket") {
                  token = tokens.pop();
                  token.name = "atom";
                  token.value = "{}";
                  token.raw = "{}";
                  token.space = false;
                }
                break;
              case "r_brace":
                if (tokens.length > 0 && tokens[tokens.length - 1].name === "l_brace") {
                  token = tokens.pop();
                  token.name = "atom";
                  token.value = "[]";
                  token.raw = "[]";
                  token.space = false;
                }
                break;
            }
            token.len = len;
            tokens.push(token);
            last_is_blank = false;
          }
          var t = this.set_last_tokens(tokens);
          return t.length === 0 ? null : t;
        };
        function parseExpr(thread, tokens, start, priority, toplevel) {
          if (!tokens[start])
            return {type: ERROR, value: pl3.error.syntax(tokens[start - 1], "expression expected", true)};
          var error;
          if (priority === "0") {
            var token = tokens[start];
            switch (token.name) {
              case "number":
                return {type: SUCCESS, len: start + 1, value: new pl3.type.Num(token.value, token.float)};
              case "variable":
                return {type: SUCCESS, len: start + 1, value: new pl3.type.Var(token.value)};
              case "string":
                var str;
                switch (thread.get_flag("double_quotes").id) {
                  case "atom":
                    ;
                    str = new Term(token.value, []);
                    break;
                  case "codes":
                    str = new Term("[]", []);
                    for (var i = token.value.length - 1; i >= 0; i--)
                      str = new Term(".", [new pl3.type.Num(codePointAt(token.value, i), false), str]);
                    break;
                  case "chars":
                    str = new Term("[]", []);
                    for (var i = token.value.length - 1; i >= 0; i--)
                      str = new Term(".", [new pl3.type.Term(token.value.charAt(i), []), str]);
                    break;
                }
                return {type: SUCCESS, len: start + 1, value: str};
              case "l_paren":
                var expr = parseExpr(thread, tokens, start + 1, thread.__get_max_priority(), true);
                if (expr.type !== SUCCESS)
                  return expr;
                if (tokens[expr.len] && tokens[expr.len].name === "r_paren") {
                  expr.len++;
                  return expr;
                }
                return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[expr.len] ? tokens[expr.len] : tokens[expr.len - 1], ") or operator expected", !tokens[expr.len])};
              case "l_bracket":
                var expr = parseExpr(thread, tokens, start + 1, thread.__get_max_priority(), true);
                if (expr.type !== SUCCESS)
                  return expr;
                if (tokens[expr.len] && tokens[expr.len].name === "r_bracket") {
                  expr.len++;
                  expr.value = new Term("{}", [expr.value]);
                  return expr;
                }
                return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[expr.len] ? tokens[expr.len] : tokens[expr.len - 1], "} or operator expected", !tokens[expr.len])};
            }
            var result = parseTerm(thread, tokens, start, toplevel);
            if (result.type === SUCCESS || result.derived)
              return result;
            result = parseList(thread, tokens, start);
            if (result.type === SUCCESS || result.derived)
              return result;
            return {type: ERROR, derived: false, value: pl3.error.syntax(tokens[start], "unexpected token")};
          }
          var max_priority = thread.__get_max_priority();
          var next_priority = thread.__get_next_priority(priority);
          var aux_start = start;
          if (tokens[start].name === "atom" && tokens[start + 1] && (tokens[start].space || tokens[start + 1].name !== "l_paren")) {
            var token = tokens[start++];
            var classes = thread.__lookup_operator_classes(priority, token.value);
            if (classes && classes.indexOf("fy") > -1) {
              var expr = parseExpr(thread, tokens, start, priority, toplevel);
              if (expr.type !== ERROR) {
                if (token.value === "-" && !token.space && pl3.type.is_number(expr.value)) {
                  return {
                    value: new pl3.type.Num(-expr.value.value, expr.value.is_float),
                    len: expr.len,
                    type: SUCCESS
                  };
                } else {
                  return {
                    value: new pl3.type.Term(token.value, [expr.value]),
                    len: expr.len,
                    type: SUCCESS
                  };
                }
              } else {
                error = expr;
              }
            } else if (classes && classes.indexOf("fx") > -1) {
              var expr = parseExpr(thread, tokens, start, next_priority, toplevel);
              if (expr.type !== ERROR) {
                return {
                  value: new pl3.type.Term(token.value, [expr.value]),
                  len: expr.len,
                  type: SUCCESS
                };
              } else {
                error = expr;
              }
            }
          }
          start = aux_start;
          var expr = parseExpr(thread, tokens, start, next_priority, toplevel);
          if (expr.type === SUCCESS) {
            start = expr.len;
            var token = tokens[start];
            if (tokens[start] && (tokens[start].name === "atom" && thread.__lookup_operator_classes(priority, token.value) || tokens[start].name === "bar" && thread.__lookup_operator_classes(priority, "|"))) {
              var next_priority_lt = next_priority;
              var next_priority_eq = priority;
              var classes = thread.__lookup_operator_classes(priority, token.value);
              if (classes.indexOf("xf") > -1) {
                return {
                  value: new pl3.type.Term(token.value, [expr.value]),
                  len: ++expr.len,
                  type: SUCCESS
                };
              } else if (classes.indexOf("xfx") > -1) {
                var expr2 = parseExpr(thread, tokens, start + 1, next_priority_lt, toplevel);
                if (expr2.type === SUCCESS) {
                  return {
                    value: new pl3.type.Term(token.value, [expr.value, expr2.value]),
                    len: expr2.len,
                    type: SUCCESS
                  };
                } else {
                  expr2.derived = true;
                  return expr2;
                }
              } else if (classes.indexOf("xfy") > -1) {
                var expr2 = parseExpr(thread, tokens, start + 1, next_priority_eq, toplevel);
                if (expr2.type === SUCCESS) {
                  return {
                    value: new pl3.type.Term(token.value, [expr.value, expr2.value]),
                    len: expr2.len,
                    type: SUCCESS
                  };
                } else {
                  expr2.derived = true;
                  return expr2;
                }
              } else if (expr.type !== ERROR) {
                while (true) {
                  start = expr.len;
                  var token = tokens[start];
                  if (token && token.name === "atom" && thread.__lookup_operator_classes(priority, token.value)) {
                    var classes = thread.__lookup_operator_classes(priority, token.value);
                    if (classes.indexOf("yf") > -1) {
                      expr = {
                        value: new pl3.type.Term(token.value, [expr.value]),
                        len: ++start,
                        type: SUCCESS
                      };
                    } else if (classes.indexOf("yfx") > -1) {
                      var expr2 = parseExpr(thread, tokens, ++start, next_priority_lt, toplevel);
                      if (expr2.type === ERROR) {
                        expr2.derived = true;
                        return expr2;
                      }
                      start = expr2.len;
                      expr = {
                        value: new pl3.type.Term(token.value, [expr.value, expr2.value]),
                        len: start,
                        type: SUCCESS
                      };
                    } else {
                      break;
                    }
                  } else {
                    break;
                  }
                }
              }
            } else {
              error = {type: ERROR, value: pl3.error.syntax(tokens[expr.len - 1], "operator expected")};
            }
            return expr;
          }
          return expr;
        }
        function parseTerm(thread, tokens, start, toplevel) {
          if (!tokens[start] || tokens[start].name === "atom" && tokens[start].raw === "." && !toplevel && (tokens[start].space || !tokens[start + 1] || tokens[start + 1].name !== "l_paren"))
            return {type: ERROR, derived: false, value: pl3.error.syntax(tokens[start - 1], "unfounded token")};
          var atom = tokens[start];
          var exprs = [];
          if (tokens[start].name === "atom" && tokens[start].raw !== ",") {
            start++;
            if (tokens[start - 1].space)
              return {type: SUCCESS, len: start, value: new pl3.type.Term(atom.value, exprs)};
            if (tokens[start] && tokens[start].name === "l_paren") {
              if (tokens[start + 1] && tokens[start + 1].name === "r_paren")
                return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start + 1], "argument expected")};
              var expr = parseExpr(thread, tokens, ++start, "999", true);
              if (expr.type === ERROR) {
                if (expr.derived)
                  return expr;
                else
                  return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start] ? tokens[start] : tokens[start - 1], "argument expected", !tokens[start])};
              }
              exprs.push(expr.value);
              start = expr.len;
              while (tokens[start] && tokens[start].name === "atom" && tokens[start].value === ",") {
                expr = parseExpr(thread, tokens, start + 1, "999", true);
                if (expr.type === ERROR) {
                  if (expr.derived)
                    return expr;
                  else
                    return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start + 1] ? tokens[start + 1] : tokens[start], "argument expected", !tokens[start + 1])};
                }
                exprs.push(expr.value);
                start = expr.len;
              }
              if (tokens[start] && tokens[start].name === "r_paren")
                start++;
              else
                return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start] ? tokens[start] : tokens[start - 1], ", or ) expected", !tokens[start])};
            }
            return {type: SUCCESS, len: start, value: new pl3.type.Term(atom.value, exprs)};
          }
          return {type: ERROR, derived: false, value: pl3.error.syntax(tokens[start], "term expected")};
        }
        function parseList(thread, tokens, start) {
          if (!tokens[start])
            return {type: ERROR, derived: false, value: pl3.error.syntax(tokens[start - 1], "[ expected")};
          if (tokens[start] && tokens[start].name === "l_brace") {
            var expr = parseExpr(thread, tokens, ++start, "999", true);
            var exprs = [expr.value];
            var cons = void 0;
            if (expr.type === ERROR) {
              if (tokens[start] && tokens[start].name === "r_brace") {
                return {type: SUCCESS, len: start + 1, value: new pl3.type.Term("[]", [])};
              }
              return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start], "] expected")};
            }
            start = expr.len;
            while (tokens[start] && tokens[start].name === "atom" && tokens[start].value === ",") {
              expr = parseExpr(thread, tokens, start + 1, "999", true);
              if (expr.type === ERROR) {
                if (expr.derived)
                  return expr;
                else
                  return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start + 1] ? tokens[start + 1] : tokens[start], "argument expected", !tokens[start + 1])};
              }
              exprs.push(expr.value);
              start = expr.len;
            }
            var bar = false;
            if (tokens[start] && tokens[start].name === "bar") {
              bar = true;
              expr = parseExpr(thread, tokens, start + 1, "999", true);
              if (expr.type === ERROR) {
                if (expr.derived)
                  return expr;
                else
                  return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start + 1] ? tokens[start + 1] : tokens[start], "argument expected", !tokens[start + 1])};
              }
              cons = expr.value;
              start = expr.len;
            }
            if (tokens[start] && tokens[start].name === "r_brace")
              return {type: SUCCESS, len: start + 1, value: arrayToList(exprs, cons)};
            else
              return {type: ERROR, derived: true, value: pl3.error.syntax(tokens[start] ? tokens[start] : tokens[start - 1], bar ? "] expected" : ", or | or ] expected", !tokens[start])};
          }
          return {type: ERROR, derived: false, value: pl3.error.syntax(tokens[start], "list expected")};
        }
        function parseRule(thread, tokens, start) {
          var line = tokens[start].line;
          var expr = parseExpr(thread, tokens, start, thread.__get_max_priority(), false);
          var rule = null;
          var obj;
          if (expr.type !== ERROR) {
            start = expr.len;
            if (tokens[start] && tokens[start].name === "atom" && tokens[start].raw === ".") {
              start++;
              if (pl3.type.is_term(expr.value)) {
                if (expr.value.indicator === ":-/2") {
                  rule = new pl3.type.Rule(expr.value.args[0], body_conversion(expr.value.args[1]));
                  obj = {
                    value: rule,
                    len: start,
                    type: SUCCESS
                  };
                } else if (expr.value.indicator === "-->/2") {
                  rule = rule_to_dcg(new pl3.type.Rule(expr.value.args[0], expr.value.args[1]), thread);
                  rule.body = body_conversion(rule.body);
                  obj = {
                    value: rule,
                    len: start,
                    type: pl3.type.is_rule(rule) ? SUCCESS : ERROR
                  };
                } else {
                  rule = new pl3.type.Rule(expr.value, null);
                  obj = {
                    value: rule,
                    len: start,
                    type: SUCCESS
                  };
                }
                if (rule) {
                  var singleton = rule.singleton_variables();
                  if (singleton.length > 0)
                    thread.throw_warning(pl3.warning.singleton(singleton, rule.head.indicator, line));
                }
                return obj;
              } else {
                return {type: ERROR, value: pl3.error.syntax(tokens[start], "callable expected")};
              }
            } else {
              return {type: ERROR, value: pl3.error.syntax(tokens[start] ? tokens[start] : tokens[start - 1], ". or operator expected")};
            }
          }
          return expr;
        }
        function parseProgram(thread, string, options) {
          options = options ? options : {};
          options.from = options.from ? options.from : "$tau-js";
          options.reconsult = options.reconsult !== void 0 ? options.reconsult : true;
          var tokenizer = new Tokenizer(thread);
          var reconsulted = {};
          var indicator;
          tokenizer.new_text(string);
          var n = 0;
          var tokens = tokenizer.get_tokens(n);
          do {
            if (tokens === null || !tokens[n])
              break;
            var expr = parseRule(thread, tokens, n);
            if (expr.type === ERROR) {
              return new Term("throw", [expr.value]);
            } else if (expr.value.body === null && expr.value.head.indicator === "?-/1") {
              var n_thread = new Thread(thread.session);
              n_thread.add_goal(expr.value.head.args[0]);
              n_thread.answer(function(answer) {
                if (pl3.type.is_error(answer)) {
                  thread.throw_warning(answer.args[0]);
                } else if (answer === false || answer === null) {
                  thread.throw_warning(pl3.warning.failed_goal(expr.value.head.args[0], expr.len));
                }
              });
              n = expr.len;
              var result = true;
            } else if (expr.value.body === null && expr.value.head.indicator === ":-/1") {
              var result = thread.run_directive(expr.value.head.args[0]);
              n = expr.len;
              if (expr.value.head.args[0].indicator === "char_conversion/2") {
                tokens = tokenizer.get_tokens(n);
                n = 0;
              }
            } else {
              indicator = expr.value.head.indicator;
              if (options.reconsult !== false && reconsulted[indicator] !== true && !thread.is_multifile_predicate(indicator)) {
                thread.session.rules[indicator] = filter(thread.session.rules[indicator] || [], function(rule) {
                  return rule.dynamic;
                });
                reconsulted[indicator] = true;
              }
              var result = thread.add_rule(expr.value, options);
              n = expr.len;
            }
            if (!result) {
              return result;
            }
          } while (true);
          return true;
        }
        function parseQuery(thread, string) {
          var tokenizer = new Tokenizer(thread);
          tokenizer.new_text(string);
          var n = 0;
          do {
            var tokens = tokenizer.get_tokens(n);
            if (tokens === null)
              break;
            var expr = parseExpr(thread, tokens, 0, thread.__get_max_priority(), false);
            if (expr.type !== ERROR) {
              var expr_position = expr.len;
              var tokens_pos = expr_position;
              if (tokens[expr_position] && tokens[expr_position].name === "atom" && tokens[expr_position].raw === ".") {
                thread.add_goal(body_conversion(expr.value));
              } else {
                var token = tokens[expr_position];
                return new Term("throw", [pl3.error.syntax(token ? token : tokens[expr_position - 1], ". or operator expected", !token)]);
              }
              n = expr.len + 1;
            } else {
              return new Term("throw", [expr.value]);
            }
          } while (true);
          return true;
        }
        function rule_to_dcg(rule, thread) {
          rule = rule.rename(thread);
          var begin = thread.next_free_variable();
          var dcg = body_to_dcg(rule.body, begin, thread);
          if (dcg.error)
            return dcg.value;
          rule.body = dcg.value;
          rule.head.args = rule.head.args.concat([begin, dcg.variable]);
          rule.head = new Term(rule.head.id, rule.head.args);
          return rule;
        }
        function body_to_dcg(expr, last, thread) {
          var free;
          if (pl3.type.is_term(expr) && expr.indicator === "!/0") {
            return {
              value: expr,
              variable: last,
              error: false
            };
          } else if (pl3.type.is_term(expr) && expr.indicator === ",/2") {
            var left = body_to_dcg(expr.args[0], last, thread);
            if (left.error)
              return left;
            var right = body_to_dcg(expr.args[1], left.variable, thread);
            if (right.error)
              return right;
            return {
              value: new Term(",", [left.value, right.value]),
              variable: right.variable,
              error: false
            };
          } else if (pl3.type.is_term(expr) && expr.indicator === "{}/1") {
            return {
              value: expr.args[0],
              variable: last,
              error: false
            };
          } else if (pl3.type.is_empty_list(expr)) {
            return {
              value: new Term("true", []),
              variable: last,
              error: false
            };
          } else if (pl3.type.is_list(expr)) {
            free = thread.next_free_variable();
            var pointer = expr;
            var prev;
            while (pointer.indicator === "./2") {
              prev = pointer;
              pointer = pointer.args[1];
            }
            if (pl3.type.is_variable(pointer)) {
              return {
                value: pl3.error.instantiation("DCG"),
                variable: last,
                error: true
              };
            } else if (!pl3.type.is_empty_list(pointer)) {
              return {
                value: pl3.error.type("list", expr, "DCG"),
                variable: last,
                error: true
              };
            } else {
              prev.args[1] = free;
              return {
                value: new Term("=", [last, expr]),
                variable: free,
                error: false
              };
            }
          } else if (pl3.type.is_callable(expr)) {
            free = thread.next_free_variable();
            expr.args = expr.args.concat([last, free]);
            expr = new Term(expr.id, expr.args);
            return {
              value: expr,
              variable: free,
              error: false
            };
          } else {
            return {
              value: pl3.error.type("callable", expr, "DCG"),
              variable: last,
              error: true
            };
          }
        }
        function body_conversion(expr) {
          if (pl3.type.is_variable(expr))
            return new Term("call", [expr]);
          else if (pl3.type.is_term(expr) && [",/2", ";/2", "->/2"].indexOf(expr.indicator) !== -1)
            return new Term(expr.id, [body_conversion(expr.args[0]), body_conversion(expr.args[1])]);
          return expr;
        }
        function arrayToList(array, cons) {
          var list = cons ? cons : new pl3.type.Term("[]", []);
          for (var i = array.length - 1; i >= 0; i--)
            list = new pl3.type.Term(".", [array[i], list]);
          return list;
        }
        function remove(array, element) {
          for (var i = array.length - 1; i >= 0; i--) {
            if (array[i] === element) {
              array.splice(i, 1);
            }
          }
        }
        function nub(array) {
          var seen = {};
          var unique = [];
          for (var i = 0; i < array.length; i++) {
            if (!(array[i] in seen)) {
              unique.push(array[i]);
              seen[array[i]] = true;
            }
          }
          return unique;
        }
        function retract(thread, point, indicator, rule) {
          if (thread.session.rules[indicator] !== null) {
            for (var i = 0; i < thread.session.rules[indicator].length; i++) {
              if (thread.session.rules[indicator][i] === rule) {
                thread.session.rules[indicator].splice(i, 1);
                thread.success(point);
                break;
              }
            }
          }
        }
        function callN(n) {
          return function(thread, point, atom) {
            var closure = atom.args[0], args = atom.args.slice(1, n);
            if (pl3.type.is_variable(closure)) {
              thread.throw_error(pl3.error.instantiation(thread.level));
            } else if (!pl3.type.is_callable(closure)) {
              thread.throw_error(pl3.error.type("callable", closure, thread.level));
            } else {
              var goal = new Term(closure.id, closure.args.concat(args));
              thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
            }
          };
        }
        function str_indicator(str) {
          for (var i = str.length - 1; i >= 0; i--)
            if (str.charAt(i) === "/")
              return new Term("/", [new Term(str.substring(0, i)), new Num(parseInt(str.substring(i + 1)), false)]);
        }
        function Var(id) {
          this.id = id;
        }
        function Num(value, is_float) {
          this.is_float = is_float !== void 0 ? is_float : parseInt(value) !== value;
          this.value = this.is_float ? value : parseInt(value);
        }
        var term_ref = 0;
        function Term(id, args, ref) {
          this.ref = ref || ++term_ref;
          this.id = id;
          this.args = args || [];
          this.indicator = id + "/" + this.args.length;
        }
        var stream_ref = 0;
        function Stream(stream, mode, alias, type, reposition, eof_action) {
          this.id = stream_ref++;
          this.stream = stream;
          this.mode = mode;
          this.alias = alias;
          this.type = type !== void 0 ? type : "text";
          this.reposition = reposition !== void 0 ? reposition : true;
          this.eof_action = eof_action !== void 0 ? eof_action : "eof_code";
          this.position = this.mode === "append" ? "end_of_stream" : 0;
          this.output = this.mode === "write" || this.mode === "append";
          this.input = this.mode === "read";
        }
        function Substitution(links) {
          links = links || {};
          this.links = links;
        }
        function State(goal, subs, parent) {
          subs = subs || new Substitution();
          parent = parent || null;
          this.goal = goal;
          this.substitution = subs;
          this.parent = parent;
        }
        function Rule(head, body, dynamic) {
          this.head = head;
          this.body = body;
          this.dynamic = dynamic ? dynamic : false;
        }
        function Session2(limit) {
          limit = limit === void 0 || limit <= 0 ? 1e3 : limit;
          this.rules = {};
          this.src_predicates = {};
          this.rename = 0;
          this.modules = [];
          this.thread = new Thread(this);
          this.total_threads = 1;
          this.renamed_variables = {};
          this.public_predicates = {};
          this.multifile_predicates = {};
          this.limit = limit;
          this.streams = {
            "user_input": new Stream(typeof module !== "undefined" && module.exports ? nodejs_user_input : tau_user_input, "read", "user_input", "text", false, "reset"),
            "user_output": new Stream(typeof module !== "undefined" && module.exports ? nodejs_user_output : tau_user_output, "write", "user_output", "text", false, "eof_code")
          };
          this.file_system = typeof module !== "undefined" && module.exports ? nodejs_file_system : tau_file_system;
          this.standard_input = this.streams["user_input"];
          this.standard_output = this.streams["user_output"];
          this.current_input = this.streams["user_input"];
          this.current_output = this.streams["user_output"];
          this.format_success = function(state) {
            return state.substitution;
          };
          this.format_error = function(state) {
            return state.goal;
          };
          this.flag = {
            bounded: pl3.flag.bounded.value,
            max_integer: pl3.flag.max_integer.value,
            min_integer: pl3.flag.min_integer.value,
            integer_rounding_function: pl3.flag.integer_rounding_function.value,
            char_conversion: pl3.flag.char_conversion.value,
            debug: pl3.flag.debug.value,
            max_arity: pl3.flag.max_arity.value,
            unknown: pl3.flag.unknown.value,
            double_quotes: pl3.flag.double_quotes.value,
            occurs_check: pl3.flag.occurs_check.value,
            dialect: pl3.flag.dialect.value,
            version_data: pl3.flag.version_data.value,
            nodejs: pl3.flag.nodejs.value
          };
          this.__loaded_modules = [];
          this.__char_conversion = {};
          this.__operators = {
            1200: {":-": ["fx", "xfx"], "-->": ["xfx"], "?-": ["fx"]},
            1100: {";": ["xfy"]},
            1050: {"->": ["xfy"]},
            1e3: {",": ["xfy"]},
            900: {"\\+": ["fy"]},
            700: {
              "=": ["xfx"],
              "\\=": ["xfx"],
              "==": ["xfx"],
              "\\==": ["xfx"],
              "@<": ["xfx"],
              "@=<": ["xfx"],
              "@>": ["xfx"],
              "@>=": ["xfx"],
              "=..": ["xfx"],
              "is": ["xfx"],
              "=:=": ["xfx"],
              "=\\=": ["xfx"],
              "<": ["xfx"],
              "=<": ["xfx"],
              ">": ["xfx"],
              ">=": ["xfx"]
            },
            600: {":": ["xfy"]},
            500: {"+": ["yfx"], "-": ["yfx"], "/\\": ["yfx"], "\\/": ["yfx"]},
            400: {
              "*": ["yfx"],
              "/": ["yfx"],
              "//": ["yfx"],
              "rem": ["yfx"],
              "mod": ["yfx"],
              "<<": ["yfx"],
              ">>": ["yfx"]
            },
            200: {"**": ["xfx"], "^": ["xfy"], "-": ["fy"], "+": ["fy"], "\\": ["fy"]}
          };
        }
        function Thread(session) {
          this.epoch = Date.now();
          this.session = session;
          this.session.total_threads++;
          this.total_steps = 0;
          this.cpu_time = 0;
          this.cpu_time_last = 0;
          this.points = [];
          this.debugger = false;
          this.debugger_states = [];
          this.level = "top_level/0";
          this.__calls = [];
          this.current_limit = this.session.limit;
          this.warnings = [];
        }
        function Module(id, rules2, exports2) {
          this.id = id;
          this.rules = rules2;
          this.exports = exports2;
          pl3.module[id] = this;
        }
        Module.prototype.exports_predicate = function(indicator) {
          return this.exports.indexOf(indicator) !== -1;
        };
        Var.prototype.unify = function(obj, occurs_check) {
          if (occurs_check && indexOf(obj.variables(), this.id) !== -1 && !pl3.type.is_variable(obj)) {
            return null;
          }
          var links = {};
          links[this.id] = obj;
          return new Substitution(links);
        };
        Num.prototype.unify = function(obj, _) {
          if (pl3.type.is_number(obj) && this.value === obj.value && this.is_float === obj.is_float) {
            return new Substitution();
          }
          return null;
        };
        Term.prototype.unify = function(obj, occurs_check) {
          if (pl3.type.is_term(obj) && this.indicator === obj.indicator) {
            var subs = new Substitution();
            for (var i = 0; i < this.args.length; i++) {
              var mgu = pl3.unify(this.args[i].apply(subs), obj.args[i].apply(subs), occurs_check);
              if (mgu === null)
                return null;
              for (var x in mgu.links)
                subs.links[x] = mgu.links[x];
              subs = subs.apply(mgu);
            }
            return subs;
          }
          return null;
        };
        Stream.prototype.unify = function(obj, occurs_check) {
          if (pl3.type.is_stream(obj) && this.id === obj.id) {
            return new Substitution();
          }
          return null;
        };
        Var.prototype.toString = function(_) {
          return this.id;
        };
        Num.prototype.toString = function(_) {
          return this.is_float && indexOf(this.value.toString(), ".") === -1 ? this.value + ".0" : this.value.toString();
        };
        Term.prototype.toString = function(options, priority, from) {
          options = !options ? {} : options;
          options.quoted = options.quoted === void 0 ? true : options.quoted;
          options.ignore_ops = options.ignore_ops === void 0 ? false : options.ignore_ops;
          options.numbervars = options.numbervars === void 0 ? false : options.numbervars;
          priority = priority === void 0 ? 1200 : priority;
          from = from === void 0 ? "" : from;
          if (options.numbervars && this.indicator === "$VAR/1" && pl3.type.is_integer(this.args[0]) && this.args[0].value >= 0) {
            var i = this.args[0].value;
            var number = Math.floor(i / 26);
            var letter = i % 26;
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[letter] + (number !== 0 ? number : "");
          }
          switch (this.indicator) {
            case "[]/0":
            case "{}/0":
            case "!/0":
              return this.id;
            case "{}/1":
              return "{" + this.args[0].toString(options) + "}";
            case "./2":
              var list = "[" + this.args[0].toString(options);
              var pointer = this.args[1];
              while (pointer.indicator === "./2") {
                list += ", " + pointer.args[0].toString(options);
                pointer = pointer.args[1];
              }
              if (pointer.indicator !== "[]/0") {
                list += "|" + pointer.toString(options);
              }
              list += "]";
              return list;
            case ",/2":
              return "(" + this.args[0].toString(options) + ", " + this.args[1].toString(options) + ")";
            default:
              var id = this.id;
              var operator = options.session ? options.session.lookup_operator(this.id, this.args.length) : null;
              if (options.session === void 0 || options.ignore_ops || operator === null) {
                if (options.quoted && !/^(!|,|;|[a-z][0-9a-zA-Z_]*)$/.test(id) && id !== "{}" && id !== "[]")
                  id = "'" + redoEscape(id) + "'";
                return id + (this.args.length ? "(" + map(this.args, function(x) {
                  return x.toString(options);
                }).join(", ") + ")" : "");
              } else {
                var cond = operator.priority > priority.priority || operator.priority === priority.priority && (operator.class === "xfy" && this.indicator !== priority.indicator || operator.class === "yfx" && this.indicator !== priority.indicator || this.indicator === priority.indicator && operator.class === "yfx" && from === "right" || this.indicator === priority.indicator && operator.class === "xfy" && from === "left");
                operator.indicator = this.indicator;
                var lpar = cond ? "(" : "";
                var rpar = cond ? ")" : "";
                if (this.args.length === 0) {
                  return "(" + this.id + ")";
                } else if (["fy", "fx"].indexOf(operator.class) !== -1) {
                  return lpar + id + " " + this.args[0].toString(options, operator) + rpar;
                } else if (["yf", "xf"].indexOf(operator.class) !== -1) {
                  return lpar + this.args[0].toString(options, operator) + " " + id + rpar;
                } else {
                  return lpar + this.args[0].toString(options, operator, "left") + " " + this.id + " " + this.args[1].toString(options, operator, "right") + rpar;
                }
              }
          }
        };
        Stream.prototype.toString = function(_) {
          return "<stream>(" + this.id + ")";
        };
        Substitution.prototype.toString = function(options) {
          var str = "{";
          for (var link in this.links) {
            if (!this.links.hasOwnProperty(link))
              continue;
            if (str !== "{") {
              str += ", ";
            }
            str += link + "/" + this.links[link].toString(options);
          }
          str += "}";
          return str;
        };
        State.prototype.toString = function(options) {
          if (this.goal === null) {
            return "<" + this.substitution.toString(options) + ">";
          } else {
            return "<" + this.goal.toString(options) + ", " + this.substitution.toString(options) + ">";
          }
        };
        Rule.prototype.toString = function(options) {
          if (!this.body) {
            return this.head.toString(options) + ".";
          } else {
            return this.head.toString(options) + " :- " + this.body.toString(options) + ".";
          }
        };
        Session2.prototype.toString = function(options) {
          var str = "";
          for (var i = 0; i < this.modules.length; i++) {
            str += ":- use_module(library(" + this.modules[i] + ")).\n";
          }
          str += "\n";
          for (key in this.rules) {
            for (i = 0; i < this.rules[key].length; i++) {
              str += this.rules[key][i].toString(options);
              str += "\n";
            }
          }
          return str;
        };
        Var.prototype.clone = function() {
          return new Var(this.id);
        };
        Num.prototype.clone = function() {
          return new Num(this.value, this.is_float);
        };
        Term.prototype.clone = function() {
          return new Term(this.id, map(this.args, function(arg) {
            return arg.clone();
          }));
        };
        Stream.prototype.clone = function() {
          return new Stram(this.stream, this.mode, this.alias, this.type, this.reposition, this.eof_action);
        };
        Substitution.prototype.clone = function() {
          var links = {};
          for (var link in this.links) {
            if (!this.links.hasOwnProperty(link))
              continue;
            links[link] = this.links[link].clone();
          }
          return new Substitution(links);
        };
        State.prototype.clone = function() {
          return new State(this.goal.clone(), this.substitution.clone(), this.parent);
        };
        Rule.prototype.clone = function() {
          return new Rule(this.head.clone(), this.body !== null ? this.body.clone() : null);
        };
        Var.prototype.equals = function(obj) {
          return pl3.type.is_variable(obj) && this.id === obj.id;
        };
        Num.prototype.equals = function(obj) {
          return pl3.type.is_number(obj) && this.value === obj.value && this.is_float === obj.is_float;
        };
        Term.prototype.equals = function(obj) {
          if (!pl3.type.is_term(obj) || this.indicator !== obj.indicator) {
            return false;
          }
          for (var i = 0; i < this.args.length; i++) {
            if (!this.args[i].equals(obj.args[i])) {
              return false;
            }
          }
          return true;
        };
        Stream.prototype.equals = function(obj) {
          return pl3.type.is_stream(obj) && this.id === obj.id;
        };
        Substitution.prototype.equals = function(obj) {
          var link;
          if (!pl3.type.is_substitution(obj)) {
            return false;
          }
          for (link in this.links) {
            if (!this.links.hasOwnProperty(link))
              continue;
            if (!obj.links[link] || !this.links[link].equals(obj.links[link])) {
              return false;
            }
          }
          for (link in obj.links) {
            if (!obj.links.hasOwnProperty(link))
              continue;
            if (!this.links[link]) {
              return false;
            }
          }
          return true;
        };
        State.prototype.equals = function(obj) {
          return pl3.type.is_state(obj) && this.goal.equals(obj.goal) && this.substitution.equals(obj.substitution) && this.parent === obj.parent;
        };
        Rule.prototype.equals = function(obj) {
          return pl3.type.is_rule(obj) && this.head.equals(obj.head) && (this.body === null && obj.body === null || this.body !== null && this.body.equals(obj.body));
        };
        Var.prototype.rename = function(thread) {
          return thread.get_free_variable(this);
        };
        Num.prototype.rename = function(_) {
          return this;
        };
        Term.prototype.rename = function(thread) {
          return new Term(this.id, map(this.args, function(arg) {
            return arg.rename(thread);
          }));
        };
        Stream.prototype.rename = function(thread) {
          return this;
        };
        Rule.prototype.rename = function(thread) {
          return new Rule(this.head.rename(thread), this.body !== null ? this.body.rename(thread) : null);
        };
        Var.prototype.variables = function() {
          return [this.id];
        };
        Num.prototype.variables = function() {
          return [];
        };
        Term.prototype.variables = function() {
          return [].concat.apply([], map(this.args, function(arg) {
            return arg.variables();
          }));
        };
        Stream.prototype.variables = function() {
          return [];
        };
        Rule.prototype.variables = function() {
          if (this.body === null) {
            return this.head.variables();
          } else {
            return this.head.variables().concat(this.body.variables());
          }
        };
        Var.prototype.apply = function(subs) {
          if (subs.lookup(this.id)) {
            return subs.lookup(this.id);
          }
          return this;
        };
        Num.prototype.apply = function(_) {
          return this;
        };
        Term.prototype.apply = function(subs) {
          if (this.indicator === "./2") {
            var arr = [];
            var pointer = this;
            while (pointer.indicator === "./2") {
              arr.push(pointer.args[0].apply(subs));
              pointer = pointer.args[1];
            }
            var list = pointer.apply(subs);
            for (var i = arr.length - 1; i >= 0; i--) {
              list = new Term(".", [arr[i], list]);
            }
            return list;
          }
          return new Term(this.id, map(this.args, function(arg) {
            return arg.apply(subs);
          }), this.ref);
        };
        Stream.prototype.apply = function(_) {
          return this;
        };
        Rule.prototype.apply = function(subs) {
          return new Rule(this.head.apply(subs), this.body !== null ? this.body.apply(subs) : null);
        };
        Substitution.prototype.apply = function(subs) {
          var link, links = {};
          for (link in this.links) {
            if (!this.links.hasOwnProperty(link))
              continue;
            links[link] = this.links[link].apply(subs);
          }
          return new Substitution(links);
        };
        Term.prototype.select = function() {
          var pointer = this;
          while (pointer.indicator === ",/2")
            pointer = pointer.args[0];
          return pointer;
        };
        Term.prototype.replace = function(expr) {
          if (this.indicator === ",/2") {
            if (this.args[0].indicator === ",/2") {
              return new Term(",", [this.args[0].replace(expr), this.args[1]]);
            } else {
              return expr === null ? this.args[1] : new Term(",", [expr, this.args[1]]);
            }
          } else {
            return expr;
          }
        };
        Term.prototype.search = function(expr) {
          if (pl3.type.is_term(expr) && expr.ref !== void 0 && this.ref === expr.ref)
            return true;
          for (var i = 0; i < this.args.length; i++)
            if (pl3.type.is_term(this.args[i]) && this.args[i].search(expr))
              return true;
          return false;
        };
        Session2.prototype.get_current_input = function() {
          return this.current_input;
        };
        Thread.prototype.get_current_input = function() {
          return this.session.get_current_input();
        };
        Session2.prototype.get_current_output = function() {
          return this.current_output;
        };
        Thread.prototype.get_current_output = function() {
          return this.session.get_current_output();
        };
        Session2.prototype.set_current_input = function(input) {
          this.current_input = input;
        };
        Thread.prototype.set_current_input = function(input) {
          return this.session.set_current_input(input);
        };
        Session2.prototype.set_current_output = function(output2) {
          this.current_input = output2;
        };
        Thread.prototype.set_current_output = function(output2) {
          return this.session.set_current_output(output2);
        };
        Session2.prototype.get_stream_by_alias = function(alias) {
          return this.streams[alias];
        };
        Thread.prototype.get_stream_by_alias = function(alias) {
          return this.session.get_stream_by_alias(alias);
        };
        Session2.prototype.file_system_open = function(path, type, mode) {
          return this.file_system.open(path, type, mode);
        };
        Thread.prototype.file_system_open = function(path, type, mode) {
          return this.session.file_system_open(path, type, mode);
        };
        Session2.prototype.get_char_conversion = function(char2) {
          return this.__char_conversion[char2] || char2;
        };
        Thread.prototype.get_char_conversion = function(char2) {
          return this.session.get_char_conversion(char2);
        };
        Session2.prototype.parse = function(string) {
          return this.thread.parse(string);
        };
        Thread.prototype.parse = function(string) {
          var tokenizer = new Tokenizer(this);
          tokenizer.new_text(string);
          var tokens = tokenizer.get_tokens();
          if (tokens === null)
            return false;
          var expr = parseExpr(this, tokens, 0, this.__get_max_priority(), false);
          if (expr.len !== tokens.length)
            return false;
          return {value: expr.value, expr, tokens};
        };
        Session2.prototype.get_flag = function(flag) {
          return this.flag[flag];
        };
        Thread.prototype.get_flag = function(flag) {
          return this.session.get_flag(flag);
        };
        Session2.prototype.add_rule = function(rule, options) {
          options = options ? options : {};
          options.from = options.from ? options.from : "$tau-js";
          this.src_predicates[rule.head.indicator] = options.from;
          if (!this.rules[rule.head.indicator]) {
            this.rules[rule.head.indicator] = [];
          }
          this.rules[rule.head.indicator].push(rule);
          if (!this.public_predicates.hasOwnProperty(rule.head.indicator))
            this.public_predicates[rule.head.indicator] = false;
          return true;
        };
        Thread.prototype.add_rule = function(rule, options) {
          return this.session.add_rule(rule, options);
        };
        Session2.prototype.run_directive = function(directive) {
          this.thread.run_directive(directive);
        };
        Thread.prototype.run_directive = function(directive) {
          if (pl3.type.is_directive(directive)) {
            pl3.directive[directive.indicator](this, directive);
            return true;
          }
          return false;
        };
        Session2.prototype.__get_max_priority = function() {
          return "1200";
        };
        Thread.prototype.__get_max_priority = function() {
          return this.session.__get_max_priority();
        };
        Session2.prototype.__get_next_priority = function(priority) {
          var max = 0;
          priority = parseInt(priority);
          for (var key2 in this.__operators) {
            if (!this.__operators.hasOwnProperty(key2))
              continue;
            var n = parseInt(key2);
            if (n > max && n < priority)
              max = n;
          }
          return max.toString();
        };
        Thread.prototype.__get_next_priority = function(priority) {
          return this.session.__get_next_priority(priority);
        };
        Session2.prototype.__lookup_operator_classes = function(priority, operator) {
          if (this.__operators.hasOwnProperty(priority) && this.__operators[priority][operator] instanceof Array) {
            return this.__operators[priority][operator] || false;
          }
          return false;
        };
        Thread.prototype.__lookup_operator_classes = function(priority, operator) {
          return this.session.__lookup_operator_classes(priority, operator);
        };
        Session2.prototype.lookup_operator = function(name, arity) {
          for (var p in this.__operators)
            if (this.__operators[p][name]) {
              for (var i = 0; i < this.__operators[p][name].length; i++)
                if (arity === 0 || this.__operators[p][name][i].length === arity + 1)
                  return {priority: p, class: this.__operators[p][name][i]};
            }
          return null;
        };
        Thread.prototype.lookup_operator = function(name, arity) {
          return this.session.lookup_operator(name, arity);
        };
        Session2.prototype.throw_warning = function(warning) {
          this.thread.throw_warning(warning);
        };
        Thread.prototype.throw_warning = function(warning) {
          this.warnings.push(warning);
        };
        Session2.prototype.get_warnings = function() {
          return this.thread.get_warnings();
        };
        Thread.prototype.get_warnings = function() {
          return this.warnings;
        };
        Session2.prototype.add_goal = function(goal, unique) {
          this.thread.add_goal(goal, unique);
        };
        Thread.prototype.add_goal = function(goal, unique, parent) {
          parent = parent ? parent : null;
          if (unique === true)
            this.points = [];
          var vars = goal.variables();
          var links = {};
          for (var i = 0; i < vars.length; i++)
            links[vars[i]] = new Var(vars[i]);
          this.points.push(new State(goal, new Substitution(links), parent));
        };
        Session2.prototype.consult = function(program, options) {
          return this.thread.consult(program, options);
        };
        Thread.prototype.consult = function(program, options) {
          var string = "";
          if (typeof program === "string") {
            string = program;
            var len = string.length;
            if (string.substring(len - 3, len) === ".pl" && document.getElementById(string)) {
              var script = document.getElementById(string);
              var type = script.getAttribute("type");
              if (type !== null && type.replace(/ /g, "").toLowerCase() === "text/prolog") {
                string = script.text;
              }
            }
          } else if (program.nodeName) {
            switch (program.nodeName.toLowerCase()) {
              case "input":
              case "textarea":
                string = program.value;
                break;
              default:
                string = program.innerHTML;
                break;
            }
          } else {
            return false;
          }
          this.warnings = [];
          return parseProgram(this, string, options);
        };
        Session2.prototype.query = function(string) {
          return this.thread.query(string);
        };
        Thread.prototype.query = function(string) {
          this.points = [];
          this.debugger_points = [];
          return parseQuery(this, string);
        };
        Session2.prototype.head_point = function() {
          return this.thread.head_point();
        };
        Thread.prototype.head_point = function() {
          return this.points[this.points.length - 1];
        };
        Session2.prototype.get_free_variable = function(variable) {
          return this.thread.get_free_variable(variable);
        };
        Thread.prototype.get_free_variable = function(variable) {
          var variables = [];
          if (variable.id === "_" || this.session.renamed_variables[variable.id] === void 0) {
            this.session.rename++;
            if (this.points.length > 0)
              variables = this.head_point().substitution.domain();
            while (indexOf(variables, pl3.format_variable(this.session.rename)) !== -1) {
              this.session.rename++;
            }
            if (variable.id === "_") {
              return new Var(pl3.format_variable(this.session.rename));
            } else {
              this.session.renamed_variables[variable.id] = pl3.format_variable(this.session.rename);
            }
          }
          return new Var(this.session.renamed_variables[variable.id]);
        };
        Session2.prototype.next_free_variable = function() {
          return this.thread.next_free_variable();
        };
        Thread.prototype.next_free_variable = function() {
          this.session.rename++;
          var variables = [];
          if (this.points.length > 0)
            variables = this.head_point().substitution.domain();
          while (indexOf(variables, pl3.format_variable(this.session.rename)) !== -1) {
            this.session.rename++;
          }
          return new Var(pl3.format_variable(this.session.rename));
        };
        Session2.prototype.is_public_predicate = function(indicator) {
          return !this.public_predicates.hasOwnProperty(indicator) || this.public_predicates[indicator] === true;
        };
        Thread.prototype.is_public_predicate = function(indicator) {
          return this.session.is_public_predicate(indicator);
        };
        Session2.prototype.is_multifile_predicate = function(indicator) {
          return this.multifile_predicates.hasOwnProperty(indicator) && this.multifile_predicates[indicator] === true;
        };
        Thread.prototype.is_multifile_predicate = function(indicator) {
          return this.session.is_multifile_predicate(indicator);
        };
        Session2.prototype.prepend = function(states) {
          return this.thread.prepend(states);
        };
        Thread.prototype.prepend = function(states) {
          for (var i = states.length - 1; i >= 0; i--)
            this.points.push(states[i]);
        };
        Session2.prototype.success = function(point, parent) {
          return this.thread.success(point, parent);
        };
        Thread.prototype.success = function(point, parent) {
          var parent = typeof parent === "undefined" ? point : parent;
          this.prepend([new State(point.goal.replace(null), point.substitution, parent)]);
        };
        Session2.prototype.throw_error = function(error) {
          return this.thread.throw_error(error);
        };
        Thread.prototype.throw_error = function(error) {
          this.prepend([new State(new Term("throw", [error]), new Substitution(), null, null)]);
        };
        Session2.prototype.step_rule = function(mod, atom) {
          return this.thread.step_rule(mod, atom);
        };
        Thread.prototype.step_rule = function(mod, atom) {
          var name = atom.indicator;
          if (mod === "user")
            mod = null;
          if (mod === null && this.session.rules.hasOwnProperty(name))
            return this.session.rules[name];
          var modules = mod === null ? this.session.modules : indexOf(this.session.modules, mod) === -1 ? [] : [mod];
          for (var i = 0; i < modules.length; i++) {
            var module2 = pl3.module[modules[i]];
            if (module2.rules.hasOwnProperty(name) && (module2.rules.hasOwnProperty(this.level) || module2.exports_predicate(name)))
              return pl3.module[modules[i]].rules[name];
          }
          return null;
        };
        Session2.prototype.step = function() {
          return this.thread.step();
        };
        Thread.prototype.step = function() {
          if (this.points.length === 0) {
            return;
          }
          var asyn = false;
          var point = this.points.pop();
          if (this.debugger)
            this.debugger_states.push(point);
          if (pl3.type.is_term(point.goal)) {
            var atom = point.goal.select();
            var mod = null;
            var states = [];
            if (atom !== null) {
              this.total_steps++;
              var level = point;
              while (level.parent !== null && level.parent.goal.search(atom))
                level = level.parent;
              this.level = level.parent === null ? "top_level/0" : level.parent.goal.select().indicator;
              if (pl3.type.is_term(atom) && atom.indicator === ":/2") {
                mod = atom.args[0].id;
                atom = atom.args[1];
              }
              if (mod === null && pl3.type.is_builtin(atom)) {
                this.__call_indicator = atom.indicator;
                asyn = pl3.predicate[atom.indicator](this, point, atom);
              } else {
                var srule = this.step_rule(mod, atom);
                if (srule === null) {
                  if (!this.session.rules.hasOwnProperty(atom.indicator)) {
                    if (this.get_flag("unknown").id === "error") {
                      this.throw_error(pl3.error.existence("procedure", atom.indicator, this.level));
                    } else if (this.get_flag("unknown").id === "warning") {
                      this.throw_warning("unknown procedure " + atom.indicator + " (from " + this.level + ")");
                    }
                  }
                } else if (srule instanceof Function) {
                  asyn = srule(this, point, atom);
                } else {
                  for (var _rule in srule) {
                    if (!srule.hasOwnProperty(_rule))
                      continue;
                    var rule = srule[_rule];
                    this.session.renamed_variables = {};
                    rule = rule.rename(this);
                    var occurs_check = this.get_flag("occurs_check").indicator === "true/0";
                    var state = new State();
                    var mgu = pl3.unify(atom, rule.head, occurs_check);
                    if (mgu !== null) {
                      state.goal = point.goal.replace(rule.body);
                      if (state.goal !== null) {
                        state.goal = state.goal.apply(mgu);
                      }
                      state.substitution = point.substitution.apply(mgu);
                      state.parent = point;
                      states.push(state);
                    }
                  }
                  this.prepend(states);
                }
              }
            }
          } else if (pl3.type.is_variable(point.goal)) {
            this.throw_error(pl3.error.instantiation(this.level));
          } else {
            this.throw_error(pl3.error.type("callable", point.goal, this.level));
          }
          return asyn;
        };
        Session2.prototype.answer = function(success) {
          return this.thread.answer(success);
        };
        Thread.prototype.answer = function(success) {
          success = success || function(_) {
          };
          this.__calls.push(success);
          if (this.__calls.length > 1) {
            return;
          }
          this.again();
        };
        Session2.prototype.answers = function(callback, max, after) {
          return this.thread.answers(callback, max, after);
        };
        Thread.prototype.answers = function(callback, max, after) {
          var answers = max || 1e3;
          var thread = this;
          if (max <= 0) {
            if (after)
              after();
            return;
          }
          this.answer(function(answer) {
            callback(answer);
            if (answer !== false) {
              setTimeout(function() {
                thread.answers(callback, max - 1, after);
              }, 1);
            } else if (after) {
              after();
            }
          });
        };
        Session2.prototype.again = function(reset_limit) {
          return this.thread.again(reset_limit);
        };
        Thread.prototype.again = function(reset_limit) {
          var answer;
          var t0 = Date.now();
          while (this.__calls.length > 0) {
            this.warnings = [];
            if (reset_limit !== false)
              this.current_limit = this.session.limit;
            while (this.current_limit > 0 && this.points.length > 0 && this.head_point().goal !== null && !pl3.type.is_error(this.head_point().goal)) {
              this.current_limit--;
              if (this.step() === true) {
                return;
              }
            }
            var t1 = Date.now();
            this.cpu_time_last = t1 - t0;
            this.cpu_time += this.cpu_time_last;
            var success = this.__calls.shift();
            if (this.current_limit <= 0) {
              success(null);
            } else if (this.points.length === 0) {
              success(false);
            } else if (pl3.type.is_error(this.head_point().goal)) {
              answer = this.session.format_error(this.points.pop());
              this.points = [];
              success(answer);
            } else {
              if (this.debugger)
                this.debugger_states.push(this.head_point());
              answer = this.session.format_success(this.points.pop());
              success(answer);
            }
          }
        };
        Session2.prototype.unfold = function(rule) {
          if (rule.body === null)
            return false;
          var head = rule.head;
          var body = rule.body;
          var atom = body.select();
          var thread = new Thread(this);
          var unfolded = [];
          thread.add_goal(atom);
          thread.step();
          for (var i = thread.points.length - 1; i >= 0; i--) {
            var point = thread.points[i];
            var head2 = head.apply(point.substitution);
            var body2 = body.replace(point.goal);
            if (body2 !== null)
              body2 = body2.apply(point.substitution);
            unfolded.push(new Rule(head2, body2));
          }
          var rules2 = this.rules[head.indicator];
          var index = indexOf(rules2, rule);
          if (unfolded.length > 0 && index !== -1) {
            rules2.splice.apply(rules2, [index, 1].concat(unfolded));
            return true;
          }
          return false;
        };
        Thread.prototype.unfold = function(rule) {
          return this.session.unfold(rule);
        };
        Var.prototype.interpret = function(thread) {
          return pl3.error.instantiation(thread.level);
        };
        Num.prototype.interpret = function(thread) {
          return this;
        };
        Term.prototype.interpret = function(thread) {
          if (pl3.type.is_unitary_list(this)) {
            return this.args[0].interpret(thread);
          } else {
            return pl3.operate(thread, this);
          }
        };
        Var.prototype.compare = function(obj) {
          if (this.id < obj.id) {
            return -1;
          } else if (this.id > obj.id) {
            return 1;
          } else {
            return 0;
          }
        };
        Num.prototype.compare = function(obj) {
          if (this.value === obj.value && this.is_float === obj.is_float) {
            return 0;
          } else if (this.value < obj.value || this.value === obj.value && this.is_float && !obj.is_float) {
            return -1;
          } else if (this.value > obj.value) {
            return 1;
          }
        };
        Term.prototype.compare = function(obj) {
          if (this.args.length < obj.args.length || this.args.length === obj.args.length && this.id < obj.id) {
            return -1;
          } else if (this.args.length > obj.args.length || this.args.length === obj.args.length && this.id > obj.id) {
            return 1;
          } else {
            for (var i = 0; i < this.args.length; i++) {
              var arg = pl3.compare(this.args[i], obj.args[i]);
              if (arg !== 0) {
                return arg;
              }
            }
            return 0;
          }
        };
        Substitution.prototype.lookup = function(variable) {
          if (this.links[variable]) {
            return this.links[variable];
          } else {
            return null;
          }
        };
        Substitution.prototype.filter = function(predicate) {
          var links = {};
          for (var id in this.links) {
            if (!this.links.hasOwnProperty(id))
              continue;
            var value = this.links[id];
            if (predicate(id, value)) {
              links[id] = value;
            }
          }
          return new Substitution(links);
        };
        Substitution.prototype.exclude = function(variables) {
          var links = {};
          for (var variable in this.links) {
            if (!this.links.hasOwnProperty(variable))
              continue;
            if (indexOf(variables, variable) === -1) {
              links[variable] = this.links[variable];
            }
          }
          return new Substitution(links);
        };
        Substitution.prototype.add = function(variable, value) {
          this.links[variable] = value;
        };
        Substitution.prototype.domain = function(plain) {
          var f = plain === true ? function(x2) {
            return x2;
          } : function(x2) {
            return new Var(x2);
          };
          var vars = [];
          for (var x in this.links)
            vars.push(f(x));
          return vars;
        };
        Var.prototype.compile = function() {
          return 'new pl.type.Var("' + this.id.toString() + '")';
        };
        Num.prototype.compile = function() {
          return "new pl.type.Num(" + this.value.toString() + ", " + this.is_float.toString() + ")";
        };
        Term.prototype.compile = function() {
          return 'new pl.type.Term("' + this.id.replace(/"/g, '\\"') + '", [' + map(this.args, function(arg) {
            return arg.compile();
          }) + "])";
        };
        Rule.prototype.compile = function() {
          return "new pl.type.Rule(" + this.head.compile() + ", " + (this.body === null ? "null" : this.body.compile()) + ")";
        };
        Session2.prototype.compile = function() {
          var str, obj = [], rules2;
          for (var _indicator in this.rules) {
            if (!this.rules.hasOwnProperty(_indicator))
              continue;
            var indicator = this.rules[_indicator];
            rules2 = [];
            str = '"' + _indicator + '": [';
            for (var i = 0; i < indicator.length; i++) {
              rules2.push(indicator[i].compile());
            }
            str += rules2.join();
            str += "]";
            obj.push(str);
          }
          return "{" + obj.join() + "};";
        };
        Var.prototype.toJavaScript = function() {
          return void 0;
        };
        Num.prototype.toJavaScript = function() {
          return this.value;
        };
        Term.prototype.toJavaScript = function() {
          if (this.args.length === 0 && this.indicator !== "[]/0") {
            return this.id;
          } else if (pl3.type.is_list(this)) {
            var arr = [];
            var pointer = this;
            var value;
            while (pointer.indicator === "./2") {
              value = pointer.args[0].toJavaScript();
              if (value === void 0)
                return void 0;
              arr.push(value);
              pointer = pointer.args[1];
            }
            if (pointer.indicator === "[]/0")
              return arr;
          }
          return void 0;
        };
        Rule.prototype.singleton_variables = function() {
          var variables = this.head.variables();
          var count = {};
          var singleton = [];
          if (this.body !== null)
            variables = variables.concat(this.body.variables());
          for (var i = 0; i < variables.length; i++) {
            if (count[variables[i]] === void 0)
              count[variables[i]] = 0;
            count[variables[i]]++;
          }
          for (var key2 in count)
            if (key2 !== "_" && count[key2] === 1)
              singleton.push(key2);
          return singleton;
        };
        var pl3 = {
          __env: typeof module !== "undefined" && module.exports ? global : window,
          module: {},
          version,
          parser: {
            tokenizer: Tokenizer,
            expression: parseExpr
          },
          utils: {
            str_indicator,
            codePointAt,
            fromCodePoint
          },
          statistics: {
            getCountTerms: function() {
              return term_ref;
            }
          },
          fromJavaScript: {
            test: {
              boolean: function(obj) {
                return obj === true || obj === false;
              },
              number: function(obj) {
                return typeof obj === "number";
              },
              string: function(obj) {
                return typeof obj === "string";
              },
              list: function(obj) {
                return obj instanceof Array;
              },
              variable: function(obj) {
                return obj === void 0;
              },
              any: function(_) {
                return true;
              }
            },
            conversion: {
              boolean: function(obj) {
                return new Term(obj ? "true" : "false", []);
              },
              number: function(obj) {
                return new Num(obj, obj % 1 !== 0);
              },
              string: function(obj) {
                return new Term(obj, []);
              },
              list: function(obj) {
                var arr = [];
                var elem;
                for (var i = 0; i < obj.length; i++) {
                  elem = pl3.fromJavaScript.apply(obj[i]);
                  if (elem === void 0)
                    return void 0;
                  arr.push(elem);
                }
                return arrayToList(arr);
              },
              variable: function(obj) {
                return new Var("_");
              },
              any: function(obj) {
                return void 0;
              }
            },
            apply: function(obj) {
              for (var i in pl3.fromJavaScript.test)
                if (i !== "any" && pl3.fromJavaScript.test[i](obj))
                  return pl3.fromJavaScript.conversion[i](obj);
              return pl3.fromJavaScript.conversion.any(obj);
            }
          },
          type: {
            Var,
            Num,
            Term,
            Rule,
            State,
            Stream,
            Module,
            Thread,
            Session: Session2,
            Substitution,
            order: [Var, Num, Term, Stream],
            compare: function(x, y) {
              var ord_x = indexOf(pl3.type.order, x.constructor);
              var ord_y = indexOf(pl3.type.order, y.constructor);
              if (ord_x < ord_y) {
                return -1;
              } else if (ord_x > ord_y) {
                return 1;
              } else {
                if (x.constructor === Num) {
                  if (x.is_float && y.is_float)
                    return 0;
                  else if (x.is_float)
                    return -1;
                  else if (y.is_float)
                    return 1;
                }
                return 0;
              }
            },
            is_substitution: function(obj) {
              return obj instanceof Substitution;
            },
            is_state: function(obj) {
              return obj instanceof State;
            },
            is_rule: function(obj) {
              return obj instanceof Rule;
            },
            is_variable: function(obj) {
              return obj instanceof Var;
            },
            is_stream: function(obj) {
              return obj instanceof Stream;
            },
            is_anonymous_var: function(obj) {
              return obj instanceof Var && obj.id === "_";
            },
            is_callable: function(obj) {
              return obj instanceof Term;
            },
            is_number: function(obj) {
              return obj instanceof Num;
            },
            is_integer: function(obj) {
              return obj instanceof Num && !obj.is_float;
            },
            is_float: function(obj) {
              return obj instanceof Num && obj.is_float;
            },
            is_term: function(obj) {
              return obj instanceof Term;
            },
            is_atom: function(obj) {
              return obj instanceof Term && obj.args.length === 0;
            },
            is_ground: function(obj) {
              if (obj instanceof Var)
                return false;
              if (obj instanceof Term) {
                for (var i = 0; i < obj.args.length; i++)
                  if (!pl3.type.is_ground(obj.args[i]))
                    return false;
              }
              return true;
            },
            is_atomic: function(obj) {
              return obj instanceof Term && obj.args.length === 0 || obj instanceof Num;
            },
            is_compound: function(obj) {
              return obj instanceof Term && obj.args.length > 0;
            },
            is_list: function(obj) {
              return obj instanceof Term && (obj.indicator === "[]/0" || obj.indicator === "./2");
            },
            is_empty_list: function(obj) {
              return obj instanceof Term && obj.indicator === "[]/0";
            },
            is_non_empty_list: function(obj) {
              return obj instanceof Term && obj.indicator === "./2";
            },
            is_fully_list: function(obj) {
              while (obj instanceof Term && obj.indicator === "./2") {
                obj = obj.args[1];
              }
              return obj instanceof Var || obj instanceof Term && obj.indicator === "[]/0";
            },
            is_instantiated_list: function(obj) {
              while (obj instanceof Term && obj.indicator === "./2") {
                obj = obj.args[1];
              }
              return obj instanceof Term && obj.indicator === "[]/0";
            },
            is_unitary_list: function(obj) {
              return obj instanceof Term && obj.indicator === "./2" && obj.args[1] instanceof Term && obj.args[1].indicator === "[]/0";
            },
            is_character: function(obj) {
              return obj instanceof Term && (obj.id.length === 1 || obj.id.length > 0 && obj.id.length <= 2 && codePointAt(obj.id, 0) >= 65536);
            },
            is_character_code: function(obj) {
              return obj instanceof Num && !obj.is_float && obj.value >= 0 && obj.value <= 1114111;
            },
            is_byte: function(obj) {
              return obj instanceof Num && !obj.is_float && obj.value >= 0 && obj.value <= 255;
            },
            is_operator: function(obj) {
              return obj instanceof Term && pl3.arithmetic.evaluation[obj.indicator];
            },
            is_directive: function(obj) {
              return obj instanceof Term && pl3.directive[obj.indicator] !== void 0;
            },
            is_builtin: function(obj) {
              return obj instanceof Term && pl3.predicate[obj.indicator] !== void 0;
            },
            is_error: function(obj) {
              return obj instanceof Term && obj.indicator === "throw/1";
            },
            is_predicate_indicator: function(obj) {
              return obj instanceof Term && obj.indicator === "//2" && obj.args[0] instanceof Term && obj.args[0].args.length === 0 && obj.args[1] instanceof Num && obj.args[1].is_float === false;
            },
            is_flag: function(obj) {
              return obj instanceof Term && obj.args.length === 0 && pl3.flag[obj.id] !== void 0;
            },
            is_value_flag: function(flag, obj) {
              if (!pl3.type.is_flag(flag))
                return false;
              for (var value in pl3.flag[flag.id].allowed) {
                if (!pl3.flag[flag.id].allowed.hasOwnProperty(value))
                  continue;
                if (pl3.flag[flag.id].allowed[value].equals(obj))
                  return true;
              }
              return false;
            },
            is_io_mode: function(obj) {
              return pl3.type.is_atom(obj) && ["read", "write", "append"].indexOf(obj.id) !== -1;
            },
            is_stream_option: function(obj) {
              return pl3.type.is_term(obj) && (obj.indicator === "alias/1" && pl3.type.is_atom(obj.args[0]) || obj.indicator === "reposition/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false") || obj.indicator === "type/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "text" || obj.args[0].id === "binary") || obj.indicator === "eof_action/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "error" || obj.args[0].id === "eof_code" || obj.args[0].id === "reset"));
            },
            is_stream_position: function(obj) {
              return pl3.type.is_integer(obj) && obj.value >= 0 || pl3.type.is_atom(obj) && (obj.id === "end_of_stream" || obj.id === "past_end_of_stream");
            },
            is_stream_property: function(obj) {
              return pl3.type.is_term(obj) && (obj.indicator === "input/0" || obj.indicator === "output/0" || obj.indicator === "alias/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0])) || obj.indicator === "file_name/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0])) || obj.indicator === "position/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_stream_position(obj.args[0])) || obj.indicator === "reposition/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false")) || obj.indicator === "type/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "text" || obj.args[0].id === "binary")) || obj.indicator === "mode/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "read" || obj.args[0].id === "write" || obj.args[0].id === "append")) || obj.indicator === "eof_action/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "error" || obj.args[0].id === "eof_code" || obj.args[0].id === "reset")) || obj.indicator === "end_of_stream/1" && (pl3.type.is_variable(obj.args[0]) || pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "at" || obj.args[0].id === "past" || obj.args[0].id === "not")));
            },
            is_streamable: function(obj) {
              return obj.__proto__.stream !== void 0;
            },
            is_read_option: function(obj) {
              return pl3.type.is_term(obj) && ["variables/1", "variable_names/1", "singletons/1"].indexOf(obj.indicator) !== -1;
            },
            is_write_option: function(obj) {
              return pl3.type.is_term(obj) && (obj.indicator === "quoted/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false") || obj.indicator === "ignore_ops/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false") || obj.indicator === "numbervars/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false"));
            },
            is_close_option: function(obj) {
              return pl3.type.is_term(obj) && obj.indicator === "force/1" && pl3.type.is_atom(obj.args[0]) && (obj.args[0].id === "true" || obj.args[0].id === "false");
            },
            is_modifiable_flag: function(obj) {
              return pl3.type.is_flag(obj) && pl3.flag[obj.id].changeable;
            },
            is_module: function(obj) {
              return obj instanceof Term && obj.indicator === "library/1" && obj.args[0] instanceof Term && obj.args[0].args.length === 0 && pl3.module[obj.args[0].id] !== void 0;
            }
          },
          arithmetic: {
            evaluation: {
              "e/0": {
                type_args: null,
                type_result: true,
                fn: function(_) {
                  return Math.E;
                }
              },
              "pi/0": {
                type_args: null,
                type_result: true,
                fn: function(_) {
                  return Math.PI;
                }
              },
              "tau/0": {
                type_args: null,
                type_result: true,
                fn: function(_) {
                  return 2 * Math.PI;
                }
              },
              "epsilon/0": {
                type_args: null,
                type_result: true,
                fn: function(_) {
                  return Number.EPSILON;
                }
              },
              "+/1": {
                type_args: null,
                type_result: null,
                fn: function(x, _) {
                  return x;
                }
              },
              "-/1": {
                type_args: null,
                type_result: null,
                fn: function(x, _) {
                  return -x;
                }
              },
              "\\/1": {
                type_args: false,
                type_result: false,
                fn: function(x, _) {
                  return ~x;
                }
              },
              "abs/1": {
                type_args: null,
                type_result: null,
                fn: function(x, _) {
                  return Math.abs(x);
                }
              },
              "sign/1": {
                type_args: null,
                type_result: null,
                fn: function(x, _) {
                  return Math.sign(x);
                }
              },
              "float_integer_part/1": {
                type_args: true,
                type_result: false,
                fn: function(x, _) {
                  return parseInt(x);
                }
              },
              "float_fractional_part/1": {
                type_args: true,
                type_result: true,
                fn: function(x, _) {
                  return x - parseInt(x);
                }
              },
              "float/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return parseFloat(x);
                }
              },
              "floor/1": {
                type_args: true,
                type_result: false,
                fn: function(x, _) {
                  return Math.floor(x);
                }
              },
              "truncate/1": {
                type_args: true,
                type_result: false,
                fn: function(x, _) {
                  return parseInt(x);
                }
              },
              "round/1": {
                type_args: true,
                type_result: false,
                fn: function(x, _) {
                  return Math.round(x);
                }
              },
              "ceiling/1": {
                type_args: true,
                type_result: false,
                fn: function(x, _) {
                  return Math.ceil(x);
                }
              },
              "sin/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.sin(x);
                }
              },
              "cos/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.cos(x);
                }
              },
              "tan/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.tan(x);
                }
              },
              "asin/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.asin(x);
                }
              },
              "acos/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.acos(x);
                }
              },
              "atan/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.atan(x);
                }
              },
              "atan2/2": {
                type_args: null,
                type_result: true,
                fn: function(x, y, _) {
                  return Math.atan2(x, y);
                }
              },
              "exp/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.exp(x);
                }
              },
              "sqrt/1": {
                type_args: null,
                type_result: true,
                fn: function(x, _) {
                  return Math.sqrt(x);
                }
              },
              "log/1": {
                type_args: null,
                type_result: true,
                fn: function(x, thread) {
                  return x > 0 ? Math.log(x) : pl3.error.evaluation("undefined", thread.__call_indicator);
                }
              },
              "+/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return x + y;
                }
              },
              "-/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return x - y;
                }
              },
              "*/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return x * y;
                }
              },
              "//2": {
                type_args: null,
                type_result: true,
                fn: function(x, y, thread) {
                  return y ? x / y : pl3.error.evaluation("zero_division", thread.__call_indicator);
                }
              },
              "///2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, thread) {
                  return y ? parseInt(x / y) : pl3.error.evaluation("zero_division", thread.__call_indicator);
                }
              },
              "**/2": {
                type_args: null,
                type_result: true,
                fn: function(x, y, _) {
                  return Math.pow(x, y);
                }
              },
              "^/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return Math.pow(x, y);
                }
              },
              "<</2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, _) {
                  return x << y;
                }
              },
              ">>/2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, _) {
                  return x >> y;
                }
              },
              "/\\/2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, _) {
                  return x & y;
                }
              },
              "\\//2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, _) {
                  return x | y;
                }
              },
              "xor/2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, _) {
                  return x ^ y;
                }
              },
              "rem/2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, thread) {
                  return y ? x % y : pl3.error.evaluation("zero_division", thread.__call_indicator);
                }
              },
              "mod/2": {
                type_args: false,
                type_result: false,
                fn: function(x, y, thread) {
                  return y ? x - parseInt(x / y) * y : pl3.error.evaluation("zero_division", thread.__call_indicator);
                }
              },
              "max/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return Math.max(x, y);
                }
              },
              "min/2": {
                type_args: null,
                type_result: null,
                fn: function(x, y, _) {
                  return Math.min(x, y);
                }
              }
            }
          },
          directive: {
            "dynamic/1": function(thread, atom) {
              var indicator = atom.args[0];
              if (pl3.type.is_variable(indicator)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_compound(indicator) || indicator.indicator !== "//2") {
                thread.throw_error(pl3.error.type("predicate_indicator", indicator, atom.indicator));
              } else if (pl3.type.is_variable(indicator.args[0]) || pl3.type.is_variable(indicator.args[1])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(indicator.args[0])) {
                thread.throw_error(pl3.error.type("atom", indicator.args[0], atom.indicator));
              } else if (!pl3.type.is_integer(indicator.args[1])) {
                thread.throw_error(pl3.error.type("integer", indicator.args[1], atom.indicator));
              } else {
                var key2 = atom.args[0].args[0].id + "/" + atom.args[0].args[1].value;
                thread.session.public_predicates[key2] = true;
                if (!thread.session.rules[key2])
                  thread.session.rules[key2] = [];
              }
            },
            "multifile/1": function(thread, atom) {
              var indicator = atom.args[0];
              if (pl3.type.is_variable(indicator)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_compound(indicator) || indicator.indicator !== "//2") {
                thread.throw_error(pl3.error.type("predicate_indicator", indicator, atom.indicator));
              } else if (pl3.type.is_variable(indicator.args[0]) || pl3.type.is_variable(indicator.args[1])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(indicator.args[0])) {
                thread.throw_error(pl3.error.type("atom", indicator.args[0], atom.indicator));
              } else if (!pl3.type.is_integer(indicator.args[1])) {
                thread.throw_error(pl3.error.type("integer", indicator.args[1], atom.indicator));
              } else {
                thread.session.multifile_predicates[atom.args[0].args[0].id + "/" + atom.args[0].args[1].value] = true;
              }
            },
            "set_prolog_flag/2": function(thread, atom) {
              var flag = atom.args[0], value = atom.args[1];
              if (pl3.type.is_variable(flag) || pl3.type.is_variable(value)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(flag)) {
                thread.throw_error(pl3.error.type("atom", flag, atom.indicator));
              } else if (!pl3.type.is_flag(flag)) {
                thread.throw_error(pl3.error.domain("prolog_flag", flag, atom.indicator));
              } else if (!pl3.type.is_value_flag(flag, value)) {
                thread.throw_error(pl3.error.domain("flag_value", new Term("+", [flag, value]), atom.indicator));
              } else if (!pl3.type.is_modifiable_flag(flag)) {
                thread.throw_error(pl3.error.permission("modify", "flag", flag));
              } else {
                thread.session.flag[flag.id] = value;
              }
            },
            "use_module/1": function(thread, atom) {
              var module2 = atom.args[0];
              if (pl3.type.is_variable(module2)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_term(module2)) {
                thread.throw_error(pl3.error.type("term", module2, atom.indicator));
              } else {
                if (pl3.type.is_module(module2)) {
                  var name = module2.args[0].id;
                  if (indexOf(thread.session.modules, name) === -1)
                    thread.session.modules.push(name);
                } else {
                }
              }
            },
            "char_conversion/2": function(thread, atom) {
              var inchar = atom.args[0], outchar = atom.args[1];
              if (pl3.type.is_variable(inchar) || pl3.type.is_variable(outchar)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_character(inchar)) {
                thread.throw_error(pl3.error.type("character", inchar, atom.indicator));
              } else if (!pl3.type.is_character(outchar)) {
                thread.throw_error(pl3.error.type("character", outchar, atom.indicator));
              } else {
                if (inchar.id === outchar.id) {
                  delete thread.session.__char_conversion[inchar.id];
                } else {
                  thread.session.__char_conversion[inchar.id] = outchar.id;
                }
              }
            },
            "op/3": function(thread, atom) {
              var priority = atom.args[0], type = atom.args[1], operator = atom.args[2];
              if (pl3.type.is_variable(priority) || pl3.type.is_variable(type) || pl3.type.is_variable(operator)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_integer(priority)) {
                thread.throw_error(pl3.error.type("integer", priority, atom.indicator));
              } else if (!pl3.type.is_atom(type)) {
                thread.throw_error(pl3.error.type("atom", type, atom.indicator));
              } else if (!pl3.type.is_atom(operator)) {
                thread.throw_error(pl3.error.type("atom", operator, atom.indicator));
              } else if (priority.value < 0 || priority.value > 1200) {
                thread.throw_error(pl3.error.domain("operator_priority", priority, atom.indicator));
              } else if (operator.id === ",") {
                thread.throw_error(pl3.error.permission("modify", "operator", operator, atom.indicator));
              } else if (operator.id === "|" && (priority.value < 1001 || type.id.length !== 3)) {
                thread.throw_error(pl3.error.permission("modify", "operator", operator, atom.indicator));
              } else if (["fy", "fx", "yf", "xf", "xfx", "yfx", "xfy"].indexOf(type.id) === -1) {
                thread.throw_error(pl3.error.domain("operator_specifier", type, atom.indicator));
              } else {
                var fix = {prefix: null, infix: null, postfix: null};
                for (var p in thread.session.__operators) {
                  if (!thread.session.__operators.hasOwnProperty(p))
                    continue;
                  var classes = thread.session.__operators[p][operator.id];
                  if (classes) {
                    if (indexOf(classes, "fx") !== -1) {
                      fix.prefix = {priority: p, type: "fx"};
                    }
                    if (indexOf(classes, "fy") !== -1) {
                      fix.prefix = {priority: p, type: "fy"};
                    }
                    if (indexOf(classes, "xf") !== -1) {
                      fix.postfix = {priority: p, type: "xf"};
                    }
                    if (indexOf(classes, "yf") !== -1) {
                      fix.postfix = {priority: p, type: "yf"};
                    }
                    if (indexOf(classes, "xfx") !== -1) {
                      fix.infix = {priority: p, type: "xfx"};
                    }
                    if (indexOf(classes, "xfy") !== -1) {
                      fix.infix = {priority: p, type: "xfy"};
                    }
                    if (indexOf(classes, "yfx") !== -1) {
                      fix.infix = {priority: p, type: "yfx"};
                    }
                  }
                }
                var current_class;
                switch (type.id) {
                  case "fy":
                  case "fx":
                    current_class = "prefix";
                    break;
                  case "yf":
                  case "xf":
                    current_class = "postfix";
                    break;
                  default:
                    current_class = "infix";
                    break;
                }
                if (((fix.prefix && current_class === "prefix" || fix.postfix && current_class === "postfix" || fix.infix && current_class === "infix") && fix[current_class].type !== type.id || fix.infix && current_class === "postfix" || fix.postfix && current_class === "infix") && priority.value !== 0) {
                  thread.throw_error(pl3.error.permission("create", "operator", operator, atom.indicator));
                } else {
                  if (fix[current_class]) {
                    remove(thread.session.__operators[fix[current_class].priority][operator.id], type.id);
                    if (thread.session.__operators[fix[current_class].priority][operator.id].length === 0) {
                      delete thread.session.__operators[fix[current_class].priority][operator.id];
                    }
                  }
                  if (priority.value > 0) {
                    if (!thread.session.__operators[priority.value])
                      thread.session.__operators[priority.value.toString()] = {};
                    if (!thread.session.__operators[priority.value][operator.id])
                      thread.session.__operators[priority.value][operator.id] = [];
                    thread.session.__operators[priority.value][operator.id].push(type.id);
                  }
                  return true;
                }
              }
            }
          },
          predicate: {
            "op/3": function(thread, point, atom) {
              if (pl3.directive["op/3"](thread, atom))
                thread.success(point);
            },
            "current_op/3": function(thread, point, atom) {
              var priority = atom.args[0], specifier = atom.args[1], operator = atom.args[2];
              var points = [];
              for (var p in thread.session.__operators)
                for (var o in thread.session.__operators[p])
                  for (var i = 0; i < thread.session.__operators[p][o].length; i++)
                    points.push(new State(point.goal.replace(new Term(",", [
                      new Term("=", [new Num(p, false), priority]),
                      new Term(",", [
                        new Term("=", [new Term(thread.session.__operators[p][o][i], []), specifier]),
                        new Term("=", [new Term(o, []), operator])
                      ])
                    ])), point.substitution, point));
              thread.prepend(points);
            },
            ";/2": function(thread, point, atom) {
              if (pl3.type.is_term(atom.args[0]) && atom.args[0].indicator === "->/2") {
                var points = thread.points;
                var format_success = thread.session.format_success;
                var format_error = thread.session.format_error;
                thread.session.format_success = function(x) {
                  return x.substitution;
                };
                thread.session.format_error = function(x) {
                  return x.goal;
                };
                thread.points = [new State(atom.args[0].args[0], point.substitution, point)];
                var callback = function(answer) {
                  thread.points = points;
                  thread.session.format_success = format_success;
                  thread.session.format_error = format_error;
                  if (answer === false) {
                    thread.prepend([new State(point.goal.replace(atom.args[1]), point.substitution, point)]);
                  } else if (pl3.type.is_error(answer))
                    thread.throw_error(answer.args[0]);
                  else if (answer === null) {
                    thread.prepend([point]);
                    thread.__calls.shift()(null);
                  } else {
                    thread.prepend([new State(point.goal.replace(atom.args[0].args[1]).apply(answer), point.substitution.apply(answer), point)]);
                  }
                };
                thread.__calls.unshift(callback);
              } else {
                var left = new State(point.goal.replace(atom.args[0]), point.substitution, point);
                var right = new State(point.goal.replace(atom.args[1]), point.substitution, point);
                thread.prepend([left, right]);
              }
            },
            "!/0": function(thread, point, atom) {
              var parent_cut, last_cut, states = [];
              parent_cut = point;
              last_cut = null;
              while (parent_cut.parent !== null && parent_cut.parent.goal.search(atom)) {
                last_cut = parent_cut;
                parent_cut = parent_cut.parent;
                if (parent_cut.goal !== null) {
                  var selected = parent_cut.goal.select();
                  if (selected && selected.id === "call" && selected.search(atom)) {
                    parent_cut = last_cut;
                    break;
                  }
                }
              }
              for (var i = thread.points.length - 1; i >= 0; i--) {
                var state = thread.points[i];
                var node = state.parent;
                while (node !== null && node !== parent_cut.parent) {
                  node = node.parent;
                }
                if (node === null && node !== parent_cut.parent)
                  states.push(state);
              }
              thread.points = states.reverse();
              thread.success(point);
            },
            "\\+/1": function(thread, point, atom) {
              var goal = atom.args[0];
              if (pl3.type.is_variable(goal)) {
                thread.throw_error(pl3.error.instantiation(thread.level));
              } else if (!pl3.type.is_callable(goal)) {
                thread.throw_error(pl3.error.type("callable", goal, thread.level));
              } else {
                thread.prepend([
                  new State(point.goal.replace(new Term(",", [new Term(",", [new Term("call", [goal]), new Term("!", [])]), new Term("fail", [])])), point.substitution, point),
                  new State(point.goal.replace(null), point.substitution, point)
                ]);
              }
            },
            "->/2": function(thread, point, atom) {
              var goal = point.goal.replace(new Term(",", [atom.args[0], new Term(",", [new Term("!"), atom.args[1]])]));
              thread.prepend([new State(goal, point.substitution, point)]);
            },
            "fail/0": function(_1, _2, _3) {
            },
            "false/0": function(_1, _2, _3) {
            },
            "true/0": function(thread, point, _) {
              thread.success(point);
            },
            "call/1": callN(1),
            "call/2": callN(2),
            "call/3": callN(3),
            "call/4": callN(4),
            "call/5": callN(5),
            "call/6": callN(6),
            "call/7": callN(7),
            "call/8": callN(8),
            "once/1": function(thread, point, atom) {
              var goal = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("call", [goal]), new Term("!", [])])), point.substitution, point)]);
            },
            "forall/2": function(thread, point, atom) {
              var generate = atom.args[0], test = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("\\+", [new Term(",", [new Term("call", [generate]), new Term("\\+", [new Term("call", [test])])])])), point.substitution, point)]);
            },
            "repeat/0": function(thread, point, _) {
              thread.prepend([new State(point.goal.replace(null), point.substitution, point), point]);
            },
            "throw/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(thread.level));
              } else {
                thread.throw_error(atom.args[0]);
              }
            },
            "catch/3": function(thread, point, atom) {
              var points = thread.points;
              thread.points = [];
              thread.prepend([new State(atom.args[0], point.substitution, point)]);
              var format_success = thread.session.format_success;
              var format_error = thread.session.format_error;
              thread.session.format_success = function(x) {
                return x.substitution;
              };
              thread.session.format_error = function(x) {
                return x.goal;
              };
              var callback = function(answer) {
                var call_points = thread.points;
                thread.points = points;
                thread.session.format_success = format_success;
                thread.session.format_error = format_error;
                if (pl3.type.is_error(answer)) {
                  var states = [];
                  for (var i = thread.points.length - 1; i >= 0; i--) {
                    var state = thread.points[i];
                    var node = state.parent;
                    while (node !== null && node !== point.parent) {
                      node = node.parent;
                    }
                    if (node === null && node !== point.parent)
                      states.push(state);
                  }
                  thread.points = states;
                  var occurs_check = thread.get_flag("occurs_check").indicator === "true/0";
                  var state = new State();
                  var mgu = pl3.unify(answer.args[0], atom.args[1], occurs_check);
                  if (mgu !== null) {
                    state.substitution = point.substitution.apply(mgu);
                    state.goal = point.goal.replace(atom.args[2]).apply(mgu);
                    state.parent = point;
                    thread.prepend([state]);
                  } else {
                    thread.throw_error(answer.args[0]);
                  }
                } else if (answer !== false) {
                  var answer_state = answer === null ? [] : [new State(point.goal.apply(answer).replace(null), point.substitution.apply(answer), point)];
                  var filter_points = [];
                  for (var i = call_points.length - 1; i >= 0; i--) {
                    filter_points.push(call_points[i]);
                    var selected = call_points[i].goal !== null ? call_points[i].goal.select() : null;
                    if (pl3.type.is_term(selected) && selected.indicator === "!/0")
                      break;
                  }
                  var catch_points = map(filter_points, function(state2) {
                    if (state2.goal === null)
                      state2.goal = new Term("true", []);
                    state2 = new State(point.goal.replace(new Term("catch", [state2.goal, atom.args[1], atom.args[2]])), point.substitution.apply(state2.substitution), state2.parent);
                    state2.exclude = atom.args[0].variables();
                    return state2;
                  }).reverse();
                  thread.prepend(catch_points);
                  thread.prepend(answer_state);
                  if (answer === null) {
                    this.current_limit = 0;
                    thread.__calls.shift()(null);
                  }
                }
              };
              thread.__calls.unshift(callback);
            },
            "=/2": function(thread, point, atom) {
              var occurs_check = thread.get_flag("occurs_check").indicator === "true/0";
              var state = new State();
              var mgu = pl3.unify(atom.args[0], atom.args[1], occurs_check);
              if (mgu !== null) {
                state.goal = point.goal.apply(mgu).replace(null);
                state.substitution = point.substitution.apply(mgu);
                state.parent = point;
                thread.prepend([state]);
              }
            },
            "unify_with_occurs_check/2": function(thread, point, atom) {
              var state = new State();
              var mgu = pl3.unify(atom.args[0], atom.args[1], true);
              if (mgu !== null) {
                state.goal = point.goal.apply(mgu).replace(null);
                state.substitution = point.substitution.apply(mgu);
                state.parent = point;
                thread.prepend([state]);
              }
            },
            "\\=/2": function(thread, point, atom) {
              var occurs_check = thread.get_flag("occurs_check").indicator === "true/0";
              var mgu = pl3.unify(atom.args[0], atom.args[1], occurs_check);
              if (mgu === null) {
                thread.success(point);
              }
            },
            "subsumes_term/2": function(thread, point, atom) {
              var occurs_check = thread.get_flag("occurs_check").indicator === "true/0";
              var mgu = pl3.unify(atom.args[1], atom.args[0], occurs_check);
              if (mgu !== null && atom.args[1].apply(mgu).equals(atom.args[1])) {
                thread.success(point);
              }
            },
            "findall/3": function(thread, point, atom) {
              var template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
              if (pl3.type.is_variable(goal)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(goal)) {
                thread.throw_error(pl3.error.type("callable", goal, atom.indicator));
              } else if (!pl3.type.is_variable(instances) && !pl3.type.is_list(instances)) {
                thread.throw_error(pl3.error.type("list", instances, atom.indicator));
              } else {
                var variable = thread.next_free_variable();
                var newGoal = new Term(",", [goal, new Term("=", [variable, template])]);
                var points = thread.points;
                var limit = thread.session.limit;
                var format_success = thread.session.format_success;
                thread.session.format_success = function(x) {
                  return x.substitution;
                };
                thread.add_goal(newGoal, true, point);
                var answers = [];
                var callback = function(answer) {
                  if (answer !== false && answer !== null && !pl3.type.is_error(answer)) {
                    thread.__calls.unshift(callback);
                    answers.push(answer.links[variable.id]);
                    thread.session.limit = thread.current_limit;
                  } else {
                    thread.points = points;
                    thread.session.limit = limit;
                    thread.session.format_success = format_success;
                    if (pl3.type.is_error(answer)) {
                      thread.throw_error(answer.args[0]);
                    } else if (thread.current_limit > 0) {
                      var list = new Term("[]");
                      for (var i = answers.length - 1; i >= 0; i--) {
                        list = new Term(".", [answers[i], list]);
                      }
                      thread.prepend([new State(point.goal.replace(new Term("=", [instances, list])), point.substitution, point)]);
                    }
                  }
                };
                thread.__calls.unshift(callback);
              }
            },
            "bagof/3": function(thread, point, atom) {
              var answer, template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
              if (pl3.type.is_variable(goal)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(goal)) {
                thread.throw_error(pl3.error.type("callable", goal, atom.indicator));
              } else if (!pl3.type.is_variable(instances) && !pl3.type.is_list(instances)) {
                thread.throw_error(pl3.error.type("list", instances, atom.indicator));
              } else {
                var variable = thread.next_free_variable();
                var template_vars;
                if (goal.indicator === "^/2") {
                  template_vars = goal.args[0].variables();
                  goal = goal.args[1];
                } else {
                  template_vars = [];
                }
                template_vars = template_vars.concat(template.variables());
                var free_vars = goal.variables().filter(function(v) {
                  return indexOf(template_vars, v) === -1;
                });
                var list_vars = new Term("[]");
                for (var i = free_vars.length - 1; i >= 0; i--) {
                  list_vars = new Term(".", [new Var(free_vars[i]), list_vars]);
                }
                var newGoal = new Term(",", [goal, new Term("=", [variable, new Term(",", [list_vars, template])])]);
                var points = thread.points;
                var limit = thread.session.limit;
                var format_success = thread.session.format_success;
                thread.session.format_success = function(x) {
                  return x.substitution;
                };
                thread.add_goal(newGoal, true, point);
                var answers = [];
                var callback = function(answer2) {
                  if (answer2 !== false && answer2 !== null && !pl3.type.is_error(answer2)) {
                    thread.__calls.unshift(callback);
                    var match = false;
                    var arg_vars = answer2.links[variable.id].args[0];
                    var arg_template = answer2.links[variable.id].args[1];
                    for (var _elem in answers) {
                      if (!answers.hasOwnProperty(_elem))
                        continue;
                      var elem = answers[_elem];
                      if (elem.variables.equals(arg_vars)) {
                        elem.answers.push(arg_template);
                        match = true;
                        break;
                      }
                    }
                    if (!match) {
                      answers.push({variables: arg_vars, answers: [arg_template]});
                    }
                    thread.session.limit = thread.current_limit;
                  } else {
                    thread.points = points;
                    thread.session.limit = limit;
                    thread.session.format_success = format_success;
                    if (pl3.type.is_error(answer2)) {
                      thread.throw_error(answer2.args[0]);
                    } else if (thread.current_limit > 0) {
                      var states = [];
                      for (var i2 = 0; i2 < answers.length; i2++) {
                        answer2 = answers[i2].answers;
                        var list = new Term("[]");
                        for (var j = answer2.length - 1; j >= 0; j--) {
                          list = new Term(".", [answer2[j], list]);
                        }
                        states.push(new State(point.goal.replace(new Term(",", [new Term("=", [list_vars, answers[i2].variables]), new Term("=", [instances, list])])), point.substitution, point));
                      }
                      thread.prepend(states);
                    }
                  }
                };
                thread.__calls.unshift(callback);
              }
            },
            "setof/3": function(thread, point, atom) {
              var answer, template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
              if (pl3.type.is_variable(goal)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(goal)) {
                thread.throw_error(pl3.error.type("callable", goal, atom.indicator));
              } else if (!pl3.type.is_variable(instances) && !pl3.type.is_list(instances)) {
                thread.throw_error(pl3.error.type("list", instances, atom.indicator));
              } else {
                var variable = thread.next_free_variable();
                var template_vars;
                if (goal.indicator === "^/2") {
                  template_vars = goal.args[0].variables();
                  goal = goal.args[1];
                } else {
                  template_vars = [];
                }
                template_vars = template_vars.concat(template.variables());
                var free_vars = goal.variables().filter(function(v) {
                  return indexOf(template_vars, v) === -1;
                });
                var list_vars = new Term("[]");
                for (var i = free_vars.length - 1; i >= 0; i--) {
                  list_vars = new Term(".", [new Var(free_vars[i]), list_vars]);
                }
                var newGoal = new Term(",", [goal, new Term("=", [variable, new Term(",", [list_vars, template])])]);
                var points = thread.points;
                var limit = thread.session.limit;
                var format_success = thread.session.format_success;
                thread.session.format_success = function(x) {
                  return x.substitution;
                };
                thread.add_goal(newGoal, true, point);
                var answers = [];
                var callback = function(answer2) {
                  if (answer2 !== false && answer2 !== null && !pl3.type.is_error(answer2)) {
                    thread.__calls.unshift(callback);
                    var match = false;
                    var arg_vars = answer2.links[variable.id].args[0];
                    var arg_template = answer2.links[variable.id].args[1];
                    for (var _elem in answers) {
                      if (!answers.hasOwnProperty(_elem))
                        continue;
                      var elem = answers[_elem];
                      if (elem.variables.equals(arg_vars)) {
                        elem.answers.push(arg_template);
                        match = true;
                        break;
                      }
                    }
                    if (!match) {
                      answers.push({variables: arg_vars, answers: [arg_template]});
                    }
                    thread.session.limit = thread.current_limit;
                  } else {
                    thread.points = points;
                    thread.session.limit = limit;
                    thread.session.format_success = format_success;
                    if (pl3.type.is_error(answer2)) {
                      thread.throw_error(answer2.args[0]);
                    } else if (thread.current_limit > 0) {
                      var states = [];
                      for (var i2 = 0; i2 < answers.length; i2++) {
                        answer2 = answers[i2].answers.sort(pl3.compare);
                        var list = new Term("[]");
                        for (var j = answer2.length - 1; j >= 0; j--) {
                          list = new Term(".", [answer2[j], list]);
                        }
                        states.push(new State(point.goal.replace(new Term(",", [new Term("=", [list_vars, answers[i2].variables]), new Term("=", [instances, list])])), point.substitution, point));
                      }
                      thread.prepend(states);
                    }
                  }
                };
                thread.__calls.unshift(callback);
              }
            },
            "functor/3": function(thread, point, atom) {
              var subs;
              var term = atom.args[0], name = atom.args[1], arity = atom.args[2];
              if (pl3.type.is_variable(term) && (pl3.type.is_variable(name) || pl3.type.is_variable(arity))) {
                thread.throw_error(pl3.error.instantiation("functor/3"));
              } else if (!pl3.type.is_variable(arity) && !pl3.type.is_integer(arity)) {
                thread.throw_error(pl3.error.type("integer", atom.args[2], "functor/3"));
              } else if (!pl3.type.is_variable(name) && !pl3.type.is_atomic(name)) {
                thread.throw_error(pl3.error.type("atomic", atom.args[1], "functor/3"));
              } else if (pl3.type.is_integer(name) && pl3.type.is_integer(arity) && arity.value !== 0) {
                thread.throw_error(pl3.error.type("atom", atom.args[1], "functor/3"));
              } else if (pl3.type.is_variable(term)) {
                if (atom.args[2].value >= 0) {
                  var args = [];
                  for (var i = 0; i < arity.value; i++)
                    args.push(thread.next_free_variable());
                  var functor = pl3.type.is_integer(name) ? name : new Term(name.id, args);
                  thread.prepend([new State(point.goal.replace(new Term("=", [term, functor])), point.substitution, point)]);
                }
              } else {
                var id = pl3.type.is_integer(term) ? term : new Term(term.id, []);
                var length = pl3.type.is_integer(term) ? new Num(0, false) : new Num(term.args.length, false);
                var goal = new Term(",", [new Term("=", [id, name]), new Term("=", [length, arity])]);
                thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
              }
            },
            "arg/3": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0]) || pl3.type.is_variable(atom.args[1])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (atom.args[0].value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", atom.args[0], atom.indicator));
              } else if (!pl3.type.is_compound(atom.args[1])) {
                thread.throw_error(pl3.error.type("compound", atom.args[1], atom.indicator));
              } else {
                var n = atom.args[0].value;
                if (n > 0 && n <= atom.args[1].args.length) {
                  var goal = new Term("=", [atom.args[1].args[n - 1], atom.args[2]]);
                  thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
                }
              }
            },
            "=../2": function(thread, point, atom) {
              var list;
              if (pl3.type.is_variable(atom.args[0]) && (pl3.type.is_variable(atom.args[1]) || pl3.type.is_non_empty_list(atom.args[1]) && pl3.type.is_variable(atom.args[1].args[0]))) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_fully_list(atom.args[1])) {
                thread.throw_error(pl3.error.type("list", atom.args[1], atom.indicator));
              } else if (!pl3.type.is_variable(atom.args[0])) {
                if (pl3.type.is_atomic(atom.args[0])) {
                  list = new Term(".", [atom.args[0], new Term("[]")]);
                } else {
                  list = new Term("[]");
                  for (var i = atom.args[0].args.length - 1; i >= 0; i--) {
                    list = new Term(".", [atom.args[0].args[i], list]);
                  }
                  list = new Term(".", [new Term(atom.args[0].id), list]);
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [list, atom.args[1]])), point.substitution, point)]);
              } else if (!pl3.type.is_variable(atom.args[1])) {
                var args = [];
                list = atom.args[1].args[1];
                while (list.indicator === "./2") {
                  args.push(list.args[0]);
                  list = list.args[1];
                }
                if (pl3.type.is_variable(atom.args[0]) && pl3.type.is_variable(list)) {
                  thread.throw_error(pl3.error.instantiation(atom.indicator));
                } else if (args.length === 0 && pl3.type.is_compound(atom.args[1].args[0])) {
                  thread.throw_error(pl3.error.type("atomic", atom.args[1].args[0], atom.indicator));
                } else if (args.length > 0 && (pl3.type.is_compound(atom.args[1].args[0]) || pl3.type.is_number(atom.args[1].args[0]))) {
                  thread.throw_error(pl3.error.type("atom", atom.args[1].args[0], atom.indicator));
                } else {
                  if (args.length === 0) {
                    thread.prepend([new State(point.goal.replace(new Term("=", [atom.args[1].args[0], atom.args[0]], point)), point.substitution, point)]);
                  } else {
                    thread.prepend([new State(point.goal.replace(new Term("=", [new Term(atom.args[1].args[0].id, args), atom.args[0]])), point.substitution, point)]);
                  }
                }
              }
            },
            "copy_term/2": function(thread, point, atom) {
              var renamed = atom.args[0].rename(thread);
              thread.prepend([new State(point.goal.replace(new Term("=", [renamed, atom.args[1]])), point.substitution, point.parent)]);
            },
            "term_variables/2": function(thread, point, atom) {
              var term = atom.args[0], vars = atom.args[1];
              if (!pl3.type.is_fully_list(vars)) {
                thread.throw_error(pl3.error.type("list", vars, atom.indicator));
              } else {
                var list = arrayToList(map(nub(term.variables()), function(v) {
                  return new Var(v);
                }));
                thread.prepend([new State(point.goal.replace(new Term("=", [vars, list])), point.substitution, point)]);
              }
            },
            "clause/2": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(atom.args[0])) {
                thread.throw_error(pl3.error.type("callable", atom.args[0], atom.indicator));
              } else if (!pl3.type.is_variable(atom.args[1]) && !pl3.type.is_callable(atom.args[1])) {
                thread.throw_error(pl3.error.type("callable", atom.args[1], atom.indicator));
              } else if (thread.session.rules[atom.args[0].indicator] !== void 0) {
                if (thread.is_public_predicate(atom.args[0].indicator)) {
                  var states = [];
                  for (var _rule in thread.session.rules[atom.args[0].indicator]) {
                    if (!thread.session.rules[atom.args[0].indicator].hasOwnProperty(_rule))
                      continue;
                    var rule = thread.session.rules[atom.args[0].indicator][_rule];
                    thread.session.renamed_variables = {};
                    rule = rule.rename(thread);
                    if (rule.body === null) {
                      rule.body = new Term("true");
                    }
                    var goal = new Term(",", [new Term("=", [rule.head, atom.args[0]]), new Term("=", [rule.body, atom.args[1]])]);
                    states.push(new State(point.goal.replace(goal), point.substitution, point));
                  }
                  thread.prepend(states);
                } else {
                  thread.throw_error(pl3.error.permission("access", "private_procedure", atom.args[0].indicator, atom.indicator));
                }
              }
            },
            "current_predicate/1": function(thread, point, atom) {
              var indicator = atom.args[0];
              if (!pl3.type.is_variable(indicator) && (!pl3.type.is_compound(indicator) || indicator.indicator !== "//2")) {
                thread.throw_error(pl3.error.type("predicate_indicator", indicator, atom.indicator));
              } else if (!pl3.type.is_variable(indicator) && !pl3.type.is_variable(indicator.args[0]) && !pl3.type.is_atom(indicator.args[0])) {
                thread.throw_error(pl3.error.type("atom", indicator.args[0], atom.indicator));
              } else if (!pl3.type.is_variable(indicator) && !pl3.type.is_variable(indicator.args[1]) && !pl3.type.is_integer(indicator.args[1])) {
                thread.throw_error(pl3.error.type("integer", indicator.args[1], atom.indicator));
              } else {
                var states = [];
                for (var i in thread.session.rules) {
                  if (!thread.session.rules.hasOwnProperty(i))
                    continue;
                  var index = i.lastIndexOf("/");
                  var name = i.substr(0, index);
                  var arity = parseInt(i.substr(index + 1, i.length - (index + 1)));
                  var predicate = new Term("/", [new Term(name), new Num(arity, false)]);
                  var goal = new Term("=", [predicate, indicator]);
                  states.push(new State(point.goal.replace(goal), point.substitution, point));
                }
                thread.prepend(states);
              }
            },
            "asserta/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(atom.args[0])) {
                thread.throw_error(pl3.error.type("callable", atom.args[0], atom.indicator));
              } else {
                var head, body;
                if (atom.args[0].indicator === ":-/2") {
                  head = atom.args[0].args[0];
                  body = body_conversion(atom.args[0].args[1]);
                } else {
                  head = atom.args[0];
                  body = null;
                }
                if (!pl3.type.is_callable(head)) {
                  thread.throw_error(pl3.error.type("callable", head, atom.indicator));
                } else if (body !== null && !pl3.type.is_callable(body)) {
                  thread.throw_error(pl3.error.type("callable", body, atom.indicator));
                } else if (thread.is_public_predicate(head.indicator)) {
                  if (thread.session.rules[head.indicator] === void 0) {
                    thread.session.rules[head.indicator] = [];
                  }
                  thread.session.public_predicates[head.indicator] = true;
                  thread.session.rules[head.indicator] = [new Rule(head, body, true)].concat(thread.session.rules[head.indicator]);
                  thread.success(point);
                } else {
                  thread.throw_error(pl3.error.permission("modify", "static_procedure", head.indicator, atom.indicator));
                }
              }
            },
            "assertz/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(atom.args[0])) {
                thread.throw_error(pl3.error.type("callable", atom.args[0], atom.indicator));
              } else {
                var head, body;
                if (atom.args[0].indicator === ":-/2") {
                  head = atom.args[0].args[0];
                  body = body_conversion(atom.args[0].args[1]);
                } else {
                  head = atom.args[0];
                  body = null;
                }
                if (!pl3.type.is_callable(head)) {
                  thread.throw_error(pl3.error.type("callable", head, atom.indicator));
                } else if (body !== null && !pl3.type.is_callable(body)) {
                  thread.throw_error(pl3.error.type("callable", body, atom.indicator));
                } else if (thread.is_public_predicate(head.indicator)) {
                  if (thread.session.rules[head.indicator] === void 0) {
                    thread.session.rules[head.indicator] = [];
                  }
                  thread.session.public_predicates[head.indicator] = true;
                  thread.session.rules[head.indicator].push(new Rule(head, body, true));
                  thread.success(point);
                } else {
                  thread.throw_error(pl3.error.permission("modify", "static_procedure", head.indicator, atom.indicator));
                }
              }
            },
            "retract/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(atom.args[0])) {
                thread.throw_error(pl3.error.type("callable", atom.args[0], atom.indicator));
              } else {
                var head, body;
                if (atom.args[0].indicator === ":-/2") {
                  head = atom.args[0].args[0];
                  body = atom.args[0].args[1];
                } else {
                  head = atom.args[0];
                  body = new Term("true");
                }
                if (typeof point.retract === "undefined") {
                  if (thread.is_public_predicate(head.indicator)) {
                    if (thread.session.rules[head.indicator] !== void 0) {
                      var states = [];
                      for (var i = 0; i < thread.session.rules[head.indicator].length; i++) {
                        thread.session.renamed_variables = {};
                        var orule = thread.session.rules[head.indicator][i];
                        var rule = orule.rename(thread);
                        if (rule.body === null)
                          rule.body = new Term("true", []);
                        var occurs_check = thread.get_flag("occurs_check").indicator === "true/0";
                        var mgu = pl3.unify(new Term(",", [head, body]), new Term(",", [rule.head, rule.body]), occurs_check);
                        if (mgu !== null) {
                          var state = new State(point.goal.replace(new Term(",", [
                            new Term("retract", [new Term(":-", [head, body])]),
                            new Term(",", [
                              new Term("=", [head, rule.head]),
                              new Term("=", [body, rule.body])
                            ])
                          ])), point.substitution, point);
                          state.retract = orule;
                          states.push(state);
                        }
                      }
                      thread.prepend(states);
                    }
                  } else {
                    thread.throw_error(pl3.error.permission("modify", "static_procedure", head.indicator, atom.indicator));
                  }
                } else {
                  retract(thread, point, head.indicator, point.retract);
                }
              }
            },
            "retractall/1": function(thread, point, atom) {
              var head = atom.args[0];
              if (pl3.type.is_variable(head)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_callable(head)) {
                thread.throw_error(pl3.error.type("callable", head, atom.indicator));
              } else {
                thread.prepend([
                  new State(point.goal.replace(new Term(",", [
                    new Term("retract", [new pl3.type.Term(":-", [head, new Var("_")])]),
                    new Term("fail", [])
                  ])), point.substitution, point),
                  new State(point.goal.replace(null), point.substitution, point)
                ]);
              }
            },
            "abolish/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0]) || pl3.type.is_term(atom.args[0]) && atom.args[0].indicator === "//2" && (pl3.type.is_variable(atom.args[0].args[0]) || pl3.type.is_variable(atom.args[0].args[1]))) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_term(atom.args[0]) || atom.args[0].indicator !== "//2") {
                thread.throw_error(pl3.error.type("predicate_indicator", atom.args[0], atom.indicator));
              } else if (!pl3.type.is_atom(atom.args[0].args[0])) {
                thread.throw_error(pl3.error.type("atom", atom.args[0].args[0], atom.indicator));
              } else if (!pl3.type.is_integer(atom.args[0].args[1])) {
                thread.throw_error(pl3.error.type("integer", atom.args[0].args[1], atom.indicator));
              } else if (atom.args[0].args[1].value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", atom.args[0].args[1], atom.indicator));
              } else if (pl3.type.is_number(thread.get_flag("max_arity")) && atom.args[0].args[1].value > thread.get_flag("max_arity").value) {
                thread.throw_error(pl3.error.representation("max_arity", atom.indicator));
              } else {
                var indicator = atom.args[0].args[0].id + "/" + atom.args[0].args[1].value;
                if (thread.is_public_predicate(indicator)) {
                  delete thread.session.rules[indicator];
                  thread.success(point);
                } else {
                  thread.throw_error(pl3.error.permission("modify", "static_procedure", indicator, atom.indicator));
                }
              }
            },
            "atom_length/2": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(atom.args[0])) {
                thread.throw_error(pl3.error.type("atom", atom.args[0], atom.indicator));
              } else if (!pl3.type.is_variable(atom.args[1]) && !pl3.type.is_integer(atom.args[1])) {
                thread.throw_error(pl3.error.type("integer", atom.args[1], atom.indicator));
              } else if (pl3.type.is_integer(atom.args[1]) && atom.args[1].value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", atom.args[1], atom.indicator));
              } else {
                var length = new Num(atom.args[0].id.length, false);
                thread.prepend([new State(point.goal.replace(new Term("=", [length, atom.args[1]])), point.substitution, point)]);
              }
            },
            "atom_concat/3": function(thread, point, atom) {
              var str, goal, start = atom.args[0], end = atom.args[1], whole = atom.args[2];
              if (pl3.type.is_variable(whole) && (pl3.type.is_variable(start) || pl3.type.is_variable(end))) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(start) && !pl3.type.is_atom(start)) {
                thread.throw_error(pl3.error.type("atom", start, atom.indicator));
              } else if (!pl3.type.is_variable(end) && !pl3.type.is_atom(end)) {
                thread.throw_error(pl3.error.type("atom", end, atom.indicator));
              } else if (!pl3.type.is_variable(whole) && !pl3.type.is_atom(whole)) {
                thread.throw_error(pl3.error.type("atom", whole, atom.indicator));
              } else {
                var v1 = pl3.type.is_variable(start);
                var v2 = pl3.type.is_variable(end);
                if (!v1 && !v2) {
                  goal = new Term("=", [whole, new Term(start.id + end.id)]);
                  thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
                } else if (v1 && !v2) {
                  str = whole.id.substr(0, whole.id.length - end.id.length);
                  if (str + end.id === whole.id) {
                    goal = new Term("=", [start, new Term(str)]);
                    thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
                  }
                } else if (v2 && !v1) {
                  str = whole.id.substr(start.id.length);
                  if (start.id + str === whole.id) {
                    goal = new Term("=", [end, new Term(str)]);
                    thread.prepend([new State(point.goal.replace(goal), point.substitution, point)]);
                  }
                } else {
                  var states = [];
                  for (var i = 0; i <= whole.id.length; i++) {
                    var atom1 = new Term(whole.id.substr(0, i));
                    var atom2 = new Term(whole.id.substr(i));
                    goal = new Term(",", [new Term("=", [atom1, start]), new Term("=", [atom2, end])]);
                    states.push(new State(point.goal.replace(goal), point.substitution, point));
                  }
                  thread.prepend(states);
                }
              }
            },
            "sub_atom/5": function(thread, point, atom) {
              var i, atom1 = atom.args[0], before = atom.args[1], length = atom.args[2], after = atom.args[3], subatom = atom.args[4];
              if (pl3.type.is_variable(atom1)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(before) && !pl3.type.is_integer(before)) {
                thread.throw_error(pl3.error.type("integer", before, atom.indicator));
              } else if (!pl3.type.is_variable(length) && !pl3.type.is_integer(length)) {
                thread.throw_error(pl3.error.type("integer", length, atom.indicator));
              } else if (!pl3.type.is_variable(after) && !pl3.type.is_integer(after)) {
                thread.throw_error(pl3.error.type("integer", after, atom.indicator));
              } else if (pl3.type.is_integer(before) && before.value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", before, atom.indicator));
              } else if (pl3.type.is_integer(length) && length.value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", length, atom.indicator));
              } else if (pl3.type.is_integer(after) && after.value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", after, atom.indicator));
              } else {
                var bs = [], ls = [], as = [];
                if (pl3.type.is_variable(before)) {
                  for (i = 0; i <= atom1.id.length; i++) {
                    bs.push(i);
                  }
                } else {
                  bs.push(before.value);
                }
                if (pl3.type.is_variable(length)) {
                  for (i = 0; i <= atom1.id.length; i++) {
                    ls.push(i);
                  }
                } else {
                  ls.push(length.value);
                }
                if (pl3.type.is_variable(after)) {
                  for (i = 0; i <= atom1.id.length; i++) {
                    as.push(i);
                  }
                } else {
                  as.push(after.value);
                }
                var states = [];
                for (var _i in bs) {
                  if (!bs.hasOwnProperty(_i))
                    continue;
                  i = bs[_i];
                  for (var _j in ls) {
                    if (!ls.hasOwnProperty(_j))
                      continue;
                    var j = ls[_j];
                    var k = atom1.id.length - i - j;
                    if (indexOf(as, k) !== -1) {
                      if (i + j + k === atom1.id.length) {
                        var str = atom1.id.substr(i, j);
                        if (atom1.id === atom1.id.substr(0, i) + str + atom1.id.substr(i + j, k)) {
                          var pl1 = new Term("=", [new Term(str), subatom]);
                          var pl22 = new Term("=", [before, new Num(i)]);
                          var pl32 = new Term("=", [length, new Num(j)]);
                          var pl4 = new Term("=", [after, new Num(k)]);
                          var goal = new Term(",", [new Term(",", [new Term(",", [pl22, pl32]), pl4]), pl1]);
                          states.push(new State(point.goal.replace(goal), point.substitution, point));
                        }
                      }
                    }
                  }
                }
                thread.prepend(states);
              }
            },
            "atom_chars/2": function(thread, point, atom) {
              var atom1 = atom.args[0], list = atom.args[1];
              if (pl3.type.is_variable(atom1) && pl3.type.is_variable(list)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(atom1) && !pl3.type.is_atom(atom1)) {
                thread.throw_error(pl3.error.type("atom", atom1, atom.indicator));
              } else {
                if (!pl3.type.is_variable(atom1)) {
                  var list1 = new Term("[]");
                  for (var i = atom1.id.length - 1; i >= 0; i--) {
                    list1 = new Term(".", [new Term(atom1.id.charAt(i)), list1]);
                  }
                  thread.prepend([new State(point.goal.replace(new Term("=", [list, list1])), point.substitution, point)]);
                } else {
                  var pointer = list;
                  var v = pl3.type.is_variable(atom1);
                  var str = "";
                  while (pointer.indicator === "./2") {
                    if (!pl3.type.is_character(pointer.args[0])) {
                      if (pl3.type.is_variable(pointer.args[0]) && v) {
                        thread.throw_error(pl3.error.instantiation(atom.indicator));
                        return;
                      } else if (!pl3.type.is_variable(pointer.args[0])) {
                        thread.throw_error(pl3.error.type("character", pointer.args[0], atom.indicator));
                        return;
                      }
                    } else {
                      str += pointer.args[0].id;
                    }
                    pointer = pointer.args[1];
                  }
                  if (pl3.type.is_variable(pointer) && v) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  } else if (!pl3.type.is_empty_list(pointer) && !pl3.type.is_variable(pointer)) {
                    thread.throw_error(pl3.error.type("list", list, atom.indicator));
                  } else {
                    thread.prepend([new State(point.goal.replace(new Term("=", [new Term(str), atom1])), point.substitution, point)]);
                  }
                }
              }
            },
            "atom_codes/2": function(thread, point, atom) {
              var atom1 = atom.args[0], list = atom.args[1];
              if (pl3.type.is_variable(atom1) && pl3.type.is_variable(list)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(atom1) && !pl3.type.is_atom(atom1)) {
                thread.throw_error(pl3.error.type("atom", atom1, atom.indicator));
              } else {
                if (!pl3.type.is_variable(atom1)) {
                  var list1 = new Term("[]");
                  for (var i = atom1.id.length - 1; i >= 0; i--) {
                    list1 = new Term(".", [new Num(codePointAt(atom1.id, i), false), list1]);
                  }
                  thread.prepend([new State(point.goal.replace(new Term("=", [list, list1])), point.substitution, point)]);
                } else {
                  var pointer = list;
                  var v = pl3.type.is_variable(atom1);
                  var str = "";
                  while (pointer.indicator === "./2") {
                    if (!pl3.type.is_character_code(pointer.args[0])) {
                      if (pl3.type.is_variable(pointer.args[0]) && v) {
                        thread.throw_error(pl3.error.instantiation(atom.indicator));
                        return;
                      } else if (!pl3.type.is_variable(pointer.args[0])) {
                        thread.throw_error(pl3.error.representation("character_code", atom.indicator));
                        return;
                      }
                    } else {
                      str += fromCodePoint(pointer.args[0].value);
                    }
                    pointer = pointer.args[1];
                  }
                  if (pl3.type.is_variable(pointer) && v) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  } else if (!pl3.type.is_empty_list(pointer) && !pl3.type.is_variable(pointer)) {
                    thread.throw_error(pl3.error.type("list", list, atom.indicator));
                  } else {
                    thread.prepend([new State(point.goal.replace(new Term("=", [new Term(str), atom1])), point.substitution, point)]);
                  }
                }
              }
            },
            "char_code/2": function(thread, point, atom) {
              var char2 = atom.args[0], code = atom.args[1];
              if (pl3.type.is_variable(char2) && pl3.type.is_variable(code)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(char2) && !pl3.type.is_character(char2)) {
                thread.throw_error(pl3.error.type("character", char2, atom.indicator));
              } else if (!pl3.type.is_variable(code) && !pl3.type.is_integer(code)) {
                thread.throw_error(pl3.error.type("integer", code, atom.indicator));
              } else if (!pl3.type.is_variable(code) && !pl3.type.is_character_code(code)) {
                thread.throw_error(pl3.error.representation("character_code", atom.indicator));
              } else {
                if (pl3.type.is_variable(code)) {
                  var code1 = new Num(codePointAt(char2.id, 0), false);
                  thread.prepend([new State(point.goal.replace(new Term("=", [code1, code])), point.substitution, point)]);
                } else {
                  var char1 = new Term(fromCodePoint(code.value));
                  thread.prepend([new State(point.goal.replace(new Term("=", [char1, char2])), point.substitution, point)]);
                }
              }
            },
            "number_chars/2": function(thread, point, atom) {
              var str, num = atom.args[0], list = atom.args[1];
              if (pl3.type.is_variable(num) && pl3.type.is_variable(list)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(num) && !pl3.type.is_number(num)) {
                thread.throw_error(pl3.error.type("number", num, atom.indicator));
              } else if (!pl3.type.is_variable(list) && !pl3.type.is_list(list)) {
                thread.throw_error(pl3.error.type("list", list, atom.indicator));
              } else {
                var isvar = pl3.type.is_variable(num);
                if (!pl3.type.is_variable(list)) {
                  var pointer = list;
                  var total = true;
                  str = "";
                  while (pointer.indicator === "./2") {
                    if (!pl3.type.is_character(pointer.args[0])) {
                      if (pl3.type.is_variable(pointer.args[0])) {
                        total = false;
                      } else if (!pl3.type.is_variable(pointer.args[0])) {
                        thread.throw_error(pl3.error.type("character", pointer.args[0], atom.indicator));
                        return;
                      }
                    } else {
                      str += pointer.args[0].id;
                    }
                    pointer = pointer.args[1];
                  }
                  total = total && pl3.type.is_empty_list(pointer);
                  if (!pl3.type.is_empty_list(pointer) && !pl3.type.is_variable(pointer)) {
                    thread.throw_error(pl3.error.type("list", list, atom.indicator));
                    return;
                  }
                  if (!total && isvar) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (total) {
                    if (pl3.type.is_variable(pointer) && isvar) {
                      thread.throw_error(pl3.error.instantiation(atom.indicator));
                      return;
                    } else {
                      var expr = thread.parse(str);
                      var num2 = expr.value;
                      if (!pl3.type.is_number(num2) || expr.tokens[expr.tokens.length - 1].space) {
                        thread.throw_error(pl3.error.syntax_by_predicate("parseable_number", atom.indicator));
                      } else {
                        thread.prepend([new State(point.goal.replace(new Term("=", [num, num2])), point.substitution, point)]);
                      }
                      return;
                    }
                  }
                }
                if (!isvar) {
                  str = num.toString();
                  var list2 = new Term("[]");
                  for (var i = str.length - 1; i >= 0; i--) {
                    list2 = new Term(".", [new Term(str.charAt(i)), list2]);
                  }
                  thread.prepend([new State(point.goal.replace(new Term("=", [list, list2])), point.substitution, point)]);
                }
              }
            },
            "number_codes/2": function(thread, point, atom) {
              var str, num = atom.args[0], list = atom.args[1];
              if (pl3.type.is_variable(num) && pl3.type.is_variable(list)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(num) && !pl3.type.is_number(num)) {
                thread.throw_error(pl3.error.type("number", num, atom.indicator));
              } else if (!pl3.type.is_variable(list) && !pl3.type.is_list(list)) {
                thread.throw_error(pl3.error.type("list", list, atom.indicator));
              } else {
                var isvar = pl3.type.is_variable(num);
                if (!pl3.type.is_variable(list)) {
                  var pointer = list;
                  var total = true;
                  str = "";
                  while (pointer.indicator === "./2") {
                    if (!pl3.type.is_character_code(pointer.args[0])) {
                      if (pl3.type.is_variable(pointer.args[0])) {
                        total = false;
                      } else if (!pl3.type.is_variable(pointer.args[0])) {
                        thread.throw_error(pl3.error.type("character_code", pointer.args[0], atom.indicator));
                        return;
                      }
                    } else {
                      str += fromCodePoint(pointer.args[0].value);
                    }
                    pointer = pointer.args[1];
                  }
                  total = total && pl3.type.is_empty_list(pointer);
                  if (!pl3.type.is_empty_list(pointer) && !pl3.type.is_variable(pointer)) {
                    thread.throw_error(pl3.error.type("list", list, atom.indicator));
                    return;
                  }
                  if (!total && isvar) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (total) {
                    if (pl3.type.is_variable(pointer) && isvar) {
                      thread.throw_error(pl3.error.instantiation(atom.indicator));
                      return;
                    } else {
                      var expr = thread.parse(str);
                      var num2 = expr.value;
                      if (!pl3.type.is_number(num2) || expr.tokens[expr.tokens.length - 1].space) {
                        thread.throw_error(pl3.error.syntax_by_predicate("parseable_number", atom.indicator));
                      } else {
                        thread.prepend([new State(point.goal.replace(new Term("=", [num, num2])), point.substitution, point)]);
                      }
                      return;
                    }
                  }
                }
                if (!isvar) {
                  str = num.toString();
                  var list2 = new Term("[]");
                  for (var i = str.length - 1; i >= 0; i--) {
                    list2 = new Term(".", [new Num(codePointAt(str, i), false), list2]);
                  }
                  thread.prepend([new State(point.goal.replace(new Term("=", [list, list2])), point.substitution, point)]);
                }
              }
            },
            "upcase_atom/2": function(thread, point, atom) {
              var original = atom.args[0], upcase = atom.args[1];
              if (pl3.type.is_variable(original)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(original)) {
                thread.throw_error(pl3.error.type("atom", original, atom.indicator));
              } else if (!pl3.type.is_variable(upcase) && !pl3.type.is_atom(upcase)) {
                thread.throw_error(pl3.error.type("atom", upcase, atom.indicator));
              } else {
                thread.prepend([new State(point.goal.replace(new Term("=", [upcase, new Term(original.id.toUpperCase(), [])])), point.substitution, point)]);
              }
            },
            "downcase_atom/2": function(thread, point, atom) {
              var original = atom.args[0], downcase = atom.args[1];
              if (pl3.type.is_variable(original)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(original)) {
                thread.throw_error(pl3.error.type("atom", original, atom.indicator));
              } else if (!pl3.type.is_variable(downcase) && !pl3.type.is_atom(downcase)) {
                thread.throw_error(pl3.error.type("atom", downcase, atom.indicator));
              } else {
                thread.prepend([new State(point.goal.replace(new Term("=", [downcase, new Term(original.id.toLowerCase(), [])])), point.substitution, point)]);
              }
            },
            "atomic_list_concat/2": function(thread, point, atom) {
              var list = atom.args[0], concat = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("atomic_list_concat", [list, new Term("", []), concat])), point.substitution, point)]);
            },
            "atomic_list_concat/3": function(thread, point, atom) {
              var list = atom.args[0], separator = atom.args[1], concat = atom.args[2];
              if (pl3.type.is_variable(separator) || pl3.type.is_variable(list) && pl3.type.is_variable(concat)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(list) && !pl3.type.is_list(list)) {
                thread.throw_error(pl3.error.type("list", list, atom.indicator));
              } else if (!pl3.type.is_variable(concat) && !pl3.type.is_atom(concat)) {
                thread.throw_error(pl3.error.type("atom", concat, atom.indicator));
              } else {
                if (!pl3.type.is_variable(concat)) {
                  var atomic = arrayToList(map(concat.id.split(separator.id), function(id2) {
                    return new Term(id2, []);
                  }));
                  thread.prepend([new State(point.goal.replace(new Term("=", [atomic, list])), point.substitution, point)]);
                } else {
                  var id = "";
                  var pointer = list;
                  while (pl3.type.is_term(pointer) && pointer.indicator === "./2") {
                    if (!pl3.type.is_atom(pointer.args[0]) && !pl3.type.is_number(pointer.args[0])) {
                      thread.throw_error(pl3.error.type("atomic", pointer.args[0], atom.indicator));
                      return;
                    }
                    if (id !== "")
                      id += separator.id;
                    if (pl3.type.is_atom(pointer.args[0]))
                      id += pointer.args[0].id;
                    else
                      id += "" + pointer.args[0].value;
                    pointer = pointer.args[1];
                  }
                  id = new Term(id, []);
                  if (pl3.type.is_variable(pointer)) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  } else if (!pl3.type.is_term(pointer) || pointer.indicator !== "[]/0") {
                    thread.throw_error(pl3.error.type("list", list, atom.indicator));
                  } else {
                    thread.prepend([new State(point.goal.replace(new Term("=", [id, concat])), point.substitution, point)]);
                  }
                }
              }
            },
            "@=</2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) <= 0) {
                thread.success(point);
              }
            },
            "==/2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) === 0) {
                thread.success(point);
              }
            },
            "\\==/2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) !== 0) {
                thread.success(point);
              }
            },
            "@</2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) < 0) {
                thread.success(point);
              }
            },
            "@>/2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) > 0) {
                thread.success(point);
              }
            },
            "@>=/2": function(thread, point, atom) {
              if (pl3.compare(atom.args[0], atom.args[1]) >= 0) {
                thread.success(point);
              }
            },
            "compare/3": function(thread, point, atom) {
              var order = atom.args[0], left = atom.args[1], right = atom.args[2];
              if (!pl3.type.is_variable(order) && !pl3.type.is_atom(order)) {
                thread.throw_error(pl3.error.type("atom", order, atom.indicator));
              } else if (pl3.type.is_atom(order) && ["<", ">", "="].indexOf(order.id) === -1) {
                thread.throw_error(pl3.type.domain("order", order, atom.indicator));
              } else {
                var compare = pl3.compare(left, right);
                compare = compare === 0 ? "=" : compare === -1 ? "<" : ">";
                thread.prepend([new State(point.goal.replace(new Term("=", [order, new Term(compare, [])])), point.substitution, point)]);
              }
            },
            "is/2": function(thread, point, atom) {
              var op = atom.args[1].interpret(thread);
              if (!pl3.type.is_number(op)) {
                thread.throw_error(op);
              } else {
                thread.prepend([new State(point.goal.replace(new Term("=", [atom.args[0], op], thread.level)), point.substitution, point)]);
              }
            },
            "between/3": function(thread, point, atom) {
              var lower = atom.args[0], upper = atom.args[1], bet = atom.args[2];
              if (pl3.type.is_variable(lower) || pl3.type.is_variable(upper)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_integer(lower)) {
                thread.throw_error(pl3.error.type("integer", lower, atom.indicator));
              } else if (!pl3.type.is_integer(upper)) {
                thread.throw_error(pl3.error.type("integer", upper, atom.indicator));
              } else if (!pl3.type.is_variable(bet) && !pl3.type.is_integer(bet)) {
                thread.throw_error(pl3.error.type("integer", bet, atom.indicator));
              } else {
                if (pl3.type.is_variable(bet)) {
                  var states = [new State(point.goal.replace(new Term("=", [bet, lower])), point.substitution, point)];
                  if (lower.value < upper.value)
                    states.push(new State(point.goal.replace(new Term("between", [new Num(lower.value + 1, false), upper, bet])), point.substitution, point));
                  thread.prepend(states);
                } else if (lower.value <= bet.value && upper.value >= bet.value) {
                  thread.success(point);
                }
              }
            },
            "succ/2": function(thread, point, atom) {
              var n = atom.args[0], m = atom.args[1];
              if (pl3.type.is_variable(n) && pl3.type.is_variable(m)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(n) && !pl3.type.is_integer(n)) {
                thread.throw_error(pl3.error.type("integer", n, atom.indicator));
              } else if (!pl3.type.is_variable(m) && !pl3.type.is_integer(m)) {
                thread.throw_error(pl3.error.type("integer", m, atom.indicator));
              } else if (!pl3.type.is_variable(n) && n.value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", n, atom.indicator));
              } else if (!pl3.type.is_variable(m) && m.value < 0) {
                thread.throw_error(pl3.error.domain("not_less_than_zero", m, atom.indicator));
              } else {
                if (pl3.type.is_variable(m) || m.value > 0) {
                  if (pl3.type.is_variable(n)) {
                    thread.prepend([new State(point.goal.replace(new Term("=", [n, new Num(m.value - 1, false)])), point.substitution, point)]);
                  } else {
                    thread.prepend([new State(point.goal.replace(new Term("=", [m, new Num(n.value + 1, false)])), point.substitution, point)]);
                  }
                }
              }
            },
            "=:=/2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp === 0) {
                thread.success(point);
              }
            },
            "=\\=/2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp !== 0) {
                thread.success(point);
              }
            },
            "</2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp < 0) {
                thread.success(point);
              }
            },
            "=</2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp <= 0) {
                thread.success(point);
              }
            },
            ">/2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp > 0) {
                thread.success(point);
              }
            },
            ">=/2": function(thread, point, atom) {
              var cmp = pl3.arithmetic_compare(thread, atom.args[0], atom.args[1]);
              if (pl3.type.is_term(cmp)) {
                thread.throw_error(cmp);
              } else if (cmp >= 0) {
                thread.success(point);
              }
            },
            "var/1": function(thread, point, atom) {
              if (pl3.type.is_variable(atom.args[0])) {
                thread.success(point);
              }
            },
            "atom/1": function(thread, point, atom) {
              if (pl3.type.is_atom(atom.args[0])) {
                thread.success(point);
              }
            },
            "atomic/1": function(thread, point, atom) {
              if (pl3.type.is_atomic(atom.args[0])) {
                thread.success(point);
              }
            },
            "compound/1": function(thread, point, atom) {
              if (pl3.type.is_compound(atom.args[0])) {
                thread.success(point);
              }
            },
            "integer/1": function(thread, point, atom) {
              if (pl3.type.is_integer(atom.args[0])) {
                thread.success(point);
              }
            },
            "float/1": function(thread, point, atom) {
              if (pl3.type.is_float(atom.args[0])) {
                thread.success(point);
              }
            },
            "number/1": function(thread, point, atom) {
              if (pl3.type.is_number(atom.args[0])) {
                thread.success(point);
              }
            },
            "nonvar/1": function(thread, point, atom) {
              if (!pl3.type.is_variable(atom.args[0])) {
                thread.success(point);
              }
            },
            "ground/1": function(thread, point, atom) {
              if (atom.variables().length === 0) {
                thread.success(point);
              }
            },
            "acyclic_term/1": function(thread, point, atom) {
              var test = point.substitution.apply(point.substitution);
              var variables = atom.args[0].variables();
              for (var i = 0; i < variables.length; i++)
                if (point.substitution.links[variables[i]] !== void 0 && !point.substitution.links[variables[i]].equals(test.links[variables[i]]))
                  return;
              thread.success(point);
            },
            "callable/1": function(thread, point, atom) {
              if (pl3.type.is_callable(atom.args[0])) {
                thread.success(point);
              }
            },
            "is_list/1": function(thread, point, atom) {
              var list = atom.args[0];
              while (pl3.type.is_term(list) && list.indicator === "./2")
                list = list.args[1];
              if (pl3.type.is_term(list) && list.indicator === "[]/0")
                thread.success(point);
            },
            "current_input/1": function(thread, point, atom) {
              var stream = atom.args[0];
              if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream", stream, atom.indicator));
              } else {
                if (pl3.type.is_atom(stream) && thread.get_stream_by_alias(stream.id))
                  stream = thread.get_stream_by_alias(stream.id);
                thread.prepend([
                  new State(point.goal.replace(new Term("=", [stream, thread.get_current_input()])), point.substitution, point)
                ]);
              }
            },
            "current_output/1": function(thread, point, atom) {
              var stream = atom.args[0];
              if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else {
                if (pl3.type.is_atom(stream) && thread.get_stream_by_alias(stream.id))
                  stream = thread.get_stream_by_alias(stream.id);
                thread.prepend([
                  new State(point.goal.replace(new Term("=", [stream, thread.get_current_output()])), point.substitution, point)
                ]);
              }
            },
            "set_input/1": function(thread, point, atom) {
              var input = atom.args[0];
              var stream = pl3.type.is_stream(input) ? input : thread.get_stream_by_alias(input.id);
              if (pl3.type.is_variable(input)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(input) && !pl3.type.is_stream(input) && !pl3.type.is_atom(input)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", input, atom.indicator));
              } else if (!pl3.type.is_stream(stream)) {
                thread.throw_error(pl3.error.existence("stream", input, atom.indicator));
              } else if (stream.output === true) {
                thread.throw_error(pl3.error.permission("input", "stream", input, atom.indicator));
              } else {
                thread.set_current_input(stream);
                thread.success(point);
              }
            },
            "set_output/1": function(thread, point, atom) {
              var output2 = atom.args[0];
              var stream = pl3.type.is_stream(output2) ? output2 : thread.get_stream_by_alias(output2.id);
              if (pl3.type.is_variable(output2)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(output2) && !pl3.type.is_stream(output2) && !pl3.type.is_atom(output2)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", output2, atom.indicator));
              } else if (!pl3.type.is_stream(stream)) {
                thread.throw_error(pl3.error.existence("stream", output2, atom.indicator));
              } else if (stream.input === true) {
                thread.throw_error(pl3.error.permission("output", "stream", output2, atom.indicator));
              } else {
                thread.set_current_output(stream);
                thread.success(point);
              }
            },
            "open/3": function(thread, point, atom) {
              var dest = atom.args[0], mode = atom.args[1], stream = atom.args[2];
              thread.prepend([new State(point.goal.replace(new Term("open", [dest, mode, stream, new Term("[]", [])])), point.substitution, point)]);
            },
            "open/4": function(thread, point, atom) {
              var dest = atom.args[0], mode = atom.args[1], stream = atom.args[2], options = atom.args[3];
              if (pl3.type.is_variable(dest) || pl3.type.is_variable(mode)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(mode) && !pl3.type.is_atom(mode)) {
                thread.throw_error(pl3.error.type("atom", mode, atom.indicator));
              } else if (!pl3.type.is_list(options)) {
                thread.throw_error(pl3.error.type("list", options, atom.indicator));
              } else if (!pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.type("variable", stream, atom.indicator));
              } else if (!pl3.type.is_atom(dest) && !pl3.type.is_streamable(dest)) {
                thread.throw_error(pl3.error.domain("source_sink", dest, atom.indicator));
              } else if (!pl3.type.is_io_mode(mode)) {
                thread.throw_error(pl3.error.domain("io_mode", mode, atom.indicator));
              } else {
                var obj_options = {};
                var pointer = options;
                var property;
                while (pl3.type.is_term(pointer) && pointer.indicator === "./2") {
                  property = pointer.args[0];
                  if (pl3.type.is_variable(property)) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (!pl3.type.is_stream_option(property)) {
                    thread.throw_error(pl3.error.domain("stream_option", property, atom.indicator));
                    return;
                  }
                  obj_options[property.id] = property.args[0].id;
                  pointer = pointer.args[1];
                }
                if (pointer.indicator !== "[]/0") {
                  if (pl3.type.is_variable(pointer))
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  else
                    thread.throw_error(pl3.error.type("list", options, atom.indicator));
                  return;
                } else {
                  var alias = obj_options["alias"];
                  if (alias && thread.get_stream_by_alias(alias)) {
                    thread.throw_error(pl3.error.permission("open", "source_sink", new Term("alias", [new Term(alias, [])]), atom.indicator));
                    return;
                  }
                  if (!obj_options["type"])
                    obj_options["type"] = "text";
                  var file;
                  if (pl3.type.is_atom(dest))
                    file = thread.file_system_open(dest.id, obj_options["type"], mode.id);
                  else
                    file = dest.stream(obj_options["type"], mode.id);
                  if (file === false) {
                    thread.throw_error(pl3.error.permission("open", "source_sink", dest, atom.indicator));
                    return;
                  } else if (file === null) {
                    thread.throw_error(pl3.error.existence("source_sink", dest, atom.indicator));
                    return;
                  }
                  var newstream = new Stream(file, mode.id, obj_options["alias"], obj_options["type"], obj_options["reposition"] === "true", obj_options["eof_action"]);
                  if (alias)
                    thread.session.streams[alias] = newstream;
                  else
                    thread.session.streams[newstream.id] = newstream;
                  thread.prepend([new State(point.goal.replace(new Term("=", [stream, newstream])), point.substitution, point)]);
                }
              }
            },
            "close/1": function(thread, point, atom) {
              var stream = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term("close", [stream, new Term("[]", [])])), point.substitution, point)]);
            },
            "close/2": function(thread, point, atom) {
              var stream = atom.args[0], options = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(options)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_list(options)) {
                thread.throw_error(pl3.error.type("list", options, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else {
                var obj_options = {};
                var pointer = options;
                var property;
                while (pl3.type.is_term(pointer) && pointer.indicator === "./2") {
                  property = pointer.args[0];
                  if (pl3.type.is_variable(property)) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (!pl3.type.is_close_option(property)) {
                    thread.throw_error(pl3.error.domain("close_option", property, atom.indicator));
                    return;
                  }
                  obj_options[property.id] = property.args[0].id === "true";
                  pointer = pointer.args[1];
                }
                if (pointer.indicator !== "[]/0") {
                  if (pl3.type.is_variable(pointer))
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  else
                    thread.throw_error(pl3.error.type("list", options, atom.indicator));
                  return;
                } else {
                  if (stream2 === thread.session.standard_input || stream2 === thread.session.standard_output) {
                    thread.success(point);
                    return;
                  } else if (stream2 === thread.session.current_input) {
                    thread.session.current_input = thread.session.standard_input;
                  } else if (stream2 === thread.session.current_output) {
                    thread.session.current_output = thread.session.current_output;
                  }
                  if (stream2.alias !== null)
                    delete thread.session.streams[stream2.alias];
                  else
                    delete thread.session.streams[stream2.id];
                  if (stream2.output)
                    stream2.stream.flush();
                  var closed = stream2.stream.close();
                  stream2.stream = null;
                  if (obj_options.force === true || closed === true) {
                    thread.success(point);
                  }
                }
              }
            },
            "flush_output/0": function(thread, point, atom) {
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("flush_output", [new Var("S")])])), point.substitution, point)]);
            },
            "flush_output/1": function(thread, point, atom) {
              var stream = atom.args[0];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream.input === true) {
                thread.throw_error(pl3.error.permission("output", "stream", output, atom.indicator));
              } else {
                stream2.stream.flush();
                thread.success(point);
              }
            },
            "stream_property/2": function(thread, point, atom) {
              var stream = atom.args[0], property = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_variable(stream) && (!pl3.type.is_stream(stream2) || stream2.stream === null)) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (!pl3.type.is_variable(property) && !pl3.type.is_stream_property(property)) {
                thread.throw_error(pl3.error.domain("stream_property", property, atom.indicator));
              } else {
                var streams = [];
                var states = [];
                if (!pl3.type.is_variable(stream))
                  streams.push(stream2);
                else
                  for (var key2 in thread.session.streams)
                    streams.push(thread.session.streams[key2]);
                for (var i = 0; i < streams.length; i++) {
                  var properties = [];
                  if (streams[i].filename)
                    properties.push(new Term("file_name", [new Term(streams[i].file_name, [])]));
                  properties.push(new Term("mode", [new Term(streams[i].mode, [])]));
                  properties.push(new Term(streams[i].input ? "input" : "output", []));
                  if (streams[i].alias)
                    properties.push(new Term("alias", [new Term(streams[i].alias, [])]));
                  properties.push(new Term("position", [
                    typeof streams[i].position === "number" ? new Num(streams[i].position, false) : new Term(streams[i].position, [])
                  ]));
                  properties.push(new Term("end_of_stream", [new Term(streams[i].position === "end_of_stream" ? "at" : streams[i].position === "past_end_of_stream" ? "past" : "not", [])]));
                  properties.push(new Term("eof_action", [new Term(streams[i].eof_action, [])]));
                  properties.push(new Term("reposition", [new Term(streams[i].reposition ? "true" : "false", [])]));
                  properties.push(new Term("type", [new Term(streams[i].type, [])]));
                  for (var j = 0; j < properties.length; j++) {
                    states.push(new State(point.goal.replace(new Term(",", [
                      new Term("=", [pl3.type.is_variable(stream) ? stream : stream2, streams[i]]),
                      new Term("=", [property, properties[j]])
                    ])), point.substitution, point));
                  }
                }
                thread.prepend(states);
              }
            },
            "at_end_of_stream/0": function(thread, point, atom) {
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term(",", [
                new Term("stream_property", [new Var("S"), new Term("end_of_stream", [new Var("E")])]),
                new Term(",", [new Term("!", []), new Term(";", [new Term("=", [
                  new Var("E"),
                  new Term("at", [])
                ]), new Term("=", [new Var("E"), new Term("past", [])])])])
              ])])), point.substitution, point)]);
            },
            "at_end_of_stream/1": function(thread, point, atom) {
              var stream = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [
                new Term("stream_property", [stream, new Term("end_of_stream", [new Var("E")])]),
                new Term(",", [new Term("!", []), new Term(";", [
                  new Term("=", [new Var("E"), new Term("at", [])]),
                  new Term("=", [new Var("E"), new Term("past", [])])
                ])])
              ])), point.substitution, point)]);
            },
            "set_stream_position/2": function(thread, point, atom) {
              var stream = atom.args[0], position = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(position)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (!pl3.type.is_stream_position(position)) {
                thread.throw_error(pl3.error.domain("stream_position", position, atom.indicator));
              } else if (stream2.reposition === false) {
                thread.throw_error(pl3.error.permission("reposition", "stream", stream, atom.indicator));
              } else {
                if (pl3.type.is_integer(position))
                  stream2.position = position.value;
                else
                  stream2.position = position.id;
                thread.success(point);
              }
            },
            "get_char/1": function(thread, point, atom) {
              var char2 = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("get_char", [new Var("S"), char2])])), point.substitution, point)]);
            },
            "get_char/2": function(thread, point, atom) {
              var stream = atom.args[0], char2 = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(char2) && !pl3.type.is_character(char2)) {
                thread.throw_error(pl3.error.type("in_character", char2, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("input", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_char;
                if (stream2.position === "end_of_stream") {
                  stream_char = "end_of_file";
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_char = stream2.stream.get(1, stream2.position);
                  if (stream_char === null) {
                    thread.throw_error(pl3.error.representation("character", atom.indicator));
                    return;
                  }
                  stream2.position++;
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Term(stream_char, []), char2])), point.substitution, point)]);
              }
            },
            "get_code/1": function(thread, point, atom) {
              var code = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("get_code", [new Var("S"), code])])), point.substitution, point)]);
            },
            "get_code/2": function(thread, point, atom) {
              var stream = atom.args[0], code = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(code) && !pl3.type.is_integer(code)) {
                thread.throw_error(pl3.error.type("integer", char, atom.indicator));
              } else if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("input", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_code;
                if (stream2.position === "end_of_stream") {
                  stream_code = -1;
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_code = stream2.stream.get(1, stream2.position);
                  if (stream_code === null) {
                    thread.throw_error(pl3.error.representation("character", atom.indicator));
                    return;
                  }
                  stream_code = codePointAt(stream_code, 0);
                  stream2.position++;
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Num(stream_code, false), code])), point.substitution, point)]);
              }
            },
            "peek_char/1": function(thread, point, atom) {
              var char2 = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("peek_char", [new Var("S"), char2])])), point.substitution, point)]);
            },
            "peek_char/2": function(thread, point, atom) {
              var stream = atom.args[0], char2 = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(char2) && !pl3.type.is_character(char2)) {
                thread.throw_error(pl3.error.type("in_character", char2, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("input", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_char;
                if (stream2.position === "end_of_stream") {
                  stream_char = "end_of_file";
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_char = stream2.stream.get(1, stream2.position);
                  if (stream_char === null) {
                    thread.throw_error(pl3.error.representation("character", atom.indicator));
                    return;
                  }
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Term(stream_char, []), char2])), point.substitution, point)]);
              }
            },
            "peek_code/1": function(thread, point, atom) {
              var code = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("peek_code", [new Var("S"), code])])), point.substitution, point)]);
            },
            "peek_code/2": function(thread, point, atom) {
              var stream = atom.args[0], code = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(code) && !pl3.type.is_integer(code)) {
                thread.throw_error(pl3.error.type("integer", char, atom.indicator));
              } else if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("input", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_code;
                if (stream2.position === "end_of_stream") {
                  stream_code = -1;
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_code = stream2.stream.get(1, stream2.position);
                  if (stream_code === null) {
                    thread.throw_error(pl3.error.representation("character", atom.indicator));
                    return;
                  }
                  stream_code = codePointAt(stream_code, 0);
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Num(stream_code, false), code])), point.substitution, point)]);
              }
            },
            "put_char/1": function(thread, point, atom) {
              var char2 = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("put_char", [new Var("S"), char2])])), point.substitution, point)]);
            },
            "put_char/2": function(thread, point, atom) {
              var stream = atom.args[0], char2 = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(char2)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_character(char2)) {
                thread.throw_error(pl3.error.type("character", char2, atom.indicator));
              } else if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.input) {
                thread.throw_error(pl3.error.permission("output", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("output", "binary_stream", stream, atom.indicator));
              } else {
                if (stream2.stream.put(char2.id, stream2.position)) {
                  if (typeof stream2.position === "number")
                    stream2.position++;
                  thread.success(point);
                }
              }
            },
            "put_code/1": function(thread, point, atom) {
              var code = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("put_code", [new Var("S"), code])])), point.substitution, point)]);
            },
            "put_code/2": function(thread, point, atom) {
              var stream = atom.args[0], code = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(code)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_integer(code)) {
                thread.throw_error(pl3.error.type("integer", code, atom.indicator));
              } else if (!pl3.type.is_character_code(code)) {
                thread.throw_error(pl3.error.representation("character_code", atom.indicator));
              } else if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.input) {
                thread.throw_error(pl3.error.permission("output", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("output", "binary_stream", stream, atom.indicator));
              } else {
                if (stream2.stream.put_char(fromCodePoint(code.value), stream2.position)) {
                  if (typeof stream2.position === "number")
                    stream2.position++;
                  thread.success(point);
                }
              }
            },
            "nl/0": function(thread, point, atom) {
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("put_char", [new Var("S"), new Term("\n", [])])])), point.substitution, point)]);
            },
            "nl/1": function(thread, point, atom) {
              var stream = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term("put_char", [stream, new Term("\n", [])])), point.substitution, point)]);
            },
            "get_byte/1": function(thread, point, atom) {
              var byte = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("get_byte", [new Var("S"), byte])])), point.substitution, point)]);
            },
            "get_byte/2": function(thread, point, atom) {
              var stream = atom.args[0], byte = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(byte) && !pl3.type.is_byte(byte)) {
                thread.throw_error(pl3.error.type("in_byte", char, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "text") {
                thread.throw_error(pl3.error.permission("input", "text_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_byte;
                if (stream2.position === "end_of_stream") {
                  stream_byte = "end_of_file";
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_byte = stream2.stream.get_byte(stream2.position);
                  if (stream_byte === null) {
                    thread.throw_error(pl3.error.representation("byte", atom.indicator));
                    return;
                  }
                  stream2.position++;
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Num(stream_byte, false), byte])), point.substitution, point)]);
              }
            },
            "peek_byte/1": function(thread, point, atom) {
              var byte = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("peek_byte", [new Var("S"), byte])])), point.substitution, point)]);
            },
            "peek_byte/2": function(thread, point, atom) {
              var stream = atom.args[0], byte = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_variable(byte) && !pl3.type.is_byte(byte)) {
                thread.throw_error(pl3.error.type("in_byte", char, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "text") {
                thread.throw_error(pl3.error.permission("input", "text_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var stream_byte;
                if (stream2.position === "end_of_stream") {
                  stream_byte = "end_of_file";
                  stream2.position = "past_end_of_stream";
                } else {
                  stream_byte = stream2.stream.get_byte(stream2.position);
                  if (stream_byte === null) {
                    thread.throw_error(pl3.error.representation("byte", atom.indicator));
                    return;
                  }
                }
                thread.prepend([new State(point.goal.replace(new Term("=", [new Num(stream_byte, false), byte])), point.substitution, point)]);
              }
            },
            "put_byte/1": function(thread, point, atom) {
              var byte = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("put_byte", [new Var("S"), byte])])), point.substitution, point)]);
            },
            "put_byte/2": function(thread, point, atom) {
              var stream = atom.args[0], byte = atom.args[1];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(byte)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_byte(byte)) {
                thread.throw_error(pl3.error.type("byte", byte, atom.indicator));
              } else if (!pl3.type.is_variable(stream) && !pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.input) {
                thread.throw_error(pl3.error.permission("output", "stream", stream, atom.indicator));
              } else if (stream2.type === "text") {
                thread.throw_error(pl3.error.permission("output", "text_stream", stream, atom.indicator));
              } else {
                if (stream2.stream.put_byte(byte.value, stream2.position)) {
                  if (typeof stream2.position === "number")
                    stream2.position++;
                  thread.success(point);
                }
              }
            },
            "read/1": function(thread, point, atom) {
              var term = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("read_term", [new Var("S"), term, new Term("[]", [])])])), point.substitution, point)]);
            },
            "read/2": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("read_term", [stream, term, new Term("[]", [])])), point.substitution, point)]);
            },
            "read_term/2": function(thread, point, atom) {
              var term = atom.args[0], options = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_input", [new Var("S")]), new Term("read_term", [new Var("S"), term, options])])), point.substitution, point)]);
            },
            "read_term/3": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1], options = atom.args[2];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(options)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_list(options)) {
                thread.throw_error(pl3.error.type("list", options, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.output) {
                thread.throw_error(pl3.error.permission("input", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("input", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("input", "past_end_of_stream", stream, atom.indicator));
              } else {
                var obj_options = {};
                var pointer = options;
                var property;
                while (pl3.type.is_term(pointer) && pointer.indicator === "./2") {
                  property = pointer.args[0];
                  if (pl3.type.is_variable(property)) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (!pl3.type.is_read_option(property)) {
                    thread.throw_error(pl3.error.domain("read_option", property, atom.indicator));
                    return;
                  }
                  obj_options[property.id] = property.args[0];
                  pointer = pointer.args[1];
                }
                if (pointer.indicator !== "[]/0") {
                  if (pl3.type.is_variable(pointer))
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  else
                    thread.throw_error(pl3.error.type("list", options, atom.indicator));
                  return;
                } else {
                  var char2, tokenizer, expr;
                  var text = "";
                  var tokens = [];
                  var last_token = null;
                  while (last_token === null || last_token.name !== "atom" || last_token.value !== "." || expr.type === ERROR && pl3.flatten_error(new Term("throw", [expr.value])).found === "token_not_found") {
                    char2 = stream2.stream.get(1, stream2.position);
                    if (char2 === null) {
                      thread.throw_error(pl3.error.representation("character", atom.indicator));
                      return;
                    }
                    if (char2 === "end_of_file" || char2 === "past_end_of_file") {
                      if (expr)
                        thread.throw_error(pl3.error.syntax(tokens[expr.len - 1], ". or expression expected", false));
                      else
                        thread.throw_error(pl3.error.syntax(null, "token not found", true));
                      return;
                    }
                    stream2.position++;
                    text += char2;
                    tokenizer = new Tokenizer(thread);
                    tokenizer.new_text(text);
                    tokens = tokenizer.get_tokens();
                    last_token = tokens !== null && tokens.length > 0 ? tokens[tokens.length - 1] : null;
                    if (tokens === null)
                      continue;
                    expr = parseExpr(thread, tokens, 0, thread.__get_max_priority(), false);
                  }
                  if (expr.type === SUCCESS && expr.len === tokens.length - 1 && last_token.value === ".") {
                    expr = expr.value.rename(thread);
                    var eq = new Term("=", [term, expr]);
                    if (obj_options.variables) {
                      var vars = arrayToList(map(nub(expr.variables()), function(v) {
                        return new Var(v);
                      }));
                      eq = new Term(",", [eq, new Term("=", [obj_options.variables, vars])]);
                    }
                    if (obj_options.variable_names) {
                      var vars = arrayToList(map(nub(expr.variables()), function(v) {
                        var prop;
                        for (prop in thread.session.renamed_variables) {
                          if (thread.session.renamed_variables.hasOwnProperty(prop)) {
                            if (thread.session.renamed_variables[prop] === v)
                              break;
                          }
                        }
                        return new Term("=", [new Term(prop, []), new Var(v)]);
                      }));
                      eq = new Term(",", [eq, new Term("=", [obj_options.variable_names, vars])]);
                    }
                    if (obj_options.singletons) {
                      var vars = arrayToList(map(new Rule(expr, null).singleton_variables(), function(v) {
                        var prop;
                        for (prop in thread.session.renamed_variables) {
                          if (thread.session.renamed_variables.hasOwnProperty(prop)) {
                            if (thread.session.renamed_variables[prop] === v)
                              break;
                          }
                        }
                        return new Term("=", [new Term(prop, []), new Var(v)]);
                      }));
                      eq = new Term(",", [eq, new Term("=", [obj_options.singletons, vars])]);
                    }
                    thread.prepend([new State(point.goal.replace(eq), point.substitution, point)]);
                  } else {
                    if (expr.type === SUCCESS)
                      thread.throw_error(pl3.error.syntax(tokens[expr.len], "unexpected token", false));
                    else
                      thread.throw_error(expr.value);
                  }
                }
              }
            },
            "write/1": function(thread, point, atom) {
              var term = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("write", [new Var("S"), term])])), point.substitution, point)]);
            },
            "write/2": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("write_term", [
                stream,
                term,
                new Term(".", [
                  new Term("quoted", [new Term("false", [])]),
                  new Term(".", [
                    new Term("ignore_ops", [new Term("false")]),
                    new Term(".", [new Term("numbervars", [new Term("true")]), new Term("[]", [])])
                  ])
                ])
              ])), point.substitution, point)]);
            },
            "writeq/1": function(thread, point, atom) {
              var term = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("writeq", [new Var("S"), term])])), point.substitution, point)]);
            },
            "writeq/2": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("write_term", [
                stream,
                term,
                new Term(".", [
                  new Term("quoted", [new Term("true", [])]),
                  new Term(".", [
                    new Term("ignore_ops", [new Term("false")]),
                    new Term(".", [new Term("numbervars", [new Term("true")]), new Term("[]", [])])
                  ])
                ])
              ])), point.substitution, point)]);
            },
            "write_canonical/1": function(thread, point, atom) {
              var term = atom.args[0];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("write_canonical", [new Var("S"), term])])), point.substitution, point)]);
            },
            "write_canonical/2": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term("write_term", [
                stream,
                term,
                new Term(".", [
                  new Term("quoted", [new Term("true", [])]),
                  new Term(".", [
                    new Term("ignore_ops", [new Term("true")]),
                    new Term(".", [new Term("numbervars", [new Term("false")]), new Term("[]", [])])
                  ])
                ])
              ])), point.substitution, point)]);
            },
            "write_term/2": function(thread, point, atom) {
              var term = atom.args[0], options = atom.args[1];
              thread.prepend([new State(point.goal.replace(new Term(",", [new Term("current_output", [new Var("S")]), new Term("write_term", [new Var("S"), term, options])])), point.substitution, point)]);
            },
            "write_term/3": function(thread, point, atom) {
              var stream = atom.args[0], term = atom.args[1], options = atom.args[2];
              var stream2 = pl3.type.is_stream(stream) ? stream : thread.get_stream_by_alias(stream.id);
              if (pl3.type.is_variable(stream) || pl3.type.is_variable(options)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_list(options)) {
                thread.throw_error(pl3.error.type("list", options, atom.indicator));
              } else if (!pl3.type.is_stream(stream) && !pl3.type.is_atom(stream)) {
                thread.throw_error(pl3.error.domain("stream_or_alias", stream, atom.indicator));
              } else if (!pl3.type.is_stream(stream2) || stream2.stream === null) {
                thread.throw_error(pl3.error.existence("stream", stream, atom.indicator));
              } else if (stream2.input) {
                thread.throw_error(pl3.error.permission("output", "stream", stream, atom.indicator));
              } else if (stream2.type === "binary") {
                thread.throw_error(pl3.error.permission("output", "binary_stream", stream, atom.indicator));
              } else if (stream2.position === "past_end_of_stream" && stream2.eof_action === "error") {
                thread.throw_error(pl3.error.permission("output", "past_end_of_stream", stream, atom.indicator));
              } else {
                var obj_options = {};
                var pointer = options;
                var property;
                while (pl3.type.is_term(pointer) && pointer.indicator === "./2") {
                  property = pointer.args[0];
                  if (pl3.type.is_variable(property)) {
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                    return;
                  } else if (!pl3.type.is_write_option(property)) {
                    thread.throw_error(pl3.error.domain("write_option", property, atom.indicator));
                    return;
                  }
                  obj_options[property.id] = property.args[0].id === "true";
                  pointer = pointer.args[1];
                }
                if (pointer.indicator !== "[]/0") {
                  if (pl3.type.is_variable(pointer))
                    thread.throw_error(pl3.error.instantiation(atom.indicator));
                  else
                    thread.throw_error(pl3.error.type("list", options, atom.indicator));
                  return;
                } else {
                  obj_options.session = thread.session;
                  var text = term.toString(obj_options);
                  stream2.stream.put(text, stream2.position);
                  if (typeof stream2.position === "number")
                    stream2.position += text.length;
                  thread.success(point);
                }
              }
            },
            "halt/0": function(thread, point, _) {
              thread.points = [];
            },
            "halt/1": function(thread, point, atom) {
              var int = atom.args[0];
              if (pl3.type.is_variable(int)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_integer(int)) {
                thread.throw_error(pl3.error.type("integer", int, atom.indicator));
              } else {
                thread.points = [];
              }
            },
            "current_prolog_flag/2": function(thread, point, atom) {
              var flag = atom.args[0], value = atom.args[1];
              if (!pl3.type.is_variable(flag) && !pl3.type.is_atom(flag)) {
                thread.throw_error(pl3.error.type("atom", flag, atom.indicator));
              } else if (!pl3.type.is_variable(flag) && !pl3.type.is_flag(flag)) {
                thread.throw_error(pl3.error.domain("prolog_flag", flag, atom.indicator));
              } else {
                var states = [];
                for (var name in pl3.flag) {
                  if (!pl3.flag.hasOwnProperty(name))
                    continue;
                  var goal = new Term(",", [new Term("=", [new Term(name), flag]), new Term("=", [thread.get_flag(name), value])]);
                  states.push(new State(point.goal.replace(goal), point.substitution, point));
                }
                thread.prepend(states);
              }
            },
            "set_prolog_flag/2": function(thread, point, atom) {
              var flag = atom.args[0], value = atom.args[1];
              if (pl3.type.is_variable(flag) || pl3.type.is_variable(value)) {
                thread.throw_error(pl3.error.instantiation(atom.indicator));
              } else if (!pl3.type.is_atom(flag)) {
                thread.throw_error(pl3.error.type("atom", flag, atom.indicator));
              } else if (!pl3.type.is_flag(flag)) {
                thread.throw_error(pl3.error.domain("prolog_flag", flag, atom.indicator));
              } else if (!pl3.type.is_value_flag(flag, value)) {
                thread.throw_error(pl3.error.domain("flag_value", new Term("+", [flag, value]), atom.indicator));
              } else if (!pl3.type.is_modifiable_flag(flag)) {
                thread.throw_error(pl3.error.permission("modify", "flag", flag));
              } else {
                thread.session.flag[flag.id] = value;
                thread.success(point);
              }
            }
          },
          flag: {
            bounded: {
              allowed: [new Term("true"), new Term("false")],
              value: new Term("true"),
              changeable: false
            },
            max_integer: {
              allowed: [new Num(Number.MAX_SAFE_INTEGER)],
              value: new Num(Number.MAX_SAFE_INTEGER),
              changeable: false
            },
            min_integer: {
              allowed: [new Num(Number.MIN_SAFE_INTEGER)],
              value: new Num(Number.MIN_SAFE_INTEGER),
              changeable: false
            },
            integer_rounding_function: {
              allowed: [new Term("down"), new Term("toward_zero")],
              value: new Term("toward_zero"),
              changeable: false
            },
            char_conversion: {
              allowed: [new Term("on"), new Term("off")],
              value: new Term("on"),
              changeable: true
            },
            debug: {
              allowed: [new Term("on"), new Term("off")],
              value: new Term("off"),
              changeable: true
            },
            max_arity: {
              allowed: [new Term("unbounded")],
              value: new Term("unbounded"),
              changeable: false
            },
            unknown: {
              allowed: [new Term("error"), new Term("fail"), new Term("warning")],
              value: new Term("error"),
              changeable: true
            },
            double_quotes: {
              allowed: [new Term("chars"), new Term("codes"), new Term("atom")],
              value: new Term("codes"),
              changeable: true
            },
            occurs_check: {
              allowed: [new Term("false"), new Term("true")],
              value: new Term("false"),
              changeable: true
            },
            dialect: {
              allowed: [new Term("tau")],
              value: new Term("tau"),
              changeable: false
            },
            version_data: {
              allowed: [new Term("tau", [new Num(version.major, false), new Num(version.minor, false), new Num(version.patch, false), new Term(version.status)])],
              value: new Term("tau", [new Num(version.major, false), new Num(version.minor, false), new Num(version.patch, false), new Term(version.status)]),
              changeable: false
            },
            nodejs: {
              allowed: [new Term("yes"), new Term("no")],
              value: new Term(typeof module !== "undefined" && module.exports ? "yes" : "no"),
              changeable: false
            }
          },
          unify: function(s, t, occurs_check) {
            occurs_check = occurs_check === void 0 ? false : occurs_check;
            var G = [{left: s, right: t}], links = {};
            while (G.length !== 0) {
              var eq = G.pop();
              s = eq.left;
              t = eq.right;
              if (pl3.type.is_term(s) && pl3.type.is_term(t)) {
                if (s.indicator !== t.indicator)
                  return null;
                for (var i = 0; i < s.args.length; i++)
                  G.push({left: s.args[i], right: t.args[i]});
              } else if (pl3.type.is_number(s) && pl3.type.is_number(t)) {
                if (s.value !== t.value || s.is_float !== t.is_float)
                  return null;
              } else if (pl3.type.is_variable(s)) {
                if (pl3.type.is_variable(t) && s.id === t.id)
                  continue;
                if (occurs_check === true && t.variables().indexOf(s.id) !== -1)
                  return null;
                if (s.id !== "_") {
                  var subs = new Substitution();
                  subs.add(s.id, t);
                  for (var i = 0; i < G.length; i++) {
                    G[i].left = G[i].left.apply(subs);
                    G[i].right = G[i].right.apply(subs);
                  }
                  for (var i in links)
                    links[i] = links[i].apply(subs);
                  links[s.id] = t;
                }
              } else if (pl3.type.is_variable(t)) {
                G.push({left: t, right: s});
              } else if (s.unify !== void 0) {
                if (!s.unify(t))
                  return null;
              } else {
                return null;
              }
            }
            return new Substitution(links);
          },
          compare: function(obj1, obj2) {
            var type = pl3.type.compare(obj1, obj2);
            return type !== 0 ? type : obj1.compare(obj2);
          },
          arithmetic_compare: function(thread, obj1, obj2) {
            var expr1 = obj1.interpret(thread);
            if (!pl3.type.is_number(expr1)) {
              return expr1;
            } else {
              var expr2 = obj2.interpret(thread);
              if (!pl3.type.is_number(expr2)) {
                return expr2;
              } else {
                return expr1.value < expr2.value ? -1 : expr1.value > expr2.value ? 1 : 0;
              }
            }
          },
          operate: function(thread, obj) {
            if (pl3.type.is_operator(obj)) {
              var op = pl3.type.is_operator(obj);
              var args = [], value;
              var type = false;
              for (var i = 0; i < obj.args.length; i++) {
                value = obj.args[i].interpret(thread);
                if (!pl3.type.is_number(value)) {
                  return value;
                } else if (op.type_args !== null && value.is_float !== op.type_args) {
                  return pl3.error.type(op.type_args ? "float" : "integer", value, thread.__call_indicator);
                } else {
                  args.push(value.value);
                }
                type = type || value.is_float;
              }
              args.push(thread);
              value = pl3.arithmetic.evaluation[obj.indicator].fn.apply(this, args);
              type = op.type_result === null ? type : op.type_result;
              if (pl3.type.is_term(value)) {
                return value;
              } else if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
                return pl3.error.evaluation("overflow", thread.__call_indicator);
              } else if (type === false && thread.get_flag("bounded").id === "true" && (value > thread.get_flag("max_integer").value || value < thread.get_flag("min_integer").value)) {
                return pl3.error.evaluation("int_overflow", thread.__call_indicator);
              } else {
                return new Num(value, type);
              }
            } else {
              return pl3.error.type("evaluable", obj.indicator, thread.__call_indicator);
            }
          },
          error: {
            existence: function(type, object, indicator) {
              if (typeof object === "string")
                object = str_indicator(object);
              return new Term("error", [new Term("existence_error", [new Term(type), object]), str_indicator(indicator)]);
            },
            type: function(expected, found, indicator) {
              return new Term("error", [new Term("type_error", [new Term(expected), found]), str_indicator(indicator)]);
            },
            instantiation: function(indicator) {
              return new Term("error", [new Term("instantiation_error"), str_indicator(indicator)]);
            },
            domain: function(expected, found, indicator) {
              return new Term("error", [new Term("domain_error", [new Term(expected), found]), str_indicator(indicator)]);
            },
            representation: function(flag, indicator) {
              return new Term("error", [new Term("representation_error", [new Term(flag)]), str_indicator(indicator)]);
            },
            permission: function(operation, type, found, indicator) {
              return new Term("error", [new Term("permission_error", [new Term(operation), new Term(type), found]), str_indicator(indicator)]);
            },
            evaluation: function(error, indicator) {
              return new Term("error", [new Term("evaluation_error", [new Term(error)]), str_indicator(indicator)]);
            },
            syntax: function(token, expected, last) {
              token = token || {value: "", line: 0, column: 0, matches: [""], start: 0};
              var position = last && token.matches.length > 0 ? token.start + token.matches[0].length : token.start;
              var found = last ? new Term("token_not_found") : new Term("found", [new Term(token.value.toString())]);
              var info = new Term(".", [new Term("line", [new Num(token.line + 1)]), new Term(".", [new Term("column", [new Num(position + 1)]), new Term(".", [found, new Term("[]", [])])])]);
              return new Term("error", [new Term("syntax_error", [new Term(expected)]), info]);
            },
            syntax_by_predicate: function(expected, indicator) {
              return new Term("error", [new Term("syntax_error", [new Term(expected)]), str_indicator(indicator)]);
            }
          },
          warning: {
            singleton: function(variables, rule, line) {
              var list = new Term("[]");
              for (var i = variables.length - 1; i >= 0; i--)
                list = new Term(".", [new Var(variables[i]), list]);
              return new Term("warning", [new Term("singleton_variables", [list, str_indicator(rule)]), new Term(".", [new Term("line", [new Num(line, false)]), new Term("[]")])]);
            },
            failed_goal: function(goal, line) {
              return new Term("warning", [new Term("failed_goal", [goal]), new Term(".", [new Term("line", [new Num(line, false)]), new Term("[]")])]);
            }
          },
          format_variable: function(variable) {
            return "_" + variable;
          },
          format_answer: function(answer, thread, options) {
            if (thread instanceof Session2)
              thread = thread.thread;
            var options = options ? options : {};
            options.session = thread ? thread.session : void 0;
            if (pl3.type.is_error(answer)) {
              return "uncaught exception: " + answer.args[0].toString();
            } else if (answer === false) {
              return "false.";
            } else if (answer === null) {
              return "limit exceeded ;";
            } else {
              var i = 0;
              var str = "";
              if (pl3.type.is_substitution(answer)) {
                var dom = answer.domain(true);
                answer = answer.filter(function(id, value) {
                  return !pl3.type.is_variable(value) || dom.indexOf(value.id) !== -1 && id !== value.id;
                });
              }
              for (var link in answer.links) {
                if (!answer.links.hasOwnProperty(link))
                  continue;
                i++;
                if (str !== "") {
                  str += ", ";
                }
                str += link.toString(options) + " = " + answer.links[link].toString(options);
              }
              var delimiter = typeof thread === "undefined" || thread.points.length > 0 ? " ;" : ".";
              if (i === 0) {
                return "true" + delimiter;
              } else {
                return str + delimiter;
              }
            }
          },
          flatten_error: function(error) {
            if (!pl3.type.is_error(error))
              return null;
            error = error.args[0];
            var obj = {};
            obj.type = error.args[0].id;
            obj.thrown = obj.type === "syntax_error" ? null : error.args[1].id;
            obj.expected = null;
            obj.found = null;
            obj.representation = null;
            obj.existence = null;
            obj.existence_type = null;
            obj.line = null;
            obj.column = null;
            obj.permission_operation = null;
            obj.permission_type = null;
            obj.evaluation_type = null;
            if (obj.type === "type_error" || obj.type === "domain_error") {
              obj.expected = error.args[0].args[0].id;
              obj.found = error.args[0].args[1].toString();
            } else if (obj.type === "syntax_error") {
              if (error.args[1].indicator === "./2") {
                obj.expected = error.args[0].args[0].id;
                obj.found = error.args[1].args[1].args[1].args[0];
                obj.found = obj.found.id === "token_not_found" ? obj.found.id : obj.found.args[0].id;
                obj.line = error.args[1].args[0].args[0].value;
                obj.column = error.args[1].args[1].args[0].args[0].value;
              } else {
                obj.thrown = error.args[1].id;
              }
            } else if (obj.type === "permission_error") {
              obj.found = error.args[0].args[2].toString();
              obj.permission_operation = error.args[0].args[0].id;
              obj.permission_type = error.args[0].args[1].id;
            } else if (obj.type === "evaluation_error") {
              obj.evaluation_type = error.args[0].args[0].id;
            } else if (obj.type === "representation_error") {
              obj.representation = error.args[0].args[0].id;
            } else if (obj.type === "existence_error") {
              obj.existence = error.args[0].args[1].toString();
              obj.existence_type = error.args[0].args[0].id;
            }
            return obj;
          },
          create: function(limit) {
            return new pl3.type.Session(limit);
          }
        };
        if (typeof module !== "undefined") {
          module.exports = pl3;
        } else {
          window.pl = pl3;
        }
      })();
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol = root.Symbol;
      module.exports = Symbol;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      module.exports = getValue;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key2) {
        var value = getValue(object, key2);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key2) {
        var result = this.has(key2) && delete this.__data__[key2];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key2) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key2];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key2) {
        var data = this.__data__;
        return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
      }
      module.exports = hashHas;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key2, value) {
        var data = this.__data__;
        this.size += this.has(key2) ? 0 : 1;
        data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key2) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key2)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key2, value) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          ++this.size;
          data.push([key2, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key2) {
        var data = map.__data__;
        return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key2) {
        var result = getMapData(this, key2)["delete"](key2);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      module.exports = mapCacheGet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      module.exports = mapCacheHas;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key2, value) {
        var data = getMapData(this, key2), size = data.size;
        data.set(key2, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key2)) {
            return cache.get(key2);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key2, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key2) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key2;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol ? Symbol.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/get.js
  var require_get = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key2, value) {
        if (key2 == "__proto__" && defineProperty) {
          defineProperty(object, key2, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key2] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key2, value) {
        var objValue = object[key2];
        if (!(hasOwnProperty.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
          baseAssignValue(object, key2, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key2 = toKey(path[index]), newValue = value;
          if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key2];
            newValue = customizer ? customizer(objValue, key2, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key2, newValue);
          nested = nested[key2];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/set.js
  var require_set = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/set.js"(exports, module) {
      var baseSet = require_baseSet();
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      module.exports = set;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/last.js
  var require_last = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/last.js"(exports, module) {
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : void 0;
      }
      module.exports = last;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseSlice.js
  var require_baseSlice = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseSlice.js"(exports, module) {
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      module.exports = baseSlice;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_parent.js
  var require_parent = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_parent.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSlice = require_baseSlice();
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      module.exports = parent;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseUnset.js
  var require_baseUnset = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/_baseUnset.js"(exports, module) {
      var castPath = require_castPath();
      var last = require_last();
      var parent = require_parent();
      var toKey = require_toKey();
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      module.exports = baseUnset;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/unset.js
  var require_unset = __commonJS({
    "pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/.yarn/cache/lodash-npm-4.17.20-c0db62021c-b31afa0973.zip/node_modules/lodash/unset.js"(exports, module) {
      var baseUnset = require_baseUnset();
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      module.exports = unset;
    }
  });

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });
  var import_core10 = __toModule(require("@yarnpkg/core"));

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/commands/constraints/query.ts
  var import_cli = __toModule(require("@yarnpkg/cli"));
  var import_core4 = __toModule(require("@yarnpkg/core"));
  var import_core5 = __toModule(require("@yarnpkg/core"));
  var import_clipanion = __toModule(require("clipanion"));

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/Constraints.ts
  var import_core2 = __toModule(require("@yarnpkg/core"));
  var import_core3 = __toModule(require("@yarnpkg/core"));
  var import_fslib = __toModule(require("@yarnpkg/fslib"));
  var import_lists = __toModule(require_lists());
  var import_tau_prolog2 = __toModule(require_core());

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/tauModule.ts
  var import_core = __toModule(require("@yarnpkg/core"));
  var import_get = __toModule(require_get());
  var import_tau_prolog = __toModule(require_core());
  var import_vm = __toModule(require("vm"));
  var {is_atom: isAtom, is_variable: isVariable, is_instantiated_list: isInstantiatedList} = import_tau_prolog.default.type;
  function prependGoals(thread, point, goals) {
    thread.prepend(goals.map((goal) => new import_tau_prolog.default.type.State(point.goal.replace(goal), point.substitution, point)));
  }
  var projects = new WeakMap();
  function getProject(thread) {
    const project = projects.get(thread.session);
    if (project == null)
      throw new Error(`Assertion failed: A project should have been registered for the active session`);
    return project;
  }
  var tauModule = new import_tau_prolog.default.type.Module(`constraints`, {
    [`project_workspaces_by_descriptor/3`]: (thread, point, atom) => {
      const [descriptorIdent, descriptorRange, workspaceCwd] = atom.args;
      if (!isAtom(descriptorIdent) || !isAtom(descriptorRange)) {
        thread.throwError(import_tau_prolog.default.error.instantiation(atom.indicator));
        return;
      }
      const ident = import_core.structUtils.parseIdent(descriptorIdent.id);
      const descriptor = import_core.structUtils.makeDescriptor(ident, descriptorRange.id);
      const project = getProject(thread);
      const workspace = project.tryWorkspaceByDescriptor(descriptor);
      if (isVariable(workspaceCwd)) {
        if (workspace !== null) {
          prependGoals(thread, point, [new import_tau_prolog.default.type.Term(`=`, [
            workspaceCwd,
            new import_tau_prolog.default.type.Term(String(workspace.relativeCwd))
          ])]);
        }
      }
      if (isAtom(workspaceCwd)) {
        if (workspace !== null && workspace.relativeCwd === workspaceCwd.id) {
          thread.success(point);
        }
      }
    },
    [`workspace_field/3`]: (thread, point, atom) => {
      const [workspaceCwd, fieldName, fieldValue] = atom.args;
      if (!isAtom(workspaceCwd) || !isAtom(fieldName)) {
        thread.throwError(import_tau_prolog.default.error.instantiation(atom.indicator));
        return;
      }
      const project = getProject(thread);
      const workspace = project.tryWorkspaceByCwd(workspaceCwd.id);
      if (workspace == null)
        return;
      const value = (0, import_get.default)(workspace.manifest.raw, fieldName.id);
      if (typeof value === `undefined`)
        return;
      prependGoals(thread, point, [new import_tau_prolog.default.type.Term(`=`, [
        fieldValue,
        new import_tau_prolog.default.type.Term(String(value))
      ])]);
    },
    [`workspace_field_test/3`]: (thread, point, atom) => {
      const [workspaceCwd, fieldName, checkCode] = atom.args;
      thread.prepend([new import_tau_prolog.default.type.State(point.goal.replace(new import_tau_prolog.default.type.Term(`workspace_field_test`, [
        workspaceCwd,
        fieldName,
        checkCode,
        new import_tau_prolog.default.type.Term(`[]`, [])
      ])), point.substitution, point)]);
    },
    [`workspace_field_test/4`]: (thread, point, atom) => {
      const [workspaceCwd, fieldName, checkCode, checkArgv] = atom.args;
      if (!isAtom(workspaceCwd) || !isAtom(fieldName) || !isAtom(checkCode) || !isInstantiatedList(checkArgv)) {
        thread.throwError(import_tau_prolog.default.error.instantiation(atom.indicator));
        return;
      }
      const project = getProject(thread);
      const workspace = project.tryWorkspaceByCwd(workspaceCwd.id);
      if (workspace == null)
        return;
      const value = (0, import_get.default)(workspace.manifest.raw, fieldName.id);
      if (typeof value === `undefined`)
        return;
      const vars = {$$: value};
      for (const [index, value2] of checkArgv.toJavaScript().entries())
        vars[`$${index}`] = value2;
      const result = import_vm.default.runInNewContext(checkCode.id, vars);
      if (result) {
        thread.success(point);
      }
    }
  }, [
    `project_workspaces_by_descriptor/3`,
    `workspace_field/3`,
    `workspace_field_test/3`,
    `workspace_field_test/4`
  ]);
  function linkProjectToSession(session, project) {
    projects.set(session, project);
    session.consult(`:- use_module(library(${tauModule.id})).`);
  }

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/Constraints.ts
  (0, import_lists.default)(import_tau_prolog2.default);
  var DependencyType;
  (function(DependencyType2) {
    DependencyType2["Dependencies"] = `dependencies`;
    DependencyType2["DevDependencies"] = `devDependencies`;
    DependencyType2["PeerDependencies"] = `peerDependencies`;
  })(DependencyType || (DependencyType = {}));
  var DEPENDENCY_TYPES = [
    DependencyType.Dependencies,
    DependencyType.DevDependencies,
    DependencyType.PeerDependencies
  ];
  function extractErrorImpl(value) {
    if (value instanceof import_tau_prolog2.default.type.Num)
      return value.value;
    if (value instanceof import_tau_prolog2.default.type.Term) {
      if (value.args.length === 0)
        return value.id;
      switch (value.indicator) {
        case `throw/1`:
          return extractErrorImpl(value.args[0]);
        case `error/1`:
          return extractErrorImpl(value.args[0]);
        case `error/2`:
          return Object.assign(extractErrorImpl(value.args[0]), ...extractErrorImpl(value.args[1]));
        case `syntax_error/1`:
          return new import_core2.ReportError(import_core2.MessageName.PROLOG_SYNTAX_ERROR, `Syntax error: ${extractErrorImpl(value.args[0])}`);
        case `existence_error/2`:
          return new import_core2.ReportError(import_core2.MessageName.PROLOG_EXISTENCE_ERROR, `Existence error: ${extractErrorImpl(value.args[0])} ${extractErrorImpl(value.args[1])} not found`);
        case `line/1`:
          return {line: extractErrorImpl(value.args[0])};
        case `column/1`:
          return {column: extractErrorImpl(value.args[0])};
        case `found/1`:
          return {found: extractErrorImpl(value.args[0])};
        case `./2`:
          return [extractErrorImpl(value.args[0])].concat(extractErrorImpl(value.args[1]));
        case `//2`:
          return `${extractErrorImpl(value.args[0])}/${extractErrorImpl(value.args[1])}`;
      }
    }
    throw `couldn't pretty print because of unsupported node ${value}`;
  }
  function extractError(val) {
    let err;
    try {
      err = extractErrorImpl(val);
    } catch (caught) {
      if (typeof caught === `string`) {
        throw new import_core2.ReportError(import_core2.MessageName.PROLOG_UNKNOWN_ERROR, `Unknown error: ${val} (note: ${caught})`);
      } else {
        throw caught;
      }
    }
    if (typeof err.line !== `undefined` && typeof err.column !== `undefined`)
      err.message += ` at line ${err.line}, column ${err.column}`;
    return err;
  }
  var Session = class {
    constructor(project, source) {
      this.session = import_tau_prolog2.default.create();
      linkProjectToSession(this.session, project);
      this.session.consult(`:- use_module(library(lists)).`);
      this.session.consult(source);
    }
    fetchNextAnswer() {
      return new Promise((resolve) => {
        this.session.answer((result) => {
          resolve(result);
        });
      });
    }
    async *makeQuery(query) {
      const parsed = this.session.query(query);
      if (parsed !== true)
        throw extractError(parsed);
      while (true) {
        const answer = await this.fetchNextAnswer();
        if (!answer)
          break;
        if (answer.id === `throw`)
          throw extractError(answer);
        yield answer;
      }
    }
  };
  function parseLink(link) {
    if (link.id === `null`) {
      return null;
    } else {
      return `${link.toJavaScript()}`;
    }
  }
  function parseLinkToJson(link) {
    if (link.id === `null`) {
      return null;
    } else {
      const val = link.toJavaScript();
      if (typeof val !== `string`)
        return JSON.stringify(val);
      try {
        return JSON.stringify(JSON.parse(val));
      } catch {
        return JSON.stringify(val);
      }
    }
  }
  var Constraints = class {
    constructor(project) {
      this.source = ``;
      this.project = project;
      const constraintsPath = project.configuration.get(`constraintsPath`);
      if (import_fslib.xfs.existsSync(constraintsPath)) {
        this.source = import_fslib.xfs.readFileSync(constraintsPath, `utf8`);
      }
    }
    static async find(project) {
      return new Constraints(project);
    }
    getProjectDatabase() {
      let database = ``;
      for (const dependencyType of DEPENDENCY_TYPES)
        database += `dependency_type(${dependencyType}).
`;
      for (const workspace of this.project.workspacesByCwd.values()) {
        const relativeCwd = workspace.relativeCwd;
        database += `workspace(${escape(relativeCwd)}).
`;
        database += `workspace_ident(${escape(relativeCwd)}, ${escape(import_core3.structUtils.stringifyIdent(workspace.locator))}).
`;
        database += `workspace_version(${escape(relativeCwd)}, ${escape(workspace.manifest.version)}).
`;
        for (const dependencyType of DEPENDENCY_TYPES) {
          for (const dependency of workspace.manifest[dependencyType].values()) {
            database += `workspace_has_dependency(${escape(relativeCwd)}, ${escape(import_core3.structUtils.stringifyIdent(dependency))}, ${escape(dependency.range)}, ${dependencyType}).
`;
          }
        }
      }
      database += `workspace(_) :- false.
`;
      database += `workspace_ident(_, _) :- false.
`;
      database += `workspace_version(_, _) :- false.
`;
      database += `workspace_has_dependency(_, _, _, _) :- false.
`;
      return database;
    }
    getDeclarations() {
      let declarations = ``;
      declarations += `gen_enforced_dependency(_, _, _, _) :- false.
`;
      declarations += `gen_enforced_field(_, _, _) :- false.
`;
      return declarations;
    }
    get fullSource() {
      return `${this.getProjectDatabase()}
${this.source}
${this.getDeclarations()}`;
    }
    createSession() {
      return new Session(this.project, this.fullSource);
    }
    async process() {
      const session = this.createSession();
      return {
        enforcedDependencies: await this.genEnforcedDependencies(session),
        enforcedFields: await this.genEnforcedFields(session)
      };
    }
    async genEnforcedDependencies(session) {
      const enforcedDependencies = [];
      for await (const answer of session.makeQuery(`workspace(WorkspaceCwd), dependency_type(DependencyType), gen_enforced_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType).`)) {
        const workspaceCwd = import_fslib.ppath.resolve(this.project.cwd, parseLink(answer.links.WorkspaceCwd));
        const dependencyRawIdent = parseLink(answer.links.DependencyIdent);
        const dependencyRange = parseLink(answer.links.DependencyRange);
        const dependencyType = parseLink(answer.links.DependencyType);
        if (workspaceCwd === null || dependencyRawIdent === null)
          throw new Error(`Invalid rule`);
        const workspace = this.project.getWorkspaceByCwd(workspaceCwd);
        const dependencyIdent = import_core3.structUtils.parseIdent(dependencyRawIdent);
        enforcedDependencies.push({workspace, dependencyIdent, dependencyRange, dependencyType});
      }
      return import_core3.miscUtils.sortMap(enforcedDependencies, [
        ({dependencyRange}) => dependencyRange !== null ? `0` : `1`,
        ({workspace}) => import_core3.structUtils.stringifyIdent(workspace.locator),
        ({dependencyIdent}) => import_core3.structUtils.stringifyIdent(dependencyIdent)
      ]);
    }
    async genEnforcedFields(session) {
      const enforcedFields = [];
      for await (const answer of session.makeQuery(`workspace(WorkspaceCwd), gen_enforced_field(WorkspaceCwd, FieldPath, FieldValue).`)) {
        const workspaceCwd = import_fslib.ppath.resolve(this.project.cwd, parseLink(answer.links.WorkspaceCwd));
        const fieldPath = parseLink(answer.links.FieldPath);
        const fieldValue = parseLinkToJson(answer.links.FieldValue);
        if (workspaceCwd === null || fieldPath === null)
          throw new Error(`Invalid rule`);
        const workspace = this.project.getWorkspaceByCwd(workspaceCwd);
        enforcedFields.push({workspace, fieldPath, fieldValue});
      }
      return import_core3.miscUtils.sortMap(enforcedFields, [
        ({workspace}) => import_core3.structUtils.stringifyIdent(workspace.locator),
        ({fieldPath}) => fieldPath
      ]);
    }
    async *query(query) {
      const session = this.createSession();
      for await (const answer of session.makeQuery(query)) {
        const parsedLinks = {};
        for (const [variable, value] of Object.entries(answer.links)) {
          if (variable !== `_`) {
            parsedLinks[variable] = parseLink(value);
          }
        }
        yield parsedLinks;
      }
    }
  };
  function escape(what) {
    if (typeof what === `string`) {
      return `'${what}'`;
    } else {
      return `[]`;
    }
  }

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/commands/constraints/query.ts
  var ConstraintsQueryCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.json = import_clipanion.Option.Boolean(`--json`, false, {
        description: `Format the output as an NDJSON stream`
      });
      this.query = import_clipanion.Option.String();
    }
    async execute() {
      const configuration = await import_core4.Configuration.find(this.context.cwd, this.context.plugins);
      const {project} = await import_core4.Project.find(configuration, this.context.cwd);
      const constraints = await Constraints.find(project);
      let query = this.query;
      if (!query.endsWith(`.`))
        query = `${query}.`;
      const report = await import_core5.StreamReport.start({
        configuration,
        json: this.json,
        stdout: this.context.stdout
      }, async (report2) => {
        for await (const result of constraints.query(query)) {
          const lines = Array.from(Object.entries(result));
          const lineCount = lines.length;
          const maxVariableNameLength = lines.reduce((max, [variableName]) => Math.max(max, variableName.length), 0);
          for (let i = 0; i < lineCount; i++) {
            const [variableName, value] = lines[i];
            report2.reportInfo(null, `${getLinePrefix(i, lineCount)}${variableName.padEnd(maxVariableNameLength, ` `)} = ${valueToString(value)}`);
          }
          report2.reportJson(result);
        }
      });
      return report.exitCode();
    }
  };
  ConstraintsQueryCommand.paths = [
    [`constraints`, `query`]
  ];
  ConstraintsQueryCommand.usage = import_clipanion.Command.Usage({
    category: `Constraints-related commands`,
    description: `query the constraints fact database`,
    details: `
      This command will output all matches to the given prolog query.
    `,
    examples: [[
      `List all dependencies throughout the workspace`,
      `yarn constraints query 'workspace_has_dependency(_, DependencyName, _, _).'`
    ]]
  });
  var query_default = ConstraintsQueryCommand;
  function valueToString(value) {
    if (typeof value !== `string`)
      return `${value}`;
    if (value.match(/^[a-zA-Z][a-zA-Z0-9_]+$/))
      return value;
    return `'${value}'`;
  }
  function getLinePrefix(index, count) {
    const isFirst = index === 0;
    const isLast = index === count - 1;
    if (isFirst && isLast)
      return ``;
    if (isFirst)
      return `\u250C `;
    if (isLast)
      return `\u2514 `;
    return `\u2502 `;
  }

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/commands/constraints/source.ts
  var import_cli2 = __toModule(require("@yarnpkg/cli"));
  var import_core6 = __toModule(require("@yarnpkg/core"));
  var import_clipanion2 = __toModule(require("clipanion"));
  var ConstraintsSourceCommand = class extends import_cli2.BaseCommand {
    constructor() {
      super(...arguments);
      this.verbose = import_clipanion2.Option.Boolean(`-v,--verbose`, false, {
        description: `Also print the fact database automatically compiled from the workspace manifests`
      });
    }
    async execute() {
      const configuration = await import_core6.Configuration.find(this.context.cwd, this.context.plugins);
      const {project} = await import_core6.Project.find(configuration, this.context.cwd);
      const constraints = await Constraints.find(project);
      this.context.stdout.write(this.verbose ? constraints.fullSource : constraints.source);
    }
  };
  ConstraintsSourceCommand.paths = [
    [`constraints`, `source`]
  ];
  ConstraintsSourceCommand.usage = import_clipanion2.Command.Usage({
    category: `Constraints-related commands`,
    description: `print the source code for the constraints`,
    details: `
      This command will print the Prolog source code used by the constraints engine. Adding the \`-v,--verbose\` flag will print the *full* source code, including the fact database automatically compiled from the workspace manifests.
    `,
    examples: [[
      `Prints the source code`,
      `yarn constraints source`
    ], [
      `Print the source code and the fact database`,
      `yarn constraints source -v`
    ]]
  });
  var source_default = ConstraintsSourceCommand;

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/commands/constraints.ts
  var import_cli3 = __toModule(require("@yarnpkg/cli"));
  var import_core7 = __toModule(require("@yarnpkg/core"));
  var import_core8 = __toModule(require("@yarnpkg/core"));
  var import_core9 = __toModule(require("@yarnpkg/core"));
  var import_clipanion3 = __toModule(require("clipanion"));
  var import_get2 = __toModule(require_get());
  var import_set = __toModule(require_set());
  var import_unset = __toModule(require_unset());
  var ConstraintsCheckCommand = class extends import_cli3.BaseCommand {
    constructor() {
      super(...arguments);
      this.fix = import_clipanion3.Option.Boolean(`--fix`, false, {
        description: `Attempt to automatically fix unambiguous issues, following a multi-pass process`
      });
    }
    async execute() {
      const configuration = await import_core7.Configuration.find(this.context.cwd, this.context.plugins);
      const {project} = await import_core7.Project.find(configuration, this.context.cwd);
      const constraints = await Constraints.find(project);
      const report = await import_core8.StreamReport.start({
        configuration,
        stdout: this.context.stdout
      }, async (report2) => {
        let allSaves = new Set();
        let errors = [];
        for (let t = 0, T = this.fix ? 10 : 1; t < T; ++t) {
          errors = [];
          const result = await constraints.process();
          const modifiedDependencies = new Set();
          await processDependencyConstraints(modifiedDependencies, errors, result.enforcedDependencies, {
            fix: this.fix,
            configuration
          });
          for (const {manifest} of modifiedDependencies) {
            const newManifest = {};
            manifest.exportTo(newManifest);
            manifest.raw = newManifest;
          }
          const modifiedFields = new Set();
          await processFieldConstraints(modifiedFields, errors, result.enforcedFields, {
            fix: this.fix,
            configuration
          });
          for (const {manifest} of modifiedFields)
            manifest.load(manifest.raw);
          allSaves = new Set([
            ...allSaves,
            ...modifiedDependencies,
            ...modifiedFields
          ]);
          if (modifiedDependencies.size === 0 && modifiedFields.size === 0) {
            break;
          }
        }
        await Promise.all([...allSaves].map(async (workspace) => {
          await workspace.persistManifest();
        }));
        for (const [messageName, message] of errors) {
          report2.reportError(messageName, message);
        }
      });
      if (report.hasErrors())
        return report.exitCode();
      return 0;
    }
  };
  ConstraintsCheckCommand.paths = [
    [`constraints`]
  ];
  ConstraintsCheckCommand.usage = import_clipanion3.Command.Usage({
    category: `Constraints-related commands`,
    description: `check that the project constraints are met`,
    details: `
      This command will run constraints on your project and emit errors for each one that is found but isn't met. If any error is emitted the process will exit with a non-zero exit code.

      If the \`--fix\` flag is used, Yarn will attempt to automatically fix the issues the best it can, following a multi-pass process (with a maximum of 10 iterations). Some ambiguous patterns cannot be autofixed, in which case you'll have to manually specify the right resolution.

      For more information as to how to write constraints, please consult our dedicated page on our website: https://yarnpkg.com/features/constraints.
    `,
    examples: [[
      `Check that all constraints are satisfied`,
      `yarn constraints`
    ], [
      `Autofix all unmet constraints`,
      `yarn constraints --fix`
    ]]
  });
  var constraints_default = ConstraintsCheckCommand;
  async function processDependencyConstraints(toSave, errors, enforcedDependencies, {configuration, fix}) {
    const allIdents = new Map();
    const byWorkspaces = new Map();
    for (const {workspace, dependencyIdent, dependencyRange, dependencyType} of enforcedDependencies) {
      let byWorkspacesStore = byWorkspaces.get(workspace);
      if (typeof byWorkspacesStore === `undefined`)
        byWorkspaces.set(workspace, byWorkspacesStore = new Map());
      let byIdentStore = byWorkspacesStore.get(dependencyIdent.identHash);
      if (typeof byIdentStore === `undefined`)
        byWorkspacesStore.set(dependencyIdent.identHash, byIdentStore = new Map());
      let byDependencyTypeStore = byIdentStore.get(dependencyType);
      if (typeof byDependencyTypeStore === `undefined`)
        byIdentStore.set(dependencyType, byDependencyTypeStore = new Set());
      allIdents.set(dependencyIdent.identHash, dependencyIdent);
      byDependencyTypeStore.add(dependencyRange);
    }
    for (const [workspace, byWorkspacesStore] of byWorkspaces) {
      for (const [identHash, byIdentStore] of byWorkspacesStore) {
        const dependencyIdent = allIdents.get(identHash);
        if (typeof dependencyIdent === `undefined`)
          throw new Error(`Assertion failed: The ident should have been registered`);
        for (const [dependencyType, byDependencyTypeStore] of byIdentStore) {
          const expectedRanges = byDependencyTypeStore.has(null) ? [null] : [...byDependencyTypeStore];
          if (expectedRanges.length > 2) {
            errors.push([import_core8.MessageName.CONSTRAINTS_AMBIGUITY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must depend on ${import_core9.structUtils.prettyIdent(configuration, dependencyIdent)} via conflicting ranges ${expectedRanges.slice(0, -1).map((expectedRange) => import_core9.structUtils.prettyRange(configuration, String(expectedRange))).join(`, `)}, and ${import_core9.structUtils.prettyRange(configuration, String(expectedRanges[expectedRanges.length - 1]))} (in ${dependencyType})`]);
          } else if (expectedRanges.length > 1) {
            errors.push([import_core8.MessageName.CONSTRAINTS_AMBIGUITY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must depend on ${import_core9.structUtils.prettyIdent(configuration, dependencyIdent)} via conflicting ranges ${import_core9.structUtils.prettyRange(configuration, String(expectedRanges[0]))} and ${import_core9.structUtils.prettyRange(configuration, String(expectedRanges[1]))} (in ${dependencyType})`]);
          } else {
            const dependencyDescriptor = workspace.manifest[dependencyType].get(dependencyIdent.identHash);
            const [expectedRange] = expectedRanges;
            if (expectedRange !== null) {
              if (!dependencyDescriptor) {
                if (fix) {
                  workspace.manifest[dependencyType].set(dependencyIdent.identHash, import_core9.structUtils.makeDescriptor(dependencyIdent, expectedRange));
                  toSave.add(workspace);
                } else {
                  errors.push([import_core8.MessageName.CONSTRAINTS_MISSING_DEPENDENCY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must depend on ${import_core9.structUtils.prettyIdent(configuration, dependencyIdent)} (via ${import_core9.structUtils.prettyRange(configuration, expectedRange)}), but doesn't (in ${dependencyType})`]);
                }
              } else if (dependencyDescriptor.range !== expectedRange) {
                if (fix) {
                  workspace.manifest[dependencyType].set(dependencyIdent.identHash, import_core9.structUtils.makeDescriptor(dependencyIdent, expectedRange));
                  toSave.add(workspace);
                } else {
                  errors.push([import_core8.MessageName.CONSTRAINTS_INCOMPATIBLE_DEPENDENCY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must depend on ${import_core9.structUtils.prettyIdent(configuration, dependencyIdent)} via ${import_core9.structUtils.prettyRange(configuration, expectedRange)}, but uses ${import_core9.structUtils.prettyRange(configuration, dependencyDescriptor.range)} instead (in ${dependencyType})`]);
                }
              }
            } else {
              if (dependencyDescriptor) {
                if (fix) {
                  workspace.manifest[dependencyType].delete(dependencyIdent.identHash);
                  toSave.add(workspace);
                } else {
                  errors.push([import_core8.MessageName.CONSTRAINTS_EXTRANEOUS_DEPENDENCY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} has an extraneous dependency on ${import_core9.structUtils.prettyIdent(configuration, dependencyIdent)} (in ${dependencyType})`]);
                }
              }
            }
          }
        }
      }
    }
  }
  async function processFieldConstraints(toSave, errors, enforcedFields, {configuration, fix}) {
    const byWorkspaces = new Map();
    for (const {workspace, fieldPath, fieldValue} of enforcedFields) {
      const byWorkspacesStore = import_core7.miscUtils.getMapWithDefault(byWorkspaces, workspace);
      const byPathStore = import_core7.miscUtils.getSetWithDefault(byWorkspacesStore, fieldPath);
      byPathStore.add(fieldValue);
    }
    for (const [workspace, byWorkspacesStore] of byWorkspaces) {
      for (const [fieldPath, byPathStore] of byWorkspacesStore) {
        const expectedValues = [...byPathStore];
        if (expectedValues.length > 2) {
          errors.push([import_core8.MessageName.CONSTRAINTS_AMBIGUITY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must have a field ${import_core9.formatUtils.pretty(configuration, fieldPath, `cyan`)} set to conflicting values ${expectedValues.slice(0, -1).map((expectedValue) => import_core9.formatUtils.pretty(configuration, String(expectedValue), `magenta`)).join(`, `)}, or ${import_core9.formatUtils.pretty(configuration, String(expectedValues[expectedValues.length - 1]), `magenta`)}`]);
        } else if (expectedValues.length > 1) {
          errors.push([import_core8.MessageName.CONSTRAINTS_AMBIGUITY, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must have a field ${import_core9.formatUtils.pretty(configuration, fieldPath, `cyan`)} set to conflicting values ${import_core9.formatUtils.pretty(configuration, String(expectedValues[0]), `magenta`)} or ${import_core9.formatUtils.pretty(configuration, String(expectedValues[1]), `magenta`)}`]);
        } else {
          const actualValue = (0, import_get2.default)(workspace.manifest.raw, fieldPath);
          const [expectedValue] = expectedValues;
          if (expectedValue !== null) {
            if (actualValue === void 0) {
              if (fix) {
                await setWorkspaceField(workspace, fieldPath, expectedValue);
                toSave.add(workspace);
              } else {
                errors.push([import_core8.MessageName.CONSTRAINTS_MISSING_FIELD, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must have a field ${import_core9.formatUtils.pretty(configuration, fieldPath, `cyan`)} set to ${import_core9.formatUtils.pretty(configuration, String(expectedValue), `magenta`)}, but doesn't`]);
              }
            } else if (JSON.stringify(actualValue) !== expectedValue) {
              if (fix) {
                await setWorkspaceField(workspace, fieldPath, expectedValue);
                toSave.add(workspace);
              } else {
                errors.push([import_core8.MessageName.CONSTRAINTS_INCOMPATIBLE_FIELD, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} must have a field ${import_core9.formatUtils.pretty(configuration, fieldPath, `cyan`)} set to ${import_core9.formatUtils.pretty(configuration, String(expectedValue), `magenta`)}, but is set to ${import_core9.formatUtils.pretty(configuration, JSON.stringify(actualValue), `magenta`)} instead`]);
              }
            }
          } else {
            if (actualValue !== void 0 && actualValue !== null) {
              if (fix) {
                await setWorkspaceField(workspace, fieldPath, null);
                toSave.add(workspace);
              } else {
                errors.push([import_core8.MessageName.CONSTRAINTS_EXTRANEOUS_FIELD, `${import_core9.structUtils.prettyWorkspace(configuration, workspace)} has an extraneous field ${import_core9.formatUtils.pretty(configuration, fieldPath, `cyan`)} set to ${import_core9.formatUtils.pretty(configuration, JSON.stringify(actualValue), `magenta`)}`]);
              }
            }
          }
        }
      }
    }
  }
  async function setWorkspaceField(workspace, fieldPath, value) {
    if (value === null) {
      (0, import_unset.default)(workspace.manifest.raw, fieldPath);
    } else {
      (0, import_set.default)(workspace.manifest.raw, fieldPath, JSON.parse(value));
    }
  }

  // pnp:/private/var/folders/9f/kl_c86q5651fqmhmzf63jb0x5t_d9j/T/yarnpkg-sources/d0a670/packages/plugin-constraints/sources/index.ts
  var plugin = {
    configuration: {
      constraintsPath: {
        description: `The path of the constraints file.`,
        type: import_core10.SettingsType.ABSOLUTE_PATH,
        default: `./constraints.pro`
      }
    },
    commands: [
      query_default,
      source_default,
      constraints_default
    ]
  };
  var sources_default = plugin;
  return sources_exports;
})();
return plugin;
}
};
