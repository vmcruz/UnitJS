describe('UnitJS.prototype.event', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if the event doesn\'t exist', () => {
    expect(() => {
      $('.test-div').asd();
    }).toThrowError('$(...).asd is not a function');
  });

  it('should attach and trigger a function to the nodes for the specified event', () => {
    const spy = {
      fn: () => {},
    };

    spyOn(spy, 'fn');
    $('.test-div').click(spy.fn);

    const testDivs = document.querySelectorAll('.test-div');

    testDivs.forEach((div) => {
      $(div).click();
    });

    expect(spy.fn).toHaveBeenCalled();
    expect(spy.fn).toHaveBeenCalledTimes(3);
  });
});