describe('UnitJS.prototype.prepend', () => {
  beforeAll(() => {
    UnitJS.install('$');
  });

  beforeEach(() => {
    FIXTURES.value();
  });

  it('should return the value of the first selected element if first param is not a string', () => {
    const input = document.querySelectorAll('.test-input')[0];
    expect($('.test-input').value()).toBe(input.value);
    expect($('.test-input').value(undefined)).toBe(input.value);
    expect($('.test-input').value(1)).toBe(input.value);
    expect($('.test-input').value(true)).toBe(input.value);
  });

  it('should set the specified value to all the selected elements', () => {
    const inputs = [...document.querySelectorAll('.test-input')];
    const newValue = 'Updated value';
    $('.test-input').value(newValue);

    expect(inputs.every((input) => input.value === newValue)).toBeTruthy();
  });
});
