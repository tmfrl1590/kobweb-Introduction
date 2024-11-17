(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(globalThis, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.q6;
  var initMetadataForObject = kotlin_kotlin.$_$.f6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var listOf = kotlin_kotlin.$_$.v3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var KProperty1 = kotlin_kotlin.$_$.a7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b6;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var initMetadataForClass = kotlin_kotlin.$_$.a6;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_instance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var mapCapacity = kotlin_kotlin.$_$.w3;
  var coerceAtLeast = kotlin_kotlin.$_$.t6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var toString = kotlin_kotlin.$_$.s6;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var KProperty0 = kotlin_kotlin.$_$.z6;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.y6;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.k2u_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().b2f();
    tmp.l2u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.m2u_1 = StyleVariable('silk');
    this.n2u_1 = StyleVariable('silk');
    this.o2u_1 = StyleVariable('silk');
    this.p2u_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp1_defaultFallback = get_px(2);
    tmp_0.q2u_1 = StyleVariable_0(tmp1_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp2_defaultFallback = TransitionDurationVars_getInstance().f2d().b2f();
    tmp_1.r2u_1 = StyleVariable_1(tmp2_defaultFallback, 'silk');
  }
  protoOf(TabVars).a2v = function () {
    return this.k2u_1.h2f(this, Color$factory());
  };
  protoOf(TabVars).b2v = function () {
    return this.l2u_1.h2f(this, BorderColor$factory());
  };
  protoOf(TabVars).c2v = function () {
    return this.m2u_1.h2f(this, BackgroundColor$factory());
  };
  protoOf(TabVars).d2v = function () {
    return this.n2u_1.h2f(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).e2v = function () {
    return this.o2u_1.h2f(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).f2v = function () {
    return this.p2u_1.h2f(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).g2v = function () {
    return this.q2u_1.h2f(this, BorderThickness$factory());
  };
  protoOf(TabVars).h2v = function () {
    return this.r2u_1.h2f(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().g2v().b2f();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().b2v().b2f());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.l18(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.m18();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.v2p(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.a2p(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.a2p(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.a2p(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.z2c()), Companion_instance_2.v2f(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().h2v().b2f())), TabVars_getInstance().c2v().b2f()), TabVars_getInstance().a2v().b2f()), Companion_instance_3.c2d()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().g2v().b2f();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().b2v().b2f());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.y2f(TabVars_getInstance().g2v().b2f());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().d2v().b2f()), Companion_instance_1.a2d());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().e2v().b2f());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().f2v().b2f());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.u2l(Companion_instance_4.s2e());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.a2v();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.b2v();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c2v();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.d2v();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.e2v();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.f2v();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.g2v();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.h2v();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.i2v_1 = StyleVariable('silk');
    var tmp = this;
    var tmp3_defaultFallback = get_FocusOutlineColorVar().b2f();
    tmp.j2v_1 = StyleVariable_0(tmp3_defaultFallback, 'silk');
    this.k2v_1 = StyleVariable('silk');
    this.l2v_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp4_defaultFallback = get_ColorVar().b2f();
    tmp_0.m2v_1 = StyleVariable_0(tmp4_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp5_defaultFallback = TransitionDurationVars_getInstance().f2d().b2f();
    tmp_1.n2v_1 = StyleVariable_1(tmp5_defaultFallback, 'silk');
    this.o2v_1 = StyleVariable('silk');
    this.p2v_1 = StyleVariable('silk');
    this.q2v_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).r2v = function () {
    return this.i2v_1.h2f(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).s2v = function () {
    return this.j2v_1.h2f(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).t2v = function () {
    return this.k2v_1.h2f(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).u2v = function () {
    return this.l2v_1.h2f(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).a2v = function () {
    return this.m2v_1.h2f(this, Color$factory_0());
  };
  protoOf(ButtonVars).h2v = function () {
    return this.n2v_1.h2f(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).v2v = function () {
    return this.o2v_1.h2f(this, FontSize$factory());
  };
  protoOf(ButtonVars).w2v = function () {
    return this.p2v_1.h2f(this, Height$factory());
  };
  protoOf(ButtonVars).x2v = function () {
    return this.q2v_1.h2f(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion() {
    Companion_instance_14 = this;
    this.y2v_1 = new ButtonSize(FontSizeVars_getInstance().g2w().b2f(), get_cssRem(1.5), get_cssRem(0.5));
    this.z2v_1 = new ButtonSize(FontSizeVars_getInstance().h2w().b2f(), get_cssRem(2), get_cssRem(0.75));
    this.a2w_1 = new ButtonSize(FontSizeVars_getInstance().i2w().b2f(), get_cssRem(2.5), get_cssRem(1));
    this.b2w_1 = new ButtonSize(FontSizeVars_getInstance().j2w().b2f(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_14;
  function Companion_getInstance_0() {
    if (Companion_instance_14 == null)
      new Companion();
    return Companion_instance_14;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_0();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().v2v(), fontSize), ButtonVars_getInstance().w2v(), height), ButtonVars_getInstance().x2v(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.v2p(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.a2p(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.a2p(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.a2p(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().a2v().b2f()), ButtonVars_getInstance().r2v().b2f()), 1.2), ButtonVars_getInstance().w2v().b2f()), ButtonVars_getInstance().w2v().b2f()), ButtonVars_getInstance().v2v().b2f()), Companion_instance_6.e2d()), Companion_instance_7.l2f()), VOID, ButtonVars_getInstance().x2v().b2f()), Companion_instance_8.j2e()), get_cssRem(0.375));
    return transition_0(userSelect(border(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.c2d()), [Companion_instance_2.t2f('background-color', ButtonVars_getInstance().h2v().b2f())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.s2l(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().t2v().b2f()), Companion_instance_1.z2c());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.b2l()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().s2v().b2f());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().u2v().b2f());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.r2v();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.s2v();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.t2v();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.u2v();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.a2v();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.h2v();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.v2v();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.w2v();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.x2v();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp6_defaultFallback = get_BorderColorVar().b2f();
    tmp.k2w_1 = StyleVariable_0(tmp6_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp7_defaultFallback = get_cssRem(0.125);
    tmp_0.l2w_1 = StyleVariable_0(tmp7_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp8_defaultFallback = get_cssRem(0.125);
    tmp_1.m2w_1 = StyleVariable_0(tmp8_defaultFallback, 'silk');
    this.n2w_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp9_defaultFallback = get_cssRem(0.5);
    tmp_2.o2w_1 = StyleVariable_0(tmp9_defaultFallback, 'silk');
    this.p2w_1 = StyleVariable('silk');
    this.q2w_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp10_defaultFallback = get_FocusOutlineColorVar().b2f();
    tmp_3.r2w_1 = StyleVariable_0(tmp10_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp11_defaultFallback = get_cssRem(0.1875);
    tmp_4.s2w_1 = StyleVariable_0(tmp11_defaultFallback, 'silk');
    this.t2w_1 = StyleVariable('silk');
    this.u2w_1 = StyleVariable('silk');
    this.v2w_1 = StyleVariable('silk');
    this.w2w_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp12_defaultFallback = TransitionDurationVars_getInstance().y2w().b2f();
    tmp_5.x2w_1 = StyleVariable_1(tmp12_defaultFallback, 'silk');
  }
  protoOf(CheckboxVars).b2v = function () {
    return this.k2w_1.h2f(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).z2w = function () {
    return this.l2w_1.h2f(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).a2x = function () {
    return this.m2w_1.h2f(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).b2x = function () {
    return this.n2w_1.h2f(this, Size$factory());
  };
  protoOf(CheckboxVars).c2x = function () {
    return this.o2w_1.h2f(this, Spacing$factory());
  };
  protoOf(CheckboxVars).v2v = function () {
    return this.p2w_1.h2f(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).d2x = function () {
    return this.q2w_1.h2f(this, IconSize$factory());
  };
  protoOf(CheckboxVars).e2x = function () {
    return this.r2w_1.h2f(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).f2x = function () {
    return this.s2w_1.h2f(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).g2x = function () {
    return this.t2w_1.h2f(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).h2x = function () {
    return this.u2w_1.h2f(this, IconColor$factory());
  };
  protoOf(CheckboxVars).i2x = function () {
    return this.v2w_1.h2f(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).j2x = function () {
    return this.w2w_1.h2f(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).k2x = function () {
    return this.x2w_1.h2f(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_0() {
    Companion_instance_15 = this;
    this.l2x_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().h2w().b2f());
    this.m2x_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().i2w().b2f());
    this.n2x_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().j2w().b2f());
  }
  var Companion_instance_15;
  function Companion_getInstance_1() {
    if (Companion_instance_15 == null)
      new Companion_0();
    return Companion_instance_15;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().b2x(), boxSize), CheckboxVars_getInstance().d2x(), iconSize), CheckboxVars_getInstance().v2v(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.v2p(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().c2x().b2f()), Companion_instance_3.c2d()), CheckboxVars_getInstance().v2v().b2f()), Companion_instance_1.z2c());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.b2r(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.c2r(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.v2p(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().d2x().b2f()), CheckboxVars_getInstance().b2x().b2f());
    var tmp_0 = CheckboxVars_getInstance().a2x().b2f();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().b2v().b2f()), CheckboxVars_getInstance().z2w().b2f()), Companion_instance_2.v2f(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().k2x().b2f()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().g2x().b2f());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.v2p(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().i2x().b2f());
    return border(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.q2l(CheckboxVars_getInstance().i2x().b2f());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().b2x().b2f()), CheckboxVars_getInstance().h2x().b2f());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.v2p(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.l2q(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.l2q(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().f2x().b2f(), CheckboxVars_getInstance().e2x().b2f());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().i2x(), CheckboxVars_getInstance().j2x().b2f());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.b2v();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.z2w();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.a2x();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.b2x();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.c2x();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.v2v();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.d2x();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.e2x();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.f2x();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.g2x();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.h2x();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i2x();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.j2x();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.k2x();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp15_defaultFallback = get_BorderColorVar().b2f();
    tmp.o2x_1 = StyleVariable_0(tmp15_defaultFallback, 'silk');
    this.p2x_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp16_defaultFallback = get_FocusOutlineColorVar().b2f();
    tmp_0.q2x_1 = StyleVariable_0(tmp16_defaultFallback, 'silk');
    this.r2x_1 = StyleVariable('silk');
    this.s2x_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp17_defaultFallback = TransitionDurationVars_getInstance().f2d().b2f();
    tmp_1.t2x_1 = StyleVariable_1(tmp17_defaultFallback, 'silk');
    this.u2x_1 = StyleVariable('silk');
    this.v2x_1 = StyleVariable('silk');
    this.w2x_1 = StyleVariable('silk');
    this.x2x_1 = StyleVariable('silk');
    this.y2x_1 = StyleVariable('silk');
    this.z2x_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp18_defaultFallback = get_PlaceholderOpacityVar().b2f();
    tmp_2.a2y_1 = StyleVariable_2(tmp18_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp19_defaultFallback = get_PlaceholderColorVar().b2f();
    tmp_3.b2y_1 = StyleVariable_0(tmp19_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp20_defaultFallback = get_cssRem(2.25);
    tmp_4.c2y_1 = StyleVariable_0(tmp20_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp21_defaultFallback = get_cssRem(2.25);
    tmp_5.d2y_1 = StyleVariable_0(tmp21_defaultFallback, 'silk');
  }
  protoOf(InputVars).b2v = function () {
    return this.o2x_1.h2f(this, BorderColor$factory_1());
  };
  protoOf(InputVars).z2w = function () {
    return this.p2x_1.h2f(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).e2y = function () {
    return this.q2x_1.h2f(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).f2y = function () {
    return this.r2x_1.h2f(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).g2y = function () {
    return this.s2x_1.h2f(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).h2v = function () {
    return this.t2x_1.h2f(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).h2y = function () {
    return this.u2x_1.h2f(this, FilledColor$factory());
  };
  protoOf(InputVars).i2y = function () {
    return this.v2x_1.h2f(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).j2y = function () {
    return this.w2x_1.h2f(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).v2v = function () {
    return this.x2x_1.h2f(this, FontSize$factory_1());
  };
  protoOf(InputVars).w2v = function () {
    return this.y2x_1.h2f(this, Height$factory_0());
  };
  protoOf(InputVars).k2y = function () {
    return this.z2x_1.h2f(this, Padding$factory());
  };
  protoOf(InputVars).l2y = function () {
    return this.a2y_1.h2f(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).m2y = function () {
    return this.b2y_1.h2f(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().k2y().b2f();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_1() {
    Companion_instance_16 = this;
    this.n2y_1 = new InputSize(FontSizeVars_getInstance().g2w().b2f(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().g2w().b2f());
    this.o2y_1 = new InputSize(FontSizeVars_getInstance().h2w().b2f(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().h2w().b2f());
    this.p2y_1 = new InputSize(FontSizeVars_getInstance().i2w().b2f(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().i2w().b2f());
    this.q2y_1 = new InputSize(FontSizeVars_getInstance().j2w().b2f(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().i2w().b2f());
  }
  var Companion_instance_16;
  function Companion_getInstance_2() {
    if (Companion_instance_16 == null)
      new Companion_1();
    return Companion_instance_16;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().v2v(), fontSize), InputVars_getInstance().w2v(), height), InputVars_getInstance().k2y(), padding), InputVars_getInstance().z2w(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.b2l());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.b2l()), InputVars_getInstance().z2w().b2f()), InputVars_getInstance().v2v().b2f());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.v2p(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.a2p(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_10.c2d()), get_ColorVar().b2f()), InputVars_getInstance().w2v().b2f()), InputVars_getInstance().v2v().b2f()), Colors_instance.b2l());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.b2l());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border_0(tmp_1, tmp_2, 'solid', Colors_instance.b2l()), Companion_instance_2.v2f(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().h2v().b2f()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().l2y().b2f()), InputVars_getInstance().m2y().b2f());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.v2p(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.a2p(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.a2p(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2p(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().z2w().b2f());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().b2v().b2f());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().g2y().b2f());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.q2l(InputVars_getInstance().f2y().b2f());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().e2y().b2f());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.v2p(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.a2p(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.a2p(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2p(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().h2y().b2f()), InputVars_getInstance().z2w().b2f());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.b2l());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().i2y().b2f());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().g2y().b2f());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().j2y().b2f()), InputVars_getInstance().e2y().b2f());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.q2l($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.v2p(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.a2p(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.a2p(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2p(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2p(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().b2v().b2f());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().g2y().b2f());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.q2l(InputVars_getInstance().f2y().b2f());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().e2y().b2f());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.q2l($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.b2v();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.z2w();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.e2y();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.f2y();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.g2y();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.h2v();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.h2y();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.i2y();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.j2y();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.v2v();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.w2v();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.k2y();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.l2y();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.m2y();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.r2e()), Companion_instance_7.l2f());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp33_defaultFallback = get_px(9999);
    tmp.v2y_1 = StyleVariable_0(tmp33_defaultFallback, 'silk');
    this.w2y_1 = StyleVariable('silk');
    this.x2y_1 = StyleVariable('silk');
    this.y2y_1 = StyleVariable('silk');
    this.z2y_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp34_defaultFallback = get_FocusOutlineColorVar().b2f();
    tmp_0.a2z_1 = StyleVariable_0(tmp34_defaultFallback, 'silk');
    this.b2z_1 = StyleVariable('silk');
    this.c2z_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp35_defaultFallback = TransitionDurationVars_getInstance().e2z().b2f();
    tmp_1.d2z_1 = StyleVariable_1(tmp35_defaultFallback, 'silk');
  }
  protoOf(SwitchVars).z2w = function () {
    return this.v2y_1.h2f(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).f2z = function () {
    return this.w2y_1.h2f(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).g2z = function () {
    return this.x2y_1.h2f(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).h2z = function () {
    return this.y2y_1.h2f(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).i2z = function () {
    return this.z2y_1.h2f(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).j2z = function () {
    return this.a2z_1.h2f(this, FocusColor$factory());
  };
  protoOf(SwitchVars).k2z = function () {
    return this.b2z_1.h2f(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).l2z = function () {
    return this.c2z_1.h2f(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).k2x = function () {
    return this.d2z_1.h2f(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_2() {
    Companion_instance_17 = this;
    this.m2z_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.n2z_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.o2z_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_17;
  function Companion_getInstance_3() {
    if (Companion_instance_17 == null)
      new Companion_2();
    return Companion_instance_17;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_3();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().f2z(), width), SwitchVars_getInstance().g2z(), height), SwitchVars_getInstance().h2z(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.v2p(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).j2p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.a2p(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().f2z().b2f()), SwitchVars_getInstance().f2z().b2f()), SwitchVars_getInstance().g2z().b2f()), SwitchVars_getInstance().g2z().b2f()), SwitchVars_getInstance().h2z().b2f()), SwitchVars_getInstance().z2w().b2f()), SwitchVars_getInstance().i2z().b2f()), [Companion_instance_2.t2f('background-color', SwitchVars_getInstance().k2x().b2f())]), Companion_instance_11.t2c());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.z2c());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.v2p(SwitchInputVariant$lambda$lambda);
    $this$addVariant.l2q(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().j2z().b2f());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().g2z().b2f()), SwitchVars_getInstance().z2w().b2f()), SwitchVars_getInstance().l2z().b2f()), SwitchVars_getInstance().k2z().b2f()), [Companion_instance_2.t2f('translate', SwitchVars_getInstance().k2x().b2f())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.z2w();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.f2z();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.g2z();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.h2z();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i2z();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.j2z();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.k2z();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.l2z();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.k2x();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
    }
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp43_defaultFallback = get_BorderColorVar().b2f();
    tmp.p2z_1 = StyleVariable_0(tmp43_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp44_defaultFallback = get_percent(90);
    tmp_0.q2z_1 = StyleVariable_0(tmp44_defaultFallback, 'silk');
  }
  protoOf(DividerVars).a2v = function () {
    return this.p2z_1.h2f(this, Color$factory_1());
  };
  protoOf(DividerVars).r2z = function () {
    return this.q2z_1.h2f(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(-490066360);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.g10(variant_0._v) ? 32 : 16);
    if (!(($default & 1) === 1) || (!(($dirty & 91) === 18) || !$composer_0.i18())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, 6).v2j(modifier_0._v)), $composer_0, 0, 0);
    } else {
      $composer_0.z12();
    }
    var tmp0_safe_receiver = $composer_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().a2v().b2f()), DividerVars_getInstance().r2z().b2f());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().a2v().b2f()), DividerVars_getInstance().r2z().b2f());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.a2v();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.r2z();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.v2p(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().a2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.t1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.u1();
      $this$CssStyle.m2q(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.n2d(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.b2f();
      $this$gridTemplateColumns.j2d(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.e2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.u4(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp45_defaultFallback = get_BackgroundColorVar().b2f();
    tmp.s2z_1 = StyleVariable_0(tmp45_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp46_defaultFallback = get_ColorVar().b2f();
    tmp_0.t2z_1 = StyleVariable_0(tmp46_defaultFallback, 'silk');
  }
  protoOf(SurfaceVars).c2v = function () {
    return this.s2z_1.h2f(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).a2v = function () {
    return this.t2z_1.h2f(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.v2p(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().c2v().b2f()), SurfaceVars_getInstance().a2v().b2f());
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c2v();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.a2v();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.u2z_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).c2v = function () {
    return this.u2z_1.h2f(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().c2v().b2f());
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c2v();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp55_defaultFallback = TransitionDurationVars_getInstance().e2z().b2f();
    tmp.v2z_1 = StyleVariable_1(tmp55_defaultFallback, 'silk');
  }
  protoOf(PopupVars).k2x = function () {
    return this.v2z_1.h2f(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.t2f('opacity', PopupVars_getInstance().k2x().b2f())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.k2x();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.w2z_1 = StyleVariable('silk');
    this.x2z_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).c2v = function () {
    return this.w2z_1.h2f(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).a2v = function () {
    return this.x2z_1.h2f(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().c2v().b2f()), TooltipVars_getInstance().a2v().b2f()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.s2l(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.r2l('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp58_left = get_TRIANGLE_WIDTH_2X();
    var tmp59_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp59_top, VOID, VOID, tmp58_left), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp61_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp62_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp62_top, VOID, VOID, tmp61_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp64_right = get_TRIANGLE_WIDTH_2X();
    var tmp65_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp65_top, tmp64_right), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().c2v().b2f());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().c2v().b2f());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp67_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp68_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp68_right, tmp67_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp70_left = get_TRIANGLE_WIDTH_2X();
    var tmp71_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp71_bottom, tmp70_left), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp73_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp74_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp74_bottom, tmp73_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().c2v().b2f());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.d28('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.d28('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.d28('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.d28('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c2v();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.a2v();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.n2m_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.n2m_1.k2n_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().w2s_1.y2k().x2k(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().g2t_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.c2l();
    set_background(this_0.l2t_1, Colors_instance.n2l());
    set_color(this_0.l2t_1, color);
    set_border(this_0.l2t_1, color.x2k(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.l2t_1, focusOutline);
    set_overlay(this_0.l2t_1, color.x2k(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.l2t_1, placeholder);
    var buttonBase = Colors_instance.n2l().u2k(0.2);
    get_button_0(this_0.l2t_1).e30(buttonBase, buttonBase.u2k(0.2), Colors_instance.e2l(), buttonBase.u2k(0.4));
    get_checkbox_0(this_0.l2t_1).k30(Blue_getInstance().w2s_1, Blue_getInstance().x2s_1, Colors_instance.n2l());
    var inputFilled = Gray_getInstance().d2t_1;
    var tmp76_$this = get_input_0(this_0.l2t_1);
    var tmp77_filledFocus = Colors_instance.b2l();
    var tmp78_hoveredBorder = Gray_getInstance().g2t_1;
    var tmp79_invalidBorder = Red_getInstance().q2s_1;
    var tmp80_filledHover = inputFilled.u2k(0.1);
    tmp76_$this.s30(tmp78_hoveredBorder, tmp79_invalidBorder, inputFilled, tmp80_filledHover, tmp77_filledFocus);
    var tmp81_$this = get_switch_0(this_0.l2t_1);
    var tmp82_thumb = Colors_instance.n2l();
    var tmp83_backgroundOn = Colors_instance.i2l();
    var tmp84_backgroundOff = Colors_instance.j2l();
    tmp81_$this.k30(tmp83_backgroundOn, tmp84_backgroundOff, tmp82_thumb);
    get_tab_0(this_0.l2t_1).i31(Colors_instance.c2l(), Colors_instance.n2l(), Colors_instance.e2l(), VOID, VOID, Colors_instance.j2l(), Colors_instance.o2l(), Colors_instance.n2l());
    get_tooltip_0(this_0.l2t_1).n31(get_color_0(this_0.l2t_1), get_background_0(this_0.l2t_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.n2l();
    set_background(this_0.m2t_1, Colors_instance.c2l());
    set_color(this_0.m2t_1, color_0);
    set_border(this_0.m2t_1, color_0.x2k(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.m2t_1, focusOutline);
    set_overlay(this_0.m2t_1, color_0.x2k(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.m2t_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.c2l(), 0.2);
    get_button_0(this_0.m2t_1).e30(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.k2l(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.m2t_1).k30(Blue_getInstance().t2s_1, Blue_getInstance().u2s_1, Colors_instance.c2l());
    var inputFilled_0 = Gray_getInstance().k2t_1;
    var tmp85_$this = get_input_0(this_0.m2t_1);
    var tmp86_filledFocus = Colors_instance.b2l();
    var tmp87_hoveredBorder = Gray_getInstance().h2t_1;
    var tmp88_invalidBorder = Red_getInstance().k2s_1;
    var tmp89_filledHover = lightened(inputFilled_0, 0.1);
    tmp85_$this.s30(tmp87_hoveredBorder, tmp88_invalidBorder, inputFilled_0, tmp89_filledHover, tmp86_filledFocus);
    var tmp90_$this = get_switch_0(this_0.m2t_1);
    var tmp91_thumb = Colors_instance.n2l();
    var tmp92_backgroundOn = Colors_instance.k2l();
    var tmp93_backgroundOff = Colors_instance.g2l();
    tmp90_$this.k30(tmp92_backgroundOn, tmp93_backgroundOff, tmp91_thumb);
    get_tab_0(this_0.m2t_1).i31(Colors_instance.n2l(), Colors_instance.c2l(), Colors_instance.k2l(), VOID, VOID, Colors_instance.h2l(), Colors_instance.g2l(), Colors_instance.c2l());
    get_tooltip_0(this_0.m2t_1).n31(get_color_0(this_0.m2t_1), get_background_0(this_0.m2t_1));
    mutableTheme.n2n('silk-colors', get_SilkColorsStyle());
    mutableTheme.m2n('silk-input', get_InputStyle());
    mutableTheme.x2r('-outlined', get_OutlinedInputVariant());
    mutableTheme.x2r('-filled', get_FilledInputVariant());
    mutableTheme.x2r('-flushed', get_FlushedInputVariant());
    mutableTheme.x2r('-unstyled', get_UnstyledInputVariant());
    mutableTheme.m2n('silk-input-group', get_InputGroupStyle());
    mutableTheme.n2n('silk-disabled', get_DisabledStyle());
    mutableTheme.n2n('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.m2n('silk-button', get_ButtonStyle());
    mutableTheme.m2n('silk-canvas', get_CanvasStyle());
    mutableTheme.m2n('silk-checkbox', get_CheckboxStyle());
    mutableTheme.x2r('-checkbox', get_CheckboxInputVariant());
    mutableTheme.m2n('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.m2n('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.x2r('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.x2r('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.m2n('silk-overlay', get_OverlayStyle());
    mutableTheme.m2n('silk-popup', get_PopupStyle());
    mutableTheme.m2n('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.m2n('silk-surface', get_SurfaceStyle());
    mutableTheme.m2n('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.m2n('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.m2n('silk-switch', get_SwitchStyle());
    mutableTheme.m2n('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.m2n('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.x2r('-switch', get_SwitchInputVariant());
    mutableTheme.m2n('silk-tabs', get_TabsStyle());
    mutableTheme.m2n('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.m2n('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.m2n('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.m2n('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.x2r('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.x2r('-top', get_TopTooltipArrowVariant());
    mutableTheme.x2r('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.x2r('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.x2r('-left', get_LeftTooltipArrowVariant());
    mutableTheme.x2r('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.x2r('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.x2r('-right', get_RightTooltipArrowVariant());
    mutableTheme.x2r('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.x2r('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.x2r('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.x2r('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.m2n('silk-tooltip', get_TooltipStyle());
    mutableTheme.m2n('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.y2r('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.q2r('silk-button-size_xs', Companion_getInstance_0().y2v_1);
    mutableTheme.q2r('silk-button-size_sm', Companion_getInstance_0().z2v_1);
    mutableTheme.q2r('silk-button-size_md', Companion_getInstance_0().a2w_1);
    mutableTheme.q2r('silk-button-size_lg', Companion_getInstance_0().b2w_1);
    mutableTheme.q2r('silk-checkbox-size_sm', Companion_getInstance_1().l2x_1);
    mutableTheme.q2r('silk-checkbox-size_md', Companion_getInstance_1().m2x_1);
    mutableTheme.q2r('silk-checkbox-size_lg', Companion_getInstance_1().n2x_1);
    mutableTheme.q2r('silk-input-size_xs', Companion_getInstance_2().n2y_1);
    mutableTheme.q2r('silk-input-size_sm', Companion_getInstance_2().o2y_1);
    mutableTheme.q2r('silk-input-size_md', Companion_getInstance_2().p2y_1);
    mutableTheme.q2r('silk-input-size_lg', Companion_getInstance_2().q2y_1);
    mutableTheme.q2r('silk-switch-size_sm', Companion_getInstance_3().m2z_1);
    mutableTheme.q2r('silk-switch-size_md', Companion_getInstance_3().n2z_1);
    mutableTheme.q2r('silk-switch-size_lg', Companion_getInstance_3().o2z_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(-938405995);
    $composer_0.l18(-436032111);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.p19();
    var tmp;
    if (false || it === Companion_getInstance().f13_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.v19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.m18();
    var root = tmp0_group;
    setSilkWidgetVariables_0(root, $composer_0, 8);
    var tmp1_safe_receiver = $composer_0.e1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.e1f(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(1180012187);
    setSilkWidgetVariables_1(_this__u8e3s4, Companion_instance_13.r2q($composer_0, 8));
    var tmp0_safe_receiver = $composer_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.u2q())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.n2q_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().r2v(), get_button(palette).o31()), ButtonVars_getInstance().t2v(), get_button(palette).i29()), ButtonVars_getInstance().u2v(), get_button(palette).p31()), CheckboxVars_getInstance().i2x(), get_checkbox(palette).q31()), CheckboxVars_getInstance().j2x(), get_checkbox(palette).i29()), CheckboxVars_getInstance().h2x(), get_checkbox(palette).r31()), InputVars_getInstance().f2y(), get_input(palette).s31()), InputVars_getInstance().g2y(), get_input(palette).t31()), InputVars_getInstance().h2y(), get_input(palette).u31()), InputVars_getInstance().i2y(), get_input(palette).v31()), InputVars_getInstance().j2y(), get_input(palette).w31()), OverlayVars_getInstance().c2v(), get_overlay(palette)), SwitchVars_getInstance().l2z(), get_switch(palette).x31()), TabVars_getInstance().a2v(), get_tab(palette).r31()), TabVars_getInstance().c2v(), get_tab(palette).q31()), TabVars_getInstance().d2v(), get_tab(palette).y31()), TabVars_getInstance().e2v(), get_tab(palette).i29()), TabVars_getInstance().f2v(), get_tab(palette).p31()), TooltipVars_getInstance().c2v(), get_tooltip(palette).q31()), TooltipVars_getInstance().a2v(), get_tooltip(palette).r31());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.h2f(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.l18(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.m18();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.a2d());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.t2f('background-color', get_SmoothColorTransitionDurationVar().b2f())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp94_defaultFallback = TransitionDurationVars_getInstance().f2d().b2f();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp94_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp95_defaultFallback = get_ms(0);
    tmp.s2u_1 = StyleVariable_1(tmp95_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp96_defaultFallback = get_ms(50);
    tmp_0.t2u_1 = StyleVariable_1(tmp96_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp97_defaultFallback = get_ms(100);
    tmp_1.u2u_1 = StyleVariable_1(tmp97_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp98_defaultFallback = get_ms(150);
    tmp_2.v2u_1 = StyleVariable_1(tmp98_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp99_defaultFallback = get_ms(200);
    tmp_3.w2u_1 = StyleVariable_1(tmp99_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp100_defaultFallback = get_ms(300);
    tmp_4.x2u_1 = StyleVariable_1(tmp100_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp101_defaultFallback = get_ms(400);
    tmp_5.y2u_1 = StyleVariable_1(tmp101_defaultFallback, 'silk');
    var tmp_6 = this;
    var tmp102_defaultFallback = get_ms(500);
    tmp_6.z2u_1 = StyleVariable_1(tmp102_defaultFallback, 'silk');
  }
  protoOf(TransitionDurationVars).y2w = function () {
    return this.u2u_1.h2f(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).e2z = function () {
    return this.v2u_1.h2f(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).f2d = function () {
    return this.w2u_1.h2f(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.y2w();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.e2z();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.f2d();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.h2f(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.h2f(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.h2f(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.h2f(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.h2f(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.h2f(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp107_defaultFallback = get_cssRem(0.75);
    tmp.c2w_1 = StyleVariable_0(tmp107_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp108_defaultFallback = get_cssRem(0.875);
    tmp_0.d2w_1 = StyleVariable_0(tmp108_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp109_defaultFallback = get_cssRem(1);
    tmp_1.e2w_1 = StyleVariable_0(tmp109_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp110_defaultFallback = get_cssRem(1.125);
    tmp_2.f2w_1 = StyleVariable_0(tmp110_defaultFallback, 'silk');
  }
  protoOf(FontSizeVars).g2w = function () {
    return this.c2w_1.h2f(this, XS$factory());
  };
  protoOf(FontSizeVars).h2w = function () {
    return this.d2w_1.h2f(this, SM$factory());
  };
  protoOf(FontSizeVars).i2w = function () {
    return this.e2w_1.h2f(this, MD$factory());
  };
  protoOf(FontSizeVars).j2w = function () {
    return this.f2w_1.h2f(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp103_defaultFallback = get_cssRem(0.125);
    tmp.r2y_1 = StyleVariable_0(tmp103_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp104_defaultFallback = get_cssRem(0.25);
    tmp_0.s2y_1 = StyleVariable_0(tmp104_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp105_defaultFallback = get_cssRem(0.375);
    tmp_1.t2y_1 = StyleVariable_0(tmp105_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp106_defaultFallback = get_cssRem(0.5);
    tmp_2.u2y_1 = StyleVariable_0(tmp106_defaultFallback, 'silk');
  }
  protoOf(BorderRadiusVars).g2w = function () {
    return this.r2y_1.h2f(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).h2w = function () {
    return this.s2y_1.h2f(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).i2w = function () {
    return this.t2y_1.h2f(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.g2w();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.h2w();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.i2w();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.j2w();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.g2w();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.h2w();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.i2w();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.a30_1 = this.y2t();
    this.b30_1 = this.y2t();
    this.c30_1 = this.y2t();
    this.d30_1 = this.y2t();
  }
  protoOf(MutableButton).z31 = function (_set____db54di) {
    return this.a30_1.v2t(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).o31 = function () {
    return this.a30_1.h2f(this, default$factory_0());
  };
  protoOf(MutableButton).a32 = function (_set____db54di) {
    return this.b30_1.v2t(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).i29 = function () {
    return this.b30_1.h2f(this, hover$factory_0());
  };
  protoOf(MutableButton).b32 = function (_set____db54di) {
    return this.c30_1.v2t(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).c32 = function () {
    return this.c30_1.h2f(this, focus$factory_0());
  };
  protoOf(MutableButton).d32 = function (_set____db54di) {
    return this.d30_1.v2t(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).p31 = function () {
    return this.d30_1.h2f(this, pressed$factory_0());
  };
  protoOf(MutableButton).e30 = function (default_0, hover, focus, pressed) {
    this.z31(default_0);
    this.a32(hover);
    this.b32(focus);
    this.d32(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.h30_1 = this.y2t();
    this.i30_1 = this.y2t();
    this.j30_1 = this.y2t();
  }
  protoOf(MutableCheckbox).e32 = function (_set____db54di) {
    return this.h30_1.v2t(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).q31 = function () {
    return this.h30_1.h2f(this, background$factory_0());
  };
  protoOf(MutableCheckbox).a32 = function (_set____db54di) {
    return this.i30_1.v2t(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).i29 = function () {
    return this.i30_1.h2f(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).f32 = function (_set____db54di) {
    return this.j30_1.v2t(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).r31 = function () {
    return this.j30_1.h2f(this, color$factory_0());
  };
  protoOf(MutableCheckbox).k30 = function (background, hover, color) {
    this.e32(background);
    this.a32(hover);
    this.f32(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.n30_1 = this.y2t();
    this.o30_1 = this.y2t();
    this.p30_1 = this.y2t();
    this.q30_1 = this.y2t();
    this.r30_1 = this.y2t();
  }
  protoOf(MutableInput).g32 = function (_set____db54di) {
    return this.n30_1.v2t(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).s31 = function () {
    return this.n30_1.h2f(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).h32 = function (_set____db54di) {
    return this.o30_1.v2t(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).t31 = function () {
    return this.o30_1.h2f(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).i32 = function (_set____db54di) {
    return this.p30_1.v2t(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).u31 = function () {
    return this.p30_1.h2f(this, filled$factory_0());
  };
  protoOf(MutableInput).j32 = function (_set____db54di) {
    return this.q30_1.v2t(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).v31 = function () {
    return this.q30_1.h2f(this, filledHover$factory_0());
  };
  protoOf(MutableInput).k32 = function (_set____db54di) {
    return this.r30_1.v2t(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).w31 = function () {
    return this.r30_1.h2f(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).s30 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.g32(hoveredBorder);
    this.h32(invalidBorder);
    this.i32(filled);
    this.j32(filledHover);
    this.k32(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.v30_1 = this.y2t();
    this.w30_1 = this.y2t();
    this.x30_1 = this.y2t();
  }
  protoOf(MutableSwitch).l32 = function (_set____db54di) {
    return this.v30_1.v2t(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).m32 = function () {
    return this.v30_1.h2f(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).n32 = function (_set____db54di) {
    return this.w30_1.v2t(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).o32 = function () {
    return this.w30_1.h2f(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).p32 = function (_set____db54di) {
    return this.x30_1.v2t(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).x31 = function () {
    return this.x30_1.h2f(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).k30 = function (backgroundOn, backgroundOff, thumb) {
    this.l32(backgroundOn);
    this.n32(backgroundOff);
    this.p32(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.a31_1 = this.y2t();
    this.b31_1 = this.y2t();
    this.c31_1 = this.y2t();
    this.d31_1 = this.y2t();
    this.e31_1 = this.y2t();
    this.f31_1 = this.y2t();
    this.g31_1 = this.y2t();
    this.h31_1 = this.y2t();
  }
  protoOf(MutableTab).f32 = function (_set____db54di) {
    return this.a31_1.v2t(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).r31 = function () {
    return this.a31_1.h2f(this, color$factory_2());
  };
  protoOf(MutableTab).e32 = function (_set____db54di) {
    return this.b31_1.v2t(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).q31 = function () {
    return this.b31_1.h2f(this, background$factory_2());
  };
  protoOf(MutableTab).q32 = function (_set____db54di) {
    return this.c31_1.v2t(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).r32 = function () {
    return this.c31_1.h2f(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).s32 = function (_set____db54di) {
    return this.d31_1.v2t(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).t32 = function () {
    return this.d31_1.h2f(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).u32 = function (_set____db54di) {
    return this.e31_1.v2t(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).v32 = function () {
    return this.e31_1.h2f(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).a32 = function (_set____db54di) {
    return this.f31_1.v2t(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).i29 = function () {
    return this.f31_1.h2f(this, hover$factory_4());
  };
  protoOf(MutableTab).d32 = function (_set____db54di) {
    return this.g31_1.v2t(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).p31 = function () {
    return this.g31_1.h2f(this, pressed$factory_2());
  };
  protoOf(MutableTab).w32 = function (_set____db54di) {
    return this.h31_1.v2t(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).y31 = function () {
    return this.h31_1.h2f(this, disabled$factory_0());
  };
  protoOf(MutableTab).x32 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.f32(color);
    this.e32(background);
    this.q32(selectedColor);
    this.s32(selectedBackground);
    this.u32(selectedBorder);
    this.a32(hover);
    this.d32(pressed);
    this.w32(disabled);
  };
  protoOf(MutableTab).i31 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.x32(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.x32.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.l31_1 = this.y2t();
    this.m31_1 = this.y2t();
  }
  protoOf(MutableTooltip).e32 = function (_set____db54di) {
    return this.l31_1.v2t(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).q31 = function () {
    return this.l31_1.h2f(this, background$factory_4());
  };
  protoOf(MutableTooltip).f32 = function (_set____db54di) {
    return this.m31_1.v2t(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).r31 = function () {
    return this.m31_1.h2f(this, color$factory_4());
  };
  protoOf(MutableTooltip).n31 = function (background, color) {
    this.e32(background);
    this.f32(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r2t('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z2t('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o31();
    }, function (receiver, value) {
      return receiver.z31(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o31();
    }, function (receiver, value) {
      return receiver.z31(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c32();
    }, function (receiver, value) {
      return receiver.b32(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c32();
    }, function (receiver, value) {
      return receiver.b32(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p31();
    }, function (receiver, value) {
      return receiver.d32(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p31();
    }, function (receiver, value) {
      return receiver.d32(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s31();
    }, function (receiver, value) {
      return receiver.g32(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s31();
    }, function (receiver, value) {
      return receiver.g32(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t31();
    }, function (receiver, value) {
      return receiver.h32(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t31();
    }, function (receiver, value) {
      return receiver.h32(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u31();
    }, function (receiver, value) {
      return receiver.i32(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u31();
    }, function (receiver, value) {
      return receiver.i32(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v31();
    }, function (receiver, value) {
      return receiver.j32(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v31();
    }, function (receiver, value) {
      return receiver.j32(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w31();
    }, function (receiver, value) {
      return receiver.k32(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w31();
    }, function (receiver, value) {
      return receiver.k32(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.m32();
    }, function (receiver, value) {
      return receiver.l32(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.m32();
    }, function (receiver, value) {
      return receiver.l32(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.o32();
    }, function (receiver, value) {
      return receiver.n32(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.o32();
    }, function (receiver, value) {
      return receiver.n32(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x31();
    }, function (receiver, value) {
      return receiver.p32(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x31();
    }, function (receiver, value) {
      return receiver.p32(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.r32();
    }, function (receiver, value) {
      return receiver.q32(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.r32();
    }, function (receiver, value) {
      return receiver.q32(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.t32();
    }, function (receiver, value) {
      return receiver.s32(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.t32();
    }, function (receiver, value) {
      return receiver.s32(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.v32();
    }, function (receiver, value) {
      return receiver.u32(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.v32();
    }, function (receiver, value) {
      return receiver.u32(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i29();
    }, function (receiver, value) {
      return receiver.a32(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p31();
    }, function (receiver, value) {
      return receiver.d32(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p31();
    }, function (receiver, value) {
      return receiver.d32(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y31();
    }, function (receiver, value) {
      return receiver.w32(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y31();
    }, function (receiver, value) {
      return receiver.w32(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q31();
    }, function (receiver, value) {
      return receiver.e32(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r31();
    }, function (receiver, value) {
      return receiver.f32(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HorizontalDivider;
  _.$_$.b = get_SilkColorsStyle;
  _.$_$.c = initSilkWidgets;
  _.$_$.d = setSilkWidgetVariables;
  _.$_$.e = get_SmoothColorStyle;
  _.$_$.f = get_BorderColorVar;
  _.$_$.g = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
