import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.append', () => {
  beforeEach(() => {
    FIXTURES.xpend();
  });

  it('should throw a RequiredType error if no param element is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').append();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').append(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType error if first param is not a string nor a HTMLElement', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').append(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').append(true);
    }).toThrow(RequiredType);
  });

  it('should append a TextNode if first param is a string', () => {
    const div = document.querySelector('.test-div') as HTMLElement;

    expect(div.lastChild!.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).append('');
    expect(div.lastChild!.textContent).toBe('');
    $(div).append('This is the string lastChild');
    expect(div.lastChild!.textContent).toBe('This is the string lastChild');
  });

  it('should append a HTMLElement', () => {
    const div = document.querySelector('.test-div') as HTMLElement;
    const p = document.createElement('p');
    p.textContent = 'This is the p lastChild';
    expect(div.lastChild!.textContent).toBe('Test [ap|pre]pend in UnitJS');
    $(div).append(p);
    expect(div.lastChild!.textContent).toBe('This is the p lastChild');
  });
});
