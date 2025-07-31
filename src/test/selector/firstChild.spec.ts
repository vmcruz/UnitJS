import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.firstChild', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the first child node of the first element in node list', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($('li.test-li').firstChild()).toBe(li[0].firstChild);
  });

  it('should return null if no elements in node list', () => {
    expect($().firstChild()).toBe(null);
  });
});
