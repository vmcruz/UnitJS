import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.addClass', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').addClass(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').addClass(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => {
      $('.test-div').addClass('');
    }).toThrow(RequiredType);
  });

  it('should add the class name to all the nodes in the node list', () => {
    $('li').addClass('stub-class');
    const li = [...document.querySelectorAll('li')];
    expect(li.every((e) => e.classList.contains('stub-class'))).toBeTruthy();
  });
});
