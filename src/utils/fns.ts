import { type PrimitiveType } from '../types';
import RequiredType from './RequiredType.error';

/**
 * Validates whether the value is null or undefined
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

type AllOfArguments = {
  values: any[];
  typeOf?: PrimitiveType[];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  instanceOf?: Function[];
  allowEmptyString?: boolean;
};

/**
 * Validates that all values in the array conform to at least one of the specified primitive types
 * or are instances of one of the specified constructor functions.
 */
export function allOf({
  values,
  typeOf = [],
  instanceOf = [],
  allowEmptyString = false,
}: AllOfArguments) {
  const instancesNames = instanceOf.map((instance) => instance.name);
  const expectedData = [...typeOf, ...instancesNames];

  if (isNullOrUndefined(values) || !Array.isArray(values)) {
    throw new RequiredType(
      `Expected all values to be [ ${expectedData.join(', ')} ] type, but got [ ${typeof values} ]`
    );
  }

  let currentType: PrimitiveType = 'undefined';

  const notConforms = values.some((value) => {
    if (
      typeof value === 'string' &&
      value === '' &&
      allowEmptyString === false
    ) {
      return true;
    }

    currentType = typeof value;

    const isSupportedType = typeOf.includes(currentType);
    const isSupportedInstance = instanceOf.some(
      (instance) => value instanceof instance
    );

    return !isSupportedType && !isSupportedInstance;
  });

  if (notConforms) {
    throw new RequiredType(
      `Expected all values to be [ ${expectedData.join(', ')} ] type, but got [ ${currentType} ]`
    );
  }

  return true;
}

/**
 * Returns the camel case representation of a kebab cased string
 */
export function camelFromKebab(kebab: string) {
  const [lower, ...rest] = kebab.split('-');
  const pascalRest = rest.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  );

  return `${lower.toLowerCase()}${pascalRest.join('')}`;
}
