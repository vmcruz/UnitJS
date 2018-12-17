describe('UnitJS.install', () => {
  it('should install $ as UnitJS alias', () => {
    UnitJS.install('$');
    expect($.version()).toBe('1.0.0');
  });
});