(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-frontend-kobweb-worker'] = factory(typeof this['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-worker']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function get__self() {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return _self;
  }
  var _self;
  var properties_initialized_WorkerStrategy_kt_2au8y5;
  function _init_properties_WorkerStrategy_kt__g3thbl() {
    if (!properties_initialized_WorkerStrategy_kt_2au8y5) {
      properties_initialized_WorkerStrategy_kt_2au8y5 = true;
      _self = self;
    }
  }
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker.js.map
