import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.ready', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType first param element is not present', () => {
    expect(() => {
      // @ts-expect-error
      $(document).ready();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $(document).ready();
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a function', () => {
    expect(() => {
      // @ts-expect-error
      $(document).ready(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $(document).ready(true);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $(document).ready('function');
    }).toThrow(RequiredType);
  });

  it('should call the function provided once the element is loaded', () => {
    const fn = jest.fn();

    const loadEvent = new Event('DOMContentLoaded', {
      bubbles: false,
      cancelable: false,
    });

    const windowLoadEvent = new Event('load', {
      bubbles: false,
      cancelable: false,
    });

    $(document).ready(fn);
    $(window).ready(fn);

    document.dispatchEvent(loadEvent);
    window.dispatchEvent(windowLoadEvent);

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
