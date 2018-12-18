describe('UnitJS.addClass', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param className is provided', () => {
    expect(() => {
      $('.test-div').addClass();
    }).toThrowError(requiredError('ClassName', 'String'));

    expect(() => {
      $('.test-div').addClass(undefined);
    }).toThrowError(requiredError('ClassName', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').addClass(1);
    }).toThrow(new TypeError('1 is not a string className'));

    expect(() => {
      $('.test-div').addClass(true);
    }).toThrow(new TypeError('true is not a string className'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').addClass('');
    }).toThrow(new TypeError(' is not a string className'));
  });

  it('should add the class name to all the nodes in the node list', () => {
    $('li').addClass('stub-class');
    const li = [...document.querySelectorAll('li')];
    expect(li.every(e => e.classList.contains('stub-class'))).toBeTruthy();
  });
});