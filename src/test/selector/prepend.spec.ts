import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.prepend', () => {
  beforeEach(() => {
    FIXTURES.xpend();
  });

  it('should throw a RequiredType error if no param element is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').prepend();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').prepend(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').prepend(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').prepend(true);
    }).toThrow(RequiredType);
  });

  it('should prepend a TextNode if first param is a string', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    expect(div.firstChild!.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).prepend('');
    expect(div.firstChild!.textContent).toBe('');
    $(div).prepend('This is the string firstChild');
    expect(div.firstChild!.textContent).toBe('This is the string firstChild');
  });

  it('should prepend a HTMLElement', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    const p = document.createElement('p');
    p.textContent = 'This is the p firstChild';
    expect(div.firstChild!.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).prepend(p);
    expect(div.firstChild!.textContent).toBe('This is the p firstChild');
  });
});
