import { staticMethods } from './methods';
import { UnitJSClass } from './unit.class';

const UnitJS = (...selectors: any[]) => new UnitJSClass(...selectors);

UnitJS.create = staticMethods.create;
UnitJS.date = staticMethods.date;
UnitJS.navigate = staticMethods.navigate;
UnitJS.i18n = staticMethods.i18n;

export { UnitJS };
