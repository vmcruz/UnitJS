describe('UnitJS.prototype.ready', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw an Error if first param element is not present', () => {
    expect(() => {
      $(document).ready();
    }).toThrowError(requiredError('Function', 'Function'));

    expect(() => {
      $(document).ready();
    }).toThrowError(requiredError('Function', 'Function'));
  });

  it('should throw a TypeError if first param is not a function', () => {
    expect(() => {
      $(document).ready(1);
    }).toThrow(new TypeError('1 is not a valid function'));

    expect(() => {
      $(document).ready(true);
    }).toThrow(new TypeError('true is not a valid function'));

    expect(() => {
      $(document).ready('function');
    }).toThrow(new TypeError('function is not a valid function'));
  });

  it('should call the function provided once the element is loaded', () => {
    const spy = {
      fn: () => {},
    };

    spyOn(spy, 'fn');

    const loadEvent = document.createEvent('Event');
    loadEvent.initEvent('load', false, false);

    $(document).ready(spy.fn);

    document.dispatchEvent(loadEvent);

    expect(spy.fn).toHaveBeenCalled();
    expect(spy.fn).toHaveBeenCalledTimes(1);
  });
});
