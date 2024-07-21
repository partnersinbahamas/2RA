import { updateSearchParams } from './updateSearchParams';

describe('updateSearchParams', () => {
  it('should add new parameters', () => {
    const searchParams = new URLSearchParams('foo=1');
    const params = { bar: '2', baz: '3' };

    const result = updateSearchParams(searchParams, params);

    expect(result).toBe('foo=1&bar=2&baz=3');
  });

  it('should update existing parameters', () => {
    const searchParams = new URLSearchParams('foo=1&bar=2');
    const params = { foo: 'updated', bar: 'updated' };

    const result = updateSearchParams(searchParams, params);

    expect(result).toBe('foo=updated&bar=updated');
  });

  it('should remove null parameters', () => {
    const searchParams = new URLSearchParams('foo=1&bar=2');
    const params = { foo: null, bar: 'updated' };

    const result = updateSearchParams(searchParams, params);

    expect(result).toBe('bar=updated');
  });

  it('should handle array values in params', () => {
    const searchParams = new URLSearchParams('foo=1');
    const params = { foo: ['2', '3'], bar: ['4', '5'] };

    const result = updateSearchParams(searchParams, params);

    expect(result).toBe('foo=2&foo=3&bar=4&bar=5');
  });

  it('should handle an empty parameters without modifying', () => {
    const searchParams = new URLSearchParams('foo=1&bar=2');
    const params = {};

    const result = updateSearchParams(searchParams, params);

    expect(result).toBe('foo=1&bar=2');
  });
});
