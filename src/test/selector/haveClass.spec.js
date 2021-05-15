describe('UnitJS.prototype.haveClass', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw an Error if no param className is provided', () => {
    expect(() => {
      $('.test-div').haveClass();
    }).toThrowError(requiredError('ClassName', 'String'));

    expect(() => {
      $('.test-div').haveClass(undefined);
    }).toThrowError(requiredError('ClassName', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').haveClass(1);
    }).toThrow(new TypeError('1 is not a string className'));

    expect(() => {
      $('.test-div').haveClass(true);
    }).toThrow(new TypeError('true is not a string className'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').haveClass('');
    }).toThrow(new TypeError(' is not a string className'));
  });

  it('should return true if all elements in node list have the given class name', () => {
    const li = document.querySelectorAll('li.test-li');

    expect($(...li).haveClass('test-li')).toBe(true);
  });

  it('should return false if at least one element doesnt\'t have the given class name', () => {
    const li = document.querySelectorAll('li.test-li');
    const liNoClass = document.createElement('li');

    expect($(...li, liNoClass).haveClass('test-li')).toBe(false);
  });
});
