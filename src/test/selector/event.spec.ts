import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.event', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it("should throw a RequiredType the event doesn't exist", () => {
    expect(() => {
      $('.test-div').asd();
    }).toThrow('.asd is not a function');
  });

  it('should attach and trigger a function to the nodes for the specified event', () => {
    const fn = jest.fn();
    $('.test-div').click(fn);

    const testDivs = document.querySelectorAll('.test-div');

    testDivs.forEach((div) => {
      $(div as HTMLElement).click();
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
