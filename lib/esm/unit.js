var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/methods/public/index.ts
var public_exports = {};
__export(public_exports, {
  addClass: () => addClass_default,
  append: () => append_default,
  attr: () => attr_default,
  css: () => css_default,
  data: () => data_default,
  each: () => each_default,
  first: () => first_default,
  firstChild: () => firstChild_default,
  hasClass: () => hasClass_default,
  html: () => html_default,
  on: () => on_default,
  parent: () => parent_default,
  prepend: () => prepend_default,
  ready: () => ready_default,
  remove: () => remove_default,
  removeClass: () => removeClass_default,
  text: () => text_default,
  toggleClass: () => toggleClass_default,
  value: () => value_default
});

// src/utils/RequiredType.error.ts
var RequiredType = class extends Error {
  constructor(message, ...params) {
    super(...params);
    this.name = "RequiredType";
    this.message = message;
  }
};
var RequiredType_error_default = RequiredType;

// src/utils/fns.ts
function isNullOrUndefined(value2) {
  return value2 === null || value2 === void 0;
}
function allOf({
  values,
  typeOf = [],
  instanceOf = [],
  allowEmptyString = false
}) {
  const instancesNames = instanceOf.map((instance) => instance.name);
  const expectedData = [...typeOf, ...instancesNames];
  if (isNullOrUndefined(values) || !Array.isArray(values)) {
    throw new RequiredType_error_default(
      `Expected all values to be [ ${expectedData.join(", ")} ] type, but got [ ${typeof values} ]`
    );
  }
  let currentType = "undefined";
  const notConforms = values.some((value2) => {
    if (typeof value2 === "string" && value2 === "" && allowEmptyString === false) {
      return true;
    }
    currentType = typeof value2;
    const isSupportedType = typeOf.includes(currentType);
    const isSupportedInstance = instanceOf.some(
      (instance) => value2 instanceof instance
    );
    return !isSupportedType && !isSupportedInstance;
  });
  if (notConforms) {
    throw new RequiredType_error_default(
      `Expected all values to be [ ${expectedData.join(", ")} ] type, but got [ ${currentType} ]`
    );
  }
  return true;
}
function camelFromKebab(kebab) {
  const [lower, ...rest] = kebab.split("-");
  const pascalRest = rest.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  );
  return `${lower.toLowerCase()}${pascalRest.join("")}`;
}

// src/methods/public/addClass.ts
function addClass(...classNames) {
  allOf({ values: classNames, typeOf: ["string"] });
  this.__nodes__.forEach((node) => {
    node.classList.add(...classNames);
  });
  return this;
}
var addClass_default = addClass;

// src/methods/public/append.ts
function append(element) {
  allOf({
    values: [element],
    typeOf: ["string"],
    instanceOf: [Element],
    allowEmptyString: true
  });
  const htmlElement = typeof element === "string" ? document.createTextNode(element) : element;
  this.__nodes__.forEach((node) => {
    node.appendChild(htmlElement);
  });
  return this;
}
var append_default = append;

// src/methods/public/attr.ts
function attr(attribute, value2) {
  allOf({ values: [attribute], typeOf: ["string"] });
  if (isNullOrUndefined(value2)) {
    if (this.__nodes__[0].hasAttribute(attribute)) {
      return this.__nodes__[0].getAttribute(attribute);
    }
    return null;
  }
  this.__nodes__.forEach((node) => {
    node.setAttribute(attribute, value2);
  });
  return this;
}
var attr_default = attr;

// src/constants/index.ts
var CSS_VALUE_REGEX = /(?<value>.+?)(?:\s+!(?<important>important))?\s*$/i;
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var SHORTCUT_EVENTS = [
  // Mouse
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "auxclick",
  "contextmenu",
  "wheel",
  // Pointer (covers mouse, touch, pen)
  "pointerdown",
  "pointerup",
  "pointermove",
  "pointerenter",
  "pointerleave",
  "pointercancel",
  // Keyboard
  "keydown",
  "keyup",
  "keypress",
  // Touch
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel",
  // Drag & Drop
  "drag",
  "dragstart",
  "dragend",
  "dragenter",
  "dragleave",
  "dragover",
  "drop",
  // Scroll & focus
  "scroll",
  "focus",
  "blur",
  // Form
  "input",
  "change",
  "submit"
];

// src/methods/public/css.ts
function css(property, value2) {
  allOf({ values: [property], typeOf: ["string"] });
  if (isNullOrUndefined(value2)) {
    const computedStyles = window.getComputedStyle(this.__nodes__[0]);
    return computedStyles.getPropertyValue(property);
  }
  allOf({ values: [value2], typeOf: ["string"] });
  const matches = value2?.match(CSS_VALUE_REGEX);
  if (matches) {
    this.__nodes__.forEach((node) => {
      node.style.setProperty(
        property,
        matches.groups?.value,
        matches.groups?.important
      );
    });
    return this;
  }
  throw new TypeError("Unkown CSSStyleValue");
}
var css_default = css;

