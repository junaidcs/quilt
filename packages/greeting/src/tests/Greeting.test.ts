import {greet} from '../Greeting';

describe('Greeting', () => {
  describe('greet()', () => {
    it('returns a random greeting', async () => {
      expect(greet()).toEqual(expect.any(String));
    });
  });
});
