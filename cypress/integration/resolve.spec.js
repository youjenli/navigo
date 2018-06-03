import resolve from '../../src/utils/resolve';

describe('Given the resolve helper', () => {
  [
    {
      root: 'http://site.com',
      path: 'http://site.com',
      expected: {}
    }
  ].forEach(({ root, path, expected }) => {
    describe(`when passing root=${ root } and path=${ path }`, () => {
      it(`should return ${ JSON.stringify(expected) }`, () => {
        expect(resolve(root, path)).to.deep.equal(expected);
      });
    });
  })
  
});