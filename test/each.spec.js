describe('UnitJS.each', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw a TypeError if param is not a valid function', () => {
    expect(() => {
      $('#test-ul li').each(1);
    }).toThrow(new TypeError('1 is not a valid function'));

    expect(() => {
      $('#test-ul li').each(undefined);
    }).toThrow(new TypeError('undefined is not a valid function'));

    expect(() => {
      $('#test-ul li').each('');
    }).toThrow(new TypeError(' is not a valid function'));
  });

  it('should run a function for each node', () => {
    $('#test-ul li').each((node) => {
      expect(node instanceof HTMLElement).toBeTruthy();
    });
  });
});