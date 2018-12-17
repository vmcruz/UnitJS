describe('UnitJS.constructor', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw a TypeError on a non String nor HTMLElement selector', () => {
    expect(function() { $(1) }).toThrow(new TypeError('1 is not a String selector nor a HTMLElement'));
    expect(function() { $(undefined) }).toThrow(new TypeError('undefined is not a String selector nor a HTMLElement'));
    expect(function() { $(true) }).toThrow(new TypeError('true is not a String selector nor a HTMLElement'));
  });

  it('should throw a SyntaxError on invalid selector', () => {
    expect(function() { $('%') }).toThrow(new SyntaxError('% is not a valid DOM selector'));
    expect(function() { $('^html') }).toThrow(new SyntaxError('^html is not a valid DOM selector'));
  });

  it('should initialize the nodes on valid selector', () => {
    $('#test-ul li').nodes.forEach((node) => {
      expect(node.tagName === 'LI').toBeTruthy();
    });

    const testDiv = document.createElement('div');
    expect($(testDiv).nodes[0].tagName === 'DIV').toBeTruthy();
  });
});