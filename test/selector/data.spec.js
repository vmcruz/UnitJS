describe('UnitJS.data', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if no param Data is provided', () => {
    expect(() => {
      $('.test-div').data();
    }).toThrowError(requiredError('Data', 'String'));

    expect(() => {
      $('.test-div').data(undefined);
    }).toThrowError(requiredError('Data', 'String'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').data(1);
    }).toThrow(new TypeError('1 is not a string data property'));

    expect(() => {
      $('.test-div').data(true);
    }).toThrow(new TypeError('true is not a string data property'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $('.test-div').data('');
    }).toThrow(new TypeError(' is not a string data property'));
  });

  it('should return the data property value of the first element in the node list if second param is not present', () => {
    expect($('li').data('item')).toBe('1');
  });

  it('should set the data property value of all the nodes if second param is present', () => {
    $('li').data('item', 'ul-item');
    const li = [...document.querySelectorAll('.test-li')];
    expect(li.every(e => e.dataset.item === 'ul-item')).toBeTruthy();
  });

  it('should set the camel case data property of all the nodes if second param is present', () => {
    $('li').data('curiosity-item', 'curious');
    const li = [...document.querySelectorAll('.test-li')];
    expect(li.every(e => e.dataset.curiosityItem === 'curious')).toBeTruthy();
  });
});