import { FunctionSignature } from '../../types';
import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Executes one or more callback functions on each node.
 *
 * @param {...Function} fns - One or more functions to execute on each node. Each function
 *   should accept `(node, index, nodesArray)` as arguments.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any argument is not a function.
 */
function each(this: UnitJSClass, ...fns: FunctionSignature[]) {
  allOf({ values: fns, typeOf: ['function'] });

  this.__nodes__.forEach((node, index, nodeArray) => {
    fns.forEach((fn) => fn(node, index, nodeArray));
  });

  return this;
}

export default each;
