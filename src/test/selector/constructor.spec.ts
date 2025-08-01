import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.constructor', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a SyntaxError on invalid selector', () => {
    expect(() => {
      $('%');
    }).toThrow(SyntaxError);
    expect(() => {
      $('^html');
    }).toThrow(SyntaxError);
  });

  it('should initialize the nodes on valid selector', () => {
    $('#test-ul li').nodes.forEach((node) => {
      expect(node.tagName === 'LI').toBeTruthy();
    });

    const testDiv = document.createElement('div');
    expect($(testDiv).nodes[0].tagName === 'DIV').toBeTruthy();
    expect($(testDiv).get(0).tagName).toEqual('DIV');
    expect($(testDiv).first().tagName).toEqual('DIV');
  });
});
