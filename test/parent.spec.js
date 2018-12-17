describe('UnitJS.parent', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should return the parent node of the first node in the node list', () => {
    const ul = document.getElementById('test-ul');
    expect($('li.test-li').parent()).toBe(ul);
  });

  it('should return false if no elements in node list', () => {
    expect($().parent()).toBe(false);
  });
});