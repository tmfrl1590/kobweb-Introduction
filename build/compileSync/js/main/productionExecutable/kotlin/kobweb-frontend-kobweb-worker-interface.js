(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-frontend-kobweb-worker-interface'] = factory(typeof this['kobweb-frontend-kobweb-worker-interface'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-worker-interface']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker-interface.js.map
