import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.toggleClass', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType if no param', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').toggleClass(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').toggleClass(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').toggleClass(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if param is empty string', () => {
    expect(() => {
      $('.test-div').toggleClass('');
    }).toThrow(RequiredType);
  });

  it('should toggle the css class of the nodes if param is a string', () => {
    const div = document.getElementById('test-id-div') as HTMLElement;
    expect(div.classList.contains('class-changed')).toBeFalsy();
    $('#test-id-div').toggleClass('class-changed');
    expect(div.classList.contains('class-changed')).toBeTruthy();
    $('#test-id-div').toggleClass('class-changed');
    expect(div.classList.contains('class-changed')).toBeFalsy();
  });
});
