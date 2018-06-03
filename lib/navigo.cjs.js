'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// errors
var MISSING_ROOT = 'You must provide a root URL. Check out https://github.com/krasimir/navigo for more information.';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router(root) {
    var useHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, Router);

    if (!root) {
      throw new Error(MISSING_ROOT);
    }

    this._root = root;
    this._useHash = useHash;
    this._hash = '#';
    this._routes = [];
  }

  Router.prototype.on = function on() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    this._routes.push(new (Function.prototype.bind.apply(Route, [null].concat(params)))());
  };

  return Router;
}();

exports.Router = Router;
