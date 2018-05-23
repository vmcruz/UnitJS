(function() {
	$ = (...selectors) => new UNIT(selectors);
	
	let UNIT = function(selectors) {
		this.length = 0;
		for(let selector of selectors) {
			if(typeof selector == 'string') {
				let nodes = document.querySelectorAll(selector);
				for(let node of nodes)
					this[this.length++] = node;
			} else
				this[this.length++] = selector;
		}
		return this;
	};
	
	$.fn = UNIT.prototype;
	
	UNIT.prototype = {
		each : function(...f) {
			for(let i = 0; i < this.length; i++) {
				for(let fn of f) {
					if(typeof fn == 'function')
						fn(this[i], i);
					else
						throw new TypeError(`${fn} is not a valid function`);
				}
			}
			return this;
		},
		on : function(e, ...f) {
			if(typeof e == 'string') {
				for(let i = 0; i < this.length; i++) {
					for(let fn of f) {
						if(typeof fn == 'function')
							this[i].addEventListener(e, fn, false);
						else
							throw new TypeError(`${fn} is not a valid function`);
					}
				}
			} else
				throw new TypeError(`${e} is not a valid string event`);
			return this;
		},
		css : function(k, v) {
			if(typeof k == 'string') {
				if(v) {
					if(typeof v == 'string') {
						for(let i = 0; i < this.length; i++)
							this[i].style[k] = v;
					} else
						throw new TypeError(`${v} is not a valid string css value`);
				} else
					return this[0].style[k];
			} else
				throw new TypeError(`${k} is not a valid string css attribute`);
			return this;
		},
		addclass : function(c) {
			if(typeof c == 'string') {
				for(let i = 0; i < this.length; i++)
					this[i].classList.add(c);
			} else
				throw new TypeError(`${c} is not a valid string classname`);
			return this;
		},
		hasclass : function(c) {
			if(typeof c == 'string')
				return this[0].classList.contains(c)
			else
				throw new TypeError(`${c} is not a valid string classname`);
		},
		removeclass : function(c) {
			if(typeof c == 'string') {
				for(let i = 0; i < this.length; i++)
					this[i].classList.remove(c);
			} else
				throw new TypeError(`${c} is not a valid string classname`);
			return this;
		},
		html : function(html, a) {
			if(typeof html == 'string') {
				for(var i = 0; i < this.length; i++) {
					if(a == true)
						this[i].innerHTML += html;
					else
						this[i].innerHTML = html;
				}
				return this;
			} else if(typeof html == 'undefined')
				return this[0].innerHTML;
			
			throw new TypeError(`${html} is not a valid string markup`);
		},
		data : function(d, v) {
			if(typeof d == 'string') {
				if(typeof v == 'undefined')
					return this[0].dataset[d];
				
				d = $.camel(d.toLowerCase().split('-'));
				for(let i = 0; i < this.length; i++)
					this[i].dataset[d] = v.toString();
				return this;
			}
			throw new TypeError(`${d} is not a valid string dataname`);
		},
		text : function(text) {
			if(typeof text == 'string') {
				for(let i = 0; i < this.length; i++)
					this[i].textContent = text;
				return this;
			} else if(typeof text == 'undefined')
				return this[0].textContent;
			
			throw new TypeError(`${text} is not a valid string text`);
		},
		attr : function(k, v) {
			if(typeof k == 'string') {
				if(typeof v == 'undefined') {
					if(this[0].hasAttribute(k))
						return this[0].getAttribute(k);
					else
						return false;
				}
					
				for(let i = 0; i < this.length; i++)
					this[i].setAttribute(k, v);
				return this;				
			}
			throw new TypeError(`${k} is not a valid string attribute`);
		},
		first : function() { return this[0] },
		firstchild : function() { return this[0].firstChild },
		remove : function(e) {
			for(let i = 0; i < this.length; i++)
				this[i].removeChild(e);
			return this;
		},
		parent : function() { return this[0].parentNode },
		append : function(e) {
			if(typeof e == 'string')
				e = document.createTextNode(e);
			
			for(let i = 0; i < this.length; i++)
				this[i].appendChild(e);
			
			return this;
		},
		toggle : function(c) {
			if(typeof c == 'string') {
				for(let i = 0; i < this.length; i++) {
					if(this[i].classList.contains(c))
						this[i].classList.remove(c);
					else
						this[i].classList.add(c);
				}
				return this;
			}
			
			throw new TypeError(`${c} is not a valid string classname`);
		},
		value : function(v) {
			if(typeof v == 'string') {
				for(let i = 0; i < this.length; i++)
					this[i].value = v;
				return this;
			} else if(typeof v == 'undefined')
				return this[0].value;
			
			throw new TypeError(`${v} is not a valid string classname`);
		}
	};
	
	[
		'abort', 'afterprint', 'animationend', 'animationiteration', 'animationstart', 'appinstalled', 'auxclick', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'blur',
		'cancel', 'canplay', 'canplaythrough', 'change', 'click', 'close', 'contextmenu', 'cuechange', 'dblclick', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute',
		'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'gotpointercapture', 'hashchange',
		'input', 'invalid', 'keydown', 'keypress', 'keyup', 'languagechange', 'load', 'loadeddata', 'loadedmetadata', 'loadstart', 'lostpointercapture', 'message', 'messageerror',
		'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'offline', 'online', 'pagehide', 'pageshow', 'pause', 'play',
		'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointermove', 'pointerout', 'pointerover', 'pointerup', 'popstate', 'progress', 'ratechange',
		'rejectionhandled', 'reset', 'resize', 'scroll', 'search', 'seeked', 'seeking', 'select', 'stalled', 'storage', 'submit', 'suspend', 'timeupdate', 'toggle', 'transitionend',
		'unhandledrejection', 'unload', 'volumechange', 'waiting', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend', 'wheel'
	].forEach(function(e) {
		UNIT.prototype[e] = function(f) {
			if(typeof f == 'function') {
				this.on(e, f);
			} else {
				for(let i = 0; i < this.length; i++)
					this[i][e]();
			}
			return this;
		}
	});

	$.ready = function(f) {
		if(typeof f == 'function')
			document.addEventListener('DOMContentLoaded', f, false);
		else
			throw new TypeError(`${f} is not a valid function`);
	};
	
	$.create = function(e) { return document.createElement(e); };
	$.jump = (page) => location.href = page;
	$.reload = () => location.reload();
	
	$.pad = function(str, padStr, length, lpad) {
		for(let j = str.length; j < length; j++) {
			if(lpad)
				str = padStr + str;
			else
				str += padStr;
		}
		return str;
	};
	
	$.lpad = function(str, padStr = '0', length = 2) { return $.pad(str, padStr, length, true); };
	$.rpad = function(str, padStr = '0', length = 2) { return $.pad(str, padStr, length); };

	$.camel = function(arr) {
		if(Array.isArray(arr)) {
			let fix = arr[0].toLowerCase();
			for(let i = 1; i < arr.length; i++)
				fix += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
			return fix;
		}
		return arr;
	};
	
	$.i18n = {
		months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	};
	
	$.dateformat = function(format, timestamp = (new Date()).getTime()) {
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
}());