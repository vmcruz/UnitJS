describe('UnitJS.rpad', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  it('should throw an Error if first param is not provided', () => {
    expect(() => {
      $.rpad();
    }).toThrowError(requiredError('ParamString', 'String'));

    expect(() => {
      $.rpad(undefined);
    }).toThrowError(requiredError('ParamString', 'String'));
  });

  it('should return empty string if first param is an empty string', () => {
    expect($.rpad('')).toBe('');
  });

  it('should return the same string if length is greater or equal than two and third param is not present', () => {
    expect($.rpad('test', '--')).toBe('test');
  });

  it('should return the left padded string with the provided padding if length is smaller than third param', () => {
    expect($.rpad('test', '-', 10)).toBe('test------');
  });
});