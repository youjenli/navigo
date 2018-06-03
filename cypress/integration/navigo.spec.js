import { Router } from '../../lib/navigo';

describe('Given the Router', () => {
  describe('when initializing the router without a root URL', () => {
    it('should throw an error', () => {
      expect(() => new Router()).to.throw(Error);
    });
  });
});