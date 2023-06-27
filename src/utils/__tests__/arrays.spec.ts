import { describe, it, expect } from 'vitest';
import { enumToArray } from '../arrays';

enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue'
}

describe('enumToArray', () => {
  it('should convert enum object to key-value pairs array', () => {
    const result = enumToArray(Color);
    expect(result).toEqual([
      { key: 'RED', value: 'red' },
      { key: 'GREEN', value: 'green' },
      { key: 'BLUE', value: 'blue' }
    ]);
  });
});
