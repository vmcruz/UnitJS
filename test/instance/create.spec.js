describe('UnitJS.create', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  it('should throw an Error if no param element is provided', () => {
    expect(() => {
      $.create();
    }).toThrowError(requiredError('Element', 'String'));

    expect(() => {
      $.create(undefined);
    }).toThrowError(requiredError('Element', 'String'));
  });

  it('should return false if first param is not a string or it is empty', () => {
    expect($.create(1)).toBe(false);
    expect($.create(true)).toBe(false);
    expect($.create('')).toBe(false);
  });

  it('should create a HTMLElement', () => {
    const stringTagName = 'div';
    expect($.create(stringTagName) instanceof HTMLElement).toBeTruthy();
    expect($.create(stringTagName).tagName).toBe(stringTagName.toUpperCase());
  });
});