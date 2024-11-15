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
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$SIdePanelKt, 'ComposableSingletons$SIdePanelKt');
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(Home, 'Home', VOID, Screen);
  initMetadataForObject(Screen1, 'Screen1', VOID, Screen);
  initMetadataForObject(Screen2, 'Screen2', VOID, Screen);
  initMetadataForObject(Screen3, 'Screen3', VOID, Screen);
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$Screen1Kt, 'ComposableSingletons$Screen1Kt');
  initMetadataForObject(ComposableSingletons$Screen2Kt, 'ComposableSingletons$Screen2Kt');
  initMetadataForObject(ComposableSingletons$Screen3Kt, 'ComposableSingletons$Screen3Kt');
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
      IntroductionPage($composer_0, 0);
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
      Screen2Page($composer_0, 0);
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
      Screen3Page($composer_0, 0);
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
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/screen1', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/screen2', VOID, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/screen3', VOID, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1);
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
      var tmp6_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Screen1_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp5_modifier, tmp6_selected, '\uC790\uAE30\uC18C\uAC1C', NavigationItems$lambda_0(context), $composer_0, 392, 0);
      var tmp7_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp8_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Screen2_getInstance().get_route_iy3cio_k$();
      NavigationItem(tmp7_modifier, tmp8_selected, '\uACBD\uB825', NavigationItems$lambda_1(context), $composer_0, 392, 0);
      var tmp9_modifier = margin(Companion_getInstance_1(), VOID, VOID, get_px(24));
      var tmp10_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Screen3_getInstance().get_route_iy3cio_k$();
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
      $composer_0.startReplaceableGroup_ip860b_k$(62691700);
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
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Screen1_getInstance().get_route_iy3cio_k$());
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
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Screen3_getInstance().get_route_iy3cio_k$());
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
  var com_my_profile_navigation_Screen_Screen1$stable;
  var com_my_profile_navigation_Screen_Screen2$stable;
  var com_my_profile_navigation_Screen_Screen3$stable;
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
  function Screen1() {
    Screen1_instance = this;
    Screen.call(this, '/screen1');
  }
  protoOf(Screen1).toString = function () {
    return 'Screen1';
  };
  protoOf(Screen1).hashCode = function () {
    return 41987427;
  };
  protoOf(Screen1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Screen1))
      return false;
    other instanceof Screen1 || THROW_CCE();
    return true;
  };
  var Screen1_instance;
  function Screen1_getInstance() {
    if (Screen1_instance == null)
      new Screen1();
    return Screen1_instance;
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
  function Screen3() {
    Screen3_instance = this;
    Screen.call(this, '/screen3');
  }
  protoOf(Screen3).toString = function () {
    return 'Screen3';
  };
  protoOf(Screen3).hashCode = function () {
    return 41987429;
  };
  protoOf(Screen3).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Screen3))
      return false;
    other instanceof Screen3 || THROW_CCE();
    return true;
  };
  var Screen3_instance;
  function Screen3_getInstance() {
    if (Screen3_instance == null)
      new Screen3();
    return Screen3_instance;
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
  function com_my_profile_navigation_Screen_Screen1$stableprop_getter() {
    return com_my_profile_navigation_Screen_Screen1$stable;
  }
  function com_my_profile_navigation_Screen_Screen2$stableprop_getter() {
    return com_my_profile_navigation_Screen_Screen2$stable;
  }
  function com_my_profile_navigation_Screen_Screen3$stableprop_getter() {
    return com_my_profile_navigation_Screen_Screen3$stable;
  }
  function com_my_profile_navigation_Screen$stableprop_getter() {
    return com_my_profile_navigation_Screen$stable;
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
  function ComposableLambda$invoke$ref_12($boundThis) {
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
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      ProfileInfoArea($composer_0, 0);
      var tmp0_src = '/profile.png';
      var tmp1_modifier = size(Companion_getInstance_1(), get_px(200));
      Image(tmp0_src, tmp1_modifier, null, null, null, 'Varabyte Logo', false, null, $composer_0, 196678, 220);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
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
  function ComposableLambda$invoke$ref_15($boundThis) {
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-180475392, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-2055888569, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(13904810, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(158174863, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
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
  function IntroductionPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1509525070);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      Introduction($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(IntroductionPage$lambda($changed));
    }
  }
  function Introduction($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1591753663);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$Screen1Kt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Introduction$lambda($changed));
    }
  }
  function IntroductionContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-801368744);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding(fillMaxHeight(width(Companion_getInstance_1(), get_px(700)))), get_white());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$Screen1Kt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(IntroductionContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$Screen1Kt$lambda_1$lambda_doufmj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      IntroductionContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$Screen1Kt$lambda_2$lambda_sin5ae($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      Text('\uC790\uAE30\uC18C\uAC1C Content', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$Screen1Kt() {
    ComposableSingletons$Screen1Kt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-1656242082, false, ComposableSingletons$Screen1Kt$lambda_1$lambda_doufmj));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1567303150, false, ComposableSingletons$Screen1Kt$lambda_2$lambda_sin5ae));
  }
  protoOf(ComposableSingletons$Screen1Kt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$Screen1Kt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$Screen1Kt_instance;
  function ComposableSingletons$Screen1Kt_getInstance() {
    if (ComposableSingletons$Screen1Kt_instance == null)
      new ComposableSingletons$Screen1Kt();
    return ComposableSingletons$Screen1Kt_instance;
  }
  function IntroductionPage$lambda($$changed) {
    return function ($composer, $force) {
      IntroductionPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Introduction$lambda($$changed) {
    return function ($composer, $force) {
      Introduction($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IntroductionContent$lambda($$changed) {
    return function ($composer, $force) {
      IntroductionContent($composer, updateChangedFlags($$changed | 1));
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
  function ComposableLambda$invoke$ref_18($boundThis) {
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
  function ComposableLambda$invoke$ref_19($boundThis) {
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-104865965, false, ComposableSingletons$Screen2Kt$lambda_1$lambda_9xj1g));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(432589261, false, ComposableSingletons$Screen2Kt$lambda_2$lambda_sjoy0r));
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
  function Screen3Page($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1292731839);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      Screen3_0($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen3Page$lambda($changed));
    }
  }
  function Screen3_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-291319858);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$Screen3Kt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen3$lambda($changed));
    }
  }
  function Screen3Content($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1820072857);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding(fillMaxHeight(width(Companion_getInstance_1(), get_px(700)))), get_white());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$Screen3Kt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Screen3Content$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$Screen3Kt$lambda_1$lambda_e8phpf($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      Screen3Content($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$Screen3Kt$lambda_2$lambda_ekwzcs($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      Text('\uC790\uACA9\uC99D Content', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$Screen3Kt() {
    ComposableSingletons$Screen3Kt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(864744849, false, ComposableSingletons$Screen3Kt$lambda_1$lambda_e8phpf));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1126011757, false, ComposableSingletons$Screen3Kt$lambda_2$lambda_ekwzcs));
  }
  protoOf(ComposableSingletons$Screen3Kt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$Screen3Kt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$Screen3Kt_instance;
  function ComposableSingletons$Screen3Kt_getInstance() {
    if (ComposableSingletons$Screen3Kt_instance == null)
      new ComposableSingletons$Screen3Kt();
    return ComposableSingletons$Screen3Kt_instance;
  }
  function Screen3Page$lambda($$changed) {
    return function ($composer, $force) {
      Screen3Page($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Screen3$lambda($$changed) {
    return function ($composer, $force) {
      Screen3_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Screen3Content$lambda($$changed) {
    return function ($composer, $force) {
      Screen3Content($composer, updateChangedFlags($$changed | 1));
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
  com_my_profile_navigation_Screen_Screen1$stable = 0;
  com_my_profile_navigation_Screen_Screen2$stable = 0;
  com_my_profile_navigation_Screen_Screen3$stable = 0;
  com_my_profile_navigation_Screen$stable = 0;
  com_my_profile_util_Res_Image$stable = 0;
  com_my_profile_util_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));
