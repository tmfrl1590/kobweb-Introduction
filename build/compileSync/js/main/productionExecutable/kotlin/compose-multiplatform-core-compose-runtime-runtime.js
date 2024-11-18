(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    root['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-collection-collection']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.q6;
  var initMetadataForInterface = kotlin_kotlin.$_$.d6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var toString = kotlin_kotlin.$_$.s6;
  var initMetadataForClass = kotlin_kotlin.$_$.a6;
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.u8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.b9;
  var intercepted = kotlin_kotlin.$_$.w4;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.e5;
  var fold = kotlin_kotlin.$_$.d5;
  var minusKey = kotlin_kotlin.$_$.f5;
  var plus = kotlin_kotlin.$_$.h5;
  var isInterface = kotlin_kotlin.$_$.j6;
  var equals = kotlin_kotlin.$_$.u5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var fill = kotlin_kotlin.$_$.e3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var rotateLeft = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.z5;
  var Enum = kotlin_kotlin.$_$.j8;
  var emptyList = kotlin_kotlin.$_$.c3;
  var sortWith = kotlin_kotlin.$_$.j4;
  var rotateRight = kotlin_kotlin.$_$.a9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.d9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b6;
  var IllegalStateException = kotlin_kotlin.$_$.m8;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.o5;
  var defineProp = kotlin_kotlin.$_$.t5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var lazy = kotlin_kotlin.$_$.w8;
  var firstOrNull = kotlin_kotlin.$_$.h3;
  var compareTo = kotlin_kotlin.$_$.s5;
  var Comparator = kotlin_kotlin.$_$.i8;
  var KProperty1 = kotlin_kotlin.$_$.a7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var isArray = kotlin_kotlin.$_$.h6;
  var KtSet = kotlin_kotlin.$_$.p2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var Long = kotlin_kotlin.$_$.n8;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var MutableCollection = kotlin_kotlin.$_$.n2;
  var KtMap = kotlin_kotlin.$_$.m2;
  var Exception = kotlin_kotlin.$_$.l8;
  var plus_0 = kotlin_kotlin.$_$.a4;
  var initMetadataForObject = kotlin_kotlin.$_$.f6;
  var fillArrayVal = kotlin_kotlin.$_$.v5;
  var toString_0 = kotlin_kotlin.$_$.c9;
  var Element = kotlin_kotlin.$_$.g5;
  var getStringHashCode = kotlin_kotlin.$_$.y5;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var Collection = kotlin_kotlin.$_$.j2;
  var addAll = kotlin_kotlin.$_$.r2;
  var CoroutineImpl = kotlin_kotlin.$_$.i5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u4;
  var initMetadataForLambda = kotlin_kotlin.$_$.e6;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var toList = kotlin_kotlin.$_$.n4;
  var flatten = kotlin_kotlin.$_$.j3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.t4;
  var addSuppressed = kotlin_kotlin.$_$.r8;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.c6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.g4;
  var arrayCopy = kotlin_kotlin.$_$.s2;
  var fill_0 = kotlin_kotlin.$_$.g3;
  var anyToString = kotlin_kotlin.$_$.m5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var first = kotlin_kotlin.$_$.i3;
  var last = kotlin_kotlin.$_$.s3;
  var copyOf = kotlin_kotlin.$_$.z2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var plus_1 = kotlin_kotlin.$_$.e4;
  var coerceAtMost = kotlin_kotlin.$_$.u6;
  var coerceAtLeast = kotlin_kotlin.$_$.t6;
  var copyOf_0 = kotlin_kotlin.$_$.y2;
  var ensureNotNull = kotlin_kotlin.$_$.v8;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Entry = kotlin_kotlin.$_$.l2;
  var SequenceScope = kotlin_kotlin.$_$.b7;
  var until = kotlin_kotlin.$_$.x6;
  var sequence = kotlin_kotlin.$_$.g7;
  var joinToString = kotlin_kotlin.$_$.n3;
  var RandomAccess = kotlin_kotlin.$_$.o2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var AbstractList = kotlin_kotlin.$_$.e2;
  var KtList = kotlin_kotlin.$_$.k2;
  var arrayIterator = kotlin_kotlin.$_$.n5;
  var AbstractMutableList = kotlin_kotlin.$_$.g2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var copyOfRange = kotlin_kotlin.$_$.x2;
  var indexOf = kotlin_kotlin.$_$.m3;
  var AbstractMap = kotlin_kotlin.$_$.f2;
  var AbstractSet = kotlin_kotlin.$_$.h2;
  var AbstractCollection = kotlin_kotlin.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.p6;
  var step = kotlin_kotlin.$_$.w6;
  var countOneBits = kotlin_kotlin.$_$.s8;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var toString_1 = kotlin_kotlin.$_$.b8;
  var longArray = kotlin_kotlin.$_$.m6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var Char = kotlin_kotlin.$_$.h8;
  var isCharSequence = kotlin_kotlin.$_$.i6;
  var minus = kotlin_kotlin.$_$.y3;
  var contains = kotlin_kotlin.$_$.w2;
  var plus_2 = kotlin_kotlin.$_$.d4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var singleOrNull = kotlin_kotlin.$_$.i4;
  var intArrayIterator = kotlin_kotlin.$_$.g6;
  var toIntArray = kotlin_kotlin.$_$.m4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var println = kotlin_kotlin.$_$.l5;
  var printStackTrace = kotlin_kotlin.$_$.y8;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.f8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.q1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.h19(value);
  }
  function changed_0(value) {
    return this.i19(value);
  }
  function changedInstance(value) {
    return this.g10(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ProvidedValue, 'ProvidedValue');
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForClass(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(State_0, 'State');
  initMetadataForInterface(DerivedState, 'DerivedState', VOID, VOID, [State_0]);
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter$groupSlots$1);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForInterface(MutableState, 'MutableState', VOID, VOID, [State_0]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl, [StateObjectImpl, MutableState]);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder', VOID, VOID, [State_0]);
  initMetadataForClass(StaticValueHolder, 'StaticValueHolder', VOID, VOID, [State_0]);
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations);
  initMetadataForClass(IdentityArrayMap$asMap$1$entries$1$iterator$1$1, VOID, VOID, VOID, [Entry]);
  initMetadataForLambda(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu, CoroutineImpl, VOID, [1]);
  initMetadataForClass(IdentityArrayMap$asMap$1$entries$1, VOID, VOID, VOID, [KtSet]);
  initMetadataForClass(IdentityArrayMap$asMap$1$keys$1, VOID, VOID, VOID, [KtSet]);
  initMetadataForClass(IdentityArrayMap$asMap$1$values$1, VOID, VOID, VOID, [Collection]);
  initMetadataForClass(IdentityArrayMap$asMap$1, VOID, VOID, VOID, [KtMap]);
  initMetadataForClass(IdentityArrayMap, 'IdentityArrayMap', IdentityArrayMap);
  initMetadataForClass(IdentityArraySet$iterator$1);
  initMetadataForClass(IdentityArraySet, 'IdentityArraySet', IdentityArraySet, VOID, [KtSet]);
  initMetadataForClass(MutableVector, 'MutableVector', VOID, VOID, [RandomAccess]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(SingleElementListIterator, 'SingleElementListIterator', VOID, AbstractListIterator);
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [Collection, KtList, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [Collection, KtList, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, MutableCollection, KtList]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, Collection, KtSet]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_13);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList, VOID, [StateObject, KtList, MutableCollection, RandomAccess]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForCoroutine($withFrameNanosCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.mw_1 = applier;
    this.nw_1 = offset;
    this.ow_1 = 0;
  }
  protoOf(OffsetApplier).dw = function () {
    return this.mw_1.dw();
  };
  protoOf(OffsetApplier).gw = function (node) {
    this.ow_1 = this.ow_1 + 1 | 0;
    this.mw_1.gw(node);
  };
  protoOf(OffsetApplier).hw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ow_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.ow_1 = this.ow_1 - 1 | 0;
    this.mw_1.hw();
  };
  protoOf(OffsetApplier).iw = function (index, instance) {
    this.mw_1.iw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).jw = function (index, instance) {
    this.mw_1.jw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).kw = function (index, count) {
    this.mw_1.kw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).lw = function (from, to, count) {
    var effectiveOffset = this.ow_1 === 0 ? this.nw_1 : 0;
    this.mw_1.lw(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.pw_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.qw_1 = ArrayList_init_$Create$();
    this.rw_1 = this.pw_1;
  }
  protoOf(AbstractApplier).sw = function (_set____db54di) {
    this.rw_1 = _set____db54di;
  };
  protoOf(AbstractApplier).dw = function () {
    return this.rw_1;
  };
  protoOf(AbstractApplier).tw = function (node) {
    this.qw_1.e(this.dw());
    this.sw(node);
  };
  protoOf(AbstractApplier).gw = function (node) {
    return this.tw((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).hw = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qw_1.q()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var message = 'empty stack';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.sw(this.qw_1.u3(this.qw_1.j() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.uw_1 = onFrame;
    this.vw_1 = continuation;
  }
  protoOf(FrameAwaiter).ww = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.uw_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.vw_1.c9(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.yw_1;
    if (!($this.zw_1 == null))
      return Unit_instance;
    $this.zw_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.ax_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.vw_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.c9(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.ax_1.d2();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.yw_1;
      var tmp = this$0.ax_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.b2(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.xw_1 = onNewAwaiters;
    this.yw_1 = createSynchronizedObject();
    this.zw_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ax_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.bx_1 = ArrayList_init_$Create$();
  }
  protoOf(BroadcastFrameClock).cx = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yw_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.ax_1.q();
  };
  protoOf(BroadcastFrameClock).dx = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yw_1;
    var toResume = this.ax_1;
    this.ax_1 = this.bx_1;
    this.bx_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.p(i).ww(timeNanos);
      }
       while (inductionVariable < last);
    toResume.d2();
  };
  protoOf(BroadcastFrameClock).ex = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.fl();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.yw_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.zw_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.c9(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.ax_1.q();
      var tmp = this.ax_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.e(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.xj(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.xw_1 == null)) {
        try {
          this.xw_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.jj();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.ix_1 = scope;
    this.jx_1 = location;
    this.kx_1 = instances;
  }
  protoOf(Invalidation).lx = function () {
    return this.ix_1.ux(this.kx_1);
  };
  function startRoot($this) {
    $this.cz_1 = $this.xx_1.a10();
    startGroup($this, 100);
    $this.wx_1.b10();
    $this.py_1 = $this.wx_1.c10();
    $this.sy_1.f10(asInt($this.ry_1));
    $this.ry_1 = $this.g10($this.py_1);
    $this.gz_1 = null;
    if (!$this.ky_1) {
      $this.ky_1 = $this.wx_1.h10();
    }
    if (!$this.xy_1) {
      $this.xy_1 = $this.wx_1.i10();
    }
    var tmp0_safe_receiver = read($this.py_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.e($this.xx_1);
      $this.wx_1.j10(tmp0_safe_receiver);
    }
    startGroup($this, $this.wx_1.k10());
  }
  function endRoot($this) {
    endGroup($this);
    $this.wx_1.l10();
    endGroup($this);
    $this.iz_1.y10();
    finalizeCompose($this);
    $this.cz_1.m11();
    $this.ly_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.cy_1.d2();
    $this.fy_1.d2();
    $this.hy_1.d2();
    $this.oy_1.d2();
    $this.sy_1.d2();
    $this.qy_1 = null;
    if (!$this.cz_1.f11_1) {
      $this.cz_1.m11();
    }
    if (!$this.ez_1.i12_1) {
      $this.ez_1.m11();
    }
    $this.kz_1.d2();
    createFreshInsertTable($this);
    $this.mz_1 = 0;
    $this.vy_1 = 0;
    $this.my_1 = false;
    $this.lz_1 = false;
    $this.ty_1 = false;
    $this.az_1 = false;
    $this.ly_1 = false;
    $this.uy_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().m12_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().m12_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.gy_1 = $this.gy_1 + $this.cz_1.p12() | 0;
  }
  function updateSlot($this, value) {
    $this.q12();
    $this.r12(value);
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.gz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.cz_1.i11_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.lz_1 && $this.fz_1) {
      var current = $this.ez_1.h12_1;
      while (current > 0) {
        if ($this.ez_1.t12(current) === 202 && equals($this.ez_1.u12(current), get_compositionLocalMap())) {
          var tmp = $this.ez_1.s12(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.gz_1 = providers;
          return providers;
        }
        current = $this.ez_1.v12(current);
      }
    }
    if ($this.cz_1.j() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.cz_1.t12(current_0) === 202 && equals($this.cz_1.u12(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.qy_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.cz_1.s12(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.gz_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.cz_1.v12(current_0);
      }
    }
    $this.gz_1 = $this.py_1;
    return $this.py_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.qy_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.qy_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.x12($this.cz_1.g11_1, providers);
  }
  function ensureWriter($this) {
    if ($this.ez_1.i12_1) {
      $this.ez_1 = $this.dz_1.y12();
      $this.ez_1.z12();
      $this.fz_1 = false;
      $this.gz_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.ez_1.i12_1);
    $this.dz_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.dz_1.y12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.m11();
    tmp.ez_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.cz_1.d13();
    } else {
      if (!(data == null) && !($this.cz_1.b13() === data)) {
        $this.iz_1.a13(data);
      }
      $this.cz_1.c13();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().m12_1));
    if ($this.lz_1) {
      $this.cz_1.e13();
      var startIndex = $this.ez_1.f12_1;
      if (isNode) {
        $this.ez_1.i13(key, Companion_getInstance().f13_1);
      } else if (!(data == null)) {
        var tmp = $this.ez_1;
        tmp.h13(key, objectKey == null ? Companion_getInstance().f13_1 : objectKey, data);
      } else {
        var tmp_0 = $this.ez_1;
        tmp_0.g13(key, objectKey == null ? Companion_getInstance().f13_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.dy_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.p13(insertKeyInfo, $this.ey_1 - tmp2_safe_receiver.k13_1 | 0);
        tmp2_safe_receiver.q13(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().n12_1))) {
      tmp_1 = $this.ty_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.dy_1 == null) {
      var slotKey = $this.cz_1.r13();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.cz_1.t13())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.dy_1 = new Pending($this.cz_1.s13(), $this.ey_1);
      }
    }
    var pending = $this.dy_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.u13(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.q13(keyInfo);
        var location = keyInfo.z13_1;
        $this.ey_1 = pending.c14(keyInfo) + pending.k13_1 | 0;
        var relativePosition = pending.d14(keyInfo);
        var currentRelativePosition = relativePosition - pending.l13_1 | 0;
        pending.e14(relativePosition, pending.l13_1);
        $this.iz_1.f14(location);
        $this.cz_1.g14(location);
        if (currentRelativePosition > 0) {
          $this.iz_1.h14(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.cz_1.e13();
        $this.lz_1 = true;
        $this.gz_1 = null;
        ensureWriter($this);
        $this.ez_1.v13();
        var startIndex_0 = $this.ez_1.f12_1;
        if (isNode) {
          $this.ez_1.i13(key, Companion_getInstance().f13_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.ez_1;
          tmp_2.h13(key, objectKey == null ? Companion_getInstance().f13_1 : objectKey, data);
        } else {
          var tmp_3 = $this.ez_1;
          tmp_3.g13(key, objectKey == null ? Companion_getInstance().f13_1 : objectKey);
        }
        $this.jz_1 = $this.ez_1.w13(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.p13(insertKeyInfo_0, $this.ey_1 - pending.k13_1 | 0);
        pending.q13(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.ey_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.cy_1.i14($this.dy_1);
    $this.dy_1 = newPending;
    $this.fy_1.f10($this.ey_1);
    if (isNode)
      $this.ey_1 = 0;
    $this.hy_1.f10($this.gy_1);
    $this.gy_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.cy_1.j14();
    if (!(previousPending == null) && !inserting) {
      previousPending.l13_1 = previousPending.l13_1 + 1 | 0;
    }
    $this.dy_1 = previousPending;
    $this.ey_1 = $this.fy_1.j14() + expectedNodeCount | 0;
    $this.gy_1 = $this.hy_1.j14() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.lz_1) {
      var parent = $this.ez_1.h12_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.ez_1.t12(parent), $this.ez_1.u12(parent), $this.ez_1.s12(parent));
    } else {
      var parent_0 = $this.cz_1.i11_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.cz_1.t12(parent_0), $this.cz_1.u12(parent_0), $this.cz_1.s12(parent_0));
    }
    var expectedNodeCount = $this.gy_1;
    var pending = $this.dy_1;
    if (!(pending == null) && pending.j13_1.j() > 0) {
      var previous = pending.j13_1;
      var current = pending.k14();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.j();
      var previousIndex = 0;
      var previousEnd = previous.j();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.p(previousIndex);
        if (!usedKeys.o(previousInfo)) {
          var deleteOffset = pending.c14(previousInfo);
          $this.iz_1.l14(deleteOffset + pending.k13_1 | 0, previousInfo.a14_1);
          pending.m14(previousInfo.z13_1, 0);
          $this.iz_1.f14(previousInfo.z13_1);
          $this.cz_1.g14(previousInfo.z13_1);
          recordDelete($this);
          $this.cz_1.p12();
          removeRange($this.ny_1, previousInfo.z13_1, previousInfo.z13_1 + $this.cz_1.n14(previousInfo.z13_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.o(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.p(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.c14(currentInfo);
            placedKeys.e(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.o14(currentInfo);
              $this.iz_1.p14(nodePosition + pending.k13_1 | 0, nodeOffset + pending.k13_1 | 0, updatedCount);
              pending.q14(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.o14(currentInfo) | 0;
        }
      }
      $this.iz_1.r14();
      if (previous.j() > 0) {
        $this.iz_1.f14($this.cz_1.s14());
        $this.cz_1.z12();
      }
    }
    var removeIndex = $this.ey_1;
    while (!$this.cz_1.t14()) {
      var startSlot = $this.cz_1.g11_1;
      recordDelete($this);
      var nodesToRemove = $this.cz_1.p12();
      $this.iz_1.l14(removeIndex, nodesToRemove);
      removeRange($this.ny_1, startSlot, $this.cz_1.g11_1);
    }
    var inserting = $this.lz_1;
    if (inserting) {
      if (isNode) {
        $this.kz_1.x14();
        expectedNodeCount = 1;
      }
      $this.cz_1.y14();
      var parentGroup = $this.ez_1.h12_1;
      $this.ez_1.z14();
      if (!$this.cz_1.c15()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.ez_1.a15();
        $this.ez_1.m11();
        recordInsert($this, $this.jz_1);
        $this.lz_1 = false;
        if (!$this.xx_1.b15()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.iz_1.u14();
      }
      $this.iz_1.v14();
      var parentGroup_0 = $this.cz_1.i11_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.cz_1.w14();
      $this.iz_1.r14();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.az_1;
    $this.az_1 = true;
    var recomposed = false;
    var parent = $this.cz_1.i11_1;
    var end = parent + $this.cz_1.n14(parent) | 0;
    var recomposeIndex = $this.ey_1;
    var recomposeCompoundKey = $this.mz_1;
    var oldGroupNodeCount = $this.gy_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.ny_1, $this.cz_1.g11_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.jx_1;
      removeLocation($this.ny_1, location);
      if (firstInRange_0.lx()) {
        recomposed = true;
        $this.cz_1.g14(location);
        var newGroup = $this.cz_1.g11_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.ey_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.mz_1 = compoundKeyOf($this, $this.cz_1.v12(newGroup), parent, recomposeCompoundKey);
        $this.gz_1 = null;
        firstInRange_0.ix_1.e15($this);
        $this.gz_1 = null;
        $this.cz_1.f15(parent);
      } else {
        $this.zy_1.i14(firstInRange_0.ix_1);
        firstInRange_0.ix_1.d15();
        $this.zy_1.j14();
      }
      firstInRange_0 = firstInRange($this.ny_1, $this.cz_1.g11_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.cz_1.z12();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.ey_1 = recomposeIndex + parentGroupNodes | 0;
      $this.gy_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.mz_1 = recomposeCompoundKey;
    $this.az_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.cy_1.j() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.cy_1.g15(pendingIndex);
            if (!(pending == null) && pending.m14(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.cz_1.i11_1;
        } else {
          if ($this.cz_1.h15(current))
            break $l$loop_0;
          current = $this.cz_1.v12(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.cz_1.v12(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.cz_1.h15(anchorGroup)) {
      anchorGroup = $this.cz_1.v12(anchorGroup);
    }
    var index = $this.cz_1.h15(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.cz_1.i15(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.cz_1.n14(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.jy_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.bu(group) ? tmp0_safe_receiver.p(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.iy_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.cz_1.i15(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.jy_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.jy_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.au(group, count);
      } else {
        var tmp1_elvis_lhs = $this.iy_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.cz_1.j());
          fill(newCounts_0, -1);
          $this.iy_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.iy_1 = null;
    $this.jy_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.cz_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.h15(current)) {
        $this.iz_1.u14();
      }
      current = reader.v12(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.cz_1.v12(group), nearestCommonRoot);
      if ($this.cz_1.h15(group)) {
        $this.iz_1.j15(nodeAt($this.cz_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.cz_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.cz_1.v12(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.k15(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.u12(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.f2_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.t12(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.s12(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().f13_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.gy_1 = $this.cz_1.l15();
    $this.cz_1.z12();
  }
  function addRecomposeScope($this) {
    if ($this.lz_1) {
      var tmp = $this.by_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.zy_1.i14(scope);
      $this.r12(scope);
      scope.p15($this.wy_1);
    } else {
      var invalidation = removeLocation($this.ny_1, $this.cz_1.i11_1);
      var slot = $this.cz_1.i();
      var tmp_0;
      if (equals(slot, Companion_getInstance().f13_1)) {
        var tmp_1 = $this.by_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.r12(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.m15();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.n15(false);
        }
        tmp_2 = this_0;
      }
      scope_0.o15(tmp_2);
      $this.zy_1.i14(scope_0);
      scope_0.p15($this.wy_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.q15(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.mz_1;
    try {
      $this.mz_1 = 126665345;
      if ($this.lz_1) {
        $this.ez_1.r15();
      }
      var providersChanged = $this.lz_1 ? false : !equals($this.cz_1.b13(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().m12_1, locals);
      $this.gz_1 = null;
      if ($this.lz_1 && !force) {
        $this.fz_1 = true;
        var anchor = $this.ez_1.w13($this.ez_1.v12($this.ez_1.h12_1));
        var reference = new MovableContentStateReference(content, parameter, $this.by_1, $this.dz_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.wx_1.s15(reference);
      } else {
        var savedProvidersInvalid = $this.ry_1;
        $this.ry_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.ry_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.gz_1 = null;
      $this.mz_1 = savedCompoundKeyHash;
      $this.t15();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.iz_1;
    var newChangeList = $this.ay_1;
    var previousChangeList = this_0.n10_1;
    try {
      this_0.n10_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.iz_1.u15();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.he();
          var from = item.ie();
          var anchor = to.z15_1;
          var location = to.y15_1.c16(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.iz_1.d16(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.y15_1;
            if (equals(toSlotTable, $this.dz_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.y15_1.a10();
            var tmp;
            try {
              reader.g14(location);
              $this.iz_1.i16(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.iz_1.j16(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.m11();
            }
          } else {
            var resolvedState = $this.wx_1.e16(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.f16_1;
            var fromTable = tmp1_elvis_lhs == null ? from.y15_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.f16_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.w13(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.z15_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.q()) {
              $this.iz_1.g16(nodesToInsert, effectiveNodeIndex);
              if (equals(to.y15_1, $this.xx_1)) {
                var group = $this.xx_1.c16(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.j() | 0);
              }
            }
            $this.iz_1.h16(resolvedState, $this.wx_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.a10();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.cz_1;
                var savedCountOverrides = $this.iy_1;
                var savedProviderUpdates = $this.qy_1;
                $this.iy_1 = null;
                $this.qy_1 = null;
                try {
                  $this.cz_1 = reader_0;
                  var newLocation = fromTable.c16(fromAnchor);
                  reader_0.g14(newLocation);
                  $this.iz_1.i16(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.iz_1;
                  var previousChangeList_0 = this_1.n10_1;
                  try {
                    this_1.n10_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.iz_1;
                    var previousImplicitRootStart = this_2.q10_1;
                    try {
                      this_2.q10_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.g11_1;
                      var tmp_2 = from.a16_1;
                      recomposeMovableContent($this, from.x15_1, to.x15_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.q10_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.n10_1 = previousChangeList_0;
                  }
                  $this.iz_1.j16(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.cz_1 = savedReader;
                  $this.iy_1 = savedCountOverrides;
                  $this.qy_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.m11();
            }
          }
          $this.iz_1.k16();
        }
         while (inductionVariable <= last);
      $this.iz_1.l16();
      $this.iz_1.i16(0);
    }finally {
      this_0.n10_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.az_1;
    var savedNodeIndex = $this.ey_1;
    try {
      $this.az_1 = true;
      $this.ey_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.p(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.he();
          var instances = item.ie();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.o16_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.n16_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.m16(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.m16(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.p16(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.az_1 = savedIsComposing;
      $this.ey_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.az_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.q16(sectionName);
      try {
        $this.wy_1 = currentSnapshot().v16();
        $this.qy_1 = null;
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.y16_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.w16_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.x16_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.ox_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z16_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.ny_1.e(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        sortWith($this.ny_1, get_InvalidationLocationAscending());
        $this.ey_1 = 0;
        var complete = false;
        $this.az_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.q12();
          if (!(savedContent === content) && !(content == null)) {
            $this.r12((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.yy_1;
          var observers = derivedStateObservers_0();
          try {
            observers.d17(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.ly_1 || $this.ry_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().f13_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.e17();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$1 = observers.c17_1 - 1 | 0;
            observers.u3(tmp$ret$1);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.az_1 = false;
          $this.ny_1.d2();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.f17(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.g17(_this__u8e3s4.i11_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.g17(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.my_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.my_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.my_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function recordInsert($this, anchor) {
    if ($this.kz_1.q()) {
      $this.iz_1.i17(anchor, $this.dz_1);
    } else {
      $this.iz_1.h17(anchor, $this.dz_1, $this.kz_1);
      $this.kz_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.cz_1.g11_1);
    $this.iz_1.j17();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.iz_1.r14();
  }
  function reportAllMovableContent($this) {
    if ($this.xx_1.l17()) {
      var changes = new ChangeList();
      $this.hz_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.xx_1.a10();
      var tmp;
      try {
        $this.cz_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.iz_1;
        var previousChangeList = this_0.n10_1;
        try {
          this_0.n10_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.iz_1.k17();
        }finally {
          this_0.n10_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.m11();
      }
    }
  }
  function finalizeCompose($this) {
    $this.iz_1.m17();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.cy_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.dy_1 = null;
    $this.ey_1 = 0;
    $this.gy_1 = 0;
    $this.mz_1 = 0;
    $this.my_1 = false;
    $this.iz_1.n17();
    $this.zy_1.d2();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if (!(data == null) && groupKey === 207 && !equals(data, Companion_getInstance().f13_1)) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.f2_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.mz_1;
    tmp.mz_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if (!(data == null) && groupKey === 207 && !equals(data, Companion_getInstance().f13_1)) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.f2_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.mz_1 ^ groupKey;
    tmp.mz_1 = rotateRight(this_0, 3);
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.cz_1;
    var tmp;
    if (reader.e18(group)) {
      var key = reader.t12(group);
      var objectKey = reader.u12(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.p17(group, 0);
        var anchor = reader.w13(group);
        var end = group + reader.n14(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.ny_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.j());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.ix_1, item.kx_1);
            target.e(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.by_1, this$0.xx_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.wx_1.a18(reference);
        this$0.iz_1.b18();
        this$0.iz_1.c18(this$0.by_1, this$0.wx_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.iz_1.d18(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.i15(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.p17(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.q17_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.w17_1.g();
            while (tmp0_iterator.h()) {
              var element_0 = tmp0_iterator.i();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.wx_1.z17(element_0.by_1);
            }
          }
          tmp_0 = reader.i15(group);
        } else {
          if (reader.h15(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.i15(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.o17(group)) {
      var size = reader.n14(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.h15(current);
        if (isNode) {
          this$0.iz_1.r14();
          this$0.iz_1.j15(reader.g17(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.iz_1.r14();
          this$0.iz_1.u14();
        }
        current = current + reader.n14(current) | 0;
      }
      tmp = reader.h15(group) ? 1 : runningNodeCount;
    } else if (reader.h15(group)) {
      tmp = 1;
    } else {
      tmp = reader.i15(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.f18_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.g18(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3005@114008L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.i18()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3005)');
        }
        $content.h18_1($parameter, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.z12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.iz_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.n10_1;
      var tmp;
      try {
        this_0.n10_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.cz_1;
          var savedCountOverrides = this_1.iy_1;
          var savedProviderUpdates = this_1.qy_1;
          this_1.iy_1 = null;
          this_1.qy_1 = null;
          try {
            this_1.cz_1 = reader;
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_2 = this$0.iz_1;
            var previousImplicitRootStart = this_2.q10_1;
            try {
              this_2.q10_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.v15_1, $to.b16_1, $to.w15_1, true);
            }finally {
              this_2.q10_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.cz_1 = savedReader;
            this_1.iy_1 = savedCountOverrides;
            this_1.qy_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        this_0.n10_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.v15_1, $to.b16_1, $to.w15_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.vx_1 = applier;
    this.wx_1 = parentContext;
    this.xx_1 = slotTable;
    this.yx_1 = abandonSet;
    this.zx_1 = changes;
    this.ay_1 = lateChanges;
    this.by_1 = composition;
    this.cy_1 = new Stack();
    this.dy_1 = null;
    this.ey_1 = 0;
    this.fy_1 = new IntStack();
    this.gy_1 = 0;
    this.hy_1 = new IntStack();
    this.iy_1 = null;
    this.jy_1 = null;
    this.ky_1 = false;
    this.ly_1 = false;
    this.my_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ny_1 = ArrayList_init_$Create$();
    this.oy_1 = new IntStack();
    this.py_1 = persistentCompositionLocalHashMapOf();
    this.qy_1 = null;
    this.ry_1 = false;
    this.sy_1 = new IntStack();
    this.ty_1 = false;
    this.uy_1 = -1;
    this.vy_1 = 0;
    this.wy_1 = 0;
    this.xy_1 = false;
    var tmp_0 = this;
    tmp_0.yy_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.zy_1 = new Stack();
    this.az_1 = false;
    this.bz_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.xx_1.a10();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.m11();
    tmp_1.cz_1 = this_0;
    this.dz_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.dz_1.y12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.m11();
    tmp_2.ez_1 = this_1;
    this.fz_1 = false;
    this.gz_1 = null;
    this.hz_1 = null;
    this.iz_1 = new ComposerChangeListWriter(this, this.zx_1);
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.dz_1.a10();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.w13(0);
    }finally {
      reader.m11();
    }
    tmp_3.jz_1 = tmp_4;
    this.kz_1 = new FixupList();
    this.lz_1 = false;
    this.mz_1 = 0;
    this.nz_1 = false;
    this.oz_1 = true;
    this.pz_1 = new IntStack();
  }
  protoOf(ComposerImpl).j18 = function () {
    return this.vx_1;
  };
  protoOf(ComposerImpl).k18 = function () {
    return this.vy_1 > 0;
  };
  protoOf(ComposerImpl).l18 = function (key) {
    return start(this, key, null, Companion_getInstance_0().m12_1, null);
  };
  protoOf(ComposerImpl).m18 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).n18 = function () {
    return start(this, -127, null, Companion_getInstance_0().m12_1, null);
  };
  protoOf(ComposerImpl).o18 = function () {
    endGroup(this);
    var scope = this.p18();
    if (!(scope == null) && scope.k14()) {
      scope.q18(true);
    }
  };
  protoOf(ComposerImpl).r18 = function () {
    var tmp;
    if (!this.i18() || this.ry_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.p18();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r18()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).q15 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().m12_1, null);
  };
  protoOf(ComposerImpl).t15 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).s18 = function () {
    this.qy_1 = null;
  };
  protoOf(ComposerImpl).t18 = function () {
    return this.lz_1;
  };
  protoOf(ComposerImpl).i18 = function () {
    var tmp;
    var tmp_0;
    if (!this.lz_1 && !this.ty_1 && !this.ry_1) {
      var tmp0_safe_receiver = this.p18();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u18()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.ly_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d13 = function () {
    start(this, 125, null, Companion_getInstance_0().n12_1, null);
    this.my_1 = true;
  };
  protoOf(ComposerImpl).v18 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.lz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.fy_1.w18();
    var groupAnchor = this.ez_1.w13(this.ez_1.h12_1);
    this.gy_1 = this.gy_1 + 1 | 0;
    this.kz_1.x18(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).y18 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.lz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.cz_1, this);
    this.iz_1.j15(node);
    var tmp;
    if (this.ty_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.iz_1.z18(node);
    }
  };
  protoOf(ComposerImpl).a19 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).b19 = function (value, block) {
    if (this.lz_1) {
      this.kz_1.d19(value, block);
    } else {
      this.iz_1.c19(value, block);
    }
  };
  protoOf(ComposerImpl).q12 = function () {
    var tmp;
    if (this.lz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().f13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.cz_1.i();
      var tmp_0;
      var tmp_1;
      if (this.ty_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().f13_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e19 = function () {
    var tmp;
    if (this.lz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().f13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.cz_1.i();
      var tmp_0;
      var tmp_1;
      if (this.ty_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().f13_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.f19_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).g10 = function (value) {
    var tmp;
    if (!equals(this.q12(), value)) {
      this.r12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).g19 = function (value) {
    var tmp;
    if (!(this.q12() === value)) {
      this.r12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).h19 = function (value) {
    var next = this.q12();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.r12(value);
    return true;
  };
  protoOf(ComposerImpl).i19 = function (value) {
    var next = this.q12();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.r12(value);
    return true;
  };
  protoOf(ComposerImpl).r12 = function (value) {
    if (this.lz_1) {
      this.ez_1.l19(value);
    } else {
      var groupSlotIndex = this.cz_1.j19() - 1 | 0;
      this.iz_1.k19(value, groupSlotIndex);
    }
  };
  protoOf(ComposerImpl).m19 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.lz_1) {
        this.iz_1.n19(value);
      }
      this.yx_1.e(value);
      tmp = new RememberObserverHolder(value);
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.r12(toStore);
  };
  protoOf(ComposerImpl).o19 = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.p19();
    var tmp;
    if (equals(it, Companion_getInstance().f13_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, State_0) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.q19_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.u19(value.r19_1, oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.v19(state);
    }
    var providers;
    var invalid;
    if (this.lz_1) {
      providers = parentScope.w19(local, state);
      invalid = false;
      this.fz_1 = true;
    } else {
      var tmp_1 = this.cz_1.s12(this.cz_1.g11_1);
      var oldScope = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
      providers = (!this.i18() || change) && (value.s19_1 || !contains_0(parentScope, local)) ? parentScope.w19(local, state) : oldScope;
      invalid = this.ty_1 || !(oldScope === providers);
    }
    if (invalid && !this.lz_1) {
      recordProviderUpdate(this, providers);
    }
    this.sy_1.f10(asInt(this.ry_1));
    this.ry_1 = invalid;
    this.gz_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_0().m12_1, providers);
  };
  protoOf(ComposerImpl).x19 = function () {
    endGroup(this);
    endGroup(this);
    this.ry_1 = asBool(this.sy_1.j14());
    this.gz_1 = null;
  };
  protoOf(ComposerImpl).y19 = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).p18 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.zy_1;
    return this.vy_1 === 0 && it.z19() ? it.w18() : null;
  };
  protoOf(ComposerImpl).m16 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.ox_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.cz_1.z10_1;
    var location = anchor.a1a(slotTable);
    if (this.az_1 && location >= this.cz_1.g11_1) {
      insertIfMissing(this.ny_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).e17 = function () {
    if (this.ny_1.q()) {
      skipGroup(this);
    } else {
      var reader = this.cz_1;
      var key = reader.r13();
      var dataKey = reader.t13();
      var aux = reader.b13();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.b1a(), null);
      recomposeToGroupEnd(this);
      reader.w14();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).z12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.gy_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.p18();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1a();
    }
    if (this.ny_1.q()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).d1a = function (key) {
    start(this, key, null, Companion_getInstance_0().m12_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).e1a = function () {
    var scope = this.zy_1.z19() ? this.zy_1.j14() : null;
    if (scope != null) {
      scope.o15(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.f1a(this.wy_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.iz_1.g1a(tmp2_safe_receiver, this.by_1);
    }
    var tmp;
    if (!(scope == null) && !scope.i1a() && (scope.k14() || this.ky_1)) {
      if (scope.ox_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.lz_1) {
          tmp_1 = this.ez_1.w13(this.ez_1.h12_1);
        } else {
          tmp_1 = this.cz_1.w13(this.cz_1.i11_1);
        }
        tmp_0.ox_1 = tmp_1;
      }
      scope.h1a(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).j1a = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).k1a = function (sourceInformation) {
    if (this.lz_1 && this.xy_1) {
      this.ez_1.l1a(sourceInformation);
    }
  };
  protoOf(ComposerImpl).m1a = function (key, sourceInformation) {
    if (this.lz_1 && this.xy_1) {
      this.ez_1.n1a(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).o1a = function () {
    if (this.lz_1 && this.xy_1) {
      this.ez_1.p1a();
    }
  };
  protoOf(ComposerImpl).q1a = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.zx_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).s1a = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.az_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.az_1 = true;
    try {
      block();
    }finally {
      this.az_1 = false;
    }
  };
  protoOf(ComposerImpl).t1a = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.zx_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.z19()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.ny_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.ly_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.zx_1.z19();
    }
    return false;
  };
  protoOf(ComposerImpl).u1a = function () {
    return this.p18();
  };
  protoOf(ComposerImpl).p19 = function () {
    return this.e19();
  };
  protoOf(ComposerImpl).v19 = function (value) {
    return this.m19(value);
  };
  protoOf(ComposerImpl).v1a = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.w1a(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.f13_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.x1a();
    while (tmp0_iterator.h()) {
      var slot = tmp0_iterator.i();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.y1a(slot);
      }
      if (slot instanceof RememberObserverHolder) {
        rememberManager.z1a(slot.f19_1);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.a1b();
      }
    }
    _this__u8e3s4.b1b();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.v15_1 = content;
    this.w15_1 = parameter;
    this.x15_1 = composition;
    this.y15_1 = slotTable;
    this.z15_1 = anchor;
    this.a16_1 = invalidations;
    this.b16_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.f16_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1a(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.c1b();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1b(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1b();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.f1b_1 = message;
  }
  protoOf(ComposeRuntimeError).l9 = function () {
    return this.f1b_1;
  };
  function RememberObserverHolder(wrapped) {
    this.f19_1 = wrapped;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.j13_1.j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.j13_1.p(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.j13_1 = keyInfos;
    this.k13_1 = startIndex;
    this.l13_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.k13_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m13_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.j13_1.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.j13_1.p(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.z13_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.a14_1);
        result.u4(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.a14_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.n13_1 = result;
    var tmp_1 = this;
    tmp_1.o13_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).g1b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o13_1;
    keyMap$factory();
    return this_0.u1();
  };
  protoOf(Pending).u13 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.g1b(), joinedKey);
  };
  protoOf(Pending).q13 = function (keyInfo) {
    return this.m13_1.e(keyInfo);
  };
  protoOf(Pending).k14 = function () {
    return this.m13_1;
  };
  protoOf(Pending).e14 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.n13_1.z1().g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.h1b_1;
        if (position === from)
          element.h1b_1 = to;
        else if (to <= position ? position < from : false)
          element.h1b_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.n13_1.z1().g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.h1b_1;
        if (position_0 === from)
          element_0.h1b_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.h1b_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).q14 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.n13_1.z1().g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.i1b_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.i1b_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.i1b_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.n13_1.z1().g();
      while (tmp0_iterator_0.h()) {
        var element_0 = tmp0_iterator_0.i();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.i1b_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.i1b_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.i1b_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).p13 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.n13_1;
    var key = keyInfo.z13_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.u4(key, value);
  };
  protoOf(Pending).m14 = function (group, newCount) {
    var groupInfo = this.n13_1.x1(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.i1b_1;
      var difference = newCount - groupInfo.j1b_1 | 0;
      groupInfo.j1b_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.n13_1.z1().g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.i1b_1 >= index && !equals(element, groupInfo)) {
            var newIndex = element.i1b_1 + difference | 0;
            if (newIndex >= 0)
              element.i1b_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).d14 = function (keyInfo) {
    var tmp0_safe_receiver = this.n13_1.x1(keyInfo.z13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).c14 = function (keyInfo) {
    var tmp0_safe_receiver = this.n13_1.x1(keyInfo.z13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).o14 = function (keyInfo) {
    var tmp0_safe_receiver = this.n13_1.x1(keyInfo.z13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1b_1;
    return tmp1_elvis_lhs == null ? keyInfo.a14_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.m12_1 = _GroupKind___init__impl__iwqg06(0);
    this.n12_1 = _GroupKind___init__impl__iwqg06(1);
    this.o12_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function ReusableRememberObserver() {
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.q19_1 = compositionLocal;
    this.r19_1 = value;
    this.s19_1 = canOverride;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var validation = _this__u8e3s4.p(index);
      if (validation.jx_1 < end) {
        _this__u8e3s4.u3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.j()) {
      var firstInvalidation = _this__u8e3s4.p(index);
      if (firstInvalidation.jx_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.u3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.v12(a) === b)
      return b;
    if (_this__u8e3s4.v12(b) === a)
      return a;
    if (_this__u8e3s4.v12(a) === _this__u8e3s4.v12(b))
      return _this__u8e3s4.v12(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.v12(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.v12(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.v12(currentA);
      currentB = _this__u8e3s4.v12(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.k1b(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.h4(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.p(index).kx_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.p(index).kx_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.k1b(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.a10();
    var tmp;
    try {
      var index = _this__u8e3s4.c16(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.m11();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var invalidation = _this__u8e3s4.p(index);
      if (invalidation.jx_1 < end) {
        result.e(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.h1b_1 = slotIndex;
    this.i1b_1 = nodeIndex;
    this.j1b_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x1(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.u4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.e(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.y13_1 == null) ? new JoinedKey(_this__u8e3s4.x13_1, _this__u8e3s4.y13_1) : _this__u8e3s4.x13_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x1(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.p(mid);
      var cmp = compareTo(midVal.jx_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.v12(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.b2(value);
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.v4(key);
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.m1a(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.o1a();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.t18() || !equals($this$with.p19(), value)) {
      $this$with.v19(value);
      _Updater___get_composer__impl__9ty7av($this).b19(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l1b_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).m1b = function (a, b) {
    return this.l1b_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.m1b(a, b);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.h15(group)) {
      result.e($reader.g17(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.n14(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.n14(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.jx_1, i2.jx_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.g1b();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.e1c_1.k18();
  }
  function composeInitial($this, content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.h1c_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.i1c_1 = content;
    $this.n1b_1.j1c($this, $this.i1c_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.p1b_1.l1c(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.p1b_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.p1b_1.l1c(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.p1b_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.t1b_1.m1c_1.x1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rv_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qv_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.y1b_1.o1c(value, scope) && !scope.p1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.n1c() && !forgetConditionalScopes) {
                          $this.u1b_1.e(scope);
                        } else {
                          if (set == null)
                            set = HashSet_init_$Create$();
                          var tmp0_safe_receiver = set;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.e(scope);
                        }
                      }
                    }
                    slot = slot.t2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.y1b_1.o1c(value, scope_0) && !scope_0.p1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.n1c() && !forgetConditionalScopes) {
            $this.u1b_1.e(scope_0);
          } else {
            if (set == null)
              set = HashSet_init_$Create$();
            var tmp0_safe_receiver_0 = set;
            if (tmp0_safe_receiver_0 == null)
              null;
            else
              tmp0_safe_receiver_0.e(scope_0);
          }
        }
      }
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.o16_1;
      var inductionVariable = 0;
      var last = values.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.p1c(null);
          } else {
            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_0 = $this.v1b_1.m1c_1.x1(value);
            if (value_0 != null) {
              if (value_0 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.rv_1;
                $l$block: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.qv_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 <= lastIndex)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var slot = m[i_0];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < bitCount)
                          do {
                            var j = inductionVariable_1;
                            inductionVariable_1 = inductionVariable_1 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                              var index = (i_0 << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                              var tmp_0 = k[index];
                              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it, forgetConditionalScopes);
                            }
                            slot = slot.t2(8);
                          }
                           while (inductionVariable_1 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block;
                        }
                      }
                    }
                     while (!(i_0 === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_0, forgetConditionalScopes);
              }
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.p1c(null);
        } else {
          invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.v1b_1.m1c_1.x1(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_2.rv_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_2.qv_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 <= lastIndex_0)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var slot_0 = m_0[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_3 = slot_0;
                    if (!this_3.v2(this_3.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_0 = (i_1 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_1 = k_0[index_0];
                            var it_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_1, forgetConditionalScopes);
                          }
                          slot_0 = slot_0.t2(8);
                        }
                         while (inductionVariable_3 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_0));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.u1b_1.q();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_4 = $this.t1b_1.m1c_1;
      $l$block_2: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_1 = this_4.cv_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_4 = 0;
        if (inductionVariable_4 <= lastIndex_1)
          do {
            var i_2 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var slot_1 = m_1[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.v2(this_5.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_5 = 0;
              if (inductionVariable_5 < bitCount_1)
                do {
                  var j_1 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_1 = (i_2 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_4.dv_1[index_1];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_4.ev_1[index_1];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.rv_1;
                      $l$block_1: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_2 = set.qv_1;
                        var lastIndex_2 = m_2.length - 2 | 0;
                        var inductionVariable_6 = 0;
                        if (inductionVariable_6 <= lastIndex_2)
                          do {
                            var i_3 = inductionVariable_6;
                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                            var slot_2 = m_2[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_6 = slot_2;
                            if (!this_6.v2(this_6.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_7 = 0;
                              if (inductionVariable_7 < bitCount_2)
                                do {
                                  var j_2 = inductionVariable_7;
                                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_2.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                    var index_2 = (i_3 << 3) + j_2 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_2];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    var tmp_7;
                                    if ($this.u1b_1.o(scope)) {
                                      tmp_7 = true;
                                    } else {
                                      var tmp0_safe_receiver = invalidated._v;
                                      var tmp_8;
                                      if (tmp0_safe_receiver == null) {
                                        tmp_8 = null;
                                      } else {
                                        // Inline function 'kotlin.let' call
                                        // Inline function 'kotlin.contracts.contract' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        tmp_8 = tmp0_safe_receiver.o(scope);
                                      }
                                      tmp_7 = tmp_8 === true;
                                    }
                                    if (tmp_7) {
                                      set.cw(index_2);
                                    }
                                  }
                                  slot_2 = slot_2.t2(8);
                                }
                                 while (inductionVariable_7 < bitCount_2);
                              if (!(bitCount_2 === 8)) {
                                break $l$block_1;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_2));
                      }
                      tmp_5 = set.q();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      var tmp_9;
                      if ($this.u1b_1.o(scope_0)) {
                        tmp_9 = true;
                      } else {
                        var tmp0_safe_receiver_0 = invalidated._v;
                        var tmp_10;
                        if (tmp0_safe_receiver_0 == null) {
                          tmp_10 = null;
                        } else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          tmp_10 = tmp0_safe_receiver_0.o(scope_0);
                        }
                        tmp_9 = tmp_10 === true;
                      }
                      tmp_5 = tmp_9;
                    }
                    if (tmp_5) {
                      this_4.pv(index_1);
                    }
                  }
                  slot_1 = slot_1.t2(8);
                }
                 while (inductionVariable_5 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_2;
              }
            }
          }
           while (!(i_2 === lastIndex_1));
      }
      $this.u1b_1.d2();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_1 = invalidated._v;
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
        // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
        var this_7 = $this.t1b_1.m1c_1;
        $l$block_4: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_3 = this_7.cv_1;
          var lastIndex_3 = m_3.length - 2 | 0;
          var inductionVariable_8 = 0;
          if (inductionVariable_8 <= lastIndex_3)
            do {
              var i_4 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var slot_3 = m_3[i_4];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_8 = slot_3;
              if (!this_8.v2(this_8.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                var inductionVariable_9 = 0;
                if (inductionVariable_9 < bitCount_3)
                  do {
                    var j_3 = inductionVariable_9;
                    inductionVariable_9 = inductionVariable_9 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_3.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index_3 = (i_4 << 3) + j_3 | 0;
                      // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                      var tmp_11 = this_7.dv_1[index_3];
                      (tmp_11 == null ? true : !(tmp_11 == null)) || THROW_CCE();
                      var tmp_12 = this_7.ev_1[index_3];
                      var value_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
                      var tmp_13;
                      if (value_3 instanceof MutableScatterSet) {
                        var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                        // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                        var elements_0 = set_0.rv_1;
                        $l$block_3: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_4 = set_0.qv_1;
                          var lastIndex_4 = m_4.length - 2 | 0;
                          var inductionVariable_10 = 0;
                          if (inductionVariable_10 <= lastIndex_4)
                            do {
                              var i_5 = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var slot_4 = m_4[i_5];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_9 = slot_4;
                              if (!this_9.v2(this_9.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_11 = 0;
                                if (inductionVariable_11 < bitCount_4)
                                  do {
                                    var j_4 = inductionVariable_11;
                                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_4.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                      var index_4 = (i_5 << 3) + j_4 | 0;
                                      // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                      var tmp_14 = elements_0[index_4];
                                      var scope_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                                      if (tmp0_safe_receiver_1.o(scope_1)) {
                                        set_0.cw(index_4);
                                      }
                                    }
                                    slot_4 = slot_4.t2(8);
                                  }
                                   while (inductionVariable_11 < bitCount_4);
                                if (!(bitCount_4 === 8)) {
                                  break $l$block_3;
                                }
                              }
                            }
                             while (!(i_5 === lastIndex_4));
                        }
                        tmp_13 = set_0.q();
                      } else {
                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                        tmp_13 = tmp0_safe_receiver_1.o(scope_2);
                      }
                      if (tmp_13) {
                        this_7.pv(index_3);
                      }
                    }
                    slot_3 = slot_3.t2(8);
                  }
                   while (inductionVariable_9 < bitCount_3);
                if (!(bitCount_3 === 8)) {
                  break $l$block_4;
                }
              }
            }
             while (!(i_4 === lastIndex_3));
        }
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.v1b_1.m1c_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.cv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.dv_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ev_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.rv_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.qv_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.v2(this_2.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.t1b_1.q1c(derivedState)) {
                                    set.cw(index_0);
                                  }
                                }
                                slot_0 = slot_0.t2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.q();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.t1b_1.q1c(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.pv(index);
                  }
                }
                slot = slot.t2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.u1b_1.q()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.u1b_1.g();
      while (iter.h()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.i().n1c()) {
          iter.p3();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.t1b_1.m1c_1.x1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rv_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qv_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.p1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.y1b_1.r1c(value, scope);
                      }
                    }
                    slot = slot.t2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.p1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.y1b_1.r1c(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.r1b_1);
    try {
      if (changes.q())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.q16(sectionName);
        try {
          $this.o1b_1.ew();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.s1b_1.y12();
          var tmp;
          try {
            changes.s1c($this.o1b_1, writer, manager);
            tmp = Unit_instance;
          }finally {
            writer.m11();
          }
          $this.o1b_1.fw();
          break $l$block;
        }finally {
          Trace_instance.f17(token);
        }
      }
      manager.y1c();
      manager.z1c();
      if ($this.a1c_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.q16(sectionName_0);
          try {
            $this.a1c_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.t1b_1.m1c_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.cv_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.dv_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.ev_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.rv_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.qv_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.v2(this_2.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).a1d()) {
                                            set.cw(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.t2(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.q();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).a1d();
                          }
                          if (tmp_2) {
                            this_0.pv(index);
                          }
                        }
                        slot = slot.t2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.f17(token_0);
          }
        }
      }
    }finally {
      if ($this.x1b_1.q()) {
        manager.b1d();
      }
    }
  }
  function abandonChanges($this) {
    $this.p1b_1.c1d(null);
    $this.w1b_1.d2();
    $this.x1b_1.d2();
    $this.r1b_1.d2();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.d1d() && $this.e1c_1.m16(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.b1c_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.s1b_1.e1d($this.c1c_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.z1b_1.f1d(scope, null);
      } else {
        addValue($this.z1b_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.n1b_1.g1d($this);
    return $this.d1d() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.z1b_1;
    $this.z1b_1 = new IdentityArrayMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.d1c_1;
    var tmp;
    if (holder.j1d_1) {
      tmp = holder.i1d_1;
    } else {
      var parentHolder = $this.n1b_1.h1d();
      var parentObserver = parentHolder == null ? null : parentHolder.i1d_1;
      if (!equals(parentObserver, holder.i1d_1)) {
        holder.i1d_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.t1c_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u1c_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v1c_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.w1c_1 = ArrayList_init_$Create$();
    this.x1c_1 = null;
  }
  protoOf(RememberEventDispatcher).k1d = function (instance) {
    this.u1c_1.e(instance);
  };
  protoOf(RememberEventDispatcher).z1a = function (instance) {
    this.v1c_1.e(instance);
  };
  protoOf(RememberEventDispatcher).y1a = function (instance) {
    var tmp0_elvis_lhs = this.x1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.x1c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.bw(instance);
    // Inline function 'kotlin.collections.plusAssign' call
    this.v1c_1.e(instance);
  };
  protoOf(RememberEventDispatcher).y1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.v1c_1.q()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.q16(sectionName);
        try {
          var releasing = this.x1c_1;
          var inductionVariable = this.v1c_1.j() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.v1c_1.p(i);
              // Inline function 'kotlin.collections.remove' call
              var this_0 = this.t1c_1;
              (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).b2(instance);
              if (isInterface(instance, RememberObserver)) {
                instance.l1d();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.o(instance)) {
                  instance.hx();
                } else {
                  instance.gx();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.f17(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.u1c_1.q()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.q16(sectionName_0);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_1 = this.u1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_1.j() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_1.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.t1c_1.b2(item);
              item.m1d();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.f17(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).z1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.w1c_1.q()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.q16(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.w1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.w1c_1.d2();
          break $l$block;
        }finally {
          Trace_instance.f17(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).b1d = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.t1c_1.q()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.q16(sectionName);
        try {
          var iterator = this.t1c_1.g();
          while (iterator.h()) {
            var instance = iterator.i();
            iterator.p3();
            instance.n1d();
          }
          break $l$block;
        }finally {
          Trace_instance.f17(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.n1b_1 = parent;
    this.o1b_1 = applier;
    this.p1b_1 = new AtomicReference(null);
    this.q1b_1 = createSynchronizedObject();
    this.r1b_1 = HashSet_init_$Create$();
    this.s1b_1 = new SlotTable();
    this.t1b_1 = new ScopeMap();
    this.u1b_1 = HashSet_init_$Create$();
    this.v1b_1 = new ScopeMap();
    this.w1b_1 = new ChangeList();
    this.x1b_1 = new ChangeList();
    this.y1b_1 = new ScopeMap();
    this.z1b_1 = new IdentityArrayMap();
    this.a1c_1 = false;
    this.b1c_1 = null;
    this.c1c_1 = 0;
    this.d1c_1 = new CompositionObserverHolder();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.o1b_1, this.n1b_1, this.s1b_1, this.r1b_1, this.w1b_1, this.x1b_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.n1b_1.o1d(this_0);
    tmp.e1c_1 = this_0;
    this.f1c_1 = recomposeContext;
    var tmp_0 = this;
    var tmp_1 = this.n1b_1;
    tmp_0.g1c_1 = tmp_1 instanceof Recomposer;
    this.h1c_1 = false;
    this.i1c_1 = ComposableSingletons$CompositionKt_getInstance().p1d_1;
  }
  protoOf(CompositionImpl).d1d = function () {
    return this.e1c_1.az_1;
  };
  protoOf(CompositionImpl).r1d = function () {
    return this.h1c_1;
  };
  protoOf(CompositionImpl).s1d = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).t1d = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.q1b_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.u1d();
            observer_0.v1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.e1c_1.q1a(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.w1d(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.z1b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.r1b_1.q();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).x1d = function (values) {
    $l$loop: while (true) {
      var old = this.p1b_1.sm();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.p1b_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.p1b_1.y1d(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.q1b_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).z1d = function (values) {
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.o16_1;
      var inductionVariable = 0;
      var last = values.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (this.t1b_1.q1c(value) || this.v1b_1.q1c(value))
            return true;
        }
         while (inductionVariable < last);
      return false;
    }
    var tmp0_iterator = values.g();
    while (tmp0_iterator.h()) {
      var value_0 = tmp0_iterator.i();
      if (this.t1b_1.q1c(value_0) || this.v1b_1.q1c(value_0))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).a1e = function (block) {
    return this.e1c_1.s1a(block);
  };
  protoOf(CompositionImpl).b1e = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.e1c_1.p18();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.w1a(true);
        var alreadyRead = tmp0_safe_receiver.c1e(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.e1e(tmp$ret$0);
          }
          this.t1b_1.r1c(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            this.v1b_1.f1e(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = value.g1e().h1e();
            var k = this_0.pu_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.ou_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp = k[index];
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.e1e(tmp$ret$3);
                          }
                          this.v1b_1.r1c(dependency, value);
                        }
                        slot = slot.t2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).i1e = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.v1b_1.m1c_1.x1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rv_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qv_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp = k[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.t2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).j1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.u1d();
            observer_0.v1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.e1c_1.t1a(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.w1d(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.z1b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.r1b_1.q();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).k1e = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.fe_1.x15_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.e1c_1.j1a(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1e = function (state) {
    var manager = new RememberEventDispatcher(this.r1b_1);
    var slotTable = state.f16_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.y12();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.m11();
    }
    manager.y1c();
  };
  protoOf(CompositionImpl).m1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.w1b_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).n1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        if (this.x1b_1.z19()) {
          applyChangesInLocked(this, this.x1b_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).o1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.e1c_1.s18();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.r1b_1.q()) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).b1d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).p1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q1b_1;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.s1b_1.sz_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q1e();
      }
    }
  };
  protoOf(CompositionImpl).p16 = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.b1c_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.c1c_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.b1c_1 = null;
        this.c1c_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).r1e = function (scope, instance) {
    if (scope.s1e()) {
      scope.h1a(true);
    }
    var anchor = scope.ox_1;
    if (anchor == null || !anchor.a1d())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.s1b_1.t1e(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.q1b_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.b1c_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.u1e())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).v1e = function (scope) {
    this.a1c_1 = true;
  };
  protoOf(CompositionImpl).w1e = function (instance, scope) {
    this.t1b_1.o1c(instance, scope);
  };
  protoOf(CompositionImpl).x1e = function (state) {
    if (!this.t1b_1.q1c(state)) {
      this.v1b_1.f1e(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.i1d_1 = observer;
    this.j1d_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.g18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) || !$composer_0.i18()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.z12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.g18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) || !$composer_0.i18()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:739)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.z12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.p1d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.q1d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.z1e(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.y1e(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.k1b(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.k1b(value);
      _this__u8e3s4.f1d(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).h1d = function () {
    return null;
  };
  protoOf(CompositionContext).j10 = function (table) {
  };
  protoOf(CompositionContext).o1d = function (composer) {
  };
  protoOf(CompositionContext).c10 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).b10 = function () {
  };
  protoOf(CompositionContext).l10 = function () {
  };
  protoOf(CompositionContext).e16 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.t19_1 = new LazyValueHolder(defaultFactory);
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).c1f = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).u19 = function (value, previous) {
    return !(previous == null) && equals(previous.u1(), value) ? previous : new StaticValueHolder(value);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1a(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)247@10835L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:245)');
    }
    $composer_0.o19(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.x19();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.g1f_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).u19 = function (value, previous) {
    var tmp;
    var tmp_0;
    if (!(previous == null)) {
      tmp_0 = !(previous == null) ? isInterface(previous, MutableState) : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      previous.fr(value);
      tmp = previous;
    } else {
      tmp = mutableStateOf(value, this.g1f_1);
    }
    return tmp;
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.t19_1.u1();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.v1(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.x1(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().sm();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().l1f(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l18(-1371986847);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    $composer_0.l18(1176203671);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.g10(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.p19();
    var tmp;
    if (invalid || it === Companion_getInstance().f13_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.v19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.m18();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m18();
  }
  function DisposableEffectImpl(effect) {
    this.m1f_1 = effect;
    this.n1f_1 = null;
  }
  protoOf(DisposableEffectImpl).m1d = function () {
    this.n1f_1 = this.m1f_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).l1d = function () {
    var tmp0_safe_receiver = this.n1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gl();
    }
    this.n1f_1 = null;
  };
  protoOf(DisposableEffectImpl).n1d = function () {
  };
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l18(-1307627122);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.l18(-568225417);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.g10(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p19();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().f13_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.v19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.m18();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m18();
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l18(1429097729);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    $composer_0.l18(1176264029);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.g10(key1) | $composer_0.g10(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.p19();
    var tmp;
    if (invalid || it === Companion_getInstance().f13_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.v19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.m18();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m18();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.f2_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.o1f_1 = left;
    this.p1f_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.o1f_1), 31) + hashCodeOf(this, this.p1f_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.o1f_1) + ', right=' + toString_0(this.p1f_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.o1f_1, tmp0_other_with_cast.o1f_1))
      return false;
    if (!equals(this.p1f_1, tmp0_other_with_cast.p1f_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.e9(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.q1f_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.q1f_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.q1f_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.q1f_1 === tmp0_other_with_cast.q1f_1))
      return false;
    return true;
  };
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.mx_1 = $this.mx_1 | 32;
    } else {
      $this.mx_1 = $this.mx_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.mx_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.mx_1 = $this.mx_1 | 16;
    } else {
      $this.mx_1 = $this.mx_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).r1f = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.p(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.s1f(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.t1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).u1f = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.t1e(item)) {
              var tmp_1 = slots.v1f(slots.c16(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.rx_1 === $token && $instances.equals(this$0.sx_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.ou_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.pu_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'kotlin.also' call
                      var this_2 = !(this_0.qu_1[index] === $token);
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      if (this_2) {
                        composition.w1e(instance, this$0);
                        var tmp0_safe_receiver = isInterface(instance, DerivedState) ? instance : null;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          composition.x1e(tmp0_safe_receiver);
                          var tmp0_safe_receiver_0 = this$0.tx_1;
                          var tmp_2;
                          if (tmp0_safe_receiver_0 == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            tmp0_safe_receiver_0.v4(tmp0_safe_receiver);
                            if (tmp0_safe_receiver_0.j() === 0) {
                              this$0.tx_1 = null;
                            }
                            tmp_2 = Unit_instance;
                          }
                        }
                      }
                      if (this_2) {
                        this_0.av(index);
                      }
                    }
                    slot = slot.t2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        var tmp_3;
        if ($instances.j() === 0) {
          this$0.sx_1 = null;
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.mx_1 = 0;
    this.nx_1 = owner;
    this.ox_1 = null;
    this.px_1 = null;
    this.qx_1 = null;
    this.rx_1 = 0;
    this.sx_1 = null;
    this.tx_1 = null;
  }
  protoOf(RecomposeScopeImpl).a1d = function () {
    var tmp;
    if (!(this.nx_1 == null)) {
      var tmp0_safe_receiver = this.ox_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1d();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).u1e = function () {
    return !(this.px_1 == null);
  };
  protoOf(RecomposeScopeImpl).w1a = function (value) {
    if (value) {
      this.mx_1 = this.mx_1 | 1;
    } else {
      this.mx_1 = this.mx_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).k14 = function () {
    return !((this.mx_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).q18 = function (value) {
    if (value) {
      this.mx_1 = this.mx_1 | 2;
    } else {
      this.mx_1 = this.mx_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).s1e = function () {
    return !((this.mx_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).h1a = function (value) {
    if (value) {
      this.mx_1 = this.mx_1 | 4;
    } else {
      this.mx_1 = this.mx_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).r18 = function () {
    return !((this.mx_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).o15 = function (value) {
    if (value) {
      this.mx_1 = this.mx_1 | 8;
    } else {
      this.mx_1 = this.mx_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).u18 = function () {
    return !((this.mx_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).e15 = function (composer) {
    var block = this.px_1;
    var observer = this.qx_1;
    if (!(observer == null) && !(block == null)) {
      observer.w1f(this);
      try {
        block(composer, 1);
      }finally {
        observer.x1f(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).p1c = function (value) {
    var tmp0_safe_receiver = this.nx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1e(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).a1b = function () {
    var tmp0_safe_receiver = this.nx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1e(this);
    }
    this.nx_1 = null;
    this.sx_1 = null;
    this.tx_1 = null;
    var tmp1_safe_receiver = this.qx_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1f(this);
    }
  };
  protoOf(RecomposeScopeImpl).t1f = function (owner) {
    this.nx_1 = owner;
  };
  protoOf(RecomposeScopeImpl).q1e = function () {
    var tmp0_safe_receiver = this.nx_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.r1e(this, null);
  };
  protoOf(RecomposeScopeImpl).e1f = function (block) {
    this.px_1 = block;
  };
  protoOf(RecomposeScopeImpl).n15 = function (value) {
    if (value) {
      this.mx_1 = this.mx_1 | 64;
    } else {
      this.mx_1 = this.mx_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).m15 = function () {
    return !((this.mx_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).i1a = function () {
    return !((this.mx_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).p15 = function (token) {
    this.rx_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).c1a = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).c1e = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.sx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.sx_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.zu(instance, this.rx_1, -1);
    if (token === this.rx_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.tx_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.tx_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.nv(instance, instance.g1e().z1f());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).n1c = function () {
    return !(this.tx_1 == null);
  };
  protoOf(RecomposeScopeImpl).ux = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.tx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.z19()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.i1f();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.a1g(element.g1e().z1f(), trackedDependencies.x1(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).d15 = function () {
    var tmp0_safe_receiver = this.nx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.sx_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.pu_1;
          var v = tmp0_safe_receiver_0.qu_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.ou_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.v2(this_0.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_0 = k[index];
                        var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.b1e(value);
                      }
                      slot = slot.t2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).f1a = function (token) {
    var tmp0_safe_receiver = this.sx_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.i1a()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.pu_1;
          var v = tmp0_safe_receiver.qu_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.ou_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.v2(this_0.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.t2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new SynchronizedObject();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.b1g_1.u1();
      var new_0 = old.e(info);
      if (old === new_0 || $this.b1g_1.gr(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.b1g_1.u1();
      var new_0 = old.b2(info);
      if (old === new_0 || $this.b1g_1.gr(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    toRecompose.d2();
    toInsert.d2();
    toApply.d2();
    toLateApply.d2();
    toComplete.d2();
    modifiedValues.d2();
    alreadyComposed.d2();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.d2();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.f1g_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.n1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.e(item);
      }
       while (inductionVariable <= last);
    this$0.n1g_1.d2();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.q16(sectionName);
          try {
            this$0.e1g_1.dx(frameTime);
            Companion_instance_12.b1h();
            break $l$block;
          }finally {
            Trace_instance.f17(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.q16(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.f1g_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.l1g_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.e(item);
            }
             while (inductionVariable <= last);
          this$0.l1g_1.d2();
          $modifiedValues.d2();
          $alreadyComposed.d2();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.q()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.q();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.p(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $alreadyComposed.k1b(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.e(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.d2();
            }
            if ($modifiedValues.z19()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.f1g_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.j() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.p(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.c1h(item_1) && item_1.z1d($modifiedValues)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
            }
            if ($toRecompose.q()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.q()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, $modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.q()) {
            var tmp0_this = this$0;
            tmp0_this.d1g_1 = tmp0_this.d1g_1.p2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.j() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.p(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.e(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.j() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.p(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.m1e();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.d2();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.q()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.g();
              while (tmp0_iterator.h()) {
                var element = tmp0_iterator.i();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.n1e();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.d2();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.q()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.g();
              while (tmp0_iterator_0.h()) {
                var element_0 = tmp0_iterator_0.i();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.o1e();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.d2();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.f1g_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.d1h();
          $alreadyComposed.d2();
          $modifiedValues.d2();
          this$0.r1g_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.f17(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.f1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.x1g_1.u1().g2(State_Idle_getInstance()) >= 0) {
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        if (changed instanceof IdentityArraySet) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          // Inline function 'kotlin.contracts.contract' call
          var values = changed.o16_1;
          var inductionVariable = 0;
          var last = changed.n16_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              $l$block: {
                // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                var tmp_0 = values[i];
                var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                var tmp_1;
                if (it instanceof StateObjectImpl) {
                  // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                  var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
                  tmp_1 = !it.e1h(tmp$ret$0);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  break $l$block;
                }
                this$0.k1g_1.k1b(it);
              }
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = changed.g();
          while (tmp0_iterator.h()) {
            var element = tmp0_iterator.i();
            $l$block_0: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                tmp_2 = !element.e1h(tmp$ret$2);
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                break $l$block_0;
              }
              this$0.k1g_1.k1b(element);
            }
          }
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.c9(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.n1h_1 = $block;
    this.o1h_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).q1h = function ($this$coroutineScope, $completion) {
    var tmp = this.r1h($this$coroutineScope, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).y9 = function (p1, $completion) {
    return this.q1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 2;
            this.r8_1 = 1;
            suspendResult = this.n1h_1(this.p1h_1, this.o1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 2) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).r1h = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.n1h_1, this.o1h_1, completion);
    i.p1h_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1h($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.j1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.i1g_1;
      var newCache = compositions.q() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.j1g_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.w1g_1 && $this.e1g_1.cx();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.x1g_1.u1().g2(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.k1g_1 = new IdentityArraySet();
      $this.l1g_1.d2();
      $this.m1g_1.d2();
      $this.n1g_1.d2();
      $this.q1g_1 = null;
      var tmp0_safe_receiver = $this.s1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.wj();
      $this.s1g_1 = null;
      $this.v1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.v1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.g1g_1 == null) {
        $this.k1g_1 = new IdentityArraySet();
        $this.l1g_1.d2();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.l1g_1.q()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.k1g_1.z19();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.m1g_1.q();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.n1g_1.q();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.t1g_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.x1g_1.fr(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.s1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.s1g_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.u1g_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.y1g_1.kp().g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.mh()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.s1h_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.t1h_1 = recoverable;
    this.u1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.k1g_1.q())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.k1g_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.k1g_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.p(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.x1d(changes);
            if ($this.x1g_1.u1().g2(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.k1g_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.f1g_1;
        $this.k1g_1.v1h(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.h1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.x1g_1.u1().g2(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.g1g_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.g1g_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().c1g_1.sm()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.f1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.m1g_1.d2();
      $this.l1g_1.d2();
      $this.k1g_1 = new IdentityArraySet();
      $this.n1g_1.d2();
      $this.o1g_1.d2();
      $this.p1g_1.d2();
      $this.v1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.q1g_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.q1g_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.o(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.e(failedInitialComposition);
        }
        removeKnownCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.f1g_1;
      var errorState = $this.v1g_1;
      if (errorState == null) {
        $this.v1g_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.u1h_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.i1g_1.d2();
    $this.j1g_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.i1g_1.b2(composition);
    $this.j1g_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.i1g_1.e(composition);
    $this.j1g_1 = null;
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.k1g_1.z19()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.l1g_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.x8();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.e1g_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.n1g_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.x15_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.q()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.d1d() || composition.r1d()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.r1g_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.f1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.g1i();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.z19()) === true) {
              composition.a1e(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.j1e();
            break $l$block;
          }finally {
            snapshot.h1i(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.x15_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.x1(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.u4(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.e(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.a2().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.t1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.u1();
      runtimeCheck(!composition.d1d());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.f1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.g1i();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.f1g_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.j());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.p(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.o1g_1, item_0.v15_1));
                  target.e(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.k1e(pairs);
              break $l$block;
            }finally {
              snapshot.h1i(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.y1());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.o1g_1.q()) {
      var references = flatten($this.o1g_1.z1());
      $this.o1g_1.d2();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.j());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.p1g_1.x1(item));
          target.e(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.p1g_1.d2();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.p(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.he();
        var state = item_0.ie();
        if (!(state == null)) {
          reference.x15_1.l1e(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.v1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.gl();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.l1g_1.q()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.b1g_1 = MutableStateFlow(persistentSetOf());
    this.c1g_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.d2();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.f1g_1;
    var iterator = this$0.n1g_1.g();
    while (iterator.h()) {
      var value = iterator.i();
      if (equals(value.x15_1, $composition)) {
        toInsert.e(value);
        iterator.p3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.f1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.x1g_1.u1().g2(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.h1g_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.c9(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.f1g_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.h1g_1 = tmp_0;
      this$0.x1g_1.fr(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.f1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.g1g_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.x1g_1.fr(State_ShuttingDown_getInstance());
        if (!this$0.u1g_1) {
          runnerJob.ri(cancellation);
        } else if (!(this$0.s1g_1 == null)) {
          continuationToResume = this$0.s1g_1;
        }
        this$0.s1g_1 = null;
        tmp = runnerJob.mi(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.h1g_1 = cancellation;
        this$0.x1g_1.fr(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.c9(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.e1j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).o1j = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.p1j($this$recompositionRunner, parentFrameClock, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).q1j = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.o1j(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 6;
            var tmp_0 = this;
            tmp_0.h1j_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.i1j_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.j1j_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.k1j_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.l1j_1 = LinkedHashSet_init_$Create$();
            this.m1j_1 = new IdentityArraySet();
            this.n1j_1 = new IdentityArraySet();
            this.r8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.e1j_1)) {
              this.r8_1 = 5;
              continue $sm;
            }

            this.r8_1 = 2;
            suspendResult = awaitWorkAvailable(this.e1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.e1j_1)) {
              this.r8_1 = 1;
              continue $sm;
            } else {
              this.r8_1 = 3;
              continue $sm;
            }

          case 3:
            this.r8_1 = 4;
            suspendResult = this.g1j_1.ex(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.e1j_1, this.h1j_1, this.m1j_1, this.n1j_1, this.i1j_1, this.j1j_1, this.k1j_1, this.l1j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.e1j_1);
            this.r8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 6) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).p1j = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.e1j_1, completion);
    i.f1j_1 = $this$recompositionRunner;
    i.g1j_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.o1j($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.z1j_1 = this$0;
    this.a1k_1 = $block;
    this.b1k_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).q1h = function ($this$withContext, $completion) {
    var tmp = this.r1h($this$withContext, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(Recomposer$recompositionRunner$slambda).y9 = function (p1, $completion) {
    return this.q1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 5;
            this.d1k_1 = get_job(this.c1k_1.lh());
            registerRunnerJob(this.z1j_1, this.d1k_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.e1k_1 = tmp_1.g1k(Recomposer$recompositionRunner$slambda$lambda(this.z1j_1));
            addRunning(Companion_getInstance_2(), this.z1j_1.a1h_1);
            this.r8_1 = 1;
            continue $sm;
          case 1:
            this.s8_1 = 4;
            this.z1j_1.f1g_1;
            var this_0 = _get_knownCompositions__y8veaj(this.z1j_1);
            var inductionVariable = 0;
            var last = this_0.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.p(index);
                item.p1e();
              }
               while (inductionVariable <= last);
            this.r8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.a1k_1, this.b1k_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f1k_1 = suspendResult;
            this.s8_1 = 5;
            this.r8_1 = 3;
            continue $sm;
          case 3:
            this.s8_1 = 5;
            this.e1k_1.gl();
            this.z1j_1.f1g_1;
            if (this.z1j_1.g1g_1 === this.d1k_1) {
              this.z1j_1.g1g_1 = null;
            }

            deriveStateLocked(this.z1j_1);
            removeRunning(Companion_getInstance_2(), this.z1j_1.a1h_1);
            return Unit_instance;
          case 4:
            this.s8_1 = 5;
            var t = this.u8_1;
            this.e1k_1.gl();
            this.z1j_1.f1g_1;
            if (this.z1j_1.g1g_1 === this.d1k_1) {
              this.z1j_1.g1g_1 = null;
            }

            deriveStateLocked(this.z1j_1);
            removeRunning(Companion_getInstance_2(), this.z1j_1.a1h_1);
            throw t;
          case 5:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 5) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).r1h = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.z1j_1, this.a1k_1, this.b1k_1, completion);
    i.c1k_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.q1h($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.o16_1;
      var inductionVariable = 0;
      var last = this_0.n16_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.i1e(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.b1e(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.i1e(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.k1b(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1i_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.e1i_1)) {
              this.r8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.fl();
              this.e1i_1.f1g_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.e1i_1)) {
                tmp_0 = cancellable;
              } else {
                this.e1i_1.s1g_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.c9(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.jj(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r8_1 = 2;
              continue $sm;
            }

          case 1:
            this.r8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 3) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.d1g_1 = new Long(0, 0);
    var tmp = this;
    tmp.e1g_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.f1g_1 = createSynchronizedObject();
    this.g1g_1 = null;
    this.h1g_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.i1g_1 = ArrayList_init_$Create$();
    this.j1g_1 = null;
    this.k1g_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.l1g_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.m1g_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.n1g_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.o1g_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.p1g_1 = LinkedHashMap_init_$Create$();
    this.q1g_1 = null;
    this.r1g_1 = null;
    this.s1g_1 = null;
    this.t1g_1 = 0;
    this.u1g_1 = false;
    this.v1g_1 = null;
    this.w1g_1 = false;
    this.x1g_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.e9(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.mi(Recomposer$effectJob$lambda(this));
    tmp_6.y1g_1 = this_0;
    this.z1g_1 = effectCoroutineContext.zf(this.e1g_1).zf(this.y1g_1);
    this.a1h_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).h1k = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).j1c = function (composition, content) {
    var composerWasComposing = composition.d1d();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.f1i(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.g1i();
            try {
              composition.t1d(content);
              break $l$block;
            }finally {
              snapshot.h1i(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.d1h();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    if (this.x1g_1.u1().g2(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).o(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.m1e();
      composition.n1e();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.d1h();
    }
  };
  protoOf(Recomposer).k10 = function () {
    return 1000;
  };
  protoOf(Recomposer).h10 = function () {
    return false;
  };
  protoOf(Recomposer).i10 = function () {
    return false;
  };
  protoOf(Recomposer).j10 = function (table) {
  };
  protoOf(Recomposer).g1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.l1g_1.o(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.l1g_1.e(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.c9(tmp$ret$3);
    }
  };
  protoOf(Recomposer).s15 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.n1g_1.e(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.c9(tmp$ret$3);
    }
  };
  protoOf(Recomposer).a18 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.o1g_1, reference.v15_1, reference);
  };
  protoOf(Recomposer).a1f = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    this.p1g_1.u4(reference, data);
  };
  protoOf(Recomposer).z17 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.r1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.r1g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.e(composition);
  };
  protoOf(Recomposer).e16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.p1g_1.v4(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.x1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.v4(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x1(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.u4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.e(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function SlotTable() {
    this.qz_1 = new Int32Array(0);
    this.rz_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.sz_1 = tmp_1;
    this.tz_1 = 0;
    this.uz_1 = 0;
    this.vz_1 = new SynchronizedObject();
    this.wz_1 = false;
    this.xz_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.yz_1 = ArrayList_init_$Create$();
    this.zz_1 = null;
  }
  protoOf(SlotTable).b15 = function () {
    return this.rz_1 === 0;
  };
  protoOf(SlotTable).a10 = function () {
    if (this.wz_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.uz_1 = this.uz_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).y12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.wz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.uz_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.wz_1 = true;
    this.xz_1 = this.xz_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).w13 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.wz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.rz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.yz_1;
    var effectiveSize = this.rz_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.h4(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.p(location);
    }
    return tmp;
  };
  protoOf(SlotTable).i1k = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.wz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var message = 'use active SlotWriter to crate an anchor for location instead';
      composeRuntimeError(toString(message));
    }
    return (0 <= index ? index < this.rz_1 : false) ? find(this.yz_1, index, this.rz_1) : null;
  };
  protoOf(SlotTable).c16 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.wz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.a1d()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.z16_1;
  };
  protoOf(SlotTable).t1e = function (anchor) {
    var tmp;
    if (anchor.a1d()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$145qfty(this.yz_1, anchor.z16_1, this.rz_1);
      tmp = (it >= 0 && equals(this.yz_1.p(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).e1d = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.wz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.rz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.t1e(anchor)) {
      var containsUpper = groupIndex + groupSize(this.qz_1, groupIndex) | 0;
      var containsArg = anchor.z16_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).j1k = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.z10_1 === this && this.uz_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.uz_1 = this.uz_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.vz_1;
      var thisMap = this.zz_1;
      if (!(thisMap == null)) {
        thisMap.l5(sourceInformationMap);
      } else {
        this.zz_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).k1k = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.o11_1 === this && this.wz_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.wz_1 = false;
    this.l1k(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap);
  };
  protoOf(SlotTable).l1k = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    this.qz_1 = groups;
    this.rz_1 = groupsSize;
    this.sz_1 = slots;
    this.tz_1 = slotsSize;
    this.yz_1 = anchors;
    this.zz_1 = sourceInformationMap;
  };
  protoOf(SlotTable).l17 = function () {
    return this.rz_1 > 0 && containsMark(this.qz_1, 0);
  };
  protoOf(SlotTable).m1k = function (group) {
    var tmp0_safe_receiver = this.zz_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = this.i1k(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.x1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).v1f = function (group, slotIndex) {
    var start = slotAnchor(this.qz_1, group);
    var end = (group + 1 | 0) < this.rz_1 ? dataAnchor(this.qz_1, group + 1 | 0) : this.sz_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.sz_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().f13_1;
    }
    return tmp;
  };
  protoOf(SlotTable).g = function () {
    return new GroupIterator(this, 0, this.rz_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.n14(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.f12_1);
    if (fromWriter.t11_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.x11_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.p11_1;
    var currentGroup = toWriter.f12_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.p11_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.q11_1;
    var currentSlot = toWriter.v11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.q11_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.h12_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.z11_1;
    var slotsGapLen = toWriter.y11_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.x11_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.z11_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.r11_1, fromIndex, fromWriter.n1k());
    var endAnchors = locationOf(fromWriter.r11_1, sourceGroupsEnd, fromWriter.n1k());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.r11_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.p(anchorIndex);
          sourceAnchor.z16_1 = sourceAnchor.z16_1 + anchorDelta | 0;
          anchors.e(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.r11_1, toWriter.f12_1, toWriter.n1k());
      toWriter.r11_1.k4(insertLocation, anchors);
      sourceAnchors.l4(startAnchors, endAnchors).d2();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.q()) {
      var sourceSourceInformationMap = fromWriter.s11_1;
      if (!(sourceSourceInformationMap == null)) {
        var destinationSourceInformation = toWriter.s11_1;
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.j() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.p(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.x1(item);
            if (!(information == null)) {
              sourceSourceInformationMap.v4(item);
              var tmp0_elvis_lhs = destinationSourceInformation;
              var tmp_1;
              if (tmp0_elvis_lhs == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>.<anonymous>' call
                var map = HashMap_init_$Create$();
                destinationSourceInformation = map;
                toWriter.s11_1 = destinationSourceInformation;
                tmp_1 = map;
              } else {
                tmp_1 = tmp0_elvis_lhs;
              }
              var map_0 = tmp_1;
              // Inline function 'kotlin.collections.set' call
              map_0.u4(item, information);
            }
          }
           while (inductionVariable_1 <= last);
        if (sourceSourceInformationMap.q()) {
          fromWriter.s11_1 = null;
        }
      }
    }
    var toWriterParent = toWriter.h12_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.f12_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.p11_1, child) | 0;
      }
      tmp4_safe_receiver.s1k(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.v12(fromIndex);
    var tmp_2;
    if (!removeSourceGroup) {
      tmp_2 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.c13();
        fromWriter.t1k(parentGroup - fromWriter.f12_1 | 0);
        fromWriter.c13();
      }
      fromWriter.t1k(fromIndex - fromWriter.f12_1 | 0);
      var anchorsRemoved = fromWriter.b1b();
      if (needsStartGroups) {
        fromWriter.z12();
        fromWriter.z14();
        fromWriter.z12();
        fromWriter.z14();
      }
      tmp_2 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_2 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_2;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.b12_1 = toWriter.b12_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.f12_1 = currentGroup + groupsToMove | 0;
      toWriter.v11_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_elvis_lhs = $this.s11_1;
    var map = tmp0_elvis_lhs == null ? HashMap_init_$Create$() : tmp0_elvis_lhs;
    $this.s11_1 = map;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = $this.w13(parent);
    var value = map.x1(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
      var result = new GroupSourceInformation(0, sourceInformation);
      if (sourceInformation == null) {
        var child = parent + 1 | 0;
        var end = $this.f12_1;
        while (child < end) {
          result.u1k($this, child);
          child = child + groupSize($this.p11_1, child) | 0;
        }
      }
      var answer = result;
      map.u4(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.h12_1;
    var inserting = $this.a12_1 > 0;
    $this.e12_1.f10($this.b12_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.f12_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().f13_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().f13_1);
      initGroup($this.p11_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.h12_1, $this.v11_1);
      $this.w11_1 = $this.v11_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.q11_1;
        var currentSlot = $this.v11_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.v11_1 = currentSlot;
      }
      $this.b12_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.h12_1 = current;
      $this.f12_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.u1k($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.c12_1.f10(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.f12_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().f13_1)) {
        if (isNode) {
          $this.w1k(aux);
        } else {
          $this.v1k(aux);
        }
      }
      $this.v11_1 = slotIndex($this.p11_1, $this, currentGroupAddress);
      $this.w11_1 = dataIndex_0($this.p11_1, $this, groupIndexToAddress($this, $this.f12_1 + 1 | 0));
      $this.b12_1 = nodeCount($this.p11_1, currentGroupAddress);
      $this.h12_1 = currentGroup;
      $this.f12_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.p11_1, currentGroupAddress) | 0;
    }
    tmp.g12_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.p11_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.p11_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.j12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.z19()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.y1k(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.j12_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.j12_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.z1k(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.p11_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.p11_1, groupAddress, containsAnyMarks);
      var parent = $this.v12(group);
      if (parent >= 0) {
        set.z1k(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.n14(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.p11_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.n14(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.d12_1.f10((_get_capacity__a9k9f3($this) - $this.u11_1 | 0) - $this.g12_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.u11_1 | 0) - $this.d12_1.j14() | 0;
    $this.g12_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.t11_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.p11_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.p11_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.u11_1;
    var gapStart = $this.t11_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.r11_1.q()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.p11_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.p11_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.p11_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.t11_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.y11_1;
    var gapStart = $this.x11_1;
    var slotsGapOwner = $this.z11_1;
    if (!(gapStart === index)) {
      var slots = $this.q11_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.n1k();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.q11_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.t11_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.p11_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.p11_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.u11_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.p11_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.p11_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.t11_1)
            updateAddress_0 = updateAddress_0 + $this.u11_1 | 0;
        }
      }
      $this.z11_1 = newSlotsGapOwner;
    }
    $this.x11_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.x11_1;
    var slotsGapEnd = slotsGapStart + $this.y11_1 | 0;
    fill_0($this.q11_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.f12_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.t11_1;
      var gapLen = $this.u11_1;
      var oldCapacity = $this.p11_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.p11_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.p11_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.g12_1;
      if (currentEnd >= gapStart)
        $this.g12_1 = currentEnd + size | 0;
      $this.t11_1 = gapStart + size | 0;
      $this.u11_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.z11_1 < gapStart ? 0 : $this.x11_1, $this.y11_1, $this.q11_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.p11_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.z11_1;
      if (slotsGapOwner >= gapStart) {
        $this.z11_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.v11_1, group);
      var gapStart = $this.x11_1;
      var gapLen = $this.y11_1;
      if (gapLen < size) {
        var slots = $this.q11_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.q11_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.w11_1;
      if (currentDataEnd >= gapStart)
        $this.w11_1 = currentDataEnd + size | 0;
      $this.x11_1 = gapStart + size | 0;
      $this.y11_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.r11_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.q()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.s11_1);
      }
      $this.t11_1 = start;
      var previousGapLen = $this.u11_1;
      var newGapLen = previousGapLen + len | 0;
      $this.u11_1 = newGapLen;
      var slotsGapOwner = $this.z11_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.z11_1 = Math.max(start, b);
      }
      if ($this.g12_1 >= $this.t11_1) {
        $this.g12_1 = $this.g12_1 - len | 0;
      }
      var parent = $this.h12_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.s11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.a1l(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.x1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.y11_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.x11_1 = start;
      $this.y11_1 = gapLen + len | 0;
      fill_0($this.q11_1, null, start, start + len | 0);
      var currentDataEnd = $this.w11_1;
      if (currentDataEnd >= start)
        $this.w11_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.p11_1.length && isNode($this.p11_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.q11_1[dataIndexToDataAddress($this, nodeIndex($this.p11_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.u11_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.r11_1, previousGapStart, size);
      $l$loop_0: while (index < $this.r11_1.j()) {
        var anchor = $this.r11_1.p(index);
        var location = anchor.z16_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.z16_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.r11_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.r11_1.j()) {
        var anchor_0 = $this.r11_1.p(index_0);
        var location_0 = anchor_0.z16_1;
        if (location_0 >= 0) {
          anchor_0.z16_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.u11_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.r11_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.r11_1.j() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.r11_1.p(index);
      var location = $this.c16(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.z16_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.v4(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.r11_1.l4(removeAnchorStart, removeAnchorEnd).d2();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.n1k();
    var index = locationOf($this.r11_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.r11_1.j()) {
        var anchor = $this.r11_1.p(index);
        var location = $this.c16(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.e(anchor);
          $this.r11_1.u3(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.p(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.c16(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.t11_1) {
          item.z16_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.z16_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.r11_1, newAnchorIndex, groupsSize);
        $this.r11_1.h4(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.p11_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.t11_1 ? index : index + $this.u11_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.x11_1 ? dataIndex : dataIndex + $this.y11_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.p11_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.q11_1.length - $this.y11_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.y11_1, $this.q11_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.q11_1.length - $this.y11_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.y11_1, $this.q11_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.x11_1, $this.y11_1, $this.q11_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.n1k() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.n1k() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.c1l_1 = $end;
    this.d1l_1 = this$0;
    this.b1l_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).h = function () {
    return this.b1l_1 < this.c1l_1;
  };
  protoOf(SlotWriter$groupSlots$1).i = function () {
    var tmp;
    if (this.h()) {
      var tmp_0 = this.d1l_1.q11_1;
      var tmp1 = this.b1l_1;
      this.b1l_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.d1l_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.o11_1 = table;
    this.p11_1 = this.o11_1.qz_1;
    this.q11_1 = this.o11_1.sz_1;
    this.r11_1 = this.o11_1.yz_1;
    this.s11_1 = this.o11_1.zz_1;
    this.t11_1 = this.o11_1.rz_1;
    this.u11_1 = (this.p11_1.length / 5 | 0) - this.o11_1.rz_1 | 0;
    this.v11_1 = 0;
    this.w11_1 = 0;
    this.x11_1 = this.o11_1.tz_1;
    this.y11_1 = this.q11_1.length - this.o11_1.tz_1 | 0;
    this.z11_1 = this.o11_1.rz_1;
    this.a12_1 = 0;
    this.b12_1 = 0;
    this.c12_1 = new IntStack();
    this.d12_1 = new IntStack();
    this.e12_1 = new IntStack();
    this.f12_1 = 0;
    this.g12_1 = this.o11_1.rz_1;
    this.h12_1 = -1;
    this.i12_1 = false;
    this.j12_1 = null;
  }
  protoOf(SlotWriter).b1a = function () {
    return this.f12_1 < this.g12_1 && isNode(this.p11_1, groupIndexToAddress(this, this.f12_1));
  };
  protoOf(SlotWriter).h15 = function (index) {
    return isNode(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).i15 = function (index) {
    return nodeCount(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).t12 = function (index) {
    return key(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).u12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.p11_1, address) ? this.q11_1[objectKeyIndex(this.p11_1, address)] : null;
  };
  protoOf(SlotWriter).n14 = function (index) {
    return groupSize(this.p11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).s12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.p11_1, address) ? this.q11_1[auxIndex(this.p11_1, this, address)] : Companion_getInstance().f13_1;
  };
  protoOf(SlotWriter).e1l = function (index) {
    return index > this.h12_1 && index < this.g12_1 || (this.h12_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).f1l = function (index) {
    return this.g1l(index, this.f12_1);
  };
  protoOf(SlotWriter).g1l = function (index, group) {
    var tmp;
    if (group === this.h12_1) {
      tmp = this.g12_1;
    } else if (group > this.c12_1.i1l(0)) {
      tmp = group + this.n14(group) | 0;
    } else {
      var openIndex = this.c12_1.h1l(group);
      tmp = openIndex < 0 ? group + this.n14(group) | 0 : (_get_capacity__a9k9f3(this) - this.u11_1 | 0) - this.d12_1.g15(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).g17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.p11_1, address) ? this.q11_1[dataIndexToDataAddress(this, nodeIndex(this.p11_1, this, address))] : null;
  };
  protoOf(SlotWriter).j1l = function (anchor) {
    return this.g17(anchor.k1l(this));
  };
  protoOf(SlotWriter).v12 = function (index) {
    return parent(this.p11_1, this, index);
  };
  protoOf(SlotWriter).m11 = function () {
    this.i12_1 = true;
    if (this.c12_1.q()) {
      moveGroupGapTo(this, this.n1k());
      moveSlotGapTo(this, this.q11_1.length - this.y11_1 | 0, this.t11_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.o11_1.k1k(this, this.p11_1, this.t11_1, this.q11_1, this.x11_1, this.r11_1, this.s11_1);
  };
  protoOf(SlotWriter).l1l = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.f12_1 = 0;
    this.g12_1 = _get_capacity__a9k9f3(this) - this.u11_1 | 0;
    this.v11_1 = 0;
    this.w11_1 = 0;
    this.b12_1 = 0;
  };
  protoOf(SlotWriter).l19 = function (value) {
    var result = this.m1l();
    this.n1l(value);
    return result;
  };
  protoOf(SlotWriter).v1k = function (value) {
    var address = groupIndexToAddress(this, this.f12_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.p11_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.q11_1[dataIndexToDataAddress(this, auxIndex(this.p11_1, this, address))] = value;
  };
  protoOf(SlotWriter).l1a = function (sourceInformation) {
    if (this.a12_1 > 0) {
      groupSourceInformationFor(this, this.h12_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).n1a = function (key, value) {
    if (this.a12_1 > 0) {
      groupSourceInformationFor(this, this.h12_1, null).o1l(key, value);
    }
  };
  protoOf(SlotWriter).p1a = function () {
    if (this.a12_1 > 0) {
      groupSourceInformationFor(this, this.h12_1, null).p1l();
    }
  };
  protoOf(SlotWriter).w1k = function (value) {
    return updateNodeOfGroup(this, this.f12_1, value);
  };
  protoOf(SlotWriter).q1l = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.k1l(this), value);
  };
  protoOf(SlotWriter).n1l = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v11_1 <= this.w11_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.q11_1[dataIndexToDataAddress(this, this.v11_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).r1l = function (index, value) {
    return this.s1l(this.f12_1, index, value);
  };
  protoOf(SlotWriter).s1l = function (group, index, value) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.p11_1, this, address);
    var slotsEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.q11_1[slotAddress];
    this.q11_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).m1l = function () {
    if (this.a12_1 > 0) {
      insertSlots(this, 1, this.h12_1);
    }
    var tmp = this.q11_1;
    var tmp1 = this.v11_1;
    this.v11_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).s1f = function (anchor, index) {
    return this.t1l(this.c16(anchor), index);
  };
  protoOf(SlotWriter).t1l = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.p11_1, this, address);
    var slotsEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().f13_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.q11_1[slotAddress];
  };
  protoOf(SlotWriter).t1k = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.f12_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.h12_1 && index <= this.g12_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.h12_1 + '-' + this.g12_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.f12_1 = index;
    var newSlot = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, index));
    this.v11_1 = newSlot;
    this.w11_1 = newSlot;
  };
  protoOf(SlotWriter).z12 = function () {
    var newGroup = this.g12_1;
    this.f12_1 = newGroup;
    this.v11_1 = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).v13 = function () {
    var tmp1 = this.a12_1;
    this.a12_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).a15 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a12_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.a12_1 = this.a12_1 - 1 | 0;
    if (this.a12_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.e12_1.j() === this.c12_1.j())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).c13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance().f13_1, false, Companion_getInstance().f13_1);
  };
  protoOf(SlotWriter).g13 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().f13_1);
  };
  protoOf(SlotWriter).i13 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().f13_1);
  };
  protoOf(SlotWriter).h13 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).z14 = function () {
    var inserting = this.a12_1 > 0;
    var currentGroup = this.f12_1;
    var currentGroupEnd = this.g12_1;
    var groupIndex = this.h12_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.b12_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.p11_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.p11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.p11_1, groupAddress, newNodes);
      this.b12_1 = this.e12_1.j14() + (isNode_0 ? 1 : newNodes) | 0;
      this.h12_1 = parent(this.p11_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.p11_1, groupAddress);
      var oldNodes = nodeCount(this.p11_1, groupAddress);
      updateGroupSize(this.p11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.p11_1, groupAddress, newNodes);
      var newParent = this.c12_1.j14();
      restoreCurrentGroupEnd(this);
      this.h12_1 = newParent;
      var groupParent = parent(this.p11_1, this, groupIndex);
      this.b12_1 = this.e12_1.j14();
      if (groupParent === newParent) {
        this.b12_1 = this.b12_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.p11_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.p11_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.p11_1, currentAddress, nodeCount(this.p11_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.p11_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.p11_1, this, current);
          }
        }
        this.b12_1 = this.b12_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).u1l = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.h12_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent && index < this.g12_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.f12_1;
      var oldCurrentSlot = this.v11_1;
      var oldCurrentSlotEnd = this.w11_1;
      this.f12_1 = index;
      this.c13();
      this.f12_1 = oldCurrent;
      this.v11_1 = oldCurrentSlot;
      this.w11_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).v1l = function (anchor) {
    return this.u1l(anchor.k1l(this));
  };
  protoOf(SlotWriter).p12 = function () {
    var groupAddress = groupIndexToAddress(this, this.f12_1);
    var newGroup = this.f12_1 + groupSize(this.p11_1, groupAddress) | 0;
    this.f12_1 = newGroup;
    this.v11_1 = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.p11_1, groupAddress) ? 1 : nodeCount(this.p11_1, groupAddress);
  };
  protoOf(SlotWriter).b1b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.f12_1;
    var oldSlot = this.v11_1;
    var count = this.p12();
    var tmp0_safe_receiver = sourceInformationOf(this, this.h12_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.a1l(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.w1l(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.j12_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.z19() && tmp1_safe_receiver.w18() >= oldGroup) {
        tmp1_safe_receiver.y1k();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.f12_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.v11_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.f12_1 = oldGroup;
    this.v11_1 = oldSlot;
    this.b12_1 = this.b12_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).x1a = function () {
    var start = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, this.f12_1));
    var end = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, this.f12_1 + this.n14(this.f12_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).x1l = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a12_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.f12_1;
    var parent = this.h12_1;
    var parentEnd = this.g12_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.p11_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.p11_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.v11_1;
    var dataStart = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.p11_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.f12_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.p11_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.q11_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.x11_1;
    var slotsGapLen = this.y11_1;
    var slotsCapacity = this.q11_1.length;
    var slotsGapOwner = this.z11_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.g12_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).y1l = function (anchor, offset, writer) {
    runtimeCheck(writer.a12_1 > 0);
    runtimeCheck(this.a12_1 === 0);
    runtimeCheck(anchor.a1d());
    var location = this.c16(anchor) + offset | 0;
    var currentGroup = this.f12_1;
    runtimeCheck(currentGroup <= location ? location < this.g12_1 : false);
    var parent = this.v12(location);
    var size = this.n14(location);
    var nodes = this.h15(location) ? 1 : this.i15(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.p11_1, currentAddress, groupSize(this.p11_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.p11_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.p11_1, currentAddress, nodeCount(this.p11_1, currentAddress) - nodes | 0);
        }
      }
      current = this.v12(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.b12_1 >= nodes);
      this.b12_1 = this.b12_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).z1l = function (table, index, removeSourceGroup) {
    runtimeCheck(this.a12_1 > 0);
    if (index === 0 && this.f12_1 === 0 && this.o11_1.rz_1 === 0 && groupSize(table.qz_1, index) === table.rz_1) {
      var myGroups = this.p11_1;
      var mySlots = this.q11_1;
      var myAnchors = this.r11_1;
      var mySourceInformation = this.s11_1;
      var groups = table.qz_1;
      var groupsSize = table.rz_1;
      var slots = table.sz_1;
      var slotsSize = table.tz_1;
      var sourceInformation = table.zz_1;
      this.p11_1 = groups;
      this.q11_1 = slots;
      this.r11_1 = table.yz_1;
      this.t11_1 = groupsSize;
      this.u11_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.x11_1 = slotsSize;
      this.y11_1 = slots.length - slotsSize | 0;
      this.z11_1 = groupsSize;
      this.s11_1 = sourceInformation;
      table.l1k(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation);
      return this.r11_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.y12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.m11();
    }
    return tmp;
  };
  protoOf(SlotWriter).a1m = function (offset, table, index) {
    runtimeCheck(this.a12_1 <= 0 && this.n14(this.f12_1 + offset | 0) === 1);
    var previousCurrentGroup = this.f12_1;
    var previousCurrentSlot = this.v11_1;
    var previousCurrentSlotEnd = this.w11_1;
    this.t1k(offset);
    this.c13();
    this.v13();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.y12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.m11();
    }
    var anchors = tmp;
    this.a15();
    this.z14();
    this.f12_1 = previousCurrentGroup;
    this.v11_1 = previousCurrentSlot;
    this.w11_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).w13 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.r11_1;
    var effectiveSize = this.n1k();
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.t11_1 ? index : -(this.n1k() - index | 0) | 0);
      this_0.h4(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.p(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).b1m = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.p11_1, groupAddress)) {
      updateMark(this.p11_1, groupAddress, true);
      if (!containsMark(this.p11_1, groupAddress)) {
        updateContainsMark(this, this.v12(group));
      }
    }
  };
  protoOf(SlotWriter).r15 = function (group, $super) {
    group = group === VOID ? this.h12_1 : group;
    var tmp;
    if ($super === VOID) {
      this.b1m(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.b1m.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).c16 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.z16_1;
    return it < 0 ? this.n1k() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.f12_1 + ' end=' + this.g12_1 + ' size = ' + this.n1k() + ' ' + ('gap=' + this.t11_1 + '-' + (this.t11_1 + this.u11_1 | 0) + ')');
  };
  protoOf(SlotWriter).a1l = function (group) {
    return (0 <= group ? group < this.n1k() : false) ? find(this.r11_1, group, this.n1k()) : null;
  };
  protoOf(SlotWriter).n1k = function () {
    return _get_capacity__a9k9f3(this) - this.u11_1 | 0;
  };
  function Anchor(loc) {
    this.z16_1 = loc;
  }
  protoOf(Anchor).a1d = function () {
    return !(this.z16_1 === -2147483648);
  };
  protoOf(Anchor).a1a = function (slots) {
    return slots.c16(this);
  };
  protoOf(Anchor).k1l = function (writer) {
    return writer.c16(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.z16_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.q1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.j() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.p(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.r1k_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.q1k_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.q1k_1 = groups;
    groups.e(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.q1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation) {
    this.o1k_1 = key;
    this.p1k_1 = sourceInformation;
    this.q1k_1 = null;
    this.r1k_1 = false;
  }
  protoOf(GroupSourceInformation).o1l = function (key, sourceInformation) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation));
  };
  protoOf(GroupSourceInformation).p1l = function () {
    openInformation(this).m11();
  };
  protoOf(GroupSourceInformation).u1k = function (writer, group) {
    add(openInformation(this), writer.w13(group));
  };
  protoOf(GroupSourceInformation).c1m = function (table, group) {
    add(openInformation(this), table.w13(group));
  };
  protoOf(GroupSourceInformation).s1k = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.q1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.q1k_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.a1l(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.j();
          while (index < size) {
            var value = groups.p(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.h4(index_0, writer.w13(group));
  };
  protoOf(GroupSourceInformation).m11 = function () {
    this.r1k_1 = true;
  };
  protoOf(GroupSourceInformation).w1l = function (anchor) {
    var groups = this.q1k_1;
    if (!(groups == null)) {
      var index = groups.j() - 1 | 0;
      while (index >= 0) {
        var item = groups.p(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.u3(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.w1l(anchor)) {
              groups.u3(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.q()) {
        this.q1k_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.c11_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().f13_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.c11_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().f13_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.c11_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.z10_1 = table;
    this.a11_1 = this.z10_1.qz_1;
    this.b11_1 = this.z10_1.rz_1;
    this.c11_1 = this.z10_1.sz_1;
    this.d11_1 = this.z10_1.tz_1;
    this.e11_1 = null;
    this.f11_1 = false;
    this.g11_1 = 0;
    this.h11_1 = this.b11_1;
    this.i11_1 = -1;
    this.j11_1 = 0;
    this.k11_1 = 0;
    this.l11_1 = 0;
  }
  protoOf(SlotReader).j = function () {
    return this.b11_1;
  };
  protoOf(SlotReader).v12 = function (index) {
    return parentAnchor(this.a11_1, index);
  };
  protoOf(SlotReader).b1a = function () {
    return isNode(this.a11_1, this.g11_1);
  };
  protoOf(SlotReader).h15 = function (index) {
    return isNode(this.a11_1, index);
  };
  protoOf(SlotReader).i15 = function (index) {
    return nodeCount(this.a11_1, index);
  };
  protoOf(SlotReader).g17 = function (index) {
    return isNode(this.a11_1, index) ? node(this.a11_1, this, index) : null;
  };
  protoOf(SlotReader).t14 = function () {
    return this.c15() || this.g11_1 === this.h11_1;
  };
  protoOf(SlotReader).c15 = function () {
    return this.j11_1 > 0;
  };
  protoOf(SlotReader).d1m = function () {
    return groupSize(this.a11_1, this.g11_1);
  };
  protoOf(SlotReader).n14 = function (index) {
    return groupSize(this.a11_1, index);
  };
  protoOf(SlotReader).s14 = function () {
    return this.h11_1;
  };
  protoOf(SlotReader).r13 = function () {
    var tmp;
    if (this.g11_1 < this.h11_1) {
      tmp = key(this.a11_1, this.g11_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).t12 = function (index) {
    return key(this.a11_1, index);
  };
  protoOf(SlotReader).j19 = function () {
    return this.k11_1 - slotAnchor(this.a11_1, this.i11_1) | 0;
  };
  protoOf(SlotReader).k15 = function (index) {
    return hasObjectKey(this.a11_1, index);
  };
  protoOf(SlotReader).t13 = function () {
    return this.g11_1 < this.h11_1 ? objectKey(this.a11_1, this, this.g11_1) : null;
  };
  protoOf(SlotReader).u12 = function (index) {
    return objectKey(this.a11_1, this, index);
  };
  protoOf(SlotReader).b13 = function () {
    return this.g11_1 < this.h11_1 ? aux(this.a11_1, this, this.g11_1) : 0;
  };
  protoOf(SlotReader).s12 = function (index) {
    return aux(this.a11_1, this, index);
  };
  protoOf(SlotReader).e18 = function (index) {
    return hasMark(this.a11_1, index);
  };
  protoOf(SlotReader).o17 = function (index) {
    return containsMark(this.a11_1, index);
  };
  protoOf(SlotReader).l15 = function () {
    return this.i11_1 >= 0 ? nodeCount(this.a11_1, this.i11_1) : 0;
  };
  protoOf(SlotReader).p17 = function (group, index) {
    var start = slotAnchor(this.a11_1, group);
    var next = group + 1 | 0;
    var end = next < this.b11_1 ? dataAnchor(this.a11_1, next) : this.d11_1;
    var address = start + index | 0;
    return address < end ? this.c11_1[address] : Companion_getInstance().f13_1;
  };
  protoOf(SlotReader).i = function () {
    if (this.j11_1 > 0 || this.k11_1 >= this.l11_1)
      return Companion_getInstance().f13_1;
    var tmp1 = this.k11_1;
    this.k11_1 = tmp1 + 1 | 0;
    return this.c11_1[tmp1];
  };
  protoOf(SlotReader).e13 = function () {
    this.j11_1 = this.j11_1 + 1 | 0;
  };
  protoOf(SlotReader).y14 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j11_1 = this.j11_1 - 1 | 0;
  };
  protoOf(SlotReader).m11 = function () {
    this.f11_1 = true;
    this.z10_1.j1k(this, this.e11_1);
  };
  protoOf(SlotReader).c13 = function () {
    if (this.j11_1 <= 0) {
      var parent = this.i11_1;
      var currentGroup = this.g11_1;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.a11_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_safe_receiver = this.e11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1(this.w13(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.c1m(this.z10_1, currentGroup);
      }
      this.i11_1 = currentGroup;
      this.h11_1 = currentGroup + groupSize(this.a11_1, currentGroup) | 0;
      this.g11_1 = currentGroup + 1 | 0;
      this.k11_1 = slotAnchor(this.a11_1, currentGroup);
      this.l11_1 = currentGroup >= (this.b11_1 - 1 | 0) ? this.d11_1 : dataAnchor(this.a11_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).d13 = function () {
    if (this.j11_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.a11_1, this.g11_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.c13();
    }
  };
  protoOf(SlotReader).p12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.a11_1, this.g11_1) ? 1 : nodeCount(this.a11_1, this.g11_1);
    this.g11_1 = this.g11_1 + groupSize(this.a11_1, this.g11_1) | 0;
    return count;
  };
  protoOf(SlotReader).z12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.g11_1 = this.h11_1;
  };
  protoOf(SlotReader).g14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.g11_1 = index;
    var parent = index < this.b11_1 ? parentAnchor(this.a11_1, index) : -1;
    this.i11_1 = parent;
    if (parent < 0)
      this.h11_1 = this.b11_1;
    else
      this.h11_1 = parent + groupSize(this.a11_1, parent) | 0;
    this.k11_1 = 0;
    this.l11_1 = 0;
  };
  protoOf(SlotReader).f15 = function (index) {
    var newCurrentEnd = index + groupSize(this.a11_1, index) | 0;
    var current = this.g11_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.i11_1 = index;
    this.h11_1 = newCurrentEnd;
    this.k11_1 = 0;
    this.l11_1 = 0;
  };
  protoOf(SlotReader).w14 = function () {
    if (this.j11_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.g11_1 === this.h11_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.a11_1, this.i11_1);
      this.i11_1 = parent;
      this.h11_1 = parent < 0 ? this.b11_1 : parent + groupSize(this.a11_1, parent) | 0;
    }
  };
  protoOf(SlotReader).s13 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.j11_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.g11_1;
    while (childIndex < this.h11_1) {
      var tmp = key(this.a11_1, childIndex);
      var tmp_0 = objectKey(this.a11_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.a11_1, childIndex) ? 1 : nodeCount(this.a11_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.e(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.a11_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.g11_1 + ', key=' + this.r13() + ', ' + ('parent=' + this.i11_1 + ', end=' + this.h11_1 + ')');
  };
  protoOf(SlotReader).w13 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.z10_1.yz_1;
    var effectiveSize = this.b11_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.h4(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.p(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.p(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.p(mid).z16_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.e1m_1.xz_1 === $this.h1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.e1m_1 = table;
    this.f1m_1 = end;
    this.g1m_1 = start;
    this.h1m_1 = this.e1m_1.xz_1;
    if (this.e1m_1.wz_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).h = function () {
    return this.g1m_1 < this.f1m_1;
  };
  protoOf(GroupIterator).i = function () {
    validateRead(this);
    var group = this.g1m_1;
    this.g1m_1 = this.g1m_1 + groupSize(this.e1m_1.qz_1, group) | 0;
    return new SlotTableGroup(this.e1m_1, group, this.h1m_1);
  };
  function validateRead_0($this) {
    if (!($this.i1m_1.xz_1 === $this.k1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.xz_1 : version;
    this.i1m_1 = table;
    this.j1m_1 = group;
    this.k1m_1 = version;
  }
  protoOf(SlotTableGroup).g = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.i1m_1.m1k(this.j1m_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.i1m_1, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.i1m_1, this.j1m_1 + 1 | 0, this.j1m_1 + groupSize(this.i1m_1.qz_1, this.j1m_1) | 0) : tmp1_elvis_lhs;
  };
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.x1k_1 = list;
  }
  protoOf(PrioritySet).z1k = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x1k_1.q()) {
      tmp = this.x1k_1.p(0) === value || this.x1k_1.p(this.x1k_1.j() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.x1k_1.j();
    this.x1k_1.e(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.x1k_1.p(parent);
      if (value > parentValue) {
        this.x1k_1.n3(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.x1k_1.n3(index, value);
  };
  protoOf(PrioritySet).z19 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.x1k_1.q();
  };
  protoOf(PrioritySet).w18 = function () {
    return first(this.x1k_1);
  };
  protoOf(PrioritySet).y1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.x1k_1.j() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.x1k_1.p(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.x1k_1.q()) {
        tmp = this.x1k_1.p(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.x1k_1.n3(0, last(this.x1k_1));
      this.x1k_1.u3(this.x1k_1.j() - 1 | 0);
      var index = 0;
      var size = this.x1k_1.j();
      var max = this.x1k_1.j() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.x1k_1.p(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.x1k_1.p(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.x1k_1.p(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.x1k_1.n3(index, rightValue);
              this.x1k_1.n3(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.x1k_1.n3(index, leftValue);
          this.x1k_1.n3(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.x13_1 = key;
    this.y13_1 = objectKey;
    this.z13_1 = location;
    this.a14_1 = nodes;
    this.b14_1 = index;
  }
  function SourceInformationGroupIterator(table, group) {
    this.l1m_1 = table;
    this.m1m_1 = group;
    this.n1m_1 = this.l1m_1.xz_1;
    this.o1m_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp0_safe_receiver = this.m1m_1.q1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.o1m_1 < tmp0_safe_receiver.j();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).i = function () {
    var tmp2_safe_receiver = this.m1m_1.q1k_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.o1m_1;
      this.o1m_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.p(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.l1m_1, group.z16_1, this.n1m_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.l1m_1, group);
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function SourceInformationSlotTableGroup(table, sourceInformation) {
    this.p1m_1 = table;
    this.q1m_1 = sourceInformation;
    this.r1m_1 = this.q1m_1.o1k_1;
    this.s1m_1 = emptyList();
    this.t1m_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).g = function () {
    return new SourceInformationGroupIterator(this.p1m_1, this.q1m_1);
  };
  function search$accessor$145qfty(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).v1m = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).a1g = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.v1m(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function State_0() {
  }
  function MutableState() {
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.y1m_1 = myValue;
  }
  protoOf(StateStateRecord).z1m = function (value) {
    var tmp = this;
    tmp.y1m_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).y1m_1;
  };
  protoOf(StateStateRecord).a1n = function () {
    return new StateStateRecord(this.y1m_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.c1n_1 = policy;
    this.d1n_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).i1f = function () {
    return this.c1n_1;
  };
  protoOf(SnapshotMutableStateImpl).fr = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.d1n_1;
    var it = current(this_0);
    if (!this.i1f().a1g(it.y1m_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.d1n_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      overwritableRecord(this_1, this, snapshot, it).y1m_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).u1 = function () {
    return readable_0(this.d1n_1, this).y1m_1;
  };
  protoOf(SnapshotMutableStateImpl).e1n = function () {
    return this.d1n_1;
  };
  protoOf(SnapshotMutableStateImpl).f1n = function (value) {
    var tmp = this;
    tmp.d1n_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).g1n = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.i1f().a1g(currentRecord.y1m_1, appliedRecord.y1m_1)) {
      tmp = current;
    } else {
      var merged = this.i1f().u1m(previousRecord.y1m_1, currentRecord.y1m_1, appliedRecord.y1m_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.a1n();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).y1m_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.d1n_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.y1m_1) + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.j1f_1 = new AtomicReference(get_emptyThreadMap());
    this.k1f_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).sm = function () {
    var tmp = this.j1f_1.sm().k1n(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).l1f = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1f_1;
    var current = this.j1f_1.sm();
    if (current.l1n(key, value))
      return Unit_instance;
    this.j1f_1.c1d(current.m1n(key, value));
  };
  function IntStack() {
    this.d10_1 = new Int32Array(10);
    this.e10_1 = 0;
  }
  protoOf(IntStack).j = function () {
    return this.e10_1;
  };
  protoOf(IntStack).f10 = function (value) {
    if (this.e10_1 >= this.d10_1.length) {
      this.d10_1 = copyOf(this.d10_1, imul(this.d10_1.length, 2));
    }
    var tmp = this.d10_1;
    var tmp1 = this.e10_1;
    this.e10_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).j14 = function () {
    var tmp = this.d10_1;
    this.e10_1 = this.e10_1 - 1 | 0;
    return tmp[this.e10_1];
  };
  protoOf(IntStack).i1l = function (default_0) {
    return this.e10_1 > 0 ? this.w18() : default_0;
  };
  protoOf(IntStack).w18 = function () {
    return this.d10_1[this.e10_1 - 1 | 0];
  };
  protoOf(IntStack).g15 = function (index) {
    return this.d10_1[index];
  };
  protoOf(IntStack).q = function () {
    return this.e10_1 === 0;
  };
  protoOf(IntStack).d2 = function () {
    this.e10_1 = 0;
  };
  protoOf(IntStack).h1l = function (value) {
    var inductionVariable = 0;
    var last = this.e10_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.d10_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.n11_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).j = function () {
    return this.n11_1.j();
  };
  protoOf(Stack).i14 = function (value) {
    return this.n11_1.e(value);
  };
  protoOf(Stack).j14 = function () {
    return this.n11_1.u3(this.j() - 1 | 0);
  };
  protoOf(Stack).w18 = function () {
    return this.n11_1.p(this.j() - 1 | 0);
  };
  protoOf(Stack).g15 = function (index) {
    return this.n11_1.p(index);
  };
  protoOf(Stack).q = function () {
    return this.n11_1.q();
  };
  protoOf(Stack).z19 = function () {
    return !this.q();
  };
  protoOf(Stack).d2 = function () {
    return this.n11_1.d2();
  };
  protoOf(Stack).d5 = function () {
    var tmp = 0;
    var tmp_0 = this.n11_1.j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.n11_1.p(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h1f_1;
    current$factory();
    return this_0.u1();
  }
  function LazyValueHolder(valueProducer) {
    this.h1f_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).u1 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.n1n_1 = value;
  }
  protoOf(StaticValueHolder).u1 = function () {
    return this.n1n_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + toString_0(this.n1n_1) + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.n1n_1 == null ? 0 : hashCode(this.n1n_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.n1n_1, tmp0_other_with_cast.n1n_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    this.r1a_1 = new Operations();
  }
  protoOf(ChangeList).q = function () {
    return this.r1a_1.q();
  };
  protoOf(ChangeList).z19 = function () {
    return this.r1a_1.z19();
  };
  protoOf(ChangeList).d2 = function () {
    this.r1a_1.d2();
  };
  protoOf(ChangeList).s1c = function (applier, slots, rememberManager) {
    return this.r1a_1.w1n(applier, slots, rememberManager);
  };
  protoOf(ChangeList).x1n = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).d1o = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).e1o = function () {
    this.r1a_1.f1o(ResetSlots_getInstance());
  };
  protoOf(ChangeList).g1o = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).h1o = function () {
    this.r1a_1.f1o(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).i1o = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).j1o = function () {
    this.r1a_1.f1o(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).k1o = function () {
    this.r1a_1.f1o(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).l1o = function () {
    this.r1a_1.f1o(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).m1o = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).n1o = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).o1o = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).p1o = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).q1o = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.r1a_1.f1o(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).r1o = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).s1o = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).t1o = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).u1o = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).v1o = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).w1o = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.r1a_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.y1n(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.z1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.u1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w7(', ');
              }
              this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.a1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.v1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w7(', ');
              }
              this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).x1o = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).y1o = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.q()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.r1a_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.y1n(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.z1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.u1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w7(', ');
              }
              this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.a1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.v1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w7(', ');
              }
              this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).z1o = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).a1p = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.r1a_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).b1p = function () {
    this.r1a_1.f1o(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).c1p = function (changeList, effectiveNodeIndex) {
    if (changeList.z19()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.r1a_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.y1n(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.z1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.u1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w7(', ');
              }
              this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.a1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.v1n_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w7(', ');
              }
              this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.m10_1.cz_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.b18();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.o10_1 && $this.q10_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.n10_1.h1o();
      $this.o10_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.n10_1.i1o(anchor);
    $this.o10_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).i11_1 : _get_reader__fd8dw8($this).g11_1;
    var distance = location - $this.r10_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      $this.n10_1.u1o(distance);
      $this.r10_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.x10_1 > 0) {
      if ($this.u10_1 >= 0) {
        realizeRemoveNode($this, $this.u10_1, $this.x10_1);
        $this.u10_1 = -1;
      } else {
        realizeMoveNode($this, $this.w10_1, $this.v10_1, $this.x10_1);
        $this.v10_1 = -1;
        $this.w10_1 = -1;
      }
      $this.x10_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.n10_1.s1o(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.n10_1.t1o(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.s10_1 > 0) {
      $this.n10_1.v1o($this.s10_1);
      $this.s10_1 = 0;
    }
    if ($this.t10_1.z19()) {
      $this.n10_1.w1o($this.t10_1.d5());
      $this.t10_1.d2();
    }
  }
  function Companion_4() {
    this.d1p_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.m10_1 = composer;
    this.n10_1 = changeList;
    this.o10_1 = false;
    this.p10_1 = new IntStack();
    this.q10_1 = true;
    this.r10_1 = 0;
    this.s10_1 = 0;
    this.t10_1 = new Stack();
    this.u10_1 = -1;
    this.v10_1 = -1;
    this.w10_1 = -1;
    this.x10_1 = 0;
  }
  protoOf(ComposerChangeListWriter).f14 = function (location) {
    this.r10_1 = this.r10_1 + (location - _get_reader__fd8dw8(this).g11_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).i16 = function (location) {
    this.r10_1 = location;
  };
  protoOf(ComposerChangeListWriter).b18 = function () {
    if (_get_reader__fd8dw8(this).j() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.i11_1;
      if (!(this.p10_1.i1l(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.w13(location);
          this.p10_1.f10(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).n19 = function (value) {
    this.n10_1.x1n(value);
  };
  protoOf(ComposerChangeListWriter).k19 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.n10_1.d1o(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).u15 = function () {
    this.n10_1.e1o();
  };
  protoOf(ComposerChangeListWriter).a13 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.n10_1.g1o(data);
  };
  protoOf(ComposerChangeListWriter).y10 = function () {
    if (this.o10_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.n10_1.j1o();
      this.o10_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).v14 = function () {
    var location = _get_reader__fd8dw8(this).i11_1;
    var currentStartedGroup = this.p10_1.i1l(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if (this.p10_1.i1l(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.p10_1.j14();
      this.n10_1.j1o();
    }
  };
  protoOf(ComposerChangeListWriter).k16 = function () {
    this.n10_1.k1o();
  };
  protoOf(ComposerChangeListWriter).j17 = function () {
    pushSlotEditingOperationPreamble(this);
    this.n10_1.l1o();
    this.r10_1 = this.r10_1 + _get_reader__fd8dw8(this).d1m() | 0;
  };
  protoOf(ComposerChangeListWriter).i17 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.n10_1.m1o(anchor, from);
  };
  protoOf(ComposerChangeListWriter).h17 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.n10_1.n1o(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).h14 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.n10_1.o1o(offset);
  };
  protoOf(ComposerChangeListWriter).g1a = function (action, composition) {
    this.n10_1.p1o(action, composition);
  };
  protoOf(ComposerChangeListWriter).z18 = function (node) {
    pushApplierOperationPreamble(this);
    this.n10_1.q1o(node);
  };
  protoOf(ComposerChangeListWriter).c19 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.n10_1.r1o(value, block);
  };
  protoOf(ComposerChangeListWriter).l14 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if (this.u10_1 === nodeIndex) {
        this.x10_1 = this.x10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.u10_1 = nodeIndex;
        this.x10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).p14 = function (from, to, count) {
    if (count > 0) {
      if (this.x10_1 > 0 && this.v10_1 === (from - this.x10_1 | 0) && this.w10_1 === (to - this.x10_1 | 0)) {
        this.x10_1 = this.x10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.v10_1 = from;
        this.w10_1 = to;
        this.x10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).k17 = function () {
    pushPendingUpsAndDowns(this);
    if (this.o10_1) {
      this.k16();
      this.y10();
    }
  };
  protoOf(ComposerChangeListWriter).r14 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).d18 = function (nodeIndex, group) {
    this.r14();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).h15(group) ? 1 : _get_reader__fd8dw8(this).i15(group);
    if (nodeCount > 0) {
      this.l14(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).u14 = function () {
    if (this.t10_1.z19()) {
      this.t10_1.j14();
    } else {
      this.s10_1 = this.s10_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).j15 = function (node) {
    this.t10_1.i14(node);
  };
  protoOf(ComposerChangeListWriter).d16 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.n10_1.x1o(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).g16 = function (nodes, effectiveNodeIndex) {
    this.n10_1.y1o(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).h16 = function (resolvedState, parentContext, from, to) {
    this.n10_1.z1o(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).c18 = function (composition, parentContext, reference) {
    this.n10_1.a1p(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).l16 = function () {
    this.n10_1.b1p();
    this.r10_1 = 0;
  };
  protoOf(ComposerChangeListWriter).j16 = function (other, effectiveNodeIndex) {
    this.n10_1.c1p(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).m17 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.p10_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var message = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message));
    }
  };
  protoOf(ComposerChangeListWriter).n17 = function () {
    this.o10_1 = false;
    this.p10_1.d2();
    this.r10_1 = 0;
  };
  function FixupList() {
    this.k12_1 = new Operations();
    this.l12_1 = new Operations();
  }
  protoOf(FixupList).q = function () {
    return this.k12_1.q();
  };
  protoOf(FixupList).d2 = function () {
    this.l12_1.d2();
    this.k12_1.d2();
  };
  protoOf(FixupList).e1p = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l12_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var message = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeRuntimeError(toString(message));
    }
    this.k12_1.w1n(applier, slots, rememberManager);
  };
  protoOf(FixupList).x18 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.k12_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.l12_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.y1n(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.u1n_1 === createExpectedArgMask(this_3, operation_0.z1n_1) && this_3.v1n_1 === createExpectedArgMask(this_3, operation_0.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.u1n_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.w7(', ');
            }
            this_4.w7(operation_0.b1o(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.v1n_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.w7(', ');
            }
            this_5.w7(operation_0.c1o(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var message_0 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(FixupList).x14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l12_1.z19()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var message = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeRuntimeError(toString(message));
    }
    this.l12_1.f1p(this.k12_1);
  };
  protoOf(FixupList).d19 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.k12_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.y1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.u1n_1 === createExpectedArgMask(this_0, operation.z1n_1) && this_0.v1n_1 === createExpectedArgMask(this_0, operation.a1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.z1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.u1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w7(', ');
            }
            this_1.w7(operation.b1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.a1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.v1n_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w7(', ');
            }
            this_2.w7(operation.c1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.j1p(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.hw();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.n1p(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.gw(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.t1k(_this__u8e3s4.j1p(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.k1d(_this__u8e3s4.n1p(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.j1p(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.k1d(value.f19_1);
    }
    var previous = slots.r1l(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      rememberManager.z1a(previous.f19_1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.a1b();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.v1k(_this__u8e3s4.n1p(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.u1l(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.v1l(_this__u8e3s4.n1p(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.x1l(_this__u8e3s4.j1p(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.z14();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.z12();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.n1p(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.dw();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).fx();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.n1p(tmp$ret$1);
    block(applier.dw(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).b1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.j1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.kw(tmp, _this__u8e3s4.j1p(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).b1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.j1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.j1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.lw(tmp, tmp_0, _this__u8e3s4.j1p(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.n1p(tmp$ret$1);
    slots.v13();
    slots.z1l(insertTable, anchor.a1a(insertTable), false);
    slots.a15();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).c1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.n1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.n1p(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.y12();
    var tmp;
    try {
      fixups.e1p(applier, writer, rememberManager);
      tmp = Unit_instance;
    }finally {
      writer.m11();
    }
    slots.v13();
    slots.z1l(insertTable, anchor.a1a(insertTable), false);
    slots.a15();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.n1p(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.n1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.j1p(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.q1l(groupAnchor, node);
    nodeApplier.iw(insertIndex, node);
    nodeApplier.gw(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).b1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).b1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).c1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.j1p(tmp$ret$1);
    applier.hw();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.j1l(groupAnchor);
    nodeApplier.jw(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.l1l();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.n1p(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.n1p(tmp$ret$1);
    tmp.e1r_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.n1p(tmp$ret$0).e1r_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.n1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.p(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.jw(effectiveNodeIndex + index | 0, item);
        applier.iw(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).c1o.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.n1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.n1p(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.n1p(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.e16(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.a1m(1, resolvedState.f16_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.x15_1;
    tmp_0.r1f(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.z14();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).c1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.n1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.n1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.n1p(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).c1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).c1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).i1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.n1p(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1r_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.n1p(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.s1c(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.z1n_1 = ints;
    this.a1o_1 = objects;
  }
  protoOf(Operation).k1p = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).z9();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).b1o = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).c1o = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.k1p();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.c16(anchor);
    runtimeCheck(slots.f12_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.f12_1 < destination) {
      if (slots.f1l(destination)) {
        if (slots.b1a()) {
          applier.gw(slots.g17(slots.f12_1));
          nodeIndex = 0;
        }
        slots.c13();
      } else
        nodeIndex = nodeIndex + slots.p12() | 0;
    }
    runtimeCheck(slots.f12_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.e1l(index)) {
      slots.z12();
      if (slots.h15(slots.h12_1)) {
        applier.hw();
      }
      slots.z14();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.y12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.v13();
      writer.g13(126665345, reference.v15_1);
      writer.r15();
      writer.l19(reference.w15_1);
      var anchors = slots.y1l(reference.z15_1, 1, writer);
      writer.p12();
      writer.z14();
      writer.a15();
      tmp = anchors;
    }finally {
      writer.m11();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.u1f(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.y12();
      var tmp_0;
      try {
        Companion_instance_2.r1f(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.m11();
      }
    }
    parentContext.a1f(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.f12_1;
    var current = slots.h12_1;
    while (current >= 0 && !slots.h15(current)) {
      current = slots.v12(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.g1l(original, current)) {
        if (slots.h15(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.h15(current) ? 1 : slots.i15(current)) | 0;
        current = current + slots.n14(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.p1r_1 = $composition;
    this.q1r_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).r1e = function (scope, instance) {
    var tmp = this.p1r_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1e(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.q1r_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.a16_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.k1b(this_0);
        tmp_2 = this_0;
      }
      tmp_0.a16_1 = plus_1(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).v1e = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).b1e = function (value) {
  };
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.u1n_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).b1o(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.u1n_1 = $this$with.u1n_1 | mask;
    $this$with.q1n_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.v1n_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).c1o(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.v1n_1 = $this$with.v1n_1 | mask;
    $this$with.s1n_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.q1n_1.length;
    if (requiredSize > currentSize) {
      $this.q1n_1 = copyOf($this.q1n_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.s1n_1.length;
    if (requiredSize > currentSize) {
      $this.s1n_1 = copyOf_0($this.s1n_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.o1n_1[$this.p1n_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.r1n_1 - peekOperation($this).z1n_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.t1n_1 - peekOperation($this).a1o_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.u1r_1 = $outer;
    this.r1r_1 = 0;
    this.s1r_1 = 0;
    this.t1r_1 = 0;
  }
  protoOf(OpIterator).i = function () {
    if (this.r1r_1 >= this.u1r_1.p1n_1)
      return false;
    var op = this.v1r();
    this.s1r_1 = this.s1r_1 + op.z1n_1 | 0;
    this.t1r_1 = this.t1r_1 + op.a1o_1 | 0;
    this.r1r_1 = this.r1r_1 + 1 | 0;
    return this.r1r_1 < this.u1r_1.p1n_1;
  };
  protoOf(OpIterator).v1r = function () {
    return ensureNotNull(this.u1r_1.o1n_1[this.r1r_1]);
  };
  protoOf(OpIterator).j1p = function (parameter) {
    return this.u1r_1.q1n_1[this.s1r_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).n1p = function (parameter) {
    var tmp = this.u1r_1.s1n_1[this.t1r_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.w1r_1 = 1024;
    this.x1r_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function Operations() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o1n_1 = fillArrayVal(Array(16), null);
    this.p1n_1 = 0;
    this.q1n_1 = new Int32Array(16);
    this.r1n_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.s1n_1 = fillArrayVal(Array(16), null);
    this.t1n_1 = 0;
    this.u1n_1 = 0;
    this.v1n_1 = 0;
  }
  protoOf(Operations).j = function () {
    return this.p1n_1;
  };
  protoOf(Operations).q = function () {
    return this.j() === 0;
  };
  protoOf(Operations).z19 = function () {
    return !(this.j() === 0);
  };
  protoOf(Operations).d2 = function () {
    this.p1n_1 = 0;
    this.r1n_1 = 0;
    fill_0(this.s1n_1, null, 0, this.t1n_1);
    this.t1n_1 = 0;
  };
  protoOf(Operations).y1n = function (operation) {
    this.u1n_1 = 0;
    this.v1n_1 = 0;
    if (this.p1n_1 === this.o1n_1.length) {
      var resizeAmount = coerceAtMost(this.p1n_1, 1024);
      this.o1n_1 = copyOf_0(this.o1n_1, this.p1n_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.r1n_1 + operation.z1n_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.t1n_1 + operation.a1o_1 | 0);
    var tmp = this.o1n_1;
    var tmp1 = this.p1n_1;
    this.p1n_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.r1n_1 = this.r1n_1 + operation.z1n_1 | 0;
    this.t1n_1 = this.t1n_1 + operation.a1o_1 | 0;
  };
  protoOf(Operations).f1o = function (operation) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.z1n_1 === 0 && operation.a1o_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var message = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.z1n_1 + ' ints and ' + operation.a1o_1 + ' objects.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y1n(operation);
  };
  protoOf(Operations).f1p = function (other) {
    if (this.q()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.o1n_1;
    this.p1n_1 = this.p1n_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.p1n_1]);
    this.o1n_1[this.p1n_1] = null;
    other.y1n(op);
    var thisObjIdx = this.t1n_1;
    var otherObjIdx = other.t1n_1;
    // Inline function 'kotlin.repeat' call
    var times = op.a1o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.s1n_1[otherObjIdx] = this.s1n_1[thisObjIdx];
        this.s1n_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.r1n_1;
    var otherIntIdx = other.r1n_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.z1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.q1n_1[otherIntIdx] = this.q1n_1[thisIntIdx];
        this.q1n_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.t1n_1 = this.t1n_1 - op.a1o_1 | 0;
    this.r1n_1 = this.r1n_1 - op.z1n_1 | 0;
  };
  protoOf(Operations).w1n = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.z19()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.v1r().i1p(iterator, applier, slots, rememberManager);
      }
       while (iterator.i());
    }
    this.d2();
  };
  protoOf(Operations).toString = function () {
    return anyToString(this);
  };
  function IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this$0, $index) {
    var tmp = this;
    var tmp_0 = this$0.w16_1[$index];
    tmp.y1r_1 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this$0.x16_1[$index];
    tmp_1.z1r_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).t1 = function () {
    return this.y1r_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).u1 = function () {
    return this.z1r_1;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation) {
    this.i1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).m1s = function ($this$sequence, $completion) {
    var tmp = this.n1s($this$sequence, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).y9 = function (p1, $completion) {
    return this.m1s(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 4;
            this.k1s_1 = until(0, this.i1s_1.y16_1).g();
            this.r8_1 = 1;
            continue $sm;
          case 1:
            if (!this.k1s_1.h()) {
              this.r8_1 = 3;
              continue $sm;
            }

            this.l1s_1 = this.k1s_1.i();
            this.r8_1 = 2;
            suspendResult = this.j1s_1.je(new IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this.i1s_1, this.l1s_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 4) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).n1s = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this.i1s_1, completion);
    i.j1s_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.m1s($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation) {
    this.w1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).a1t = function ($this$sequence, $completion) {
    var tmp = this.b1t($this$sequence, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).y9 = function (p1, $completion) {
    return this.a1t(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 4;
            this.y1s_1 = until(0, this.w1s_1.y16_1).g();
            this.r8_1 = 1;
            continue $sm;
          case 1:
            if (!this.y1s_1.h()) {
              this.r8_1 = 3;
              continue $sm;
            }

            this.z1s_1 = this.y1s_1.i();
            this.r8_1 = 2;
            var tmp_0 = this.w1s_1.w16_1[this.z1s_1];
            suspendResult = this.x1s_1.je(!(tmp_0 == null) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 4) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).b1t = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this.w1s_1, completion);
    i.x1s_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a1t($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation) {
    this.k1t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).o1t = function ($this$sequence, $completion) {
    var tmp = this.p1t($this$sequence, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).y9 = function (p1, $completion) {
    return this.o1t(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 4;
            this.m1t_1 = until(0, this.k1t_1.y16_1).g();
            this.r8_1 = 1;
            continue $sm;
          case 1:
            if (!this.m1t_1.h()) {
              this.r8_1 = 3;
              continue $sm;
            }

            this.n1t_1 = this.m1t_1.i();
            this.r8_1 = 2;
            var tmp_0 = this.k1t_1.x16_1[this.n1t_1];
            suspendResult = this.l1t_1.je((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 4) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).p1t = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this.k1t_1, completion);
    i.l1t_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.o1t($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$1$entries$1(this$0) {
    this.q1t_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1).j = function () {
    return this.q1t_1.y16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).q = function () {
    return this.q1t_1.q();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).g = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this.q1t_1, null)).g();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).r1t = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.collection.<no name provided>.containsAll.<anonymous>' call
        if (!this.s1t(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).q1 = function (elements) {
    return this.r1t(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).s1t = function (element) {
    return this.q1t_1.y1e(element.t1()) === element.u1();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.s1t((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$keys$1(this$0) {
    this.t1t_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$keys$1).j = function () {
    return this.t1t_1.y16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).q = function () {
    return this.t1t_1.q();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).g = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this.t1t_1, null)).g();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).u1t = function (elements) {
    var tmp0_iterator = elements.g();
    while (tmp0_iterator.h()) {
      var key = tmp0_iterator.i();
      if (!this.z1e(key))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).q1 = function (elements) {
    return this.u1t(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).z1e = function (element) {
    return this.t1t_1.z1e(element);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).o = function (element) {
    if (!!(element == null))
      return false;
    return this.z1e(!(element == null) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$values$1(this$0) {
    this.v1t_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$values$1).j = function () {
    return this.v1t_1.y16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).q = function () {
    return this.v1t_1.q();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).g = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this.v1t_1, null)).g();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).w1t = function (elements) {
    var tmp0_iterator = elements.g();
    while (tmp0_iterator.h()) {
      var value = tmp0_iterator.i();
      if (!this.x1t(value))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).q1 = function (elements) {
    return this.w1t(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).x1t = function (element) {
    var inductionVariable = 0;
    var last = this.v1t_1.y16_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.v1t_1.x16_1[index], element))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x1t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.y16_1 - 1 | 0;
    var keys = $this.w16_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, key, keyHash) {
    var keys = $this.w16_1;
    var size = $this.y16_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap$asMap$1(this$0) {
    this.y1t_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1).a2 = function () {
    return new IdentityArrayMap$asMap$1$entries$1(this.y1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).y1 = function () {
    return new IdentityArrayMap$asMap$1$keys$1(this.y1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).j = function () {
    return this.y1t_1.y16_1;
  };
  protoOf(IdentityArrayMap$asMap$1).z1 = function () {
    return new IdentityArrayMap$asMap$1$values$1(this.y1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).q = function () {
    return this.y1t_1.q();
  };
  protoOf(IdentityArrayMap$asMap$1).y1e = function (key) {
    return this.y1t_1.y1e(key);
  };
  protoOf(IdentityArrayMap$asMap$1).x1 = function (key) {
    if (!!(key == null))
      return null;
    return this.y1e(!(key == null) ? key : THROW_CCE());
  };
  protoOf(IdentityArrayMap$asMap$1).z1t = function (key) {
    return !(this.y1t_1.y1e(key) == null);
  };
  protoOf(IdentityArrayMap$asMap$1).v1 = function (key) {
    if (!!(key == null))
      return false;
    return this.z1t(!(key == null) ? key : THROW_CCE());
  };
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.w16_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.x16_1 = fillArrayVal(Array(capacity), null);
    this.y16_1 = 0;
  }
  protoOf(IdentityArrayMap).q = function () {
    return this.y16_1 === 0;
  };
  protoOf(IdentityArrayMap).z19 = function () {
    return this.y16_1 > 0;
  };
  protoOf(IdentityArrayMap).z1e = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).y1e = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.x16_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).f1d = function (key, value) {
    var keys = this.w16_1;
    var values = this.x16_1;
    var size = this.y16_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.w16_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.x16_1 = destValues;
      this.y16_1 = this.y16_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).u1d = function () {
    return new IdentityArrayMap$asMap$1(this);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.n16_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.o16_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_0($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, value, valueHash) {
    var values = $this.o16_1;
    var size = $this.n16_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.b1u_1 = this$0;
    this.a1u_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).h = function () {
    return this.a1u_1 < this.b1u_1.n16_1;
  };
  protoOf(IdentityArraySet$iterator$1).i = function () {
    var tmp = this.b1u_1.o16_1;
    var tmp1 = this.a1u_1;
    this.a1u_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.n16_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o16_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).j = function () {
    return this.n16_1;
  };
  protoOf(IdentityArraySet).c1h = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).o = function (element) {
    if (!!(element == null))
      return false;
    return this.c1h(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).k1b = function (value) {
    var index;
    var size = this.n16_1;
    var values = this.o16_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.o16_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.o16_1[insertIndex] = value;
    this.n16_1 = this.n16_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).d2 = function () {
    fill_0(this.o16_1, null);
    this.n16_1 = 0;
  };
  protoOf(IdentityArraySet).v1h = function (collection) {
    if (collection.q())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.g();
      while (tmp0_iterator.h()) {
        var value = tmp0_iterator.i();
        this.k1b(value);
      }
    } else {
      var thisValues = this.o16_1;
      var otherValues = collection.o16_1;
      var thisSize = this.n16_1;
      var otherSize = collection.n16_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.o16_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 || identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize && elementsInOrder) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.n16_1 = this.n16_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 || otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.o16_1 = newArray;
        this.n16_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).q = function () {
    return this.n16_1 === 0;
  };
  protoOf(IdentityArraySet).z19 = function () {
    return this.n16_1 > 0;
  };
  protoOf(IdentityArraySet).c1u = function (value) {
    var index = find_1(this, value);
    var values = this.o16_1;
    var size = this.n16_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.n16_1 = this.n16_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).ae = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.c1h(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).q1 = function (elements) {
    return this.ae(elements);
  };
  protoOf(IdentityArraySet).g = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function MutableVector(content, size) {
    this.a17_1 = content;
    this.b17_1 = null;
    this.c17_1 = size;
  }
  protoOf(MutableVector).d17 = function (element) {
    this.d1u(this.c17_1 + 1 | 0);
    this.a17_1[this.c17_1] = element;
    this.c17_1 = this.c17_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).d1u = function (capacity) {
    var oldContent = this.a17_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.a17_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).u3 = function (index) {
    var content = this.a17_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.c17_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.c17_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.c17_1 = this.c17_1 - 1 | 0;
    content[this.c17_1] = null;
    return item;
  };
  function ScopeMap() {
    this.m1c_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).r1c = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.m1c_1;
    var index = this_0.ov(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ev_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).e(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.e(!(value == null) ? value : THROW_CCE());
          set.e(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.dv_1[insertionIndex] = key;
      this_0.ev_1[insertionIndex] = computedValue;
    } else {
      this_0.ev_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).q1c = function (element) {
    return this.m1c_1.v1(element);
  };
  protoOf(ScopeMap).o1c = function (key, scope) {
    var tmp0_elvis_lhs = this.m1c_1.x1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.b2(scope);
      if (removed && set.q()) {
        this.m1c_1.v4(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.m1c_1.v4(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).f1e = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.m1c_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.cv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.v2(this_1.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.dv_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ev_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.rv_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.qv_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.v2(this_2.r2().s2(7)).v2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.v2(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === scope) {
                                    set.cw(index_0);
                                  }
                                }
                                slot_0 = slot_0.t2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.q();
                  } else {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                    tmp_1 = (!(value == null) ? value : THROW_CCE()) === scope;
                  }
                  if (tmp_1) {
                    this_0.pv(index);
                  }
                }
                slot = slot.t2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  function persistentSetOf() {
    return Companion_getInstance_9().f1u();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.i1u_1 = element;
  }
  protoOf(SingleElementListIterator).i = function () {
    this.l1u();
    this.j1u_1 = this.j1u_1 + 1 | 0;
    return this.i1u_1;
  };
  protoOf(SingleElementListIterator).b4 = function () {
    this.m1u();
    this.j1u_1 = this.j1u_1 - 1 | 0;
    return this.i1u_1;
  };
  function AbstractListIterator(index, size) {
    this.j1u_1 = index;
    this.k1u_1 = size;
  }
  protoOf(AbstractListIterator).h = function () {
    return this.j1u_1 < this.k1u_1;
  };
  protoOf(AbstractListIterator).a4 = function () {
    return this.j1u_1 > 0;
  };
  protoOf(AbstractListIterator).c4 = function () {
    return this.j1u_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).l1u = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).m1u = function () {
    if (!this.a4())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).n = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.n1u();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.o1u();
  };
  protoOf(AbstractPersistentList).b2 = function (element) {
    var index = this.r(element);
    if (!(index === -1)) {
      return this.u3(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).c2 = function (elements) {
    return this.p1u(AbstractPersistentList$removeAll$lambda(elements));
  };
  protoOf(AbstractPersistentList).o = function (element) {
    return !(this.r(element) === -1);
  };
  protoOf(AbstractPersistentList).q1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.o(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).g = function () {
    return this.r1();
  };
  protoOf(AbstractPersistentList).r1 = function () {
    return this.s1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.t1u_1 = buffer;
  }
  protoOf(BufferIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.j1u_1;
    this.j1u_1 = tmp1 + 1 | 0;
    return this.t1u_1[tmp1];
  };
  protoOf(BufferIterator).b4 = function () {
    if (!this.a4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.j1u_1 = this.j1u_1 - 1 | 0;
    return this.t1u_1[this.j1u_1];
  };
  function rootSize($this) {
    return rootSize_1($this.w1u_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.w1u_1 >> 5 > 1 << $this.x1u_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.x1u_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.w1u_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.x1u_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.w1u_1 + 1 | 0, $this.x1u_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.w1u_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = fillArrayVal(Array(32), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.w1u_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.v1u_1, 32);
    if (tailSize < 32) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.v1u_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.w1u_1 + 1 | 0, $this.x1u_1);
    }
    var lastElement = $this.v1u_1[31];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.v1u_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.y1u_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.y1u_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.w1u_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.v1u_1, 32);
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.v1u_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.y1u_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.y1u_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.y1u_1;
      tailCarry.y1u_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.v1u_1;
    }
    var buffer = $this.u1u_1;
    var shift = $this.x1u_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.u1u_1 = root;
    this.v1u_1 = tail;
    this.w1u_1 = size;
    this.x1u_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1u_1 > 32)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least 33 elements, got ' + this.w1u_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.w1u_1 - rootSize_1(this.w1u_1) | 0) <= coerceAtMost(this.v1u_1.length, 32));
  }
  protoOf(PersistentVector).j = function () {
    return this.w1u_1;
  };
  protoOf(PersistentVector).e = function (element) {
    var tailSize = this.w1u_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.v1u_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.u1u_1, newTail, this.w1u_1 + 1 | 0, this.x1u_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.u1u_1, this.v1u_1, newTail_0);
  };
  protoOf(PersistentVector).q1u = function (index, element) {
    ListImplementation_instance.z1u(index, this.w1u_1);
    if (index === this.w1u_1) {
      return this.e(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.u1u_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.u1u_1, this.x1u_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.y1u_1);
  };
  protoOf(PersistentVector).u3 = function (index) {
    ListImplementation_instance.a1v(index, this.w1u_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.u1u_1, rootSize_0, this.x1u_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.u1u_1, this.x1u_1, index, new ObjectRef(this.v1u_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.x1u_1, 0);
  };
  protoOf(PersistentVector).p1u = function (predicate) {
    // Inline function 'kotlin.also' call
    var this_0 = this.n1u();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.removeAll.<anonymous>' call
    this_0.k1v(predicate);
    return this_0.o1u();
  };
  protoOf(PersistentVector).n1u = function () {
    return new PersistentVectorBuilder(this, this.u1u_1, this.v1u_1, this.x1u_1);
  };
  protoOf(PersistentVector).s1 = function (index) {
    ListImplementation_instance.z1u(index, this.w1u_1);
    var tmp = this.v1u_1;
    return new PersistentVectorIterator(this.u1u_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.w1u_1, (this.x1u_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).p = function (index) {
    ListImplementation_instance.a1v(index, this.w1u_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).n3 = function (index, element) {
    ListImplementation_instance.a1v(index, this.w1u_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.v1u_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.u1u_1, newTail, this.w1u_1, this.x1u_1);
    }
    var newRoot = setInRoot(this, this.u1u_1, this.x1u_1, index, element);
    return new PersistentVector(newRoot, this.v1u_1, this.w1u_1, this.x1u_1);
  };
  function rootSize_0($this) {
    if ($this.j1v_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.j1v_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.j1v_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.g1v_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = 32 - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex_0 = 32 - distance | 0;
    arrayCopy(buffer, destination, distance, 0, endIndex_0);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[0] = element;
    buffer[32] = $this.g1v_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[32] = $this.g1v_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.j1v_1 >> 5 > 1 << $this.f1v_1) {
      $this.h1v_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.f1v_1 + 5 | 0);
      $this.i1v_1 = newTail;
      $this.f1v_1 = $this.f1v_1 + 5 | 0;
      $this.j1v_1 = $this.j1v_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.h1v_1 = filledTail;
      $this.i1v_1 = newTail;
      $this.j1v_1 = $this.j1v_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.h1v_1 = pushTail_0($this, root, filledTail, $this.f1v_1);
      $this.i1v_1 = newTail;
      $this.j1v_1 = $this.j1v_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.j1v_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.h()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.i();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.f1v_1 ? pushBuffers($this, root, rootSize, $this.f1v_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.h()) {
      $this.f1v_1 = $this.f1v_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.f1v_1, $this.f1v_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.h()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message = 'invalid buffersIterator';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message_0 = 'negative shift';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.i();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.h();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.i1v_1);
    if (tailSize < 32) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.i1v_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.h1v_1 = root;
      $this.i1v_1 = mutableTail;
      $this.j1v_1 = $this.j1v_1 + 1 | 0;
    } else {
      var lastElement = $this.i1v_1[31];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.i1v_1;
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.y1u_1 = root[31];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, destination, destinationOffset, bufferIndex, 31);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.y1u_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if ($this.h1v_1 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.insertIntoRoot.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> 5;
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if ($this.h1v_1 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.shiftLeafBuffers.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> 5;
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.c4() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.b4();
      // Inline function 'kotlin.collections.copyInto' call
      var destination = buffer;
      var startIndex = 32 - rightShift | 0;
      arrayCopy(currentBuffer, destination, 0, startIndex, 32);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.b4();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.splitToBuffers.<anonymous>' call
      var message = 'requires at least one nullBuffer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      // Inline function 'kotlin.collections.copyInto' call
      var destination = newNextBuffer;
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, destination, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - 32 | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      // Inline function 'kotlin.collections.copyInto' call
      var destination_0 = newNextBuffer;
      var destinationOffset_0 = endBufferEndIndex + 1 | 0;
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, destination_0, destinationOffset_0, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.g();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.i1v_1;
    }
    var buffer = ensureNotNull($this.h1v_1);
    var shift = $this.f1v_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.j1v_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.i1v_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.i1v_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.i1v_1;
      var destination = makeMutable($this, $this.i1v_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.h1v_1 = root;
      $this.i1v_1 = mutableTail;
      $this.j1v_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.f1v_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, destination, bufferIndex, startIndex, 32);
      var mutableRoot = destination;
      mutableRoot[31] = tailCarry.y1u_1;
      tailCarry.y1u_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.h1v_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.i1v_1 = tmp_0;
      $this.j1v_1 = rootSize;
      $this.f1v_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.y1u_1;
    tmp_1.i1v_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.j1v_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.h1v_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.f1v_1 = shift - 5 | 0;
    } else {
      $this.h1v_1 = newRoot;
      $this.f1v_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.y1u_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function removeAll($this, predicate) {
    var tailSize = tailSize_0($this);
    var bufferRef = new ObjectRef(null);
    if ($this.h1v_1 == null) {
      return !(removeAllFromTail($this, predicate, tailSize, bufferRef) === tailSize);
    }
    var leafIterator = leafBufferIterator($this, 0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.h()) {
      bufferSize = removeAll_0($this, predicate, leafIterator.i(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.h());
      var newTailSize = removeAllFromTail($this, predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        pullLastBufferFromRoot_0($this, $this.h1v_1, $this.j1v_1, $this.f1v_1);
      }
      return !(newTailSize === tailSize);
    }
    var unaffectedElementsCount = leafIterator.c4() << 5;
    // Inline function 'kotlin.collections.mutableListOf' call
    var buffers = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recyclableBuffers = ArrayList_init_$Create$();
    while (leafIterator.h()) {
      var leaf = leafIterator.i();
      bufferSize = recyclableRemoveAll($this, predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = recyclableRemoveAll($this, predicate, $this.i1v_1, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var tmp = bufferRef.y1u_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.q() ? ensureNotNull($this.h1v_1) : pushBuffers($this, $this.h1v_1, unaffectedElementsCount, $this.f1v_1, buffers.g());
    var newRootSize = unaffectedElementsCount + (buffers.j() << 5) | 0;
    $this.h1v_1 = retainFirst($this, newRoot, newRootSize);
    $this.i1v_1 = newTail;
    $this.j1v_1 = newRootSize + newTailSize_0 | 0;
    return true;
  }
  function retainFirst($this, root, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((size & 31) === 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.retainFirst.<anonymous>' call
      var message = 'invalid size';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (size === 0) {
      $this.f1v_1 = 0;
      return null;
    }
    var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> $this.f1v_1 === 0) {
      $this.f1v_1 = $this.f1v_1 - 5 | 0;
      var tmp = newRoot[0];
      newRoot = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    }
    return nullifyAfter($this, newRoot, lastIndex, $this.f1v_1);
  }
  function nullifyAfter($this, root, index, shift) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.nullifyAfter.<anonymous>' call
      var message = 'shift should be positive';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (shift === 0) {
      return root;
    }
    var lastIndex = indexSegment(index, shift);
    var tmp = root[lastIndex];
    var newChild = nullifyAfter($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && !(newRoot[lastIndex + 1 | 0] == null)) {
      if (isMutable($this, newRoot)) {
        fill_0(newRoot, null, lastIndex + 1 | 0, 32);
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = newRoot;
      var destination = mutableBuffer($this);
      var endIndex = lastIndex + 1 | 0;
      arrayCopy(this_0, destination, 0, 0, endIndex);
      newRoot = destination;
    }
    if (!(newChild === newRoot[lastIndex])) {
      newRoot = makeMutable($this, newRoot);
      newRoot[lastIndex] = newChild;
    }
    return newRoot;
  }
  function removeAllFromTail($this, predicate, tailSize, bufferRef) {
    var newTailSize = removeAll_0($this, predicate, $this.i1v_1, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.y1u_1 === $this.i1v_1);
      return tailSize;
    }
    var tmp = bufferRef.y1u_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize, tailSize);
    $this.i1v_1 = newTail;
    $this.j1v_1 = $this.j1v_1 - (tailSize - newTailSize | 0) | 0;
    return newTailSize;
  }
  function removeAll_0($this, predicate, buffer, bufferSize, bufferRef) {
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = buffer[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            newBuffer = makeMutable($this, buffer);
            newBufferSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newBufferSize;
          newBufferSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.y1u_1 = newBuffer;
    return newBufferSize;
  }
  function recyclableRemoveAll($this, predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    if (isMutable($this, buffer)) {
      recyclableBuffers.e(buffer);
    }
    var tmp = bufferRef.y1u_1;
    var toBuffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = buffer[index];
        var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        if (!predicate(element)) {
          if (newToBufferSize === 32) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!recyclableBuffers.q()) {
              tmp_1 = recyclableBuffers.u3(recyclableBuffers.j() - 1 | 0);
            } else {
              tmp_1 = mutableBuffer($this);
            }
            newToBuffer = tmp_1;
            newToBufferSize = 0;
          }
          var tmp_2 = newToBuffer;
          var tmp1 = newToBufferSize;
          newToBufferSize = tmp1 + 1 | 0;
          tmp_2[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.y1u_1 = newToBuffer;
    if (!(toBuffer === bufferRef.y1u_1)) {
      buffers.e(toBuffer);
    }
    return newToBufferSize;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.t3_1 = $this.t3_1 + 1 | 0;
      }
      oldElementCarry.y1u_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = $this.h1v_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.leafBufferIterator.<anonymous>' call
        var message = 'Invalid root';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var root = tmp$ret$1;
    var leafCount = rootSize_0($this) >> 5;
    ListImplementation_instance.z1u(index, leafCount);
    if ($this.f1v_1 === 0) {
      return new SingleElementListIterator(root, index);
    }
    var trieHeight = $this.f1v_1 / 5 | 0;
    return new TrieIterator(root, index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.c1v_1 = vector;
    this.d1v_1 = vectorRoot;
    this.e1v_1 = vectorTail;
    this.f1v_1 = rootShift;
    this.g1v_1 = new MutabilityOwnership();
    this.h1v_1 = this.d1v_1;
    this.i1v_1 = this.e1v_1;
    this.j1v_1 = this.c1v_1.j();
  }
  protoOf(PersistentVectorBuilder).j = function () {
    return this.j1v_1;
  };
  protoOf(PersistentVectorBuilder).l1v = function () {
    return this.t3_1;
  };
  protoOf(PersistentVectorBuilder).o1u = function () {
    var tmp = this;
    var tmp_0;
    if (this.h1v_1 === this.d1v_1 && this.i1v_1 === this.e1v_1) {
      tmp_0 = this.c1v_1;
    } else {
      this.g1v_1 = new MutabilityOwnership();
      this.d1v_1 = this.h1v_1;
      this.e1v_1 = this.i1v_1;
      var tmp_1;
      if (this.h1v_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.i1v_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.i1v_1, this.j1v_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.h1v_1), this.i1v_1, this.j1v_1, this.f1v_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.c1v_1 = tmp_0;
    return this.c1v_1;
  };
  protoOf(PersistentVectorBuilder).e = function (element) {
    this.t3_1 = this.t3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.i1v_1);
      mutableTail[tailSize] = element;
      this.i1v_1 = mutableTail;
      this.j1v_1 = this.j1v_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.h1v_1, this.i1v_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).n = function (elements) {
    if (elements.q()) {
      return false;
    }
    this.t3_1 = this.t3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.g();
    if ((32 - tailSize | 0) >= elements.j()) {
      this.i1v_1 = copyToBuffer(this, makeMutable(this, this.i1v_1), tailSize, elementsIterator);
      this.j1v_1 = this.j1v_1 + elements.j() | 0;
    } else {
      var buffersSize = ((elements.j() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.i1v_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.h1v_1;
      var tmp_1 = rootSize_0(this);
      tmp.h1v_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.i1v_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.j1v_1 = this.j1v_1 + elements.j() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).h4 = function (index, element) {
    ListImplementation_instance.z1u(index, this.j1v_1);
    if (index === this.j1v_1) {
      this.e(element);
      return Unit_instance;
    }
    this.t3_1 = this.t3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.h1v_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.h1v_1), this.f1v_1, index, element, elementCarry);
    var tmp = elementCarry.y1u_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).k4 = function (index, elements) {
    ListImplementation_instance.z1u(index, this.j1v_1);
    if (index === this.j1v_1) {
      return this.n(elements);
    }
    if (elements.q()) {
      return false;
    }
    this.t3_1 = this.t3_1 + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (((this.j1v_1 - unaffectedElementsCount | 0) + elements.j() | 0) - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & 31;
      var endIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.i1v_1;
      var destination = makeMutable(this, this.i1v_1);
      var destinationOffset = endIndex + 1 | 0;
      var endIndex_0 = tailSize_0(this);
      arrayCopy(this_0, destination, destinationOffset, startIndex, endIndex_0);
      var newTail = destination;
      copyToBuffer(this, newTail, startIndex, elements.g());
      this.i1v_1 = newTail;
      this.j1v_1 = this.j1v_1 + elements.j() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.j1v_1 + elements.j() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.i1v_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.i1v_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.i1v_1;
      var destination_0 = mutableBuffer(this);
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(this_1, destination_0, 0, startIndex_0, tailSize_1);
      newTail_0 = destination_0;
      var rightShift_0 = 32 - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.i1v_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.h1v_1;
    tmp.h1v_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.i1v_1 = newTail_0;
    this.j1v_1 = this.j1v_1 + elements.j() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).p = function (index) {
    ListImplementation_instance.a1v(index, this.j1v_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).u3 = function (index) {
    ListImplementation_instance.a1v(index, this.j1v_1);
    this.t3_1 = this.t3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.h1v_1, rootSize, this.f1v_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.i1v_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.h1v_1), this.f1v_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.f1v_1, 0);
    var tmp_0 = elementCarry.y1u_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).c2 = function (elements) {
    return this.k1v(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  protoOf(PersistentVectorBuilder).k1v = function (predicate) {
    var anyRemoved = removeAll(this, predicate);
    if (anyRemoved) {
      this.t3_1 = this.t3_1 + 1 | 0;
    }
    return anyRemoved;
  };
  protoOf(PersistentVectorBuilder).n3 = function (index, element) {
    ListImplementation_instance.a1v(index, this.j1v_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.i1v_1);
      if (!(mutableTail === this.i1v_1)) {
        this.t3_1 = this.t3_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.i1v_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.h1v_1 = setInRoot_0(this, ensureNotNull(this.h1v_1), this.f1v_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.y1u_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g = function () {
    return this.r1();
  };
  protoOf(PersistentVectorBuilder).r1 = function () {
    return this.s1(0);
  };
  protoOf(PersistentVectorBuilder).s1 = function (index) {
    ListImplementation_instance.z1u(index, this.j1v_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.o1v_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.p1v_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).i = function () {
    this.l1u();
    if (this.p1v_1.h()) {
      this.j1u_1 = this.j1u_1 + 1 | 0;
      return this.p1v_1.i();
    }
    var tmp3 = this.j1u_1;
    this.j1u_1 = tmp3 + 1 | 0;
    return this.o1v_1[tmp3 - this.p1v_1.k1u_1 | 0];
  };
  protoOf(PersistentVectorIterator).b4 = function () {
    this.m1u();
    if (this.j1u_1 > this.p1v_1.k1u_1) {
      this.j1u_1 = this.j1u_1 - 1 | 0;
      return this.o1v_1[this.j1u_1 - this.p1v_1.k1u_1 | 0];
    }
    this.j1u_1 = this.j1u_1 - 1 | 0;
    return this.p1v_1.b4();
  };
  function reset($this) {
    $this.k1u_1 = $this.x1v_1.j1v_1;
    $this.y1v_1 = $this.x1v_1.l1v();
    $this.a1w_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.x1v_1.h1v_1;
    if (root == null) {
      $this.z1v_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.x1v_1.j1v_1);
    var trieIndex = coerceAtMost($this.j1u_1, trieSize);
    var trieHeight = ($this.x1v_1.f1v_1 / 5 | 0) + 1 | 0;
    if ($this.z1v_1 == null) {
      $this.z1v_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.z1v_1).b1w(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.y1v_1 === $this.x1v_1.l1v()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.a1w_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.j1v_1);
    this.x1v_1 = builder;
    this.y1v_1 = this.x1v_1.l1v();
    this.z1v_1 = null;
    this.a1w_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).b4 = function () {
    checkForComodification(this);
    this.m1u();
    this.a1w_1 = this.j1u_1 - 1 | 0;
    var tmp1_elvis_lhs = this.z1v_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.x1v_1.i1v_1;
      this.j1u_1 = this.j1u_1 - 1 | 0;
      var tmp_1 = tmp_0[this.j1u_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.j1u_1 > trieIterator.k1u_1) {
      var tmp_2 = this.x1v_1.i1v_1;
      this.j1u_1 = this.j1u_1 - 1 | 0;
      var tmp_3 = tmp_2[this.j1u_1 - trieIterator.k1u_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.j1u_1 = this.j1u_1 - 1 | 0;
    return trieIterator.b4();
  };
  protoOf(PersistentVectorMutableIterator).i = function () {
    checkForComodification(this);
    this.l1u();
    this.a1w_1 = this.j1u_1;
    var tmp2_elvis_lhs = this.z1v_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.x1v_1.i1v_1;
      var tmp1 = this.j1u_1;
      this.j1u_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.h()) {
      this.j1u_1 = this.j1u_1 + 1 | 0;
      return trieIterator.i();
    }
    var tmp_2 = this.x1v_1.i1v_1;
    var tmp6 = this.j1u_1;
    this.j1u_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.k1u_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).p3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.x1v_1.u3(this.a1w_1);
    if (this.a1w_1 < this.j1u_1)
      this.j1u_1 = this.a1w_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.c1w_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.d1w_1 = buffer;
    assert(this.d1w_1.length <= 32);
  }
  protoOf(SmallPersistentVector).j = function () {
    return this.d1w_1.length;
  };
  protoOf(SmallPersistentVector).e = function (element) {
    if (this.j() < 32) {
      var newBuffer = copyOf_0(this.d1w_1, this.j() + 1 | 0);
      newBuffer[this.j()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.d1w_1, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).n = function (elements) {
    if ((this.j() + elements.j() | 0) <= 32) {
      var newBuffer = copyOf_0(this.d1w_1, this.j() + elements.j() | 0);
      var index = this.j();
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.n1u();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.o1u();
  };
  protoOf(SmallPersistentVector).p1u = function (predicate) {
    var newBuffer = this.d1w_1;
    var newSize = this.j();
    var anyRemoved = false;
    var inductionVariable = 0;
    var last = this.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.d1w_1[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            newBuffer = this.d1w_1.slice();
            newSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newSize;
          newSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < last);
    var tmp2_subject = newSize;
    return tmp2_subject === this.j() ? this : tmp2_subject === 0 ? Companion_getInstance_6().c1w_1 : new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
  };
  protoOf(SmallPersistentVector).q1u = function (index, element) {
    ListImplementation_instance.z1u(index, this.j());
    if (index === this.j()) {
      return this.e(element);
    }
    if (this.j() < 32) {
      var newBuffer = bufferOfSize(this, this.j() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.d1w_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.d1w_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.j();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.d1w_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.d1w_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.j() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.d1w_1[31]);
    return new PersistentVector(root, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).u3 = function (index) {
    ListImplementation_instance.a1v(index, this.j());
    if (this.j() === 1) {
      return Companion_getInstance_6().c1w_1;
    }
    var newBuffer = copyOf_0(this.d1w_1, this.j() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.d1w_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.j();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).n1u = function () {
    return new PersistentVectorBuilder(this, null, this.d1w_1, 0);
  };
  protoOf(SmallPersistentVector).r = function (element) {
    return indexOf(this.d1w_1, element);
  };
  protoOf(SmallPersistentVector).s1 = function (index) {
    ListImplementation_instance.z1u(index, this.j());
    var tmp = this.d1w_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.j());
  };
  protoOf(SmallPersistentVector).p = function (index) {
    ListImplementation_instance.a1v(index, this.j());
    var tmp = this.d1w_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).n3 = function (index, element) {
    ListImplementation_instance.a1v(index, this.j());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.d1w_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.s1v_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.s1v_1) {
      var tmp = $this.t1v_1;
      var tmp_0 = i;
      var tmp_1 = $this.t1v_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.j1u_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.s1v_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.j1u_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.j1u_1 & 31;
    var tmp = $this.t1v_1[$this.s1v_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.s1v_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.s1v_1;
    tmp.t1v_1 = fillArrayVal(Array(size_0), null);
    this.u1v_1 = index === size;
    this.t1v_1[0] = root;
    fillPath(this, index - (this.u1v_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).b1w = function (root, index, size, height) {
    this.j1u_1 = index;
    this.k1u_1 = size;
    this.s1v_1 = height;
    if (this.t1v_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.t1v_1 = fillArrayVal(Array(height), null);
    }
    this.t1v_1[0] = root;
    this.u1v_1 = index === size;
    fillPath(this, index - (this.u1v_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.j1u_1 = this.j1u_1 + 1 | 0;
    if (this.j1u_1 === this.k1u_1) {
      this.u1v_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).b4 = function () {
    if (!this.a4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.j1u_1 = this.j1u_1 - 1 | 0;
    if (this.u1v_1) {
      this.u1v_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().c1w_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.y1u_1 = value;
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.e1w_1 = new PersistentHashMap(Companion_getInstance_8().f1w_1, 0);
  }
  protoOf(Companion_7).g1w = function () {
    var tmp = this.e1w_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.j1w_1 = node;
    this.k1w_1 = size;
  }
  protoOf(PersistentHashMap).j = function () {
    return this.k1w_1;
  };
  protoOf(PersistentHashMap).y1 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).z1 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).a2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).v1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.j1w_1.p1w(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).x1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.j1w_1.q1w(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).u4 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.j1w_1.r1w(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.s1w_1, this.j() + newNodeResult.t1w_1 | 0);
  };
  protoOf(PersistentHashMap).v4 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.j1w_1.u1w(tmp$ret$0, key, 0);
    if (this.j1w_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().g1w();
    }
    return new PersistentHashMap(newNode, this.j() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.v1w_1[pathIndex].b1x()) {
      return pathIndex;
    }
    if ($this.v1w_1[pathIndex].f1x()) {
      var node = $this.v1w_1[pathIndex].c1x();
      if (pathIndex === 6) {
        $this.v1w_1[pathIndex + 1 | 0].e1x(node.o1w_1, node.o1w_1.length);
      } else {
        $this.v1w_1[pathIndex + 1 | 0].e1x(node.o1w_1, imul(2, node.d1x()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.v1w_1[$this.w1w_1].b1x()) {
      return Unit_instance;
    }
    var inductionVariable = $this.w1w_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.v1w_1[i].f1x()) {
          $this.v1w_1[i].g1x();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.w1w_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.v1w_1[i - 1 | 0].g1x();
        }
        $this.v1w_1[i].e1x(Companion_getInstance_8().f1w_1.o1w_1, 0);
      }
       while (0 <= inductionVariable);
    $this.x1w_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.v1w_1 = path;
    this.w1w_1 = 0;
    this.x1w_1 = true;
    this.v1w_1[0].e1x(node.o1w_1, imul(2, node.d1x()));
    this.w1w_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).h = function () {
    return this.x1w_1;
  };
  protoOf(PersistentHashMapBaseIterator).i = function () {
    checkHasNext(this);
    var result = this.v1w_1[this.w1w_1].i();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.y1w_1 = Companion_getInstance_8().f1w_1.o1w_1;
    this.z1w_1 = 0;
    this.a1x_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).h1x = function (buffer, dataSize, index) {
    this.y1w_1 = buffer;
    this.z1w_1 = dataSize;
    this.a1x_1 = index;
  };
  protoOf(TrieNodeBaseIterator).e1x = function (buffer, dataSize) {
    this.h1x(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).b1x = function () {
    return this.a1x_1 < this.z1w_1;
  };
  protoOf(TrieNodeBaseIterator).f1x = function () {
    assert(this.a1x_1 >= this.z1w_1);
    return this.a1x_1 < this.y1w_1.length;
  };
  protoOf(TrieNodeBaseIterator).c1x = function () {
    assert(this.f1x());
    var tmp = this.y1w_1[this.a1x_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).g1x = function () {
    assert(this.f1x());
    this.a1x_1 = this.a1x_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).h = function () {
    return this.b1x();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).i = function () {
    assert(this.b1x());
    this.a1x_1 = this.a1x_1 + 2 | 0;
    var tmp = this.y1w_1[this.a1x_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).i = function () {
    assert(this.b1x());
    this.a1x_1 = this.a1x_1 + 2 | 0;
    var tmp = this.y1w_1[this.a1x_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).i = function () {
    assert(this.b1x());
    this.a1x_1 = this.a1x_1 + 2 | 0;
    var tmp = this.y1w_1[this.a1x_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.y1w_1[this.a1x_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.r1x_1 = key;
    this.s1x_1 = value;
  }
  protoOf(MapEntry).t1 = function () {
    return this.r1x_1;
  };
  protoOf(MapEntry).u1 = function () {
    return this.s1x_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.u1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.t1(), this.t1()) && equals(tmp0_safe_receiver.u1(), this.u1()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.t1()) + '=' + toString_0(this.u1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.t1x_1 = map;
  }
  protoOf(PersistentHashMapKeys).j = function () {
    return this.t1x_1.j();
  };
  protoOf(PersistentHashMapKeys).k5 = function (element) {
    return this.t1x_1.v1(element);
  };
  protoOf(PersistentHashMapKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.k5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).g = function () {
    return new PersistentHashMapKeysIterator(this.t1x_1.j1w_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.u1x_1 = map;
  }
  protoOf(PersistentHashMapValues).j = function () {
    return this.u1x_1.j();
  };
  protoOf(PersistentHashMapValues).r5 = function (element) {
    return this.u1x_1.w1(element);
  };
  protoOf(PersistentHashMapValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).g = function () {
    return new PersistentHashMapValuesIterator(this.u1x_1.j1w_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.v1x_1 = map;
  }
  protoOf(PersistentHashMapEntries).j = function () {
    return this.v1x_1.j();
  };
  protoOf(PersistentHashMapEntries).w1x = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.v1x_1.x1(element.t1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.u1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.u1() == null && this.v1x_1.v1(element.t1()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.w1x((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).g = function () {
    return new PersistentHashMapEntriesIterator(this.v1x_1.j1w_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.s1w_1 = node;
    this.t1w_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.m1w_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.o1w_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.o1w_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.x1x(positionMask);
    var newBuffer = insertEntryAtIndex($this.o1w_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.l1w_1 | positionMask, $this.m1w_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.o1w_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.l1w_1, $this.m1w_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.o1w_1;
    if (newNodeBuffer.length === 2 && newNode.m1w_1 === 0) {
      if ($this.o1w_1.length === 1) {
        newNode.l1w_1 = $this.m1w_1;
        return newNode;
      }
      var keyIndex = $this.x1x(positionMask);
      var newBuffer = replaceNodeWithEntry($this.o1w_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.l1w_1 ^ positionMask, $this.m1w_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.o1w_1, $this.o1w_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.l1w_1, $this.m1w_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.o1w_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.o1w_1, nodeIndex);
    return TrieNode_init_$Create$($this.l1w_1, $this.m1w_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.y1x(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.o1w_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.l1w_1 ^ positionMask, $this.m1w_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.o1w_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.o1w_1, keyIndex);
    return TrieNode_init_$Create$($this.l1w_1 ^ positionMask, $this.m1w_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.o1w_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.o1w_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.o1w_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.o1w_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.o1w_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.o1w_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.o1w_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.o1w_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.o1w_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.f1w_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.l1w_1 = dataMap;
    this.m1w_1 = nodeMap;
    this.n1w_1 = ownedBy;
    this.o1w_1 = buffer;
  }
  protoOf(TrieNode).d1x = function () {
    return countOneBits(this.l1w_1);
  };
  protoOf(TrieNode).z1x = function (positionMask) {
    return !((this.l1w_1 & positionMask) === 0);
  };
  protoOf(TrieNode).x1x = function (positionMask) {
    return imul(2, countOneBits(this.l1w_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).y1x = function (positionMask) {
    return (this.o1w_1.length - 1 | 0) - countOneBits(this.m1w_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).a1y = function (nodeIndex) {
    var tmp = this.o1w_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).p1w = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.z1x(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.x1x(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.a1y(this.y1x(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.p1w(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).q1w = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.z1x(keyPositionMask)) {
      var keyIndex = this.x1x(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.a1y(this.y1x(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.q1w(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).r1w = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.z1x(keyPositionMask)) {
      var keyIndex = this.x1x(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.y1x(keyPositionMask);
      var targetNode = this.a1y(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.r1w(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.s1w_1;
      tmp_2.s1w_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).u1w = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.z1x(keyPositionMask)) {
      var keyIndex = this.x1x(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.y1x(keyPositionMask);
      var targetNode = this.a1y(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.u1w(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.e1u_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_7().g1w());
  }
  protoOf(Companion_9).f1u = function () {
    return this.e1u_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.b1y_1 = firstElement;
    this.c1y_1 = lastElement;
    this.d1y_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).j = function () {
    return this.d1y_1.j();
  };
  protoOf(PersistentOrderedSet).o = function (element) {
    return this.d1y_1.v1(element);
  };
  protoOf(PersistentOrderedSet).e = function (element) {
    if (this.d1y_1.v1(element)) {
      return this;
    }
    if (this.q()) {
      var newMap = this.d1y_1.u4(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.c1y_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.d1y_1.x1(lastElement));
    var newMap_0 = this.d1y_1.u4(lastElement, lastLinks.g1y(element)).u4(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.b1y_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).b2 = function (element) {
    var tmp0_elvis_lhs = this.d1y_1.x1(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.d1y_1.v4(element);
    if (links.h1y()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.e1y_1;
      var tmp$ret$0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).x1(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.e1y_1;
      newMap = tmp_0.u4((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.g1y(links.f1y_1));
    }
    if (links.j1y()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.f1y_1;
      var tmp$ret$1 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).x1(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.f1y_1;
      newMap = tmp_2.u4((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.i1y(links.e1y_1));
    }
    var newFirstElement = !links.h1y() ? links.f1y_1 : this.b1y_1;
    var newLastElement = !links.j1y() ? links.e1y_1 : this.c1y_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).g = function () {
    return new PersistentOrderedSetIterator(this.b1y_1, this.d1y_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.e1y_1 = previous;
    this.f1y_1 = next;
  }
  protoOf(Links).g1y = function (newNext) {
    return new Links(this.e1y_1, newNext);
  };
  protoOf(Links).i1y = function (newPrevious) {
    return new Links(newPrevious, this.f1y_1);
  };
  protoOf(Links).j1y = function () {
    return !(this.f1y_1 === EndOfChain_instance);
  };
  protoOf(Links).h1y = function () {
    return !(this.e1y_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.k1y_1 = nextElement;
    this.l1y_1 = map;
    this.m1y_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).h = function () {
    return this.m1y_1 < this.l1y_1.j();
  };
  protoOf(PersistentOrderedSetIterator).i = function () {
    checkHasNext_0(this);
    var tmp = this.k1y_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.m1y_1 = this.m1y_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = this.l1y_1.x1(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.k1y_1 = tmp_1.f1y_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).a1v = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).z1u = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.a1d() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.ox_1, other.ox_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.l18(tmp$ret$0);
    var slot = composer.p19();
    var tmp;
    if (slot === Companion_getInstance().f13_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.v19(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.s1y(block);
      tmp = slot;
    }
    var result = tmp;
    composer.m18();
    return result;
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.e1r_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.e1r_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().f1w_1;
    tmp.t1y_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).a2 = function () {
    return protoOf(PersistentHashMap).a2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).w19 = function (key, value) {
    var tmp0_elvis_lhs = this.j1w_1.r1w(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.s1w_1, this.j() + newNodeResult.t1w_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().t1y_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_2($this, key) {
    var high = $this.h1n_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.i1n_1[0].equals(key) ? 0 : $this.i1n_1[0].x(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.i1n_1[mid];
      var comparison = midVal.m2(key);
      if (comparison.x(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.x(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.h1n_1 = size;
    this.i1n_1 = keys;
    this.j1n_1 = values;
  }
  protoOf(ThreadMap).k1n = function (key) {
    var index = find_2(this, key);
    return index >= 0 ? this.j1n_1[index] : null;
  };
  protoOf(ThreadMap).l1n = function (key, value) {
    var index = find_2(this, key);
    if (index < 0)
      return false;
    this.j1n_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).m1n = function (key, value) {
    var size = this.h1n_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.j1n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.i1n_1[source];
        var oldValue = this.j1n_1[source];
        if (oldKey.x(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.i1n_1[source];
          var oldValue_0 = this.j1n_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.j());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.e(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.p(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.x7(element.e1_1);
        } else {
          _this__u8e3s4.f(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.y1y_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).gl = function () {
    return this.y1y_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.z1y_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).gl = function () {
    return this.z1y_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
  }
  protoOf(Companion_11).dw = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).f1i = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1z(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).g1k = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).b1z = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).d1h = function () {
    return currentSnapshot().c1z();
  };
  protoOf(Companion_11).b1h = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().sm().d1z();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z19()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.r16_1 = invalid;
    this.s16_1 = id;
    this.t16_1 = false;
    this.u16_1 = !(id === 0) ? trackPinning(id, this.e1z()) : -1;
  }
  protoOf(Snapshot).f1z = function (_set____db54di) {
    this.r16_1 = _set____db54di;
  };
  protoOf(Snapshot).e1z = function () {
    return this.r16_1;
  };
  protoOf(Snapshot).g1z = function (_set____db54di) {
    this.s16_1 = _set____db54di;
  };
  protoOf(Snapshot).v16 = function () {
    return this.s16_1;
  };
  protoOf(Snapshot).h1z = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).i1z = function () {
    return 0;
  };
  protoOf(Snapshot).gl = function () {
    this.t16_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.k1z();
  };
  protoOf(Snapshot).g1i = function () {
    var previous = get_threadSnapshot().sm();
    get_threadSnapshot().l1f(this);
    return previous;
  };
  protoOf(Snapshot).h1i = function (snapshot) {
    get_threadSnapshot().l1f(snapshot);
  };
  protoOf(Snapshot).o1z = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.p1z();
    this.q1z();
  };
  protoOf(Snapshot).p1z = function () {
    set_openSnapshots(get_openSnapshots().v1z(this.v16()));
  };
  protoOf(Snapshot).q1z = function () {
    this.k1z();
  };
  protoOf(Snapshot).w1z = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.t16_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).k1z = function () {
    if (this.u16_1 >= 0) {
      releasePinningLocked(this.u16_1);
      this.u16_1 = -1;
    }
  };
  protoOf(Snapshot).x1z = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.u16_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.u16_1 = -1;
    return this_0;
  };
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.u1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.u1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.u16_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.d1z();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.y1z(null);
      var id = $this.v16();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.o16_1;
      var inductionVariable = 0;
      var last = modified.n16_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).e1n();
          while (!(current == null)) {
            if (current.z1z_1 === id || contains($this.r1i_1, current.z1z_1)) {
              current.z1z_1 = 0;
            }
            current = current.a20_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.o1z();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.s1i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.s1i_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.b20_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.m1i_1 = readObserver;
    this.n1i_1 = writeObserver;
    this.o1i_1 = 0;
    this.p1i_1 = null;
    this.q1i_1 = null;
    this.r1i_1 = Companion_getInstance_13().c20_1;
    this.s1i_1 = Companion_getInstance_12().b20_1;
    this.t1i_1 = 1;
    this.u1i_1 = false;
  }
  protoOf(MutableSnapshot).l1z = function () {
    return this.m1i_1;
  };
  protoOf(MutableSnapshot).m1z = function () {
    return this.n1i_1;
  };
  protoOf(MutableSnapshot).a1z = function (readObserver, writeObserver) {
    this.w1z();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.d20(this.v16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().e20(newId));
    var currentInvalid = this.e1z();
    this.f1z(currentInvalid.e20(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.v16() + 1 | 0, newId), mergedReadObserver(readObserver, this.l1z()), mergedWriteObserver(writeObserver, this.m1z()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.u1i_1 && !this.t16_1) {
      var previousId = this.v16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.g1z(tmp0_0);
      set_openSnapshots(get_openSnapshots().e20(this.v16()));
      this.f1z(addRange(this.e1z(), previousId + 1 | 0, this.v16()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).v1i = function () {
    var modified = this.d1z();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().sm(), this, get_openSnapshots().v1z(get_currentGlobalSnapshot().sm().v16())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.n16_1 === 0) {
      this.p1z();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().sm();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.d1z();
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null || previousModified.q())) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().sm();
      var result = this.f20(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().v1z(previousGlobalSnapshot_0.v16()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.p1z();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.d1z();
      this.y1z(null);
      previousGlobalSnapshot_0.y1z(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.u1i_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null || this_0.q())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null || modified.q())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.q1z();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.o16_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.n16_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp = values[i];
          var it = !(tmp == null) ? tmp : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.o16_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.n16_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_0 = values_0[i_0];
          var it_0 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.q1i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.j() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.p(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.q1i_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).j1z = function () {
    return false;
  };
  protoOf(MutableSnapshot).gl = function () {
    if (!this.t16_1) {
      protoOf(Snapshot).gl.call(this);
      this.g20(this);
    }
  };
  protoOf(MutableSnapshot).h20 = function (snapshot) {
    this.t1i_1 = this.t1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).g20 = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t1i_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var message = 'no pending nested snapshots';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t1i_1 = this.t1i_1 - 1 | 0;
    if (this.t1i_1 === 0) {
      if (!this.u1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).c1z = function () {
    if (this.u1i_1 || this.t16_1)
      return Unit_instance;
    this.i20();
  };
  protoOf(MutableSnapshot).p1z = function () {
    set_openSnapshots(get_openSnapshots().v1z(this.v16()).j20(this.r1i_1));
  };
  protoOf(MutableSnapshot).q1z = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).q1z.call(this);
  };
  protoOf(MutableSnapshot).f20 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.e1z().e20(this.v16()).k20(this.r1i_1);
    var modified = ensureNotNull(this.d1z());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.o16_1;
    var inductionVariable = 0;
    var last = modified.n16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.e1n();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.v16(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.v16(), this.e1z());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.x1(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.g1n(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.e(to(state, current.a1n()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.e(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.e(!equals(merged, previous) ? to(state, merged) : to(state, previous.a1n()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i20();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.he();
          var stateRecord = item.ie();
          stateRecord.z1z_1 = this.v16();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.a20_1 = state_0.e1n();
          state_0.f1n(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.c1u(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.q1i_1;
      this.q1i_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).i20 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.d20(this.v16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.u1i_1 && !this.t16_1) {
      var previousId = this.v16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.g1z(tmp0);
      set_openSnapshots(get_openSnapshots().e20(this.v16()));
      this.f1z(addRange(this.e1z(), previousId + 1 | 0, this.v16()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).d20 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.r1i_1 = this.r1i_1.e20(id);
  };
  protoOf(MutableSnapshot).l20 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.s1i_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.s1i_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).m20 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.s1i_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.s1i_1 = tmp_0;
  };
  protoOf(MutableSnapshot).n20 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.r1i_1 = this.r1i_1.k20(snapshots);
  };
  protoOf(MutableSnapshot).n1z = function (state) {
    var tmp0_elvis_lhs = this.d1z();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.y1z(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.k1b(state);
  };
  protoOf(MutableSnapshot).h1z = function (_set____db54di) {
    this.o1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).i1z = function () {
    return this.o1i_1;
  };
  protoOf(MutableSnapshot).y1z = function (_set____db54di) {
    this.p1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).d1z = function () {
    return this.p1i_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.o20_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$5 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$5);
  }
  protoOf(GlobalSnapshot).a1z = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).c1z = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).c21 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).g20 = function (snapshot) {
    return this.c21(snapshot);
  };
  protoOf(GlobalSnapshot).d21 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).h20 = function (snapshot) {
    return this.d21(snapshot);
  };
  protoOf(GlobalSnapshot).v1i = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).gl = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.k1z();
  };
  function StateRecord() {
    this.z1z_1 = currentSnapshot().v16();
    this.a20_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.e21(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().k21(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().l21(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().sm();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().sm() : tmp0_elvis_lhs;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().sm();
    modified = previousGlobalSnapshot.d1z();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().k21(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().k21(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.o16_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.n16_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.b22_1) {
      $this.b22_1 = true;
      $this.a22_1.g20($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.a22_1 = parent;
    this.b22_1 = false;
    this.a22_1.h20(this);
  }
  protoOf(NestedMutableSnapshot).gl = function () {
    if (!this.t16_1) {
      protoOf(MutableSnapshot).gl.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).v1i = function () {
    if (this.a22_1.u1i_1 || this.a22_1.t16_1)
      return new Failure(this);
    var modified = this.d1z();
    var id = this.v16();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.a22_1, this, this.a22_1.e1z()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.n16_1 === 0) {
      this.o1z();
    } else {
      var result = this.f20(this.a22_1.v16(), optimisticMerges_0, this.a22_1.e1z());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.a22_1.d1z();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.v1h(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.a22_1.y1z(modified);
        this.y1z(null);
      }
    }
    if (this.a22_1.v16() < id) {
      this.a22_1.i20();
    }
    this.a22_1.f1z(this.a22_1.e1z().v1z(id).j20(this.r1i_1));
    this.a22_1.d20(id);
    this.a22_1.l20(this.x1z());
    this.a22_1.n20(this.r1i_1);
    this.a22_1.m20(this.s1i_1);
    this.u1i_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.e20(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !equals(readObserver, parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !equals(writeObserver, parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.d1z();
    var id = currentSnapshot.v16();
    if (modified == null)
      return null;
    var start = applyingSnapshot.e1z().e20(applyingSnapshot.v16()).k20(applyingSnapshot.r1i_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.o16_1;
    var inductionVariable = 0;
    var last = modified.n16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.e1n();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.v16(), applyingSnapshot.e1z());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.g1n(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.u4(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.p(snapshot.v16())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.v16();
      var tmp_0 = snapshot.t16_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1i_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().c22(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().v1z(previousGlobalSnapshot.v16()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().v1z(previousGlobalSnapshot.v16()));
    get_currentGlobalSnapshot().c1d(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.gl();
    set_openSnapshots(get_openSnapshots().e20(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.d22_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.f22_1[i];
        var value = entry == null ? null : entry.sm();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.f22_1[currentUsed] = entry;
            this_0.e22_1[currentUsed] = this_0.e22_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.f22_1[i_0] = null;
        this_0.e22_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.d22_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().k1b(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.z1z_1 < current.z1z_1 ? current : candidate;
      }
      current = current.a20_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.e1n();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().c22(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.z1z_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.z1z_1 < validRecord.z1z_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.e1n();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.z1z_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.z1z_1 < current_0.z1z_1)
                    youngest = current_0;
                  current_0 = current_0.a20_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.z1z_1 = 0;
            recordToOverwrite.z1m(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.a20_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.z1z_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.p(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.dw();
    var tmp0_safe_receiver = snapshot.l1z();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.v16(), snapshot.e1z());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.dw();
      var tmp_0 = state.e1n();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.v16(), syncSnapshot.e1z());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.dw();
    var tmp0_elvis_lhs = readable(r, snapshot.v16(), snapshot.e1z());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.dw();
      tmp = readable(r, syncSnapshot.v16(), syncSnapshot.e1z());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.h1z(snapshot.i1z() + 1 | 0);
    var tmp1_safe_receiver = snapshot.m1z();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.j1z()) {
      snapshot.n1z(state);
    }
    var id = snapshot.v16();
    if (candidate.z1z_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.z1z_1 = id;
    snapshot.n1z(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.z1z_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.a1n();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.z1z_1 = 2147483647;
      this_0.a20_1 = state.e1n();
      state.f1n(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.e1n();
    var validRecord = null;
    var reuseLimit = get_pinningTable().c22(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().c20_1;
    while (!(current == null)) {
      var currentId = current.z1z_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.z1z_1 < validRecord.z1z_1 ? current : validRecord;
        }
      }
      current = current.a20_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.j1z()) {
      snapshot.n1z(state);
    }
    var id = snapshot.v16();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.e1z());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.z1z_1 === snapshot.v16())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.n1z(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.z1m(_this__u8e3s4);
    newData.z1z_1 = snapshot.v16();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().e20(result.v16()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_13().c20_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_13().c20_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().e20(this_0.v16()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().sm();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.g21_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.g21_1;
    var half = $this.f21_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.f21_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.g21_1;
    var index = $this.h21_1;
    var handles = $this.i21_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.g21_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.g21_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.h21_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.g21_1 = newValues;
    $this.h21_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.i21_1.length;
    if ($this.j21_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.i21_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.i21_1 = newHandles;
    }
    var handle = $this.j21_1;
    $this.j21_1 = $this.i21_1[$this.j21_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.i21_1[handle] = $this.j21_1;
    $this.j21_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.f21_1 = 0;
    this.g21_1 = new Int32Array(16);
    this.h21_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.i21_1 = tmp_1;
    this.j21_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).c22 = function (default_0) {
    return this.f21_1 > 0 ? this.g21_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).k21 = function (value) {
    ensure(this, this.f21_1 + 1 | 0);
    var tmp1 = this.f21_1;
    this.f21_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.g21_1[i] = value;
    this.h21_1[i] = handle;
    this.i21_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).l21 = function (handle) {
    var i = this.i21_1[handle];
    swap(this, i, this.f21_1 - 1 | 0);
    this.f21_1 = this.f21_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.c20_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.p22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).y22 = function ($this$sequence, $completion) {
    var tmp = this.z22($this$sequence, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  protoOf(SnapshotIdSet$iterator$slambda).y9 = function (p1, $completion) {
    return this.y22(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 15;
            this.r22_1 = this.p22_1.u1z_1;
            if (!(this.r22_1 == null)) {
              this.s22_1 = intArrayIterator(this.r22_1);
              this.r8_1 = 1;
              continue $sm;
            } else {
              this.r8_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.s22_1.h()) {
              this.r8_1 = 3;
              continue $sm;
            }

            this.t22_1 = this.s22_1.i();
            this.r8_1 = 2;
            suspendResult = this.q22_1.je(this.t22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r8_1 = 1;
            continue $sm;
          case 3:
            this.r8_1 = 4;
            continue $sm;
          case 4:
            if (!this.p22_1.s1z_1.equals(new Long(0, 0))) {
              this.u22_1 = until(0, 64).g();
              this.r8_1 = 5;
              continue $sm;
            } else {
              this.r8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.u22_1.h()) {
              this.r8_1 = 8;
              continue $sm;
            }

            this.v22_1 = this.u22_1.i();
            if (!this.p22_1.s1z_1.v2((new Long(1, 0)).s2(this.v22_1)).equals(new Long(0, 0))) {
              this.r8_1 = 6;
              suspendResult = this.q22_1.je(this.v22_1 + this.p22_1.t1z_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r8_1 = 7;
              continue $sm;
            }

          case 6:
            this.r8_1 = 7;
            continue $sm;
          case 7:
            this.r8_1 = 5;
            continue $sm;
          case 8:
            this.r8_1 = 9;
            continue $sm;
          case 9:
            if (!this.p22_1.r1z_1.equals(new Long(0, 0))) {
              this.w22_1 = until(0, 64).g();
              this.r8_1 = 10;
              continue $sm;
            } else {
              this.r8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.w22_1.h()) {
              this.r8_1 = 13;
              continue $sm;
            }

            this.x22_1 = this.w22_1.i();
            if (!this.p22_1.r1z_1.v2((new Long(1, 0)).s2(this.x22_1)).equals(new Long(0, 0))) {
              this.r8_1 = 11;
              suspendResult = this.q22_1.je((this.x22_1 + 64 | 0) + this.p22_1.t1z_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r8_1 = 12;
              continue $sm;
            }

          case 11:
            this.r8_1 = 12;
            continue $sm;
          case 12:
            this.r8_1 = 10;
            continue $sm;
          case 13:
            this.r8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 15) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).z22 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.p22_1, completion);
    i.q22_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.y22($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.r1z_1 = upperSet;
    this.s1z_1 = lowerSet;
    this.t1z_1 = lowerBound;
    this.u1z_1 = belowBound;
  }
  protoOf(SnapshotIdSet).p = function (bit) {
    var offset = bit - this.t1z_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).s2(offset).v2(this.s1z_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).s2(offset - 64 | 0).v2(this.r1z_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.u1z_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).e20 = function (bit) {
    var offset = bit - this.t1z_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).s2(offset);
      if (this.s1z_1.v2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.r1z_1, this.s1z_1.w2(mask), this.t1z_1, this.u1z_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).s2(offset - 64 | 0);
      if (this.r1z_1.v2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.r1z_1.w2(mask_0), this.s1z_1, this.t1z_1, this.u1z_1);
      }
    } else if (offset >= 128) {
      if (!this.p(bit)) {
        var newUpperSet = this.r1z_1;
        var newLowerSet = this.s1z_1;
        var newLowerBound = this.t1z_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.collections.mutableListOf' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.u1z_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.e(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.v2((new Long(1, 0)).s2(index)).equals(new Long(0, 0))) {
                  newBelowBound.e(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.u1z_1 : tmp1_elvis_lhs)).e20(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.u1z_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.r1z_1, this.s1z_1, this.t1z_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertLocation + 1 | 0;
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, destinationOffset, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.r1z_1, this.s1z_1, this.t1z_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).v1z = function (bit) {
    var offset = bit - this.t1z_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).s2(offset);
      if (!this.s1z_1.v2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.r1z_1, this.s1z_1.v2(mask.r2()), this.t1z_1, this.u1z_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).s2(offset - 64 | 0);
      if (!this.r1z_1.v2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.r1z_1.v2(mask_0.r2()), this.s1z_1, this.t1z_1, this.u1z_1);
      }
    } else if (offset < 0) {
      var array = this.u1z_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.r1z_1, this.s1z_1, this.t1z_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            // Inline function 'kotlin.collections.copyInto' call
            var startIndex = location + 1 | 0;
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, startIndex, endIndex);
          }
          return new SnapshotIdSet(this.r1z_1, this.s1z_1, this.t1z_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).j20 = function (bits) {
    if (bits === Companion_getInstance_13().c20_1)
      return this;
    if (this === Companion_getInstance_13().c20_1)
      return Companion_getInstance_13().c20_1;
    var tmp;
    if (bits.t1z_1 === this.t1z_1 && bits.u1z_1 === this.u1z_1) {
      tmp = new SnapshotIdSet(this.r1z_1.v2(bits.r1z_1.r2()), this.s1z_1.v2(bits.s1z_1.r2()), this.t1z_1, this.u1z_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.v1z(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).k20 = function (bits) {
    if (bits === Companion_getInstance_13().c20_1)
      return this;
    if (this === Companion_getInstance_13().c20_1)
      return bits;
    var tmp;
    if (bits.t1z_1 === this.t1z_1 && bits.u1z_1 === this.u1z_1) {
      tmp = new SnapshotIdSet(this.r1z_1.w2(bits.r1z_1), this.s1z_1.w2(bits.s1z_1), this.t1z_1, this.u1z_1);
    } else {
      var tmp_0;
      if (this.u1z_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.e20(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.e20(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).g = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).g();
  };
  protoOf(SnapshotIdSet).e21 = function (default_0) {
    var belowBound = this.u1z_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.s1z_1.equals(new Long(0, 0)))
      return this.t1z_1 + lowestBitOf(this.s1z_1) | 0;
    if (!this.r1z_1.equals(new Long(0, 0)))
      return (this.t1z_1 + 64 | 0) + lowestBitOf(this.r1z_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.e(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.v2(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.t2(32);
    }
    if (b.v2(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.t2(16);
    }
    if (b.v2(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.t2(8);
    }
    if (b.v2(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.t2(4);
    }
    if (!b.v2(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.v2(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.v2(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.v2(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.c23_1 = list;
    this.d23_1 = 0;
    this.e23_1 = 0;
  }
  protoOf(StateListStateRecord).z1m = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    var tmp = this;
    tmp.c23_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).c23_1;
    this.d23_1 = value.d23_1;
    this.e23_1 = value.e23_1;
  };
  protoOf(StateListStateRecord).a1n = function () {
    return new StateListStateRecord(this.c23_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = $this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      var builder = ensureNotNull(oldList).n1u();
      result = block(builder);
      var newList = builder.o1u();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = $this.f23_1;
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.dw();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$8381d7_hayxw0();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d23_1 === currentModification) {
          $this$writable.c23_1 = newList;
          $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.k4($index, $elements);
    };
  }
  function SnapshotStateList() {
    this.f23_1 = new StateListStateRecord(persistentListOf());
  }
  protoOf(SnapshotStateList).e1n = function () {
    return this.f23_1;
  };
  protoOf(SnapshotStateList).f1n = function (value) {
    value.a20_1 = this.f23_1;
    var tmp = this;
    tmp.f23_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).g23 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.f23_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).e23_1;
  };
  protoOf(SnapshotStateList).h23 = function () {
    var tmp = this.f23_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).j = function () {
    return this.h23().c23_1.j();
  };
  protoOf(SnapshotStateList).zd = function (element) {
    return this.h23().c23_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.zd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).ae = function (elements) {
    return this.h23().c23_1.q1(elements);
  };
  protoOf(SnapshotStateList).q1 = function (elements) {
    return this.ae(elements);
  };
  protoOf(SnapshotStateList).p = function (index) {
    return this.h23().c23_1.p(index);
  };
  protoOf(SnapshotStateList).i23 = function (element) {
    return this.h23().c23_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.i23((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q = function () {
    return this.h23().c23_1.q();
  };
  protoOf(SnapshotStateList).g = function () {
    return this.r1();
  };
  protoOf(SnapshotStateList).r1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).d17 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).e(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).e = function (element) {
    return this.d17((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).j23 = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).q1u(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).h4 = function (index, element) {
    return this.j23(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k23 = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).k4 = function (index, elements) {
    return this.k23(index, elements);
  };
  protoOf(SnapshotStateList).l23 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).n(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.l23(elements);
  };
  protoOf(SnapshotStateList).d2 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.f23_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.dw();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.c23_1 = persistentListOf();
    $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
    $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).m23 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).b2(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.m23((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).n23 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAll.<anonymous>' call
      var newList = ensureNotNull(oldList).c2(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).c2 = function (elements) {
    return this.n23(elements);
  };
  protoOf(SnapshotStateList).u3 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).u3(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (true) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).o23 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f23_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.d23_1;
      oldList = current_0.c23_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).n3(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f23_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.d23_1 === currentModification) {
        $this$writable.c23_1 = newList;
        if (false) {
          $this$writable.e23_1 = $this$writable.e23_1 + 1 | 0;
        }
        $this$writable.d23_1 = $this$writable.d23_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).n3 = function (index, element) {
    return this.o23(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.p23_1.g23() === $this.s23_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.p23_1 = list;
    this.q23_1 = offset - 1 | 0;
    this.r23_1 = -1;
    this.s23_1 = this.p23_1.g23();
  }
  protoOf(StateListIterator).b4 = function () {
    validateModification(this);
    validateRange(this.q23_1, this.p23_1.j());
    this.r23_1 = this.q23_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.p23_1.p(this.q23_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.q23_1 = this.q23_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).c4 = function () {
    return this.q23_1;
  };
  protoOf(StateListIterator).h = function () {
    return this.q23_1 < (this.p23_1.j() - 1 | 0);
  };
  protoOf(StateListIterator).i = function () {
    validateModification(this);
    var newIndex = this.q23_1 + 1 | 0;
    this.r23_1 = newIndex;
    validateRange(newIndex, this.p23_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.p23_1.p(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.q23_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).p3 = function () {
    validateModification(this);
    this.p23_1.u3(this.q23_1);
    this.q23_1 = this.q23_1 - 1 | 0;
    this.r23_1 = -1;
    this.s23_1 = this.p23_1.g23();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$8381d7_hayxw0() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_3($this, value, hash) {
    var low = 0;
    var high = $this.d22_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.e22_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.f22_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sm();
        if (value === midVal)
          return mid;
        return findExactIndex_1($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.e22_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.f22_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sm();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.d22_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.e22_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.f22_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.sm();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.d22_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.d22_1 = 0;
    this.e22_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.f22_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).k1b = function (value) {
    var index;
    var size = this.d22_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_3(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.f22_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.f22_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.f22_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.e22_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.e22_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.f22_1 = newValues;
      this.e22_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.f22_1;
      var destination = this.f22_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.e22_1;
      var destination_0 = this.e22_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.f22_1[insertIndex] = new WeakReference(value);
    this.e22_1[insertIndex] = hash;
    this.d22_1 = this.d22_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.d1e_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).e1e = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.d1e_1.sm());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.d1e_1.t23(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).e1h = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.d1e_1.sm());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.k1c_1 = value;
  }
  protoOf(AtomicReference).sm = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.k1c_1;
  };
  protoOf(AtomicReference).c1d = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.k1c_1 = value;
  };
  protoOf(AtomicReference).l1c = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.k1c_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.k1c_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).y1d = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.k1c_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.k1c_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.m21_1 = value;
  }
  protoOf(AtomicInt).sm = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.m21_1;
  };
  protoOf(AtomicInt).k21 = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.m21_1 = this.m21_1 + amount | 0;
    return this.m21_1;
  };
  protoOf(AtomicInt).t23 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.m21_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.m21_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.o1y_1) {
      var scope = $this.q1y_1;
      if (!(scope == null)) {
        scope.q1e();
        $this.q1y_1 = null;
      }
      var scopes = $this.r1y_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.j();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.p(index);
            item.q1e();
          }
           while (inductionVariable < last);
        scopes.d2();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.o1y_1) {
      var scope = composer.u1a();
      if (!(scope == null)) {
        composer.v1a(scope);
        var lastScope = $this.q1y_1;
        if (replacableWith(lastScope, scope)) {
          $this.q1y_1 = scope;
        } else {
          var lastScopes = $this.r1y_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.r1y_1 = newScopes;
            newScopes.e(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.j();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.p(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.n3(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.e(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.g18(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.u23($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.n1y_1 = key;
    this.o1y_1 = tracked;
    this.p1y_1 = block;
    this.q1y_1 = null;
    this.r1y_1 = null;
  }
  protoOf(ComposableLambdaImpl).s1y = function (block) {
    if (!equals(this.p1y_1, block)) {
      var oldBlockNull = this.p1y_1 == null;
      this.p1y_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).g18 = function (c, changed) {
    var c_0 = c.d1a(this.n1y_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.g10(this) ? differentBits(0) : sameBits(0));
    var tmp = this.p1y_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).u23 = function (p1, c, changed) {
    var c_0 = c.d1a(this.n1y_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.g10(this) ? differentBits(1) : sameBits(1));
    var tmp = this.p1y_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.e1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1f(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.c9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d24_1 = _this__u8e3s4;
    this.e24_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).z8 = function () {
    var suspendResult = this.t8_1;
    $sm: do
      try {
        var tmp = this.r8_1;
        switch (tmp) {
          case 0:
            this.s8_1 = 2;
            this.r8_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.e24_1, safe));
            suspendResult = returnIfSuspended(safe.j9(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.u8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s8_1 === 2) {
          throw e;
        } else {
          this.r8_1 = this.s8_1;
          this.u8_1 = e;
        }
      }
     while (true);
  };
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).ex = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.t8_1 = Unit_instance;
    tmp.u8_1 = null;
    return tmp.z8();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).q16 = function (name) {
    return null;
  };
  protoOf(Trace).f17 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w12_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).p = function (key) {
    return this.w12_1.x1(key);
  };
  protoOf(IntMap).x12 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.w12_1.u4(key, value);
  };
  function WeakReference(reference) {
    this.g22_1 = reference;
  }
  protoOf(WeakReference).sm = function () {
    return this.g22_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).ew = onBeginChanges;
  protoOf(OffsetApplier).fw = onEndChanges;
  protoOf(AbstractApplier).ew = onBeginChanges;
  protoOf(AbstractApplier).fw = onEndChanges;
  protoOf(BroadcastFrameClock).t1 = get_key;
  protoOf(BroadcastFrameClock).e9 = get;
  protoOf(BroadcastFrameClock).yf = fold;
  protoOf(BroadcastFrameClock).xf = minusKey;
  protoOf(BroadcastFrameClock).zf = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.l9();
  });
  protoOf(StructuralEqualityPolicy).u1m = merge;
  protoOf(StateObjectImpl).g1n = mergeRecords;
  protoOf(SnapshotStateList).g1n = mergeRecords;
  protoOf(MonotonicClockImpl).t1 = get_key;
  protoOf(MonotonicClockImpl).e9 = get;
  protoOf(MonotonicClockImpl).yf = fold;
  protoOf(MonotonicClockImpl).xf = minusKey;
  protoOf(MonotonicClockImpl).zf = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = CompositionLocalProvider;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect_0;
  _.$_$.h = DisposableEffect_1;
  _.$_$.i = DisposableEffect;
  _.$_$.j = Recomposer;
  _.$_$.k = compositionLocalOf;
  _.$_$.l = invalidApplier;
  _.$_$.m = isTraceInProgress;
  _.$_$.n = mutableStateListOf;
  _.$_$.o = mutableStateOf;
  _.$_$.p = sourceInformationMarkerEnd;
  _.$_$.q = sourceInformationMarkerStart;
  _.$_$.r = sourceInformation;
  _.$_$.s = staticCompositionLocalOf;
  _.$_$.t = traceEventEnd;
  _.$_$.u = traceEventStart;
  _.$_$.v = updateChangedFlags;
  _.$_$.w = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.x = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.y = _Updater___init__impl__rbfxm8;
  _.$_$.z = Updater__set_impl_v7kwss;
  _.$_$.a1 = Companion_instance_12;
  _.$_$.b1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
