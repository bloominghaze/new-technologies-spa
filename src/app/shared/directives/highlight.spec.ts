import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const directive = new Highlight(null as any, null as any);
    expect(directive).toBeTruthy();
  });
});
