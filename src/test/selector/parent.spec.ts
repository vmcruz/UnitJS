import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.parent', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should return the parent node of the first node in the node list', () => {
    const ul = document.getElementById('test-ul');
    expect($('li.test-li').parent()).toBe(ul);
  });

  it('should return null if no elements in node list', () => {
    expect($().parent()).toBe(null);
  });
});
