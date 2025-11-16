import { Shorten } from './shorten-pipe';

describe('ShortenPipe', () => {

  const pipe = new Shorten();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original value if shorter than limit', () => {
    const text = 'Hello';
    expect(pipe.transform(text, 10)).toBe('Hello');
  });

  it('should shorten the value if longer than limit', () => {
    const text = 'Це дуже довгий текст для тестування';
    expect(pipe.transform(text, 10)).toBe('Це дуже до...');
  });
});
