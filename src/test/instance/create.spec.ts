import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';

describe('UnitJS.create', () => {
  it('should throw a RequiredType error if no param element is provided or invalid', () => {
    // @ts-expect-error
    expect(() => $.create()).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.create(undefined)).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.create(1)).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.create(true)).toThrow(RequiredType);
  });

  it('should throw a DOMException [native] on invalid tags', () => {
    expect(() => $.create('&*^(')).toThrow(DOMException);
  });

  it('should throw a RequiredType on empty strings', () => {
    expect(() => $.create('')).toThrow(RequiredType);
  });

  it('should create a HTMLElement', () => {
    const stringTagName = 'div';

    expect($.create(stringTagName) instanceof HTMLElement).toBeTruthy();
    expect($.create(stringTagName).tagName).toBe(stringTagName.toUpperCase());
  });
});
