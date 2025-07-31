import { UnitJS as $ } from '../../unit';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.prepend', () => {
  beforeEach(() => {
    FIXTURES.value();
  });

  it('should not alter the value if the param is undefined', () => {
    const input = document.querySelectorAll(
      '.test-input'
    )[0] as HTMLInputElement;
    expect($('.test-input').value()).toBe(input.value);

    $('.test-input').value(undefined);
    expect($('.test-input').value()).toBe(input.value);
  });

  it('should return the correct value', () => {
    const input = document.querySelectorAll(
      '.test-input'
    )[0] as HTMLInputElement;
    expect($('.test-input').value()).toBe(input.value);

    $('.test-input').value(1);
    expect($('.test-input').value()).toBe('1');

    $('.test-input').value(true);
    expect($('.test-input').value()).toBe('true');
  });

  it('should set the specified value to all the selected elements', () => {
    const inputs = [
      ...document.querySelectorAll<HTMLInputElement>('.test-input'),
    ];
    const newValue = 'Updated value';
    $('.test-input').value(newValue);

    expect(inputs.every((input) => input.value === newValue)).toBeTruthy();
  });
});
