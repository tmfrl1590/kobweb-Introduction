(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-silk-foundation'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ac;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var initMetadataForInterface = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.f;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var initMetadataForObject = kotlin_kotlin.$_$.cb;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var listOf = kotlin_kotlin.$_$.v7;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ua;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i6;
  var mapCapacity = kotlin_kotlin.$_$.w7;
  var coerceAtLeast = kotlin_kotlin.$_$.fc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var toString = kotlin_kotlin.$_$.cc;
  var THROW_CCE = kotlin_kotlin.$_$.bf;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.oc;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var KMutableProperty1 = kotlin_kotlin.$_$.nc;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(TabRow, 'TabRow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Tab, 'Tab', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Panel, 'Panel', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TabsKind, 'TabsKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForInterface(ButtonKind, 'ButtonKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForInterface(Container, 'Container', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Icon, 'Icon', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(CheckboxKind, 'CheckboxKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForInterface(InputKind, 'InputKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(InputGroupKind, 'InputGroupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForInterface(Track, 'Track', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Thumb, 'Thumb', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SwitchKind, 'SwitchKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForInterface(CanvasKind, 'CanvasKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(VerticalDividerKind, 'VerticalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(HorizontalDividerKind, 'HorizontalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForInterface(SimpleGridKind, 'SimpleGridKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SurfaceKind, 'SurfaceKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForInterface(OverlayKind, 'OverlayKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForInterface(PopupKind, 'PopupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForInterface(Arrow, 'Arrow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TextContainer, 'TextContainer', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TooltipKind, 'TooltipKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForInterface(Button, 'Button');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup, [ColorGroup, Button]);
  initMetadataForInterface(Checkbox, 'Checkbox');
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup, [ColorGroup, Checkbox]);
  initMetadataForInterface(Input, 'Input');
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup, [ColorGroup, Input]);
  initMetadataForInterface(Switch, 'Switch');
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup, [ColorGroup, Switch]);
  initMetadataForInterface(Tab_0, 'Tab');
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup, [ColorGroup, Tab_0]);
  initMetadataForInterface(Tooltip, 'Tooltip');
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup, [ColorGroup, Tooltip]);
  initMetadataForObject(SilkWidgetColorGroups, 'SilkWidgetColorGroups');
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
  function TabRow() {
  }
  function Tab() {
  }
  function Panel() {
  }
  function TabsKind() {
  }
  function TabVars() {
    TabVars_instance = this;
    this.Color$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar_0().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.DisabledBackgroundColor$delegate_1 = StyleVariable('silk');
    this.HoverBackgroundColor$delegate_1 = StyleVariable('silk');
    this.PressedBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp1_defaultFallback = get_px(2);
    tmp_0.BorderThickness$delegate_1 = StyleVariable_0(tmp1_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp2_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp2_defaultFallback, 'silk');
  }
  protoOf(TabVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory());
  };
  protoOf(TabVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory());
  };
  protoOf(TabVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory());
  };
  protoOf(TabVars).get_DisabledBackgroundColor_cqusog_k$ = function () {
    return this.DisabledBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).get_HoverBackgroundColor_uy6r32_k$ = function () {
    return this.HoverBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).get_PressedBackgroundColor_ow7ud8_k$ = function () {
    return this.PressedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).get_BorderThickness_psvqzl_k$ = function () {
    return this.BorderThickness$delegate_1.getValue_fbnwi2_k$(this, BorderThickness$factory());
  };
  protoOf(TabVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_getInstance();
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_getInstance());
    var tmp_0 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(2044107546);
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.base_y8uu8g_k$(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.invoke_ts7809_k$(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.invoke_ts7809_k$(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.invoke_ts7809_k$(TabsTabStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$()), Companion_getInstance_2().group$default_365z6n_k$(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())), TabVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TabVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.unaryMinus_d2gf0y_k$(TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$().value$default_36t2hw_k$());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.y_9zjijb_k$(Companion_getInstance_4().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_DisabledBackgroundColor_cqusog_k$();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_HoverBackgroundColor_uy6r32_k$();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_PressedBackgroundColor_ow7ud8_k$();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.get_BorderThickness_psvqzl_k$();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_getInstance_5();
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_getInstance_5();
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
  function ButtonKind() {
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.BackgroundDefaultColor$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp3_defaultFallback = get_FocusOutlineColorVar_0().value$default_36t2hw_k$();
    tmp.BackgroundFocusColor$delegate_1 = StyleVariable_0(tmp3_defaultFallback, 'silk');
    this.BackgroundHoverColor$delegate_1 = StyleVariable('silk');
    this.BackgroundPressedColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp4_defaultFallback = get_ColorVar_0().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp4_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp5_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp5_defaultFallback, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.PaddingHorizontal$delegate_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).get_BackgroundDefaultColor_so3bvr_k$ = function () {
    return this.BackgroundDefaultColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundFocusColor_4vb99e_k$ = function () {
    return this.BackgroundFocusColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundHoverColor_qkbxz2_k$ = function () {
    return this.BackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundPressedColor_qp3aco_k$ = function () {
    return this.BackgroundPressedColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_0());
  };
  protoOf(ButtonVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory());
  };
  protoOf(ButtonVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, Height$factory());
  };
  protoOf(ButtonVars).get_PaddingHorizontal_u991sc_k$ = function () {
    return this.PaddingHorizontal$delegate_1.getValue_fbnwi2_k$(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion() {
    Companion_instance = this;
    this.XS_1 = new ButtonSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.5), get_cssRem(0.5));
    this.SM_1 = new ButtonSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(2), get_cssRem(0.75));
    this.MD_1 = new ButtonSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(1));
    this.LG_1 = new ButtonSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(3), get_cssRem(1.5));
  }
  protoOf(Companion).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance;
  function Companion_getInstance_15() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_15();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), ButtonVars_getInstance().get_Height_xmnjk_k$(), height), ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.base_y8uu8g_k$(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.invoke_ts7809_k$(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.invoke_ts7809_k$(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.invoke_ts7809_k$(ButtonStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$().value$default_36t2hw_k$()), 1.2), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_6().get_SemiBold_aid1c4_k$()), Companion_getInstance_7().get_NoWrap_21tqz8_k$()), VOID, ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$().value$default_36t2hw_k$()), Companion_getInstance_8().get_Middle_1hpdq6_k$()), get_cssRem(0.375));
    return transition_0(userSelect(border(tmp, ButtonStyle$lambda$lambda$lambda), Companion_getInstance_3().get_None_wo6tgh_k$()), [Companion_getInstance_2().of$default_tua0if_k$('background-color', ButtonVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.width_iqjg4l_k$(get_px(0));
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$().value$default_36t2hw_k$());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$().value$default_36t2hw_k$());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundDefaultColor_so3bvr_k$();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundFocusColor_4vb99e_k$();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundHoverColor_qkbxz2_k$();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundPressedColor_qp3aco_k$();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.get_PaddingHorizontal_u991sc_k$();
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
  function Container() {
  }
  function Icon() {
  }
  function CheckboxKind() {
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp6_defaultFallback = get_BorderColorVar_0().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp6_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp7_defaultFallback = get_cssRem(0.125);
    tmp_0.BorderRadius$delegate_1 = StyleVariable_0(tmp7_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp8_defaultFallback = get_cssRem(0.125);
    tmp_1.BorderWidth$delegate_1 = StyleVariable_0(tmp8_defaultFallback, 'silk');
    this.Size$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp9_defaultFallback = get_cssRem(0.5);
    tmp_2.Spacing$delegate_1 = StyleVariable_0(tmp9_defaultFallback, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.IconSize$delegate_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp10_defaultFallback = get_FocusOutlineColorVar_0().value$default_36t2hw_k$();
    tmp_3.FocusOutlineColor$delegate_1 = StyleVariable_0(tmp10_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp11_defaultFallback = get_cssRem(0.1875);
    tmp_4.FocusOutlineSpread$delegate_1 = StyleVariable_0(tmp11_defaultFallback, 'silk');
    this.UncheckedBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundHoverColor$delegate_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp12_defaultFallback = TransitionDurationVars_getInstance().get_VeryFast_7jhf2z_k$().value$default_36t2hw_k$();
    tmp_5.TransitionDuration$delegate_1 = StyleVariable_1(tmp12_defaultFallback, 'silk');
  }
  protoOf(CheckboxVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).get_BorderWidth_hanxcf_k$ = function () {
    return this.BorderWidth$delegate_1.getValue_fbnwi2_k$(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).get_Size_wo9w8a_k$ = function () {
    return this.Size$delegate_1.getValue_fbnwi2_k$(this, Size$factory());
  };
  protoOf(CheckboxVars).get_Spacing_4hcb0m_k$ = function () {
    return this.Spacing$delegate_1.getValue_fbnwi2_k$(this, Spacing$factory());
  };
  protoOf(CheckboxVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).get_IconSize_s3avwj_k$ = function () {
    return this.IconSize$delegate_1.getValue_fbnwi2_k$(this, IconSize$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineColor_j0f8fk_k$ = function () {
    return this.FocusOutlineColor$delegate_1.getValue_fbnwi2_k$(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineSpread_spl6o6_k$ = function () {
    return this.FocusOutlineSpread$delegate_1.getValue_fbnwi2_k$(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).get_UncheckedBackgroundColor_cj7b3k_k$ = function () {
    return this.UncheckedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconColor_i8bnoh_k$ = function () {
    return this.IconColor$delegate_1.getValue_fbnwi2_k$(this, IconColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundColor_fqf24z_k$ = function () {
    return this.IconBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundHoverColor_gda561_k$ = function () {
    return this.IconBackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.SM_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_0).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_0).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_0).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_16() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_16();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$(), boxSize), CheckboxVars_getInstance().get_IconSize_s3avwj_k$(), iconSize), CheckboxVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_getInstance(), CheckboxVars_getInstance().get_Spacing_4hcb0m_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), CheckboxVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_9();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.from_1urvt_k$(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_getInstance(), CheckboxVars_getInstance().get_IconSize_s3avwj_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$());
    var tmp_0 = CheckboxVars_getInstance().get_BorderWidth_hanxcf_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), Companion_getInstance_2().group$default_365z6n_k$(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_UncheckedBackgroundColor_cj7b3k_k$().value$default_36t2hw_k$());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return border(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.color_lesdgv_k$(CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.cssRule_fe6cwq_k$(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_getInstance();
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, CheckboxVars_getInstance().get_FocusOutlineSpread_spl6o6_k$().value$default_36t2hw_k$(), CheckboxVars_getInstance().get_FocusOutlineColor_j0f8fk_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$().value$default_36t2hw_k$());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.get_BorderWidth_hanxcf_k$();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.get_Size_wo9w8a_k$();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.get_Spacing_4hcb0m_k$();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.get_IconSize_s3avwj_k$();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineColor_j0f8fk_k$();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineSpread_spl6o6_k$();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_UncheckedBackgroundColor_cj7b3k_k$();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconColor_i8bnoh_k$();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundColor_fqf24z_k$();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundHoverColor_gda561_k$();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_getInstance(), VOID, CenterVertically_getInstance());
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function InputKind() {
  }
  function InputGroupKind() {
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp15_defaultFallback = get_BorderColorVar_0().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp15_defaultFallback, 'silk');
    this.BorderRadius$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp16_defaultFallback = get_FocusOutlineColorVar_0().value$default_36t2hw_k$();
    tmp_0.BorderFocusColor$delegate_1 = StyleVariable_0(tmp16_defaultFallback, 'silk');
    this.BorderHoverColor$delegate_1 = StyleVariable('silk');
    this.BorderInvalidColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp17_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp17_defaultFallback, 'silk');
    this.FilledColor$delegate_1 = StyleVariable('silk');
    this.FilledHoverColor$delegate_1 = StyleVariable('silk');
    this.FilledFocusColor$delegate_1 = StyleVariable('silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.Padding$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp18_defaultFallback = get_PlaceholderOpacityVar_0().value$default_36t2hw_k$();
    tmp_2.PlaceholderOpacity$delegate_1 = StyleVariable_2(tmp18_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp19_defaultFallback = get_PlaceholderColorVar_0().value$default_36t2hw_k$();
    tmp_3.PlaceholderColor$delegate_1 = StyleVariable_0(tmp19_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp20_defaultFallback = get_cssRem(2.25);
    tmp_4.InsetLeftWidth$delegate_1 = StyleVariable_0(tmp20_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp21_defaultFallback = get_cssRem(2.25);
    tmp_5.InsetRightWidth$delegate_1 = StyleVariable_0(tmp21_defaultFallback, 'silk');
  }
  protoOf(InputVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory_1());
  };
  protoOf(InputVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).get_BorderFocusColor_guhvfk_k$ = function () {
    return this.BorderFocusColor$delegate_1.getValue_fbnwi2_k$(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).get_BorderHoverColor_4uita4_k$ = function () {
    return this.BorderHoverColor$delegate_1.getValue_fbnwi2_k$(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).get_BorderInvalidColor_3xft0h_k$ = function () {
    return this.BorderInvalidColor$delegate_1.getValue_fbnwi2_k$(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).get_FilledColor_27lcwo_k$ = function () {
    return this.FilledColor$delegate_1.getValue_fbnwi2_k$(this, FilledColor$factory());
  };
  protoOf(InputVars).get_FilledHoverColor_z8l4su_k$ = function () {
    return this.FilledHoverColor$delegate_1.getValue_fbnwi2_k$(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).get_FilledFocusColor_e3i8gm_k$ = function () {
    return this.FilledFocusColor$delegate_1.getValue_fbnwi2_k$(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory_1());
  };
  protoOf(InputVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, Height$factory_0());
  };
  protoOf(InputVars).get_Padding_fgkl54_k$ = function () {
    return this.Padding$delegate_1.getValue_fbnwi2_k$(this, Padding$factory());
  };
  protoOf(InputVars).get_PlaceholderOpacity_y4d5tt_k$ = function () {
    return this.PlaceholderOpacity$delegate_1.getValue_fbnwi2_k$(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).get_PlaceholderColor_fqs0o7_k$ = function () {
    return this.PlaceholderColor$delegate_1.getValue_fbnwi2_k$(this, PlaceholderColor$factory());
  };
  protoOf(InputVars).get_InsetLeftWidth_8un9fv_k$ = function () {
    return this.InsetLeftWidth$delegate_1.getValue_fbnwi2_k$(this, InsetLeftWidth$factory());
  };
  protoOf(InputVars).get_InsetRightWidth_1gxxby_k$ = function () {
    return this.InsetRightWidth$delegate_1.getValue_fbnwi2_k$(this, InsetRightWidth$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().get_Padding_fgkl54_k$().value$default_36t2hw_k$();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.XS_1 = new InputSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$());
    this.SM_1 = new InputSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new InputSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new InputSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_1).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion_1).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_1).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_1).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_17() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_17();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), InputVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), InputVars_getInstance().get_Height_xmnjk_k$(), height), InputVars_getInstance().get_Padding_fgkl54_k$(), padding), InputVars_getInstance().get_BorderRadius_tko1mv_k$(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.base_y8uu8g_k$(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.invoke_ts7809_k$(InputStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_getInstance(), Companion_getInstance_10().get_None_wo6tgh_k$()), get_ColorVar_0().value$default_36t2hw_k$()), InputVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border_0(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_2().group$default_365z6n_k$(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_getInstance(), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.invoke_ts7809_k$(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.invoke_ts7809_k$(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ts7809_k$(OutlinedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_getInstance()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.invoke_ts7809_k$(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.invoke_ts7809_k$(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ts7809_k$(FilledInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_getInstance()), InputVars_getInstance().get_FilledColor_27lcwo_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.invoke_ts7809_k$(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.invoke_ts7809_k$(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.invoke_ts7809_k$(FlushedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderFocusColor_guhvfk_k$();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderHoverColor_4uita4_k$();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderInvalidColor_3xft0h_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledColor_27lcwo_k$();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledHoverColor_z8l4su_k$();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledFocusColor_e3i8gm_k$();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.get_Padding_fgkl54_k$();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderOpacity_y4d5tt_k$();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderColor_fqs0o7_k$();
    }, null);
  }
  function InsetLeftWidth$factory() {
    return getPropertyCallableRef('InsetLeftWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetLeftWidth_8un9fv_k$();
    }, null);
  }
  function InsetRightWidth$factory() {
    return getPropertyCallableRef('InsetRightWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetRightWidth_1gxxby_k$();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_getInstance(), get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_getInstance_4().get_Hidden_viqel_k$()), Companion_getInstance_7().get_NoWrap_21tqz8_k$());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_getInstance_5();
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
  function Track() {
  }
  function Thumb() {
  }
  function SwitchKind() {
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp33_defaultFallback = get_px(9999);
    tmp.BorderRadius$delegate_1 = StyleVariable_0(tmp33_defaultFallback, 'silk');
    this.TrackWidth$delegate_1 = StyleVariable('silk');
    this.TrackHeight$delegate_1 = StyleVariable('silk');
    this.TrackPadding$delegate_1 = StyleVariable('silk');
    this.TrackBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp34_defaultFallback = get_FocusOutlineColorVar_0().value$default_36t2hw_k$();
    tmp_0.FocusColor$delegate_1 = StyleVariable_0(tmp34_defaultFallback, 'silk');
    this.ThumbOffset$delegate_1 = StyleVariable('silk');
    this.ThumbColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp35_defaultFallback = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp_1.TransitionDuration$delegate_1 = StyleVariable_1(tmp35_defaultFallback, 'silk');
  }
  protoOf(SwitchVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).get_TrackWidth_vulqlg_k$ = function () {
    return this.TrackWidth$delegate_1.getValue_fbnwi2_k$(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).get_TrackHeight_e8ng3b_k$ = function () {
    return this.TrackHeight$delegate_1.getValue_fbnwi2_k$(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).get_TrackPadding_t5kbzj_k$ = function () {
    return this.TrackPadding$delegate_1.getValue_fbnwi2_k$(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).get_TrackBackgroundColor_6g6jkd_k$ = function () {
    return this.TrackBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).get_FocusColor_4uzwmk_k$ = function () {
    return this.FocusColor$delegate_1.getValue_fbnwi2_k$(this, FocusColor$factory());
  };
  protoOf(SwitchVars).get_ThumbOffset_629rpc_k$ = function () {
    return this.ThumbOffset$delegate_1.getValue_fbnwi2_k$(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).get_ThumbColor_g0t1d6_k$ = function () {
    return this.ThumbColor$delegate_1.getValue_fbnwi2_k$(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.SM_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.MD_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.LG_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  protoOf(Companion_2).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_2).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_2).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_18() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_18();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$(), width), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$(), height), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_9();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.base_y8uu8g_k$(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.invoke_ts7809_k$(SwitchTrackStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackBackgroundColor_6g6jkd_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_tua0if_k$('background-color', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]), Companion_getInstance_11().get_ContentBox_h63h2z_k$());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.base_y8uu8g_k$(SwitchInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().get_FocusColor_4uzwmk_k$().value$default_36t2hw_k$());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbOffset_629rpc_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_tua0if_k$('translate', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.get_TrackWidth_vulqlg_k$();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.get_TrackHeight_e8ng3b_k$();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.get_TrackPadding_t5kbzj_k$();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_TrackBackgroundColor_6g6jkd_k$();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusColor_4uzwmk_k$();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbOffset_629rpc_k$();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbColor_g0t1d6_k$();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_getInstance_5();
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_getInstance(), -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function CanvasKind() {
  }
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
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
  function VerticalDividerKind() {
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-490066360);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 32 : 16);
    if (!(($default & 1) === 1) || (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, 6).then_mmfvo6_k$(modifier_0._v)), $composer_0, 0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerKind() {
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp43_defaultFallback = get_BorderColorVar_0().value$default_36t2hw_k$();
    tmp.Color$delegate_1 = StyleVariable_0(tmp43_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp44_defaultFallback = get_percent(90);
    tmp_0.Length$delegate_1 = StyleVariable_0(tmp44_defaultFallback, 'silk');
  }
  protoOf(DividerVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_1());
  };
  protoOf(DividerVars).get_Length_yn18v_k$ = function () {
    return this.Length$delegate_1.getValue_fbnwi2_k$(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.get_Length_yn18v_k$();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_getInstance_5();
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
  function SimpleGridKind() {
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.base_y8uu8g_k$(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.get_value_j01efc_k$();
      $this$CssStyle.invoke_hlvh2z_k$(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_12();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.value$default_36t2hw_k$();
      $this$gridTemplateColumns.repeat_n9ti1_k$(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_getInstance();
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.get_name_woqyms_k$().toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.put_4fpzoq_k$(element, tmp$ret$2);
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
  function SurfaceKind() {
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp45_defaultFallback = get_BackgroundColorVar_0().value$default_36t2hw_k$();
    tmp.BackgroundColor$delegate_1 = StyleVariable_0(tmp45_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp46_defaultFallback = get_ColorVar_0().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp46_defaultFallback, 'silk');
  }
  protoOf(SurfaceVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.base_y8uu8g_k$(SurfaceStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), SurfaceVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), SurfaceVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
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
  function OverlayKind() {
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_getInstance_5();
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
  function PopupKind() {
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp55_defaultFallback = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp.TransitionDuration$delegate_1 = StyleVariable_1(tmp55_defaultFallback, 'silk');
  }
  protoOf(PopupVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_tua0if_k$('opacity', PopupVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_5();
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
  function Arrow() {
  }
  function TextContainer() {
  }
  function TooltipKind() {
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.Color$delegate_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_3());
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
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_9();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TooltipVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    Companion_getInstance_9();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.width_iqjg4l_k$(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.style_o6ud9q_k$('solid');
    return Unit_getInstance();
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp57_$receiver = Companion_getInstance();
    var tmp58_left = get_TRIANGLE_WIDTH_2X();
    var tmp59_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(tmp57_$receiver, tmp59_top, VOID, VOID, tmp58_left), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp60_$receiver = Companion_getInstance();
    var tmp61_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp62_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(tmp60_$receiver, tmp62_top, VOID, VOID, tmp61_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp63_$receiver = Companion_getInstance();
    var tmp64_right = get_TRIANGLE_WIDTH_2X();
    var tmp65_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(tmp63_$receiver, tmp65_top, tmp64_right), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp66_$receiver = Companion_getInstance();
    var tmp67_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp68_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(tmp66_$receiver, VOID, tmp68_right, tmp67_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp69_$receiver = Companion_getInstance();
    var tmp70_left = get_TRIANGLE_WIDTH_2X();
    var tmp71_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp69_$receiver, VOID, VOID, tmp71_bottom, tmp70_left), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp72_$receiver = Companion_getInstance();
    var tmp73_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp74_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(tmp72_$receiver, VOID, VOID, tmp74_bottom, tmp73_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_getInstance();
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_getInstance_5();
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
      var tmp_13 = Companion_getInstance_5();
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar;
  }
  var SmoothColorTransitionDurationVar;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      DisabledStyle = get_DisabledStyle_0();
      SmoothColorTransitionDurationVar = get_SmoothColorTransitionDurationVar_0();
      SmoothColorStyle = get_SmoothColorStyle_0();
    }
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar;
  }
  var BackgroundColorVar;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar;
  }
  var ColorVar;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar;
  }
  var BorderColorVar;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar;
  }
  var FocusOutlineColorVar;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar;
  }
  var PlaceholderOpacityVar;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar;
  }
  var PlaceholderColorVar;
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar = get_BackgroundColorVar_0();
      ColorVar = get_ColorVar_0();
      BorderColorVar = get_BorderColorVar_0();
      FocusOutlineColorVar = get_FocusOutlineColorVar_0();
      PlaceholderOpacityVar = get_PlaceholderOpacityVar_0();
      PlaceholderColorVar = get_PlaceholderColorVar_0();
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function setSilkWidgetVariables(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-938405995);
    $composer_0.startReplaceableGroup_ip860b_k$(-436032111);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_13().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var root = tmp0_group;
    setSilkWidgetVariables_0(root, $composer_0, 8);
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().get__500_wogfpb_k$().toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().get__500_wogfpb_k$();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_getInstance().get_Black_i7mvue_k$();
    set_background(this_0.get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(this_0.get_light_iuogdp_k$(), color);
    set_border(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_light_iuogdp_k$(), focusOutline);
    set_overlay(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_light_iuogdp_k$(), placeholder);
    var buttonBase = Colors_getInstance().get_White_ij46ow_k$().darkened_iwrtmu_k$(0.2);
    get_button_0(this_0.get_light_iuogdp_k$()).set_s40lvu_k$(buttonBase, buttonBase.darkened_iwrtmu_k$(0.2), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), buttonBase.darkened_iwrtmu_k$(0.4));
    get_checkbox_0(this_0.get_light_iuogdp_k$()).set_38lh8k_k$(Blue_getInstance().get__500_wogfpb_k$(), Blue_getInstance().get__600_woggg0_k$(), Colors_getInstance().get_White_ij46ow_k$());
    var inputFilled = Gray_getInstance().get__200_wogdh8_k$();
    var tmp76_$this = get_input_0(this_0.get_light_iuogdp_k$());
    var tmp77_filledFocus = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp78_hoveredBorder = Gray_getInstance().get__500_wogfpb_k$();
    var tmp79_invalidBorder = Red_getInstance().get__900_wogio3_k$();
    var tmp80_filledHover = inputFilled.darkened_iwrtmu_k$(0.1);
    tmp76_$this.set_ax4sbs_k$(tmp78_hoveredBorder, tmp79_invalidBorder, inputFilled, tmp80_filledHover, tmp77_filledFocus);
    var tmp81_$this = get_switch_0(this_0.get_light_iuogdp_k$());
    var tmp82_thumb = Colors_getInstance().get_White_ij46ow_k$();
    var tmp83_backgroundOn = Colors_getInstance().get_DodgerBlue_w4tkwu_k$();
    var tmp84_backgroundOff = Colors_getInstance().get_LightGray_i1h2r4_k$();
    tmp81_$this.set_38lh8k_k$(tmp83_backgroundOn, tmp84_backgroundOff, tmp82_thumb);
    get_tab_0(this_0.get_light_iuogdp_k$()).set$default_u64q8f_k$(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), VOID, VOID, Colors_getInstance().get_LightGray_i1h2r4_k$(), Colors_getInstance().get_WhiteSmoke_gvtxtb_k$(), Colors_getInstance().get_White_ij46ow_k$());
    get_tooltip_0(this_0.get_light_iuogdp_k$()).set_djj1hu_k$(get_color_0(this_0.get_light_iuogdp_k$()), get_background_0(this_0.get_light_iuogdp_k$()));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_getInstance().get_White_ij46ow_k$();
    set_background(this_0.get_dark_wokkvz_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_color(this_0.get_dark_wokkvz_k$(), color_0);
    set_border(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_dark_wokkvz_k$(), focusOutline);
    set_overlay(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_dark_wokkvz_k$(), placeholder);
    var buttonBase_0 = lightened(Colors_getInstance().get_Black_i7mvue_k$(), 0.2);
    get_button_0(this_0.get_dark_wokkvz_k$()).set_s40lvu_k$(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.get_dark_wokkvz_k$()).set_38lh8k_k$(Blue_getInstance().get__200_wogdh8_k$(), Blue_getInstance().get__300_woge7x_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    var inputFilled_0 = Gray_getInstance().get__900_wogio3_k$();
    var tmp85_$this = get_input_0(this_0.get_dark_wokkvz_k$());
    var tmp86_filledFocus = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp87_hoveredBorder = Gray_getInstance().get__600_woggg0_k$();
    var tmp88_invalidBorder = Red_getInstance().get__300_woge7x_k$();
    var tmp89_filledHover = lightened(inputFilled_0, 0.1);
    tmp85_$this.set_ax4sbs_k$(tmp87_hoveredBorder, tmp88_invalidBorder, inputFilled_0, tmp89_filledHover, tmp86_filledFocus);
    var tmp90_$this = get_switch_0(this_0.get_dark_wokkvz_k$());
    var tmp91_thumb = Colors_getInstance().get_White_ij46ow_k$();
    var tmp92_backgroundOn = Colors_getInstance().get_LightSkyBlue_74jx4i_k$();
    var tmp93_backgroundOff = Colors_getInstance().get_DarkGray_1y3y8u_k$();
    tmp90_$this.set_38lh8k_k$(tmp92_backgroundOn, tmp93_backgroundOff, tmp91_thumb);
    get_tab_0(this_0.get_dark_wokkvz_k$()).set$default_u64q8f_k$(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), VOID, VOID, Colors_getInstance().get_DarkSlateGray_s468al_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    get_tooltip_0(this_0.get_dark_wokkvz_k$()).set_djj1hu_k$(get_color_0(this_0.get_dark_wokkvz_k$()), get_background_0(this_0.get_dark_wokkvz_k$()));
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-colors', get_SilkColorsStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input', get_InputStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined', get_OutlinedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-filled', get_FilledInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-flushed', get_FlushedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unstyled', get_UnstyledInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input-group', get_InputGroupStyle());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-disabled', get_DisabledStyle_0());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-smooth-color', get_SmoothColorStyle_0());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-button', get_ButtonStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-canvas', get_CanvasStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox', get_CheckboxStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checkbox', get_CheckboxInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-overlay', get_OverlayStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-popup', get_PopupStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-surface', get_SurfaceStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch', get_SwitchStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-switch', get_SwitchInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs', get_TabsStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top', get_TopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left', get_LeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right', get_RightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip', get_TooltipStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.registerKeyframes_f5btlc_k$('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_xs', Companion_getInstance_15().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_sm', Companion_getInstance_15().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_md', Companion_getInstance_15().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_lg', Companion_getInstance_15().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_sm', Companion_getInstance_16().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_md', Companion_getInstance_16().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_lg', Companion_getInstance_16().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_xs', Companion_getInstance_17().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_sm', Companion_getInstance_17().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_md', Companion_getInstance_17().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_lg', Companion_getInstance_17().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_sm', Companion_getInstance_18().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_md', Companion_getInstance_18().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_lg', Companion_getInstance_18().get_LG_knton0_k$());
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1180012187);
    setSilkWidgetVariables_1(_this__u8e3s4, Companion_getInstance_14().get_current_2iudd5_k$($composer_0, 8));
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.get_opposite_ywslzk_k$())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), get_BackgroundColorVar_0(), get_background(palette)), get_ColorVar_0(), get_color(palette)), get_BorderColorVar_0(), get_border(palette)), get_FocusOutlineColorVar_0(), get_focusOutline(palette)), get_PlaceholderColorVar_0(), get_placeholder_0(palette)), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), get_button(palette).get_default_qtagd4_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), get_button(palette).get_hover_islez7_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), get_button(palette).get_pressed_3zxk93_k$()), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), get_checkbox(palette).get_background_stpfw7_k$()), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$(), get_checkbox(palette).get_hover_islez7_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$(), get_checkbox(palette).get_color_ipu8u2_k$()), InputVars_getInstance().get_BorderHoverColor_4uita4_k$(), get_input(palette).get_hoveredBorder_pnis3i_k$()), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), get_input(palette).get_invalidBorder_suexpi_k$()), InputVars_getInstance().get_FilledColor_27lcwo_k$(), get_input(palette).get_filled_dbz78r_k$()), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$(), get_input(palette).get_filledHover_panomn_k$()), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$(), get_input(palette).get_filledFocus_pbrnir_k$()), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_overlay(palette)), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$(), get_switch(palette).get_thumb_iz2gml_k$()), TabVars_getInstance().get_Color_i88tui_k$(), get_tab(palette).get_color_ipu8u2_k$()), TabVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tab(palette).get_background_stpfw7_k$()), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$(), get_tab(palette).get_disabled_rbmjej_k$()), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$(), get_tab(palette).get_hover_islez7_k$()), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$(), get_tab(palette).get_pressed_3zxk93_k$()), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tooltip(palette).get_background_stpfw7_k$()), TooltipVars_getInstance().get_Color_i88tui_k$(), get_tooltip(palette).get_color_ipu8u2_k$());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_getInstance_5();
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle_0() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return DisabledStyle_0;
  }
  var DisabledStyle_0;
  function get_SmoothColorTransitionDurationVar_0() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return SmoothColorTransitionDurationVar$delegate.getValue_fbnwi2_k$(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle_0() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return SmoothColorStyle_0;
  }
  var SmoothColorStyle_0;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_tua0if_k$('background-color', get_SmoothColorTransitionDurationVar_0().value$default_36t2hw_k$())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar_0();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t_0;
  function _init_properties_CommonStyles_kt__a7wisz_0() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t_0) {
      properties_initialized_CommonStyles_kt_zd2b1t_0 = true;
      var tmp = Companion_getInstance_5();
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle_0 = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp94_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp94_defaultFallback, 'silk');
      var tmp_1 = Companion_getInstance_5();
      SmoothColorStyle_0 = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp95_defaultFallback = get_ms(0);
    tmp.Instant$delegate_1 = StyleVariable_1(tmp95_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp96_defaultFallback = get_ms(50);
    tmp_0.UltraFast$delegate_1 = StyleVariable_1(tmp96_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp97_defaultFallback = get_ms(100);
    tmp_1.VeryFast$delegate_1 = StyleVariable_1(tmp97_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp98_defaultFallback = get_ms(150);
    tmp_2.Fast$delegate_1 = StyleVariable_1(tmp98_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp99_defaultFallback = get_ms(200);
    tmp_3.Normal$delegate_1 = StyleVariable_1(tmp99_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp100_defaultFallback = get_ms(300);
    tmp_4.Slow$delegate_1 = StyleVariable_1(tmp100_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp101_defaultFallback = get_ms(400);
    tmp_5.VerySlow$delegate_1 = StyleVariable_1(tmp101_defaultFallback, 'silk');
    var tmp_6 = this;
    var tmp102_defaultFallback = get_ms(500);
    tmp_6.UltraSlow$delegate_1 = StyleVariable_1(tmp102_defaultFallback, 'silk');
  }
  protoOf(TransitionDurationVars).get_Instant_9uzajs_k$ = function () {
    return this.Instant$delegate_1.getValue_fbnwi2_k$(this, Instant$factory());
  };
  protoOf(TransitionDurationVars).get_UltraFast_5ch09t_k$ = function () {
    return this.UltraFast$delegate_1.getValue_fbnwi2_k$(this, UltraFast$factory());
  };
  protoOf(TransitionDurationVars).get_VeryFast_7jhf2z_k$ = function () {
    return this.VeryFast$delegate_1.getValue_fbnwi2_k$(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).get_Fast_wo1fb9_k$ = function () {
    return this.Fast$delegate_1.getValue_fbnwi2_k$(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).get_Normal_22avww_k$ = function () {
    return this.Normal$delegate_1.getValue_fbnwi2_k$(this, Normal$factory());
  };
  protoOf(TransitionDurationVars).get_Slow_wo9y7e_k$ = function () {
    return this.Slow$delegate_1.getValue_fbnwi2_k$(this, Slow$factory());
  };
  protoOf(TransitionDurationVars).get_VerySlow_7jpxz4_k$ = function () {
    return this.VerySlow$delegate_1.getValue_fbnwi2_k$(this, VerySlow$factory());
  };
  protoOf(TransitionDurationVars).get_UltraSlow_5c8hdo_k$ = function () {
    return this.UltraSlow$delegate_1.getValue_fbnwi2_k$(this, UltraSlow$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function Instant$factory() {
    return getPropertyCallableRef('Instant', 1, KProperty1, function (receiver) {
      return receiver.get_Instant_9uzajs_k$();
    }, null);
  }
  function UltraFast$factory() {
    return getPropertyCallableRef('UltraFast', 1, KProperty1, function (receiver) {
      return receiver.get_UltraFast_5ch09t_k$();
    }, null);
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.get_VeryFast_7jhf2z_k$();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.get_Fast_wo1fb9_k$();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.get_Normal_22avww_k$();
    }, null);
  }
  function Slow$factory() {
    return getPropertyCallableRef('Slow', 1, KProperty1, function (receiver) {
      return receiver.get_Slow_wo9y7e_k$();
    }, null);
  }
  function VerySlow$factory() {
    return getPropertyCallableRef('VerySlow', 1, KProperty1, function (receiver) {
      return receiver.get_VerySlow_7jpxz4_k$();
    }, null);
  }
  function UltraSlow$factory() {
    return getPropertyCallableRef('UltraSlow', 1, KProperty1, function (receiver) {
      return receiver.get_UltraSlow_5c8hdo_k$();
    }, null);
  }
  function get_BackgroundColorVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return BackgroundColorVar$delegate.getValue_fbnwi2_k$(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return ColorVar$delegate.getValue_fbnwi2_k$(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return BorderColorVar$delegate.getValue_fbnwi2_k$(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return FocusOutlineColorVar$delegate.getValue_fbnwi2_k$(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return PlaceholderOpacityVar$delegate.getValue_fbnwi2_k$(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar_0() {
    _init_properties_ColorVars_kt__w8x7ib_0();
    return PlaceholderColorVar$delegate.getValue_fbnwi2_k$(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar_0();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar_0();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar_0();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar_0();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar_0();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar_0();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl_0;
  function _init_properties_ColorVars_kt__w8x7ib_0() {
    if (!properties_initialized_ColorVars_kt_3y5hvl_0) {
      properties_initialized_ColorVars_kt_3y5hvl_0 = true;
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
    tmp.XS$delegate_1 = StyleVariable_0(tmp107_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp108_defaultFallback = get_cssRem(0.875);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp108_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp109_defaultFallback = get_cssRem(1);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp109_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp110_defaultFallback = get_cssRem(1.125);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp110_defaultFallback, 'silk');
  }
  protoOf(FontSizeVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, XS$factory());
  };
  protoOf(FontSizeVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, SM$factory());
  };
  protoOf(FontSizeVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, MD$factory());
  };
  protoOf(FontSizeVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, LG$factory());
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
    tmp.XS$delegate_1 = StyleVariable_0(tmp103_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp104_defaultFallback = get_cssRem(0.25);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp104_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp105_defaultFallback = get_cssRem(0.375);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp105_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp106_defaultFallback = get_cssRem(0.5);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp106_defaultFallback, 'silk');
  }
  protoOf(BorderRadiusVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, MD$factory_0());
  };
  protoOf(BorderRadiusVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, LG$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory_0() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function Button() {
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.focus$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableButton).set_default_r70t7m_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_jpcais_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_fbnwi2_k$(this, default$factory_0());
  };
  protoOf(MutableButton).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_0());
  };
  protoOf(MutableButton).set_focus_kvs67t_k$ = function (_set____db54di) {
    return this.focus$delegate_1.setValue_jpcais_k$(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_focus_irhg33_k$ = function () {
    return this.focus$delegate_1.getValue_fbnwi2_k$(this, focus$factory_0());
  };
  protoOf(MutableButton).set_pressed_58wx37_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_jpcais_k$(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, pressed$factory_0());
  };
  protoOf(MutableButton).set_s40lvu_k$ = function (default_0, hover, focus, pressed) {
    this.set_default_r70t7m_k$(default_0);
    this.set_hover_2oswrh_k$(hover);
    this.set_focus_kvs67t_k$(focus);
    this.set_pressed_58wx37_k$(pressed);
  };
  function Checkbox() {
  }
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableCheckbox).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_0());
  };
  protoOf(MutableCheckbox).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_0());
  };
  protoOf(MutableCheckbox).set_38lh8k_k$ = function (background, hover, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_hover_2oswrh_k$(hover);
    this.set_color_6hbvlo_k$(color);
  };
  function Input() {
  }
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.hoveredBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.invalidBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filled$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledHover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledFocus$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableInput).set_hoveredBorder_9dobm0_k$ = function (_set____db54di) {
    return this.hoveredBorder$delegate_1.setValue_jpcais_k$(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_hoveredBorder_pnis3i_k$ = function () {
    return this.hoveredBorder$delegate_1.getValue_fbnwi2_k$(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).set_invalidBorder_v1jyzo_k$ = function (_set____db54di) {
    return this.invalidBorder$delegate_1.setValue_jpcais_k$(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_invalidBorder_suexpi_k$ = function () {
    return this.invalidBorder$delegate_1.getValue_fbnwi2_k$(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).set_filled_owq1el_k$ = function (_set____db54di) {
    return this.filled$delegate_1.setValue_jpcais_k$(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filled_dbz78r_k$ = function () {
    return this.filled$delegate_1.getValue_fbnwi2_k$(this, filled$factory_0());
  };
  protoOf(MutableInput).set_filledHover_xo7efv_k$ = function (_set____db54di) {
    return this.filledHover$delegate_1.setValue_jpcais_k$(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledHover_panomn_k$ = function () {
    return this.filledHover$delegate_1.getValue_fbnwi2_k$(this, filledHover$factory_0());
  };
  protoOf(MutableInput).set_filledFocus_j5xe2x_k$ = function (_set____db54di) {
    return this.filledFocus$delegate_1.setValue_jpcais_k$(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledFocus_pbrnir_k$ = function () {
    return this.filledFocus$delegate_1.getValue_fbnwi2_k$(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).set_ax4sbs_k$ = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.set_hoveredBorder_9dobm0_k$(hoveredBorder);
    this.set_invalidBorder_v1jyzo_k$(invalidBorder);
    this.set_filled_owq1el_k$(filled);
    this.set_filledHover_xo7efv_k$(filledHover);
    this.set_filledFocus_j5xe2x_k$(filledFocus);
  };
  function Switch() {
  }
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.backgroundOn$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.backgroundOff$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.thumb$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableSwitch).set_backgroundOn_jyhnko_k$ = function (_set____db54di) {
    return this.backgroundOn$delegate_1.setValue_jpcais_k$(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOn_11s1ze_k$ = function () {
    return this.backgroundOn$delegate_1.getValue_fbnwi2_k$(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).set_backgroundOff_a7rgle_k$ = function (_set____db54di) {
    return this.backgroundOff$delegate_1.setValue_jpcais_k$(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOff_wj5pl4_k$ = function () {
    return this.backgroundOff$delegate_1.getValue_fbnwi2_k$(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).set_thumb_hhfkzb_k$ = function (_set____db54di) {
    return this.thumb$delegate_1.setValue_jpcais_k$(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_thumb_iz2gml_k$ = function () {
    return this.thumb$delegate_1.getValue_fbnwi2_k$(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).set_38lh8k_k$ = function (backgroundOn, backgroundOff, thumb) {
    this.set_backgroundOn_jyhnko_k$(backgroundOn);
    this.set_backgroundOff_a7rgle_k$(backgroundOff);
    this.set_thumb_hhfkzb_k$(thumb);
  };
  function Tab_0() {
  }
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedColor$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBackground$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.disabled$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTab).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_2());
  };
  protoOf(MutableTab).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_2());
  };
  protoOf(MutableTab).set_selectedColor_hlprkn_k$ = function (_set____db54di) {
    return this.selectedColor$delegate_1.setValue_jpcais_k$(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedColor_mfz4gv_k$ = function () {
    return this.selectedColor$delegate_1.getValue_fbnwi2_k$(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).set_selectedBackground_c6bs9o_k$ = function (_set____db54di) {
    return this.selectedBackground$delegate_1.setValue_jpcais_k$(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBackground_7y8aq6_k$ = function () {
    return this.selectedBackground$delegate_1.getValue_fbnwi2_k$(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).set_selectedBorder_84ayzm_k$ = function (_set____db54di) {
    return this.selectedBorder$delegate_1.setValue_jpcais_k$(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBorder_f0tq34_k$ = function () {
    return this.selectedBorder$delegate_1.getValue_fbnwi2_k$(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_4());
  };
  protoOf(MutableTab).set_pressed_58wx37_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_jpcais_k$(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, pressed$factory_2());
  };
  protoOf(MutableTab).set_disabled_v5i0p5_k$ = function (_set____db54di) {
    return this.disabled$delegate_1.setValue_jpcais_k$(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_disabled_rbmjej_k$ = function () {
    return this.disabled$delegate_1.getValue_fbnwi2_k$(this, disabled$factory_0());
  };
  protoOf(MutableTab).set_jzzawy_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.set_color_6hbvlo_k$(color);
    this.set_background_9u5jiv_k$(background);
    this.set_selectedColor_hlprkn_k$(selectedColor);
    this.set_selectedBackground_c6bs9o_k$(selectedBackground);
    this.set_selectedBorder_84ayzm_k$(selectedBorder);
    this.set_hover_2oswrh_k$(hover);
    this.set_pressed_58wx37_k$(pressed);
    this.set_disabled_v5i0p5_k$(disabled);
  };
  protoOf(MutableTab).set$default_u64q8f_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.set_jzzawy_k$(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.set_jzzawy_k$.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function Tooltip() {
  }
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTooltip).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_4());
  };
  protoOf(MutableTooltip).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_4());
  };
  protoOf(MutableTooltip).set_djj1hu_k$ = function (background, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_color_6hbvlo_k$(color);
  };
  function SilkWidgetColorGroups() {
    SilkWidgetColorGroups_instance = this;
  }
  var SilkWidgetColorGroups_instance;
  function SilkWidgetColorGroups_getInstance() {
    if (SilkWidgetColorGroups_instance == null)
      new SilkWidgetColorGroups();
    return SilkWidgetColorGroups_instance;
  }
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
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
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
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
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
    _this__u8e3s4.set_17rjxm_k$('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('border', value);
  }
  function get_border_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('focusOutline', value);
  }
  function get_focusOutline_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('overlay', value);
  }
  function get_overlay_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('placeholder', value);
  }
  function get_placeholder_1(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_kvs67t_k$(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_kvs67t_k$(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_9dobm0_k$(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_9dobm0_k$(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_v1jyzo_k$(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_v1jyzo_k$(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_owq1el_k$(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_owq1el_k$(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_xo7efv_k$(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_xo7efv_k$(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_j5xe2x_k$(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_j5xe2x_k$(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_jyhnko_k$(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_jyhnko_k$(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_a7rgle_k$(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_a7rgle_k$(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_hhfkzb_k$(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_hhfkzb_k$(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_hlprkn_k$(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_hlprkn_k$(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_c6bs9o_k$(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_c6bs9o_k$(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_84ayzm_k$(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_84ayzm_k$(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_v5i0p5_k$(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_v5i0p5_k$(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
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
  _.$_$.e = get_SmoothColorStyle_0;
  _.$_$.f = get_BorderColorVar_0;
  _.$_$.g = get_ColorVar_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
