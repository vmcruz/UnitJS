describe('UnitJS.prototype.firstChild', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the first child node of the first element in node list', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($('li.test-li').firstChild()).toBe(li[0].firstChild);
  });

  it('should return false if no elements in node list', () => {
    expect($().firstChild()).toBe(false);
  });
});
