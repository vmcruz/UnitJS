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

  it('should return the correct value for each format value', () => {
    expect(
      $.date('d j w N m n Y y a A G g H h i s v l D F M', 1544002524124)
    )
      .toBe('05 5 3 4 12 12 2018 18 am AM 3 3 03 03 35 24 124 Wednesday Wed December Dec');
  });
});