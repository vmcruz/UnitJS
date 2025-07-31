import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.each', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType if param is not a valid function', () => {
    expect(() => {
      // @ts-expect-error
      $('#test-ul li').each(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('#test-ul li').each(undefined);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('#test-ul li').each('');
    }).toThrow(RequiredType);
  });

  it('should run a function for each node', () => {
    $('#test-ul li').each((node) => {
      expect(node instanceof HTMLElement).toBeTruthy();
    });
  });
});
