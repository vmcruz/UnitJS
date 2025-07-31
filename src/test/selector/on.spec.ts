import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.on', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if no param event is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').on();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').on(undefined, () => {});
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if second or further params are not functions', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').on('click', 'not-a-function');
    }).toThrow(RequiredType);

    expect(() => {
      $('.test-div').on(
        'click',
        () => {},
        // @ts-expect-error
        'not-a-function',
        () => {}
      );
    }).toThrow(RequiredType);
  });

  it('should attach a function to the nodes for the specified event', () => {
    const fn = jest.fn();
    $('.test-div').on('click', fn);

    const testDivs = document.querySelectorAll<HTMLElement>('.test-div');

    testDivs.forEach((div) => {
      div.click();
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should attach a set of functions to the nodes for the specified event', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();
    $('.test-div').on('click', fn, fn2);

    const testDivs = document.querySelectorAll<HTMLElement>('.test-div');

    testDivs.forEach((div) => {
      div.click();
    });

    expect(fn).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn2).toHaveBeenCalledTimes(3);
  });
});
