(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-frontend-silk-icons-fa'] = factory(typeof this['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : this['kobweb-frontend-silk-icons-fa']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
