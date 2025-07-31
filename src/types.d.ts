export type PrimitiveType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'undefined'
  | 'object'
  | 'function'
  | 'symbol'
  | 'bigint';

export type FunctionSignature = (
  node: any,
  index: number,
  nodeArray: any[]
) => void;
