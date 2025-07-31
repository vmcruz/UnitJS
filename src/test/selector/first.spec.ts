import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.first', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the first node in the node list', () => {
    const li = document.querySelectorAll('li.test-li');
    expect($('li.test-li').first()).toBe(li[0]);
  });

  it('should return null if no elements in node list', () => {
    expect($().first()).toBe(null);
  });
});
