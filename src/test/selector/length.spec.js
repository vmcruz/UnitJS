describe('UnitJS.prototype.length', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return 0 if no elements were selected', () => {
    expect($().length).toEqual(0);
  });

  it('should return the correct number of elements', () => {
    expect($('div').length).toEqual(4);
  });

  it('should return the correct number of elements for multiple selectors', () => {
    expect($('div', '#test-ul li').length).toEqual(8);
  });
});
