describe('UnitJS.prototype.html', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.innerHTML();
  });

  it('should return the first node inner html if no params are provided', () => {
    const div = document.querySelector('.test-div');
    expect($('div').html()).toBe(div.innerHTML);
  });

  it('should throw a TypeError if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      $('.test-div').html(1);
    }).toThrow(new TypeError('1 is not a string nor a HTMLElement'));

    expect(() => {
      $('.test-div').html(true);
    }).toThrow(new TypeError('true is not a string nor a HTMLElement'));

    expect(() => {
      $('.test-div').html([]);
    }).toThrow(new TypeError(' is not a string nor a HTMLElement'));
  });

  it('should replace the inner html if second param is not present', () => {
    const div = document.querySelector('.test-div');
    $(div).html('This is a replacement for the innerHTML');
    expect($(div).html()).toBe(div.innerHTML);
  });

  it('should replace the inner html with an HTMLElement inner html if second param is not present', () => {
    const div = document.querySelector('.test-div');
    const p = document.createElement('p');
    p.textContent = 'This is a paragraph replacement';

    $(div).html(p);
    expect($(div).html()).toBe(p.innerHTML);
  });

  it('should append the inner html if second param is present', () => {
    const div = document.querySelector('.test-div');
    const innerHtml = div.innerHTML;
    const innerHtmlAdded = 'This is a text added to the innerHTML';
    $(div).html(innerHtmlAdded, true);
    expect($(div).html()).toBe(innerHtml + innerHtmlAdded);
  });

  it('should append the HTMLElement inner html if second param is present', () => {
    const div = document.querySelector('.test-div');
    const text = document.createElement('i');
    text.innerText = 'HTMLElement added';
    const innerHtml = div.innerHTML;
    $(div).html(text, true);
    expect($(div).html()).toBe(innerHtml + text.innerHTML);
  });
});
