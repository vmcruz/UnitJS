describe('UnitJS.install', () => {
    it('should install $ as UnitJS alias', () => {
        UnitJS.install('$');
        expect($.isUnitJS()).toBeTruthy();
    });
});