describe('UnitJS.jump', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  it('should throw an Error if no param page is provided', () => {
    expect(() => {
      $.jump();
    }).toThrowError(requiredError('Url', 'String'));

    expect(() => {
      $.jump(undefined);
    }).toThrowError(requiredError('Url', 'String'));
  });

  it('should return false if first param is not a string or it is empty', () => {
    expect($.jump(1)).toBe(false);
    expect($.jump(true)).toBe(false);
    expect($.jump('')).toBe(false);
  });

  it('should redirect the user to the given url', () => {
    const hashURL = '#hashURL';
    $.jump(hashURL);
    expect(window.location.hash).toBe(hashURL);
  });
});
