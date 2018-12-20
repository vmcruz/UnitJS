describe('UnitJS.prototype.prepend', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.xpend();
  });

  it('should throw an Error if no param element is provided', () => {
    expect(() => {
      $('.test-div').prepend();
    }).toThrowError(requiredError('Element', 'HTMLElement | String'));

    expect(() => {
      $('.test-div').prepend(undefined);
    }).toThrowError(requiredError('Element', 'HTMLElement | String'));
  });

  it('should throw a TypeError if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      $('.test-div').prepend(1);
    }).toThrow(new TypeError('1 is not a valid node'));

    expect(() => {
      $('.test-div').prepend(true);
    }).toThrow(new TypeError('true is not a valid node'));
  });

  it('should prepend a TextNode if first param is a string', () => {
    const div = document.querySelector('.test-div');
    expect(div.firstChild.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).prepend('');
    expect(div.firstChild.textContent).toBe('');
    $(div).prepend('This is the string firstChild');
    expect(div.firstChild.textContent).toBe('This is the string firstChild');
  });

  it('should prepend a HTMLElement', () => {
    const div = document.querySelector('.test-div');
    const p = document.createElement('p');
    p.textContent = 'This is the p firstChild';
    expect(div.firstChild.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).prepend(p);
    expect(div.firstChild.textContent).toBe('This is the p firstChild');
  });
});