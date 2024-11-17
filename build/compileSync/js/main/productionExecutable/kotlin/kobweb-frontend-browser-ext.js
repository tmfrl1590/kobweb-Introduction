(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    root['kobweb-frontend-browser-ext'] = factory(typeof this['kobweb-frontend-browser-ext'] === 'undefined' ? {} : this['kobweb-frontend-browser-ext'], this['kotlin-kotlin-stdlib']);
  }
}(globalThis, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var isBlank = kotlin_kotlin.$_$.o7;
  var toString = kotlin_kotlin.$_$.s6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.r5;
  var charSequenceGet = kotlin_kotlin.$_$.q5;
  var isUpperCase = kotlin_kotlin.$_$.q7;
  var Char = kotlin_kotlin.$_$.h8;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var get_lastIndex = kotlin_kotlin.$_$.s7;
  var isLowerCase = kotlin_kotlin.$_$.p7;
  var toString_0 = kotlin_kotlin.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.q6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.a6;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.p1;
  var Companion_getInstance = kotlin_kotlin.$_$.a2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.g8;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (tmp1 < get_lastIndex(str) && isLowerCase(charSequenceGet(str, tmp1 + 1 | 0)))) {
            this_0.w7('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.v7(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function Companion() {
    Companion_instance = this;
    this.kt_1 = new CancellableActionHandle(0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_0();
    isInterval = isInterval === VOID ? false : isInterval;
    this.lt_1 = isInterval;
    this.mt_1 = id;
  }
  protoOf(CancellableActionHandle).nt = function () {
    if (this.lt_1) {
      self.clearInterval(this.mt_1);
    } else {
      self.clearTimeout(this.mt_1);
    }
    this.mt_1 = 0;
  };
  function setInterval(_this__u8e3s4, delay, block) {
    var id = _this__u8e3s4.setInterval(block, _Duration___get_inWholeMilliseconds__impl__msfiry(delay).y2());
    return new CancellableActionHandle(id, true);
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).y2());
    return new CancellableActionHandle(id);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = invokeLater;
  _.$_$.b = setInterval;
  _.$_$.c = titleCamelCaseToKebabCase;
  _.$_$.d = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
