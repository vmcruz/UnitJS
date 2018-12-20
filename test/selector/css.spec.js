describe('UnitJS.prototype.css', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param property is provided', () => {
    expect(() => {
      $('.test-div').css();
    }).toThrowError(requiredError('Property', 'String'));

    expect(() => {
      $('.test-div').css(undefined);
    }).toThrowError(requiredError('Property', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').css(1);
    }).toThrow(new TypeError('1 is not a string property'));

    expect(() => {
      $('.test-div').css(true);
    }).toThrow(new TypeError('true is not a string property'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').css('');
    }).toThrow(new TypeError(' is not a string property'));
  });

  it('should throw a TypeError if second param is not a string', () => {
    expect(() => {
      $('.test-div').css('cssProp', 1);
    }).toThrow(new TypeError('1 is not a string value'));

    expect(() => {
      $('.test-div').css('cssProp', true);
    }).toThrow(new TypeError('true is not a string value'));
  });

  it('should return the specified css property of the first element if second param evaluates to false', () => {
    expect($('.test-div').css('color')).toBe('red');
    expect($('.test-div').css('color', false)).toBe('red');
    expect($('.test-div').css('color', undefined)).toBe('red');
    expect($('.test-div').css('color', 0)).toBe('red');
    expect($('.test-div').css('color', '')).toBe('red');
  });

  it('should add the css property with the specified value for the node list', () => {
    const div = document.createElement('div');
    $(div).css('font-size', '14px');

    expect($(div).css('font-size')).toBe('14px');
    expect($(div).css('font-size', false)).toBe('14px');
    expect($(div).css('font-size', undefined)).toBe('14px');
    expect($(div).css('font-size', 0)).toBe('14px');
    expect($(div).css('font-size', '')).toBe('14px');
  });
});