// src/methods/public/data.ts
function data(property, value2) {
  allOf({ values: [property], typeOf: ["string"] });
  if (isNullOrUndefined(value2)) {
    return this.__nodes__[0].dataset[property];
  }
  allOf({ values: [value2], typeOf: ["string"] });
  const propertyCamel = camelFromKebab(property);
  this.__nodes__.forEach((node) => {
    node.dataset[propertyCamel] = value2;
  });
  return this;
}
var data_default = data;

// src/methods/public/each.ts
function each(...fns) {
  allOf({ values: fns, typeOf: ["function"] });
  this.__nodes__.forEach((node, index, nodeArray) => {
    fns.forEach((fn) => fn(node, index, nodeArray));
  });
  return this;
}
var each_default = each;

// src/methods/public/first.ts
function first() {
  if (!this.__nodes__.length) {
    return null;
  }
  return this.__nodes__[0];
}
var first_default = first;

// src/methods/public/firstChild.ts
function firstChild() {
  if (!this.__nodes__.length) {
    return null;
  }
  return this.__nodes__[0].firstChild;
}
var firstChild_default = firstChild;

// src/methods/public/hasClass.ts
function hasClass(className, strict = true) {
  allOf({ values: [className], typeOf: ["string"] });
  const method = strict ? "every" : "some";
  return this.__nodes__[method]((node) => node.classList.contains(className));
}
var hasClass_default = hasClass;

// src/methods/public/html.ts
function html(html2, append2 = false) {
  if (isNullOrUndefined(html2)) {
    return this.__nodes__[0].innerHTML;
  }
  const strHtml = html2 instanceof HTMLElement ? html2.innerHTML : html2;
  allOf({ values: [strHtml], typeOf: ["string"], instanceOf: [HTMLElement] });
  this.__nodes__.forEach((node) => {
    if (append2) {
      node.innerHTML += strHtml;
    } else {
      node.innerHTML = strHtml;
    }
  });
  return this;
}
var html_default = html;

// src/methods/public/on.ts
function on(event, ...fns) {
  allOf({ values: [event], typeOf: ["string"] });
  allOf({ values: fns, typeOf: ["function"] });
  this.__nodes__.forEach((node) => {
    fns.forEach((fn) => node.addEventListener(event, fn, false));
  });
  return this;
}
var on_default = on;

// src/methods/public/parent.ts
function parent() {
  if (!this.__nodes__.length) {
    return null;
  }
  return this.__nodes__[0].parentNode;
}
var parent_default = parent;

// src/methods/public/prepend.ts
function prepend(element) {
  allOf({
    values: [element],
    typeOf: ["string"],
    instanceOf: [HTMLElement],
    allowEmptyString: true
  });
  const htmlElement = typeof element === "string" ? document.createTextNode(element) : element;
  this.__nodes__.forEach((node) => {
    node.insertBefore(htmlElement, node.firstChild);
  });
  return this;
}
var prepend_default = prepend;

// src/methods/public/ready.ts
function ready(fn) {
  allOf({ values: [fn], typeOf: ["function"] });
  this.__nodes__.forEach((node) => {
    if (node instanceof Window || node.nodeType === 1) {
      node.addEventListener("load", fn, false);
    } else {
      node.addEventListener("DOMContentLoaded", fn, false);
    }
  });
  return this;
}
var ready_default = ready;

// src/methods/public/remove.ts
function remove(element) {
  allOf({ values: [element], instanceOf: [Element] });
  this.__nodes__.forEach((node) => {
    try {
      node.removeChild(element);
    } catch {
      throw new SyntaxError(`${element} is not a child of this node`);
    }
  });
  return this;
}
var remove_default = remove;

// src/methods/public/removeClass.ts
function removeClass(...classNames) {
  allOf({ values: classNames, typeOf: ["string"] });
  this.__nodes__.forEach((node) => {
    node.classList.remove(...classNames);
  });
  return this;
}
var removeClass_default = removeClass;

// src/methods/public/text.ts
function text(text2) {
  if (isNullOrUndefined(text2)) {
    return this.__nodes__[0].textContent;
  }
  allOf({ values: [text2], typeOf: ["string"] });
  this.__nodes__.forEach((node) => {
    node.textContent = text2;
  });
  return this;
}
var text_default = text;

// src/methods/public/toggleClass.ts
function toggleClass(...classNames) {
  allOf({ values: classNames, typeOf: ["string"] });
  this.__nodes__.forEach((node) => {
    classNames.forEach((className) => node.classList.toggle(className));
  });
  return this;
}
var toggleClass_default = toggleClass;

// src/methods/public/value.ts
function value(value2) {
  if (isNullOrUndefined(value2)) {
    return this.__nodes__[0].value;
  }
  this.__nodes__.forEach((node) => {
    node.value = value2;
  });
  return this;
}
var value_default = value;

// src/methods/static/index.ts
var static_exports = {};
__export(static_exports, {
  create: () => create_default,
  date: () => date_default,
  i18n: () => i18n_default,
  navigate: () => navigate_default
});

// src/methods/static/create.ts
function create(element) {
  allOf({ values: [element], typeOf: ["string"] });
  return document.createElement(element);
}
var create_default = create;

