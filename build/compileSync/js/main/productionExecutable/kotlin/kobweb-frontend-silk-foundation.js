(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.q6;
  var initMetadataForObject = kotlin_kotlin.$_$.f6;
  var initMetadataForClass = kotlin_kotlin.$_$.a6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var startsWith = kotlin_kotlin.$_$.x7;
  var endsWith = kotlin_kotlin.$_$.l7;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var toString = kotlin_kotlin.$_$.s6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var to = kotlin_kotlin.$_$.d9;
  var listOf = kotlin_kotlin.$_$.v3;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var asList = kotlin_kotlin.$_$.f9;
  var asSequence = kotlin_kotlin.$_$.u2;
  var toSet = kotlin_kotlin.$_$.r4;
  var flatMap = kotlin_kotlin.$_$.e7;
  var filter = kotlin_kotlin.$_$.d7;
  var Sequence = kotlin_kotlin.$_$.c7;
  var isInterface = kotlin_kotlin.$_$.j6;
  var map = kotlin_kotlin.$_$.f7;
  var toSet_0 = kotlin_kotlin.$_$.h7;
  var subtract = kotlin_kotlin.$_$.l4;
  var sorted = kotlin_kotlin.$_$.k4;
  var joinToString = kotlin_kotlin.$_$.n3;
  var trimIndent = kotlin_kotlin.$_$.c8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var addAll = kotlin_kotlin.$_$.r2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var KtMap = kotlin_kotlin.$_$.m2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var listOf_0 = kotlin_kotlin.$_$.u3;
  var emptyList = kotlin_kotlin.$_$.c3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.r5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.x8;
  var mapCapacity = kotlin_kotlin.$_$.w3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var trimMargin = kotlin_kotlin.$_$.d8;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var mutableListOf = kotlin_kotlin.$_$.z3;
  var plus = kotlin_kotlin.$_$.c4;
  var initMetadataForInterface = kotlin_kotlin.$_$.d6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var equals = kotlin_kotlin.$_$.u5;
  var substringAfterLast = kotlin_kotlin.$_$.y7;
  var endsWith_0 = kotlin_kotlin.$_$.m7;
  var copyToArray = kotlin_kotlin.$_$.a3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var getValue = kotlin_kotlin.$_$.l3;
  var toList = kotlin_kotlin.$_$.o4;
  var objectCreate = kotlin_kotlin.$_$.p6;
  var getStringHashCode = kotlin_kotlin.$_$.y5;
  var isBlank = kotlin_kotlin.$_$.o7;
  var first = kotlin_kotlin.$_$.n7;
  var Char = kotlin_kotlin.$_$.h8;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var setOf = kotlin_kotlin.$_$.h4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var hashCode = kotlin_kotlin.$_$.z5;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var distinct = kotlin_kotlin.$_$.b3;
  var lazy = kotlin_kotlin.$_$.w8;
  var enumEntries = kotlin_kotlin.$_$.k5;
  var Enum = kotlin_kotlin.$_$.j8;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var plus_0 = kotlin_kotlin.$_$.d4;
  var toMutableList = kotlin_kotlin.$_$.p4;
  var getKClass = kotlin_kotlin.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var KProperty0 = kotlin_kotlin.$_$.z6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.v8;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForClass(ComponentVariant, 'ComponentVariant');
  initMetadataForClass(SimpleComponentVariant, 'SimpleComponentVariant', VOID, ComponentVariant);
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope);
  initMetadataForInterface(ComponentKind, 'ComponentKind');
  initMetadataForInterface(RestrictedKind, 'RestrictedKind');
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope');
  initMetadataForClass(Light, 'Light');
  initMetadataForClass(Dark, 'Dark');
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic');
  initMetadataForClass(ColorAware, 'ColorAware');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForInterface(GeneralKind, 'GeneralKind');
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(CssStyle$2, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$4, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$6, VOID, VOID, CssStyle);
  initMetadataForClass(base$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyleVariant, 'CssStyleVariant');
  initMetadataForClass(SimpleCssStyleVariant$1, VOID, VOID, CssStyle);
  initMetadataForClass(SimpleCssStyleVariant, 'SimpleCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', VOID, SimpleCssStyleVariant);
  initMetadataForClass(CompositeCssStyleVariant, 'CompositeCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(addVariant$1, VOID, VOID, CssStyle);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme$replaceStyle$newStyle$1, VOID, VOID, CssStyle);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForObject(Red, 'Red');
  initMetadataForObject(Blue, 'Blue');
  initMetadataForObject(Gray, 'Gray');
  function get(colorMode) {
    var tmp;
    switch (colorMode.f2_1) {
      case 0:
        tmp = this.n2t();
        break;
      case 1:
        tmp = this.o2t();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  initMetadataForInterface(Palettes, 'Palettes');
  initMetadataForClass(MutablePalettes, 'MutablePalettes', MutablePalettes, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.q2t(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(1515299724);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g19(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.g19(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.i18()) {
      if (!(($default & 1) === 0)) {
        $composer_0.l18(-1309747855);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.p19();
        var tmp;
        if (false || it === Companion_getInstance().f13_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.v19(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.m18();
        initSilk_1._v = tmp0_group;
      }
      $composer_0.q15(-1309746347, Unit_instance);
      $composer_0.l18(-1309743129);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.p19();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().f13_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.v19(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.m18();
      initSilk(tmp1_group);
      $composer_0.t15();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.l18(-1196466140);
      Style(null, styleSheet.b29(), $composer_1, 0, 1);
      $composer_1.m18();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.l18(-1196466140);
      Style(null, styleSheet_0.b29(), $composer_2, 0, 1);
      $composer_2.m18();
      content($composer_0, 14 & $dirty >> 3);
    } else {
      $composer_0.z12();
    }
    var tmp2_safe_receiver = $composer_0.e1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.e1f(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_SilkStyleSheet$stable;
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).f29 = function (selector, cssRule) {
    return this.e29(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  var com_varabyte_kobweb_silk_components_animation_Keyframes$stable;
  var com_varabyte_kobweb_silk_components_animation_KeyframesProvider$stable;
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.d2m(keyframes.b2m_1, keyframes.a2m_1);
  }
  var com_varabyte_kobweb_silk_components_style_ComponentStyle$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentStyleProvider$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_StubbedComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_SimpleComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentVariantProvider$stable;
  function ComponentVariant() {
  }
  function SimpleComponentVariant() {
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(-1400383509);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g10(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.g10(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.g10(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) || (!(($dirty & 5851) === 1170) || !$composer_0.i18())) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier_0(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).v2j(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) || endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_0.m2f());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.v2j(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 262293193, true, SpanText$lambda(ref_0, text));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.g10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.p19();
      var tmp_2;
      if (invalid || it === Companion_getInstance().f13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.v19(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.m18();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.z12();
    }
    var tmp0_safe_receiver = $composer_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Span, $ref._v, $composer_0, 72);
      Text($text, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.u23(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_components_util_internal_CacheByPropertyNameDelegate$stable;
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.h2m($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.e2m_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f2m_1 = ArrayList_init_$Create$();
    this.g2m_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).h2m = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(2018041013);
    var $dirty = $changed;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g2m_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    var tmp1_safe_receiver = $composer_0.e1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.e1f(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(-1051942059);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g19(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.i18()) {
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().c1f(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1415206891, true, renderWithDeferred$lambda(content, state));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.g10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.p19();
      var tmp_1;
      if (invalid || it === Companion_getInstance().f13_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.v19(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.m18();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
    } else {
      $composer_0.z12();
    }
    var tmp0_safe_receiver = $composer_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.u23(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp4_safe_receiver = entry.i2m_1;
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp4_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.k2m_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-452891088, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    // Inline function 'kotlin.error' call
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.i18()) {
        $content($composer_0, 0);
        $state.h2m(ComposableSingletons$DeferredKt_getInstance().k2m_1, $composer_0, 70);
        tmp = Unit_instance;
      } else {
        $composer_0.z12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.g18(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  var com_varabyte_kobweb_silk_init_InitSilkContext$stable;
  function InitSilkContext(config, stylesheet, theme) {
    this.l2m_1 = config;
    this.m2m_1 = stylesheet;
    this.n2m_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.m2n('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([to(get_DisplayIfAtLeastZeroStyle(), 'silk-display-if-at-least-zero'), to(get_DisplayIfAtLeastSmStyle(), 'silk-display-if-at-least-sm'), to(get_DisplayIfAtLeastMdStyle(), 'silk-display-if-at-least-md'), to(get_DisplayIfAtLeastLgStyle(), 'silk-display-if-at-least-lg'), to(get_DisplayIfAtLeastXlStyle(), 'silk-display-if-at-least-xl'), to(get_DisplayUntilZeroStyle(), 'silk-display-until-zero'), to(get_DisplayUntilSmStyle(), 'silk-display-until-sm'), to(get_DisplayUntilMdStyle(), 'silk-display-until-md'), to(get_DisplayUntilLgStyle(), 'silk-display-until-lg'), to(get_DisplayUntilXlStyle(), 'silk-display-until-xl')]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      var style = element.he();
      var name = element.ie();
      mutableTheme.n2n(name, style);
    }
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().t2n(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().x2n(SilkStyleSheet_getInstance());
    get_SilkTheme().y2n(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = asList(document.styleSheets);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      if (element instanceof CSSStyleSheet) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'com.varabyte.kobweb.silk.init.<get-localStyleSheets>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.e(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().w2n_1.b2o());
      // Inline function 'kotlin.sequences.filterIsInstance' call
      var tmp = asSequence(get_localStyleSheets(document));
      var this_0 = flatMap(tmp, initSilk$lambda$lambda);
      var tmp_0 = filter(this_0, initSilk$lambda$lambda_0);
      var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
      var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_1));
      var unregisteredLayers = subtract(referencedCssLayers, registeredCssLayers);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!unregisteredLayers.q()) {
        var tmp_2 = console;
        var tmp_3 = sorted(unregisteredLayers);
        tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_2) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var name = item.ie();
        var tmp$ret$3 = '.' + name;
        destination.e(tmp$ret$3);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_2 = get_localStyleSheets(document);
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_2.g();
      while (tmp0_iterator_0.h()) {
        var element = tmp0_iterator_0.i();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_3 = asList(element.cssRules);
        var destination_1 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = this_3.g();
        while (tmp0_iterator_1.h()) {
          var element_0 = tmp0_iterator_1.i();
          if (element_0 instanceof CSSMediaRule) {
            destination_1.e(element_0);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_2 = ArrayList_init_$Create$();
        var tmp0_iterator_2 = destination_1.g();
        while (tmp0_iterator_2.h()) {
          var element_1 = tmp0_iterator_2.i();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var list = asList(element_1.cssRules);
          addAll(destination_2, list);
        }
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_3 = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_3 = destination_2.g();
        while (tmp0_iterator_3.h()) {
          var element_2 = tmp0_iterator_3.i();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp5_safe_receiver = element_2 instanceof CSSLayerBlockRule ? element_2 : null;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.takeIf' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_5;
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp5_safe_receiver.name === SilkLayer_GENERAL_STYLES_getInstance().e2o_1) {
              tmp_5 = tmp5_safe_receiver;
            } else {
              tmp_5 = null;
            }
            tmp_4 = tmp_5;
          }
          var tmp0_safe_receiver = tmp_4;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_3.e(tmp0_safe_receiver);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_4 = ArrayList_init_$Create$();
        var tmp0_iterator_4 = destination_3.g();
        while (tmp0_iterator_4.h()) {
          var element_3 = tmp0_iterator_4.i();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_4 = asList(element_3.cssRules);
          var destination_5 = ArrayList_init_$Create$();
          var tmp0_iterator_5 = this_4.g();
          while (tmp0_iterator_5.h()) {
            var element_4 = tmp0_iterator_5.i();
            if (element_4 instanceof CSSStyleRule) {
              destination_5.e(element_4);
            }
          }
          var list_0 = destination_5;
          addAll(destination_4, list_0);
        }
        var list_1 = destination_4;
        addAll(destination_0, list_1);
      }
      var tmp0_iterator_6 = destination_0.g();
      while (tmp0_iterator_6.h()) {
        var element_5 = tmp0_iterator_6.i();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var selectorText = element_5.selectorText;
        var innerStyle = element_5.style;
        if (displayStyleSelectorNames.o(selectorText)) {
          var displayValue = innerStyle.getPropertyValue('display');
          innerStyle.setProperty('display', displayValue, 'important');
        }
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_5 = asList(document.styleSheets);
      var destination_6 = ArrayList_init_$Create$();
      var tmp0_iterator_7 = this_5.g();
      while (tmp0_iterator_7.h()) {
        var element_6 = tmp0_iterator_7.i();
        if (element_6 instanceof CSSStyleSheet) {
          destination_6.e(element_6);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_7 = ArrayList_init_$Create$();
      var tmp0_iterator_8 = destination_6.g();
      while (tmp0_iterator_8.h()) {
        var element_7 = tmp0_iterator_8.i();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_7.href == null) {
          destination_7.e(element_7);
        }
      }
      var tmp0_iterator_9 = destination_7.g();
      while (tmp0_iterator_9.h()) {
        var element_8 = tmp0_iterator_9.i();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var cssLayers = SilkStylesheetInstance_getInstance().w2n_1.b2o();
        element_8.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
      com_varabyte_kobweb_silk_init_InitSilkContext$stable = 8;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  var com_varabyte_kobweb_silk_init_MutableSilkConfig$stable;
  function MutableSilkConfig() {
    this.f2o_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).g2o = function () {
    return this.f2o_1;
  };
  function Companion() {
  }
  protoOf(Companion).h2o = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
      com_varabyte_kobweb_silk_init_MutableSilkConfig$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable;
  var com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable;
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = simpleStyleScope.j2o_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.assertNoAttributeModifiers.<anonymous>' call
      assertNoAttributes(element, selectorName, 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + selectorName + '")` and remove the offending attribute(s).');
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2n_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v2n_1 = LinkedHashMap_init_$Create$();
    this.w2n_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).d2m = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.v2n_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).v1(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.v2n_1.u4(name, build);
  };
  protoOf(SilkStylesheetInstance).x2n = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.u2n_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp = element.m2o_1;
      assertNoAttributeModifiers(typeof tmp === 'function' ? tmp : THROW_CCE(), SilkStylesheetInstance_getInstance(), element.q2o_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.u2n_1.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element_0.s2o(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.v2n_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_1 = this_0.a2().g();
    while (tmp0_iterator_1.h()) {
      var item = tmp0_iterator_1.i();
      // Inline function 'kotlin.collections.component1' call
      var name = item.t1();
      // Inline function 'kotlin.collections.component2' call
      var build = item.u1();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.v2o(siteStyleSheet, name);
      } else {
        lightBuilder.v2o(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.v2o(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.e(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_0() {
  }
  protoOf(Companion_0).w2o = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.z2o();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.f2p_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).z2o = function () {
    return this.c2p(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.i2p_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).z2o = function () {
    return this.c2p(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).j2p = function (other) {
    return new CompositeOpen(this.x2o_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.m2p_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).z2o = function () {
    return this.c2p(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.p2p_1 = mediaQuery;
    this.q2p_1 = attributeSelectors;
    this.r2p_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).b2p = function () {
    return this.p2p_1;
  };
  protoOf(CompositeOpen).z2o = function () {
    return this.c2p(this.q2p_1, this.r2p_1, null);
  };
  function CssRule(target) {
    this.x2o_1 = target;
    this.y2o_1 = null;
  }
  protoOf(CssRule).a2p = function (createModifier) {
    this.x2o_1.k2o(this.b2p(), this.z2o(), createModifier);
  };
  protoOf(CssRule).b2p = function () {
    return this.y2o_1;
  };
  protoOf(CssRule).z2o = function () {
    return null;
  };
  protoOf(CssRule).c2p = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.w7('[' + element.f2p_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.w7(':' + element_0.i2p_1);
    }
    if (!(pseudoElement == null)) {
      this_0.w7('::' + pseudoElement.m2p_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable;
  var com_varabyte_kobweb_silk_style_CssStyle$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable;
  var com_varabyte_kobweb_silk_style_CssStyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Light$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable;
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(-589847720);
    $composer_0.m18();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.u2p_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.v2p(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(1583284929);
    $composer_0.m18();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function (_this__u8e3s4) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(-941642769);
    $composer_0.m18();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.g29(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.c2q_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.b2q_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.a2q_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.y2p_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.z2p_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.j2o_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.t1();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.x1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.u4(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.a2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.t1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.u1();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.g();
      if (!iterator.h())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.i();
      while (iterator.h()) {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.i();
        accumulator = acc.g2q(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.u4(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.a2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.u1();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
      var styleDeclaration = layer === SilkLayer_COMPONENT_VARIANTS_getInstance().e2o_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : layer === SilkLayer_COMPONENT_STYLES_getInstance().e2o_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.w7(value).x7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.x7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.w7(value_0).x7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.w7(value_1).x7(_Char___init__impl__6a9atx(10));
      var tmp$ret$10 = this_0.toString();
      assertNoAttributes(cssModifier, selectorName, tmp$ret$10);
    }
    return _this__u8e3s4;
  }
  function Companion_1() {
  }
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(2126113218);
    $composer_0.m18();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.x2c_1.a2().g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.d28(element.t1(), element.u1());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.y2c_1.a2().g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.j28(element_0.t1(), element_0.u1());
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.i2q_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.h2q_1, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.m2o_1 = init;
    this.n2o_1 = extraModifier;
  }
  protoOf(CssStyle).w2p = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.m2o_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.m2o_1), this, selector, layer);
    var tmp = Companion_instance_6;
    var tmp7_safe_receiver = lightModifiers.x1(Companion_getInstance_4().j2q_1);
    var tmp_0 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.d2q_1;
    var tmp8_safe_receiver = darkModifiers.x1(Companion_getInstance_4().j2q_1);
    var tmp9_safe_receiver = tmp.k2q(tmp_0, tmp8_safe_receiver == null ? null : tmp8_safe_receiver.d2q_1);
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selector, tmp9_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.y1(), darkModifiers.y1());
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().j2q_1)) {
        destination.e(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s = allCssRuleKeys.g();
    $l$loop: while (_iterator__ex2g4s.h()) {
      var cssRuleKey = _iterator__ex2g4s.i();
      var tmp_1 = Companion_instance_6;
      var tmp10_safe_receiver = lightModifiers.x1(cssRuleKey);
      var tmp_2 = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.d2q_1;
      var tmp11_safe_receiver = darkModifiers.x1(cssRuleKey);
      var tmp0_elvis_lhs = tmp_1.k2q(tmp_2, tmp11_safe_receiver == null ? null : tmp11_safe_receiver.d2q_1);
      var tmp_3;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp0_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, layer, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).x2p = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.n2o_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.u2p_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.n2q_1 = colorMode;
  }
  function Light(styles) {
    this.c2q_1 = styles;
  }
  function Dark(styles) {
    this.b2q_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.a2q_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.y2p_1 = lightStyles;
    this.z2p_1 = darkStyles;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).k2q = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null && darkStyles == null)
      return null;
    if (!(lightStyles == null) && darkStyles == null)
      return new Light(lightStyles);
    if (lightStyles == null && !(darkStyles == null))
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) && !(darkStyles == null))) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.o2q_1 = extraModifier;
    this.p2q_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).q2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(114788234);
    $composer_0.l18(-1790361069);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.p2q_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.r2q($composer_0, 6).u2q().e2_1.toLowerCase();
      if (!endsWith_0(element, tmp$ret$1)) {
        destination.e(element);
      }
    }
    $composer_0.m18();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.q()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.v2j(this.o2q_1($composer_0, 0));
    $composer_0.m18();
    return tmp0;
  };
  function GeneralKind() {
  }
  function CssStyle_1(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$4(init, extraModifier);
  }
  function ExtendingCssStyle() {
  }
  function toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(748086722);
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    $composer_0.m18();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(1265379901);
    var tmp0 = getValue(get_SilkTheme().s2n_1, _this__u8e3s4).q2q($composer_0, 8);
    $composer_0.m18();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(-431222543);
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp14_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp0_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.v2q($composer_0, 0);
    var tmp0 = tmp.v2j(tmp0_elvis_lhs == null ? Companion_instance : tmp0_elvis_lhs);
    $composer_0.m18();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_2(extraModifier, init) {
    return new CssStyle$6(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    return new base$3(extraModifier, init);
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    return CssStyle_2(extraModifier, base$lambda_1(init));
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this.u2p_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.v2p(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.u2p_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.v2p(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).w2q = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.x2q_1 = cssStyle;
    this.y2q_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).v2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(-1935545974);
    var tmp0 = toModifier_0(this.x2q_1, [], $composer_0, 64);
    $composer_0.m18();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.z2q_1 = head;
    this.a2r_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).v2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(1761922567);
    var tmp0 = this.z2q_1.v2q($composer_0, 0).v2j(this.a2r_1.v2q($composer_0, 0));
    $composer_0.m18();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l18(867312062);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.g();
      if (!iterator.h()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.i();
      while (iterator.h()) {
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.i();
        var tmp;
        if (!(acc == null) && !(variant == null)) {
          tmp = acc.w2q(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    $composer_0.m18();
    return tmp0;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(754846533);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(1967918819);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.u2p_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.v2p(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  var com_varabyte_kobweb_silk_style_StyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssModifier_Key$stable;
  var com_varabyte_kobweb_silk_style_CssModifier$stable;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i2o_1 = ArrayList_init_$Create$();
    this.j2o_1 = this.i2o_1;
  }
  protoOf(StyleScope).v2p = function (createModifier) {
    this.i2o_1.e(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).k2o = function (mediaQuery, suffix, createModifier) {
    this.i2o_1.e(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).l2q = function (suffix, createModifier) {
    this.i2o_1.e(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).l2o = function (mediaQuery, createModifier) {
    this.i2o_1.e(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).m2q = function (_this__u8e3s4, createModifier) {
    this.l2o(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function Companion_3() {
    Companion_instance_7 = this;
    this.j2q_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.h2q_1 = mediaQuery;
    this.i2q_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.h2q_1 + ', suffix=' + this.i2q_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.h2q_1 == null ? 0 : getStringHashCode(this.h2q_1);
    result = imul(result, 31) + (this.i2q_1 == null ? 0 : getStringHashCode(this.i2q_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.h2q_1 == tmp0_other_with_cast.h2q_1))
      return false;
    if (!(this.i2q_1 == tmp0_other_with_cast.i2q_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.d2q_1 = modifier;
    this.e2q_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp16_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp16_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().o(new Char(first(tmp16_safe_receiver))) ? ' ' + tmp16_safe_receiver : tmp16_safe_receiver;
    }
    tmp.f2q_1 = tmp_2;
  }
  protoOf(CssModifier).g2q = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(this === other) && equals(this.e2q_1, other.e2q_1) && this.f2q_1 == other.f2q_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.d2q_1.v2j(other.d2q_1), this.e2q_1, this.f2q_1);
  };
  protoOf(CssModifier).t1 = function () {
    var tmp17_safe_receiver = this.e2q_1;
    return new Key(tmp17_safe_receiver == null ? null : toString(tmp17_safe_receiver), this.f2q_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, extraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.d2q_1)(attrsScope);
    if (attrsScope.k2c_1.q())
      return Unit_instance;
    // Inline function 'kotlin.error' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.assertNoAttributes.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.w7(value).x7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.x7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.w7(value_0).x7(_Char___init__impl__6a9atx(10));
    this_0.w7('\tCSS rule: ');
    this_0.w7('"' + selectorName);
    if (!(_this__u8e3s4.e2q_1 == null)) {
      this_0.v7(_this__u8e3s4.e2q_1);
    }
    if (!(_this__u8e3s4.f2q_1 == null)) {
      this_0.w7(_this__u8e3s4.f2q_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.w7('"').x7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var tmp = attrsScope.k2c_1.y1();
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.w7(value_1).x7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.x7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.w7(extraContext).x7(_Char___init__impl__6a9atx(10));
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
      com_varabyte_kobweb_silk_style_StyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssModifier_Key$stable = 0;
      com_varabyte_kobweb_silk_style_CssModifier$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.u2o_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.a2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.t1();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.u1();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.u4(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.t2o_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u2o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).b2r = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2o_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.u4(pair.fe_1, pair.ge_1);
  };
  protoOf(KeyframesBuilder).c2r = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2o_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.u4(pair.fe_1, pair.ge_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).v2o = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.u2o_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.a2().g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.t1();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.u1();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.e(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.p27(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_4() {
  }
  protoOf(Companion_4).d2r = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.e(this_1);
    }
    return distinct(destination).j() === 1;
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_8.d2r(this$0.e2r_1);
    };
  }
  function Keyframes(init) {
    this.e2r_1 = init;
    var tmp = this;
    tmp.f2r_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle;
  }
  var DisplayIfAtLeastZeroStyle;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle;
  }
  var DisplayIfAtLeastSmStyle;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle;
  }
  var DisplayIfAtLeastMdStyle;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle;
  }
  var DisplayIfAtLeastLgStyle;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle;
  }
  var DisplayIfAtLeastXlStyle;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle;
  }
  var DisplayUntilZeroStyle;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle;
  }
  var DisplayUntilSmStyle;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle;
  }
  var DisplayUntilMdStyle;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle;
  }
  var DisplayUntilLgStyle;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle;
  }
  var DisplayUntilXlStyle;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + toString(_this__u8e3s4));
  }
  function DisplayIfAtLeastZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$CssStyle.l2o(tmp, DisplayIfAtLeastZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$CssStyle.l2o(tmp, DisplayIfAtLeastSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$CssStyle.l2o(tmp, DisplayIfAtLeastMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$CssStyle.l2o(tmp, DisplayIfAtLeastLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$CssStyle.l2o(tmp, DisplayIfAtLeastXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.m2q(tmp, DisplayUntilZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.m2q(tmp, DisplayUntilSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.m2q(tmp, DisplayUntilMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$CssStyle.m2q(tmp, DisplayUntilLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$CssStyle.m2q(tmp, DisplayUntilXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle = CssStyle_1(VOID, DisplayIfAtLeastZeroStyle$lambda);
      DisplayIfAtLeastSmStyle = CssStyle_1(VOID, DisplayIfAtLeastSmStyle$lambda);
      DisplayIfAtLeastMdStyle = CssStyle_1(VOID, DisplayIfAtLeastMdStyle$lambda);
      DisplayIfAtLeastLgStyle = CssStyle_1(VOID, DisplayIfAtLeastLgStyle$lambda);
      DisplayIfAtLeastXlStyle = CssStyle_1(VOID, DisplayIfAtLeastXlStyle$lambda);
      DisplayUntilZeroStyle = CssStyle_1(VOID, DisplayUntilZeroStyle$lambda);
      DisplayUntilSmStyle = CssStyle_1(VOID, DisplayUntilSmStyle$lambda);
      DisplayUntilMdStyle = CssStyle_1(VOID, DisplayUntilMdStyle$lambda);
      DisplayUntilLgStyle = CssStyle_1(VOID, DisplayUntilLgStyle$lambda);
      DisplayUntilXlStyle = CssStyle_1(VOID, DisplayUntilXlStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable;
  function BreakpointValues(sm, md, lg, xl) {
    this.g2r_1 = sm;
    this.h2r_1 = md;
    this.i2r_1 = lg;
    this.j2r_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.g2r_1) + ', md=' + toString(this.h2r_1) + ', lg=' + toString(this.i2r_1) + ', xl=' + toString(this.j2r_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.g2r_1);
    result = imul(result, 31) + hashCode(this.h2r_1) | 0;
    result = imul(result, 31) + hashCode(this.i2r_1) | 0;
    result = imul(result, 31) + hashCode(this.j2r_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.g2r_1, tmp0_other_with_cast.g2r_1))
      return false;
    if (!equals(this.h2r_1, tmp0_other_with_cast.h2r_1))
      return false;
    if (!equals(this.i2r_1, tmp0_other_with_cast.i2r_1))
      return false;
    if (!equals(this.j2r_1, tmp0_other_with_cast.j2r_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.k2r_1 = width;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z2n_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_0();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.silkLayers.<anonymous>' call
      var tmp$ret$1 = item.e2o_1;
      destination.e(tmp$ret$1);
    }
    tmp_0.a2o_1 = destination;
  }
  protoOf(LayerListBuilder).b2o = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.z2n_1.x1(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.a2o_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>' call
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.q()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.u3(0);
      this_0.e(currLayer);
      var tmp19_safe_receiver = this.z2n_1.x1(currLayer);
      if (tmp19_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>.<anonymous>' call
        layersToProcess.k4(0, tmp19_safe_receiver);
      }
    }
    return this_0.c5();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_0() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 1, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 2, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 3, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 4, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 5, 'general-styles');
  }
  var $ENTRIES_0;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.e2o_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_4.w2o(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.p2m_1.x1(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.o2m_1.u4(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.s2m_1.u4(style, name);
    var tmp;
    if (layer == null) {
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + toString(kind);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = tmp_0.e2o_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(finalLayer) > 0) {
      tmp_1 = finalLayer;
    } else {
      tmp_1 = null;
    }
    var tmp21_safe_receiver = tmp_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.u2m_1.u4(name, tmp21_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.y2m_1;
      var value = this_0.x1(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_0.u4(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.e(style.n2r_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.w2m_1.u4(originalStyle, newStyle);
    var tmp22_safe_receiver = $this.y2m_1.v4(originalStyle);
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.y2m_1.u4(newStyle, tmp22_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.y2m_1.z1().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.b2(originalStyle)) {
        element.e(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o2m_1 = LinkedHashMap_init_$Create$();
    this.p2m_1 = this.o2m_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.q2m_1 = LinkedHashMap_init_$Create$();
    this.r2m_1 = this.q2m_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.s2m_1 = LinkedHashMap_init_$Create$();
    this.t2m_1 = this.s2m_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.u2m_1 = LinkedHashMap_init_$Create$();
    this.v2m_1 = this.u2m_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.w2m_1 = LinkedHashMap_init_$Create$();
    this.x2m_1 = this.w2m_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.y2m_1 = LinkedHashMap_init_$Create$();
    this.z2m_1 = this.y2m_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.a2n_1 = LinkedHashMap_init_$Create$();
    this.b2n_1 = this.a2n_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.c2n_1 = LinkedHashMap_init_$Create$();
    this.d2n_1 = this.c2n_1;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.e2n_1 = LinkedHashMap_init_$Create$();
    this.f2n_1 = this.e2n_1;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_8.g2n_1 = LinkedHashMap_init_$Create$();
    this.h2n_1 = this.g2n_1;
    var tmp_9 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_9.i2n_1 = LinkedHashMap_init_$Create$();
    this.j2n_1 = this.i2n_1;
    this.k2n_1 = new MutablePalettes();
    this.l2n_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).o2r = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).m2n = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.o2r(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.o2r.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).p2r = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).q2r = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.p2r(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.p2r.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).r2r = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).n2n = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.r2r(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.r2r.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).s2r = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.t2m_1.x1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.x2m_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).v1(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.o2m_1.u4(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.s2m_1.u4(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).t2r = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.t2m_1.x1(simpleVariant.y2q_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    var it = this.r2m_1.x1(name_0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.q2m_1.u4(name_0, variant);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.s2m_1;
    var key = variant.x2q_1;
    this_0.u4(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_1 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().e2o_1 : layer;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp_2 = this_1;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.u2m_1.u4(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = this.y2m_1;
      var key_0 = variant.x2q_1;
      var value = this_2.x1(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_2.u4(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.e(variant.w2r_1.x2q_1);
    }
  };
  protoOf(MutableSilkTheme).x2r = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.t2r(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.t2r.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).y2r = function (name, keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.e2n_1.x1(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.e2n_1.u4(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.g2n_1.u4(keyframes, name);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.o(style))
      return Unit_instance;
    visited.e(style);
    var tmp24_safe_receiver = $dependencies.x1(style);
    if (tmp24_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp24_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.e(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.q())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styles.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.o2n_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.o2n_1.k2n_1;
    tmp.p2n_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.q2n_1 = this.o2n_1.l2n_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.r2n_1 = LinkedHashMap_init_$Create$();
    this.s2n_1 = this.r2n_1;
  }
  protoOf(ImmutableSilkTheme).z2r = function (style) {
    return this.o2n_1.t2m_1.x1(style);
  };
  protoOf(ImmutableSilkTheme).t2n = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.o2n_1.f2n_1.a2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.t1();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.u1();
      silkStyleSheet.d2m(name, keyframes.e2r_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.o2n_1.j2n_1.a2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var keyframes_0 = element_0.u1();
      registerKeyframes(silkStyleSheet, keyframes_0);
    }
  };
  protoOf(ImmutableSilkTheme).y2n = function (stylesheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this.o2n_1.p2m_1.z1();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.o2n_1.r2m_1.z1();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      if (element instanceof SimpleCssStyleVariant) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.g();
    while (tmp0_iterator_0.h()) {
      var item = tmp0_iterator_0.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$3 = item.x2q_1;
      destination_0.e(tmp$ret$3);
    }
    var tmp_0 = plus_0(tmp, destination_0);
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.o2n_1.b2n_1.z1();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.g();
    while (tmp0_iterator_1.h()) {
      var item_0 = tmp0_iterator_1.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$6 = item_0.f2s_1;
      destination_1.e(tmp$ret$6);
    }
    var tmp_1 = plus_0(tmp_0, destination_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = this.o2n_1.d2n_1.z1();
    var destination_2 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = this_2.g();
    while (tmp0_iterator_2.h()) {
      var element_0 = tmp0_iterator_2.i();
      if (element_0 instanceof SimpleComponentVariant) {
        destination_2.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_2, 10));
    var tmp0_iterator_3 = destination_2.g();
    while (tmp0_iterator_3.h()) {
      var item_1 = tmp0_iterator_3.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$11 = item_1.g2s_1;
      destination_3.e(tmp$ret$11);
    }
    var allCssStyles = plus_0(tmp_1, destination_3);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.o2n_1.z2m_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = allCssStylesSorted.g();
    while (tmp0_iterator_4.h()) {
      var element_1 = tmp0_iterator_4.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.z2r(element_1);
      // Inline function 'kotlin.collections.get' call
      var this_3 = this.o2n_1.v2m_1;
      var layer = (isInterface(this_3, KtMap) ? this_3 : THROW_CCE()).x1(className);
      var classSelectors = element_1.w2p('.' + className, stylesheet, layer);
      // Inline function 'kotlin.collections.set' call
      var this_4 = this.r2n_1;
      var value = element_1.x2p(classSelectors);
      this_4.u4(element_1, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = this.o2n_1.x2m_1.a2().g();
    while (tmp0_iterator_5.h()) {
      var element_2 = tmp0_iterator_5.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_2.t1();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_2.u1();
      // Inline function 'kotlin.collections.set' call
      var this_5 = this.r2n_1;
      var value_0 = getValue(this.r2n_1, overrideStyle);
      this_5.u4(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.t2m_1.x1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.p2m_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).v1(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.n2o_1;
    var existingInit = style.m2o_1;
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.s2r(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function get_name(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().z2r(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid CssStyle. This should only be called on top-level public styles or styles that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(-308722568);
      var tmp0 = $extraModifier;
      $composer_0.m18();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.u2p_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.v2p(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l18(114003212);
      var tmp0 = $existingExtraModifier($composer_0, 0).v2j($extraModifier($composer_0, 0));
      $composer_0.m18();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp27_safe_receiver = toValue(_this__u8e3s4);
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.k2r_1;
    return tmp0_elvis_lhs == null ? get_px(0) : tmp0_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.f2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().q2n_1.g2r_1;
        break;
      case 2:
        tmp = get_SilkTheme().q2n_1.h2r_1;
        break;
      case 3:
        tmp = get_SilkTheme().q2n_1.i2r_1;
        break;
      case 4:
        tmp = get_SilkTheme().q2n_1.j2r_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.u1();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).r2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.y19(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0.u1();
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).u2q = function () {
    var tmp;
    switch (this.f2_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.e2_1.toLowerCase();
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_3.h2o().g2o());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Red() {
    Red_instance = this;
    this.h2s_1 = Companion_instance_2.z2k(16772078);
    this.i2s_1 = Companion_instance_2.z2k(16764370);
    this.j2s_1 = Companion_instance_2.z2k(15702682);
    this.k2s_1 = Companion_instance_2.z2k(15037299);
    this.l2s_1 = Companion_instance_2.z2k(15684432);
    this.m2s_1 = Companion_instance_2.z2k(16007990);
    this.n2s_1 = Companion_instance_2.z2k(15022389);
    this.o2s_1 = Companion_instance_2.z2k(13840175);
    this.p2s_1 = Companion_instance_2.z2k(12986408);
    this.q2s_1 = Companion_instance_2.z2k(12000284);
  }
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.r2s_1 = Companion_instance_2.z2k(14938877);
    this.s2s_1 = Companion_instance_2.z2k(12312315);
    this.t2s_1 = Companion_instance_2.z2k(9489145);
    this.u2s_1 = Companion_instance_2.z2k(6600182);
    this.v2s_1 = Companion_instance_2.z2k(4367861);
    this.w2s_1 = Companion_instance_2.z2k(2201331);
    this.x2s_1 = Companion_instance_2.z2k(2001125);
    this.y2s_1 = Companion_instance_2.z2k(1668818);
    this.z2s_1 = Companion_instance_2.z2k(1402304);
    this.a2t_1 = Companion_instance_2.z2k(870305);
  }
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.b2t_1 = Companion_instance_2.z2k(16448250);
    this.c2t_1 = Companion_instance_2.z2k(16119285);
    this.d2t_1 = Companion_instance_2.z2k(15658734);
    this.e2t_1 = Companion_instance_2.z2k(14737632);
    this.f2t_1 = Companion_instance_2.z2k(12434877);
    this.g2t_1 = Companion_instance_2.z2k(10395294);
    this.h2t_1 = Companion_instance_2.z2k(7697781);
    this.i2t_1 = Companion_instance_2.z2k(6381921);
    this.j2t_1 = Companion_instance_2.z2k(4342338);
    this.k2t_1 = Companion_instance_2.z2k(2171169);
  }
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function MutablePalettes() {
    this.l2t_1 = new MutablePalette();
    this.m2t_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).n2t = function () {
    return this.l2t_1;
  };
  protoOf(MutablePalettes).o2t = function () {
    return this.m2t_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.s2t_1 = palette;
    this.t2t_1 = prefix;
  }
  protoOf(EntryDelegate).h2f = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.t2t_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.s2t_1.u2t_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).v2t = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.s2t_1.u2t_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.t2t_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.u4(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.w2t_1 = palette;
    this.x2t_1 = groupName;
  }
  protoOf(ColorGroup).y2t = function () {
    return new EntryDelegate(this.w2t_1, this.x2t_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u2t_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).q2t = function (key) {
    return this.u2t_1.x1(key);
  };
  protoOf(MutablePalette).z2t = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.u2t_1.u4(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().p2n_1.p2t(_this__u8e3s4);
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  }
  var com_varabyte_kobweb_silk_theme_shapes_Path$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_RectF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Rect$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CircleF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Circle$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Polygon$stable;
  function clip(_this__u8e3s4, shape) {
    var tmp32_safe_receiver = shape.a2u();
    var tmp;
    if (tmp32_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp32_safe_receiver));
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.b2u_1 = topLeft;
    this.c2u_1 = botRight;
    this.d2u_1 = cornerRadius;
  }
  protoOf(RectF).a2u = function () {
    var tmp;
    if (!(this.b2u_1.fe_1 === 0.0) || !(this.b2u_1.ge_1 === 0.0) || !(this.c2u_1.fe_1 === 100.0) || !(this.c2u_1.ge_1 === 100.0) || !equals(this.d2u_1, get_px(0))) {
      tmp = new InsetPath(this.b2u_1, this.c2u_1, this.d2u_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).f2u = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).g2u = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.fe_1) + '% ' + toString(_this__u8e3s4.ge_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.fe_1, 100.0 - _this__u8e3s4.ge_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.h2u_1 = topLeft;
    this.i2u_1 = roundness;
    this.j2u_1 = from100(botRight);
  }
  protoOf(InsetPath).e2u = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.i2u_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp33_safe_receiver = tmp;
    var tmp_0;
    if (tmp33_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + toString(tmp33_safe_receiver);
    }
    var tmp0_elvis_lhs = tmp_0;
    var roundnessPart = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var left = this.h2u_1.fe_1;
    var top = this.h2u_1.ge_1;
    var right = this.j2u_1.fe_1;
    var bottom = this.j2u_1.ge_1;
    var insetPart = left === top && right === bottom && left === right ? this.f2u(left) : left === right && top === bottom ? this.g2u(to(top, left)) : this.f2u(top) + ' ' + this.f2u(right) + ' ' + this.f2u(bottom) + ' ' + this.f2u(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.d28('clip-path', $path.e2u());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).p2t = get;
  protoOf(MutablePalette).r2t = getValue_0;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_SilkStyleSheet$stable = 0;
  com_varabyte_kobweb_silk_components_animation_Keyframes$stable = 8;
  com_varabyte_kobweb_silk_components_animation_KeyframesProvider$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentStyle$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentStyleProvider$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_StubbedComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_SimpleComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentVariantProvider$stable = 0;
  com_varabyte_kobweb_silk_components_util_internal_CacheByPropertyNameDelegate$stable = 8;
  Companion_instance_3 = new Companion();
  com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable = 0;
  com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule$stable = 8;
  Companion_instance_4 = new Companion_0();
  com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable = 8;
  com_varabyte_kobweb_silk_style_CssStyleScope$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_Light$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable = 0;
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
  Companion_instance_8 = new Companion_4();
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable = 0;
  com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable = 8;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable = 8;
  com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable = 8;
  Companion_instance_9 = new Companion_5();
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Path$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_RectF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Rect$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_CircleF$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_Circle$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Polygon$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SpanText;
  _.$_$.b = renderWithDeferred;
  _.$_$.c = set_additionalSilkInitialization;
  _.$_$.d = Keyframes;
  _.$_$.e = get_entries;
  _.$_$.f = get_active;
  _.$_$.g = get_ariaDisabled;
  _.$_$.h = get_ariaInvalid;
  _.$_$.i = get_disabled;
  _.$_$.j = get_focusVisible;
  _.$_$.k = get_hover;
  _.$_$.l = get_link;
  _.$_$.m = not;
  _.$_$.n = get_placeholder;
  _.$_$.o = get_visited;
  _.$_$.p = Base;
  _.$_$.q = CssStyle_0;
  _.$_$.r = CssStyle_2;
  _.$_$.s = addVariantBase;
  _.$_$.t = addVariant_0;
  _.$_$.u = base_1;
  _.$_$.v = base_0;
  _.$_$.w = base;
  _.$_$.x = toModifier_0;
  _.$_$.y = toModifier;
  _.$_$.z = ColorGroup;
  _.$_$.a1 = MutablePalette;
  _.$_$.b1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.c1 = toPalette;
  _.$_$.d1 = suffixedWith;
  _.$_$.e1 = clip;
  _.$_$.f1 = modifyStyleBase;
  _.$_$.g1 = get_name;
  _.$_$.h1 = prepareSilkFoundation;
  _.$_$.i1 = Base_init_$Init$;
  _.$_$.j1 = RectF_init_$Create$_0;
  _.$_$.k1 = Companion_instance_5;
  _.$_$.l1 = Companion_instance_9;
  _.$_$.m1 = Blue_getInstance;
  _.$_$.n1 = Gray_getInstance;
  _.$_$.o1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
