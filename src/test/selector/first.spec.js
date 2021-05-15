describe('UnitJS.prototype.first', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the first node in the node list', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($('li.test-li').first()).toBe(li[0]);
  });

  it('should return false if no elements in node list', () => {
    expect($().first()).toBe(false);
  });
});
