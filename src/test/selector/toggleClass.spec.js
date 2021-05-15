describe('UnitJS.prototype.toggleClass', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw an Error if no param', () => {
    expect(() => {
      $('.test-div').toggleClass();
    }).toThrowError(requiredError('ClassName', 'String'));

    expect(() => {
      $('.test-div').toggleClass(undefined);
    }).toThrowError(requiredError('ClassName', 'String'));
  });

  it('should throw a TypeError if param is not a string', () => {
    expect(() => {
      $('.test-div').toggleClass(1);
    }).toThrow(new TypeError('1 is not a valid string className'));

    expect(() => {
      $('.test-div').toggleClass(true);
    }).toThrow(new TypeError('true is not a valid string className'));
  });

  it('should throw a TypeError if param is empty string', () => {
    expect(() => {
      $('.test-div').toggleClass('');
    }).toThrow(new TypeError(' is not a valid string className'));
  });

  it('should toggle the css class of the nodes if param is a string', () => {
    const div = document.getElementById('test-id-div');
    expect(div.classList.contains('class-changed')).toBeFalsy();
    $('#test-id-div').toggleClass('class-changed');
    expect(div.classList.contains('class-changed')).toBeTruthy();
    $('#test-id-div').toggleClass('class-changed');
    expect(div.classList.contains('class-changed')).toBeFalsy();
  });
});
