/*
Copyright (c) 2018 Victor Cruz <vmcruz16@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.UnitJS = (function UnitJSSingleton(global) {
  const eventList = Object.keys(global).filter(e => e.match(/^on/)).map(e => e.replace('on', ''));

  function required(paramName, paramType) {
    throw new Error(`expected ${paramName} param to be [ ${paramType} ]`);
  }

  function camelFromKebab(word) {
    const fixedArray = word.split('-').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    fixedArray[0] = fixedArray[0].toLowerCase();
    return fixedArray.join('');
  }

  class UNIT {
    constructor(selectors) {
      this.nodes = [];

      selectors.forEach((selector) => {
        if (typeof selector === 'string') {
          try {
            const nodes = document.querySelectorAll(selector);
            this.nodes.push(...nodes);
          } catch (e) {
            throw new SyntaxError(`${selector} is not a valid DOM selector`);
          }
        } else if (selector instanceof HTMLElement || selector instanceof HTMLDocument) {
          this.nodes.push(selector);
        } else {
          throw new TypeError(`${selector} is not a String selector nor a HTMLElement`);
        }
      });
    }

    get length() {
      return this.nodes.length;
    }

    each(...fns) {
      this.nodes.forEach((node, index, nodeArray) => {
        fns.forEach((fn) => {
          if (typeof fn === 'function') {
            fn(node, index, nodeArray);
          } else {
            throw new TypeError(`${fn} is not a valid function`);
          }
        });
      });

      return this;
    }

    toggleClass(className = required('ClassName', 'String')) {
      if (typeof className === 'string' && className) {
        this.nodes.forEach(node => node.classList.toggle(className));
        return this;
      }

      throw new TypeError(`${className} is not a valid string className`);
    }

    on(event = required('Event', 'String'), ...fns) {
      if (typeof event === 'string' && eventList.includes(event)) {
        const areFunctions = fns.every(fn => typeof fn === 'function');
        if (!areFunctions) throw new TypeError('Second or further params are not valid functions');

        this.nodes.forEach((node) => {
          fns.forEach(fn => node.addEventListener(event, fn, false));
        });

        return this;
      }

      throw new TypeError(`${event} is not a valid event`);
    }

    css(property = required('Property', 'String'), value = false) {
      if (typeof property === 'string' && property) {
        if (value) {
          if (typeof value === 'string') {
            this.nodes.forEach((node) => {
              node.style[camelFromKebab(property)] = value;
            });

            return this;
          }

          throw new TypeError(`${value} is not a string value`);
        }

        return this.nodes[0].style[property];
      }

      throw new TypeError(`${property} is not a string property`);
    }

    addClass(className = required('ClassName', 'String')) {
      if (typeof className === 'string' && className) {
        this.nodes.forEach((node) => {
          node.classList.add(className);
        });

        return this;
      }

      throw new TypeError(`${className} is not a string className`);
    }

    removeClass(className = required('ClassName', 'String')) {
      if (typeof className === 'string' && className) {
        this.nodes.forEach((node) => {
          node.classList.remove(className);
        });

        return this;
      }

      throw new TypeError(`${className} is not a string className`);
    }

    haveClass(className = required('ClassName', 'String')) {
      if (typeof className === 'string' && className) {
        return this.nodes.every(node => node.classList.contains(className));
      }

      throw new TypeError(`${className} is not a string className`);
    }

    html(html = false, append = false) {
      if (html === false) return this.nodes[0].innerHTML;

      if (typeof html !== 'string' && !(html instanceof HTMLElement)) {
        throw new TypeError(`${html} is not a string nor a HTMLElement`);
      }

      let strHtml = html;
      if (html instanceof HTMLElement) strHtml = html.innerHTML;

      this.nodes.forEach((node) => {
        if (append) {
          node.innerHTML += strHtml;
        } else {
          node.innerHTML = strHtml;
        }
      });

      return this;
    }

    data(dataProperty = required('Data', 'String'), value = false) {
      if (typeof dataProperty === 'string' && dataProperty) {
        if (value === false) return this.nodes[0].dataset[dataProperty];

        const dataPropertyCamel = camelFromKebab(dataProperty);
        this.nodes.forEach((node) => {
          node.dataset[dataPropertyCamel] = `${value}`;
        });

        return this;
      }

      throw new TypeError(`${dataProperty} is not a string data property`);
    }

    text(text = false) {
      if (typeof text !== 'string' && text !== false) {
        throw new TypeError(`${text} is not a string`);
      }

      if (typeof text === 'string') {
        this.nodes.forEach((node) => {
          node.textContent = text;
        });

        return this;
      }

      return this.nodes[0].textContent;
    }

    attr(attribute = required('Attribute', 'String'), value = false) {
      if (typeof attribute === 'string' && attribute) {
        if (value === false) {
          if (this.nodes[0].hasAttribute(attribute)) {
            return this.nodes[0].getAttribute(attribute);
          }

          return false;
        }

        this.nodes.forEach((node) => {
          node.setAttribute(attribute, value);
        });

        return this;
      }

      throw new TypeError(`${attribute} is not a string attribute`);
    }

    first() {
      if (!this.nodes.length) return false;
      return this.nodes[0];
    }

    firstChild() {
      if (!this.nodes.length) return false;
      return this.nodes[0].firstChild;
    }

    remove(element = required('Element', 'HTMLElement')) {
      if (element instanceof HTMLElement) {
        this.nodes.forEach((node) => {
          try {
            node.removeChild(element);
          } catch (e) {
            throw new SyntaxError(`${element} is not a child of this node`);
          }
        });

        return this;
      }

      throw new TypeError(`${element} is not a valid node`);
    }

    parent() {
      if (!this.nodes.length) return false;
      return this.nodes[0].parentNode;
    }

    append(element = required('Element', 'HTMLElement | String')) {
      if (element instanceof HTMLElement || typeof element === 'string') {
        let htmlElement = element;
        if (typeof element === 'string') {
          htmlElement = document.createTextNode(element);
        }

        this.nodes.forEach((node) => {
          node.appendChild(htmlElement);
        });

        return this;
      }

      throw new TypeError(`${element} is not a valid node`);
    }

    prepend(element = required('Element', 'HTMLElement | String')) {
      if (element instanceof HTMLElement || typeof element === 'string') {
        let htmlElement = element;
        if (typeof element === 'string') {
          htmlElement = document.createTextNode(element);
        }

        this.nodes.forEach((node) => {
          node.insertBefore(htmlElement, node.firstChild);
        });

        return this;
      }

      throw new TypeError(`${element} is not a valid node`);
    }

    value(value = false) {
      if (typeof value === 'string') {
        this.nodes.forEach((node) => {
          node.value = value;
        });

        return this;
      }

      return this.nodes[0].value;
    }

    ready(fn = required('Function', 'Function')) {
      if (typeof fn === 'function') {
        this.nodes.forEach((node) => {
          node.addEventListener('load', fn, false);
        });
        return this;
      }

      throw new TypeError(`${fn} is not a valid function`);
    }
  }

  function install(globalVariable) {
    const $$ = (...selectors) => new UNIT(selectors);

    $$.create = (element = required('Element', 'String')) => {
      if (typeof element === 'string' && element) {
        return document.createElement(element);
      }

      return false;
    };

    $$.jump = (url = required('Url', 'String')) => {
      if (typeof url === 'string' && url) {
        global.location = url;
        return global.location;
      }

      return false;
    };

    function pad(str, padStr, length, lpad = false) {
      let paddedString = str;
      if (paddedString) {
        for (let j = str.length; j < length; j += 1) {
          if (lpad !== false) {
            paddedString = padStr + paddedString;
          } else {
            paddedString += padStr;
          }
        }
      }

      return paddedString;
    };

    $$.lpad = (str = required('ParamString', 'String'), padStr = '0', length = 2) => pad(str, padStr, length, true);

    $$.rpad = (str = required('ParamString', 'String'), padStr = '0', length = 2) => pad(str, padStr, length);

    $$.i18n = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };

    $$.date = (format = required('DateFormat', 'String'), timestamp = (new Date()).getTime()) => {
      if (typeof format === 'string' && format) {
        if (typeof timestamp !== 'number') {
          throw new TypeError(`${timestamp} is not a valid number timestamp`);
        }

        if (!Array.isArray($$.i18n.months) || $$.i18n.months.length !== 12) {
          throw new TypeError(`${globalVariable}.i18n.months is not a valid array of months. Use ${globalVariable}.i18n.months to set it.`);
        }

        if (!Array.isArray($$.i18n.days) || $$.i18n.days.length !== 7) {
          throw new TypeError(`${globalVariable}.i18n.days is not a valid array of week days. Use ${globalVariable}.i18n.days to set it.`);
        }

        const validFormat = {};
        const dateObject = new Date(timestamp);

        validFormat.d = $$.lpad(dateObject.getDate().toString(), '0', 2);
        validFormat.j = dateObject.getDate();
        validFormat.w = dateObject.getDay();
        validFormat.N = validFormat.w + 1;
        validFormat.m = $$.lpad((dateObject.getMonth() + 1).toString(), '0', 2);
        validFormat.n = dateObject.getMonth() + 1;
        validFormat.Y = dateObject.getFullYear();
        validFormat.y = validFormat.Y.toString().substr(-2);

        validFormat.a = 'am';
        validFormat.A = 'AM';
        validFormat.G = dateObject.getHours();
        validFormat.H = $$.lpad(validFormat.G.toString(), '0', 2);
        validFormat.g = dateObject.getHours() === 0 ? 12 : dateObject.getHours();

        if (dateObject.getHours() > 12) {
          validFormat.a = 'pm';
          validFormat.A = 'PM';
          validFormat.g = dateObject.getHours() === 0 ? 12 : dateObject.getHours() - 12;
        }

        validFormat.h = $$.lpad(validFormat.g.toString(), '0', 2);
        validFormat.i = $$.lpad(dateObject.getMinutes().toString(), '0', 2);
        validFormat.s = $$.lpad(dateObject.getSeconds().toString(), '0', 2);
        validFormat.v = dateObject.getMilliseconds();

        validFormat.l = $$.i18n.days[dateObject.getDay()];
        validFormat.D = validFormat.l.substring(0, 3);
        validFormat.F = $$.i18n.months[dateObject.getMonth()];
        validFormat.M = validFormat.F.substring(0, 3);

        let fixedFormat = '';
        [...format].forEach((sym) => {
          fixedFormat += validFormat.hasOwnProperty(sym) ? validFormat[sym] : sym;
        });

        return fixedFormat;
      }
      throw new TypeError(`${format} is not a valid string format`);
    };

    $$.version = () => '1.0.0';

    global[globalVariable] = $$;
    return $$;
  }

  eventList.forEach((event) => {
    UNIT.prototype[event] = (fn) => {
      if (typeof fn === 'function') {
        this.on(event, fn);
      } else {
        this.nodes.forEach((node) => {
          node[event]();
        });
      }

      return this;
    };
  });

  return { install };
}(window));
