describe('UnitJS.date', () => {
  const globalVariable = '$';

  beforeEach(() => {
    UnitJS.install(globalVariable);
  });

  it('should throw an Error if first param is not provided', () => {
    expect(() => {
      $.date();
    }).toThrowError(requiredError('DateFormat', 'String'));

    expect(() => {
      $.date(undefined);
    }).toThrowError(requiredError('DateFormat', 'String'));
  });

  it('should throw a TypeError if first param is an empty string', () => {
    expect(() => {
      $.date('');
    }).toThrow(new TypeError(' is not a valid string format'));
  });

  it('should throw a TypeError if first param is not a string', () => {
    expect(() => {
      $.date(1);
    }).toThrow(new TypeError('1 is not a valid string format'));

    expect(() => {
      $.date(true);
    }).toThrow(new TypeError('true is not a valid string format'));

    expect(() => {
      $.date({});
    }).toThrow(new TypeError('[object Object] is not a valid string format'));
  });

  it('should throw a TypeError if second param is not a number', () => {
    expect(() => {
      $.date('format', true);
    }).toThrow(new TypeError('true is not a valid number timestamp'));

    expect(() => {
      $.date('format', []);
    }).toThrow(new TypeError(' is not a valid number timestamp'));

    expect(() => {
      $.date('format', {});
    }).toThrow(new TypeError('[object Object] is not a valid number timestamp'));
  });

  it('should return a TypeError if $.i18n.months doesn\'t exist', () => {
    expect(() => {
      $.i18n.months = undefined;
      $.date('format');
    }).toThrow(new TypeError(`${globalVariable}.i18n.months is not a valid array of months. Use ${globalVariable}.i18n.months to set it.`));
  });

  it('should return a TypeError if $.i18n.months doesn\'t have 12 indexes', () => {
    expect(() => {
      $.i18n.months = ['a', 'b'];
      $.date('format');
    }).toThrow(new TypeError(`${globalVariable}.i18n.months is not a valid array of months. Use ${globalVariable}.i18n.months to set it.`));
  });

  it('should return a TypeError if $.i18n.days doesn\'t exist', () => {
    expect(() => {
      $.i18n.days = undefined;
      $.date('format');
    }).toThrow(new TypeError(`${globalVariable}.i18n.days is not a valid array of week days. Use ${globalVariable}.i18n.days to set it.`));
  });

  it('should return a TypeError if $.i18n.days doesn\'t have 12 indexes', () => {
    expect(() => {
      $.i18n.days = ['a', 'b'];
      $.date('format');
    }).toThrow(new TypeError(`${globalVariable}.i18n.days is not a valid array of week days. Use ${globalVariable}.i18n.days to set it.`));
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544002524124 with -6 offset hours', () => {
    expect($.date('d j w N m n Y y a A G g H h i s v l D F M', 1544002524124, -6)).toBe('05 5 3 3 12 12 2018 18 am AM 3 3 03 03 35 24 124 Wednesday Wed December Dec');
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1439489120127 with -6 offset hours', () => {
    expect($.date('d j w N m n Y y a A G g H h i s v l D F M', 1439489120127, -6)).toBe('13 13 4 4 08 8 2015 15 am AM 12 12 12 12 05 20 127 Thursday Thu August Aug');
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544940000000 with -6 offset hours', () => {
    expect($.date('d j w N m n Y y a A G g H h i s v l D F M', 1544940000000, -6)).toBe('16 16 0 7 12 12 2018 18 am AM 0 12 00 12 00 00 0 Sunday Sun December Dec');
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544983200000 in UTC time', () => {
    expect($.date('d j w N m n Y y a A G g H h i s v l D F M', 1544983200000)).toBe('16 16 0 7 12 12 2018 18 pm PM 18 6 18 06 00 00 0 Sunday Sun December Dec');
  });
});
