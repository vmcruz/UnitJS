/**
 * Sets the localized month names.
 *
 * @param {string[]} months - Array of 12 month names.
 * @returns {void}
 * @throws {RequiredType} If input is not an array of strings.
 * @throws {SyntaxError} If input is not an array of 12 entries.
 */
declare function months(months: string[]): void;

/**
 * Sets the localized day names.
 *
 * @param {string[]} days - Array of 7 day names.
 * @returns {void}
 * @throws {RequiredType} If input is not an array of strings.
 * @throws {SyntaxError} If input does not have exactly 7 entries.
 */
declare function days(days: string[]): void;

declare class UnitJSClass {
    __nodes__: any[];
    [k: string]: any;
    static __i18n__: {
        months: string[];
        days: string[];
    };
    constructor(...selectors: any[]);
    get length(): number;
    get nodes(): any[];
    addClass: typeof addClass;
    append: typeof append;
    attr: typeof attr;
    css: typeof css;
    data: typeof data;
    each: typeof each;
    first: typeof first;
    firstChild: typeof firstChild;
    hasClass: typeof hasClass;
    html: typeof html;
    on: typeof on;
    parent: typeof parent;
    prepend: typeof prepend;
    ready: typeof ready;
    remove: typeof remove;
    removeClass: typeof removeClass;
    text: typeof text;
    toggleClass: typeof toggleClass;
    value: typeof value;
}

/**
 * Adds one or more CSS classes to each node.
 *
 * @this {UnitJSClass}
 * @param {...string} classNames - One or more class names to add.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any className is not a string.
 */
declare function addClass(this: UnitJSClass, ...classNames: string[]): UnitJSClass;

/**
 * Appends a DOM element or a text node (from string) to each node.
 *
 * @param {string | Element} element - A string to create a text node, or a DOM node to append.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If the input is neither a string nor a Node.
 */
declare function append(this: UnitJSClass, element: string | Element): UnitJSClass;

/**
 * Gets or sets the value of a specified attribute on DOM nodes in the current context.
 *
 * @param {string} attribute - The name of the attribute to get or set.
 * @param {string} [value] - The value to assign. If omitted, the current value is returned.
 * @returns {string|this} Returns the attribute value, or the current instance for chaining.
 * @throws {RequiredType} If `attribute` is not a string or `value` (when provided) is not a string.
 */
declare function attr(this: UnitJSClass, attribute: string, value?: string): any;

/**
 * Gets or sets a CSS property on all nodes in the current context.
 *
 * @param {string} property - The CSS property name (in camelCase or kebab-case).
 * @param {string} [value] - The value to set for the CSS property. If omitted, acts as a getter.
 * @returns {string|this} The computed style value, or the current instance for chaining.
 * @throws {RequiredType} If `property` is not a string or `value` (when provided) is not a string.
 */
declare function css(this: UnitJSClass, property: string, value?: string): string | UnitJSClass;

/**
 * Gets or sets a data attribute (from `dataset`) on all nodes in the current context.
 *
 * @param {string} property - The camelCase name of the data attribute (without 'data-' prefix).
 * @param {string} [value] - The value to set for the data attribute. If omitted, acts as a getter.
 * @returns {string|this} The data attribute value, or the current instance for chaining.
 * @throws {RequiredType} If `property` is not a string or `value` (when provided) is not a string.
 */
declare function data(this: UnitJSClass, property: string, value?: string): any;

type FunctionSignature = (
  node: any,
  index: number,
  nodeArray: any[]
) => void;

/**
 * Executes one or more callback functions on each node.
 *
 * @param {...Function} fns - One or more functions to execute on each node. Each function
 *   should accept `(node, index, nodesArray)` as arguments.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any argument is not a function.
 */
declare function each(this: UnitJSClass, ...fns: FunctionSignature[]): UnitJSClass;

/**
 * Returns the first node in the collection.
 *
 * @returns {any|null} The first node, or `null` if empty.
 */
declare function first(this: UnitJSClass): any;

/**
 * Returns the first child node of the first element.
 *
 * @returns {Node|null} The first child node, or `null` if none.
 */
declare function firstChild(this: UnitJSClass): any;

/**
 * Checks if nodes have the specified class.
 *
 * @param {string} className - The class name to check.
 * @param {boolean} [strict=true] - If `true`, all nodes must have the class; otherwise, some.
 * @returns {boolean} Whether the nodes meet the class condition.
 * @throws {RequiredType} If `className` is not a string.
 */
declare function hasClass(this: UnitJSClass, className: string, strict?: boolean): boolean;

/**
 * Gets or sets the HTML content of nodes.
 *
 * @param {string|HTMLElement} [html] - HTML string or element to set or append.
 * @param {boolean} [append=false] - If `true`, appends instead of replacing.
 * @returns {string|this} HTML string if getting, or the current instance for chaining if setting.
 * @throws {RequiredType} If `html` is provided and is not a string or HTMLElement.
 */
declare function html(this: UnitJSClass, html?: string | HTMLElement, append?: boolean): any;

/**
 * Attaches one or more event listeners to all nodes.
 *
 * @param {string} event - The event type to listen for.
 * @param {...Function} fns - One or more handler functions.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `event` is not a string or any handler is not a function.
 */
