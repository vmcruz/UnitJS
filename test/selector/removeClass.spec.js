describe('UnitJS.removeClass', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param className is provided', () => {
    expect(() => {
      $('.test-div').removeClass();
    }).toThrowError(requiredError('ClassName', 'String'));

    expect(() => {
      $('.test-div').removeClass(undefined);
    }).toThrowError(requiredError('ClassName', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').removeClass(1);
    }).toThrow(new TypeError('1 is not a string className'));

    expect(() => {
      $('.test-div').removeClass(true);
    }).toThrow(new TypeError('true is not a string className'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').removeClass('');
    }).toThrow(new TypeError(' is not a string className'));
  });

  it('should remove the class name to all the nodes in the node list', () => {
    const li = [...document.querySelectorAll('li.test-li')];

    $('li.test-li').removeClass('test-li');

    expect(li.every(e => e.classList.contains('test-li'))).toBe(false);
  });
});