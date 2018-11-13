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

const UnitJS = (function(global) {
	function required(paramName, paramType) {
		throw new Error(`expects ${paramName} param to be [ ${paramType} ]`);
	}

	function camelFromKebab(word) {
		fixedArray = word.split('-').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
		fixedArray[0] = fixedArray[0].toLowerCase();
		return fixedArray.join('');
	}
	class UNIT {
		constructor(selectors) {
			this._nodes = [];
			for(let selector of selectors) {
				if (typeof selector === 'string') {
					let nodes = document.querySelectorAll(selector);
					this._nodes.push(...nodes);
				} else if (selector instanceof HTMLElement) {
					this._nodes.push(selector);
				} else {
					throw new TypeError(`${selector} is not a valid selector nor a HTMLElement`);
				}
			}
			return this;
		}
		
		get length() {
			return this._nodes.length;
		}
		
		each(...fns) {
			this._nodes.forEach((node, index, nodeArray) => {
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
			if(typeof className === 'string') {
				this._nodes.forEach((node) => {
					if (node.classList.contains(className)) {
						node.classList.remove(className);
					} else {
						node.classList.add(className);
					}
				});
				
				return this;
			}
			
			throw new TypeError(`${className} is not a valid string className`);
		}
		
		
		on(event = required('Event', 'String'), ...fns) {
			if(typeof event === 'string' && eventList.includes(event)) {
				this._nodes.forEach((node) => {
					fns.forEach((fn) => {
						if (typeof fn === 'function') {
							node.addEventListener(event, fn, false);
						} else {
							throw new TypeError(`${fn} is not a valid function`);
						}
					});
				});
				
				return this;
			}
			
			throw new TypeError(`${events} is not a valid event`);
		}
		
		css(property = required('Property', 'String'), value = false) {
			if(typeof property === 'string') {
				if(value) {
					if(typeof value === 'string') {
						this._nodes.forEach((node) => {
							node.style[property] = value;
						});
						
						return this;
					}
					
					throw new TypeError(`${value} is not a valid string css value`);
				}
				
				return this._nodes[0].style[property];
			}
			
			throw new TypeError(`${property} is not a valid string css property`);
		}
		
		addClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				this._nodes.forEach((node) => {
					node.classList.add(className);
				});
				
				return this;
			}
			
			throw new TypeError(`${className} is not a valid string className`);
		}
		
		hasClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				return this._nodes[0].classList.contains(className);
			}
			
			throw new TypeError(`${className} is not a valid string className`);
		}
		
		removeClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				this._nodes.forEach((node) => {
					node.classList.remove(className);
				});
				
				return this;
			}
			
			throw new TypeError(`${className} is not a valid string classname`);
		}
		
		html(html = false, append = false) {
			if (typeof html === 'string' || html instanceof HTMLElement) {
				this._nodes.forEach((node) => {
					if (append) {
						node.innerHTML += html;
					} else {
						node.innerHTML = html;
					}
				});
				
				return this;
			} else if (html === false) {
				return this._nodes[0].innerHTML;
			}
			
			throw new TypeError(`${html} is not a valid string markup`);
		}
		
		data(dataProperty = required('Data', 'String'), value = false) {
			if (typeof dataProperty === 'string') {
				if (value === false) {
					return this._nodes[0].dataset[dataProperty];
				}
				
				dataPropertyCamel = camelFromKebab(dataProperty);
				this._nodes.forEach((node) => {
					node.dataset[dataPropertyCamel] = `${value}`;
				});
				
				return this;
			}
			
			throw new TypeError(`${dataProperty} is not a valid string dataname`);
		}
		
		text(text = false) {
			if(typeof text === 'string') {
				this._nodes.forEach((node) => {
					node.textContent = text;
				});
				
				return this;
			} else if(text === false)
			return this._nodes[0].textContent;
			
			throw new TypeError(`${text} is not a valid string text`);
		}
		
		attr(attribute = required('Attribute', 'String'), value = false) {
			if(typeof attribute === 'string') {
				if(value === false) {
					if(this._nodes[0].hasAttribute(attribute))
					return this._nodes[0].getAttribute(attribute);
					else
					return false;
				}
				
				this._nodes.forEach((node) => {
					node.setAttribute(attribute, value);
				});
				
				return this;				
			}
			
			throw new TypeError(`${attribute} is not a valid string attribute`);
		}
		
		first() { return this._nodes[0] }
		
		firstChild() { return this._nodes[0].firstChild }
		
		remove(element = required('Element', 'HTMLElement')) {
			if (element instanceof HTMLElement) {
				this._nodes.forEach((node) => {
					node.removeChild(element);
				});
				
				return this;
			}
			
			throw new TypeError(`${element} is not a valid node`);
		}
		
		parent() { return this._nodes[0].parentNode }
		
		append(element = required('Element', 'HTMLElement/String')) {
			if (element instanceof HTMLElement || typeof element === 'string') {
				if (typeof element === 'string') {
					element = document.createTextNode(element);
				}
				
				this._nodes.forEach((node) => {
					node.appendChild(element);
				});
				
				return this;
			}
			
			throw new TypeError(`${element} is not a valid node`);
		}
		
		value(value = false) {
			if (value !== false) {
				this._nodes.forEach((node) => {
					node.value = value;
				});
				
				return this;
			} else if (this._nodes[0].value) {
				return this._nodes[0].value;
			}
			
			throw new TypeError(`Unknown property: ${value}`);
		}
	}

	function install(globalVariable) {
		const $$ = (...selectors) => new UNIT(selectors);

		$$.ready = function(fn = required('Function', 'Function')) {
			if(typeof fn == 'function')
				document.addEventListener('DOMContentLoaded', fn, false);
			else
				throw new TypeError(`${fn} is not a valid function`);
		};
		
		$$.create = function(element = required('ElementName', 'String')) { return document.createElement(element); };
		$$.jump = (page = required('Page', 'String')) => location.href = page;
		$$.reload = () => location.reload();
		
		$$.pad = function(str = required('ParamString', 'String'), padStr = required('StringPad', 'String'), length = required('Length', 'Number'), lpad = false) {
			for(let j = str.length; j < length; j++) {
				if(lpad !== false)
					str = padStr + str;
				else
					str += padStr;
			}
			return str;
		};
		
		$$.lpad = function(str = required('ParamString', 'String'), padStr = '0', length = 2) { return $$.pad(str, padStr, length, true); };
		$$.rpad = function(str = required('ParamString', 'String'), padStr = '0', length = 2) { return $$.pad(str, padStr, length); };
		
		$$.i18n = {
			months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		};
		
		$$.dateformat = function(format = required('DateFormat', 'String'), timestamp = (new Date()).getTime()) {
			if(typeof format == 'string') {
				if(isNaN(timestamp))
					throw new TypeError(`${timestamp} is not a valid number timestamp`);
				
				if(!Array.isArray($$.i18n.months) || $$.i18n.months.length != 12)
					throw new TypeError(`${$$.i18n.months} is not a valid array of months. Use $$.i18n.months to set it.`);
				
				if(!Array.isArray($$.i18n.days) || $$.i18n.days.length != 7)
					throw new TypeError(`${$$.i18n.days} is not a valid array of week days. Use $$.i18n.days to set it.`);
				
				let validFormat = {};
				let dateObject = new Date(timestamp);
				
				validFormat['d'] = $$.lpad(dateObject.getDate().toString(), '0', 2);
				validFormat['j'] = dateObject.getDate();
				validFormat['w'] = dateObject.getDay();
				validFormat['N'] = validFormat['w'] + 1;
				validFormat['m'] = $$.lpad((dateObject.getMonth() + 1).toString(), '0', 2);
				validFormat['n'] = dateObject.getMonth() + 1;
				validFormat['Y'] = dateObject.getFullYear();
				validFormat['y'] = validFormat['Y'].toString().substring(-2);
				
				validFormat['a'] = 'am';
				validFormat['A'] = 'AM';
				validFormat['G'] = dateObject.getHours();
				validFormat['H'] = $$.lpad(validFormat['G'].toString(), '0', 2);
				validFormat['g'] = dateObject.getHours() == 0 ? 12 : dateObject.getHours();
					
				if(dateObject.getHours() > 12) {
					validFormat['a'] = 'pm';
					validFormat['A'] = 'PM';
					validFormat['g'] = dateObject.getHours() == 0 ? 12 : dateObject.getHours() - 12;
				}
				
				validFormat['h'] = $$.lpad(validFormat['g'].toString(), '0', 2);
				validFormat['i'] = $$.lpad(dateObject.getMinutes().toString(), '0', 2);
				validFormat['s'] = $$.lpad(dateObject.getSeconds().toString(), '0', 2);
				validFormat['v'] = dateObject.getMilliseconds();
				
				validFormat['l'] = $$.i18n.days[dateObject.getDay()];
				validFormat['D'] = validFormat['l'].substring(0, 3);
				validFormat['F'] = $$.i18n.months[dateObject.getMonth()];
				validFormat['M'] = validFormat['F'].substring(0, 3);
				
				let fixedFormat = '';
				for(let sym of [...format]) 
					fixedFormat += validFormat.hasOwnProperty(sym) ? validFormat[sym] : sym;
				
				return fixedFormat;
			}
			throw new TypeError(`${format} is not a valid string format`);
		};
	
		$$.isUnitJS = function() {
			return $$().constructor.name === 'UNIT';
		}

		global[globalVariable] = $$;
		return $$;
	}

	Object.keys(window).filter((e) => e.match(/^on/)).forEach((event) => {
		UNIT.prototype[event] = function(fn) {
			if (typeof fn === 'function') {
				this.on(event, fn);
			} else {
				this._nodes.forEach((node) => {
					node[event]();
				});
			}
			
			return this;
		}
	});
	
	return { install };
})(window);