(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-common-kobweb-serialization'] = factory(typeof this['kobweb-common-kobweb-serialization'] === 'undefined' ? {} : this['kobweb-common-kobweb-serialization']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-kobweb-serialization.js.map
