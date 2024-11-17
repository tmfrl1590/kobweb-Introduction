(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.q6;
  var objectCreate = kotlin_kotlin.$_$.p6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.u5;
  var hashCode = kotlin_kotlin.$_$.z5;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.a6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b6;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var joinToString = kotlin_kotlin.$_$.o3;
  var toString = kotlin_kotlin.$_$.s6;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var copyToArray = kotlin_kotlin.$_$.a3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var lastOrNull = kotlin_kotlin.$_$.r3;
  var get_lastIndex = kotlin_kotlin.$_$.q3;
  var joinToString_0 = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.x8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var listOf = kotlin_kotlin.$_$.u3;
  var emptyList = kotlin_kotlin.$_$.c3;
  var addAll = kotlin_kotlin.$_$.r2;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var listOfNotNull = kotlin_kotlin.$_$.t3;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var isNumber = kotlin_kotlin.$_$.k6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.v8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.u7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.r5;
  var charSequenceGet = kotlin_kotlin.$_$.q5;
  var isWhitespace = kotlin_kotlin.$_$.r7;
  var initMetadataForInterface = kotlin_kotlin.$_$.d6;
  var initMetadataForObject = kotlin_kotlin.$_$.f6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForClass(JustifyItems, 'JustifyItems');
  initMetadataForClass(JustifyItemsPosition, 'JustifyItemsPosition', VOID, JustifyItems);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JustifySelf, 'JustifySelf');
  initMetadataForClass(JustifySelfPosition, 'JustifySelfPosition', VOID, JustifySelf);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(BoxSizing, 'BoxSizing');
  initMetadataForClass(BoxShadow, 'BoxShadow');
  initMetadataForClass(Repeatable, 'Repeatable', VOID, BoxShadow);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Cursor, 'Cursor');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Appearance, 'Appearance');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(FontWeight, 'FontWeight');
  initMetadataForClass(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat');
  initMetadataForClass(GridTrackBuilder, 'GridTrackBuilder', GridTrackBuilder, GridTrackBuilderInRepeat);
  initMetadataForClass(GridEntry, 'GridEntry');
  initMetadataForClass(TrackSize, 'TrackSize', VOID, GridEntry);
  initMetadataForClass(FitContent, 'FitContent', VOID, TrackSize);
  initMetadataForClass(MinMax, 'MinMax', VOID, TrackSize);
  initMetadataForClass(Flex, 'Flex', VOID, TrackSize);
  initMetadataForClass(Inflexible, 'Inflexible', VOID, TrackSize);
  initMetadataForClass(Keyword, 'Keyword', VOID, Inflexible);
  initMetadataForClass(Fixed, 'Fixed', VOID, Inflexible);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(VerticalAlign, 'VerticalAlign');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(ListStyleType, 'ListStyleType');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(ObjectFit, 'ObjectFit');
  initMetadataForClass(CSSOutline, 'CSSOutline');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Overflow, 'Overflow');
  initMetadataForClass(StyleVariable, 'StyleVariable');
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(UserSelect, 'UserSelect');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(WhiteSpace, 'WhiteSpace');
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(TextDecorationLine, 'TextDecorationLine');
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(Repeatable_0, 'Repeatable', VOID, Transition);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(TransitionProperty, 'TransitionProperty');
  initMetadataForClass(Name, 'Name', VOID, TransitionProperty);
  initMetadataForCompanion(Companion_17);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.j2c_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k2c_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.l2c_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.m2c_1 = LinkedHashSet_init_$Create$();
    this.n2c_1 = null;
  }
  protoOf(ComparableAttrsScope).u25 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.k2c_1.u4(attr, value);
    this.j2c_1.u25(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).w25 = function (classes) {
    this.l2c_1.n(classes);
  };
  protoOf(ComparableAttrsScope).z25 = function (listener) {
    this.m2c_1.e(listener);
    this.j2c_1.z25(listener);
  };
  protoOf(ComparableAttrsScope).v25 = function (builder) {
    var tmp0_elvis_lhs = this.n2c_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.n2c_1 = style;
    this.j2c_1.v25(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.k2c_1, this.k2c_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.l2c_1, this.l2c_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.m2c_1, this.m2c_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.n2c_1, this.n2c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.k2c_1);
    result = imul(31, result) + hashCode(this.l2c_1) | 0;
    result = imul(31, result) + hashCode(this.m2c_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n2c_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).u25 = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).w25 = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).z25 = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).v25 = function (builder) {
    return Unit_instance;
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.u25('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.u25('aria-disabled', value.toString());
  }
  var com_varabyte_kobweb_compose_css_AlignContent_AlignContentPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignContent$stable;
  var com_varabyte_kobweb_compose_css_AlignItems_AlignItemsPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignItems$stable;
  var com_varabyte_kobweb_compose_css_AlignSelf_AlignSelfPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignSelf$stable;
  var com_varabyte_kobweb_compose_css_JustifyContent_JustifyContentPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifyContent$stable;
  var com_varabyte_kobweb_compose_css_JustifyItems_JustifyItemsPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifyItems$stable;
  var com_varabyte_kobweb_compose_css_JustifySelf_JustifySelfPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifySelf$stable;
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.i28('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).o2c = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).p2c = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).q2c = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.r2c_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.r2c_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.i28('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).o2c = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).p2c = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).q2c = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.s2c_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.s2c_1;
  };
  var com_varabyte_kobweb_compose_css_Animation_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Animation$stable;
  var com_varabyte_kobweb_compose_css_CSSAnimation$stable;
  var com_varabyte_kobweb_compose_css_BackgroundAttachment$stable;
  var com_varabyte_kobweb_compose_css_BackgroundClip$stable;
  var com_varabyte_kobweb_compose_css_BackgroundColor$stable;
  var com_varabyte_kobweb_compose_css_BackgroundOrigin$stable;
  var com_varabyte_kobweb_compose_css_BackgroundPosition$stable;
  var com_varabyte_kobweb_compose_css_BackgroundRepeat_RepeatStyle$stable;
  var com_varabyte_kobweb_compose_css_BackgroundRepeat$stable;
  var com_varabyte_kobweb_compose_css_BackgroundSize$stable;
  var com_varabyte_kobweb_compose_css_Background_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Background$stable;
  var com_varabyte_kobweb_compose_css_CSSBackground$stable;
  var com_varabyte_kobweb_compose_css_BorderCollapse$stable;
  var com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset$stable;
  var com_varabyte_kobweb_compose_css_BorderImageRepeat_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_BorderImageRepeat$stable;
  var com_varabyte_kobweb_compose_css_BorderImage$stable;
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.i28('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.d28('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.i28('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.i28('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.i28('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.i28('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp31_safe_receiver = $width;
      if (tmp31_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp31_safe_receiver);
      }
      var tmp32_safe_receiver = $style;
      if (tmp32_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp32_safe_receiver);
      }
      var tmp33_safe_receiver = $color;
      if (tmp33_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp33_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp28_safe_receiver = $width;
      if (tmp28_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp28_safe_receiver);
      }
      var tmp29_safe_receiver = $style;
      if (tmp29_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp29_safe_receiver);
      }
      var tmp30_safe_receiver = $color;
      if (tmp30_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp30_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp34_safe_receiver = $width;
      if (tmp34_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp34_safe_receiver);
      }
      var tmp35_safe_receiver = $style;
      if (tmp35_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp35_safe_receiver);
      }
      var tmp36_safe_receiver = $color;
      if (tmp36_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp36_safe_receiver);
      }
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_css_BoxDecorationBreak$stable;
  var com_varabyte_kobweb_compose_css_BoxSizing$stable;
  var com_varabyte_kobweb_compose_css_BoxShadow_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_BoxShadow$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).t2c = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.u2c_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.u2c_1;
  };
  function Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    if (inset) {
      this_0.w7('inset');
      this_0.x7(_Char___init__impl__6a9atx(32));
    }
    this_0.v7(offsetX);
    this_0.x7(_Char___init__impl__6a9atx(32));
    this_0.v7(offsetY);
    if (!(blurRadius == null)) {
      this_0.x7(_Char___init__impl__6a9atx(32));
      this_0.v7(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.x7(_Char___init__impl__6a9atx(32));
        this_0.x7(_Char___init__impl__6a9atx(48));
      }
      this_0.x7(_Char___init__impl__6a9atx(32));
      this_0.v7(spreadRadius);
    }
    if (!(color == null)) {
      this_0.x7(_Char___init__impl__6a9atx(32));
      this_0.v7(color);
    }
    var tmp$ret$1 = this_0.toString();
    BoxShadow.call(this, tmp$ret$1);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).v2c = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    return new Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function BoxShadow(value) {
    this.w2c_1 = value;
  }
  protoOf(BoxShadow).toString = function () {
    return this.w2c_1;
  };
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow(_this__u8e3s4, boxShadows) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(boxShadows.length === 0)) {
      boxShadow_0(_this__u8e3s4, joinToString(boxShadows, VOID, VOID, VOID, VOID, VOID, BoxShadow$toString$ref()));
    }
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.d28('box-shadow', value);
  }
  function BoxShadow$toString$ref() {
    var l = function (p0) {
      return p0.toString();
    };
    l.callableName = 'toString';
    return l;
  }
  var com_varabyte_kobweb_compose_css_Edge$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeX$stable;
  var com_varabyte_kobweb_compose_css_CenterX$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOffset$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeY$stable;
  var com_varabyte_kobweb_compose_css_CenterY$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOffset$stable;
  var com_varabyte_kobweb_compose_css_CSSPosition$stable;
  var com_varabyte_kobweb_compose_css_AccentColor$stable;
  var com_varabyte_kobweb_compose_css_CSSColor$stable;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x2c_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.y2c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).i28 = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.x2c_1;
    var value_0 = toString(value);
    this_0.u4(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).k28 = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.y2c_1;
    var value_0 = toString(value);
    this_0.u4(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.x2c_1, other.x2c_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.y2c_1, other.y2c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.x2c_1);
    result = imul(31, result) + hashCode(this.y2c_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.x2c_1.q()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.y2c_1.q();
    }
    return tmp;
  }
  var com_varabyte_kobweb_compose_css_Cursor$stable;
  function Companion_3() {
  }
  protoOf(Companion_3).z2c = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_3).a2d = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Cursor(value) {
    this.b2d_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.b2d_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.i28('cursor', cursor);
  }
  var com_varabyte_kobweb_compose_css_Filter$stable;
  var com_varabyte_kobweb_compose_css_Appearance$stable;
  var com_varabyte_kobweb_compose_css_Content_Restricted$stable;
  var com_varabyte_kobweb_compose_css_Content_Unrestricted$stable;
  var com_varabyte_kobweb_compose_css_Content$stable;
  function Companion_4() {
  }
  protoOf(Companion_4).c2d = function () {
    return new Appearance('none');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function Appearance(value) {
    this.d2d_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.d2d_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.i28('appearance', appearance);
  }
  var com_varabyte_kobweb_compose_css_FlexBasis$stable;
  var com_varabyte_kobweb_compose_css_FontOpticalSizing$stable;
  var com_varabyte_kobweb_compose_css_FontStyle$stable;
  var com_varabyte_kobweb_compose_css_FontVariantAlternates_ListableValue$stable;
  var com_varabyte_kobweb_compose_css_FontVariantAlternates$stable;
  var com_varabyte_kobweb_compose_css_FontVariantCaps$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEastAsian_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEastAsian$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEmoji$stable;
  var com_varabyte_kobweb_compose_css_FontVariantLigatures_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantLigatures$stable;
  var com_varabyte_kobweb_compose_css_FontVariantNumeric_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantNumeric$stable;
  var com_varabyte_kobweb_compose_css_FontVariantPosition$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings_Axis$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings_Axes$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings$stable;
  var com_varabyte_kobweb_compose_css_FontWeight$stable;
  var com_varabyte_kobweb_compose_css_FontSize$stable;
  function Companion_5() {
  }
  protoOf(Companion_5).e2d = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_5).f2d = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_5).g2d = function () {
    return new FontWeight('bold');
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function FontWeight(value) {
    this.h2d_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.h2d_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.i28('font-weight', weight);
  }
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable;
  var com_varabyte_kobweb_compose_css_GridEntry$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridAuto$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_Subgrid_Builder$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_Subgrid$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate$stable;
  var com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable;
  var com_varabyte_kobweb_compose_css_GridBuilder$stable;
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).j2d = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.k2d_1;
    var repeatTracks = copyToArray(this_1);
    this.k2d_1.e(Companion_instance_8.l2d(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2d_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).m2d = function (track) {
    this.k2d_1.e(track);
  };
  protoOf(GridTrackBuilderInRepeat).n2d = function (value) {
    return this.m2d(Companion_instance_7.q2d(value));
  };
  protoOf(GridTrackBuilderInRepeat).o2d = function (min, max) {
    return this.m2d(Companion_instance_7.r2d(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).p2d = function (min, max) {
    return this.o2d(Companion_instance_7.s2d(min), Companion_instance_7.q2d(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.u2d_1 = min;
    this.v2d_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_6() {
  }
  protoOf(Companion_6).s2d = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_6).q2d = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_6).r2d = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.x2d_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.z2d_1 = names;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).l2d = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function GridEntry(value) {
    this.a2e_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.a2e_1;
  };
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.z2d_1;
        var elements = element.z2d_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.n3(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.e(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.x2d_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.e(element_0);
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            var tmp_0;
            if (destination_0.q()) {
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.q()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.g();
    while (tmp0_iterator.h()) {
      var element_2 = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.u2d_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.v2d_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.k2d_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.e2e(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.b2e_1 = null;
    this.c2e_1 = null;
    this.d2e_1 = null;
  }
  protoOf(GridBuilderInAuto).f2e = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.b2e_1 = this_0.k2d_1;
  };
  protoOf(GridBuilderInAuto).g2e = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.c2e_1 = this_0.k2d_1;
  };
  protoOf(GridBuilderInAuto).e2e = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp55_safe_receiver = this.b2e_1;
    if (tmp55_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp55_safe_receiver));
    }
    var tmp56_safe_receiver = this.c2e_1;
    if (tmp56_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp56_safe_receiver));
    }
    var tmp57_safe_receiver = this.d2e_1;
    if (tmp57_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp58_safe_receiver = tmp57_safe_receiver.b2e_1;
      if (tmp58_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp58_safe_receiver));
      }
      var tmp59_safe_receiver = tmp57_safe_receiver.c2e_1;
      var tmp;
      if (tmp59_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp59_safe_receiver));
        tmp = Unit_instance;
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CaretColor$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanHorizontal$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanVertical$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanGroup$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanHoriz$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanVert$stable;
  var com_varabyte_kobweb_compose_css_TouchAction$stable;
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    var rules = this_0.b29();
    _this__u8e3s4.p27(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.h2e_1 = name;
    this.i2e_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).t27 = function () {
    return this.i2e_1;
  };
  protoOf(CSSLayerRuleDeclaration).f27 = function () {
    return '@layer ' + this.h2e_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.h2e_1 === other.h2e_1 && equals(this.i2e_1, other.i2e_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var com_varabyte_kobweb_compose_css_AspectRatio$stable;
  var com_varabyte_kobweb_compose_css_Clear$stable;
  var com_varabyte_kobweb_compose_css_LineHeight$stable;
  var com_varabyte_kobweb_compose_css_Resize$stable;
  var com_varabyte_kobweb_compose_css_VerticalAlign$stable;
  function Companion_8() {
  }
  protoOf(Companion_8).j2e = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function VerticalAlign(value) {
    this.k2e_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.k2e_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.i28('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.d28('padding-inline', toString(start) + ' ' + toString(end));
  }
  var com_varabyte_kobweb_compose_css_ListStyleType$stable;
  var com_varabyte_kobweb_compose_css_ListStylePosition$stable;
  function Companion_9() {
  }
  protoOf(Companion_9).c2d = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ListStyleType(value) {
    this.l2e_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.l2e_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.i28('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.i28('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.i28('list-style-image', image);
    }
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  var com_varabyte_kobweb_compose_css_ObjectFit$stable;
  var com_varabyte_kobweb_compose_css_MixBlendMode$stable;
  function Companion_10() {
  }
  protoOf(Companion_10).m2e = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function ObjectFit(value) {
    this.n2e_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.n2e_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.i28('object-fit', objectFit);
  }
  var com_varabyte_kobweb_compose_css_CSSOutline$stable;
  var com_varabyte_kobweb_compose_css_OutlineColor$stable;
  var com_varabyte_kobweb_compose_css_OutlineWidth$stable;
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.i28('outline', this_0);
  }
  function CSSOutline() {
    this.o2e_1 = null;
    this.p2e_1 = null;
    this.q2e_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.o2e_1, other.o2e_1) && equals(this.p2e_1, other.p2e_1) && equals(this.q2e_1, other.q2e_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.q2e_1, this.p2e_1, this.o2e_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.o2e_1 = $width;
      $this$outline.p2e_1 = $style;
      $this$outline.q2e_1 = $color;
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_css_Overflow$stable;
  var com_varabyte_kobweb_compose_css_OverflowWrap$stable;
  function Companion_11() {
  }
  protoOf(Companion_11).r2e = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_11).s2e = function () {
    return new Overflow('auto');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Overflow(value) {
    this.t2e_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.t2e_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.i28('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.i28('overflow', overflow);
  }
  var com_varabyte_kobweb_compose_css_PointerEvents$stable;
  var com_varabyte_kobweb_compose_css_Bottom$stable;
  var com_varabyte_kobweb_compose_css_Top$stable;
  var com_varabyte_kobweb_compose_css_Left$stable;
  var com_varabyte_kobweb_compose_css_Right$stable;
  var com_varabyte_kobweb_compose_css_CSSFloat$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior_SingleValue$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior_RepeatableValue$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior$stable;
  var com_varabyte_kobweb_compose_css_ScrollBehavior$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapType_Axis$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapType$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapAlign_Alignment$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapAlign$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapStop$stable;
  var com_varabyte_kobweb_compose_css_Width$stable;
  var com_varabyte_kobweb_compose_css_Height$stable;
  var com_varabyte_kobweb_compose_css_MaxWidth$stable;
  var com_varabyte_kobweb_compose_css_MaxHeight$stable;
  var com_varabyte_kobweb_compose_css_Isolation$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable$stable;
  var com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable;
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).w2e = function (fallback) {
    return this.z2e(fallback);
  };
  protoOf(PropertyValue).a2f = function (fallback) {
    return this.w2e((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).e2f = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.z2e(tmp);
  };
  protoOf(NumberValue).a2f = function (fallback) {
    return this.e2f((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.x2e_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp0_elvis_lhs = tmp_0;
    tmp.y2e_1 = tmp0_elvis_lhs == null ? name : tmp0_elvis_lhs;
  }
  protoOf(StyleVariable).b2f = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.a2f(fallback) : $super.a2f.call(this, fallback);
  };
  protoOf(StyleVariable).z2e = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp67_safe_receiver = fallback == null ? this.x2e_1 : fallback;
    var tmp;
    if (tmp67_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + toString(tmp67_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.y2e_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.f2f_1 = defaultFallback;
    this.g2f_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).h2f = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.f2f_1, this.g2f_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.i2f_1 = defaultFallback;
    this.j2f_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).h2f = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.i2f_1, this.j2f_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.w7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).z9())), '-vars'), '-variables'));
      this_0.x7(_Char___init__impl__6a9atx(45));
    }
    this_0.w7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.i28('--' + variable.y2e_1, value);
  }
  var com_varabyte_kobweb_compose_css_CaptionSide$stable;
  var com_varabyte_kobweb_compose_css_TextAlign$stable;
  var com_varabyte_kobweb_compose_css_TextDecorationLine$stable;
  var com_varabyte_kobweb_compose_css_TextOverflow$stable;
  var com_varabyte_kobweb_compose_css_TextShadow$stable;
  var com_varabyte_kobweb_compose_css_CSSTextShadow$stable;
  var com_varabyte_kobweb_compose_css_TextTransform$stable;
  var com_varabyte_kobweb_compose_css_UserSelect$stable;
  var com_varabyte_kobweb_compose_css_WhiteSpace$stable;
  var com_varabyte_kobweb_compose_css_WordBreak$stable;
  var com_varabyte_kobweb_compose_css_WritingMode$stable;
  function Companion_12() {
  }
  protoOf(Companion_12).c2d = function () {
    return new UserSelect('none');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function UserSelect(value) {
    this.k2f_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.k2f_1;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).l2f = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_13).m2f = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function WhiteSpace(value) {
    this.n2f_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.n2f_1;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).o2c = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_14).p2c = function () {
    return new TextAlign('start');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function TextAlign(value) {
    this.o2f_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.o2f_1;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).p2f = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_15).c2d = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function TextDecorationLine(value) {
    this.q2f_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.q2f_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.i28('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.i28('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.i28('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.d28('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  var com_varabyte_kobweb_compose_css_TransformBox$stable;
  var com_varabyte_kobweb_compose_css_TransformOrigin$stable;
  var com_varabyte_kobweb_compose_css_TransformStyle$stable;
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.i28('translate', tx);
  }
  var com_varabyte_kobweb_compose_css_TransitionProperty_Name$stable;
  var com_varabyte_kobweb_compose_css_TransitionProperty$stable;
  var com_varabyte_kobweb_compose_css_TransitionDuration$stable;
  var com_varabyte_kobweb_compose_css_TransitionDelay$stable;
  var com_varabyte_kobweb_compose_css_Transition_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Transition$stable;
  var com_varabyte_kobweb_compose_css_CSSTransition$stable;
  function Repeatable_0(property, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    this_0.e(property.toString());
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.e(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.e(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.e('0s');
      }
      this_0.e(toString(delay));
    }
    var tmp$ret$6 = this_0.c5();
    Transition.call(this, joinToString_0(tmp$ret$6, ' '));
  }
  function Companion_16() {
  }
  protoOf(Companion_16).r2f = function (property, duration, timingFunction, delay) {
    return new Repeatable_0(Companion_instance_18.s2f(property), duration, timingFunction, delay);
  };
  protoOf(Companion_16).t2f = function (property, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.r2f(property, duration, timingFunction, delay) : $super.r2f.call(this, property, duration, timingFunction, delay);
  };
  protoOf(Companion_16).u2f = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = Companion_instance_17.r2f(item, duration, timingFunction, delay);
      destination.e(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_16).v2f = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.u2f(properties, duration, timingFunction, delay) : $super.u2f.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function Transition(value) {
    this.w2f_1 = value;
  }
  protoOf(Transition).toString = function () {
    return this.w2f_1;
  };
  function Name(value) {
    TransitionProperty.call(this, value);
  }
  function Companion_17() {
  }
  protoOf(Companion_17).s2f = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Name(customValue);
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function TransitionProperty(value) {
    this.x2f_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.x2f_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.d28('transition', joinToString(transitions));
    }
  }
  var com_varabyte_kobweb_compose_css_Visibility$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSImage$stable;
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  var com_varabyte_kobweb_compose_css_functions_CSSFilter$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_ByShape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(1057476357);
    $composer_0.l18(1538435915);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.p19();
    var tmp;
    if (false || it === Companion_getInstance().f13_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.v19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.m18();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    $composer_0.m18();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(1100234072);
    if (scope == null) {
      $composer_0.m18();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.z2f_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.a2g_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    $composer_0.m18();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.b2g_1.c2g($this$DisposableEffect, $transform($this_registerRefScope.j2a($this$DisposableEffect)));
    };
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable;
  var com_varabyte_kobweb_compose_events_SyntheticEvent$stable;
  var com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable;
  //region block: post-declaration
  protoOf(ComparableAttrsScope).x25 = classes;
  protoOf(ComparableAttrsScope).y25 = tabIndex;
  protoOf(ComparableAttrsScope).a26 = onClick;
  protoOf(DummyAttrsScope).x25 = classes;
  protoOf(DummyAttrsScope).y25 = tabIndex;
  protoOf(DummyAttrsScope).a26 = onClick;
  protoOf(ComparableStyleScope).d28 = property;
  protoOf(ComparableStyleScope).e28 = property_0;
  protoOf(ComparableStyleScope).j28 = variable;
  protoOf(CalcScopeInstance).y2f = unaryMinus;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  com_varabyte_kobweb_compose_css_AlignContent_AlignContentPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignContent$stable = 0;
  com_varabyte_kobweb_compose_css_AlignItems_AlignItemsPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignItems$stable = 0;
  com_varabyte_kobweb_compose_css_AlignSelf_AlignSelfPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignSelf$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyContent_JustifyContentPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyContent$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyItems_JustifyItemsPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyItems$stable = 0;
  com_varabyte_kobweb_compose_css_JustifySelf_JustifySelfPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifySelf$stable = 0;
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  com_varabyte_kobweb_compose_css_Animation_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Animation$stable = 0;
  com_varabyte_kobweb_compose_css_CSSAnimation$stable = 8;
  com_varabyte_kobweb_compose_css_BackgroundAttachment$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundClip$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundColor$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundOrigin$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundPosition$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundRepeat_RepeatStyle$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundRepeat$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundSize$stable = 0;
  com_varabyte_kobweb_compose_css_Background_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Background$stable = 0;
  com_varabyte_kobweb_compose_css_CSSBackground$stable = 0;
  com_varabyte_kobweb_compose_css_BorderCollapse$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageWidth$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageOutset$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageRepeat_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageRepeat$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImage$stable = 0;
  com_varabyte_kobweb_compose_css_BoxDecorationBreak$stable = 0;
  com_varabyte_kobweb_compose_css_BoxSizing$stable = 0;
  com_varabyte_kobweb_compose_css_BoxShadow_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_BoxShadow$stable = 0;
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  com_varabyte_kobweb_compose_css_Edge$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeX$stable = 0;
  com_varabyte_kobweb_compose_css_CenterX$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOffset$stable = 8;
  com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeY$stable = 0;
  com_varabyte_kobweb_compose_css_CenterY$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeYOffset$stable = 8;
  com_varabyte_kobweb_compose_css_CSSPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AccentColor$stable = 0;
  com_varabyte_kobweb_compose_css_CSSColor$stable = 0;
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 0;
  com_varabyte_kobweb_compose_css_Cursor$stable = 0;
  Companion_instance_4 = new Companion_3();
  com_varabyte_kobweb_compose_css_Filter$stable = 0;
  com_varabyte_kobweb_compose_css_Appearance$stable = 0;
  com_varabyte_kobweb_compose_css_Content_Restricted$stable = 0;
  com_varabyte_kobweb_compose_css_Content_Unrestricted$stable = 0;
  com_varabyte_kobweb_compose_css_Content$stable = 0;
  Companion_instance_5 = new Companion_4();
  com_varabyte_kobweb_compose_css_FlexBasis$stable = 0;
  com_varabyte_kobweb_compose_css_FontOpticalSizing$stable = 0;
  com_varabyte_kobweb_compose_css_FontStyle$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantAlternates_ListableValue$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantAlternates$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantCaps$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEastAsian_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEastAsian$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEmoji$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantLigatures_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantLigatures$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantNumeric_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantNumeric$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantPosition$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings_Axis$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings_Axes$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings$stable = 0;
  com_varabyte_kobweb_compose_css_FontWeight$stable = 0;
  com_varabyte_kobweb_compose_css_FontSize$stable = 0;
  Companion_instance_6 = new Companion_5();
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry$stable = 0;
  com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridTrackBuilder$stable = 0;
  com_varabyte_kobweb_compose_css_GridAuto$stable = 0;
  com_varabyte_kobweb_compose_css_GridTemplate_Subgrid_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_GridTemplate_Subgrid$stable = 0;
  com_varabyte_kobweb_compose_css_GridTemplate$stable = 0;
  com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilder$stable = 0;
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  com_varabyte_kobweb_compose_css_CaretColor$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanHorizontal$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanVertical$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanGroup$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanHoriz$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanVert$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction$stable = 0;
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  com_varabyte_kobweb_compose_css_AspectRatio$stable = 0;
  com_varabyte_kobweb_compose_css_Clear$stable = 0;
  com_varabyte_kobweb_compose_css_LineHeight$stable = 0;
  com_varabyte_kobweb_compose_css_Resize$stable = 0;
  com_varabyte_kobweb_compose_css_VerticalAlign$stable = 0;
  Companion_instance_9 = new Companion_8();
  com_varabyte_kobweb_compose_css_ListStyleType$stable = 0;
  com_varabyte_kobweb_compose_css_ListStylePosition$stable = 0;
  Companion_instance_10 = new Companion_9();
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  com_varabyte_kobweb_compose_css_ObjectFit$stable = 0;
  com_varabyte_kobweb_compose_css_MixBlendMode$stable = 0;
  Companion_instance_11 = new Companion_10();
  com_varabyte_kobweb_compose_css_CSSOutline$stable = 8;
  com_varabyte_kobweb_compose_css_OutlineColor$stable = 0;
  com_varabyte_kobweb_compose_css_OutlineWidth$stable = 0;
  com_varabyte_kobweb_compose_css_Overflow$stable = 0;
  com_varabyte_kobweb_compose_css_OverflowWrap$stable = 0;
  Companion_instance_12 = new Companion_11();
  com_varabyte_kobweb_compose_css_PointerEvents$stable = 0;
  com_varabyte_kobweb_compose_css_Bottom$stable = 0;
  com_varabyte_kobweb_compose_css_Top$stable = 0;
  com_varabyte_kobweb_compose_css_Left$stable = 0;
  com_varabyte_kobweb_compose_css_Right$stable = 0;
  com_varabyte_kobweb_compose_css_CSSFloat$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior_SingleValue$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior_RepeatableValue$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollBehavior$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapType_Axis$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapType$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapAlign_Alignment$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapAlign$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapStop$stable = 0;
  com_varabyte_kobweb_compose_css_Width$stable = 0;
  com_varabyte_kobweb_compose_css_Height$stable = 0;
  com_varabyte_kobweb_compose_css_MaxWidth$stable = 0;
  com_varabyte_kobweb_compose_css_MaxHeight$stable = 0;
  com_varabyte_kobweb_compose_css_Isolation$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  com_varabyte_kobweb_compose_css_CaptionSide$stable = 0;
  com_varabyte_kobweb_compose_css_TextAlign$stable = 0;
  com_varabyte_kobweb_compose_css_TextDecorationLine$stable = 0;
  com_varabyte_kobweb_compose_css_TextOverflow$stable = 0;
  com_varabyte_kobweb_compose_css_TextShadow$stable = 0;
  com_varabyte_kobweb_compose_css_CSSTextShadow$stable = 8;
  com_varabyte_kobweb_compose_css_TextTransform$stable = 0;
  com_varabyte_kobweb_compose_css_UserSelect$stable = 0;
  com_varabyte_kobweb_compose_css_WhiteSpace$stable = 0;
  com_varabyte_kobweb_compose_css_WordBreak$stable = 0;
  com_varabyte_kobweb_compose_css_WritingMode$stable = 0;
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  com_varabyte_kobweb_compose_css_TransformBox$stable = 0;
  com_varabyte_kobweb_compose_css_TransformOrigin$stable = 0;
  com_varabyte_kobweb_compose_css_TransformStyle$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionProperty_Name$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionProperty$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionDuration$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionDelay$stable = 0;
  com_varabyte_kobweb_compose_css_Transition_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Transition$stable = 0;
  com_varabyte_kobweb_compose_css_CSSTransition$stable = 8;
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  com_varabyte_kobweb_compose_css_Visibility$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSImage$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 0;
  CalcScopeInstance_instance = new CalcScopeInstance();
  com_varabyte_kobweb_compose_css_functions_CSSFilter$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_ByShape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSClamp$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMin$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMax$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSUrl$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_ViewBox$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_events_SyntheticEvent$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_3;
  _.$_$.e = StyleVariable_2;
  _.$_$.f = StyleVariable_0;
  _.$_$.g = StyleVariable_1;
  _.$_$.h = appearance;
  _.$_$.i = ariaDisabled;
  _.$_$.j = ariaHidden;
  _.$_$.k = borderBottom;
  _.$_$.l = borderColor;
  _.$_$.m = borderLeft;
  _.$_$.n = borderStyle;
  _.$_$.o = borderTop;
  _.$_$.p = borderWidth;
  _.$_$.q = boxShadow;
  _.$_$.r = boxSizing_0;
  _.$_$.s = cursor;
  _.$_$.t = fontWeight;
  _.$_$.u = gridTemplateColumns_0;
  _.$_$.v = grid;
  _.$_$.w = isNotEmpty;
  _.$_$.x = justifyItems;
  _.$_$.y = justifySelf;
  _.$_$.z = layer;
  _.$_$.a1 = listStyle;
  _.$_$.b1 = objectFit;
  _.$_$.c1 = outline;
  _.$_$.d1 = overflowY;
  _.$_$.e1 = overflow;
  _.$_$.f1 = paddingInline;
  _.$_$.g1 = setVariable;
  _.$_$.h1 = textAlign;
  _.$_$.i1 = textDecorationLine;
  _.$_$.j1 = transition;
  _.$_$.k1 = translateX;
  _.$_$.l1 = userSelect;
  _.$_$.m1 = verticalAlign;
  _.$_$.n1 = whiteSpace;
  _.$_$.o1 = registerRefScope_0;
  _.$_$.p1 = registerRefScope;
  _.$_$.q1 = ComparableAttrsScope_init_$Create$;
  _.$_$.r1 = Companion_instance_5;
  _.$_$.s1 = Companion_instance_3;
  _.$_$.t1 = Companion_instance_2;
  _.$_$.u1 = Companion_instance_4;
  _.$_$.v1 = Companion_instance_6;
  _.$_$.w1 = Companion_instance_0;
  _.$_$.x1 = Companion_instance_1;
  _.$_$.y1 = Companion_instance_10;
  _.$_$.z1 = Companion_instance_11;
  _.$_$.a2 = Companion_instance_12;
  _.$_$.b2 = Companion_instance_15;
  _.$_$.c2 = Companion_instance_16;
  _.$_$.d2 = Companion_instance_17;
  _.$_$.e2 = Companion_instance_13;
  _.$_$.f2 = Companion_instance_9;
  _.$_$.g2 = Companion_instance_14;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
