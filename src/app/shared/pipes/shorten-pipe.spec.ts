import { Shorten } from './shorten-pipe';
describe('Shorten', () => {
  it('create an instance', () => {
    const pipe = new Shorten();
    expect(pipe).toBeTruthy();
  });
});
