(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navigo = factory());
}(this, (function () { 'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigo = function () {
  function Navigo() {
    _classCallCheck(this, Navigo);
  }

  Navigo.prototype.destroy = function destroy() {};

  return Navigo;
}();

return Navigo;

})));
