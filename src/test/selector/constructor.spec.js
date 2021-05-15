describe('UnitJS.prototype.constructor', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a TypeError on a non String nor HTMLElement selector', () => {
    expect(() => { $(1); }).toThrow(new TypeError('1 is not a String selector nor a HTMLElement'));
    expect(() => { $(undefined); }).toThrow(new TypeError('undefined is not a String selector nor a HTMLElement'));
    expect(() => { $(true); }).toThrow(new TypeError('true is not a String selector nor a HTMLElement'));
  });

  it('should throw a SyntaxError on invalid selector', () => {
    expect(() => { $('%'); }).toThrow(new SyntaxError('% is not a valid DOM selector'));
    expect(() => { $('^html'); }).toThrow(new SyntaxError('^html is not a valid DOM selector'));
  });

  it('should initialize the nodes on valid selector', () => {
    $('#test-ul li').nodes.forEach((node) => {
      expect(node.tagName === 'LI').toBeTruthy();
    });

    const testDiv = document.createElement('div');
    expect($(testDiv).nodes[0].tagName === 'DIV').toBeTruthy();
  });
});
