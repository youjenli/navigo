import { MISSING_ROOT } from './constants';

export default class Router {
  constructor(root, useHash = false, hash = '#') {
    if (!root) {
      throw new Error(MISSING_ROOT);
    }

    this._root = root;
    this._useHash = useHash;
    this._hash = '#';
    this._routes = [];
  }
  on(...params) {
    this._routes.push(new Route(...params));
  }
}