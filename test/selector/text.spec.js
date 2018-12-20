describe('UnitJS.prototype.text', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $('.test-div').text(1);
    }).toThrow(new TypeError('1 is not a string'));

    expect(() => {
      $('.test-div').text(true);
    }).toThrow(new TypeError('true is not a string'));
  });

  it('should replace the text content of the nodes in the node list', () => {
    const li = [...document.querySelectorAll('.test-li')];
    $('li.test-li').text('Added with text method');

    expect(li.every(e => e.textContent === 'Added with text method')).toBeTruthy();
  });
  
  it('should return the text content of the first node if text param is not provided', () => {
    const li = document.querySelectorAll('.test-li');
    li[0].textContent = 'Some text from first node';

    expect($('li.test-li').text()).toBe('Some text from first node');
  });
});