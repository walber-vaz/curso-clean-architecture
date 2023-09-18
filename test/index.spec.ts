import { somar } from '@/index';

describe('somar', () => {
  it('should return the sum of two positive numbers', () => {
    const result = somar(2, 3);
    expect(result).toEqual(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = somar(-5, 10);
    expect(result).toEqual(5);
  });

  it('should return the sum of two negative numbers', () => {
    const result = somar(-8, -2);
    expect(result).toEqual(-10);
  });

  it('should return the sum of zero and a number', () => {
    const result = somar(0, 7);
    expect(result).toEqual(7);
  });

  it('should return the sum of a number and zero', () => {
    const result = somar(9, 0);
    expect(result).toEqual(9);
  });
});
