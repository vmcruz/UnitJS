import { UnitJSClass } from '../../unit.class';
import { allOf, isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets the HTML content of nodes.
 *
 * @param {string|HTMLElement} [html] - HTML string or element to set or append.
 * @param {boolean} [append=false] - If `true`, appends instead of replacing.
 * @returns {string|this} HTML string if getting, or the current instance for chaining if setting.
 * @throws {RequiredType} If `html` is provided and is not a string or HTMLElement.
 */
function html(this: UnitJSClass, html?: string | HTMLElement, append = false) {
  if (isNullOrUndefined(html)) {
    return this.__nodes__[0].innerHTML;
  }

  const strHtml = html instanceof HTMLElement ? html.innerHTML : html;

  allOf({
    values: [strHtml],
    typeOf: ['string'],
    instanceOf: [HTMLElement],
    allowEmptyString: true,
  });

  this.__nodes__.forEach((node) => {
    if (append) {
      node.innerHTML += strHtml;
    } else {
      node.innerHTML = strHtml;
    }
  });

  return this;
}

export default html;
