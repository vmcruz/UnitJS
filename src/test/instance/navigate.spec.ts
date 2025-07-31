import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';

describe('UnitJS.navigate', () => {
  it('should throw a RequiredType no param page is provided', () => {
    // @ts-expect-error
    expect(() => $.navigate()).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.navigate(undefined)).toThrow(RequiredType);
  });

  it('should redirect the user to the given url', () => {
    const hashURL = '#hashURL';
    $.navigate(hashURL);
    expect(window.location.hash).toBe(hashURL);
  });
});
