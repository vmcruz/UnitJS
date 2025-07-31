import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.html', () => {
  beforeEach(() => {
    FIXTURES.innerHTML();
  });

  it('should return the first node inner html if no params are provided', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    expect($('div').html()).toBe(div.innerHTML);
  });

  it('should throw a RequiredType if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').html(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').html(true);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').html([]);
    }).toThrow(RequiredType);
  });

  it('should replace the inner html if second param is not present', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    $(div).html('This is a replacement for the innerHTML');
    expect($(div).html()).toBe(div.innerHTML);
  });

  it('should replace the inner html with an HTMLElement if second param is not present', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    const p = document.createElement('p');
    p.textContent = 'This is a paragraph replacement';

    $(div).html(p);
    expect($(div).html()).toBe(p.innerHTML);
  });

  it('should append the inner html if second param is present', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    const innerHtml = div.innerHTML;
    const innerHtmlAdded = 'This is a text added to the innerHTML';
    $(div).html(innerHtmlAdded, true);
    expect($(div).html()).toBe(innerHtml + innerHtmlAdded);
  });

  it('should append the HTMLElement inner html if second param is present', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    const text = document.createElement('i');
    text.textContent = 'HTMLElement added';
    const innerHtml = div.innerHTML;
    $(div).html(text, true);
    expect($(div).html()).toBe(innerHtml + text.innerHTML);
  });
});
