describe('UnitJS.prototype.append', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.xpend();
  });

  it('should throw an Error if no param element is provided', () => {
    expect(() => {
      $('.test-div').append();
    }).toThrowError(requiredError('Element', 'HTMLElement | String'));

    expect(() => {
      $('.test-div').append(undefined);
    }).toThrowError(requiredError('Element', 'HTMLElement | String'));
  });

  it('should throw a TypeError if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      $('.test-div').append(1);
    }).toThrow(new TypeError('1 is not a valid node'));

    expect(() => {
      $('.test-div').append(true);
    }).toThrow(new TypeError('true is not a valid node'));
  });

  it('should append a TextNode if first param is a string', () => {
    const div = document.querySelector('.test-div');
    expect(div.lastChild.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).append('');
    expect(div.lastChild.textContent).toBe('');
    $(div).append('This is the string lastChild');
    expect(div.lastChild.textContent).toBe('This is the string lastChild');
  });

  it('should append a HTMLElement', () => {
    const div = document.querySelector('.test-div');
    const p = document.createElement('p');
    p.textContent = 'This is the p lastChild';
    expect(div.lastChild.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).append(p);
    expect(div.lastChild.textContent).toBe('This is the p lastChild');
  });
});