(function(global) {
	if (typeof $ !== 'function') {
		global.$ = global.unit = (...selectors) => new UNIT(selectors);
	} else if(typeof UnitJS !== 'function') {
		global.UnitJS = global.unit = (...selectors) => new UNIT(selectors);
	} else {
		throw new Error(`You are using a library that already uses the dollar sign '$'.`);
	}

	const eventList = [
		'abort', 'afterprint', 'animationend', 'animationiteration', 'animationstart', 'appinstalled', 'auxclick',
		'beforeinstallprompt', 'beforeprint', 'beforeunload', 'blur',
		'cancel', 'canplay', 'canplaythrough', 'change', 'click', 'close', 'contextmenu', 'cuechange',
		'dblclick', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'durationchange',
		'emptied', 'ended', 'error',
		'focus',
		'gotpointercapture',
		'hashchange',
		'input', 'invalid',
		'keydown', 'keypress', 'keyup', 'languagechange',
		'load', 'loadeddata', 'loadedmetadata', 'loadstart', 'lostpointercapture',
		'message', 'messageerror',
		'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel',
		'offline', 'online',
		'pagehide', 'pageshow', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointermove', 'pointerout', 'pointerover', 'pointerup', 'popstate', 'progress',
		'ratechange', 'rejectionhandled', 'reset', 'resize',
		'scroll', 'search', 'seeked', 'seeking', 'select', 'stalled', 'storage', 'submit', 'suspend',
		'timeupdate', 'toggle', 'transitionend',
		'unhandledrejection', 'unload',
		'volumechange',
		'waiting', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend', 'wheel',
	];

	function required(paramName, paramType) {
		throw new Error(`${paramName} param is required and must be <${paramType}>`);
	}

	function camelFromKebab(word) {
		fixedArray = word.split('-').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
		fixedArray[0] = fixedArray[0].toLowerCase();
		return fixedArray.join('');
	}

	class UNIT {
		constructor(selectors) {
			this.nodes = [];
			for(let selector of selectors) {
				if (typeof selector === 'string') {
					let nodes = document.querySelectorAll(selector);
					this.nodes.push(...nodes);
				} else if (selector instanceof HTMLElement) {
					this.nodes.push(selector);
				} else {
					throw new TypeError(`${selector} is not a valid selector nor a HTMLElement`);
				}
			}
			console.log(this);
			return this;
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
			if(typeof className === 'string') {
				this.nodes.forEach((node) => {
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
				this.nodes.forEach((node) => {
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
						this.nodes.forEach((node) => {
							node.style[property] = value;
						});

						return this;
					}
					
					throw new TypeError(`${value} is not a valid string css value`);
				}
				
				return this.nodes[0].style[property];
			}

			throw new TypeError(`${property} is not a valid string css property`);
		}

		addClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				this.nodes.forEach((node) => {
					node.classList.add(className);
				});

				return this;
			}

			throw new TypeError(`${className} is not a valid string className`);
		}

		hasClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				return this.nodes[0].classList.contains(className);
			}

			throw new TypeError(`${className} is not a valid string className`);
		}

		removeClass(className = required('ClassName', 'String')) {
			if (typeof className === 'string') {
				this.nodes.forEach((node) => {
					node.classList.remove(className);
				});
				
				return this;
			}
			
			throw new TypeError(`${className} is not a valid string classname`);
		}

		html(html = false, append = false) {
			if (typeof html === 'string' || html instanceof HTMLElement) {
				this.nodes.forEach((node) => {
					if (append) {
						node.innerHTML += html;
					} else {
						node.innerHTML = html;
					}
				});

				return this;
			} else if (html === false) {
				return this.nodes[0].innerHTML;
			}
			
			throw new TypeError(`${html} is not a valid string markup`);
		}

		data(dataProperty = required('Data', 'String'), value = false) {
			if (typeof dataProperty === 'string') {
				if (value === false) {
					return this.nodes[0].dataset[dataProperty];
				}
				
				dataPropertyCamel = camelFromKebab(dataProperty);
				this.nodes.forEach((node) => {
					node.dataset[dataPropertyCamel] = `${value}`;
				});

				return this;
			}
	
			throw new TypeError(`${dataProperty} is not a valid string dataname`);
		}

		text(text = false) {
			if(typeof text === 'string') {
				this.nodes.forEach((node) => {
					node.textContent = text;
				});

				return this;
			} else if(text === false)
				return this.nodes[0].textContent;
			
			throw new TypeError(`${text} is not a valid string text`);
		}

		attr(attribute = required('Attribute', 'String'), value = false) {
			if(typeof attribute === 'string') {
				if(value === false) {
					if(this.nodes[0].hasAttribute(attribute))
						return this.nodes[0].getAttribute(attribute);
					else
						return false;
				}
				
				this.nodes.forEach((node) => {
					node.setAttribute(attribute, value);
				});

				return this;				
			}

			throw new TypeError(`${attribute} is not a valid string attribute`);
		}

		first() { return this.nodes[0] }

		firstChild() { return this.nodes[0].firstChild }

		remove(element = required('Element', 'HTMLElement')) {
			if (element instanceof HTMLElement) {
				this.nodes.forEach((node) => {
					node.removeChild(element);
				});

				return this;
			}

			throw new TypeError(`${element} is not a valid node`);
		}

		parent() { return this.nodes[0].parentNode }

		append(element = required('Element', 'HTMLElement/String')) {
			if (element instanceof HTMLElement || typeof element === 'string') {
				if (typeof element === 'string') {
					element = document.createTextNode(element);
				}
				
				this.nodes.forEach((node) => {
					node.appendChild(element);
				});

				return this;
			}

			throw new TypeError(`${element} is not a valid node`);
		}

		value(value = false) {
			if (value !== false) {
				this.nodes.forEach((node) => {
					node.value = value;
				});

				return this;
			} else if (this.nodes[0].value) {
				return this.nodes[0].value;
			}

			throw new TypeError(`Unknown property: ${value}`);
		}
	}
	
	$.plugin = UNIT.prototype;

	eventList.forEach((event) => {
		$.plugin[event] = function(fn) {
			if (typeof fn === 'function') {
				this.on(event, fn);
			} else {
				this.nodes.forEach((node) => {
					node[event]();
				});
			}

			return this;
		}
	});

	$.ready = function(fn = required('Function', 'Function')) {
		if(typeof fn == 'function')
			document.addEventListener('DOMContentLoaded', fn, false);
		else
			throw new TypeError(`${fn} is not a valid function`);
	};
	
	$.create = function(element = required('ElementName', 'String')) { return document.createElement(element); };
	$.jump = (page = required('Page', 'String')) => location.href = page;
	$.reload = () => location.reload();
	
	$.pad = function(str = required('ParamString', 'String'), padStr = required('StringPad', 'String'), length = required('Length', 'Number'), lpad = false) {
		for(let j = str.length; j < length; j++) {
			if(lpad !== false)
				str = padStr + str;
			else
				str += padStr;
		}
		return str;
	};
	
	$.lpad = function(str = required('ParamString', 'String'), padStr = '0', length = 2) { return $.pad(str, padStr, length, true); };
	$.rpad = function(str = required('ParamString', 'String'), padStr = '0', length = 2) { return $.pad(str, padStr, length); };
	
	$.i18n = {
		months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	};
	
	$.dateformat = function(format = required('DateFormat', 'String'), timestamp = (new Date()).getTime()) {
		if(typeof format == 'string') {
			if(isNaN(timestamp))
				throw new TypeError(`${timestamp} is not a valid number timestamp`);
			
			if(!Array.isArray($.i18n.months) || $.i18n.months.length != 12)
				throw new TypeError(`${$.i18n.months} is not a valid array of months. Use $.i18n.months to set it.`);
			
			if(!Array.isArray($.i18n.days) || $.i18n.days.length != 7)
				throw new TypeError(`${$.i18n.days} is not a valid array of week days. Use $.i18n.days to set it.`);
			
			let validFormat = {};
			let dateObject = new Date(timestamp);
			
			validFormat['d'] = $.lpad(dateObject.getDate().toString(), '0', 2);
			validFormat['j'] = dateObject.getDate();
			validFormat['w'] = dateObject.getDay();
			validFormat['N'] = validFormat['w'] + 1;
			validFormat['m'] = $.lpad((dateObject.getMonth() + 1).toString(), '0', 2);
			validFormat['n'] = dateObject.getMonth() + 1;
			validFormat['Y'] = dateObject.getFullYear();
			validFormat['y'] = validFormat['Y'].toString().substring(-2);
			
			validFormat['a'] = 'am';
			validFormat['A'] = 'AM';
			validFormat['G'] = dateObject.getHours();
			validFormat['H'] = $.lpad(validFormat['G'].toString(), '0', 2);
			validFormat['g'] = dateObject.getHours() == 0 ? 12 : dateObject.getHours();
				
			if(dateObject.getHours() > 12) {
				validFormat['a'] = 'pm';
				validFormat['A'] = 'PM';
				validFormat['g'] = dateObject.getHours() == 0 ? 12 : dateObject.getHours() - 12;
			}
			
			validFormat['h'] = $.lpad(validFormat['g'].toString(), '0', 2);
			validFormat['i'] = $.lpad(dateObject.getMinutes().toString(), '0', 2);
			validFormat['s'] = $.lpad(dateObject.getSeconds().toString(), '0', 2);
			validFormat['v'] = dateObject.getMilliseconds();
			
			validFormat['l'] = $.i18n.days[dateObject.getDay()];
			validFormat['D'] = validFormat['l'].substring(0, 3);
			validFormat['F'] = $.i18n.months[dateObject.getMonth()];
			validFormat['M'] = validFormat['F'].substring(0, 3);
			
			let fixedFormat = '';
			for(let sym of [...format]) 
				fixedFormat += validFormat.hasOwnProperty(sym) ? validFormat[sym] : sym;
			
			return fixedFormat;
		}
		throw new TypeError(`${format} is not a valid string format`);
	};
}(window));