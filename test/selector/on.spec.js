describe('UnitJS.prototype.on', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param event is provided', () => {
    expect(() => {
      $('.test-div').on();
    }).toThrowError(requiredError('Event', 'String'));

    expect(() => {
      $('.test-div').on(undefined, () => {});
    }).toThrowError(requiredError('Event', 'String'));
  });

  it('should throw a TypeError if first param is not a valid event', () => {
    expect(() => {
      $('.test-div').on('not-valid');
    }).toThrow(new TypeError('not-valid is not a valid event'));
  });

  it('should throw a TypeError if second or further params are not functions', () => {
    expect(() => {
      $('.test-div').on('click', 'not-a-function');
    }).toThrow(new TypeError('Second or further params are not valid functions'));

    expect(() => {
      $('.test-div').on('click', () => {}, 'not-a-function', () => {});
    }).toThrow(new TypeError('Second or further params are not valid functions'));
  });

  it('should attach a function to the nodes for the specified event', () => {
    const spy = {
      fn: () => {},
    };

    spyOn(spy, 'fn');
    $('.test-div').on('click', spy.fn);

    const testDivs = document.querySelectorAll('.test-div');

    testDivs.forEach((div) => {
      div.click();
    });

    expect(spy.fn).toHaveBeenCalled();
    expect(spy.fn).toHaveBeenCalledTimes(3);
  });

  it('should attach a set of functions to the nodes for the specified event', () => {
    const spy = {
      fn: () => {},
      fn2: () => {},
    };

    spyOn(spy, 'fn');
    spyOn(spy, 'fn2');
    $('.test-div').on('click', spy.fn, spy.fn2);

    const testDivs = document.querySelectorAll('.test-div');

    testDivs.forEach((div) => {
      div.click();
    });

    expect(spy.fn).toHaveBeenCalled();
    expect(spy.fn2).toHaveBeenCalled();
    expect(spy.fn).toHaveBeenCalledTimes(3);
    expect(spy.fn2).toHaveBeenCalledTimes(3);
  });
});