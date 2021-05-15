describe('UnitJS.prototype.parent', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the parent node of the first node in the node list', () => {
    const ul = document.getElementById('test-ul');
    expect($('li.test-li').parent()).toBe(ul);
  });

  it('should return false if no elements in node list', () => {
    expect($().parent()).toBe(false);
  });
});