declare function on(this: UnitJSClass, event: keyof HTMLElementEventMap, ...fns: ((ev: Event) => void)[]): UnitJSClass;

/**
 * Returns the parent node of the first element.
 *
 * @returns {HTMLElement|null} The parent node, or `null` if empty.
 */
declare function parent(this: UnitJSClass): any;

/**
 * Prepends a DOM element or a text node (from string) to each node.
 *
 * @param {string | HTMLElement} element - A string to create a text node, or a DOM node to prepend.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If the input is neither a string nor a Node.
 */
declare function prepend(this: UnitJSClass, element: string | HTMLElement): UnitJSClass;

/**
 * Adds a 'load' event listener to each node.
 * Useful for elements like images, iframes, and window.
 *
 * @param {Function} fn - The handler for the 'load' event.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `fn` is not a function.
 */
declare function ready(this: UnitJSClass, fn: (ev: Event) => void): UnitJSClass;

/**
 * Removes a specified child element from each node.
 *
 * @param {Element} element - The child element to remove.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `element` is not an Element.
 */
declare function remove(this: UnitJSClass, element: Element): UnitJSClass;

/**
 * Removes one or more classes from all nodes.
 *
 * @param {...string} classNames - One or more class names to remove.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any class name is not a string.
 */
declare function removeClass(this: UnitJSClass, ...classNames: string[]): UnitJSClass;

/**
 * Gets or sets the text content of nodes.
 *
 * @param {string} [text] - The text to set.
 * @returns {string|this} The text content, or the current instance for chaining if setting.
 * @throws {RequiredType} If `text` is provided and is not a string.
 */
declare function text(this: UnitJSClass, text?: string): any;

/**
 * Toggles one or more classes on all nodes.
 *
 * @param {...string} classNames - Classes to toggle.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any class name is not a string.
 */
declare function toggleClass(this: UnitJSClass, ...classNames: string[]): UnitJSClass;

/**
 * Gets or sets the `value` property of nodes.
 *
 * @param {any} [value] - The value to set.
 * @returns {string|this} The value if getting, or the current instance for chaining if setting.
 */
declare function value(this: UnitJSClass, value?: any): string | UnitJSClass;

/**
 * Creates a new DOM element by tag name.
 *
 * @param {string} element - The tag name of the element to create.
 * @returns {HTMLElement} The created element.
 * @throws {RequiredType} If `element` is not a string.
 */
declare function create(element: string): HTMLElement;

/**
 * Formats a UTC timestamp into a custom string using PHP-style date format symbols.
 *
 * Inspired by PHP's `date()` function, this method formats a date based on a given format string,
 * a UNIX timestamp (in milliseconds), and an optional UTC offset (in hours). It supports
 * localization via `this.days` and `this.months` static methods.
 *
 * Supported format characters:
 * - `d` – Day of the month, 2 digits (e.g. "01" to "31")
 * - `j` – Day of the month without leading zeros (1 to 31)
 * - `w` – Day of the week (0 = Sunday to 6 = Saturday)
 * - `N` – ISO-8601 weekday number (1 = Monday to 7 = Sunday)
 * - `l` – Full name of the day (from `this.__i18n__.days`)
 * - `D` – Short name of the day (first 3 letters of `l`)
 * - `m` – Month number with leading zeros (01 to 12)
 * - `n` – Month number without leading zeros (1 to 12)
 * - `F` – Full month name (from `this.__i18n__.months`)
 * - `M` – Short month name (first 3 letters of `F`)
 * - `Y` – Full 4-digit year (e.g. "2025")
 * - `y` – Last two digits of the year (e.g. "25")
 * - `G` – 24-hour format without leading zeros (0 to 23)
 * - `H` – 24-hour format with leading zeros (00 to 23)
 * - `g` – 12-hour format without leading zeros (1 to 12)
 * - `h` – 12-hour format with leading zeros (01 to 12)
 * - `a` – Lowercase am/pm
 * - `A` – Uppercase AM/PM
 * - `i` – Minutes with leading zeros (00 to 59)
 * - `s` – Seconds with leading zeros (00 to 59)
 * - `v` – Milliseconds with leading zeros (000 to 999)
 *
 * Any character not recognized as a formatting symbol will be passed through literally.
 *
 * @param {string} format - The PHP-style format string to use.
 * @param {number} [timestamp=Date.now()] - The timestamp to format (in milliseconds).
 * @param {number} [offset=0] - UTC offset in hours (e.g. `-5` for GMT-5).
 * @throws {TypeError} If `this.__i18n__.months` is not a valid array of 12 items
 * or `this.__i18n__.days` of 7.
 * @throws {RequiredType} If invalid argument types are passed to the function.
 * @returns {string} The formatted date string.
 */
declare function date(format: string, timestamp?: number, offset?: number): string;

/**
 * Navigates to the specified URL.
 *
 * @param {string} url - The URL to navigate to.
 */
declare function navigate(url: string): Location;

declare const UnitJS: {
    (...selectors: any[]): UnitJSClass;
    create: typeof create;
    date: typeof date;
    navigate: typeof navigate;
    i18n: {
        days: typeof days;
        months: typeof months;
    };
};

export { UnitJS };
