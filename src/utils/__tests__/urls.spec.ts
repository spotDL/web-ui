import { describe, it, expect } from 'vitest';
import { createURL, type QueryProps } from '../urls';

const url = 'https://example.com';
describe('createURL', () => {
  it('should create a URL without query parameters', () => {
    const options: QueryProps = {
      params: undefined
    };

    const result = createURL(url, options);
    expect(result).toBe('https://example.com');
  });

  it('should create a URL with query parameters', () => {
    const options: QueryProps = {
      params: {
        param1: 'value1',
        param2: 'value2'
      }
    };

    const result = createURL(url, options);
    expect(result).toBe('https://example.com?param1=value1&param2=value2');
  });

  it('should properly decode query parameter values', () => {
    const options: QueryProps = {
      params: {
        param: 'value with spaces'
      }
    };

    const result = createURL(url, options);
    expect(result).toBe('https://example.com?param=value%20with%20spaces');
  });
});