// src/unit.class.ts
var UnitJSClass = class _UnitJSClass {
  __nodes__ = [];
  static __i18n__ = {
    months: MONTHS,
    days: DAYS
  };
  constructor(...selectors) {
    selectors.forEach((selector) => {
      if (typeof selector === "string") {
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
    SHORTCUT_EVENTS.forEach((e) => {
      _UnitJSClass.prototype[e] = function(fn) {
        if (fn && typeof fn === "function") {
          this.on(e, fn);
        } else {
          this.each((node) => {
            const method = node[e];
            if (typeof method === "function") {
              method.call(node);
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
  addClass = public_exports.addClass;
  append = public_exports.append;
  attr = public_exports.attr;
  css = public_exports.css;
  data = public_exports.data;
  each = public_exports.each;
  first = public_exports.first;
  firstChild = public_exports.firstChild;
  hasClass = public_exports.hasClass;
  html = public_exports.html;
  on = public_exports.on;
  parent = public_exports.parent;
  prepend = public_exports.prepend;
  ready = public_exports.ready;
  remove = public_exports.remove;
  removeClass = public_exports.removeClass;
  text = public_exports.text;
  toggleClass = public_exports.toggleClass;
  value = public_exports.value;
};

// src/methods/static/date.ts
function date(format, timestamp = Date.now(), offset = 0) {
  allOf({ values: [format], typeOf: ["string"] });
  allOf({ values: [offset, timestamp], typeOf: ["number"] });
  if (!format) {
    throw new TypeError("Empty string is not a valid string format");
  }
  const validFormat = {};
  const timestampOffsetMs = offset * 60 * 60 * 1e3;
  const dateObject = new Date(timestamp + timestampOffsetMs);
  validFormat.d = dateObject.getUTCDate().toString().padStart(2, "0");
  validFormat.j = dateObject.getUTCDate();
  validFormat.w = dateObject.getUTCDay();
  validFormat.N = validFormat.w === 0 ? 7 : validFormat.w;
  validFormat.m = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  validFormat.n = dateObject.getUTCMonth() + 1;
  validFormat.Y = dateObject.getUTCFullYear();
  validFormat.y = validFormat.Y.toString().slice(-2);
  validFormat.a = "am";
  validFormat.A = "AM";
  validFormat.G = dateObject.getUTCHours();
  validFormat.H = validFormat.G.toString().padStart(2, "0");
  validFormat.g = validFormat.G === 0 ? 12 : validFormat.G;
  if (validFormat.G > 12) {
    validFormat.a = "pm";
    validFormat.A = "PM";
    validFormat.g = validFormat.G - 12;
  }
  validFormat.h = validFormat.g.toString().padStart(2, "0");
  validFormat.i = dateObject.getUTCMinutes().toString().padStart(2, "0");
  validFormat.s = dateObject.getUTCSeconds().toString().padStart(2, "0");
  validFormat.v = dateObject.getMilliseconds().toString().padStart(3, "0");
  validFormat.l = UnitJSClass.__i18n__.days[validFormat.w];
  validFormat.D = validFormat.l.substring(0, 3);
  validFormat.F = UnitJSClass.__i18n__.months[dateObject.getUTCMonth()];
  validFormat.M = validFormat.F.substring(0, 3);
  const fixedFormat = [...format].reduce((acc, sym) => {
    acc += Object.hasOwn(validFormat, sym) ? validFormat[sym] : sym;
    return acc;
  }, "");
  return fixedFormat;
}
var date_default = date;

// src/methods/static/navigate.ts
function navigate(url) {
  allOf({ values: [url], typeOf: ["string"] });
  window.location = url;
  return window.location;
}
var navigate_default = navigate;

// src/methods/static/i18n/days.ts
function days(days2) {
  allOf({ values: days2, typeOf: ["string"] });
  if (days2.length !== 7) {
    throw new SyntaxError(
      `Expected the days array to have exactly 7 entries, but got ${days2.length}`
    );
  }
  UnitJSClass.__i18n__.days = days2;
}
var days_default = days;

// src/methods/static/i18n/months.ts
function months(months2) {
  allOf({ values: months2, typeOf: ["string"] });
  if (months2.length !== 12) {
    throw new SyntaxError(
      `Expected the months array to have exactly 12 entries, but got ${months2.length}`
    );
  }
  UnitJSClass.__i18n__.months = months2;
}
var months_default = months;

// src/methods/static/i18n/get.ts
function get() {
  return UnitJSClass.__i18n__;
}
var get_default = get;

// src/methods/static/i18n/index.ts
var i18n_default = {
  days: days_default,
  months: months_default,
  get: get_default
};

// src/unit.ts
var UnitJS = (...selectors) => new UnitJSClass(...selectors);
UnitJS.create = static_exports.create;
UnitJS.date = static_exports.date;
UnitJS.navigate = static_exports.navigate;
UnitJS.i18n = static_exports.i18n;
export {
  UnitJS
};
//# sourceMappingURL=unit.js.map