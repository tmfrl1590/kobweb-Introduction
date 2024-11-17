(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
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
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(globalThis, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var VOID = kotlin_kotlin.$_$.f;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.cb;
  var listOf = kotlin_kotlin.$_$.v7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var distinct = kotlin_kotlin.$_$.y6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var lazy = kotlin_kotlin.$_$.tf;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ua;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var charSequenceLength = kotlin_kotlin.$_$.na;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var startsWith = kotlin_kotlin.$_$.wd;
  var endsWith = kotlin_kotlin.$_$.ed;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var initMetadataForInterface = kotlin_kotlin.$_$.ab;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var to = kotlin_kotlin.$_$.cg;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.eg;
  var asSequence = kotlin_kotlin.$_$.f6;
  var toSet = kotlin_kotlin.$_$.h9;
  var flatMap = kotlin_kotlin.$_$.vc;
  var filter = kotlin_kotlin.$_$.uc;
  var Sequence = kotlin_kotlin.$_$.sc;
  var isInterface = kotlin_kotlin.$_$.mb;
  var map = kotlin_kotlin.$_$.xc;
  var toSet_0 = kotlin_kotlin.$_$.zc;
  var subtract = kotlin_kotlin.$_$.x8;
  var sorted = kotlin_kotlin.$_$.t8;
  var joinToString = kotlin_kotlin.$_$.m7;
  var trimIndent = kotlin_kotlin.$_$.ee;
  var addAll = kotlin_kotlin.$_$.x5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var KtMap = kotlin_kotlin.$_$.i5;
  var emptyList = kotlin_kotlin.$_$.z6;
  var listOf_0 = kotlin_kotlin.$_$.u7;
  var plus = kotlin_kotlin.$_$.g8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.uf;
  var mapCapacity = kotlin_kotlin.$_$.w7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var trimMargin = kotlin_kotlin.$_$.fe;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var mutableListOf = kotlin_kotlin.$_$.a8;
  var plus_0 = kotlin_kotlin.$_$.d8;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var equals = kotlin_kotlin.$_$.qa;
  var substringAfterLast = kotlin_kotlin.$_$.xd;
  var plus_1 = kotlin_kotlin.$_$.f8;
  var hashCode = kotlin_kotlin.$_$.wa;
  var endsWith_0 = kotlin_kotlin.$_$.fd;
  var copyToArray = kotlin_kotlin.$_$.x6;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var getValue = kotlin_kotlin.$_$.i7;
  var toList = kotlin_kotlin.$_$.c9;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var isBlank = kotlin_kotlin.$_$.jd;
  var first = kotlin_kotlin.$_$.gd;
  var Char = kotlin_kotlin.$_$.me;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var setOf = kotlin_kotlin.$_$.l8;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Percentage = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var Combine = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var THROW_IAE = kotlin_kotlin.$_$.af;
  var enumEntries = kotlin_kotlin.$_$.ea;
  var Enum = kotlin_kotlin.$_$.oe;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var numberToDouble = kotlin_kotlin.$_$.xb;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var removeSuffix = kotlin_kotlin.$_$.qd;
  var toIntOrNull = kotlin_kotlin.$_$.ae;
  var flatten = kotlin_kotlin.$_$.g7;
  var joinToString_0 = kotlin_kotlin.$_$.n7;
  var toMutableList = kotlin_kotlin.$_$.e9;
  var getKClass = kotlin_kotlin.$_$.d;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var KProperty0 = kotlin_kotlin.$_$.oc;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.rf;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ComponentStyle, 'ComponentStyle');
  initMetadataForClass(ComponentVariant, 'ComponentVariant');
  initMetadataForClass(SimpleComponentVariant, 'SimpleComponentVariant', VOID, ComponentVariant);
  initMetadataForClass(CompositeComponentVariant, 'CompositeComponentVariant', VOID, ComponentVariant);
  initMetadataForInterface(CssKind, 'CssKind');
  initMetadataForInterface(ComponentKind, 'ComponentKind', VOID, VOID, [CssKind]);
  initMetadataForInterface(SpanTextKind, 'SpanTextKind', VOID, VOID, [ComponentKind]);
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForInterface(SilkConfig, 'SilkConfig');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig, VOID, [SilkConfig]);
  initMetadataForCompanion(Companion_1);
  initMetadataForInterface(CssStyleRegistrar, 'CssStyleRegistrar');
  initMetadataForInterface(SilkStylesheet, 'SilkStylesheet', VOID, VOID, [CssStyleRegistrar]);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance', VOID, VOID, [SilkStylesheet]);
  initMetadataForClass(Entry_0, 'Entry');
  initMetadataForClass(CssStyleRegistrarImpl, 'CssStyleRegistrarImpl', CssStyleRegistrarImpl, VOID, [CssStyleRegistrar]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(OfMedia, 'OfMedia', VOID, CssRule);
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeClosed, 'CompositeClosed', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_3);
  function toAnimation(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    return toAnimation_0(_this__u8e3s4, this.get_colorMode_trbg8z_k$(), duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function toAnimation$default(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    return $super === VOID ? this.toAnimation_opkve_k$(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) : toAnimation(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  initMetadataForInterface(CssStyleScopeBase, 'CssStyleScopeBase');
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope, [CssStyleScopeBase, StyleScope]);
  initMetadataForInterface(RestrictedKind, 'RestrictedKind', VOID, VOID, [CssKind]);
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope', VOID, VOID, [CssStyleScopeBase]);
  initMetadataForInterface(StyleGroup, 'StyleGroup');
  initMetadataForClass(Light, 'Light', VOID, VOID, [StyleGroup]);
  initMetadataForClass(Dark, 'Dark', VOID, VOID, [StyleGroup]);
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic', VOID, VOID, [StyleGroup]);
  initMetadataForClass(ColorAware, 'ColorAware', VOID, VOID, [StyleGroup]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ClassSelectors, 'ClassSelectors');
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForInterface(GeneralKind, 'GeneralKind', VOID, VOID, [CssKind]);
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(SimpleCssStyle, 'SimpleCssStyle', VOID, CssStyle);
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
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder', VOID, VOID, [CssStyleScopeBase]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Keyframes_0, 'Keyframes');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Px, 'Px', VOID, BreakpointUnitValue);
  initMetadataForClass(Em, 'Em', VOID, BreakpointUnitValue);
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme$replaceStyle$newStyle$1, VOID, VOID, CssStyle);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForInterface(ColorScheme, 'ColorScheme');
  initMetadataForObject(Monochrome, 'Monochrome', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Red, 'Red', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Pink, 'Pink', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Purple, 'Purple', VOID, VOID, [ColorScheme]);
  initMetadataForObject(DeepPurple, 'DeepPurple', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Indigo, 'Indigo', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Blue, 'Blue', VOID, VOID, [ColorScheme]);
  initMetadataForObject(LightBlue, 'LightBlue', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Cyan, 'Cyan', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Teal, 'Teal', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Green, 'Green', VOID, VOID, [ColorScheme]);
  initMetadataForObject(LightGreen, 'LightGreen', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Lime, 'Lime', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Yellow, 'Yellow', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Amber, 'Amber', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Orange, 'Orange', VOID, VOID, [ColorScheme]);
  initMetadataForObject(DeepOrange, 'DeepOrange', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Brown, 'Brown', VOID, VOID, [ColorScheme]);
  initMetadataForObject(Gray, 'Gray', VOID, VOID, [ColorScheme]);
  initMetadataForObject(BlueGray, 'BlueGray', VOID, VOID, [ColorScheme]);
  initMetadataForObject(ColorSchemes, 'ColorSchemes');
  function get(colorMode) {
    var tmp;
    switch (colorMode.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = this.get_light_iuogdp_k$();
        break;
      case 1:
        tmp = this.get_dark_wokkvz_k$();
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
    return ensureNotNull(this.get_6bo4tg_k$(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForInterface(Shape, 'Shape');
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$, VOID, [Shape]);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1515299724);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        $composer_0.startReplaceableGroup_ip860b_k$(-1309747855);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        initSilk_1._v = tmp0_group;
      }
      $composer_0.startMovableGroup_clfloq_k$(-1309746347, Unit_getInstance());
      $composer_0.startReplaceableGroup_ip860b_k$(-1309743129);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      initSilk(tmp1_group);
      $composer_0.endMovableGroup_kd2hcs_k$();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, styleSheet_0.get_cssRules_jdoznh_k$(), $composer_2, 0, 1);
      $composer_2.endReplaceableGroup_ern0ak_k$();
      content($composer_0, 14 & $dirty >> 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_getInstance();
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_getInstance();
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_silk_SilkStyleSheet$stable;
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  var com_varabyte_kobweb_silk_components_animation_Keyframes$stable;
  var com_varabyte_kobweb_silk_components_animation_KeyframesProvider$stable;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).isColorModeAgnostic_fn4jgj_k$ = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.add_utx5q5_k$(this_1);
    }
    return distinct(destination).get_size_woubt6_k$() === 1;
  };
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_getInstance_5().isColorModeAgnostic_fn4jgj_k$(this$0.init_1);
    };
  }
  function Keyframes(name, prefix, init) {
    Companion_getInstance_5();
    prefix = prefix === VOID ? null : prefix;
    this.init_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp0_elvis_lhs = tmp_0;
    tmp.name_1 = tmp0_elvis_lhs == null ? name : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.usesColorMode$delegate_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  protoOf(Keyframes).get_init_pi7mx0_k$ = function () {
    return this.init_1;
  };
  protoOf(Keyframes).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Keyframes).get_usesColorMode_a99qlr_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.usesColorMode$delegate_1;
    usesColorMode$factory();
    return this_0.get_value_j01efc_k$();
  };
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.registerKeyframes_6u48c_k$(keyframes.name_1, keyframes.init_1);
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.get_usesColorMode_a99qlr_k$();
    }, null);
  }
  var com_varabyte_kobweb_silk_components_style_ComponentStyle$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentStyleProvider$stable;
  function ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, $this) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    ComponentStyle.call($this, name, ComponentStyle$_init_$lambda_6xe5ih(extraModifiers), prefix, init);
    return $this;
  }
  function ComponentStyle_init_$Create$(name, extraModifiers, prefix, init) {
    return ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, objectCreate(protoOf(ComponentStyle)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ComponentStyle$_init_$lambda_6xe5ih($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1698572553);
      var tmp0 = $extraModifiers;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ComponentStyle$addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-2083936979);
      var tmp0 = $extraModifiers;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_6();
    prefix = prefix === VOID ? null : prefix;
    this.extraModifiers_1 = extraModifiers;
    this.prefix_1 = prefix;
    this.init_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.nameWithoutPrefix_1 = name;
    var tmp = this;
    var tmp1_safe_receiver = this.prefix_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp1_safe_receiver + '-' + name;
    }
    var tmp0_elvis_lhs = tmp_0;
    tmp.name_1 = tmp0_elvis_lhs == null ? name : tmp0_elvis_lhs;
    this.cssStyle_1 = new SimpleCssStyle('.' + this.name_1, this.init_1, this.extraModifiers_1, null);
  }
  protoOf(ComponentStyle).get_extraModifiers_p86tl4_k$ = function () {
    return this.extraModifiers_1;
  };
  protoOf(ComponentStyle).get_prefix_i78za3_k$ = function () {
    return this.prefix_1;
  };
  protoOf(ComponentStyle).get_init_pi7mx0_k$ = function () {
    return this.init_1;
  };
  protoOf(ComponentStyle).get_nameWithoutPrefix_8fvb1z_k$ = function () {
    return this.nameWithoutPrefix_1;
  };
  protoOf(ComponentStyle).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ComponentStyle).get_cssStyle_b64j8a_k$ = function () {
    return this.cssStyle_1;
  };
  protoOf(ComponentStyle).addVariant_gyt2uy_k$ = function (name, extraModifiers, init) {
    return this.addVariant_27omcc_k$(name, ComponentStyle$addVariant$lambda(extraModifiers), init);
  };
  protoOf(ComponentStyle).addVariant$default_gmiq6s_k$ = function (name, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return $super === VOID ? this.addVariant_gyt2uy_k$(name, extraModifiers, init) : $super.addVariant_gyt2uy_k$.call(this, name, extraModifiers, init);
  };
  protoOf(ComponentStyle).addVariant_27omcc_k$ = function (name, extraModifiers, init) {
    var fullName = this.name_1 + '-' + name;
    return new SimpleComponentVariant(fullName, new SimpleCssStyle('.' + fullName, init, extraModifiers, null), this);
  };
  var com_varabyte_kobweb_silk_components_style_ComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_StubbedComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_SimpleComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentVariantProvider$stable;
  function ComponentVariant() {
  }
  protoOf(ComponentVariant).then_x4ddsu_k$ = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(name, cssStyle, baseStyle) {
    ComponentVariant.call(this);
    this.name_1 = name;
    this.cssStyle_1 = cssStyle;
    this.baseStyle_1 = baseStyle;
  }
  protoOf(SimpleComponentVariant).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(SimpleComponentVariant).get_cssStyle_je8f1z_k$ = function () {
    return this.cssStyle_1;
  };
  protoOf(SimpleComponentVariant).get_baseStyle_lpil3d_k$ = function () {
    return this.baseStyle_1;
  };
  protoOf(SimpleComponentVariant).toModifier_wob29e_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(25327230);
    var tmp0 = toModifier(this.cssStyle_1, $composer_0, 0);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(SimpleComponentVariant).intoImmutableStyle_jlx5d3_k$ = function (classSelectors) {
    return this.cssStyle_1.intoImmutableStyle_96ijwa_k$(classSelectors);
  };
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.head_1 = head;
    this.tail_1 = tail;
  }
  protoOf(CompositeComponentVariant).toModifier_wob29e_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1522694879);
    var tmp0 = this.head_1.toModifier_wob29e_k$($composer_0, 0).then_mmfvo6_k$(this.tail_1.toModifier_wob29e_k$($composer_0, 0));
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1400383509);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) || (!(($dirty & 5851) === 1170) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier_0(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).then_mmfvo6_k$(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) || endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_getInstance_0(), Companion_getInstance_1().get_PreWrap_nintz8_k$());
      } else {
        tmp = Companion_getInstance_0();
      }
      var finalModifier = this_0.then_mmfvo6_k$(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 262293193, true, SpanText$lambda(ref_0, text));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextKind() {
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_getInstance();
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Span, $ref._v, $composer_0, 72);
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.entries_1.remove_an8aut_k$(this$1);
      return Unit_getInstance();
    };
  }
  function _set_timeoutHandle__bya7pg($this, _set____db54di) {
    $this.timeoutHandle_1 = _set____db54di;
  }
  function _get_timeoutHandle__r61q7s($this) {
    return $this.timeoutHandle_1;
  }
  function _get_batchedCommands__4uvets($this) {
    return $this.batchedCommands_1;
  }
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function invokeLater_0($this, block) {
    $this.batchedCommands_1.add_utx5q5_k$(block);
    if ($this.timeoutHandle_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.timeoutHandle_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.$this_1 = $outer;
    this.content_1 = null;
  }
  protoOf(Entry).set_content_3bx335_k$ = function (_set____db54di) {
    this.content_1 = _set____db54di;
  };
  protoOf(Entry).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(Entry).dismiss_53zbra_k$ = function () {
    invokeLater_0(this.$this_1, DeferredComposablesState$Entry$dismiss$lambda(this.$this_1, this));
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_iterator = this$0.batchedCommands_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.batchedCommands_1.clear_j9egeb_k$();
      this$0.timeoutHandle_1 = -1;
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.entries_1.add_wl2rvy_k$($it);
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.forEach_g6nq7p_k$($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.timeoutHandle_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.batchedCommands_1 = ArrayList_init_$Create$_0();
    this.entries_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).append_nc4352_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).forEach_g6nq7p_k$ = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2018041013);
    var $dirty = $changed;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1051942059);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().provides_3agxel_k$(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1415206891, true, renderWithDeferred$lambda(content, state));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp4_safe_receiver = entry.content_1;
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp4_safe_receiver, $composer_0, 0);
      tmp = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-452891088, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  protoOf(ComposableSingletons$DeferredKt).get_lambda_1_19z4eh_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $content($composer_0, 0);
        $state.forEach_g6nq7p_k$(ComposableSingletons$DeferredKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 70);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
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
    this.config_1 = config;
    this.stylesheet_1 = stylesheet;
    this.theme_1 = theme;
  }
  protoOf(InitSilkContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitSilkContext).get_stylesheet_hk204p_k$ = function () {
    return this.stylesheet_1;
  };
  protoOf(InitSilkContext).get_theme_iz24rk_k$ = function () {
    return this.theme_1;
  };
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
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([to(get_DisplayIfAtLeastZeroStyle(), 'silk-display-if-at-least-zero'), to(get_DisplayIfAtLeastSmStyle(), 'silk-display-if-at-least-sm'), to(get_DisplayIfAtLeastMdStyle(), 'silk-display-if-at-least-md'), to(get_DisplayIfAtLeastLgStyle(), 'silk-display-if-at-least-lg'), to(get_DisplayIfAtLeastXlStyle(), 'silk-display-if-at-least-xl'), to(get_DisplayUntilZeroStyle(), 'silk-display-until-zero'), to(get_DisplayUntilSmStyle(), 'silk-display-until-sm'), to(get_DisplayUntilMdStyle(), 'silk-display-until-md'), to(get_DisplayUntilLgStyle(), 'silk-display-until-lg'), to(get_DisplayUntilXlStyle(), 'silk-display-until-xl')]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      var style = element.component1_7eebsc_k$();
      var name = element.component2_7eebsb_k$();
      mutableTheme.registerStyle$default_qiw5ck_k$(name, style);
    }
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().registerKeyframesInto_mvp8su_k$(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().registerStylesAndKeyframesInto_i9rw0p_k$(SilkStyleSheet_getInstance());
    get_SilkTheme().registerStylesInto_4kffry_k$(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = asList(document.styleSheets);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (element instanceof CSSStyleSheet) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.<get-localStyleSheets>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.add_utx5q5_k$(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
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
      var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().get_cssLayers_teky2k_k$().build_oz9q33_k$());
      // Inline function 'kotlin.sequences.filterIsInstance' call
      var tmp = asSequence(get_localStyleSheets(document));
      var this_0 = flatMap(tmp, initSilk$lambda$lambda);
      var tmp_0 = filter(this_0, initSilk$lambda$lambda_0);
      var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
      var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_1));
      var unregisteredLayers = subtract(referencedCssLayers, registeredCssLayers);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!unregisteredLayers.isEmpty_y1axqb_k$()) {
        var tmp_2 = console;
        var tmp_3 = sorted(unregisteredLayers);
        tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_2) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var name = item.component2_7eebsb_k$();
        var tmp$ret$3 = '.' + name;
        destination.add_utx5q5_k$(tmp$ret$3);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_2 = get_localStyleSheets(document);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_3 = asList(element.cssRules);
        var destination_1 = ArrayList_init_$Create$_0();
        var tmp0_iterator_1 = this_3.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$();
          if (element_0 instanceof CSSMediaRule) {
            destination_1.add_utx5q5_k$(element_0);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_2 = destination_1.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var list = asList(element_1.cssRules);
          addAll(destination_2, list);
        }
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_3 = destination_2.iterator_jk1svi_k$();
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var element_2 = tmp0_iterator_3.next_20eer_k$();
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
            if (tmp5_safe_receiver.name === SilkLayer_GENERAL_STYLES_getInstance().get_layerName_j0k2lp_k$()) {
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
            destination_3.add_utx5q5_k$(tmp0_safe_receiver);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_4 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_3.iterator_jk1svi_k$();
        while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
          var element_3 = tmp0_iterator_4.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_4 = asList(element_3.cssRules);
          var destination_5 = ArrayList_init_$Create$_0();
          var tmp0_iterator_5 = this_4.iterator_jk1svi_k$();
          while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
            var element_4 = tmp0_iterator_5.next_20eer_k$();
            if (element_4 instanceof CSSStyleRule) {
              destination_5.add_utx5q5_k$(element_4);
            }
          }
          var list_0 = destination_5;
          addAll(destination_4, list_0);
        }
        var list_1 = destination_4;
        addAll(destination_0, list_1);
      }
      var tmp0_iterator_6 = destination_0.iterator_jk1svi_k$();
      while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
        var element_5 = tmp0_iterator_6.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var selectorText = element_5.selectorText;
        var innerStyle = element_5.style;
        if (displayStyleSelectorNames.contains_aljjnj_k$(selectorText)) {
          var displayValue = innerStyle.getPropertyValue('display');
          innerStyle.setProperty('display', displayValue, 'important');
        }
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_5 = asList(document.styleSheets);
      var destination_6 = ArrayList_init_$Create$_0();
      var tmp0_iterator_7 = this_5.iterator_jk1svi_k$();
      while (tmp0_iterator_7.hasNext_bitz1p_k$()) {
        var element_6 = tmp0_iterator_7.next_20eer_k$();
        if (element_6 instanceof CSSStyleSheet) {
          destination_6.add_utx5q5_k$(element_6);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_7 = ArrayList_init_$Create$_0();
      var tmp0_iterator_8 = destination_6.iterator_jk1svi_k$();
      while (tmp0_iterator_8.hasNext_bitz1p_k$()) {
        var element_7 = tmp0_iterator_8.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_7.href == null) {
          destination_7.add_utx5q5_k$(element_7);
        }
      }
      var tmp0_iterator_9 = destination_7.iterator_jk1svi_k$();
      while (tmp0_iterator_9.hasNext_bitz1p_k$()) {
        var element_8 = tmp0_iterator_9.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var cssLayers = SilkStylesheetInstance_getInstance().get_cssLayers_teky2k_k$().build_oz9q33_k$();
        element_8.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
      }
      return Unit_getInstance();
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
    this.initialColorMode_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).set_initialColorMode_lmyh2d_k$ = function (_set____db54di) {
    this.initialColorMode_1 = _set____db54di;
  };
  protoOf(MutableSilkConfig).get_initialColorMode_i1z52t_k$ = function () {
    return this.initialColorMode_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_Instance_ljxvgi_k$ = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SilkConfig() {
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
  function SilkStylesheet() {
  }
  function CssStyleRegistrar() {
  }
  function _get_styles__6s6eeh($this) {
    return $this.styles_1;
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = simpleStyleScope.get_cssModifiers_u8zkqt_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.assertNoAttributeModifiers.<anonymous>' call
      assertNoAttributes(element, selectorName, 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + selectorName + '")` and remove the offending attribute(s).');
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance$registerStyle$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1866964764);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function SilkStylesheetInstance$layer$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-713102654);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.styles_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.keyframes_1 = LinkedHashMap_init_$Create$();
    this.cssLayers_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).get_cssLayers_teky2k_k$ = function () {
    return this.cssLayers_1;
  };
  protoOf(SilkStylesheetInstance).registerStyle_79mtge_k$ = function (cssSelector, init) {
    this.styles_1.add_utx5q5_k$(new SimpleCssStyle(cssSelector, init, SilkStylesheetInstance$registerStyle$lambda, null));
  };
  protoOf(SilkStylesheetInstance).layer_vjt8sc_k$ = function (name, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CssStyleRegistrarImpl();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var styleEntries = this_0.entries_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styleEntries.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.layer.<anonymous>' call
      var tmp = SilkStylesheetInstance_getInstance().styles_1;
      var tmp_0 = SilkStylesheetInstance$layer$lambda;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.layer.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(name) > 0) {
        tmp_1 = name;
      } else {
        tmp_1 = null;
      }
      var tmp$ret$3 = tmp_1;
      tmp.add_utx5q5_k$(new SimpleCssStyle(element.cssSelector_1, element.init_1, tmp_0, tmp$ret$3));
    }
  };
  protoOf(SilkStylesheetInstance).registerKeyframes_6u48c_k$ = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.keyframes_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.keyframes_1.put_4fpzoq_k$(name, build);
  };
  protoOf(SilkStylesheetInstance).registerStylesAndKeyframesInto_i9rw0p_k$ = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.styles_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp = element.get_init_pi7mx0_k$();
      assertNoAttributeModifiers(typeof tmp === 'function' ? tmp : THROW_CCE(), SilkStylesheetInstance_getInstance(), element.get_selector_c3i7h4_k$());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.styles_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element_0.addStylesInto_s5snig_k$(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.keyframes_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_1 = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var name = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var build = item.get_value_j01efc_k$();
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
        lightBuilder.addKeyframesIntoStylesheet_e8sjjd_k$(siteStyleSheet, name);
      } else {
        lightBuilder.addKeyframesIntoStylesheet_e8sjjd_k$(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.addKeyframesIntoStylesheet_e8sjjd_k$(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.add_utx5q5_k$(Unit_getInstance());
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function Entry_0(cssSelector, init) {
    this.cssSelector_1 = cssSelector;
    this.init_1 = init;
  }
  protoOf(Entry_0).get_cssSelector_t63dzt_k$ = function () {
    return this.cssSelector_1;
  };
  protoOf(Entry_0).get_init_woo195_k$ = function () {
    return this.init_1;
  };
  function _get__entries__8mnl9i($this) {
    return $this._entries_1;
  }
  function CssStyleRegistrarImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._entries_1 = ArrayList_init_$Create$_0();
    this.entries_1 = this._entries_1;
  }
  protoOf(CssStyleRegistrarImpl).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  protoOf(CssStyleRegistrarImpl).registerStyle_79mtge_k$ = function (cssSelector, init) {
    this._entries_1.add_utx5q5_k$(new Entry_0(cssSelector, init));
  };
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).OfFunctionalPseudoClass_j2u724_k$ = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.toSelectorText_wuaxtz_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function OfMedia(target, mediaQuery) {
    CssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
  }
  protoOf(OfMedia).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(OfMedia).plus_99tjwk_k$ = function (other) {
    return new CompositeOpen(this.target_1, this.mediaQuery_2, emptyList(), listOf_0(other));
  };
  protoOf(OfMedia).plus_j6iitc_k$ = function (other) {
    return new CompositeClosed(this.target_1, this.mediaQuery_2, emptyList(), emptyList(), other);
  };
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.attributeSelector_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).get_attributeSelector_29w3da_k$ = function () {
    return this.attributeSelector_1;
  };
  protoOf(OfAttributeSelector).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_1jq9i8_k$(listOf_0(this), emptyList(), null);
  };
  protoOf(OfAttributeSelector).plus_5tosbn_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf([this, other]), emptyList());
  };
  protoOf(OfAttributeSelector).plus_99tjwk_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf_0(this), listOf_0(other));
  };
  protoOf(OfAttributeSelector).plus_j6iitc_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, listOf_0(this), emptyList(), other);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.pseudoClass_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).get_pseudoClass_x3c835_k$ = function () {
    return this.pseudoClass_1;
  };
  protoOf(OfPseudoClass).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_1jq9i8_k$(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).plus_99tjwk_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, emptyList(), listOf([this, other]));
  };
  protoOf(OfPseudoClass).plus_j6iitc_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, emptyList(), listOf_0(this), other);
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.pseudoElement_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(OfPseudoElement).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_1jq9i8_k$(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeOpen).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeOpen).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeOpen).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_1jq9i8_k$(this.attributeSelectors_1, this.pseudoClasses_1, null);
  };
  protoOf(CompositeOpen).plus_99tjwk_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, this.attributeSelectors_1, plus(this.pseudoClasses_1, other));
  };
  protoOf(CompositeOpen).plus_5tosbn_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, plus(this.attributeSelectors_1, other), this.pseudoClasses_1);
  };
  protoOf(CompositeOpen).plus_j6iitc_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, this.attributeSelectors_1, this.pseudoClasses_1, other);
  };
  function CompositeClosed(target, mediaQuery, attributeSelectors, pseudoClasses, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
    this.pseudoElement_1 = pseudoElement;
  }
  protoOf(CompositeClosed).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeClosed).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeClosed).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeClosed).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(CompositeClosed).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_1jq9i8_k$(this.attributeSelectors_1, this.pseudoClasses_1, this.pseudoElement_1);
  };
  function CssRule(target) {
    Companion_getInstance_8();
    this.target_1 = target;
    this.mediaQuery_1 = null;
  }
  protoOf(CssRule).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(CssRule).invoke_ts7809_k$ = function (createModifier) {
    this.target_1.cssRule_bfjnx7_k$(this.get_mediaQuery_bp0atp_k$(), this.toSelectorText_wuaxtz_k$(), createModifier);
  };
  protoOf(CssRule).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssRule).toSelectorText_wuaxtz_k$ = function () {
    return null;
  };
  protoOf(CssRule).buildSelectorText_1jq9i8_k$ = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$('[' + element.attributeSelector_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(':' + element_0.pseudoClass_1);
    }
    if (!(pseudoElement == null)) {
      this_0.append_22ad7x_k$('::' + pseudoElement.pseudoElement_1);
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
  function Base_init_$Create$(init, extraModifier) {
    return Base_init_$Init$(init, extraModifier, objectCreate(protoOf(Base)));
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-589847720);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.colorMode_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.base_y8uu8g_k$(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_getInstance();
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1583284929);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
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
    $composer_0.startReplaceableGroup_ip860b_k$(-941642769);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
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
    _this__u8e3s4.style_qsvaqb_k$(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.styles_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.styles_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.styles_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.lightStyles_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.darkStyles_1);
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
    var this_0 = _this__u8e3s4.get_cssModifiers_u8zkqt_k$();
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.get_key_18j28a_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.next_20eer_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.next_20eer_k$();
        accumulator = acc.mergeWith_75q95z_k$(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.put_4fpzoq_k$(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.get_value_j01efc_k$();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
      var styleDeclaration = layer === SilkLayer_COMPONENT_VARIANTS_getInstance().get_layerName_j0k2lp_k$() ? 'val SomeExampleVariant = ExampleStyle.addVariant' : layer === SilkLayer_COMPONENT_STYLES_getInstance().get_layerName_j0k2lp_k$() ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      var tmp$ret$10 = this_0.toString();
      assertNoAttributes(cssModifier, selectorName, tmp$ret$10);
    }
    return _this__u8e3s4;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_9() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
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
    $composer_0.startReplaceableGroup_ip860b_k$(2126113218);
    var tmp0 = Companion_getInstance_0();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.get_properties_zhllqc_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.property_wcrait_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.get_variables_75f0zy_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.variable_kvosx8_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_getInstance();
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.add_utx5q5_k$(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_getInstance();
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_getInstance();
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.add_utx5q5_k$(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.get_suffix_jo1v8a_k$();
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0 = $cssRuleKey.get_mediaQuery_bp0atp_k$();
        addStylesInto$mediaOrInPlace($styleSheet, tmp_0, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CssStyle(init, extraModifier) {
    Companion_getInstance_9();
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.init_1 = init;
    this.extraModifier_1 = extraModifier;
  }
  protoOf(CssStyle).get_init_pi7mx0_k$ = function () {
    return this.init_1;
  };
  protoOf(CssStyle).get_extraModifier_pimrdt_k$ = function () {
    return this.extraModifier_1;
  };
  protoOf(CssStyle).addStylesInto_avvx4p_k$ = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.init_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.init_1), this, selector, layer);
    var tmp = Companion_getInstance_10();
    var tmp7_safe_receiver = lightModifiers.get_wei43m_k$(Companion_getInstance_11().get_BaseKey_nx9788_k$());
    var tmp_0 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.get_modifier_t1pq5c_k$();
    var tmp8_safe_receiver = darkModifiers.get_wei43m_k$(Companion_getInstance_11().get_BaseKey_nx9788_k$());
    var tmp9_safe_receiver = tmp.from_e5pdcm_k$(tmp_0, tmp8_safe_receiver == null ? null : tmp8_safe_receiver.get_modifier_t1pq5c_k$());
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selector, tmp9_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus_0(lightModifiers.get_keys_wop4xp_k$(), darkModifiers.get_keys_wop4xp_k$());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_11().get_BaseKey_nx9788_k$())) {
        destination.add_utx5q5_k$(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s = allCssRuleKeys.iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var cssRuleKey = _iterator__ex2g4s.next_20eer_k$();
      var tmp_1 = Companion_getInstance_10();
      var tmp10_safe_receiver = lightModifiers.get_wei43m_k$(cssRuleKey);
      var tmp_2 = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.get_modifier_t1pq5c_k$();
      var tmp11_safe_receiver = darkModifiers.get_wei43m_k$(cssRuleKey);
      var tmp0_elvis_lhs = tmp_1.from_e5pdcm_k$(tmp_2, tmp11_safe_receiver == null ? null : tmp11_safe_receiver.get_modifier_t1pq5c_k$());
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
  protoOf(CssStyle).intoImmutableStyle_96ijwa_k$ = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.extraModifier_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.colorMode_1 = colorMode;
  }
  protoOf(CssStyleScope).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function ComponentKind() {
  }
  function CssKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.colorMode_1 = colorMode;
  }
  protoOf(CssStyleBaseScope).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function Light(styles) {
    this.styles_1 = styles;
  }
  protoOf(Light).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function Dark(styles) {
    this.styles_1 = styles;
  }
  protoOf(Dark).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAgnostic(styles) {
    this.styles_1 = styles;
  }
  protoOf(ColorAgnostic).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAware(lightStyles, darkStyles) {
    this.lightStyles_1 = lightStyles;
    this.darkStyles_1 = darkStyles;
  }
  protoOf(ColorAware).get_lightStyles_rob4y9_k$ = function () {
    return this.lightStyles_1;
  };
  protoOf(ColorAware).get_darkStyles_j1rmo1_k$ = function () {
    return this.darkStyles_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).from_e5pdcm_k$ = function (lightModifiers, darkModifiers) {
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
  var Companion_instance_4;
  function Companion_getInstance_10() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function StyleGroup() {
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
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function ClassSelectors__plus_impl_eu2y3b($this, other) {
    return _ClassSelectors___init__impl__tbnzdx(plus_1(_get_value__a43j40($this), _get_value__a43j40(other)));
  }
  function ClassSelectors__toString_impl_82ebnf($this) {
    return 'ClassSelectors(value=' + toString($this) + ')';
  }
  function ClassSelectors__hashCode_impl_ttk8ga($this) {
    return hashCode($this);
  }
  function ClassSelectors__equals_impl_a7r10u($this, other) {
    if (!(other instanceof ClassSelectors))
      return false;
    var tmp0_other_with_cast = other instanceof ClassSelectors ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClassSelectors(value) {
    this.value_1 = value;
  }
  protoOf(ClassSelectors).toString = function () {
    return ClassSelectors__toString_impl_82ebnf(this.value_1);
  };
  protoOf(ClassSelectors).hashCode = function () {
    return ClassSelectors__hashCode_impl_ttk8ga(this.value_1);
  };
  protoOf(ClassSelectors).equals = function (other) {
    return ClassSelectors__equals_impl_a7r10u(this.value_1, other);
  };
  function _get_extraModifier__ta4m22($this) {
    return $this.extraModifier_1;
  }
  function _get_classNames__oqef2z($this) {
    return $this.classNames_1;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.extraModifier_1 = extraModifier;
    this.classNames_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).toModifier_7iov47_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(114788234);
    $composer_0.startReplaceableGroup_ip860b_k$(-1790361069);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.classNames_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_getInstance_13().get_current_2iudd5_k$($composer_0, 6).get_opposite_ywslzk_k$().get_name_woqyms_k$().toLowerCase();
      if (!endsWith_0(element, tmp$ret$1)) {
        destination.add_utx5q5_k$(element);
      }
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.isEmpty_y1axqb_k$()) {
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_getInstance_0();
    }
    var tmp0 = tmp.then_mmfvo6_k$(this.extraModifier_1($composer_0, 0));
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  function CssStyleScopeBase() {
  }
  function GeneralKind() {
  }
  function CssStyle_1(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    return new CssStyle$4(init, extraModifier);
  }
  function ExtendingCssStyle$_init_$lambda_m2ritn($extraModifier, $baseStyle) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1250101016);
      var tmp0 = $extraModifier($composer_0, 0).then_mmfvo6_k$(toModifier($baseStyle, $composer_0, 0));
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ExtendingCssStyle(init, extraModifier, baseStyle) {
    CssStyle.call(this, init, ExtendingCssStyle$_init_$lambda_m2ritn(extraModifier, baseStyle));
    this.baseStyle_1 = baseStyle;
  }
  protoOf(ExtendingCssStyle).get_baseStyle_lpil3d_k$ = function () {
    return this.baseStyle_1;
  };
  function SimpleCssStyle(selector, init, extraModifier, layer) {
    CssStyle.call(this, init, extraModifier);
    this.selector_1 = selector;
    this.layer_1 = layer;
  }
  protoOf(SimpleCssStyle).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(SimpleCssStyle).get_layer_iujprc_k$ = function () {
    return this.layer_1;
  };
  protoOf(SimpleCssStyle).addStylesInto_s5snig_k$ = function (styleSheet) {
    return this.addStylesInto_avvx4p_k$(this.selector_1, styleSheet, this.layer_1);
  };
  function toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(748086722);
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1265379901);
    var tmp0 = getValue(get_SilkTheme().get_cssStyles_r7wjhb_k$(), _this__u8e3s4).toModifier_7iov47_k$($composer_0, 8);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-431222543);
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp14_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp0_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.toModifier_wob29e_k$($composer_0, 0);
    var tmp0 = tmp.then_mmfvo6_k$(tmp0_elvis_lhs == null ? Companion_getInstance_0() : tmp0_elvis_lhs);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_2(extraModifier, init) {
    return new CssStyle$6(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
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
      $composer_0.startReplaceableGroup_ip860b_k$(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.base_y8uu8g_k$(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_getInstance();
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.base_y8uu8g_k$(base$lambda$lambda($this$CssStyle, $init));
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).then_9h6e8h_k$ = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  protoOf(CssStyleVariant).getValue_fbnwi2_k$ = function (thisRef, property) {
    return this;
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
    this.cssStyle_1 = cssStyle;
    this.baseStyle_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).get_cssStyle_je8f1z_k$ = function () {
    return this.cssStyle_1;
  };
  protoOf(SimpleCssStyleVariant).get_baseStyle_lpil3d_k$ = function () {
    return this.baseStyle_1;
  };
  protoOf(SimpleCssStyleVariant).toModifier_wob29e_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1935545974);
    var tmp0 = toModifier_0(this.cssStyle_1, [], $composer_0, 64);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  function ExtendingCssStyleVariant$_init_$lambda_8avhto($extraModifier, $baseVariant) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1198919248);
      var tmp0 = $extraModifier($composer_0, 0).then_mmfvo6_k$($baseVariant.toModifier_wob29e_k$($composer_0, 0));
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ExtendingCssStyleVariant(init, extraModifier, baseVariant) {
    SimpleCssStyleVariant_init_$Init$(init, ExtendingCssStyleVariant$_init_$lambda_8avhto(extraModifier, baseVariant), baseVariant.baseStyle_1, this);
    this.baseVariant_1 = baseVariant;
  }
  protoOf(ExtendingCssStyleVariant).get_baseVariant_nxoaqa_k$ = function () {
    return this.baseVariant_1;
  };
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function _get_head__d7jo8b_0($this) {
    return $this.head_1;
  }
  function _get_tail__de2tiz_0($this) {
    return $this.tail_1;
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.head_1 = head;
    this.tail_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).toModifier_wob29e_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1761922567);
    var tmp0 = this.head_1.toModifier_wob29e_k$($composer_0, 0).then_mmfvo6_k$(this.tail_1.toModifier_wob29e_k$($composer_0, 0));
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(867312062);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.next_20eer_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.next_20eer_k$();
        var tmp;
        if (!(acc == null) && !(variant == null)) {
          tmp = acc.then_9h6e8h_k$(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
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
      $composer_0.startReplaceableGroup_ip860b_k$(754846533);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1967918819);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.get_colorMode_trbg8z_k$());
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.base_y8uu8g_k$(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_getInstance();
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
  function _get__cssModifiers__il7nll($this) {
    return $this._cssModifiers_1;
  }
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._cssModifiers_1 = ArrayList_init_$Create$_0();
    this.cssModifiers_1 = this._cssModifiers_1;
  }
  protoOf(StyleScope).get_cssModifiers_u8zkqt_k$ = function () {
    return this.cssModifiers_1;
  };
  protoOf(StyleScope).base_y8uu8g_k$ = function (createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).cssRule_bfjnx7_k$ = function (mediaQuery, suffix, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).cssRule_fe6cwq_k$ = function (suffix, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).cssRule_7fzdgd_k$ = function (mediaQuery, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).invoke_hlvh2z_k$ = function (_this__u8e3s4, createModifier) {
    this.cssRule_7fzdgd_k$(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.BaseKey_1 = new Key(null, null);
  }
  protoOf(Companion_5).get_BaseKey_nx9788_k$ = function () {
    return this.BaseKey_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_11() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Key(mediaQuery, suffix) {
    this.mediaQuery_1 = mediaQuery;
    this.suffix_1 = suffix;
  }
  protoOf(Key).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).component1_7eebsc_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).component2_7eebsb_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).copy_jhsqnb_k$ = function (mediaQuery, suffix) {
    return new Key(mediaQuery, suffix);
  };
  protoOf(Key).copy$default_ooye9u_k$ = function (mediaQuery, suffix, $super) {
    mediaQuery = mediaQuery === VOID ? this.mediaQuery_1 : mediaQuery;
    suffix = suffix === VOID ? this.suffix_1 : suffix;
    return $super === VOID ? this.copy_jhsqnb_k$(mediaQuery, suffix) : $super.copy_jhsqnb_k$.call(this, mediaQuery, suffix);
  };
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.mediaQuery_1 + ', suffix=' + this.suffix_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.mediaQuery_1 == null ? 0 : getStringHashCode(this.mediaQuery_1);
    result = imul(result, 31) + (this.suffix_1 == null ? 0 : getStringHashCode(this.suffix_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.mediaQuery_1 == tmp0_other_with_cast.mediaQuery_1))
      return false;
    if (!(this.suffix_1 == tmp0_other_with_cast.suffix_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_11();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.modifier_1 = modifier;
    this.mediaQuery_1 = mediaQuery;
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
      tmp_2 = !get_selectorSeparators().contains_aljjnj_k$(new Char(first(tmp16_safe_receiver))) ? ' ' + tmp16_safe_receiver : tmp16_safe_receiver;
    }
    tmp.suffix_1 = tmp_2;
  }
  protoOf(CssModifier).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(CssModifier).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssModifier).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(CssModifier).mergeWith_75q95z_k$ = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(this === other) && equals(this.mediaQuery_1, other.mediaQuery_1) && this.suffix_1 == other.suffix_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.modifier_1.then_mmfvo6_k$(other.modifier_1), this.mediaQuery_1, this.suffix_1);
  };
  protoOf(CssModifier).get_key_18j28a_k$ = function () {
    var tmp17_safe_receiver = this.mediaQuery_1;
    return new Key(tmp17_safe_receiver == null ? null : toString(tmp17_safe_receiver), this.suffix_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, extraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.modifier_1)(attrsScope);
    if (attrsScope.get_attributes_dgqof4_k$().isEmpty_y1axqb_k$())
      return Unit_getInstance();
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
    this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    this_0.append_22ad7x_k$('\tCSS rule: ');
    this_0.append_22ad7x_k$('"' + selectorName);
    if (!(_this__u8e3s4.mediaQuery_1 == null)) {
      this_0.append_t8pm91_k$(_this__u8e3s4.mediaQuery_1);
    }
    if (!(_this__u8e3s4.suffix_1 == null)) {
      this_0.append_22ad7x_k$(_this__u8e3s4.suffix_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$('"').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var tmp = attrsScope.get_attributes_dgqof4_k$().get_keys_wop4xp_k$();
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$(extraContext).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
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
  function _get_keyframeStyles__di4hej($this) {
    return $this.keyframeStyles_1;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.keyframeStyles_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.get_value_j01efc_k$();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.put_4fpzoq_k$(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.colorMode_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.keyframeStyles_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  protoOf(KeyframesBuilder).from_1urvt_k$ = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).to_txs6jq_k$ = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).invoke_u48aa2_k$ = function (_this__u8e3s4, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(new Percentage(_this__u8e3s4), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).each_dzjs38_k$ = function (keys, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(new Combine(toList(keys)), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).addKeyframesIntoStylesheet_e8sjjd_k$ = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.keyframeStyles_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.get_value_j01efc_k$();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.add_19esmm_k$(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).isColorModeAgnostic_fn4jgj_k$ = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.add_utx5q5_k$(this_1);
    }
    return distinct(destination).get_size_woubt6_k$() === 1;
  };
  var Companion_instance_6;
  function Companion_getInstance_12() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Keyframes$usesColorMode$delegate$lambda_0(this$0) {
    return function () {
      return !Companion_getInstance_12().isColorModeAgnostic_fn4jgj_k$(this$0.init_1);
    };
  }
  function Keyframes_0(init) {
    Companion_getInstance_12();
    this.init_1 = init;
    var tmp = this;
    tmp.usesColorMode$delegate_1 = lazy(Keyframes$usesColorMode$delegate$lambda_0(this));
  }
  protoOf(Keyframes_0).get_init_pi7mx0_k$ = function () {
    return this.init_1;
  };
  protoOf(Keyframes_0).get_usesColorMode_a99qlr_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.usesColorMode$delegate_1;
    usesColorMode$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Keyframes_0).getValue_fbnwi2_k$ = function (thisRef, property) {
    return this;
  };
  function toAnimation_0(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var name = get_name(_this__u8e3s4);
    var tmp;
    if (_this__u8e3s4.get_usesColorMode_a99qlr_k$()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + name + " depends on the site's color mode but no color mode was specified.";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = colorMode;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var colorMode_0 = tmp;
    var nameWithColorMode = !(colorMode_0 == null) ? suffixedWith(name, colorMode_0) : name;
    return Companion_getInstance_2().of_a1x18a_k$(nameWithColorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function usesColorMode$factory_0() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.get_usesColorMode_a99qlr_k$();
    }, null);
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ZERO':
        return Breakpoint_ZERO_getInstance();
      case 'SM':
        return Breakpoint_SM_getInstance();
      case 'MD':
        return Breakpoint_MD_getInstance();
      case 'LG':
        return Breakpoint_LG_getInstance();
      case 'XL':
        return Breakpoint_XL_getInstance();
      default:
        Breakpoint_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_getInstance();
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
    $this$CssStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastZeroStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$CssStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastSmStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$CssStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastMdStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$CssStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastLgStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$CssStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastXlStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_hlvh2z_k$(tmp, DisplayUntilZeroStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_hlvh2z_k$(tmp, DisplayUntilSmStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_hlvh2z_k$(tmp, DisplayUntilMdStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_hlvh2z_k$(tmp, DisplayUntilLgStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_hlvh2z_k$(tmp, DisplayUntilXlStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_3();
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
    this.sm_1 = sm;
    this.md_1 = md;
    this.lg_1 = lg;
    this.xl_1 = xl;
  }
  protoOf(BreakpointValues).get_sm_kntnod_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).get_md_kntnts_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).get_lg_kntnuk_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).get_xl_kntnk3_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).component1_7eebsc_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).component2_7eebsb_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).component3_7eebsa_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).component4_7eebs9_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).copy_vphwd_k$ = function (sm, md, lg, xl) {
    return new BreakpointValues(sm, md, lg, xl);
  };
  protoOf(BreakpointValues).copy$default_3l3l38_k$ = function (sm, md, lg, xl, $super) {
    sm = sm === VOID ? this.sm_1 : sm;
    md = md === VOID ? this.md_1 : md;
    lg = lg === VOID ? this.lg_1 : lg;
    xl = xl === VOID ? this.xl_1 : xl;
    return $super === VOID ? this.copy_vphwd_k$(sm, md, lg, xl) : $super.copy_vphwd_k$.call(this, sm, md, lg, xl);
  };
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.sm_1) + ', md=' + toString(this.md_1) + ', lg=' + toString(this.lg_1) + ', xl=' + toString(this.xl_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.sm_1);
    result = imul(result, 31) + hashCode(this.md_1) | 0;
    result = imul(result, 31) + hashCode(this.lg_1) | 0;
    result = imul(result, 31) + hashCode(this.xl_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.sm_1, tmp0_other_with_cast.sm_1))
      return false;
    if (!equals(this.md_1, tmp0_other_with_cast.md_1))
      return false;
    if (!equals(this.lg_1, tmp0_other_with_cast.lg_1))
      return false;
    if (!equals(this.xl_1, tmp0_other_with_cast.xl_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Px(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Px).toPx_24esj_k$ = function () {
    return this.width_1;
  };
  function Em(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Em).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Rem).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.width_1 = width;
  }
  protoOf(BreakpointUnitValue).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp18_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp18_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp18_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function _get_customLayers__btvjx4($this) {
    return $this.customLayers_1;
  }
  function _get_silkLayers__sn05o($this) {
    return $this.silkLayers_1;
  }
  function LayerListBuilder$add$lambda(it) {
    return '"' + it + '"';
  }
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.customLayers_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_0();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.silkLayers.<anonymous>' call
      var tmp$ret$1 = item.get_layerName_j0k2lp_k$();
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    tmp_0.silkLayers_1 = destination;
  }
  protoOf(LayerListBuilder).add_i6qm9k_k$ = function (layerNames, after) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (layerNames.length === 0)
      return Unit_getInstance();
    var existingLayerNames = toSet(plus_1(this.silkLayers_1, flatten(this.customLayers_1.get_values_ksazhn_k$())));
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = layerNames.length;
    while (inductionVariable < last) {
      var element = layerNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.add.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!existingLayerNames.contains_aljjnj_k$(element)) {
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.add.<anonymous>.<anonymous>' call
        var message = 'Cannot register layer name "' + element + '" as a layer with that name was already registered.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!(after == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!existingLayerNames.contains_aljjnj_k$(after)) {
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.add.<anonymous>' call
        var message_0 = 'Cannot register layer names (' + joinToString_0(layerNames, VOID, VOID, VOID, VOID, VOID, LayerListBuilder$add$lambda) + ') as the requested layer they should follow ("' + after + '") does not exist.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.customLayers_1;
    var value = this_0.get_wei43m_k$(after);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.add.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.put_4fpzoq_k$(after, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.addAll_4lagoh_k$(toList(layerNames));
  };
  protoOf(LayerListBuilder).add$default_h1w2zl_k$ = function (layerNames, after, $super) {
    after = after === VOID ? null : after;
    var tmp;
    if ($super === VOID) {
      this.add_i6qm9k_k$(layerNames, after);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_i6qm9k_k$.call(this, layerNames, after);
    }
    return tmp;
  };
  protoOf(LayerListBuilder).build_oz9q33_k$ = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.customLayers_1.get_wei43m_k$(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_1(this.silkLayers_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>' call
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.removeAt_6niowx_k$(0);
      this_0.add_utx5q5_k$(currLayer);
      var tmp19_safe_receiver = this.customLayers_1.get_wei43m_k$(currLayer);
      if (tmp19_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>.<anonymous>' call
        layersToProcess.addAll_lxodh3_k$(0, tmp19_safe_receiver);
      }
    }
    return this_0.build_nmwvly_k$();
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
  function valueOf_0(value) {
    switch (value) {
      case 'RESET':
        return SilkLayer_RESET_getInstance();
      case 'BASE':
        return SilkLayer_BASE_getInstance();
      case 'COMPONENT_STYLES':
        return SilkLayer_COMPONENT_STYLES_getInstance();
      case 'COMPONENT_VARIANTS':
        return SilkLayer_COMPONENT_VARIANTS_getInstance();
      case 'RESTRICTED_STYLES':
        return SilkLayer_RESTRICTED_STYLES_getInstance();
      case 'GENERAL_STYLES':
        return SilkLayer_GENERAL_STYLES_getInstance();
      default:
        SilkLayer_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_getInstance();
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
    this.layerName_1 = layerName;
  }
  protoOf(SilkLayer).get_layerName_j0k2lp_k$ = function () {
    return this.layerName_1;
  };
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
    return Companion_getInstance_8().OfFunctionalPseudoClass_j2u724_k$(_this__u8e3s4, 'not', params.slice());
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
  function get__SilkTheme() {
    return _SilkTheme;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _get__cssStyles__z6r30b($this) {
    return $this._cssStyles_1;
  }
  function _get__cssStyleVariants__w9quu($this) {
    return $this._cssStyleVariants_1;
  }
  function _get__cssStyleNames__q0eho0($this) {
    return $this._cssStyleNames_1;
  }
  function _get__cssLayersFor__1psh02($this) {
    return $this._cssLayersFor_1;
  }
  function _get__replacedCssStyles__9ycm97($this) {
    return $this._replacedCssStyles_1;
  }
  function _get__cssStyleDependencies__wtspad($this) {
    return $this._cssStyleDependencies_1;
  }
  function _get__legacyComponentStyles__7yudl8($this) {
    return $this._legacyComponentStyles_1;
  }
  function _get__legacyComponentVariants__h0ze60($this) {
    return $this._legacyComponentVariants_1;
  }
  function _get__keyframes__qglgjp($this) {
    return $this._keyframes_1;
  }
  function _get__cssKeyframesNames__bibfcs($this) {
    return $this._cssKeyframesNames_1;
  }
  function _get__legacyKeyframes__767oeq($this) {
    return $this._legacyKeyframes_1;
  }
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.cssStyles_1.get_wei43m_k$(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this._cssStyles_1.put_4fpzoq_k$(name, style);
    // Inline function 'kotlin.collections.set' call
    $this._cssStyleNames_1.put_4fpzoq_k$(style, name);
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
      tmp = tmp_0.get_layerName_j0k2lp_k$();
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
      $this._cssLayersFor_1.put_4fpzoq_k$(name, tmp21_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this._cssStyleDependencies_1;
      var value = this_0.get_wei43m_k$(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        this_0.put_4fpzoq_k$(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.add_utx5q5_k$(style.get_baseStyle_lpil3d_k$());
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this._replacedCssStyles_1.put_4fpzoq_k$(originalStyle, newStyle);
    var tmp22_safe_receiver = $this._cssStyleDependencies_1.remove_gppy8k_k$(originalStyle);
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this._cssStyleDependencies_1.put_4fpzoq_k$(newStyle, tmp22_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this._cssStyleDependencies_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.remove_cedx0m_k$(originalStyle)) {
        element.add_utx5q5_k$(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme$replaceStyle$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1248909298);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme$replaceStyle$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-883094024);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme$replaceVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1824010021);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme$replaceVariant$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(202852300);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp._cssStyles_1 = LinkedHashMap_init_$Create$();
    this.cssStyles_1 = this._cssStyles_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0._cssStyleVariants_1 = LinkedHashMap_init_$Create$();
    this.cssStyleVariants_1 = this._cssStyleVariants_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1._cssStyleNames_1 = LinkedHashMap_init_$Create$();
    this.cssStyleNames_1 = this._cssStyleNames_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2._cssLayersFor_1 = LinkedHashMap_init_$Create$();
    this.cssLayersFor_1 = this._cssLayersFor_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3._replacedCssStyles_1 = LinkedHashMap_init_$Create$();
    this.replacedCssStyles_1 = this._replacedCssStyles_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4._cssStyleDependencies_1 = LinkedHashMap_init_$Create$();
    this.cssStyleDependencies_1 = this._cssStyleDependencies_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5._legacyComponentStyles_1 = LinkedHashMap_init_$Create$();
    this.legacyComponentStyles_1 = this._legacyComponentStyles_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6._legacyComponentVariants_1 = LinkedHashMap_init_$Create$();
    this.legacyComponentVariants_1 = this._legacyComponentVariants_1;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7._keyframes_1 = LinkedHashMap_init_$Create$();
    this.keyframes_1 = this._keyframes_1;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_8._cssKeyframesNames_1 = LinkedHashMap_init_$Create$();
    this.cssKeyframesNames_1 = this._cssKeyframesNames_1;
    var tmp_9 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_9._legacyKeyframes_1 = LinkedHashMap_init_$Create$();
    this.legacyKeyframes_1 = this._legacyKeyframes_1;
    this.palettes_1 = new MutablePalettes();
    this.breakpoints_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).get_cssStyles_r7wjhb_k$ = function () {
    return this.cssStyles_1;
  };
  protoOf(MutableSilkTheme).get_cssStyleVariants_n1h4js_k$ = function () {
    return this.cssStyleVariants_1;
  };
  protoOf(MutableSilkTheme).get_cssStyleNames_w3c1xo_k$ = function () {
    return this.cssStyleNames_1;
  };
  protoOf(MutableSilkTheme).get_cssLayersFor_1ry8ls_k$ = function () {
    return this.cssLayersFor_1;
  };
  protoOf(MutableSilkTheme).get_replacedCssStyles_qj5pt_k$ = function () {
    return this.replacedCssStyles_1;
  };
  protoOf(MutableSilkTheme).get_cssStyleDependencies_tquku5_k$ = function () {
    return this.cssStyleDependencies_1;
  };
  protoOf(MutableSilkTheme).get_legacyComponentStyles_8cocc0_k$ = function () {
    return this.legacyComponentStyles_1;
  };
  protoOf(MutableSilkTheme).get_legacyComponentVariants_j4oel8_k$ = function () {
    return this.legacyComponentVariants_1;
  };
  protoOf(MutableSilkTheme).get_keyframes_5xuesh_k$ = function () {
    return this.keyframes_1;
  };
  protoOf(MutableSilkTheme).get_cssKeyframesNames_zdji8w_k$ = function () {
    return this.cssKeyframesNames_1;
  };
  protoOf(MutableSilkTheme).get_legacyKeyframes_8a2156_k$ = function () {
    return this.legacyKeyframes_1;
  };
  protoOf(MutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(MutableSilkTheme).set_breakpoints_8z3hpj_k$ = function (_set____db54di) {
    this.breakpoints_1 = _set____db54di;
  };
  protoOf(MutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(MutableSilkTheme).registerStyle_prvzza_k$ = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).registerStyle$default_z1l3ol_k$ = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.registerStyle_prvzza_k$(name, style, layer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerStyle_prvzza_k$.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).registerStyle_rn34tk_k$ = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).registerStyle$default_8xy09p_k$ = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.registerStyle_rn34tk_k$(name, style, layer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerStyle_rn34tk_k$.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).registerStyle_2vxspb_k$ = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).registerStyle$default_qiw5ck_k$ = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.registerStyle_2vxspb_k$(name, style, layer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerStyle_2vxspb_k$.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceStyle_4htxe5_k$ = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.cssStyleNames_1.get_wei43m_k$(style);
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
    var this_0 = this.replacedCssStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this._cssStyles_1.put_4fpzoq_k$(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this._cssStyleNames_1.put_4fpzoq_k$(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).replaceStyle_ap2qub_k$ = function (style, extraModifier, init) {
    this.replaceStyle_4htxe5_k$(style, MutableSilkTheme$replaceStyle$lambda(extraModifier), init);
  };
  protoOf(MutableSilkTheme).replaceStyle$default_rkn198_k$ = function (style, extraModifier, init, $super) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    var tmp;
    if ($super === VOID) {
      this.replaceStyle_ap2qub_k$(style, extraModifier, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceStyle_ap2qub_k$.call(this, style, extraModifier, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).registerStyle_4iezkn_k$ = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerStyle.<anonymous>' call
    var it = this.legacyComponentStyles_1.get_wei43m_k$(style.get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.get_name_woqyms_k$() + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._legacyComponentStyles_1;
    var key = style.get_name_woqyms_k$();
    this_0.put_4fpzoq_k$(key, style);
    // Inline function 'kotlin.collections.set' call
    var this_1 = this._cssStyleNames_1;
    var key_0 = style.get_cssStyle_b64j8a_k$();
    var value = style.get_name_woqyms_k$();
    this_1.put_4fpzoq_k$(key_0, value);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_bn14h1_k$ = function (style, extraModifiers, init) {
    this.replaceStyle_ap2qub_k$(style, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle$default_2u46xg_k$ = function (style, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentStyle_bn14h1_k$(style, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentStyle_bn14h1_k$.call(this, style, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_lnu6th_k$ = function (style, extraModifiers, init) {
    this.replaceStyle_4htxe5_k$(style, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_xzr9mn_k$ = function (style, extraModifiers, init) {
    this.replaceStyle_vep9ze_k$(style, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle$default_edykqw_k$ = function (style, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentStyle_xzr9mn_k$(style, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentStyle_xzr9mn_k$.call(this, style, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_dd2m8n_k$ = function (style, extraModifiers, init) {
    this.replaceStyle_kxm1rg_k$(style, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceStyle_vep9ze_k$ = function (style, extraModifier, init) {
    this.replaceStyle_kxm1rg_k$(style, MutableSilkTheme$replaceStyle$lambda_0(extraModifier), init);
  };
  protoOf(MutableSilkTheme).replaceStyle$default_ihumlf_k$ = function (style, extraModifier, init, $super) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    var tmp;
    if ($super === VOID) {
      this.replaceStyle_vep9ze_k$(style, extraModifier, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceStyle_vep9ze_k$.call(this, style, extraModifier, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceStyle_kxm1rg_k$ = function (style, extraModifier, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.legacyComponentStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.get_name_woqyms_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.get_name_woqyms_k$() + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_1 = this.replacedCssStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key_0 = style.get_cssStyle_b64j8a_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key_0)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.get_name_woqyms_k$() + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new ComponentStyle(style.get_nameWithoutPrefix_8fvb1z_k$(), extraModifier, style.get_prefix_i78za3_k$(), init);
    // Inline function 'kotlin.collections.set' call
    var this_2 = this._legacyComponentStyles_1;
    var key_1 = style.get_name_woqyms_k$();
    this_2.put_4fpzoq_k$(key_1, newStyle);
    // Inline function 'kotlin.collections.set' call
    var this_3 = this._cssStyleNames_1;
    var key_2 = newStyle.get_cssStyle_b64j8a_k$();
    var value = style.get_name_woqyms_k$();
    this_3.put_4fpzoq_k$(key_2, value);
    updateReplaced(this, style.get_cssStyle_b64j8a_k$(), newStyle.get_cssStyle_b64j8a_k$());
  };
  protoOf(MutableSilkTheme).registerVariant_pbhbwn_k$ = function (name, variant, layer) {
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
      var tmp1_elvis_lhs = this.cssStyleNames_1.get_wei43m_k$(simpleVariant.get_baseStyle_lpil3d_k$());
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
    var it = this.cssStyleVariants_1.get_wei43m_k$(name_0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this._cssStyleVariants_1.put_4fpzoq_k$(name_0, variant);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._cssStyleNames_1;
    var key = variant.get_cssStyle_je8f1z_k$();
    this_0.put_4fpzoq_k$(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_1 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().get_layerName_j0k2lp_k$() : layer;
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
      this._cssLayersFor_1.put_4fpzoq_k$(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = this._cssStyleDependencies_1;
      var key_0 = variant.get_cssStyle_je8f1z_k$();
      var value = this_2.get_wei43m_k$(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        this_2.put_4fpzoq_k$(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.add_utx5q5_k$(variant.get_baseVariant_nxoaqa_k$().get_cssStyle_je8f1z_k$());
    }
  };
  protoOf(MutableSilkTheme).registerVariant$default_k7o5vi_k$ = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.registerVariant_pbhbwn_k$(name, variant, layer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerVariant_pbhbwn_k$.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).registerVariants_hfn5ig_k$ = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp0_iterator = destination.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>.<anonymous>' call
      var it = this.legacyComponentVariants_1.get_wei43m_k$(element_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$());
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null || it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$() + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this._legacyComponentVariants_1;
      var key = element_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$();
      this_0.put_4fpzoq_k$(key, element_0);
      // Inline function 'kotlin.collections.set' call
      var this_1 = this._cssStyleNames_1;
      var key_0 = element_0.get_cssStyle_je8f1z_k$();
      var value = element_0.get_name_woqyms_k$();
      this_1.put_4fpzoq_k$(key_0, value);
    }
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_hlubqk_k$ = function (variant, extraModifiers, init) {
    this.replaceVariant_rvd1tt_k$(variant, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant$default_xcz8nz_k$ = function (variant, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentVariant_hlubqk_k$(variant, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentVariant_hlubqk_k$.call(this, variant, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_k14gl2_k$ = function (variant, extraModifiers, init) {
    this.replaceVariant_b4hzcb_k$(variant, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_spg1of_k$ = function (variant, extraModifiers, init) {
    this.replaceVariant_gdkdrq_k$(variant, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant$default_e3pcg8_k$ = function (variant, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentVariant_spg1of_k$(variant, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentVariant_spg1of_k$.call(this, variant, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_vddomh_k$ = function (variant, extraModifiers, init) {
    this.replaceVariant_sa1ofg_k$(variant, extraModifiers, init);
  };
  protoOf(MutableSilkTheme).replaceVariant_rvd1tt_k$ = function (variant, extraModifier, init) {
    this.replaceVariant_b4hzcb_k$(variant, MutableSilkTheme$replaceVariant$lambda(extraModifier), init);
  };
  protoOf(MutableSilkTheme).replaceVariant$default_r9a5t8_k$ = function (variant, extraModifier, init, $super) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    var tmp;
    if ($super === VOID) {
      this.replaceVariant_rvd1tt_k$(variant, extraModifier, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceVariant_rvd1tt_k$.call(this, variant, extraModifier, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceVariant_b4hzcb_k$ = function (variant, extraModifier, init) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only replace variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var variant_0 = tmp;
    var tmp1_elvis_lhs = this.cssStyleNames_1.get_wei43m_k$(variant_0.get_cssStyle_je8f1z_k$());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message_0 = 'Attempting to replace a variant that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var name = tmp_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.replacedCssStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = variant_0.get_cssStyle_je8f1z_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceVariant.<anonymous>' call
      var message_1 = 'Attempting to override variant "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    var tmp_1 = addVariant(variant_0.get_baseStyle_lpil3d_k$(), extraModifier, init);
    var newVariant = tmp_1 instanceof SimpleCssStyleVariant ? tmp_1 : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    this._cssStyleVariants_1.put_4fpzoq_k$(name, newVariant);
    // Inline function 'kotlin.collections.set' call
    var this_1 = this._cssStyleNames_1;
    var key_0 = variant_0.get_cssStyle_je8f1z_k$();
    this_1.put_4fpzoq_k$(key_0, name);
    updateReplaced(this, variant_0.get_cssStyle_je8f1z_k$(), newVariant.get_cssStyle_je8f1z_k$());
  };
  protoOf(MutableSilkTheme).replaceVariant_gdkdrq_k$ = function (variant, extraModifier, init) {
    this.replaceVariant_sa1ofg_k$(variant, MutableSilkTheme$replaceVariant$lambda_0(extraModifier), init);
  };
  protoOf(MutableSilkTheme).replaceVariant$default_qs6y03_k$ = function (variant, extraModifier, init, $super) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    var tmp;
    if ($super === VOID) {
      this.replaceVariant_gdkdrq_k$(variant, extraModifier, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceVariant_gdkdrq_k$.call(this, variant, extraModifier, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceVariant_sa1ofg_k$ = function (variant, extraModifier, init) {
    var tmp0_elvis_lhs = variant instanceof SimpleComponentVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only replace variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var variant_0 = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.legacyComponentVariants_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = variant_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceVariant.<anonymous>' call
      var message_0 = 'Attempting to replace a variant that was never registered: "' + variant_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$() + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_1 = this.replacedCssStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key_0 = variant_0.get_cssStyle_je8f1z_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key_0)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceVariant.<anonymous>' call
      var message_1 = 'Attempting to override variant "' + variant_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$() + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    var tmp_0 = variant_0.get_baseStyle_lpil3d_k$().addVariant_27omcc_k$(variant_0.get_name_woqyms_k$(), extraModifier, init);
    var newVariant = tmp_0 instanceof SimpleComponentVariant ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var this_2 = this._legacyComponentVariants_1;
    var key_1 = variant_0.get_cssStyle_je8f1z_k$().get_selector_c3i7h4_k$();
    this_2.put_4fpzoq_k$(key_1, newVariant);
    // Inline function 'kotlin.collections.set' call
    var this_3 = this._cssStyleNames_1;
    var key_2 = variant_0.get_cssStyle_je8f1z_k$();
    var value = variant_0.get_name_woqyms_k$();
    this_3.put_4fpzoq_k$(key_2, value);
    updateReplaced(this, variant_0.get_cssStyle_je8f1z_k$(), newVariant.get_cssStyle_je8f1z_k$());
  };
  protoOf(MutableSilkTheme).registerKeyframes_f5btlc_k$ = function (name, keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this._keyframes_1.get_wei43m_k$(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this._keyframes_1.put_4fpzoq_k$(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this._cssKeyframesNames_1.put_4fpzoq_k$(keyframes, name);
  };
  protoOf(MutableSilkTheme).registerKeyframes_5qa1jl_k$ = function (keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this._legacyKeyframes_1.get_wei43m_k$(keyframes.get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + keyframes.get_name_woqyms_k$() + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._legacyKeyframes_1;
    var key = keyframes.get_name_woqyms_k$();
    this_0.put_4fpzoq_k$(key, keyframes);
  };
  function get_name(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().nameFor_bxvoai_k$(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid Keyframes. This should only be called on top-level public keyframes or keyframes that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_mutableSilkTheme__kqd2n1($this) {
    return $this.mutableSilkTheme_1;
  }
  function _get__cssStyles__z6r30b_0($this) {
    return $this._cssStyles_1;
  }
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.contains_aljjnj_k$(style))
      return Unit_getInstance();
    visited.add_utx5q5_k$(style);
    var tmp24_safe_receiver = $dependencies.get_wei43m_k$(style);
    if (tmp24_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp24_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.add_utx5q5_k$(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.isEmpty_y1axqb_k$())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styles.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.mutableSilkTheme_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.mutableSilkTheme_1.palettes_1;
    tmp.palettes_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.breakpoints_1 = this.mutableSilkTheme_1.breakpoints_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1._cssStyles_1 = LinkedHashMap_init_$Create$();
    this.cssStyles_1 = this._cssStyles_1;
  }
  protoOf(ImmutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(ImmutableSilkTheme).get_palette_vetkex_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    return this.palettes_1.get_4bsmki_k$(Companion_getInstance_13().get_current_2iudd5_k$($composer_0, 6));
  };
  protoOf(ImmutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(ImmutableSilkTheme).get_cssStyles_r7wjhb_k$ = function () {
    return this.cssStyles_1;
  };
  protoOf(ImmutableSilkTheme).nameFor_31dp2a_k$ = function (style) {
    return this.mutableSilkTheme_1.cssStyleNames_1.get_wei43m_k$(style);
  };
  protoOf(ImmutableSilkTheme).nameFor_bxvoai_k$ = function (keyframes) {
    return this.mutableSilkTheme_1.cssKeyframesNames_1.get_wei43m_k$(keyframes);
  };
  protoOf(ImmutableSilkTheme).registerKeyframesInto_mvp8su_k$ = function (silkStyleSheet) {
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
    var tmp0_iterator = this.mutableSilkTheme_1.keyframes_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.get_value_j01efc_k$();
      silkStyleSheet.registerKeyframes_6u48c_k$(name, keyframes.get_init_pi7mx0_k$());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.mutableSilkTheme_1.legacyKeyframes_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var keyframes_0 = element_0.get_value_j01efc_k$();
      registerKeyframes(silkStyleSheet, keyframes_0);
    }
  };
  protoOf(ImmutableSilkTheme).registerStylesInto_4kffry_k$ = function (stylesheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this.mutableSilkTheme_1.cssStyles_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.mutableSilkTheme_1.cssStyleVariants_1.get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (element instanceof SimpleCssStyleVariant) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$3 = item.get_cssStyle_je8f1z_k$();
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var tmp_0 = plus_1(tmp, destination_0);
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.mutableSilkTheme_1.legacyComponentStyles_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$6 = item_0.get_cssStyle_b64j8a_k$();
      destination_1.add_utx5q5_k$(tmp$ret$6);
    }
    var tmp_1 = plus_1(tmp_0, destination_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = this.mutableSilkTheme_1.legacyComponentVariants_1.get_values_ksazhn_k$();
    var destination_2 = ArrayList_init_$Create$_0();
    var tmp0_iterator_2 = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_2.next_20eer_k$();
      if (element_0 instanceof SimpleComponentVariant) {
        destination_2.add_utx5q5_k$(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
    var tmp0_iterator_3 = destination_2.iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$11 = item_1.get_cssStyle_je8f1z_k$();
      destination_3.add_utx5q5_k$(tmp$ret$11);
    }
    var allCssStyles = plus_1(tmp_1, destination_3);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.mutableSilkTheme_1.cssStyleDependencies_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = allCssStylesSorted.iterator_jk1svi_k$();
    while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_4.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.nameFor_31dp2a_k$(element_1);
      // Inline function 'kotlin.collections.get' call
      var this_3 = this.mutableSilkTheme_1.cssLayersFor_1;
      var layer = (isInterface(this_3, KtMap) ? this_3 : THROW_CCE()).get_wei43m_k$(className);
      var classSelectors = element_1.addStylesInto_avvx4p_k$('.' + className, stylesheet, layer);
      // Inline function 'kotlin.collections.set' call
      var this_4 = this._cssStyles_1;
      var value = element_1.intoImmutableStyle_96ijwa_k$(classSelectors);
      this_4.put_4fpzoq_k$(element_1, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = this.mutableSilkTheme_1.replacedCssStyles_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_5.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_2.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_2.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.set' call
      var this_5 = this._cssStyles_1;
      var value_0 = getValue(this._cssStyles_1, overrideStyle);
      this_5.put_4fpzoq_k$(originalStyle, value_0);
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
  function get_name_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().nameFor_31dp2a_k$(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid CssStyle. This should only be called on top-level public styles or styles that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_getInstance_0() : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.cssStyleNames_1.get_wei43m_k$(style);
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
    var this_0 = _this__u8e3s4.cssStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.get_extraModifier_pimrdt_k$();
    var existingInit = style.get_init_pi7mx0_k$();
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.replaceStyle_4htxe5_k$(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-308722568);
      var tmp0 = $extraModifier;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.get_colorMode_trbg8z_k$());
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.base_y8uu8g_k$(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_getInstance();
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(114003212);
      var tmp0 = $existingExtraModifier($composer_0, 0).then_mmfvo6_k$($extraModifier($composer_0, 0));
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_getInstance();
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp27_safe_receiver = toValue(_this__u8e3s4);
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.get_width_j0q4yl_k$();
    return tmp0_elvis_lhs == null ? get_px(0) : tmp0_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_sm_kntnod_k$();
        break;
      case 2:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_md_kntnts_k$();
        break;
      case 3:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_lg_kntnuk_k$();
        break;
      case 4:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_xl_kntnk3_k$();
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
    return this_0.get_value_j01efc_k$();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.get_name_woqyms_k$().toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_currentState_dmzs7c_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-974960061);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(Companion_7).get_current_2iudd5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0.get_value_j01efc_k$();
  };
  var Companion_instance_7;
  function Companion_getInstance_13() {
    ColorMode_initEntries();
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function values_1() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_getInstance();
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
    Companion_getInstance_13();
  }
  var $ENTRIES_1;
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).get_isLight_zemp0j_k$ = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).get_isDark_evw91l_k$ = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).get_opposite_ywslzk_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
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
  protoOf(ColorMode).provide_53xuu7_k$ = function () {
    return get_LocalColorMode().provides_3agxel_k$(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_7().get_Instance_ljxvgi_k$().get_initialColorMode_i1z52t_k$());
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
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Monochrome$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Red$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Pink$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Purple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_DeepPurple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Indigo$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Blue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_LightBlue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Cyan$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Teal$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Green$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_LightGreen$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Lime$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Yellow$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Amber$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Orange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_DeepOrange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Brown$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Gray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_BlueGray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes$stable;
  function Monochrome() {
    Monochrome_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15921906);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(15132390);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(13421772);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(11776947);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(10066329);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(8421504);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(6710886);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(5066061);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(3355443);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(1710618);
  }
  protoOf(Monochrome).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Monochrome).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Monochrome).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Monochrome).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Monochrome).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Monochrome).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Monochrome).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Monochrome).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Monochrome).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Monochrome).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Monochrome_instance;
  function Monochrome_getInstance() {
    if (Monochrome_instance == null)
      new Monochrome();
    return Monochrome_instance;
  }
  function Red() {
    Red_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16772078);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16764370);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(15702682);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(15037299);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(15684432);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(16007990);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(15022389);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(13840175);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(12986408);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(12000284);
  }
  protoOf(Red).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Red).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Red).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Red).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Red).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Red).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Red).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Red).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Red).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Red).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Pink() {
    Pink_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16573676);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16301008);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(16027569);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(15753874);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(15483002);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(15277667);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(14162784);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(12720219);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(11342935);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(8916559);
  }
  protoOf(Pink).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Pink).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Pink).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Pink).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Pink).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Pink).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Pink).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Pink).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Pink).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Pink).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Pink_instance;
  function Pink_getInstance() {
    if (Pink_instance == null)
      new Pink();
    return Pink_instance;
  }
  function Purple() {
    Purple_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15984117);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(14794471);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(13538264);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(12216520);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(11225020);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(10233776);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(9315498);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(8069026);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(6953882);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(4854924);
  }
  protoOf(Purple).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Purple).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Purple).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Purple).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Purple).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Purple).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Purple).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Purple).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Purple).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Purple).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Purple_instance;
  function Purple_getInstance() {
    if (Purple_instance == null)
      new Purple();
    return Purple_instance;
  }
  function DeepPurple() {
    DeepPurple_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15591414);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(13747433);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(11771355);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(9795021);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(8280002);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(6765239);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(6174129);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(5320104);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(4532128);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(3218322);
  }
  protoOf(DeepPurple).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(DeepPurple).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(DeepPurple).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(DeepPurple).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(DeepPurple).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(DeepPurple).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(DeepPurple).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(DeepPurple).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(DeepPurple).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(DeepPurple).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var DeepPurple_instance;
  function DeepPurple_getInstance() {
    if (DeepPurple_instance == null)
      new DeepPurple();
    return DeepPurple_instance;
  }
  function Indigo() {
    Indigo_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15264502);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(12962537);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(10463450);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(7964363);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(6056896);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(4149685);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(3754411);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(3162015);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(2635155);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(1713022);
  }
  protoOf(Indigo).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Indigo).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Indigo).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Indigo).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Indigo).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Indigo).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Indigo).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Indigo).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Indigo).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Indigo).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Indigo_instance;
  function Indigo_getInstance() {
    if (Indigo_instance == null)
      new Indigo();
    return Indigo_instance;
  }
  function Blue() {
    Blue_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(14938877);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(12312315);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(9489145);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(6600182);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(4367861);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(2201331);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(2001125);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(1668818);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(1402304);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(870305);
  }
  protoOf(Blue).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Blue).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Blue).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Blue).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Blue).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Blue).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Blue).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Blue).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Blue).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Blue).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function LightBlue() {
    LightBlue_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(14808574);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(11789820);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(8508666);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(5227511);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(2733814);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(240116);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(236517);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(166097);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(161725);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(87963);
  }
  protoOf(LightBlue).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(LightBlue).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(LightBlue).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(LightBlue).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(LightBlue).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(LightBlue).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(LightBlue).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(LightBlue).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(LightBlue).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(LightBlue).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var LightBlue_instance;
  function LightBlue_getInstance() {
    if (LightBlue_instance == null)
      new LightBlue();
    return LightBlue_instance;
  }
  function Cyan() {
    Cyan_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(14743546);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(11725810);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(8445674);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(5099745);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(2541274);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(48340);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(44225);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(38823);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(33679);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(24676);
  }
  protoOf(Cyan).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Cyan).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Cyan).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Cyan).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Cyan).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Cyan).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Cyan).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Cyan).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Cyan).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Cyan).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Cyan_instance;
  function Cyan_getInstance() {
    if (Cyan_instance == null)
      new Cyan();
    return Cyan_instance;
  }
  function Teal() {
    Teal_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(14742257);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(11722715);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(8440772);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(5093036);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(2533018);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(38536);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(35195);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(31083);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(26972);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(19776);
  }
  protoOf(Teal).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Teal).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Teal).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Teal).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Teal).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Teal).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Teal).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Teal).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Teal).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Teal).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Teal_instance;
  function Teal_getInstance() {
    if (Teal_instance == null)
      new Teal();
    return Teal_instance;
  }
  function Green() {
    Green_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15267305);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(13166281);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(10868391);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(8505220);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(6732650);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(5025616);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(4431943);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(3706428);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(3046706);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(1793568);
  }
  protoOf(Green).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Green).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Green).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Green).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Green).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Green).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Green).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Green).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Green).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Green).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Green_instance;
  function Green_getInstance() {
    if (Green_instance == null)
      new Green();
    return Green_instance;
  }
  function LightGreen() {
    LightGreen_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15857897);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(14478792);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(12968357);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(11457921);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(10275941);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(9159498);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(8172354);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(6856504);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(5606191);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(3369246);
  }
  protoOf(LightGreen).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(LightGreen).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(LightGreen).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(LightGreen).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(LightGreen).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(LightGreen).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(LightGreen).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(LightGreen).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(LightGreen).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(LightGreen).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var LightGreen_instance;
  function LightGreen_getInstance() {
    if (LightGreen_instance == null)
      new LightGreen();
    return LightGreen_instance;
  }
  function Lime() {
    Lime_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16382951);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(15791299);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(15134364);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(14477173);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(13951319);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(13491257);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(12634675);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(11514923);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(10394916);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(8550167);
  }
  protoOf(Lime).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Lime).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Lime).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Lime).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Lime).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Lime).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Lime).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Lime).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Lime).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Lime).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Lime_instance;
  function Lime_getInstance() {
    if (Lime_instance == null)
      new Lime();
    return Lime_instance;
  }
  function Yellow() {
    Yellow_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16776679);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16775620);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(16774557);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(16773494);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(16772696);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(16771899);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(16635957);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(16498733);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(16361509);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(16088855);
  }
  protoOf(Yellow).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Yellow).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Yellow).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Yellow).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Yellow).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Yellow).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Yellow).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Yellow).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Yellow).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Yellow).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Yellow_instance;
  function Yellow_getInstance() {
    if (Yellow_instance == null)
      new Yellow();
    return Yellow_instance;
  }
  function Amber() {
    Amber_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16775393);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16772275);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(16769154);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(16766287);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(16763432);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(16761095);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(16757504);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(16752640);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(16748288);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(16740096);
  }
  protoOf(Amber).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Amber).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Amber).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Amber).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Amber).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Amber).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Amber).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Amber).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Amber).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Amber).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Amber_instance;
  function Amber_getInstance() {
    if (Amber_instance == null)
      new Amber();
    return Amber_instance;
  }
  function Orange() {
    Orange_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16774112);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16769202);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(16764032);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(16758605);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(16754470);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(16750592);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(16485376);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(16088064);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(15690752);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(15094016);
  }
  protoOf(Orange).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Orange).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Orange).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Orange).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Orange).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Orange).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Orange).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Orange).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Orange).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Orange).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Orange_instance;
  function Orange_getInstance() {
    if (Orange_instance == null)
      new Orange();
    return Orange_instance;
  }
  function DeepOrange() {
    DeepOrange_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16509415);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16764092);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(16755601);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(16747109);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(16740419);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(16733986);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(16011550);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(15092249);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(14172949);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(12531212);
  }
  protoOf(DeepOrange).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(DeepOrange).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(DeepOrange).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(DeepOrange).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(DeepOrange).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(DeepOrange).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(DeepOrange).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(DeepOrange).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(DeepOrange).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(DeepOrange).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var DeepOrange_instance;
  function DeepOrange_getInstance() {
    if (DeepOrange_instance == null)
      new DeepOrange();
    return DeepOrange_instance;
  }
  function Brown() {
    Brown_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15723497);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(14142664);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(12364452);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(10586239);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(9268835);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(7951688);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(7162945);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(6111287);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(5125166);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(4073251);
  }
  protoOf(Brown).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Brown).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Brown).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Brown).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Brown).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Brown).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Brown).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Brown).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Brown).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Brown).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Brown_instance;
  function Brown_getInstance() {
    if (Brown_instance == null)
      new Brown();
    return Brown_instance;
  }
  function Gray() {
    Gray_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(16448250);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(16119285);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(15658734);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(14737632);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(12434877);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(10395294);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(7697781);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(6381921);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(4342338);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(2171169);
  }
  protoOf(Gray).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Gray).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Gray).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Gray).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Gray).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Gray).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Gray).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Gray).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Gray).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Gray).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  function BlueGray() {
    BlueGray_instance = this;
    this._50__1 = Companion_getInstance_4().rgb_6orfmz_k$(15527921);
    this._100__1 = Companion_getInstance_4().rgb_6orfmz_k$(13621468);
    this._200__1 = Companion_getInstance_4().rgb_6orfmz_k$(11583173);
    this._300__1 = Companion_getInstance_4().rgb_6orfmz_k$(9479342);
    this._400__1 = Companion_getInstance_4().rgb_6orfmz_k$(7901340);
    this._500__1 = Companion_getInstance_4().rgb_6orfmz_k$(6323595);
    this._600__1 = Companion_getInstance_4().rgb_6orfmz_k$(5533306);
    this._700__1 = Companion_getInstance_4().rgb_6orfmz_k$(4545124);
    this._800__1 = Companion_getInstance_4().rgb_6orfmz_k$(3622735);
    this._900__1 = Companion_getInstance_4().rgb_6orfmz_k$(2503224);
  }
  protoOf(BlueGray).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(BlueGray).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(BlueGray).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(BlueGray).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(BlueGray).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(BlueGray).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(BlueGray).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(BlueGray).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(BlueGray).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(BlueGray).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var BlueGray_instance;
  function BlueGray_getInstance() {
    if (BlueGray_instance == null)
      new BlueGray();
    return BlueGray_instance;
  }
  function ColorSchemes() {
    ColorSchemes_instance = this;
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  function ColorScheme() {
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Monochrome$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Red$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Pink$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Purple$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_DeepPurple$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Indigo$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Blue$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_LightBlue$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Cyan$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Teal$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Green$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_LightGreen$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Lime$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Yellow$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Amber$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Orange$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_DeepOrange$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Brown$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Gray$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes_BlueGray$stable = com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter() | com_varabyte_kobweb_compose_ui_graphics_Color_Rgb$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_ColorSchemes$stable = 0;
    }
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function MutablePalettes() {
    this.light_1 = new MutablePalette();
    this.dark_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(MutablePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function _get_palette__j9ubre($this) {
    return $this.palette_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function _get_palette__j9ubre_0($this) {
    return $this.palette_1;
  }
  function _get_groupName__oqexl($this) {
    return $this.groupName_1;
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.palette_1 = palette;
    this.prefix_1 = prefix;
  }
  protoOf(EntryDelegate).getValue_fbnwi2_k$ = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.prefix_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.palette_1.colors_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).setValue_jpcais_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.palette_1.colors_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.prefix_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.put_4fpzoq_k$(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.palette_1 = palette;
    this.groupName_1 = groupName;
  }
  protoOf(ColorGroup).paletteEntry_4qg1pz_k$ = function () {
    return new EntryDelegate(this.palette_1, this.groupName_1 + '.');
  };
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.colors_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).get_6bo4tg_k$ = function (key) {
    return this.colors_1.get_wei43m_k$(key);
  };
  protoOf(MutablePalette).set_17rjxm_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.colors_1.put_4fpzoq_k$(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().get_palettes_f7ft27_k$().get_4bsmki_k$(_this__u8e3s4);
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
    var tmp32_safe_receiver = shape.get_path_wos8ry_k$();
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
  function RectF_init_$Create$_0(cornerRadius) {
    return RectF_init_$Init$_0(cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_1(topBottom, leftRight, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(leftRight, topBottom), from100(to(leftRight, topBottom)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_1(topBottom, leftRight, cornerRadius) {
    return RectF_init_$Init$_1(topBottom, leftRight, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_2(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_2(side, cornerRadius) {
    return RectF_init_$Init$_2(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.topLeft_1 = topLeft;
    this.botRight_1 = botRight;
    this.cornerRadius_1 = cornerRadius;
  }
  protoOf(RectF).get_topLeft_hl8stp_k$ = function () {
    return this.topLeft_1;
  };
  protoOf(RectF).get_botRight_3cfala_k$ = function () {
    return this.botRight_1;
  };
  protoOf(RectF).get_cornerRadius_e70s5s_k$ = function () {
    return this.cornerRadius_1;
  };
  protoOf(RectF).get_path_wos8ry_k$ = function () {
    var tmp;
    if (!(this.topLeft_1.get_first_irdx8n_k$() === 0.0) || !(this.topLeft_1.get_second_jf7fjx_k$() === 0.0) || !(this.botRight_1.get_first_irdx8n_k$() === 100.0) || !(this.botRight_1.get_second_jf7fjx_k$() === 100.0) || !equals(this.cornerRadius_1, get_px(0))) {
      tmp = new InsetPath(this.topLeft_1, this.botRight_1, this.cornerRadius_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Shape() {
  }
  function Path() {
  }
  protoOf(Path).toPercentStr_u2meev_k$ = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).toPercentStr_wblpxu_k$ = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.get_first_irdx8n_k$()) + '% ' + toString(_this__u8e3s4.get_second_jf7fjx_k$()) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.get_first_irdx8n_k$(), 100.0 - _this__u8e3s4.get_second_jf7fjx_k$());
  }
  function _get_topLeft__ivx3md($this) {
    return $this.topLeft_1;
  }
  function _get_roundness__ntilf8($this) {
    return $this.roundness_1;
  }
  function _get_botRight__mdby22($this) {
    return $this.botRight_1;
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.topLeft_1 = topLeft;
    this.roundness_1 = roundness;
    this.botRight_1 = from100(botRight);
  }
  protoOf(InsetPath).toPathStr_ufnqhd_k$ = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.roundness_1;
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
    var left = this.topLeft_1.get_first_irdx8n_k$();
    var top = this.topLeft_1.get_second_jf7fjx_k$();
    var right = this.botRight_1.get_first_irdx8n_k$();
    var bottom = this.botRight_1.get_second_jf7fjx_k$();
    var insetPart = left === top && right === bottom && left === right ? this.toPercentStr_u2meev_k$(left) : left === right && top === bottom ? this.toPercentStr_wblpxu_k$(to(top, left)) : this.toPercentStr_u2meev_k$(top) + ' ' + this.toPercentStr_u2meev_k$(right) + ' ' + this.toPercentStr_u2meev_k$(bottom) + ' ' + this.toPercentStr_u2meev_k$(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('clip-path', $path.toPathStr_ufnqhd_k$());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(CssStyleScope).toAnimation_opkve_k$ = toAnimation;
  protoOf(CssStyleScope).toAnimation$default_19qkx2_k$ = toAnimation$default;
  protoOf(CssStyleBaseScope).toAnimation_opkve_k$ = toAnimation;
  protoOf(CssStyleBaseScope).toAnimation$default_19qkx2_k$ = toAnimation$default;
  protoOf(KeyframesBuilder).toAnimation_opkve_k$ = toAnimation;
  protoOf(KeyframesBuilder).toAnimation$default_19qkx2_k$ = toAnimation$default;
  protoOf(MutablePalettes).get_4bsmki_k$ = get;
  protoOf(MutablePalette).getValue_r24mvz_k$ = getValue_0;
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
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
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
  _.$_$.d = Keyframes_0;
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
  _.$_$.p = ComponentKind;
  _.$_$.q = Base;
  _.$_$.r = CssStyle_0;
  _.$_$.s = CssStyle_2;
  _.$_$.t = addVariantBase;
  _.$_$.u = addVariant_0;
  _.$_$.v = base_1;
  _.$_$.w = base_0;
  _.$_$.x = base;
  _.$_$.y = toModifier_0;
  _.$_$.z = toModifier;
  _.$_$.a1 = ColorGroup;
  _.$_$.b1 = MutablePalette;
  _.$_$.c1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.d1 = toPalette;
  _.$_$.e1 = suffixedWith;
  _.$_$.f1 = clip;
  _.$_$.g1 = modifyStyleBase;
  _.$_$.h1 = get_name_0;
  _.$_$.i1 = prepareSilkFoundation;
  _.$_$.j1 = Base_init_$Init$;
  _.$_$.k1 = RectF_init_$Create$_2;
  _.$_$.l1 = Companion_getInstance_9;
  _.$_$.m1 = Companion_getInstance_13;
  _.$_$.n1 = Blue_getInstance;
  _.$_$.o1 = Gray_getInstance;
  _.$_$.p1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
