import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.text', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').text(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').text(true);
    }).toThrow(RequiredType);
  });

  it('should replace the text content of the nodes in the node list', () => {
    const li = [...document.querySelectorAll('.test-li')];
    $('li.test-li').text('Added with text method');

    expect(
      li.every((e) => e.textContent === 'Added with text method')
    ).toBeTruthy();
  });

  it('should return the text content of the first node if text param is not provided', () => {
    const li = document.querySelectorAll('.test-li');
    li[0].textContent = 'Some text from first node';

    expect($('li.test-li').text()).toBe('Some text from first node');
  });
});
