describe('UnitJS.remove', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    __FIXTURES__.common();
  });

  it('should throw an Error if first param element is not present', () => {
    expect(() => {
      $('li.test-li').remove();
    }).toThrowError(requiredError('Element', 'HTMLElement'));

    expect(() => {
      $('li.test-li').remove(undefined);
    }).toThrowError(requiredError('Element', 'HTMLElement'));
  });

  it('should throw a TypeError if first param is not an HTMLElement', () => {
    expect(() => {
      $('li.test-li').remove('div');
    }).toThrow(new TypeError('div is not a valid node'));
  });

  it('should remove a child node if it belongs to the parent element', () => {
    const ul = document.getElementById('test-ul');
    const childLi = ul.children[0];
    $('#test-ul').remove(childLi);
    expect(ul.children[0].dataset.item).toBe('2');
  });

  it('should throw a SyntaxError if element it not a child of the node', () => {
    const grandChildUl = document.getElementById('test-id-div').children[0];
    expect(() => {
      $(document.body).remove(grandChildUl);
    }).toThrow(new SyntaxError(`${grandChildUl} is not a child of this node`));
  });
});