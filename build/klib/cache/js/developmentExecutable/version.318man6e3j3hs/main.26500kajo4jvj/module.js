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
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Arrangement_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var H6 = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$SIdePanelKt, 'ComposableSingletons$SIdePanelKt');
  initMetadataForObject(ComposableSingletons$AproWorkingAreaKt, 'ComposableSingletons$AproWorkingAreaKt');
  initMetadataForObject(ComposableSingletons$OnderWorkingAreaKt, 'ComposableSingletons$OnderWorkingAreaKt');
  initMetadataForObject(ComposableSingletons$OntableWorkingAreaKt, 'ComposableSingletons$OntableWorkingAreaKt');
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(Home, 'Home', VOID, Screen);
  initMetadataForObject(Introduction, 'Introduction', VOID, Screen);
  initMetadataForObject(Career, 'Career', VOID, Screen);
  initMetadataForObject(Project, 'Project', VOID, Screen);
  initMetadataForObject(Certification, 'Certification', VOID, Screen);
  initMetadataForObject(ComposableSingletons$CareerKt, 'ComposableSingletons$CareerKt');
  initMetadataForObject(ComposableSingletons$CertificationKt, 'ComposableSingletons$CertificationKt');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$IntroductionKt, 'ComposableSingletons$IntroductionKt');
  initMetadataForObject(ComposableSingletons$ProjectKt, 'ComposableSingletons$ProjectKt');
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
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', '\uC774\uB825\uC11C')));
    renderComposable('root', ComposableLambda$invoke$ref_6(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      homePage($composer_0, 0);
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
      careerPage($composer_0, 0);
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
      certificationPage($composer_0, 0);
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
      introductionPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      projectPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 911038304, true, ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib(it));
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
        // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
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
  function ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib($it) {
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
  function ComposableLambda$invoke$ref_5($boundThis) {
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
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1109482749, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
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
  protoOf(ComposableSingletons$MainKt).get_lambda_6_ohcpwd_k$ = function () {
    return this.lambda_6_r8sbbk_1;
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
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/career', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/certification', VOID, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/introduction', VOID, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/project', VOID, ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 70, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
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
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
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
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = backgroundColor(padding(minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100)), get_px(100)), get_BACKGROUND_COLOR());
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
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_9($boundThis) {
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
        var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
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
        sidePanel($composer_0, 0);
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
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
  function sidePanel($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-145365672);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      sidePanelInternal($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(sidePanel$lambda($changed));
    }
  }
  function sidePanelInternal($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1314919515);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_verticalArrangement = Arrangement_getInstance().spacedBy_9noyc7_k$(get_px(20));
      var tmp1_modifier = padding_0(backgroundColor(fillMaxHeight(width(Companion_getInstance_1(), get_SIDE_PANEL_WIDTH())), get_WHITE()), get_px(20));
      Column(tmp1_modifier, tmp0_verticalArrangement, null, null, ComposableSingletons$SIdePanelKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(sidePanelInternal$lambda($changed));
    }
  }
  function navigationItems($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2043062439);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var context = rememberPageContext($composer_0, 0);
      var tmp2_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Home_getInstance().get_route_iy3cio_k$();
      navigationItem(tmp2_selected, 'Home', navigationItems$lambda(context), $composer_0, 48, 0);
      var tmp3_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Introduction_getInstance().get_route_iy3cio_k$();
      navigationItem(tmp3_selected, 'Introduce', navigationItems$lambda_0(context), $composer_0, 48, 0);
      var tmp4_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Career_getInstance().get_route_iy3cio_k$();
      navigationItem(tmp4_selected, 'Career', navigationItems$lambda_1(context), $composer_0, 48, 0);
      var tmp5_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Project_getInstance().get_route_iy3cio_k$();
      navigationItem(tmp5_selected, 'Project', navigationItems$lambda_2(context), $composer_0, 48, 0);
      var tmp6_selected = context.get_route_iy3cio_k$().get_path_wos8ry_k$() === Certification_getInstance().get_route_iy3cio_k$();
      navigationItem(tmp6_selected, 'Certification', navigationItems$lambda_3(context), $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(navigationItems$lambda_4($changed));
    }
  }
  function navigationItem(selected, title, onClick_0, $composer, $changed, $default) {
    var selected_0 = {_v: selected};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1528307773);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        selected_0._v = false;
      }
      var tmp = borderRadius(textAlign(height(margin(width(Companion_getInstance_1(), get_px(160)), VOID, get_px(20)), get_px(48)), Companion_getInstance_2().get_Center_3arb0i_k$()), get_px(100));
      var tmp_0 = get_px(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'solid';
      var tmp_2;
      if (selected_0._v) {
        tmp_2 = get_SIDE_PANEL_SELECTED();
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
        Color_getInstance();
        tmp_2 = Color('lightgray');
      }
      var tmp_3 = backgroundColor(cursor(border(tmp, tmp_0, tmp_1, tmp_2), Companion_getInstance_4().get_Pointer_m64vg4_k$()), selected_0._v ? get_SIDE_PANEL_SELECTED() : get_WHITE());
      $composer_0.startReplaceableGroup_ip860b_k$(905480404);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'navigationItem.<anonymous>' call
        var value = navigationItem$lambda(onClick_0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_6 = onClick(tmp_3, tmp0_group);
      var tmp_7 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'navigationItem.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -544918071, true, navigationItem$lambda_0(selected_0, title));
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
      var tmp_9;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'navigationItem.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp_6, tmp_7, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(navigationItem$lambda_1(selected_0, title, onClick_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SIdePanelKt$lambda_1$lambda_nvq4v7($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      navigationItems($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SIdePanelKt() {
    ComposableSingletons$SIdePanelKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1102934844, false, ComposableSingletons$SIdePanelKt$lambda_1$lambda_nvq4v7));
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
  function sidePanel$lambda($$changed) {
    return function ($composer, $force) {
      sidePanel($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function sidePanelInternal$lambda($$changed) {
    return function ($composer, $force) {
      sidePanelInternal($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Home_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda_0($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Introduction_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda_1($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Career_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda_2($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Project_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda_3($context) {
    return function () {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Certification_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function navigationItems$lambda_4($$changed) {
    return function ($composer, $force) {
      navigationItems($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function navigationItem$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function navigationItem$lambda_0($selected, $title) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fontSize(Companion_getInstance_1(), get_px(16));
        var tmp_1;
        if ($selected._v) {
          tmp_1 = get_WHITE();
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Color.black' call
          Color_getInstance();
          tmp_1 = Color('black');
        }
        var tmp7_modifier = color(tmp_0, tmp_1);
        SpanText($title, tmp7_modifier, null, null, $composer_0, 64, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function navigationItem$lambda_1($selected, $title, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      navigationItem($selected._v, $title, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function pageTitle(title, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(856008717);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.pageTitle.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -59144017, true, pageTitle$lambda(title));
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
        // Inline function 'com.my.profile.components.pageTitle.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H2(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(pageTitle$lambda_0(title, $changed));
    }
  }
  function descriptionRow(title, description, $composer, $changed, $default) {
    var description_0 = {_v: description};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-333493377);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        description_0._v = '';
      }
      var tmp = padding_0(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(6));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.descriptionRow.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 712561884, true, descriptionRow$lambda(title, description_0));
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
        // Inline function 'com.my.profile.components.descriptionRow.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(descriptionRow$lambda_0(title, description_0, $changed, $default));
    }
  }
  function customDivider($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1898325731);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
      Color_getInstance();
      var tmp$ret$0 = Color('lightgray');
      var tmp_0 = margin(backgroundColor(tmp, tmp$ret$0), get_HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN());
      HorizontalDivider(tmp_0, null, $composer_0, 8, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(customDivider$lambda($changed));
    }
  }
  function pageTitle$lambda($title) {
    return function ($this$H2, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontWeight(Companion_getInstance_1(), Companion_getInstance_5().get_Bold_wnz5ke_k$());
      SpanText($title, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function pageTitle$lambda_0($title, $$changed) {
    return function ($composer, $force) {
      pageTitle($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function descriptionRow$lambda($title, $description) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = get_px(16);
        boldText($title, tmp_0, null, $composer_0, 64, 4);
        var tmp_1 = $description._v;
        var tmp_2 = get_px(16);
        notBoldText(tmp_1, tmp_2, null, $composer_0, 64, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function descriptionRow$lambda_0($title, $description, $$changed, $$default) {
    return function ($composer, $force) {
      descriptionRow($title, $description._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function customDivider$lambda($$changed) {
    return function ($composer, $force) {
      customDivider($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function careerArea(modifier, projectDescription, roleDescription, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1404342426);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(roleDescription) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 2048 : 1024);
    if (!(($default & 1) === 1) || (!(($dirty & 5851) === 1170) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      var tmp = modifier_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.career.careerArea.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -930535921, true, careerArea$lambda(projectDescription, roleDescription, content));
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
        // Inline function 'com.my.profile.components.career.careerArea.<anonymous>.<anonymous>' call
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(careerArea$lambda_0(modifier_0, projectDescription, roleDescription, content, $changed, $default));
    }
  }
  function OnderDescription($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1524899707);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      SpanText(' - Java\uC5D0\uC11C Kotlin + Compose \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uC5EC \uCF54\uB4DC \uAC04\uACB0\uC131 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      SpanText(' - MVVM \uD328\uD134\uACFC \uBA40\uD2F0\uBAA8\uB4C8 \uC544\uD0A4\uD14D\uCC98 \uB3C4\uC785\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870 \uAC1C\uC120 \uBC0F \uC720\uC9C0\uBCF4\uC218\uC131 \uAC1C\uC120', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uB3C4\uC785\uC73C\uB85C \uC571 \uC548\uC815\uC131 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uC2A4\uB9C8\uD2B8\uB85C PG \uC5F0\uB3D9\uC744 \uD1B5\uD55C \uCE74\uB4DC\uD615 \uC628\uB204\uB9AC \uC0C1\uD488\uAD8C \uACB0\uC81C \uAD6C\uD604\n', null, null, null, $composer_0, 6, 14);
      SpanText(' - Coroutine \uAE30\uBC18 \uBE44\uB3D9\uAE30 \uCC98\uB9AC\uB85C \uACB0\uC81C API \uC694\uCCAD \uC18D\uB3C4 \uAC1C\uC120 \uBC0F \uACB0\uC81C \uC548\uC815\uC131 \uD5A5\uC0C1\n', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(OnderDescription$lambda($changed));
    }
  }
  function OntableDescription($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-81918690);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      SpanText(' - \uD14C\uC774\uBE14 \uC624\uB354 \uC571 \uBC0F \uB9C8\uC2A4\uD130 \uD0DC\uBE14\uB9BF \uC571 \uAC1C\uBC1C, \uC6B4\uC601, \uC720\uC9C0\uBCF4\uC218', null, null, null, $composer_0, 6, 14);
      SpanText(' - WebSocket\uC744 \uD65C\uC6A9\uD55C \uC2E4\uC2DC\uAC04 \uC8FC\uBB38 \uCC98\uB9AC \uC2DC\uC2A4\uD15C \uAD6C\uCD95', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(OntableDescription$lambda($changed));
    }
  }
  function aproDescription($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1995233819);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      SpanText(' - Onvif \uD504\uB85C\uD1A0\uCF5C\uC744 \uD65C\uC6A9\uD55C CCTV \uD1B5\uC2E0 \uC2DC\uC2A4\uD15C \uAC1C\uBC1C', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uCF54\uB4DC \uB9AC\uBDF0 \uB3C4\uC785\uC73C\uB85C \uCF54\uB4DC \uD488\uC9C8 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uC544\uD504\uB85C\uC81C\uC5B4 \uC571 \uAC1C\uBC1C \uBC0F \uC720\uC9C0\uBCF4\uC218', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aproDescription$lambda($changed));
    }
  }
  function careerArea$lambda($projectDescription, $roleDescription, $content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        descriptionRow('\uD504\uB85C\uC81D\uD2B8', $projectDescription, $composer_0, 6, 0);
        descriptionRow('\uC5ED\uD560', $roleDescription, $composer_0, 6, 0);
        descriptionRow('\uC8FC\uC694 \uC5C5\uBB34 : ', null, $composer_0, 6, 2);
        tmp = $content($composer_0, 0);
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
  function careerArea$lambda_0($modifier, $projectDescription, $roleDescription, $content, $$changed, $$default) {
    return function ($composer, $force) {
      careerArea($modifier._v, $projectDescription, $roleDescription, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function OnderDescription$lambda($$changed) {
    return function ($composer, $force) {
      OnderDescription($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OntableDescription$lambda($$changed) {
    return function ($composer, $force) {
      OntableDescription($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aproDescription$lambda($$changed) {
    return function ($composer, $force) {
      aproDescription($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function boldText(text, fontSize_0, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1506423048);
    var $dirty = $changed;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    var tmp = fontWeight(fontSize(modifier_0._v, fontSize_0), Companion_getInstance_5().get_Bold_wnz5ke_k$());
    SpanText(text, tmp, null, null, $composer_0, 64 | 14 & $dirty, 12);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(boldText$lambda(text, fontSize_0, modifier_0, $changed, $default));
    }
  }
  function notBoldText(text, fontSize_0, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1881185441);
    var $dirty = $changed;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    var tmp = fontSize(modifier_0._v, fontSize_0);
    SpanText(text, tmp, null, null, $composer_0, 64 | 14 & $dirty, 12);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(notBoldText$lambda(text, fontSize_0, modifier_0, $changed, $default));
    }
  }
  function boldText$lambda($text, $fontSize, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      boldText($text, $fontSize, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function notBoldText$lambda($text, $fontSize, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      notBoldText($text, $fontSize, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function companyInfoArea(companyName, position, date, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(377991983);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(companyName) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(position) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(date) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.career.companyInfoArea.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -202678440, true, companyInfoArea$lambda(companyName, position, date));
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
        // Inline function 'com.my.profile.components.career.companyInfoArea.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(companyInfoArea$lambda_0(companyName, position, date, $changed));
    }
  }
  function companyInfoArea$lambda($companyName, $position, $date) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        boldText($companyName, get_px(20), padding_0(Companion_getInstance_1(), VOID, VOID, get_px(6)), $composer_0, 576, 0);
        notBoldText($position, get_px(12), padding_0(Companion_getInstance_1(), VOID, VOID, get_px(6)), $composer_0, 576, 0);
        notBoldText($date, get_px(12), padding_0(Companion_getInstance_1(), VOID, VOID, get_px(6)), $composer_0, 576, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function companyInfoArea$lambda_0($companyName, $position, $date, $$changed) {
    return function ($composer, $force) {
      companyInfoArea($companyName, $position, $date, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aproWorkingArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-802878501);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      Column(tmp, null, null, null, ComposableSingletons$AproWorkingAreaKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aproWorkingArea$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AproWorkingAreaKt$lambda_1$lambda_iya33c($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      SpanText(' - \uCD95\uC0AC\uC758 CCTV, \uD658\uAE30 \uC2DC\uC2A4\uD15C, \uCC9C\uC7A5 \uAC1C\uD3D0 \uB4F1 \uB2E4\uC591\uD55C IoT \uAE30\uAE30\uB97C \uD1B5\uD569 \uAD00\uB9AC\uD558\uB294 \uC2A4\uB9C8\uD2B8\uD31C \uC194\uB8E8\uC158 \uAC1C\uBC1C', null, null, null, $composer_0, 6, 14);
      SpanText(' - Onvif \uD504\uB85C\uD1A0\uCF5C\uC744 \uD65C\uC6A9\uD558\uC5EC \uD558\uC774\uD06C\uBE44\uC804, \uB2E4\uD6C4\uC544, \uD55C\uD654 \uB4F1 \uB2E4\uC591\uD55C \uC81C\uC870\uC0AC\uC758 CCTV\uB97C \uC5F0\uB3D9\uD558\uB294 CCTV \uD1B5\uD569 \uC2DC\uC2A4\uD15C \uAD6C\uCD95', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uCF54\uB4DC\uB9AC\uBDF0 \uD504\uB85C\uC138\uC2A4 \uB3C4\uC785\uC744 \uD1B5\uD574 \uCF54\uB4DC \uD488\uC9C8 \uAC1C\uC120 \uBC0F \uC720\uC9C0\uBCF4\uC218\uC131 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uACE0\uAC1D\uCE35 \uC5F0\uB839\uB300\uB97C \uACE0\uB824\uD55C UI/UX \uAC1C\uC120', null, null, null, $composer_0, 6, 14);
      customDivider($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AproWorkingAreaKt() {
    ComposableSingletons$AproWorkingAreaKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1572718162, false, ComposableSingletons$AproWorkingAreaKt$lambda_1$lambda_iya33c));
  }
  protoOf(ComposableSingletons$AproWorkingAreaKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$AproWorkingAreaKt_instance;
  function ComposableSingletons$AproWorkingAreaKt_getInstance() {
    if (ComposableSingletons$AproWorkingAreaKt_instance == null)
      new ComposableSingletons$AproWorkingAreaKt();
    return ComposableSingletons$AproWorkingAreaKt_instance;
  }
  function aproWorkingArea$lambda($$changed) {
    return function ($composer, $force) {
      aproWorkingArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function onderWorkingArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1581381409);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      Column(tmp, null, null, null, ComposableSingletons$OnderWorkingAreaKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(onderWorkingArea$lambda($changed));
    }
  }
  function onderWorkingAreaTitle(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-219336052);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.project.onderWorkingAreaTitle.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 265830058, true, onderWorkingAreaTitle$lambda(text));
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
        // Inline function 'com.my.profile.components.project.onderWorkingAreaTitle.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H6(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(onderWorkingAreaTitle$lambda_0(text, $changed));
    }
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$OnderWorkingAreaKt$lambda_1$lambda_6oh8hs($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      onderWorkingAreaTitle('\uBB38\uC81C', $composer_0, 6);
      descriptionRow('\uBCF5\uC7A1\uD55C \uCF54\uB4DC \uAD6C\uC870', ' : \uB2E8\uC77C \uC561\uD2F0\uBE44\uD2F0\uC5D0 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC774 \uC9D1\uC911\uB418\uC5B4 \uCF54\uB4DC \uBCF5\uC7A1\uB3C4\uAC00 \uB192\uC74C', $composer_0, 54, 0);
      descriptionRow('\uC720\uC9C0\uBCF4\uC218 \uC5B4\uB824\uC6C0', ' : \uC11C\uBC84 \uC751\uB2F5 \uCF54\uB4DC\uC640 \uCEEC\uB7FC\uBA85\uC774 \uD558\uB4DC\uCF54\uB529\uB418\uC5B4 \uC788\uACE0, \uAC1C\uBC1C \uBB38\uC11C\uAC00 \uC5C6\uC5B4 \uC720\uC9C0\uBCF4\uC218\uC5D0 \uC81C\uC57D', $composer_0, 54, 0);
      descriptionRow('\uCFE0\uD3F0 \uBC1C\uAE09 \uC81C\uD55C', ' : \uCFE0\uD3F0 \uBC1C\uAE09\uC774 \uB9E4\uC7A5\uC5D0 \uD55C\uC815\uB418\uC5B4, \uD1B5\uD569\uAD00\uB9AC\uC790\uAC00 \uC720\uC5F0\uD558\uAC8C \uC6B4\uC601\uD560 \uC218 \uC5C6\uB294 \uAD6C\uC870', $composer_0, 54, 0);
      descriptionRow('API \uC911\uB2E8', ' : \uC81C\uB85C\uD398\uC774 \uAE30\uBC18 \uBAA8\uBC14\uC77C \uC628\uB204\uB9AC \uC0C1\uD488\uAD8C API\uAC00 \uAC11\uC790\uAE30 \uC911\uB2E8\uB418\uC5B4 \uACB0\uC81C \uAE30\uB2A5\uC774 \uC911\uB2E8\uB428', $composer_0, 54, 0);
      onderWorkingAreaTitle('\uD574\uACB0', $composer_0, 6);
      SpanText(' - Java \uAE30\uBC18 \uD504\uB85C\uC81D\uD2B8\uB97C Kotlin \uBC0F Jetpack Compose\uB85C 100% \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uC5EC \uCF54\uB4DC \uAC04\uACB0\uC131\uACFC \uC720\uC9C0\uBCF4\uC218\uC131 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      SpanText(' - MVVM \uD328\uD134\uACFC \uBA40\uD2F0\uBAA8\uB4C8 \uC544\uD0A4\uD14D\uCC98\uB97C \uB3C4\uC785\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870 \uBAA8\uB4C8\uD654 \uBC0F \uC720\uC9C0\uBCF4\uC218\uC131 \uAC1C\uC120', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uD558\uB4DC\uCF54\uB529\uB41C \uC11C\uBC84 \uC751\uB2F5 \uCF54\uB4DC\uB97C Enum \uD074\uB798\uC2A4\uB85C \uB9AC\uD329\uD1A0\uB9C1\uD558\uC5EC \uCF54\uB4DC \uAC00\uB3C5\uC131\uACFC \uC720\uC9C0\uBCF4\uC218\uC131 \uAC1C\uC120', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uD14C\uC2A4\uD2B8 \uCF54\uB4DC\uB97C \uB3C4\uC785\uD558\uC5EC \uC571\uC758 \uC548\uC815\uC131\uC744 \uB192\uC774\uACE0, \uBC30\uD3EC \uC2DC \uBC1C\uC0DD\uD560 \uC218 \uC788\uB294 \uBB38\uC81C\uB97C \uCD5C\uC18C\uD654', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uCFE0\uD3F0 \uBC1C\uAE09 \uC8FC\uCCB4\uB97C \uD1B5\uD569\uAD00\uB9AC\uC790\uC640 \uB9E4\uC7A5 \uBAA8\uB450 \uBC1C\uAE09 \uAC00\uB2A5\uD558\uB3C4\uB85D \uC7AC\uC124\uACC4', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uC2A4\uB9C8\uD2B8\uB85C PG \uC5F0\uB3D9\uC744 \uD1B5\uD55C \uCE74\uB4DC\uD615 \uC628\uB204\uB9AC \uC0C1\uD488\uAD8C \uACB0\uC81C \uC2DC\uC2A4\uD15C \uAD6C\uD604', null, null, null, $composer_0, 6, 14);
      SpanText(' - Coroutine \uAE30\uBC18\uC758 \uBE44\uB3D9\uAE30 \uB124\uD2B8\uC6CC\uD06C \uD1B5\uC2E0\uC73C\uB85C \uACB0\uC81C API \uC694\uCCAD \uC18D\uB3C4\uB97C \uAC1C\uC120\uD558\uACE0, \uACB0\uC81C \uC2E4\uD328 \uC2DC \uC624\uB958 \uCC98\uB9AC \uB85C\uC9C1\uC744 \uCD94\uAC00\uD558\uC5EC \uACB0\uC81C \uC548\uC815\uC131 \uD5A5\uC0C1', null, null, null, $composer_0, 6, 14);
      customDivider($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$OnderWorkingAreaKt() {
    ComposableSingletons$OnderWorkingAreaKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(739377558, false, ComposableSingletons$OnderWorkingAreaKt$lambda_1$lambda_6oh8hs));
  }
  protoOf(ComposableSingletons$OnderWorkingAreaKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$OnderWorkingAreaKt_instance;
  function ComposableSingletons$OnderWorkingAreaKt_getInstance() {
    if (ComposableSingletons$OnderWorkingAreaKt_instance == null)
      new ComposableSingletons$OnderWorkingAreaKt();
    return ComposableSingletons$OnderWorkingAreaKt_instance;
  }
  function onderWorkingArea$lambda($$changed) {
    return function ($composer, $force) {
      onderWorkingArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function onderWorkingAreaTitle$lambda($text) {
    return function ($this$H6, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontSize(fontWeight(Companion_getInstance_1(), Companion_getInstance_5().get_Bold_wnz5ke_k$()), get_px(20));
      SpanText($text, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function onderWorkingAreaTitle$lambda_0($text, $$changed) {
    return function ($composer, $force) {
      onderWorkingAreaTitle($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ontableWorkingArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1556094375);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      Column(tmp, null, null, null, ComposableSingletons$OntableWorkingAreaKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ontableWorkingArea$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$OntableWorkingAreaKt$lambda_1$lambda_y4u4o3($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      SpanText(' - \uC57D 5\uAC1C \uB9E4\uC7A5, 30\uB300\uC758 \uD0DC\uBE14\uB9BF\uC5D0\uC11C \uC6B4\uC601\uB418\uB294 \uD14C\uC774\uBE14 \uC624\uB354 \uC2DC\uC2A4\uD15C \uAC1C\uBC1C \uBC0F \uC720\uC9C0\uBCF4\uC218', null, null, null, $composer_0, 6, 14);
      SpanText(' - WebSocket\uC744 \uD65C\uC6A9\uD55C \uC2E4\uC2DC\uAC04 \uC8FC\uBB38 \uCC98\uB9AC \uC2DC\uC2A4\uD15C \uAC1C\uBC1C', null, null, null, $composer_0, 6, 14);
      SpanText(' - \uB9E4\uC7A5\uBCC4 \uC8FC\uBB38 \uD604\uD669\uC744 \uC2E4\uC2DC\uAC04 \uBAA8\uB2C8\uD130\uB9C1 \uD560 \uC218 \uC788\uB294 \uD1B5\uD569 \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uAD6C\uCD95', null, null, null, $composer_0, 6, 14);
      customDivider($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$OntableWorkingAreaKt() {
    ComposableSingletons$OntableWorkingAreaKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(2095753104, false, ComposableSingletons$OntableWorkingAreaKt$lambda_1$lambda_y4u4o3));
  }
  protoOf(ComposableSingletons$OntableWorkingAreaKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$OntableWorkingAreaKt_instance;
  function ComposableSingletons$OntableWorkingAreaKt_getInstance() {
    if (ComposableSingletons$OntableWorkingAreaKt_instance == null)
      new ComposableSingletons$OntableWorkingAreaKt();
    return ComposableSingletons$OntableWorkingAreaKt_instance;
  }
  function ontableWorkingArea$lambda($$changed) {
    return function ($composer, $force) {
      ontableWorkingArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function projectDescriptionArea(projectTile, companyName, projectDuration, projectDescription1, projectDescription2, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(333429448);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectTile) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(companyName) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectDuration) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectDescription1) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectDescription2) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.project.projectDescriptionArea.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -732755137, true, projectDescriptionArea$lambda(projectTile, companyName, projectDuration, projectDescription1, projectDescription2));
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
        // Inline function 'com.my.profile.components.project.projectDescriptionArea.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(projectDescriptionArea$lambda_0(projectTile, companyName, projectDuration, projectDescription1, projectDescription2, $changed));
    }
  }
  function projectTitle(projectTile, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(215301241);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectTile) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.my.profile.components.project.projectTitle.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 767438296, true, projectTitle$lambda(projectTile));
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
        // Inline function 'com.my.profile.components.project.projectTitle.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(projectTitle$lambda_0(projectTile, $changed));
    }
  }
  function companyName(companyName, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-167284980);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(companyName) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.Color.gray' call
      Color_getInstance();
      var tmp$ret$0 = Color('gray');
      var tmp_0 = margin_0(fontSize(color(tmp, tmp$ret$0), get_px(12)), VOID, VOID, get_px(4));
      SpanText(companyName, tmp_0, null, null, $composer_0, 64 | 14 & $dirty, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(companyName$lambda(companyName, $changed));
    }
  }
  function projectDuration(projectDuration, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-377159801);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(projectDuration) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.Color.gray' call
      Color_getInstance();
      var tmp$ret$0 = Color('gray');
      var tmp_0 = padding_0(fontSize(color(tmp, tmp$ret$0), get_px(12)), VOID, VOID, get_px(10));
      SpanText(projectDuration, tmp_0, null, null, $composer_0, 64 | 14 & $dirty, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(projectDuration$lambda(projectDuration, $changed));
    }
  }
  function projectDescriptionArea$lambda($projectTile, $companyName, $projectDuration, $projectDescription1, $projectDescription2) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        projectTitle($projectTile, $composer_0, 0);
        companyName($companyName, $composer_0, 0);
        projectDuration($projectDuration, $composer_0, 0);
        descriptionRow('\uD504\uB85C\uC81D\uD2B8 \uC124\uBA85', $projectDescription1, $composer_0, 6, 0);
        descriptionRow('\uD504\uB85C\uC81D\uD2B8 \uBC30\uACBD', $projectDescription2, $composer_0, 6, 0);
        customDivider($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function projectDescriptionArea$lambda_0($projectTile, $companyName, $projectDuration, $projectDescription1, $projectDescription2, $$changed) {
    return function ($composer, $force) {
      projectDescriptionArea($projectTile, $companyName, $projectDuration, $projectDescription1, $projectDescription2, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function projectTitle$lambda($projectTile) {
    return function ($this$H3, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontWeight(Companion_getInstance_1(), Companion_getInstance_5().get_Bold_wnz5ke_k$());
      SpanText($projectTile, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function projectTitle$lambda_0($projectTile, $$changed) {
    return function ($composer, $force) {
      projectTitle($projectTile, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function companyName$lambda($companyName, $$changed) {
    return function ($composer, $force) {
      companyName($companyName, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function projectDuration$lambda($projectDuration, $$changed) {
    return function ($composer, $force) {
      projectDuration($projectDuration, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_my_profile_navigation_Screen_Home$stable;
  var com_my_profile_navigation_Screen_Introduction$stable;
  var com_my_profile_navigation_Screen_Career$stable;
  var com_my_profile_navigation_Screen_Project$stable;
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
  function Career() {
    Career_instance = this;
    Screen.call(this, '/career');
  }
  protoOf(Career).toString = function () {
    return 'Career';
  };
  protoOf(Career).hashCode = function () {
    return -2121127008;
  };
  protoOf(Career).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Career))
      return false;
    other instanceof Career || THROW_CCE();
    return true;
  };
  var Career_instance;
  function Career_getInstance() {
    if (Career_instance == null)
      new Career();
    return Career_instance;
  }
  function Project() {
    Project_instance = this;
    Screen.call(this, '/project');
  }
  protoOf(Project).toString = function () {
    return 'Project';
  };
  protoOf(Project).hashCode = function () {
    return 2101259063;
  };
  protoOf(Project).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Project))
      return false;
    other instanceof Project || THROW_CCE();
    return true;
  };
  var Project_instance;
  function Project_getInstance() {
    if (Project_instance == null)
      new Project();
    return Project_instance;
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
  function com_my_profile_navigation_Screen_Career$stableprop_getter() {
    return com_my_profile_navigation_Screen_Career$stable;
  }
  function com_my_profile_navigation_Screen_Project$stableprop_getter() {
    return com_my_profile_navigation_Screen_Project$stable;
  }
  function com_my_profile_navigation_Screen_Certification$stableprop_getter() {
    return com_my_profile_navigation_Screen_Certification$stable;
  }
  function com_my_profile_navigation_Screen$stableprop_getter() {
    return com_my_profile_navigation_Screen$stable;
  }
  function careerPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-178942051);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      career($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(careerPage$lambda($changed));
    }
  }
  function career($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1999255854);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$CareerKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(career$lambda($changed));
    }
  }
  function careerContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1740912431);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding_1(fillMaxHeight(width(Companion_getInstance_1(), get_RIGHT_CONTENT_WIDTH())), get_RIGHT_CONTENT_PADDING()), get_WHITE());
      Column(tmp, null, null, null, ComposableSingletons$CareerKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(careerContent$lambda($changed));
    }
  }
  function theDreamakers($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-913779714);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      companyInfoArea('(\uC8FC)\uB354\uB4DC\uB9BC\uBA54\uC774\uCEE4\uC2A4', '\uC5F0\uAD6C\uC6D0 | R&D \uC5F0\uAD6C \uAC1C\uBC1C\uBD80\uC11C', '2023.09 ~ 2024.09', $composer_0, 438);
      careerArea(margin_0(Companion_getInstance_1(), VOID, VOID, get_px(32)), ' : \uC628\uB204\uB9AC \uC0C1\uD488\uAD8C \uAE30\uBC18\uC758 \uC804\uD1B5\uC2DC\uC7A5 \uC774\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC \uC628\uB204\uB9AC\uC624\uB354 (\uC628\uB354) ', ' : Kotlin \uAE30\uBC18 Android \uBC0F \uBC31\uC5D4\uB4DC \uAC1C\uBC1C', ComposableSingletons$CareerKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3512, 0);
      careerArea(null, ' : \uC628\uD14C\uC774\uBE14 (\uD14C\uC774\uBE14\uC624\uB354)', ' : Kotlin \uAE30\uBC18 Android \uBC0F \uBC31\uC5D4\uB4DC \uAC1C\uBC1C', ComposableSingletons$CareerKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 3504, 1);
      customDivider($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(theDreamakers$lambda($changed));
    }
  }
  function miraeCNC($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-350888914);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      companyInfoArea('\uBBF8\uB798\uC528\uC5D4\uC528', '\uB300\uB9AC | \uAC1C\uBC1C\uD300', '2020.11 ~ 2023.07', $composer_0, 438);
      careerArea(null, ' : Onvif \uAE30\uBC18 CCTV \uD1B5\uC2E0 \uAC1C\uBC1C (\uC544\uD504\uB85C\uC81C\uC5B4)', ' : Java \uAE30\uBC18 Android \uAC1C\uBC1C \uB2F4\uB2F9', ComposableSingletons$CareerKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 3504, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(miraeCNC$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CareerKt$lambda_1$lambda_mfun1q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      careerContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CareerKt$lambda_2$lambda_6dru0h($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      pageTitle('\uACBD\uB825', $composer_0, 6);
      theDreamakers($composer_0, 0);
      miraeCNC($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CareerKt$lambda_3$lambda_z7eb2o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      OnderDescription($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CareerKt$lambda_4$lambda_7039u9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      OntableDescription($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CareerKt$lambda_5$lambda_ltj77y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      aproDescription($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CareerKt() {
    ComposableSingletons$CareerKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1414984625, false, ComposableSingletons$CareerKt$lambda_1$lambda_mfun1q));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-570022234, false, ComposableSingletons$CareerKt$lambda_2$lambda_6dru0h));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(369269657, false, ComposableSingletons$CareerKt$lambda_3$lambda_z7eb2o));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-2077251504, false, ComposableSingletons$CareerKt$lambda_4$lambda_7039u9));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-931233869, false, ComposableSingletons$CareerKt$lambda_5$lambda_ltj77y));
  }
  protoOf(ComposableSingletons$CareerKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CareerKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$CareerKt).get_lambda_3_mxy4sg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$CareerKt).get_lambda_4_ngeztr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$CareerKt).get_lambda_5_nyvuv2_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  var ComposableSingletons$CareerKt_instance;
  function ComposableSingletons$CareerKt_getInstance() {
    if (ComposableSingletons$CareerKt_instance == null)
      new ComposableSingletons$CareerKt();
    return ComposableSingletons$CareerKt_instance;
  }
  function careerPage$lambda($$changed) {
    return function ($composer, $force) {
      careerPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function career$lambda($$changed) {
    return function ($composer, $force) {
      career($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function careerContent$lambda($$changed) {
    return function ($composer, $force) {
      careerContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function theDreamakers$lambda($$changed) {
    return function ($composer, $force) {
      theDreamakers($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function miraeCNC$lambda($$changed) {
    return function ($composer, $force) {
      miraeCNC($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
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
      var tmp = backgroundColor(padding_1(fillMaxHeight(width(Companion_getInstance_1(), get_RIGHT_CONTENT_WIDTH())), get_RIGHT_CONTENT_PADDING()), get_WHITE());
      Column(tmp, null, null, null, ComposableSingletons$CertificationKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
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
        var value = ComposableLambda$invoke$ref_30(dispatchReceiver);
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
        var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
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
      var tmp = padding_0(fontSize(Companion_getInstance_1(), get_px(16)), VOID, VOID, get_px(6));
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
  function ComposableLambda$invoke$ref_28($boundThis) {
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
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CertificationKt$lambda_2$lambda_m2etxt($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      pageTitle('\uC790\uACA9\uC99D', $composer_0, 6);
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(248434187, false, ComposableSingletons$CertificationKt$lambda_1$lambda_k52qz4));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1115934110, false, ComposableSingletons$CertificationKt$lambda_2$lambda_m2etxt));
  }
  protoOf(ComposableSingletons$CertificationKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CertificationKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
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
        customDivider($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
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
      var tmp = fontWeight(Companion_getInstance_1(), Companion_getInstance_5().get_Bold_wnz5ke_k$());
      SpanText($title, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
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
  function homePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1954525952);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      homeScreen($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(homePage$lambda($changed));
    }
  }
  function homeScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-945012861);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(homeScreen$lambda($changed));
    }
  }
  function homeContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1250688432);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(fillMaxHeight(width(Companion_getInstance_1(), get_RIGHT_CONTENT_WIDTH())), get_RIGHT_CONTENT_PADDING());
      // Inline function 'org.jetbrains.compose.web.css.Color.white' call
      Color_getInstance();
      var tmp$ret$0 = Color('white');
      var tmp_0 = backgroundColor(tmp, tmp$ret$0);
      var tmp_1 = CenterHorizontally_getInstance();
      Column(tmp_0, null, tmp_1, null, ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(homeContent$lambda($changed));
    }
  }
  function profileInfoArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2011888390);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxHeight(width(Companion_getInstance_1(), get_px(600)));
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$IndexKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(profileInfoArea$lambda($changed));
    }
  }
  function profileInfoItem(modifier, text, fontSize_0, fontWeight_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(297110482);
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    var tmp = padding(fontWeight(fontSize(modifier_0._v, fontSize_0), fontWeight_0), get_px(8));
    SpanText(text, tmp, null, null, $composer_0, 64 | 14 & $dirty >> 3, 12);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(profileInfoItem$lambda(modifier_0, text, fontSize_0, fontWeight_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      homeContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_src = '/profile.png';
      var tmp1_modifier = size(Companion_getInstance_1(), get_PROFILE_IMAGE_SIZE());
      Image(tmp0_src, tmp1_modifier, null, null, null, 'Profile Logo', false, null, $composer_0, 196678, 220);
      profileInfoArea($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp8_modifier = color(fontWeight(fontSize(Companion_getInstance_1(), get_px(16)), Companion_getInstance_5().get_Bold_wnz5ke_k$()), get_WHITE());
      SpanText('Android Developer', tmp8_modifier, null, null, $composer_0, 70, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp2_fontSize = get_px(24);
      var tmp3_fontWeight = Companion_getInstance_5().get_Bold_wnz5ke_k$();
      var tmp4_modifier = margin_0(Companion_getInstance_1(), get_px(8));
      profileInfoItem(tmp4_modifier, '\uAE40\uC2AC\uAE30', tmp2_fontSize, tmp3_fontWeight, $composer_0, 4664, 0);
      var tmp5_$receiver = width(Companion_getInstance_1(), get_px(168));
      var tmp6_bottom = get_px(8);
      var tmp7_top = get_px(4);
      var tmp = borderRadius(textAlign(height(margin_0(tmp5_$receiver, tmp7_top, VOID, tmp6_bottom), get_px(36)), Companion_getInstance_2().get_Center_3arb0i_k$()), get_px(100));
      var tmp_0 = get_px(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'solid';
      // Inline function 'org.jetbrains.compose.web.css.Color.gray' call
      Color_getInstance();
      var tmp$ret$4 = Color('gray');
      var tmp_2 = border(tmp, tmp_0, tmp_1, tmp$ret$4);
      // Inline function 'org.jetbrains.compose.web.css.Color.gray' call
      Color_getInstance();
      var tmp$ret$5 = Color('gray');
      var tmp_3 = backgroundColor(tmp_2, tmp$ret$5);
      var tmp_4 = Center_getInstance();
      Box(tmp_3, tmp_4, null, ComposableSingletons$IndexKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3144, 4);
      profileInfoItem(null, 'Email : tmfrl1590@gmail.com', get_px(16), Companion_getInstance_5().get_Normal_22avww_k$(), $composer_0, 4656, 1);
      profileInfoItem(null, 'GitHub : https://github.com/tmfrl1590', get_px(16), Companion_getInstance_5().get_Normal_22avww_k$(), $composer_0, 4656, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(533254688, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(86122041, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(575179177, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-907609489, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
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
  function homePage$lambda($$changed) {
    return function ($composer, $force) {
      homePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function homeScreen$lambda($$changed) {
    return function ($composer, $force) {
      homeScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function homeContent$lambda($$changed) {
    return function ($composer, $force) {
      homeContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function profileInfoArea$lambda($$changed) {
    return function ($composer, $force) {
      profileInfoArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function profileInfoItem$lambda($modifier, $text, $fontSize, $fontWeight, $$changed, $$default) {
    return function ($composer, $force) {
      profileInfoItem($modifier._v, $text, $fontSize, $fontWeight, $composer, updateChangedFlags($$changed | 1), $$default);
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
      var tmp = backgroundColor(padding_1(fillMaxHeight(width(Companion_getInstance_1(), get_RIGHT_CONTENT_WIDTH())), get_RIGHT_CONTENT_PADDING()), get_WHITE());
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
      customDivider($composer_0, 0);
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
        var value = ComposableLambda$invoke$ref_38(dispatchReceiver);
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
      var tmp = lineHeight(Companion_getInstance_1(), 1.6);
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
  function ComposableLambda$invoke$ref_36($boundThis) {
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
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroductionKt$lambda_2$lambda_8zgr1v($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      introductionItem('\uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC5EC\uB7EC \uBC29\uD5A5\uC5D0\uC11C \uACE0\uBBFC\uD569\uB2C8\uB2E4.', '\uAC1C\uBC1C\uC790\uB294 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uC0AC\uB78C\uC774\uB77C\uACE0 \uC0DD\uAC01\uD558\uBA70, \uC774\uB97C \uC704\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC804\uCCB4\uC801\uC73C\uB85C \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uC774\uC804 \uD68C\uC0AC\uC5D0\uC11C Android\uC640 \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uBAA8\uB450 \uB2F4\uB2F9\uD558\uBA70 \uC694\uAD6C\uC0AC\uD56D \uBD84\uC11D, DB \uC124\uACC4, \uAC1C\uBC1C, \uBC30\uD3EC\uAE4C\uC9C0 \uD504\uB85C\uC81D\uD2B8 \uC804 \uACFC\uC815\uC744 \uACBD\uD5D8\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uBC18\uC801\uC778 \uD750\uB984\uC744 \uC774\uD574\uD558\uAC8C \uB418\uC5C8\uACE0, \uB2E4\uC591\uD55C \uAD00\uC810\uC5D0\uC11C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uC5ED\uB7C9\uC744 \uD0A4\uC6B8 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uC911\uC5D0 \uC571\uC5D0\uC11C \uC11C\uBC84\uC640 \uD1B5\uC2E0\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC11C\uBC84\uC5D0\uC11C \uB0B4\uB824\uC624\uB294 \uB370\uC774\uD130\uC758 null \uCC98\uB9AC\uAC00 \uB418\uC9C0 \uC54A\uC544 \uC571\uC774 \uD06C\uB798\uC2DC\uB418\uB294 \uBB38\uC81C\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB7F4 \uB54C\uB9C8\uB2E4 \uC571\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30\uC5D0\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBC88\uAC70\uB85C\uC6C0\uC774 \uC0DD\uAE38 \uAC83 \uAC19\uC544\uC11C, \uC11C\uBC84\uC5D0\uC11C null \uCC98\uB9AC\uB97C \uD558\uB3C4\uB85D \uC694\uCCAD\uD558\uC5EC \uC571\uC758 \uBD88\uD544\uC694\uD55C \uC5C5\uB370\uC774\uD2B8 \uC5C6\uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n\n\uC774\uCC98\uB7FC Android\uC5D0\uB9CC \uAD6D\uD55C\uB418\uC9C0 \uC54A\uACE0, \uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C \uCD5C\uC120\uC758 \uD574\uACB0\uCC45\uC744 \uCC3E\uAE30 \uC704\uD574 \uC5EC\uB7EC \uBC29\uBA74\uC5D0\uC11C \uACE0\uBBFC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.', $composer_0, 54);
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(311903601, false, ComposableSingletons$IntroductionKt$lambda_1$lambda_x80tv2));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-2115740178, false, ComposableSingletons$IntroductionKt$lambda_2$lambda_8zgr1v));
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
      var tmp = fontWeight(Companion_getInstance_1(), Companion_getInstance_5().get_Bold_wnz5ke_k$());
      SpanText($title, tmp, null, null, $composer_0, 64, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
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
  function projectPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2023114619);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      project($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(projectPage$lambda($changed));
    }
  }
  function project($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1198270602);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      AdminPageLayout(ComposableSingletons$ProjectKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(project$lambda($changed));
    }
  }
  function projectContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1339524665);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding_1(fillMaxHeight(width(Companion_getInstance_1(), get_RIGHT_CONTENT_WIDTH())), get_RIGHT_CONTENT_PADDING()), get_WHITE());
      Column(tmp, null, null, null, ComposableSingletons$ProjectKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(projectContent$lambda($changed));
    }
  }
  function onderProjectInfoArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(678403781);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      projectDescriptionArea('\uC628\uB204\uB9AC \uC0C1\uD488\uAD8C \uAE30\uBC18\uC758 \uC804\uD1B5\uC2DC\uC7A5 \uC774\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC \uC628\uB204\uB9AC\uC624\uB354 \uC628\uB354', '(\uC8FC)\uB354\uB4DC\uB9BC\uBA54\uC774\uCEE4\uC2A4', '2024.01 ~ 2024.05', ' : \uC804\uD1B5\uC2DC\uC7A5\uACFC \uC0C1\uC810\uAC00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC628\uB204\uB9AC \uC0C1\uD488\uAD8C \uAE30\uBC18\uC758 \uC774\uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC(\uC628\uB354)\uC73C\uB85C,\n   \uC0C1\uC6A9\uD654\uB97C \uBAA9\uD45C\uB85C \uAC1C\uBC1C\uB41C \uD504\uB85C\uC81D\uD2B8\n', ' : \uC628\uB354\uB294 R&D \uC5F0\uAD6C\uAC1C\uBC1C \uACFC\uC815\uC5D0\uC11C \uAC1C\uBC1C\uB418\uC5C8\uC73C\uB098, \uCFE0\uD3F0 \uB3C4\uBA54\uC778 \uBB38\uC81C\uC640 \uBCF5\uC7A1\uD55C \uCF54\uB4DC \uAD6C\uC870\n   \uB4F1\uC73C\uB85C \uC778\uD574 \uC0C1\uC6A9\uD654\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uC5C8\uACE0, \uC774\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC7AC\uAC1C\uBC1C\uC774 \uACB0\uC815\uB428', $composer_0, 28086);
      onderWorkingArea($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(onderProjectInfoArea$lambda($changed));
    }
  }
  function ontableProjectInfoArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(672094466);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      projectDescriptionArea('\uD14C\uC774\uBE14\uC624\uB354 \uC628\uD14C\uC774\uBE14', '(\uC8FC)\uB354\uB4DC\uB9BC\uBA54\uC774\uCEE4\uC2A4', '2024.06 ~ 2024.08', ' : \uD14C\uC774\uBE14 \uC624\uB354 \uC2DC\uC2A4\uD15C (\uC628\uD14C\uC774\uBE14)', ' : \uC628\uB354 \uC11C\uBE44\uC2A4\uB9CC\uC73C\uB85C\uB294 \uACBD\uC7C1\uB825\uC774 \uBD80\uC871\uD558\uB2E4\uB294 \uD310\uB2E8\uC5D0, \uB9E4\uC7A5\uC5D0\uC11C \uC27D\uAC8C\n  \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD14C\uC774\uBE14 \uC624\uB354 \uC11C\uBE44\uC2A4\uB97C \uCD94\uAC00\uB85C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uAC1C\uBC1C\uC744 \uACB0\uC815\uD558\uAC8C \uB428', $composer_0, 28086);
      ontableWorkingArea($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ontableProjectInfoArea$lambda($changed));
    }
  }
  function aproProjectInfoArea($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-906690949);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      projectDescriptionArea('CCTV \uAE30\uBC18 ONVIF \uD1B5\uC2E0 \uCCB4\uACC4 \uAD6C\uCD95', '\uBBF8\uB798\uC528\uC5D4\uC528', '2020.11 ~ 2023.07', ' : \uC2A4\uB9C8\uD2B8\uD31C IoT \uD1B5\uD569 \uAD00\uB9AC \uC194\uB8E8\uC158', ' : \uD558\uC774\uD06C\uBE44\uC804 CCTV \uC218\uAE09 \uBB38\uC81C\uB85C \uB2E4\uC591\uD55C \uC81C\uC870\uC0AC\uC758 CCTV\uB97C\n \uC5F0\uB3D9\uD560 \uD544\uC694\uC131\uC774 \uC0DD\uACA8\uC11C \uC9C4\uD589\uD558\uAC8C \uB428', $composer_0, 28086);
      aproWorkingArea($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aproProjectInfoArea$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ProjectKt$lambda_1$lambda_2x82gf($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      projectContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectKt$lambda_2$lambda_vqujim($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      pageTitle('\uD504\uB85C\uC81D\uD2B8', $composer_0, 6);
      onderProjectInfoArea($composer_0, 0);
      ontableProjectInfoArea($composer_0, 0);
      aproProjectInfoArea($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProjectKt() {
    ComposableSingletons$ProjectKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-1940631987, false, ComposableSingletons$ProjectKt$lambda_1$lambda_2x82gf));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(-1649645698, false, ComposableSingletons$ProjectKt$lambda_2$lambda_vqujim));
  }
  protoOf(ComposableSingletons$ProjectKt).get_lambda_1_lx0epu_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ProjectKt).get_lambda_2_mfh9r5_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$ProjectKt_instance;
  function ComposableSingletons$ProjectKt_getInstance() {
    if (ComposableSingletons$ProjectKt_instance == null)
      new ComposableSingletons$ProjectKt();
    return ComposableSingletons$ProjectKt_instance;
  }
  function projectPage$lambda($$changed) {
    return function ($composer, $force) {
      projectPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function project$lambda($$changed) {
    return function ($composer, $force) {
      project($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function projectContent$lambda($$changed) {
    return function ($composer, $force) {
      projectContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function onderProjectInfoArea$lambda($$changed) {
    return function ($composer, $force) {
      onderProjectInfoArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ontableProjectInfoArea$lambda($$changed) {
    return function ($composer, $force) {
      ontableProjectInfoArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aproProjectInfoArea$lambda($$changed) {
    return function ($composer, $force) {
      aproProjectInfoArea($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_BACKGROUND_COLOR() {
    _init_properties_Color_kt__6h0l1r();
    return BACKGROUND_COLOR;
  }
  var BACKGROUND_COLOR;
  function get_WHITE() {
    _init_properties_Color_kt__6h0l1r();
    return WHITE;
  }
  var WHITE;
  function get_SIDE_PANEL_SELECTED() {
    _init_properties_Color_kt__6h0l1r();
    return SIDE_PANEL_SELECTED;
  }
  var SIDE_PANEL_SELECTED;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      BACKGROUND_COLOR = Color('#e9ecef');
      WHITE = Color('#ffffff');
      SIDE_PANEL_SELECTED = Color('#44dccf');
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
  function get_SIDE_PANEL_WIDTH() {
    _init_properties_Diment_kt__1aq7ct();
    return SIDE_PANEL_WIDTH;
  }
  var SIDE_PANEL_WIDTH;
  function get_RIGHT_CONTENT_WIDTH() {
    _init_properties_Diment_kt__1aq7ct();
    return RIGHT_CONTENT_WIDTH;
  }
  var RIGHT_CONTENT_WIDTH;
  function get_RIGHT_CONTENT_PADDING() {
    _init_properties_Diment_kt__1aq7ct();
    return RIGHT_CONTENT_PADDING;
  }
  var RIGHT_CONTENT_PADDING;
  function get_HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN() {
    _init_properties_Diment_kt__1aq7ct();
    return HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN;
  }
  var HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN;
  function get_PROFILE_IMAGE_SIZE() {
    _init_properties_Diment_kt__1aq7ct();
    return PROFILE_IMAGE_SIZE;
  }
  var PROFILE_IMAGE_SIZE;
  var properties_initialized_Diment_kt_i1fe4b;
  function _init_properties_Diment_kt__1aq7ct() {
    if (!properties_initialized_Diment_kt_i1fe4b) {
      properties_initialized_Diment_kt_i1fe4b = true;
      SIDE_PANEL_WIDTH = get_px(200);
      RIGHT_CONTENT_WIDTH = get_px(800);
      RIGHT_CONTENT_PADDING = get_px(60);
      HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN = get_px(28);
      PROFILE_IMAGE_SIZE = get_px(200);
    }
  }
  //region block: init
  com_my_profile_navigation_Screen_Home$stable = 0;
  com_my_profile_navigation_Screen_Introduction$stable = 0;
  com_my_profile_navigation_Screen_Career$stable = 0;
  com_my_profile_navigation_Screen_Project$stable = 0;
  com_my_profile_navigation_Screen_Certification$stable = 0;
  com_my_profile_navigation_Screen$stable = 0;
  com_my_profile_util_Res_Image$stable = 0;
  com_my_profile_util_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));
