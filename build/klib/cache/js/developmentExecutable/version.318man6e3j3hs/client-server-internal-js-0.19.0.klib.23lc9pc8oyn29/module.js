(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    root['kobweb-common-client-server-internal'] = factory(typeof this['kobweb-common-client-server-internal'] === 'undefined' ? {} : this['kobweb-common-client-server-internal'], this['kotlin-kotlin-stdlib']);
  }
}(globalThis, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.aa;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var protoOf = kotlin_kotlin.$_$.ac;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var SequenceScope = kotlin_kotlin.$_$.rc;
  var mutableListOf = kotlin_kotlin.$_$.a8;
  var removeFirst = kotlin_kotlin.$_$.j8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l9;
  var initMetadataForLambda = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.f;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var startsWith = kotlin_kotlin.$_$.wd;
  var endsWith = kotlin_kotlin.$_$.ed;
  var sequence = kotlin_kotlin.$_$.yc;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var charArrayOf = kotlin_kotlin.$_$.ka;
  var split = kotlin_kotlin.$_$.td;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var last = kotlin_kotlin.$_$.s7;
  var get_lastIndex = kotlin_kotlin.$_$.p7;
  var joinToString = kotlin_kotlin.$_$.m7;
  var SuspendFunction1 = kotlin_kotlin.$_$.ba;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var replace = kotlin_kotlin.$_$.sd;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(RouteTree$Node$_get_nodes_$slambda_9kqj3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  initMetadataForClass(PatternMapper, 'PatternMapper');
  //endregion
  function _get__children__n7wjoz($this) {
    return $this._children_1;
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_b7agel_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_8w91ht_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_b7agel_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.nodeQueue0__1 = mutableListOf([this.this$0__1]);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue0__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node1__1 = removeFirst(this.nodeQueue0__1);
            var tmp_0 = this;
            tmp_0.nodePath2__1 = ArrayList_init_$Create$();
            this.nodePath2__1.add_utx5q5_k$(this.node1__1);
            this.parent3__1 = this.node1__1.parent_1;
            while (!(this.parent3__1 == null)) {
              this.nodePath2__1.add_dl6gt3_k$(0, this.parent3__1);
              this.parent3__1 = this.parent3__1.parent_1;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.nodePath2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nodeQueue0__1.addAll_4lagoh_k$(this.node1__1._children_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_8w91ht_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8w91ht_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_b7agel_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Node(parent, name, data) {
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
    this.name_1 = name;
    this.data_1 = data;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._children_1 = ArrayList_init_$Create$();
    this.children_1 = this._children_1;
  }
  protoOf(Node).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).set_data_k5a4tt_k$ = function (_set____db54di) {
    this.data_1 = _set____db54di;
  };
  protoOf(Node).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Node).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Node).matches_j19087_k$ = function (name) {
    return this.name_1 === name;
  };
  protoOf(Node).createChild_922k2c_k$ = function (routePart, data) {
    var tmp;
    if (startsWith(routePart, _Char___init__impl__6a9atx(123)) && endsWith(routePart, _Char___init__impl__6a9atx(125))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(this, tmp$ret$1, data);
    } else {
      tmp = new StaticNode(this, routePart, data);
    }
    var node = tmp;
    this._children_1.add_utx5q5_k$(node);
    return node;
  };
  protoOf(Node).findChild_rhky47_k$ = function (routePart) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this._children_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.matches_j19087_k$(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  function ChildNode(parent, name, data) {
    Node.call(this, parent, name, data);
  }
  function StaticNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  function DynamicNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  protoOf(DynamicNode).matches_j19087_k$ = function (name) {
    return true;
  };
  function ResolvedEntry(node, capturedRoutePart) {
    this.node_1 = node;
    this.capturedRoutePart_1 = capturedRoutePart;
  }
  protoOf(ResolvedEntry).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(ResolvedEntry).get_capturedRoutePart_1j67zp_k$ = function () {
    return this.capturedRoutePart_1;
  };
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_redirects__2c3o62($this) {
    return $this.redirects_1;
  }
  function resolveWithoutRedirects($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$();
    var currNode = $this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === $this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last_0 = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp0_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
        resolved.add_utx5q5_k$(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last_0);
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveWithoutRedirects.<anonymous>' call
    if (resolved.isEmpty_y1axqb_k$() || !(last(resolved).node_1.data_1 == null)) {
      tmp_0 = resolved;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var tmp0_iterator = $this.redirects_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.map_epzkwu_k$(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.root_1.children_1.isEmpty_y1axqb_k$()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.root_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.redirects_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).resolve_7ctaaf_k$ = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).resolve$default_qmjuym_k$ = function (route, allowRedirects, $super) {
    allowRedirects = allowRedirects === VOID ? true : allowRedirects;
    return $super === VOID ? this.resolve_7ctaaf_k$(route, allowRedirects) : $super.resolve_7ctaaf_k$.call(this, route, allowRedirects);
  };
  protoOf(RouteTree).isRegistered_1ncfv6_k$ = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).register_q504rs_k$ = function (route, data) {
    if (!(resolveWithoutRedirects(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp0_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = data;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.createChild_922k2c_k$(routePart, tmp$ret$2);
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(RouteTree).registerRedirect_o9yje9_k$ = function (redirectRoute, actualRoute) {
    this.redirects_1.add_utx5q5_k$(PatternMapper_init_$Create$('^' + redirectRoute + '$', actualRoute));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  function toRouteString(_this__u8e3s4) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function toRouteString$lambda(it) {
    return it.capturedRoutePart_1;
  }
  function PatternMapper_init_$Init$(pattern, target, $this) {
    PatternMapper.call($this, Regex_init_$Create$(pattern), target);
    return $this;
  }
  function PatternMapper_init_$Create$(pattern, target) {
    return PatternMapper_init_$Init$(pattern, target, objectCreate(protoOf(PatternMapper)));
  }
  function PatternMapper(pattern, target) {
    this.pattern_1 = pattern;
    this.target_1 = target;
  }
  protoOf(PatternMapper).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMapper).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PatternMapper).map_epzkwu_k$ = function (text) {
    var tmp0_safe_receiver = this.pattern_1.matchEntire_6100vb_k$(text);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var final = this.target_1;
      var inductionVariable = get_lastIndex(tmp0_safe_receiver.get_groupValues_rkv314_k$());
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          final = replace(final, '$' + i, tmp0_safe_receiver.get_groupValues_rkv314_k$().get_c1px32_k$(i));
        }
         while (0 <= inductionVariable);
      return final;
    }
    return tmp;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));
