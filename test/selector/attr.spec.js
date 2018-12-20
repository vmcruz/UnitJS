describe('UnitJS.prototype.attr', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param attribute is provided', () => {
    expect(() => {
      $('.test-div').attr();
    }).toThrowError(requiredError('Attribute', 'String'));

    expect(() => {
      $('.test-div').attr(undefined);
    }).toThrowError(requiredError('Attribute', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').attr(1);
    }).toThrow(new TypeError('1 is not a string attribute'));

    expect(() => {
      $('.test-div').attr(true);
    }).toThrow(new TypeError('true is not a string attribute'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').attr('');
    }).toThrow(new TypeError(' is not a string attribute'));
  });

  it('should return the attribute value of the first element in the node list if no second param is provided', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($(...li).attr('disabled')).toBe('disabled');
  });

  it('should return false if the first element doesn\'t have the asked property', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($(...li).attr('id')).toBe(false);
  });

  it('should set the value of the given property to all the nodes in the node list', () => {
    const li = [...document.querySelectorAll('li.test-li')];
    $('li.test-li').attr('disabled', 'disabled')
    expect(li.every(e => e.getAttribute('disabled') === 'disabled')).toBeTruthy();
  });
});