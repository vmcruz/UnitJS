import { DAYS, MONTHS, SHORTCUT_EVENTS } from './constants';
import { publicMethods } from './methods';

export class UnitJSClass {
  __nodes__: any[] = [];
  [k: string]: any;

  static __i18n__ = {
    months: MONTHS,
    days: DAYS,
  };

  constructor(...selectors: any[]) {
    selectors.forEach((selector) => {
      if (typeof selector === 'string') {
        try {
          const selectedNodes = Array.from(document.querySelectorAll(selector));
          this.__nodes__.push(...selectedNodes);
        } catch {
          throw new SyntaxError(`${selector} is not a valid DOM selector`);
        }
      } else {
        this.__nodes__.push(selector);
      }
    });

    // Inject dom events
    SHORTCUT_EVENTS.forEach((e) => {
      UnitJSClass.prototype[e] = function (fn?: (ev: Event) => void) {
        if (fn && typeof fn === 'function') {
          this.on(e as keyof ElementEventMap, fn);
        } else {
          this.each((node) => {
            const method = node[e as keyof HTMLElement];

            if (typeof method === 'function') {
              (method as () => void).call(node);
            }
          });
        }
        return this;
      };
    });
  }

  get length() {
    return this.__nodes__.length;
  }

  get nodes() {
    return this.__nodes__;
  }

  addClass = publicMethods.addClass;
  append = publicMethods.append;
  attr = publicMethods.attr;
  css = publicMethods.css;
  data = publicMethods.data;
  each = publicMethods.each;
  first = publicMethods.first;
  firstChild = publicMethods.firstChild;
  hasClass = publicMethods.hasClass;
  html = publicMethods.html;
  on = publicMethods.on;
  parent = publicMethods.parent;
  prepend = publicMethods.prepend;
  ready = publicMethods.ready;
  remove = publicMethods.remove;
  removeClass = publicMethods.removeClass;
  text = publicMethods.text;
  toggleClass = publicMethods.toggleClass;
  value = publicMethods.value;
}
