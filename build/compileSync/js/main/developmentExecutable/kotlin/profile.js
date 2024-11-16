(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.my.profile:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.my.profile:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.my.profile:site'.");
    }
    root['com.my.profile:site'] = factory(typeof this['com.my.profile:site'] === 'undefined' ? {} : this['com.my.profile:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.tf;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.pd;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.eg;
  var mapOf = kotlin_kotlin.$_$.x7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.bf;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.cb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.dg;
  var toInt = kotlin_kotlin.$_$.ce;
  var charSequenceLength = kotlin_kotlin.$_$.na;
  var toBoolean = kotlin_kotlin.$_$.ae;
  var isBlank = kotlin_kotlin.$_$.jd;
  var VOID = kotlin_kotlin.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.qd;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$SIdePanelKt, 'ComposableSingletons$SIdePanelKt');
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(Home, 'Home', VOID, Screen);
  initMetadataForObject(Introduction, 'Introduction', VOID, Screen);
  initMetadataForObject(Screen2, 'Screen2', VOID, Screen);
  initMetadataForObject(Certification, 'Certification', VOID, Screen);
  initMetadataForObject(ComposableSingletons$CertificationKt, 'ComposableSingletons$CertificationKt');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$IntroductionKt, 'ComposableSingletons$IntroductionKt');
  initMetadataForObject(ComposableSingletons$Screen2Kt, 'ComposableSingletons$Screen2Kt');
  initMetadataForObject(Image_0, 'Image');
  initMetadataForObject(Res, 'Res');
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'myprofile')));
    renderComposable('root', ComposableLambda$invoke$ref_5(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      certificationPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      introductionPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      Screen2Page($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-5.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 911038304, true, ComposableSingletons$MainKt$lambda_5$lambda$lambda_4wkiwu(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-5.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_5$lambda$lambda_4wkiwu($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1691572098, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_mxy4sg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_ngeztr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_nyvuv2_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/certification', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/introduction', VOID, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/screen2', VOID, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 70, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      AppEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1151680107);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.AppEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 510973324, true, AppEntry$lambda(content));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.my.profile.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = backgroundColor(padding(minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100)), get_px(100)), get_backgroundColor());
        var tmp_1 = Center_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.my.profile.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 981789510, true, AppEntry$lambda$lambda($content));
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
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.my.profile.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box(tmp_0, tmp_1, null, tmp0, $composer_0, 3144, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AdminPageLayout(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1573105759);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxHeight(width(Companion_getInstance_1(), get_px(1000)));
      var tmp_0 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.AdminPageLayout.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1634185790, true, AdminPageLayout$lambda(content));
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
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.my.profile.components.AdminPageLayout.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, tmp_0, null, null, tmp0, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AdminPageLayout$lambda_0(content, $changed));
    }
  }
  function AdminPageLayout$lambda($content) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        SidePanel($composer_0, 0);
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdminPageLayout$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AdminPageLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SidePanel($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1714898568);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      SidePanelInternal($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SidePanel$lambda($changed));
    }
  }
  function SidePanelInternal($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1823684485);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_$receiver = Companion_getInstance_1();
      var tmp1_leftRight = get_px(40);
      var tmp2_topBottom = get_px(50);
      var tmp = fillMaxHeight(width(padding(tmp0_$receiver, tmp2_topBottom, tmp1_leftRight), get_px(300)));
      // Inline function 'org.jetbrains.compose.web.css.Color.gray' call
      Color_getInstance();
      var tmp$ret$0 = Color('gray');
      var tmp_0 = zIndex(backgroundColor(tmp, tmp$ret$0), 9);
      Column(tmp_0, null, null, null, ComposableSingletons$SIdePanelKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SidePanelInternal$lambda($changed));
    }
  }
  function NavigationItems($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1359254393);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var context = rememberPageContext($composer_0, 0);
      var tmp3_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp4_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Home_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp3_modifier, tmp4_selected, '\uD648', NavigationItems$lambda(context), $composer_0, 392, 0);
      var tmp5_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp6_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Introduction_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp5_modifier, tmp6_selected, '\uC790\uAE30\uC18C\uAC1C', NavigationItems$lambda_0(context), $composer_0, 392, 0);
      var tmp7_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp8_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Screen2_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp7_modifier, tmp8_selected, '\uACBD\uB825', NavigationItems$lambda_1(context), $composer_0, 392, 0);
      var tmp9_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp10_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Certification_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp9_modifier, tmp10_selected, '\uC790\uACA9\uC99D', NavigationItems$lambda_2(context), $composer_0, 392, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavigationItems$lambda_3($changed));
    }
  }
  function NavigationItem(modifier, selected, title, onClick_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var selected_0 = {_v: selected};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1335275086);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 2048 : 1024);
    if (!(($default & 1) === 1) || (!(($dirty & 5851) === 1170) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 2) === 0)) {
        selected_0._v = false;
      }
      var tmp = cursor(Companion_getInstance_1().then_mmfvo6_k$(modifier_0._v), Companion_getInstance_2().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(62692404);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'NavigationItem.<anonymous>' call
        var value = NavigationItem$lambda(onClick_0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = onClick(tmp, tmp0_group);
      var tmp_3 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'NavigationItem.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1098516529, true, NavigationItem$lambda_0(selected_0, title));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'NavigationItem.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp_2, null, tmp_3, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavigationItem$lambda_1(modifier_0, selected_0, title, onClick_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SIdePanelKt$lambda_1$lambda_nvq4v7($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      NavigationItems($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SIdePanelKt() {
    ComposableSingletons$SIdePanelKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(53428452, false, ComposableSingletons$SIdePanelKt$lambda_1$lambda_nvq4v7));
  }
  protoOf(ComposableSingletons$SIdePanelKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$SIdePanelKt_instance;
  function ComposableSingletons$SIdePanelKt_getInstance() {
    if (ComposableSingletons$SIdePanelKt_instance == null)
      new ComposableSingletons$SIdePanelKt();
    return ComposableSingletons$SIdePanelKt_instance;
  }
  function SidePanel$lambda($$changed) {
    return function ($composer, $force) {
      SidePanel($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SidePanelInternal$lambda($$changed) {
    return function ($composer, $force) {
      SidePanelInternal($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Home_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda_0($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Introduction_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda_1($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Screen2_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda_2($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Certification_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda_3($$changed) {
    return function ($composer, $force) {
      NavigationItems($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItem$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function NavigationItem$lambda_0($selected, $title) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fontSize(Companion_getInstance_1(), get_px(16));
        var tmp_1;
        if ($selected._v) {
          // Inline function 'org.jetbrains.compose.web.css.Color.red' call
          Color_getInstance();
          tmp_1 = Color('red');
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Color.black' call
          Color_getInstance();
          tmp_1 = Color('black');
        }
        var tmp11_modifier = color(tmp_0, tmp_1);
        SpanText($title, tmp11_modifier, null, null, $composer_0, 64, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavigationItem$lambda_1($modifier, $selected, $title, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItem($modifier._v, $selected._v, $title, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_my_profile_navigation_Screen_Home$stable;
  var com_my_profile_navigation_Screen_Introduction$stable;
  var com_my_profile_navigation_Screen_Screen2$stable;
  var com_my_profile_navigation_Screen_Certification$stable;
  var com_my_profile_navigation_Screen$stable;
  function Home() {
    Home_instance = this;
    Screen.call(this, '/');
  }
  protoOf(Home).toString = function () {
    return 'Home';
  };
  protoOf(Home).hashCode = function () {
    return 1298512257;
  };
  protoOf(Home).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Home))
      return false;
    other instanceof Home || THROW_CCE();
    return true;
  };
  var Home_instance;
  function Home_getInstance() {
    if (Home_instance == null)
      new Home();
    return Home_instance;
  }
  function Introduction() {
    Introduction_instance = this;
    Screen.call(this, '/introduction');
  }
  protoOf(Introduction).toString = function () {
    return 'Introduction';
  };
  protoOf(Introduction).hashCode = function () {
    return 1833130684;
  };
  protoOf(Introduction).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Introduction))
      return false;
    other instanceof Introduction || THROW_CCE();
    return true;
  };
  var Introduction_instance;
  function Introduction_getInstance() {
    if (Introduction_instance == null)
      new Introduction();
    return Introduction_instance;
  }
  function Screen2() {
    Screen2_instance = this;
    Screen.call(this, '/screen2');
  }
  protoOf(Screen2).toString = function () {
    return 'Screen2';
  };
  protoOf(Screen2).hashCode = function () {
    return 41987428;
  };
  protoOf(Screen2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Screen2))
      return false;
    other instanceof Screen2 || THROW_CCE();
    return true;
  };
  var Screen2_instance;
  function Screen2_getInstance() {
    if (Screen2_instance == null)
      new Screen2();
    return Screen2_instance;
  }
  function Certification() {
    Certification_instance = this;
    Screen.call(this, '/certification');
  }
  protoOf(Certification).toString = function () {
    return 'Certification';
  };
  protoOf(Certification).hashCode = function () {
    return -134830504;
  };
  protoOf(Certification).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Certification))
      return false;
    other instanceof Certification || THROW_CCE();
    return true;
  };
  var Certification_instance;
  function Certification_getInstance() {
    if (Certification_instance == null)
      new Certification();
    return Certification_instance;
  }
  function Screen(route) {
    this.route_1 = route;
  }
  protoOf(Screen).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  function com_my_profile_navigation_Screen_Home$stableprop_getter() {
    return com_my_profile_navigation_Screen_Home$stable;
  }
  function com_my_profile_navigation_Screen_Introduction$stableprop_getter() {
    return com_my_profile_navigation_Screen_Introduction$stable;
  }
  function com_my_profile_navigation_Screen_Screen2$stableprop_getter() {
    return com_my_profile_navigation_Screen_Screen2$stable;
  }
  function com_my_profile_navigation_Screen_Certification$stableprop_getter() {
    return com_my_profile_navigation_Screen_Certification$stable;
  }
  function com_my_profile_navigation_Screen$stableprop_getter() {
    return com_my_profile_navigation_Screen$stable;
  }
  function certificationPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2128888697);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      certification($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certificationPage$lambda($changed));
    }
  }
  function certification($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1210594504);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$CertificationKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certification$lambda($changed));
    }
  }
  function certificationContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1261323673);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding_0(fillMaxHeight(width(Companion_getInstance_1(), get_px(700))), get_px(40)), get_white());
      Column(tmp, null, null, null, ComposableSingletons$CertificationKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certificationContent$lambda($changed));
    }
  }
  function certificationItem(title, organization, date, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1107976122);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(organization) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(date) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.pages.certificationItem.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 430146031, true, certificationItem$lambda(title, organization, date));
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
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.my.profile.pages.certificationItem.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certificationItem$lambda_0(title, organization, date, $changed));
    }
  }
  function certificationItemTitle(title, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-441205044);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.pages.certificationItemTitle.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1133738325, true, certificationItemTitle$lambda(title));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.my.profile.pages.certificationItemTitle.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H3(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certificationItemTitle$lambda_0(title, $changed));
    }
  }
  function certificationItemOrganization(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1553850957);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(fontSize(Companion_getInstance_1(), get_px(16)), VOID, VOID, get_px(5));
      SpanText(text, tmp, null, null, $composer_0, 64 | 14 & $dirty, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(certificationItemOrganization$lambda(text, $changed));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CertificationKt$lambda_1$lambda_k52qz4($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      certificationContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CertificationKt$lambda_2$lambda_m2etxt($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = fontSize(fontWeight(Companion_getInstance_1(), Companion_getInstance_3().get_Bold_wnz5ke_k$()), get_px(32));
    SpanText('\uC790\uACA9\uC99D', tmp, null, null, $composer_0, 70, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CertificationKt$lambda_3$lambda_6r7n4e($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      H2(null, ComposableSingletons$CertificationKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      certificationItem('\uC815\uBCF4\uCC98\uB9AC\uAE30\uC0AC', '\uD55C\uAD6D\uC0B0\uC5C5\uC778\uB825\uACF5\uB2E8', '\uCDE8\uB4DD\uC77C : 2023.06', $composer_0, 438);
      certificationItem('\uB9AC\uB205\uC2A4 \uB9C8\uC2A4\uD130 2\uAE09', '\uD55C\uAD6D\uC815\uBCF4\uD1B5\uC2E0\uC9C4\uD765\uD611\uD68C', '\uCDE8\uB4DD\uC77C : 2020.01.03', $composer_0, 438);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CertificationKt() {
    ComposableSingletons$CertificationKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(248434187, false, ComposableSingletons$CertificationKt$lambda_1$lambda_k52qz4));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1632334020, false, ComposableSingletons$CertificationKt$lambda_2$lambda_m2etxt));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1115934110, false, ComposableSingletons$CertificationKt$lambda_3$lambda_6r7n4e));
  }
  protoOf(ComposableSingletons$CertificationKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CertificationKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$CertificationKt).get_lambda_3_mxy4sg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$CertificationKt_instance;
  function ComposableSingletons$CertificationKt_getInstance() {
    if (ComposableSingletons$CertificationKt_instance == null)
      new ComposableSingletons$CertificationKt();
    return ComposableSingletons$CertificationKt_instance;
  }
  function certificationPage$lambda($$changed) {
    return function ($composer, $force) {
      certificationPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function certification$lambda($$changed) {
    return function ($composer, $force) {
      certification($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function certificationContent$lambda($$changed) {
    return function ($composer, $force) {
      certificationContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function certificationItem$lambda($title, $organization, $date) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        certificationItemTitle($title, $composer_0, 0);
        certificationItemOrganization($organization, $composer_0, 0);
        certificationItemOrganization($date, $composer_0, 0);
        var tmp_0 = fillMaxWidth(Companion_getInstance_1());
        HorizontalDivider(tmp_0, null, $composer_0, 8, 2);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function certificationItem$lambda_0($title, $organization, $date, $$changed) {
    return function ($composer, $force) {
      certificationItem($title, $organization, $date, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function certificationItemTitle$lambda($title) {
    return function ($this$H3, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontSize(fontWeight(Companion_getInstance_1(), Companion_getInstance_3().get_Bold_wnz5ke_k$()), get_px(24));
      SpanText($title, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function certificationItemTitle$lambda_0($title, $$changed) {
    return function ($composer, $force) {
      certificationItemTitle($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function certificationItemOrganization$lambda($text, $$changed) {
    return function ($composer, $force) {
      certificationItemOrganization($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-852917536);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      HomeScreen($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda($changed));
    }
  }
  function HomeScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1658742941);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomeScreen$lambda($changed));
    }
  }
  function HomeContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1901484432);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding(fillMaxHeight(width(Companion_getInstance_1(), get_px(700)))), get_white());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomeContent$lambda($changed));
    }
  }
  function ProfileInfoArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1217294554);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      Column(null, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 24576, 15);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProfileInfoArea$lambda($changed));
    }
  }
  function ProfileInfoItem(modifier, text, fontSize_0, fontWeight_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(99678194);
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    var tmp = padding(fontWeight(fontSize(modifier_0._v, fontSize_0), fontWeight_0), get_px(12));
    SpanText(text, tmp, null, null, $composer_0, 64 | 14 & $dirty >> 3, 12);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProfileInfoItem$lambda(modifier_0, text, fontSize_0, fontWeight_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      HomeContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      ProfileInfoArea($composer_0, 0);
      var tmp12_src = '/profile.png';
      var tmp13_modifier = size(Companion_getInstance_1(), get_px(200));
      Image(tmp12_src, tmp13_modifier, null, null, null, 'Varabyte Logo', false, null, $composer_0, 196678, 220);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = SpaceBetween_getInstance();
      Row(null, tmp, null, null, ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24640, 13);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      ProfileInfoItem(null, '\uAE40\uC2AC\uAE30', get_px(60), Companion_getInstance_3().get_Bold_wnz5ke_k$(), $composer_0, 4656, 1);
      ProfileInfoItem(null, 'Android Developer', get_px(28), Companion_getInstance_3().get_SemiBold_aid1c4_k$(), $composer_0, 4656, 1);
      ProfileInfoItem(null, '\uC774\uBA54\uC77C  tmfrl1590@gmail.com', get_px(20), Companion_getInstance_3().get_Normal_22avww_k$(), $composer_0, 4656, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-180475392, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-2055888569, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(13904810, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(158174863, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_3_mxy4sg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_4_ngeztr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeScreen$lambda($$changed) {
    return function ($composer, $force) {
      HomeScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeContent$lambda($$changed) {
    return function ($composer, $force) {
      HomeContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileInfoArea$lambda($$changed) {
    return function ($composer, $force) {
      ProfileInfoArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileInfoItem$lambda($modifier, $text, $fontSize, $fontWeight, $$changed, $$default) {
    return function ($composer, $force) {
      ProfileInfoItem($modifier._v, $text, $fontSize, $fontWeight, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function introductionPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-770027363);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      introduction($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introductionPage$lambda($changed));
    }
  }
  function introduction($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1470445422);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$IntroductionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introduction$lambda($changed));
    }
  }
  function introductionContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(858319095);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding_0(fillMaxHeight(width(Companion_getInstance_1(), get_px(700))), get_px(40)), get_white());
      Column(tmp, null, null, null, ComposableSingletons$IntroductionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introductionContent$lambda($changed));
    }
  }
  function introductionItem(title, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1287880689);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      introductionItemTitle(title, $composer_0, 14 & $dirty);
      introductionItemDescription(description, $composer_0, 14 & $dirty >> 3);
      var tmp = margin_0(fillMaxWidth(Companion_getInstance_1()), get_px(20));
      HorizontalDivider(tmp, null, $composer_0, 8, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introductionItem$lambda(title, description, $changed));
    }
  }
  function introductionItemTitle(title, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1401274382);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.pages.introductionItemTitle.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1808698479, true, introductionItemTitle$lambda(title));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.my.profile.pages.introductionItemTitle.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H3(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introductionItemTitle$lambda_0(title, $changed));
    }
  }
  function introductionItemDescription(description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1460567254);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = lineHeight(Companion_getInstance_1(), 1.5);
      SpanText(description, tmp, null, null, $composer_0, 64 | 14 & $dirty, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(introductionItemDescription$lambda(description, $changed));
    }
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$IntroductionKt$lambda_1$lambda_x80tv2($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      introductionContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroductionKt$lambda_2$lambda_8zgr1v($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      introductionItem('\uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC5EC\uB7EC \uBC29\uD5A5\uC5D0\uC11C \uACE0\uBBFC\uD569\uB2C8\uB2E4.', '\uAC1C\uBC1C\uC790\uB294 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uC0AC\uB78C\uC774\uB77C\uACE0 \uC0DD\uAC01\uD558\uBA70, \uC774\uB97C \uC704\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC804\uCCB4\uC801\uC73C\uB85C \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uC774\uC804 \uD68C\uC0AC\uC5D0\uC11C Android\uC640 \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uBAA8\uB450 \uB2F4\uB2F9\uD558\uBA70 \uC694\uAD6C\uC0AC\uD56D \uBD84\uC11D, DB \uC124\uACC4, \uAC1C\uBC1C, \uBC30\uD3EC\uAE4C\uC9C0 \uD504\uB85C\uC81D\uD2B8 \uC804 \uACFC\uC815\uC744 \uACBD\uD5D8\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uBC18\uC801\uC778 \uD750\uB984\uC744 \uC774\uD574\uD558\uAC8C \uB418\uC5C8\uACE0, \uB2E4\uC591\uD55C \uAD00\uC810\uC5D0\uC11C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uC5ED\uB7C9\uC744 \uD0A4\uC6B8 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n\n\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uC911\uC5D0 \uC571\uC5D0\uC11C \uC11C\uBC84\uC640 \uD1B5\uC2E0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC11C\uBC84\uC5D0\uC11C \uB0B4\uB824\uC624\uB294 \uB370\uC774\uD130\uC758 null \uCC98\uB9AC\uAC00 \uB418\uC9C0 \uC54A\uC544 \uC571\uC774 \uD06C\uB798\uC2DC\uB418\uB294 \uBB38\uC81C\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB7F4 \uB54C\uB9C8\uB2E4 \uC571\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30\uC5D0\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBC88\uAC70\uB85C\uC6C0\uC774 \uC0DD\uAE38 \uAC83 \uAC19\uC544\uC11C, \uC11C\uBC84\uC5D0\uC11C null \uCC98\uB9AC\uB97C \uD558\uB3C4\uB85D \uC694\uCCAD\uD558\uC5EC \uC571\uC758 \uBD88\uD544\uC694\uD55C \uC5C5\uB370\uC774\uD2B8 \uC5C6\uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n\n\uC774\uCC98\uB7FC Android\uC5D0\uB9CC \uAD6D\uD55C\uB418\uC9C0 \uC54A\uACE0, \uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C \uCD5C\uC120\uC758 \uD574\uACB0\uCC45\uC744 \uCC3E\uAE30 \uC704\uD574 \uC5EC\uB7EC \uBC29\uBA74\uC5D0\uC11C \uACE0\uBBFC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.', $composer_0, 54);
      introductionItem('\uCD5C\uC2E0\uAE30\uC220\uC744 \uBE60\uB974\uAC8C \uC2B5\uB4DD\uD558\uACE0 \uC2E4\uBB34\uC5D0 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', '\uC774\uC804 \uD68C\uC0AC\uC5D0\uC11C \uC774\uCEE4\uBA38\uC2A4 \uC571\uC744 \uAC1C\uBC1C\uD558\uBA70 \uD654\uBA74 \uC218\uC640 UI \uBCF5\uC7A1\uC131\uC774 \uC99D\uAC00\uD558\uAC8C \uB418\uBA74\uC11C \uBC18\uBCF5 \uC791\uC5C5\uACFC \uCF54\uB4DC\uB7C9\uC774 \uB9CE\uC544\uC9C0\uB294 \uBB38\uC81C\uB97C \uACAA\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 JetPack Compose\uB97C \uB3C4\uC785\uD558\uC5EC \uC810\uC9C4\uC801\uC73C\uB85C \uC801\uC6A9\uD588\uACE0, UI \uCEF4\uD3EC\uB10C\uD2B8 \uC7AC\uC0AC\uC6A9\uC131\uC744 \uB192\uC5EC \uAC1C\uBC1C \uC18D\uB3C4\uC640 \uC720\uC9C0\uBCF4\uC218 \uD6A8\uC728\uC131\uC744 \uAC1C\uC120\uD55C \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uCF54\uB4DC\uB7C9\uC744 \uC904\uC774\uACE0, \uBCF5\uC7A1\uD55C UI \uC694\uAD6C\uC0AC\uD56D\uB3C4 \uD574\uACB0\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.', $composer_0, 54);
      introductionItem('\uC548\uC815\uC801\uC774\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.', '\uC548\uC815\uC801\uC774\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uAE30 \uC704\uD574\uC11C \uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uC791\uC131\uC744 \uC911\uC694\uD558\uAC8C \uC0DD\uAC01\uD569\uB2C8\uB2E4. Unit Test, UI Test \uC791\uC131\uC73C\uB85C \uCF54\uB4DC\uC758 \uC548\uC815\uC131\uC744 \uB192\uC774\uB824\uACE0 \uB178\uB825\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C\uB85C \uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uC791\uC131\uC744 \uD1B5\uD574 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC774 \uC218\uC815\uB420 \uB54C, \uC608\uC0C1\uD558\uC9C0 \uBABB\uD55C \uC624\uB958\uB97C \uBBF8\uB9AC \uBC1C\uACAC\uD558\uACE0 \uD574\uACB0\uD55C \uACBD\uD5D8\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uC791\uC131\uC758 \uC911\uC694\uC131\uC744 \uB290\uB07C\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\n', $composer_0, 54);
      introductionItem('\uD22C\uBA85\uD55C \uC18C\uD1B5\uACFC \uD6A8\uC728\uC801\uC778 \uD611\uC5C5\uC744 \uC911\uC694\uC2DC\uD569\uB2C8\uB2E4.', '\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uC911 \uBC1C\uC0DD\uD55C \uBB38\uC81C\uB098 \uC2E4\uC218\uB97C \uC194\uC9C1\uD558\uAC8C \uACF5\uC720\uD558\uB294 \uBB38\uD654\uB97C \uC911\uC694\uD558\uAC8C \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uC911\uC5D0, \uC678\uBD80 API \uBA85\uC138\uAC00 \uBCC0\uACBD\uB418\uC11C \uAD00\uB828 \uC791\uC5C5\uC744 \uD574\uC57C\uD588\uC9C0\uB9CC \uC774\uB97C \uBBF8\uB8E8\uB2E4 \uC78A\uC5B4\uBC84\uB9B0 \uC801\uC774 \uC788\uC5C8\uACE0, \uC774\uB97C \uAE09\uD558\uAC8C \uD574\uACB0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uD300\uC6D0\uB4E4\uC5D0\uAC8C \uACF5\uC720\uD558\uC9C0 \uC54A\uC544 \uC77C\uC815\uC774 \uB2A6\uC5B4\uC9C4 \uC77C\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBB38\uC81C\uAC00 \uC0DD\uAE30\uBA74 \uBE60\uB974\uAC8C \uACF5\uC720\uD558\uC5EC \uD568\uAED8 \uD574\uACB0\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uB2E4\uB294 \uAC83\uC744 \uAE68\uB2EC\uC558\uC2B5\uB2C8\uB2E4. \uADF8 \uC774\uD6C4\uB85C\uB294 \uBB38\uC81C\uAC00 \uC0DD\uAE30\uBA74 \uD300\uC6D0\uB4E4\uACFC \uC989\uC2DC \uACF5\uC720\uD558\uC5EC \uD568\uAED8 \uD574\uACB0\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8\uB97C \uC6D0\uD65C\uD558\uAC8C \uB9C8\uBB34\uB9AC \uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n\n', $composer_0, 54);
      introductionItem('\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 UI/UX \uC124\uACC4\uB97C \uD1B5\uD574 \uC9C1\uAD00\uC801\uC778 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4.', '\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 UI/UX \uC124\uACC4\uB97C \uD1B5\uD574 \uB204\uAD6C\uB098 \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC9C1\uAD00\uC801\uC778 \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uD604\uC5D0 \uB178\uB825\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uB9C8\uD2B8\uD31C IoT \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uACE0\uB839\uCE35 \uC0AC\uC6A9\uC790\uC758 \uBD88\uD3B8\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uBC84\uD2BC\uC758 \uC704\uCE58\uC640 \uD06C\uAE30, \uD14D\uC2A4\uD2B8 \uD06C\uAE30\uB97C \uD0A4\uC6B0\uB294 \uB4F1 UI\uB97C \uAC1C\uC120\uD55C \uACBD\uD5D8\uC774 \uC788\uC73C\uBA70, \uC774\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 UI/UX \uC124\uACC4\uAC00 \uC911\uC694\uD558\uB2E4\uB294 \uAC83\uC744 \uB290\uB07C\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.', $composer_0, 54);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroductionKt() {
    ComposableSingletons$IntroductionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(311903601, false, ComposableSingletons$IntroductionKt$lambda_1$lambda_x80tv2));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-2115740178, false, ComposableSingletons$IntroductionKt$lambda_2$lambda_8zgr1v));
  }
  protoOf(ComposableSingletons$IntroductionKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IntroductionKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$IntroductionKt_instance;
  function ComposableSingletons$IntroductionKt_getInstance() {
    if (ComposableSingletons$IntroductionKt_instance == null)
      new ComposableSingletons$IntroductionKt();
    return ComposableSingletons$IntroductionKt_instance;
  }
  function introductionPage$lambda($$changed) {
    return function ($composer, $force) {
      introductionPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function introduction$lambda($$changed) {
    return function ($composer, $force) {
      introduction($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function introductionContent$lambda($$changed) {
    return function ($composer, $force) {
      introductionContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function introductionItem$lambda($title, $description, $$changed) {
    return function ($composer, $force) {
      introductionItem($title, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function introductionItemTitle$lambda($title) {
    return function ($this$H3, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontWeight(Companion_getInstance_1(), Companion_getInstance_3().get_Bold_wnz5ke_k$());
      SpanText($title, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function introductionItemTitle$lambda_0($title, $$changed) {
    return function ($composer, $force) {
      introductionItemTitle($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function introductionItemDescription$lambda($description, $$changed) {
    return function ($composer, $force) {
      introductionItemDescription($description, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Screen2Page($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(523532033);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      Screen2_0($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen2Page$lambda($changed));
    }
  }
  function Screen2_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1260930672);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$Screen2Kt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen2$lambda($changed));
    }
  }
  function Screen2Content($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1781471943);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding(fillMaxHeight(width(Companion_getInstance_1(), get_px(700)))), get_white());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$Screen2Kt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen2Content$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$Screen2Kt$lambda_1$lambda_9xj1g($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      Screen2Content($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$Screen2Kt$lambda_2$lambda_sjoy0r($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      Text('\uACBD\uB825 Content', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$Screen2Kt() {
    ComposableSingletons$Screen2Kt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-104865965, false, ComposableSingletons$Screen2Kt$lambda_1$lambda_9xj1g));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(432589261, false, ComposableSingletons$Screen2Kt$lambda_2$lambda_sjoy0r));
  }
  protoOf(ComposableSingletons$Screen2Kt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$Screen2Kt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$Screen2Kt_instance;
  function ComposableSingletons$Screen2Kt_getInstance() {
    if (ComposableSingletons$Screen2Kt_instance == null)
      new ComposableSingletons$Screen2Kt();
    return ComposableSingletons$Screen2Kt_instance;
  }
  function Screen2Page$lambda($$changed) {
    return function ($composer, $force) {
      Screen2Page($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Screen2$lambda($$changed) {
    return function ($composer, $force) {
      Screen2_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Screen2Content$lambda($$changed) {
    return function ($composer, $force) {
      Screen2Content($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_backgroundColor() {
    _init_properties_Color_kt__6h0l1r();
    return backgroundColor_0;
  }
  var backgroundColor_0;
  function get_white() {
    _init_properties_Color_kt__6h0l1r();
    return white;
  }
  var white;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      backgroundColor_0 = Color('#e9ecef');
      white = Color('#ffffff');
    }
  }
  var com_my_profile_util_Res_Image$stable;
  var com_my_profile_util_Res$stable;
  function Image_0() {
    Image_instance = this;
    this.logo_1 = '/profile.png';
  }
  protoOf(Image_0).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function com_my_profile_util_Res_Image$stableprop_getter() {
    return com_my_profile_util_Res_Image$stable;
  }
  function com_my_profile_util_Res$stableprop_getter() {
    return com_my_profile_util_Res$stable;
  }
  //region block: init
  com_my_profile_navigation_Screen_Home$stable = 0;
  com_my_profile_navigation_Screen_Introduction$stable = 0;
  com_my_profile_navigation_Screen_Screen2$stable = 0;
  com_my_profile_navigation_Screen_Certification$stable = 0;
  com_my_profile_navigation_Screen$stable = 0;
  com_my_profile_util_Res_Image$stable = 0;
  com_my_profile_util_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=profile.js.map
