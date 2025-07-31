import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.data', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if no param Data is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').data();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').data(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').data(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').data(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => {
      $('.test-div').data('');
    }).toThrow(RequiredType);
  });

  it('should return the data property value of the first element in the node list if second param is not present', () => {
    expect($('li').data('item')).toBe('1');
  });

  it('should set the data property value of all the nodes if second param is present', () => {
    $('li').data('item', 'ul-item');
    const li = [...document.querySelectorAll('.test-li')];
    expect(
      li.every((e) => (e as HTMLElement).dataset.item === 'ul-item')
    ).toBeTruthy();
  });

  it('should set the camel case data property of all the nodes if second param is present', () => {
    $('li').data('curiosity-item', 'curious');
    const li = [...document.querySelectorAll('.test-li')];
    expect(
      li.every((e) => (e as HTMLElement).dataset.curiosityItem === 'curious')
    ).toBeTruthy();
  });
});
