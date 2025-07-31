import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.remove', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if first param element is not present', () => {
    expect(() => {
      // @ts-expect-error
      $('li.test-li').remove();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('li.test-li').remove(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not an HTMLElement', () => {
    expect(() => {
      // @ts-expect-error
      $('li.test-li').remove('div');
    }).toThrow(RequiredType);
  });

  it('should remove a child node if it belongs to the parent element', () => {
    const ul = document.getElementById('test-ul') as HTMLElement;
    const childLi = ul.children[0] as HTMLElement;
    $('#test-ul').remove(childLi);
    expect((ul.children[0] as HTMLElement).dataset.item).toBe('2');
  });

  it('should throw a SyntaxError if element it not a child of the node', () => {
    const grandChildUl = document.getElementById('test-id-div')!.children[0];
    expect(() => {
      $(document.body).remove(grandChildUl);
    }).toThrow(SyntaxError);
  });
});
